//for_of loop
// we can put anything inside an Array e.g. strings, object etc
//["", "", ""] and [{}, {}, {}]
// for (const iterator of object) {
   
// }
// iterator mean loop 
// the above iterater is just variable name
// and the object mean on what thing we are going to loop (here the object is not the real js object)
// like we are going to loop on array. there we will write objName/ArrayName/stringName on which we are going to loop
// let arr = ['ali', 'khan', 'Umar']
// for (const indVal of arr) { 
//    console.log(indVal)
// }
/*output
ali
khan
umar
*/
// let name = 'hizar'
// for (const i of name) {
//    console.log(i);
// }
/**output
h
i
z
a
r
 */
/**
 for (const num of object) {
     code to execute
}

in the above syntax object is not the simple js object , 
here obj mean on whcih thing we are going to loop .
it may be strings,array or object etc
and the num is a variable name

 */
/*
  const myArr = [2, 3, 4,]
 for (const i of myArr) {
    console.log(i);
    
 }
 
 /** output
  2
  3
  4
  */

 let greetings = "Hello!"

 for (const greet of greetings) {
   //  console.log(`EAch char of: ${greet}`);
    
 }
/**output
EAch char of: H
EAch char of: e
EAch char of: l
EAch char of: l
EAch char of: o
EAch char of: !
 */
 

 // maps is like object ,it is collection of unique keys-values pair  ,
 // these keys may occur only once , these are unique ,
 //it remeber the original insertion order of the keys(remains in order in which it's inserted)
// no duplicate values(duplicate key-values will skip not printed)
// execute in array (give array)
// we can loop on map


 const map = new Map() // map is created, we can put/keep key-value pair inside it
 
 map.set("pak", "Pakistan")
 map.set("Ind", "India")
 map.set("Afg", "Afghnistan")
 map.set("Ind", "India") // this will not print coz no duplicate key-values accepted ,

 //  console.log(map.);//Map(3) { 'pak' => 'Pakistan', 'Ind' => 'India', 'Afg' => 'Afghnistan' }

 // we can delete key-values
// console.log(map.delete("pak", "Pakistan"))
// console.log(map); // Map(2) { 'Ind' => 'India', 'Afg' => 'Afghnistan' }

// forof loop on map 
 for (const key of map) {
   //  console.log(key);

 }//output
// [ 'pak', 'Pakistan' ]
// [ 'Ind', 'India' ]
// [ 'Afg', 'Afghnistan' ]

 // it will give us full arrays , but we want values  keys pair , 
 //here we have a shortcut to get values
 // put keys and values in  this bracket[]

 for (const [key, value] of map) {
   //  console.log(key, ':', value);
/*
pak : Pakistan
Ind : India
Afg : Afghnistan
 */
 }
// getting only keys of map

for (const [key, value] of map) {
   // console.log(key);
   /*
pak 
Ind 
Afg 
 */
}
// getting only values of map
for (const [key, value] of map) {
   // console.log(value);
/*
   Pakistan
   India
   Afghnistan
 */
}

 // for of loop on object
  
 const myObj = {
    game1: "IGi",
    game2: "Pubg"
 }
 for (const [key, value] of myObj) {
    console.log(key, ':', value);
 }
 // but here we will get error that "TypeError: myObj is not iterable "
 // this is becasue forOf loop , 
 // we can make an obj iterable but here forOf loop work on arrays not on obj
 