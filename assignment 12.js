//palindrome	"moon" === "noom"//let pal="moon"
let pal="afifa"
pal1=pal.split("")
console.log(pal1);
pal2=pal1.reverse()
console.log(pal2);
pal3=pal2.join("")
console.log(pal3);

if (pal === pal3) {
  console.log(pal + " is a palindrome");
} else {
  console.log(pal + " is NOT a palindrome");
} 

// Combined method
let pals1="television"
pals2=pals1.split("").reverse().join("")
console.log(pals2);
if (pals1 === pals2) {
  console.log(pals1 + " is a palindrome");
} else {
  console.log(pals1 + " is NOT a palindrome");
} 
