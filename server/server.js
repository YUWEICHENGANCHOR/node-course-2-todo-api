var mongoose = require('mongoose');
//use promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save new something

/*var Todo = mongoose.model('Todo', {
   text: {
    type: String,
    //three properities for the text need
    require: true,
    minlength: 1,
    //trin is escape the space
    trim: true
   },
   completed: {
    type: Boolean,
    default: false
   },
   completedAt: {
    type: Number,
    default: null
   }
});*/

var User = mongoose.model('User',{
    email:{
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }

});

/*var otherTodo = new Todo({
    text: 'Something to do'
});
 
otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
},(e) => {
    console.log('Unable to save',e);
});*/

var User = new User({
    email:'     anchor810321@gmail.com'
});
 
User.save().then((doc) => {
    console.log('User saved',doc);
},(e) => {
    console.log('Unable to save',e);
});

//User 
//email - require it -trim it - set type -set min length of 1
// password