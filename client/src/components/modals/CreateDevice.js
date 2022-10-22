import React, { useContext, useState, useEffect } from 'react'

import '../../styles/Modal.css'

import TypeDropdown from '../dropdowns/TypeDropdown'
import BrandDropdown from '../dropdowns/BrandDropdown'
import { Context } from '../../index'

import { fetchTypes, fetchBrands, createDevice } from '../../http/DeviceAPI'
import { observer } from 'mobx-react-lite'

const CreateDevice = observer(({active, setActive}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [selectedType, setSelectedType] = useState('Type')
    const [selectedBrand, setSelectedBrand] = useState('Brand')
    const [information, setInformation] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))   
        fetchBrands().then(data => device.setBrands(data))   
    })

    const createInformation = () => {
        setInformation([...information, {title: '', description: '', number: Date.now()}])
    }
     
    const removeInformation = (number) => {
        setInformation(information.filter(index => index.number !== number))
    }

    const selectFile = (event) => {
        setFile(event.target.files[0])
    }

    const changeInformation = (key, value, number) => {
        setInformation(information.map(index => index.number === number ? {...index, [key]: value} : index))
    }

    const appendDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('image', file)
        formData.append('typeId', device.selectedType.id)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('information', JSON.stringify(information))
        createDevice(formData).then(() => setActive(false))

    }

    return (
        <div className={active ? 'Modal active' : 'Modal'} onClick={() => {setActive(false)}}>
            <div className='ModalContent' onClick={(event) => {event.stopPropagation()}}>
                <div className='ModalHeader'>
                    <h4>Create Device</h4>
                    <div className='ModalClose' onClick={() => {setActive(false)}}></div>
                </div>
                <div className='ModalBody'>
                    <div className='ModalRow'>
                        <TypeDropdown selectedType={selectedType} setSelectedType={setSelectedType}></TypeDropdown>
                        <BrandDropdown selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand}></BrandDropdown>
                    </div>
                    <input className='ModalInput' placeholder='Name' value={name} onChange={(event) => {setName(event.target.value)}}></input>
                    <input className='ModalInput' placeholder='Price' value={price} onChange={(event) => {setPrice(Number(event.target.value))}}></input>
                    <div className='ModalFileInput'>
                        <input type='file' onChange={selectFile}></input>
                        <div className='ModalFileButton'>Upload Files</div>
                    </div>
                    <button
                        className='ModalButton ModalCreate'
                        onClick={createInformation}
                        >
                        Create Property
                    </button>
                    {
                        information.map((index) => {
                        return (
                            <div className='ModalRow' key={index.number}>
                                <input className='ModalInput' placeholder='Property' value={index.title} onChange={(event) => {changeInformation('title', event.target.value, index.number)}}></input>
                                <input className='ModalInput' placeholder='Description' value={index.description} onChange={(event) => {changeInformation('description', event.target.value, index.number)}}></input>
                                <button className='ModalButton' onClick={() => {removeInformation(index.number)}}>Remove</button>
                            </div>
                        )})
                    }
                </div>
                <div className='ModalFooter'>
                    <button className='ModalButton ModalCreate' onClick={appendDevice}>Create</button>
                    <button className='ModalButton' onClick={() => {setActive(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
})

export default CreateDevice