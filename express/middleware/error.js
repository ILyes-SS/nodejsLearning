const errorHandler = (err, req, res, next)=>{
    if(err.status){
        return res.status(err.status).json(err.message)
    }

    res.status(500).json({message: 'server error'})
    

}

module.exports = errorHandler;