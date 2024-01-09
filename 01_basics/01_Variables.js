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
bcoz in early days js have no control on scopes or no arware of it,  if someone try to change 
something that use var as keyword than change occur everywhere in the file with
 (var with same name e.g var a = 3, var a = 6 now new value of a is 6 )
  to solve this problem js introduce let 
 note.. neverEver use var, use let (- _|_ -)
bcoz of issue in block scope and functional scope
and also var add it's value to the window object(feature that provide by browser to js )
due to which user Date expose 
let didnt add it's value to window object


*/
accountCity = "Lahore"  // No Error bcoz it also use var/let if n0 keyword is used

// console.log(accountCity) 
// we can use other method to print data like console.table([all varibles name])
console.table([accountId,accountEmail,accountPassword,accountCity,novalue])
