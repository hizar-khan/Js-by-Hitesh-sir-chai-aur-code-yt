// fetch()
// fetch is very exciting feature in node.js(it was already availble in browser)
// fetch return promise
// fetch execution have micro/pririoty/Queue mean its execution will be
// fisrt than anyOther async code e.g seTimeout,SetInterval etc 
// where will you find 404 error in resolve or reject ---- in resolve

// fetch() works into two parts i) webBrower/node handle network request 
// ii) data(variable) store  in memory/ data spce reserve
// first it reserve space in memory as varible , it have also two ohter variables
// i)onfulfilled[]mean(resolve()) ii)onRejection[] mean(reject())
// we can't push data inside the onfulfilled[] or onrejection[] arrays because 
// they are not in our range,these are privite filed, we can't access them,
// the variable which reserve data alsoo private/
// web browser access web browser api or handle node api, from their a network request send and response
// came which will go  inside the onFilfulled[] (even the error responses e.g error:404 will also came inseide resove[])
// if no respone came or the request not set or request hange than the rejection will happen from  thanthe onRejection[],
// ( rejeciton mean no response came)
// initially the data(variable) will be undefined(empty) when the response came from the web broweser network request 
// than it will go either insede the onfullfilled[] or insede the onrejection[] and inside these their will be ftn 
// (onfullfilled[ftn],onRejection[ftn]) which is responsible to fullfilled data(variable) with value
// so that data will fulfilled the varible give/assign to the fetch()--> response = fetch()
// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Async completed');
//         resolve()
//     }, 2000);
// })
// .then(function() {
//     console.log("reslove finishedd");
// })  

// fetch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((data)=>{
   
//     return data.json()
// }).then((respone)=>{
//     console.log(respone);
// })
// .catch((error)=>{
//     console.log('ERROR', error);
// })

// fetch using async-await try-catch
// async function fetchData(){
//     try {
//          const respone = await fetch('https://jsonplaceholder.typicode.com/users')
//            const data =  await respone.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData()

// fetch without using try-catch in async
// async function fetching(){
//     const respone = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await respone.json()
//     console.log(data);
//     }
//     fetching()

// 