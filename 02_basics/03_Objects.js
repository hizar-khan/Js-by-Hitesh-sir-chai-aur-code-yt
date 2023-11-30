// Objects in js
//there are two ways to declear Objects i)literal ii)constructor
//singleton mean when objects is created from constructor
//  Object.create this is objcet through constructor


// Object literals
// const obj = {} syntax
// we have keys and values in {} of object

/* const obj = {
    key1:values,
   key2:values
}
*/
// note that keys are in strings but don't put them in " "
// we can put any type of values in a object

// const user = {
//     name : "hizzar",
//     age: 20,
//     location: "Peshawar, Pakistan",
//     "email": "hizar@gmail.com",
//     isLoggedIn: false,
//     lastLogInDays : ["monday","friday"]
// }

// how to acces values of object
// console.log(user.name);
// most of the time programmer use the above method to access objects values but this is not the good practice
// we can use 2nd method to access values of obj
// console.log(user["name"]);
/// the reason to use  second method ,bcoz if we put the key inside " " than the objec.key will not work only object["key"] will work , so it is better to use the second method
// console.log(user.email); // error coz we have declear key email inside ""
// console.log(user["email"]); /// this will work so always use this method to acces key of object


// symbol in js
// const mySymbol = Symbol("key1")
// how to use symbol datatype in objects as a key
// [mySymbol] = "this symbol is used inside object"

// const mySymbol = Symbol("key1")
// const obj = {
//     namE : "helll",
//     [mySymbol]: "this is how we use symbol in obj" // symbol 
//}
// console.log( obj[mySymbol]);


// how to access , change , add data in object
// const mySymbol = Symbol("symbol in js") // this how we declear symbol in js
// const user = {
//     name : "hizzar",
//     age: 20,
//     [mySymbol]: "key1", // this how we use symbol in obj
//     location: "Peshawar, Pakistan",
//     "email": "hizar@gmail.com",
//     isLoggedIn: false,
//     lastLogInDays : ["monday","friday"]
// }
// console.log(  user[mySymbol]);
// console.log(Object.freeze(user));  //this mehtod will make the object unchangeable 

/// to access the data of object
// two ways obj.keyName && obj["keyName"]
//  console.log(user.name);
//  console.log(user["name"]); // always use this mehtod coz sometime when a key is inside " " than obj.key will not work

 // how to change value of key in obj
 // obj.keyName = "NewValue"
//  console.log(user.name = "hizar Khan Afridi");
// console.log(user["age"] = 23);
//  console.log(user);

// delete value or key in obj
// console.log(delete user.age);
// console.log(delete user["age"]);

// console.log(user);

/// if you Want to not change or delete your object than use this Object.freeze(objName)
// console.log(Object.freeze(user)); //  this mehtod will make the object unchangeable 

// we can use functions inside objects

// const user = {
//     name : "hizzar",
//     age: 20,
// }
// user.greeting = function(){
//     console.log("hello user ? we are Using ftns in obj");
// }
// console.log(user.greeting);
// console.log(user.greeting());

// funciton with some keys of same object
//  user.greetingTwo = function (){
//     console.log(`hello this is greeeting with some keys of obj. ,${this.name}`); // note that we are  using "this" coz we are referng  keys same   obj
//  }
//  console.log(user.greeting());
//  console.log(user.greetingTwo());


 // final note that always use [] while accessing obj keys:vales not use much obj.keyName use obj["keyName"]

 // objects singleton , objects that crated  with the help of constructor

 // two ways are  used to declear objects
 /*1*/   //const myObj = new Object()   // this singleton object
 /*2*/   //const myObj2 = {}            // this non-singleton object ,or object literal

//  console.log(myObj);
//  console.log(myObj2);


// const myObj2 = {} // this is an empty object , non-singleton object || object literal

// we are adding values in the above  empty object

//  myObj2.id = "123abc"
//  myObj2.name = "hizar"
//  myObj2.isLoggedIn = false
 
//  console.log(myObj2);

//  const myObj = new Object(); // this also an empty object ,singleton object

// we are adding values in the above  empty object

//  myObj.name = "ali"
//  myObj.location = "peshawar"
//  myObj.male = true
 
// console.table(myObj);



/*  
const newUser = {
    email: "ali@gmail.com",
    fullname:{
        newUserName:{
            firstName:"ali",
            lastName:"Nothing"
        }
    }
} 
  
*/

// console.log(newUser.fullname);   // accessing to the nested values of obj 
// console.log("---------");
// console.log(newUser.fullname.newUserName);    // accessing to the nested values of obj 
// console.log("---------");
// console.log(newUser.fullname.newUserName.firstName);   // accessing to the nested values of obj 

// we can use optional chnaing if there is no value exists  -- console.log(newUser?.fullname?.fistName)
// we will discuss this later


// merging ,combing values of objects
// Object.assign({},obj1,obj2,obj2, and so on)
/// {} this in Objcet.assign() is optional

/*
const myObj1 = {
    name: "Kamran",
    email: "kam12@gmail.com",
    cell : +93125534422
}
const myObj2 = {
    degree : "Bs IT",
    semester: "6th",
    address : "Peshawar"
}
const myObj3 = {
    isMale : true,
    dialble : false
}
*/

// const myObj3 =  {myObj1 , myObj2} // not working 
// console.log(myObj3); //
// 

// const comBingnig = Object.assign ({},myObj1,myObj2,myObj3)
// Object.assign(target,sources)
// the empty {} in the above is used that it is target and the remingng are sources.
// it is optinal to use but we use it coz we want to return all values in new target/object if we not use target {} than all values will return to the first object which target 


// console.log(comBingnig);

// but but but  the above (Object.assign) is not used mostly . we will use spread {...obj1,/...obj2,/..objN}
// const combineSpred = {...myObj1, ...myObj2, ... myObj3} // we will use this method often
// console.log(combineSpred);


// we values are coming from dataBase
// the valuse that are coming from the database will be in form of array of object [{} ,{},{}]
//e.g

/*
const users = [
    {
        id:1,
        email: "h3@gmail.com"
    }
    ,
    {
        id:2,
        email: "mk3@gmail.com"
    }
    ,
    {
        id:3,
        email: "lkm3@gmail.com"
    }
]
console.log(users[1]);
*/



// getting keys or values of an object


/*** 
const myObj1 = {
    name: "Kamran",
    email: "kam12@gmail.com",
    cell : +93125534422
}

*/


/*** 
console.log(Object.keys(myObj1)); // getting keys
console.log(Object.values(myObj1)); // getting valuse
console.log(Object.entries(myObj1)); // entries put each key:value pair in array -- rarely used
*/

// Note!!! that these keys and valuse will be return in arrays so we can use differnt type mthod on them like loops etc


/**
SomeTime we will looping on object and getting some values 
but someTime that values are not exists ,
 than  there is a chance of crashing .
 so to overcome this crash . either we will check that value manually or 
 use this method objName.hasOnwProperty("name of that property")
 */
// console.log(myObj1.hasOwnProperty("email"));
// console.log(myObj1.hasOwnProperty("hello"));


// de-structuring
// we can both de-structure Array and objects
// objects de-structure
  /** 
const course ={
    courseName : "chai and code",
    price : "On YouTube (free)",
    courseInstructor : "hitesh Sir"

}

*/
// console.log(course.courseInstructor); // it is common way to print key:value of object but what if we want to print same key:value more Than one time . so if we write the same code more than one time than it would be lenghty and not good practice ,
// so to avoide this situation we will use  de-structure e.g const {keyName: here we can give new keyName} = objName
// now log that keyName
// const {courseName} = course
// console.log(courseName);

// const {courseName : NameOfCourse} = course
// console.log(NameOfCourse);


// so we ever we see {keyName} it mean here de-struturing of object is happeing

//Api mean when we put our load/work on someOne else to do. (jab b ham apna kam kese douser ky sar par dalty hy it's called Api)
//like when we go to resturant and look in the menu and say i want this dish , so now it not work to cook/make that dish for youself , the chef of that resturnat will make it for you , 
// api are values that came from backend side in old days that values were used to come in xml form but now it come in Json form
//json is like an object with no name e.g {} but here key will also put in "" e.g "keyName" : "valueName"
//jsonSyntax 
/*
{
keyName1 : "value1" ,
keyName2 : "value2"
}
 */
// {
//     "userName" : " Ali Khan",
//     "courseName" : " jS with hitesh ",
//     "price" : " free"
// }
 // it's not necessay that api will always in objects
// someTime we can get Api in array e.g in that array we have objects

[
{},
{},
{}
]