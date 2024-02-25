// Prototype
// let i have a string and we know that we have different properties/methods(lenghts, upperCase trim etc) by-defalut with strings (as goes thourgh objecs)
// Can we add/inject new properties/methods with it??
// let check
let myName = 'Hizar'
console.log(myName.length);// 5

let myName2 = 'hizar     '
console.log(myName2.length);// 10 bcz the 'spaces' also count

// let we want to add method that will remmove space from the strings(as we have already trim() which remove sapces)
let nameTrimed = myName2.trim()
console.log(nameTrimed.length); // 5

// but here i want that we have a property that show the lenght of only letters and ignore the space (by not using the trim() or other method we want to make our own method)

 let channel = '        Chai      '
 let teacher = '        hitesh      '
 let medium = '        youTube      '
 let langauge = '        JavaScript      '

 String.prototype.trueLength = function(){

    return this.trim().length

 }
//  console.log(`Length after removing spaces with the injected method:${channel.trueLength()}`);
//  console.log(`Length after removing spaces with the injected method:${teacher.trueLength()}`);
//  console.log(`Length after removing spaces with the injected method:${medium.trueLength()}`);
//  console.log(`Length after removing spaces with the injected method:${langauge.trueLength()}`);

 // more
 let myHero = ['spiederMan', 'thor', ]

 let HeroPower = {
    spiderMan : 'sling',
    thor : 'hammer',
    getSpiederman : function () {
        console.log(`Spidy power is ${this.spiderMan}`);
    }
 }
// can we inject new methods(methods that we will create by ourSelf) in the obj
// we want that the method we are injecting will be avalible in every object
Object.prototype.hizar = function(){
    console.log('hizar mehod will be avalible in objects');
   
}
HeroPower.hizar() // hizar mehod will be avalible in objects


// as we see the the newly injected mehod is present in all obj
// now we know that what inside an Object in js will be presnet in strings/arrays/function etc
// as everythin in js is obj. let see is hizar() is inisde the array

myHero.hizar() // hizar mehod will be avalible in objects

// String.hizar() // hizar mehod will be avalible in objects
// Function.hizar() // hizar mehod will be avalible in objects


Array.prototype.arrName = function(){
    console.log('Array in obj');
}
myHero.arrName() //Array in obj
// is this  arrrName() will be in object
// Object.arrName() // will give error 
let arr = []
arr.arrName()// arry in obj

// inheritence
// inheritence mean that one thing can acquire/share of another thing
// All human share same propeties e.g can talk, can walk, can eat, etc. and each human have unique qulity e.g Ali can make drawing of animals 
// these unique properties can inherit someone else(like ali qulity of drawing can inherit his sons)

const Ali ={
    name : 'Ali',
    eyes: 'two',
    nose : 'one',
    canTalk: function(){
        console.log(`${this.name} can Talk`);
    },
    canDrawing: function (){
        console.log(`${this.name} can Draw Animals potrit`);
    }
}
const aliSon = {
    name : 'kami',
    canSwinm : function(){
        console.log(`${this.name} can swim`);
    },
    // __proto__: Ali.canDrawing
}

// console.log(aliSon.__proto__);
// console.log(aliSon);
// aliSon.__proto__ = Ali.canTalk()
// console.log(aliSon);

// modern syntex
Object.setPrototypeOf(aliSon, Ali) // alison will aquire all the propeties of ali
aliSon.canDrawing() // kami can Draw Animlas
aliSon.canTalk()
console.log(aliSon.name);