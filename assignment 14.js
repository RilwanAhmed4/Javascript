//.reverse a string  input="shalu"  output="ulahs"

// 2.multiplication table
// 1*5=5 
// 2*5=10
// ..
// ..
// 
// 10*5=50

let num =10;

for(let i=1;i<=10;i++){
    console.log(i , "*", num, "=", i*num);
    
}

//.reverse a string  input="shalu"  output="ulahs"

let input=["rilwan"]

for(let i=0;i<input.length;i++){
   console.log(input[i].split("").reverse().join("")); 
}


let input1="rilwan"
for (let i=input1.length-1;i>=0;i--){
    
    console.log(input1[i]);
}


let input1 = "my name is rilwan";
let output = "";

for (let i = input1.length - 1; i >= 0; i--) {
    output = output + input1[i];  
   
}
 console.log(output)









 
 let input1 = "rilwan";
let output = "";

for (let i = input1.length - 1; i >= 0; i--) {
    output += input1[i];  
   
}
 console.log(output)




 
