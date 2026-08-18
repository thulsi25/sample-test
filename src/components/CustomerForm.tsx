import { useState } from 'react'
import {
  ModusWcCard,
  ModusWcCheckbox,
  ModusWcRadio,
  ModusWcSelect,
  ModusWcTextInput,
  ModusWcTypography,
} from '@trimble-oss/moduswebcomponents-react'
import {
  COUNTRY_CODE_OPTIONS,
  CUSTOMER_STATUS_OPTIONS,
  CUSTOMER_TYPE_OPTIONS,
  LANGUAGE_OPTIONS,
} from '../data/customer'
import { readInputChecked, readInputString } from '../utils/modusFormEvents'

export function CustomerForm() {
  const [name, setName] = useState('Hanna Green')
  const [bidPid, setBidPid] = useState('')
  const [status, setStatus] = useState('active')
  const [type, setType] = useState('private-forest-owner')
  const [language, setLanguage] = useState('fi')
  const [email, setEmail] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [phone, setPhone] = useState('')
  const [workNumber, setWorkNumber] = useState('')
  const [responsible, setResponsible] = useState('')
  const [supplierGroup, setSupplierGroup] = useState('')
  const [source, setSource] = useState('')
  const [authorisation, setAuthorisation] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [additional, setAdditional] = useState('')
  const [sameAsContact, setSameAsContact] = useState(false)

  return (
    <div className="form-panel">
      <ModusWcCard bordered={false} customClass="section-card">
        <div className="form-section">
          <ModusWcTypography hierarchy="h5" label="Basic Data" size="sm" weight="semibold" />
          <div className="form-grid">
            <div className="form-span-2">
              <ModusWcTextInput
                label="Name"
                onInputChange={(e: CustomEvent) => setName(readInputString(e))}
                required
                size="md"
                value={name}
              />
            </div>
            <div />
            <div />
            <ModusWcTextInput
              label="BID / PID"
              onInputChange={(e: CustomEvent) => setBidPid(readInputString(e))}
              size="md"
              value={bidPid}
            />
            <ModusWcSelect
              label="Customer Status"
              onInputChange={(e: CustomEvent) => setStatus(readInputString(e))}
              options={CUSTOMER_STATUS_OPTIONS}
              size="md"
              value={status}
            />
            <ModusWcSelect
              label="Customer Type"
              onInputChange={(e: CustomEvent) => setType(readInputString(e))}
              options={CUSTOMER_TYPE_OPTIONS}
              size="md"
              value={type}
            />
            <ModusWcSelect
              label="Language"
              onInputChange={(e: CustomEvent) => setLanguage(readInputString(e))}
              options={LANGUAGE_OPTIONS}
              size="md"
              value={language}
            />
            <ModusWcTextInput
              label="Email"
              onInputChange={(e: CustomEvent) => setEmail(readInputString(e))}
              size="md"
              type="email"
              value={email}
            />
            <div className="field-stack">
              <ModusWcTypography hierarchy="p" label="Phone Number" size="xs" weight="semibold" />
              <div className="phone-field">
                <ModusWcSelect
                  aria-label="Country code"
                  customClass="phone-code"
                  onInputChange={(e: CustomEvent) => setCountryCode(readInputString(e))}
                  options={COUNTRY_CODE_OPTIONS}
                  size="md"
                  value={countryCode}
                />
                <ModusWcTextInput
                  aria-label="Phone Number"
                  customClass="phone-number"
                  onInputChange={(e: CustomEvent) => setPhone(readInputString(e))}
                  size="md"
                  value={phone}
                />
              </div>
            </div>
            <ModusWcTextInput
              label="Work Number"
              onInputChange={(e: CustomEvent) => setWorkNumber(readInputString(e))}
              size="md"
              value={workNumber}
            />
            <div />
            <ModusWcSelect
              label="Responsible"
              onInputChange={(e: CustomEvent) => setResponsible(readInputString(e))}
              options={[{ label: '', value: '' }]}
              size="md"
              value={responsible}
            />
            <ModusWcSelect
              label="Supplier Group"
              onInputChange={(e: CustomEvent) => setSupplierGroup(readInputString(e))}
              options={[{ label: '', value: '' }]}
              size="md"
              value={supplierGroup}
            />
            <ModusWcSelect
              label="Source of Customer"
              onInputChange={(e: CustomEvent) => setSource(readInputString(e))}
              options={[{ label: '', value: '' }]}
              size="md"
              value={source}
            />
            <div className="field-stack">
              <ModusWcTypography
                hierarchy="p"
                label="Stand information authorisation"
                size="xs"
                weight="semibold"
              />
              <div className="radio-row">
                <ModusWcRadio
                  label="Yes"
                  name="stand-authorisation"
                  onInputChange={() => setAuthorisation('yes')}
                  size="sm"
                  value={authorisation === 'yes'}
                />
                <ModusWcRadio
                  label="No"
                  name="stand-authorisation"
                  onInputChange={() => setAuthorisation('no')}
                  size="sm"
                  value={authorisation === 'no'}
                />
              </div>
            </div>
          </div>
        </div>
      </ModusWcCard>

      <ModusWcCard bordered={false} customClass="section-card">
        <div className="form-section">
          <ModusWcTypography hierarchy="h5" label="Contact Address" size="sm" weight="semibold" />
          <div className="form-grid">
            <div className="form-span-2">
              <ModusWcTextInput
                label="Address"
                onInputChange={(e: CustomEvent) => setAddress(readInputString(e))}
                size="md"
                value={address}
              />
            </div>
            <div />
            <div />
            <ModusWcTextInput
              label="Postal Code"
              onInputChange={(e: CustomEvent) => setPostalCode(readInputString(e))}
              size="md"
              value={postalCode}
            />
            <ModusWcTextInput
              label="City"
              onInputChange={(e: CustomEvent) => setCity(readInputString(e))}
              size="md"
              value={city}
            />
            <ModusWcTextInput
              label="Country"
              onInputChange={(e: CustomEvent) => setCountry(readInputString(e))}
              size="md"
              value={country}
            />
            <div />
            <ModusWcTextInput
              label="Region"
              onInputChange={(e: CustomEvent) => setRegion(readInputString(e))}
              size="md"
              value={region}
            />
            <ModusWcTextInput
              label="Additional Address"
              onInputChange={(e: CustomEvent) => setAdditional(readInputString(e))}
              size="md"
              value={additional}
            />
          </div>
        </div>
      </ModusWcCard>

      <ModusWcCard bordered={false} customClass="section-card">
        <div className="form-section">
          <ModusWcTypography hierarchy="h5" label="Billing Address" size="sm" weight="semibold" />
          <ModusWcCheckbox
            label="Same as Contact Address"
            onInputChange={(e: CustomEvent) => setSameAsContact(readInputChecked(e))}
            size="sm"
            value={sameAsContact}
          />
        </div>
      </ModusWcCard>
    </div>
  )
}
