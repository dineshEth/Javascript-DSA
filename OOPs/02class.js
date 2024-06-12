class User {
    name;
    //private varible
    #password = 1234;
    constructor(name) {
        this.name = name;
    }

    getPassword = function(){
        return this.#password;
    }

    setPassword = function(password = "sameer"){
        this.#password = password;
    }
}

const user = new User("Ravi");
console.log(user);
console.log(user.password);  // undefined