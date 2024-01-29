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
    due to it's different Global Execution Context in each enviromnt(it have different GEC in diffent envrmnt)
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
              (in memory creation only memory creatd for anyThing/code that we declear not executed that
              space/memory created for that code we decleare, )
               (create space in memory for varibles)
               (collect all the varibales/ftn-definitions and keep them in memory, make space in memory for them)

 while in execution phase : 
                execution of code happen in this phase like division ,addition multiplicaion etc

how we keep values in memeory
*/
// Example to understand js code phase
/*
let val1 = 10 
let val2 = 5
function addNum(num1, num2){
let total = num1 + num2;
return total
} 
let result1 = addNum(val1,val2)
let result2 = addNum(4,5)
console.log(result1);  // 15
console.log(result2); // 9

*/
//...... how the above code will run/execute
/*
    i)First of all Global Execution/Global enviroment come/created and will allocate in "this" variable 
    (these things will always happpen even the code is of two or more lines)
    ii) First phase-- memoory PHase in this phase   all variables are collected and keep then in a memory,
    that is  memory creation phase
    fist of all all variables names kept with values of undifined e.g. 
    line-1--> val1 = undifined 
    line-2--> val2 = undifined
    in  line-3--> addNum as addNum have no value assign to it so 
    line-3--> addNum = definition (bcz we only declear funtion ,no execution happing at this moment)
    all lines of funcion(function body will went in definition(ftnName))
    so the contronl will shift outside the body of function
    now at next line , we have , other varibles , these will kept inside the memeory with no value just
    names at thisPhase(memory phase)
    result1 = undifined 
    result2 = undifined 
    this is called memory creation phase Or first cycle (this cycle will always done/happen)
    cycle 2 
    Execution Phase;
    in this phase (values will be assign/added to each varibles that are stored in memory)
    we will start again from line 1
     so at line--1  values will be assign to the varibles
     val1 = 10
     val2 = 5
     in the ftn addNum , nothing will be happen at this time bcz there is nothing to execute at the moment
     we already hold its definition(ftnName)
     so the control will shift outside the funciton
     when control reach at the variable result1 than intresting things happen coz we are again at addNum(ftnName/ftn definition)
     this addNum will create its own execution phase so new exection context created/boc(we are calling a function)
     so here (in box) two things will created i) new variable enviroment ii) execution thread
     each time a funciton execute than a box will created which is called new exectional context which contains
      i) new-variable-enviroment ii)execution thread
     due to this box the two things will happen again 1)memeory creation Phase and 2) Execution phase
     this will execute each time we call/execute function (addNum())

     so for this 
     in memory phase for addNum-ftn we have
     num1 = undifined
     num2 = undifend 
     total = undifned
     note! don't look addNum() at calling ,look addNum() at ftn craetion/definoin/startd that is why we include total 

     now Exection context (here processing on data happen e.g. addition, division etc )
     so here we are receiving "val1" value in 'num1' and "val2" vaule in 'num2'
     so
     num1 = 10
     num2 = 5
     total = num1 + num2
     total = 15
     total is also returning to addNum(it is returning to the parent which global exection context)
      the new execution context which was created at the time of function exection will delete after
      the valuesreturn to the GEC
      now the values will store at variable  result1
       resutl1= 15
       now after this the control will shift to the next line where addNum ()ftn is going to execute
       so the above process will repeat 
       new box will created (execution context)
       in which we have 
       new Variable enviroment + execution thread(all execution of js happen on thread)
       so due to the above box again we have two phase
       memeory pahse and execution pahse
       in memeory phase
    the above processe will happen again(all varibles will be stored insede the memory)
    and at the execution(values will be added to variables and Operations will happen)


    ________---Call Stack ------_________
    in call stack, Global execution will always present
    after that 
    each ftn will come and execute 
    but some time we call a ftn inside a ftn so than how execution context will happen
    let we some ftn that we are calling
    one()
    two()
    three()
    so first 
    one() will execute then two( ) and than three() and so on
    but 
    if we call ftn one() and also call ftn two() iside one() 
    now which ftn will execute first
    let suppose we also call the three() ftn inside the two() now what will happen
    which ftn will execte first
    her LIFO(last in first out) concept works
    so fist the three() will execute than two() and at last One() will execute/run
*/










