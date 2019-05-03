var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
//var db = mongojs('mongodb://brad:brad@ds047666.mlab.com:47666/mytasklist_brad', ['tasks']);
//var db = mongojs('mongodb://admin:123ali@ds257640.mlab.com:57640/creating-node-api', ['tasks']);
// We are adding Docker-compose.yaml file and will create a underlying layer of docker with mongo so no need to connect URL of MongoDB
var db = mongojs('mongodb://mongo:27017', ['tasks']);

router.get('/tasks',function (req, res, next) {
res.send('TASKS API');

});


module.exports= router;
