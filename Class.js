class Detail{

    name="rilwan" //properties
    role="QA"
    exp=2

    demo(){   //method
         console.log("Hi, I am",this.name);
         console.log("and My Role is",this.role);
         console.log("I have",this.exp,"year experience");
    }
}

let personOne=new Detail
console.log(personOne.name);
personOne.demo()

console.log("******************");


let personTwo=new Detail
//console.log(personTwo.role);
//personTwo.demo()

class Movie{
    constructor(name,actName,actsName){ //specila function// this=current class ref //easy access //without call it will trigger while creating object // default
         this.name=name;
         this.actName=actName;
         this.actsName=actsName;    
    }
    title(){
        console.log("Movie Name is",this.name);
    }
    artist(){
        console.log("Actor and Actress names is",this.actName,"and",this.actsName);
    }
}
//object creation
let movieOne=new Movie("karuppu","suriya","thrisha"); //
//console.log(movieOne.name);
movieOne.title();
movieOne.artist();

let movieTwo=new Movie("leo","vijay","thrisha"); //
movieTwo.title();
movieTwo.artist();


  


