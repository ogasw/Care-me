const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let todos = [];

// API to get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// API to add a new todo
app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
