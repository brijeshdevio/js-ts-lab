console.log("📅 JavaScript Date Examples\n");

// 1️⃣ Create a Date object
const now = new Date();
console.log("1️⃣ Current Date & Time:", now);

// 2️⃣ Create Date using specific values
const birthday = new Date(1998, 4, 15); // year, month (0-indexed), day
console.log("2️⃣ Specific Date (birthday):", birthday.toDateString());

// 3️⃣ Create Date from string
const fromString = new Date("2024-12-25T10:30:00");
console.log("3️⃣ From string:", fromString);

// 4️⃣ Get individual components
console.log("\n4️⃣ Date Components:");
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day (0=Sun):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// 5️⃣ Set date components
const future = new Date();
future.setFullYear(2030);
future.setMonth(11); // December
future.setDate(25);
console.log("\n5️⃣ Set future date:", future.toString());

// 6️⃣ Formatting dates
console.log("\n6️⃣ Formatting:");
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());
console.log("toISOString():", now.toISOString());

// 7️⃣ Timestamp (milliseconds since Jan 1, 1970)
console.log("\n7️⃣ Timestamps:");
console.log("Now timestamp:", now.getTime());
console.log("Using Date.now():", Date.now());

// 8️⃣ Compare Dates
const d1 = new Date("2025-11-07");
const d2 = new Date("2025-12-01");
console.log("\n8️⃣ Compare Dates:");
console.log("d1 < d2 ?", d1 < d2);
console.log("d1 === d2 ?", d1.getTime() === d2.getTime());

// 9️⃣ Calculate difference between two dates (in days)
const diffMs = d2 - d1;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log("\n9️⃣ Days between:", diffDays, "days");

// 🔟 Add days to a date
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
console.log("\n🔟 Add 10 days to d1:", addDays(d1, 10).toDateString());

// 11️⃣ Subtract days from a date
function subtractDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}
console.log("Subtract 7 days from d2:", subtractDays(d2, 7).toDateString());

// 12️⃣ Find age from birth date
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
console.log("\n12️⃣ Age from birth date:", calculateAge(birthday));

// 13️⃣ Display formatted current time (HH:MM:SS)
function getCurrentTime() {
  const d = new Date();
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}
console.log("\n13️⃣ Current Time:", getCurrentTime());

// 14️⃣ Real-world example — Countdown (Days left in the year)
function daysLeftInYear() {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31);
  const diff = endOfYear - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
console.log("14️⃣ Days left in current year:", daysLeftInYear());

// 15️⃣ Real-world — Format readable date
function formatDate(date) {
  return date.toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
console.log("\n15️⃣ Formatted Date (Indian Locale):", formatDate(now));

// ✅ Summary
console.log("\n✅ Date handling practice complete!");
