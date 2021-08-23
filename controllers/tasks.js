const getAllTasks = (req, res) => {
    // return all tasks from database (todo)
    res.send('all tasks route')
}
const addTask = (req, res)=>{
    const {task} = req.query
    res.send(`add task ${task}`)
}
const taskDetail = (req, res)=>{
    const {id} = req.params
    res.send(`task ${id} detail`)
}
const modifyTask = (req, res)=>{
    const {id} = req.params
    res.status(201).send(`task ${id} modification`)
}
const deleteTask = (req, res)=>{
    const {id} = req.params
    res.send(`task ${id} deleting`)
}

module.exports = {
    getAllTasks,
    addTask,
    taskDetail,
    modifyTask,
    deleteTask
}