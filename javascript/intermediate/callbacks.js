console.log("🔁 JavaScript Callbacks Examples\n");

// 1️⃣ Basic Callback Function
function greet(name, callback) {
  console.log("Hello,", name);
  callback(); // calling the callback function
}

function sayGoodbye() {
  console.log("Goodbye!\n");
}

greet("Alice", sayGoodbye);

// 2️⃣ Callback with Parameters
function processData(data, callback) {
  console.log("Processing data:", data);
  callback(`✅ Result for ${data}`);
}

processData("User#101", (result) => {
  console.log("Callback received:", result, "\n");
});
