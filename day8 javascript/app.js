// ES 6 fetures
// task 1

let name="Abhishek";
let schoolName="dnynprakash vidyalaya."

let result=`my name is ,${name} ,i studied in ${schoolName}`;
console.log(result);

// task 2

let name2= "my name is abhishek hariom bacche" ;
let name3="i studied in dnyanprakash vidylaya in ghatkopar"
let result1=` hii ,${name2}, /n ,${name3}`
console.log(result1);

// array destructing
// task 3
let array=[1,2,3,4,5,6,7,8,9,0];
    
    let [first , second] = array;
    console.log(first);
    console.log(second);

// object destructing
// task 4
let book = {
    name1: "yayati" ,
    author :"me",
    year : 2005,

};

let {name1 ,author}=book;
console.log(name1);
console.log(author);

// spread and rest operator
// task 5 { use of spread operator }
const existingArray = [1,2,3,4,5];
const newArray = [...existingArray ,6, 7];
console.log(newArray);

// task 6{ use of rest operator }
function sum(...numbers) {      // ( ...numbers ) is rest oprator use to accept multipal arguments in sigle array.
    return numbers.reduce((sum ,number)=>sum+number ,0);// (.reduce) operator is use to iterate over all values.
 }
 console.log(sum(1,2,3,4,5));

//  default parameters
// task 7
function sum1(a, b=1) {  
    return a + b ;
}
const result2= sum1(7 ,7);
const resultDefault= sum1(7);

console.log(result2);
console.log(resultDefault);

// enhanced object literals 
// task 8
const name7= 'abhsihek';
const age = 20 ;
const person={
    greet(){
        return `hello , my name is ${name7} , and  I am ${age} years old.`
    }
}
console.log(person.greet());

// task 9
const prop= "firstName ";
const prop2="lastName ";

const firstName = "Abhishek";
const lastName = "Bacche";

const person1= {
[prop]:firstName,
[prop2]:lastName
}

console.log(person1);



