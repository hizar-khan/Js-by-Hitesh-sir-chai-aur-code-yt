// greater than > 
// Less than < 
//less than or equal  <=
// greater than or equal>=
// equal ==
// equal and also same type ===
// not equal !=


// some confusing Comparison
let a = '3'
let b = 3
console.log(a == b)  // output 'true'
console.log(a === b) //  output 'false'
// coz here === it means that also check datatype of both value
// while as a= '2' is string and b = 2 is number so both have different dataType
//so output is false
// this called strick check
 
console.log ('---------null comparison --------')
console.log(null == 0)     // output 'false'
console.log(null === 0)   // output 'false'
console.log(null < 0)    // output 'false'
console.log(null > 0)   // output 'false'
console.log(null >= 0) // output 'true'  // here conversion happen the null convert to zero so zero is equal to zero that is why output true . 
console.log(null <= 0)// output 'true' // here conversion happen the null convert to zero so zero is equal to zero that is why output true . 
