# MCP Servers for Course Development

**Model Context Protocol (MCP) Servers** - Always-on background agents accessible via natural language in Claude Code.

## What are MCP Servers?

MCP servers run as persistent background processes that give Claude Code new capabilities. Unlike templates (which you manually invoke), MCP servers are **always available** - just ask Claude naturally and it will use the appropriate tool.

## Installed MCP Servers

### 1. Accessibility Auditor ♿

**Purpose**: WCAG 2.2 AA compliance checking for educational content

**Natural Language Usage**:
- "Audit modules/module-1/index.html for accessibility"
- "Check accessibility of all files in modules/module-2/"
- "What does WCAG 2.4.7 mean?"

**Available Tools**:
- `audit_file(file_path)` - Single file WCAG 2.2 AA audit
- `audit_directory(directory_path, recursive)` - Batch audit all HTML files
- `get_wcag_guidance(wcag_criterion)` - Get guidance for specific WCAG criterion

**Returns**:
- Compliance score (0-100%)
- Priority-ranked issues (critical/high/medium/low)
- Before/after code examples
- Specific line numbers for fixes

---

### 2. Widget Tester 🧪

**Purpose**: Test interactive educational widgets with simulated student personas

**Natural Language Usage**:
- "Test the fan engagement lab widget"
- "Quick test modules/module-1/widgets/revenue-calculator.html"
- "Test all widgets in modules/module-3/widgets/"

**Student Personas**:
1. **Sarah (Quick Learner)**: Skims instructions, clicks immediately, expects intuitive UI
2. **James (Methodical Analyst)**: Reads carefully, tests edge cases, looks for export
3. **Maria (Struggling Student)**: Needs clear help text, confused by jargon, benefits from tooltips

**Available Tools**:
- `test_widget(file_path)` - Comprehensive test with all 3 personas
- `test_widget_quick(file_path)` - Quick test with Sarah (Quick Learner) only
- `list_personas()` - Get available student personas

**Returns**:
- Overall widget score (0-100)
- Persona-specific experience narratives
- Critical UX/accessibility issues
- Strengths and recommendations

---

### 3. Branding Checker 🎨

**Purpose**: Validate course content against platform branding guidelines (Canvas LMS or Uplimit)

**Natural Language Usage**:
- "Check branding for modules/module-2/outline.html"
- "Does this widget match Uplimit styles?"
- "Check all module files for Canvas branding consistency"

**Platform Detection**:
- **Uplimit**: Geist font, neutral grays (#2d3748, #4a5568), minimal borders
- **Canvas LMS**: Ivey gold (#c5b783), beige (#f5f1e8), traditional academic

**Reference Stylesheet**:
- Uplimit CSS loaded from: `Project Knowledge/Uplimit/styles 1.css`
- Canvas LMS: Uses main.css or inline styles

**Available Tools**:
- `check_branding(file_path, platform)` - Check file against platform (auto-detects if platform='auto')
- `check_branding_batch(directory_path, recursive)` - Batch consistency check
- `get_platform_styles(platform)` - Get reference styles for 'uplimit' or 'canvas'

**Returns**:
- Platform detection confidence
- Compliance score (0-100%)
- Branding issues by category (typography, color, component, layout, interaction)
- Recommendations for platform consistency

---

## How to Use MCP Servers

### 1. After Installation (One-Time Setup)

**Restart Claude Code** - MCP servers only load when Claude Code starts.

### 2. Natural Language Invocation

Just ask Claude naturally:

```
"Audit the Module 1 index page for accessibility"
"Test the revenue calculator widget"
"Check if this file matches Canvas branding"
```

Claude will automatically detect when to use MCP servers and invoke the appropriate tools.

### 3. Direct Tool Calls (Advanced)

You can also reference tools directly:

```
"Use audit_file on modules/module-1/index.html"
"Run test_widget_quick on the fan engagement widget"
"Use check_branding with platform=uplimit"
```

---

## Configuration

**Location**: `C:\Users\jkruck\.claude\mcp_servers.json`

```json
{
  "mcpServers": {
    "accessibility-auditor": {
      "command": "node",
      "args": ["C:\\...\\accessibility-auditor\\index.js"]
    },
    "widget-tester": {
      "command": "node",
      "args": ["C:\\...\\widget-tester\\index.js"]
    },
    "branding-checker": {
      "command": "node",
      "args": ["C:\\...\\branding-checker\\index.js"]
    }
  }
}
```

---

## Troubleshooting

### MCP Server Not Responding

1. **Restart Claude Code** - Servers only load on startup
2. **Check Node.js** - Run `node --version` (requires Node.js 18+)
3. **Check File Paths** - Ensure paths in mcp_servers.json are correct

### "Tool not found" errors

- MCP server may have crashed - restart Claude Code
- Check console for error messages during startup

### Platform Detection Issues (Branding Checker)

If branding checker can't detect platform:
- Manually specify: "Check branding with platform=uplimit"
- Ensure file contains platform indicators (Geist font, #c5b783 color, etc.)

---

## Adding More MCP Servers

To add additional MCP servers from the education-ai-agents package:

1. Create new directory: `.agents/mcp-servers/[agent-name]/`
2. Create `index.js` following the MCP SDK pattern (see existing servers)
3. Add entry to `mcp_servers.json`
4. Restart Claude Code

See education-ai-agents repository for more agents:
https://github.com/jameskruck/education-ai-agents

---

## Benefits of MCP Servers vs. Templates

| Feature | MCP Servers | Templates |
|---------|-------------|-----------|
| **Always Available** | ✅ Yes | ❌ Manual invocation |
| **Natural Language** | ✅ Yes | ⚠️ Requires "/template" command |
| **Multi-Tool** | ✅ Multiple tools per server | ❌ Single prompt |
| **Persistent** | ✅ Background process | ❌ One-time execution |
| **Speed** | ⚡ Fast (no prompt loading) | 🐢 Slower (loads prompt each time) |

**Use MCP Servers for**: Frequent, repeated tasks (accessibility audits, widget testing, branding checks)

**Use Templates for**: Occasional, one-off tasks (content reviews, rubric generation, industry updates)

---

**Course**: Business of Sports Marketing
**Updated**: October 6, 2025
**MCP SDK Version**: @modelcontextprotocol/sdk@^1.0.0
