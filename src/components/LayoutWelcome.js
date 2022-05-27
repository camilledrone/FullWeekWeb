import React from 'react'
import { Link } from 'gatsby'
import '../styles/Layout.css'
import logo from '../assets/logo.png'

const LayoutWelcome = ({children}) => {
    return (
        
        <>
            <div className="fw-banner">
                <nav>
                    <Link to='/'><img src={logo} alt='FullWeek' className='fw-logo' /></Link>
                    <Link to='/inscription'>S'inscrire</Link>
                    <Link to='/connexion'>Se connecter</Link>
                </nav>
            </div>
            
            <main>
                {children}
            </main>
        </>
    )
}

export default LayoutWelcome