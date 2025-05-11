import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomRoutes from './CustomRoutes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomRoutes />
  </StrictMode>,
)
