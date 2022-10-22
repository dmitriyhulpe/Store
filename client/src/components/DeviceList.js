import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from '../index'
import '../styles/DeviceList.css'

import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className='DeviceList'>
            {device.devices.map((device) => {
                return <DeviceItem key={device.id} device={device}></DeviceItem>
            })}
        </div>
    )
})

export default DeviceList