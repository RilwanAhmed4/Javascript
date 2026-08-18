function arithmetic()
{
    let a = 10;
    let b = 5;
    console.log("Addition is", a+b); //15
    console.log("Subtraction is", a-b); //5
    console.log("Multiplication is", a*b); //50
    console.log("Division is", a/b); //2
    console.log("Modulus is", a%b); //0
    console.log("Exponentiation is", a**b); //100000
    
    //++a; //pre-increment operator
    //a++; //increment operator
    //--a; //pre-decrement operator
    //a--; //decrement operator

    //console.log(++a);
    //console.log(a++);
    //console.log(--a);
    //console.log(a--); 
    console.log(a);  
    
    console.log(--b);
    console.log(b); //true
        

}
arithmetic();



//assignment operators

function assignment(){
    let a = 10;
    let b = 5;
    console.log( a+=b); //15
    console.log( a-=b); //10
    console.log( a*=b); //50
    console.log( a/=b); //10
    console.log( a%=b); //0
    console.log( a**=b); //0
}
assignment();



//assignment operators

function assignment(){
    let a = 10;
    let b = 5;
    console.log( a+=b); 
    console.log( a-=b); 
    console.log( a*=b); 
    console.log( a/=b); 
    console.log( a%=b); 
    console.log( a**=b); 
}
assignment();


function assignment(){
    let a = 10;
    let b = 5;
    console.log(b+=a); //15
    console.log(b-=a); //5 
    console.log(b*=a); //50
    console.log(b/=a); //5
    console.log(b%=a); //5
    console.log(b**=a); //9765625  
}
assignment();

//equality operators

function equality()
{
    let a = 20;
    let b = 30;
    let c = "20";
    let d = 20;
    // == operator checks only value
    console.log(a==d); //true
    console.log(d==c); // true
    console.log(b==c); //true

    // === operator checks value and type
    console.log(a===d);  //true
    console.log(a===b);  //false
    console.log(b===c);  //false

    // != operator checks only value
    console.log(a!=b); // true
    console.log(a!=d); // false
    console.log(b!=c); // true
    // !== operator checks value and type
    console.log(a!==b); // true 
    console.log(a!==d); // false
}   
equality();

//comparison operators

function comparison()
 {
    let a = 25;
    let b = 20;
    let c = 20;
    console.log(a>b); //true
    console.log(a<b); //false
    console.log(a>=b); //true
    console.log(b<=c); //true
 }       
comparison();

//logical operators

function logical()
{
    let a = 25;
    let b = 10;
    let c = "10";
    let d = 25;

    console.log(a == d && b != c); //false
    console.log(a < b && a!= d); //false
    console.log(a < b && a===d); //true

    console.log(a == d || b != c); //true
    console.log(a < b || a!= d); //false
    console.log(a < b || a===d); //true

}   
logical();


//ternary operator
let age = 25;

const ouput= (age >= 18)? "can able to access Gpay" : "cannot able to access Gpay";
console.log(ouput);



//mark 35 or 35 equal to pass 
let mark = 30;

const result = (mark >= 35)? "pass" : "fail";
console.log(result);








