// 1️⃣ Object Creation (literal)
const person = {
  name: "Alice",
  age: 25,
  country: "India",
  isStudent: false,
};
console.log("Person Object:", person);

// 2️⃣ Accessing properties
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// 3️⃣ Adding and modifying properties
person.email = "alice@example.com";
person.age = 26;
console.log("After update:", person);

// 4️⃣ Deleting a property
delete person.isStudent;
console.log("After delete:", person);

// 5️⃣ Nested Objects
const user = {
  id: 101,
  info: {
    firstName: "Bob",
    lastName: "Smith",
    address: {
      city: "Mumbai",
      zip: 400001,
    },
  },
};
console.log("City:", user.info.address.city);

// 6️⃣ Methods inside objects
const calculator = {
  a: 10,
  b: 5,
  add() {
    return this.a + this.b;
  },
  subtract() {
    return this.a - this.b;
  },
};
console.log("Add:", calculator.add());
console.log("Subtract:", calculator.subtract());

// 7️⃣ Object Destructuring
const product = {
  name: "Laptop",
  price: 60000,
  brand: "Dell",
};
const { name, price } = product;
console.log("Destructured:", name, price);

// 8️⃣ Object inside array
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Emma" },
  { id: 3, name: "Ravi" },
];
for (const user of users) {
  console.log(`User ${user.id}: ${user.name}`);
}

// 9️⃣ Copying objects
const obj1 = { x: 10, y: 20 };
const obj2 = obj1; // same reference
obj2.x = 99;
console.log("obj1 after modifying obj2:", obj1);

// Proper copy using spread operator
const obj3 = { ...obj1 };
obj3.y = 500;
console.log("obj1:", obj1);
console.log("obj3:", obj3);

// 🔟 Merging objects
const a = { name: "Alice" };
const b = { age: 25 };
const merged = { ...a, ...b };
console.log("Merged Object:", merged);

// 11️⃣ Checking property existence
console.log("Has name?", "name" in merged);
console.log("Has email?", merged.hasOwnProperty("email"));

// 12️⃣ Iterating through object keys & values
const car = { brand: "Tesla", model: "Model S", year: 2024 };
console.log("\nIterating with for...in:");
for (const key in car) {
  console.log(key, "=>", car[key]);
}

console.log("\nUsing Object.keys:");
Object.keys(car).forEach((key) => console.log(key));

console.log("\nUsing Object.values:");
Object.values(car).forEach((value) => console.log(value));

console.log("\nUsing Object.entries:");
Object.entries(car).forEach(([key, value]) => console.log(key, ":", value));

// 13️⃣ Freezing and Sealing
const settings = { theme: "dark", version: 1 };
Object.freeze(settings);
settings.theme = "light"; // ❌ No effect
console.log("Frozen object:", settings);

const config = { mode: "auto" };
Object.seal(config);
config.mode = "manual"; // ✅ allowed
delete config.mode; // ❌ not allowed
console.log("Sealed object:", config);

// 14️⃣ this keyword inside object method
const person2 = {
  firstName: "Karan",
  lastName: "Shah",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log("Full Name:", person2.fullName());

// 15️⃣ Object destructuring with nested objects
const student = {
  id: 1,
  profile: {
    name: "Riya",
    marks: { math: 90, english: 85 },
  },
};
const {
  profile: {
    name: studentName,
    marks: { math },
  },
} = student;
console.log("Nested destructure:", studentName, math);
