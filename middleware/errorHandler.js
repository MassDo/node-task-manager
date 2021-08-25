const {CustomError} = require('../errors/customError')

const errorHandlerMiddleware = (err, req, res, next) =>{
    if (err instanceof CustomError){
        return res.status(err.status).send(err.message)
    }
    res.status(500).send('Grosse erreur du serveur... on y travaille... :(')
}

module.exports = errorHandlerMiddleware