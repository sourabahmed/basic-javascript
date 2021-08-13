// while loop
/*
var i = 1;
while(i <=5){
    document.write(" " + i);
    i = i+1;
}

var i = 0;
var sum = 0;
while(i <=100){
    sum = i+0;
    document.write(sum);
    i = i+1;
}
*/

var i = 1;
var sum = 0;
while(i <=100){
    if (i%3 == 0 && i%5 == 0){
        document.write(" " +i);
        sum = sum+i;  
    }
    i = i+1;
}
document.write("sum = " +sum);