const express = require('express')
const fs = require('fs').promises
const path = require('path')

const PORT = 3000
const server = express();

server.use(express.static("public"))





const handleHomepage = async (req, res) => {
res.status(200).sendFile((path.join(__dirname + '/public/index.html')))
}


const handleErrorPage = async (req, res) => {
    try {
        res.status(200).sendFile(path.join(__dirname + '/public/error.html'))

    } catch (error) {
     console.log({error})   
    }

    }




server.get("/", handleHomepage)

server.get('*',  handleErrorPage)

server.listen(PORT, () => console.log("Server started running"))