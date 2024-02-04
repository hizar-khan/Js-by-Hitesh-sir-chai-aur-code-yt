//for loop
// syntx
/*  
 for(variable; condition; incrememnt ){
    code to execute;
}
let array = [1, 2, 3, 4, 5, 6]
for (let value = 0; value < array.length; value++) {
    const element = array[value];
    console.log(element) 
}

//note that the control in for loop shift to increment (++) 
//at last mean when block code exxecute than the control shift 
//to increment inthis way loop happen until the condition became false

for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element === 3) {
        console.log("contol is enter into the if statemet coz elemet === 3");
      // 'contol is enter into the if statemet coz elemet === 3'
        
    }
    if (element === 5) {
        console.log("Stop the loop");
      // 'Stop the loop'

        
    }
    console.log(element);
// output
//   0
//   1
//   2
//   3
//   4
//   5
  
 
}


*/
/*
for (let i = 0; i <= 2; i++) {
    console.log(`Parent Loop value: ${i}`);
   for (let j = 0; j <= 2; j++) {
    console.log(`Child-Loop value:${j} And Parent loop: ${i}`);
    
    console.log(`${j} * ${i} =`, j * i);
    console.log(i + ' + ' + j + ' = ' ,  i + j);
   }

   console.log(`------Loop ${i} End ---------`);
}
*/
/*
Parent Loop value: 0
Child-Loop value:0 And Parent loop: 0
0 * 0 = 0
0 + 0 =  0
Child-Loop value:1 And Parent loop: 0
1 * 0 = 0
0 + 1 =  1
Child-Loop value:2 And Parent loop: 0
2 * 0 = 0
0 + 2 =  2
------Loop 0 End ---------        
Parent Loop value: 1
Child-Loop value:0 And Parent loop: 1
0 * 1 = 0
1 + 0 =  1
Child-Loop value:1 And Parent loop: 1
1 * 1 = 1
1 + 1 =  2
Child-Loop value:2 And Parent loop: 1
2 * 1 = 2
1 + 2 =  3
------Loop 1 End ---------        
Parent Loop value: 2
Child-Loop value:0 And Parent loop: 2
0 * 2 = 0
2 + 0 =  2
Child-Loop value:1 And Parent loop: 2
1 * 2 = 2
2 + 1 =  3
Child-Loop value:2 And Parent loop: 2
2 * 2 = 4
2 + 2 =  4
------Loop 2 End ---------

*/

 /*
let myArr = ["hizar", "ali", "zia"]
console.log(myArr.length); // 3
for (let i = 0; i < myArr.length; i++) {
    let element = myArr[i]
    console.log(element);
    //hizar
    //ali
    //zia
}
*/


//it is not necessary to print all value of loop
// break and continue is used to end/stop a loop
/*
 for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("control is reach to 5");// control is reach to 5
         console.log(`at index: ${index}`); //at index: 5
        break
        
    }
    console.log(`Value of index: ${index}`);
    //output
    // Value of index: 1
    // Value of index: 2
    // Value of index: 3
    // Value of index: 4 
    
    // loop stop at index: 5 due to break statemnt
}
*/


//continue is used to ignore/skip some code and contine the loop

for (let index = 1; index <=6; index++) {
    if (index === 5) {
        // console.log(`control is reach at index no. ${index}`);
        // control is reach at index no. 5  
        continue
    }
    console.log(`Value of index: ${index}`);
        //   Value of index: 1
        // Value of index: 2
        // Value of index: 3
        // Value of index: 4
        // Value of index: 6

        // value at the index 5 is ignored due to contiue statement
}


// write table of 2
// for (let i = 2; i <= 2; i++) {
//     for (let j = 1; j <= 10; j++) {
//      console.log(`${j} * ${i} =`, j * i);
//     }
 
//  }