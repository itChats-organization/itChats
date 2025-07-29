import { useEffect, useState } from 'react'
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chats from './pages/Chats'
import About from './pages/About'
import LayoutWithSidebar from './components/LayoutSide'
import './app.css'
import LoginPage from './pages/loginPage'

export default function App(){

return(
  <Router>
    <Routes>
     <Route path="/login" element={<LoginPage />} />
     </Routes>
     <Routes>
    <Route element={<LayoutWithSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>

  </Router>
  
)

}
