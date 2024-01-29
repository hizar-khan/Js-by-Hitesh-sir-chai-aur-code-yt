// true and false are strike value
// but ther are some values which we assume truthy Or Falsy


 const userEmail = "@hizarkhan"
 if(userEmail){
    console.log("Got Eamil,  Access");
 }
 else
 {
    console.log(" wrong eamil or eamil empty,Access denid  ");
 }


 // in the above progarm we did't compare the condition and just assume that the value is ture
 // but if we make userEmail value empty userEamil = " " than it will false ,
 //but if we assing empty aray to a varable than it will be also true
 const emptyArry = [ ]
 if(emptyArry) console.log("true");
 else console.log("false ");

 const emptyString = ""
 if(emptyString)console.log("true");
 else console.log("empty string is falsy value");
 // so in the A above exmple we did'nt compare the the condition but still some condition are true and some are fasle
 // in js there are some values which are falsyy and truty

 /*  falsy Values
 ---------- false , 0 , -0 , bigInt 0n, "" empty String, null, Undifined, NaN -- these all are falsy values
 
 truthy values
 -------some truthy values
 ------- true , [], {},  All Strings execpt empty string but empty sting with sapce will be truth value "  ", "0", "fasle"
 anyThing in string even a space is truthy values but  empty String is fasly""
 funciton(){} empty funciton is also truthy value
 false == 0  --> true
 false == '' --> true
 0 == ''     --> true
 
  
to chek empty array
let emptyArr = []
if(emptyArr.length === 0){
    console.log("  empty array is falsy value")
}

 */

let emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("empty obj is truthy value");
}

// we have logical opeartor like
//  && And Operator -- if all values are ture than true if any value is false than false  ,
// || Or operator  if only one value is true than true even the remmings values are false

// ---------- Nullish Coalescing Operator (??) used on Null and Undifined






























//  ternary Opeartor
 //         condition ? ture : false
  2== 2 ? console.log("true") : console.log("fasle")



 

 /* 

User:
 list of turthy and falsy in js

ChatGPT:

In JavaScript, truthy and falsy values are used in boolean contexts,
 such as conditions in if statements. Truthy values are those that are
 considered true when evaluated in a boolean context, and falsy values are
 those considered false. Here's a list of some common truthy and falsy values in JavaScript:

Truthy Values:

true
non-empty strings (e.g., "hello")
numbers other than 0 (e.g., 42)
arrays with at least one element
objects (including functions)
instances of user-defined classes
Date objects
non-null objects and arrays
Falsy Values:

false
0 (zero)
an empty string (e.g., "")
NaN (Not-a-Number)
null
undefined
document.all (a property present in some browsers, but generally considered falsy)
Here are a few examples to illustrate truthy and falsy values in JavaScript:

javascript
Copy code
// Truthy values
if (true) {
  console.log("true is truthy");
}

if ("hello") {
  console.log("Non-empty string is truthy");
}

if (42) {
  console.log("Number other than 0 is truthy");
}

// Falsy values
if (false) {
  console.log("false is falsy");
}

if (0) {
  console.log("0 is falsy");
}

if (null) {
  console.log("null is falsy");
}

if (undefined) {
  console.log("undefined is falsy");
}
Keep in mind that the concept of truthy and falsy values is essential when 
working with conditions and logical operators in JavaScript. Understanding 
these values helps in writing more effective and concise code.
*/