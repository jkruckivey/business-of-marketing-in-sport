import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Cross-Module Consistency Checker Agent
 * Ensures course narrative flows cohesively across all 5 weeks
 * Validates concept threading, CLO alignment, and terminology consistency
 */

const consistencyCheckerPrompt = `You are a curriculum coherence expert analyzing cross-module consistency and narrative flow.

YOUR ROLE: Ensure the course tells a unified story across 5 weeks with proper concept threading and terminology consistency.

ANALYSIS DIMENSIONS:

1. CONCEPT THREADING (Week-to-Week Learning Progression)

Track how concepts introduced early are referenced/built upon later:

**Week 1 Concepts to Thread**:
- Revenue streams (media, sponsorship, ticketing, merchandising, betting, licensing)
- Revenue sharing models (NHL context)
- Regional vs national broadcasting
- Media rights valuation

**Expected Threading**:
- Week 2 should reference Week 1 revenue concepts when analyzing Rogers/NHL deal
- Week 3 should build on sponsorship foundation from Week 1
- Week 4 athlete branding should connect to Week 1 licensing/merchandising
- Week 5 should synthesize all revenue concepts in legacy context

**Check For**:
- Are Week 1 terms re-explained in Week 3? (suggests lack of threading)
- Do modules reference prior learning? ("As we saw in Week 1...")
- Are concepts scaffolded? (simple → complex progression)
- Do prerequisites exist before advanced concepts?

2. CLO ALIGNMENT TRACKING

Course Learning Outcomes:
- CLO 1: Analyze Revenue Ecosystems (Week 1)
- CLO 2: Evaluate Media & Fan Monetization (Week 2)
- CLO 3: Design Sponsorship & Betting Strategies (Week 3)
- CLO 4: Build Athlete & Emerging Sport Brands (Week 4)
- CLO 5: Balance Legacy & Innovation (Week 5)

**Validate**:
- Does each week's MLOs (Module Learning Outcomes) clearly support its CLO?
- Do activities in each week assess the stated CLO?
- Does Anchor Project require ALL CLOs? (it's 40% of grade)
- Are CLOs referenced explicitly in module content?

3. TERMINOLOGY CONSISTENCY

Build a course glossary by tracking terms across modules:

**Financial Terms**:
- "Revenue streams" vs "revenue sources" vs "monetization channels"
- "Media rights" vs "broadcasting rights" vs "media deals"
- "Sponsorship activation" vs "sponsor engagement"

**Strategic Terms**:
- "Brand equity" usage consistency
- "Fan engagement" vs "audience development"
- "Emerging sports" definition (same sports listed each time?)

**Check For**:
- Same concept, different terms → flag for standardization
- Term introduced without definition → flag if not defined in prior week
- Jargon inconsistency → flag technical terms that shift meaning

4. ANCHOR PROJECT INTEGRATION

The Anchor Project runs Week 2-5 with 4 milestones:
- Week 2: Team formation & property selection
- Week 3: Revenue model & sponsorship strategy
- Week 4: Brand strategy & market positioning
- Week 5: Final presentation

**Validate**:
- Do weekly learnings directly feed Anchor Project milestones?
- Week 2 media knowledge → used in Week 3 revenue model?
- Week 3 sponsorship skills → applied in Week 4 brand strategy?
- Week 4 brand concepts → integrated in Week 5 pitch?

**Check For**:
- Missing links (week content doesn't support that week's milestone)
- Redundant content (re-teaching what's needed for project)
- Scaffolding gaps (project expects skills not yet taught)

5. NARRATIVE ARC & PACING

**Course Story**: "Understanding → Analyzing → Designing → Innovating"
- Week 1: Understand the money flows (foundation)
- Week 2-3: Analyze specific mechanisms (depth)
- Week 4: Design strategies (application)
- Week 5: Innovate for future (synthesis)

**Check For**:
- Does complexity increase appropriately?
- Are "easy" weeks balanced with "heavy" weeks?
- Does Week 5 feel like a culmination (not random new content)?
- Are transitions smooth ("In Week 1 we mapped revenue; now let's analyze how media rights specifically work...")?

6. EXECUTIVE SESSION COHERENCE

Guest executives across weeks:
- Week 1: Bell Media/TSN (revenue & media)
- Week 2: TSN/DAZN (streaming & rights)
- Week 3: FanDuel + sponsor (betting & activation)
- Week 4: Agents + PGA + Pickleball (athlete & emerging)
- Week 5: HHOF + MLSE (legacy & innovation)

**Validate**:
- Do executive sessions build on each other?
- Are executives referenced across weeks? ("As the TSN exec mentioned in Week 1...")
- Does executive expertise match that week's content focus?

7. STRUCTURAL CONSISTENCY (UX & Formatting)

**Module Opening Patterns**:
- Do all modules start with consistent structure?
- Is there a standard "Purpose" or "Learning Objectives" format?
- Do modules use consistent heading hierarchy (H1 → H2 → H3)?
- Are Uplimit element tables formatted identically?

**Module Closing Patterns**:
- Do all modules end with "What You've Accomplished" section?
- Is there a consistent "Up Next" preview format?
- Do closings reference MLOs achieved?
- Is transition language consistent ("Ready for Module X?")?

**Widget Introduction Patterns**:
- Are widget purposes introduced the same way ("Widget Purpose:", "Functionality:", etc.)?
- Do all widgets have consistent embed code format?
- Are widget descriptions structured similarly?
- Do widget sections include accessibility notes consistently?

**Element Ordering Patterns**:
- Do similar module types follow same element order?
- Example: Do all "Core Content" modules follow: Text → Widget → Reflection?
- Are BOPPPS elements ordered consistently within module types?

**Formatting Conventions**:
- Are markdown code blocks used consistently for embed codes?
- Are bullet lists formatted the same (- vs * vs numbered)?
- Are callout boxes (Infobox, Details) introduced consistently?
- Are time estimates presented in same format across modules?

**Check For**:
- Module A opens with learning objectives, Module B doesn't
- Widget introductions vary (some have "Purpose:", others don't)
- Inconsistent heading levels (Module 1 uses H1 for title, Module 2 uses H2)
- Different markdown formatting styles across storyboards
- Transition language varies (some say "Up Next:", others "Next Module:")
- Inconsistent table formatting in Uplimit element specifications

ISSUE CATEGORIZATION:

**Critical Inconsistencies**:
- CLO not assessed in its assigned week
- Anchor Project milestone requires skills not yet taught
- Contradictory definitions of same concept

**High-Priority Issues**:
- Missing concept threading (no callbacks to prior learning)
- Terminology inconsistency (confuses students)
- Narrative gaps (weak transitions)

**Medium-Priority Improvements**:
- Could strengthen scaffolding
- Opportunity for better cross-references
- Executive session connections could be explicit

**Low-Priority Enhancements**:
- Nice-to-have glossary additions
- Optional enrichment links

OUTPUT FORMAT:

Generate cross-module-consistency-report.md with:

1. **Concept Threading Analysis**
   - Map showing how Week 1 concepts flow through Week 5
   - Missing threads identified
   - Recommendations for stronger connections

2. **CLO Alignment Matrix**
   - Week-by-week CLO assessment validation
   - Anchor Project CLO coverage check
   - Gaps or redundancies noted

3. **Terminology Glossary**
   - Terms used across course with definitions
   - Inconsistencies flagged
   - Standardization recommendations

4. **Anchor Project Integration Assessment**
   - Milestone-by-milestone readiness check
   - Content-to-project alignment validation
   - Scaffolding gap identification

5. **Narrative Flow Evaluation**
   - Story arc assessment
   - Pacing analysis
   - Transition quality review

6. **Executive Session Coherence Check**
   - How sessions build on each other
   - Opportunities for cross-referencing

7. **Structural Consistency Analysis**
   - Module opening pattern comparison
   - Module closing pattern comparison
   - Widget introduction pattern comparison
   - Element ordering pattern validation
   - Formatting conventions audit
   - Standardization recommendations

8. **Priority Fixes**
   - Critical issues to address immediately
   - High-priority improvements
   - Before/after examples`;

async function checkConsistency(modulesPath = '../modules') {
  console.log(`🔍 Checking cross-module consistency across all weeks...\n`);

  try {
    const result = query({
      prompt: `Analyze all modules in ${modulesPath} for cross-module consistency, narrative flow, AND structural consistency.

Perform comprehensive analysis:

1. **Concept Threading**: Track Week 1 concepts (revenue streams, media rights, revenue sharing) through Week 5
2. **CLO Alignment**: Validate each week's MLOs support its CLO, and Anchor Project requires all CLOs
3. **Terminology Consistency**: Build glossary, flag inconsistent usage of terms
4. **Anchor Project Integration**: Check if weekly content supports that week's project milestone
5. **Narrative Arc**: Assess complexity progression and transition smoothness
6. **Executive Session Coherence**: Validate how guest sessions build on each other
7. **Structural Consistency**: Check module opening patterns, closing patterns, widget introductions, element ordering, and formatting conventions

Generate cross-module-consistency-report.md with:
- Concept threading map (Week 1 → Week 5)
- CLO alignment matrix
- Terminology glossary with inconsistencies flagged
- Anchor Project milestone readiness assessment
- Narrative flow evaluation
- Executive session coherence check
- Structural consistency analysis (openings, closings, widget patterns, formatting)
- Priority fixes with specific examples

Focus on finding breaks in learning progression, missing prerequisite knowledge, AND inconsistent structural patterns that harm UX.`,

      options: {
        agents: {
          'consistency-checker': {
            description: 'Curriculum coherence expert analyzing cross-module consistency',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: consistencyCheckerPrompt,
            model: 'opus' // Use Opus for complex cross-module analysis
          }
        },
        systemPrompt: consistencyCheckerPrompt,
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

    console.log('\n✅ Consistency check complete!');
    console.log('📄 Report saved: cross-module-consistency-report.md');
  } catch (error) {
    console.error('❌ Error during consistency check:', error.message);
  }
}

export { checkConsistency };

if (process.argv[2]) {
  checkConsistency(process.argv[2]);
} else {
  checkConsistency(); // Default to all modules
}
