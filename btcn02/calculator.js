var myOperator;


function clearCal(){
	num1.value="";
	num2.value="";
	result.value="";
	document.getElementById("info").innerHTML = "";
}

function onBlurBox1(){
	if(num1.value=="")
	{
		document.getElementById("info").innerHTML = "Chưa nhập giá trị ô thứ nhất";
	}
	else if(!isInt(num1.value)&&!isFloat(num1.value))
	{
		document.getElementById("info").innerHTML = "Giá trị nhập ở ô thứ nhất không phải là số";
	}
	else
	{
		document.getElementById("info").innerHTML = "";
	}
}

function onBlurBox2(){
	if(num2.value=="")
	{
		document.getElementById("info").innerHTML = "Chưa nhập giá trị ô thứ hai";
	}
	else if(!isInt(num2.value)&&!isFloat(num2.value))
	{
		document.getElementById("info").innerHTML = "Giá trị nhập ở ô thứ hai không phải là số";
	}
	else
	{
		document.getElementById("info").innerHTML = "";
	}
}

function onClickOperator(operator)
{
	myOperator=operator;
}

function onClickCal()
{
	if(num1.value=="")
	{
		document.getElementById("result").value = "";
		document.getElementById("info").innerHTML = "Chưa nhập giá trị ô thứ nhất";
	}
	else if(!isInt(num1.value)&&!isFloat(num1.value))
	{
		document.getElementById("result").value = "";
		document.getElementById("info").innerHTML = "Giá trị nhập ở ô thứ nhất không phải là số";
	}
	else if(num2.value=="")
	{
		document.getElementById("result").value = "";
		document.getElementById("info").innerHTML = "Chưa nhập giá trị ô thứ hai";
	}
	else if(!isInt(num2.value)&&!isFloat(num2.value))
	{
		document.getElementById("result").value = "";
		document.getElementById("info").innerHTML = "Giá trị nhập ở ô thứ hai không phải là số";
	}
	else
	{
		var myresult=0;
		var a=num1.value;
		var b=num2.value;
		if(myOperator=="plus")
		{
			myresult=sum(a, b);
			document.getElementById("info").innerHTML = "";
			document.getElementById("result").value = myresult;
		}
		else if(myOperator=="minus")
		{
			myresult=minus(a, b);
			document.getElementById("info").innerHTML = "";
			document.getElementById("result").value = myresult;
		}
		else if(myOperator=="multiply")
		{
			myresult=multiply(a, b);
			document.getElementById("info").innerHTML = "";
			document.getElementById("result").value = myresult;
		}
		else if(myOperator=="divide")
		{
			myresult=divide(a, b);
			document.getElementById("info").innerHTML = "";
			document.getElementById("result").value = myresult;
		}
		else {
			document.getElementById("info").innerHTML = "Chưa chọn phép tính";
			document.getElementById("result").value = "";
		}
		
	}	
	
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

function isInt(val) {
    var intRegex = /^-?\d+$/;
    if (!intRegex.test(val))
        return false;

    var intVal = parseInt(val, 10);
    return parseFloat(val) == intVal && !isNaN(intVal);
}

function sum(x, y)
{
	var n1 = parseInt(x);
	var n2 = parseInt(y);
	var result = n1 + n2;
	return result;
}

function minus(x, y)
{
	var n1 = parseInt(x);
	var n2 = parseInt(y);
	var result = n1 - n2;
	return result;
}

function multiply(x, y)
{
	var n1 = parseInt(x);
	var n2 = parseInt(y);
	var result = n1 * n2;
	return result;
}

function divide(x, y)
{
	var n1 = parseInt(x);
	var n2 = parseInt(y);
	var result = n1 / n2;
	return result;
}