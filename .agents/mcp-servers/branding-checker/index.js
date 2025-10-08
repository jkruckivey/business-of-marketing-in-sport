#!/usr/bin/env node

/**
 * MCP Server: Branding Checker
 *
 * Validates course content against platform branding guidelines (Canvas LMS or Uplimit)
 *
 * Tools provided:
 * - check_branding: Check a file against platform branding guidelines
 * - check_branding_batch: Check multiple files for consistency
 * - get_platform_styles: Get current platform style reference
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

// Platform detection and style paths
const PLATFORM_STYLES = {
  uplimit: {
    name: 'Uplimit',
    cssPath: 'C:\\Users\\jkruck\\Ivey Business School\\EdTech Lab - Documents\\Github\\business-of-sports-marketing\\Project Knowledge\\Uplimit\\styles 1.css',
    description: 'Uplimit platform branding (Geist font, neutral grays, minimal borders)',
  },
  canvas: {
    name: 'Canvas LMS',
    cssPath: null, // Canvas uses inline styles or main.css
    description: 'Canvas LMS platform branding (Ivey gold/beige, traditional academic)',
  },
};

const BRANDING_CHECKER_PROMPT = `You are a course branding consistency expert for educational platforms.

Your role is to validate HTML/CSS content against platform-specific branding guidelines.

### PLATFORM DETECTION

Automatically detect which platform based on file content:

**Uplimit Indicators:**
- Font: 'Geist' font family
- Colors: Neutral grays (#2d3748, #4a5568, #6b7280)
- Style: Minimal borders, clean cards, modern UI
- Buttons: Dark (#2d3748) primary, white secondary

**Canvas LMS Indicators:**
- Font: Traditional web fonts (Arial, sans-serif)
- Colors: Ivey gold (#c5b783), beige (#f5f1e8), dark navy
- Style: Academic, professional, traditional
- Buttons: Gold primary, outlined secondary

### BRANDING CHECKLIST

1. **Typography Consistency**
   - Font family matches platform
   - Font sizes follow hierarchy
   - Line heights are appropriate
   - Text colors meet contrast requirements

2. **Color Palette Compliance**
   - Primary colors match platform
   - Secondary/accent colors appropriate
   - Background colors consistent
   - Sufficient contrast (WCAG AA)

3. **Component Styling**
   - Buttons match platform style
   - Cards/containers use platform patterns
   - Links styled appropriately
   - Form elements follow platform design

4. **Layout Patterns**
   - Spacing matches platform (padding/margins)
   - Border styles consistent
   - Border radius follows platform conventions
   - Grid/flex patterns appropriate

5. **Interactive Elements**
   - Hover states match platform
   - Focus states follow platform
   - Active states consistent
   - Transitions appropriate

### OUTPUT FORMAT

Return JSON with:
{
  "platform_detected": "uplimit|canvas",
  "confidence": 95,
  "compliance_score": 85,
  "file": "path/to/file.html",
  "issues": [
    {
      "priority": "critical|high|medium|low",
      "category": "typography|color|component|layout|interaction",
      "line": 125,
      "description": "Font family doesn't match Uplimit (using Arial instead of Geist)",
      "current_code": "font-family: Arial;",
      "fixed_code": "font-family: 'Geist', -apple-system, sans-serif;",
      "platform_guideline": "Uplimit uses Geist font family"
    }
  ],
  "strengths": ["List of compliant patterns"],
  "recommendations": ["Prioritized fixes"]
}`;

class BrandingCheckerServer {
  constructor() {
    this.server = new Server(
      {
        name: 'branding-checker',
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
          name: 'check_branding',
          description: 'Check a file against platform branding guidelines (auto-detects Canvas or Uplimit)',
          inputSchema: {
            type: 'object',
            properties: {
              file_path: {
                type: 'string',
                description: 'Path to HTML/CSS file to check',
              },
              platform: {
                type: 'string',
                enum: ['auto', 'uplimit', 'canvas'],
                description: 'Platform to check against (auto = detect from content)',
                default: 'auto',
              },
            },
            required: ['file_path'],
          },
        },
        {
          name: 'check_branding_batch',
          description: 'Check multiple files for branding consistency',
          inputSchema: {
            type: 'object',
            properties: {
              directory_path: {
                type: 'string',
                description: 'Path to directory containing files',
              },
              recursive: {
                type: 'boolean',
                description: 'Search subdirectories',
                default: false,
              },
            },
            required: ['directory_path'],
          },
        },
        {
          name: 'get_platform_styles',
          description: 'Get reference styles for a platform',
          inputSchema: {
            type: 'object',
            properties: {
              platform: {
                type: 'string',
                enum: ['uplimit', 'canvas'],
                description: 'Platform to get styles for',
              },
            },
            required: ['platform'],
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'check_branding':
            return await this.checkBranding(args.file_path, args.platform || 'auto');

          case 'check_branding_batch':
            return await this.checkBrandingBatch(args.directory_path, args.recursive);

          case 'get_platform_styles':
            return await this.getPlatformStyles(args.platform);

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

  async checkBranding(filePath, platformHint = 'auto') {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);

    // Auto-detect platform from content
    let detectedPlatform = 'unknown';
    if (platformHint === 'auto') {
      if (content.includes('Geist') || content.includes('#2d3748')) {
        detectedPlatform = 'uplimit';
      } else if (content.includes('#c5b783') || content.includes('--primary-color')) {
        detectedPlatform = 'canvas';
      }
    } else {
      detectedPlatform = platformHint;
    }

    // Load platform reference styles if available
    let platformStyles = '';
    if (detectedPlatform === 'uplimit') {
      const uplimitPath = PLATFORM_STYLES.uplimit.cssPath;
      if (fs.existsSync(uplimitPath)) {
        platformStyles = fs.readFileSync(uplimitPath, 'utf8');
      }
    }

    const platformInfo = PLATFORM_STYLES[detectedPlatform] || {
      name: 'Unknown',
      description: 'Platform could not be detected',
    };

    return {
      content: [
        {
          type: 'text',
          text: `# Branding Consistency Check

**File**: ${fileName} (${filePath})
**Platform Detected**: ${platformInfo.name} ${platformHint === 'auto' ? '(auto-detected)' : '(manual selection)'}
**Platform Description**: ${platformInfo.description}
**Lines**: ${content.split('\n').length}

${BRANDING_CHECKER_PROMPT}

${platformStyles ? `## Platform Reference Styles (${platformInfo.name}):\n\n\`\`\`css\n${platformStyles}\n\`\`\`\n` : ''}

## File to Check:

\`\`\`html
${content}
\`\`\`

Please analyze this file and return a JSON report with:
1. Platform detection confidence
2. Compliance score
3. Specific branding issues with line numbers
4. Recommendations for better platform consistency`,
        },
      ],
    };
  }

  async checkBrandingBatch(directoryPath, recursive = false) {
    if (!fs.existsSync(directoryPath)) {
      throw new Error(`Directory not found: ${directoryPath}`);
    }

    const files = this.findHTMLFiles(directoryPath, recursive);

    if (files.length === 0) {
      throw new Error(`No HTML files found in ${directoryPath}`);
    }

    // Sample first file to detect platform
    const sampleContent = fs.readFileSync(files[0], 'utf8');
    let detectedPlatform = 'unknown';
    if (sampleContent.includes('Geist') || sampleContent.includes('#2d3748')) {
      detectedPlatform = 'uplimit';
    } else if (sampleContent.includes('#c5b783') || sampleContent.includes('--primary-color')) {
      detectedPlatform = 'canvas';
    }

    return {
      content: [
        {
          type: 'text',
          text: `# Batch Branding Consistency Check

**Directory**: ${directoryPath}
**Files Found**: ${files.length}
**Platform Detected**: ${detectedPlatform}
**Recursive**: ${recursive}

${BRANDING_CHECKER_PROMPT}

## Files to Check:

${files.map((f, i) => `${i + 1}. ${f}`).join('\n')}

Please analyze all files and return a summary report with:
1. Overall platform consistency
2. Common branding issues across files
3. Files with critical inconsistencies
4. Recommendations for standardization`,
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

  async getPlatformStyles(platform) {
    if (!PLATFORM_STYLES[platform]) {
      throw new Error(`Unknown platform: ${platform}. Use 'uplimit' or 'canvas'.`);
    }

    const platformInfo = PLATFORM_STYLES[platform];
    let styleContent = 'No reference stylesheet available';

    if (platformInfo.cssPath && fs.existsSync(platformInfo.cssPath)) {
      styleContent = fs.readFileSync(platformInfo.cssPath, 'utf8');
    }

    return {
      content: [
        {
          type: 'text',
          text: `# ${platformInfo.name} Platform Styles

**Description**: ${platformInfo.description}
**Reference Path**: ${platformInfo.cssPath || 'N/A'}

## Reference Stylesheet:

\`\`\`css
${styleContent}
\`\`\``,
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Branding Checker MCP server running on stdio');
  }
}

const server = new BrandingCheckerServer();
server.run().catch(console.error);
