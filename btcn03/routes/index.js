var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bé tập tính' });
});

router.post('/', (req, res)=> {
  const n1 = req.body.number1;
  const n2 = req.body.number2;
  const operator = req.body.operator;
  var result;
  var notification = "";


  if (n1 == "" && n2 == "")
  {
    notification = "";
  }
  else if (n1 == "")
  {
    notification = "Chưa nhập số thứ nhất";
  }
  else if (!isInt(n1) && !isFloat(n1))
  {
    notification = "Giá trị ở ô thứ nhất không phải là số";
  }
  else if (n2 == "")
  {
    notification = "Chưa nhập số thứ hai";
  }
  else if (!isInt(n2) && !isFloat(n2))
  {
    notification = "Giá trị ở ô thứ hai không phải là số";
  }
  else
  {
    if(operator == "1")
    {
      result = sum(n1, n2);
    }
    else if (operator == "2")
    {
      result = minus(n1, n2);
    }
    else if (operator == "3")
    {
      result = multiply(n1, n2);
    }
    else if (operator == "4")
    {
      result = divide(n1, n2);
    }
    else
    {
      notification = "Chưa chọn phép tính";
    }
  }
  



  res.render('index', { title: 'Bé tập tính', result, notification, n1, n2, operator });
});

//function
function isInt(val) {
  var intRegex = /^-?\d+$/;
  if (!intRegex.test(val))
      return false;

  var intVal = parseInt(val, 10);
  return parseFloat(val) == intVal && !isNaN(intVal);
}

function isFloat(val) {
  var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
  if (!floatRegex.test(val))
      return false;

  val = parseFloat(val);
  if (isNaN(val))
      return false;
  return true;
}

function sum(x, y)
{
var n1 = parseFloat(x);
var n2 = parseFloat(y);
var result = n1 + n2;
return result;
}

function minus(x, y)
{
var n1 = parseFloat(x);
var n2 = parseFloat(y);
var result = n1 - n2;
return result;
}

function multiply(x, y)
{
var n1 = parseFloat(x);
var n2 = parseFloat(y);
var result = n1 * n2;
return result;
}

function divide(x, y)
{
var n1 = parseFloat(x);
var n2 = parseFloat(y);
var result = n1 / n2;
return result;
}

module.exports = router;
