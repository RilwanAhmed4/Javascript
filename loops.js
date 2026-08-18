//for loop

for(let i=0;i<=10;i++)   //intialization: condition : oncre/decre
  {
    console.log(i); //0 -1 - 2
    //i-1 2 3
}


let x=0;
for(let i=0;i<=10;i++){
     x+=i // x=x+i 0+0=0 0+1=1 1+2=3 3+3=6
    //console.log(x);
}

console.log(x);


//0 1 3 6 10 15 21 28
//55

let day=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"] //index

//for(let i=0;i<=4;i++)
 //for(let i=0;i<=6;i++)
 for(let i=0;i<day.length;i++) //i<8
{
    //console.log(i);
    console.log(day[i]);
    
}

let str="monday"
for(let i=0;i<str.length;i++){
    console.log(str[i]);
    
}


//while loop

let num=0;
while(num<=10){
    console.log(num);
} //infinite

let num=0;
while(num<=10){  //only conditon satisfy
    num++;
    console.log(num);
    //num++;
} // num will print
 
//let  num=[67,87,95,58,34,25,36,75,35,15,69,72];
let  num=[67,35,87,95,58,34,25,36,75,35,15,69,72];
let i=0;

while(num[i]!=35){
    console.log(num[i]);
    i++
}

//do while loop

let two=1;
do{
    console.log(two);
    two++;
}
//while(two<=10)
while(two>=10)


// for of
//for of loop is used to iterate over the values of an 
// iterable object. It returns the values of the object.

let pet =["cat","dog","parrot","fish","rabbit"];

for(let i of pet){
    console.log(i);
}


let str="monday"
for(let i of str){
    console.log(i);  
}

//for in -->key
//for in loop is used to iterate 
// over the properties of an object. 
// It returns the keys of the object.

let obj={
    name:"rilwan",
    age:1,
    place:"pdy"
}
for (let i in obj)
    console.log(i,"-",obj[i]);
    


let pet =["cat","dog","parrot","fish","rabbit"];

for(let i in pet){
    console.log(i,"-",pet[i]);
}

//for eacj -- only array --value/ index/ array

let flower=["rose","jasmine","lily","lotus","sunflower"]

//flower.forEach((val,ind,arr)=>
flower.forEach((b)=>  
    {
    //console.log(val,ind,arr);
    console.log(b)
})
