const express = require('express');
const { postTask, getTodoTask, getInProgressTask, getDoneTask } = require('../Controllers/addTaskController');
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

module.exports = router;