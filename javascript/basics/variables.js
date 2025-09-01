// 1️⃣ Using var (old way - function scoped)
var name = "Alice";
console.log("var name:", name);

// var can be redeclared and updated
var name = "Bob";
console.log("redeclared var name:", name);

// 2️⃣ Using let (modern way - block scoped)
let age = 25;
console.log("let age:", age);

// let can be updated but not redeclared in the same scope
age = 26;
console.log("updated age:", age);

// 3️⃣ Using const (constant - block scoped)
const country = "India";
console.log("const country:", country);

// const cannot be updated or redeclared
// ❌ country = "USA"; // Error: Assignment to constant variable.

// 4️⃣ Multiple variable declaration
let x = 10,
  y = 20,
  z = x + y;
console.log("x:", x, "y:", y, "z:", z);

// 5️⃣ Variable naming rules
let _private = "allowed";
let $dollar = "allowed";
let camelCase = "best practice";
console.log(_private, $dollar, camelCase);

// 6️⃣ Dynamic typing
let data = "Hello";
console.log("type:", typeof data);
data = 123;
console.log("type after change:", typeof data);

// 7️⃣ Undefined and null
let emptyVar;
console.log("emptyVar:", emptyVar); // undefined
emptyVar = null;
console.log("emptyVar after null:", emptyVar);

// ⚠️ let and const are not hoisted the same way (Temporal Dead Zone)
// Uncommenting below line causes ReferenceError
// console.log(hoistedLet);
// let hoistedLet = "Not hoisted like var";
