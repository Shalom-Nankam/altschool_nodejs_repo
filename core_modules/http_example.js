const http = require('http')

// Create a http server
const HOSTNAME = 'localhost'
const PORT = 8000

const server = http.createServer(requestHandler)

// Start the server
server.listen(PORT, HOSTNAME, () => {
    console.log('Started the server')
} )



function requestHandler(req, res) {
 res.end("Hello World")
}