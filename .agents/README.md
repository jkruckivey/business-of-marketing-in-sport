# AI Agents for Business of Marketing in Sport

Custom Claude AI agents tailored for the Business of Marketing in Sport course at Ivey Business School.

## 🤖 Available Agents

### Universal Agents (All Projects)
1. **Accessibility Auditor** - WCAG 2.1 AA compliance checker
2. **Branding Checker** - Ivey design system enforcer (#034638 green, #582C83 purple, #c5b783 gold)
3. **Widget Tester** - Interactive functionality and calculation tester

### Sports Marketing Specific Agents
4. **Canvas LMS Validator** - Canvas embedding and AMBA template compliance
5. **Sports Content Reviewer** - Pedagogical alignment and sports marketing accuracy

## 🚀 Quick Start

### Setup
Your `.env` file with API key is already configured!

### Run Individual Agents
```bash
cd .agents

# Check accessibility of a widget
node accessibility-auditor.js "../modules/module-2/widgets/property-selector.html"

# Validate Canvas LMS compatibility
node canvas-lms-validator.js "../modules/module-2/widgets/team-charter.html"

# Review sports marketing content
node sports-content-reviewer.js "../modules/module-2/index.html"

# Test widget functionality
node widget-tester.js "../modules/module-3/widgets/revenue-canvas-builder.html"

# Check branding consistency
node branding-checker.js "../modules/module-4"
```

### Use NPM Scripts
```bash
cd .agents

# Single widget audit
npm run test:widget "../modules/module-2/widgets/property-selector.html"

# Validate for Canvas
npm run validate:canvas "../modules/module-2/widgets/property-selector.html"

# Review module content
npm run review:content "../modules/module-2/index.html"

# Audit all widgets (takes time!)
npm run audit:all-widgets

# Audit specific module (set MODULE env var)
MODULE=module-2 npm run audit:module
```

## 📊 Agent Capabilities

### Accessibility Auditor
**Checks:**
- Color contrast ratios (4.5:1 text, 3:1 large text)
- ARIA labels and semantic HTML
- Keyboard navigation
- Screen reader compatibility
- Ivey color compliance

**Output:** `accessibility-report.md`

### Canvas LMS Validator
**Checks:**
- Iframe-safe JavaScript
- Canvas security model compliance
- AMBA template standards
- HTTPS resources only
- Executive session suitability
- Mobile responsiveness in Canvas

**Output:** `canvas-validation-report.md`

### Sports Content Reviewer
**Checks:**
- Learning outcomes alignment (Module 1-5)
- Sports marketing accuracy (2024-2025 industry)
- UDL principles implementation
- Quality Matters standards
- MBA-level rigor
- Anchor Project integration (40% of grade)
- Executive guest preparation

**Output:** `content-review-report.md`

### Widget Tester
**Checks:**
- Button/control functionality
- Calculation accuracy (ROI, percentages)
- localStorage persistence
- Export functionality
- Form validation
- Edge cases

**Output:** `widget-test-report.md`

### Branding Checker
**Checks:**
- Official Ivey colors usage
- Figtree font family
- Spacing system (4px base)
- Responsive breakpoints (320px, 768px, 1024px)
- Component styling standards

**Output:** `branding-report.md`

## 🎯 Recommended Workflows

### Before Deploying New Widget
```bash
cd .agents
WIDGET="../modules/module-X/widgets/your-widget.html"

# Run all checks
node accessibility-auditor.js "$WIDGET"
node branding-checker.js "$WIDGET"
node canvas-lms-validator.js "$WIDGET"
node widget-tester.js "$WIDGET"
```

### Before Module Launch
```bash
cd .agents
MODULE="../modules/module-X"

# Content review
node sports-content-reviewer.js "$MODULE/index.html"

# Widget audits
for widget in $MODULE/widgets/*.html; do
  node accessibility-auditor.js "$widget"
  node canvas-lms-validator.js "$widget"
done
```

### Weekly Quality Check
```bash
cd .agents

# Audit all modules
for module in ../modules/module-*; do
  echo "\n=== Auditing $module ==="
  node branding-checker.js "$module"
  node sports-content-reviewer.js "$module/index.html"
done
```

## 📚 Course Context

The agents understand:
- **5-week structure**: Live Content/Media Rights, Sports Betting, Athlete Branding, League/Team Marketing, Legacy/Culture
- **Executive guests**: TSN, FanDuel, MLSE, Hockey Hall of Fame
- **Anchor Project**: 40% team-based marketing plan with 4 milestones
- **Cohort size**: Maximum 50 MBA students
- **Canadian focus**: Toronto sports market and industry standards

## 🔧 Customization

Edit agent prompts in each `.js` file to add project-specific checks or adjust standards.

## 📝 Report Outputs

All agents generate markdown reports you can:
- Review for issues
- Share with team
- Archive for compliance
- Use for continuous improvement

## 🤝 Integration

### Git Pre-Commit Hook
Add to `.git/hooks/pre-commit`:
```bash
#!/bin/bash
cd .agents
npm run audit:accessibility ../modules/
```

### CI/CD Pipeline
```yaml
- name: Run AI Agents
  run: |
    cd .agents
    npm run audit:all-widgets
```

---

Built for **Ivey Business School EdTech Lab** - Business of Marketing in Sport Course
