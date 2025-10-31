// Basic process information
console.log('=== Process Information ===');
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);
console.log('Process ID:', process.pid);

// Memory usage
console.log('\n=== Memory Usage ===');
const memUsage = process.memoryUsage();
console.log('Heap used:', (memUsage.heapUsed / 1024 / 1024).toFixed(2), 'MB');
console.log('Heap total:', (memUsage.heapTotal / 1024 / 1024).toFixed(2), 'MB');
