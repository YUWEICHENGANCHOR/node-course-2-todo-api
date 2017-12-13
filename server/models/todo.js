var mongoose  = require('mongoose');

var Todo = mongoose.model('Todo', {
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
 });
 module.exports = {Todo};