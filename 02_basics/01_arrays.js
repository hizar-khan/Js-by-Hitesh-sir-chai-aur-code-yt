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
// shallow copy is copy of object whose properties share the same references of the source object form which the copy was made 
// mean that if we make a copy of an array than if we make in change insde that copy array than that change will happen in the original array too.  due to the same memroy location / not copy but refernece
// so to make change only in the copy not in the original than we will use de-structure mehtod [...OriginlArray]



// const myArr = ['hello ', 'this is my ',1,'st ' , 'array']
// const letArry = [...myArr] // de-structure , this will prevent change in the original arry .
// letArry.push('on the chai and code platform')

// console.log(myArr);
// console.log('-----------');
// console.log(letArry);

// second way to declear arra
// const myArr = new Array('heloow ','this is the ',2,'nd to declear array')// no need of [] square bracket
// console.log(myArr);
// console.log(myArr[3]); 
// console.log(myArr[2]='i am making a change');
// console.log(myArr)

/// some mothed of Array

// ********************   push() used to add values at the end of array)*************
// const myArr = ['push mehtod ','is used to add some thing at the end']
// console.log(myArr);

// myArr.push('i am add new values at the end of array by using push() method');

// console.log(myArr);


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

// console.log(arrNo_1);
// console.log(newArr);
// console.log(typeof arrNo_1); // object
// console.log(typeof newArr);// string
// console.log(Array.isArray(arrNo_1)); // true
// console.log(Array.isArray(newArr)); // false

// // join is also used to add something btw values inthe place of comma ','
// const adArr = arrNo_1.join(' + ') // it will convert array into string
// console.log(adArr);

//*************************** Slice and splice************** */

// slice () is used to return/make new array from already existing array

// const newArr = [1,2,3,4,5]
// console.log(newArr);

// const slicing = newArr.slice(1,3)
// console.log('slicing',slicing);
// console.log('main array after slicing',newArr);
// console.log('-----------------');
// const splicing = newArr.splice(1,3)
// console.log(splicing);
// console.log('main array after splicing',newArr);

// so the differnece btw slice and splice is that after slicing an array the orignal array dose not change while after splicng an array the original array will also chnaged

// concate is used to put valuse of one array into other array

// const arrNo_1 = [1,2,3]
// const arrNO_2 = [4,5,6]

// let concatedArr = arrNo_1.concat(arrNO_2)
// console.log(arrNo_1);
// console.log(arrNO_2);
// console.log(concatedArr);


