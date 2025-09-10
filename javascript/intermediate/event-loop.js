// event-loop.js
// JavaScript Intermediate - Event Loop Demo

console.log("🚀 Event Loop Demonstration Begins\n");

// 1️⃣ Synchronous Code (runs first, top to bottom)
console.log("1️⃣ Synchronous Log 1");
console.log("2️⃣ Synchronous Log 2");

// 2️⃣ setTimeout (added to Web API → Callback Queue)
setTimeout(() => {
  console.log("⏰ setTimeout callback (0ms)");
}, 0);

// 3️⃣ Promise (Microtask Queue)
Promise.resolve().then(() => console.log("🧩 Promise .then() callback"));

// 4️⃣ setImmediate (Node.js only)
if (typeof setImmediate === "function") {
  setImmediate(() => console.log("⚡ setImmediate callback"));
}

// 5️⃣ process.nextTick (runs before Promises in Node.js)
if (typeof process !== "undefined" && process.nextTick) {
  process.nextTick(() => console.log("🌀 process.nextTick() callback"));
}

console.log("3️⃣ End of main script\n");

// 6️⃣ Demonstrate Task Order
setTimeout(() => console.log("⏰ Timeout #1"), 10);
setTimeout(() => console.log("⏰ Timeout #2"), 0);

Promise.resolve().then(() => console.log("🧩 Promise #1"));
Promise.resolve().then(() => console.log("🧩 Promise #2"));

// 7️⃣ Nested Promises
Promise.resolve().then(() => {
  console.log("🔁 Nested Promise start");
  Promise.resolve().then(() => console.log("🔁 Nested inner Promise"));
});

// 8️⃣ Long-running synchronous task (blocks event loop)
function heavyTask() {
  const start = Date.now();
  while (Date.now() - start < 100) {
    // simulate 100ms blocking
  }
  console.log("💥 Blocking task done (100ms)");
}

setTimeout(() => console.log("⏰ setTimeout after blocking"), 0);

heavyTask(); // blocks the loop
console.log("✅ Script finished (after blocking)\n");

// 9️⃣ Example: order with async/await
(async function exampleAsync() {
  console.log("🔷 Async function start");
  await Promise.resolve();
  console.log("🔷 Async function after await");
})();

// 10️⃣ Demonstrate the final execution order clearly
setTimeout(() => console.log("\n🧭 Final setTimeout (queue end)\n"), 50);

/*
📚 OUTPUT EXPLANATION (Approximate order in Node.js):
🚀 Event Loop Demonstration Begins

1️⃣ Synchronous Log 1
2️⃣ Synchronous Log 2
3️⃣ End of main script

💥 Blocking task done (100ms)
✅ Script finished (after blocking)

🔷 Async function start
🌀 process.nextTick() callback
🧩 Promise .then() callback
🧩 Promise #1
🧩 Promise #2
🔁 Nested Promise start
🔷 Async function after await
🔁 Nested inner Promise
⏰ setTimeout callback (0ms)
⏰ Timeout #2
⏰ setTimeout after blocking
⏰ Timeout #1
⚡ setImmediate callback

🧭 Final setTimeout (queue end)
*/
