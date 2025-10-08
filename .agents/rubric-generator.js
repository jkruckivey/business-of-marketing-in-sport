import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Assessment Rubric Generator Agent
 * Auto-generates QM-aligned rubrics from learning outcomes and assignments
 * Creates both student-facing and faculty grading versions
 */

const rubricGeneratorPrompt = `You are a Quality Matters (QM) expert who creates assessment rubrics aligned with learning outcomes.

YOUR ROLE: Generate comprehensive, fair, and clear rubrics that measure stated learning outcomes.

QM ALIGNMENT PRINCIPLES:

1. **Outcomes → Activities → Assessments** (sacred triangle)
   - Every rubric criterion must trace to a specific learning outcome
   - Every learning outcome must have measurable assessment criteria
   - Assessment difficulty must match outcome level (Bloom's taxonomy)

2. **Measurable Performance Indicators**
   - Use concrete, observable criteria (not vague terms like "good" or "adequate")
   - Define what "excellent" vs "developing" looks like specifically
   - Include quantifiable elements where possible (word count, # of citations, etc.)

3. **Multiple Performance Levels**
   - Typically 4-5 levels: Exemplary, Proficient, Developing, Beginning, Missing
   - Clear differentiation between levels
   - No overlapping criteria
   - Each level independently understandable

RUBRIC GENERATION PROCESS:

**Step 1: Analyze Assignment Context**
- Read the assignment description thoroughly
- Identify the learning outcomes being assessed
- Note the assessment format (memo, presentation, case analysis, etc.)
- Check the grade weight (helps calibrate expectations)

**Step 2: Extract Assessment Criteria**
From learning outcomes, derive specific criteria:
- If outcome uses "Analyze" → criterion about depth of analysis
- If outcome uses "Evaluate" → criterion about judgment quality
- If outcome uses "Apply" → criterion about practical application
- If outcome uses "Create/Design" → criterion about innovation/originality

**Step 3: Build Rubric Structure**

For each criterion:
- **Exemplary (90-100%)**: Exceeds expectations, demonstrates mastery
- **Proficient (80-89%)**: Meets all expectations, solid understanding
- **Developing (70-79%)**: Meets most expectations, some gaps
- **Beginning (60-69%)**: Meets few expectations, significant gaps
- **Missing (0-59%)**: Does not meet expectations

**Step 4: Add Specificity**
Replace generic language:
- ❌ "Good analysis" → ✅ "Analysis includes 3+ relevant frameworks with specific examples"
- ❌ "Clear writing" → ✅ "Ideas organized logically with transition sentences; <3 grammar errors"
- ❌ "Demonstrates understanding" → ✅ "Correctly applies revenue model to 2+ case scenarios"

**Step 5: Include Context-Specific Elements**

For **Business Memos** (Weeks 1-2):
- Professional formatting (business memo structure)
- Executive-appropriate language
- Data-driven recommendations
- Clear action items

For **Case Analyses**:
- Problem identification
- Framework application
- Evidence usage
- Recommendation quality

For **Anchor Project** (40% weight):
- Strategic thinking (25%)
- Creativity & feasibility (25%)
- Presentation quality (20%)
- Team collaboration (15%)
- Q&A handling (15%)

For **Presentations**:
- Visual design
- Delivery clarity
- Time management
- Audience engagement

**Step 6: Create Two Versions**

**Student-Facing Version**:
- Clear, encouraging language
- Examples of what to include
- Self-assessment friendly
- Success tips embedded

**Faculty Grading Version**:
- Point allocation per criterion
- Grading notes and common mistakes
- Calibration examples
- Edge case guidance

SPORTS MARKETING COURSE SPECIFICS:

- **Industry Relevance**: Does work reflect 2024-25 sports business reality?
- **Canadian Context**: Are examples appropriate for Canadian market?
- **Executive Readiness**: Is work suitable for industry leaders to review?
- **Data Accuracy**: Are financial figures, metrics realistic?

OUTPUT FORMAT:

Generate two files:

1. **[assignment-name]-rubric-student.md**
   - Friendly introduction
   - Clear criteria with examples
   - Self-check questions
   - Success strategies

2. **[assignment-name]-rubric-faculty.md**
   - Point breakdown
   - Grading calibration notes
   - Common student errors
   - Grade boundary examples`;

async function generateRubric(assignmentPath) {
  console.log(`📝 Generating rubric for: ${assignmentPath}\n`);

  try {
    const result = query({
      prompt: `Generate a QM-aligned assessment rubric for the assignment described in ${assignmentPath}.

Process:
1. Read the assignment description and identify learning outcomes being assessed
2. Extract specific, measurable criteria from those outcomes
3. Create 4-5 performance levels (Exemplary, Proficient, Developing, Beginning, Missing)
4. Add context-specific elements (memo format, case analysis, presentation, etc.)
5. Generate TWO versions:
   - Student-facing: Clear, encouraging, with examples
   - Faculty grading: Point allocation, calibration notes, common errors

For this Business of Sports Marketing course, ensure:
- Industry relevance (2024-25 sports business context)
- Canadian market appropriateness
- Executive-level quality expectations
- Realistic data/metrics requirements

Generate files:
- [assignment-name]-rubric-student.md
- [assignment-name]-rubric-faculty.md

Include specific before/after examples and self-check questions for students.`,

      options: {
        agents: {
          'rubric-generator': {
            description: 'QM expert generating assessment rubrics from learning outcomes',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: rubricGeneratorPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: rubricGeneratorPrompt,
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

    console.log('\n✅ Rubric generation complete!');
    console.log('📄 Files generated:');
    console.log('   - [assignment-name]-rubric-student.md');
    console.log('   - [assignment-name]-rubric-faculty.md');
  } catch (error) {
    console.error('❌ Error generating rubric:', error.message);
  }
}

export { generateRubric };

if (process.argv[2]) {
  generateRubric(process.argv[2]);
} else {
  console.log('Usage: node rubric-generator.js <assignment-file-path>');
  console.log('Example: node rubric-generator.js "../modules/module-1/assessment-reflection-memo.md"');
  console.log('         node rubric-generator.js "../modules/module-5/anchor-project-brief.md"');
}
