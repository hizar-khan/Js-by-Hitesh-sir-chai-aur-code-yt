const score = 400 // here the js will already know that its dataType is number

console.log( score); // 400
console.log(typeof score); // number
let NumStr = score.toString() // converting number to String
console.log( typeof NumStr);  // 'string'
// now as number is converted to string so we can use all methods/properties of strings on NumStr
console.log( NumStr.length) // 3
//console.log( NumStr.toFixed(3)) /// not working bcoz we have converted number to String and toFixed is the ftn of number 
console.log( score.toFixed(3)) // 400.000



// we can also declear number in 2nd way, which is called number object or non-primitive Number
const score2 = new Number(330)
console.log(score2); // [Number : 330] { __proto__: {"} }
console.log(typeof score2); // Object  
// this give us differnt Mehtod to use on number as prototype

// toString() , this method is used to convert number into String
let numToStr = score2.toString()
console.log( numToStr); //'330'
console.log(typeof numToStr); // string 
 // so now we can use mehtod of string on this
  console.log(numToStr.length); // output will be 3 coz toSrting mehtod  conveted 300 into string. now it acts as String

  // toFixed()  is used to make the decimal number like 300.00 the dot is dueto the toFixed() 
  console.log(score2.toFixed(3))
  // output 300.000 
  //the .000 is dueto the parameter 3 inside the toFixed(3) method // we will use this method inside ecomerce website

// Toprescision()  /// it is very intersting . it roundOff  the decimal number 
// but remember
// that it will also make the number into exponantionl if we used parameter number less than
// the actual digits (digits before the point/dot) 


let num = 333.9343
console.log(num.toPrecision(3)); // it will roundOff to 334
console.log(num.toPrecision(2)); // but it will make expontional .so be aware of this hahaha

// toLocalString() this method is used to put comma in large numbers like 1000000 to 1,000,000.
// it is bydefult use US comma Standard
let numb = 1000000
console.log(numb.toLocaleString()); // by-defaulf US Standard // '1,000,000'
console.log(numb.toLocaleString('en-IN'));// indian Standard //'10,00,000'

