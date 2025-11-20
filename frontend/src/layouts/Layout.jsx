import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import '../styles/layouts/Layout.css'

const Layout = ({ children }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children || <Outlet />}
      </main>
      {!isHomePage && <Footer />}
    </div>
  )
}

export default Layout

