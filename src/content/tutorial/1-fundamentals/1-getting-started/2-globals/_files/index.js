// Console methods
console.log('Standard log');
console.error('Error message');
console.warn('Warning message');
console.table({ name: 'Node.js', version: process.version });

// Buffer (global in Node.js)
const buf = Buffer.from('Hello, Buffer!');
const bufToHex = Buffer.from('Hello, Buffer!', 'hex');
console.log('\nBuffer:', buf.toString());
console.log('\nBuffer to Hex:', bufToHex.toString('hex'));
console.log('\nBuffer:', buf.toString('hex'));

// Timers
console.log('\nSetting a timer...');
setTimeout(() => {
  console.log('Timer executed after 1 second!');
}, 1000);

// URL and URLSearchParams (Web APIs available globally)
const url = new URL('https://nodejs.org/api/globals.html');
console.log('\nURL pathname:', url);

const params = new URLSearchParams({ q: 'nodejs', page: '1' });
console.log('Query string:', params.toString());

// TextEncoder/TextDecoder (Web APIs)
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const encoded = encoder.encode('Hello, Node.js!');
console.log('\nEncoded:', encoded);
console.log('Decoded:', decoder.decode(encoded));

// Base64 encoding/decoding
const base64 = btoa('Hello, Base64!');
console.log('\nBase64 encoded:', base64);
console.log('Base64 decoded:', atob(base64));

// structuredClone (deep cloning)
const original = { name: 'Node.js', version: process.version };
const cloned = structuredClone(original);
console.log('\nOriginal:', original);
console.log('Cloned:', cloned);
console.log('Same object?', original === cloned);

// Global object
console.log('\nGlobal object type:', typeof globalThis);
console.log('Same as global?', globalThis === global);

// Navigator API
console.log('\nNavigator info:');
// console.log('Hardware concurrency:', navigator.hardwareConcurrency);
// console.log('Platform:', navigator.platform);
// console.log('Language:', navigator.language);
