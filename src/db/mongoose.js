const mongoose = require('mongoose')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

mongoose.connect(`${connectionUrl}/${databaseName}`, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const Task = mongoose.model('task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const task1 = new Task({
    description: 'This is task 1',
    completed: false
});

task1.save().then(result => {
    console.log(result)
    mongoose.disconnect()
})