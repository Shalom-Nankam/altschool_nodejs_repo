const fs = require('fs')
const path = require('path')

const dbPath = path.join('users','db','user.json' )

const checkBody = (req, res, next) => {
    if(!req.body){
        res.send(400).json({
            data: null,
            message: "Request body required."
        })
        return
    } 
    next()

}

const apiAuth = (req, res, next) => {
const header = req.headers
if(!header.api_key){
    res.status(401).json({
        data: null,
        message: "Not authenticated."
    })
    return
} else {
    fs.readFile( dbPath, 'utf-8', (err, data) => {
        if(err){
            res.status(500).json({
                data: null,
                message: 'Internal server error.'
            })
            console.log({err})
            return
        }
        const users = JSON.parse(data)
    
        const authenticatingUser = users.find(user => user.api_key == header.api_key)
        if(authenticatingUser.role == 'user'){
            res.status(401).json({
                data: null,
                message: 'Not authorized'
            })
            return
        } else {
            next()
        }
    })
}


}


module.exports = {
    checkBody,
    apiAuth
    
}
