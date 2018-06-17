var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Business = require('../models/Business.js');

/* GET ALL BUSINESSES */
router.get('/', function(req, res, next) {
  Business.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE NEW BUSINESS */
router.post('/', function(req, res, next) {
  Business.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;