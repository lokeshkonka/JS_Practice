class user{
    constructor(email,password){
     this.email = email
     this.password =password
    }
    get password(){
        return this._Password
    }
    //get and set are in pairs
    set password(value){
        this._Password = value
    }
}
const hitesh = new user('email@abc',12345678)
console.log(hitesh.password);
//dont overwrite in get set and constructor