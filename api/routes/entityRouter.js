const Router = require('express')
const router = new Router()
const entityController = require('../controllers/entityController')

router.post('/', entityController.create)
router.get('/', entityController.getAll)
router.get('/:id', entityController.getOne)

module.exports = router