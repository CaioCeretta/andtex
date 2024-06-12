import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CategoriesProvider } from './contexts/Categories.context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </React.StrictMode>,
)
