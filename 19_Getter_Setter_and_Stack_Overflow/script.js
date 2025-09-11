//
// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }
// }
// const hizar = new User("hizar@gmail.com", 'khan3434');
// console.log(hizar["password"]);// khan3434
// console.log(hizar.password);// khan3434

 // sometime we create a class and don't want to share or give access of our password 
//  sometime we have class and we  don't want to give access to everyone or we Want to not give 
//access to the specific properties of that class or someone want to get access but we want to do 
//some customize code in that class, some of these  scenario most of the time came, for these we use getter and setter
// e.g i want, that no one access to the password property and if someOne want to access it than they should get error, for this getter and setter are used.
// by-default every class have getter and setter but we don't give them the specific code so their default behavior remain.
// so control the specific property we will put getter and setter on them
// as in the above class we want to add getter and setter on the password property
// the getter or setter we are adding on any property. the add as a method on them(properties)
// e.g let it want to add get on the password property. let suppose someone want to get access to password
// than want i want to return to him =>  get password (){ return this.password.toUpperCase()} //now if run the code than 
// we will get Error coz , we should also set the setter because if we use one of them than we should also use the other one
// mean that both  getter and setter will be used simultaneously. otherwise it will not work and throw error 
// we will look the getter and setter as the outside prescriptive from the class coz if we want to get someting form the class than we should able to set it , that's why both get and set will be used respectively
// as we will get the property but we will not able to set it any values that is why both set and get will be used on the property at the same time
// let try it  
// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get password(){
//         return this.password.toUpperCase();
//     }
//     // as set will set values so it will always take parameter
//     set password(val){
//         this.password = val.toUpperCase();
//     }
// }
// const hizar = new User("hizar@gmail.com", 'khan3434');
// console.log(hizar.password);// khan3434

// but here will will get the below error because the constructor call again and again 
// because the constructor is setting the password and we are also setting the password 
// with the help  of the "set" method 
// RangeError: Maximum call stack size exceeded at set password [as password] 

// now how to set the values 
// as the problem is that, that the constructor is setting the password and we are setting as customize password by using the set(){} 
// so here a race began btw the constructor and the set(){} , both are trying to set the password
// to solve this we will set new property in the setter because now the value setting from the getter and setter not from the constructor (that what the user is giving in it as now the values is set from the setter and getter) 
// we will make new property in the set method

// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get password(){
//         return this.password.toUpperCase();
//     }
//     // giving new property in the setter(_password) to end the confusion(race) btw setter and constructor
//     set password(val){
//         this._password = val.toUpperCase();
//     }
// }
// const hizar = new User("hizar@gmail.com", 'khan3434');
// console.log(hizar.password);
/// but now we will get another error due to the get method , so here we will also give new property(_password)class User{
    class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase();
    }
    // giving new property in the setter(_password) to end the confusion(race) btw setter and constructor
    set password(val){
        this._password = val;
    }
}
const hizar = new User("hizar@gmail.com", 'khan3434');
console.log(hizar.password);// KHAN3434 // this uppecase() is because we are give it to the user who is getting it 
// as in the setter the password will be stored same as we are getting from the constructor but in the get we will make 
//change in it as we are giving it to the user who want to access , we can add many things with the passwrod in the set 
// method so the user will get changed password not he original mean we have full power that what the user will get
// let we want to get the password with some other character

class User2{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        // return this._password +'Ali';
        return `${this._password} Ali`;
    }
    set password(val){
        this._password = val;
    }
}
const ali = new User2("ali@gmail.com", '2323');
console.log(ali.password);//2323 Ali


// these are use for protection


// we can give getter and setter through properties  /.defineProperty

function User3(email, password){
    this._email = email;
    this._password = password;
// as ftn is also a Object, so we call objects properties
Object.defineProperty(this, 'email', {
    get: function(){
      return  this._email = email.toUpperCase();
    },
    set: function(val){
        this._email = val;
    }
})

}

const Khan = new User3("khan@gmail.com", 'afridi')
console.log(Khan.email); // KHAN@GMAIL.COM


// setter and getter through objects

let User4 = {
    _email: 'Omar@gamil.com',
    _password : 'loom',

    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email = val
    }

}
// console.log(User4.email);// OMAR@GAMIL.COM

// const newUser = Object.create(User4)
// console.log(newUser.email );// OMAR@GAMIL.COM