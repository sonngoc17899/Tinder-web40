const mongodb = require('mongodb')
let db;
const client = new mongodb.MongoClient('mongodb://localhost:27017')
client.connect().then((connectedClient)=>{
    console.log('connected to mongodb');
    db = connectedClient.db('Tinder')
    const users = db.collection('users')
    users.findOne({}).then((res)=>{
        console.log(res);
    })
})
module.exports = db;