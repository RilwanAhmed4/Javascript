//callback function

//function orderfood(){
function orderfood(name,input){     //eatfood is passed as a parameter to orderfood function
    setTimeout(() => {
        console.log("time taken to order and deliver",name);
        input()  //eatfood()
    }, 5000);
}

function eatfood(){
    setTimeout(() => {
        console.log("time taken to eat food");
    }, 2500);
}
//orderfood();
//eatfood();
orderfood("briyani", eatfood);


//callback hell

function brush(first) { 
    setTimeout(() => {
        console.log("time taken to brush 2500");
        first()  //bath()
    }, 2500);
}

function bath(second) {
    setTimeout(() => {
        console.log("time taken to bath 5000");
        second()  //relax()
    }, 5000);
}

function relax(third) {
    setTimeout(() => {
        console.log("time taken to relax 500");
        third()  //eat()    
    }, 500);
}

function eat(fourth) {
    setTimeout(() => {
        console.log("time taken to eat 3000");
        fourth()  //ready()
    }, 3000);
}

function ready() {
    setTimeout(() => {
        console.log("time taken to get ready 1500");
    }, 1500);
}

//brush(bath);
//bath(relax);
//relax(eat);
//eat(ready);
//ready();
brush(()=>{
    bath(()=>{
        relax(()=>{
            eat(ready)
            })
        })      
})





