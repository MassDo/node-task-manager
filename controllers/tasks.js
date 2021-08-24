const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    // return all tasks from Task collection
    try {
        const tasks = await Task.find()
        res.json({tasks})        
    } catch (error) {
        res.status(500).json({msg:error})        
    }
}
const createTask = async (req, res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}
const getTask = async (req, res)=>{
    // trouver une task avec l'id
    // depuis la DB et l'id fournie par l'utilisateur
    // 3cas:
        // 200 si id match avec la DB        
        // 404 si pas de résultat
        // 500 si erreur serveur
    const {id:taskID} = req.params
    try{
        const task = await Task.findOne({_id:taskID}).exec()
        if(!task){            
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }        
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})

    }
}
const updateTask = async (req, res)=>{
    // 200 si id correct et id match avec une task on modifie et renvoie la nouvelle task modifiée
    // 404 si id bon format mais ne match pas avec une task
    // 500 si id mauvais format
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate(
            {_id:taskID},
            req.body, 
            {new:true, runValidators:true }
        )
        if(!task){
            return res.status(404).json({msg:`no task for id ${taskID}`})
        }            
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteTask = async (req, res)=>{
    // 200 del task if id match
    // 404 if id format match but no task 
    // 500 if server err or id format doesnt match
    const {id:taskID} = req.params
    try {
        const task = await Task.findOneAndDelete({_id:taskID}).exec()
        if(!task){
            return res.status(404).json({msg:`No task matching with id ${taskID}`})
        }
        res.status(200).json({msg:'Task deleted with succes'})
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}