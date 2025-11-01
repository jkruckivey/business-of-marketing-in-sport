## MODULE 4: Interactive Activity - Revenue Empire Builder (BOPPPS: Participatory - Application)
**Purpose:** Active learning - build a revenue strategy (supports MLO 1.1, 1.3 - Application level)

**Uplimit Structure:** Fourth module in Unit 1

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **Infobox (Callout)** ⬤ Required | Brief activity introduction | Type directly | Blue variant, sets context |
| 2 | **⚙ iFrame Widget** ⬤ Required | **Learning Outcomes Widget** | Embed widget | Shows which MLOs practiced in this module |
| 3 | **Text** ⬤ Required | Detailed instructions and strategic considerations | Type directly | Full setup and guidance |
| 4 | **iFrame** ⬤ Required | Revenue Empire Builder widget | Custom widget hosted | Interactive simulation |
| 5 | **Text Response** ⬤ Required | Board Strategy Defense submission | Configure in Uplimit | Written defense with 30-point rubric |
| 6 | **AI Chat Widget** ○ Optional | Board Strategy Coach (optional) | Configure in Uplimit | Named: "Board Strategy Coach" |
| 7 | **Details** ○ Optional | Hints and strategy tips (optional) | Type directly | Accordion for struggling students |

### Element 1: Infobox Content
```
Title: ◉ Activity: Build Your Revenue Empire

You are the new CFO of a mid-market professional sports team. Your challenge: maximize revenue over a 5-year period by strategically investing $50M across five revenue streams.

After completing the simulation, you'll write a Board Strategy Defense memo (750-1000 words) explaining your allocation decisions, strategic rationale, and risk management approach.

**Practice:** MLO 1.1 (Apply revenue stream knowledge) & MLO 1.3 (Evaluate growth potential and manage risks)

**Time:** 30-45 minutes (simulation) + 45-60 minutes (written defense)
```

---

## Element 2: **NEW** - Learning Outcomes Widget

**Uplimit Implementation:**
1. Select **iFrame Widget** element
2. Copy embed code below:

```html
<iframe
  src="../../widgets/learning-outcomes-module-4.html"
  width="100%"
  height="600"
  style="border: none; border-radius: 8px;"
  title="Module 4 Learning Outcomes"
  aria-label="Visual map showing which learning outcomes are practiced in Module 4"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Widget Features:**
- Shows which Week 1 MLOs are practiced in this module (interactive application)
- Visual badge indicating Module 4: Interactive Activity
- Interactive: Click to see how simulation connects to frameworks

---

### Element 3: Text Content - Activity Instructions
**Copy this markdown directly into Uplimit:**

```markdown
# Interactive Activity: Revenue Empire Builder

You've explored each revenue stream through interactive simulations in Module 3. Now it's time to put it all together and build a complete revenue strategy.

## Your Challenge

As the newly appointed CFO, you'll:
1. **Allocate your $50M investment budget** across the 5 revenue streams (media rights, ticketing, sponsorship, merchandising, betting)
2. **Make year-by-year decisions** about reinvestment for Years 1-5
3. **Respond to market events** (recessions, new competitors, regulatory changes)
4. **Balance growth against risk** to achieve target revenue while managing portfolio volatility

## What You'll Practice

- Allocating budget across media rights, ticketing, sponsorship, merchandising, and betting
- Managing portfolio risk vs. growth potential trade-offs
- Responding to unexpected market events and opportunities
- Understanding how revenue streams create synergies (ecosystem thinking)

## Strategic Considerations

Before you start, consider these key insights from your Module 3 learning:

- **Media Rights:** High revenue but requires long-term contracts (9-12 years). Once you commit, you're locked in.
- **Ticketing:** Capacity-limited with a ceiling on growth. Stable but can't scale infinitely.
- **Sponsorship:** Relationship-dependent. Takes time to build but can be very profitable. Brand alignment matters.
- **Merchandising:** Lower revenue but low risk. Spikes during championships and star acquisitions.
- **Betting:** Highest growth potential (30-40% year-over-year) but carries regulatory risk.

**Key Strategic Principle:** Diversification helps weather market changes. No single allocation strategy is "correct" - your job is to justify YOUR choices based on risk tolerance and growth goals.

## How It Works

1. **Year 1:** Allocate your $50M budget across the 5 streams using interactive sliders
2. **Years 2-5:** Respond to 4 market event scenarios with multiple-choice decisions
3. **Final Results:** See your 5-year revenue growth, risk score, and performance grade (A+ to F)
4. **Export:** Download your strategy summary to reference when writing your Board Strategy Defense memo

## After the Simulation

Once you complete the Revenue Empire Builder, you'll write an executive memo (750-1000 words) defending your strategy to the Board of Directors. The memo will be evaluated on:
- Strategic justification (10 pts)
- Risk management (10 pts)
- Simulation engagement (5 pts)
- Business communication (5 pts)

**Ready?** Launch the Revenue Empire Builder below and start building your strategy.
```

### Element 3: iFrame Specifications
- **Widget Name:** "Revenue Empire Builder"
- **Widget File:** `revenue-empire-builder.html` (custom interactive simulation)
- **Hosted URL:** `https://jkruckivey.github.io/business-of-marketing-in-sport/widgets/revenue-empire-builder.html`
- **iFrame Size:** 800px × 600px
- **Modal Size:** 1200px × 800px (for pop-out)

**Widget Features:**
- Interactive budget allocation sliders
- Scenario-based decision points (e.g., "New streaming service offers rights deal - accept?")
- Real-time feedback on revenue performance
- Risk indicators for each stream
- Final score/performance summary
- Uses `ivey-widget-base.css` for consistent styling

**Widget Accessibility:**
- Keyboard navigation functional ✅
- ARIA labels on all interactive elements ✅
- Color-blind safe color scheme ✅
- Screen reader compatible ✅

---

### Element 5: Text Response - Board Strategy Defense

**Assessment Type:** Written submission with rubric evaluation

**Question Text:**
```
Submit your Board Strategy Defense memo (750-1000 words).

After completing the Revenue Empire Builder simulation, write an executive memo defending
your 5-year revenue investment strategy to the Board of Directors.

You may either:
• Type directly in the text box below, OR
• Upload a PDF file

Reminder: 750-1000 words, executive memo format
```

**Student Instructions:**
```markdown
## Board Strategy Defense: Revenue Empire Presentation

You are the newly appointed CFO of a mid-market professional sports team. You've just
completed your first strategic planning exercise (Revenue Empire Builder) and must now
defend your 5-year revenue investment strategy to the Board of Directors in writing.

## The Scenario
You're writing to Margaret Torres, Chair of the Board Finance Committee. She's a former
Fortune 500 CFO with no sports industry experience—which means she'll challenge assumptions
and demand clear explanations.

Your memo should address:
1. **Investment Allocation:** How you allocated your $50M investment budget across the five
   revenue streams (Media, Ticketing, Sponsorship, Merchandising, Betting)
2. **Strategic Rationale:** Why you made those specific choices and what trade-offs you considered
3. **Risk Management:** What risks you're taking and how you'll mitigate them
4. **Simulation Insights:** What you learned during the 5-year simulation (market events,
   pivots, unexpected outcomes)

## Format Requirements
- **Length:** 750-1000 words
- **Format:** Executive memo (To/From/Date/Re header)
- **Tone:** Professional, data-driven, confident
- **Evidence:** Reference your simulation results (allocation %, final revenue, risk score,
  key decisions)

## What Excellence Looks Like
Your defense should demonstrate:
- Clear understanding of how each revenue stream works
- Sophisticated thinking about trade-offs (growth vs. stability, risk vs. reward)
- Ecosystem thinking (how streams create synergies)
- Real-world awareness (capacity limits, regulatory risk, competitive dynamics)
- Specific simulation moments that shaped your strategy

**Time:** 45-60 minutes to write | Evaluated using rubric below (30 points total)
```

**Additional Instructions for Submission:**
```
Before submitting, check that you have:
✓ Used executive memo format (To/From/Date/Re)
✓ Stated your allocation percentages clearly (Media %, Ticketing %, etc.)
✓ Explained strategic rationale with trade-off analysis
✓ Identified 2-3 specific risks per major stream and mitigation strategies
✓ Referenced specific simulation decisions and market events
✓ Demonstrated ecosystem thinking (revenue stream synergies)
✓ Stayed within 750-1000 word limit
✓ Used professional business communication style
```

**Evaluation Method:** ✅ Rubric (AI-assisted grading enabled)

**Rubric Criteria:**

| **Criterion** | **Points** | **Description** |
|--------------|-----------|----------------|
| **Strategic Justification** | 10 pts | Clear allocation with strong rationale; explains trade-offs between growth/stability; demonstrates sophisticated understanding of revenue stream characteristics; ecosystem thinking evident |
| **Risk Management** | 10 pts | Identifies 2-3 specific risks per major stream; proposes concrete mitigation strategies; shows scenario planning; references simulation events that tested strategy |
| **Simulation Engagement** | 5 pts | Recalls specific decisions, market events, and strategic pivots; demonstrates active learning from widget; uses simulation data (final revenue, risk score) as evidence |
| **Business Communication** | 5 pts | Professional memo format; clear, confident, data-driven writing; appropriate tone for executive audience; within word limit |

**Total:** 30 points

**AI Grading Settings:**
- ✅ Enable automated AI grading
- ✅ Include evaluation levels (Excellent / Proficient / Developing / Needs Improvement)
- ✅ Apply points (30 total)

---

### Element 6: AI Chat Widget Configuration
- **Widget Name:** "Board Strategy Coach"
- **System Prompt:** "You are a helpful strategy coach for MBA students preparing their Board Strategy Defense memo. Help them think critically about their Revenue Empire Builder results and how to articulate their strategy. Do NOT write their memo for them. Instead, ask probing questions: What trade-offs did you consider? How do your streams create synergies? What risks emerged during the simulation? How would you defend that allocation choice? Focus on: strategic justification, risk management, ecosystem thinking, and professional communication. If students ask you to write content, redirect them to develop their own analysis with your guidance."
- **Welcome Message:** "Ready to prepare your Board Strategy Defense? I can help you think through your allocation decisions, identify key risks, and structure your argument. What aspect of your strategy are you working on?"
- **Show System Prompt:** No

---

### Element 7: Details Content
```
Title: ◆ Strategy Hints (Open if you're stuck)

Not sure how to approach this? Here are some strategic considerations:

**Diversification:**
Don't put all your eggs in one basket. Even high-growth streams have risks.
A balanced portfolio can weather market changes better.

**Media Rights:**
High revenue potential but requires long-term contracts. Once you commit, you're
locked in. Make sure you're negotiating from strength (winning teams get better deals).

**Ticketing:**
Capacity-limited. You can only sell so many seats. Premium seating and dynamic
pricing can increase yield, but there's a ceiling. Consider this a stable base,
not a growth engine.

**Sponsorship:**
Relationship-dependent. Building strong partnerships takes time but can be very
profitable. Brand alignment matters - don't just chase the biggest check.

**Betting/Gaming:**
High growth potential but regulatory risk. Early movers can capture value, but
stay flexible in case laws change.

**Key Question:**
Which streams create synergies? (Hint: Better players → better content → higher
media rights → more resources for players...)
```

**Design Rationale:**
- **iFrame widget** provides hands-on, experiential learning (UDL engagement, Application level)
- **Infobox** clearly frames the task and connects to MLOs (QM clarity)
- **Text Response with rubric** measures strategic thinking and communication (Bloom's Application/Analysis)
- **AI Chat** offers adaptive coaching for memo preparation without doing the work (UDL scaffolding)
- **Details** provides hints without giving answers (progressive disclosure for struggling learners)
- Multiple paths to success - no single "right" strategy (UDL choice)
- Written defense mirrors real-world executive communication (authentic assessment)
- Directly supports MLO 1.3 (evaluating growth potential and risks) through authentic practice
- 30-point rubric ensures transparent, consistent evaluation (QM Standard 3)

---

## 🎯 FINAL PROJECT CONNECTION

**How Module 4 Supports Your Final Strategic Vision:**

Module 4 gave you hands-on practice building integrated revenue strategies and defending them under scrutiny. This is the exact skill required for your Week 5 capstone.

**What You Learned:**
- Revenue allocation across streams requires balancing growth potential vs. risk vs. competitive positioning
- Strategic decisions must be justified with data, not assumptions (Board Strategy Defense memo practice)
- Market events (economic downturns, streaming disruption, betting legalization) force real-time strategic pivots
- Integrated thinking beats stream-by-stream optimization

**How to Apply This to Your Final Project:**

When you craft your 5-year strategic vision in Week 5, Module 4's Board Strategy Defense becomes your template:

- **Strategic Rationale:** Every major decision in your vision needs explicit justification. Module 4 taught you to anticipate skeptical questions and pre-emptively address them: "Why invest $50M in this stream? Because our modeling shows 3-year payback with 15% IRR."
- **Risk Management:** Use Module 4's scenario modeling to stress-test your vision. What happens if media rights decline 20%? If betting is banned in your jurisdiction? Your capstone should include contingency plans.
- **Integrated Strategy:** Don't present five separate revenue stream strategies. Module 4 taught you to show how streams reinforce each other. Your vision should demonstrate ecosystem thinking throughout.

**Real-World Application:** The Revenue Empire Builder simulation forced you to make strategic trade-offs under constraints. Your Week 5 capstone will face the same challenge: limited capital, competing priorities, uncertain futures. Module 4 taught you how to navigate that complexity.

---

## Module 4 Complete - Transition to Module 5

**What You've Learned:**
You've applied everything from Modules 2-3 by building a complete revenue strategy. Through the Revenue Empire Builder simulation, you made real-time allocation decisions across all five revenue streams, responded to market events, and balanced growth against risk. Your Board Strategy Defense memo demonstrates your ability to justify strategic choices with data and sophisticated thinking.

**Key Takeaways:**
- Strategic allocation requires balancing growth potential against risk exposure
- No single "correct" strategy exists—success depends on justifying your choices
- Revenue streams create synergies when managed as an ecosystem
- Market events require adaptive thinking and strategic pivots
- Executive communication demands clear reasoning and evidence-based arguments

**Up Next: Module 5 - Real-World Case Analysis**
You've built a theoretical strategy. Now it's time to analyze a real organization facing real constraints. In Module 5, you'll examine the Vancouver Canucks and their revenue-sharing challenges—applying your framework to actual financial data and strategic dilemmas.

Ready to see theory meet reality? Let's dive into the case!

---

