//Arrays in js
// synmbol of array [] always in square brackets
// syntax const arr = []
// we can put every type of data inside the arr bracket , we can keep differnt type of data in a single array
//  const arr = ['hello', 1,2,3 , true,]
//  console.log(arr);
// array is object that is used to store different type of data 
//array is resizeble
// js array create Shallow copy rather than deep copies
//shallow copy?
// shallow copy is copy of object whose properties share the same references of the source object from which the copy was made 
// mean that if we make a copy of an array than if we make any chang insde that copy array than that change will happen in the 
//original array too.  due to the same memroy location / not copy but refernece
// so to make change only in the copy not in the original than we will use de-structure mehtod [...OriginlArray]


let OrignalArr = ['this is', 'Orignal']
let copyArr = OrignalArr
//let make a chane in copyArr
copyArr.push('i,m Making change in copied-Arr')
console.log(copyArr) // [ 'this is', 'Orignal', 'i,m Making change in copied-Arr' ]
console.log(OrignalArr) //[ 'this is', 'Orignal', 'i,m Making change in copied-Arr' ]
// change happen in the both origanl and copied array , this bcz the copyArr is using the Orignal value/refernce/location/memory of the Origanl array 
// Remember !! if we make change in the Orignal Array than that change will also happen in the copied Array

// we can prevent/stop this thing by de-struing mehtod ...
// due to this ... only chnage will happen in the array in which we make a change , other array copy/refence/origanl will remain unchangeed due de-structre method

const myArr = ['hello ', 'this is my ',1,'st ' , 'array']
const letArry = [...myArr] // de-structure , this will prevent change in the original arry .
letArry.push('on the chai and code platform')

console.log(myArr);
console.log(myArr.length);
console.log('-----------');
console.log(letArry);
console.log(myArr);


//second way to declear arra
const myArr2 = new Array('heloow ','this is the ',2,'nd to declear array')// no need of [] square bracket
console.log(myArr2);

console.log(myArr2[3]); 

console.log(myArr2[0] = 'i am making a change');

console.log(myArr2)

/// some mothed of Array

// ********************   push() used to add values at the end of array)*************
// const myArr = ['push mehtod ','is used to add some thing at the end']
// console.log(myArr);

// myArr.push('i am add new values at the end of array by using push() method');

// console.log(myArr); // [ 'push mehtod ', 'is used to add some thing at the end', 'i am add new values at the end of array by using push() method' ]


// ******************** pop() is used to remove/elemnate last value from an Array ***********
// const myArr = ['pop() mehtod ','is used to remove last value from an Array ', 'i am the last value so after the pop mehtod i wll be vanished/dissaper']

// console.log(myArr);

// myArr.pop();

// console.log(myArr);
//****************   unshift() is used to add something at the beganing / start of an Array
// const myArr = ['khan']

// console.log(myArr);

// myArr.unshift('Hizar');

// console.log(myArr);

//****************   shift() is used to remove first value from   the Array
// const myArr = ['due to the the shift() i will be disapper','hizar','khan']

// console.log(myArr);

// console.log('------shift----------');
// myArr.shift();

// console.log(myArr);

//****************   include() is to check some values in array is exists or not
// const myArr = ['hizar','khan']

// console.log(myArr.includes('hiz')); // false
// console.log(myArr.includes('hizar')); //true

//*************88 indexOf() is used to check index of a value */
// const myArr = ['hizar','chk my Indx','khan']

// console.log(myArr.indexOf('chk my Indx')); //  1
// console.log(myArr.indexOf('hwlll')); // -1 mean not exist


//****************  join () is used to convert array into string
// const arrNo_1 = ['my name is ','hizar','khan']
// const newArr = arrNo_1.join() // it will convert array into string
// console.log(arrNo_1); // [ 'my name is ', 'hizar', 'khan' ]
// console.log(newArr); // 'my name is ,hizar,khan'

// console.log(typeof arrNo_1); // object
// console.log(typeof newArr);// string
// console.log(Array.isArray(arrNo_1)); // true
// console.log(Array.isArray(newArr)); // false

// // join is also used to add something btw values inthe place of comma ','
// const newArr9 = ['my name is ','hizar','khan', 'Afridi']
//  const adArr = newArr9.join(' --- ') // it will convert array into string and --- insted of , of array
// console.log(adArr); // 'my name is  --- hizar --- khan --- Afridi'

//*************************** Slice and splice************** */

// slice () is used to return/make new array from already existing array

// const newArr = [1,2,3,4,5]
// console.log(newArr); //[ 1, 2, 3, 4, 5 ]

// const slicing = newArr.slice(1,3)
// console.log('slicing',slicing); // 'slicing' [ 2, 3 ]
// console.log('main array after slicing',newArr); // 'main array after slicing' [ 1, 2, 3, 4, 5 ]

// console.log('---------  splicing --------');

// const splicing = newArr.splice(1,3)
// console.log('splicing',splicing); // 'splicing' [ 2, 3, 4 ]
// console.log('main array after splicing',newArr); //'main array after splicing' [ 1, 5 ]

// so the differnece btw slice and splice is that after slicing an array 
//the orignal array dose not change while after splicng an array the original array will also chnaged
// let sliCing = [1,2,3,4,5,6]
// console.log(sliCing.slice(0,4)) // [ 1, 2, 3, 4 ]
// console.log(sliCing) // [ 1, 2, 3, 4, 5, 6 ]

// let spliCing = [1,2,3,4,5,6]
// console.log(spliCing.splice(0,4)) // [ 1, 2, 3, 4 ]
// console.log(spliCing) // [ 5, 6 ]
// concate is used to put valuse of one array into other array


// start from 1 - n

let sliCing1 = [1,2,3,4,5,6]
console.log(sliCing1.slice(1, 3)) // [ 2, 3 ]
console.log(sliCing1) // [ 1, 2, 3, 4, 5, 6 ]

let spliCing1 = [1,2,3,4,5,6]
console.log(spliCing1.splice(1, 3)) //[ 2, 3, 4 ]
console.log(spliCing1) //[ 1, 5, 6 ]
const arrNo_1 = [1,2,3]
const arrNO_2 = [4,5,6]

let concatedArr = arrNo_1.concat(arrNO_2)
console.log(arrNo_1);
console.log(arrNO_2);
console.log(concatedArr); // [ 1, 2, 3, 4, 5, 6 ]


