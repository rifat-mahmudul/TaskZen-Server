require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cookieParse = require('cookie-parser');
const port = process.env.PORT || 5000;

// apps and middlewares
const app = express();
app.use(express.json());
app.use(cookieParse());

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


app.get('/' , (req, res) => {
    res.send('SEVER IS RUNNING');
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})