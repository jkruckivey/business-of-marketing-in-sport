# 🚀 Quick Start Guide: Agent File Watcher

## ✨ **Easiest Way: Double-Click to Start**

### **Option 1: Run from File Explorer**
1. Open File Explorer
2. Navigate to: `business-of-marketing-in-sport\.agents\`
3. **Double-click**: `START-WATCHER.bat`
4. A command window opens and starts watching!
5. **Keep this window open** while working
6. Press `Ctrl+C` to stop

---

## 🖥️ **Option 2: Create Desktop Shortcut**

### **Steps to Create Shortcut:**

1. **Navigate to** `.agents` folder in File Explorer
   ```
   business-of-marketing-in-sport\.agents\
   ```

2. **Right-click** on `START-WATCHER.bat`

3. **Select**: "Create shortcut"

4. **Drag the shortcut** to your Desktop

5. **(Optional) Customize the shortcut:**
   - Right-click shortcut → Properties
   - Click "Change Icon" → Browse
   - Choose an icon (or use default)
   - Rename to "🤖 Sports Marketing Agents"
   - Click OK

### **Now You Can:**
- **Double-click desktop icon** to start watching
- **Pin to taskbar** for even quicker access
- **Start with Windows** (see below)

---

## ⚡ **Option 3: Pin to Taskbar**

1. Create desktop shortcut (see above)
2. **Right-click** the shortcut
3. Select **"Pin to taskbar"**
4. Now it's always one click away!

---

## 🔄 **Option 4: Auto-Start with Windows**

Want agents to start automatically when you log in?

### **Method A: Startup Folder**
1. Press `Win + R`
2. Type: `shell:startup` and press Enter
3. **Copy** `START-WATCHER.bat` into this folder
4. Agents will start automatically on login!

### **Method B: Task Scheduler** (More Control)
1. Open **Task Scheduler** (search in Start menu)
2. Click **"Create Basic Task"**
3. Name: "AI Agent Watcher - Sports Marketing"
4. Trigger: **"When I log on"**
5. Action: **"Start a program"**
6. Browse to: `START-WATCHER.bat`
7. Check **"Run with highest privileges"**
8. Finish!

---

## 📊 **What You'll See When Running**

```
========================================
  AI AGENT FILE WATCHER
  Business of Marketing in Sport
========================================

Starting file watcher...
This window will stay open while watching for changes.

Press Ctrl+C to stop the watcher.

🔍 Agent File Watcher Started

Watching: ../modules/**/widgets/*.html
         ../modules/**/index.html
         ../assets/**/*.css

📋 Auto-run configuration:
  • Widget files → Accessibility, Widget Test, Canvas Validation
  • Module pages → Content Review
  • Style files → Branding Check

⏱️  Debounce: 3 seconds

👀 Watching for changes...
```

**Now edit and save any file** → agents run automatically!

---

## 🛑 **How to Stop the Watcher**

### **From the Command Window:**
- Press `Ctrl + C`
- Or simply close the window

### **From Task Manager:**
1. Press `Ctrl + Shift + Esc`
2. Find "Node.js: Server-side JavaScript"
3. Right-click → End task

---

## 💡 **Pro Tips**

### **Multiple Projects:**
- Run **both** watchers simultaneously in separate windows
- Each project has its own `START-WATCHER.bat`
- They won't interfere with each other

### **Keep Window Visible:**
- Position the watcher window on a second monitor
- Or use Windows Snap (Win + Arrow keys) to dock it
- See real-time feedback as you work

### **Minimize Distraction:**
- Minimize the window - it keeps running
- Check it occasionally for errors or warnings
- Review generated reports when convenient

---

## 🎯 **Recommended Workflow**

### **Morning Startup:**
1. **Double-click** `START-WATCHER.bat` from Desktop/Taskbar
2. Minimize the window
3. Start editing files normally

### **During Work:**
- Save files as usual
- Agents check automatically (3s after save)
- Review reports when you have time

### **End of Day:**
- Press `Ctrl+C` or close watcher window
- Review any generated reports
- Fix critical issues before committing

---

## 📁 **File Locations**

### **Watcher Script:**
```
business-of-marketing-in-sport\.agents\START-WATCHER.bat
```

### **Generated Reports:**
```
business-of-marketing-in-sport\.agents\accessibility-report.md
business-of-marketing-in-sport\.agents\widget-test-report.md
business-of-marketing-in-sport\.agents\canvas-validation-report.md
business-of-marketing-in-sport\.agents\content-review-report.md
business-of-marketing-in-sport\.agents\branding-report.md
```

---

## 🔧 **Troubleshooting**

### **"npm is not recognized"**
- Node.js is not installed or not in PATH
- Install Node.js from nodejs.org
- Restart computer

### **Window closes immediately**
- Check if `package.json` exists in `.agents` folder
- Run `npm install` first from the `.agents` directory

### **Agents not running on file changes**
- Check if file is in watched paths
- Wait 3 seconds after saving
- Look for error messages in watcher window

### **Want to see full output?**
- Keep the watcher window open
- Read all agent messages in real-time
- Scroll up to see previous runs

---

## ✅ **You're All Set!**

Just **double-click `START-WATCHER.bat`** and start coding!

The agents will watch your back and provide instant quality feedback. 🎉
