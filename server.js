// Q1
const express = require('express');
const app = express();

app.use(express.json());

let todos = [
    { id: 1, value: 'play guitar' }
];

// Get method
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Post method
app.post('/addTodo', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        value: req.body.value
    };
    todos.push(newTodo);
    res.json(newTodo);
});

app.listen(3008, () => {
    console.log("Server is running on port 3008");
});
