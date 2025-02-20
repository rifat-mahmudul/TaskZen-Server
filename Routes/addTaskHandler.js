const express = require('express');
const { postTask } = require('../Controllers/addTaskController');
const router = express.Router();

router
    .route('/')
    .post(postTask);

module.exports = router;