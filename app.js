let num1,num2,operator;

num1 = window.prompt("Enter first number");
operator = window.prompt("Pick one ofthese operators: +, *, -, /");
num2 = window.prompt("Enter second number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result = 0;
 if (operator == '+'){
    result = num1 + num2;
 }else if(operator == '-'){
    result = num1 - num2;
 }else if(operator == '*'){
    result = num1 * num2;
 }else if(operator == '/'){
    result = num1 / num2;
 }
 alert(num1+operator+num2+'=' +result);





/*var num1 = window.prompt("Enter a number");
var operator = window.prompt("Pick one ofthese operators: +, *, -, /");
var num2 = window.prompt("Enter a number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result = num1 + num2;

if (sign == '+'){
    result = num1 + num2
}
else if (sign == '-'){
    result = num1 - num2
}
else if (sign == '*'){
    result = num1 * num2
}
else if (sign == '/'){
    result == num1 / num2
}
else{
    result = 'wrong sign'
}

alert(result)*/