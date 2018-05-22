var mongoose = require('mongoose');

//connects to a database called cat_app, if it can't find then it will create
mongoose.connect('mongodb://localhost/cat_app');

//define what a cat model looks like (pattern)
var catSchema = new mongoose.Schema({
    name: String, 
    age: Number, 
    temperament: String
});

//takes the catSchema and compile into a model so you can make new cat, define cat, add/remove...
//"Cat" always the singular version of your collection name..it will make a collection called "Cats"
//returns an object that has methods attatched 
var Cat = mongoose.model("Cat", catSchema);

//add new cat to db
//adds and save at the same time
Cat.create({
  name: 'Morty',
  age: 1,
  temperament: 'LuL'
}, function(err, cat) {
    if (err) {
        console.log('err')
    } else {
        console.log('Morty ', cat);
    }
})

// var rick = new Cat({
//     name: "Rick",
//     age: 1,
//     temperament: "Cute"
// });
// //err and the item that has been saved in the cb 
// rick.save(function(err, cat){
//     if(err){
//         console.log('did not save');
//     } else {
//         console.log('we just saved a cat')
//         console.log(cat);
//     }
// });


//retrieve all cats
Cat.find({}, function(err, cats) {
    if(err) {
        console.log('oh noo');
        console.log(err);
    } else {
        console.log('All the cats = ', cats);
    }
})


