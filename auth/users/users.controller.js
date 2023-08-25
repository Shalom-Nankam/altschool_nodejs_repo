const path = require('path')
const fs = require('fs')

const dbpath = path.join(__dirname, 'db','user.json')

const createUser = (req, res) => {
const user = req.body

fs.readFile(dbpath, 'utf-8', (err,data)=> {
    if(err){
        res.status(500).json({
            data: null,
            message: "Internal server error."
        })
        return
    }
    const users = JSON.parse(data)
    user.api_key = `$${user.name}_${user.surname}`
    users.push(user)

    fs.writeFile(dbpath, JSON.stringify(users), (err) => {
        if(err){
            res.status(500).json({
                data: null,
                message: "Internal server error."
            })
            return
        }
    })
    delete user.api_key

    res.status(201).json({
        data: user,
        message: "User created successfully"
    })
})

}


const getUsers = (req, res) => {
    fs.readFile(dbpath, 'utf-8', (err, data) => {
        if(err){
            res.status(500).json({
                data: null,
                message: "Internal server error"
            })
            return
        }
        const users = JSON.parse(data)
        users.forEach(element => {
            delete element.api_key
        });

        res.status(200).json({
            data: users,
            message: 'Users retrieved successfully.'
        })
    })
}


module.exports = {
    createUser,
    getUsers
}