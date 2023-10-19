// There are type type of DataTypes in js
// primitie and non-primitive (also called reference datatype)
// The difference is on the basis of two things
// one how they are stored in the memory and second how to access them

/* 
1_Primitive dataTypes the are call by value and change happen in copy 
they are seven 7
i_  String 
ii_ number
iii_boolean
iv_null
v_  undefined 
vi_ symbol (make values unique)
vii_ BigInt (large values) 

*/

// 2_ NOn- primitive or reference dataTypes
/*
Arrays
Objects
functions()

*/
const id = Symbol('123')
const SndId = Symbol('123')
console.log(id === SndId);
