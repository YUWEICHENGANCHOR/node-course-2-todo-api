//const MongoClient = require('mongodb').MongoClient;

//The same as the previous one
//var user = {name:'anchor',age: 25};
//var {name} = user;
//console.log(name);
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');

    }
    console.log('Connect to MongoDB server');

    /*db.collection('Todos').insertOne({
        text:'Something to do',
        completed: false
    },(err, result)=>{
        if(err){
            return console.log('Unable to inser todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/

    //insert new doc into Users(name,age,location)
    /*db.collection('Users').insertOne({
        name:'anchor',
        age:25,
        location:'New Jersey'
    },(err, result)=>{
        if(err){
            return console.log('Unable to inser user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });*/
    db.close();
});