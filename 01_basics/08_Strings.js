// Strings in js
// declearing string two ways
// let str = "hello World"
// let str = new String("hello World")
// in js string is used to stored characters value,  in both single ' ' and double " " quotes
// let str = "hello " or 'hello' 
// + is used to concotenate two strings or string and other datatypes like "string" + number e.g "hizar" + 9

let name = "hizar";
let rollNo = 9;
console.log(name + rollNo + ' but nowadays it not recommanded to wirte Strings like this ');
// insted of plus + use backticks ``
 let namee = "hizar"
 let rollNoo = 9;
 console.log(`my Name is :${namee} khan and my RollNo is : 0${rollNoo}`);

// declearing string two ways
 let str = "hello World" // simple way
 console.log(str);
 console.log(typeof str);  //string
 console.log(str[4]);
 console.log(str.__proto__);
 console.log(str.length);

 let str2 = new String("hello World") // this sring obj
 console.log(str2);

 console.log(typeof str2); //type object so this will give lots of method 

 console.log(str2[0]); //getting key:value
 console.log(str2.__proto__);

 console.log(str2.length);//getting lenght
 console.log(str2.toUpperCase());//
 console.log(str2.charAt('2'));//charter position
 console.log(str2.indexOf('h'));

  let otherStr =new String("hizar khan")

  console.log(otherStr.substring(0,5));
  console.log(otherStr.slice(0, 5))

  let str3 ="   hizar khan       "
  console.log(str3)
  console.log(str3.trim())//remove whitespaces

  //some time in url we have % insted of space so to remove or replace it we use replace() method
  // to replace the url space which is %20

  let url = "https://hizar.com/hizar%20khan"
  console.log(url.replace('%20','-'));// here %20 replace with -
console.log(url.includes('hizar'));// checking that hizar is inside url

  