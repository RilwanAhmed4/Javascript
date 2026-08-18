//let | Var| Const

let fruit;// Variable Declaration
fruit="Apple"; //value assign

let numberOne=52;

let flower="Rose",plant="Tea";

console.log(fruit,numberOne,flower,plant,"javascript");

//accept both upper and lower
//accept number but not in first index
//$_ accept but not allow spaces
//name should be unique
//name should be meaningful relavant  

//re- declaration

var veg="potato";
var veg="Tomato";
console.log(veg);  //accept

// let veggy="carrot";
// let veggy="beans";
// console.log(veggy);  //notaccept

//const veggy="carrot";
// veggy="beans";
// console.log(veggy);  //notaccept

//re-assignment

var col="red";
col="blue";
console.log(col);  //accept

let color="black";
color="white";
console.log(color);  //accept

//const colour="purple";
//colour="beige";
//console.log(colour);  //notaccept


{
    let a="blue"; // block scope
    var b="orange"; //function scope
    const c="black"; // block scope
}

//console.log(a); not accept because of block scope

console.log(b); //accept because of function scope

//console.log(c); not accept because of block scope



// hoisting

console.log("tree");

var tree="mango"; // hoisting

