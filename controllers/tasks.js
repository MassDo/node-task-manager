const Task = require('../models/Task')


const getAllTasks = (req, res) => {
    // return all tasks from database (todo)
    res.send('all tasks route')
}
const createTask = async (req, res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
        
    } catch (error) {
        res.status(400).send(error)
        
    }
}
const getTask = (req, res)=>{
    const {id} = req.params
    res.json({success:true, id:id})
}
const updateTask = (req, res)=>{
    const {id} = req.params
    res.status(201).send(`task ${id} modification`)
}
const deleteTask = (req, res)=>{
    const {id} = req.params
    res.send(`task ${id} deleting`)
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}