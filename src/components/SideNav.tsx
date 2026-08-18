import { ModusWcButton, ModusWcIcon, ModusWcThemeSwitcher } from '@trimble-oss/moduswebcomponents-react'

const NAV_ITEMS = [
  { name: 'home', label: 'Home', active: false },
  { name: 'people_group', label: 'Customers', active: true },
  { name: 'clipboard', label: 'Clipboard', active: false },
  { name: 'forestry', label: 'Forest', active: false },
  { name: 'factory', label: 'Sites', active: false },
  { name: 'person', label: 'Account', active: false },
] as const

const FOOTER_ITEMS = [
  { name: 'footprints', label: 'Sustainability' },
  { name: 'wifi', label: 'Connectivity' },
] as const

export function SideNav() {
  return (
    <nav aria-label="Main" className="side-nav">
      <div className="side-nav-items">
        {NAV_ITEMS.map((item) => (
          <div
            className={`side-nav-item${item.active ? ' side-nav-item-active' : ''}`}
            key={item.name}
          >
            <ModusWcButton
              aria-current={item.active ? 'page' : undefined}
              aria-label={item.label}
              color="tertiary"
              shape="square"
              size="sm"
              variant="borderless"
            >
              <ModusWcIcon decorative name={item.name} size="md" variant="outlined" />
            </ModusWcButton>
          </div>
        ))}
      </div>
      <div className="side-nav-footer">
        {FOOTER_ITEMS.map((item) => (
          <ModusWcButton
            aria-label={item.label}
            color="tertiary"
            key={item.name}
            shape="square"
            size="sm"
            variant="borderless"
          >
            <ModusWcIcon decorative name={item.name} size="sm" variant="outlined" />
          </ModusWcButton>
        ))}
        <ModusWcThemeSwitcher />
      </div>
    </nav>
  )
}
