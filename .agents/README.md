# Education AI Agents

**AI-Powered Quality Assurance & Course Development Tools**

Three ways to use the agents:
1. **📦 NPM Package** - Install templates and MCP servers globally
2. **🤖 Claude Code Templates** - Pre-configured prompts for common tasks
3. **🔧 MCP Servers** - Always-on persistent agents with custom tools

**NPM Package**: `education-ai-agents`
**GitHub**: https://github.com/jameskruck/education-ai-agents

---

## Quick Start

### Install Templates (For Occasional Use)

```bash
npx education-ai-agents@latest --template=accessibility-auditor --yes
npx education-ai-agents@latest --template=content-reviewer --yes
```

Then in Claude Code:
```
Use the accessibility-auditor template on modules/module-1/index.html
```

### Install MCP Servers (For Frequent Use)

```bash
npx education-ai-agents@latest --create-agent accessibility-auditor --yes
```

**Restart Claude Code**, then just ask naturally:
```
Audit modules/module-1/index.html for accessibility
```

**See**: [MCP-SERVER-GUIDE.md](MCP-SERVER-GUIDE.md) for full details

---

## Usage Options

### Option 1: Use Launcher from New Location

```bash
# Navigate to agents repository
cd C:\Users\james\OneDrive\Documents2\GitHub\ivey-education-agents

# Run interactive launcher
npm start

# Quick actions for this course:
# Type "w1" - Review Module 1
# Type "w2" - Review Module 2
# Type "journey" - Full student journey simulation
```

### Option 2: Run Specific Agent

```bash
cd C:\Users\james\OneDrive\Documents2\GitHub\ivey-education-agents

# Fast content review (5-15 seconds)
node sports-content-reviewer-fast.js "../business-of-sports-marketing/modules/module-1/index.html"

# Widget testing (3-5 minutes)
node widget-student-simulator.js "../business-of-sports-marketing/modules/module-1/widgets/fan-engagement-lab.html"
```

---

## Available Agents

1. **Sports Content Reviewer** ⚡ 5-15 seconds
2. **Widget Student Simulator** 🎯 3-5 minutes
3. **Sports Industry Context Updater** 📊 2-4 minutes
4. **Student Journey Simulator** 🎓 5-8 minutes (Opus)
5. **Cross-Module Consistency Checker** 🔗 5-8 minutes (Opus)
6. **Assessment Rubric Generator** 📝 3-5 minutes
7. **UDL Multimodal Content Generator** 🎨 4-6 minutes
8. **Accessibility Auditor** ♿ 2-5 minutes
9. **Branding Checker** 🎨 2-4 minutes
10. **Canvas LMS Validator** 📚 2-5 minutes
11. **Widget Tester** 🧪 3-5 minutes

---

## Full Documentation

Complete documentation, setup instructions, and usage examples:

**README**: https://github.com/jameskruck/ivey-education-agents#readme

---

**For**: Business of Sports Marketing Course
**Updated**: October 6, 2025
