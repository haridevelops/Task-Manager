const mongoose = require('mongoose')
const validator = require('validator')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

mongoose.connect(`${connectionUrl}/${databaseName}`, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Email id not valid')
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.includes('password')) throw new Error('Password should not contain password')
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error('Age must be a positive value');
        }
    }
});

const user1 = new User({
    name: 'Annapoorni',
    age: 24,
    email: 'm.harisudhan95@gmail.com',
    password: 'pas'
});

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task1 = new Task({
    description: 'asd                         '
})


task1.save().then(result => {
    console.log(result)
    mongoose.disconnect()
}).catch(err => {
    console.log(err)
    mongoose.disconnect();
})

// user1.save().then(result => {
//     console.log(result)
//     mongoose.disconnect()
// }).catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// })