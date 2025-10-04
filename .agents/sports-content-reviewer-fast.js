import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Fast Sports Marketing Content Reviewer
 * Uses direct API instead of SDK query() for better performance
 */

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are a sports marketing education expert reviewing content for Ivey Business School's "Business of Marketing in Sport" course.

COURSE CONTEXT:
- 5-week asynchronous MBA course
- Executive sessions: TSN, FanDuel, MLSE, Hockey Hall of Fame
- Anchor Project: 40% team-based marketing plan

REVIEW CRITERIA (Quick Assessment):
1. Learning Outcomes: Measurable verbs (Analyze, Evaluate, Design - NO "Understand")
2. Sports Marketing Accuracy: 2024-25 context, current terminology
3. UDL Implementation: Multiple means of representation/engagement/expression
4. QM Compliance: Clear outcomes, aligned activities, accessible
5. MBA Rigor: Strategic focus, executive-level deliverables
6. Anchor Project: Clear milestone integration

OUTPUT FORMAT:
Score (0-100), Key Issues (3-5 bullets), Priority Fixes (specific examples)`;

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
        content: `Review this educational content for the Business of Marketing in Sport course:

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

    // Stream output in real-time
    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        process.stdout.write(chunk.delta.text);
      }
    }

    console.log('\n\n✅ Review complete!');

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
