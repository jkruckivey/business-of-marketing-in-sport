import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Widget Student Simulator Agent
 * Simulates realistic student interactions with widgets to test UX and functionality
 * Uses verification loop: interact → validate → report
 */

const widgetSimulatorPrompt = `You are an AI that simulates realistic MBA student interactions with educational widgets.

YOUR ROLE: Act like a student using the widget for the first time and document the experience.

SIMULATION PROCESS:

1. ANALYZE WIDGET STRUCTURE
   - Read the HTML/JS to understand the widget's purpose
   - Identify all interactive elements (inputs, buttons, dropdowns)
   - Map the expected user flow
   - Note any instructions or guidance provided

2. SIMULATE REALISTIC INTERACTIONS
   Create 3 student personas:

   **Persona A: "Quick Learner" (MBA student, confident with tech)**
   - Fills forms quickly with realistic sports data
   - Tests calculations with edge cases
   - Tries to export/save immediately
   - Expects instant results

   **Persona B: "Methodical Analyst" (MBA student, thorough)**
   - Reads all instructions carefully
   - Tests one feature at a time
   - Validates calculations manually
   - Checks for help/tooltips

   **Persona C: "Struggling Student" (MBA student, less tech-savvy)**
   - May skip instructions
   - Enters incomplete data
   - Confused by technical jargon
   - Needs clear error messages

3. TEST SCENARIOS
   For each persona, simulate:
   - First-time use (no prior context)
   - Typical use case (e.g., Revenue Empire Builder with NHL team data)
   - Edge cases (zero values, maximum values, special characters)
   - Error conditions (missing required fields)
   - Export/save functionality

4. DOCUMENT ISSUES
   Track and categorize:
   - **Critical**: Widget crashes or calculations wrong
   - **High**: Confusing UX, unclear instructions, missing feedback
   - **Medium**: Minor usability issues, helpful features missing
   - **Low**: Nice-to-have improvements

5. GENERATE USAGE REPORT
   Provide:
   - Success rate for each persona (% of tasks completed)
   - Time estimates (how long each persona spent)
   - Frustration points (where students struggled)
   - Delightful moments (what worked really well)
   - Specific improvement recommendations with examples

REALISTIC TEST DATA (use these for sports business widgets):
- NHL Teams: Maple Leafs, Canucks, Canadiens
- Revenue amounts: $150M-$500M (realistic NHL range)
- Sponsorship deals: $2M-$50M
- Attendance: 15,000-20,000 per game
- Ticket prices: $80-$300
- Media rights: $50M-$100M annually

OUTPUT FORMAT:
Generate a comprehensive simulation report as widget-simulation-report.md with:
- Executive summary (pass/fail for each persona)
- Detailed interaction logs
- Screenshots of issues (describe what you'd capture)
- Priority-ranked fixes with before/after suggestions`;

async function simulateWidget(widgetPath) {
  console.log(`🎮 Simulating student interactions with: ${widgetPath}\n`);

  try {
    const result = query({
      prompt: `Simulate realistic MBA student interactions with the widget at ${widgetPath}.

Run through all 3 personas (Quick Learner, Methodical Analyst, Struggling Student) and test:
1. First-time use experience
2. Typical sports business scenarios
3. Edge cases and error handling
4. Export/save functionality
5. Mobile responsiveness (based on code review)

Generate widget-simulation-report.md with:
- Pass/fail for each persona
- Specific UX issues found (with line numbers)
- Recommended fixes with code examples
- Usage statistics (success rate, time spent, friction points)
- Screenshots to capture (describe the failing states)

Use realistic sports data: NHL teams, $150M-500M revenues, $2M-50M sponsorships.`,

      options: {
        agents: {
          'widget-student-simulator': {
            description: 'Simulates realistic student interactions to test widget UX and functionality',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: widgetSimulatorPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: widgetSimulatorPrompt,
        permissionMode: 'bypassPermissions'
      }
    });

    for await (const message of result) {
      if (message.type === 'assistant' && message.message?.content) {
        const content = message.message.content;
        for (const block of content) {
          if (block.type === 'text') {
            console.log(block.text);
          }
        }
      }
    }

    console.log('\n✅ Widget simulation complete!');
    console.log('📄 Report saved: widget-simulation-report.md');
  } catch (error) {
    console.error('❌ Error during simulation:', error.message);
  }
}

export { simulateWidget };

if (process.argv[2]) {
  simulateWidget(process.argv[2]);
} else {
  console.log('Usage: node widget-student-simulator.js <widget-path>');
  console.log('Example: node widget-student-simulator.js "../modules/module-1/widgets/revenue-empire-builder.html"');
}
