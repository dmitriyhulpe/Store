import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Context } from '../index'

import { authRoutes, publicRoutes, manageRoutes } from '../routes'
import { CATALOGROUTE } from '../utils/consts'

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component/>} exact/>
            })}
            {user.user.role === 'ADMIN' && manageRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component/>} exact/>
            })}
            {publicRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} element={<Component/>} exact/>
            })}
            <Route path='*' element={<Navigate to={CATALOGROUTE}/>}/>
        </Routes>
    )
})

export default AppRouter