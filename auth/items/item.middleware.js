const itemMiddleware = (req, res, next) => {
    const body = req.body
    if(Object.keys(body).length == 0){
        res.status(400).json({
            data: null,
            message: 'Request body required'
        })
    } else {
        next()
    }
}

module.exports = {
    itemMiddleware
}