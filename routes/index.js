var express = require('express');
var router = express.Router();
var data = require('../mock/data.json');
//const fetch = require('node-fetch');
/* GET home page. */
//fetch('https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec');
     //method:"GET"
    //.then(response=>response.json())
  //.then(data=>{
  	//console.log(data)
  //})
  //proceed.exit()
var dataLists=Object.keys(data).map(function(value){
	return data[value]
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book your trial slot', data: dataLists, dataJSON: data });
});

module.exports = router;
