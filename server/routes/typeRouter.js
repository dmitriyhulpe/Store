const Router = require('express')
const router = new Router()

const typeController = require('../controllers/typeController')
const checkRole = require('../middlewares/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.receive)
router.delete('/', checkRole('ADMIN'), typeController.remove)

module.exports = router