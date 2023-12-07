// global and local scope 
// every time you/we see { } ,it maybe of functoin or if/else curly brackets ,than think that  it's scope,,,,, expcet the object curly brackets 
// function {} or if/else {} are scopes  // what is indside of that {}are scopes of that funtion/if/else
// what inside that curly brackets {} will work/access inside that brackets
// it will be not avaliable/accesable to the outside of that {}
// but what outside of that curly bracktes are global scope and we can access global scope indside the curly brackets {} and aslo outside the brackets
// inshort local scope are block scope that only accessible / avalible inside that curly bracket {} while global scope are accessible/avalible everyWhere .we can acces it inside and outside the brackets
//remeber global scope always wiritten outside the brackets  while local scope will always written inside the curly brackets(of function/if/else not of objects brakkets)
 /**

if(true)
{
    let a = 20 // local scope
    const  b = 49 //local scope 
    var c = 33 // global scope
}
// console.log(a); // this will give error coz here we are using 'let' which is  is local scope dependent

// console.log(b); // this will also give an error coz here we are using  "const" which also scope dependent
console.log(c); // this will print without making any error coz 'var' is global scope // that it is not recomended to use
 */
/** 
// what if  we have two variable of same name one is local and other is global scope . than if we c.log it inside the brackets as well as outside the brackets than which one will print 
//e.g 
let xyz = "i am Golbal socpe variable"
if(true){
    let xyz = "I am Local socpe variable"
    console.log(xyz);
}
console.log(xyz);
*/
/** 

// accessing global scope variable from brackets
let val = " I am Global scope Varaible"
if(true){
    console.log(val);
}
*/

/** 

// accesing a global scope varaible from both outside and inside brackets

let global = "Global vaiable accessed"
if(true){
    console.log(global,"::Locally");
}
console.log(global, ":globaly");

*/

//Nested scope
// suppose we have ftn which have other ftn(nested ftn) 

function mainFtn (){
    const userName = "Hizar Khna"
    
    function nstedFtn(){
        const website = "YouTube"
        console.log(userName); // output :hizar khan , coz nested ftn (lcoal ) can get access to the parent ftn (global) variable 
        
    }
    //console.log(website); // it will give error coz parent function (global) can access to the nested ftn (child/local) variable
    nstedFtn() // 
}


mainFtn()

// nested function can get access of the parent varibles but
// parent function can't access variables of nested (child) function
// because parent ftn is act as a global scope ftn to the child ftn
// and that child ftn create their own memory stack
//it is like elder can give ice-cream to younger but elder can take ice-cream from younger hahaah


// we can do above things in if/else
/** 
if(true){
    const name = "iam parent variable"
    if(true){
        const user = "iam child variable"
        console.log(name + ' --AND-- '+ user);// it will print
    }
    // console.log(user); // give error coz parent can access to child varibale
  
}
//console.log(name);// give error coz it is scope inside the if(){} so we can get it outside it

*/


/** 

// /--------------- simple/basic ftn and expression ftn  --------------- 


// ********** Simple/Basic Function
function addOne (num){
    return num +1

}
addOne(5) // only return not print
console.log(addOne(5));

// but someTime we write above ftn as;

// --------------- Expression function like Variable ftn 
// it is called expression function 
//(variable function. in js variables are  very strong it can hold anyThing e.g json value,function, obj,arr , etc)
 
const addTwo = function(num){ 
    return num + 2
}
addTwo(5)
console.log(addTwo(5));
// we have some other type of ftn like arrow ftn iif etc


*/


// basic discussion on hoisting , we will cover it later in details
// let we have funtion
// hoisting mean accessing a function before it's decleartion but remember that we can't hoist any type of funcion like if we hoist on funcion expression than it will give error


 console.log(hoisting(4)); // this will give no error  due to hoisting but what if we declear function as function expression than it will give us error

function hoisting(num){
    return num + 1
}
// hoisting on exprssion futntion

console.log(hoistExpress(3)); //it will give error
const hoistExpress = function  (val){
    return val + 2
}

