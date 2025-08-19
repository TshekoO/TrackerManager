const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory task list
let tasks = [
  { id: 1, title: 'Sample Task', priority: 'Medium', completed: false }
];

// GET /api/tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST /api/tasks
app.post('/api/tasks', (req, res) => {
  const newTask = { ...req.body, id: tasks.length + 1 };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Error logging middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
