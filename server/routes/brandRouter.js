const Router = require('express')
const router = new Router()

const brandController = require('../controllers/brandController')
const checkRole = require('../middlewares/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.receive)
router.delete('/', checkRole('ADMIN'), brandController.remove)

module.exports = router