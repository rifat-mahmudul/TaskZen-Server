const express = require('express');
const { postUser } = require('../Controllers/userController');
const router = express.Router();

router
    .route('/')
    .post(postUser)

module.exports = router;