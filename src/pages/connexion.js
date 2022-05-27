import React from 'react'
import LayoutWelcome from '../components/LayoutWelcome'

const Connnexion = ({location}) => {
    return (
        <LayoutWelcome>
            <h1>Welcome to the Connnexion Page</h1>
            <a href='/welcome'> Se connecter</a>
        </LayoutWelcome>
    )
}

export default Connnexion;