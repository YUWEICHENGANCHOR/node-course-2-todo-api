const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');

    }
    console.log('Connect to MongoDB server');

    //deleteMany
    /*db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
        console.log(result);
    });*/

    //deleteOne
    /*db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
        console.log(result);
    });*/

    //findOneAndDelete
    /*db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });*/

    /*db.collection('Users').deleteMany({name: 'anchor'}).then((result)=>{
        console.log(result);
    });*/

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5a304b46767dd80346984f53")
    }).then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    });


    //db.close();
});