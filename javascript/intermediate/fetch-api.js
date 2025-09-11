console.log("🌐 Fetch API Examples\n");

// 1️⃣ Basic GET Request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  })
  .then((data) => console.log("1️⃣ GET Request Data:", data))
  .catch((error) => console.error("GET Error:", error.message));

// 2️⃣ POST Request (sending data)
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is a test post",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("\n2️⃣ POST Response:", data))
  .catch((error) => console.error("POST Error:", error.message));

// 3️⃣ PUT Request (updating data)
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated Content",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("\n3️⃣ PUT Response:", data))
  .catch((error) => console.error("PUT Error:", error.message));

// 4️⃣ DELETE Request
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) console.log("\n4️⃣ DELETE successful!");
    else throw new Error("Delete failed!");
  })
  .catch((error) => console.error("DELETE Error:", error.message));
