const chokidar = require('chokidar');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..').replace(/\\/g, '/');
const watchPath = `${projectRoot}/modules/**/widgets/*.html`;

console.log('Testing watch path:', watchPath);
console.log('');

const watcher = chokidar.watch(watchPath, {
  persistent: false,
  ignoreInitial: false
});

watcher.on('add', p => console.log('✅ Found file:', p));
watcher.on('ready', () => {
  console.log('');
  console.log('Watcher ready');
  setTimeout(() => process.exit(0), 1000);
});
watcher.on('error', err => console.error('❌ Error:', err));
