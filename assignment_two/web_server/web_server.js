const http = require('http')

const PORT = 8000
const HOSTNAME = 'localhost'

function requestHandler(req, res) {
    console.log(req.url)
    if(req.url === '/index.html'){
        res.writeHead(200, { 'Content-Type':'text/html'})
        res.write('<h1>Welcome to our webpage</h1>')
        res.end()
    } else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1> 404: Not found </h1>')
        res.end()
    }
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, ()=> {
    console.log('Server started succesfully')
})

