const express = require('express')
const router = express.Router()
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasks')

// routes for /api/v1/tasks
// get    /      || all tasks
// post   /      || add one task
// get    /:id   || get one task
// patch  /:id   || modify one task
// delete /:id   || delete one task

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router