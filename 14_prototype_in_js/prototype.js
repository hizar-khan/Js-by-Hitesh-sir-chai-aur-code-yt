// the behaviour of the js is prototypal behaviour(prototype is behaviour use for inheritence)
// when we print array or obj in browser, we will see what inside these array or objects but with them we will 
// aslo see some other things e.g lenght ,prototypes (which will contain different things) 
// now what is this prototypes, and why it is everyWhere
// js never seek/want lose, js will try again and again to solve your problems, js will continusely to 
// access prarent than grand-parents(for solving solution)  until not meet with null
// due to the prototype we can acces to many things e.g methods, new keyword , 'this'
// and the protoypal inheritence in js is due to this
// 

// EveryThing in js are objects. mean everyThig(arrays, varibles , strings, numbers etc) are coimg from objects
// Array     -->    Object     -->   null
// String    -->    Object     -->   null
// as EverThing in js is refer to object, and all the  properties  that an Object have 
// can avalibles/access by array/strings/etc(usable are not is other debate)
// is a Function an object ???
// let check
// normal ftn
function ftn(num){
   return num * 5 
}
// console.log(ftn(5)); // normal way of printing what inside the ftn
// can we access what inside the ftn as we can access in object, ftn.num
// ftn.power = 2 // we are adding properties(key: value -- poewer : 2) in ftn as we were adding in obj 
// console.log(ftn.power); // 2 // asscesing the value of the key power as we injected in ftn 
// console.log(ftn.prototype); // {}
// from the above see watch that ftn can be act as object, so ftn is also(technically) object in js 

// we can inject/add metods/funtion/propeties to the strings/arrays etc as already these strings/arrays
// have due objects, so we can make new mehods/ftn and than add it to strings/arrays etc

function createUser(userName, score){
    this.userName = userName // "this" is refer to the current contex and telling that the userName with me is vaaribale
    // so we can't confuse with the userName of parameter whcih will have value
    // (as both have same name  due to this we can differ them easily)
    this.score = score 
    // remeber these will be add to the obj we when ever call them use new keyword(new creatUser()) as 
    // this ftn is became construtor ftn and we are creating new instance/object from it

}
// console.log(new createUser('hizar' , 3));// createUser { userName: 'hizar', score: 3 }

// as ftn in js is also object so can we inject methods(that we will make by itself) in in it -- yes
// as we know that ftn have prototype with {} so we can inject properties/methods in it
// ftnName.prototype.ourMethods = write what type of functonallity we are adding
// let we inject/add  method in the above ftn(createUser) that will increment the score (score++)

createUser.prototype.increment = function(){
    this.score++ /// this mean JIS NA BE BULAYA HA USS KA KAM (here incremnt) KRO
}
// let we are injecting another method //it will just print
createUser.prototype.printMe =  function () {
    console.log(`Price of ${this.userName}:${this.score}`);
}
// now if we call the above ftn(creatUser) 
//  const chai =  createUser('Chai', 25)
//  const tea = createUser('tea', 250)

 // as we inject the incremnt method in createUser ftn but the problems is that which 
 // score will be incremnt 'chai' or 'tea' as we are calling with differnt arguments
 // the createUser will confuse that which one(chai, tea) will i increment as both are calling me
 // so use 'this' , 'this' mean which when you call increnment them , we will put this.score
//  but but the problem is not solve yet -- 

// console.log(chai); // undefined
// console.log(tea); // undefined
// chai.printMe()  // give errro
// this will give error and js will say OHHH MAAAMAAA GG DA SaDEE( what is this printMe())
// this is bcz we are not makiing new instaace from the constructor ftn(creteUse) using 'new' before 
//calling the constructor ftn(new userCreate()) 'this' is adding value into the obj({}) and we have not 
// created yet any obj(as the "new" keyword mean that we are making new instance/obj from the c.Ftn and the values will be added init) 
// so put "new" when we are calling c.ftn new createUser() this mean that we are creating new obj form the c.frn createUser() and what value in this c.ftn will refer to thta instace due to 'this' keyword
// before putting the 'new' are in the prototype but they were not added to any obj/instance so when we put new(mean we are creating new instance so all the properties add in it) 


 const chai =  new createUser('Chai', 25)
 const tea =  new createUser('tea', 250)
 // we have created new instance and store them inside the cahi and tea
 // now if we can access the printMe and increat method
  console.log(chai); // createUser { userName: 'Chai', score: 25 }
  console.log(tea); // createUser { userName: 'tea', score: 250 }


  chai.increment() //
  console.log(chai);// createUser { userName: 'Chai', score: 26 }
  tea.increment() //
 console.log(tea); // createUser { userName: 'tea', score: 251 }

  chai.printMe() // Price of Chai:25
  tea.printMe() //Price of tea:250

  

/*
 Here's wht happens behind the scenes when the new keyword is used:
 A new object is created: 
          The new keyword initiates te creation of a new Js Object.
A ptototype is linked: The newly created objects gets linked to the
 portopte property of the constructor function, This means that it has access to
  properties and mehods definded on the  constructor's prototype. 
(this means that js does't give construtor through the calssses but give c.ftn thorgh the new 'keyword' 
this is the appraoch of js, this appraoch were used from years but the develper thinks that
 it is little but confussing for those developer that are coimg form p.languages that use
  class conept e.g java C++ etc so these constrtutor were raped with classes 
)

The Constructor is called: The constructor function is called with the specifed argumnets
 and this is bound to the newly created object. If no explicit retrun value is specified 
 for the constructor. JS assumes this, the newly created object, to be the intende return 
 value.

The new object is returned: After the constructor fucntion has been called, if it 
doesn't return a non-primitive value (object, array, function, etc.),
 the newly created object is returned
 

*/