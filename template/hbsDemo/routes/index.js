var express = require('express');
var router = express.Router();

var persons = require("../model/model");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Handlebars Demo', extra: "Handlebars is cool" });
});

module.exports = router;
