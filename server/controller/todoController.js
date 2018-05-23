const express = require('express');
const { Todo }= require('../db/')

const todoCtrl = {
    get: function(req, res) {
      Todo.find({}, function(err, data){
          if(err) {res.status(404); console.log('There is an error in user get', err)}
          else {
              console.log('retrieve from api/todos successful')
              res.status(200).send(data);
          }
      })    
    },

    post: function(req, res) {
      const newTodo = new Todo(req.body);
      console.log('This is the req.body...', req.body);
      newTodo.save(function(err, newTodo) {
          if(err){res.status(400); console.log('There is an error posting..', err)}
          else {
              console.log('Post to api/todos successful...')
              res.status(201).send(newTodo);
          }
      })
    }
}

module.exports.todoCtrl = todoCtrl;