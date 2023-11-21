let myDate = new Date()
let date = Date()

// console.log(typeof date);
// console.log(typeof myDate);

// console.log();
// console.log('-toString()');
// console.log(myDate.toString());
// console.log();

// console.log("  --toDateString()-"  );
// console.log(myDate.toDateString());
// console.log();

// console.log("  --toLocaleDateString()-"  );
// console.log(myDate.toLocaleDateString());
// console.log();

// console.log("  --mtoString()-"  );
// console.log(myDate.toString());
// console.log();

// console.log("  --toISOString()-"  );
// console.log(myDate.toISOString());
// console.log();

// console.log("  --toUTCString() --" );
// console.log(myDate.toUTCString());

// console.log("  --toTimeString() --" );
// console.log(myDate.toTimeString());

// let cstmDate = new Date(2023,0,1)// remeber that month start with 0 = january 1= febuaray
// console.log(cstmDate.toDateString());

let cstDate = new Date ("2023-01-02") // but here 01 is january not feb
// console.log(cstDate.toDateString());


// Time -- mostly used in quiz ,polls etc
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Date.now());
// to convert it into seconds we /1000 
// console.log(Date.now()/1000); //but here we will get decimal values so to remove them we will use Math.floor
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getTime()) 
// console.log(newDate.getHours()) 
// console.log(newDate.getMinutes()) 
// console.log(newDate.getSeconds()) 
// console.log(newDate.getFullYear()) 

// console.log(newDate.getMonth()) 
// console.log(newDate.getMonth() +1)  // becoz month start from 0  +1 will give the exxit months number

// console.log(`${newDate.getMonth() +1} month `) // same as above, backtick `` is used to write extra details

// console.log(newDate.getDay()) 
// console.log(newDate.getDate()) 


let newDate = new Date()


newDate.toLocaleString('default', {
    weekday:"short"

    
})
console.log(newDate);