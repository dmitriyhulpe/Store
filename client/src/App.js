import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'

import { Context } from './index'
import AppRouter from './components/AppRouter'
import Navigation from './components/Navigation';
import { check } from './http/UserAPI';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then((data) => {
      user.setUser(data)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <AppRouter></AppRouter>
    </BrowserRouter>
  )
})

export default App