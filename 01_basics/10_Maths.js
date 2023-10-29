// Matths
// it is a liberay which came with js bydefault
console.log(  Math)
console.log( typeof Math)// Object

// some Maths methods that mostly used in js
//abs() convert -ive number into +ive number but not +ive to -ive
console.log('abs()');

console.log(Math.abs(4));
console.log(Math.abs(-4));// - into + / output = 4

// round() used to remove the decimal part and take the lower part if decil digit is less than .5
/// and take upper part if the decimal digit  is .5 or greater than  .5 e.g .5,.6,7 etc
console.log('round()');
console.log(Math.round(5.33));// 5
console.log(Math.round(5.7));// 6


// ceil() choose the uper number like if 4.3 than it will be 5
// also 5.1 will 6 just more than the actual number than choose the top value
console.log('ceil()');

console.log(Math.ceil(4.2));

/// floor() used to take the lower number
// e.g if 4.3 than 4  only take the digits  before decimal part
console.log('floor()');

console.log(Math.floor(4.2)); // 4
console.log(Math.floor(4.9)); // 4

// min and max
console.log('min() and max()');

console.log(Math.min(4,3,5,3,2,3,0,1));
console.log(Math.max(4,3,5,3,2,3,0));


// Math.random() it will give us random value  in the range of  1-0 .it will change it value on every refresh 
console.log('random()');

console.log(Math.random());
// as random() always genrate random value btw 1 and 0 and mostly are decimal number
// so if we multiply random () with 10 than the first digit after decimal point will shift to lift side e.g 0.43444 after multipy with 10 than it will became 4.3444
console.log(Math.random()*10);
// some time may be the value =0 like 0.0034 so to avoide this case we will  add + 1 after the *10
console.log(Math.random()*10 +1);
// to not confussed with BADMAS
// wrap the math.random()*10 in bracket
console.log((Math.random()*10) +1);
console.log((Math.random()*100) +1);// to get value btw 100 and 10
// if we want to remove the decimal part than warp Math.random() with Math.floor() like that Math.floor(Math.random())
console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10) +1); // +1 to avoide zero 







 

