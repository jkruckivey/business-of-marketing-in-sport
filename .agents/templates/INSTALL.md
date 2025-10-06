# How to Install Education AI Agent Templates

## Quick Install (2 minutes)

### Step 1: Find Your Templates Directory

**Windows**:
```
%USERPROFILE%\.claude\templates\
```
(Usually: `C:\Users\YourName\.claude\templates\`)

**Mac/Linux**:
```
~/.claude/templates/
```

### Step 2: Copy Templates

1. Download or copy the `.md` files from this `templates/` folder
2. Paste them into your `~/.claude/templates/` directory

Your directory should look like:
```
~/.claude/templates/
├── accessibility-auditor.md
├── content-reviewer.md
├── rubric-generator.md
├── widget-tester.md
└── udl-content-generator.md
```

### Step 3: Use in Claude Code

Open Claude Code and try:

```
Use the content-reviewer template on modules/module-1/index.html
```

That's it! ✅

---

## Alternative: No Installation Required

Don't want to copy files? Just **copy-paste the template content** directly into Claude Code:

1. Open any template `.md` file
2. Copy the entire content
3. Paste into Claude Code conversation
4. Add your request below it

**Example**:
```
[Paste entire accessibility-auditor.md content]

Please use this template to audit modules/module-1/index.html
```

---

## Verify Installation

After copying templates, verify they're available:

```
What templates do I have installed?
```

Claude should list your installed templates.

---

## Troubleshooting

### "Template not found"

**Solution 1**: Create the directory manually
```bash
# Windows (PowerShell)
mkdir "$env:USERPROFILE\.claude\templates"

# Mac/Linux
mkdir -p ~/.claude/templates
```

**Solution 2**: Use copy-paste method instead (no installation needed)

### "Poor output quality"

Make sure to specify which template:
```
Use the accessibility-auditor template on [file]
```

Not just:
```
Audit this file for accessibility
```

### "Templates not showing up"

1. Restart Claude Code
2. Check file extensions are `.md` (not `.md.txt`)
3. Verify files are in correct directory (use `pwd` to check)

---

## What's Next?

See `templates/README.md` for:
- Detailed usage examples
- Template descriptions
- Customization guide
- Workflow ideas

---

## Updates

Templates are versioned. To update:

1. Download latest templates from GitHub
2. Replace old files in `~/.claude/templates/`
3. Restart Claude Code

Check for updates: https://github.com/jameskruck/education-ai-agents
