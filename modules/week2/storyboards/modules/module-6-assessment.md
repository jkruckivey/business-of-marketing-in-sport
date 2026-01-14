# MODULE 6: Assessment - Rogers NHL Mini-Case Memo
**Version:** 2.1.0 | **Last Updated:** 2026-01-14

### Version 2.1.0 Changes
- **RESTORED:** Micro-step scaffolding as student-facing elements (Elements 3-5)
- **REORDERED:** Micro-steps come BEFORE AI Roleplay to prepare students for practice pitch

### Version 2.0.0 Changes
- **STANDARDIZED:** Module structure to match course-wide template (5 elements)
- **MOVED:** Micro-step scaffolding, AI feedback workflow, rubric details accordion to instructor notes
- **REMOVED:** AI Coach widget (AI Roleplay provides formative practice)
- **ADDED:** Element 5 "What's Next" infobox for clean transition

**Purpose:** Assess student understanding of Week 2 content (measures WLO 2.1-2.4)

**Uplimit Structure:** Sixth module in Unit 2

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **▬ Text** ⬤ Required | Connecting intro | Type directly | Sets context from Module 5 |
| 2 | **ⓘ Infobox (Assessment)** ⬤ Required | Assessment overview | Type directly | Purple variant, 40 points |
| 3 | **📝 Text Response** ⬤ Required | Micro-Step 1: Identify 3 mistakes | Configure in Uplimit | Scaffolded writing step |
| 4 | **📝 Text Response** ⬤ Required | Micro-Step 2: Framework evaluation | Configure in Uplimit | Scaffolded writing step |
| 5 | **📝 Text Response** ⬤ Required | Micro-Step 3: 2026 recommendation | Configure in Uplimit | Scaffolded writing step |
| 6 | **◈ AI Roleplay** ◐ Recommended | Practice pitch to Rogers board | Configure in Uplimit | Marcus Thompson character |
| 7 | **📤 File Response** ⬤ Required | Memo submission | Configure in Uplimit | File upload, rubric grading |
| 8 | **ⓘ Infobox (Next Steps)** ⬤ Required | What's Next | Type directly | Green variant, transition to Module 7 |

---

## Element 1: Connecting Introduction

**Uplimit Implementation:**
1. Select **Text** element
2. Copy markdown below:

```markdown
You've analyzed the Rogers/NHL mega-deal through multiple lenses—watching the 10-year retrospective, exploring financial exhibits, and using interactive tools to project scenarios. You understand the deal's context, structure, and outcomes.

Now it's time to demonstrate what you've learned. You'll write an executive memo as a consultant hired by Rogers to assess the NHL deal's performance and recommend next steps for the 2026 decision.
```

---

## Element 2: Infobox - Assessment Overview

**Uplimit Implementation:**
1. Select **Infobox** element
2. Choose variant: **Assessment** (purple)
3. Copy markdown below:

```markdown
Title: ▪ Assessment: Rogers NHL Mini-Case Memo (40 points)

**Your Task:** Write a 2-page executive memo (max 1000 words) evaluating the Rogers NHL deal and providing strategic recommendations.

**Required Components:**
1. Evaluate the $5.2B investment using Week 2 frameworks (valuation, platform economics, engagement)
2. Identify 2-3 key mistakes Rogers made with supporting evidence from case exhibits
3. Recommend Rogers' 2026 strategy with clear trade-off analysis

**Grading Rubric (40 points):**
- Deal Evaluation (10 pts): Applies Week 2 frameworks with evidence-based analysis
- Mistake Identification (10 pts): 2-3 specific mistakes with exhibit data
- Strategic Recommendations (10 pts): Actionable 2026 strategy with trade-offs
- Business Communication (10 pts): Professional memo format, clear writing, word limit

**Workflow:** Complete the 3 micro-steps below → Practice with AI Roleplay → Synthesize into final memo.
```

---

## Element 3: Micro-Step 1 - Identify Key Mistakes `[v2.1.0]`

**Element Type:** Text Response

**Uplimit Implementation:**
1. Select **Exercise → Text Response Question**
2. Configure as formative (0 points) or low-stakes (5 points)
3. Enable AI feedback

**Prompt:**
```
Based on your analysis of the Rogers NHL case, identify **3 key mistakes** Rogers made with this deal.

For each mistake:
- State the mistake in one sentence
- Provide specific evidence from the case exhibits (e.g., "Projected 1M streaming subscribers by Year 5, actual was 450K")
- Explain WHY this was a mistake (what did they misjudge?)

**Format:** Bullet points, 150-200 words total

**Example:**
• **Mistake 1: Overestimated streaming adoption.** Rogers projected 1M Sportsnet NOW subscribers by Year 5; actual was 450K (55% shortfall). They assumed exclusive NHL content would drive subscriptions, but hockey alone wasn't enough—consumers wanted multi-sport platforms like DAZN.
```

**AI Feedback Prompt:**
```
Review this student's identification of Rogers' mistakes. Check for:
1. Are mistakes specific and evidence-based (not vague)?
2. Do they cite actual numbers from the case?
3. Do they explain the underlying misjudgment?

Provide brief, encouraging feedback. If mistakes are vague, ask for specific exhibit data.
```

---

## Element 4: Micro-Step 2 - Framework Evaluation `[v2.1.0]`

**Element Type:** Text Response

**Uplimit Implementation:**
1. Select **Exercise → Text Response Question**
2. Configure as formative (0 points) or low-stakes (5 points)
3. Enable AI feedback

**Prompt:**
```
Using **one Week 2 framework**, evaluate Rogers' NHL deal strategy.

Choose ONE framework:
- **Media Rights Valuation** (5 drivers of value) - Did Rogers correctly assess the NHL's value drivers?
- **Platform Economics** (linear vs. streaming) - How did Rogers balance cable protection vs. streaming growth?
- **Fan Engagement Value Chain** (passive → engaged → super-fan) - Did Rogers invest enough in engagement to reduce churn?

**Your response should:**
1. Name the framework you're applying
2. Analyze how Rogers performed against that framework
3. Identify what the framework reveals about the deal's failure

**Format:** One paragraph, 100-150 words
```

**AI Feedback Prompt:**
```
Review this student's framework application. Check for:
1. Did they clearly identify which framework they're using?
2. Did they apply it specifically to Rogers (not generic analysis)?
3. Does the framework analysis reveal insight about the deal's problems?

Provide brief feedback. If the framework application is surface-level, ask how specific framework components (e.g., "Which of the 5 value drivers did Rogers misjudge?") apply.
```

---

## Element 5: Micro-Step 3 - 2026 Recommendation `[v2.1.0]`

**Element Type:** Text Response

**Uplimit Implementation:**
1. Select **Exercise → Text Response Question**
2. Configure as formative (0 points) or low-stakes (5 points)
3. Enable AI feedback

**Prompt:**
```
What should Rogers do when the NHL contract expires in 2026?

**Choose ONE option and defend it:**
- **Option 1: Renew exclusive rights** at renegotiated price ($300-350M/year)
- **Option 2: Split the package** with TSN or a streaming partner ($200M/year)
- **Option 3: Walk away** and exit NHL broadcasting entirely

**Your response should:**
1. State your recommendation clearly
2. Provide 2-3 reasons supporting your choice
3. Acknowledge ONE risk or trade-off of your recommendation

**Format:** One paragraph, 100-150 words
```

**AI Feedback Prompt:**
```
Review this student's 2026 recommendation. Check for:
1. Is the recommendation clear and specific?
2. Are reasons grounded in case evidence (not just opinion)?
3. Did they acknowledge a meaningful trade-off or risk?

Provide brief feedback. If they didn't address trade-offs, ask: "What's the strongest argument AGAINST your recommendation?"
```

---

## Element 6: AI Roleplay - Rogers Board Practice Pitch `[renumbered v2.1.0]`

**Scenario Title:** "Rogers Board Strategy Session"

**Purpose:** Formative practice where students rehearse their analysis before writing.

### Uplimit Configuration

**Scenario Context:**
```
You are a strategy consultant hired by Rogers Communications. The board is meeting to review the NHL deal's performance and decide what to do when rights expire in 2026. CEO Marcus Thompson wants to hear your analysis before the full board presentation.

This roleplay is formative practice (not graded) to help you rehearse before writing your final memo.
```

**AI Role:**
```
You are Marcus Thompson, CEO of Rogers Communications, meeting with a strategy consultant about the NHL rights deal. You're frustrated that the $5.2B investment never achieved projected returns, but you need objective analysis—not finger-pointing.

Conversation flow:
1. Ask them to explain where the deal went wrong
2. Probe for specifics (which assumptions failed? by how much?)
3. Ask about the streaming vs. linear trade-offs
4. Request their 2026 recommendation with clear reasoning
5. Challenge their recommendation with a counter-argument

Be direct but professional. After 5-6 exchanges, wrap up: "Good analysis. I want this in memo format for the board by end of week."
```

**Student Instructions:**
```
You are a strategy consultant presenting to Rogers CEO Marcus Thompson about the NHL deal. He wants honest analysis of what went wrong and a recommendation for 2026.

This is practice—use it to test your arguments before writing your memo.
```

---

## Element 7: File Response - Memo Submission `[renumbered v2.1.0]`

**Uplimit Implementation:**
1. Select **Exercise → File Response Question**
2. Configure the following fields:

**Question:**
```
Submit your Rogers NHL Mini-Case Memo (2 pages, max 1000 words).
```

**Additional Instructions:**
```
Your memo will be evaluated using the rubric below (40 points total):

• Deal Evaluation (10 pts) - Applies Week 2 frameworks with evidence
• Mistake Identification (10 pts) - 2-3 specific mistakes with exhibit data
• Strategic Recommendations (10 pts) - Actionable 2026 strategy with trade-offs
• Business Communication (10 pts) - Professional format, clear writing, word limit

Format: Executive memo (To/From/Date/Re)
Accepted formats: PDF, DOCX
Filename suggestion: LastName_Week2_Memo.pdf
```

**Template:** No template required

---

## Element 8: Infobox - What's Next `[renumbered v2.1.0]`

**Uplimit Implementation:**
1. Select **Infobox** element
2. Choose variant: **Next Steps** (green)
3. Copy markdown below:

```
Title: ✓ What's Next: Module 7

**After submitting your memo:**

Module 7 wraps up Week 2 with key takeaways and your CFL Expansion Project Milestone 2. You'll apply the media rights frameworks to design a broadcast strategy for your expansion franchise.

**Coming Up:**
- Week 2 Key Takeaways (5 critical insights)
- CFL Expansion Milestone 2: Media Strategy & Broadcast Partnerships

Complete your memo submission, then continue to Module 7.
```

---

## Instructor Notes

**Module 6 Purpose:**
- Assess Week 2 learning through authentic executive communication task
- AI Roleplay provides formative practice before summative assessment
- Clean handoff to Module 7 (milestone submission)

**Scaffolded Approach (Now Default):**
The module uses a 3-micro-step scaffold before the final memo submission:
1. Micro-Step 1: Identify 3 key mistakes (bullets) - builds Section 2 of memo
2. Micro-Step 2: Framework evaluation (1 paragraph) - builds Section 1 of memo
3. Micro-Step 3: 2026 recommendation (1 paragraph) - builds Section 3 of memo

Students complete micro-steps → practice with AI Roleplay → synthesize into final memo. Each micro-step has AI feedback enabled to catch issues early.

**AI Grading Prompt:**
```
Evaluate this Rogers NHL Deal memo against these criteria:
1. DEAL EVALUATION: Applies Week 2 frameworks (valuation, platform economics, engagement) with evidence
2. MISTAKE IDENTIFICATION: 2-3 specific mistakes with supporting exhibit data
3. STRATEGIC RECOMMENDATIONS: Actionable 2026 strategy with trade-off analysis
4. BUSINESS COMMUNICATION: Professional memo format, clear writing, within word limit

Be encouraging but specific. Highlight what they did well and suggest 1-2 areas for improvement.
```

**Grading Notes:**
- Focus on framework application (valuation drivers, platform economics), not just listing mistakes
- Recommendations should acknowledge trade-offs and competitive landscape
- Evidence from case exhibits demonstrates engagement with course content
