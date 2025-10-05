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

**Quality Assurance Agents:**
1. **sports-content-reviewer.js** - Comprehensive pedagogical review
2. **accessibility-auditor.js** - Full WCAG 2.1 AA compliance audit
3. **branding-checker.js** - Ivey design system validation
4. **canvas-lms-validator.js** - LMS integration compatibility
5. **widget-tester.js** - Interactive functionality testing

**Advanced Simulation & Analysis Agents:**
6. **widget-student-simulator.js** - Simulates MBA students using widgets (3 personas)
7. **sports-industry-updater.js** - Checks for outdated 2024-25 industry content
8. **student-journey-simulator.js** - Simulates complete 5-week student experience
9. **consistency-checker.js** - Cross-module narrative flow & concept threading
10. **rubric-generator.js** - Auto-generates QM-aligned rubrics from learning outcomes
11. **udl-content-generator.js** - Creates multimodal content (audio, visual, interactive)

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
├── SDK Agents - Quality Assurance (2-5 minutes)
│   ├── sports-content-reviewer.js
│   ├── accessibility-auditor.js
│   ├── branding-checker.js
│   ├── canvas-lms-validator.js
│   └── widget-tester.js
│
├── SDK Agents - Advanced Analysis (3-8 minutes)
│   ├── widget-student-simulator.js
│   ├── sports-industry-updater.js
│   ├── student-journey-simulator.js (uses Opus)
│   ├── consistency-checker.js (uses Opus)
│   ├── rubric-generator.js
│   └── udl-content-generator.js
│
├── Automation
│   └── watch.js (file monitoring)
│
└── Reports (generated)
    ├── content-review-report.md
    ├── accessibility-report.md
    ├── branding-report.md
    ├── canvas-validation-report.md
    ├── widget-test-report.md
    ├── widget-simulation-report.md
    ├── industry-context-update-report.md
    ├── student-journey-report.md
    ├── cross-module-consistency-report.md
    ├── [assignment]-rubric-student.md
    ├── [assignment]-rubric-faculty.md
    └── [module]-udl-*.md (audio, infographic, activities, etc.)
```

---

## 🎯 Advanced Agent Capabilities

### Widget Student Simulator
**What it does**: Simulates 3 MBA student personas interacting with widgets
- **Quick Learner**: Confident, tests edge cases, expects instant results
- **Methodical Analyst**: Thorough, validates manually, checks all features
- **Struggling Student**: Less tech-savvy, may skip instructions, needs clear errors

**Output**: widget-simulation-report.md with pass/fail per persona, UX issues, recommended fixes

**Usage**:
```bash
node widget-student-simulator.js "../modules/module-1/widgets/revenue-empire-builder.html"
```

---

### Sports Industry Context Updater
**What it does**: Identifies outdated 2024-25 sports business content
- Flags old financial data (media rights, sponsorships, team values)
- Checks executive/company references (TSN, FanDuel, MLSE, HHOF)
- Validates case study relevance (have circumstances changed?)
- Suggests current replacements with sources

**Output**: industry-context-update-report.md with priority updates

**Usage**:
```bash
node sports-industry-updater.js "../modules/module-1/index.html"
```

---

### Student Journey Simulator
**What it does**: Simulates complete 5-week student experience through all modules
- **4 Personas**: Visual Learner, Analytical Thinker, Collaborative Leader, Time-Constrained Professional
- Tests learning progression, Anchor Project feasibility, cognitive load
- Identifies transition issues, prerequisite gaps, workload bottlenecks

**Output**: student-journey-report.md with completion metrics, persona logs, critical issues

**Usage**:
```bash
node student-journey-simulator.js "../modules"
```

**Note**: Uses Opus model for complex journey analysis

---

### Cross-Module Consistency Checker
**What it does**: Ensures course narrative flows cohesively across weeks
- **Concept Threading**: Tracks Week 1 concepts through Week 5
- **CLO Alignment**: Validates outcome-to-assessment connections
- **Terminology Consistency**: Builds glossary, flags inconsistent usage
- **Anchor Project Integration**: Checks if weekly content supports milestones

**Output**: cross-module-consistency-report.md with threading map, CLO matrix, priority fixes

**Usage**:
```bash
node consistency-checker.js "../modules"
```

**Note**: Uses Opus model for cross-module synthesis

---

### Assessment Rubric Generator
**What it does**: Auto-generates QM-aligned rubrics from learning outcomes
- Extracts assessment criteria from learning outcomes
- Creates 4-5 performance levels (Exemplary → Missing)
- Generates TWO versions: student-facing & faculty grading
- Includes sports business context and MBA-level expectations

**Output**:
- `[assignment]-rubric-student.md` (clear, encouraging, with examples)
- `[assignment]-rubric-faculty.md` (point allocation, calibration notes)

**Usage**:
```bash
node rubric-generator.js "../modules/module-1/assessment-reflection-memo.md"
```

---

### UDL Multimodal Content Generator
**What it does**: Transforms text content into alternative UDL formats
- **Audio Scripts**: Complete narration for auditory learners
- **Infographic Blueprints**: Visual design specs for key concepts
- **Interactive Activities**: Kinesthetic exercises (card sorts, simulations)
- **Reading Scaffolds**: Support for text learners (vocabulary, organizers)
- **Podcast Outlines**: Collaborative learning format

**Output**: 6 files per module (audio, infographic, activities, reading, podcast, summary)

**Usage**:
```bash
node udl-content-generator.js "../modules/module-1/index.html"
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
