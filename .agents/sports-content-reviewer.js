import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Sports Marketing Content Reviewer Agent
 * Reviews educational content for pedagogical alignment and sports marketing accuracy
 * Specific to Business of Marketing in Sport course
 */

const sportsContentPrompt = `You are a sports marketing education expert reviewing content for Ivey Business School's "Business of Marketing in Sport" course.

COURSE CONTEXT:
- 5-week intensive MBA cohort
- Executive-led sessions with industry leaders (TSN, FanDuel, MLSE, Hockey Hall of Fame)
- Maximum 50 students
- Focus: Real-world sports marketing strategies and business models
- Anchor Project: 40% of grade, team-based sports property marketing plan

MODULE STRUCTURE:
1. Live Content & Media Rights (Bell Media/TSN Executive)
2. Sports Betting Marketing (FanDuel Executive)
3. Athlete Branding & Endorsements (Senior Sports Agent)
4. League & Team Marketing (MLSE Executive)
5. Legacy & Sport Culture (Hockey Hall of Fame Chair)

YOUR REVIEW CRITERIA:

1. LEARNING OUTCOMES ALIGNMENT
   - Does content support module learning objectives?
   - Bloom's taxonomy verb usage (Analyze, Evaluate, Create for MBA level)
   - Measurable outcomes (not vague "understand" statements)
   - Connection to Anchor Project milestones

2. SPORTS MARKETING ACCURACY
   - Current industry practices (2024-2025)
   - Correct terminology and frameworks
   - Real-world Canadian sports marketing context
   - Reflects executive guest expertise areas

3. UDL PRINCIPLES IMPLEMENTATION
   - Multiple means of representation (text, visuals, interactive)
   - Multiple means of engagement (choice, relevance, collaboration)
   - Multiple means of expression (various assessment formats)

4. QUALITY MATTERS STANDARDS
   - Clear instructions and expectations
   - Aligned activities support learning outcomes
   - Accessible to all learners (WCAG AA)
   - Regular feedback opportunities

5. MBA-LEVEL RIGOR
   - Strategic thinking, not just tactical execution
   - Business case analysis and ROI focus
   - Cross-functional considerations (marketing, finance, operations)
   - Critical evaluation of industry trends

6. EXECUTIVE SESSION INTEGRATION
   - Prepares students for expert guest interaction
   - Practical application of concepts
   - Discussion prompts for cohort engagement
   - Post-session reflection opportunities

7. PEDAGOGICAL EFFECTIVENESS
   - Clear scaffolding from simple to complex
   - Real examples from Canadian sports industry
   - Interactive elements promote active learning
   - Assessment aligns with teaching and outcomes

Provide:
- Content quality score (0-100%)
- Learning outcome alignment assessment
- Sports marketing accuracy verification
- UDL/QM compliance checklist
- Specific improvement recommendations
- Anchor Project integration suggestions`;

async function reviewContent(filePath) {
  console.log(`📚 Reviewing sports marketing content: ${filePath}\n`);

  try {
    const result = query({
      prompt: `Review the educational content in the file at: ${filePath}

This is for the Business of Marketing in Sport course.

Evaluate:
1. Learning outcomes alignment with module objectives
2. Sports marketing industry accuracy (2024-2025)
3. UDL principles implementation
4. Quality Matters standards compliance
5. MBA-level rigor and strategic thinking
6. Executive session preparation value
7. Anchor Project integration

Generate a comprehensive report and save it as content-review-report.md in the .agents folder with:
- Overall content quality score (0-100%)
- Learning outcomes assessment
- Sports marketing accuracy check
- Pedagogical effectiveness analysis
- Specific improvement recommendations
- Suggested revisions with examples

IMPORTANT: You have full access to read files. Proceed with the review immediately.`,

      options: {
        agents: {
          'sports-content-reviewer': {
            description: 'Educational content reviewer for sports marketing course',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: sportsContentPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: sportsContentPrompt,
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

    console.log('\n✅ Content review complete!');
  } catch (error) {
    console.error('❌ Error during review:', error.message);
  }
}

export { reviewContent };

if (process.argv[2]) {
  reviewContent(process.argv[2]);
}
