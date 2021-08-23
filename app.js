const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('./db/connect')
const port = 3000
// static files
app.use(express.static('public'))
app.use(express.json())

// route
app.use('/api/v1/tasks', tasks)


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}...`);
})

