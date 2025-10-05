#!/usr/bin/env node

import { createInterface } from 'readline';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Agent definitions
const AGENTS = {
  '1': {
    name: 'Sports Content Reviewer (Fast)',
    file: 'sports-content-reviewer-fast.js',
    description: 'Quick content quality check (5-15 seconds)',
    requiresFile: true
  },
  '2': {
    name: 'Widget Student Simulator',
    file: 'widget-student-simulator.js',
    description: 'Simulates 3 MBA personas using widgets',
    requiresFile: true
  },
  '3': {
    name: 'Sports Industry Context Updater',
    file: 'sports-industry-updater.js',
    description: 'Checks for outdated 2024-25 content',
    requiresFile: true
  },
  '4': {
    name: 'Student Journey Simulator',
    file: 'student-journey-simulator.js',
    description: 'Complete 5-week student experience (uses Opus)',
    requiresFile: false
  },
  '5': {
    name: 'Cross-Module Consistency Checker',
    file: 'consistency-checker.js',
    description: 'Ensures narrative flow across weeks (uses Opus)',
    requiresFile: false
  },
  '6': {
    name: 'Assessment Rubric Generator',
    file: 'rubric-generator.js',
    description: 'Auto-generates QM-aligned rubrics',
    requiresFile: true
  },
  '7': {
    name: 'UDL Multimodal Content Generator',
    file: 'udl-content-generator.js',
    description: 'Creates audio, visual, interactive formats',
    requiresFile: true
  },
  '8': {
    name: 'Accessibility Auditor',
    file: 'accessibility-auditor.js',
    description: 'WCAG 2.1 AA compliance check',
    requiresFile: true
  },
  '9': {
    name: 'Branding Checker',
    file: 'branding-checker.js',
    description: 'Ivey design system validation',
    requiresFile: true
  },
  '10': {
    name: 'Canvas LMS Validator',
    file: 'canvas-lms-validator.js',
    description: 'LMS integration compatibility',
    requiresFile: true
  },
  '11': {
    name: 'Widget Tester',
    file: 'widget-tester.js',
    description: 'Interactive functionality testing',
    requiresFile: true
  }
};

const QUICK_ACTIONS = {
  'w1': { name: 'Review Module 1', agent: '1', path: '../modules/module-1/index.html' },
  'w2': { name: 'Review Module 2', agent: '1', path: '../modules/module-2/index.html' },
  'w3': { name: 'Review Module 3', agent: '1', path: '../modules/module-3/index.html' },
  'w4': { name: 'Review Module 4', agent: '1', path: '../modules/module-4/index.html' },
  'w5': { name: 'Review Module 5', agent: '1', path: '../modules/module-5/index.html' },
  'journey': { name: 'Full Student Journey', agent: '4', path: null },
  'consistency': { name: 'Check Consistency', agent: '5', path: null }
};

console.clear();
console.log(chalk.bold.yellow('\n╔════════════════════════════════════════════════════════╗'));
console.log(chalk.bold.yellow('║   🎓 Business of Marketing in Sport - AI Agents 🤖   ║'));
console.log(chalk.bold.yellow('╚════════════════════════════════════════════════════════╝\n'));

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log(chalk.cyan.bold('\n📋 Available Agents:\n'));

  Object.entries(AGENTS).forEach(([key, agent]) => {
    console.log(`  ${chalk.green(key.padEnd(3))} ${chalk.white(agent.name)}`);
    console.log(`      ${chalk.gray(agent.description)}\n`);
  });

  console.log(chalk.cyan.bold('\n⚡ Quick Actions:\n'));

  Object.entries(QUICK_ACTIONS).forEach(([key, action]) => {
    console.log(`  ${chalk.yellow(key.padEnd(12))} ${chalk.white(action.name)}`);
  });

  console.log(chalk.red.bold('\n  exit         Quit launcher\n'));
}

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(chalk.bold(prompt), resolve);
  });
}

async function runAgent(agentKey, filePath = null) {
  const agent = AGENTS[agentKey];

  if (!agent) {
    console.log(chalk.red('❌ Invalid agent selection'));
    return;
  }

  let targetPath = filePath;

  if (agent.requiresFile && !targetPath) {
    targetPath = await question(chalk.yellow('\n📂 Enter file/folder path (or press Enter for default): '));

    if (!targetPath.trim()) {
      console.log(chalk.gray('Using default path: ../modules'));
      targetPath = '../modules';
    }
  }

  console.log(chalk.blue(`\n🚀 Running: ${agent.name}\n`));

  try {
    const command = `node "${path.join(__dirname, agent.file)}" ${targetPath || ''}`;
    const { stdout, stderr } = await execAsync(command, {
      cwd: __dirname,
      maxBuffer: 10 * 1024 * 1024 // 10MB buffer
    });

    if (stdout) console.log(stdout);
    if (stderr) console.error(chalk.yellow(stderr));

    console.log(chalk.green('\n✅ Agent completed successfully!\n'));
  } catch (error) {
    console.error(chalk.red(`\n❌ Error: ${error.message}\n`));
  }
}

async function main() {
  displayMenu();

  while (true) {
    const choice = await question(chalk.bold.cyan('\n🤖 Select agent (number/quick action) or "exit": '));
    const trimmedChoice = choice.trim().toLowerCase();

    if (trimmedChoice === 'exit' || trimmedChoice === 'quit' || trimmedChoice === 'q') {
      console.log(chalk.yellow('\n👋 Goodbye!\n'));
      rl.close();
      process.exit(0);
    }

    if (trimmedChoice === 'menu' || trimmedChoice === 'help') {
      displayMenu();
      continue;
    }

    // Check quick actions
    if (QUICK_ACTIONS[trimmedChoice]) {
      const action = QUICK_ACTIONS[trimmedChoice];
      await runAgent(action.agent, action.path);
      continue;
    }

    // Check agent numbers
    if (AGENTS[trimmedChoice]) {
      await runAgent(trimmedChoice);
      continue;
    }

    console.log(chalk.red('\n❌ Invalid choice. Type "menu" to see options again.\n'));
  }
}

main();
