//class =1        || student mark
//
//1. Create a class (students) and pass the name, section in the constructor
//inside the class create a function to calculate the percentage of the student
//after creating the class and constructor create 5 object by the name of student1, student2, ... student5

//output
//name: siva
//section: B
//percentage: 88%

class Student{
    constructor(name,section){ 
         this.name=name;
         this.section=section;    
    }
       Percentage(tamil, english, maths, science, social) {
        let total = tamil + english + maths + science + social;
        let percentage = (total / 500) * 100;
        return percentage;
    }
    output(tamil, english, maths, science, social){
        console.log("Name:", this.name);
        console.log("Section:", this.section);
        console.log("Percentage:", this.Percentage(tamil, english, maths, science, social), "%");
       
    }
}

let student1 = new Student("afifa", "c");
let student2 = new Student("basha", "A");
let student3 = new Student("raya", "C");
let student4 = new Student("anu", "B");
let student5 = new Student("divya", "A");

student1.output(55, 57, 35, 69, 45);
student2.output(80, 99, 55, 95, 50);
student3.output(50, 65, 73, 60, 66);
student4.output(60, 44, 45, 88, 77);
student5.output(49, 79, 69, 59, 49);
