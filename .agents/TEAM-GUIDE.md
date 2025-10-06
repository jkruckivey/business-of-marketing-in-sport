# AI Quality Check Agents - Team Guide

## 🎯 Quick Start for Non-Technical Team Members

You can run AI quality checks on your course content using **Claude Code** - no command line experience needed!

---

## 📋 Prerequisites

1. **Claude Pro Subscription** (includes Claude Code)
2. **Access to this repository** on your computer
3. **Anthropic API key** (ask James for the team key)

---

## 🚀 How to Use

### Step 1: Open Claude Code

1. Open your terminal/command prompt
2. Navigate to the course folder:
   ```
   cd "path/to/business-of-marketing-in-sport"
   ```
3. Type: `claude`
4. Claude Code will open in your terminal

### Step 2: Ask Claude to Run an Agent

Simply copy and paste one of these prompts:

#### ⚡ Quick Content Review (5-15 seconds)
```
Run the sports content reviewer on modules/module-1/index.html
```

#### ♿ Accessibility Check (2-5 minutes)
```
Run the accessibility auditor on modules/module-1/index.html
```

#### 🎨 Branding Check (2-5 minutes)
```
Run the branding checker on modules/module-2/index.html
```

#### 🧪 Widget Test (3-5 minutes)
```
Run the widget tester on modules/module-1/widgets/fan-engagement-lab.html
```

#### 📊 Generate Assessment Rubric (3-5 minutes)
```
Run the rubric generator on modules/module-3/index.html
```

#### 👥 Student Journey Simulation (5-8 minutes)
```
Run the student journey simulator on all modules
```

### Step 3: Get Your Results

Claude will:
1. Run the agent for you
2. Show you the results in the terminal
3. Save a report to `.agents/reports/`
4. You can copy the results or download the report file

---

## 📝 Example Conversation

**You:**
> Run the accessibility auditor on modules/module-1/index.html

**Claude Code:**
> I'll run the accessibility auditor for you now...
>
> [Shows progress]
>
> ✅ Analysis complete! Here are the results:
>
> **WCAG 2.1 AA Compliance Score: 85/100**
>
> **Critical Issues:**
> - Missing alt text on 3 images
> - Color contrast issues in navigation (line 245)
>
> **Recommendations:**
> [...detailed report...]
>
> Report saved to: .agents/reports/accessibility-audit-2025-10-06.md

---

## 🎓 Available Agents

| Agent | Speed | Best For | Model Used |
|-------|-------|----------|------------|
| Sports Content Reviewer | ⚡ Fast (5-15s) | Quick quality checks | Haiku |
| Accessibility Auditor | 📊 Standard (2-5min) | WCAG compliance | Sonnet |
| Branding Checker | 📊 Standard (2-5min) | Ivey brand guidelines | Sonnet |
| Widget Tester | 📊 Standard (3-5min) | Interactive tools UX | Sonnet |
| Rubric Generator | 📊 Standard (3-5min) | Assessment creation | Sonnet |
| Student Journey Simulator | 🔥 Advanced (5-8min) | Complete course experience | Opus |

---

## 💡 Pro Tips

### Check Multiple Files at Once
```
Run the content reviewer on all HTML files in modules/module-1/
```

### Get Specific Feedback
```
Run the accessibility auditor on module-2 and focus on color contrast issues
```

### Compare Modules
```
Compare the branding consistency between module-1 and module-2
```

### Custom Analysis
```
Review the widget at modules/module-3/widgets/revenue-calculator.html
and tell me if it's intuitive for students who aren't familiar with
financial concepts
```

---

## ❓ FAQs

**Q: Do I need to install anything?**
A: Just Claude Pro subscription. Claude Code handles everything else.

**Q: Where are the reports saved?**
A: In `.agents/reports/` folder with timestamps.

**Q: Can I see previous reports?**
A: Yes! Check the `.agents/reports/` folder.

**Q: What if I get an error?**
A: Ask Claude: "Why did that fail?" and it will help you troubleshoot.

**Q: How much does this cost?**
A: The API usage is charged to the team account (~$0.01-1.00 per report).

**Q: Can I run this on files I'm still working on?**
A: Yes! Run it on any HTML file, even if it's not committed yet.

**Q: Do I need to know command line?**
A: Nope! Just copy/paste the prompts above into Claude Code.

---

## 🆘 Need Help?

**If something isn't working:**

1. Ask Claude: "Help me troubleshoot the agents"
2. Check `.agents/README.md` for technical details
3. Contact James (repository owner)

**If you need a custom analysis:**

Just ask Claude in plain English! For example:
- "Check if this module is too text-heavy"
- "Does this widget work well on mobile?"
- "Is the learning progression clear in module 3?"

Claude will figure out which agent to run or create a custom analysis for you.

---

## 📊 Understanding Reports

### Quality Ratings
- ⭐⭐⭐⭐⭐ (5/5) - Excellent, publish-ready
- ⭐⭐⭐⭐ (4/5) - Good, minor improvements
- ⭐⭐⭐ (3/5) - Needs work, several issues
- ⭐⭐ (2/5) - Major revisions needed
- ⭐ (1/5) - Start over recommended

### Priority Levels
- 🔴 **Critical** - Must fix before publishing
- 🟡 **High** - Should fix soon
- 🟢 **Medium** - Nice to have
- ⚪ **Low** - Optional enhancement

---

## 🎯 Best Practices

1. **Run Content Reviewer First** - Quick overview (15 seconds)
2. **Deep Dive with Specific Agents** - Based on what you're working on
3. **Check Before SME Review** - Catch issues early
4. **Save Reports** - Track improvements over time
5. **Ask Follow-Up Questions** - Claude can explain any recommendations

---

Built with ❤️ by Ivey EdTech Lab | Powered by Claude AI

**Questions?** Just ask Claude Code: "Explain how these agents work"
