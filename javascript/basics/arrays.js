// 1️⃣ Creating Arrays
const fruits = ["apple", "banana", "cherry"];
const numbers = [10, 20, 30, 40, 50];
console.log("Fruits:", fruits);
console.log("Numbers:", numbers);

// 2️⃣ Accessing Elements
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// 3️⃣ Modifying Elements
fruits[1] = "blueberry";
console.log("Modified Fruits:", fruits);

// 4️⃣ Adding Elements
fruits.push("orange"); // add to end
fruits.unshift("mango"); // add to start
console.log("After push & unshift:", fruits);

// 5️⃣ Removing Elements
fruits.pop(); // remove from end
fruits.shift(); // remove from start
console.log("After pop & shift:", fruits);

// 6️⃣ Array Length
console.log("Number of fruits:", fruits.length);

// 7️⃣ Looping through Arrays
console.log("\nLooping with for:");
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

console.log("\nLooping with for...of:");
for (const fruit of fruits) {
  console.log(fruit);
}

// 8️⃣ forEach Method
console.log("\nUsing forEach:");
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// 9️⃣ map() - returns a new array
const doubled = numbers.map((num) => num * 2);
console.log("\nmap() -> Doubled Numbers:", doubled);

// 🔟 filter() - filters based on condition
const even = numbers.filter((num) => num % 20 === 0);
console.log("filter() -> Even Numbers:", even);

// 11️⃣ reduce() - accumulates values
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("reduce() -> Sum of Numbers:", total);

// 12️⃣ find() and findIndex()
const found = numbers.find((n) => n > 25);
const foundIndex = numbers.findIndex((n) => n > 25);
console.log("find() ->", found);
console.log("findIndex() ->", foundIndex);

// 13️⃣ includes() and indexOf()
console.log("Includes 30?", numbers.includes(30));
console.log("Index of 30:", numbers.indexOf(30));

// 14️⃣ slice() - copy part of array
const sliced = fruits.slice(0, 2);
console.log("slice(0,2):", sliced);

// 15️⃣ splice() - add/remove elements
const spliced = fruits.splice(1, 1, "grape"); // remove 1 at index 1 and add grape
console.log("After splice:", fruits);
console.log("Removed item(s):", spliced);

// 16️⃣ concat() - merge arrays
const moreFruits = ["pear", "kiwi"];
const allFruits = fruits.concat(moreFruits);
console.log("concat() ->", allFruits);

// 17️⃣ spread operator (...)
const spreadFruits = [...fruits, "papaya", ...moreFruits];
console.log("spread ->", spreadFruits);

// 18️⃣ sort() and reverse()
const names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log("\nsort() ->", names);
names.reverse();
console.log("reverse() ->", names);

// 19️⃣ join() - convert array to string
console.log("join() ->", fruits.join(", "));

// 20️⃣ flat() - flatten nested arrays
const nested = [1, [2, [3, 4]], 5];
console.log("flat(2) ->", nested.flat(2));

// 21️⃣ Array.isArray()
console.log("Is fruits an array?", Array.isArray(fruits));
