const chokidar = require('chokidar');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const watchPaths = ['modules/**/widgets/*.html'];

console.log('Project root:', projectRoot);
console.log('Watch paths:', watchPaths);
console.log('');

const watcher = chokidar.watch(watchPaths, {
  cwd: projectRoot,
  persistent: false,
  ignoreInitial: false
});

let fileCount = 0;
watcher.on('add', p => {
  fileCount++;
  console.log('✅ Found:', p);
});

watcher.on('ready', () => {
  console.log('');
  console.log(`Total files found: ${fileCount}`);
  setTimeout(() => process.exit(0), 1000);
});

watcher.on('error', err => console.error('❌ Error:', err));
