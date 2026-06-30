/************************************************
 TODAY'S JAVASCRIPT NOTES
 Topics:
 1. Objects
 2. Constructor Function
 3. this
 4. new keyword
 5. Prototype
 6. Object.assign()
 7. Object.create()
 8. Higher Order Functions
    - forEach
    - map
    - filter
    - find
    - some
    - every
    - reduce
************************************************/


/************************************************
1. OBJECTS
Used to store related data together
************************************************/

const user = {
    name: "Manoj",
    age: 35,

    showInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
};

console.log("\n===== OBJECT =====");
user.showInfo();



/************************************************
2. CONSTRUCTOR FUNCTION
Blueprint for creating many objects
************************************************/

function Student(name, age) {
    this.name = name;
    this.age = age;
}

const s1 = new Student("Manoj", 35);
const s2 = new Student("Rahul", 25);

console.log("\n===== CONSTRUCTOR FUNCTION =====");
console.log(s1);
console.log(s2);



/************************************************
3. THIS KEYWORD

'this' refers to current object
************************************************/

const car = {
    brand: "BMW",

    showBrand() {
        console.log(this.brand);
    }
};

console.log("\n===== THIS =====");
car.showBrand();



/************************************************
4. NEW KEYWORD

new does 4 things:

1. Creates empty object {}
2. Makes this point to object
3. Runs constructor code
4. Returns object
************************************************/

function Person(name) {
    this.name = name;
}

const p1 = new Person("Manoj");

console.log("\n===== NEW KEYWORD =====");
console.log(p1);



/************************************************
5. PROTOTYPE

Shared methods for all objects

Without prototype:
Every object gets separate copy

With prototype:
One shared copy
************************************************/

function Employee(name) {
    this.name = name;
}

Employee.prototype.sayHello = function () {
    console.log("Hello " + this.name);
};

const e1 = new Employee("Manoj");
const e2 = new Employee("Rahul");

console.log("\n===== PROTOTYPE =====");
e1.sayHello();
e2.sayHello();



/************************************************
6. Object.assign()

Used to copy or merge objects
************************************************/

const originalUser = {
    name: "Manoj",
    age: 35
};

const copiedUser = Object.assign({}, originalUser);

console.log("\n===== OBJECT ASSIGN =====");
console.log(copiedUser);

const mergedUser = Object.assign(
    {},
    originalUser,
    { city: "Jaipur" }
);

console.log(mergedUser);



/************************************************
7. Object.create()

Creates object and links prototype
************************************************/

const animal = {
    eat() {
        console.log("Animal is eating");
    }
};

const dog = Object.create(animal);

console.log("\n===== OBJECT CREATE =====");
dog.eat();



