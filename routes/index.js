var express = require('express');
var router = express.Router();
const nameList= [
{ 'id': 1,'name': 'A'},
{ 'id': 2,'name': 'B'},
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub:'abc', names: nameList });
});

module.exports = router;
