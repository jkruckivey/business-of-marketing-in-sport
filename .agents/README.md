# Ivey Education Agents

**AI-Powered Quality Assurance & Course Development Tools**

## ⚠️ Repository Moved

The agent system has been split into its own dedicated repository for reusability across multiple course projects.

### New Repository Location

**GitHub**: https://github.com/jameskruck/ivey-education-agents

**Local Path**: `C:\Users\james\OneDrive\Documents2\GitHub\ivey-education-agents\`

---

## Quick Setup

### 1. Create GitHub Repository

Go to https://github.com/new and create:
- Repository name: `ivey-education-agents`
- Description: `AI-Powered Quality Assurance & Course Development Tools for Ivey Business School EdTech Lab`
- Public repository
- **Do NOT initialize** with README (we already have it)

### 2. Push Local Repository

The repository is already set up locally at:
```
C:\Users\james\OneDrive\Documents2\GitHub\ivey-education-agents\
```

After creating on GitHub, run:
```bash
cd C:\Users\james\OneDrive\Documents2\GitHub\ivey-education-agents
git remote add origin https://github.com/jameskruck/ivey-education-agents.git
git branch -M main
git push -u origin main
```

---

## Running Agents from This Course Project

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
node sports-content-reviewer-fast.js "../business-of-marketing-in-sport/modules/module-1/index.html"

# Widget testing (3-5 minutes)
node widget-student-simulator.js "../business-of-marketing-in-sport/modules/module-1/widgets/fan-engagement-lab.html"
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

**For**: Business of Marketing in Sport Course
**Updated**: October 6, 2025
