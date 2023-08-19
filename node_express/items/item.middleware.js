const itemMiddleware = (req, res, next) => {
    if(!req.body){
        res.status(400).json({
            data: null,
            message: 'Request body required'
        })
    }
    next()
}

module.exports ={
    itemMiddleware
}