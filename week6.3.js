const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();

    console.log(`[${timestamp}] Incoming Request: ${req.method} to ${req.url}`);

    next();
});

// User-Agent middleware
app.use((req, res, next) => {
    const userAgent = req.get('User-Agent');

    if (!userAgent) {
        return res.status(400).json({
            error: "Browser identification missing!"
        });
    }

    next();
});

let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];

// GET all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST a new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: req.body.id != null ? req.body.id : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// PUT/update a task
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (task) {
        task.title = req.body.title;

        res.json({
            message: "Task updated successfully",
            task
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

// DELETE a task
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

// Start server
app.listen(PORT, () => {
    console.log('--------------------------------');
    console.log(`REST API Server running at http://localhost:${PORT}`);
    console.log('Listening for requests...');
    console.log('--------------------------------');
});