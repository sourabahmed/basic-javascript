// digit spelling 
// like 0=zero and 1=one and so on.........
/*
var digit = prompt("Enter any digit");
if(digit==0)
    console.log("This is = Zero.");

else if(digit==1)
    console.log("This is = One.");

else if(digit==2)
    console.log("This is = Two.");

else if(digit==3)
    console.log("This is = Three.");

else if(digit==4)
    console.log("This is = Four.");

else if(digit==5)
    console.log("This is = Five.");

else if(digit==6)
    console.log("This is = Six.");

else if(digit==7)
    console.log("This is = Seven.");

else if(digit==8)
    console.log("This is = Eight.");

else if(digit==9)
    console.log("This is = Nine.");

else
    console.log("Not a valid number")
    */
   // Now we are introducing with switch
   //keyword of switch such as ..switch, case, break, default

/*
var digit = prompt("Enter your number");

   switch(digit){
       case "0":
           console.log("This is = Zero.");
           break;
    
       case "1":
           console.log("This is = One.");
           break;

       case "2":
           console.log("This is = Two.");
           break;

       case "3":
           console.log("This is = Three.");
           break;

       case "4":
           console.log("This is = Four.");
           break;

       case "5":
           console.log("This is = Five.");
           break;

       case "6":
           cnsole.log("This is = Six.");
           break;

       case "7":
           console.log("This is = Seven.");
           break;

       case "8":
           console.log("This is = Eight.");
           break;

       case "9":
           console.log("This is = Nine.");
           break;

       default:
           console.log("This is not a valid digit");
    }
*/           
// vowel consonant nirnoy useing sitch

var letter = prompt("Enter your letter");
letter = letter.toLowerCase();
    switch(letter){
        case "a":
            console.log("This is Vowel");
            break;
        case "e":
            console.log("This is Vowel");
            break;
        case "i":
            console.log("This is Vowel");
            break;
        case "o":
            console.log("This is Vowel");
            break;
        case "u":
            console.log("This is Vowel");
            break;
        default:
            console.log("This is Consonant");

}//we can do it another way to taking multiple case as in the bellow
var letter = prompt("Enter your letter");
letter = letter.toLowerCase();
    switch(letter){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("vowel");
            break;
        default:
            console.log("consonant");
}