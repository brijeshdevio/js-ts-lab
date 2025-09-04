console.log("🔥 Array Methods Practice 🔥\n");

// Sample dataset
const numbers = [10, 25, 40, 55, 60, 75, 90];
const users = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 17 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "David", age: 15 },
];

// 1️⃣ map() — transform array elements
const doubled = numbers.map((n) => n * 2);
console.log("map → Doubled numbers:", doubled);

// 2️⃣ filter() — filter based on condition
const adults = users.filter((user) => user.age >= 18);
console.log("\nfilter → Adult users:", adults);

// 3️⃣ reduce() — accumulate values
const total = numbers.reduce((acc, n) => acc + n, 0);
console.log("\nreduce → Sum of numbers:", total);

// 4️⃣ find() — find first match
const found = users.find((u) => u.name === "Charlie");
console.log("\nfind → Found user:", found);

// 5️⃣ some() — check if any element matches
const hasMinor = users.some((u) => u.age < 18);
console.log("\nsome → Has any minor?:", hasMinor);

// 6️⃣ every() — check if all elements match
const allAdults = users.every((u) => u.age >= 18);
console.log("every → All users adults?:", allAdults);

// 7️⃣ sort() — sort numbers (ascending)
const sortedAsc = [...numbers].sort((a, b) => a - b);
console.log("\nsort → Sorted Ascending:", sortedAsc);

// sort() — sort users by name
const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("sort → Users sorted by name:", sortedUsers);

// 8️⃣ reverse()
const reversed = [...numbers].reverse();
console.log("\nreverse → Reversed numbers:", reversed);

// 9️⃣ concat() — merge arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = arr1.concat(arr2);
console.log("\nconcat → Merged array:", merged);

// 🔟 flat() — flatten nested arrays
const nested = [1, [2, [3, 4]], 5];
const flat = nested.flat(2);
console.log("\nflat → Flattened array:", flat);

// 11️⃣ includes()
console.log("\nincludes → Has 40?:", numbers.includes(40));

// 12️⃣ indexOf() / lastIndexOf()
const sample = [1, 2, 3, 2, 4];
console.log("indexOf(2):", sample.indexOf(2));
console.log("lastIndexOf(2):", sample.lastIndexOf(2));

// 13️⃣ slice() — get part of an array
console.log("\nslice(2,5):", numbers.slice(2, 5));

// 14️⃣ splice() — add/remove elements
const arr = ["a", "b", "c", "d"];
arr.splice(2, 1, "X"); // remove 1 at index 2, insert "X"
console.log("splice → Modified array:", arr);

// 15️⃣ join() — combine into string
const joined = ["apple", "banana", "cherry"].join(", ");
console.log("\njoin → Fruits:", joined);

// 16️⃣ forEach() — iterate items
console.log("\nforEach → Print numbers:");
numbers.forEach((n, i) => console.log(`Index ${i}:`, n));

// 17️⃣ map + filter combo
const evenSquares = numbers.filter((n) => n % 2 === 0).map((n) => n ** 2);
console.log("\nmap+filter → Even squares:", evenSquares);

// 18️⃣ reduce — count occurrences
const votes = ["yes", "no", "yes", "yes", "no"];
const countVotes = votes.reduce((acc, v) => {
  acc[v] = (acc[v] || 0) + 1;
  return acc;
}, {});
console.log("\nreduce → Vote counts:", countVotes);

// 19️⃣ findIndex()
const index = users.findIndex((u) => u.name === "Bob");
console.log("\nfindIndex → Index of Bob:", index);

// 20️⃣ from() — convert string to array
const chars = Array.from("HELLO");
console.log("\nArray.from →", chars);

// ✅ Challenge Summary
console.log("\n✅ Completed Array Methods Practice!");
