import { ModusWcBadge, ModusWcButton, ModusWcCard, ModusWcTypography } from '@trimble-oss/moduswebcomponents-react'
import { PERSONS } from '../data/customer'

export function PersonsCard() {
  return (
    <ModusWcCard bordered={false} customClass="section-card">
      <ModusWcTypography
        customClass="section-title"
        hierarchy="h6"
        label="PERSONS"
        size="md"
        weight="semibold"
      />
      <div className="person-list">
        {PERSONS.map((person) => (
          <div className="person-item" key={person.name}>
            <div className="person-copy">
              <div className="person-name-row">
                <ModusWcTypography hierarchy="h4" label={person.name} size="lg" weight="semibold" />
                <ModusWcBadge color="primary" size="sm">
                  Active
                </ModusWcBadge>
              </div>
              <ModusWcTypography hierarchy="p" label={person.address} size="sm" />
            </div>
            <div className="ownership-block">
              <ModusWcTypography hierarchy="p" label="Ownership" size="xs" />
              <div className="ownership-value">
                <img alt="" height={32} src={person.chart} width={32} />
                <span className="ownership-percent">{person.ownership}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-footer">
        <div className="card-footer-end">
          <ModusWcButton color="tertiary" size="sm" variant="outlined">
            Add Owner
          </ModusWcButton>
        </div>
      </div>
    </ModusWcCard>
  )
}
