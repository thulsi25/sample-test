import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const BASE_URL = 'https://mokobara.com';
const OUTPUT_DIR = join(process.cwd(), 'scraped', 'mokobara');

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

async function fetchAllProducts() {
  const products = [];
  let page = 1;

  while (true) {
    const data = await fetchJson(`${BASE_URL}/products.json?limit=250&page=${page}`);
    if (!data.products?.length) break;
    products.push(...data.products);
    if (data.products.length < 250) break;
    page += 1;
  }

  return products;
}

async function fetchAllCollections() {
  const collections = [];
  let page = 1;

  while (true) {
    const data = await fetchJson(`${BASE_URL}/collections.json?limit=250&page=${page}`);
    if (!data.collections?.length) break;
    collections.push(...data.collections);
    if (data.collections.length < 250) break;
    page += 1;
  }

  return collections;
}

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function normalizeProduct(product) {
  const variants = product.variants.map((v) => ({
    id: v.id,
    title: v.title,
    sku: v.sku,
    price: Number(v.price),
    compareAtPrice: v.compare_at_price ? Number(v.compare_at_price) : null,
    available: v.available,
    option1: v.option1,
    option2: v.option2,
    option3: v.option3,
    image: v.featured_image?.src ?? null,
  }));

  const minPrice = Math.min(...variants.map((v) => v.price));
  const maxPrice = Math.max(...variants.map((v) => v.price));
  const anyAvailable = variants.some((v) => v.available);

  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    url: `${BASE_URL}/products/${product.handle}`,
    vendor: product.vendor,
    productType: product.product_type,
    tags: product.tags,
    description: stripHtml(product.body_html),
    publishedAt: product.published_at,
    updatedAt: product.updated_at,
    minPrice,
    maxPrice,
    inStock: anyAvailable,
    colors: [...new Set(variants.map((v) => v.option1).filter(Boolean))],
    variantCount: variants.length,
    variants,
    images: product.images.map((img) => img.src),
    primaryImage: product.images[0]?.src ?? null,
  };
}

function toCsv(rows) {
  const headers = [
    'id',
    'title',
    'handle',
    'url',
    'productType',
    'minPrice',
    'maxPrice',
    'inStock',
    'colors',
    'variantCount',
    'tags',
    'primaryImage',
  ];

  const escape = (value) => {
    const str = String(value ?? '');
    return str.includes(',') || str.includes('"') || str.includes('\n')
      ? `"${str.replace(/"/g, '""')}"`
      : str;
  };

  const lines = [headers.join(',')];
  for (const row of rows) {
    lines.push(
      headers
        .map((key) => {
          if (key === 'colors') return escape(row.colors.join(' | '));
          if (key === 'tags') return escape(row.tags.join(' | '));
          return escape(row[key]);
        })
        .join(','),
    );
  }
  return lines.join('\n');
}

async function main() {
  console.log('Scraping mokobara.com...');

  const [rawProducts, collections] = await Promise.all([
    fetchAllProducts(),
    fetchAllCollections(),
  ]);

  const products = rawProducts.map(normalizeProduct);

  const summary = {
    scrapedAt: new Date().toISOString(),
    source: BASE_URL,
    totalProducts: products.length,
    totalCollections: collections.length,
    inStockProducts: products.filter((p) => p.inStock).length,
    soldOutProducts: products.filter((p) => !p.inStock).length,
    productTypes: Object.fromEntries(
      [...new Set(products.map((p) => p.productType))].map((type) => [
        type,
        products.filter((p) => p.productType === type).length,
      ]),
    ),
    navigation: [
      'Luggage',
      'Backpacks and Briefcases',
      'Totes',
      'Slings and Crossbodies',
      'Accessories',
      'Wallets',
      'Gift Card',
      'Clearance Sale',
    ],
    collections: collections.map((c) => ({
      id: c.id,
      title: c.title,
      handle: c.handle,
      url: `${BASE_URL}/collections/${c.handle}`,
      productsCount: c.products_count,
      description: stripHtml(c.description),
      image: c.image?.src ?? null,
    })),
  };

  await mkdir(OUTPUT_DIR, { recursive: true });

  await Promise.all([
    writeFile(join(OUTPUT_DIR, 'products.json'), JSON.stringify(products, null, 2)),
    writeFile(join(OUTPUT_DIR, 'products.csv'), toCsv(products)),
    writeFile(join(OUTPUT_DIR, 'collections.json'), JSON.stringify(summary.collections, null, 2)),
    writeFile(join(OUTPUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2)),
  ]);

  console.log(`Saved ${products.length} products and ${collections.length} collections to ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
