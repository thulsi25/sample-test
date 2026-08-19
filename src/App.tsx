import { ModusWcButton, ModusWcThemeProvider } from '@trimble-oss/moduswebcomponents-react'
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components'
import { AppNavbar } from './components/AppNavbar'
import { SideNav } from './components/SideNav'
import { CustomerDataPage } from './pages/CustomerDataPage'

setAssetPath(`${window.location.origin}/`)

function AppShell() {
  return (
    <div className="root-viewport">
      <div className="app-shell">
        <AppNavbar />
        <div className="app-body-row">
          <SideNav />
          <main id="main-content">
            <CustomerDataPage />
            <footer className="page-footer">
              <ModusWcButton color="primary" disabled size="sm" variant="filled">
                Save Changes
              </ModusWcButton>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ModusWcThemeProvider>
      <AppShell />
    </ModusWcThemeProvider>
  )
}
