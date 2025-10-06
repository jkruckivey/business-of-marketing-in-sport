# Autonomous Accessibility Workflow

Fully automated WCAG 2.2 AA compliance auditing and fixing powered by Claude Agent SDK.

## What It Does

1. **Audits** file with Haiku (fast, cheap: ~$0.01)
2. **Auto-fixes** high-priority issues with Sonnet (precise: ~$0.08)
3. **Re-audits** to verify compliance (cost: ~$0.01)
4. **Reports** before/after scores and total cost

**Total cost per file: ~$0.10** (vs $0 with templates but requires manual work)

---

## Installation

Already installed! The workflow uses the Claude Agent SDK dependency.

---

## Usage

### Basic (Auto-fix mode)
```bash
node accessibility-workflow.js modules/module-1/index.html
```

### Dry Run (Audit only, no changes)
```bash
node accessibility-workflow.js modules/module-1/index.html --dry-run
```

### Skip Verification (Faster, cheaper)
```bash
node accessibility-workflow.js modules/module-1/index.html --skip-verify
```

---

## Example Output

```
🎓 Autonomous Accessibility Workflow

   File: modules/module-1/index.html
   Mode: Auto-Fix

🔍 Step 1: Auditing file with Haiku (fast & cheap)...

   File: modules/module-1/index.html
   Lines: 463
   Model: Haiku (optimized for cost)

✅ Audit complete in 2.3s
   Input tokens: 2100 ($0.0017)
   Output tokens: 800 ($0.0032)
   Cost: $0.0049

📊 Compliance Score: 92%
   Issues: 0 critical, 3 high, 5 medium

🔧 Step 2: Fixing 3 high-priority issues with Sonnet...

   Backup created: modules/module-1/index.html.backup

   Fixing: Missing aria-label on main landmark...
     ✅ Fixed
   Fixing: Footer missing role attribute...
     ✅ Fixed
   Fixing: Engagement options missing group label...
     ✅ Fixed

✅ Applied 3/3 fixes

   Cost: $0.0850

🔍 Step 3: Verifying fixes (re-auditing with Haiku)...

   File: modules/module-1/index.html
   Lines: 463
   Model: Haiku (optimized for cost)

✅ Audit complete in 2.1s
   Input tokens: 2100 ($0.0017)
   Output tokens: 600 ($0.0024)
   Cost: $0.0041

📊 New Compliance Score: 95% (was 92%)
   ⬆️  Improved by 3%

📋 Summary

   Total time: 6.5s
   Total cost: $0.0940
   Report saved: .agents/reports/accessibility-audit-1728234567890.json
   ✅ 3 issues fixed
   Backup: modules/module-1/index.html.backup
   Final score: 95% ⬆️
```

---

## Cost Breakdown

| Step | Model | Typical Cost |
|------|-------|--------------|
| Initial audit | Haiku | $0.005 |
| Auto-fix | Sonnet | $0.085 |
| Verification | Haiku | $0.004 |
| **TOTAL** | | **~$0.09** |

**Compare to manual:**
- Template audit (free) + 20 min manual fixes
- SDK workflow: $0.09 + 0 min (fully automated)

**Break-even:** If you value your time at >$0.27/hour, SDK is cheaper 😄

---

## Features

### ✅ Cost Optimizations

1. **Haiku for audits** (5x cheaper than Sonnet)
2. **Sonnet only for fixes** (precision where it matters)
3. **Cost tracking** (shows exact $ spent)
4. **Skip verification** (saves ~$0.004 if you trust the fixes)

### ✅ Safety Features

1. **Automatic backup** (file.html.backup before any edits)
2. **Dry run mode** (see what would change without changing)
3. **Error handling** (skips fixes that fail, reports errors)
4. **Exact string matching** (preserves indentation)

### ✅ Reporting

1. **JSON audit reports** (saved to .agents/reports/)
2. **Before/after scores** (track improvement)
3. **Cost reporting** (know exactly what you spent)
4. **Time tracking** (see total duration)

---

## Integration Ideas

### GitHub Actions (CI/CD)
```yaml
- name: Accessibility Check
  run: |
    node accessibility-workflow.js modules/module-1/index.html --skip-verify
    # Fails if score < 90%
```

### NPM Script
```json
{
  "scripts": {
    "audit:a11y": "node .agents/accessibility-workflow.js",
    "audit:all": "for file in modules/*/index.html; do node .agents/accessibility-workflow.js $file; done"
  }
}
```

### Pre-commit Hook
```bash
#!/bin/sh
# .git/hooks/pre-commit
node .agents/accessibility-workflow.js modules/module-1/index.html --dry-run
```

---

## Customization

### Change Models
Edit `accessibility-workflow.js`:

```javascript
// Use Sonnet for audits (more accurate, more expensive)
const result = await query({
  options: {
    model: 'sonnet'  // was 'haiku'
  }
});
```

### Adjust Fix Priority
```javascript
// Fix ALL issues (not just high-priority)
const issuesToFix = auditData.issues.filter(i =>
  i.priority === 'critical' ||
  i.priority === 'high' ||
  i.priority === 'medium'  // Added
);
```

### Add More Verification
```javascript
// Run widget tests after fixes
import { runWidgetTest } from './widget-tester.js';
await runWidgetTest(filePath);
```

---

## Troubleshooting

### "Module not found: @anthropic-ai/claude-agent-sdk"

The Agent SDK might not be installed yet. Install it:

```bash
npm install @anthropic-ai/claude-agent-sdk
```

### "ANTHROPIC_API_KEY not found"

Add your API key to `.env`:

```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### "JSON parse error"

The audit response wasn't valid JSON. Check:
1. Is Haiku returning JSON? (Try Sonnet for more reliable JSON)
2. Check console output for actual response

### Fixes not applying

Check that:
1. Backup was created (confirms file access)
2. `current_code` exactly matches file content (including whitespace)
3. No other process has file locked

---

## Next Steps

### Build More Workflows

Use this as a template for:
- `content-review-workflow.js` - Auto-fix pedagogical issues
- `widget-test-workflow.js` - Test all widgets + auto-fix bugs
- `full-qa-workflow.js` - Run all agents in sequence

### Add Monitoring

```javascript
// Track costs over time
import { trackCost } from './cost-tracker.js';
await trackCost('accessibility', COST_TRACKER.total);
```

### Create Dashboard

```javascript
// Generate weekly QA report
import { generateDashboard } from './dashboard.js';
await generateDashboard('./reports/');
```

---

## Comparison Table

| Feature | Template (Claude Code) | SDK Workflow |
|---------|----------------------|--------------|
| **Cost** | $0 | ~$0.09/file |
| **Time** | 5 min audit + 20 min fixes | 6s total (autonomous) |
| **Automation** | Manual | Fully automated |
| **CI/CD** | ❌ No | ✅ Yes |
| **Backup** | Manual | ✅ Automatic |
| **Verification** | Manual | ✅ Automatic re-audit |
| **Cost tracking** | N/A | ✅ Built-in |
| **Best for** | Learning, exploration | Production, batch QA |

---

## Contributing

Ideas to improve this workflow:

1. **Multi-file support** - Batch process entire directories
2. **Git integration** - Auto-commit fixes with descriptive messages
3. **Report dashboard** - HTML view of all audit reports
4. **Cost budgeting** - Stop if monthly spend exceeds $X
5. **Issue prioritization** - ML-based ranking of fix urgency

---

**Ready to try it?**

```bash
node accessibility-workflow.js modules/module-1/index.html --dry-run
```

See what it would fix, then run without `--dry-run` to apply fixes! 🚀
