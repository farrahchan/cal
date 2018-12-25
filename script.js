function calc(cal)
{
  var val1 = Number(document.getElementById("val1").value);
  var val2 = Number(document.getElementById("val2").value);
  var ans = "";
  switch(cal)
  {
    case '+':
      ans = reFunction(val1 + val2);
      break;
    case '-':
      ans = reFunction(val1 - val2);
      break;
    case '*': 
      ans = reFunction(val1 * val2);
      break;
    case '/': 
      ans = reFunction(val1 / val2);
      break;
    case '1/x': 
      ans = 1/val1;
      break;
    case 'x^2': 
      ans = Math.pow(val1,2);
      break;
    case 'x^3': 
      ans = Math.pow(val1,3);
      break;
    case 'x^m': 
      ans = Math.pow(val1,val2);
      break;
    case 'x!': 
      ans = xFunction(val1);
      break;
    case 'e^x': 
      ans = Math.exp(val1);
      break;
    case 'cos': 
      ans = Math.cos(val1);
      break;
    case 'acos': 
      ans = Math.acos(val1);
      break;
    case 'sin': 
      ans = Math.sin(val1);
      break;
    case 'asin': 
      ans = Math.asin(val1);
      break;
    case 'tan': 
      ans = Math.tan(val1);
      break;
    case 'atan': 
      ans = Math.atan(val1);
      break;
    case '%': 
      ans = reFunction(val1 % val2);
      break;
    case '√': 
      ans = Math.sqrt(val1);
      break;
    case 'log': 
      ans = Math.log(val1);
      break;
    case 'rand': 
      val1 = Math.random();
      break;
    default:
      ans = '';
      break;
  }
  document.getElementById("ans").value = ans;
}

function myFunction() 
{
  document.getElementById("val1").value="";
  document.getElementById("val2").value="";
  document.getElementById("ans").value="";
}

function reFunction(value) 
{
  return Math.round(value*Math.pow(10,12))/Math.pow(10,12);
}

function piFunction()
{
  document.getElementById("val1").value=Math.PI;
}

function eFunction()
{
  document.getElementById("val1").value=Math.E;
}

function xFunction(x)
{
  if(x<2)
  {
    return 1;
  }
  else
  {
    return x*xFunction(x-1);
  }
}