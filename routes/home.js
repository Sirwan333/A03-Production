var express = require('express')
var router = express.Router()

router.get('/', require('../controllers/homeController').index)
router.post('/', require('../controllers/homeController').hookPost)

module.exports = router