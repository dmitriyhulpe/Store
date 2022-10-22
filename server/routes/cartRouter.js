const Router = require('express')
const router = new Router()

const cartController = require('../controllers/cartController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/', authMiddleware, cartController.order)
router.get('/', authMiddleware, cartController.receive)
router.delete('/', authMiddleware, cartController.remove)

module.exports = router