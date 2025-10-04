# AI Agents for Business of Marketing in Sport

Two-track agent system for course quality assurance: **Fast API agents** for real-time checks and **SDK agents** for deep analysis.

---

## 🚀 Quick Start

### Setup
1. Create `.env` file in `.agents/` folder:
   ```bash
   ANTHROPIC_API_KEY=your-key-here
   ```

2. Dependencies already installed in `node_modules/`

---

## 📊 Agent Types

### Track 1: Fast Direct API Agents ⚡
**Use for:** Real-time feedback, single file checks, quick validation

**Speed:** 5-15 seconds
**Depth:** Focused analysis
**Output:** Streamed to console

**Available:**
- `sports-content-reviewer-fast.js` - Quick content quality check

**Usage:**
```bash
cd .agents
node sports-content-reviewer-fast.js "../modules/module-1/index.html"
```

**When to use:**
- ✅ Checking a single file you just edited
- ✅ Quick validation before committing
- ✅ Real-time development feedback
- ✅ Spot-checking specific issues

---

### Track 2: SDK Agents (Deep Analysis) 🔬
**Use for:** Comprehensive audits, cross-file analysis, overnight batch processing

**Speed:** 2-5 minutes per file
**Depth:** Thorough iterative review with verification
**Output:** Detailed markdown reports

**Available:**
1. **sports-content-reviewer.js** - Comprehensive pedagogical review
2. **accessibility-auditor.js** - Full WCAG 2.1 AA compliance audit
3. **branding-checker.js** - Ivey design system validation
4. **canvas-lms-validator.js** - LMS integration compatibility
5. **widget-tester.js** - Interactive functionality testing

**Usage:**
```bash
cd .agents
node sports-content-reviewer.js "../modules/module-1/index.html"
# Wait 2-5 minutes for thorough analysis
```

**When to use:**
- ✅ Full module review before release
- ✅ Pre-deployment quality gate
- ✅ Comprehensive accessibility audit
- ✅ Cross-module alignment checks
- ✅ Overnight batch processing

---

## 🔄 File Watcher (Automatic)

Monitors files and triggers SDK agents automatically when changes are detected.

**Start watcher:**
```bash
cd .agents
node watch.js
```

**What it watches:**
- `modules/**/*.html` → Content review
- `modules/**/widgets/*.html` → Accessibility, Widget testing, Canvas validation
- `assets/**/*.css` → Branding check

**Debounce:** 3 seconds (waits 3s after last save before running)

**Keep running in background** - agents run automatically when you save files!

---

## 📋 Agent Capabilities

### Sports Content Reviewer (Both Versions)

**What it checks:**
1. **Learning Outcomes** - Measurable verbs (Analyze, Evaluate, Design - NO "Understand")
2. **Sports Marketing Accuracy** - 2024-25 context, current industry terminology
3. **UDL Implementation** - Multiple means of representation/engagement/expression
4. **QM Standards** - Clear outcomes, aligned activities, WCAG AA accessibility
5. **MBA Rigor** - Strategic thinking, executive-level deliverables
6. **Anchor Project** - Clear milestone integration across weeks
7. **Pedagogical Effectiveness** - Scaffolding, real examples, active learning

**Fast version output:**
- Overall Score (0-100)
- Key Strengths (2-3 bullets)
- Critical Issues (3-5 bullets)
- Priority Fixes (specific examples)

**SDK version output:**
- Comprehensive markdown report (`content-review-report.md`)
- Detailed analysis of all 7 criteria
- Before/after code examples
- Priority-ranked recommendations

---

### Accessibility Auditor

**What it checks:**
- Color contrast ratios (4.5:1 text, 3:1 UI)
- ARIA labels and semantic HTML
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Ivey color compliance

**Output:** `accessibility-report.md`

---

### Branding Checker

**What it checks:**
- Ivey official colors (#034638 green, #582C83 purple, #c5b783 gold)
- Figtree font family usage
- Spacing system (4px base)
- Responsive breakpoints
- Component styling standards

**Output:** `branding-report.md`

---

### Canvas LMS Validator

**What it checks:**
- Iframe-safe JavaScript
- Canvas security model compliance
- AMBA template standards
- HTTPS resources only
- Mobile responsiveness in Canvas
- LocalStorage safety

**Output:** `canvas-validation-report.md`

---

### Widget Tester

**What it checks:**
- Button/control functionality
- Calculation accuracy (ROI, percentages)
- localStorage persistence
- Export functionality
- Form validation
- Edge case handling

**Output:** `widget-test-report.md`

---

## 🎯 Recommended Workflows

### Daily Development (Fast Track)
```bash
# Terminal 1: Make changes to files
code modules/module-1/index.html

# Terminal 2: Quick validation
cd .agents
node sports-content-reviewer-fast.js "../modules/module-1/index.html"
# Results in 5-15 seconds
```

---

### Pre-Commit Quality Check (SDK Track)
```bash
cd .agents

# Run specific checks
node accessibility-auditor.js "../modules/module-1/widgets/revenue-empire-builder.html"
node branding-checker.js "../modules/module-1"

# Review generated reports
cat accessibility-report.md
```

---

### Before Module Launch (Full Audit)
```bash
cd .agents

# Content review
node sports-content-reviewer.js "../modules/module-1/index.html"

# All widgets in module
for widget in ../modules/module-1/widgets/*.html; do
  node accessibility-auditor.js "$widget"
  node canvas-lms-validator.js "$widget"
  node widget-tester.js "$widget"
done

# Check all reports
ls -lh *-report.md
```

---

### Background Monitoring (Watcher)
```bash
# Terminal 1: Start watcher
cd .agents
node watch.js
# Leave running

# Terminal 2: Work on files
# Agents run automatically 3s after you save!
```

---

## 📁 File Structure

```
.agents/
├── README.md (this file)
├── .env (your API key - DO NOT commit)
├── .env.example (template)
├── package.json (dependencies)
│
├── Fast API Agents (5-15 seconds)
│   └── sports-content-reviewer-fast.js
│
├── SDK Agents (2-5 minutes, thorough)
│   ├── sports-content-reviewer.js
│   ├── accessibility-auditor.js
│   ├── branding-checker.js
│   ├── canvas-lms-validator.js
│   └── widget-tester.js
│
├── Automation
│   └── watch.js (file monitoring)
│
└── Reports (generated)
    ├── content-review-report.md
    ├── accessibility-report.md
    ├── branding-report.md
    ├── canvas-validation-report.md
    └── widget-test-report.md
```

---

## 🔐 Security Notes

- **Never commit `.env`** - Add to `.gitignore`
- API key is for development only
- Reports may contain course content - review before sharing
- SDK agents run with `permissionMode: 'bypassPermissions'` for file access

---

## 🐛 Troubleshooting

**"Cannot find module"**
```bash
cd .agents
npm install
```

**"Could not resolve authentication method"**
- Create `.env` file with `ANTHROPIC_API_KEY=your-key-here`
- Check `.env` is in `.agents/` folder (not project root)

**SDK agents timing out**
- This is normal - they're doing thorough iterative analysis
- Use fast agents for quick checks
- Run SDK agents overnight or during breaks

**Watcher not detecting changes**
- Check you're saving files in `modules/` or `assets/`
- Wait 3 seconds after save (debounce delay)
- Check watcher terminal for error messages

---

## 📚 Course Context

**Course:** Business of Marketing in Sport (5-week MBA)
**Executives:** TSN, FanDuel, MLSE, Hockey Hall of Fame
**Students:** Maximum 50 MBA students
**Major Assessment:** Anchor Project (40% team-based marketing plan)

**Agents understand:**
- 5-week structure with executive sessions
- QM and UDL educational standards
- Sports marketing industry context (2024-25)
- Canadian sports market focus
- MBA-level rigor requirements

---

## 🤝 Contributing

When adding new agents:
1. Create both fast (direct API) and SDK versions if applicable
2. Update this README with capabilities
3. Add to appropriate workflow section
4. Test with sample files before committing

---

Built for **Ivey Business School EdTech Lab**
Last updated: October 2025
