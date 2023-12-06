// function with objects and Arrays
//  we can pass objects and Arrays as a arguments to the parameter of a funciton
// in e-commerence website the customer/user add items to the cart . now we don't know
// that how much items the costomer will add to the cart
//so we don't know how much parameter will be there , we will prepare arguments for that
// this situation is very common 

 /** 

 function simpleFtn (para1, para2,para3){
    return `${para1 +para2 + para3} :here we know that we have only three parameters so we can store/send only three argumnets, if we send more than three arguments than they will not print,they will be ignored`
 }
 
console.log(simpleFtn(4,4,6,10)); // here only the first three values/argumnts will receive by parameters , coz there is only three parameters

*/
// 
 // but what if 
 // we don't know the exit number of argumnets that a user will send/add , for this we will make/parameters for the unknow argumnts 

 /** 
function calculateCartPrice (num1){
return num1
}
console.log(calculateCartPrice(200,300,400)); 

*/
//in the above only 200 will print coz in ftn we have only one parameter , 
//if we want to store all argumnts inside that one parameter 'num1' than 
//we will use rest operator (...) ,rest will make packge of an array from
// the argumnts and keep then in parameter as an array

/** 
function calculateCartPrice (...num1){
   return num1
   }
    console.log(calculateCartPrice(200,300,400)); // so all values/arguments will send to parameter that use rest operatro(...num)
*/
/** 


   function ftnRest (...val1){
      console.log(val1);
      
   }
   console.log(ftnRest(200,330,399,323,334,343,'hello ',false));
   ftnRest('hello')
   /// as the rest operator retrun values in array  , so we can use all operation/methods of Arrays
*/

   // we can send obj to ftn parameter

   /** ************************************* obj and Array as a argumnt/parameter
   function objPara (obj){
      return obj
   }

   const objUser = {
      userName: "hizar khan",
      price : 299
   }
   // console.log(objPara(objUser));
   // console.log(objPara({name: "this is an object", role:"iam sending this obj as a parameter/Argument"}));
   // console.log(objPara(['hello', 'iam sendng Array as a parameter/Argument',300]));
   

   const objRtn = objPara(objUser)
   console.log(objRtn);
   console.log(objRtn.userName);
   console.log(objRtn['price']);

   const ArrRtrn = objPara([200,399,false])
   console.log(ArrRtrn[2]);

******************************************/
/** 
   function objArr(arr,obj){
      console.log(arr[0]);
      console.log(arr[1]);
      console.log(arr[2]);
      console.log(obj["role"]);
      console.log(obj["name"]);
   }
   const arr =[300, 400, "I am an Array"]

   const obj = {
      name: "I am Object",
      role : "i am Working as an argument"
   }
   // objArr(obj)// this will only print the obj value and give undified for  the logs of arr as we only pass obj
   //objArr(arr)// this will only print the arr values and give undified for  the logs of Obj as we only pass arr
//objArr(arr,obj)// now this will print both obj and arr values
*/
/** 
const newCostomer = {
   name: "hizar khan",
   price: 300
}

function store(anyObj="eh" ){
   console.log(`UserName is : ${anyObj["name"]} and price of item he buy is: ${anyObj["price"]}`);
}
store(newCostomer)
*/

/** 
// we can directly log object inside a ftn and print it ,without sending through argument
// but don't do it ,use the above methods
//e.g

const newObj = {
   name: "Directly log obj",
   price: "the key : values"
}
function newFtn () // without parameter ,directly 
{
   // console.log(`${ newObj.name} and ${newObj.price} `);
   return `${ newObj.name} and ${newObj.price} `
}

newFtn( newObj) // for console.log
console.log(newFtn(newObj)); // for return

*/

/** 

// Array as an Argumnt/paramtr

const newArr = [22,33,44,false]

function arrFtn (AnyArr){
   console.log(`${AnyArr[2] } and ${AnyArr[3]}`);
}
arrFtn(newArr)

// without using parameter
// but use the above method
const newArray = [22,33,44,true]

function arrFtN (){
   console.log(`${newArray[2] } and ${newArray[3]}`);
}
arrFtN(newArray)

*/