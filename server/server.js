const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { fetchTasks, createTask, updateTaskStatus } = require('./handlers/tasks');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

const app = express();

const allowCrossDomain = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET')
    res.header('Access-Control-Allow-Headers', 'x-access-token, Content-Type, Authorization,' +
        ' Content-Length, X-Requested-With')

    'OPTIONS' === req.method ? res.sendStatus(200) : next();
};
  
app.use(allowCrossDomain);
  
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Return all tasks
app.get('/tasks', fetchTasks(pool));

// Create a new task
app.post('/tasks', createTask(pool));

// Update the status of a task
app.post('/tasks/:task_id/status', updateTaskStatus(pool));

app.listen(8000);
