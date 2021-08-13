// task number 3 and practice class
/*var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
num1 = parseInt(num1, 10);
num2 = parseInt(num2), 10;
var sum,sub,div,into,modu;

sum = num1 + num2;
document.write(num1 + "+" + num2 + "=" + sum + "<br>");

sub = num1 - num2;
document.write(num1 + "-" + num2 + "=" + sub + "<br>");

div = num1 / num2;
document.write(num1 + "/" + num2 + "=" + div + "<br>");

into = num1 * num2;
document.write(num1 + "*" + num2 + "=" + into + "<br>");

modu = num1 %  num2;
document.write(num1 + "%" + num2 + "=" + modu);*/


// we can do it another way like taking  only one variable
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
num1 = parseInt(num1, 10);
num2 = parseInt(num2), 10;
var result;

result = num1 + num2;
document.write(num1 + "+" + num2 + "=" + result + "<br>");

result = num1 - num2;
document.write(num1 + "-" + num2 + "=" + result + "<br>");

result = num1 / num2;
document.write(num1 + "/" + num2 + "=" + result + "<br>");

result = num1 * num2;
document.write(num1 + "*" + num2 + "=" + result + "<br>");

result = num1 %  num2;
document.write(num1 + "%" + num2 + "=" + result);