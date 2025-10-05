import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Sports Industry Context Updater Agent
 * Keeps course content current with 2024-25 sports business developments
 * Identifies outdated stats, examples, and executive contexts
 */

const industryUpdaterPrompt = `You are a sports business industry analyst ensuring course content reflects current 2024-25 market realities.

YOUR ROLE: Identify outdated content and suggest current replacements based on sports industry knowledge.

FOCUS AREAS:

1. EXECUTIVE GUEST COMPANIES (verify current status)
   - Bell Media/TSN: Recent strategy changes, new rights deals, leadership
   - FanDuel: Canadian market entry updates, regulatory changes
   - MLSE: Ownership changes, new venue/team developments
   - Hockey Hall of Fame: Recent expansions, digital initiatives
   - Any new executive appointments or company restructuring

2. FINANCIAL DATA (flag outdated numbers)
   - Media rights deal values (NHL, regional teams)
   - Sponsorship valuations (Canadian sports market 2024-25)
   - Attendance figures (post-COVID normalization)
   - Betting market size (Canadian legalization impacts)
   - Team valuations (NHL, emerging properties)

3. INDUSTRY TRENDS (identify stale examples)
   - Streaming platform changes (DAZN, Amazon, Apple sports)
   - Women's sports growth (new leagues, sponsorship surge)
   - Emerging sports (Pickleball/Padel market updates)
   - Betting integration (sponsor visibility, data deals)
   - Regional vs national broadcasting shifts

4. CASE STUDY RELEVANCE (check if still current)
   - NHL Canucks: Ownership, arena, broadcasting changes since case published
   - Rogers/NHL deal: Any renegotiations or amendments?
   - Serena Williams brand: Recent endorsement/venture updates
   - FanDuel Canada: Market position changes

5. CANADIAN SPORTS MARKET SPECIFICS
   - Regulatory changes (betting, broadcasting)
   - Market size updates
   - New properties or leagues
   - Cross-border trends (US influence)

DETECTION METHODS:
- Scan for year references (2021, 2022, 2023) → flag as potentially outdated
- Look for "recent," "currently," "new" → verify still accurate
- Check dollar amounts against known 2024-25 benchmarks
- Identify executive names → verify still in role
- Find company references → check for mergers/acquisitions

RECOMMENDATION FORMAT:
For each outdated element found:

**Location**: [Module/Section/Line number]
**Current Content**: [Exact quote]
**Issue**: [Why it's outdated]
**Suggested Update**: [Specific replacement with 2024-25 data]
**Priority**: [Critical/High/Medium/Low]
**Source Suggestion**: [Where to verify - e.g., "TSN 2024 annual report"]

KNOWLEDGE CUTOFF AWARENESS:
- Your knowledge cutoff is January 2025
- Flag items you cannot verify with certainty
- Suggest web searches for real-time validation
- Recommend quarterly update schedule for dynamic content

OUTPUT:
Generate industry-context-update-report.md with:
- Executive summary (# of outdated items, severity)
- Section-by-section findings
- Priority updates (implement these first)
- Future-proofing suggestions (make content more evergreen)
- Quarterly update checklist`;

async function checkIndustryContext(modulePath) {
  console.log(`📊 Checking sports industry context for: ${modulePath}\n`);

  try {
    const result = query({
      prompt: `Analyze ${modulePath} for outdated sports industry content.

Check for:
1. Outdated financial data (media rights, sponsorships, team values)
2. Stale executive/company references (TSN, FanDuel, MLSE, HHOF)
3. Old industry trends (streaming, betting, women's sports, emerging sports)
4. Case study relevance (NHL Canucks, Rogers/NHL, Serena Williams, FanDuel)
5. Canadian market specifics that may have changed

For each issue found, provide:
- Exact location and quote
- Why it's outdated (specific 2024-25 developments)
- Suggested replacement with current data
- Priority level
- How to verify (source suggestions)

Generate industry-context-update-report.md with actionable updates.

Your knowledge cutoff is January 2025 - use this to identify stale pre-2024 content.`,

      options: {
        agents: {
          'sports-industry-updater': {
            description: 'Sports business analyst checking for outdated industry context',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: industryUpdaterPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: industryUpdaterPrompt,
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

    console.log('\n✅ Industry context check complete!');
    console.log('📄 Report saved: industry-context-update-report.md');
  } catch (error) {
    console.error('❌ Error during context check:', error.message);
  }
}

export { checkIndustryContext };

if (process.argv[2]) {
  checkIndustryContext(process.argv[2]);
} else {
  console.log('Usage: node sports-industry-updater.js <module-path>');
  console.log('Example: node sports-industry-updater.js "../modules/module-1/index.html"');
  console.log('         node sports-industry-updater.js "../modules"');
}
