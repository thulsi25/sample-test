import {
  ModusWcAvatar,
  ModusWcNavbar,
  ModusWcSelect,
} from '@trimble-oss/moduswebcomponents-react'
import { PROJECT_OPTIONS } from '../data/customer'

const NAVBAR_VISIBILITY = {
  logo: false,
  mainMenu: true,
  apps: true,
  search: false,
  searchInput: false,
  notifications: true,
  help: true,
  user: false,
  ai: false,
} as const

export function AppNavbar() {
  return (
    <ModusWcNavbar
      customClass="app-shell-navbar shrink-0"
      visibility={NAVBAR_VISIBILITY}
    >
      <div slot="start" className="sp-navbar-logo">
        <img
          alt="Trimble Connected Forest: SilvaPRO"
          height={28}
          src="/assets/silvapro-logo.svg"
        />
      </div>
      <div slot="center">
        <ModusWcSelect
          aria-label="Project Name"
          bordered={false}
          options={PROJECT_OPTIONS}
          size="md"
          value="project-name"
        />
      </div>
      <div slot="end" className="sp-navbar-end">
        <ModusWcAvatar
          alt="Signed-in user"
          imgSrc="/assets/navbar-avatar.png"
          size="md"
        />
      </div>
    </ModusWcNavbar>
  )
}
