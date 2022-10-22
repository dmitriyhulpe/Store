import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'

import {Context} from '../index'
import '../styles/BrandBar.css'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    const [select, setSelect] = useState(-1)

    return (
        <ul className='BrandBar'>
            {device.brands.map((brand) => {
                return <li 
                    key={brand.id}
                    onClick={()=> {device.setSelectedBrand(brand)
                    brand.id === select ? setSelect(-1) : setSelect(brand.id)
                    }}
                    className={(select === brand.id) ? 'selected' : 'disabled'}>
                    {brand.name}
                </li>
            })}
        </ul>
    )
})

export default BrandBar