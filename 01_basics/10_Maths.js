// Matths
// it is a liberay which came with js bydefault
// console.log(  Math)
console.log( typeof Math)// Object

// some Maths methods that mostly used in js
//abs() convert -ive number into +ive number but not +ive to -ive
console.log('----------abs()---------');

console.log(Math.abs(4)); // 4
console.log(Math.abs(-4));// - into + / output = 4
let num = -6
console.log(Math.abs(num)) // 6

// round() used to remove the decimal part and take the lower part if decil digit is less than .5
/// and take upper part if the decimal digit  is .5 or greater than  .5 e.g .5,.6,7 etc
console.log('round()');
console.log(Math.round(5.33));// 5
console.log(Math.round(5.7));// 6


// ceil() choose the uper number like if 4.3 than it will be 5
// also 5.1 will 6 just more than the actual number than choose the top value
// as ceil mean ceiling up mean make/take up value
console.log('-----ceil()---');

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.0)); // 4


/// floor() used to take the lower number
// e.g if 4.3 than 4  only take the digits  before decimal part
/// as name suggest floor mean always take lower value 
console.log(' -------floor()----------');

console.log(Math.floor(4.1)); // 4
console.log(Math.floor(4.9)); // 4

// min and max  // getting minumum and maximum
console.log('-----------min() and max()-------');

console.log(Math.min(4,3,5,3,2,3,0,1)); // 0
console.log(Math.max(4,3,5,3,2,3,0)); // 5


// Math.random() it will give us random value  in the range of/ btw  1-0 .it will change it value on every refresh 
console.log('---random()-----');

console.log(Math.random()); // 0.9257878765960439 / give new value on each refresh
// as random() always genrate random value btw 1 and 0 and mostly are decimal number
// so if we multiply random () with 10 than the first digit after decimal point will shift to lift side e.g 0.43444
// after multipy with 10 than it will became 4.3444
console.log(Math.random()*10); // 9.035602751388987
// some time may be the value =0 like 0.0034 so to avoide this case we will  add + 1 after the *10
console.log(Math.random()*10 +1); // 9.977011194133848
// to not confussed with BADMAS
// wrap the math.random()*10 in bracket
console.log((Math.random()*10) +1);
console.log((Math.random()*100) +1);// to get value btw 100 and 10 , multiply Math.random() with 100
// if we want to remove the decimal part than warp Math.random() with Math.floor() like that Math.floor(Math.random())
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10) +1); // +1 to avoide zero 

//  we cann use ceil 
console.log(Math.ceil(Math.random()*10));  
console.log(Math.ceil(Math.random()*10) +1);  


const min = 10
const max = 20
 // as we want vlue btw 10-20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min)

 console.log(Math.floor(Math.random() * (max - min + 1)) + min) // it will give vlue btw 10 and 20
 







 

