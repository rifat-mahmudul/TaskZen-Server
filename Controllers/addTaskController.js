const Task = require('../Models/addTask');

// post task
const postTask = async (req, res) => {
    try {
        const taskData = new Task(req.body);
        const result = await taskData.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from add task controller: ${error}`);
        res.status(500).send(`error from add task controller: ${error}`);
    }
}

const getTodoTask = async (req, res) => {
    try {
        const result = await Task.find({category : 'To-Do'});
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from get todo task controller: ${error}`);
        res.status(500).send(`error from get todo task controller: ${error}`);
    }
}

module.exports = {
    postTask,
    getTodoTask
}