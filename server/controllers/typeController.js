const { Type } = require('../models/models')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async receive(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async remove(req, res) {
        const {name} = req.body

        const type = await Type.destroy(
            {where: {name}}
        )
        return res.json(type)
    }
}

module.exports = new TypeController()