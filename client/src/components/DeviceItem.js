import React from 'react'
import '../styles/DeviceItem.css'

import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'  

import { REACTAPI, DEVICEROUTE } from '../utils/consts'

const DeviceItem = observer(({device}) => {
    const navigate = useNavigate ()
    return (
        <div className='DeviceItem' onClick={() => {navigate(DEVICEROUTE + '/' + device.id)}}>
            <img src={REACTAPI + '/' + device.image} height={150} alt={device}/>
            <h3 className='DeviceItemName'>{device.name}</h3>
        </div>
    )
})

export default DeviceItem