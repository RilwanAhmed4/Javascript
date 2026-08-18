function studentreport(name, age, tamil, english, maths, science, ss)
{
  //name
    let name1=name.toUpperCase()
    console.log("name :", name1);
  //age
    console.log("age :", age);   
  //total
    let total = tamil + english + maths + science + ss
  //percentage  
    let percentage = (total/500)*100
    console.log("percentage :", percentage);

  //remarks
if (percentage>=91 && percentage<=100)
{
   console.log("remark : excellent")
} 
else if
    (percentage>=71 && percentage<=90)
{
   console.log("remark : very good")
} 
else if
    (percentage>=51 && percentage<=70)
{
   console.log("remark : good")
} 

else if
    (percentage>=35 && percentage<=50)
{
   console.log("remark : average")
} 
else
{
     console.log("remark : fail")
}
}
 studentreport("Ahmed",31,50,88,55,66,87)

