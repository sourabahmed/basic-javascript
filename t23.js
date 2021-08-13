
// ternary condition for javascript

var number = Number(prompt("Enter your name: "));
if(number>0){
 console.log("Positive");
}
 else{
   console.log("Negative");
}
var number = Number(prompt("Enter your name: "));
var result = number>0? "positive" : "Negative"
console.log(result);

//we can do it another way
var number = Number(prompt("Enter your name: "));
var result = number>0? console.log("positive") : console.log("negative");

// when we use 3 or more output
var number = Number(prompt("Enter your name: "));
var result = number>0 ? "positive" : number<0 ?"negative" : "ZERO";
console.log(result);

