//map 
// map is also used on array to do someting in easy way

/**
 const myArr = [1, 2, 3, 4, 4, 6, 7, 8, 9,10]

const newArr = myArr.map(item => item + 10)

console.log(newArr);

const newArr2 = myArr.map(item => item - 4)
console.log(newArr2);

// let do the above progrom by using forEach 
const newArr3 = []
myArr.forEach(item => 
    {
       newArr3.push(item + 10)
    })
    console.log(newArr3);

 */


    // chaning


const chanArr = [1, 2, 3, 4, 5]

const chanMap = chanArr
                .map(item => item + 5) //[6, 7, 8, 9, 10]
                .map(item => item + 10)// [16, 17, 18, 19, 20]
                .map(item => item + 20)// [36, 37, 38, 39, 40]
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
                            .map(item => item + 20)
                            .filter(item => item <= 23)

console.log(filterMapChan);

