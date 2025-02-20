require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const cookieParse = require('cookie-parser');
const port = process.env.PORT || 5000;

// all routers import here
const addTaskHandler = require('./Routes/addTaskHandler');

// apps and middlewares
const app = express();
app.use(express.json());
app.use(cookieParse());
app.use(cors());

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

// connect to mongodb
const uri = `mongodb+srv://${user}:${pass}@cluster0.fyqjb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(uri)
.then(() => {
    console.log('Database connected');
})
.catch((err) => {
    console.log(`error from database connection: ${err}`);
});

// all api routes here
app.use('/add-task', addTaskHandler);


app.get('/' , (req, res) => {
    res.send('SEVER IS RUNNING');
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})