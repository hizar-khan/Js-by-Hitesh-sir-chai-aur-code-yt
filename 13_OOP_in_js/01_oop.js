// object literals mean actually/literally making an Object e.g
//const user = { } // this is object literals -- this is the basic unite as an other langauge class is basic unite
/*
const user ={
    userName : 'hizar Khan',
    userName : "Ali",
    loginCount : 8,
    SignedIn : true,
    getUserName: function(){
        // return this.userName
    // this mean refer to the current context here user obj is the context and userNmae is the user Obj element
    console.log(this); // here we are using this inside an object --> user and we know that "this" 
    // have current context in which it is 
    // so here this have all things which is inside the user obj
    
    //e.g
//     OUTPUT of c.log(this)
//      {
//   userName: 'Ali',
//   loginCount: 8,
//   SignedIn: true,
//   getUserName: [Function: getUserName]
// } 

 

    } 
}
console.log(user.getUserName());
console.log(user.userName);
*/
// console.log(this); // here 'this' value will be change becasue 'this' aquire values in which it is
// as here this is in the global context of node enviroment so it will have empty {}
// but if we c.log(this) inside the browser or other eniment than it value will be change, 
// it will contain global context of that enviromnt
// inside the browser 'this' will have 'window' obj in it ,which global obj in it contains many things


// now if i want to add data of diffent users inside DB than make object of 
// each user will be lenght for this will use constructor
// (if different objects contain same properties than we use consturctor ftn)

// Constructor Function

// const promiseOne = new promise();
// or
// const date = new Date();

// this "new" keyword is constructor which allow us to make many instance from the object
// "new" is used to make new executoianl context and this is called contructor ftn

// let we are making a ftn

function user(userName, loginCount, isLoggedIn){
    // userName = userName // now here onRightSide userName is varible and onLiftSide userName is a 
    //value( it parameter which contain value that is coming from argument) that 
    //we are assign to the varible onRihtSide 'userName'  
    // but someTime these same varible and value-name make confussion or someTime we can make them differnt 
    // e.g varible:myUserName and vale: username
    // but if put 'this' keyword before the varible name than it will refer to the current context e.g
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // this.userName is varible and userName is value that is assign to the varible this.userName
    // and we know that "this" is  an empty object so this.userName mean that put what inside userName in obj {}
// return this // no need of return bcz it is used as bydefault ,,it is define Implictlly // now this "this" will
// contain userName loginCoun and isLoggIn values as an obj {}
}
const userOne = new user('hizar khan', 8, true)
console.log(userOne);
const userTwo = new user('Ali ', 4, false)
console.log(userTwo);
// this mean that the above ftn which called construtor ftn is like a frame and
//  we can make more than one objects with different values
// if we don't use 'new' keyword than the values will be override
// thsi "new" mean new copy/instance of object

// when ever you use 'new' keyword than there will be always an empty object created (which is called instance)
// the constructor ftn is called due to the 'new' keyword , and all the arguments in c.ftn  pack them and provide/give them 
// in this "this" keyword  all the arguments injected init that are insede c.fn
// we will get everything that are inside the c.ftn in new object
