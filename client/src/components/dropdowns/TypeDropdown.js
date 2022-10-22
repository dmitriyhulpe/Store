import React, { useContext, useState } from 'react'
import { Context } from '../../index'

import '../../styles/Dropdown.css'

const TypeDropdown = ({selectedType, setSelectedType}) => {
    const [isActiveSelect, setActiveSelect] = useState(false)
    const {device} = useContext(Context)

    return (
        <div className="TypeDropdown">
            <div className='DropdownButton' onClick={() => setActiveSelect(!isActiveSelect)}>
                <p>{selectedType}</p>
                <span></span>
            </div>
            {isActiveSelect && (
                <div className='DropdownContent'>
                    {device.types.map((type) => {
                        return <div className='DropdownItem' onClick={() => {
                            setSelectedType(type.name)
                            setActiveSelect(false)
                        }} key={type.id}>
                            {type.name}
                        </div>
                    })}
                </div>
            )}
        </div>
    )
}

export default TypeDropdown