// global and local scope
// every time you/we see { } ,it maybe of functoin or if/else curly brackets ,than think that  it's scope,,,,,
//expcet the object curly brackets
// function {} or if/else {} are scopes  // what is indside of that {}are scopes of that funtion/if/else
// what inside that curly brackets {} will work/access inside that brackets
// it will be not avaliable/accesable to the outside of that {}
// but what outside of that curly bracktes are global scope and we can access global scope indside
// the curly brackets {} and aslo outside the brackets
// inshort local scope are block scope that only accessible / avalible inside that curly bracket {} while
// global scope are accessible/avalible everyWhere .we can acces it inside and outside the brackets
//remeber global scope always wiritten outside the brackets  while local scope will always written inside
//the curly brackets(of function/if/else not of objects brakkets)
/*
| Scope    | Created By           | Accessible Outside? | Keywords                |
| -------- | -------------------- | ------------------- | ----------------------- |
| Global   | Outside any function | Yes                 | `var`, `let`, `const`   |
| Function | Function             | No                  | `var` (function-scoped) |
| Local    | Function             | No                  | `var`, `let`, `const`   |
| Block    | `{}` (loops, if)     | No                  | `let`, `const` only     |

*/






/**
if(true)
{
    let a = 20 // local scope
    const  b = 49 //local scope 
    var c = 33 // global scope
}
// console.log(a); // this will give error coz here we are using 'let' which is  is local scope dependent

// console.log(b); // this will also give an error coz here we are using  "const" which also scope dependent
console.log(c); // this will print without making any error coz 'var' is not block scope but a funciton socpe () //it is not global scope 
// it is funciton scope but not block scope mean in if block it will be accesible outisde that scope
// 
// that is why  it's not recomended to use

 -----------more on var---------
 Variables declared with var inside a function have function scope. 
 This means they are only accessible within the function in which they are declared.
Example:
function myFunction() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible
}
console.log(localVar); // Not accessible, will throw an error
So, while variables declared with var do not strictly adhere to block scope,
 they still have the concept of global and function scope. Variables declared 
 with var at the top level (outside of any function) are global in scope.
 ------------------------------------------
 */
/** 
// what if  we have two variable of same name one is local and other is global scope . 
//than if we c.log it inside the brackets as well as outside the brackets than which one will print 
//e.g 
let xyz = "i am Golbal socpe variable"
if(true){
    let xyz = "I am Local socpe variable" 
    // if we remove this varibles the the c.log insde { } will get access
   //  the outside xyz varible due to it's Globla scope 
    console.log(xyz); // 'I am Local socpe variable' but this can access the outsider (global scope) varibles 
}
console.log(xyz); // 'i am Golbal socpe variable'
 // this c.log will  print the outsider xyz not access inseder xyz {}
*/
/** 

// accessing global scope variable from brackets
let val = " I am Global scope Varaible"
if(true){
    console.log(val); // " I am Global scope Varaible"
}
*/

/** 

// accesing a global scope varaible from both outside and inside brackets

let global = "Global vaiable accessed"
if(true){
    console.log(global,"::Locally"); // 'Global vaiable accessed' '::Locally'
}
console.log(global, ":globaly"); // 'Global vaiable accessed' ':globaly'

*/

//Nested scope
// suppose we have ftn which have other ftn(nested ftn)

function mainFtn() {
   const userName = "Hizar khan";
   console.log(userName);
   console.log(website); // give error coz we can't access child varibles but child can access the parent vaibales
  function nstedFtn() {
    const website = "YouTube";
    console.log(website);
    console.log(userName);
    // output :hizar khan , coz nested ftn (lcoal ) can get access to the parent ftn (global) variable
  }
  // console.log(website); // it will give error coz parent function (global) can not access to the nested ftn (child/local) variable
  nstedFtn(); // 'YouTube' 'Hizar khan'
}

mainFtn();

// nested function can get access of the parent varibles but
// parent function can't access variables of nested (child) function
// because parent ftn is act as a global scope ftn to the child ftn
// and that child ftn create their own memory stack
//it is like elder can give ice-cream to younger but elder can take ice-cream from younger hahaah

// we can do above things in if/else
/** 
if(true){
    const name = "iam parent variable"
    if(true){
        const user = "iam child variable"
        console.log(name + ' --AND-- '+ user);// it will print  // 'iam parent variable --AND-- iam child variable'
    }
    // console.log(user); // give error coz parent can access to child varibale
  
}
//console.log(name);// give error coz it is scope inside the if(){} so we can get it outside it

*/

/** 

// /--------------- simple/basic ftn and expression ftn  --------------- 


// ********** Simple/Basic Function
function addOne (num){
    return num + 1

}
addOne(5) // only return not print
console.log(addOne(5)); // 6

// but someTime we write above ftn as;

// --------------- Expression function like Variable ftn 
// it is called expression function 
//(variable function. in js variables are  very strong it can hold anyThing e.g json value,function, obj,arr , etc)
 
const addTwo = function(num){ 
    return num + 2
}
addTwo(5)
console.log(addTwo(5)); // 7
// we have some other type of ftn like arrow ftn iif etc
*/

// basic discussion on hoisting , we will cover it later in details
// let we have funtion
// hoisting mean accessing a function before it's decleartion but remember that we can't
// hoist any type of funcion like if we hoist  funcion expression than it will give error

console.log(hoisting(4)); // 5 this will give no error  due to hoisting but what if
// we declear function as function expression than it will give us error

function hoisting(num) {
  return num + 1;
}
// hoisting on exprssion futntion

console.log(hoistExpress(3)); //it will give error
const hoistExpress = function (val) {
  return val + 2;
};


//######################## CHAT-GPT #####################
/*
 User
what is scope and how many scopes in js
ChatGPT
In JavaScript, scope refers to the context in which variables, functions, 
and objects are defined and can be accessed. It determines the accessibility 
of variables and other resources in your code. There are mainly two types of scope in JavaScript:

Global Scope: Variables declared outside of any function or block have global scope.
 They can be accessed from any part of the code, including within functions and blocks.

var globalVariable = "I am a global variable";

function myFunction() {
    console.log(globalVariable); // Accessible
}
Local Scope: Variables declared within a function have local scope,
 meaning they are accessible only within that function.

function myFunction() {
    var localVariable = "I am a local variable";
    console.log(localVariable); // Accessible
}

console.log(localVariable); // Not accessible, will throw an error
JavaScript also has block-level scope introduced with the let and const keywords in ES6. 
Variables declared with let and const have block scope, meaning they are only accessible within 
the block in which they are defined.

function myFunction() {
    if (true) {
        let blockVariable = "I am a block-scoped variable";
        console.log(blockVariable); // Accessible
    }
    console.log(blockVariable); // Not accessible, will throw an error
}
So, there are two main types of scope in JavaScript: global scope and local scope.
 Additionally, with ES6, block scope is also introduced through the let and const keywords.

User
lexical scope, block scope,  global scope, local scope, explain all of them with examples and what is difference btw them
ChatGPT
Certainly! Let's delve into each type of scope with examples and discuss the differences between them:

Global Scope:
Global scope refers to variables or functions that are accessible throughout the entire JavaScript program.
Variables declared outside of any function or block have global scope.
They can be accessed and modified from anywhere in the code.
Example:

javascript
Copy code
var globalVariable = "I am a global variable";

function myFunction() {
    console.log(globalVariable); // Accessible
}

console.log(globalVariable); // Accessible
Local Scope:
Local scope refers to variables or functions that are only accessible within a specific function.
Variables declared inside a function have local scope and cannot be accessed from outside that function.
Example:

javascript
Copy code
function myFunction() {
    var localVariable = "I am a local variable";
    console.log(localVariable); // Accessible
}

console.log(localVariable); // Not accessible, will throw an error
Lexical Scope:
Lexical scope refers to the concept where the inner functions can access variables and 
functions defined in their outer scope.
JavaScript uses lexical scoping by default, which means it resolves variable names based
 on the location of the variable declaration in the code.
Example:

javascript
Copy code
function outerFunction() {
    var outerVariable = "I am from outer scope";

    function innerFunction() {
        console.log(outerVariable); // Accessible due to lexical scope
    }

    innerFunction();
}

outerFunction();
Block Scope:
Block scope is introduced in ES6 with the let and const keywords.
Variables declared with let and const have block-level scope, meaning they are only 
accessible within the block in which they are defined.
Example:

javascript
Copy code
function myFunction() {
    if (true) {
        let blockVariable = "I am a block-scoped variable";
        console.log(blockVariable); // Accessible
    }
    console.log(blockVariable); // Not accessible, will throw an error
}
Differences:

Global scope is accessible throughout the entire program, while local scope
 is limited to the function it is defined within.
Lexical scope refers to the ability of inner functions to access variables from
 their outer scope, while block scope refers to the visibility of variables declared
  with let and const within a block of code enclosed by curly braces {}.
Global and local scopes are determined by functions, whereas block scope is determined by
 code blocks (e.g., if statements, loops) when using let and const.

*/