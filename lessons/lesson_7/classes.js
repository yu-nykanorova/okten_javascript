console.group("About classes");
// classes
class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hi, my name is ${this.name}!`;
    }

    work() {
        return `Work in process`;
    }
}

let user = new User("Yu", 37);
console.log(user.greeting());

class Customer extends User {

    constructor(name, age, password) {
        super(name, age);
        this.password = password;
    }
}

let customer = new Customer("Vi", 35, "0000");
console.log(customer);
console.log(customer.work());

// inheritance

function UserNew(name, age) {
    this.name = name;
    this.age = age;
}

function CustomerNew(name, age, password) {
    UserNew.apply(this, arguments);
    this.password = password;
}

let customerNew = new CustomerNew("Mar", 36, "7777");
console.log(customerNew);

console.groupEnd();
