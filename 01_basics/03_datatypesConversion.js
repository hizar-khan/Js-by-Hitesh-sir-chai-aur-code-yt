// Sir says that datatypes Conversion is nightmare topic in js
// let's see....
let score = 43 
console.log(typeof score)
console.log(typeof(score)) // both are same

// let make string and than convert into number with Number()method
let num = "hello" // this is a string
console.log(typeof num)// string // we have to convert it into number
let ValueInNum = Number(num) // it will convert srting into number
console.log(typeof ValueInNum) // number
console.log(ValueInNum); // NaN --  bcoz 'hello' is coverted into number but hello is NaN

let num2 = "23ab"// string value
console.log(num2) // "23ab"
let valNum = Number(num2)// Number() this method change string into numeber
console.log(valNum) // NaN

console.log("--Not A number NaN---")

let notANumber = NaN
console.log(typeof notANumber) // 'number'
let NaNnum = Number(notANumber)
console.log(NaNnum) // NaN
console.log(typeof NaNnum) // 'number'

console.log("-- null---")

let score2 = null
console.log(score2) // null
console.log(typeof score2) // object

let valNum2 = Number(score2) // convert to Number
console.log(valNum2) // 0 ....hahahh
console.log( typeof valNum2) // number

console.log("-- undefined---")

let undef = undefined

console.log(undef) /// undefined
console.log(typeof undef) // 'undefined'
let undNum = Number(undef)
console.log(undNum) //NaN
 console.log(typeof undNum) // 'number'


// boolean
console.log("---Boolean to Number conversion--")

let bool1 = true
console.log(bool1) // 1
console.log(typeof bool1)
let boolNum = Number(bool1)
 console.log(boolNum) // 1
console.log(typeof boolNum) // 'number'

let bool0 = false
console.log(  bool0) // 0
console.log( typeof bool0) // 'boolean'
let boolNum0 =  Number(bool0)
console.log(boolNum0) // 0
console.log(typeof boolNum0) //'number'

/**
 converting  a string-number like " 343" easily convert into number with help of this method: Number() but
 converting char+number in string like "343abc" or 'hello' is difficlut to convert into number
 it give us NaN but its type is number (-\-) hahahah
 true convert into 1
 false into 0

 */

 /// NOw we want to check boolean number
 console.log("--------checking boolean -------")
 let isOneTrue = 1
 console.log(Boolean(isOneTrue)) //true
 let str = 'lhel'
 console.log(Boolean(str)) // true

 let isZeroFalse = 0
 console.log(Boolean(isZeroFalse)) //' false'
 let empty = ''
 console.log(Boolean(empty)) // fasle
// but if we give sapce inside the ' ' than it will be true
 let emptySpace = ' '
 console.log(Boolean(emptySpace)) // true
// and if we convert both empty string '' and empty string with space ' ' 
//into number than both values will be  0
 let emp = ''
let empToNum = Number(emp)
console.log(empToNum) // 0 both space and witout space ' ', '' values are 0

let nuLL = null
console.log(Boolean(nuLL)) //false

let undef1 = undefined
console.log(Boolean(undef1)) //false

 console.log("--------checking String() -------")

 let numToString = 343
  console.log(typeof numToString) // 'number'

 let numTostr = String(numToString)
 console.log(typeof numTostr) //  'string'
let bool11 = true
let boolToStr = String(bool11)
console.log(typeof boolToStr)

let NaN1 = NaN
console.log( String(NaN1)) // 'NaN'
console.log(typeof String(NaN1)) //'string'

