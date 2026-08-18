//.take any 6 names in the array
//	=>Filter names with length > 3.
//	=>Map them to uppercase.


let name=["Rilwan","ria","Shobana","rahul","abi"];

let name1=name.filter((name)=>name.length>3)
console.log(name1);

let upper=name1.map((name)=>name.toUpperCase())
console.log(upper);

