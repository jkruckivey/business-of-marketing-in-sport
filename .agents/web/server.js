// Simple local test server for web interface
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import runAgent from './api/run-agent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.static(__dirname));

// API endpoint
app.post('/api/run-agent', runAgent);

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n🎓 Ivey Education Agents - Web Interface`);
    console.log(`📡 Server running at: http://localhost:${PORT}`);
    console.log(`\n✨ Open your browser and navigate to the URL above`);
    console.log(`🔑 You'll need your Anthropic API key to use the agents\n`);
});
