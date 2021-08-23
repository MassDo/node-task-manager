// mettre en route un server basiqe avec une route hello

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 3000
// static files
app.use(express.static('public'))

// route
app.use('/api/v1/tasks', tasks)


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}...`);
})

