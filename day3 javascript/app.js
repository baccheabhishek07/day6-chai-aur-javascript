// if else
// task 1
let number = -7;
if (number>0){
    console.log("The number is positive", number);
}
else if(number<0){
    console.log("The number is negative", number);
}
else {
    console.log("The number is ", number);   
}

// task 2
let age = 20;
age>18 ?console.log("you can vote.") :console.log("you can't vote.");

// nested if else statments
//  task 3
let num1= 77;
let num2=88;
let num3=99;
if (num1>num2 && num1>num3){
    console.log("The num1 is gratest",num1);
}
else if (num2>num1 && num2>num3){
    console.log("The num2 is gratest",num2);
}
else {
    console.log("The num3 is gratest",num3);
}

//  switch case 
// task 4

let daynumber = 3; // Example day number

switch (daynumber) {
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday");
        break;
    case 4:
        console.log("It's Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    case 7:
        console.log("It's Sunday");
        break;
    default:
        console.log("Invalid day number");
}

// task 5

let score = 35; 

switch (true) {
    case ( score>=90 && score<=100):
        console.log("Grade A");
        break;
    case (score>=80 && score<=89):
        console.log("Grade B");
        break;
    case (score>=70 && score<=79):
        console.log("Grade C");
        break;
    case (score>=60 && score<=69):
        console.log("Grade D");
        break;
    case (score<60):
        console.log("Grade F - You are fail");
}


// ternary operator
//  task 6

let digit = 24 ;
digit%2===0 ? console.log("The number is even") : console.log("The number is odd");

//  combining conditions
//  task 7

function isleapyear(year){
return ( year%4==0 && year%100 !==0 || year % 100==0)
}

let year=2023;
if(isleapyear(year)){
    console.log("The year is leap year",year);
}
else{
    console.log("The year is not a leap year",year);
}






