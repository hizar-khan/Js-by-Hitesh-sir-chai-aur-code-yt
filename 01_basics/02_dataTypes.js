//alert(2+2) // error coz here we are using nodeJs ,(it is working fine in browser and bind html file with js) 
// there are two type of datatype in js 1_primitive 2_reference
// "use strick"; //mean treat all JS code as newer version
// code readability is very important, always write clean code

let username = "hziar khan" // string
let number = '1243' // string
let num = 343 // integer number
let java = false //boolean
let js = true    // boolean
let undef = undefined // e.g(let a;) no value given .assign

let nullValue = null // standalone value /object .representation of empty value but null itself null hahhaahah
// null is not empty ,it is like i want temp but due to some reason  sever sent temp = 0 but 0 is also a temp, so its is prefer to use null
//Most of the times, we set an object to NULL to prevent it from storing garbage values. Newly declared objects may not necessarily be
// empty. Assigning NULL can be considered a good practice to prevent possible errors due to undefined behaviour

///// we have also some special type like symbol , we will see it  in react mainly use to findout uniquness
console.log(typeof username)
console.log(typeof number)
console.log(typeof java)
console.log(typeof js)
console.log(typeof num)
console.log(typeof nullValue)
console.log(typeof undef)// undefined type 
console.log(typeof null) // this will be objects 
// the above all are primitive data types
// 2 == Objects

/*
 In js mainly we have two dataTypes(what is the type of values)
 1.premtive (str,num,bool, etc all values execpt ( ){} [])  we can make copies of premitive type values and make change in it will not effect the original values
 let a = 12; // original value
 let b = a; // making copy
 console.log(b) // 12
 // let we are making change in copied 'b'
  b = 2 // changing in copied value
  console.log(b) // 2
  // but the origanl 'a' will still hold 12
  // mean changing in the copied values does'nt change the origanl values
  // this is because in primitive type we are only access to the values and stored it in new memeomry/location
  // but in 
  //2-- non-premitive ([](){}) we are not copy the origanl values we are using reference of that values
  //e.g
  let a = [1,2] //origanl non-primitive
  let b = a; //  assigning/making/using reference of original value 
  b.pop()// remove the last element// making dhange in the refereced , it will also change the original values coxz here we are using the location/memeory/reference of the origanl values 
console.log(b) //[1]
  but here a will also chnage
  console.log(a) //[1]
  // any change in the refence values will also affect the orignal values due to the using of same location/memeory

  
 but but  its also depend on the method some make new array some are using the oringal one
*/
