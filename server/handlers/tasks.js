const transitions = {
    pending: 'progress',
    progress: 'done',
};

const queries = {
    fetchTasks: 'SELECT * FROM techifide.tasks;',
    createTask: 'INSERT INTO techifide.tasks SET ?;',
    updateTaskStatus: 'UPDATE techifide.tasks SET status = ? WHERE id = ?;'
}

module.exports = {
    transitions,
    queries,
    fetchTasks: pool => (req, res) => {
        pool.query(queries.fetchTasks, (error, results) => {
            if (error) throw error;
            res.status(200).json({ tasks: results });
        });
    },
    createTask: pool => (req, res) => {
        const newTask = req.body;
        pool.query(queries.createTask, newTask, (error, result) => {
            if (error) throw error;
            res.status(200).json({ task: {...req.body, id: result.insertId} });
        });
    },
    updateTaskStatus: pool => (req, res) => {
        const updateData = [transitions[req.body.status], req.params.task_id];
        pool.query(queries.updateTaskStatus, updateData, (error) => {
            if (error) throw error;
            res.status(200).json({ task: { ...req.body, id: Number(req.body.id), status: updateData[0] } });
        });
    },
};
