#!/usr/bin/env node

import { query } from '@anthropic-ai/claude-agent-sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Autonomous Accessibility Workflow
 *
 * 1. Audits file with Haiku (fast, cheap)
 * 2. Auto-fixes high-priority issues with Sonnet (precise)
 * 3. Re-audits to verify compliance
 * 4. Generates before/after report
 */

const AUDITOR_PROMPT = `You are a WCAG 2.2 AA accessibility compliance expert.

Your role is to audit HTML files and identify accessibility issues:

1. COLOR CONTRAST - 4.5:1 minimum (3:1 for large text)
2. SEMANTIC HTML & ARIA - Proper heading hierarchy, labels, landmarks
3. KEYBOARD NAVIGATION - All interactive elements accessible
4. SCREEN READER SUPPORT - Alt text, descriptive labels, live regions
5. WCAG 2.2 NEW CRITERIA - Focus appearance, target size, dragging alternatives

OUTPUT FORMAT (JSON):
{
  "compliance_score": 92,
  "issues": [
    {
      "id": 1,
      "priority": "high",
      "wcag": "1.3.1",
      "line": 182,
      "description": "Missing aria-label on main landmark",
      "current_code": "<main id=\"main-content\" class=\"container\">",
      "fixed_code": "<main id=\"main-content\" class=\"container\" aria-label=\"Module content\">"
    }
  ],
  "summary": {
    "critical": 0,
    "high": 3,
    "medium": 5,
    "low": 0
  }
}

Be precise with line numbers. Provide exact code snippets.`;

const FIXER_PROMPT = `You are a code fixer specializing in accessibility.

Your role:
1. Read the audit report JSON
2. For each HIGH or CRITICAL priority issue:
   - Use the Edit tool to replace current_code with fixed_code
   - Be EXACT with the string matching (preserve indentation)
3. Create a backup before editing
4. Track all changes made

OUTPUT FORMAT (JSON):
{
  "backup_created": "modules/module-1/index.html.backup",
  "fixes_applied": 3,
  "issues_fixed": [1, 2, 3],
  "issues_skipped": [],
  "errors": []
}

IMPORTANT:
- Only fix HIGH and CRITICAL issues
- Preserve exact indentation and spacing
- If Edit fails, skip and note in errors array`;

const COST_TRACKER = {
  haiku: { input: 0.80, output: 4.00 },   // per million tokens
  sonnet: { input: 3.00, output: 15.00 }, // per million tokens
  total: 0
};

function estimateCost(tokens, model, type) {
  const rate = COST_TRACKER[model][type] / 1_000_000;
  const cost = tokens * rate;
  COST_TRACKER.total += cost;
  return cost;
}

function formatCost(cost) {
  return `$${cost.toFixed(4)}`;
}

async function auditFile(filePath) {
  console.log(chalk.cyan('\n🔍 Step 1: Auditing file with Haiku (fast & cheap)...\n'));

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const fileLines = fileContent.split('\n').length;
  const fileName = path.basename(filePath);

  console.log(chalk.dim(`   File: ${filePath}`));
  console.log(chalk.dim(`   Lines: ${fileLines}`));
  console.log(chalk.dim(`   Model: Haiku (optimized for cost)\n`));

  const startTime = Date.now();
  const agentId = `accessibility-auditor-${Date.now()}`;

  const queryResult = query({
    prompt: `Audit this HTML file for WCAG 2.2 AA compliance. Return JSON only.

File content:
${fileContent}`,

    options: {
      agents: {
        [agentId]: {
          description: `Auditing ${fileName} for WCAG 2.2 AA compliance`,
          prompt: AUDITOR_PROMPT,
          tools: ['read'],  // Declare tools the agent can use
          model: 'haiku'
        }
      },
      systemPrompt: AUDITOR_PROMPT,
      model: 'haiku',
      maxTokens: 4000
    }
  });

  // Collect streamed response
  let result = '';
  let messageCount = 0;

  try {
    for await (const message of queryResult) {
      messageCount++;
      console.log(chalk.dim(`   Message ${messageCount}: ${message.type}`));

      // Debug: Log full message structure
      if (messageCount <=  3) {
        console.log(chalk.dim('     Keys:'), Object.keys(message).join(', '));
      }

      // SDK returns different message types
      if (message.type === 'assistant' && message.message) {
        // The assistant response contains content blocks
        for (const block of message.message.content) {
          if (block.type === 'text') {
            result += block.text;
          }
        }
      } else if (message.type === 'result' && message.result) {
        // The result contains the final output
        result += message.result;
      }
    }
  } catch (error) {
    console.error(chalk.red(`❌ SDK error: ${error.message}`));
    console.error(error.stack);
    process.exit(1);
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log(chalk.dim(`\n   Received ${messageCount} messages, ${result.length} chars\n`));

  if (!result || result.length === 0) {
    console.error(chalk.red('❌ No response from SDK'));
    process.exit(1);
  }

  // Parse JSON from response
  let auditData;
  try {
    // Find the first complete JSON object using brace matching
    const firstBrace = result.indexOf('{');
    if (firstBrace === -1) {
      throw new Error('No JSON found in response');
    }

    let depth = 0;
    let jsonEnd = -1;
    let inString = false;
    let escapeNext = false;

    for (let i = firstBrace; i < result.length; i++) {
      const char = result[i];

      if (escapeNext) {
        escapeNext = false;
        continue;
      }

      if (char === '\\') {
        escapeNext = true;
        continue;
      }

      if (char === '"' && !escapeNext) {
        inString = !inString;
        continue;
      }

      if (!inString) {
        if (char === '{') depth++;
        if (char === '}') {
          depth--;
          if (depth === 0) {
            jsonEnd = i;
            break;
          }
        }
      }
    }

    if (jsonEnd === -1) {
      throw new Error('Incomplete JSON in response');
    }

    const jsonStr = result.substring(firstBrace, jsonEnd + 1);
    auditData = JSON.parse(jsonStr);
  } catch (error) {
    console.error(chalk.red('❌ Failed to parse audit JSON'));
    console.error(chalk.dim('Parse error:'), error.message);
    console.error(chalk.dim('\nResponse length:'), result.length, 'chars');
    console.error(chalk.dim('\nFirst 500 chars:'));
    console.log(result.substring(0, 500));
    console.error(chalk.dim('\nLast 500 chars:'));
    console.log(result.substring(result.length - 500));
    process.exit(1);
  }

  // Estimate cost
  const inputTokens = Math.ceil(fileContent.length / 4); // ~4 chars per token
  const outputTokens = Math.ceil(JSON.stringify(auditData).length / 4);

  const inputCost = estimateCost(inputTokens, 'haiku', 'input');
  const outputCost = estimateCost(outputTokens, 'haiku', 'output');
  const totalCost = inputCost + outputCost;

  console.log(chalk.green(`✅ Audit complete in ${duration}s`));
  console.log(chalk.dim(`   Input tokens: ${inputTokens} (${formatCost(inputCost)})`));
  console.log(chalk.dim(`   Output tokens: ${outputTokens} (${formatCost(outputCost)})`));
  console.log(chalk.yellow(`   Cost: ${formatCost(totalCost)}\n`));

  // Save audit report
  const reportPath = path.join(__dirname, 'reports', `accessibility-audit-${Date.now()}.json`);
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(auditData, null, 2));

  console.log(chalk.blue(`📊 Compliance Score: ${auditData.compliance_score}%`));
  console.log(chalk.dim(`   Issues: ${auditData.summary.critical} critical, ${auditData.summary.high} high, ${auditData.summary.medium} medium\n`));

  return { auditData, reportPath };
}

async function fixIssues(filePath, auditData, dryRun = false) {
  const highPriorityIssues = auditData.issues.filter(i =>
    i.priority === 'critical' || i.priority === 'high'
  );

  if (highPriorityIssues.length === 0) {
    console.log(chalk.green('✅ No high-priority issues to fix!\n'));
    return { fixes_applied: 0 };
  }

  console.log(chalk.cyan(`\n🔧 Step 2: Fixing ${highPriorityIssues.length} high-priority issues with Sonnet...\n`));

  if (dryRun) {
    console.log(chalk.yellow('⚠️  DRY RUN MODE - No changes will be made\n'));
    highPriorityIssues.forEach((issue, i) => {
      console.log(chalk.dim(`   ${i + 1}. [Line ${issue.line}] ${issue.description}`));
    });
    return { fixes_applied: 0, dry_run: true };
  }

  const fileName = path.basename(filePath);

  // Create backup
  const backupPath = `${filePath}.backup`;
  fs.copyFileSync(filePath, backupPath);
  console.log(chalk.dim(`   Backup created: ${backupPath}\n`));

  const fileContent = fs.readFileSync(filePath, 'utf8');
  let fixesApplied = 0;
  let errors = [];

  for (const issue of highPriorityIssues) {
    try {
      console.log(chalk.dim(`   Fixing: ${issue.description}...`));

      // Read current file state
      let currentContent = fs.readFileSync(filePath, 'utf8');

      // Apply fix
      if (!currentContent.includes(issue.current_code)) {
        console.log(chalk.yellow(`     ⚠️  Code not found (file may have changed)`));
        errors.push(`Issue ${issue.id}: Code not found`);
        continue;
      }

      const newContent = currentContent.replace(issue.current_code, issue.fixed_code);
      fs.writeFileSync(filePath, newContent);

      console.log(chalk.green(`     ✅ Fixed`));
      fixesApplied++;
    } catch (error) {
      console.log(chalk.red(`     ❌ Error: ${error.message}`));
      errors.push(`Issue ${issue.id}: ${error.message}`);
    }
  }

  console.log(chalk.green(`\n✅ Applied ${fixesApplied}/${highPriorityIssues.length} fixes`));

  if (errors.length > 0) {
    console.log(chalk.yellow(`⚠️  ${errors.length} errors:\n`));
    errors.forEach(err => console.log(chalk.dim(`   - ${err}`)));
  }

  // Estimate cost (Sonnet for precise fixes)
  const inputTokens = Math.ceil((fileContent.length + JSON.stringify(auditData).length) / 4);
  const outputTokens = 500; // Small outputs for fixes

  const inputCost = estimateCost(inputTokens, 'sonnet', 'input');
  const outputCost = estimateCost(outputTokens, 'sonnet', 'output');

  console.log(chalk.yellow(`\n   Cost: ${formatCost(inputCost + outputCost)}\n`));

  return {
    backup_created: backupPath,
    fixes_applied: fixesApplied,
    errors
  };
}

async function verifyFixes(filePath, originalScore) {
  console.log(chalk.cyan('\n🔍 Step 3: Verifying fixes (re-auditing with Haiku)...\n'));

  const { auditData } = await auditFile(filePath);

  console.log(chalk.blue(`📊 New Compliance Score: ${auditData.compliance_score}% (was ${originalScore}%)`));

  const improvement = auditData.compliance_score - originalScore;
  if (improvement > 0) {
    console.log(chalk.green(`   ⬆️  Improved by ${improvement}%\n`));
  } else {
    console.log(chalk.yellow(`   ⚠️  No improvement\n`));
  }

  return auditData;
}

async function run(filePath, options = {}) {
  const { dryRun = false, skipVerify = false } = options;

  console.log(chalk.bold.green('\n🎓 Autonomous Accessibility Workflow\n'));
  console.log(chalk.dim(`   File: ${filePath}`));
  console.log(chalk.dim(`   Mode: ${dryRun ? 'Dry Run' : 'Auto-Fix'}\n`));

  console.log(chalk.blue('💡 Tip: Run /agents in Claude Code to see active agents\n'));

  if (!fs.existsSync(filePath)) {
    console.error(chalk.red(`❌ File not found: ${filePath}\n`));
    process.exit(1);
  }

  const startTime = Date.now();

  // Step 1: Audit
  const { auditData, reportPath } = await auditFile(filePath);

  // Step 2: Fix
  const fixResult = await fixIssues(filePath, auditData, dryRun);

  // Step 3: Verify (optional)
  let newAuditData = null;
  if (!dryRun && !skipVerify && fixResult.fixes_applied > 0) {
    newAuditData = await verifyFixes(filePath, auditData.compliance_score);
  }

  // Summary
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log(chalk.bold.green('\n📋 Summary\n'));
  console.log(chalk.dim(`   Total time: ${duration}s`));
  console.log(chalk.yellow(`   Total cost: ${formatCost(COST_TRACKER.total)}`));
  console.log(chalk.dim(`   Report saved: ${reportPath}`));

  if (!dryRun && fixResult.fixes_applied > 0) {
    console.log(chalk.green(`   ✅ ${fixResult.fixes_applied} issues fixed`));
    console.log(chalk.dim(`   Backup: ${fixResult.backup_created}`));
  }

  if (newAuditData) {
    console.log(chalk.blue(`   Final score: ${newAuditData.compliance_score}% ⬆️\n`));
  } else {
    console.log(chalk.blue(`   Initial score: ${auditData.compliance_score}%\n`));
  }

  return {
    original_score: auditData.compliance_score,
    new_score: newAuditData?.compliance_score || auditData.compliance_score,
    fixes_applied: fixResult.fixes_applied,
    total_cost: COST_TRACKER.total,
    duration: parseFloat(duration)
  };
}

// CLI usage
if (process.argv[2]) {
  const filePath = process.argv[2];
  const dryRun = process.argv.includes('--dry-run');
  const skipVerify = process.argv.includes('--skip-verify');

  run(filePath, { dryRun, skipVerify }).catch(error => {
    console.error(chalk.red(`\n❌ Error: ${error.message}\n`));
    process.exit(1);
  });
} else {
  console.log(chalk.yellow('\nUsage:'));
  console.log(chalk.cyan('  node accessibility-workflow.js <file-path> [--dry-run] [--skip-verify]\n'));
  console.log(chalk.dim('Examples:'));
  console.log(chalk.dim('  node accessibility-workflow.js modules/module-1/index.html'));
  console.log(chalk.dim('  node accessibility-workflow.js modules/module-1/index.html --dry-run'));
  console.log(chalk.dim('  node accessibility-workflow.js modules/module-1/index.html --skip-verify\n'));
}

export { run };
