// There are type type of DataTypes in js
// primitie and non-primitive (also called reference datatype)
// The difference is on the basis of two things
// one how they are stored in the memory and second how to access them

/* 
1_Primitive dataTypes the are call by value and change happen in copy 
they are seven 7
i_  String 
let str = "HelloWorld"

ii_ number
let num = 123

iii_boolean
let boolTrue = true
let boolFalse = false

iv_null
let nullval = null // null is null not Zero 0, Zero is number

v_  undefined  // variable is decleared but not inilizte mean empty, hold nothing, no Value assign yet to a varibale just decleared
let und;
or let undf = undifiend 

vi_ symbol (make values unique) 
let  id = symbol('23')

const id1 = Symbol('121')
const id2 = Symbol('121')
 // even both the id1 and id2 have same value but the symbol will make it unique
// let's check
console.log(id1 === id2) // false

vii_ BigInt (large values) 
let bignum = 234325345345235n

*/

// 2_ Non- primitive or reference dataTypes, call by reference, Arrays,objects,functions

// 
/*
Arrays
let arr = ['hizar','khan' , 09]

Objects
let obj = {
    key      : value,
    name     : "hizar",
    lastName : "Khan",
    rollNo   :  09
}

functions(){}

let ftnName = (){
    let name = hizar
    return name
}
ftnName() //calling ftn

*/


//to find dataType of any value/varible use method "typeof varName"
// but 
// to find type of array use  Array.isArray(arrName)




