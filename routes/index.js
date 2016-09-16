var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var todayDate = new Date(); 
  var todayTimeStamp = new Date().getTime(); 
  var today = {todayDate:todayDate, todayTimeStamp:todayTimeStamp};
  res.render('index',{todayDate:today.todayDate, todayTimeStamp:today.todayTimeStamp});
});

router.get('/date',function(req,res,next){
    var year = req.param('year'); 
    var month = req.param('month'); 
    var day = req.param('day'); 
    
    var alphaDate = {year:year , month:month, day:day}
    var unixDate = new Date("'"+alphaDate.year+ "/"+ alphaDate.month+"/" + alphaDate.day+"'").getTime(); 
    console.log("'"+alphaDate.year+"/"+ alphaDate.month+"/"+ alphaDate.day+"'");
    res.render('monthApi',{year:alphaDate.year , month:alphaDate.month, day:alphaDate.day, unixDate:unixDate}); 
   // res.render('dateApi'); 
});


router.get('/:seconds',function(req,response){
  
  var newDate;
  var date = req.params.seconds; 
  var dateTime = new Date(+date);
  if (isNaN(date)){
    dateTime = 'null'; 
    date = 'null';
  }
  console.log(+date); 
  console.log(dateTime);
  var dateObj = {date:dateTime, dateUnix:date, message:'in milliseconds'}
  
  response.render('dateApi',{date:dateObj.date, dateUnix:dateObj.dateUnix,message:dateObj.message}); 
});







module.exports = router;
