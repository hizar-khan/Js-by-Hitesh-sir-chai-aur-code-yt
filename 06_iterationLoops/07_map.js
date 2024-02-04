//map 
// map is also used on array to do someting in easy way/ same as forEach but here we can retrn new array 


 const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArr = myArr.map(item => item + 10) // add 10 with each element of myArr

// console.log(newArr); // [11, 12, 13, 14, 15,16, 17, 18, 19, 20]
 

const newArr2 = myArr.map(item => item - 4) // minus 4 from each element of myArr
// console.log(newArr2); // [-3, -2, -1, 0, 1,  2,  3,  4, 5, 6]

// let do the above progrom by using forEach 
const newArr3 = []
myArr.forEach(item => 
    {
       newArr3.push(item + 10)
    })
   //  console.log(newArr3); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// chaning
const chanArr = [1, 2, 3, 4, 5]

const chanMap = chanArr
                .map(item => item + 5) //[6, 7, 8, 9, 10] // this arr will store in chanMap
                .map(item => item + 10)// [16, 17, 18, 19, 20] // this will add 10 to each element of the arr that is inside chanMap not the chanArr
                .map(item => item + 20)// [36, 37, 38, 39, 40] // now this will add 20 tto the each element to the arr that is inside chanMap 
// console.log(chanMap);
// in the above program first map on "chanArr" it will add 5 with each item of the 
// array and return new array which will stroed in "chanMap" array
// than second map will start and add 10 with each item of the chanMap array and
// retrn new array to "chanmap" array
// than third map will add 20 to each item of the array that is stored inside "chanMap" 
//array and new array will retrun and strored in "chanmap " array 
// now print the chanMap to get the final result

// we can chan map and filter together

const filterMapChan = chanArr
                            .map(item => item + 20) // this will add 20 to each element of the arr 'chanMap' [36, 37, 38, 39, 40]
                            .filter(item => item <= 23)  // filter those elemnet that are less than or equal to 23 inside the arr that was stored in "chanMap" ... //[ 21, 22, 23 ]

console.log(filterMapChan); // [ 21, 22, 23 ]

