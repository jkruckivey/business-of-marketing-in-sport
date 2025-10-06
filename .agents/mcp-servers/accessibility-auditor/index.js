#!/usr/bin/env node

/**
 * MCP Server: Accessibility Auditor
 *
 * Provides WCAG 2.2 AA accessibility auditing tools to Claude Code
 *
 * Tools provided:
 * - audit_file: Audit a single HTML file
 * - audit_directory: Audit all HTML files in a directory
 * - get_audit_report: Retrieve a saved audit report
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// WCAG 2.2 AA Auditor Prompt
const AUDITOR_PROMPT = `You are a WCAG 2.2 AA accessibility compliance expert for educational technology tools.

Your role is to audit HTML/CSS files and identify accessibility issues:

### 1. COLOR CONTRAST
- Check all text has minimum 4.5:1 contrast ratio (3:1 for large text >24px)
- Identify color-only information conveyance
- Test focus indicators have 3:1 contrast

### 2. SEMANTIC HTML & ARIA
- Verify proper heading hierarchy (h1 > h2 > h3, no skips)
- Check for ARIA labels on interactive elements
- Ensure form inputs have associated labels
- Validate landmark regions (header, nav, main, footer)

### 3. KEYBOARD NAVIGATION
- All interactive elements must be keyboard accessible
- Verify logical tab order
- Check for keyboard traps
- Ensure skip links are present

### 4. SCREEN READER SUPPORT
- Alt text on all informative images (empty alt="" for decorative)
- Button text or aria-label on all buttons
- Link text is descriptive (not "click here")
- Dynamic content has aria-live regions

### 5. WCAG 2.2 NEW CRITERIA (Level AA)
- 2.4.11 Focus Not Obscured (Minimum)
- 2.4.13 Focus Appearance (2px perimeter, 3:1 contrast)
- 2.5.7 Dragging Movements (single-pointer alternative)
- 2.5.8 Target Size (Minimum 24x24 CSS pixels)
- 3.2.6 Consistent Help
- 3.3.7 Redundant Entry
- 3.3.8 Accessible Authentication

### OUTPUT FORMAT

Return JSON with:
{
  "compliance_score": 85,
  "file": "path/to/file.html",
  "issues": [
    {
      "priority": "critical|high|medium|low",
      "wcag": "1.3.1",
      "line": 125,
      "description": "Missing aria-label",
      "current_code": "<div>",
      "fixed_code": "<div aria-label='...'>"
    }
  ],
  "summary": {
    "critical": 0,
    "high": 2,
    "medium": 5,
    "low": 1
  }
}`;

class AccessibilityAuditorServer {
  constructor() {
    this.server = new Server(
      {
        name: 'accessibility-auditor',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();

    // Error handling
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'audit_file',
          description: 'Audit a single HTML file for WCAG 2.2 AA compliance',
          inputSchema: {
            type: 'object',
            properties: {
              file_path: {
                type: 'string',
                description: 'Path to HTML file to audit',
              },
            },
            required: ['file_path'],
          },
        },
        {
          name: 'audit_directory',
          description: 'Audit all HTML files in a directory for WCAG 2.2 AA compliance',
          inputSchema: {
            type: 'object',
            properties: {
              directory_path: {
                type: 'string',
                description: 'Path to directory containing HTML files',
              },
              recursive: {
                type: 'boolean',
                description: 'Search subdirectories recursively',
                default: false,
              },
            },
            required: ['directory_path'],
          },
        },
        {
          name: 'get_wcag_guidance',
          description: 'Get detailed guidance for a specific WCAG criterion',
          inputSchema: {
            type: 'object',
            properties: {
              wcag_criterion: {
                type: 'string',
                description: 'WCAG criterion (e.g., "1.3.1", "2.4.7")',
              },
            },
            required: ['wcag_criterion'],
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'audit_file':
            return await this.auditFile(args.file_path);

          case 'audit_directory':
            return await this.auditDirectory(args.directory_path, args.recursive);

          case 'get_wcag_guidance':
            return await this.getWCAGGuidance(args.wcag_criterion);

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async auditFile(filePath) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const content = fs.readFileSync(filePath, 'utf8');

    return {
      content: [
        {
          type: 'text',
          text: `# Accessibility Audit Request

**File**: ${filePath}
**Lines**: ${content.split('\n').length}

${AUDITOR_PROMPT}

## File Content:

\`\`\`html
${content}
\`\`\`

Please audit this file and return a JSON report with compliance score and specific issues.`,
        },
      ],
    };
  }

  async auditDirectory(directoryPath, recursive = false) {
    if (!fs.existsSync(directoryPath)) {
      throw new Error(`Directory not found: ${directoryPath}`);
    }

    const files = this.findHTMLFiles(directoryPath, recursive);

    if (files.length === 0) {
      throw new Error(`No HTML files found in ${directoryPath}`);
    }

    return {
      content: [
        {
          type: 'text',
          text: `# Batch Accessibility Audit Request

**Directory**: ${directoryPath}
**HTML Files Found**: ${files.length}
**Recursive**: ${recursive}

${AUDITOR_PROMPT}

## Files to Audit:

${files.map((f, i) => `${i + 1}. ${f}`).join('\n')}

Please audit each file and return a summary report with:
1. Overall compliance scores
2. Critical issues across all files
3. Common patterns of issues
4. Priority fixes`,
        },
      ],
    };
  }

  findHTMLFiles(dir, recursive) {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory() && recursive) {
        files.push(...this.findHTMLFiles(fullPath, recursive));
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  async getWCAGGuidance(criterion) {
    const guidance = {
      '1.3.1': 'Info and Relationships - Use semantic HTML and ARIA to convey structure',
      '1.4.3': 'Contrast (Minimum) - 4.5:1 for normal text, 3:1 for large text',
      '2.4.1': 'Bypass Blocks - Provide skip navigation links',
      '2.4.7': 'Focus Visible - Keyboard focus must be visible',
      '2.4.11': 'Focus Not Obscured (Minimum) - Focused element must be at least partially visible',
      '2.4.13': 'Focus Appearance - Focus indicator has minimum 2px perimeter, 3:1 contrast',
      '2.5.7': 'Dragging Movements - Provide single-pointer alternative',
      '2.5.8': 'Target Size (Minimum) - Interactive targets at least 24x24 CSS pixels',
      '4.1.2': 'Name, Role, Value - All UI components must have accessible names',
    };

    const description = guidance[criterion] || 'WCAG criterion not found in quick reference';

    return {
      content: [
        {
          type: 'text',
          text: `# WCAG ${criterion} Guidance\n\n${description}\n\nFor full details, see: https://www.w3.org/WAI/WCAG22/Understanding/${criterion}`,
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Accessibility Auditor MCP server running on stdio');
  }
}

const server = new AccessibilityAuditorServer();
server.run().catch(console.error);
