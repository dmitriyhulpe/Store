import React, { useContext } from 'react'

import { Context } from '../index'
import { ADMINROUTE, CARTROUTE, CATALOGROUTE, LOGINROUTE, REGISTRATIONROUTE } from '../utils/consts'
import '../styles/Navigation.css'
import { logout } from '../http/UserAPI'

import { observer } from 'mobx-react-lite'
import { NavLink, useNavigate } from 'react-router-dom'

const Navigation = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        logout()
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(CATALOGROUTE)
    }

    return (
        <div className='Navigation'>
            <div className='container'>
                <div className='Navbar'>
                    <NavLink className='NavLink' to={CATALOGROUTE}>Store</NavLink>
                    {user.isAuth ?
                    <nav className='Nav'>
                        <span
                            className='NavLink'
                            onClick={() => navigate(CARTROUTE)}>
                            Cart
                        </span>
                        {user.user.role === 'ADMIN' ?
                            <span
                                className='NavLink'
                                onClick={() => navigate(ADMINROUTE)}>
                                Admin
                            </span>
                        :''}
                        <span
                            className='NavLink'
                            onClick={() => logOut()}>
                            Logout
                        </span>
                    </nav>
                    :
                    <nav className='Nav'>
                        <span className='NavLink' onClick={() => navigate(LOGINROUTE)}>Login</span>
                        <span className='NavLink' onClick={() => navigate(REGISTRATIONROUTE)}>Registration</span>
                    </nav>
                    }
                </div>
            </div>
        </div>
    )
})

export default Navigation