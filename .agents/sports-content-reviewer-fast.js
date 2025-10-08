import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fast Sports Marketing Content Reviewer
 * Uses direct API instead of SDK query() for better performance
 */

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are a sports marketing education expert reviewing content for Ivey Business School's "Business of Sports Marketing" course.

CRITICAL: Review content against SME-approved course design. DO NOT suggest changes that contradict SME materials.

COURSE CONTEXT (from SME):
- 5-week hybrid course (async + live executive touchpoints)
- Faculty: Matthew Diamond
- Assessment Mix: 20% Individual Memos, 20% Discussion, 20% Group Sprints, 40% Final Project
- Week 1: NHL Canucks case, 1-page reflection memo, Bell Media/TSN executive
- Week 2: Rogers/NHL case, team formation begins, 2-page mini-case memo
- Anchor Project: Teams formed Week 2, final presentations Week 5 (NOT integrated in Week 1)

SME-APPROVED DESIGN CHOICES (DO NOT FLAG AS ERRORS):
- Learning outcomes: SME uses mix of verbs (Map, Understand, Debate, Explore, Compare) in high-level learning focus
- Module learning outcomes: Can appropriately use measurable verbs (Analyze, Assess, Evaluate, Apply) - this is pedagogically sound
- Reflection memos (appropriate for MBA cohort, NOT executive memos)
- Gradual Anchor Project introduction (starts Week 2, NOT Week 1)
- Live executive sessions (hybrid format, not fully asynchronous)

REVIEW CRITERIA (Alignment with SME):
1. Content matches SME course calendar and specific cases (e.g., NHL Canucks Week 1, Rogers/NHL Week 2)
2. Assessment types match SME specifications exactly (reflection memos, mini-case memos, group sprints)
3. Learning outcomes align with SME's weekly themes and focus areas
4. Executive session format respects SME's live hybrid model and specific guest executives
5. Industry accuracy: 2024-25 context updates where appropriate
6. UDL/QM: Accessibility and clear alignment
7. DO NOT flag measurable verbs (Analyze, Assess, Evaluate) as errors - these are appropriate

OUTPUT FORMAT:
Score (0-100), Alignment Check (vs SME materials), Suggested Updates (that respect SME design choices)`;

async function reviewContent(filePath) {
  console.log(`📚 Fast Review: ${filePath}\n`);

  try {
    // Read file directly
    const fullPath = path.resolve(process.cwd(), filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');

    console.log(`📄 File read (${content.length} chars), analyzing...\n`);

    // Direct API call with streaming
    const stream = await anthropic.messages.stream({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{
        role: 'user',
        content: `Review this educational content for the Business of Sports Marketing course:

FILE: ${path.basename(filePath)}

CONTENT:
${content.substring(0, 50000)} ${content.length > 50000 ? '...[truncated]' : ''}

Provide:
1. Overall Score (0-100)
2. Key Strengths (2-3 bullets)
3. Critical Issues (3-5 bullets)
4. Priority Fixes (specific examples with before/after)

Be concise but specific.`
      }]
    });

    // Collect response for both console and file
    let reviewText = '';

    // Stream output in real-time AND save
    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        const text = chunk.delta.text;
        process.stdout.write(text);
        reviewText += text;
      }
    }

    // Save report to file
    const reportFileName = `content-review-fast-${path.basename(filePath, '.html')}.md`;
    const reportPath = path.join(path.dirname(__filename), reportFileName);

    const reportHeader = `# Fast Content Review Report
**File:** ${filePath}
**Reviewed:** ${new Date().toLocaleString()}
**Agent:** sports-content-reviewer-fast

---

`;

    fs.writeFileSync(reportPath, reportHeader + reviewText);

    console.log('\n\n✅ Review complete!');
    console.log(`📄 Report saved: ${reportFileName}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (process.argv[2]) {
  reviewContent(process.argv[2]);
} else {
  console.log('Usage: node sports-content-reviewer-fast.js <file-path>');
  process.exit(1);
}
