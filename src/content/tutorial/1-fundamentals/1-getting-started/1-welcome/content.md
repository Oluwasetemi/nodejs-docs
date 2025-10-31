---
type: lesson
title: Welcome to Node.js
focus: /index.js
---

# Welcome to Node.js Interactive Docs

Welcome to the complete Node.js documentation, reimagined as interactive tutorials! 🚀

Unlike the traditional API reference, this documentation lets you **write and run code directly in your browser** as you learn.

## What You'll Learn

This documentation covers **all 62 Node.js core modules**, organized by learning progression:

- **Fundamentals**: Globals, Process, Console, Timers, Buffer, and more
- **Module System**: CommonJS, ES Modules, Packages, TypeScript
- **File System & Data**: File operations, Streams, SQLite, Compression
- **Web & Networking**: HTTP, HTTPS, WebSockets, TCP/UDP, DNS
- **Async Programming**: Promises, Async/Await, Events, Streams
- **Security**: Crypto, Web Crypto, Permissions
- **Testing & Debugging**: Test Runner, Debugger, Inspector
- **Performance**: Child Processes, Worker Threads, Clustering
- **Advanced Topics**: Native Addons, V8, WASI, and more

## Your First Node.js Program

Let's start with the classic "Hello, World!" program. Look at the code editor on the right:

```js title="index.js"
console.log("Hello, Node.js!");
console.log("Node.js version:", process.version);
console.log("Platform:", process.platform);
```

Click the **Run** button or check the terminal below to see the output!

## Try It Yourself

Modify the code to print your own message. Try adding:

```js
console.log("My name is [Your Name]");
console.log("Current directory:", process.cwd());
```

## Understand how to use this note

The documentation contains special visual element called the callout, they are used to explain or call out important information.

:::info
Some info with some markdown `syntax` and a [`link`](https://tutorialkit.dev/).

Here's a normal [link](https://tutorialkit.dev/).
:::

:::success
A successful message.

Here's a normal [link](https://tutorialkit.dev/).
:::

:::danger
A dangerous information to pay attention to.

Here's a normal [link](https://tutorialkit.dev/).
:::

Above is the `info`, but you can use the `tip`, `warn`, `danger` and `success` are all used to explain important concepts.

We have the special code blocks and file annotations.

```js title="code.js" ins={4} del={5} {6} "greeting"
const greeting = "Hello, World!";

// This is a comment
const added = "This line was added";
const removed = "This line was removed";
const highlighted = "This line is highlighted";
```

> Useful Expressive Code Attributes

- `title` - Sets the title of the code block.
- `frame` - Defines the frame of the code block. Options: "code", "terminal", "none", "auto".
- `showLineNumbers` - Displays line numbers. You can combine this with startLineNumber=# to begin numbering from a specific line.
- `wrap` - Controls word wrapping. Use preserveIndent and preserveIndent=false to adjust indentation handling.

> Marking Lines and marking text with `ins` for insert or lines to be added, `del` for delete or lines to be removed

- {x} - Marks specific lines. For example, {6,10-18} will mark lines 6 and 10 through 18.
- ins - Marks inserted lines. Example: ins={6,10-18}.
- del - Marks deleted lines. Example: del={6,10-18}.
- {"Label":x} - Assigns a label to a line or range of lines. Works with mark, ins, and del. Example: {"Label1":5} del={"Label2":7-8} ins={"Label3":10-12}. If the label is long, consider placing an empty line in the code for better readability.Another Example: `/ye[sp]/ add=/add[12]/ del=/remove[12]/`
- collapse={X-Y} - Collapses the specified lines. Example: collapse={1-5,12-14}.

In addition to Expressive Code features, you can import files from your code template \_files and \_solution folders using the file or solution shortcodes `file` and `solution`.

## What's Next?

In the following lessons, you'll learn about:

- **Globals**: Built-in objects available everywhere
- **Process**: Information about the current Node.js process
- **Environment Variables**: Configuration and secrets
- **Command-line Options**: Customizing Node.js behavior

Let's dive in! →
