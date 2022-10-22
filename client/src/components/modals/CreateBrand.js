import React, { useState } from 'react'
import '../../styles/Modal.css'
import {createBrand} from '../../http/DeviceAPI'

const CreateBrand = ({active, setActive}) => {
    const [value, setValue] = useState('')
    const appendBrand = () => {
        createBrand(({name: value})).then(() => {
            setValue('')
            setActive()
        })
    }

    return (
        <div className={active ? 'Modal active' : 'Modal'} onClick={() => {setActive(false)}}>
            <div className='ModalContent' onClick={(event) => {event.stopPropagation()}}>
                <div className='ModalHeader'>
                    <h4>Create Brand</h4>
                    <div className='ModalClose' onClick={() => {setActive(false)}}></div>
                </div>
                <div className='ModalBody'>
                    <input className='ModalInput' placeholder='Name' value={value} onChange={event => setValue(event.target.value)}></input>
                </div>
                <div className='ModalFooter'>
                    <button className='ModalButton ModalCreate' onClick={appendBrand}>Create</button>
                    <button className='ModalButton' onClick={() => {setActive(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default CreateBrand