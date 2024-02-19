// promise mean that the code/program will run/execute in future.
// the promise may fullfilled or may be failed 
//promise have three states i) pending(netiher succes nor failed) ii)fullfilled iii) failed
// promise is an object

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptoGrapy ,  network calls
    setTimeout(() => {
        console.log('Async Taks is complete');
    }, 1000);
})
promiseOne.then(function(){
    console.log('promices comsumed');
})