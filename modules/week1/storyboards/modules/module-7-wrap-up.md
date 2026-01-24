# MODULE 7: Wrap-Up & Anchor Project Milestone 1
**Version:** 2.3.0 | **Last Updated:** 2026-01-21

### Version 2.3.0 Changes
- **MODIFIED:** Element 2A - CFL City Selector simplified to reference tool (removed rationale textarea and export, students submit via LMS)

### Version 2.2.0 Changes
- **ADDED:** Element 2A - CFL City Selector widget (was built but never embedded)

### Version 2.1.0 Changes
- **ADDED:** Element 6 - Recommended Readings (PwC Sports Industry Outlook)

### Version 2.0.0 Changes
- **STANDARDIZED:** Minimal exit structure (Key Takeaways + Milestone + What's Next)
- **REMOVED:** Separate preview text, project connection text, optional resources, design rationale
- **CONSOLIDATED:** Week 2 preview into single "What's Next" infobox

**Purpose:** Complete CFL Expansion Milestone 1, transition to Week 2

**Uplimit Structure:** Final module in Unit 1

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **ⓘ Infobox (Callout)** ⬤ Required | Week 1 key takeaways | Type directly | 5 critical insights |
| 2 | **▬ Text** ⬤ Required | Anchor Project Milestone 1 Introduction | Type directly | Sets context for milestone |
| 2A | **⚙ iFrame Widget** ◐ Recommended | CFL City Selector | Embed `cfl-city-selector.html` | Interactive city comparison tool |
| 3 | **ⓘ Infobox (Assessment)** ⬤ Required | Milestone 1 Brief | Type directly | Purple variant, 15 points |
| 4 | **📤 File Response** ⬤ Required | Milestone 1 Submission | Configure in Uplimit | File upload |
| 5 | **ⓘ Infobox (Next Steps)** ⬤ Required | What's Next | Type directly | Green variant, transition to Week 2 |
| 6 | **⊞ Details** ◐ Recommended | Recommended Readings | Type directly | Accordion, external industry sources |

---

## Element 1: Infobox Content

```
Title: ◉ Week 1 Key Takeaways

You've completed your introduction to sport revenue ecosystems! The five critical insights: (1) revenue streams are interdependent (not isolated), (2) sport operates uniquely with on-field competition alongside economic collaboration, (3) revenue sharing balances competitive equality against entrepreneurial constraints, (4) centralized merchandising (like NFL Properties) creates league-wide value that individual teams couldn't achieve alone, and (5) frontier opportunities exist in betting and streaming. This foundation prepares you for Week 2's deep dive into media rights and fan engagement monetization—two of the highest-value and fastest-changing revenue streams. Well done!

**Up Next:** CFL Expansion Milestone 1, then Week 2 preview.
```

---

## Element 2: Anchor Project Milestone 1 Introduction

**Uplimit Implementation:**
1. Select **Text** element
2. Copy markdown below:

```markdown
## CFL Expansion Project: Milestone 1 - Market Selection & Revenue Projections

Welcome to your first Anchor Project milestone! Throughout this course, you'll develop a comprehensive expansion proposal for a new CFL franchise. Each week builds on the previous, culminating in a complete business plan.

**Your Challenge:** Select a Canadian city for CFL expansion and project its 5-year revenue potential using the frameworks you learned this week.

**Why This Matters:** Before any professional sports league expands, they conduct rigorous market analysis. You're doing the same work that real league executives do when evaluating expansion opportunities.

### Step 1: Select Your City

Use the City Selector tool below to explore seven potential expansion markets. You can view cities as cards or compare them side-by-side in a table. When you select a city, you'll see the complete market profile including:

- Population and demographics
- Stadium status and venue options
- Competitive sports landscape
- Corporate sponsorship base
- Football culture and fan potential
- Key strengths and challenges

Use this information to write the "City Selection & Justification" section of your Market Analysis Brief.

### Step 2: Apply Week 1 Frameworks

After selecting your city, you'll need to:
- Project 5-year revenue across all 5 streams (media, ticketing, sponsorship, merchandise, betting)
- Consider how CFL revenue sharing affects your franchise economics
- Analyze what competes for entertainment dollars in your market

Your complete brief is submitted as a file upload after the City Selector.
```

---

## Element 2A: CFL City Selector Widget `[v2.3.0]`

**Widget Purpose:** Reference tool for exploring and comparing Canadian expansion city options. Students use this data to write their Market Analysis Brief (submitted separately in the LMS).

**Embed Code:**
```html
<iframe
  src="../../widgets/cfl-city-selector.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="CFL City Selector - Compare expansion market options"
  aria-label="Interactive tool for comparing Canadian cities as CFL expansion candidates based on population, demographics, corporate base, and existing sports landscape"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Widget Features:**
- Compare 7 Canadian cities (Halifax, Quebec City, Saskatoon, London, Moncton, Victoria, Kitchener-Waterloo)
- Card view or side-by-side comparison table
- Select a city to see complete market profile:
  - Metro population & demographics
  - Stadium status & options
  - Competitive sports landscape
  - Corporate base strength
  - Football culture assessment
  - Key strengths and challenges

**How Students Use It:**
1. Explore cities using cards or comparison table
2. Select a city to view full market profile
3. Use the displayed data to write their 1-page "City Selection & Justification" section
4. Submit completed Market Analysis Brief via file upload (Element 4)

---

## Element 3: Infobox - Milestone 1 Brief

**Uplimit Implementation:**
1. Select **Infobox** element
2. Choose variant: **Assessment** (purple)
3. Copy markdown below:

```markdown
Title: ▪ Anchor Project Milestone 1: Market Selection & Revenue Projections (15 points)

**Deliverable:** 2-3 page Market Analysis Brief

**Required Components:**
1. **City Selection & Justification** (1 page): Population, demographics, existing sports landscape, corporate base, stadium options, football culture
2. **5-Year Revenue Projections** (1 page): All 5 streams—media (CFL sharing model), ticketing, sponsorship, merchandising, betting
3. **Competitive Analysis** (0.5 page): What competes for the same entertainment dollars?

**Grading Rubric (15 points):**
- City Selection Justification (5 pts): Clear rationale, market data, realistic assessment
- Revenue Projections (5 pts): All 5 streams addressed, reasonable assumptions, shows Week 1 framework application
- Competitive Analysis (3 pts): Identifies key competitors, positions CFL appropriately
- Professional Presentation (2 pts): Clear writing, logical organization

**Due:** End of Week 1
```

---

## Element 4: File Response Question - Milestone 1 Submission

**Uplimit Implementation:**
1. Select **Exercise → File Response Question**
2. Configure the following fields:

**Question:**
```
Submit your CFL Expansion Milestone 1: Market Analysis Brief. Your brief should be 2-3 pages and include all 3 required sections: City Selection & Justification, 5-Year Revenue Projections, and Competitive Analysis.
```

**Additional Instructions (optional):**
```
Your brief will be evaluated using the rubric below (15 points total):

• City Selection Justification (5 pts) - Clear rationale with market data, realistic assessment of opportunity
• Revenue Projections (5 pts) - All 5 streams addressed with reasonable assumptions
• Competitive Analysis (3 pts) - Key competitors identified, CFL positioned appropriately
• Professional Presentation (2 pts) - Clear writing, logical organization, polished formatting

Accepted formats: PDF, DOCX
Filename suggestion: LastName_M1_MarketAnalysis.pdf
```

**Template:** No template required

**Rubric Configuration:**

---

**CRITERION 1: City Selection Justification**

**Points:** 5

**Description:**
Student selects a Canadian city for CFL expansion and justifies the choice using market data including population, demographics, corporate base, and venue options.

**Does not meet expectations:** 0 points
City choice lacks justification or uses only superficial criteria (e.g., "I like this city"). Missing key market data on population, demographics, corporate base, or venue options. No analysis of why this market would support a CFL franchise.

**Partially meets expectations:** 3 points
City selection includes some market data but analysis is incomplete. May address population and demographics but miss corporate base or venue considerations. Justification present but doesn't fully convince reader this is a viable CFL market.

**Fully meets expectations:** 5 points
Comprehensive market analysis with clear rationale. Addresses population, demographics, sports landscape, corporate base, and venue options. Shows understanding of what makes a CFL expansion market viable. Reader understands why THIS city is a strong candidate.

---

**CRITERION 2: Revenue Projections**

**Points:** 5

**Description:**
Student projects 5-year revenue across all five streams (media, ticketing, sponsorship, merchandise, betting) with clear assumptions grounded in CFL economics.

**Does not meet expectations:** 0 points
Revenue projections missing or incomplete. Fewer than 3 of 5 revenue streams addressed. No assumptions stated. Numbers appear arbitrary or unrealistic for CFL scale.

**Partially meets expectations:** 3 points
All 5 revenue streams addressed but projections lack detail or clear assumptions. Some numbers may be optimistic without justification. Shows basic understanding of revenue streams but doesn't demonstrate how market characteristics affect projections.

**Fully meets expectations:** 5 points
All 5 revenue streams projected with clear assumptions. Numbers grounded in CFL benchmarks or comparable markets. Shows how market characteristics (from city selection) influence revenue potential. Projections realistic for expansion franchise in years 1-5.

---

**CRITERION 3: Competitive Analysis**

**Points:** 3

**Description:**
Student identifies key competitors for entertainment dollars in the chosen market and explains how a CFL franchise would position against them.

**Does not meet expectations:** 0 points
No competitive analysis or only generic statements ("there is competition"). Doesn't identify specific competitors for entertainment dollars in the chosen market.

**Partially meets expectations:** 2 points
Identifies some competitors but analysis is surface-level. May list other sports teams without explaining how CFL would compete. Missing analysis of non-sports entertainment competition.

**Fully meets expectations:** 3 points
Identifies key competitors (other sports, entertainment options) specific to chosen market. Explains how CFL franchise would position against them. Shows understanding of the competitive landscape for entertainment spending in this market.

---

**CRITERION 4: Professional Presentation**

**Points:** 2

**Description:**
Student delivers a clear, well-organized document with professional writing appropriate for business review.

**Does not meet expectations:** 0 points
Document poorly organized, contains significant errors, or exceeds page limit substantially. Difficult to follow or missing required sections.

**Partially meets expectations:** 1 point
Meets basic requirements but writing could be clearer. Some organizational issues or minor errors. Adequate but not polished.

**Fully meets expectations:** 2 points
Clear, professional writing. Logical organization with all required sections. Appropriate length (2-3 pages). Ready for business review.

---

## Element 5: Infobox - What's Next

**Uplimit Implementation:**
1. Select **Infobox** element
2. Choose variant: **Next Steps** (green)
3. Copy markdown below:

```
Title: ✓ What's Next: Week 2

**Week 2: Media, Content & Fan Engagement**

Next week goes deep on the largest and most dynamic revenue stream: media rights. You'll learn how rights are valued and negotiated, compare linear broadcasting to streaming economics, and analyze the Rogers/NHL $5.2B deal.

**Executive Leader:** Al Dak, SVP Revenue, Rogers Sports and Media
**Core Case:** Rogers Communications: Sportsnet and NHL Rights (W16179)

**Milestone 2 Preview:** You'll develop your CFL franchise's media strategy—how will your new team maximize media value and build fans before the first game?

See you in Week 2!
```

---

## Element 6: Details - Recommended Readings

**Uplimit Implementation:**
1. Select **Details** element
2. Copy content below:

```
Title: 📚 Recommended Readings

**PwC Sports Industry Outlook 2025** (pp. 12-18)
Industry benchmark report covering revenue mix across professional sports: media rights (40-60%), ticketing (20-30%), sponsorship growth forecasts, and betting market projections (2-8%, growing 30-40% annually). Essential context for understanding how the five revenue streams compare across leagues.

*Focus on:* Revenue mix benchmarks by league, sponsorship growth trajectories, emerging revenue categories.

[Link to PwC Sports Outlook Report]
```

---

## Instructor Notes

**Module 7 Purpose:**
- Consolidate Week 1 learning through key takeaways
- Complete Milestone 1 submission
- Clean transition to Week 2

**Grading Notes:**
- Focus on application of Week 1 frameworks
- Revenue projections should use realistic CFL-scale assumptions
- Competitive analysis should position CFL appropriately in Canadian sports landscape
