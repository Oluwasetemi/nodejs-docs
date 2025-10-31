import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tutorialDir = path.join(__dirname, 'src/content/tutorial');

// Complete structure for all 10 parts covering 62 modules
const structure = [
  {
    part: '1-fundamentals',
    title: 'Part 1: Node.js Fundamentals',
    chapters: [
      {
        chapter: '1-getting-started',
        title: 'Chapter 1: Getting Started',
        lessons: ['welcome', 'globals', 'process', 'environment-variables', 'command-line-options']
      },
      {
        chapter: '2-essential-builtins',
        title: 'Chapter 2: Essential Built-ins',
        lessons: ['console', 'timers', 'errors', 'buffer', 'utilities']
      },
      {
        chapter: '3-paths-and-urls',
        title: 'Chapter 3: Working with Paths & URLs',
        lessons: ['path', 'url', 'query-strings', 'punycode']
      }
    ]
  },
  {
    part: '2-module-system',
    title: 'Part 2: Module System & Package Management',
    chapters: [
      {
        chapter: '1-understanding-modules',
        title: 'Chapter 1: Understanding Modules',
        lessons: ['commonjs-modules', 'ecmascript-modules', 'node-module-api']
      },
      {
        chapter: '2-building-packages',
        title: 'Chapter 2: Building Packages',
        lessons: ['packages', 'typescript-support']
      }
    ]
  },
  {
    part: '3-filesystem-and-data',
    title: 'Part 3: File System & Data',
    chapters: [
      {
        chapter: '1-file-operations',
        title: 'Chapter 1: File Operations',
        lessons: ['filesystem-basics', 'reading-writing-files', 'file-streams', 'working-with-directories']
      },
      {
        chapter: '2-data-encoding',
        title: 'Chapter 2: Data Encoding & Compression',
        lessons: ['string-decoder', 'zlib-compression', 'buffer-in-depth']
      },
      {
        chapter: '3-database',
        title: 'Chapter 3: Database Integration',
        lessons: ['sqlite']
      }
    ]
  },
  {
    part: '4-web-and-network',
    title: 'Part 4: Web & Network Programming',
    chapters: [
      {
        chapter: '1-http-fundamentals',
        title: 'Chapter 1: HTTP Fundamentals',
        lessons: ['building-http-servers', 'http-clients', 'request-response-handling', 'routing-basics']
      },
      {
        chapter: '2-advanced-http',
        title: 'Chapter 2: Advanced HTTP',
        lessons: ['https', 'http2', 'web-streams-api']
      },
      {
        chapter: '3-network-protocols',
        title: 'Chapter 3: Network Protocols',
        lessons: ['net-tcp', 'udp-datagram', 'dns', 'tls-ssl']
      }
    ]
  },
  {
    part: '5-async-programming',
    title: 'Part 5: Asynchronous Programming',
    chapters: [
      {
        chapter: '1-async-patterns',
        title: 'Chapter 1: Async Patterns',
        lessons: ['callbacks-promises-async-await', 'events-eventemitter', 'stream-fundamentals']
      },
      {
        chapter: '2-advanced-async',
        title: 'Chapter 2: Advanced Async',
        lessons: ['async-hooks', 'asynchronous-context-tracking']
      },
      {
        chapter: '3-stream-mastery',
        title: 'Chapter 3: Stream Mastery',
        lessons: ['readable-writable-transform', 'piping-backpressure', 'stream-best-practices']
      }
    ]
  },
  {
    part: '6-security-and-crypto',
    title: 'Part 6: Security & Cryptography',
    chapters: [
      {
        chapter: '1-encryption-hashing',
        title: 'Chapter 1: Encryption & Hashing',
        lessons: ['crypto-basics', 'hashing-algorithms', 'encryption-decryption']
      },
      {
        chapter: '2-web-standards',
        title: 'Chapter 2: Web Standards',
        lessons: ['web-crypto-api', 'permissions']
      }
    ]
  },
  {
    part: '7-testing-and-debugging',
    title: 'Part 7: Testing & Debugging',
    chapters: [
      {
        chapter: '1-testing',
        title: 'Chapter 1: Testing',
        lessons: ['test-runner-basics', 'writing-tests', 'assertion-testing', 'test-coverage']
      },
      {
        chapter: '2-debugging-tools',
        title: 'Chapter 2: Debugging Tools',
        lessons: ['debugger', 'inspector', 'repl', 'diagnostics-channel']
      }
    ]
  },
  {
    part: '8-performance-and-production',
    title: 'Part 8: Performance & Production',
    chapters: [
      {
        chapter: '1-monitoring',
        title: 'Chapter 1: Monitoring',
        lessons: ['performance-hooks', 'trace-events', 'report-generation']
      },
      {
        chapter: '2-scaling-applications',
        title: 'Chapter 2: Scaling Applications',
        lessons: ['child-processes', 'worker-threads', 'cluster']
      }
    ]
  },
  {
    part: '9-advanced-io-and-system',
    title: 'Part 9: Advanced I/O & System',
    chapters: [
      {
        chapter: '1-interactive-io',
        title: 'Chapter 1: Interactive I/O',
        lessons: ['readline', 'tty']
      },
      {
        chapter: '2-system-information',
        title: 'Chapter 2: System Information',
        lessons: ['os-module', 'internationalization']
      }
    ]
  },
  {
    part: '10-native-and-advanced',
    title: 'Part 10: Native & Advanced Topics',
    chapters: [
      {
        chapter: '1-native-addons',
        title: 'Chapter 1: Native Addons',
        lessons: ['cpp-addons-basics', 'node-api', 'cpp-embedder-api']
      },
      {
        chapter: '2-runtime-internals',
        title: 'Chapter 2: Runtime Internals',
        lessons: ['v8-engine', 'vm-virtual-machine', 'wasi']
      },
      {
        chapter: '3-advanced-deployment',
        title: 'Chapter 3: Advanced Deployment',
        lessons: ['single-executable-applications', 'domain-deprecated', 'deprecated-apis']
      }
    ]
  }
];

// Create directory structure
for (const part of structure) {
  const partDir = path.join(tutorialDir, part.part);

  // Create part meta.md
  fs.mkdirSync(partDir, { recursive: true });
  fs.writeFileSync(
    path.join(partDir, 'meta.md'),
    `---\ntype: part\ntitle: "${part.title}"\n---\n`
  );

  for (let chIdx = 0; chIdx < part.chapters.length; chIdx++) {
    const chapter = part.chapters[chIdx];
    const chapterDir = path.join(partDir, chapter.chapter);

    // Create chapter meta.md
    fs.mkdirSync(chapterDir, { recursive: true });
    fs.writeFileSync(
      path.join(chapterDir, 'meta.md'),
      `---\ntype: chapter\ntitle: "${chapter.title}"\n---\n`
    );

    for (let lIdx = 0; lIdx < chapter.lessons.length; lIdx++) {
      const lesson = chapter.lessons[lIdx];
      const lessonDir = path.join(chapterDir, `${lIdx + 1}-${lesson}`);
      const filesDir = path.join(lessonDir, '_files');

      // Skip if already exists (like welcome and globals)
      if (fs.existsSync(lessonDir)) continue;

      // Create lesson directories
      fs.mkdirSync(filesDir, { recursive: true });

      // Create placeholder content.md
      const lessonTitle = lesson.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      fs.writeFileSync(
        path.join(lessonDir, 'content.md'),
        `---\ntype: lesson\ntitle: ${lessonTitle}\nfocus: /index.js\n---\n\n# ${lessonTitle}\n\n> This lesson covers the Node.js **${lessonTitle}** API.\n\nContent coming soon...\n\n## Quick Example\n\nCheck the code editor for a working example!\n`
      );

      // Create placeholder index.js
      fs.writeFileSync(
        path.join(filesDir, 'index.js'),
        `// ${lessonTitle} example\nconsole.log('Learning ${lessonTitle}!');\n\n// Add your code here\n`
      );

      // Create package.json
      fs.writeFileSync(
        path.join(filesDir, 'package.json'),
        `{\n  "name": "nodejs-${part.part}",\n  "type": "module",\n  "version": "1.0.0"\n}\n`
      );
    }
  }
}

console.log('✅ Tutorial structure created successfully!');
console.log('Total parts:', structure.length);
console.log('Total chapters:', structure.reduce((sum, p) => sum + p.chapters.length, 0));
console.log('Total lessons:', structure.reduce((sum, p) =>
  sum + p.chapters.reduce((csum, c) => csum + c.lessons.length, 0), 0)
);
