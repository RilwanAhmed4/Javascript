//function declaration

function greet(){
    console.log("Hi, welcome");
    }
greet(); //function call

function greet(name){
    console.log("Hi, welcome", name);
    }
greet("Rilwan"); //argument pass
greet("Shalini"); 
greet("Rifaya"); 

function details(name,age,native){   
    console.log("My Name is", name);
    console.log("My Age is", age);
    console.log("My Native is", native);
}
details("Rilwan", 31, "Pondicherry");
details("Shalini", 30, "Mumbai");
details("Rifaya", 3, "Chennai");

//function expression
//function expression is a function that is assigned to a variable. It can be anonymous or named. Function expressions are not hoisted, so they cannot be called before they are defined.

// electronics = function(name,cost) can call with out function expression but it is not recommended because it will create a global variable and can cause issues in larger codebases. It is better to use var, let or const to declare the variable.
let  electronics = function(name,cost){
    console.log("I am", name,"and my cost is", cost);
}
electronics("fan", 15000);
electronics("fridge", 50000);
    
// Arrow function  
//arrow function is a shorter syntax for writing functions. It is a more concise way to write functions in JavaScript. Arrow functions are anonymous and change the way this binds in functions.
// shorter syntax for writing functions. It is a more concise way to write functions in JavaScript. Arrow functions are anonymous and change the way this binds in functions.

let movie = (name,ticket,petrol,parking,snack) => {
    console.log("movie name is", name,"and the expense is", (ticket+petrol+parking+snack));    
}
movie("karuppu", 250, 200, 150, 250);

 //immediately invoked function expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping.

(function(){
    console.log("Hello Hi");
})()


