import { createRoot } from 'react-dom/client'
import { ModusWcThemeProvider } from '@trimble-oss/moduswebcomponents-react'
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader'
import { MokobaraModusPage } from './pages/MokobaraModusPage'
import './modus.css'

defineCustomElements()

createRoot(document.getElementById('root')!).render(
  <ModusWcThemeProvider>
    <MokobaraModusPage />
  </ModusWcThemeProvider>,
)
