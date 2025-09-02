// 1️⃣ Basic Promise Example
const promise1 = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) resolve("✅ Promise resolved successfully!");
    else reject("❌ Promise rejected!");
  }, 1000);
});

promise1
  .then((msg) => console.log("Then:", msg))
  .catch((err) => console.log("Catch:", err))
  .finally(() => console.log("Finally: Promise completed\n"));

// 2️⃣ Promise Chaining
function addAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 500);
  });
}

addAsync(10, 5)
  .then((sum) => {
    console.log("Sum:", sum);
    return addAsync(sum, 20);
  })
  .then((newSum) => {
    console.log("Chained Result:", newSum);
  });

// 3️⃣ Promise with Rejection
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) resolve("Access granted!");
    else reject("Access denied! Underage.");
  });
}

checkAge(16)
  .then((msg) => console.log("✅", msg))
  .catch((err) => console.log("⚠️", err));

// 4️⃣ Promise.all (runs multiple promises together)
const p1 = Promise.resolve("One");
const p2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Three"), 500));

Promise.all([p1, p2, p3]).then((values) =>
  console.log("\nPromise.all results:", values)
);

// 5️⃣ Promise.race (returns first resolved/rejected)
Promise.race([p2, p3]).then((first) =>
  console.log("Promise.race result:", first)
);

// 6️⃣ Promise.allSettled (waits for all, even if some fail)
const p4 = Promise.reject("Failed Task");
Promise.allSettled([p1, p4, p3]).then((results) => {
  console.log("\nPromise.allSettled results:");
  console.log(results);
});

// 7️⃣ Async / Await (modern syntax)
async function fetchData() {
  console.log("\n7️⃣ Using async/await:");
  try {
    const data1 = await addAsync(5, 10);
    console.log("Data1:", data1);

    const data2 = await addAsync(data1, 15);
    console.log("Data2:", data2);

    const finalData = await addAsync(data2, 20);
    console.log("Final Result:", finalData);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("✅ Async function finished.\n");
  }
}

fetchData();

// 8️⃣ Async function with error handling
async function riskyTask() {
  console.log("8️⃣ Async function error example:");
  const riskyPromise = new Promise((_, reject) =>
    setTimeout(() => reject("Something went wrong!"), 1000)
  );

  try {
    const result = await riskyPromise;
    console.log("Result:", result);
  } catch (error) {
    console.log("Caught Error:", error);
  }
}

riskyTask();

// 9️⃣ Realistic Example - Simulate API Calls
function fakeApi(endpoint, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Fetched data from ${endpoint}`), delay);
  });
}

async function loadData() {
  console.log("\n9️⃣ Loading multiple fake APIs...");
  const user = await fakeApi("/user", 1000);
  const posts = await fakeApi("/posts", 1500);
  const comments = await fakeApi("/comments", 800);

  console.log(user);
  console.log(posts);
  console.log(comments);
  console.log("✅ All data loaded!");
}

loadData();
