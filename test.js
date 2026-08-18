// // a. Create 3 variables
// let name = "Rilwan";
// let programmingLanguage = "JavaScript";
// let experience = "2"; // years of experience

// // b. Print them in a single sentence like a profile summary
// console.log(`My name is ${name}, I code in ${programmingLanguage}, and I have ${experience} years of experience.`);

// // c. Update ONLY the years of experience variable to +1 and print again
// experience = experience + 1;
// console.log(`My name is ${name}, I code in ${programmingLanguage}, and I will have ${experience} years of experience next year.`);




//let input="my name is rilwan";
let input="Hi hello welcome all";
let word= input.split(" ");
console.log(word);
let revSentance="";
console.log(revSentance);

for (let i=0; i<word.length;i++){
    
    let revWord = "";
    console.log(revWord);
    let myWord=word[i];
    console.log(myWord);
       

    for (let  j = myWord.length - 1; j>= 0; j--) {
   
        revWord = revWord + myWord[j];  
        console.log(revWord);
        
  
    }

    revSentance=revSentance+revWord+" ";
    console.log(revSentance);
        
}

console.log(revSentance);

