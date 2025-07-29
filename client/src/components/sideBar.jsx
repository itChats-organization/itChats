
// SideBar.jsx
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
      <div className="sidebar-header">
        <button className="menu-btn" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        {isOpen && <h2 className="sidebar-title">itChats</h2>}
      </div>

      <nav className="nav-links">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {isOpen && <span className="nav-label">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

