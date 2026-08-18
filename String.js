
let one="hello hi welcome\ngood morning"; //  
let two='hi';
let three=`i am "Rilwan" i am a QA engineer don't 
welcome all ${one} & ${two}`

//console.log(three);

//string methods

let str="Welcome to Chennai" //index=0 length =1
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(8));
console.log(str.indexOf("e")); //1
console.log(str.lastIndexOf("e")); //13
console.log(str.startsWith("Wel")); 
console.log(str.endsWith("Chennai"));
console.log(str.includes("to"));

console.log(str.slice(0,7)); //index number 
console.log(str.slice(11,18)); 
console.log(str.slice(-10,-8)); 
console.log(str.slice(-7)); 


let str="Welcome to Chennai" //index=0 length =1
console.log(str.replace("Chennai","Coimbatore"));
console.log(str.split("t"));

//task
//banana -> b@n@n@ 
// each char split ["w","e",]

let dummy="         hello       world       "
console.log(dummy);
console.log(dummy.trim());//front and back 
console.log(str.concat(dummy));

