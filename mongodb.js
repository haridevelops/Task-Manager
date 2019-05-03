/** Mongo Import */
/** Mongo client to connect to the DB */
/** ObjectId is the _id */
const { MongoClient, ObjectId } = require('mongodb');

/** connection params */
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

/** Connect to Mongo DB */
MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log(error);
        return;
    }


    const db = client.db(databaseName);
    
    /** create document */
    // db.collection('users').insertOne({
    //     name: 'Harisudhan',
    //     age: 25
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         task: 'Create a home data center',
    //         completed: false
    //     },
    //     {
    //         task: 'Buy a mac book',
    //         completed: false
    //     },
    //     {
    //         task: 'Complete AWS certification',
    //         completed: true
    //     },
    //     {
    //         task: 'Complete Docker Captain',
    //         completed: false
    //     }
    // ]);

    /** read document */
    // db.collection('users').findOne({
    //     name: 'Harisudhan'
    // }, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
        
    //     console.log(result);
    // });

    /** read */
    // db.collection('users').find({ name: 'Harisudhan' }).toArray((err, result) => console.log(result))

    // db.collection('tasks').findOne({ _id: new ObjectId('5ccb0fdeed8e4b122ade6ea5') }, (err, result) => {
    //     console.log('findOne >>', result);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((err, result) => {
    //     console.log('find >>', result)
    // })

    /** update */
    // db.collection('tasks').updateOne(
    //     { _id: new ObjectId("5ccb0fdeed8e4b122ade6ea4") }, 
    //     { $set: { task: 'Buy a mac book' }})
    //     .then((value) => console.log(value))
        
    // db.collection('tasks').updateMany(
    //     { _id: new ObjectId("5ccb0fdeed8e4b122ade6ea3") },
    //     { $set: { completed: true }})
    //     .then((value) => console.log(value))
    //     .catch((error) => console.log(error))
    
    /** delete */
    // db.collection('tasks').deleteMany(
    //     { task: 'Buy a mac book' },(err, result) => console.log(result))


    // db.collection('tasks').deleteOne(
    //     { completed: true }
    // ).then(value => console.log(value))

})
