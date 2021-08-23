const mongoose = require('mongoose')

const connectionString = 
    'mongodb+srv://Dorian:Clochette2049@nodeexpressprojects.bn5u3.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

mongoose
    .connect(connectionString, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true
    })
    .then(()=>console.log('CONNECTED TO THE DB ...'))
    .catch((err)=>console.log(err))