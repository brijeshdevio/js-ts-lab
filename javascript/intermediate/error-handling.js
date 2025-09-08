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

// 6️⃣ Using try...catch inside functions
function safeJSONParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("\n6️⃣ Invalid JSON:", error.message);
    return null;
  }
}
console.log("Parsed JSON:", safeJSONParse('{"name": "Alice"}'));
console.log("Parsed JSON:", safeJSONParse("{invalid-json}"));

// 7️⃣ Error handling with Promises
function fakeFetch(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) resolve("✅ Data fetched successfully!");
      else reject("❌ Network Error!");
    }, 1000);
  });
}

fakeFetch(true)
  .then((msg) => console.log("\n7️⃣ Promise resolved:", msg))
  .catch((err) => console.log("Promise rejected:", err));

fakeFetch(false)
  .then((msg) => console.log("Should not run"))
  .catch((err) => console.log("Promise caught:", err));

// 8️⃣ Async/Await error handling
async function loadData() {
  try {
    console.log("\n8️⃣ Async/Await Example:");
    const data = await fakeFetch(true);
    console.log("Data:", data);
    await fakeFetch(false); // triggers error
  } catch (err) {
    console.error("Caught in async function:", err);
  } finally {
    console.log("Async function finished.\n");
  }
}

loadData();

// 9️⃣ try...catch inside loops
const items = [10, "x", 20, null, 30];
console.log("9️⃣ try...catch inside loop:");
items.forEach((item) => {
  try {
    if (typeof item !== "number") throw new Error(`Invalid item: ${item}`);
    console.log("Processed:", item * 2);
  } catch (err) {
    console.log("Error caught:", err.message);
  }
});

// 🔟 Global Error Handling (Node.js)
process.on("uncaughtException", (err) => {
  console.log("\n🔟 Global Catch → Uncaught Exception:", err.message);
});

// Trigger global error after delay (to demonstrate)
setTimeout(() => {
  throw new Error("Unexpected crash simulated!");
}, 2000);
