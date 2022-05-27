import React from 'react'
import { Link } from 'gatsby'
import '../styles/Layout.css'
import logo from '../assets/logo.png'

const Layout = ({children}) => {
    return (
        
        <>
            <div className="fw-banner">
                <nav>
                    <Link to='/welcome'><img src={logo} alt='FullWeek' className='fw-logo' /></Link>
                    <Link to='/profil'>Profil</Link>
                    <Link to='/calendar'>Calendrier</Link>
                    <Link to='/invitations'>Invitations</Link>
                    <Link to='/about'>A propos</Link>
                    <Link to='/'>Déconnexion</Link>
                </nav>
            </div>
            
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout