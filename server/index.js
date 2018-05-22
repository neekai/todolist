const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./router/index.js');
const app = express();
const PORT = 3000;

const db = require('./db/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../static')));

app.get('/landing', function(req, res) {
    res.send('this would be the landing page soon!');
});

app.listen(PORT, (err) => {
    if(err){throw err;} 
    else {
        console.log('server has started on ', PORT);
    }
});