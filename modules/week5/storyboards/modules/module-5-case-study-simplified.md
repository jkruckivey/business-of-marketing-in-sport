# MODULE 5: Hockey Hall of Fame - Interactive Strategy Analysis
**Version:** 1.0.0 | **Last Updated:** 2026-01-20

**Purpose:** Explore HHOF's strategic dilemma through interactive analysis (supports WLOs 5.1-5.4)

### Simplified Version Changes
- **REMOVED:** 4,000-word case reading, practice quiz, required roleplay, discussion questions
- **KEPT:** Video, scenario comparison table, strategic decision tool
- **RESULT:** ~20 minutes, 75% active engagement

**Uplimit Structure:** Fifth module in Unit 5

| Order | Element | Content/Purpose | Time | Notes |
|-------|---------|-----------------|------|-------|
| 1 | **Text** Required | Quick intro (100 words) | 1 min | Sets up the dilemma |
| 2 | **Video** Required | "HHOF Case: Strategic Analysis" (2 min) | 2 min | Two traps to avoid |
| 3 | **Table** Required | Three scenarios at a glance | 3 min | Preserve vs. Transform vs. Hybrid |
| 4 | **iFrame Widget** Required | Heritage Strategy Decision Tool | 10 min | Test different strategies |
| 5 | **Table** Required | Stakeholder impact summary | 2 min | Who wins/loses in each scenario |
| 6 | **Details** Optional | Full case background + exhibits | Optional | For those who want more |
| 7 | **AI Coach** Optional | Heritage strategy discussion | Optional | Ask questions if curious |

**Total Time:** ~20 minutes (core), +45-60 optional
**Active Engagement:** 75%+

---

## Element 1: The Heritage Dilemma

```markdown
# How Do You Grow Without Losing Your Soul?

The Hockey Hall of Fame faces a choice every heritage property confronts:

- **The Problem:** Attendance down 22% since 2019. Digital revenue is 1% (competitors: 18-22%). Zero tech staff.
- **The Board's Mandate:** Grow from $18M to $35M revenue by 2029.
- **The Tension:** Aggressive growth might destroy the credibility that makes HHOF valuable.

Three paths. Each has trade-offs. None is obviously right.

**Your task:** Explore the scenarios and decide which trade-offs you'd accept.
```

---

## Element 2: Video - Strategic Analysis Framework

- **File:** `week5-hhof-strategic-analysis.mp4`
- **Duration:** 2 minutes
- **Title:** "HHOF Case: Strategic Analysis Framework"
- **Content:** The heritage dilemma, two traps to avoid (assuming growth always wins; assuming tradition always wins), the credibility risk

**Key Quote:** "Once you're perceived as a theme park, you can't go back to being a serious cultural institution."

---

## Element 3: Three Scenarios at a Glance

**Table: Strategic Options Comparison**

| Factor | PRESERVE | TRANSFORM | HYBRID |
|--------|----------|-----------|--------|
| **2029 Revenue** | $21.2M (+17%) | $42.6M (+135%) | $35.1M (+94%) |
| **Capital Required** | $2.1M | $15.2M | $6.8M |
| **Debt Required** | $0 | $10M | $0-1.6M |
| **Achieves $35M Goal?** | No | Yes | Yes |
| **Risk if it fails** | Slow decline | $10M debt + crisis | Manageable |
| **Heritage preserved?** | Yes | At risk | Protected |
| **Curator support** | Full | 8/12 would resign | Supported |
| **Donor support** | 94% retain | 47% retain | 89% retain |

---

## Element 4: Heritage Strategy Decision Tool

**Widget:** `heritage-strategy-decision-tool.html`

```html
<iframe
  src="../../widgets/heritage-strategy-decision-tool.html"
  width="100%"
  height="700"
  title="Heritage Strategy Decision Tool"
></iframe>
```

**What students do:**
- Adjust priorities: revenue growth vs. heritage preservation vs. stakeholder harmony
- See how different weightings change the recommended path
- Test "what if" scenarios (What if VR underperforms? What if donors leave?)
- Compare your recommendation to board's preliminary vote (7/11 chose Hybrid)

---

## Element 5: Stakeholder Impact Summary

**Table: Who Wins, Who Loses**

| Stakeholder | PRESERVE | TRANSFORM | HYBRID |
|-------------|----------|-----------|--------|
| **Curators** (12 senior staff) | Happy | 8 resign | Supported |
| **Major Donors** ($2.1M/year) | 94% stay | 47% stay | 89% stay |
| **Corporate Sponsors** | Disappointed | Excited | Satisfied |
| **Younger Visitors** (18-35) | 15% return | "Would depend" | 41% return |
| **Non-curator Staff** (65 FTE) | 72% feel secure | 31% feel secure | 58% feel secure |
| **Board** | Frustrated (miss goal) | Divided | 7/11 support |

**Key Insight:** No scenario makes everyone happy. Transform maximizes growth but loses curators and donors. Preserve protects heritage but fails the board mandate. Hybrid requires strategic discipline.

---

## Element 6: Want the Full Case? (Optional)

**Accordion Title:** Full case background, exhibits, and financial projections

```markdown
### Part 1: The Heritage Challenge

The Hockey Hall of Fame controls:
- The official induction ceremony
- The Stanley Cup (8 months/year physical custody)
- 40,000+ artifacts
- Partnerships with NHL, Hockey Canada

**Current Revenue:** $18.1M
- Admissions: $6.8M (down 19%)
- Events: $5.4M (only growth area)
- Sponsorship: $3.8M
- Digital: $0.2M (1%)

**Competitive Gap:**
| Metric | HHOF | FIFA Museum | Olympics Museum |
|--------|------|-------------|-----------------|
| Digital Revenue % | 1% | 22% | 18% |
| Tech Staff | 0 | 22 | 14 |
| Digital Members | 0 | 120K | 95K |

---

### Part 2: The Three Scenarios

**PRESERVE:** Curatorial excellence, premium in-person experiences, basic digital refresh. Safe but misses growth target.

**TRANSFORM:** VR arena, 4 international pop-ups, betting partnerships, influencer strategy. High growth but risks identity crisis.

**HYBRID:** Interactive heritage, selective digital membership, 2 domestic pop-ups, curatorial guardrails. Balanced but harder to execute.

---

### Exhibit A: 5-Year Financial Projections

**PRESERVE:**
- 2029 Revenue: $21.2M
- Pessimistic: $18.9M
- No debt

**TRANSFORM:**
- 2029 Revenue: $42.6M
- Pessimistic: $31.4M (fails goal + carries $10M debt)
- Requires $10M financing

**HYBRID:**
- 2029 Revenue: $35.1M
- Pessimistic: $32.1M (still +77% growth)
- Self-fundable

---

### Exhibit B: Stakeholder Quotes

**Senior Curator:** "Transform is a dealbreaker—we'll resign."

**Heritage Donor:** "If you become just another entertainment venue, we'd redirect our donations."

**Corporate Sponsor:** "We're not buying into tradition—we're buying into a growth platform."

**Young Visitor (24):** "It felt like a museum from the 90s."
```

---

## Element 7: AI Coach (Optional)

**Name:** "Heritage Strategy Discussion"

**System Prompt:**
```
You help students think through heritage property strategic dilemmas. Topics include:
- The tension between growth and authenticity
- Stakeholder trade-offs (curators vs. sponsors vs. younger audiences)
- Financial risk assessment (debt vs. self-funding)
- How to operationalize "curatorial guardrails"

Be balanced—don't moralize. Help students see why reasonable people disagree on this.
```

**Student Instructions:**
```markdown
### Have Questions? (Optional)

Curious about the HHOF case? Want to debate whether Hybrid is a compromise or strategic discipline? Ask the AI coach. No pressure—just here if you want to dig deeper.
```

---

## Comparison: Original vs. Simplified

| Aspect | Original | Simplified |
|--------|----------|------------|
| Time | ~90-110 min | ~20 min core |
| Case reading | 4,000 words required | Moved to optional |
| Practice quiz | Required (5 questions) | Removed |
| Interactive tools | 1 AI roleplay | 1 widget + tables |
| Discussion questions | 12 questions | Removed |
| AI Roleplay | Required | Removed (practice in Module 6) |
| AI Coach | N/A | Optional |
| Feeling | Case assignment | Exploration |

---

## Connection to Module 6

The simplified Module 5 gives students enough context to engage with the HHOF strategic dilemma. For the Module 6 assessment, students who want to go deeper can:

1. Read the full case background (Element 6 accordion)
2. Use the AI Coach to test their thinking
3. Reference the scenario comparison tables in their memo

The graded assessment in Module 6 can include the option to either:
- Write a strategic memo (for those who read the full case)
- Complete a shorter strategic recommendation using the decision tool outputs
