class User {
    constructor(username,email,pass){
        this.username = username
        this.email = email
        this.pass = pass
    }
    encryptpass(){
        return `${this.pass}`
    }
    captilizeuser(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("abcsss","abc@gmail.com",1234567)
console.log(chai.encryptpass());
console.log(chai.captilizeuser());


class teacher extends User{
    constructor(username,gmail,password){
        super(username);
        this.gmail =gmail
        this.password = password
    }
    addCourse(){
        console.log(`this is course`);
        
    }
}
const chaiop = new teacher("apna clg",'apna@abc',1234567)
console.log(chaiop.addCourse());
console.log(chaiop.captilizeuser());
console.log(chaiop.encryptpass());
class Useer{
 constructor(email){
    this.email = email
 }
 static createid(){
    return `123456`
 }
 //inheritance of static is prohibited
}