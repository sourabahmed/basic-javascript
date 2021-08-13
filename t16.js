
/*
var num1 = parseFloat(prompt("Enter first number :"));

var num2 = parseFloat(prompt("Enter second number :"));

var num3 = parseFloat(prompt("Enter third number :"));

if(num1>num2 && num1>num3)
    console.log("This is large number =" +num1);

else if(num2>num1 && num2>num3)
    console.log("This is large number =" +num2);

else
    console.log("This is large number =" +num3);    
*/

var letter = prompt("Enter your letter: ");
letter = letter.toLowerCase();
if(letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u")
    document.write("This is vowel = " +letter );
else
    document.write("This is consonant = " +letter);    