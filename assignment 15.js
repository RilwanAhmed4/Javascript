//reverse the string without changing the position 	input="my name is shalu"   output="ym eman si ulahs

let input="my name is rilwan"
let word = input.split(" ");


for (let i=0; i<word.length;i++){
console.log(word[i]);

let output = "";

for (let  j = word.length - 1; j>= 0; j--) {
   
  output = output + word[j];  
}
 console.log(output)

}



//let input="my name is rilwan";
let input="thank you abinaya";
let word= input.split(" ");
let revSentance="";

for (let i=0; i<word.length;i++){
    
    let revWord = "";
    let myWord=word[i];
       

    for (let  j = myWord.length - 1; j>= 0; j--) {
   
        revWord = revWord + myWord[j];  
        
  
    }

    revSentance=revSentance+revWord+" ";
        
}

console.log(revSentance);




