// Strings in js
// declearing string two ways
// let str = "hello World"
// let str = new String("hello World")
// in js string is used to stored characters value,  in both single ' ' and double " " quotes
// let str = "hello " or 'hello'
// + is used to concotenate two strings or string and other datatypes like "string" + number e.g "hizar" + 9

let name = "hizar";
let rollNo = 9;
console.log(
  name + rollNo + " but nowadays it not recommanded to wirte Strings like this "
);
// insted of plus + use backticks ``
let namee = "hizar";
let rollNoo = 9;
console.log(`my Name is :${namee} khan and my RollNo is : 0${rollNoo}`);

// declearing string two ways
let str = "hello World"; // simple way
console.log(str);
console.log(typeof str); //string
console.log(str[6]);
console.log(str.__proto__);
console.log(str.length); ////getting lenght, start from 1 not from  0 as the index started
console.log(str.toUpperCase()); //
console.log(str.charAt("6")); //charter position
console.log(str.indexOf("W")); // get the index no. of the char , started from 0

console.log(str.substring(0, 7)); // give the subString , start from 0 index upto 7th index  // 'hello W'
console.log(str.slice(0, 7)); // slice mean cut the string from the index 0 upto index 7 // 'hello W'

let str0 = "   hello World";
console.log(str0); // '   hello World'
console.log(str0.trim()); // remove the whiteSpace //'hello World'

let str2 = new String("hello World"); // this sring obj
console.log(str2);

console.log(typeof str2); //type object so this will give lots of method

console.log(str2[0]); //getting key:value
console.log(str2.__proto__);

console.log(str2.length); //getting lenght
console.log(str2.toUpperCase()); //
console.log(str2.charAt("2")); //charter position
console.log(str2.indexOf("h"));

let otherStr = new String("hizar khan");

console.log(otherStr.substring(0, 5));
console.log(otherStr.slice(0, 5));

let str3 = "   hizar khan       ";
console.log(str3);
console.log(str3.trim()); //remove whitespaces

//some time in url we have % insted of space so to remove or replace it we use replace() method
// to replace the url space which is %20

let url = "https://%20hizar%20.com/hizar%20khan";

console.log(url);
console.log(url.replace("%20", "-")); // here %20 replace with -
console.log(url.includes("hizar")); // checking that hizar is inside url

let url2 = "https://h%44izar.com/hizar%44khan%44";
console.log(url2.replaceAll("%44", "------")); // replace EveryWhere
