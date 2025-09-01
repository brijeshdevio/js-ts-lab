// 1️⃣ Function Declaration
function greet() {
  console.log("Hello, welcome to JavaScript!");
}
greet();

// 2️⃣ Function with Parameters
function add(a, b) {
  return a + b;
}
console.log("Sum:", add(5, 3));

// 3️⃣ Function Expression (assigning function to a variable)
const multiply = function (x, y) {
  return x * y;
};
console.log("Multiply:", multiply(4, 6));

// 4️⃣ Arrow Function (modern syntax)
const subtract = (a, b) => a - b;
console.log("Subtract:", subtract(10, 4));

// 5️⃣ Arrow Function with multiple lines
const divide = (a, b) => {
  if (b === 0) return "Cannot divide by zero!";
  return a / b;
};
console.log("Divide:", divide(20, 5));
console.log("Divide:", divide(10, 0));

// 6️⃣ Default Parameters
function greetUser(name = "Guest") {
  console.log("Hello", name);
}
greetUser("Alice");
greetUser();

// 7️⃣ Returning values
function square(num) {
  return num * num;
}
const result = square(6);
console.log("Square:", result);

// 8️⃣ Anonymous Function (used in callbacks)
setTimeout(function () {
  console.log("This runs after 1 second (anonymous function)");
}, 1000);

// 9️⃣ Arrow Function as Callback
setTimeout(() => {
  console.log("This runs after 2 seconds (arrow function)");
}, 2000);

// 🔟 Higher-Order Function (function that takes another function)
function applyOperation(a, b, operation) {
  return operation(a, b);
}
const sum = (x, y) => x + y;
const diff = (x, y) => x - y;

console.log("Higher-Order Sum:", applyOperation(5, 3, sum));
console.log("Higher-Order Diff:", applyOperation(5, 3, diff));

// 11️⃣ Function Scope
function scopeTest() {
  let localVar = "I'm local to scopeTest";
  console.log(localVar);
}
scopeTest();
// console.log(localVar); // ❌ Error: not defined

// 12️⃣ Nested Functions
function outer() {
  console.log("Outer function");
  function inner() {
    console.log("Inner function");
  }
  inner();
}
outer();

// 13️⃣ Recursion (function calling itself)
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));
