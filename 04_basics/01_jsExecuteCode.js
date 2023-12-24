// how code Execute in js

// code Execution 
// call stack

// Execution context - how code divide into two parts
// call stack - we have memory , how function send/went , execute , and and print from it 



/* --- javaScript Execution Context ----

 js exectuon context mean that the file we have created in js , how it will run/ececute that file/code , to run a program
 js divide/run the into two phase
  Js run/execute that  code/program into two phase
  (whenEver we give code to js than Global Ec will always made/created that GEC will be kept inside the "this " variable)
 - remember when ever you see the js code {js code} there will be always global execution context 
  (global scope code)(GEC will always made ,when you write some js code) 

 and GEC will refer to "this" varibale (the global Ec will kept inside "this" vairible)
  but note that "this" variable have diffent Global Execuiton Context  in differnt enviroment(e.g node,brower , deno etc) 
  "this " varible in browser have GEC will be  "window object"
   (asked in interview) that is why when we work in rectJs we will see problems due "this" 
   (because in reactjs you will render on server side but here "this " refer to window object , it work in thread)
   keyword which due to it's different Global Execution Context in each enviromnt(it have different GEC in diffent envrmnt)
So remeber GEC is always present(maybe it have value or not)
(js is single thread ,everyThing in js is processed)

we have also Funciton Execution Context -FEC 
normaly we have GEC and FEC but we have also Eval Execution context (in mongoDb)

how js code execute
let we have a box/file  which contain js code
so the js code are run in two pahses 
i) memeory creation phase or memory phase or creation phase:
ii) Execution phase;
difference 
in Memory phase : 
           alocate/create memory for the varibles/code that we decleared  (only memory Alocation)
(         in memory creation only memory creatd for   anyThing/code that we declear not executed 
               that code only space/memory created for that code we decleare, )

 while in execution phase : 
                execution of code happen in this phase like division ,addition multiplicaion etc

how we keep values in memeory
 



*/
// Example to understand js code phase
// /*
    let val1 = 10
    let val2 = 5
  function addNum(val1, val2){
   let total = val1 + val2;
   return total
  } 


// */