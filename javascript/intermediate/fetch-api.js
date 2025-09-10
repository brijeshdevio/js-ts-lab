console.log("🌐 Fetch API Examples\n");

// 1️⃣ Basic GET Request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  })
  .then((data) => console.log("1️⃣ GET Request Data:", data))
  .catch((error) => console.error("GET Error:", error.message));
