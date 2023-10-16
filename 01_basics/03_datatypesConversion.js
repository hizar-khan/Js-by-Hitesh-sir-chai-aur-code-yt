// Sir says that datatypes Conversion is nightmare topic in js
// let's see....
let score = 43 
console.log(typeof score)
console.log(typeof(score))

// let make string and than convert into number with Number()method
let num = "hello" //now this is string
console.log(typeof num)// we have to convert it into number
let ValueInNum = Number(num) // it will convert srting into number
console.log(typeof ValueInNum)

let num2 = "23ab"// string value
console.log(num2)
console.log(Number(num2))// Number() this method change string into numeber

console.log("--Not A number NaN---")
let notANumber = NaN
console.log(typeof notANumber)
console.log( typeof notANumber) //  NaN is also a number type

console.log("-- null---")

let score2 = null
console.log(typeof score2)
console.log( typeof Number(score2))

console.log("-- undefined---")

let undef = undefined
console.log(typeof undef)
 console.log( typeof Number(undef))


// boolean
console.log("---Boolean to Number conversion--")

let bool1 = true
console.log(bool1)
 console.log(Number(bool1))
console.log(typeof bool1)

let bool0 = false
console.log(bool0)
console.log(Number(bool0))

/**
 converting number in string like " 343" easily convert into number wit 
 help of this method: Number() but
 converting number+sting in string like "343abc" is difficlut to convert into number
 it give us NaN but its type is numer (-\-) hahahah
 true convert into 1
 false into 0

 */

 /// NOw we want to check boolean number
 console.log("--------checking boolean -------")
 let isOneTrue = 1
 console.log(Boolean(isOneTrue))
 let str = 'lhel'
 console.log(Boolean(str))

 let isZeroFalse = 0
 console.log(Boolean(isZeroFalse))
 let empty = ''
 console.log(Boolean(empty))

 console.log("--------checking String() -------")

 let numToString = 343
 console.log( String(numToString))
 console.log( typeof String(numToString))
 console.log(typeof numToString)

