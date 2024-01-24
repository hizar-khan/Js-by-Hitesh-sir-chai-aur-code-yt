// Array part 2

//Pushing or unshifting values of one array into other array
// const  myName = ['hizar','khan']
// const address = ['form ','peshawar','pakistan']
// const arrpush = address.join() // first convert the array into String
// console.log(arrpush) // 'form ,peshawar,pakistan'

// myName.push(arrpush) // now we will push or unshift this string into the other Array
// console.log(myName); // [ 'hizar', 'khan', 'form ,peshawar,pakistan' ]

// let arr2 = ['hello']
// let unshft = ['World']
// let arrunshft = unshft.join()
// arr2.unshift(arrunshft) 
// console.log(arr2); // [ 'World', 'hello' ]

// but we can easly put values of one array into other array by using concate () method
// concat() retrun new array , Always keep it in new varibale


// const concating = myName.concat(address) //concat() :Combines two or more arrays.
// This method returns a new array without modifying any existing arrays.
// console.log(concating);
/******************************************
// we can also using concat() to add values of one array into another array
const  myName2 = ['hizar','khan']
const address2 = ['form ','peshawar','pakistan']
console.log(myName2.concat(address2)) // [ 'hizar', 'khan', 'form ,peshawar,pakistan', 'form ', 'peshawar', 'pakistan' ]


// we can spread opratero too to add values of one one Array into other Array
//spread() opreator  [...] // works same as concate
const  myName3 = ['hizar','khan']
const address3 = ['form ','peshawar','pakistan']
const spreding = [...myName3,...address3]
console.log(spreding); // [ 'hizar', 'khan', 'form ', 'peshawar', 'pakistan' ] 
*/

// spread() opreator  [...] // works same as concate
// const spreding = [...myName,...address]
// console.log(spreding); 

// rare case 
// const rareArr = [1,2,3,[4,5,6],7,[7,8,[9,10]]]// sometime we can face such type of an array 
// const flating = rareArr.flat(Infinity)
// console.log(flating); // [ 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10 ] 
// console.log(rareArr); // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 7, 8, [ 9, 10 ] ] ]

// some time data coming from webpage ,than that data coming in other form like nodelist , object or string but we want array 
// Array.isArray() // checking the data is in array type
// Array.from() //// convert other type of data into array

// console.log(Array.isArray('make me array , i am string'));
// console.log(Array.from('make me array, i am string')); // [ 'm', 'a', 'k', 'e', ' ', 'm', 'e', ' ', 'a', 'r', 'r', 'a', 'y', ',', ' ', 'i', ' ', 'a', 'm', ' ', 's', 't', 'r', 'i', 'n', 'g' ]

console.log(Array.from({name:"hizar"})); // intresting case ; it will give empty array []
console.log(Array.of({name:"hizar"})); // but this will put object inside an array  // [ { name: 'hizar' } ]
 

const myObj1 = 
{
    name : "ali khan",
    cell : 232323
}
console.log(Array.of(myObj1)); //[ { name: 'ali khan', cell: 232323 } ]
console.log(Array.of(myObj1.name)); //[ 'ali khan' ]
console.log(Array.of(myObj1.cell));// [ 232323 ]

console.log(Array.from(myObj1.name)); // now "ali khan " that is string value of object will be converted to array .. [ 'a', 'l', 'i', ' ', 'k', 'h', 'a', 'n' ]
console.log(Array.from(myObj1.name).join('')); // 'ali khan'    


// array.of


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]


let name = "hizar Khan"
let rollNo = 9
let address = "peshwar Pakistan"
let cell = 337411
console.log(Array.of(name, rollNo, address,cell)); // [ 'hizar Khan', 9, 'peshwar Pakistan', 337411 ]
