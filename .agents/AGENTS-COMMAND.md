# Using the /agents Command with Education AI Agents

## What is `/agents`?

The `/agents` slash command in Claude Code shows **currently running** Agent SDK workflows in real-time.

---

## How It Works

When you run the accessibility workflow:

```bash
node accessibility-workflow.js modules/module-1/index.html
```

**In Claude Code, type:**
```
/agents
```

**You'll see:**
```
accessibility-auditor-1728234567890 (running)
├─ Description: Auditing index.html for WCAG 2.2 AA compliance
├─ Model: Haiku
├─ Tools: read
└─ Status: Processing file content...
```

---

## Agent Lifecycle

### 1. Starting
```
/agents
> accessibility-auditor-1728234567890 (starting)
  Description: Auditing index.html for WCAG 2.2 AA compliance
```

### 2. Running
```
/agents
> accessibility-auditor-1728234567890 (running)
  Description: Auditing index.html for WCAG 2.2 AA compliance
  Progress: Analyzing semantic HTML structure...
```

### 3. Completed
```
/agents
> accessibility-auditor-1728234567890 (completed)
  Description: Auditing index.html for WCAG 2.2 AA compliance
  Result: 92% compliance, 3 high-priority issues found
  Duration: 2.3s
```

---

## Multi-Agent Workflows

When the workflow runs multiple agents (audit → fix → verify):

```
/agents

accessibility-auditor-1728234567890 (completed)
└─ 92% compliance, 8 issues found

code-fixer-1728234568123 (running)
└─ Fixing 3 high-priority issues...

verifier-1728234569456 (queued)
└─ Waiting for code-fixer to complete
```

---

## What You'll See

### During Audit Phase
```
/agents

accessibility-auditor-1728234567890 (running)
├─ File: modules/module-1/index.html
├─ Lines: 463
├─ Model: Haiku (cost-optimized)
└─ Checking: Color contrast, ARIA labels, keyboard nav...
```

### During Fix Phase
```
/agents

accessibility-auditor-1728234567890 (completed)
└─ Found 3 high-priority issues

code-fixer-1728234568123 (running)
├─ Issue 1/3: Adding aria-label to main landmark
├─ Issue 2/3: Adding role to footer
└─ Issue 3/3: Adding group label to engagement options
```

### After Completion
```
/agents

No active agents
Recent:
  accessibility-auditor-1728234567890 (2m ago) - 95% compliance ✓
```

---

## Monitoring Tips

### Check Agent Status
```
/agents
```

### See Agent Details
Click on an agent name in Claude Code to see:
- Full description
- Tools being used
- Current progress
- Cost estimates
- Output so far

### Cancel Running Agent
In Claude Code UI, click the agent and select "Cancel"

Or programmatically:
```javascript
// Add to accessibility-workflow.js
process.on('SIGINT', () => {
  console.log('\n❌ Workflow cancelled by user');
  process.exit(0);
});
```

---

## Differences: Templates vs SDK Agents

| Feature | Templates | SDK Agents |
|---------|-----------|------------|
| **Visibility** | In conversation context | In `/agents` command |
| **Execution** | Runs in chat | Separate process |
| **Progress** | Not trackable | Real-time in `/agents` |
| **Cancellation** | Stop conversation | Cancel specific agent |
| **Tools** | Limited to conversation | Full tool access |
| **Multi-agent** | Manual orchestration | Automatic coordination |

---

## Example Workflow Output

### Terminal (where you ran the command)
```bash
$ node accessibility-workflow.js modules/module-1/index.html

🎓 Autonomous Accessibility Workflow

   File: modules/module-1/index.html
   Mode: Auto-Fix

💡 Tip: Run /agents in Claude Code to see active agents

🔍 Step 1: Auditing file with Haiku (fast & cheap)...

   File: modules/module-1/index.html
   Lines: 463
   Model: Haiku (optimized for cost)

   Message 1: system
   Message 2: assistant
   Message 3: result

✅ Audit complete in 2.3s
📊 Compliance Score: 92%
   Issues: 0 critical, 3 high, 5 medium

🔧 Step 2: Fixing 3 high-priority issues...
✅ Applied 3/3 fixes

📋 Summary
   Total cost: $0.0940
   Final score: 95% ⬆️
```

### Claude Code `/agents` (at the same time)
```
accessibility-auditor-1728234567890 (completed)
├─ WCAG 2.2 AA Compliance Audit
├─ Model: Haiku
├─ Duration: 2.3s
├─ Cost: $0.0049
└─ Result: 92% compliance, 3 high-priority issues

Last updated: 2 seconds ago
```

---

## Advanced: Agent Groups

You can group related agents:

```javascript
const result = await query({
  prompt: "Full QA pipeline for modules/module-1/",

  options: {
    agents: {
      'qa-accessibility': {
        description: 'WCAG 2.2 AA audit',
        group: 'qa-pipeline',  // Group identifier
        // ...
      },
      'qa-content': {
        description: 'Content quality review',
        group: 'qa-pipeline',
        // ...
      },
      'qa-widgets': {
        description: 'Widget testing',
        group: 'qa-pipeline',
        // ...
      }
    }
  }
});
```

**In `/agents`:**
```
Group: qa-pipeline
├─ qa-accessibility (completed) - 95% compliance ✓
├─ qa-content (completed) - 3 minor issues
└─ qa-widgets (running) - Testing widget 2/5...
```

---

## Troubleshooting

### "No agents found"

**Reason**: Workflow completed before you ran `/agents`

**Solution**: Agents only show while running. For completed agents, check the terminal output or saved reports.

### "Agent not registered"

**Reason**: The `agents` option wasn't configured in `query()`

**Solution**: Make sure your workflow includes:
```javascript
options: {
  agents: {
    'agent-name': { /* config */ }
  }
}
```

### "Can't see agent progress"

**Reason**: Agent is running too fast

**Solution**: Run on a larger file or add progress logging:
```javascript
console.log('Step 1/5: Reading file...');
console.log('Step 2/5: Analyzing structure...');
```

---

## What's Next?

### Monitor Multiple Workflows
Run multiple workflows in parallel:

```bash
# Terminal 1
node accessibility-workflow.js modules/module-1/index.html

# Terminal 2
node widget-test-workflow.js modules/module-1/widgets/

# Terminal 3
node content-review-workflow.js modules/module-2/
```

**In `/agents`:**
```
accessibility-auditor-1728234567890 (running)
widget-tester-1728234568123 (running)
content-reviewer-1728234569456 (running)
```

### Create Dashboard
Build a monitoring dashboard that queries `/agents` programmatically and shows:
- Active workflows
- Completion percentage
- Total costs
- Issues found

---

## Summary

✅ **Templates** = Static prompts in conversation
✅ **SDK Agents** = Active processes in `/agents`

To see your agents in `/agents`:
1. Run `node accessibility-workflow.js [file]`
2. In Claude Code, type `/agents`
3. See real-time progress!

**The updated `accessibility-workflow.js` now properly registers agents** so they'll appear in `/agents` when running. 🎉
