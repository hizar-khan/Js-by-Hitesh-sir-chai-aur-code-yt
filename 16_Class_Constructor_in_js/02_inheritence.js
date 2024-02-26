// 
class user{
    constructor(username){
        this.username  = username
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}
// inherit eveyting of one class by other class

class Teacher extends user{ // class teacher will inherit class user
    constructor(username, eamil, password){
          // eamil and password we are taking itself but we taking the username from the class user
         // we have discuss early in .call lecuture have we give varlibes etc of one ftn to another
        // but here user super keyword; super(write here what we are what from the class that we are inherit)
       // no neeed of using 'this' here
        super(username)
        this.eamil = eamil
        this.password = password
    }
    addCourse(){
        console.log(`new Course was added by ${this.username}`);
    }
}

const teacherName = new Teacher('Hitesh Sir', 'hiteshChaiWala.com', '23232')
teacherName.addCourse() // new Course was added by Hitesh Sir

const newTeacher = new user('SarYekk')
// console.log(newTeacher.logMe());
newTeacher.logMe()

console.log(newTeacher === teacherName);// false
console.log(teacherName instanceof user);// true
