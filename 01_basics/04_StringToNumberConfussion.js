let someNumer = 343
 let stringNumber = String(someNumer)
//  console.log(stringNumber) '343'
//  console.log(typeof stringNumber) 'string'

 // ******* Operations ***********
 let value = 6
 let negValue = -value
 console.log( negValue) // -6
 
 //some basic opetations
// console.log(2+2)  // 4
// console.log(2-2)  // 0
// console.log(2*3)  //  6
// console.log(2**6) // 64
// console.log(2/6)  // 0.3333333333333333
// console.log(2%6)  // 2


let str1 = "hello"
let str2 = " hizar"
 console.log(`${str1}${str2}`) // 'hello hizar'
 //or 
 console.log(str1 + str2)     // 'hello hizar'

// now some confussion and tricky Operations
 console.log( 1 +  2)  // 3
 console.log('1' +  2)  // '12'
 console.log( 1  + "2") // '12'
 console.log("1" + "2") //  '12'

 console.log(  1  +  2  + "3") // the first two are numbers so the will be added 1+2 = 3 and the last one is string so final ans will be 33 but string '33'
let num = 1  +  2  + "3"
console.log(typeof num) // string
 console.log( "1" +  2  + "3")   // '123'
 console.log(  1  + "2" +  3  )  // '123'
 console.log(  1  + "2" + "3" )  // '123'
 console.log( "1"  +  2  + 3)    // '123'  we have seen in the above e.g(1+2'3' = '33') but here the first digit is in string '1' so it will make the other into string that'Y '123'  
 
 console.log(true)  // true
 console.log(+true)// output 1
 console.log(-true)// output -1

 console.log(false)
 console.log(+false) // output 0
 console.log(-false) // -0

 console.log(+"") // also zero 0
console.log(-"")  // -0

let num1, num2, num3
num1 = num2 = num3 = 3+3
console.log(num1) // 6 
console.log(num2) // 6
console.log(num3) // 6

let gameScore = 99
gameScore++
console.log(gameScore) // output 100 due incrment gameScore++
let gameScore2 = 99
  ++gameScore2;
console.log(gameScore2) // same output 100 but remeber that post and prefix incremet are different






