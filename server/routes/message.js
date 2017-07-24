var express = require('express');
var router = express.Router();
var Message = require('../models/message.schema.js');

router.get('/', function(req, res) {
  // use schema to find douments in Rentals collection
  Message.find({}, function(err, data) {
    if (err) {
      console.log('find error:', err);
      res.sendStatus(500);
    } else {
      res.send(data);
      // res.send(result.rows)
    }
  });
});

module.exports = router;
