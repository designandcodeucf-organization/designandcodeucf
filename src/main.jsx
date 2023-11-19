import React from 'react'
import ReactDOM from 'react-dom/client'
import Events from './pages/Events.jsx'
import Contact from './pages/ContactPage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Base from './pages/Base.jsx'
import PageNotFound from './pages/PageNotFound.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
