import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {observer} from 'mobx-react-lite'

import '../styles/Auth.css'
import { CATALOGROUTE, LOGINROUTE, REGISTRATIONROUTE } from '../utils/consts'

import { registration, login } from '../http/UserAPI'
import { Context } from '../index'


const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGINROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authButton = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(CATALOGROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div className='Auth'>
            <div className='AuthForm'>
                <h1 className='AuthHeading'>{isLogin ? 'Login Form' : 'Registration'}</h1>
                <input
                    className='AuthInput' 
                    placeholder="Email"
                    value={email}
                    onChange={(event) => {setEmail(event.target.value)}}>
                </input>
                <input
                    className='AuthInput'
                    placeholder="Password"
                    value={password}
                    onChange={(event) => {setPassword(event.target.value)}}
                    type="password">
                </input>
                <div className='AuthRow'>
                    {isLogin ?
                    <button className='AuthButton' onClick={authButton}>Login</button>
                    :
                    <button className='AuthButton' onClick={authButton}>Create an account</button>}
                    {isLogin ?
                    <NavLink to={REGISTRATIONROUTE}>Do not have an account?</NavLink>
                    :
                    <NavLink to={LOGINROUTE}>Already have an account?</NavLink>}
                </div>
            </div>
        </div>
    )
})

export default Auth