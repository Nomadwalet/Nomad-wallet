import React from 'react'
import ReactDOM from 'react-dom/client'
import NomadWalletApp from './App.jsx'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <NomadWalletApp />
    </React.StrictMode>
  )
}
