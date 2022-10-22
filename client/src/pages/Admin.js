import React, { useState } from 'react'
import '../styles/Admin.css'

import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
    const [typeActive, setTypeActive] = useState(false)
    const [brandActive, setBrandActive] = useState(false)
    const [deviceActive, setDeviceActive] = useState(false)

    return (
        <div className='container'>
            <div className='Admin'>
                <button 
                    className='AdminButton'
                    onClick={() => {setTypeActive(true)}
                    }>
                    Create Type
                </button>
                <button 
                    className='AdminButton'
                    onClick={() => {setBrandActive(true)
                    }}>
                    Create Brand
                </button>
                <button 
                    className='AdminButton'
                    onClick={() => {setDeviceActive(true)
                    }}>
                    Create Device
                </button>
            </div>
            <CreateType active={typeActive} setActive={setTypeActive}></CreateType>
            <CreateBrand active={brandActive} setActive={setBrandActive}></CreateBrand>
            <CreateDevice active={deviceActive} setActive={setDeviceActive}></CreateDevice>
        </div>
    )
}

export default Admin