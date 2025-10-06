#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { promisify } from 'util';
import { exec } from 'child_process';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATES = {
  'accessibility-auditor': {
    file: 'accessibility-auditor.md',
    name: 'Accessibility Auditor',
    description: 'WCAG 2.2 AA compliance auditor for educational content'
  },
  'content-reviewer': {
    file: 'content-reviewer.md',
    name: 'Content Reviewer',
    description: 'Quick quality check for educational course content'
  },
  'rubric-generator': {
    file: 'rubric-generator.md',
    name: 'Rubric Generator',
    description: 'Generate Quality Matters-aligned assessment rubrics'
  },
  'widget-tester': {
    file: 'widget-student-simulator.md',
    name: 'Widget Student Simulator',
    description: 'Test interactive widgets with diverse student personas'
  },
  'udl-generator': {
    file: 'udl-content-generator.md',
    name: 'UDL Content Generator',
    description: 'Transform content into multimodal UDL formats'
  }
};

function getClaudeTemplatesDir() {
  const homeDir = process.env.HOME || process.env.USERPROFILE;
  return path.join(homeDir, '.claude', 'templates');
}

function showHelp() {
  console.log(chalk.bold.green('\n📦 Education AI Agent Template Installer\n'));

  console.log(chalk.bold('USAGE:\n'));
  console.log('  npx education-ai-agents --template=<name>           # Install specific template');
  console.log('  npx education-ai-agents --template=<name> --yes     # Auto-confirm installation');
  console.log('  npx education-ai-agents --create-agent <name>       # Create global agent\n');

  console.log(chalk.bold('AVAILABLE TEMPLATES:\n'));
  Object.entries(TEMPLATES).forEach(([id, template]) => {
    console.log(chalk.cyan(`  ${id.padEnd(25)}`), chalk.dim(template.description));
  });

  console.log(chalk.bold('\n\nEXAMPLES:\n'));
  console.log(chalk.dim('  # Install accessibility auditor template'));
  console.log('  npx education-ai-agents --template=accessibility-auditor\n');

  console.log(chalk.dim('  # Install with auto-confirm'));
  console.log('  npx education-ai-agents --template=content-reviewer --yes\n');

  console.log(chalk.dim('  # Create global agent'));
  console.log('  npx education-ai-agents --create-agent accessibility-auditor\n');

  console.log(chalk.bold('AFTER INSTALLATION:\n'));
  console.log('  Use in Claude Code:');
  console.log(chalk.cyan('  Use the accessibility-auditor template on modules/module-1/index.html\n'));
}

async function installTemplate(templateId, autoConfirm = false) {
  const template = TEMPLATES[templateId];

  if (!template) {
    console.error(chalk.red(`\n❌ Unknown template: ${templateId}\n`));
    console.log(chalk.yellow('Run'), chalk.cyan('npx education-ai-agents --help'), chalk.yellow('to see available templates.\n'));
    process.exit(1);
  }

  console.log(chalk.green(`\n📦 Installing ${template.name}...\n`));
  console.log(chalk.dim(`Description: ${template.description}\n`));

  // Check if Claude Code templates directory exists
  const templatesDir = getClaudeTemplatesDir();

  if (!fs.existsSync(templatesDir)) {
    console.log(chalk.yellow('⚠️  Claude Code templates directory not found. Creating it...\n'));
    fs.mkdirSync(templatesDir, { recursive: true });
    console.log(chalk.green(`✅ Created: ${templatesDir}\n`));
  }

  // Copy template file
  const sourceFile = path.join(__dirname, 'templates', template.file);
  const destFile = path.join(templatesDir, template.file);

  if (!fs.existsSync(sourceFile)) {
    console.error(chalk.red(`❌ Template file not found: ${sourceFile}\n`));
    process.exit(1);
  }

  if (fs.existsSync(destFile) && !autoConfirm) {
    console.log(chalk.yellow(`⚠️  Template already exists: ${destFile}`));
    console.log(chalk.yellow('Overwrite? (This will replace the existing file)\n'));
    // In real implementation, would prompt for confirmation
    // For now, we'll just warn
  }

  fs.copyFileSync(sourceFile, destFile);
  console.log(chalk.green(`✅ Template installed: ${destFile}\n`));

  console.log(chalk.bold('USAGE IN CLAUDE CODE:\n'));
  console.log(chalk.cyan(`  Use the ${templateId} template on modules/module-1/index.html\n`));

  console.log(chalk.dim('Or with specific file:'));
  console.log(chalk.cyan(`  Use the ${templateId} template on [your-file-path]\n`));
}

async function createGlobalAgent(templateId) {
  const template = TEMPLATES[templateId];

  if (!template) {
    console.error(chalk.red(`\n❌ Unknown template: ${templateId}\n`));
    process.exit(1);
  }

  console.log(chalk.green(`\n🌍 Creating global agent: ${template.name}...\n`));

  // Create a wrapper script that calls the agent
  const agentScript = `#!/usr/bin/env node

import { query } from '@anthropic-ai/claude-agent-sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.join(process.env.HOME || process.env.USERPROFILE, '.claude', 'templates', '${template.file}');
const templateContent = fs.readFileSync(templatePath, 'utf8');

const userPrompt = process.argv.slice(2).join(' ');

if (!userPrompt) {
  console.log('Usage: ${templateId} "your prompt here"');
  process.exit(1);
}

// Extract prompt from template
const promptMatch = templateContent.match(/## Prompt\\n\\n([\\s\\S]+?)\\n\\n##/);
const systemPrompt = promptMatch ? promptMatch[1] : '';

query({
  prompt: userPrompt,
  systemPrompt: systemPrompt,
  options: {
    model: 'sonnet'
  }
}).then(result => {
  console.log(result);
}).catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
`;

  // Install globally
  const globalBinDir = path.join(process.env.HOME || process.env.USERPROFILE, '.local', 'bin');

  if (!fs.existsSync(globalBinDir)) {
    fs.mkdirSync(globalBinDir, { recursive: true });
  }

  const agentPath = path.join(globalBinDir, templateId);
  fs.writeFileSync(agentPath, agentScript);
  fs.chmodSync(agentPath, '755');

  console.log(chalk.green(`✅ Global agent created: ${agentPath}\n`));
  console.log(chalk.bold('USAGE FROM ANYWHERE:\n'));
  console.log(chalk.cyan(`  ${templateId} "your prompt here"\n`));

  console.log(chalk.dim('Examples:'));
  console.log(chalk.cyan(`  ${templateId} "audit modules/module-1/index.html"`));
  console.log(chalk.cyan(`  ${templateId} "review this content for quality issues"\n`));

  console.log(chalk.yellow('💡 Make sure ~/.local/bin is in your PATH\n'));
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

// Parse arguments
let templateArg = null;
let autoConfirm = false;
let createAgent = false;

for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--template=')) {
    templateArg = args[i].split('=')[1];
  } else if (args[i] === '--yes' || args[i] === '-y') {
    autoConfirm = true;
  } else if (args[i] === '--create-agent') {
    createAgent = true;
    templateArg = args[i + 1];
    i++;
  }
}

if (templateArg) {
  if (createAgent) {
    await createGlobalAgent(templateArg);
  } else {
    await installTemplate(templateArg, autoConfirm);
  }
} else {
  showHelp();
}
