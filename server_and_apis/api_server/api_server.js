const http = require('http')
const path = require('path')
const fs = require('fs')

const dbPath = path.join(__dirname, '/db', 'items.json')

function requestHandler(req, res) {
    const response = responseHandler(req, res)

// Get all items
   if(req.url === '/api/v1/items' && req.method === 'GET'){

    fs.readFile(dbPath, 'utf-8' ,(err, data) => {
        if(err) {
            return response({code: 500, message: 'An error occured',})
        }
        return response({data : JSON.parse(data)})
        })

} 

// Get only one item
else if(req.url.startsWith('/api/v1/items/') && req.method === 'GET' ){
    fs.readFile(dbPath, 'utf-8' ,(err, data) => {
        if(err) {
            return response({code: 500, message: 'An error occured',})
        }
        const parsedItems = JSON.parse(data)
        const item = parsedItems.find((element) => element.id == req.body.id)

        return response({data : item})
        })
} 
// Create one item
else if(req.url.startsWith('/api/v1/items/') && req.method === 'POST'){
    fs.readFile(dbPath, 'utf-8' ,(err, data) => {
        if(err) {
            return response({code: 500, message: 'An error occured',})
        }
        const parsedItems = JSON.parse(data)
        const item = req.body
        item.id = parsedItems.length + 1
       parsedItems.push(item)

       fs.writeFile(dbPath, JSON.stringify(parsedItems), (err) => {
        if(err) {
            return response({code: 500, message: "An error occured"})
        }
       })
        

        return response({data : item})
        })
}

// update an item
else if(req.url.startsWith('/api/v1/items/') && req.method === 'PUT'){
const update = req.body

fs.readFile(dbPath, 'utf-8', (err, data) => {
    if(err) {
        return response({code: 500, message: "An error occured", })
    }
    const items = JSON.parse(data)
    const itemIndex = items.findIndex((element) => element.id == update.id)

    if(itemIndex === -1){
        return response({code: 404, message: "No item found."})
    }

    items[itemIndex] = {...items[itemIndex], ...update}

    fs.writeFile(dbPath, JSON.stringify(items), (err) => {
        if(err) {
            return response({code: 500, message: "An error occured"})
        }
       })

       return response({data: items[itemIndex], message: "Item updated successfully"})

})
}

// delete an item
else if(req.url.startsWith('/api/v1/items/') && req.method === 'DELETE'){
    const itemToRemoveId = req.body
    
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if(err) {
            return response({code: 500, message: "An error occured", })
        }
        const items = JSON.parse(data)
        const itemIndex = items.findIndex((element) => element.id == itemToRemoveId.id)

        const deletedItem = items[itemIndex]
    
        if(itemIndex === -1){
            return response({code: 404, message: "No item found."})
        }
    
       items.splice(itemIndex, 1)
    
        fs.writeFile(dbPath, JSON.stringify(items), (err) => {
            if(err) {
                return response({code: 500, message: "An error occured"})
            }
           })
    
           return response({data: deletedItem, message: "Item deleted successfully"})
    
    })
    }
}

const bodyParser = (req, res, callback) => {
const body = []

req.on('data', (chunk) => {
    body.push(chunk)
})

req.on('end', ()=> {
    if(body.length){
        const parsedBody = Buffer.concat(body).toString()
        req.body = JSON.parse(parsedBody)

    }

    callback(req, res)
})
}

const responseHandler = (req, res) => ({code = 200, message = 'Items retreived successfully', data = null}) => {
    res.setHeader('content-type', 'application/json')
    res.writeHead(code)
    res.write(JSON.stringify({message, data}))
    res.end()
}

const PORT = 3000
const HOSTNAME = 'localhost'

const server = http.createServer((req, res) => bodyParser(req, res, requestHandler))

server.listen(PORT, HOSTNAME, ()=> {
    console.log(`Server started listening on port: ${PORT}`)
})