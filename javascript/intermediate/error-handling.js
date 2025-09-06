// error-handling.js
// JavaScript Intermediate - Error Handling

console.log("⚠️ Error Handling in JavaScript\n");

// 1️⃣ Basic try...catch
try {
  console.log("Before error");
  let result = 10 / 0;
  console.log("Division Result:", result);
  throw new Error("Manual error created!");
} catch (error) {
  console.error("Caught Error:", error.message);
} finally {
  console.log("Finally block always runs!\n");
}

// 2️⃣ Handling Reference Errors
try {
  console.log(undefinedVariable); // undefined variable
} catch (error) {
  console.log("2️⃣ ReferenceError caught:", error.name, "-", error.message);
}

// 3️⃣ Handling Type Errors
try {
  const num = 5;
  num.toUpperCase(); // invalid operation
} catch (error) {
  console.log("\n3️⃣ TypeError caught:", error.name, "-", error.message);
}

// 4️⃣ Throwing custom errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log("\n4️⃣ Divide Result:", divide(10, 0));
} catch (error) {
  console.log("Caught Custom Error:", error.message);
}

// 5️⃣ Custom Error Class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(user) {
  if (!user.name) throw new ValidationError("Name is required!");
  if (user.age < 18) throw new ValidationError("User must be 18 or older!");
  console.log("User validation passed ✅");
}

try {
  console.log("\n5️⃣ Custom Error Class Example:");
  validateUser({ name: "John", age: 17 });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation Error:", error.message);
  } else {
    console.log("Unknown Error:", error);
  }
}
