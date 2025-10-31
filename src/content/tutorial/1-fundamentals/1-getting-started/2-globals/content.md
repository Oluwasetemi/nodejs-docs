---
type: lesson
title: Global Objects
focus: /index.js
---

# Global Objects

Node.js provides several objects that are available in all modules without requiring them. These are called **globals** or **globalThis**.

## Core Node.js Globals

### `global` (or `globalThis`)

The global namespace object. Properties attached to it are available everywhere. In Node.js, `global` and `globalThis` refer to the same object.

### `__dirname` and `__filename`

- `__dirname`: Directory name of the current module
- `__filename`: File name of the current module

**Note**: These are NOT available in ES modules. Use `import.meta.url` instead.

```js
// Node 20.11+
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const dirname = dirname(fileURLToPath(import.meta.url));
const filname = fileURLToPath(import.meta.url);

// 21+
// No imports needed!
console.log(import.meta.filename); // /Users/you/project/file.js
console.log(import.meta.dirname); // /Users/you/project
```

### `console`

The familiar console object for debugging and logging with methods like `log()`, `error()`, `warn()`, `table()`, etc. For more about the console api check [mdn](https://mdn.io/console)

```js

```

### `process`

Information about and control over the current Node.js process (covered in next lesson).

### `Buffer`

Node.js's implementation for handling binary data. Available globally without requiring `node:buffer`.

### `module`, `exports`, `require()`

CommonJS module system globals. Note: `require()` is not truly global but module-scoped.

## Timers

Functions for scheduling code execution:

- `setTimeout(callback, delay[, ...args])` - Execute callback after delay
- `setInterval(callback, delay[, ...args])` - Execute callback repeatedly
- `setImmediate(callback[, ...args])` - Execute callback on next event loop iteration
- `clearTimeout(timeoutObject)`, `clearInterval(intervalObject)`, `clearImmediate(immediateObject)` - Cancel timers

## Web APIs (Browser-Compatible)

Node.js provides many browser-compatible Web APIs as globals:

### `fetch` and Related Classes

- `fetch()` - Global fetch function for HTTP requests
- `Request` - Represents an HTTP request
- `Response` - Represents an HTTP response
- `Headers` - HTTP headers container
- `FormData` - Form data handling
- `File` - File object representation
- `Blob` - Binary large object

### URL APIs

- `URL` - URL constructor and parser
- `URLSearchParams` - Query string manipulation
- `URLPattern` - URL pattern matching (experimental in v24.0.0+)

### WebSocket

- `WebSocket` - Browser-compatible WebSocket implementation

### Web Streams API

- `ReadableStream`, `WritableStream`, `TransformStream`
- `CompressionStream`, `DecompressionStream`
- `TextEncoderStream`, `TextDecoderStream`
- Related reader/writer classes

### Storage APIs

- `localStorage` - Persistent storage (global across process)
- `sessionStorage` - Session storage (memory-based, 10MB limit)

### Event APIs

- `Event` - Base event class
- `EventTarget` - Event target interface
- `CustomEvent` - Custom events
- `CloseEvent`, `ErrorEvent`, `MessageEvent`
- `EventSource` - Server-Sent Events client
- `BroadcastChannel` - Cross-worker communication

### Web Crypto API

- `crypto` - Crypto namespace (alias for `node:crypto`)
- `Crypto` - Crypto class
- `SubtleCrypto` - Web Crypto API implementation
- `CryptoKey` - Cryptographic key representation

### Encoding/Decoding

- `TextEncoder` - Encode strings to UTF-8 bytes
- `TextDecoder` - Decode bytes to strings
- `TextEncoderStream`, `TextDecoderStream` - Streaming versions
- `atob()` - Base64 decode
- `btoa()` - Base64 encode

### Performance API

- `performance` - Performance timing interface
- `PerformanceEntry`, `PerformanceMark`, `PerformanceMeasure`
- `PerformanceObserver` - Observe performance metrics
- `PerformanceResourceTiming`

### Navigator API

- `navigator` - Browser-like navigator object
  - `navigator.hardwareConcurrency` - CPU cores
  - `navigator.language` - Language preference
  - `navigator.platform` - Platform string
  - `navigator.userAgent` - User agent string
  - `navigator.locks` - Web Locks API

### Other Utilities

- `structuredClone()` - Deep clone objects
- `queueMicrotask()` - Schedule microtasks
- `DOMException` - DOM exception class
- `WebAssembly` - WebAssembly namespace
- `MessageChannel`, `MessagePort` - Message passing

## Try It Out

The code editor shows examples of using global objects. Run it and observe the output:

```js title="index.js"
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

const params = new URLSearchParams({ q: "nodejs", page: "1" });
console.log("Query string:", params.toString());

// TextEncoder/TextDecoder (Web APIs)
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const encoded = encoder.encode("Hello, Node.js!");
console.log("\nEncoded:", encoded);
console.log("Decoded:", decoder.decode(encoded));

// Base64 encoding/decoding
const base64 = btoa("Hello, Base64!");
console.log("\nBase64 encoded:", base64);
console.log("Base64 decoded:", atob(base64));

// structuredClone (deep cloning)
const original = { name: "Node.js", version: process.version };
const cloned = structuredClone(original);
console.log("\nOriginal:", original);
console.log("Cloned:", cloned);
console.log("Same object?", original === cloned);

// Global object
console.log("\nGlobal object type:", typeof globalThis);
console.log("Same as global?", globalThis === global);

// Navigator API
console.log("\nNavigator info:");
console.log("Hardware concurrency:", navigator.hardwareConcurrency);
console.log("Platform:", navigator.platform);
console.log("Language:", navigator.language);
```

### AbortController

A utility class used to signal cancelation in selected Promise-based APIs or async operations. The API is based on the Web API [AbortController](https://mdn.io/AbortController).The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.

You can create a new `AbortController` object using the `AbortController()` constructor. Communicating with an asynchronous operation is done using an AbortSignal object.

<!--table to show the constructor, instance properties and methods, static properties and method-->
<!--another thought is to use details and summary-->

```js
const ac = new AbortController();

ac.signal.addEventListener("abort", () => console.log("Aborted!"), {
  once: true,
});

ac.abort();

console.log(ac.signal.reason); // Prints true
```

#### AbortSignal

The AbortSignal interface represents a signal object that allows you to communicate with an asynchronous operation (such as a fetch request) and abort it if required via an AbortController object.

> Extends: `EventTarget`

  <!--instance properties-->

##### Instance Properties

`AbortSignal.aborted` - <kbd>read-only</kbd> returns `{boolean}`

A Boolean that indicates whether the request(s) the signal is communicating with is/are aborted (true) or not (false).

```js title=AbortSignal {2} {5}
const controller = new AbortController();
console.log(controller.signal.aborted); // false

controller.abort();
console.log(controller.signal.aborted); // true
```

:::tip
Use case: Check before starting expensive operations

```js wrap title="expensive operations"
async function fetchUserData(userId, signal) {
  if (signal.aborted) {
    throw new Error("Already aborted");
  }

  const response = await fetch(`/api/users/${userId}`, { signal });
  return response.json();
}
```

:::

`AbortSignal.reason` - <kbd>read-only</kbd> - returns {string}

A JavaScript string value providing the abort reason, once the signal has aborted.

```js {4}
const controller = new AbortController();
controller.abort("User cancelled");

console.log(controller.signal.reason); // 'User cancelled'
```

```js collapse={1-3} title="reason.js" {5}
try {
  await fetch("/api/data", { signal });
} catch (error) {
  if (error.name === "AbortError") {
    console.log("Aborted because:", signal.reason);
  }
}
```

<!--instance method-->

`signal.throwIfAborted()` - If abortSignal.aborted is true, throws abortSignal.reason.

<!--static method-->

##### Static methods

> Also inherits methods from its parent interface, EventTarget.

`AbortSignal.abort()` - Returns a new `AbortSignal` instance that is already set as aborted some sort of Pre Abort even before the async action. It has 2 overloads of `AbortSignal.abort()` and `AbortSignal.abort([reason])`.

```js
AbortSignal.abort("the real reason for the abort");
```

`AbortSignal.any()` - Returns an `AbortSignal` that aborts when any of the given abort signals abort.

```js
const userController = new AbortController();
const timeoutSignal = AbortSignal.timeout(10000);

const combinedSignal = AbortSignal.any([userController.signal, timeoutSignal]);

// Aborts if user cancels OR timeout occurs
await fetch("/api/data", { signal: combinedSignal });
```

Here is an example

```js
const signal = AbortSignal.any([
  userAbort.signal,
  timeoutSignal,
  componentUnmountSignal,
]);
```

The possible use cases is setting up multiple abort conditions. So considering the example above, it aborts when user cancels with an abort() or it times out.

`AbortSignal.timeout(delay)` - Returns an `AbortSignal` instance that will automatically abort after a specified time `delay`. dealay is the number of milliseconds to wait before triggering the AbortSignal.

```js {1} {6}
const signal = AbortSignal.timeout(5000); // 5 seconds

try {
  await fetch("/api/slow-endpoint", { signal });
} catch (error) {
  if (error.name === "TimeoutError") {
    console.log("Request timed out");
  }
}
```

Use case: Set request timeouts without manual timers(setTimeout)

<!--events-->

Event

```js
ac.signal.onabort = () => console.log("aborted!");

ac.signal.addEventListener(
  "abort",
  (event) => {
    console.log(event.type); // Prints 'abort'
  },
  { once: true },
);
```

:::danger
The AbortController with which the AbortSignal is associated will only ever trigger the 'abort' event once. We recommended that code check that the abortSignal.aborted attribute is false before adding an 'abort' event listener.
:::

:::warn
Any event listeners attached to the AbortSignal should use the { once: true } option (or, if using the EventEmitter APIs to attach a listener, use the once() method) to ensure that the event listener is removed as soon as the 'abort' event is handled. Failure to do so may result in memory leaks.
:::

## Important Notes

⚠️ **Avoid polluting the global namespace**: Don't attach properties to `global` unless absolutely necessary.

✅ **Use modules instead**: Import what you need rather than relying on globals.

📝 **ES Modules vs CommonJS**: Some globals like `__dirname` and `__filename` are only available in CommonJS modules. In ES modules, use `import.meta.url` instead.

🌐 **Web API Compatibility**: Many Web APIs are available globally in Node.js, making it easier to share code between Node.js and browsers.

## Exercise

Add code to:

1. Create a Buffer from your name
2. Log it in both Buffer and string format
3. Create a URL object for your favorite website
4. Use `TextEncoder` to encode a string and `TextDecoder` to decode it back
5. Use `structuredClone` to create a deep copy of an object

## What's Next?

Next, we'll explore the **Process** object in detail!

```

```
