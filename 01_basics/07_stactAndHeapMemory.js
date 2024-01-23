// Memory in js
// we two type of memory in js
// 1_Stack memory
//use in Primitive dataTyps
//whenever stack memory is using  its mean we are getting Copy and any thing *(changes etc )
// will happen in copied data not in Original One

let myhobbies = 'Cricket' // this will go in the stack memeory
let myNewHobbies  = myhobbies // this will get copy
 myNewHobbies = 'Football'// now if we change it will change only in copy not in Original
console.log(myhobbies);
console.log(myNewHobbies);


//2_Heap memory
//use in non-Primitive dataTyps
//whenever heap memory is using  its mean we are getting reference and Change will happen in the Original data
 let user = {   
    name : "hizar khan",
    email : "hizar@gmail.com"
 }
 //this user object will go into the heap memory and to reuse it we will git reference not copy.
 // so if we change in the refernce than the origninal will also change
 user.email // old/Orignal email
 
 user.email = "khan@gamil.com" // here iam changing in the key vale of object this change will
 // happen in original one coz its use refernce the user
user.email // new email 
console.log(user.email); // email changed


 //exmple 2

 let userOne = {
    name : "ali",
    class : "9th"
}
let userTwo = userOne

 console.log(userOne); //{ name: 'ali', class: '9th' }
 console.log(userTwo); //{ name: 'ali', class: '9th' }

 // now if change in the userTwo which use the reference of userOne than the change will happen in both userONe and userTwo
 userTwo.class = "10th"
 //now if we check both (old/new-copy) will have new value of class = 10th . so this mean that change in the copy also
 // make/affect the orignal one
 console.log(userOne.class); //'10th'
 console.log(userTwo.class); //'10th'

 
 console.log(userOne); // { name: 'ali', class: '10th' }
 console.log(userTwo); //{ name: 'ali', class: '10th' }

userOne.class = '12th' // if i make change in the old/orignal one the the change will also happen in the Copy one

 console.log(userOne); // { name: 'ali', class: '12th' }
 console.log(userTwo); //{ name: 'ali', class: '12th' }
