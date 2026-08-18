//array -> list of values --->index=0

//let day=["monday","tuesday","wednesdsy","thursday", 6]
//console.log(day[4]);
//day[4]="friday"
//console.log(day);

//push
let fruit=["apple","orange","grape","kiwi","cherry"]
console.log(fruit);
//push
fruit.push("banana")
console.log(fruit);
//pop
fruit.pop()
console.log(fruit);
//shift
fruit.shift("apple")
console.log(fruit);
//unshift
fruit.unshift("plums")
console.log(fruit);
//slice
console.log(fruit.slice(2,4));
console.log(fruit.slice(-3,-1));
//splice -add, replace,delete
fruit.splice(1,0 ,"strawberry");//add
console.log(fruit);
fruit.splice(3,1);//remove
console.log(fruit);
fruit.splice(2,1,"blueberry");//replace  
console.log(fruit);
//reverse
console.log(fruit.reverse());
//sort
console.log(fruit.sort());
//
console.log(fruit.reverse());
//include
console.log(fruit.includes("cherry"));


let num=[1,2,3,1,5,9,7,1,6]

console.log(num.indexOf(1));
console.log(num.lastIndexOf(1));
console.log(num.concat());



//map | reduce| filter

//map

let num=[1,2,3,4,5,6,7,8,9];

let five=num.map((el)=>el*5)
console.log(five);

//filter

let even=num.filter((el)=>el%2==0)
console.log(even);

let sum=num.reduce ((acc,el)=>acc+el,200)
console.log(sum);







