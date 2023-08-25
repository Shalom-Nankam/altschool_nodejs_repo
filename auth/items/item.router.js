const express = require('express')
const midWare = require('./item.middleware')
const controller = require('./items.controller')
const globalMidware = require('../global_middleware/global.middleware')

const router = express.Router()


// get all items
router.get('/', controller.getAllItems)

// get one item with id 
router.get('/:id', controller.getOneItem)

// create new item
router.post('/create', midWare.itemMiddleware, globalMidware.apiAuth, controller.createItem)


// update item with id
router.put('/:id', midWare.itemMiddleware,globalMidware.apiAuth,  controller.updateItem)


// delete item
router.delete('/:id', midWare.itemMiddleware, globalMidware.apiAuth, controller.deleteItem)


module.exports = router;