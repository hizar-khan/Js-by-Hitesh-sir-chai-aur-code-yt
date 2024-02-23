// the behaviour of the js is prototypal behaviour

// when we print array or obj in browser, we will see what inside these array or objects but with them we will 
// aslo see some other things e.g lenght ,prototypes (which will contain different things) 
// now what is this prototypes, and why it is everyWhere
// js never seek/want lose, js will try again and again to solve your problems, he will continusely to 
// access prarent than grand-parents  until not meet with null
// due to the prototype we can acces to many things e.g methods, new keyword , 'this' and the protoypal inheritence in js is due to this

// EveryThing in js are objects. mean everyThig(arrays, varibles , strings, numbers etc) are coimg from objects
// Array     -->    Object     -->   null
// String    -->    Object     -->   null
// as EverThing is js is refer to object, and all the  properties  that an Object have can avalibles/access by array/strings/etc(usable are not is other debate)
// is a Function an object ???
// let check
function ftn(num){
   return num * 5 

}
ftn(5)