const Router = require('express')
const router = new Router()

const deviceController = require('../controllers/deviceController')
const checkRole = require('../middlewares/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), deviceController.create)
router.get('/', deviceController.receiveMany)
router.get('/:id', deviceController.receiveOne)
router.delete('/', checkRole('ADMIN'), deviceController.remove)

module.exports = router