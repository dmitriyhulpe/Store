import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import Auth from './pages/Auth'
import Device from './pages/Device'

import { ADMINROUTE, CARTROUTE, CATALOGROUTE, DEVICEROUTE, LOGINROUTE, REGISTRATIONROUTE } from './utils/consts'

export const authRoutes = [
    {
        path: CARTROUTE,
        Component: Cart
    }
]

export const manageRoutes = [
    {
        path: ADMINROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: CATALOGROUTE,
        Component: Catalog
    },

    {
        path: LOGINROUTE,
        Component: Auth
    },

    {
        path: REGISTRATIONROUTE,
        Component: Auth
    },

    {
        path: DEVICEROUTE + '/:id',
        Component: Device
    }
]