// A closure gives us access to outer function's scope from an inner function.
// in Js, closures are created every time a ftn is created, at ftn creation time.

// lexical scope

// function outerFtn(){
//     let outerVar = " Variable of Outer Function."; // name is a local variable created by init
//     function InnerFtn(){
//         console.log(`Accessing: " ${outerVar} " from the innerFtn` );
//     }
//     InnerFtn()
// }
// outerFtn();

// so we can access the variables of the parent function from the child function but
// the parent function can'nt access anyThing from the child function .
// As the Older person Give ice cream or the younger one ask for ice cream from the Older;s
// but the Older's can ask for ice cream from the younger one
// this called lexical scope

// let globalVar = "i am Global var"
// function outerFtn(){

//     let outerVar = " Variable of Outer Function."; // name is a local variable created by init
//     function InnerFtn(){
//         console.log(`Accessing: " ${outerVar} " from the innerFtn` );
//         console.log(`${globalVar} :Accessing from the child ftn`);
//         let innerVar = "i am Inner Variable"
//     }
//     InnerFtn()
//     console.log(globalVar + " ;Accessing from the Parent ftn");
//     // console.log(innerVar);// give error

// }

// outerFtn()

// console.log(`${globalVar} : Accessing Globally`)
// console.log(innerVar); // give error
// console.log(outerVar); // give error

// can two child's of the same function can access the variables of eachOther on Not ?
// let check
// function parentFtn() {
//   let parentVar = "I'M Parent Variable";

//   function child_1() {
//     let child_1_Var = "I'm  Child-1 Variable";

//     // console.log(`Accessing :${child_2_Var}`);// error 

//     console.log(parentVar);
//   }
//   function child_2() {
//     let child_2_Var = "I'm  Child-2 Variable";

//     // console.log(`Accessing :${child_1_Var}`);// error 
//     console.log(parentVar);

//   }
//   child_1();
//   child_2();

// //   console.log(child_1_Var); // error
// //   console.log(child_2_Var); // error
// }

// child_1()  // Error

// parentFtn();
// child_1()  // Error

// / so siblings ftn can't access variables of eachOther but both can access its parent's 
// variables but the parent can access either of its child's variables 

// closures 

// function makeFtn(){
//     const name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//      return displayName;
// }

// const myFunc = makeFtn();
// myFunc()

//  in the above ftn we are returning function reference while in the other fucntions
// we just call that ftn and after the execution the fun fininshed but here we are 
// returning function refenrce of the child's ftn to the pareent insted of calling the child ftn 
// inside the parent ftn .
// this mean that the ftn retrn not only the the child ftn but also the whole lexical scope of the child ftn 
// will be return to the parent ftn mean that the parent ftn varaible is link with the child ftn due to the lexical 
// scope of the child  ftn so the child ftn and its lexical scope (the parent varibales also ) will return to the parent fun 
// so we will store it into new variables because if we call just call the parent ftn its
// will executed and the child's ftn will not exeucted as the parent ftn return the child reference
// not it's execution . as in the the varible in which we are stroing the parent ftn (const muFunc = makeFtn()) the 
// variable will acts as ftn  as the parent ftn returning the refernec of the child ftn so we will call it as myFunc() to print what inside the childs ftn 


// so in closure we return the whole ftn with its lexical scopes

// practical use 

