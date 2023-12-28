// forEach() is by-default added to arrays
// forEach have callbackftn , this ftn is very smart , it know the lenght of array and will ececute until the arrays values end
// mean that there is no need to tell the loop lenght of array and how much time the loop will run , forEach loop run execute accoriding to the values inside array
// no need to tell from where it is started and end , forEach ftn know everyting , we will just give parameter in ftn that paramter will store vales coming form array on which loop run and the cllbckftn will run each time the values came to its parameter
// there no need to give name to that ftn
//
/**syntax
 array.forEach(function(){
    
});
 */

/*
// we can write ftn as arrow ftn

 const myArr = ["pak", "ind", "Usa"]

myArr.forEach( val => {
    console.log(val.length);
});

*/

/*

// we can pass  ftn refence insdie the forEch() 
 
const myArr = ["pak", "ind", "Usa"]

function location(val) {
    console.log(val);
}
myArr.forEach(location); // remember just give reference of the ftn ftnName don't execute e.g. ftnName() don't write ()

*/


/*

// it is not necessary that ftn inside the forEach loop will only one parameter , ther may be more than one parameter ,there maybe index , full array list etc
// E.g

const myArr = ["pak", "ind", "Usa"]

myArr.forEach((val, index, arr) => {
    console.log(val, index, arr);
    
});

*/
// sometime we have objects insdie an array
// [{}, {}, {}]

const objInArr = [
    {
        userNmae : "hizar khan",
        id : 9
    },
    {
        userNmae : "Kami kiki",
        id : 4
    },
    {
        userNmae : "KHan uloo",
        id  : 88
    }
]

objInArr.forEach((val) => {
    console.table(val.userNmae);
});