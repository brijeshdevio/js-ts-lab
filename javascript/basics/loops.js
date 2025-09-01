// 1️⃣ for loop
console.log("1️⃣ for loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// 2️⃣ while loop
console.log("\n2️⃣ while loop:");
let num = 1;
while (num <= 5) {
  console.log("Number:", num);
  num++;
}

// 3️⃣ do...while loop
console.log("\n3️⃣ do...while loop:");
let count = 1;
do {
  console.log("Count is:", count);
  count++;
} while (count <= 3);

// 4️⃣ for...of loop (arrays, strings)
console.log("\n4️⃣ for...of loop:");
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...of with string
const word = "JS";
for (const letter of word) {
  console.log("Letter:", letter);
}

// 5️⃣ for...in loop (objects)
console.log("\n5️⃣ for...in loop:");
const user = { name: "Alice", age: 25, country: "India" };
for (const key in user) {
  console.log(key + ":", user[key]);
}

// 6️⃣ Nested loops
console.log("\n6️⃣ Nested loops:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

// 7️⃣ Loop control statements (break, continue)
console.log("\n7️⃣ break and continue:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break; // stop loop at 5
  console.log("Value:", i);
}

// 8️⃣ Using loops with arrays
console.log("\n8️⃣ Looping over array with index:");
const nums = [10, 20, 30, 40];
for (let i = 0; i < nums.length; i++) {
  console.log(`Index ${i}:`, nums[i]);
}

// 9️⃣ Using array methods (forEach as alternative)
console.log("\n9️⃣ forEach method:");
nums.forEach((value, index) => {
  console.log(`Index ${index} => ${value}`);
});
