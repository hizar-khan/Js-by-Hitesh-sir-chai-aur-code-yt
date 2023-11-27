// Array part 2

// Pushing values of one array into other array
// const  myName = ['hizar','khan']
// const address = ['form ','peshawar','pakistan']
// const arrpush = address.join()
// myName.push(arrpush)
// console.log(myName);

// but we can easly put values of one array into other array by using concate () method


// const concating = myName.concat(address) //concat() :Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(concating);

// spread() opreator  [...] // works same as concate
// const spreding = [...myName,...address]
// console.log(spreding); 

// rare case 
// const rareArr = [1,2,3,[4,5,6],7,[7,8,[9,10]]]// sometime we can face such type of an array 

// const flating = rareArr.flat(Infinity)

// console.log(flating);
// console.log(rareArr);

// some time data coming from webpage ,than that data coming in other form like nodelist , object or string but we want array 
// Array.isArray() // checking the data is in array type
// Array.from() //// convert other type of data into array

// console.log(Array.isArray('make me array , i am string'));
// console.log(Array.from('make me array, i am string')); //  

console.log(Array.from({name:"hizar"})); // intresting case ; it will give empty array []
console.log(Array.of({name:"hizar"})); // but this will put object inside an array 


const myObj1 = 

{
    name : "ali khan",
    cell : 232323
}
console.log(Array.from(myObj1.name)); // now "ali khan " that is string value of object will be converted to array
console.log(Array.of(myObj1.cell));

// array.of


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
