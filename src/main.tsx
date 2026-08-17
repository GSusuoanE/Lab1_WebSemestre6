import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Primer from './Primer.tsx'
import Tercer from './assets/Tercer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tercer />
  </StrictMode>,
)
