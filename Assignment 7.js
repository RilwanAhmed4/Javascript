//[+ , - , * , / , % , **]

let operator="/" 

let a=57;
let b=20

switch(operator){
    case "+":
    console.log("addition:",a+b );
    break;
    case "-":
    console.log("subtraction:",a-b);
    break;
    case "*":
    console.log("multipication:",a*b);
    break;
    case "/":
    console.log("division:",a/b);
    break;
    case "%":
    console.log("modulus:",a%b);
    break;
    case "**":
    console.log("power:",a**b);
    break;
    default:
       console.log("check the input");
}