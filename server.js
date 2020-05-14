const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

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

const transitions = {
    pending: 'progress',
    progress: 'done',
};

app.get('/tasks',(req, res) => {
    pool.query('SELECT * FROM techifide.tasks;', (error, results) => {
        if (error) throw error;
        res.status(200).json({ tasks: results });
    });
});

app.post('/tasks',(req, res) => {
    const newTask = req.body;
    pool.query('INSERT INTO techifide.tasks SET ?;', newTask, (error, result) => {
        if (error) throw error;
        res.status(200).json({ task: {...req.body, id: result.insertId} });
    });
});

app.post('/tasks/:task_id/status',(req, res) => {
    const updateData = [transitions[req.body.status], req.params.task_id];
    pool.query('UPDATE techifide.tasks SET status = ? WHERE id = ?;', updateData, (error) => {
        if (error) throw error;
        res.status(200).json({ task: { ...req.body, id: Number(req.body.id), status: updateData[0] } });
    });
});

app.listen(8000);
