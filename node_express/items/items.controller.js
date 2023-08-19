const path = require('path')
const fs = require('fs')

const dbpath = path.join(__dirname, 'db','items.json')

const getAllItems = (req, res) => {
     fs.readFile(dbpath,'utf-8', (err, data) => {
        if(err){
            res.status(500).json({
                data: null,
                message: 'Error occured'
            })

        } else {
            res.status(200).json({
                data: JSON.parse(data),
                message: 'Items retrieved successfully'
            })
        }
       
     })
}

const getOneItem = (req, res) => {
    const id = req.params.id
    fs.readFile(dbpath, 'utf-8', (err, data) => {
        if(err){
            res.status(500).json({
                data: null,
                message: 'An error occured'
            })
        } else {
            const items = JSON.parse(data)
            const itemIndex = items.findIndex(item => item.id == id)

            if(itemIndex == -1){
                res.status(404).json({
                    data: null,
                    message: "Item not found."
                })
                return
            }

            res.status(200).json({
                data: items[itemIndex],
                message: "Item retrieved successfully."
            })
        }
    })
}

const createItem = (req, res) => {
    fs.readFile(dbpath, 'utf-8', (err, data) => {
        const newItem = req.body
        if(err){
            res.status(500).json({
                data: null,
                message: 'An error occured'
            })
        } else {
            const items = JSON.parse(data)
            newItem.id = items.length + 1
            items.push(newItem)

            fs.writeFile(dbpath, JSON.stringify(items), (err)=> {
                if(err){
                    res.send(500).json({
                        data: null,
                        message: "An error occured"
                    })
                    return
                }
            })

            res.status(200).json({
                data: newItem,
                message: "Item created successfully."
            })
        }
    })
}


const updateItem = (req, res) => {
    fs.readFile(dbpath, 'utf-8', (err, data) => {
        const id = req.params.id
        const newData = req.body
        if(err){
            res.status(500).json({
                data: null,
                message: 'An error occured'
            })
        } else {
            const items = JSON.parse(data)
            const itemIndex = items.findIndex((item) => item.id == parseInt(id))
            if(itemIndex == -1){
                res.status(404).json({
                    data: null,
                    message: "Item not found."
                })

                return
            }
            items[itemIndex] = {...items[itemIndex], ...newData}


            fs.writeFile(dbpath, JSON.stringify(items), (err)=> {
                if(err){
                    res.send(500).json({
                        data: null,
                        message: "An error occured"
                    })
                    return
                }
            })

            res.status(200).json({
                data: items[itemIndex],
                message: "Item updated successfully."
            })
        }
    })
}


const deleteItem = (req, res) => {
    fs.readFile(dbpath, 'utf-8', (err, data) => {
        const id = req.params.id
        if(err){
            res.status(500).json({
                data: null,
                message: 'An error occured'
            })
        } else {
            const items = JSON.parse(data)
            const itemIndex = items.findIndex((item) => item.id == parseInt(id))
            const itemToDelete = items[itemIndex]
            if(itemIndex == -1){
                res.status(404).json({
                    data: null,
                    message: "Item not found."
                })

                return
            }
            items.splice(itemIndex, 1)


            fs.writeFile(dbpath, JSON.stringify(items), (err)=> {
                if(err){
                    res.send(500).json({
                        data: null,
                        message: "An error occured"
                    })
                    return
                }
            })

            res.status(200).json({
                data: itemToDelete,
                message: "Item deleted successfully."
            })
        }
    })
}




module.exports = {
    getAllItems,
    getOneItem,
    createItem,
    updateItem,
    deleteItem
}