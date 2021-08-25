const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorHandler') 
require('dotenv').config()
// static files
app.use(express.static('public'))
app.use(express.json())

// route
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

// Servers
const port = process.env.PORT || 3000
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Server is running on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()


