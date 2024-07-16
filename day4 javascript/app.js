//  loops
//  for loop
// task 1
 for( let i=1 ;i<=100 ;i++){
    console.log(i);
 }



//  task 2
for (let table=1 ; table<=10 ;table++){
   console.log(5*table);
}


// while loop 
// task 3
let sumNum = 1;
while (sumNum<=10){
   console.log(sumNum);
    sumNum++ ;
}



// task 4
let sumNum1= 10;
while (sumNum1>=1){
   
   console.log(sumNum1);
   sumNum1--;
}

// do ... while loop
//  task 5
 let sumNum2=1;
 do {
   console.log(sumNum2);
   sumNum2++;
 }while (sumNum2<=5);



//    task 6
function factorial(number){
let fac1=1;
let result=1;
do {
   result*=fac1;
   fac1++;
}while(fac1<=number){
   console.log( number,"=",result);
}
}
factorial(5)

//  nested loops
// task 7
console.log("\n")
for (let i = 1; i <= 5; i++) {
    let pattarnType = "";
    for (let j = 1; j <= i; j++) {
        pattarnType = pattarnType + "* "
    }  
    console.log(pattarnType);
}

