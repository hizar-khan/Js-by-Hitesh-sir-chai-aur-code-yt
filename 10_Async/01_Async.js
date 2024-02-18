// Async in js
/**
 As Js is a Synchronous and single thread mean the code run 
 step by step in sequence, this is the by-default behaviour of js.
 in js execution context the code run line by line.first line 1 execute
 than the second line execute mean that the second line will not execute
 until the first line execute.each operation wait for the last one to complete
 before executing, this is due to the sync behaviour of js.

 */
/***** Blocking Code  VS Non Blocking Code 
 there are two type of code in programming 
 i) Blocking code 
 it block the flow of program( don't do anything until i bring water).
 it read file synchroniously

 ii) non-blocking Code
 it doesn't block the flow of program(do whatever you are doing,
 i am going to bring water). it read file asynchroniously

 both block and non-block code have their own improtance and uses
 */

 /*
  Js Engine:
  js engine is made from memory heap and call stack.
  
  web api;
  web api is always inside the browser. when we use web api than we have access to the dom api
  but if we use the node enviormnt than there will be no dom api bcz there no dom api inside the node,

  task queae; this make the js fast and async ,this add the callbacks(that are coimg from  the regiter call stack of web api) 
  to the call stack of the js Enginge.

  promise queue also called high priroty queue.

  whenEver a program execute than a call stack is madeUp/born of that program,
  in that call Stack our global execution context made,and load each function one by one.
  load a function, when it execute than unload thad ftn in call stack.
  in memeory heap ,allocation of memory for varibles happen.

  now where the problem came when we code async program,
  we want that a  resource that remind us a task that will complete in future, when that task complete, 
  we want that resource will notyfy us that "your task is done"
  these resources proveded by Web api or node api etc are avalibles.(setTimeout, set interval fetch etc)
---- example of setTimeout()
let we have a ftn on which we write in the setTimeout() which is async
(we are telling in the setTimeout that call that ftn after a while)
the ftn  which is insdet he setTimeout() will call the setTimeout which 
is inside the web api in that we api we have a rigister , that register 
will keep that ftn as a call back ftn and when its calling time over it will
 send that callback ftn inside the task queue, in task queue the call back ftn's 
 will enter in one way mean first come first out
 that callbacks ftn's will than inter insdie the call stack of js engine and than execute.

 we have new api e.g. fetch() these are due to the promises 
 these have high priority task it work same as task queue but its priority is high


 question;
 let we have a setTimeout() in the time to exute is give 0 second  
 let we have three ftn's
 ftn-1 (normal ftn)
 ftn-2(setTimeout ftn with 0 sec) async
 ftn-3(normal ftn)
  as we know that the ftn-1 will execute first due to in first line
now as setTimeout have 0 sec to exeucte ,is this ftn will execute first ot the ftn-3 
here the ftn-3 will execute first than the setTimou ftn with 0 sec
bcz the the setTimeout () complete it's cycle 
after the exection of the fnt-3
than the ftn-2 with setTimeout will exuctue due it's async behiour

 */