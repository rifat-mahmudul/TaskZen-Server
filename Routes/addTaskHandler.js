const express = require('express');
const { postTask, getTodoTask, getInProgressTask, getDoneTask, updateCategory, deleteTask, getTaskById } = require('../Controllers/addTaskController');
const router = express.Router();

router
    .route('/')
    .post(postTask)

router
    .route('/getTodoTask/:email')
    .get(getTodoTask)

router
    .route('/getInProgressTask/:email')
    .get(getInProgressTask)

router
    .route('/getDoneTask/:email')
    .get(getDoneTask)

router
    .route('/updateCategory/:id')
    .patch(updateCategory)

router
    .route('/deleteTask/:id')
    .delete(deleteTask)

router
    .route('/getTaskById/getSingleTask/:id')
    .get(getTaskById)

module.exports = router;