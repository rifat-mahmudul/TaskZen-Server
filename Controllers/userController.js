const User = require('../Models/user');

const postUser = async (req, res) => {
    try {
        const userData = new User(req.body);
        const result = await userData.save();
        res.status(201).send(result);
    } catch (error) {
        console.log(`error from post user : ${error}`);
        res.status(500).send(`error from post user : ${error}`)
    }
}

module.exports = {
    postUser
}