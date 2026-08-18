import { ModusWcButton, ModusWcCard, ModusWcTypography } from '@trimble-oss/moduswebcomponents-react'
import { PROPERTIES } from '../data/customer'

export function PropertiesCard() {
  return (
    <ModusWcCard bordered={false} customClass="section-card">
      <ModusWcTypography
        customClass="section-title"
        hierarchy="h6"
        label="PROPERTIES"
        size="md"
        weight="semibold"
      />
      <div className="property-list">
        {PROPERTIES.map((property) => (
          <div className="property-item" key={property.id}>
            <div className="property-thumb">
              <img alt="" height={40} src={property.thumb} width={40} />
            </div>
            <div className="property-copy">
              <ModusWcTypography hierarchy="h4" label={property.name} size="xl" weight="semibold" />
              <ModusWcTypography hierarchy="p" label={property.id} size="sm" />
            </div>
            <div className="property-area">
              <ModusWcTypography hierarchy="p" label="Forest Area (in ha)" size="xs" />
              <ModusWcTypography hierarchy="h5" label={property.area} size="md" weight="semibold" />
            </div>
          </div>
        ))}
      </div>
      <div className="card-footer">
        <div className="field-stack">
          <ModusWcTypography hierarchy="p" label="Total Forest Area (in ha)" size="xs" />
          <ModusWcTypography hierarchy="h5" label="976 ha" size="md" weight="semibold" />
        </div>
        <div className="card-footer-end">
          <ModusWcButton color="tertiary" size="sm" variant="filled">
            Purchase Property
          </ModusWcButton>
          <ModusWcButton color="tertiary" size="sm" variant="outlined">
            Add Property
          </ModusWcButton>
        </div>
      </div>
    </ModusWcCard>
  )
}
