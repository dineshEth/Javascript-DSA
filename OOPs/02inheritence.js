import { User } from "./01class.js";

class Admin extends User {
    constructor(name, email, company){
        super(name,email);  // accessing parent class constructor
        this.company = company;
    }
    updateCompany = function (company){
        this.company = company;
    }
    get = function(){
        console.log(this)
    }
}

const admin = new Admin("Dinesh", "dineshprajapti@meta.com", "Meta")
admin.get();