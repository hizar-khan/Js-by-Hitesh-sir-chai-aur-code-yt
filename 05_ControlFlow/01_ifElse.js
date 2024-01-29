/**
it is necessay to not Execute All code ,code should be execute on Conditional base e.g
 if we login in than only one block of code run 
 While when we logout than only other code block run  mean
  each  code run  for specific activity not the whole program/code 
  should run for single activity
 this is called Control or Logic Flow
 
 //first control flow is --> If Statement
 syntx of if Statement
 if(condition) 
 {
    statement
 }
 -----if the above condition is true than the code indide the scope blcok {} will execute
 ----- if the condition is false than the control will not enter inthe Block 
example
if(true){
    console.log("the condition is true so the code inside the block will execute");
}
if(false){
    console.log("this block code will not execute coxzz the condition is false");
}

mostly we are using comparinsion for condition like 2==2, 2===2(cheking type) , 
5<8, 4>2, 3=>3, !(not) != (notequal) ,!==(not same type)etc

if else
syntx
if(consition){
    code to execute
}
else{
    if the above if code not execute(conditionis false) than execute this block of code
}
temperatur =20
if(temperatur  > 40){
    console.log("it is Very Cold today");
}
else{
    console.log("Weather is hot");
}
const score = 200

if(score >100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); // this code will make error bcoz 
variable "power is local scope{} here we want to access it outSide the {}
 Globally note if we declear a variable inside scope{} with keyWord "var"  
 than it will not make an error as var is Global scope so that's is
  why in modern js let and const keyword is used to counter this situation"

  // shortHand for ifElse
  const balance = 1000
  if (balance > 5000) console.log("I'm Broke");
  else console.log("U are Irani-Millionor");
  // in the  above code we did't use {} it but still code work fine but we did't use mutli line ,
  if we want to use multi line inthis way than we use comma ','
  if (balance < 5000) console.log("your are  Broke") ,
   console.log("But don't worry your are still Irani-Millionr"),
   console.log("-------------"),
   console.log("but don't write code like this");

----------------- Nested if Else ---->  Else if
if we have more than one condition than use it
if(condition-1)
{}
else if()
{condition-2}
else if()
{condition-n}
else
{

}
-------------------

let balance = 5000
let balance2 = 4000
let balance3 = 3000

if(balance == 6000){
    
    console.log("Congrate!! U R Millionar  but Iranii ");
}
else if(balance){
    
    console.log("Congrate!! U R Still -Iranii-Millionar    ");
    console.log(balance)
}
else if(balance > 200){
    
    console.log("Unfortuatently!! U R Broke Even In Iraniii too ");
}
else
{
    console.log("I think U R Juior Programmer");
}
// if any of the above condition became true than it's block code will execute 
// but none of the condition are true(All False) than the Else{} block will execute

// --------------------Some Intersitng things --- Some Real life Uses not Reel life hahah ---

 */
// As nowadays people are used to purchase things Online -ONlineShopping
// here we are creating website for costomer-- they are going to purchase things Online -through this website

const userLoggedIn = true
const debitCard = true



if(userLoggedIn && debitCard){
    console.log("LoggedIn: Success");
    console.log("debitCard: Valid");
    console.log("Your are Allowed To Purchase");
}
else{
    console.log("wrong passward Or debitCard is Not Valid !");
}
// -----------
console.log("-----------|| = Or -------------");

const LoggedInGoogle = false
const LoggedInEmail = true

if(LoggedInGoogle || LoggedInEmail){
    console.log("LoggedInGoogle: Denied");
    console.log("LoggedInEmail: successed");
    console.log("debitCard: Valid");
    console.log("Your are Allowed To Purchase");
}
else{
    console.log("wrong passward Or debitCard is Not Valid !");
}
// && = And , both true than true ,|| = Or , Anyone of condition ture than ture,





if(2 !== "2"){ // true , its mean that 2 is not same type of "2"
    console.log(' 2 is number and "2" is stirng so 2 is not the same type')
  }
  if(2 !== 2){ // false bcoz 2 and 2 both are numbers
    console.log("true")
  }
  else 'false cause 2 is number and also 2 is number so '