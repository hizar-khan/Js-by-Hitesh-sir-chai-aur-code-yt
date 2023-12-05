//Functions 
// functions mean some lines of code that do some thing and we can use that lines of code again and again 
// kuch code jokey hum ny ak package mein band ,aur wo package hum more than one time use krskty hy. 
// we just call the name of that package/function to do what inside that funcions
//e.g
/**
 function ftnName (){
    body to execute
 }
 ftnName() // calling a function
 ftnName = ftunciton refenence
 ftnName () --function execution
 */

/*
function ftnName (parName){
    console.log(parName);

    console.log("Hello this is a funciton ");
    console.log("we use that funcion more than one time");
    console.log("without writing the whole code  ");
    console.log("we just call name of that function");
    console.log("it's save time and reduce extra code");
    console.log("**********************************");

}

ftnName('---first time calling a function--------') //calling ftn
ftnName('--second time calling a function-----') //calling ftn
ftnName('--third time calling a function-----') //calling ftn

 */

// write a funciton to add two numbers
/*
function addTwo (firstNo, secondNo){
    add = firstNo + secondNo
    console.log(add); 
   
    
}
 addTwo(2,'hell')

 */
// function in js is very interesitng 
//e.g

/*


function addTwo (firstNo, secondNo){
    add = firstNo + secondNo
    console.log(add); 
   
    
}
 const result = addTwo(2,3)
 console.log("result:",result); // it will give undifined bcoz we didn't return any thing to that function(addTwo)
// so inthe above varible 'result' we save addTwo() but it return nothing that is why varible result = "undifined\"
 



function retrnAdd (firstNo, secondNo){
    add = firstNo + secondNo
    console.log(add); 
    console.log("i'm using return ");
    return add
    console.log("this log will never print --it's by-default rule that after return nothing will print/execute in funciton");
   
    
}
 const retutningValue = retrnAdd(2,3)
 console.log("retun:",retutningValue);

// 3rd way to print body of function
function newFtn  (num1, num2){
 return num1 + num2
}
const newRetrn = newFtn(4,4)
console.log(newFtn(5,5));
console.log(newRetrn);

**/

/// more on function


/** 
function loginUserMsg (userName){
    return `${userName}: just logIn`
}

// peinting functoin
loginUserMsg("hizar khan")// print nothing coz in ftn body we are retuning to the function not printing inside the body of ftn
console.log(loginUserMsg("Ali khan"));
const logIn = loginUserMsg("hizar khan")// here we are keeping what are the ftn retrun in a varibale 'logIn'
console.log(logIn);
// if we pass nothing in argument than undifined will print
console.log(loginUserMsg());

*/
/*

function loggIng (newUser){
    if(newUser === undefined){
        console.log("Please! Enter User_Name");
        return // this return me to not print after the above log (what belwow/after that return keyword)
        console.log("heloaooa matata"); // this will not print
    }
    
// else {console.log(`${newUser} :is newUser `); }
// return console.log(`${newUser} :is newUser `);
// return `${newUser} :is newUser `
    
}
console.log("---------------");
// console.log(loggIng());
// loggIng("hello")
// console.log(loggIng("hello! Kamran Bangash"));
// console.log(loggIng());
// loggIng()

*/

// when you want to never print undifined
// than give by-defualt value to the parameter

function newUser (userName = "Hizar Khan"){
    if(!userName){
        console.log("Enter userName");
    }
    return `${userName}:is new User`
}
console.log(newUser());
console.log(newUser("sam"));
