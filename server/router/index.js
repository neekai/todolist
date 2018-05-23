const router = require('express').Router();
const { todoCtrl } = require('../controller/todoController.js')

router.route('/todos')
      .get(todoCtrl.get)
      .post(todoCtrl.post);

module.exports.router = router;
