
function login(first) { 
    setTimeout(() => {
        console.log("time taken to login 2500");
        first()  
    }, 2500);
}

function home(second) {
    setTimeout(() => {
        console.log("time taken to home 5000");
        second()  
    }, 5000);
}

function addtocart(third) {
    setTimeout(() => {
        console.log("time taken to add to cart 500");
        third() 
    }, 500);
}

function buynow(fourth) {
    setTimeout(() => {
        console.log("time taken to buy now 3000");
        fourth()
    }, 3000);
}

function placeorder(fifth) {
    setTimeout(() => {
        console.log("time taken to place order 1500");
        fifth()
    }, 1500);
}

function payment(sixth) {
    setTimeout(() => {
        console.log("time taken to make payment 1500");
        sixth()
    }, 1500);
}

function ordersuccessfull() {
    setTimeout(() => {
        console.log("time taken to make ordersuccessfull 2500");
    }, 2500);
}
// login();
// home();
// addtocart();
// buynow();
// placeorder();
// payment();
// ordersuccessfull();

login(()=>{
    home(()=>{
        addtocart(()=>{
            buynow(()=>{
                placeorder(()=>{
                    payment(ordersuccessfull)
                })
            })
        })
    })  
})   
