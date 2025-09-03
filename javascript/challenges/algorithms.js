console.log("🔥 Basic Algorithms in JavaScript 🔥\n");

// 1️⃣ Find Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log("1️⃣ Max in [3, 8, 2, 9, 5]:", findMax([3, 8, 2, 9, 5]));

// 2️⃣ Find Minimum Number
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
console.log("2️⃣ Min in [3, 8, 2, 9, 5]:", findMin([3, 8, 2, 9, 5]));

// 3️⃣ Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log("\n3️⃣ Reverse 'hello':", reverseString("hello"));

// 4️⃣ Check Palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("4️⃣ Palindrome 'madam':", isPalindrome("madam"));
console.log("Palindrome 'hello':", isPalindrome("hello"));

// 5️⃣ Sum of Array Elements
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log("\n5️⃣ Sum of [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5]));

// 6️⃣ Count Occurrences
function countOccurrences(arr, value) {
  let count = 0;
  for (let item of arr) {
    if (item === value) count++;
  }
  return count;
}
console.log(
  "6️⃣ Count of 2 in [1,2,2,3,4,2]:",
  countOccurrences([1, 2, 2, 3, 4, 2], 2)
);

// 7️⃣ Find Even & Odd Numbers
function findEvens(arr) {
  return arr.filter((n) => n % 2 === 0);
}
function findOdds(arr) {
  return arr.filter((n) => n % 2 !== 0);
}
console.log("\n7️⃣ Evens:", findEvens([1, 2, 3, 4, 5, 6]));
console.log("Odds:", findOdds([1, 2, 3, 4, 5, 6]));

// 8️⃣ Factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("\n8️⃣ Factorial of 5:", factorial(5));

// 9️⃣ FizzBuzz
function fizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
console.log("\n9️⃣ FizzBuzz up to 15:");
fizzBuzz(15);

// 🔟 Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log(
  "\n🔟 Linear Search for 40:",
  linearSearch([10, 20, 30, 40, 50], 40)
);
console.log("Linear Search for 99:", linearSearch([10, 20, 30, 40, 50], 99));

// 11️⃣ Bubble Sort
function bubbleSort(arr) {
  let sorted = [...arr];
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
}
console.log("\n11️⃣ Bubble Sort [5,3,8,2,1]:", bubbleSort([5, 3, 8, 2, 1]));

// 12️⃣ Binary Search (sorted array)
function binarySearch(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
const sortedArr = [10, 20, 30, 40, 50];
console.log("\n12️⃣ Binary Search (40):", binarySearch(sortedArr, 40));

// 13️⃣ Find Largest Word in a Sentence
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
console.log(
  "\n13️⃣ Longest word in sentence:",
  longestWord("JavaScript is awesome and powerful")
);

// 14️⃣ Remove Duplicates from Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(
  "\n14️⃣ Remove Duplicates [1,2,2,3,3,4]:",
  removeDuplicates([1, 2, 2, 3, 3, 4])
);

// 15️⃣ Check Prime Number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("\n15️⃣ Prime check 7:", isPrime(7));
console.log("Prime check 10:", isPrime(10));

console.log("\n✅ Basic Algorithms Complete!");
