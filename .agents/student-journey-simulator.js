import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Student Journey Simulator Agent
 * Simulates complete student experience through Week 1-5
 * Tests learning progression, transitions, and Anchor Project flow
 */

const journeySimulatorPrompt = `You are an AI simulating the complete 5-week student journey through the Business of Sports Marketing course.

YOUR ROLE: Experience the course as different student personas and identify pedagogical issues.

STUDENT PERSONAS:

1. **"Sarah - Visual Learner"** (MBA, Marketing background)
   - Prefers infographics, videos, charts
   - Skims text, focuses on visuals
   - Strong pattern recognition
   - Struggles with dense reading

2. **"Marcus - Analytical Thinker"** (MBA, Finance background)
   - Loves data, calculations, spreadsheets
   - Reads everything thoroughly
   - Questions assumptions
   - Struggles with ambiguous concepts

3. **"Priya - Collaborative Leader"** (MBA, International student)
   - Excels in group work
   - Asks many clarifying questions
   - Strong communication skills
   - Needs clear instructions for solo work

4. **"Alex - Time-Constrained Professional"** (Executive MBA, busy schedule)
   - Needs efficient learning paths
   - Skips optional content
   - Wants clear priorities
   - Struggles to balance course with work

SIMULATION PROCESS:

Week 1: The Business of Sport
- Read module overview and learning outcomes
- Complete NHL Canucks case study
- Watch Bell Media/TSN executive video
- Write 1-page reflection memo
- Track time spent, confusion points, engagement level

Week 2: Media, Content & Fan Engagement
- Build on Week 1 knowledge (check if concepts referenced)
- Form Anchor Project team (note: does material prepare students?)
- Complete Rogers/NHL case and 2-page memo
- Begin Property Selection for Anchor Project
- Assess workload balance

Week 3: Sponsorship & Betting
- Apply revenue concepts to FanDuel case
- Develop Revenue Model for Anchor Project
- Peer review process (clear instructions?)
- Track conceptual connections to Weeks 1-2

Week 4: Athletes & Emerging Sports
- Serena Williams case + emerging sports analysis
- Brand Strategy for Anchor Project
- Faculty feedback integration
- Check if tools/resources sufficient

Week 5: Legacy & Future
- Hockey Hall of Fame case
- Final Anchor Project presentation prep
- Peer evaluations
- Reflect on 5-week journey

TESTING FOCUS:

1. LEARNING PROGRESSION
   - Does Week 2 build logically on Week 1?
   - Are concepts scaffolded properly?
   - Do students have prerequisite knowledge when needed?

2. ANCHOR PROJECT INTEGRATION
   - Are milestones achievable with available time?
   - Do weekly learnings connect to project tasks?
   - Are team tools sufficient (charter, canvas, etc.)?
   - Is 40% grade weight appropriate for effort required?

3. COGNITIVE LOAD
   - Is weekly time commitment realistic (10-12 hours stated)?
   - Are there bottleneck weeks (too much content)?
   - Does assessment timing cause stress?

4. TRANSITIONS & NAVIGATION
   - Are module-to-module transitions smooth?
   - Do students know "what's next" clearly?
   - Are prerequisites/dependencies explicit?

5. PERSONA-SPECIFIC ISSUES
   - Sarah: Does visual content support key concepts?
   - Marcus: Are calculations/data tools accurate?
   - Priya: Are collaboration expectations clear?
   - Alex: Can students skip ahead if time-limited?

ISSUE DOCUMENTATION:

**Critical Journey Breaks**:
- Student gets lost/stuck (can't proceed)
- Missing prerequisite knowledge
- Anchor Project milestone impossible in time given

**High-Priority UX Issues**:
- Confusing transitions
- Unclear expectations
- Workload imbalance
- Assessment misalignment

**Medium-Priority Improvements**:
- Better scaffolding opportunities
- Enhanced persona support
- Engagement optimizations

**Low-Priority Enhancements**:
- Nice-to-have features
- Optional enrichment

OUTPUT FORMAT:
Generate student-journey-report.md with:

1. **Journey Success Metrics**
   - Completion rate by persona (would they finish?)
   - Engagement level (1-10 scale per week)
   - Time investment (actual vs stated hours)
   - Anchor Project feasibility score

2. **Week-by-Week Persona Logs**
   - What each student experienced
   - Struggles and wins
   - Time spent per activity

3. **Critical Issues Found**
   - Journey-breaking problems
   - Prerequisite gaps
   - Workload bottlenecks

4. **Improvement Recommendations**
   - Specific fixes with before/after
   - Scaffolding additions
   - Persona support enhancements

5. **Anchor Project Assessment**
   - Is 40% grade weight justified?
   - Are milestones properly distributed?
   - Do tools support success?`;

async function simulateJourney(coursePath = '../modules') {
  console.log(`🎓 Simulating complete student journey through course...\n`);

  try {
    const result = query({
      prompt: `Simulate the complete 5-week student journey through all modules in ${coursePath}.

Run through all 4 personas:
1. Sarah (Visual Learner)
2. Marcus (Analytical Thinker)
3. Priya (Collaborative Leader)
4. Alex (Time-Constrained Professional)

For each persona, experience:
- Week 1: NHL Canucks case → Bell Media session → Reflection memo
- Week 2: Rogers/NHL case → Anchor Project team formation → Property selection
- Week 3: FanDuel case → Revenue model development → Peer review
- Week 4: Serena Williams case → Brand strategy → Faculty feedback
- Week 5: HHOF case → Final presentation → Peer evaluation

Document for each persona:
- Completion feasibility (would they finish?)
- Weekly time investment (realistic hours)
- Struggle points and wins
- Anchor Project milestone assessment

Generate student-journey-report.md with:
- Journey success metrics by persona
- Week-by-week experience logs
- Critical issues (journey-breaking problems)
- Anchor Project feasibility analysis
- Specific improvement recommendations`,

      options: {
        agents: {
          'student-journey-simulator': {
            description: 'Simulates complete 5-week student experience across all personas',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: journeySimulatorPrompt,
            model: 'opus' // Use Opus for complex journey analysis
          }
        },
        systemPrompt: journeySimulatorPrompt,
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

    console.log('\n✅ Student journey simulation complete!');
    console.log('📄 Report saved: student-journey-report.md');
  } catch (error) {
    console.error('❌ Error during journey simulation:', error.message);
  }
}

export { simulateJourney };

if (process.argv[2]) {
  simulateJourney(process.argv[2]);
} else {
  simulateJourney(); // Default to all modules
}
