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

// 3️⃣ Using Callbacks to Simulate Async Tasks
function fetchDataFromServer(callback) {
  console.log("Fetching data from server...");
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 1500);
}

fetchDataFromServer((data) => {
  console.log("Data received:", data, "\n");
});

// 4️⃣ Callback Hell Example (nested callbacks)
console.log("⛓️ Callback Hell Example:");

setTimeout(() => {
  console.log("Step 1: Fetch user");
  setTimeout(() => {
    console.log("Step 2: Fetch posts of user");
    setTimeout(() => {
      console.log("Step 3: Fetch comments of post\n");
    }, 1000);
  }, 1000);
}, 1000);

// 5️⃣ Handling Errors in Callbacks
function getUser(id, callback) {
  console.log("Fetching user:", id);
  setTimeout(() => {
    if (id <= 0) {
      callback("❌ Invalid user ID!", null);
    } else {
      callback(null, { id, name: "Jane Doe" });
    }
  }, 1000);
}

getUser(1, (err, user) => {
  if (err) return console.error("Error:", err);
  console.log("User fetched:", user);
});

getUser(-5, (err, user) => {
  if (err) return console.error("Error:", err);
  console.log("User fetched:", user);
});

// 6️⃣ Reusable Higher-Order Callback
function repeatTask(task, times, callback) {
  for (let i = 0; i < times; i++) {
    task(i);
  }
  callback();
}

repeatTask(
  (i) => console.log(`Task iteration: ${i + 1}`),
  3,
  () => console.log("✅ All tasks done!\n")
);

// 8️⃣ Simulating Asynchronous Chain (callback version)
function stepOne(callback) {
  setTimeout(() => {
    console.log("\nStep 1 complete");
    callback();
  }, 500);
}

function stepTwo(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 500);
}

function stepThree(callback) {
  setTimeout(() => {
    console.log("Step 3 complete ✅");
    callback();
  }, 500);
}

stepOne(() => {
  stepTwo(() => {
    stepThree(() => console.log("All steps finished!\n"));
  });
});

// 9️⃣ Converting Callbacks to Promises
function getData(callback) {
  setTimeout(() => {
    callback(null, "📦 Data loaded via callback");
  }, 1000);
}

getData((err, data) => {
  if (err) console.error("Error:", err);
  else console.log(data);
});
