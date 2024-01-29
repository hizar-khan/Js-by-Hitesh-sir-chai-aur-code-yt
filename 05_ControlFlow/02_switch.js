// SomeTime we are using or woring On a variable  again and again
// SomeTime we are Checking a Value on different Condition 
// for such situation we are Using switch (switch is useful in Redux)
/*
// syntax

switch (key){
    case value:
        break;
 case value2:
    break;
case value3:
    break;
case value-n:
    break;

    default:
        break;
}
// whenever the case match than the bewlow of that case all cases will be executed if we did'nt use break execpt defautl; so 
// break is used to stop the program after the value match 

*/
const month = 4

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febauary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April"); // this case will execute
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log(`${month}: this not month cozz there are Only 12 months`);
        break;
}


