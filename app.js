const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
require('dotenv').config()
// static files
app.use(express.static('public'))
app.use(express.json())

// route
app.use('/api/v1/tasks', tasks)
app.use(notFound)

// faire une fonction start asynchrone pour démarrer le serveur uniquement si la DB est connectée

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


