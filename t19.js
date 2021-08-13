// we will do addition like 1+2+3+4+5=?

/*
var sum = 0;
for(var x=1; x<=5; x=x+1){

    sum = sum + x;
}
    document.write("sum = " +sum + "<br>" );



var sum = 0;
for(var x=5; x<=10; x=x+1){
    
    sum = sum + x;
}
    document.write("sum = " +sum);*/

// we are doing it through taking user input
/*
var m = parseInt(prompt("Enter your starting number: "));
var n = parseInt(prompt("Enter your ending number: "));
var sum = 0;
for(var x=m; x<=n; x=x+1){
        
    sum = sum + x;
}
    document.write("sum = " +sum);
*/
for(x=1; x<=5; x=x+1){

    var num1 = parseInt(prompt("Enter your first number: "));
    var num2 = parseInt(prompt("Enter your second number: "));
    var sum = num1+num2;
    console.log("result = "+sum);
}

