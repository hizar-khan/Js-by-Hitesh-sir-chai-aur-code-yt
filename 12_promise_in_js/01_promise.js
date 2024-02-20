// promise mean that the code/program will run/execute in future.
// the promise may fullfilled or may be failed 
//promise have three states i) pending(netiher succes nor failed) ii)fullfilled iii) failed
// promise is an object
// The Promise objcet represents the eventual completion or failure of an asynchronous operation and its resulting value.
// we can create and consume(already created promises) promises, but mostly we will consume them.
// in old days, developers were using promise libraries like Q or bluebird etc  
// these libraries were appriciated and later integrated in the node.js/js.


// promise have two parts i)creation of promise ii)consume of he promise
// promise take two callbacks/methods as  parameters --> resolve and reject, these parameter/callback/methods are given by the js
// resolve is connected with .then and reject with catch
// .then have also callback ftn which will execute when the promise is resolve 
//
// syntx
/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()/reject()
    }, timeout);
})
.then(()=>{
    console.log('response arrived');
})
.catch((err) =>{
    console.log(err);
})
*/

/*
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptoGrapy, network calls
    setTimeout(() => {
        console.log('Async Taks is complete');
    resolve()

    }, 1000);
})
promiseOne.then(function(){
    console.log('promices comsumed');
})
*/
/*
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async completed');
        resolve()
    }, 1000);
})
.then(function() {
    console.log("reslove finishedd");
})
.then(function(){
    console.log('task 3 compeld');
})
*/

// we can send any type of data as argument into the callback of .then(runction(para){}) the para will save/get values that are send as an argumnt inside the resolve()
// these resolve and .then realtions are automatically given by the js
 /*
new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("task3 commpleted");
        resolve({usernaem: "hizar khan", email:"hizar@example.coom"});
    }, 1000);
})
.then(function(userObj) {
    console.log(userObj); 
}) 
*/
// let catch an error
/*
new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({userName: "Hizar Khan", address: "peshwar pakistan"})
        }else{
            reject('Error: Something went wrong')
        }
        
    }, 1000);
})
.then((user)=>{
    console.log(user);
})
.catch(function (error) {
    console.log(error);
})
*/
/*
  new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log("task3 commpleted");
        resolve({username: "hizar khan", email:"hizar@example.coom"});
    }, 1000);
})
.then(function (userObj) {
    console.log(userObj); // { username: 'hizar khan', email: 'hizar@example.coom' }
    return userObj.username // this will return inside the .then
})
.then((username) => {
    console.log('my name is:',username); //my name is: hizar khan
})
.catch((err)=>{
    console.log('ERROR caught:', err);
})
.finally(()=>{
    console.log('jo hona ta wo hogya,, ab ye(finaly()) har hall ma execute kro');
})

*/
// we can handle the promise with try-catch insted of then-catch
// we can also hadle promise with async-await
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error){
//         resolve({name:'Hizar khan', promiseNo:5})
            
//         }else{
//         reject("ERROR: Wrong Name")
    
//         }
//     }, 1000);
// })
// async-await wait for the the response
// in this we are not handle catch grassfully
// the problem of async-await, it can't handle the Error(reject())
// so for this we can put it in try and catch if there is reject() / error

// for resolve() 
// async function consumePromiseFive(){
//    const response =  await promiseFive // wating for the promiseFive response
//    console.log(response);
// }
// consumePromiseFive()

// for reject() 
// use async-await with try-catch to handle the error/reject()
// async function consumePromiseFive(){
//    try {
//     const response =  await promiseFive // wating for the promiseFive response
//    console.log(response);
//    } catch (error) {
//     console.log('TRY_CTACH ERROR--',error);
//    }
// }
// consumePromiseFive()

// await in await
// async function consumePromiseFive(){
//     try {
//      const response =  await promiseFive // wating for the promiseFive response
//     console.log(response);
//     const userName = await response.name
//     console.log('MYNAME IS:', userName);
//     const noOfPromise = await response.promiseNo
//     console.log('PROMISENO::', noOfPromise);
//     } catch (error) {
//      console.log('TRY_CTACH ERROR--',error);
//     }
//  }
//  consumePromiseFive()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
async function getAllUsers(){
 try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //first check typeof respone, convert it to json or object as response.json() bcz mostly the response will come in string
    // console.log(response);
 const data =  await response.json() // this conversion also take time, we ill put await before it
 console.log('ALL Userse', data);

 } catch (error) {
    console.log('ERROR', error);
 }
}

getAllUsers()
*/
//let do the above code in then-catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return  response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log('ERROR', err);
})








 


// hizar want to do javaScript project but hizar does'nt have the resources whle Ali have 
// hizar want these resources, he will request to Ali to give me that resouces, 
// Ali make a promise with hizar that i will provide that resources to you later
// const Ali = {
//     AliJsResources(){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('Js Resources')
//             }, 5000);
//         })

//     },
//     frames(){
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('frames also received')
//             }, 1000);
//         })

//     },
//     handleError(){
//         return new Promise((resolve, reject) =>{
//             setTimeout(() => {
//                 resolve('SomeThing Went Wrong')
//             }, 2000);
//         })
//     }
// }

// const hizar = {
//  DoJsProject (){
//    const resouces = Ali.AliJsResources();
//    resouces
//    .then((receive) => {
//     console.log('Received:', receive);
//     console.log('Start Doing Project');
//     return Ali.frames()
//    })
//    .then((receive) => {
//     console.log('recived :', receive);
//     return Ali.handleError()
//    })
//    .catch((err) =>{
//     console.log('ERRor:',err);
//    })
//  }
// }
// hizar.DoJsProject()

// Promise All ----
// const hizar = {
//     DoJsProject(){
//         const promises = Promise.all([Ali.AliJsResources(), Ali.frames()])
//         promises.then(([resouces, frame]) =>{
//               console.log('Received:', resouces);
//               console.log('recived :', frame);
//               console.log('Start Doing Project');
//         })
//     }
// }
// hizar.DoJsProject()
