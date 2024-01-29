//  help taken form ChatGPT


/*

Summary:
Memory Phase:

Variables and functions are declared, and memory space is allocated for them.
Variables are initialized with the value undefined.
Execution Phase:
Values are assigned to variables.
Functions are executed, and their execution contexts are created.
Statements are executed in a top-down manner.

Memory Phase:
Variables and functions are declared, and memory space is allocated for them.
Variable declarations are hoisted to the top, and functions are fully declared.
Variables are initialized with the value undefined during this phase.

Execution Phase:
Values are assigned to variables during execution.
Functions are executed, and their execution contexts are created.
Statements are executed in a top-down manner.
The call stack keeps track of function calls and returns.
Function Execution Context:

Functions create their own execution contexts with local variables and parameters.
Variables are accessed based on scope, and the scope chain is established.
Console Output:
The final output of the code is determined by the values assigned and returned during execution.

Understanding the interplay between the Memory Phase and the Execution Phase is crucial for
 comprehending the behavior of JavaScript code. The call stack manages the flow of function calls,
  and the concept of execution contexts helps visualize how variables are stored in memory during 
  the execution of the program. Additionally, the discussion emphasizes the importance of correct 
  syntax and variable scoping for writing error-free and predictable JavaScript code.

  */


/*
User
what is call stack explain with example
ChatGPT
The call stack is a fundamental concept in the execution of programming code,
 and it plays a crucial role in managing the flow of function calls in a program. 
 It is a data structure that keeps track of the execution context (local variables, parameters, etc.)
  of functions in a program. When a function is called, a new frame is added to the top of the call stack, 
  and when a function completes, its frame is removed from the top.

Let's go through a simple example to illustrate the call stack:


function greet(name) {
  console.log("Hello, " + name + "!");
}

function sayHello() {
  let userName = "Alice";
  greet(userName);
  console.log("Greeting has been said.");
}

function startProgram() {
  console.log("Program started.");
  sayHello();
  console.log("Program ended.");
}

// Initial call
startProgram();
In this example, we have three functions: greet, sayHello, and startProgram. 
The startProgram function is the initial function called.

startProgram(): When startProgram is called, a frame for startProgram is added to the call stack.

sayHello(): Inside startProgram, sayHello is called. A new frame for sayHello is added 
to the top of the call stack, and the execution moves to sayHello.

userName assignment: Inside sayHello, a variable userName is assigned the value "Alice."

greet(): The greet function is called from within sayHello. A new frame for greet is added
 to the top of the call stack, and the execution moves to greet.

Console log in greet(): Inside greet, a message is logged to the console.

Return from greet(): greet completes its execution, so its frame is removed from the call stack,
 and control goes back to sayHello.

Console log in sayHello(): The message "Greeting has been said." is logged to the console.

Return from sayHello(): sayHello completes its execution, so its frame is removed from the call stack, and 
control goes back to startProgram.

Console logs in startProgram(): The messages "Program started." and "Program ended." are logged to the console.

Return from startProgram(): startProgram completes its execution, and the entire program finishes. The call stack becomes empty.

This process demonstrates how the call stack keeps track of the execution context of functions and how it manages the flow of
 function calls and returns. Each function call adds a new frame to the stack, and each return removes the top frame. 

 Understanding the call stack is crucial for debugging and comprehending the flow of execution in your code.
 */