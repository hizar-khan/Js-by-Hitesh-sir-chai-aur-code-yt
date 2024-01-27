// IIFE: Immediately Invoked Function Expression 
// A ftn that is directly execute
// iife is used to make a private/ un-accesible variable
// why we use iife
// someTime we have a file which contain only dataBase Connection ,so when our application start 
//than the connection in that file automictly start.
// sometime the global scope have some varibales and sometime in a fuction we have global scope variables so 
// we don't want create any problems in ftn as global varibles are avilable for local(childs) varible 
// which may polluite the function form global variable
// so to avoide the global scope pollution
// therfore  we use iife that will also Immediately execute the code
 // syntx
 /**
 (function ftnName (){

 })
 () 


  */
 
 (function iife (){

  console.log(`Immediately invoke function`);
})
(); // 'Immediately invoke function' // remember if we run more than one iife function we must end each function with ";" otherWise error will occur
/// the above function is know as "named iffe" due it's name

// the below iffe is simple iffe ,iife with no name
( (name) => {
  console.log(`hello ${name}`);
} ) 
("passing argumnt") // 'hello passing argumnt'