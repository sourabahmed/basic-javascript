
/*
var num = 5;
var result = num*num;
document.write("result = " + result +"<br>");

var num = 6;
var result = num*num;
document.write("result = " + result +"<br>");
*/

//creating a function
function sqaure(num1, num2){
var result = num1*num2;
document.write("result = " + result +"<br>")
}
//how to call a function
sqaure(5, 6);



//creating a function anoter way
function sqaure(num1, num2){
var result = num1*num2;
return result;
}
//how to call a function
document.write(sqaure(5, 6));



//creating a function more way
function sqaure(num1, num2){
var result = num1*num2;
return result;
}
//how to call a function
var x = sqaure(5, 6);
document.write(x);

//add function
function addition(x,y){
    var result = x+y;
document.write("sum = "+ result +"<br>");
}
addition(50,60);

function addition(x, y){
    var result = x-y;
    document.write("sum = " +result);
}
var a = prompt("Enter your 1st number:")
var b = prompt("Enter your 2nd number:")
addition(a, b);   