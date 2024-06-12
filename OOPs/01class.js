export class User {
    constructor(name, email){
        this.name = name;
        this.email = email
    }

    getData() {
        return {
            name: this.name,
            email: this.email
        }
    }

    getUserName = function (){
        return this.name+epfg
    }

    updateName =  function (name){
        this.name = name
    }

    updateEmail = function(email){
        this.email = email;
    }
}

// const user = new User ("Dinesh","dinesh@google.com");
// console.table(user.getData())
// user.updateName("Dinesh Prajapati");
// user.updateEmail("dineshprajapati@amazon.com")
// console.table(user.getData())