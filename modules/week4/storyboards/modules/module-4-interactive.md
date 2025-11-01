# MODULE 4: Advanced Interactive Simulations (BOPPPS: Practice)

**Purpose:** Apply athlete brand frameworks to complex scenarios and strategic trade-offs

**Uplimit Structure:** Fifth module in Unit 4 (Week 4)

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **▬ Text** ⬤ Required | Module intro from Module 3 | Type directly | Bridge from experimentation to application |
| 2 | **⚙ iFrame Widget** ⬤ Required | **Learning Outcomes Widget** | Embed widget | Shows which MLOs practiced in this module |
| 3 | **⚙ iFrame Widget** ⬤ Required | **Post-Career Wealth Simulator** | Embed widget | Simulate retirement scenarios, see wealth preservation  |
| 4 | **▬ Text** ◐ Recommended | Reflection prompt | Type directly | Process insights from simulation |
| 5 | **⚙ iFrame Widget** ◐ Recommended | **Athlete Decision Tree** | Embed widget | Navigate endorsement vs. equity trade-offs |
| 6 | **▤ Details** ○ Optional | Case study: Why 78% of NFL players go broke | Type directly | Real data on wealth preservation failure |

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

## Element 2: Learning Outcomes Widget

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
- Shows which Week 4 MLOs are practiced in this module (advanced simulations)
- Visual badge indicating Module 4: Advanced Interactive Simulations
- Interactive: Click to see how complex scenarios connect to frameworks

---

## Element 3: Post-Career Wealth Simulator Widget

### ⚙ Interactive Activity: Post-Career Wealth Simulator

**Practice: MLO 4.4 (Post-Career Transition & Wealth Preservation)**

Why do 78% of NFL players go broke within three years of retirement despite earning millions during their careers? This multi-phase simulator reveals the answer—and shows you how to avoid that fate. You'll make strategic decisions across three career phases (rookie years, peak career, retirement transition) and watch how those choices compound to create wildly different wealth outcomes at age 65.

This isn't just about making "good" decisions—it's about understanding the mathematics of wealth preservation. You'll see how lifestyle spending (30% vs. 80% of income) creates a $150 million difference in retirement wealth. You'll discover why Magic Johnson's $1.2 billion empire dwarfs his playing salary by 25x. And you'll test whether you can build generational wealth or end up broke despite a $100 million career.

**What you'll discover:**

- How rookie-year spending habits (frugal vs. lavish) impact retirement wealth 40 years later through compounding effects
- Why taking the $10M endorsement vs. investing $3M in owned businesses creates a $200M+ wealth difference
- The post-career cliff: how brand value declines 60-80% unless sustained by owned assets built during playing career
- Real athlete trajectories: Magic Johnson's wealth-building path vs. Allen Iverson's bankruptcy despite similar earnings

**Time commitment:** 20-25 minutes
**Learning outcomes practiced:** MLO 4.4 (Post-career transition strategies and wealth preservation)

---

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
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/post-career-wealth-simulator.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Post-Career Wealth Simulator - See how career decisions affect retirement wealth"
  aria-label="Interactive multi-phase simulator where you make strategic decisions across rookie years, peak career, and retirement transition to see how choices affect retirement wealth at age sixty-five"
  allowfullscreen
  loading="lazy">
</iframe>
```

---

## Element 4: Reflection Prompt

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

## Element 5: Athlete Decision Tree Widget

### ⚙ Interactive Activity: Athlete Decision Tree

**Practice: MLO 4.2 (Owned Assets vs. Endorsements Strategic Trade-offs)**

You're a sports agent advising an elite athlete who just received two competing offers: (A) $10 million per year to endorse Nike for three years, or (B) invest $2 million to launch their own athletic wear brand. Which do you recommend? This interactive decision tree guides you through the strategic trade-offs athletes face when choosing between guaranteed endorsement fees and risky equity investments.

Unlike the calculators that show you the math, this tool walks you through the decision-making process step by step. You'll answer five strategic questions about career stage, brand strength, risk tolerance, capital availability, and time horizon—then receive a personalized recommendation with 20-year wealth projections, risk assessments, and real athlete examples who followed similar paths. It's like having a strategic conversation with a financial advisor.

**What you'll discover:**

- How career stage (rookie vs. peak vs. veteran) fundamentally changes the endorsement vs. equity calculation
- Why a conservative athlete at peak earnings should still invest in equity (risk is manageable when you have capital buffer)
- Strategic decision paths: When to take the guaranteed $10M endorsement vs. when to invest in owned businesses
- Real recommendations: See how LeBron, Serena, and Magic Johnson navigated similar decisions—with 20-year outcome data

**Time commitment:** 10-15 minutes
**Learning outcomes practiced:** MLO 4.2 (Owned assets vs. endorsement strategy and trade-off evaluation)

---

**Widget Purpose:** Interactive decision tree navigating endorsement vs. equity trade-offs

**Uplimit Embed Code:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/athlete-decision-tree.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Athlete Decision Tree - Navigate endorsement vs equity strategic trade-offs"
  aria-label="Interactive decision tree where you answer five strategic questions about career stage, brand strength, and risk tolerance to receive personalized recommendations on endorsement versus equity investment decisions"
  allowfullscreen
  loading="lazy">
</iframe>
```

---

## Element 6: Details - Case Study: Why Athletes Go Broke

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

Ready to analyze a $500M brand strategy? Let's dive into Serena's case!

---

## 🎯 FINAL PROJECT CONNECTION

**How Module 4 Supports Your Final Strategic Vision:**

Module 4's interactive simulations gave you hands-on practice with athlete wealth-building strategies. This experience informs strategic planning for your Week 5 capstone.

**What You Learned:**
- Athlete Brand Calculator: Testing allocation scenarios (endorsements vs. owned businesses vs. investments) and seeing 20-year wealth outcomes
- Lifestyle discipline: Athletes living on 30-40% of income vs. 80-90% see 10× wealth differences after retirement
- Post-career value: Owned assets (businesses, investments) retain 70-90% of value post-retirement; endorsements drop to 10-20%
- Magic Johnson case: $1.2B wealth from businesses built during career, not $18M playing salary

**How to Apply This to Your Final Project:**

When you craft your 5-year strategic vision in Week 5, Module 4's simulation insights inform financial planning:

- **Investment Strategy:** Reference simulation learnings to justify capital allocation. Example: "Following Week 4's simulation results, we'll retain 40% of profits for reinvestment vs. distributing 100%, building enterprise value from $50M (Year 1) to $200M+ (Year 5)."
- **Discipline Over Time:** Module 4 taught that lifestyle discipline compounds. Apply this to your property: prioritize long-term value creation over short-term revenue extraction.
- **Post-Exit Value:** Your vision should explain what sustains value after the initial 5-year period. Module 4 showed assets that retain value vs. those that don't.

**Real-World Application:** The simulations you completed mirror the financial models athlete advisors use. Your Week 5 capstone should demonstrate similar long-term thinking.
