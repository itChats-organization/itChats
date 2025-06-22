import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './pages/home'
import Navbar from './components/navBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar'
import Chats from './pages/Chats'
export default function App(){

return(
  <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/chats" element={<Chats />} />
    </Routes>
  </Router>
)

}
