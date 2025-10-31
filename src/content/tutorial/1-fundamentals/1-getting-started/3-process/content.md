---
type: lesson
title: The Process Object
focus: /index.js
---

# The Process Object

The `process` object provides information about, and control over, the current Node.js process. It's a global that's always available without requiring it.

## Key Properties

### Process Information

```js
process.version      // Node.js version (e.g., 'v20.0.0')
process.platform     // Operating system platform ('linux', 'darwin', 'win32')
process.arch         // CPU architecture ('x64', 'arm64')
process.pid          // Process ID
process.uptime()     // How long the process has been running
```

### Standard Streams

```js
process.stdin        // Standard input (readable stream)
process.stdout       // Standard output (writable stream)
process.stderr       // Standard error (writable stream)
```

## Try It Out

Run the code to see various process properties in action!

## What's Next?

Next, we'll explore **Environment Variables** in detail!
