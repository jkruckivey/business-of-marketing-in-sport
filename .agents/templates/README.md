# Education AI Agent Templates for Claude Code

These templates allow you to use the Education AI Agents directly inside Claude Code conversations.

## What Are Templates?

Templates are pre-configured prompts that give Claude specific expertise and instructions. Think of them as "loading a specialist" into your conversation.

---

## Installation

### Option 1: Manual Installation

1. **Copy template** to your Claude Code templates directory:
   - **Windows**: `%USERPROFILE%\.claude\templates\`
   - **Mac/Linux**: `~/.claude/templates/`

2. **Use in Claude Code**:
   ```
   Use the accessibility-auditor template on modules/module-1/index.html
   ```

### Option 2: Direct Copy-Paste

Copy the entire template content and paste it into your Claude Code conversation with instructions like:

```
[Paste template content]

Please use this template to audit modules/module-1/index.html
```

---

## Available Templates

### 1. accessibility-auditor.md
**Purpose**: WCAG 2.2 AA compliance auditing
**Model**: claude-sonnet-4
**Time**: 2-5 minutes

**Usage**:
```
Use the accessibility-auditor template on modules/module-1/widgets/revenue-builder.html
```

**Output**: Detailed accessibility report with specific fixes

---

### 2. content-reviewer.md
**Purpose**: Quick quality check for educational content
**Model**: claude-3-5-haiku (fast)
**Time**: 5-15 seconds

**Usage**:
```
Use the content-reviewer template on modules/module-2/index.html
```

**Output**: Quick assessment with top 3 strengths and improvements

---

### 3. rubric-generator.md
**Purpose**: Generate QM-aligned assessment rubrics
**Model**: claude-sonnet-4
**Time**: 3-5 minutes

**Usage**:
```
Use the rubric-generator template to create a rubric for modules/module-3/outline.html
```

**Output**: Student-facing and faculty-facing rubric files

---

### 4. widget-tester.md
**Purpose**: Test interactive widgets with student personas
**Model**: claude-sonnet-4
**Time**: 2-5 minutes

**Usage**:
```
Use the widget-tester template on modules/module-1/widgets/fan-engagement-lab.html
```

**Output**: Persona-based testing report with bugs and UX issues

---

### 5. udl-content-generator.md
**Purpose**: Create multimodal UDL content alternatives
**Model**: claude-sonnet-4
**Time**: 3-5 minutes

**Usage**:
```
Use the udl-content-generator template to transform modules/module-1/step-1-overview.html
```

**Output**: 5 alternative formats (audio, visual, interactive, simplified, extended)

---

## Templates vs NPM Package

| Feature | Templates | NPM Package |
|---------|-----------|-------------|
| **Installation** | Copy to .claude/templates/ | `npx edu-agents` |
| **Usage** | Inside Claude Code chat | Command line |
| **Context** | Aware of conversation history | Standalone |
| **Best For** | Interactive development | Batch processing |

**Recommendation**: Use both!
- **Templates** for iterative work in Claude Code
- **NPM package** for automated QA runs

---

## Example Workflow

### Scenario: Building a new module

**Step 1: Draft content in Claude Code**
```
Help me create a new module on sponsorship ROI
```

**Step 2: Quick quality check**
```
Use the content-reviewer template on the outline we just created
```

**Step 3: Generate rubric**
```
Use the rubric-generator template to create assessment rubrics
```

**Step 4: Build interactive widget**
```
Create an ROI calculator widget
```

**Step 5: Test widget**
```
Use the widget-tester template to test the ROI calculator
```

**Step 6: Check accessibility**
```
Use the accessibility-auditor template on all files we created
```

**Step 7: Create UDL alternatives**
```
Use the udl-content-generator template to make multimodal versions
```

---

## Customizing Templates

Templates are just markdown files with structured prompts. You can:

1. **Edit prompts** to match your institution's standards
2. **Add examples** specific to your courses
3. **Change output format** to match your needs
4. **Combine templates** for custom workflows

---

## Template Format

Each template includes:

```markdown
# Template Name

**Description**: One-line summary
**Author**: Your name
**Version**: 1.0.0
**Model**: Suggested Claude model

---

## Prompt
[Detailed instructions for Claude]

---

## Usage Examples
[How to use this template]

---

## Tools Used
[What Claude Code tools it needs]

---

## Expected Output
[Sample output format]
```

---

## Contributing

Found a way to improve a template? Edit the `.md` file and share!

Common improvements:
- Add more examples
- Include edge cases
- Update for new standards (e.g., WCAG 2.3 when released)
- Add institution-specific requirements

---

## Troubleshooting

### "Template not found"
- Check file is in `~/.claude/templates/`
- Restart Claude Code
- Try manual copy-paste instead

### "Poor quality output"
- Specify the model in your request: "Use sonnet-4..."
- Provide more context about your content
- Include examples of desired output

### "Template is too slow"
- Use content-reviewer (fast) for quick checks
- Switch to smaller model: "Use haiku for this"
- Reduce scope: audit one file at a time

---

## Support

- **NPM Package Issues**: https://github.com/jameskruck/education-ai-agents/issues
- **Template Questions**: Paste template content in Claude Code and ask!
- **Feature Requests**: Open GitHub issue with "template" label

---

## Version History

- **1.0.0** (2025-10-06): Initial release with 5 templates
  - accessibility-auditor
  - content-reviewer
  - rubric-generator
  - widget-tester
  - udl-content-generator
