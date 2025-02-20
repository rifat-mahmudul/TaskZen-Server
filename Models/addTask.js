const mongoose = require('mongoose');

const addTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userEmail : {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now()
    }
});

const Task = mongoose.model("Task", addTaskSchema);
module.exports = Task;