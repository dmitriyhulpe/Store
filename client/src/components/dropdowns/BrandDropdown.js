import React, { useContext, useState } from 'react'
import { Context } from '../../index'

import '../../styles/Dropdown.css'

const BrandDropdown = ({selectedBrand, setSelectedBrand}) => {
    const [isActiveSelect, setActiveSelect] = useState(false)
    const {device} = useContext(Context)

    return (
        <div className="BrandDropdown">
            <div className='DropdownButton' onClick={() => setActiveSelect(!isActiveSelect)}>
                <p>{selectedBrand}</p>
                <span></span>
            </div>
            {isActiveSelect && (
                <div className='DropdownContent'>
                    {device.brands.map((brand) => {
                        return <div className='DropdownItem' onClick={() => {
                            setSelectedBrand(brand.name)
                            setActiveSelect(false)
                        }} key={brand.id}>
                            {brand.name}
                        </div>
                    })}
                </div>
            )}
        </div>
    )
}

export default BrandDropdown