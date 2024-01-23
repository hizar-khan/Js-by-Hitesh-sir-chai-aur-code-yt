

// let date = Date()
// console.log(date); //'Tue Jan 23 2024 12:51:53 GMT+0500 (Pakistan Standard Time)'
// console.log(typeof date); // 'string'

// let myDate = new Date()
// console.log(myDate) //2024-01-23T07:50:27.199Z
// console.log(typeof myDate); // object

// console.log('--------toString()------------');
// console.log(myDate.toString()); //'Tue Jan 23 2024 12:53:32 GMT+0500 (Pakistan Standard Time)'
// console.log()

// console.log("  -----toDateString()-------"  );
// console.log(myDate.toDateString()); //'Tue Jan 23 2024'
// console.log();

// console.log("  --toLocaleDateString()-"  );
// console.log(myDate.toLocaleDateString()); //'1/23/2024'
// console.log();

// console.log("  --mtoString()-"  );
// console.log(myDate.toString()); //Tue Jan 23 2024 12:56:49 GMT+0500 (Pakistan Standard Time)'
// console.log();

// console.log("  --toISOString()-"  );
// console.log(myDate.toISOString()); //'2024-01-23T07:59:17.429Z'
// console.log();

// console.log("  --toUTCString() --" );
// console.log(myDate.toUTCString()); //'Tue, 23 Jan 2024 07:59:50 GMT'

// console.log("  --toTimeString() --" );
// console.log(myDate.toTimeString()); //'12:59:59 GMT+0500 (Pakistan Standard Time)'

// let cstmDate = new Date(2023,0,1)// remeber that month start with 0 = january 1= febuaray
// console.log(cstmDate.toDateString());

// let cstDate = new Date ("2023-01-01") // but here 01 is january not feb
// console.log(cstDate.toDateString());


//Time -- mostly used in quiz ,polls etc
let myTimeStamp = Date.now()
console.log(myTimeStamp); //1705996913723
console.log(Date.now()); // 1705996913723
//to convert it into seconds we /1000 
console.log(Date.now()/1000); //but here we will get decimal values (output : 1705996967.351) so to remove 
//them we will use Math.floor
console.log(Math.floor(Date.now()/1000)); //1705997026


let newDate = new Date()
console.log(newDate) //2024-01-23T08:04:00.112Z
console.log(newDate.getTime()) // 1705997076336
console.log(newDate.getHours()) // 13
console.log(newDate.getMinutes())// 5
console.log(newDate.getSeconds()) // 5
console.log(newDate.getFullYear()) // 2024

console.log(newDate.getMonth()) // 0 mean january
console.log(newDate.getMonth() + 1) //1 // becoz month start from 0  +1 will give the exxit months number

console.log(`${newDate.getMonth() + 1} month `) // same as above, backtick `` is used to write extra details //'1 month '

console.log(newDate.getDay()) // 2
console.log(newDate.getDate()) // 23


let newDate2 = new Date()
newDate2.toLocaleString('default', {weekday:"short"})
console.log(newDate2);// 'Tue'
// 2024-01-23T08:06:38.131Z