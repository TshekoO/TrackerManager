const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory task storage
let tasks = [];
let currentId = 1;

// GET /api/tasks - Retrieve all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// POST /api/tasks - Create a new task
app.post("/api/tasks", (req, res) => {
  const { title, priority } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Task title cannot be empty" });
  }

  if (!priority) {
    return res.status(400).json({ error: "Task priority is required" });
  }

  const newTask = {
    id: currentId++,
    title,
    priority,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id - Mark task as completed
app.put("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.completed = true;
  res.json(task);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.stack);
  res.status(500).json({ error: "Something went wrong on the server." });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
