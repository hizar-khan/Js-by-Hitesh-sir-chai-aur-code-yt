// Q: as the value of pi is 3.14 same in js can we change it, if can than how, if not than why --?

// ans: it can't be changed as it is constant and remain constant ----- Okay Okay  Explain more

// as  we know that we have directly access of Object { } and their is a lot of properties in it e.g prototypes which contain lot of thing i.e
// construtor, hasOwnPropety, isPrototypeOf, toLocalStirng, toString etc and some more propeties also avalible but we can't seee them (serach them on mdn)
// Object.getOwnPropertyDescriptor --// this getOwnPropertyDescriptor tell about hidden things 
/* (histish sir: One we were doing some backend work and we want loop on obj but the loop didn't work on array that was a surprsing but when we reasech on
 it we found that some properies of that obj was maked disabled like they make itearion diable for that obj, so we can
 make some proepties for objects disabled as in the case of pi value it is maded that why that it should be have constant value 3.14 and can't be changed as 
 ) */
 // this  "getOwnPropertyDescriptor()" is used to know info. about any propeties of object
 // here we want info about Math property of obj   
// Object.getOwnPropertyDescriptor(Math)

// as we can't overide the pi value
// console.log(Math.PI);//3.141592653589793
 Math.PI = 4.5
//  console.log(Math.PI); // still 3.14
 // why it is not overriding
//  Object.getOwnPropertyDescriptor(ModuleName, "keyName") // this is used to see the hidden things of obj and why some thngs we can't override

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);
/*Output
{
  value: 3.141592653589793,   // hard-coded value      
  writable: false, // its mean that we can't override it
  enumerable: false,
  configurable: false
}
// */ // 
// can we make our objects restricted not changable ? Yes we can

// we have a lots of method for creating objects
// const myNewObj = Object.create(null)

const chai = {
    name : "Karak Chai",
    price : 250,
    isAvalible : true

}
// console.log(chai); // { name: 'Karak Chai', price: 250, isAvalible: true }
// is the above obj "chai" have "Descriptor-Property", if yes than how can we set them, let first check it is avalibe or not
// console.log(Object.getOwnPropertyDescriptor(chai)); // undefined bcz 'chai' is object itsef and here we want descriptor of its Property i.e name, price etc
// so write  Property name which descriptor we want

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/*output
{
  value: 'Karak Chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/ // now we can make the properties to not override by making writable to false 
// now how to get the control to make the above propety not writable, js give us this control but not everyTime
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false 
}) 
// now we can't override "name" propety
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
/**
 {
  value: 'Karak Chai',
  writable: false,
  enumerable: false,
  configurable: true
}
 */ // let check the name value is overide or not

 chai.name = "Sheeen Chaiii"
 console.log(chai.name);// still "Karak Chai" 
