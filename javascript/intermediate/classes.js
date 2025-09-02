// 1️⃣ Basic class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const p1 = new Person("Alice", 25);
p1.greet();

// 2️⃣ Adding methods dynamically (prototype)
Person.prototype.sayBye = function () {
  console.log(`${this.name} says goodbye!`);
};
p1.sayBye();

// 3️⃣ Class inheritance (extends + super)
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // call parent constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for grade ${this.grade}.`);
  }
}

const s1 = new Student("Bob", 20, "A");
s1.greet();
s1.study();

// 4️⃣ Method overriding
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, and I teach ${this.subject}.`);
  }
}

const t1 = new Teacher("Mr. Sharma", 40, "Math");
t1.greet(); // overridden method

// 5️⃣ Static methods (can be called without object)
class MathHelper {
  static add(a, b) {
    return a + b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

console.log("Static Add:", MathHelper.add(5, 3));
console.log("Static Multiply:", MathHelper.multiply(4, 2));

// 6️⃣ Getters and Setters
class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;
  }

  // Getter
  get balance() {
    return this._balance;
  }

  // Setter
  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative!");
    } else {
      this._balance = amount;
    }
  }

  showInfo() {
    console.log(`${this.owner} has ₹${this._balance}`);
  }
}

const acc = new Account("Ravi", 1000);
acc.showInfo();
acc.balance = 500; // setter
console.log("Updated Balance:", acc.balance);
acc.balance = -100; // invalid

// 7️⃣ Private fields (# syntax)
class BankAccount {
  #pin; // private property
  constructor(owner, balance, pin) {
    this.owner = owner;
    this.balance = balance;
    this.#pin = pin;
  }

  checkPin(pin) {
    if (pin === this.#pin) {
      console.log(`Welcome, ${this.owner}. Your balance is ₹${this.balance}.`);
    } else {
      console.log("Invalid PIN!");
    }
  }
}

const bankAcc = new BankAccount("Sita", 5000, 1234);
bankAcc.checkPin(1234); // correct pin
bankAcc.checkPin(1111); // wrong pin

// 8️⃣ Class expressions
const Vehicle = class {
  constructor(type, speed) {
    this.type = type;
    this.speed = speed;
  }

  move() {
    console.log(`${this.type} is moving at ${this.speed} km/h.`);
  }
};

const car = new Vehicle("Car", 120);
car.move();

// 9️⃣ instanceof operator
console.log(p1 instanceof Person); // true
console.log(s1 instanceof Student); // true
console.log(t1 instanceof Student); // false

// 🔟 Using super in methods (not just constructor)
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // call parent method
    console.log("Dog barks");
  }
}

const d1 = new Dog();
d1.speak();
