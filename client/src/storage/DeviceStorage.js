import { makeAutoObservable } from 'mobx'

export default class DeviceStorage {
    constructor() {
        this.types = []
        this.brands = []
        this.devices = []
        this.selectedType = {}
        this.selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this.types = types
    }

    setBrands(brands) {
        this.brands = brands
    }

    setDevices(devices) {
        this.devices = devices
    }

    setSelectedType(type) {
        this.selectedType = type
    }

    setSelectedBrand(brand) {
        this.selectedBrand = brand
    }

    get Types() {
        return this.types
    }

    get Brands() {
        return this.brands
    }

    get Devices() {
        return this.devices
    }

    get SelectedType() {
        return this.selectedType
    }

    get SelectedBrand() {
        return this.selectedBrand
    }
}