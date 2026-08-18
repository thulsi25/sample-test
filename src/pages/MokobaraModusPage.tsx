import { useState } from 'react'
import {
  ModusWcBadge,
  ModusWcButton,
  ModusWcCard,
  ModusWcChip,
  ModusWcIcon,
  ModusWcLink,
  ModusWcMenu,
  ModusWcMenuItem,
  ModusWcNavbar,
  ModusWcSideNavigation,
  ModusWcTextInput,
  ModusWcThemeSwitcher,
  ModusWcTypography,
} from '@trimble-oss/moduswebcomponents-react'
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
  type HomepageProduct,
  type ProductBadge,
} from '../data/homepage'
import { readInputString } from '../utils/modusFormEvents'

const NAVBAR_VISIBILITY = {
  ai: false,
  apps: false,
  help: false,
  logo: false,
  mainMenu: true,
  notifications: false,
  search: false,
  searchInput: false,
  user: false,
} as const

const NAV_ICONS: Record<string, string> = {
  Luggage: 'folder_closed',
  'Backpacks and Briefcases': 'briefcase',
  Totes: 'shopping_cart',
  'Slings and Crossbodies': 'link',
  Accessories: 'settings',
  Wallets: 'credit_card',
  'Gift Card': 'heart',
  'Clearance Sale': 'tag',
}

function badgeColor(badge: ProductBadge) {
  if (badge === 'HOT') return 'warning' as const
  if (badge === 'NEW') return 'success' as const
  if (badge === 'MUST HAVE') return 'primary' as const
  return 'high-contrast' as const
}

function ProductCard({ product }: { product: HomepageProduct }) {
  const discount = discountPercent(product.price, product.compareAt)

  return (
    <article className="mokobara-product-card">
      <ModusWcCard bordered={false} padding="compact">
        <div slot="header">
          <a className="mokobara-product-media" href={product.url}>
            <img src={product.image} alt={product.title} loading="lazy" />
            <div className="mokobara-product-badges">
              {product.badge ? (
                <ModusWcBadge color={badgeColor(product.badge)} size="sm" variant="filled">
                  {product.badge}
                </ModusWcBadge>
              ) : null}
              {discount ? (
                <ModusWcBadge color="danger" size="sm" variant="filled">
                  {discount}% off
                </ModusWcBadge>
              ) : null}
            </div>
          </a>
        </div>
        <div slot="title">
          <ModusWcLink color="inherit" href={product.url} underline="hover">
            {product.title}
          </ModusWcLink>
        </div>
        <div slot="subtitle">
          <ModusWcTypography hierarchy="p" size="sm" weight="semibold">
            {formatPrice(product.price)}
          </ModusWcTypography>
          {product.compareAt ? (
            <ModusWcTypography hierarchy="p" size="xs">
              {formatPrice(product.compareAt)}
            </ModusWcTypography>
          ) : null}
        </div>
        {product.colors.length > 0 ? (
          <div className="mokobara-color-names">
            {product.colors.map((color) => (
              <ModusWcTypography hierarchy="p" key={color} size="xs">
                {color}
              </ModusWcTypography>
            ))}
            {product.extraColors > 0 ? (
              <ModusWcTypography hierarchy="p" size="xs">
                +{product.extraColors}
              </ModusWcTypography>
            ) : null}
          </div>
        ) : null}
      </ModusWcCard>
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
    <section className="mokobara-section py-12">
      <div className="mokobara-section-head">
        <ModusWcTypography hierarchy="h2" label={title} size="2xl" weight="semibold" />
        <ModusWcButton color="tertiary" size="sm" variant="outlined">
          View All
        </ModusWcButton>
      </div>
      <div className="mokobara-product-rail">
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
    <section className="mokobara-section py-16">
      <ModusWcTypography hierarchy="p" size="xs" weight="semibold">
        {stores.heading}
      </ModusWcTypography>
      <div className="mokobara-section-head">
        <ModusWcTypography hierarchy="h2" label={stores.subheading} size="3xl" weight="semibold" />
        <ModusWcButton color="tertiary" size="sm" variant="outlined">
          View All Locations
        </ModusWcButton>
      </div>
      <div className="mokobara-city-row">
        {stores.cities.map((name) => (
          <ModusWcChip
            active={city === name}
            key={name}
            label={name}
            onChipClick={() => setCity(name)}
            shape="rectangle"
            showRemove={false}
            size="sm"
            variant={city === name ? 'filled' : 'outline'}
          />
        ))}
      </div>
      <ul className="mokobara-store-grid">
        {locations.map((location) => (
          <li className="mokobara-store-card" key={location}>
            <ModusWcCard bordered={false} padding="compact">
              <ModusWcTypography hierarchy="p" size="sm">
                {location}
              </ModusWcTypography>
            </ModusWcCard>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function MokobaraModusPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="mokobara-shell">
      <ModusWcNavbar
        mainMenuOpen={menuOpen}
        onMainMenuOpenChange={(event) => setMenuOpen(Boolean(event.detail))}
        visibility={NAVBAR_VISIBILITY}
      >
        <div slot="start">
          <ModusWcTypography hierarchy="h1" label="mokobara" size="lg" weight="semibold" />
        </div>
        <div className="mokobara-nav-links" slot="center">
          {navLinks.map((link) => (
            <ModusWcLink color="inherit" href={link.href} key={link.label} underline="hover">
              {link.label}
            </ModusWcLink>
          ))}
        </div>
        <div className="mokobara-navbar-end" slot="end">
          <ModusWcButton
            aria-label="Search"
            color="tertiary"
            shape="square"
            size="sm"
            variant="borderless"
          >
            <ModusWcIcon decorative name="search" size="sm" />
          </ModusWcButton>
          <ModusWcButton
            aria-label="Account"
            color="tertiary"
            shape="square"
            size="sm"
            variant="borderless"
          >
            <ModusWcIcon decorative name="person" size="sm" />
          </ModusWcButton>
          <ModusWcButton
            aria-label="Cart"
            color="tertiary"
            shape="square"
            size="sm"
            variant="borderless"
          >
            <ModusWcIcon decorative name="shopping_cart" size="sm" />
          </ModusWcButton>
          <ModusWcThemeSwitcher />
        </div>
      </ModusWcNavbar>

      <div className="mokobara-shell-body">
        <div
          className="mokobara-rail"
          data-open={menuOpen ? 'true' : 'false'}
          inert={!menuOpen}
        >
          <ModusWcSideNavigation
            collapseOnClickOutside
            expanded={menuOpen}
            maxWidth="256px"
            mode="overlay"
            onExpandedChange={(event) => setMenuOpen(Boolean(event.detail))}
            targetContent="#main-content"
          >
            <ModusWcMenu aria-label="Categories" size="md">
              {navLinks.map((link) => (
                <ModusWcMenuItem
                  key={link.label}
                  label={link.label}
                  size="md"
                  value={link.label}
                >
                  <ModusWcIcon
                    decorative
                    name={NAV_ICONS[link.label] ?? 'folder'}
                    size="md"
                    slot="start-icon"
                  />
                </ModusWcMenuItem>
              ))}
            </ModusWcMenu>
          </ModusWcSideNavigation>
        </div>

        <div className="mokobara-main" id="main-content">
          <a className="mokobara-hero" href={hero.href}>
            <picture>
              <source media="(max-width: 768px)" srcSet={hero.mobileImage} />
              <img alt={hero.alt} src={hero.image} />
            </picture>
          </a>

          <ProductRail products={bestsellers} title="Bestsellers" />

          <section className="mokobara-section mokobara-story">
            <img alt="" src={story.image} />
            <div>
              <ModusWcTypography hierarchy="h2" label={story.heading} size="3xl" weight="semibold" />
              <ModusWcTypography hierarchy="p" size="md">
                {story.body}
              </ModusWcTypography>
            </div>
          </section>

          <ProductRail products={newArrivals} title="New Arrivals" />

          <section className="mokobara-promo">
            <img alt="" src={promo.image} />
            <div className="mokobara-promo-content">
              <ModusWcTypography hierarchy="p" size="sm" weight="semibold">
                {promo.eyebrow}
              </ModusWcTypography>
              <ModusWcTypography hierarchy="h2" label={promo.heading} size="4xl" weight="semibold" />
              <ModusWcButton color="primary" size="md" variant="filled">
                <ModusWcIcon decorative name="launch" size="sm" />
                {promo.cta}
              </ModusWcButton>
            </div>
          </section>

          <StoreLocator />

          <footer className="mokobara-footer">
            <div className="mokobara-footer-grid">
              <div className="mokobara-newsletter">
                <ModusWcTypography
                  hierarchy="h2"
                  label={footer.newsletterHeading}
                  size="2xl"
                  weight="semibold"
                />
                <ModusWcTypography hierarchy="p" size="sm">
                  {footer.newsletterBody}
                </ModusWcTypography>
                <ModusWcTypography hidden={!subscribed} hierarchy="p" size="sm">
                  Thanks — this is a local study page, so nothing was sent.
                </ModusWcTypography>
                <form
                  className="mokobara-newsletter-row"
                  hidden={subscribed}
                  onSubmit={(event) => {
                    event.preventDefault()
                    setSubscribed(true)
                  }}
                >
                  <ModusWcTextInput
                    bordered
                    inputId="newsletter-email"
                    label="Email"
                    onInputChange={(event) => setEmail(readInputString(event))}
                    placeholder="Enter Email Address"
                    required
                    type="email"
                    value={email}
                  />
                  <ModusWcButton
                    color="tertiary"
                    onButtonClick={() => setSubscribed(true)}
                    size="md"
                    type="submit"
                    variant="outlined"
                  >
                    Join
                  </ModusWcButton>
                </form>
              </div>
              <div>
                <ModusWcTypography hierarchy="p" size="sm">
                  {footer.support}
                </ModusWcTypography>
                <ModusWcTypography hierarchy="p" size="sm">
                  {footer.corporate}
                </ModusWcTypography>
                <div className="mokobara-footer-links">
                  {footer.links.map((link) => (
                    <ModusWcLink color="inherit" href={link.href} key={link.label} underline="hover">
                      {link.label}
                    </ModusWcLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="mokobara-footnote">
              <ModusWcTypography hierarchy="p" size="xs">
                Modus Web Components recreation of the public Mokobara landing page. Not
                affiliated, no checkout.
              </ModusWcTypography>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
