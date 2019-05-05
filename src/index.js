const express = require('express');
require('./db/mongoose');
const User = require('./models/user')
const Task = require('./models/task')


const app = express();
const port = process.env.PORT|| 3000;

/** parses body */
app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save()
        .then(response => res.status(201).send(response))
        .catch(error => res.status(400).send(error))
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save()
        .then(response => res.status(201).send(response))
        .catch(error => res.status(400).send(error))
})

app.get('/users', (req, res) => {
    User.find({})
        .then(response => res.status(201).send(response))
        .catch(error => res.status(404).send(error))
})

app.get('/tasks', (req, res) => {
    Task.find({})
        .then(response => res.status(201).send(response))
        .catch(error => res.status(404).send(error))
})

app.listen(port, () => console.log ('The app is listening to the port', port))