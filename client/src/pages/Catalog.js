import React, { useContext, useEffect } from 'react'
import BrandBar from '../components/BrandBar'

import TypeBar from '../components/TypeBar'
import DeviceList from '../components/DeviceList'
import '../styles/Catalog.css'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchTypes, fetchBrands, fetchDevices } from '../http/DeviceAPI'

const Catalog = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))   
        fetchBrands().then(data => device.setBrands(data))   
        fetchDevices().then(data => device.setDevices(data.rows))   
    })
    
    return (
        <div className='container'>
            <div className='CatalogWrapper'>
                <TypeBar></TypeBar>
                <div className='CatalogColumn'>
                    <BrandBar></BrandBar>
                    <DeviceList></DeviceList>
                </div>
            </div>
        </div>
    )
})

export default Catalog