console.log("🔥 Recursion Examples 🔥\n");

// 1️⃣ Basic Recursion Example
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1); // recursive call
}
console.log("1️⃣ Countdown from 5:");
countdown(5);

// 2️⃣ Factorial (n!)
function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive step
}
console.log("\n2️⃣ Factorial of 5:", factorial(5));

// 3️⃣ Sum of first N natural numbers
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
console.log("\n3️⃣ Sum of first 5 numbers:", sum(5));

// 4️⃣ Fibonacci Sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("\n4️⃣ Fibonacci of 7:", fibonacci(7));

// 5️⃣ Power function (x^n)
function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}
console.log("\n5️⃣ 2^5 =", power(2, 5));

// 6️⃣ Reverse a string
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}
console.log("\n6️⃣ Reverse 'hello':", reverseString("hello"));

// 7️⃣ Find maximum element in an array
function findMax(arr, n = arr.length) {
  if (n === 1) return arr[0];
  return Math.max(arr[n - 1], findMax(arr, n - 1));
}
console.log("\n7️⃣ Max in [3, 9, 2, 5, 7]:", findMax([3, 9, 2, 5, 7]));

// 8️⃣ Recursive Array Sum
function arraySum(arr, n = arr.length) {
  if (n === 0) return 0;
  return arr[n - 1] + arraySum(arr, n - 1);
}
console.log("\n8️⃣ Sum of [1,2,3,4,5]:", arraySum([1, 2, 3, 4, 5]));

// 9️⃣ Recursive Countdown with delay (async recursion)
function asyncCountdown(n) {
  if (n === 0) {
    console.log("🚀 Lift Off!");
    return;
  }
  console.log("Countdown:", n);
  setTimeout(() => asyncCountdown(n - 1), 500);
}
console.log("\n9️⃣ Async Countdown from 3:");
asyncCountdown(3);

// 🔟 Recursive Object Traversal
const student = {
  name: "Riya",
  details: {
    age: 21,
    subjects: {
      math: 90,
      english: 85,
    },
  },
};

function printNested(obj) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object") {
      printNested(value);
    } else {
      console.log(`${key}: ${value}`);
    }
  }
}
console.log("\n🔟 Print nested object values:");
printNested(student);

// 11️⃣ Recursive Binary Search
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
  return binarySearch(arr, target, mid + 1, high);
}

const sortedArr = [10, 20, 30, 40, 50];
console.log("\n11️⃣ Binary Search index of 30:", binarySearch(sortedArr, 30));
console.log("Binary Search index of 100:", binarySearch(sortedArr, 100));

// ✅ Summary
console.log("\n✅ Recursion practice complete!");
