// Console methods
console.log("Standard log");
console.error("Error message");
console.warn("Warning message");
console.table({ name: "Node.js", version: process.version });

// Buffer (global in Node.js)
const buf = Buffer.from("Hello, Buffer!");
console.log("\nBuffer:", buf.toString());

// Timers
console.log("\nSetting a timer...");
setTimeout(() => {
  console.log("Timer executed after 1 second!");
}, 1000);

// URL and URLSearchParams (Web APIs available globally)
const url = new URL("https://nodejs.org/api/globals.html");
console.log("\nURL pathname:", url.pathname);

// Global object
console.log("\nGlobal object type:", typeof globalThis);
console.log("Same as global?", globalThis === global);

// Solution
const bufSolution = Buffer.from("John Doe");
console.log("\nBuffer:", buf.toString());
console.log("\nBuffer:", buf.toString("hex"));

const urlSolution = new URL("https://nodejs.org/api/globals.html");
console.log("\nURL methods:", url);
