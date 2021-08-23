const getAllTasks = (req, res) => {
    // return all tasks from database (todo)
    res.send('all tasks route')
}
const createTask = (req, res)=>{
    const {name} = req.body
    res.send(`add task ${name}`)
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