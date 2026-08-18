import { useState } from 'react'
import {
  bestsellers,
  discountPercent,
  footer,
  formatPrice,
  hero,
  navLinks,
  newArrivals,
  promo,
  story,
  stores,
  swatchColor,
  type HomepageProduct,
  type ProductBadge,
} from '../data/homepage'

function Badge({ badge }: { badge?: ProductBadge }) {
  if (!badge) return null

  const styles: Record<ProductBadge, string> = {
    HOT: 'bg-orange-500 text-white',
    NEW: 'bg-emerald-700 text-white',
    'MUST HAVE': 'bg-neutral-900 text-white',
    'SOLD OUT': 'bg-neutral-800 text-white',
  }

  return (
    <span className={`rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${styles[badge]}`}>
      {badge}
    </span>
  )
}

function ProductCard({ product }: { product: HomepageProduct }) {
  const discount = discountPercent(product.price, product.compareAt)

  return (
    <article className="group flex min-w-[160px] flex-1 flex-col sm:min-w-[180px]">
      <a href={product.url} className="relative mb-3 block aspect-[4/5] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-2 top-2 flex flex-wrap gap-1">
          <Badge badge={product.badge} />
          {discount && (
            <span className="rounded bg-red-600 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
              {discount}% off
            </span>
          )}
        </div>
      </a>

      <a href={product.url} className="mb-1 text-sm font-medium leading-snug text-neutral-900">
        {product.title}
      </a>

      <div className="mb-2 flex items-baseline gap-2">
        <span className="text-sm font-semibold text-neutral-900">{formatPrice(product.price)}</span>
        {product.compareAt && (
          <span className="text-xs text-neutral-400 line-through">{formatPrice(product.compareAt)}</span>
        )}
      </div>

      {product.colors.length > 0 && (
        <div className="flex flex-wrap items-center gap-1">
          {product.colors.map((color) => (
            <span
              key={color}
              title={color}
              className="h-4 w-4 rounded-full border border-neutral-300"
              style={{ backgroundColor: swatchColor(color) }}
            />
          ))}
          {product.extraColors > 0 && (
            <span className="text-xs text-neutral-500">+{product.extraColors}</span>
          )}
        </div>
      )}
    </article>
  )
}

function ProductRail({
  title,
  products,
}: {
  title: string
  products: HomepageProduct[]
}) {
  return (
    <section className="py-12">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">{title}</h2>
        <a href="#" className="text-sm text-neutral-600 underline-offset-4 hover:underline">
          View All
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </section>
  )
}

function StoreLocator() {
  const [city, setCity] = useState(stores.cities[0])
  const locations = stores.byCity[city] ?? []

  return (
    <section className="py-16">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
        {stores.heading}
      </p>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">{stores.subheading}</h2>
        <a href="#" className="text-sm text-neutral-600 underline-offset-4 hover:underline">
          View All Locations
        </a>
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {stores.cities.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setCity(name)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-sm transition ${
              city === name
                ? 'border-neutral-900 bg-neutral-900 text-white'
                : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <li key={location} className="border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800">
            {location}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function MokobaraPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="text-lg font-semibold tracking-tight lowercase">
            mokobara
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-sm text-neutral-600 transition hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <button type="button" className="hover:text-neutral-900">
              Search
            </button>
            <button type="button" className="hidden hover:text-neutral-900 sm:inline">
              Account
            </button>
            <button type="button" className="hover:text-neutral-900">
              Cart
            </button>
          </div>
        </div>
      </header>

      <a href={hero.href} className="block">
        <picture>
          <source media="(max-width: 768px)" srcSet={hero.mobileImage} />
          <img src={hero.image} alt={hero.alt} className="h-[52vw] max-h-[640px] min-h-[280px] w-full object-cover" />
        </picture>
      </a>

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <ProductRail title="Bestsellers" products={bestsellers} />

        <section className="grid items-center gap-8 border-y border-neutral-100 py-16 md:grid-cols-2">
          <img src={story.image} alt="" className="aspect-[4/5] w-full object-cover" />
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">{story.heading}</h2>
            <p className="max-w-md text-neutral-600">{story.body}</p>
          </div>
        </section>

        <ProductRail title="New Arrivals" products={newArrivals} />
      </main>

      <section className="relative mt-4 min-h-[420px] overflow-hidden bg-neutral-900 text-white">
        <img src={promo.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col justify-end px-4 py-16 sm:px-6">
          <p className="mb-2 text-sm uppercase tracking-[0.2em]">{promo.eyebrow}</p>
          <h2 className="mb-6 max-w-md text-4xl font-semibold tracking-tight">{promo.heading}</h2>
          <a
            href={promo.href}
            className="inline-flex w-fit border border-white px-5 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-neutral-900"
          >
            {promo.cta}
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <StoreLocator />
      </div>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-2xl font-semibold">{footer.newsletterHeading}</p>
            <p className="mb-4 max-w-md text-sm text-neutral-600">{footer.newsletterBody}</p>
            {subscribed ? (
              <p className="text-sm text-emerald-700">Thanks — this is a local study page, so nothing was sent.</p>
            ) : (
              <form
                className="flex max-w-md gap-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubscribed(true)
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter Email Address"
                  className="flex-1 border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900"
                />
                <button type="submit" className="bg-neutral-900 px-4 py-2 text-sm text-white">
                  Join
                </button>
              </form>
            )}
          </div>

          <div>
            <p className="mb-3 text-sm text-neutral-600">{footer.support}</p>
            <p className="mb-6 text-sm text-neutral-600">{footer.corporate}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-neutral-700 underline-offset-4 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="border-t border-neutral-200 px-4 py-4 text-center text-xs text-neutral-500">
          Local study recreation of the public Mokobara landing page. Not affiliated, no checkout.
        </p>
      </footer>
    </div>
  )
}
