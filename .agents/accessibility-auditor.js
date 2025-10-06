import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Accessibility Auditor Agent
 * Scans educational widgets for WCAG 2.2 AA compliance
 *
 * Checks:
 * - Color contrast ratios (4.5:1 for normal text, 3:1 for large text)
 * - ARIA labels and semantic HTML
 * - Keyboard navigation support
 * - Screen reader compatibility
 * - Alt text for images
 * - WCAG 2.2 specific criteria (focus appearance, dragging, target size, etc.)
 */

const accessibilityAgentPrompt = `You are a WCAG 2.2 AA accessibility compliance expert for educational technology tools.

Your role is to audit HTML/CSS files and identify accessibility issues:

1. COLOR CONTRAST
   - Check all text has minimum 4.5:1 contrast ratio (3:1 for large text >24px)
   - Identify color-only information conveyance
   - Test focus indicators have 3:1 contrast

2. SEMANTIC HTML & ARIA
   - Verify proper heading hierarchy (h1 > h2 > h3, no skips)
   - Check for ARIA labels on interactive elements
   - Ensure form inputs have associated labels
   - Validate landmark regions (header, nav, main, footer)

3. KEYBOARD NAVIGATION
   - All interactive elements must be keyboard accessible
   - Verify logical tab order
   - Check for keyboard traps
   - Ensure skip links are present

4. SCREEN READER SUPPORT
   - Alt text on all informative images (empty alt="" for decorative)
   - Button text or aria-label on all buttons
   - Link text is descriptive (not "click here")
   - Dynamic content has aria-live regions

5. WCAG 2.2 NEW CRITERIA (Level AA)
   - 2.4.11 Focus Not Obscured (Minimum): Focused element must be at least partially visible
   - 2.4.12 Focus Not Obscured (Enhanced): Focused element fully visible (AAA, check if possible)
   - 2.4.13 Focus Appearance: Focus indicator has minimum 2px perimeter, 3:1 contrast
   - 2.5.7 Dragging Movements: Provide single-pointer alternative for drag operations
   - 2.5.8 Target Size (Minimum): Interactive targets at least 24x24 CSS pixels (with exceptions)
   - 3.2.6 Consistent Help: Help mechanisms in consistent order across pages
   - 3.3.7 Redundant Entry: Don't ask for same info twice (use autocomplete)
   - 3.3.8 Accessible Authentication (Minimum): No cognitive function tests for auth
   - 3.3.9 Accessible Authentication (Enhanced): No cognitive tests at all (AAA)

6. IVEY SPECIFIC STANDARDS
   - Colors: #034638 (green), #582C83 (purple), #c5b783 (gold)
   - All colors must meet contrast requirements
   - Check responsive design at 320px, 768px, 1024px
   - Interactive widgets must support touch and mouse

Provide:
- Specific line numbers for issues
- Exact fixes with code examples
- Priority levels (Critical, High, Medium, Low)
- WCAG 2.2 compliance score (%)
- List which new 2.2 criteria apply`;

// Example usage function
async function auditProject(projectPath) {
  console.log(`🔍 Starting accessibility audit for: ${projectPath}\n`);

  try {
    const result = query({
      prompt: `Please audit all HTML and CSS files in ${projectPath} for WCAG 2.2 AA compliance.

Generate a detailed accessibility report with:
1. Summary of critical issues (including WCAG 2.2 criteria)
2. File-by-file breakdown with line numbers
3. Specific code fixes
4. Overall WCAG 2.2 compliance score
5. Which WCAG 2.2 new criteria are applicable

Save the report as accessibility-report.md in the current directory.`,

      options: {
        agents: {
          'accessibility-auditor': {
            description: 'WCAG 2.2 AA compliance auditor for educational widgets',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: accessibilityAgentPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: accessibilityAgentPrompt,
        permissionMode: 'bypassPermissions'
      }
    });

    // Stream the results
    for await (const message of result) {
      console.log('Message:', JSON.stringify(message, null, 2));
    }

    console.log('\n✅ Audit complete!');
  } catch (error) {
    console.error('❌ Error during audit:', error.message);
  }
}

// Export for use in other scripts
export { auditProject };

// CLI usage
if (process.argv[2]) {
  const projectPath = process.argv[2];
  auditProject(projectPath);
}
