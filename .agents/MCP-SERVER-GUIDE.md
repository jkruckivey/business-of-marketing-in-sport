# MCP Server Guide for Education AI Agents

## What Are MCP Servers?

**MCP (Model Context Protocol) servers** are persistent background agents that provide tools and context to Claude Code. Unlike templates (which you reference in conversation) or subagents (which exist only during a chat session), MCP servers are **always-on** and available across all your Claude Code conversations.

---

## Available MCP Servers

### 1. Accessibility Auditor
**Tools provided:**
- `audit_file(file_path)` - Audit a single HTML file for WCAG 2.2 AA compliance
- `audit_directory(directory_path, recursive)` - Audit all HTML files in a directory
- `get_wcag_guidance(wcag_criterion)` - Get detailed guidance for specific WCAG criteria

**Use cases:**
- Regular accessibility audits across multiple modules
- Batch processing of HTML files
- Quick WCAG guidance lookups

---

## Installation

### For You (One-Time Setup)

```bash
npx education-ai-agents@latest --create-agent accessibility-auditor --yes
```

This will:
1. Download the MCP server code
2. Install dependencies
3. Add configuration to `~/.claude/mcp_servers.json`

### For Your Coworkers

Share this exact command:
```bash
npx education-ai-agents@latest --create-agent accessibility-auditor --yes
```

They'll get the same always-on accessibility auditor you have.

---

## Using MCP Servers

### After Installation

1. **Restart Claude Code** (required for MCP servers to load)
2. **Use naturally** - Just ask Claude Code to audit files

### Example Requests

**Single file audit:**
```
Audit modules/module-1/index.html for accessibility
```

**Directory audit:**
```
Audit all HTML files in modules/ recursively
```

**Multiple files:**
```
Audit modules/module-1/index.html, modules/module-2/outline.html, and modules/module-3/outline.html
```

**WCAG guidance:**
```
What's the requirement for WCAG 2.4.7 Focus Visible?
```

---

## How It's Different

| Feature | Templates | Subagents | MCP Servers |
|---------|-----------|-----------|-------------|
| **Activation** | Reference in chat | Create during chat | Always available |
| **Persistence** | File on disk | Current session only | Background process |
| **Usage** | "Use template X" | `/agents` or Task tool | Natural requests |
| **Availability** | Must reference | Single conversation | All conversations |
| **Tools** | None (just prompts) | Standard tools | Custom tools |
| **Cost** | Uses your session | Uses your session | Uses your session |

---

## Troubleshooting

### MCP Server Not Working?

**1. Check if it's installed:**
```bash
cat ~/.claude/mcp_servers.json
```

You should see:
```json
{
  "mcpServers": {
    "accessibility-auditor": {
      "command": "node",
      "args": ["/path/to/.agents/mcp-servers/accessibility-auditor/index.js"]
    }
  }
}
```

**2. Restart Claude Code**
- Close all Claude Code windows
- Quit the application completely
- Reopen Claude Code

**3. Check the logs**
- Look for MCP server startup messages in Claude Code console
- Errors will appear during startup if server fails to load

**4. Reinstall if needed:**
```bash
npx education-ai-agents@latest --create-agent accessibility-auditor --yes
```

---

## Configuration File Location

**macOS/Linux:**
```
~/.claude/mcp_servers.json
```

**Windows:**
```
C:\Users\<username>\.claude\mcp_servers.json
```

---

## Adding More MCP Servers

### List available servers:
```bash
npx education-ai-agents@latest --list-agents
```

### Install additional servers:
```bash
npx education-ai-agents@latest --create-agent widget-tester --yes
```

Multiple servers can coexist and will all be available simultaneously.

---

## Technical Details

### What Happens Behind the Scenes

1. **Installation** creates the server configuration in `mcp_servers.json`
2. **Claude Code startup** reads this file and launches each MCP server as a Node.js process
3. **During conversations**, Claude Code can query these servers for tools and context
4. **Tools are invoked** automatically when you make relevant requests

### MCP Server Architecture

```
Claude Code
    ↓
MCP Protocol (stdio)
    ↓
accessibility-auditor server (Node.js process)
    ↓
Provides tools: audit_file(), audit_directory(), get_wcag_guidance()
    ↓
Returns structured results
```

---

## Comparison: All Three Agent Types

### When to Use Templates
```bash
npx education-ai-agents@latest --template=content-reviewer --yes
```
✅ Occasional use
✅ Want to explicitly reference the template
✅ Don't need custom tools

### When to Use Subagents
```
(In Claude Code conversation)
"Review modules 1-3 in parallel using subagents"
```
✅ Parallel processing within a conversation
✅ Task delegation during active work
✅ Results visible in chat

### When to Use MCP Servers
```bash
npx education-ai-agents@latest --create-agent accessibility-auditor --yes
```
✅ Frequent, repeated use
✅ Want always-available tools
✅ Need custom functionality (audit_file, audit_directory)
✅ Use across multiple conversations

---

## Best Practices

### ✅ Do:
- Install MCP servers for tasks you do daily/weekly
- Restart Claude Code after installation
- Use natural language to invoke tools
- Keep MCP servers updated (`npx education-ai-agents@latest`)

### ❌ Don't:
- Install too many servers (slows Claude Code startup)
- Modify `mcp_servers.json` manually (use CLI)
- Expect servers to work without restart
- Use for one-off tasks (use templates instead)

---

## Cost Considerations

**MCP servers use your Claude Code session**, just like templates and subagents. There's no additional API cost beyond your normal Claude Code usage.

The advantage is **efficiency** - MCP servers provide structured tools that can be faster and more accurate than conversational approaches.

---

## Updating MCP Servers

When a new version of `education-ai-agents` is released:

```bash
# Reinstall to get updates
npx education-ai-agents@latest --create-agent accessibility-auditor --yes

# Restart Claude Code
```

The `--yes` flag overwrites the existing configuration.

---

## Uninstalling MCP Servers

To remove an MCP server:

1. Edit `~/.claude/mcp_servers.json`
2. Remove the server entry
3. Restart Claude Code

Or reinstall without the server:
```bash
# Just don't install it again and it won't be in future configs
```

---

## Getting Help

**Package issues:**
https://github.com/jameskruck/education-ai-agents/issues

**MCP Protocol docs:**
https://modelcontextprotocol.io/

**Claude Code docs:**
https://docs.claude.com/claude-code

---

## What's Next?

1. ✅ Install accessibility-auditor MCP server
2. 🔄 Restart Claude Code
3. 🎯 Try: "Audit modules/module-1/index.html"
4. 📊 See structured audit results with tools!

The MCP server is installed and ready - just restart Claude Code to activate it! 🚀
