setTimeout(function() {
    console.log("hello hi");
}, 2000); 

console.log("hello world");

function greet() {  //timeout function
    setTimeout(function() {
        console.log("hello hi");
    }, 5000);
}
greet();
 
function demo() {   //normal function
    console.log("hello world");
}
demo();

//async function run
function brush() { 
    setTimeout(() => {
        console.log("time taken to brush 2500");
    }, 2500);
}

function bath() {
    setTimeout(() => {
        console.log("time taken to bath 5000");
    }, 5000);
}

function relax() {
    setTimeout(() => {
        console.log("time taken to relax 500");
    }, 500);
}

function eat() {
    setTimeout(() => {
        console.log("time taken to eat 3000");
    }, 3000);
}

function ready() {
    setTimeout(() => {
        console.log("time taken to get ready 1500");
    }, 1500);
}

brush();
bath();
relax();
eat();
ready();