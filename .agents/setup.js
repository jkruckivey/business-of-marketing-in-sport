#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n🎓 Education AI Agents - Setup\n');

// Check for .env file
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
  console.log('⚠️  No .env file found.');

  if (fs.existsSync(envExamplePath)) {
    console.log('📝 Creating .env file from template...\n');
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ .env file created!');
    console.log('\n📌 IMPORTANT: Edit .env and add your Anthropic API key:');
    console.log('   ANTHROPIC_API_KEY=your_key_here\n');
  } else {
    console.log('\n📌 IMPORTANT: Create a .env file with:');
    console.log('   ANTHROPIC_API_KEY=your_key_here\n');
  }

  console.log('Get your API key at: https://console.anthropic.com/\n');
} else {
  console.log('✅ .env file exists\n');

  // Check if API key is set
  const envContent = fs.readFileSync(envPath, 'utf8');
  if (envContent.includes('your_key_here') || !envContent.includes('ANTHROPIC_API_KEY=sk-')) {
    console.log('⚠️  API key not configured in .env file');
    console.log('📌 Edit .env and add your Anthropic API key\n');
  } else {
    console.log('✅ API key configured\n');
  }
}

// Create reports directory
const reportsDir = path.join(__dirname, 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
  console.log('📁 Created reports directory\n');
}

console.log('🚀 Installation complete!\n');
console.log('Quick start:');
console.log('  npx edu-agents              # Interactive launcher');
console.log('  npx edu-agents --help       # View all commands\n');
console.log('Documentation:');
console.log('  README.md         - Full guide');
console.log('  QUICK-REFERENCE.md - Common commands');
console.log('  TEAM-GUIDE.md     - For coworkers using Claude Code\n');
