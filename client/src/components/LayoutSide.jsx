import { Outlet } from 'react-router-dom'
import SideBar from './sideBar'
// import './app.css'

const LayoutWithSidebar = () => {
  return (
    <section className='layout'>
      <SideBar />
      <section className='main-content'>
        <Outlet />
      </section>
    </section>
  )
}

export default LayoutWithSidebar