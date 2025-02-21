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
        const email = req.params.email;
        const result = await Task.find({ userEmail: email, category: 'To-Do' });
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from get todo task controller: ${error}`);
        res.status(500).send(`error from get todo task controller: ${error}`);
    }
}

const getInProgressTask = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await Task.find({ userEmail: email, category: 'In Progress' });
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from get todo task controller: ${error}`);
        res.status(500).send(`error from get todo task controller: ${error}`);
    }
}

const getDoneTask = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await Task.find({ userEmail: email, category: 'Done' });
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from get todo task controller: ${error}`);
        res.status(500).send(`error from get todo task controller: ${error}`);
    }
}

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { category } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { category }, { new: true });
        res.status(200).send(updatedTask);
    } catch (error) {
        console.log(`error from update task category controller: ${error}`);
        res.status(500).send(`error from update task category controller: ${error}`);
    }
}

const deleteTask = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await Task.findByIdAndDelete(id);
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from delete task controller: ${error}`);
        res.status(500).send(`error from delete task controller: ${error}`);
    }
}

const getTaskById = async (req, res) => {
    try {
        const {id} = req.params;
        const query = {_id : id};
        const result = await Task.findOne(query);
        res.status(200).send(result);
    } catch (error) {
        console.log(`error from get task by id: ${error}`);
        res.status(500).send(`error from get task by id: ${error}`);
    }
}

module.exports = {
    postTask,
    getTodoTask,
    getInProgressTask,
    getDoneTask,
    updateCategory,
    deleteTask,
    getTaskById
}