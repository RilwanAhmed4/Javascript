function goShop(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const go = true; 
      if (go){
        resolve("going for shopping");
      } 
      else{
        reject("not going");
      }
    }, 3000); 
  })
}

function shopping(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      let shop = true; // Change this to true or false successful shopping
      if (shop){
        resolve("doing shopping");
      }
      else{
        reject("not yet started shopping");
      }
    }, 6000); 
  })
}

function backShop() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let back=false; 
      if (back) {
        resolve("returning home");
      }
      else {
        reject("still shopping");
      }
    }, 2500); 
  })
}

// goShop().then((el)=>{console.log(el);return shopping()})
//         .then((el)=>{console.log(el);return backShop()}) 
//         .then((el)=>{console.log(el);console.log("happy shopping ")})
//         .catch((err)=>{console.log("Error : ", err)}); 

async function  purchase() {

  // await goShop();
  // await shopping();
  // await backShop();
  //console.log("happy shopping");
  //
  // const a = await goShop();
  // console.log(a);
  // const b = await shopping();
  // console.log(b);
  // const c = await backShop();
  // console.log(c);
  try {
    const a = await goShop();
    console.log(a);
    const b = await shopping();
    console.log(b);
    const c = await backShop();
    console.log(c);
  }
  
  catch (err) {
    console.log("Error : ", err);
  }
}

purchase();

  
