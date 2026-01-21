# MODULE 5: Test Your Strategy (BOPPPS: Practice)
**Version:** 2.1.0 | **Last Updated:** 2026-01-20

### Version 2.1.0 Changes
- **ADDED:** Element 4 - AI Roleplay (defend simulation results)
- **RENUMBERED:** What's Next infobox moved to Element 5

### Version 2.0.0 Changes
- **RESTRUCTURED:** Now widget application module (follows Module 4 HHOF context)
- **REPLACED:** Heritage Strategy Decision Tool with Heritage Transformation Strategist
- **ADDED:** HHOF-specific pre-widget context
- **REMOVED:** Video, scenario tables (moved to Module 4)
- **PURPOSE:** Context (M4) → Application (M5) → Reflection (M6) flow

### Version 1.0.0 Changes
- **REMOVED:** 4,000-word case reading, practice quiz, required roleplay, discussion questions
- **KEPT:** Video, scenario comparison table, strategic decision tool
- **RESULT:** ~20 minutes, 75% active engagement

**Purpose:** Apply HHOF strategic context using Heritage Transformation Strategist (supports WLOs 5.1-5.4)

**Uplimit Structure:** Fifth module in Unit 5 (Week 5)

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **▬ Text** ⬤ Required | Connecting intro | Type directly | Bridges from Module 4 |
| 2 | **▬ Text** ⬤ Required | Pre-widget context | Type directly | HHOF-specific framing |
| 3 | **⚙ iFrame Widget** ⬤ Required | Heritage Transformation Strategist | Embed widget | Interactive simulation |
| 4 | **◈ AI Roleplay** ◐ Recommended | Defend Your Strategy | Configure in Uplimit | 3 questions, ~5-8 min |
| 5 | **ⓘ Infobox (Next Steps)** ⬤ Required | What's Next | Type directly | Green variant, transition to Module 6 |

---

## Element 1: Connecting Introduction

**Uplift Implementation:**
1. Select **Text** element
2. Copy markdown below:

```markdown
## Your Turn: Design HHOF's Transformation Strategy

You've seen the Hockey Hall of Fame's dilemma:
- $35M revenue target by 2029
- Three strategic paths with different trade-offs
- Stakeholder tensions (curators vs. sponsors, heritage vs. growth)

Now put yourself in the strategic director's seat. The Heritage Transformation Strategist lets you test different approaches—and see the consequences.
```

---

## Element 2: Pre-Widget Context

**Uplift Implementation:**
1. Select **Text** element
2. Copy markdown below:

```markdown
## Practice: Apply WLO 5.1, 5.2 & 5.4 to the Hockey Hall of Fame

You've learned HHOF's strategic context. Now test whether you can hit their $35M target without destroying institutional credibility.

**Setup for HHOF:**
- Property type: **Hall of Fame**
- Current state: **Declining** (22% attendance drop, 1% digital revenue)
- Your budget: $25M transformation fund

**Try these scenarios:**
- What happens if you prioritize Heritage Preservation? (PRESERVE path)
- What if you go heavy on Digital Transformation and Audience Expansion? (TRANSFORM path)
- Can you find a balanced allocation that achieves $35M with stakeholder support? (HYBRID path)

**Why this matters:** Module 4's tables showed the projected outcomes. This simulation shows *why* those outcomes happen—the compounding effect of stakeholder decisions over 5 years.

**What you'll discover:**
- How budget allocation affects your 5-year revenue and authenticity score
- How stakeholder decisions (traditionalists vs. growth advocates) compound over time
- Whether your instincts align with the HHOF board's 7-4 Hybrid vote
- The trade-offs between short-term revenue and long-term credibility

*Time commitment: 15-20 minutes*
*Learning outcomes practiced: WLO 5.1 (Heritage assets), WLO 5.2 (Balance tradition/innovation), WLO 5.4 (5-year vision)*
```

---

## Element 3: iFrame Widget - Heritage Transformation Strategist

**Widget Name:** "Heritage Transformation Strategist"
**Widget File:** `heritage-transformation-strategist.html`

**Uplimit Embed Code:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/modules/week5/widgets/heritage-transformation-strategist.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Heritage Transformation Strategist - Design HHOF transformation strategy"
  aria-label="Interactive strategy builder where you allocate budget across five categories and navigate stakeholder decisions to balance tradition preservation with revenue growth for the Hockey Hall of Fame"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Widget Features:**
- Heritage property type selector → Select "Hall of Fame"
- Current state assessment → Select "Declining"
- 5-category budget allocation sliders ($25M total):
  - Experience Innovation
  - Digital Transformation
  - Audience Expansion
  - Revenue Optimization
  - Heritage Preservation (minimum required)
- 4-5 stakeholder decision points per year
- Real-time dashboard: revenue growth %, authenticity score, stakeholder sentiment
- Final 5-year outcome summary with strategy grade
- Export option for CFL Expansion Final Proposal reference

**HHOF-Specific Note:**
Students should select:
- **Property Type:** Hall of Fame
- **Current State:** Declining

This matches the HHOF case context from Module 4.

---

## Element 4: AI Roleplay - Defend Your Strategy `[v2.1.0]`

**Scenario Title:** "Defend Your Strategy"

**Purpose:** Brief formative practice where students defend their simulation results to a board member. Not graded—prepares them for Module 6 reflection.

**When to Use:** Immediately after the Heritage Transformation Strategist widget (Element 3)

**Assessment Type:** Formative (not graded)

---

### Uplimit AI Roleplay Configuration

**Tab 1: Learning Outcome**

**Widget Name:** Defend Your Strategy

**Learning Outcome:**
```
Students will defend their Heritage Transformation Strategist simulation results by explaining their budget allocation choices, stakeholder trade-offs, and whether their strategy would work for HHOF. (WLOs 5.2, 5.4 - Application level)
```

**Scenario Setup:** Formative practice (post-simulation debrief)

---

**Tab 2: Scenario**

**Context:**
```
The learner just completed the Heritage Transformation Strategist simulation, testing a 5-year transformation strategy for a heritage property like the Hockey Hall of Fame. They made budget allocation decisions across 5 categories and navigated stakeholder decisions. Now an HHOF board member wants to understand their approach before the full board presentation.
```

**Role of AI (Board Member):**
```
A pragmatic HHOF board member who wants to understand the learner's simulation choices. Genuinely curious about their reasoning and whether their approach would work for HHOF's real situation ($35M target, curator concerns, donor retention).
```

**Role of Student:**
```
The learner explains and defends the strategy they tested in the simulation, connecting their choices to HHOF's actual constraints.
```

---

**Tab 3: Hidden Context**

```
**AI Character Context:**
You are a pragmatic HHOF board member reviewing the learner's simulation results. You're genuinely curious, not hostile.

**Your personality:**
- Practical: You want to understand why they made specific allocation choices
- Concerned about stakeholders: You care about curators and donors
- Results-oriented: You want to know if their strategy hit the $35M target

**Ask exactly 3 questions, then provide brief encouraging feedback:**

Question 1 - Your Approach:
"Walk me through your simulation. How did you allocate the $25M budget? What was your strategy—more like Preserve, Transform, or Hybrid?"

Question 2 - Stakeholder Trade-offs:
"What happened when you faced stakeholder decisions? Did you side with traditionalists or growth advocates? What were the consequences?"

Question 3 - Would It Work for HHOF?:
"Based on your simulation results—your final revenue, authenticity score, and stakeholder satisfaction—would you recommend this approach for HHOF? Why or why not?"

**After 3 questions, provide brief feedback:**
- Acknowledge their strategic thinking
- Note one strength in their reasoning
- Suggest one thing to consider for Module 6 reflection

**HHOF Key Numbers (use to evaluate their responses):**
- Current revenue: $18.1M
- Board target: $35M by 2029 (94% growth needed)
- Three paths: PRESERVE ($21M, misses goal), TRANSFORM ($42M, high risk), HYBRID ($35M, balanced)
- Curators: 8/12 would resign under TRANSFORM
- Donors: 47% would reduce giving under TRANSFORM, 89% stay under HYBRID
- Board preliminary vote: 7/11 support HYBRID

**Widget Categories:**
Students allocated $25M across: Experience Innovation, Digital Transformation, Audience Expansion, Revenue Optimization, Heritage Preservation

**Keep it brief:** This is a 3-question check-in, not a deep interrogation. Be encouraging—this prepares them for Module 6.
```

---

### Student-Facing Instructions (Place as Text element BEFORE AI Roleplay)

```markdown
### Defend Your Simulation Results

You just tested a transformation strategy in the Heritage Transformation Strategist. Now explain your choices to an HHOF board member.

**Be ready to discuss:**
1. How you allocated the $25M budget (which categories got priority?)
2. How you handled stakeholder decisions (traditionalists vs. growth advocates)
3. Your final results (revenue, authenticity score, stakeholder satisfaction)
4. Whether your approach would work for HHOF's real situation

**This is practice, not graded.** Use it to clarify your thinking before Module 6's reflection.

*Time: ~5-8 minutes (3 questions)*
```

---

**Implementation Notes:**
- Title: "Defend Your Strategy"
- Total conversation: 3 exchanges
- Board member initiates with first question
- Click **"Save"** to create the AI Roleplay Scenario

---

## Element 5: Infobox - What's Next

**Uplift Implementation:**
1. Select **Infobox** element
2. Choose variant: **Next Steps** (green)
3. Copy markdown below:

```markdown
Title: ✓ What's Next: Module 6

**After exploring the simulation:**

You've tested different transformation strategies for HHOF. You've seen how budget allocations and stakeholder decisions compound over 5 years.

Module 6 captures what you learned. The 25-point reflection asks you to synthesize your insights from Modules 3-5:
- The Legacy vs Innovation Matrix (Module 3)
- Future trends you'd prioritize (Module 3)
- Your HHOF transformation approach (Modules 4-5)

**Coming Up:**
- 300-word reflection on heritage property strategy
- Connect your simulation experience to your CFL Expansion Final Proposal

Continue to Module 6 when ready.
```

---

## Instructor Notes

**Module 5 Purpose:**
- Apply HHOF context from Module 4 in an interactive simulation
- Brief AI roleplay to articulate and defend choices
- ~20-25 minutes of experiential learning
- No graded assessment—exploration prepares for Module 6 reflection

**Module Flow (4-5-6):**
1. Module 4: HHOF context (video + tables) - understand the dilemma (~10-15 min)
2. Module 5: Apply to HHOF using Heritage Transformation Strategist + defend choices (~20-25 min)
3. Module 6: 25-point reflection on strategic insights

**Why Heritage Transformation Strategist (not Heritage Strategy Decision Tool):**
- Strategist widget allows experimentation with budget allocation
- Students can try multiple approaches (Preserve, Transform, Hybrid)
- Stakeholder decision points show consequences of choices
- More active engagement than comparison tool

**Why AI Roleplay After Widget:**
- Forces articulation of choices (not just clicking through)
- Connects simulation to HHOF's real constraints
- Prepares thinking for Module 6 written reflection
- Brief format (3 questions) respects time

**HHOF Configuration:**
Instruct students to select "Hall of Fame" + "Declining" to match the HHOF case. This ensures their simulation experience directly connects to Module 4's context.

**Total Time Estimate:**
- Widget exploration: 15-20 minutes
- AI roleplay: 5-8 minutes
- **Total Module 5 time: ~20-25 minutes**

---

**File Status:** ✅ Complete and ready for Uplimit implementation
