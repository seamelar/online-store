const Router = require('express')
const router = new Router()
const positionController = require('../controllers/positionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), positionController.create)
router.get('/', positionController.getAll)

module.exports = router