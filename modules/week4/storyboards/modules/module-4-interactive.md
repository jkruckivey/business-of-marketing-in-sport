# MODULE 4: Advanced Interactive Simulations (BOPPPS: Practice)
**Version:** 1.3.0 | **Last Updated:** 2025-01-27

**Purpose:** Apply athlete brand frameworks to complex scenarios and strategic trade-offs

**Uplimit Structure:** Fifth module in Unit 4 (Week 4)

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **▬ Text** ⬤ Required | Module intro from Module 3 | Type directly | Bridge from experimentation to application |
| 2 | **⚙ iFrame Widget** ⬤ Required | **Post-Career Wealth Simulator** | Embed widget | Simulate retirement scenarios, see wealth preservation  |
| 3 | **▬ Text** ◐ Recommended | Reflection prompt | Type directly | Process insights from simulation |
| 4 | **⚙ iFrame Widget** ◐ Recommended | **Athlete Decision Tree** | Embed widget | Navigate endorsement vs. equity trade-offs |
| 5 | **▤ Details** ○ Optional | Case study: Why 78% of NFL players go broke | Type directly | Real data on wealth preservation failure |

---

## Element 1: Module Introduction

**Uplimit Implementation:**
1. Select **Text** element
2. Copy markdown below:

```markdown
# From Theory to Practice: Complex Strategic Scenarios

You've experimented with building athlete brand portfolios and evaluating emerging sports investments. You understand why equity beats fees and why women's sports offer superior returns.

Now it's time to apply these frameworks to the hardest problems athletes face:

- **Post-career transition:** How to preserve wealth when brand value declines 60-80% after retirement
- **Strategic trade-offs:** When to take the guaranteed $10M endorsement vs. risky $2M equity investment
- **Career-stage decisions:** Different strategies for rookies (need cash flow) vs. peak athletes (build equity) vs. retirement transition (preserve wealth)

This module features advanced simulations that force difficult decisions with incomplete information—just like real strategic planning.
```

---

## Element 2: Post-Career Wealth Simulator Widget

**Widget Purpose:** Simulate how different career decisions create dramatically different retirement wealth outcomes

**File:** `post-career-wealth-simulator.html`

### Widget Functionality:

**Interface:** Three career phases with strategic decisions at each stage

**Phase 1: Rookie Years (Ages 22-26)**
- Salary: $2M-5M/year
- Decisions:
  - Lifestyle spending level (frugal 30% / moderate 50% / lavish 80% of income)
  - Savings rate (0-70%)
  - Investment strategy (conservative bonds / balanced / aggressive growth)

**Phase 2: Peak Career (Ages 27-32)**
- Salary: $10M-25M/year
- Decisions:
  - Accept $10M endorsement OR invest $3M in owned business
  - Allocate windfall across 5 revenue streams
  - Risk tolerance for equity investments

**Phase 3: Retirement Transition (Ages 33-40)**
- Income declines 60-80% (no salary, endorsements expire)
- Decisions:
  - Sell businesses now or hold for growth
  - Transition to post-career ventures (media, coaching, business)
  - Draw down savings vs. let assets compound

**Output Visualization:**
- Wealth trajectory chart (ages 22-65)
- Peak net worth vs. retirement net worth
- Comparison to other simulation paths
- "Wealth Preservation Score" (0-100)

**Preset Scenarios:**
- **Lifestyle Trap:** High spending, low savings → Broke at 45
- **Conservative Builder:** Frugal living, steady investments → $50M at 65
- **Equity Maximizer:** Aggressive equity investing → $200M+ at 65 (but risky)
- **Historical Athletes:** MJ, Magic Johnson, Allen Iverson paths

**Uplimit Embed Code:**
```html
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/post-career-wealth-simulator.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Post-Career Wealth Simulator - See how career decisions affect retirement wealth"
  aria-label="Interactive multi-phase simulator where you make strategic decisions across rookie years, peak career, and retirement transition to see how choices affect retirement wealth at age sixty-five"
  allowfullscreen
  loading="lazy">
=======
=======
>>>>>>> Stashed changes
<iframe src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/post-career-wealth-simulator.html"
        width="900"
        height="800"
        title="Post-Career Wealth Simulator - See how career decisions affect retirement wealth"
        frameborder="0"
        aria-label="Interactive simulation of athlete wealth across career phases with strategic decision points">
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
</iframe>
```

---

## Element 3: Reflection Prompt

```markdown
### What Does Wealth Preservation Require?

After simulating career paths:

**1. Critical Decisions**
- Which phase had the BIGGEST impact on retirement wealth? (Rookie savings? Peak investing? Transition strategy?)
- What's the minimum savings rate during peak years to avoid going broke?
- When should athletes transition from "building wealth" to "preserving wealth"?

**2. Lifestyle vs. Wealth Trade-offs**
- How does lifestyle spending (30% vs. 80% of income) affect 40-year outcomes?
- Can athletes live lavishly AND build wealth? Or must they choose?

**3. Lessons for Your Project**
- If advising an athlete, what's your #1 recommendation?
- How does post-career planning apply to business longevity in your Anchor Project?
```

---

## Element 4: Athlete Decision Tree Widget

**Widget Purpose:** Interactive decision tree navigating endorsement vs. equity trade-offs

**Uplimit Embed Code:**
```html
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/athlete-decision-tree.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Athlete Decision Tree - Navigate endorsement vs equity strategic trade-offs"
  aria-label="Interactive decision tree where you answer five strategic questions about career stage, brand strength, and risk tolerance to receive personalized recommendations on endorsement versus equity investment decisions"
  allowfullscreen
  loading="lazy">
=======
=======
>>>>>>> Stashed changes
<iframe src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/athlete-decision-tree.html"
        width="900"
        height="700"
        title="Athlete Decision Tree - Navigate endorsement vs equity strategic trade-offs"
        frameborder="0"
        aria-label="Interactive decision tree for evaluating athlete brand strategy decisions">
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
</iframe>
```

---

## Element 5: Details - Case Study: Why Athletes Go Broke

```markdown
Title: Case Study: Why 78% of NFL Players Are Broke Within 3 Years of Retirement

[Expand for detailed analysis]

### The Wealth Preservation Crisis

**Statistics:**
- 78% of NFL players are broke or under financial stress within 3 years of retirement
- 60% of NBA players are broke within 5 years of retirement
- Average NFL career: 3.3 years, average earnings: $6.7M total
- Average NBA career: 4.5 years, average earnings: $24M total

### Why Does This Happen? (Not Lack of Earnings)

**Failed Strategy #1: Fee-Based Income Mindset**
- Athletes treat playing career as a job (earn salary, spend salary)
- Don't build equity or investments during peak earning years
- When salary stops, income stops → No wealth engine

**Failed Strategy #2: Lifestyle Inflation**
- Rookie earning $2M/year lives like earning $2M/year
- Peak athlete earning $20M/year lives like earning $20M/year
- Retirement income $0/year → Can't sustain $20M lifestyle → Broke

**Failed Strategy #3: No Post-Career Plan**
- Endorsements tied to playing career expire when relevance fades
- No owned businesses or investments built during career
- Brand value declines 60-80% post-retirement
- Forced to liquidate assets to fund lifestyle

### Contrast: Magic Johnson's Wealth-Building Strategy

**Magic's Playing Career (1979-1991):**
- NBA salary: $18M total
- Endorsements: $30M total
- **Total career earnings: $48M**

**Magic's Post-Career Wealth (1991-Present):**
- Business investments during career: Starbucks franchises, movie theaters, real estate
- Sold Starbucks stake (2010): $75M
- Current business empire valuation: **$1.2 BILLION**
- **Post-career wealth: 25x playing career earnings**

**Key Difference:**
Magic invested in OWNED BUSINESSES during his playing career. These assets appreciated for 30 years post-retirement, compounding to $1.2B. He built wealth engines, not income streams.

### Lessons for Strategy

**For Athletes:**
1. Live on 30-40% of income during peak years, invest 50-60%
2. Build owned businesses and equity investments during career
3. Transition endorsement income to equity investments
4. Plan for 50+ year post-career life, not just next contract

**For Your Anchor Project:**
1. Are you building fee-based income or equity-based wealth?
2. Does your business model create compounding assets or fixed revenues?
3. How will your opportunity sustain value long-term?
```

---

## MODULE 4 Complete - Transition to Module 5

**Key Insights:**
- Wealth preservation requires building equity DURING playing career when brand value is highest
- Lifestyle discipline (living on 30-40% of income) is non-negotiable for long-term wealth
- Post-career brand value declines 60-80% unless sustained by owned assets
- Magic Johnson's $1.2B wealth came from businesses built during career, not playing salary

**Up Next: Module 5 - Serena Williams Case Study**

You've built frameworks, experimented with simulations, and analyzed why athletes succeed or fail at wealth building. Now you'll apply everything to analyze Serena Williams' actual brand strategy:

- How she built a $500M brand on $94M prize money
- Why she prioritized owned businesses over endorsements
- How Serena Ventures creates post-career value
- Strategic decisions you would replicate—and what you'd change

Ready to analyze a real case? Let's dive in.
