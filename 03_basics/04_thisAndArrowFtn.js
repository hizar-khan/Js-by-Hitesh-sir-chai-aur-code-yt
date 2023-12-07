// Arrow ftn is Es-6 feature
// "this" keyword tell us about current context
// to know arrow ftn ,we must know "this" ,and also objects understanding ,, lets give a shot to all these

/** 
// let we have an obj
// we are registring a user on website
const user = {
    userName : "Hizar Khan",
    id   : 9,
    welcomeMsg : function (){
       
        console.log(`${this.userName} , welcome to the Website`); // here we want  that  any user came in to the website,
        // the "wlcomeftnmsg" will greet him, 
           /// "this " is used bcoz we are referring the current context , that is inside the obj {}
           console.log(this);
    }

}

// user.welcomeMsg()
//what if someOne change userName e.g

// user.userName = "Ali khan"
// as here we are changing the context(userName) ,
// user.welcomeMsg() // now output is " Ali khan , welcome to the website"


// in the above obj we know the current context , which is anyThing inside the obj but
// what if we use "this" outside the obj, than what will be current context for "this"
// user.welcomeMsg()
console.log(this);// output will be :{} , Bcozz as "this" keyword refer
// current context and we are using "this" as global scope and we have nothing in global  
/**that is why output will be :{} , aslo  here we are working in node enviroment , 
 it refer to the global current context and we have nothing in globa l*/ 

/**  but but but if we console.log(this) in broswer than we will see output: Window {} ,
this bcoz in broser we have Window object is a Global object, so window obj is current context for "this" 
*/

// in old days there was only one way to execute js that was in browser , 
/** so the engine of js was/is inside the browser ,that is why whenever we c.log(this) than we will 
get(output) Window obj which is Global object ,but now   js Engines are  stands alone e.g node, deno etc */


/*
function chai (){
    let username = "hizar khan"
    console.log(this);
}
 chai() // we will get many things  due to "this" coz funcion have many pr-defined  things 
 */

 /* 
function code ()
{
    let username = "hizar khan"
    console.log(this.username);
}
code() // this will give "undifiend " coz we get it  only in object
*/
/* 
// Arrow function
// syntx: const ftnName = () =>{} 
const arrowFtn = ()=>{
    console.log("i am Arrow Function");
}
// arrowFtn()
//   can   "this" will work in Arrow funciton
//lets check it
const thisInArrowFtn = ()=>{
    let username = "Hizar khan"
    console.log(this); // output: {} 
} 
thisInArrowFtn()

const thisInArrow = ()=>{
    let username = "Hizar khan"
    console.log(this.username); // output: undifined
} 
thisInArrow()
// so most of people will tell you that "this " can work in simple function but not in Arrow funcion but
// this is not true as we checked above

*/

//more on Arrow ftn
// syntx of Arrow ftn
/**
 
  () => {}
   or
   we can hold (give name) arrow  function in a Variable like ftn expression
   const arrowFtn = () => {}
  
 const addNumbers = (num1, num2) => {
    console.log(num1 + num2); // 10
    console.log(- num1  - num2); // -10

    console.log(`${num1 + num2}`);//10
    console.log(`${num1} + ${num2}`);// 5 + 5
 }
 addNumbers(5,5)
 */ 


 // implicit return ,in this we can't write {} and return keyword ,
 //WE write like const ftnName = () => num1 + num 2 , it itself return statements to the ftn name
//e.g
// first way to write Arrow function (also callled explicit return , {} must )
const add =(num1, num2) => {
    // console.log(num1+num2);
    return num1 + num2
}
// add(100,100) // 200
console.log(add(2,2)); // 4 and 4

// second way to write Arrow function (implicit return) // here no need of {} and "return" keyword
 const ftnName = (num1, num2) => num1 + num2 // no need of {}and return
ftnName(2,4) //nothing will print coz implist return to the ftn name so we will c.dlog it
console.log(ftnName(2,4));


  // we can write () insted of {}
  
 const addNum = (num1, num2) => (num1 + num2)
 addNum(1,9) // nothing will print coz ftn returning , so we will log it
 console.log(addNum(1,9));

 // we can directly c.log()  insted of return{} ,(), 
const addTwo = (num1, num2) => console.log(num1 + num2); // 

addTwo(4,5)

// if you are using implicit than use implisti with () coz if you want to return an object than if we use object without () than
// it will give undifined but if we use put obj in () than it will return
const rtnObj = ()=> {name:"retruning Object"} // it will give undifined
console.log(rtnObj());//undifined

const objReturning = ()=> ({name:"retruning Object"} )// it will give return object so if you want to use implicit return than use it with parenthesis ()
console.log(objReturning());

// array with implicit return
// without () and with ()

const arrayRetrn = () => [200,300,400]
console.log(arrayRetrn());

const retrnArray = () => ([200,3309,4499])
console.log(retrnArray());
// both will retrun  array 