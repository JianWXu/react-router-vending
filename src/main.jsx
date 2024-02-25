import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VendingMachine from './VendingMachine.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VendingMachine />
  </React.StrictMode>,
)
