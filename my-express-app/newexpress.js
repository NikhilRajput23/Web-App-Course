const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

let users = [
  { id: 1, name: "Nik" },
  { id: 2, name: "Raj" }
];

// GET - Read all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST - Create new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: 'User added', users });
});

// PUT - Update user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  users = users.map(u => (u.id === id ? { ...u, ...updatedData } : u));
  res.json({ message: 'User updated', users });
});

// DELETE - Delete user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.json({ message: 'User deleted', users });
});

app.listen(3000, () => console.log('Server running on port 3000'));
