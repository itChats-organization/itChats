import { useEffect, useState } from 'react'
import axios from 'axios'
// import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './components/sideBar'
// import Chats from './pages/Chats'
// import About from './pages/About'
import MainContent from './components/mainContent'
import './app.css'
export default function App(){

return(
  <Router>
    <section className='layout'>
        <SideBar/>
        
      <section className='main-content'>
        <MainContent/>
      </section>
    </section>

  </Router>
  
)

}
