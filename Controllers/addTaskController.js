const Task = require('../Models/addTask');

// post task
const postTask = async (req, res) => {
    try {
        const taskData = new Task(req.body);
        const result = await taskData.save();
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from add task controller: ${error}`);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    postTask
}