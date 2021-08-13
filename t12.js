/*
var faren = parseFloat(prompt("Enter Farenheit temparature:"));
var celsius= (faren-32) * (5/9);

document.write(faren + " Degree farenheit = " +celsius + " Degree celsius"); */

var cel = parseFloat(prompt("Enter celsius temparature:"));
var faren = (cel * (9/5)) +32;

document.write(cel + " Degree celsius = " + faren + " Degree farenheit");