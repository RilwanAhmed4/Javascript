//object is a collection of key value pair. 
// It is a non-primitive data type.
//  It can store multiple values in a single variable.
//  It is mutable, which means that the values can be changed. 
// It is similar to JSON (JavaScript Object Notation). It is used to represent real-world entities and their properties. It can be created using object literal syntax or using the Object constructor.

let details={
    name:"Rilwan" ,
    role:"TEST ENGINEER",
    experience:3
}
console.log(details);
console.log(details.role);
details.role="SENIOR QA"
console.log(details);
console.log(details.role,details.experience); //single row ouput 


let electronic=[
    {
        name:"fan",
        cost:5000
    },
    {
        name:"frigde",
        cost:25000
    }
]
console.log(electronic[0].name);





 let company = [
     "Zenv", //string=> 0
     2026,   // number =>1
     ["Chennai", "Coimbatore", "Bangalore"], //array => 2
     {
         department: "QA",
         employees: [
             { name: "Shalini", role: "Test Engineer", skills: ["Playwright", "Javascript", "API Testing"] },
             { name: "Rudra", role: "QA Analyst", skills: ["Java", "Selenium", "Rest API"] }
         ]
     },  //object index 3
     [
         { project: "AutoShop360", status: "Ongoing" },
         { project: "QuickCart", status: "Completed" }
     ]  //array => 4
 ];
 
 //console.log(company[3].employees[0].role);
 //console.log(company[4][0].project);
 console.log(company[2][1]);
 console.log(company[3].employees[1].role);
 console.log(company[3].employees[0].skills[2]);
 console.log(company[4][1].status);




 //coimbatore 
 //qa analyst 
 //api testeding
 //completed



 

