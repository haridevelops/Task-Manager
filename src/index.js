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

app.get('/users', (req, res) => {
    User.find({})
        .then(user => {
            if (!user) return res.status(404).send(user)

            res.send(user)
        })
        .catch(error => res.status(500).send(error))
})

app.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) return res.status(404).send(user)

            res.send(user)
        })
        .catch(error => res.status(500).send(error))
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save()
        .then(task => {
            if (!task) return res.status(404).send(task)

            res.send(task)
        })
        .catch(error => res.status(500).send(error))
})


app.get('/tasks', (req, res) => {
    Task.find({})
        .then(tasks => res.status(201).send(tasks))
        .catch(error => res.status(404).send(error))
})

app.get('/tasks/:id', (req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            if (!task) return res.status(404).send(task)

            res.send(task)
        })
        .catch(error => res.status(500).send(error))
})

app.listen(port, () => console.log ('The app is listening to the port', port))