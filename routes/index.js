// FILENAME: Assignment1
// NAME: RACHAEL AJAYI
// STUDENTID: 301146832
// DATE: 2ND OCTOBER, 2022


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

 /* GET home page. */
 router.get('/home', function(req, res, next) {
   res.render('index', { title: 'Home'});
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

 /* GET Project page. */
 router.get('/projects', function(req, res, next) {
     res.render('projects', { title: 'Projects'});
 });

 /* GET Services page. */
 router.get('/services', function(req, res, next) {
   res.render('services', { title: 'Services'});
 });

/* GET Contact  page. */
 router.get('/contact', function(req, res, next) {
   res.render('contact', { title: 'Contact'});
 });

module.exports = router;
