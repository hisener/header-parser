var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  res.render('index', {
    title: 'API Project: Request Header Parser Microservice',
    path: fullUrl
  });
});

module.exports = router;
