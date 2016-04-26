var express = require('express');
var router = express.Router();

var api = require('../api.js');

router.get('/', function(req, res, next) {
  res.json(api(req));
});

module.exports = router;
