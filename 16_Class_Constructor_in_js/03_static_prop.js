class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`UserName: ${this.username} is LoggedIn`);
    }
    // i want that we new user is created than a unique Id is generate for it like in mogoDB
    // let i also want to not give access of this method  to every obj that is extenioiate from this class
    // use static keyword to make the method private
    static createId(){
        return `123_${this.username}` // let assume that 123 is unique id for each user // user random t0 genrte
    }
}
const newUser =  new user('hizar')

// console.log(newUser.createId()); // give error  due to static keyword

class Teacher  extends user{
    constructor(username, eamil){
        super(username)
        this.eamil = eamil
    }
}
const newTeacher = new Teacher('borak','broak@gamil.com')
newTeacher.logMe() // UserName: borak is LoggedIn 
console.log(newTeacher.createId()); // give error due to static keyword which make the method private