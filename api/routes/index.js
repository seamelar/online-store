const Router = require('express')
const router = new Router()
const entityRouter = require('./entityRouter')
const userRouter = require('./userRouter')
const positionRouter = require('./positionRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/position', positionRouter)
router.use('/entity', entityRouter)

module.exports = router