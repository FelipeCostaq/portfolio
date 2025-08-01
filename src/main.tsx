import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/index.css'
import App from './pages/Home.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
