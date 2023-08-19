const express = require('express')
const midWare = require('./item.middleware')
const controller = require('./items.controller')

const router = express.Router()


// get all items
router.get('/', midWare.itemMiddleware, controller.getAllItems)

// get one item with id 
router.get('/:id', midWare.itemMiddleware, controller.getOneItem)

// create new item
router.post('/create', midWare.itemMiddleware, controller.createItem)


// update item with id
router.put('/:id', midWare.itemMiddleware, controller.updateItem)


// delete item
router.delete('/:id', midWare.itemMiddleware, controller.deleteItem)


module.exports = router;