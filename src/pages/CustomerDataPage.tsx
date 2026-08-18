import { useState } from 'react'
import {
  ModusWcBreadcrumbs,
  ModusWcButton,
  ModusWcIcon,
  ModusWcTabs,
  ModusWcTypography,
} from '@trimble-oss/moduswebcomponents-react'
import { CustomerDetailsCard } from '../components/CustomerDetailsCard'
import { CustomerForm } from '../components/CustomerForm'
import { PersonsCard } from '../components/PersonsCard'
import { PropertiesCard } from '../components/PropertiesCard'
import { CUSTOMER_TABS } from '../data/customer'

const BREADCRUMBS = [
  { label: 'Home', url: '#' },
  { label: 'Customers', url: '#' },
  { label: 'Hanna Green' },
]

export function CustomerDataPage() {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className="page-main">
      <ModusWcBreadcrumbs items={BREADCRUMBS} size="sm" />

      <div className="page-header-row">
        <ModusWcTypography hierarchy="h4" label="Customer Data" size="lg" weight="semibold" />
        <div className="page-header-actions">
          <ModusWcButton
            aria-label="Delete customer"
            color="tertiary"
            shape="square"
            size="sm"
            variant="borderless"
          >
            <ModusWcIcon decorative name="delete" size="sm" variant="outlined" />
          </ModusWcButton>
          <div className="page-header-divider" />
          <ModusWcButton color="tertiary" size="sm" variant="outlined">
            <ModusWcIcon decorative name="chevron_left" size="xs" variant="outlined" />
            Previous Customer
          </ModusWcButton>
          <ModusWcButton color="tertiary" size="sm" variant="outlined">
            Next Customer
            <ModusWcIcon decorative name="chevron_right" size="xs" variant="outlined" />
          </ModusWcButton>
        </div>
      </div>

      <div className="top-cards">
        <CustomerDetailsCard />
        <PropertiesCard />
        <PersonsCard />
      </div>

      <ModusWcTabs
        activeTabIndex={tabIndex}
        onTabChange={(e) => setTabIndex(e.detail.newTab)}
        size="sm"
        tabStyle="none"
        tabs={CUSTOMER_TABS}
      />

      {tabIndex === 0 ? (
        <CustomerForm />
      ) : (
        <ModusWcTypography
          hierarchy="p"
          label={`${CUSTOMER_TABS[tabIndex]?.label ?? ''} is not included in this replica.`}
          size="sm"
        />
      )}
    </div>
  )
}
