// call in js
// AS we know the call stack in js
//in call stack we have many things like Global execution (which is always present ) than ftn executions 
 
// --------- subFtn Execution -------
// --------- ftn Execution -------
// --------- ftn Execution -------
// --------- ftn Execution -------
// --------- Global Execution -------

/// in the above call stack first global execution will always present 
// than many ftn come and execute
// when ftn execute than its execution context remove/vanish from the stack
// when new ftn come to call stack it bring the its own exection contex, memeoy for valbles 
// and have some default properties like global exueition have window obj, brower api etc
// and we know that we have 'this' in these exectuion context, the value of 'this' is different in differnt context
// in global context of browser 'this ' value is window obj while in global context of the node enviroment 'this value is { } empty obj
// as we know that 'this' value in obj is what inside the obj and same in ftn but but what will be the value of 'this' if it is inside the subftn of the fnt
//mean if we have a ftn in other ftn than what will be the value of 'this' in the inner ftn , it will be or refer to the Global context
 
// let we have a ftn inside that ftn we are calling another ftn
// let see the senoiro in the call stack
// first the Global exectuion will always present 
// than ftn exectuion will be prent 
// as we are calling ftn inside a ftn 
// this calledftn have own execution context
// here will   be a problem about 'this' , that will will the 'this' refer to
// mean how  the called ftn  will know that 'this' refer to what
// becasue it is inside a ftn and its outer layer is that ftn
// in this Case 'this ' refer to the Global execution Context
// as 'this' in Browser refer to window obj while in node 'this' refer empty obj {} as global context
// 

// --------- calledFtn Execution -------
// --------- ftn Execution -------
// --------- Global Execution -------



/// let see this through Code

// let we have a ftn

function setUserName (username){
    // coplex BD calcu
    this.username = username
    console.log('createUser have access of me');
}
function createUser(username, email, password){
    // here we want to get the username from the ftn setUserName //  this.username = username
    // so we will call it as username is in setUsername ftn
    // we think that we will have access of the username 
    // but here is just refernece of the setUserName ftn (don't consfeuse with parenthises here is just refernce of ftn)
    // but here it will just call the setUserName and than vanished from the stack without executing what inside it(usename)
    // so we have mehods that are used to call ftn inside a ftn .call and keeep the refenece of that ftn (.call will keeep the refenece of waht insdie the ftn e.g vailble methods et)
    // but here call is happen but still not adding usename so we are put this in the pareameter of .call of telling the setUserName ftn that not use your this(bcz it vanish in execution contex) we are given "this" mean what inside the setUserName will go insede the createUser , .call change the 'this' value , from the global context {}(as here this is indie ftn insde ftn so 'this'value will  be GEC) to what inside the setUserName as using as refernce with .call
    setUserName.call(this,username)
    this.email = email
    this.password = password
}
const cahi = new createUser('chai', 'cha@gami.com', 323)
console.log(cahi); //createUser { email: 'cha@gami.com', password: 323 } // but here we have no username
/*output
createUser have access of me       
createUser { email: 'cha@gami.com', password: 323 }

// we have access to the setUserName but why the username is not add to the obj cahi
*/

// after using .call(this, )
console.log(cahi); // createUser { username: 'chai', email: 'cha@gami.com', password: 323 } 
// calling pass current execution context to other ftn // change of CEC of 'this'