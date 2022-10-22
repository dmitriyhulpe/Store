import React, { useEffect, useState } from 'react'
import '../styles/Device.css'

import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'

import { fetchDevice } from '../http/DeviceAPI'
import { REACTAPI } from '../utils/consts'

const Device = observer(() => {
    const [device, setDevice] = useState({information: []})
    const {id} = useParams()

    useEffect(() => {
        fetchDevice(id).then(data => {
            setDevice(data)
        })
    })

    return (
        <div className='container'>
            <div className='Device'>
                <img width={100} alt={device} src={REACTAPI + '/' + device.image} />
                <div className='DeviceColumn'>
                    <h3 className='DeviceName'>{device.name}</h3>
                    <ul>
                        {device.information.map(information =>
                            <li key={information.id}>
                                {information.title}: {information.description}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
})

export default Device