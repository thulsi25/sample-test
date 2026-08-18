import { ModusWcAvatar, ModusWcBadge, ModusWcCard, ModusWcTypography } from '@trimble-oss/moduswebcomponents-react'

export function CustomerDetailsCard() {
  return (
    <ModusWcCard bordered={false} customClass="section-card">
      <ModusWcTypography
        customClass="section-title"
        hierarchy="h6"
        label="CUSTOMER DETAILS"
        size="md"
        weight="semibold"
      />
      <div className="customer-profile">
        <ModusWcAvatar alt="Hanna Green" initials="H" size="md" />
        <div className="customer-profile-text">
          <ModusWcTypography hierarchy="h3" label="Hanna Green" size="xl" weight="semibold" />
          <ModusWcBadge color="tertiary" size="sm">
            Private Forest Owner
          </ModusWcBadge>
        </div>
      </div>
      <div className="detail-grid">
        <div className="detail-row">
          <div className="field-stack">
            <ModusWcTypography hierarchy="p" label="Customer ID" size="xs" />
            <ModusWcTypography hierarchy="h5" label="4829010213" size="sm" weight="semibold" />
          </div>
          <div className="field-stack">
            <ModusWcTypography hierarchy="p" label="External ID" size="xs" />
            <ModusWcTypography hierarchy="h5" label="0161311-6" size="sm" weight="semibold" />
          </div>
          <div className="field-stack">
            <ModusWcTypography hierarchy="p" label="Account created" size="xs" />
            <ModusWcTypography hierarchy="h5" label="25/05/2025" size="sm" weight="semibold" />
            <ModusWcBadge color="tertiary" size="sm">
              Abby Shaw
            </ModusWcBadge>
          </div>
          <div className="field-stack">
            <ModusWcTypography hierarchy="p" label="Person Responsible" size="xs" />
            <div className="person-responsible">
              <img alt="" height={24} src="/assets/abby-shaw.png" width={24} />
              <ModusWcTypography hierarchy="h5" label="Abby Shaw" size="sm" weight="semibold" />
            </div>
          </div>
        </div>
        <div className="detail-row">
          <div className="field-stack">
            <ModusWcTypography hierarchy="p" label="Contract Status" size="xs" />
            <ModusWcTypography hierarchy="h5" label="--" size="sm" weight="semibold" />
          </div>
          <div className="field-stack">
            <ModusWcTypography hierarchy="p" label="Customer Status" size="xs" />
            <ModusWcBadge color="primary" size="sm">
              Active
            </ModusWcBadge>
          </div>
        </div>
      </div>
    </ModusWcCard>
  )
}
