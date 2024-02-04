// loops on Object
// to loop on Obj we have a type of loop which work on obj(its also have other uses too)
// syntx 

const myObj = {
    pak : "pakistan",
    afg : "Afgnnistan",
    In  : "India"
}
for (const key in myObj) {
    // console.log(key);// output on keys 
    //  pak
    // afg
    // In
    // console.log(myObj[key]);
    /*
pakistan
Afgnnistan
India 
*/
// let print both keys and value of keys of obj (objName.keyName/key or objName(keyName/key))

//    console.log(`${key} : ${myObj[key]}`);
   /*output
pak : pakistan
afg : Afgnnistan
In : India
 */

}

// can forIN loop work on Arrays , let chk it

const myArr = ["javaScript", "C++", "Ruby"]

for (const val in myArr) {
    // console.log(val, ':', myArr[val]);
/*
0 : javaScript
1 : C++
2 : Ruby
 */
    //  console.log(val);
    //  0
    //  1
    //  2
}
// console.log('----------');
// the difference is that here in forIn loop  keys are printed while 
//in forOf loop values are printed

for (const val of myArr) {
    
    // console.log(val);
// javaScript
// C++
// Ruby
}

// forIn loop on map
const map = new Map()
 map.set("pak", "Pakistan")
 map.set("Ind", "India")
 map.set("Afg", "Afghnistan")
 map.set("Ind", "India")

 for (const val in map) {
   console.log(val);
 }
 // it will not on map coz map is not iterable

 // use forIn loop on object
 // use forof loop on Arrays

 // ForEach loop
 // this loop will be used most on Array 
// whenEver you want to loop on Array use forEach loop Or map 
