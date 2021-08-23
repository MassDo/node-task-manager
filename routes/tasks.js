const express = require('express')
const router = express.Router()
const {
    getAllTasks,
    addTask,
    taskDetail,
    modifyTask,
    deleteTask,
} = require('../controllers/tasks')

// routes for /api/v1/tasks
// get    /      || all tasks
// post   /      || add one task
// get    /:id   || get one task
// patch  /:id   || modify one task
// delete /:id   || delete one task

router.route('/').get(getAllTasks).post(addTask)
router.route('/:id').get(taskDetail).patch(modifyTask).delete(deleteTask)



module.exports = router