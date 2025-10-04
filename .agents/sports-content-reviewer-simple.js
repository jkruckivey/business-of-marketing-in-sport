import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Sports Marketing Content Reviewer (Simplified)
 * Direct API approach without Agent SDK restrictions
 */

const sportsContentPrompt = `You are a sports marketing education expert reviewing content for Ivey Business School's "Business of Marketing in Sport" course.

COURSE CONTEXT:
- 5-week intensive MBA cohort
- Executive video content with industry leaders (TSN, FanDuel, MLSE, Hockey Hall of Fame)
- Maximum 50 students, asynchronous learning
- Focus: Real-world sports marketing strategies and business models
- Anchor Project: 40% of grade, team-based sports property marketing plan

MODULE STRUCTURE:
1. The Business of Sport - Where the Money Flows (Bell Media/TSN)
2. Media, Content & Fan Engagement (DAZN/Streaming)
3. Sponsorship & Betting (FanDuel + Brand Sponsors)
4. Athletes, Brands & Emerging Sports (Sports Agents, PGA, Golf Canada)
5. Legacy, Culture & Future Monetization (Hockey Hall of Fame, MLSE)

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

6. EXECUTIVE VIDEO CONTENT INTEGRATION
   - Prepares students for recorded expert content
   - Practical application of concepts
   - Discussion prompts for async engagement
   - Post-video reflection opportunities

7. PEDAGOGICAL EFFECTIVENESS
   - Clear scaffolding from simple to complex
   - Real examples from Canadian sports industry
   - Interactive elements promote active learning
   - Assessment aligns with teaching and outcomes`;

async function reviewContent(filePath) {
  console.log(`📚 Reviewing sports marketing content: ${filePath}\n`);

  try {
    // Read the file content
    const absolutePath = path.resolve(__dirname, '..', filePath.replace('../', ''));
    console.log(`📄 Reading file: ${absolutePath}`);

    if (!fs.existsSync(absolutePath)) {
      throw new Error(`File not found: ${absolutePath}`);
    }

    const fileContent = fs.readFileSync(absolutePath, 'utf-8');
    console.log(`✅ File read successfully (${fileContent.length} characters)\n`);

    // Initialize Anthropic client
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });

    console.log('🤖 Sending content to Claude for review...\n');

    // Send to Claude for review
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      system: sportsContentPrompt,
      messages: [{
        role: 'user',
        content: `Please review this educational content for the Business of Marketing in Sport course.

FILE: ${path.basename(absolutePath)}

CONTENT:
${fileContent}

Evaluate:
1. Learning outcomes alignment with module objectives
2. Sports marketing industry accuracy (2024-2025)
3. UDL principles implementation
4. Quality Matters standards compliance
5. MBA-level rigor and strategic thinking
6. Executive video content preparation value
7. Anchor Project integration

Provide a comprehensive review with:
- Overall content quality score (0-100%)
- Learning outcomes assessment
- Sports marketing accuracy check
- Pedagogical effectiveness analysis
- Specific improvement recommendations
- Suggested revisions with examples

Format your response as a detailed markdown report.`
      }]
    });

    // Extract the response
    const reviewText = message.content[0].text;
    console.log('✅ Review received from Claude\n');
    console.log('='.repeat(60));
    console.log(reviewText);
    console.log('='.repeat(60));

    // Save report to .agents folder
    const reportPath = path.join(__dirname, 'content-review-report.md');
    const reportContent = `# Sports Marketing Content Review

**File Reviewed:** ${filePath}
**Date:** ${new Date().toISOString()}
**Reviewer:** Sports Content Reviewer Agent

---

${reviewText}

---

*Generated by Sports Content Reviewer Agent*
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log(`\n📝 Report saved: ${reportPath}`);
    console.log('\n✅ Content review complete!');

  } catch (error) {
    console.error('❌ Error during review:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
  }
}

export { reviewContent };

if (process.argv[2]) {
  reviewContent(process.argv[2]);
}
