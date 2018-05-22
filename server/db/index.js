module.exports = {};
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list');

var userSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports.User = mongoose.model('User', userSchema);

module.exports.User.find({}, (err, users) => {
  if(err) {throw err;}
  else {
    console.log('All the users....', users);
  }
});

