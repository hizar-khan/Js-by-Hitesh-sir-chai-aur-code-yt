//for loop
// syntx
/*  
 for(variable; condition; incrememnt ){
    code to execute;
}
for (let value = 0; value < array.length; value++) {
    const element = array[value];
    
}

note that the control in for loop shift to increment (++) at last mean when block code exxecute than the control shift to increment inthis way loop happen until the condition became false

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        console.log("contol is enter into the if statemet coz elemet === 5");
        
    }
    if (element === 10) {
        console.log("finaly loop stoped");
        
    }
    console.log(element);
    
}
*/

/* 
for (let i = 0; i <= 5; i++) {
    console.log(`Parent Loop value: ${i}`);
   for (let j = 0; j <= 5; j++) {
    console.log(`Child-Loop value:${j} And Parent loop: ${i}`);
    
    console.log(`${j} * ${i} =`, j * i);
    console.log(i + ' + ' + j + ' = ' +  i + j);
   }

   console.log(`------Loop ${i} End ---------`);
   console.log();
  
    
}

*/
/*   
let myArr = ["hizar", "ali", "zia"]
console.log(myArr.length);
for (let i = 0; i < myArr.length; i++) {
    let element = myArr[i]
    console.log(element);
}


*/
//it is not necessary to print all value of loop
// break and continue is used to end/stop a loop
/**
 for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("control is reach to 5");
        break
        
    }
    console.log(`Value of index: ${index}`);
    
}
 */
//continue is used to ignore/skip some code and contine the loop

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("control is reach to 5 ");
        continue
        
    }
    console.log(`Value of index: ${index}`);
    
}