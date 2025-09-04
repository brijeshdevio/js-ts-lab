console.log("🔥 String Problems Practice 🔥\n");

// 1️⃣ Reverse a string
const reverseString = (str) => str.split("").reverse().join("");
console.log("1️⃣ Reverse String:", reverseString("JavaScript"));

// 2️⃣ Check if string is a palindrome
const isPalindrome = (str) => {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
};
console.log("2️⃣ Is Palindrome (madam):", isPalindrome("madam"));
console.log("   Is Palindrome (hello):", isPalindrome("hello"));

// 3️⃣ Count vowels in a string
const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;
console.log("3️⃣ Count Vowels:", countVowels("Hello World"));

// 4️⃣ Find the longest word in a sentence
const longestWord = (sentence) => {
  const words = sentence.split(" ");
  return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
  );
};
console.log(
  "4️⃣ Longest Word:",
  longestWord("I love programming in JavaScript")
);

// 5️⃣ Capitalize first letter of each word
const capitalizeWords = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log("5️⃣ Capitalized:", capitalizeWords("welcome to javascript world"));

// 6️⃣ Count characters (excluding spaces)
const countChars = (str) => str.replace(/\s/g, "").length;
console.log("6️⃣ Character Count:", countChars("Hello JS"));

// 7️⃣ Find occurrences of each character
const charCount = (str) =>
  str.split("").reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});
console.log("7️⃣ Character Occurrences:", charCount("banana"));

// 8️⃣ Check if two strings are anagrams
const areAnagrams = (a, b) => {
  const clean = (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  return clean(a) === clean(b);
};
console.log(
  "8️⃣ Are Anagrams (listen, silent):",
  areAnagrams("listen", "silent")
);
console.log("   Are Anagrams (apple, paple):", areAnagrams("apple", "paple"));

// 9️⃣ Replace all spaces with '-'
const slugify = (str) => str.trim().toLowerCase().replace(/\s+/g, "-");
console.log("9️⃣ Slugified:", slugify("Hello World From JS"));

// 🔟 Count number of words in a sentence
const countWords = (sentence) => sentence.trim().split(/\s+/).length;
console.log("🔟 Word Count:", countWords("I am learning JavaScript"));

// 11️⃣ Extract only numbers from string
const extractNumbers = (str) => str.match(/\d+/g)?.join("") || "";
console.log("11️⃣ Extracted Numbers:", extractNumbers("JS2025Version5"));

// 12️⃣ Remove duplicate characters
const removeDuplicates = (str) => Array.from(new Set(str.split(""))).join("");
console.log("12️⃣ Remove Duplicates:", removeDuplicates("programming"));

// 13️⃣ Check if string contains substring (case-insensitive)
const containsWord = (text, word) =>
  text.toLowerCase().includes(word.toLowerCase());
console.log(
  "13️⃣ Contains Word 'java':",
  containsWord("I love JavaScript", "java")
);

// 14️⃣ Convert to title case
const toTitleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log("14️⃣ Title Case:", toTitleCase("the quick brown fox jumps"));

// 15️⃣ Remove special characters
const removeSpecialChars = (str) => str.replace(/[^a-zA-Z0-9 ]/g, "");
console.log("15️⃣ Cleaned String:", removeSpecialChars("Hello@# JS$$!"));

// 16️⃣ Count frequency of each word
const wordFrequency = (text) => {
  const words = text.toLowerCase().split(/\W+/);
  return words.reduce((acc, w) => {
    if (w) acc[w] = (acc[w] || 0) + 1;
    return acc;
  }, {});
};
console.log(
  "16️⃣ Word Frequency:",
  wordFrequency("This is JS and JS is awesome")
);

// 17️⃣ Find first non-repeating character
const firstUniqueChar = (str) => {
  for (let ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
  }
  return null;
};
console.log("17️⃣ First Non-Repeating Char:", firstUniqueChar("aabbcde"));

// 18️⃣ Truncate string to n characters
const truncate = (str, n) => (str.length > n ? str.slice(0, n) + "..." : str);
console.log("18️⃣ Truncated:", truncate("JavaScript is awesome", 10));

// 19️⃣ Check if string starts and ends with specific substring
const startsAndEnds = (str, start, end) =>
  str.startsWith(start) && str.endsWith(end);
console.log(
  "19️⃣ Starts & Ends:",
  startsAndEnds("hello world", "hello", "world")
);

// 20️⃣ Reverse words in a sentence
const reverseWords = (sentence) => sentence.split(" ").reverse().join(" ");
console.log("20️⃣ Reversed Words:", reverseWords("I love JavaScript"));

// ✅ Completed
console.log("\n✅ Completed String Problems Practice!");
