const { Brand } = require('../models/models')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async receive(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async remove(req, res) {
        const {name} = req.body

        const brand = await Brand.destroy(
            {where: {name}}
        )
        return res.json(brand)
    }
}

module.exports = new BrandController()