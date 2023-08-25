const express = require('express')
const userController = require('./users.controller')

const router = express.Router()

router.post('/create', userController.createUser)

router.get('/', userController.getUsers)


module.exports = router