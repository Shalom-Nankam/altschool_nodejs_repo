const express = require('express')
const itemRouter = require('./items/item.router')
const usersRouter = require('./users/user.router')
const globalMidware = require('./global_middleware/global.middleware')

const app = express()

const PORT = 8000

app.use(express.json())


app.use('/products', itemRouter)
app.use('/users', usersRouter)

app.get('*', (req, res) => {
    res.status(400).json(
        {
            data: null,
            message: "Resource not found"
        }
    )
})

app.listen(PORT, () => console.log(`Api server started at ${PORT}`))