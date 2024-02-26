// Class in js
// classes nothing just a raper on construtor function
// in class we have differnet things but a construtor function must be there

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
// methods
    encryptPassword(){
        return `${this.password} abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai', 'chai@gamil.com', '343')
console.log(chai.encryptPassword()); // 343 abc
console.log(chai.changeUsername()); // CHAI


// Behind the secen
// let write above program without using classes
// fisrt the create ftn that will act as construtor ftn 
function User2(username, email, password){

        this.username = username
        this.email = email
        this.password = password
}
// let add other methods inside the user ftn
User2.prototype.encryptPassword = function(){
    return `${this.password} ; of User2`

}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()} ; of User2`
}

const chai2 = new User2('Chai2', 'Chai2@gamil.com', '343434')
console.log(chai2.changeUsername());