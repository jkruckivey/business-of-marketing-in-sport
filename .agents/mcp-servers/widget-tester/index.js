#!/usr/bin/env node

/**
 * MCP Server: Widget Tester
 *
 * Tests interactive educational widgets with simulated student personas
 *
 * Tools provided:
 * - test_widget: Test a widget file with multiple student personas
 * - test_widget_quick: Quick single-persona test
 * - list_personas: Get available student personas
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

const WIDGET_TESTER_PROMPT = `You are an interactive widget testing expert for educational technology.

Your role is to simulate student interactions with educational widgets and identify UX/accessibility issues.

### STUDENT PERSONAS

**1. Quick Learner (Sarah)**
- Skims instructions, clicks around immediately
- Gets frustrated if not intuitive
- Expects instant visual feedback
- Uses keyboard shortcuts when available

**2. Methodical Analyst (James)**
- Reads all instructions carefully
- Tests edge cases and boundary values
- Expects validation messages
- Looks for export/save functionality

**3. Struggling Student (Maria)**
- Confused by jargon or complex UI
- Needs clear help text and tooltips
- May miss non-obvious interactive elements
- Benefits from progress indicators

### TESTING CHECKLIST

1. **First Impressions (0-10 seconds)**
   - Is the widget's purpose immediately clear?
   - Are instructions visible without scrolling?
   - Does it look professional and trustworthy?

2. **Interaction Flow**
   - Can students complete the primary task?
   - Are validation errors helpful?
   - Is there a clear "success" state?
   - Can they export/save their work?

3. **Accessibility**
   - Keyboard navigation works?
   - Focus indicators visible?
   - ARIA labels present?
   - Color contrast meets WCAG AA?

4. **Edge Cases**
   - What happens with empty inputs?
   - Maximum value handling?
   - Invalid data entry?
   - Browser refresh (data persistence)?

5. **Help & Guidance**
   - Help text available when needed?
   - Tooltips on hover/focus?
   - Error messages actionable?
   - Examples or defaults provided?

### OUTPUT FORMAT

Return JSON with:
{
  "widget_name": "Revenue Calculator",
  "overall_score": 75,
  "personas": [
    {
      "name": "Sarah (Quick Learner)",
      "experience": "Narrative of interaction...",
      "success": true,
      "frustrations": ["List of issues..."],
      "time_to_complete": "2 minutes"
    }
  ],
  "critical_issues": [
    {
      "priority": "critical|high|medium|low",
      "issue": "Description",
      "line": 125,
      "current_code": "...",
      "fixed_code": "...",
      "persona_affected": "All|Sarah|James|Maria"
    }
  ],
  "strengths": ["List of good UX patterns"],
  "recommendations": ["Prioritized improvements"]
}`;

const PERSONAS = {
  sarah: {
    name: 'Sarah - Quick Learner',
    behavior: 'Skims instructions, clicks immediately, expects intuitive UI',
    testing_approach: 'Fast interaction, minimal reading, expects instant feedback',
  },
  james: {
    name: 'James - Methodical Analyst',
    behavior: 'Reads carefully, tests edge cases, looks for export functionality',
    testing_approach: 'Thorough testing, boundary values, validation checking',
  },
  maria: {
    name: 'Maria - Struggling Student',
    behavior: 'Needs clear help text, confused by jargon, benefits from tooltips',
    testing_approach: 'Careful reading, follows examples, needs guidance',
  },
};

class WidgetTesterServer {
  constructor() {
    this.server = new Server(
      {
        name: 'widget-tester',
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
          name: 'test_widget',
          description: 'Test an interactive widget with all 3 student personas (comprehensive)',
          inputSchema: {
            type: 'object',
            properties: {
              file_path: {
                type: 'string',
                description: 'Path to widget HTML file',
              },
            },
            required: ['file_path'],
          },
        },
        {
          name: 'test_widget_quick',
          description: 'Quick widget test with single persona (Sarah - Quick Learner)',
          inputSchema: {
            type: 'object',
            properties: {
              file_path: {
                type: 'string',
                description: 'Path to widget HTML file',
              },
            },
            required: ['file_path'],
          },
        },
        {
          name: 'list_personas',
          description: 'Get list of available student testing personas',
          inputSchema: {
            type: 'object',
            properties: {},
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'test_widget':
            return await this.testWidget(args.file_path, 'all');

          case 'test_widget_quick':
            return await this.testWidget(args.file_path, 'sarah');

          case 'list_personas':
            return await this.listPersonas();

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

  async testWidget(filePath, personaMode = 'all') {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const widgetName = path.basename(filePath, '.html');

    const personasToTest =
      personaMode === 'all'
        ? ['sarah', 'james', 'maria']
        : [personaMode];

    const personaDescriptions = personasToTest
      .map((p) => `**${PERSONAS[p].name}**: ${PERSONAS[p].behavior}`)
      .join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `# Widget Testing Request

**Widget**: ${widgetName}
**File**: ${filePath}
**Lines**: ${content.split('\n').length}
**Mode**: ${personaMode === 'all' ? 'Comprehensive (3 personas)' : 'Quick (1 persona)'}

${WIDGET_TESTER_PROMPT}

## Test with these personas:

${personaDescriptions}

## Widget Code:

\`\`\`html
${content}
\`\`\`

Please simulate each persona testing this widget and return a JSON report with:
1. Each persona's experience narrative
2. Critical UX/accessibility issues found
3. Strengths of the widget
4. Prioritized recommendations`,
        },
      ],
    };
  }

  async listPersonas() {
    const personaList = Object.entries(PERSONAS)
      .map(([key, persona]) => `- **${key}**: ${persona.name} - ${persona.behavior}`)
      .join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `# Available Student Personas\n\n${personaList}\n\nUse these persona names with test_widget_quick for targeted testing.`,
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Widget Tester MCP server running on stdio');
  }
}

const server = new WidgetTesterServer();
server.run().catch(console.error);
