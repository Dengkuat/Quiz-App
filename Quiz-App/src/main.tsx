import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ResultProvider } from './Context/Context.tsx'
import { ThemeProvider } from './Context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ResultProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ResultProvider>
    </BrowserRouter>

  </StrictMode>,
)
