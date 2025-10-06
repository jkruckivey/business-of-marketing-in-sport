#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AGENTS = {
  'content-review': {
    file: 'sports-content-reviewer-fast.js',
    description: 'Quick content quality check (5-15s)',
    example: 'npx edu-agents content-review modules/module-1/index.html'
  },
  'accessibility': {
    file: 'accessibility-auditor.js',
    description: 'WCAG 2.2 AA compliance audit (2-5min)',
    example: 'npx edu-agents accessibility modules/module-1/widgets/fan-engagement.html'
  },
  'widget-test': {
    file: 'widget-student-simulator.js',
    description: 'Test widget with 3 MBA personas (2-5min)',
    example: 'npx edu-agents widget-test modules/module-1/widgets/revenue-builder.html'
  },
  'branding': {
    file: 'branding-checker.js',
    description: 'Check brand compliance (2-5min)',
    example: 'npx edu-agents branding modules/module-2'
  },
  'rubric': {
    file: 'rubric-generator.js',
    description: 'Generate QM-aligned rubric (3-5min)',
    example: 'npx edu-agents rubric modules/module-1/outline.html'
  },
  'industry-update': {
    file: 'sports-industry-updater.js',
    description: 'Check for outdated content (2-5min)',
    example: 'npx edu-agents industry-update modules/module-3/index.html'
  },
  'consistency': {
    file: 'consistency-checker.js',
    description: 'Cross-module consistency analysis (5-8min, uses Opus)',
    example: 'npx edu-agents consistency'
  },
  'student-journey': {
    file: 'student-journey-simulator.js',
    description: 'Simulate full course experience (5-8min, uses Opus)',
    example: 'npx edu-agents student-journey'
  },
  'udl': {
    file: 'udl-content-generator.js',
    description: 'Generate multimodal UDL content (3-5min)',
    example: 'npx edu-agents udl modules/module-1/step-1-overview.html'
  }
};

function showHelp() {
  console.log(chalk.bold.green('\n🎓 Education AI Agents\n'));
  console.log(chalk.white('AI-powered quality assurance for educational course development.\n'));

  console.log(chalk.bold('USAGE:'));
  console.log('  npx edu-agents                    # Interactive launcher');
  console.log('  npx edu-agents <command> [file]   # Run specific agent\n');

  console.log(chalk.bold('COMMANDS:\n'));

  Object.entries(AGENTS).forEach(([cmd, agent]) => {
    console.log(chalk.cyan(`  ${cmd.padEnd(18)}`), chalk.dim(agent.description));
  });

  console.log(chalk.bold('\n\nEXAMPLES:\n'));
  console.log(chalk.dim('  # Quick content review'));
  console.log('  npx edu-agents content-review modules/module-1/index.html\n');
  console.log(chalk.dim('  # Accessibility audit'));
  console.log('  npx edu-agents accessibility modules/module-1/widgets/revenue-builder.html\n');
  console.log(chalk.dim('  # Generate assessment rubric'));
  console.log('  npx edu-agents rubric modules/module-1/outline.html\n');
  console.log(chalk.dim('  # Interactive menu'));
  console.log('  npx edu-agents\n');

  console.log(chalk.bold('DOCUMENTATION:'));
  console.log('  README.md         - Full documentation');
  console.log('  QUICK-REFERENCE.md - Common commands cheat sheet');
  console.log('  TEAM-GUIDE.md     - Guide for using with Claude Code\n');

  console.log(chalk.dim('GitHub: https://github.com/jameskruck/education-ai-agents'));
  console.log(chalk.dim('Issues: https://github.com/jameskruck/education-ai-agents/issues\n'));
}

async function runAgent(command, filePath) {
  const agent = AGENTS[command];

  if (!agent) {
    console.error(chalk.red(`\n❌ Unknown command: ${command}\n`));
    console.log(chalk.yellow('Run'), chalk.cyan('npx edu-agents --help'), chalk.yellow('to see available commands.\n'));
    process.exit(1);
  }

  console.log(chalk.green(`\n🚀 Running ${command}...`));

  if (filePath) {
    console.log(chalk.dim(`   Target: ${filePath}\n`));
  }

  const agentPath = path.join(__dirname, agent.file);
  const command_str = filePath ? `node "${agentPath}" "${filePath}"` : `node "${agentPath}"`;

  try {
    const { stdout, stderr } = await execAsync(command_str, {
      cwd: __dirname,
      maxBuffer: 10 * 1024 * 1024 // 10MB buffer
    });

    if (stdout) console.log(stdout);
    if (stderr) console.error(chalk.yellow(stderr));

    console.log(chalk.green('\n✅ Complete!\n'));
    console.log(chalk.dim('Reports saved in:'), chalk.cyan('.agents/reports/\n'));
  } catch (error) {
    console.error(chalk.red('\n❌ Error:'), error.message);

    if (error.message.includes('ANTHROPIC_API_KEY')) {
      console.log(chalk.yellow('\n💡 Make sure your .env file has a valid API key:'));
      console.log(chalk.dim('   ANTHROPIC_API_KEY=sk-ant-...\n'));
    }

    process.exit(1);
  }
}

// Main CLI logic
const args = process.argv.slice(2);

// Check for template installation flags
const hasTemplateFlag = args.some(arg => arg.startsWith('--template=') || arg === '--create-agent');

if (hasTemplateFlag) {
  // Delegate to template installer
  const { default: installer } = await import('./install-template.js');
} else if (args.length === 0) {
  // No arguments - run interactive launcher
  const { default: launcher } = await import('./agent-launcher.js');
} else if (args[0] === '--help' || args[0] === '-h') {
  showHelp();
} else if (args[0] === '--version' || args[0] === '-v') {
  const { default: pkg } = await import('./package.json', { assert: { type: 'json' } });
  console.log(chalk.green(`\nEducation AI Agents v${pkg.version}\n`));
} else {
  // Run specific agent
  const command = args[0];
  const filePath = args[1];
  await runAgent(command, filePath);
}
