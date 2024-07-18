// array creation and access
// task 1

const array1=[1,2,3,4,5]
console.log(array1);

//  task 2
// access of an array

const array2=[1,2,3,4,5]
let newarray1=array2[0] ;
let newarray2=array2[4] ;
console.log(newarray1);
console.log(newarray2);

// array methods
//  task 3
// push 
let array3=[1,2,3,4,5]
array3.push(6);
console.log(array3);

//  task 4
// pop
let array4=[1,2,3,4,5]
array4.pop();
console.log(array4);

//  task 5
// shift 
let array5=[1,2,3,4,5]
array5.shift(0);
console.log(array5);

// task 6
// unshift
let array6=[1,2,3,4,5]
array6.unshift(0);
console.log(array6);

// task 7
// map

let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(function(number) {
    console.log(number * 2); 
});

// task 8
// filter
let num1=[1,2,3,4,5]
let result = num1.filter(function(number){
    return number % 2===0;

})
console.log(result);

// task 9
// reduce

let num2=[1,2,3,4,5]
let sum1 = num2.reduce(function(accumulator ,currentvalue){
    return  accumulator + currentvalue;

});
console.log(sum1);

// task 10
// for loop for array iteration

let array7=[1,2,3,4,5];
for (i=0 ; i<=array7.length ;i++){
    console.log(i);
}

// task 11
// for each method
let array8=[1,2,3,4,5]
array8.forEach(function(array8){
    console.log(array8);
})

// task 12
// two dimensional array

let matrix=[
    [1,2,3],
    [4,5,6],
]
for (let i=0 ; i<matrix.length ; i++){
    console.log(matrix[i]);
}

// task 13
// accessing specific element

let matrix1=[
    [1,2,3],
    [4,5,6],
]
console.log(matrix[0][0]);
console.log(matrix[1][2]);
