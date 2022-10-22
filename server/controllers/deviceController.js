const uuid = require('uuid')
const { resolve } = require('path')
const path = require('path')

const { Device, DeviceInformation } = require('../models/models')
const ApiError = require('../error/ApiError')

const absolutePath = resolve('static');

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, information} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + '.jpg'
            image.mv(path.join(absolutePath, fileName))
            const device = await Device.create({name, price, brandId, typeId, image: fileName})

            if (information) {
                information = JSON.parse(information)
                information.forEach(element => {
                    DeviceInformation.create({
                        title: element.title,
                        description: element.description,
                        deviceId: device.id
                    })
                });
            }

            return res.json(device)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async receiveMany(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let devices

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }

        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }

        if (!brandId && typeId) {
            devices = await Device.finfindAndCountAlldAll({where:{typeId}, limit, offset})
        }

        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{brandId, typeId}, limit, offset})
        }

        return res.json(devices)
    }

    async receiveOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {where: {id}, include: [{model: DeviceInformation, as: 'information'}]}
        )
        return res.json(device)
    }

    async remove(req, res) {
        const {id} = req.body

        const device = await Device.destroy(
            {where: {id}}
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()