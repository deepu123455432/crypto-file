import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CryptoContex from './CryptoContex.jsx'
import 'react-alice-carousel/lib/alice-carousel.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoContex>
    <App />
    </CryptoContex>
    
  </React.StrictMode>,
)
