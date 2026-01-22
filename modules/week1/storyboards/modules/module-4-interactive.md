# Build Your Revenue Empire
**Version:** 1.5.0 | **Last Updated:** 2026-01-22

**Purpose:** Active learning - build a revenue strategy (supports WLO 1.1, 1.3 - Application level)

### Version 1.5.0 Changes
- **UPDATED:** Element 3 now uses `ecosystem-roleplay.html` (MCQs removed from widget)
- **ADDED:** Elements 3A, 3B, 3C - MC questions after roleplay (built in Uplimit)

---

### ⚠️ SIMPLIFIED WIDGET AVAILABLE (v1.4.0)

The complex Revenue Empire Builder simulation has been replaced with a **simplified branching roleplay** for better testability and Uplimit integration:

| **NEW Widget** | **File** | **Format** |
|----------------|----------|------------|
| Ecosystem Branching Roleplay | `ecosystem-roleplay.html` | 3 decisions → 8 endings + 3 MCQs |

**Why the change:**
- Old simulator had too many variables (sliders) to test reliably
- No verifiable data generated for Uplimit tracking
- New format: Explore → Verify (MCQs) → Discuss (AI Coach)

**Recommendation:** Use `ecosystem-roleplay.html` instead of `revenue-empire-builder.html` for the main activity. Put MCQs in Uplimit for grading. Use AI Chat widget for post-activity discussion.

---

**Uplimit Structure:** Fourth module in Unit 1

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **Infobox (Callout)** ⬤ Required | Brief activity introduction | Type directly | Blue variant, sets context |
| 2 | **Text** ⬤ Required | Detailed instructions and strategic considerations | Type directly | Full setup and guidance |
| 3 | **iFrame** ⬤ Required | Ecosystem Roleplay widget | Custom widget hosted | Branching simulation (8 endings) |
| 3A | **❓ MC Question** ⬤ Required | Growth Chaser underperformance | Configure in Uplimit | Tests ecosystem understanding |
| 3B | **❓ MC Question** ⬤ Required | Ecosystem drivers definition | Configure in Uplimit | Tests driver vs receiver concept |
| 3C | **❓ MC Question** ⬤ Required | Optimal strategy sequence | Configure in Uplimit | Tests sequencing insight |
| 4 | **AI Chat Widget** ○ Optional | Board Strategy Coach (optional) | Configure in Uplimit | Named: "Board Strategy Coach" |
| 5 | **Details** ○ Optional | Hints and strategy tips (optional) | Type directly | Accordion for struggling students |
| 6 | **📤 Response (Text + File)** ⬤ Required | Board Strategy Defense submission | Configure in Uplimit | Text entry OR PDF upload, 30-point rubric |

### Element 1: Infobox Content
```
Title: ◉ Activity: Build Your Revenue Empire

You are the new CFO of a mid-market professional sports team. Your challenge: maximize revenue over a 5-year period by strategically investing $50M across five revenue streams.

After completing the simulation, you'll write a Board Strategy Defense memo (750-1000 words) explaining your allocation decisions, strategic rationale, and risk management approach.

**Practice:** WLO 1.1 (Apply revenue stream knowledge) & WLO 1.3 (Evaluate growth potential and manage risks)

**Time:** 30-45 minutes (simulation) + 45-60 minutes (written defense)
```

---

### Element 2: Text Content - Activity Instructions
**Copy this markdown directly into Uplimit:**

```markdown
# Interactive Activity: Revenue Empire Builder

You've explored each revenue stream through interactive simulations in Five Revenue Streams. Now it's time to put it all together and build a complete revenue strategy.

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

Before you start, consider these key insights from Five Revenue Streams:

- **Media Rights:** High revenue but requires long-term contracts (9-12 years). Once you commit, you're locked in.
- **Ticketing:** Capacity-limited with a ceiling on growth. Stable but can't scale infinitely.
- **Sponsorship:** Relationship-dependent. Takes time to build but can be very profitable. Brand alignment matters.
- **Merchandising:** Lower revenue but low risk. Spikes during championships and star acquisitions.
- **Betting:** Highest growth potential (30-40% year-over-year) but carries regulatory risk.

**Revenue Sharing Reality:** Remember from Five Revenue Streams—most leagues share 40-60% of key revenue streams (national media, licensing). Your allocation decisions don't happen in isolation. If you invest heavily in local revenue streams (ticketing, local sponsorship), you keep more of the upside. But shared streams (national media, merchandising) benefit from league-wide success, not just your team's performance. Consider how revenue sharing affects your risk-return calculus.

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
- **Widget Name:** "Ecosystem Branching Roleplay"
- **Widget File:** `ecosystem-roleplay.html` (branching simulation)
- **Hosted URL:** `https://jkruckivey.github.io/business-of-marketing-in-sport/modules/week1/widgets/ecosystem-roleplay.html`
- **iFrame Size:** 800px × 700px
- **Modal Size:** 1200px × 800px (for pop-out)

**Widget Features:**
- 3 strategic decisions leading to 8 different endings
- Shows how sequence of investments affects total revenue
- Demonstrates "driver" vs "receiver" revenue streams
- Reveals ecosystem cascade effects
- MCQs removed - built natively in Uplimit below

**Widget Accessibility:**
- Keyboard navigation functional ✅
- ARIA labels on all interactive elements ✅
- Color-blind safe color scheme ✅
- Screen reader compatible ✅

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/modules/week1/widgets/ecosystem-roleplay.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Ecosystem Branching Roleplay - Make 3 strategic decisions"
  aria-label="Interactive branching simulation where you make 3 investment decisions and see how sequence affects total revenue through ecosystem cascade effects"
  allowfullscreen
  loading="lazy">
</iframe>
```

---

### Element 3A: MC Question - Growth Chaser Underperformance `[v1.5.0]`

**Question:**
Why did the "Growth Chaser" strategy (focusing on betting) underperform despite betting's 35% growth rate?

**Options:**
- A) Betting revenue was capped by regulations
- B) Betting is a "receiver"—it benefits from fan engagement but doesn't create cascade effects ✓
- C) The recession hurt betting more than other streams

**Correct Answer:** B

**Feedback - Correct:**
Exactly! Betting has a high growth rate, but it's a "receiver" in the revenue ecosystem. It benefits from engaged fans but doesn't create the engagement that drives other streams. Ticketing and media create fans; betting monetizes existing fans. Without the drivers, the receiver has nothing to receive.

**Feedback - Incorrect:**
The key insight is about ecosystem dynamics, not regulations or external factors. Betting is a "receiver" stream—it benefits from engaged fans but doesn't create cascade effects that boost other streams. Growth rate alone doesn't determine strategic value; sequence and ecosystem role matter more.

---

### Element 3B: MC Question - Ecosystem Drivers Definition `[v1.5.0]`

**Question:**
What are "ecosystem drivers" in sports revenue?

**Options:**
- A) Revenue streams with the highest growth rates
- B) Revenue streams that are most profitable
- C) Revenue streams that create ripple effects, boosting other streams ✓

**Correct Answer:** C

**Feedback - Correct:**
Correct! Ecosystem drivers like ticketing and media create ripple effects—engaged fans buy merchandise, watch broadcasts, bet on games, and attract sponsors. They don't just generate direct revenue; they amplify ALL other revenue streams. This multiplier effect is why sequence matters.

**Feedback - Incorrect:**
"Ecosystem drivers" isn't about growth rate or profitability in isolation. It's about ripple effects—streams that create fan engagement which then boosts OTHER streams. Ticketing creates engaged fans → who watch broadcasts → who buy merchandise → who attract sponsors → who bet on games. Drivers create; receivers benefit.

---

### Element 3C: MC Question - Optimal Strategy Sequence `[v1.5.0]`

**Question:**
Based on the simulation, which strategy sequence would likely produce the best results?

**Options:**
- A) Start with betting/merch, then add ticketing later
- B) Build ticketing/media first, then layer betting/merch on top ✓
- C) Spread investment equally across all streams

**Correct Answer:** B

**Feedback - Correct:**
Exactly right! The simulation showed that building ecosystem drivers first (ticketing/media) creates cascade effects that multiply returns on growth streams added later. You need engaged fans before you can monetize them through betting and merchandise. Sequence matters as much as allocation.

**Feedback - Incorrect:**
Think about the ecosystem logic: you need fans before you can monetize fans. Building drivers (ticketing, media) creates the engaged audience that receivers (betting, merch) need to thrive. Equal distribution ignores the cascade effects, and starting with receivers means building on a weak foundation.

---

### Element 4: AI Chat Widget Configuration
- **Widget Name:** "Board Strategy Coach"
- **System Prompt:** "You are a helpful strategy coach for MBA students preparing their Board Strategy Defense memo. Help them think critically about their Revenue Empire Builder results and how to articulate their strategy. Do NOT write their memo for them. Instead, ask probing questions: What trade-offs did you consider? How do your streams create synergies? What risks emerged during the simulation? How would you defend that allocation choice? Focus on: strategic justification, risk management, ecosystem thinking, and professional communication. If students ask you to write content, redirect them to develop their own analysis with your guidance."
- **Welcome Message:** "Ready to prepare your Board Strategy Defense? I can help you think through your allocation decisions, identify key risks, and structure your argument. What aspect of your strategy are you working on?"
- **Show System Prompt:** No

---

### Element 5: Details Content
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

---

### Element 6: Response (Text + File Upload) - Board Strategy Defense

**Assessment Type:** Written submission with rubric evaluation

**Uplimit Configuration:**
1. Select **Exercise - Response** element
2. Enable **Text response** (for direct typing)
3. Enable **File upload** (for PDF submission)
4. Set accepted file types: **PDF only**
5. Configure rubric with 4 criteria (30 points total)
6. Enable AI-assisted grading

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
| **Simulation Engagement** | 5 pts | Recalls specific decisions, market events, and strategic pivots; demonstrates active learning from exercise; uses simulation data (final revenue, risk score) as evidence |
| **Business Communication** | 5 pts | Professional memo format; clear, confident, data-driven writing; appropriate tone for executive audience; within word limit |

**Total:** 30 points

**AI Grading Settings:**
- ✅ Enable automated AI grading
- ✅ Include evaluation levels (Excellent / Proficient / Developing / Needs Improvement)
- ✅ Apply points (30 total)

**Design Rationale:**
- **iFrame widget** provides hands-on, experiential learning (UDL engagement, Application level)
- **Infobox** clearly frames the task and connects to WLOs (QM clarity)
- **Text Response with rubric** measures strategic thinking and communication (Bloom's Application/Analysis)
- **AI Chat** offers adaptive coaching for memo preparation without doing the work (UDL scaffolding)
- **Details** provides hints without giving answers (progressive disclosure for struggling learners)
- Multiple paths to success - no single "right" strategy (UDL choice)
- Written defense mirrors real-world executive communication (authentic assessment)
- Directly supports WLO 1.3 (evaluating growth potential and risks) through authentic practice
- 30-point rubric ensures transparent, consistent evaluation (QM Standard 3)


