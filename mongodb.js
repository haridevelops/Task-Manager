/** Mongo Import */
const mongodb = require('mongodb');

/** Mongo client to connect to the DB */
const MongoClient  = mongodb.MongoClient

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
    db.collection('users').insertOne({
        name: 'Harisudhan',
        age: 24
    });

})
