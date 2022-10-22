import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'

import {Context} from '../index'
import '../styles/TypeBar.css'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    const [select, setSelect] = useState(-1)
    
    return (
        <ul className='ListGroup'>
            {device.types.map(type => {
                return <li
                    className={(select === type.id) ? 'selected' : 'disabled'}
                    key={type.id}
                    onClick={() => {device.setSelectedType(type)
                    type.id === select ? setSelect(-1) : setSelect(type.id)
                    }}>
                    {type.name}
                </li>
            })}
        </ul>
    )
})

export default TypeBar