#!/usr/bin/env node

/**
 * MCP Server Creator
 * Creates persistent MCP servers for Claude Code
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MCP_SERVERS = {
  'accessibility-auditor': {
    name: 'Accessibility Auditor',
    description: 'WCAG 2.2 AA compliance auditing with audit_file and audit_directory tools',
    command: 'node',
    args: ['mcp-servers/accessibility-auditor/index.js'],
  },
  'widget-tester': {
    name: 'Widget Tester',
    description: 'Test interactive widgets with diverse student personas',
    command: 'node',
    args: ['mcp-servers/widget-tester/index.js'],
  },
};

function getMCPConfigPath() {
  const homeDir = os.homedir();
  return path.join(homeDir, '.claude', 'mcp_servers.json');
}

function loadMCPConfig() {
  const configPath = getMCPConfigPath();

  if (!fs.existsSync(configPath)) {
    return { mcpServers: {} };
  }

  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } catch (error) {
    console.error(chalk.red(`❌ Error reading MCP config: ${error.message}`));
    return { mcpServers: {} };
  }
}

function saveMCPConfig(config) {
  const configPath = getMCPConfigPath();
  const configDir = path.dirname(configPath);

  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

async function createAgent(agentId, autoConfirm = false) {
  const agent = MCP_SERVERS[agentId];

  if (!agent) {
    console.error(chalk.red(`❌ Unknown agent: ${agentId}\n`));
    console.log(chalk.bold('Available agents:'));
    Object.entries(MCP_SERVERS).forEach(([id, info]) => {
      console.log(chalk.cyan(`  - ${id}`));
      console.log(chalk.dim(`    ${info.description}`));
    });
    process.exit(1);
  }

  console.log(chalk.bold.green(`\n🤖 Creating MCP Server: ${agent.name}\n`));
  console.log(chalk.dim(`Description: ${agent.description}\n`));

  // Check if server directory exists in package
  const serverPath = path.join(__dirname, 'mcp-servers', agentId);
  if (!fs.existsSync(serverPath)) {
    console.error(chalk.red(`❌ Server code not found: ${serverPath}`));
    console.log(chalk.yellow('\nThis MCP server may not be included in this package version.'));
    process.exit(1);
  }

  // Install MCP SDK dependency in the server directory
  console.log(chalk.cyan('📦 Installing MCP SDK dependency...'));

  const { exec } = await import('child_process');
  const { promisify } = await import('util');
  const execAsync = promisify(exec);

  try {
    await execAsync('npm install', { cwd: serverPath });
    console.log(chalk.green('✅ Dependencies installed\n'));
  } catch (error) {
    console.error(chalk.red(`❌ Failed to install dependencies: ${error.message}`));
    process.exit(1);
  }

  // Load existing MCP configuration
  const config = loadMCPConfig();

  // Check if agent already exists
  if (config.mcpServers[agentId]) {
    console.log(chalk.yellow(`⚠️  Agent "${agentId}" already exists in your MCP configuration.\n`));

    if (!autoConfirm) {
      const readline = await import('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const answer = await new Promise((resolve) => {
        rl.question(chalk.bold('Overwrite? (y/N): '), resolve);
      });
      rl.close();

      if (answer.toLowerCase() !== 'y') {
        console.log(chalk.dim('Cancelled.'));
        process.exit(0);
      }
    }
  }

  // Add server to configuration
  config.mcpServers[agentId] = {
    command: agent.command,
    args: agent.args.map(arg => path.join(__dirname, arg)),
  };

  // Save configuration
  try {
    saveMCPConfig(config);
    console.log(chalk.green(`✅ MCP server "${agentId}" configured successfully!\n`));
  } catch (error) {
    console.error(chalk.red(`❌ Failed to save configuration: ${error.message}`));
    process.exit(1);
  }

  // Show next steps
  console.log(chalk.bold('📋 Next Steps:\n'));
  console.log(chalk.dim('1. Restart Claude Code to load the new MCP server'));
  console.log(chalk.dim('2. The server will provide tools:'));

  if (agentId === 'accessibility-auditor') {
    console.log(chalk.cyan('   - audit_file(file_path)'));
    console.log(chalk.cyan('   - audit_directory(directory_path, recursive)'));
    console.log(chalk.cyan('   - get_wcag_guidance(wcag_criterion)'));
  } else if (agentId === 'widget-tester') {
    console.log(chalk.cyan('   - test_widget(widget_path)'));
    console.log(chalk.cyan('   - test_all_widgets(directory_path)'));
  }

  console.log(chalk.dim('\n3. In Claude Code, just ask to use these tools naturally:'));
  console.log(chalk.dim('   "Audit modules/module-1/index.html for accessibility"'));
  console.log(chalk.dim('   "Test all widgets in modules/module-1/widgets/"\n'));

  console.log(chalk.bold.green('✨ MCP server is ready to use!\n'));
}

async function listAgents() {
  console.log(chalk.bold.green('\n📦 Available MCP Servers\n'));

  Object.entries(MCP_SERVERS).forEach(([id, info]) => {
    console.log(chalk.cyan(`${info.name}`));
    console.log(chalk.dim(`  ID: ${id}`));
    console.log(chalk.dim(`  ${info.description}\n`));
  });

  console.log(chalk.bold('Install:'));
  console.log(chalk.dim('  npx education-ai-agents@latest --create-agent <agent-id>\n'));
}

function showHelp() {
  console.log(chalk.bold.green('\n🤖 Education AI Agents - MCP Server Creator\n'));
  console.log(chalk.bold('USAGE:\n'));
  console.log(chalk.dim('  npx education-ai-agents@latest --create-agent <agent-id>'));
  console.log(chalk.dim('  npx education-ai-agents@latest --list-agents\n'));

  console.log(chalk.bold('OPTIONS:\n'));
  console.log(chalk.dim('  --create-agent <id>  Create and install an MCP server'));
  console.log(chalk.dim('  --list-agents        List all available MCP servers'));
  console.log(chalk.dim('  --yes               Auto-confirm installation\n'));

  listAgents();
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h') || args.length === 0) {
  showHelp();
  process.exit(0);
}

if (args.includes('--list-agents')) {
  listAgents();
  process.exit(0);
}

const createAgentIndex = args.findIndex(arg => arg === '--create-agent');
if (createAgentIndex !== -1) {
  const agentId = args[createAgentIndex + 1];
  const autoConfirm = args.includes('--yes') || args.includes('-y');

  if (!agentId) {
    console.error(chalk.red('❌ Agent ID required\n'));
    showHelp();
    process.exit(1);
  }

  createAgent(agentId, autoConfirm).catch(error => {
    console.error(chalk.red(`\n❌ Error: ${error.message}\n`));
    process.exit(1);
  });
} else {
  showHelp();
}

export { createAgent, listAgents };
