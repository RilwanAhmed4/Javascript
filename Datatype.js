// Primitive

let str="javascript";
console.log(str, typeof str);  

let num=25 //number
console.log(num, typeof num);

let num1=3.14 //number with decimal
console.log(num1, typeof num1);

let bool=true;  //boolean
console.log(bool, typeof bool);

let  bigInt=12345678901234567890123456n; //bigInt with n at last
console.log(bigInt, typeof bigInt);

let  bigInt1=1234567890123456789012345678901234567890; //bigInt with out n at last
console.log(bigInt1, typeof bigInt1);

let one=null; //null
console.log(one, typeof one);

let two;  //undefined
console.log(two, typeof two);

// Non-Primitive

let obj={
    name:"Shalini",
    age:25,
    city:"Delhi"
}
console.log(obj, typeof obj);

// Non-Primitive

// array  -> list of values  //index start from 0 
//Mutable -> can be change the values

let pet = ["cat","dog","fish","parrot",25];
console.log(pet, typeof pet);
console.log(pet[4]);
pet[4]="rabbit";
console.log(pet);

//object -> collection of key value pair
// similar to json


let detail={
    name:"Shalini",
    role:"QA",
    exp:3
}
console.log(detail, typeof detail);
console.log(detail.exp);
detail.exp=4;
console.log(detail);

// function -> block of code which perform a specific task
// static or dynamic

//static function

greet(); // hoisitng type can call before declaration

function greet(){
    console.log("Hello welcome!");
}

greet();


     


