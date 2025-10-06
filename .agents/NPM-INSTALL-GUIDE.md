# NPM Installation Guide - Ivey Education AI Agents

## For Coworkers: How to Install and Use

### Option 1: Quick Install (Recommended for First-Time Users)

Just run this command from any course project directory:

```bash
npx @ivey-edtech/ai-agents@latest
```

This will:
1. Download the agents temporarily
2. Run the interactive launcher
3. Let you choose which agent to run

**No permanent installation required!** Perfect for trying it out.

---

### Option 2: Global Install (For Regular Use)

If you'll use the agents frequently, install them globally:

```bash
npm install -g @ivey-edtech/ai-agents
```

Then you can run agents anytime with:

```bash
ivey-agents                  # Interactive menu
ivey-agents content-review modules/module-1/index.html
ivey-agents accessibility modules/module-1/widgets/revenue-builder.html
```

---

### Option 3: Project Install (For Course Development Teams)

If multiple people work on the same course project, add agents to your project:

```bash
cd /path/to/your-course-project
npm install --save-dev @ivey-edtech/ai-agents
```

Then anyone on the team can run:

```bash
npx ivey-agents
```

---

## Setup: Adding Your API Key

### Step 1: Get an Anthropic API Key

1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Go to "API Keys" → "Create Key"
4. Copy your key (starts with `sk-ant-...`)

### Step 2: Create .env File

In the `.agents` directory (or wherever you installed), create a `.env` file:

```bash
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

**Security Note:** Never commit `.env` files to Git. They're automatically ignored.

---

## Usage Examples

### Quick Content Review (5-15 seconds)
```bash
npx @ivey-edtech/ai-agents content-review modules/module-1/index.html
```

### Accessibility Audit (2-5 minutes)
```bash
npx @ivey-edtech/ai-agents accessibility modules/module-1/widgets/fan-engagement.html
```

### Generate Assessment Rubric (3-5 minutes)
```bash
npx @ivey-edtech/ai-agents rubric modules/module-1/outline.html
```

### Test Interactive Widget (2-5 minutes)
```bash
npx @ivey-edtech/ai-agents widget-test modules/module-1/widgets/revenue-builder.html
```

### Full Student Journey Simulation (5-8 minutes)
```bash
npx @ivey-edtech/ai-agents student-journey
```

### Interactive Menu (Choose from All Agents)
```bash
npx @ivey-edtech/ai-agents
```

---

## All Available Commands

| Command | Description | Time | Model |
|---------|-------------|------|-------|
| `content-review` | Quick quality check | 5-15s | Haiku |
| `accessibility` | WCAG 2.2 AA audit | 2-5min | Sonnet |
| `widget-test` | Simulate 3 MBA personas | 2-5min | Sonnet |
| `branding` | Ivey brand compliance | 2-5min | Sonnet |
| `rubric` | Generate QM rubric | 3-5min | Sonnet |
| `industry-update` | Check for outdated content | 2-5min | Sonnet |
| `consistency` | Cross-module analysis | 5-8min | Opus |
| `student-journey` | Full 5-week simulation | 5-8min | Opus |
| `udl` | Generate multimodal content | 3-5min | Sonnet |

---

## Where Are Reports Saved?

All agents generate markdown reports in:

```
.agents/reports/
```

Example: `.agents/reports/content-review-2024-10-06-143022.md`

---

## Using with Claude Code (Alternative to NPM)

If you have Claude Code installed, you can also ask Claude directly:

```
Run the accessibility auditor on modules/module-1/index.html
```

See **TEAM-GUIDE.md** for detailed Claude Code instructions.

---

## Troubleshooting

### "Command not found: ivey-agents"

**If using npx:**
```bash
npx @ivey-edtech/ai-agents --help
```

**If globally installed:**
```bash
npm install -g @ivey-edtech/ai-agents
```

### "Missing API key"

Create a `.env` file with:
```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### "Module not found"

Make sure you're running from a course project directory with a `modules/` folder.

### "Permission denied"

On Mac/Linux, you may need to make CLI executable:
```bash
chmod +x node_modules/@ivey-edtech/ai-agents/cli.js
```

---

## Cost Estimates (API Usage)

| Agent | Typical Cost | Model |
|-------|--------------|-------|
| Content Review (Fast) | $0.01-0.03 | Haiku |
| Accessibility | $0.05-0.15 | Sonnet |
| Widget Test | $0.05-0.15 | Sonnet |
| Branding | $0.05-0.15 | Sonnet |
| Rubric Generator | $0.10-0.20 | Sonnet |
| Industry Update | $0.05-0.15 | Sonnet |
| Consistency Checker | $0.50-1.00 | Opus |
| Student Journey | $0.50-1.00 | Opus |
| UDL Generator | $0.10-0.20 | Sonnet |

**Budget Planning:** For a full course (5 modules), expect $5-10 in API costs for comprehensive QA.

---

## What's Next?

### Check Out Documentation

- **README.md** - Full agent capabilities and technical details
- **QUICK-REFERENCE.md** - One-page cheat sheet
- **TEAM-GUIDE.md** - Using with Claude Code
- **LAUNCHER-GUIDE.md** - Interactive launcher menu

### Join the Project

- GitHub: https://github.com/jameskruck/ivey-education-agents
- Report Issues: https://github.com/jameskruck/ivey-education-agents/issues
- Contribute: Fork and submit pull requests!

---

## For Advanced Users

### Running Agents Programmatically

```javascript
import { query } from '@anthropic-ai/claude-agent-sdk';
import { auditAccessibility } from '@ivey-edtech/ai-agents';

const result = await auditAccessibility('./modules/module-1/index.html');
console.log(result);
```

### Custom Agent Development

See agent source files (`.agents/*.js`) for examples of building your own educational AI agents.

---

**Questions?** Open an issue on GitHub or ask in the Ivey EdTech Lab Slack.
