//for_of loop
// we can put anything inside an Array e.g. strings, object etc
//["", "", ""] and [{}, {}, {}]



/**
 for (const num of object) {
     code to execute
}

in the above syntax object is not the simple js object , 
here obj mean on whcih thing we are going to loop .
it may be strings,array or object etc
and the num is a variable name

 */
/**
  const myArr = [2, 3, 4,]
 for (const i of myArr) {
    console.log(i);
    
 }

 let greetings = "Hello world!"

 for (const greet of greetings) {
    console.log(`EAch char is: ${greet}`);
    
 }

 */

 // maps is like object ,it is collection of keys-values pair  , these keys may occur only once , these are unique ,remeber the original insertion order of the keys
// no duplicate values , only uinque , remains in order in which it's inserted
// we can loop on map


 const map = new Map()
 map.set("pak", "Pakistan")
 map.set("Ind", "India")
 map.set("Afg", "Afghnistan")
 map.set("Ind", "India") // this will not print coz no duplicate key-values accepted ,

//  console.log(map);

 for (const key of map) {
    // console.log(key);
 }
 // it will give us full arrays , but we want values  keys pair , here we have a shortcut to get values
 // put keys and values in  this bracket[]

 for (const [key, value] of map) {
    console.log(key, ':', value);
 }

 // for of loop on object
  
 const myObj = {
    game1: "IGi",
    game2: "Pubg"
 }
 for (const [key, value] of myObj) {
    console.log(key, ':', value);
 }
 // but here we will get error that "obj is iterable" this is becasue for of loop , we can make an obj iterable but here forOf loop work on arrays not on obj
 