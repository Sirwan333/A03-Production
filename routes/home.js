var express = require('express')
var router = express.Router()

router.get('/', require('../controllers/homeController').index)

module.exports = router