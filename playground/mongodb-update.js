const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');

    }
    console.log('Connect to MongoDB server');

    /*db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a3059b2f582be0e2bd5585d')
    }, {
        $set:{
            completed: true
        }

    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });*/

    db.collection('Users').findOneAndUpdate({
        _id: 123
    }, {
        $set:{
            name:'anchor'
        },
        $inc:{
            age:100
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    //db.close();
});