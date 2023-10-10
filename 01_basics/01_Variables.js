// Investigating
const accountId = 12434
let accountEmail = "hizarkhan@gmail.com"
var accountPassword = "12436"
accountCity = "Peshawar" 

// accountId = 2  //Error coz const can't change
accountEmail = "loloo@gmail.com" // no Error bcoz let Value can be change/update
accountPassword = "22222"  // no Error bcoz var also update/changed
let novalue; // if variable have no value than it will be undefined

/*so if both var and let change its value than why we are using both ????
bcoz in early days js have no control on scopes or nor arware of it so if someone try to change something that use var so everywhere that change occur so the solve this problem js introduce let 
so now don't use var use let (- _|_ -)
bcoz of issue in block scope and functional scope


*/
accountCity = "Lahore"  // No Error bcoz it also use var/let if n0 keyword is used

// console.log(accountCity) 
// we can use other method to print data like console.table([all varibles name])
console.table([accountId,accountEmail,accountPassword,accountCity,novalue])
