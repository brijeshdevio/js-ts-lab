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
