// import {Link} from 'react-router-dom'
// import  './sideBar.css'
// export default function SideBar(){
//   return (
//     <aside className='sidebar'>
//       <h2 >GO to </h2>
//       <nav>
//         <section className='nav-home'>
//           <Link to='/'>Home</Link>
//         </section>
//       <section className='nav-chats'>
// <Link to='/Chats'>Chats</Link>
//       </section>
//       <section className='nav-about'>
//       <Link to='/About'>About</Link>

//       </section>
      
//       </nav>


//     </aside>
//   )
// }


import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, MessageCircle, Info, Menu } from 'lucide-react'
import './sideBar.css'

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/Chats', label: 'Chats', icon: <MessageCircle size={20} /> },
    { path: '/About', label: 'About', icon: <Info size={20} /> },
  ]

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <button className="menu-btn" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>

      {isOpen && <h2 className="sidebar-title">Navigation</h2>}

      <nav className="nav-links">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  )
}


