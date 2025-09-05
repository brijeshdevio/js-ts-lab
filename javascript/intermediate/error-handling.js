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
