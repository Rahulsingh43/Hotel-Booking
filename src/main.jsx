import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './shared/Footer.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import DetailPage from './components/DetailPage.jsx'
import Home from './components/Home.jsx'
import Order from './components/Order.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter >
    {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<DetailPage />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    {/* </Router> */}
  </BrowserRouter>
  

  // </StrictMode>,
)
