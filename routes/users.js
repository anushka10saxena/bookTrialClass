var express = require('express');
var router = express.Router();
const fetch= require('node-fetch');
/* GET users listing. */
url="https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec";
settings='Get';
//fetch(url,settings)
    //.then(res=>res.json())
    //.then((json)=>{
    	//console.log(json);
    //});
    //proceed.exit();
router.get('/', function(req, res, next) {
  res.render('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.location('/');
  res.redirect('/');
});

module.exports = router;
