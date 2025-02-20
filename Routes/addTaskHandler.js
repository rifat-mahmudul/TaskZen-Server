const express = require('express');
const { postTask, getTodoTask } = require('../Controllers/addTaskController');
const router = express.Router();

router
    .route('/')
    .post(postTask)

router
    .route('/getTodoTask/:email')
    .get(getTodoTask)

module.exports = router;