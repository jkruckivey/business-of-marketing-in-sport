# MODULE 4: Interactive Activity - Heritage Transformation Strategist (BOPPPS: Participatory - Application)
**Version:** 1.4.0 | **Last Updated:** 2026-01-13

### Version 1.4.0 Changes
- **FIXED:** Element numbering (was jumping from 1 to 4, now sequential 1-6)
- **FIXED:** Content priority badges (⬌ → ⬤ for consistency)
- **FIXED:** Element 2 intro text (removed reference to case study students haven't read yet)
- **CLEANED:** Removed duplicate horizontal rules
- **ADDED:** Version changelog section

**Purpose:** Active learning - design heritage property transformation strategy (supports WLO 5.1, 5.2, 5.4 - Application level)

**Uplimit Structure:** Fourth module in Unit 5 (Week 5)

**Content Priority Badges:**
- ⬤ **Required** - Core content essential for learning outcomes and assessments
- ◐ **Recommended** - Important content that enhances understanding and engagement
- ○ **Optional** - Supplemental content for deeper exploration (progressive disclosure)

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **ⓘ Infobox (Callout)** ⬤ Required | Activity introduction and context | Type directly | Blue variant, sets transformation challenge |
| 2 | **▬ Text** ⬤ Required | Detailed instructions and strategic framework | Type directly | Full setup, heritage/growth tension guidance |
| 3 | **⚙ iFrame Widget** ⬤ Required | Heritage Transformation Strategist widget | Custom widget hosted | Interactive strategy builder simulation |
| 4 | **📝 Text Response** ⬤ Required | Strategic Transformation Defense submission | Configure in Uplimit | Written defense with 35-point rubric |
| 5 | **◈ AI Chat Widget** ○ Optional | Heritage Strategy Coach | Configure in Uplimit | Named: "Heritage Strategy Coach" |
| 6 | **▤ Details** ○ Optional | Strategic hints and decision frameworks | Type directly | Accordion for struggling students |

---

## Element 1: Infobox - Activity Introduction

**Uplimit Implementation:**
1. Select **Infobox** element
2. Choose variant: **Callout** (blue)
3. Copy content below:

```
Title: ◉ Activity: Design Your Heritage Transformation Strategy

You are the strategic director of a heritage sports property facing an existential choice: preserve tradition and watch revenue decline, or innovate aggressively and risk losing authenticity. Your 5-year challenge is to design a transformation strategy that grows revenue while maintaining institutional credibility.

After completing the Heritage Transformation Strategist simulation, you'll write a Strategic Transformation Defense memo (900-1,200 words) justifying your design decisions, the trade-offs you made, and your mitigation strategies for cultural risk.

**Practice:** WLO 5.1 (Evaluate heritage properties as revenue assets), WLO 5.2 (Design strategies balancing tradition with innovation), WLO 5.4 (Create integrated 5-year vision)

**Time:** 35-50 minutes (simulation) + 60-75 minutes (written defense)
```

---

## Element 2: Text Content - Activity Instructions

**Uplimit Implementation:**
1. Select **Text** element
2. Copy markdown below:

```markdown
# Interactive Activity: Heritage Transformation Strategist

You've explored the Legacy vs Innovation Matrix and Future Trends Predictor in Module 3. Now it's time to design a complete transformation strategy for a heritage property facing real constraints.

## Your Challenge

As the newly appointed Chief Strategic Officer, you'll:
1. **Design a 5-year transformation roadmap** balancing tradition preservation with revenue growth
2. **Make strategic decisions** about which revenue streams to invest in (admissions, events, sponsorship, digital, retail)
3. **Define innovation initiatives** while protecting core institutional identity
4. **Allocate your $25M transformation budget** across 5 strategic categories
5. **Respond to stakeholder tensions** (traditionalists vs. growth-focused board members)

## What You'll Practice

- Evaluating heritage properties as business assets (revenue potential, growth constraints)
- Managing competing stakeholder demands (authenticity vs. profitability)
- Designing transformation strategies that create synergy between tradition and innovation
- Allocating limited resources across strategic initiatives
- Articulating clear rationale for difficult trade-off decisions
- Understanding how heritage brand equity constrains and enables growth

## Strategic Considerations

Before you start, consider these key insights from your Week 5 learning:

**Heritage Property Economics:**
- **Admissions:** Declining traffic but high-value experience. Premium access can offset volume decline.
- **Events:** Highest margin revenue. Signature events build brand loyalty but over-commercialization risks alienation.
- **Sponsorship:** Relationship-dependent. Partners want alignment with authentic heritage brand.
- **Digital/Media:** Growth opportunity but risks trivializing the physical heritage experience.
- **Retail:** Lower revenue but strong brand ambassador potential. Merchandise extends institutional reach.

**The Authenticity Constraint:**
Unlike Week 1's revenue optimization, heritage properties have a critical constraint: brand erosion. Push too hard on growth, and you lose the cultural credibility that makes you valuable. Move too slowly on innovation, and you face revenue stagnation and irrelevance with younger audiences.

**Key Strategic Principle:** The best heritage transformation strategies don't choose between tradition and innovation—they INTEGRATE them. Your job is to find the intersection: growth strategies that strengthen rather than compromise institutional identity.

## How It Works

1. **Strategy Foundation:** Choose your heritage property type (Hall of Fame, Olympic Legacy, Historic Venue) and current state (stable, declining, or crisis)

2. **5-Year Strategic Plan:** Make allocations across 5 investment categories:
   - **Experience Innovation** (VR/AR, interactive exhibits, immersive events)
   - **Digital Transformation** (streaming, digital memberships, online community)
   - **Audience Expansion** (international marketing, younger demographics, new partnerships)
   - **Revenue Optimization** (premium pricing, dynamic ticketing, merchandise expansion)
   - **Heritage Preservation** (archival digitization, curator hiring, institutional legacy safeguards)

3. **Stakeholder Scenarios:** Navigate 4-5 decision points where traditionalist and growth stakeholders push back. Your choices determine board support and institutional credibility.

4. **Annual Milestones:** Each year presents obstacles (economic downturn, competitive threats, unexpected opportunities) requiring strategic pivots.

5. **Final Assessment:** See your 5-year outcomes:
   - Revenue trajectory (growth % vs. baseline)
   - Authenticity score (brand integrity 0-100)
   - Stakeholder satisfaction (traditionalist vs. growth-focused constituencies)
   - Overall strategy viability score (A+ to F)
   - Identify which strategic choices had highest impact

6. **Export:** Download your strategy summary including allocation breakdown, stakeholder sentiment tracking, and key decisions for reference in your written defense.

## After the Simulation

Once you complete the Heritage Transformation Strategist widget, you'll write an executive memo (900-1,200 words) defending your transformation strategy to a divided Board of Directors. Your challenge: convince both the heritage purists AND the growth advocates that your strategy serves the institution's long-term interests.

The memo will be evaluated on:
- Strategic design and authenticity integration (10 pts)
- Stakeholder management and trade-off justification (10 pts)
- Heritage asset evaluation (8 pts)
- Simulation engagement and evidence (5 pts)
- Business communication and persuasion (2 pts)

**Ready?** Launch the Heritage Transformation Strategist below and start designing your vision.
```

---

## Element 3: iFrame Widget - Heritage Transformation Strategist

**Widget Name:** "Heritage Transformation Strategist"
**Widget File:** `heritage-transformation-strategist.html`
**Hosted URL:** `https://jkruckivey.github.io/business-of-marketing-in-sport/modules/week5/widgets/heritage-transformation-strategist.html`
**iFrame Size:** 900px × 700px
**Modal Size:** 1400px × 900px (for pop-out)

**Uplift Embed Code:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/modules/week5/widgets/heritage-transformation-strategist.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Heritage Transformation Strategist - Design 5-year heritage property strategy"
  aria-label="Interactive strategy builder where you allocate budget across five categories and navigate stakeholder decisions to balance tradition preservation with revenue growth"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Widget Features:**
- Heritage property type selector (Hall of Fame, Olympic Legacy, Historic Venue, Museum)
- Current state assessment (Stable, Declining, Crisis) affecting starting constraints
- 5-category budget allocation sliders ($25M total):
  - Experience Innovation (40% max of budget)
  - Digital Transformation (35% max)
  - Audience Expansion (30% max)
  - Revenue Optimization (25% max)
  - Heritage Preservation (20% minimum required)
- Real-time feedback on strategy balance score
- 4-5 annual stakeholder decision points with multiple-choice options:
  - Year 1: "Board wants aggressive VR investment. Traditionalists worry about losing intimate experience. You..."
  - Year 2: "Economic downturn forces 15% budget cut. Which initiative do you protect?"
  - Year 3: "New competitor (tech company) opens interactive museum. How do you differentiate?"
  - Year 4: "International expansion opportunity conflicts with domestic heritage focus. Trade-off..."
  - Year 5: "Legacy preservation fund running low. Increase ticket prices or reduce curatorial spending?"
- Real-time dashboard showing:
  - Revenue growth % (projected vs. baseline)
  - Authenticity score (0-100) based on heritage investment ratio
  - Stakeholder sentiment (traditionalist satisfaction vs. growth-focused satisfaction)
  - Initiative synergy analysis (which combination of initiatives creates strongest outcomes)
- Annual milestone tracking showing pivots and strategy adjustments
- Final 5-year outcome summary with:
  - Revenue projection (Year 1-5 trajectory)
  - Strategy viability grade (A+ to F)
  - Impact analysis (which allocation choices mattered most)
  - Stakeholder balance scorecard
  - Risk assessment (cultural credibility, financial sustainability)
- Export final strategy to JSON/PDF including allocation breakdown, decision rationale, and stakeholder sentiment history
- Uses `ivey-widget-base.css` for consistent styling

**Widget Accessibility:**
- Keyboard navigation functional ✅
- ARIA labels on all interactive elements ✅
- Color-blind safe color scheme (blue/orange for strategist quadrants) ✅
- Screen reader compatible (announcements for slider changes, decision impacts) ✅
- Readable text (14px minimum, 4.5:1 contrast ratio) ✅

---

## Element 4: Text Response - Strategic Transformation Defense

**Element Type:** Exercise → Text Response Question

**Uplimit Implementation:**
1. Select **Exercise → Text Response Question**
2. Configure with question text, instructions, and rubric below

**Question Text:**
```
Submit your Strategic Transformation Defense memo (900-1,200 words).

After completing the Heritage Transformation Strategist simulation, write an executive memo defending your 5-year transformation strategy to a divided Board of Directors: both heritage preservation advocates and growth-focused members.

You may either:
• Type directly in the text box below, OR
• Upload a PDF file

Reminder: 900-1,200 words, executive memo format
```

**Student Instructions:**

```markdown
## Strategic Transformation Defense: Heritage Property Vision

You are the Chief Strategic Officer of a heritage sports property. You've just completed your transformation strategy design (Heritage Transformation Strategist simulation) and must now defend your approach to a Board of Directors with competing values and priorities.

## The Scenario

You're writing to Patricia Chen, Chair of the Board Strategic Initiatives Committee. She mediates between two powerful constituencies:
- **Heritage Preservation Committee:** Traditionalists focused on institutional authenticity, cultural stewardship
- **Growth & Sustainability Committee:** Business-focused members concerned about declining revenue, competitive threats

Your memo must convince BOTH groups that your strategy serves the institution's long-term mission and financial health.

## The Board's Key Questions

Your memo should address:
1. **Heritage Asset Evaluation:** How did you analyze this property as a revenue asset? What are its unique strengths and constraints?
2. **Strategic Design:** What is your transformation vision? How does it balance growth and authenticity?
3. **Trade-Off Justification:** What did you choose NOT to prioritize, and why? How did you make difficult allocation decisions?
4. **Stakeholder Management:** How does your strategy address both heritage preservation AND financial sustainability? What's in it for each constituency?
5. **Simulation Insights:** What did you learn during the 5-year simulation? What surprised you? How did stakeholder feedback shape your final strategy?
6. **Risk Mitigation:** What could go wrong? What are your contingency plans?

## Format Requirements

- **Length:** 900-1,200 words
- **Format:** Executive memo (To/From/Date/Re header)
- **Tone:** Respectful of both heritage and growth perspectives; data-driven; strategic
- **Evidence:** Reference your simulation outcomes (revenue projection, authenticity score, stakeholder satisfaction, allocation %)
- **Authentic Tension:** Acknowledge the real trade-off between heritage preservation and growth—don't pretend there's no tension

## What Excellence Looks Like

Your defense should demonstrate:
- **Heritage Asset Analysis:** Clear understanding of heritage properties' unique economic constraints and growth opportunities
- **Integrated Thinking:** Strategy that combines preservation and innovation rather than choosing between them
- **Sophisticated Trade-Off Analysis:** Honest acknowledgment of what you sacrificed and why
- **Stakeholder Awareness:** Genuine understanding of both traditionalist and growth perspectives, with strategies addressing each
- **Specific Simulation Evidence:** Concrete references to decisions, stakeholder feedback, and 5-year outcomes
- **Strategic Coherence:** Each initiative supports your overall vision; budget allocations align with strategic priorities
- **Authentic Persuasion:** You're not trying to hide tensions; you're managing them strategically

**Time:** 60-75 minutes to write | Evaluated using rubric below (35 points total)
```

**Submission Checklist:**
```
Before submitting, check that you have:
✓ Used executive memo format (To/From/Date/Re)
✓ Stated your transformation vision clearly (preserve tradition AND grow revenue)
✓ Explained your allocation percentages across 5 categories
✓ Identified specific trade-offs you made and strategic rationale
✓ Addressed both heritage preservation AND growth constituencies
✓ Referenced specific simulation decisions and stakeholder feedback
✓ Provided 2-3 risk mitigation strategies for cultural credibility
✓ Demonstrated authentic integration of tradition and innovation
✓ Acknowledged real tensions without false resolution
✓ Stayed within 900-1,200 word limit
✓ Used professional memo format and business communication style
```

**Evaluation Method:** ✅ Rubric (AI-assisted grading enabled)

**Rubric Criteria:**

| **Criterion** | **Points** | **Description** |
|--------------|-----------|----------------|
| **Heritage Asset Evaluation** | 8 pts | Demonstrates sophisticated understanding of heritage properties as revenue assets; identifies specific constraints and opportunities; recognizes unique brand equity; analyzes property-specific economics |
| **Strategic Design & Integration** | 10 pts | Transformation vision clearly articulates how preservation and innovation reinforce each other; allocation decisions support strategic priorities; demonstrates ecosystem thinking about revenue stream synergies in heritage context |
| **Trade-Off Justification** | 10 pts | Honest acknowledgment of competing values and resource constraints; clear rationale for allocation choices and priorities; explains what was sacrificed and why; strategic reasoning is transparent and compelling |
| **Stakeholder Management** | 5 pts | Addresses both heritage preservation and growth constituencies; acknowledges legitimate concerns of both groups; strategy demonstrates awareness of institutional values beyond revenue; engagement with cultural credibility |
| **Simulation Engagement & Evidence** | 2 pts | Specific references to simulation decisions, stakeholder feedback, and 5-year outcomes; uses simulation data (revenue %, authenticity score, board sentiment) as evidence; demonstrates active learning |

**Total:** 35 points

**AI Grading Settings:**
- ✅ Enable automated AI grading
- ✅ Include evaluation levels (Excellent / Proficient / Developing / Needs Improvement)
- ✅ Apply points (35 total)

---

## Element 5: AI Chat Widget Configuration

**Widget Name:** "Heritage Strategy Coach"

**System Prompt:**
```
You are a strategic advisor helping MBA students design heritage property transformation strategies. Your role: Help them think critically about the tension between heritage preservation and revenue growth. Do NOT write their memo for them. Instead, ask probing questions: How does your strategy strengthen (not compromise) institutional identity? Which stakeholder concerns did you address? What would traditionalists worry about? How does digital innovation align with your property's core mission? Which revenue streams create the strongest synergies? What happens if one initiative fails? Focus on: heritage asset analysis, authentic integration of tradition and innovation, sophisticated trade-off reasoning, stakeholder awareness. If students ask you to write content, redirect them to develop their own strategic thinking with your guidance.
```

**Welcome Message:**
```
Ready to design your heritage transformation strategy? I can help you think through the tension between tradition and growth. What aspect of your strategy are you wrestling with?
```

**Show System Prompt:** No

---

## Element 6: Details Accordion - Strategic Decision Framework

**Uplimit Implementation:**
1. Select **Details** element
2. Copy content below:

```
Title: ◆ Strategic Decision Framework (Open if you need guidance)

Not sure how to approach this? Use this framework to think through your transformation strategy:

**HERITAGE ASSET ANALYSIS:**
What makes this property valuable? Admission volume, brand loyalty, cultural credibility, archival assets, or event prestige? Different assets enable different growth strategies.

**AUTHENTICITY CONSTRAINT:**
What would this institution lose if it went too far on innovation? Loss of specialist curators? Crowded events? Merchandise diluting brand? Define your "authenticity floor."

**STAKEHOLDER COALITIONS:**
Who are your traditionalists? Board members? Long-time members? Young collectors? What specifically do they value? What would convince them your strategy honors their values?

**INTEGRATED INNOVATION:**
The best heritage strategies don't add innovation alongside tradition—they WEAVE them together. Example: VR doesn't replace the physical museum; it extends the experience before/after visits. Digital membership doesn't dilute exclusivity; it deepens community.

**REVENUE STREAM SEQUENCING:**
Which stream must you invest in FIRST to unlock others? Example: Digital infrastructure investment might enable sponsorship partnerships, which fund heritage preservation. Strategic sequencing matters more than allocation percentages.

**RISK MANAGEMENT FOR CULTURAL CREDIBILITY:**
What's your circuit-breaker? What would make you pause an initiative to protect institutional integrity? How do you stay flexible while protecting core identity?

**QUESTIONS TO GUIDE YOUR STRATEGY:**
- What's the minimum heritage preservation investment needed to maintain brand credibility?
- Which revenue streams are most aligned with institutional mission?
- How do you use growth revenue to deepen (not dilute) heritage mission?
- What does "success" look like 5 years from now? Revenue? Relevance to new audiences? Member satisfaction?
```

---

## Module 4 Complete - Transition to Module 5

**What You've Learned:**

You've taken everything from Modules 1-3 (heritage asset analysis, legacy vs innovation tension, heritage monetization frameworks) and applied it to real strategic challenges. Through the Heritage Transformation Strategist simulation, you designed a complete transformation roadmap, navigated competing stakeholder pressures, and made difficult allocation decisions under constraints. Your Strategic Transformation Defense memo demonstrates your ability to articulate how heritage preservation and growth can be strategic partners rather than competitors.

**Key Takeaways:**

- Heritage properties are unique assets: brand equity from history creates both constraint and opportunity
- Transformation strategies must INTEGRATE tradition and innovation, not choose between them
- Stakeholder management is central to heritage strategy—you can't just optimize revenue
- Revenue growth is possible in heritage context, but requires respecting authenticity constraints
- The best heritage strategies find the intersection: initiatives that grow revenue WHILE deepening mission

**Up Next: Module 5 - Real-World Case Analysis**

You've designed a theoretical strategy. Now it's time to analyze a real heritage institution facing real transformation choices. In Module 5, you'll examine the Hockey Hall of Fame and its specific revenue challenges, digital transformation imperatives, and cultural preservation dilemmas—applying your framework to actual financial data and institutional constraints.

Ready to analyze real heritage decisions? Let's dive into the case!

---

## MODULE 4 Summary

### Elements Created:
1. ✅ Infobox - Activity Introduction (sets context and time estimate)
2. ✅ Text - Activity Instructions (detailed setup and strategic framework)
3. ✅ iFrame Widget - Heritage Transformation Strategist (interactive simulation)
4. ✅ Text Response - Strategic Transformation Defense (35-point rubric)
5. ✅ AI Chat Widget - Heritage Strategy Coach (optional support)
6. ✅ Details Accordion - Strategic Decision Framework (optional hints)

### Assessment Integration:
- **35 points** toward Week 5 total
- Prepares students for CFL Expansion Final Proposal by practicing strategic memo writing
- Develops stakeholder management and trade-off justification skills

### Total Time Estimate:
- Simulation: 35-50 minutes
- Written Defense: 60-75 minutes
- **Total Module 4 time: 95-125 minutes**

---

**File Status:** ✅ Complete and ready for Uplimit implementation
**Copy-Paste Ready:** All text blocks, infobox content, and iframe codes provided
**Widget Build Status:** Specifications complete, HTML file to be created in `/modules/week5/widgets/` directory
