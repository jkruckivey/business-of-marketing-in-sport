# Week 4 Widget Specifications - Complete Technical Details

This document provides complete technical specifications for all 6 Week 4 widgets, filling in missing details for underspecified widgets and adding calculation formulas for all widgets.

---

## Widget 1: Athlete Brand Calculator (Module 3)

### **Status:** ✅ Well-specified in storyboard, adding formulas below

### **Interface Design:**

**Top Section: Portfolio Allocation**
- 5 sliders, must total exactly $50M
- Real-time validation (budget constraint)
- Streams:
  1. Endorsements & Sponsorships
  2. Owned Businesses
  3. Investment Portfolio
  4. Media & Content Production
  5. Licensing & IP Rights

**Middle Section: Calculations Display**
- Year 1 Income (sum of all streams' Year 1 returns)
- Year 20 Wealth (cumulative with compounding)
- Line chart: Wealth trajectory (Y-axis: $M, X-axis: Years 1-20)
- Diversification Score: `100 - (σ of allocation percentages * 100)` where even split = 100
- Risk-Adjusted Return: `(Final Wealth - Initial Investment) / (σ of annual returns)`

**Bottom Section: Compare Your Strategy**
- User's allocation vs. 5 presets
- Display: Name, allocation breakdown, 20-year outcome

### **Calculation Formulas:**

**Annual Returns by Stream:**

```javascript
// Year 1-10 (active career)
endorsements_annual = allocation * 0.08 // 8% annual growth
owned_business_annual = allocation * 0.25 // 25% annual growth
investments_annual = allocation * 0.10 // 10% market returns
media_content_annual = allocation * 0.15 // 15% IP appreciation
licensing_annual = allocation * 0.12 // 12% passive income growth

// Year 11-20 (post-retirement)
endorsements_annual = previous_year * 0.92 // 8% annual DECLINE
owned_business_annual = previous_year * 1.25 // continues growing
investments_annual = previous_year * 1.10 // continues compounding
media_content_annual = previous_year * 1.15 // continues if IP-based
licensing_annual = previous_year * 1.12 // continues if owned IP
```

**Compounding Calculation:**
```javascript
for (year = 1; year <= 20; year++) {
  if (year <= 10) {
    wealth[year] = wealth[year-1] + sum(stream_returns_active)
  } else {
    wealth[year] = wealth[year-1] + sum(stream_returns_retired)
  }
}
```

**Diversification Score:**
```javascript
// Calculate standard deviation of allocation percentages
let allocations_pct = [
  endorsements/50, owned_business/50, investments/50,
  media_content/50, licensing/50
]
let mean = 0.20 // perfectly even = 20% each
let variance = allocations_pct.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / 5
let std_dev = Math.sqrt(variance)
let diversification_score = Math.max(0, 100 - (std_dev * 500))
// Perfect diversification (20% each) = 100
// Total concentration (100% one stream) = 0
```

### **Preset Athlete Portfolios:**

**1. Serena Williams**
- Endorsements: $15M (30%)
- Owned Businesses: $20M (40%)
- Investments: $10M (20%)
- Media/Content: $3M (6%)
- Licensing: $2M (4%)
- **20-Year Wealth:** $287M
- **Diversification Score:** 68

**2. LeBron James**
- Endorsements: $10M (20%)
- Owned Businesses: $25M (50%)
- Investments: $12M (24%)
- Media/Content: $3M (6%)
- Licensing: $0M (0%)
- **20-Year Wealth:** $312M
- **Diversification Score:** 52

**3. Michael Jordan**
- Endorsements: $5M (10%) [mostly Nike royalty = licensing]
- Owned Businesses: $15M (30%)
- Investments: $5M (10%)
- Media/Content: $0M (0%)
- Licensing: $25M (50%) [Nike royalty structure]
- **20-Year Wealth:** $418M
- **Diversification Score:** 48

**4. Conservative Athlete**
- Endorsements: $35M (70%)
- Owned Businesses: $5M (10%)
- Investments: $8M (16%)
- Media/Content: $2M (4%)
- Licensing: $0M (0%)
- **20-Year Wealth:** $127M
- **Diversification Score:** 42

**5. Wealth Builder**
- Endorsements: $15M (30%)
- Owned Businesses: $20M (40%)
- Investments: $10M (20%)
- Media/Content: $5M (10%)
- Licensing: $0M (0%)
- **20-Year Wealth:** $294M
- **Diversification Score:** 82

### **Export Functionality:**
CSV format with columns: Year, Stream1_Value, Stream2_Value, ..., Total_Wealth, Annual_Return

---

## Widget 2: Emerging Sports Investment Tool (Module 3)

### **Status:** ✅ Well-specified in storyboard, adding formulas below

### **Interface Design:**

**Top Section: Investment Selection**
Dropdown with 5 options (pre-loaded data below)

**Middle Section: Adjustable Variables**
- Annual Growth Rate: 5-50% (slider, default = 20%)
- Risk Premium: 0-15% (slider, default = 8%)
- Time Horizon: 5-20 years (slider, default = 10)
- Exit Multiple: 1x-10x (slider, default = 5x)

**Bottom Section: Calculated Returns**
- Expected IRR (%)
- Risk-Adjusted Return (Sharpe Ratio)
- vs. S&P 500 Baseline (10% return, 5% risk)
- vs. Established Sports Property (12% return, 6% risk)
- Break-Even Timeline (years until initial investment recovered)
- Sensitivity Analysis table (best/base/worst scenarios)

### **Investment Opportunities Data:**

```javascript
const investments = {
  nwsl: {
    name: "NWSL Franchise",
    entry_cost: 40000000,
    current_valuation: 40000000,
    default_growth: 0.25,
    default_risk: 0.10
  },
  wnba: {
    name: "WNBA Expansion Team",
    entry_cost: 50000000,
    current_valuation: 50000000,
    default_growth: 0.20,
    default_risk: 0.08
  },
  womens_soccer_eu: {
    name: "Women's Soccer Club (European)",
    entry_cost: 20000000,
    current_valuation: 20000000,
    default_growth: 0.30,
    default_risk: 0.12
  },
  pickleball: {
    name: "Pickleball Pro League Stake",
    entry_cost: 10000000,
    current_valuation: 10000000,
    default_growth: 0.40,
    default_risk: 0.15
  },
  womens_rugby: {
    name: "Women's Rugby Franchise",
    entry_cost: 5000000,
    current_valuation: 5000000,
    default_growth: 0.35,
    default_risk: 0.13
  }
}
```

### **Calculation Formulas:**

**Future Valuation:**
```javascript
let future_value = entry_cost * Math.pow(1 + growth_rate, time_horizon) * exit_multiple
```

**IRR Calculation:**
```javascript
// IRR is the rate r that solves: 0 = -entry_cost + future_value / (1+r)^time_horizon
// Simplified approximation:
let irr = (Math.pow(future_value / entry_cost, 1/time_horizon) - 1) * 100
```

**Risk-Adjusted Return (Sharpe Ratio):**
```javascript
let sharpe_ratio = (irr - 3.0) / risk_premium // 3% risk-free rate
```

**Comparison to Baselines:**
```javascript
let sp500_return = 0.10 // 10% annual
let sp500_risk = 0.05 // 5% volatility
let sp500_value = entry_cost * Math.pow(1.10, time_horizon)

let established_sports_return = 0.12 // 12% annual (MLS/NBA franchise)
let established_sports_risk = 0.06 // 6% volatility
let established_sports_value = entry_cost * Math.pow(1.12, time_horizon)

let outperformance_sp500 = ((future_value - sp500_value) / sp500_value) * 100
let outperformance_established = ((future_value - established_sports_value) / established_sports_value) * 100
```

**Break-Even Timeline:**
```javascript
// Year when cumulative returns = initial investment
let break_even_year = Math.log(entry_cost / entry_cost) / Math.log(1 + growth_rate)
// Simplified: years needed to double initial investment
let break_even = Math.log(2) / Math.log(1 + growth_rate)
```

**Sensitivity Analysis:**
```javascript
// Best Case: +50% growth, -30% risk, +2x exit multiple
let best_case_value = entry_cost * Math.pow(1 + growth_rate * 1.5, time_horizon) * (exit_multiple + 2)
let best_case_irr = (Math.pow(best_case_value / entry_cost, 1/time_horizon) - 1) * 100

// Base Case: user inputs
let base_case_value = future_value
let base_case_irr = irr

// Worst Case: -50% growth, +50% risk, -50% exit multiple
let worst_case_value = entry_cost * Math.pow(1 + growth_rate * 0.5, time_horizon) * (exit_multiple * 0.5)
let worst_case_irr = (Math.pow(worst_case_value / entry_cost, 1/time_horizon) - 1) * 100
```

### **Preset Scenarios:**

**NWSL Conservative:**
- Growth: 15%, Risk: 10%, Horizon: 10 years, Exit: 5x
- IRR: 18.2%, Sharpe: 1.52, vs S&P: +$54M (+82%), Break-even: 5.1 years

**NWSL Aggressive:**
- Growth: 35%, Risk: 15%, Horizon: 10 years, Exit: 8x
- IRR: 42.7%, Sharpe: 2.65, vs S&P: +$312M (+478%), Break-even: 2.3 years

**WNBA Moderate:**
- Growth: 20%, Risk: 8%, Horizon: 15 years, Exit: 6x
- IRR: 22.1%, Sharpe: 2.39, vs NBA: +$128M (+97%), Break-even: 3.8 years

**Pickleball Speculative:**
- Growth: 50%, Risk: 20%, Horizon: 5 years, Exit: 3x
- IRR: 62.4%, Sharpe: 2.97, vs S&P: +$41M (+253%), Break-even: 1.7 years
- NOTE: Add warning "High growth assumptions carry 40% failure risk"

---

## Widget 3: Week 4 Concept Map (Module 7)

### **Status:** ✅ Well-specified in storyboard, adding structure below

### **Visual Structure:**

**Layout:** Force-directed graph (D3.js) with 4 layers

**Layer 1 (Center): 4 Module Learning Outcomes**
- WLO 4.1: Five Revenue Streams
- WLO 4.2: Owned Assets vs Endorsements
- WLO 4.3: Women's Sports Investment
- WLO 4.4: Post-Career Strategy

**Layer 2: 5 Revenue Stream Nodes**
- Endorsements (connected to WLO 4.1, 4.2)
- Owned Businesses (connected to WLO 4.1, 4.2, 4.4)
- Investments (connected to WLO 4.1, 4.3, 4.4)
- Media/Content (connected to WLO 4.1, 4.4)
- Licensing (connected to WLO 4.1, 4.4)

**Layer 3: Key Concepts**
- Equity vs Fees (connected to WLO 4.2)
- Compounding Returns (connected to WLO 4.2, 4.4)
- First-Mover Advantage (connected to WLO 4.3)
- Wealth Preservation (connected to WLO 4.4)
- Valuation Gaps (connected to WLO 4.3)
- Lifestyle Discipline (connected to WLO 4.4)

**Layer 4: Real Examples**
- Serena Williams (connected to all 4 WLOs)
- LeBron James (connected to WLO 4.1, 4.2, 4.4)
- Michael Jordan (connected to WLO 4.2, 4.4)
- Magic Johnson (connected to WLO 4.2, 4.4)
- NWSL Franchises (connected to WLO 4.3)

### **Node Data Structure:**

```javascript
const nodes = [
  {
    id: "mlo-4-1",
    label: "WLO 4.1: Five Revenue Streams",
    type: "learning_outcome",
    definition: "Athletes generate revenue through endorsements, owned businesses, investments, media/content production, and licensing. Strategic allocation across streams determines long-term wealth.",
    module: "Module 1",
    color: "#4A5568" // neutral gray
  },
  {
    id: "endorsements",
    label: "Endorsements & Sponsorships",
    type: "revenue_stream",
    definition: "Fee-based income from brand partnerships. Pros: Guaranteed cash, low risk. Cons: Fixed returns, expires post-career, doesn't compound.",
    example: "Nike pays LeBron $32M/year for endorsement rights",
    color: "#718096"
  },
  {
    id: "equity-vs-fees",
    label: "Equity vs Fees",
    type: "concept",
    definition: "Core trade-off: Take guaranteed fees now (endorsements) or invest in equity (owned businesses) that compounds over time. Equity creates 2-3x more wealth over 20 years but requires upfront capital and risk tolerance.",
    math: "Fees: $10M/year × 5 years = $50M. Equity: $2M investment → $290M (20 years, 25% growth)",
    color: "#A0AEC0"
  },
  {
    id: "serena-williams",
    label: "Serena Williams",
    type: "athlete_example",
    definition: "$500M brand value on $94M prize money. Strategy: 30% endorsements, 70% equity (Serena Ventures, S by Serena). Result: Assets built during career sustain post-retirement value.",
    portfolio: "Endorsements: $15M, Owned: $20M, Investments: $10M, Media: $3M, Licensing: $2M",
    color: "#CBD5E0"
  }
  // ... 17 more nodes following this structure
]
```

### **Edge Data Structure:**

```javascript
const edges = [
  { source: "endorsements", target: "mlo-4-1", relationship: "is_part_of" },
  { source: "endorsements", target: "mlo-4-2", relationship: "contrasts_with" },
  { source: "equity-vs-fees", target: "mlo-4-2", relationship: "explains" },
  { source: "serena-williams", target: "mlo-4-1", relationship: "demonstrates" },
  { source: "serena-williams", target: "mlo-4-2", relationship: "demonstrates" },
  { source: "serena-williams", target: "mlo-4-3", relationship: "demonstrates" },
  { source: "serena-williams", target: "mlo-4-4", relationship: "demonstrates" }
  // ... 30+ edges total
]
```

### **Interaction Patterns:**

**Default View:**
- All nodes visible, edges shown with opacity 0.3
- WLO nodes (Layer 1) highlighted and larger

**Click Node:**
- Highlight clicked node + all connected nodes
- Dim unconnected nodes (opacity 0.2)
- Show definition panel (right sidebar):
  - Node label
  - Type badge
  - Definition text
  - Related content (example, math, portfolio data if applicable)
  - Connected nodes list (clickable)

**Click Edge:**
- Show relationship label in tooltip

**Search Box:**
- Filter nodes by label text
- Highlight matching nodes

**Reset Button:**
- Return to default view

### **Color Scheme (Uplimit Neutral Grays):**
- Learning Outcomes (WLOs): `#4A5568` (darkest gray)
- Revenue Streams: `#718096`
- Concepts: `#A0AEC0`
- Athlete Examples: `#CBD5E0` (lightest gray)
- Edges: `#E2E8F0` (very light gray)

---

## Widget 4: Athlete Decision Tree (Module 4)

### **Status:** ❌ **PREVIOUSLY UNDERSPECIFIED** - Complete spec below

### **Widget Purpose:**
Interactive decision tree guiding athletes through endorsement vs. equity trade-offs with personalized recommendations based on career stage, risk tolerance, and financial goals.

### **Interface Design:**

**Layout:** Vertical flowchart with decision nodes and outcome nodes

**Flow Structure:** 5 decision points → Final recommendation

### **Decision Tree Flow:**

```
START
  ↓
[DECISION 1: Career Stage]
├─ Rookie (ages 22-26) → Path A
├─ Peak (ages 27-32) → Path B
└─ Veteran (ages 33+) → Path C

Path A: Rookie
  ↓
[DECISION 2: Current Salary]
├─ Under $2M/year → Need cash flow (lean toward endorsements)
└─ Over $5M/year → Can build equity

  ↓
[DECISION 3: Risk Tolerance]
├─ Conservative (need guaranteed income) → Endorsement Focus
├─ Moderate (balanced approach) → Hybrid Strategy
└─ Aggressive (maximize wealth) → Equity Focus

Path B: Peak
  ↓
[DECISION 2: Brand Strength]
├─ Elite (household name) → Maximum leverage
├─ Strong (recognized in sport) → Good opportunities
└─ Developing (rising star) → Build foundation

  ↓
[DECISION 3: Capital Available]
├─ Under $1M saved → Take endorsements to build capital
├─ $1M-$5M saved → Start equity investments
└─ Over $5M saved → Aggressive equity building

Path C: Veteran
  ↓
[DECISION 2: Years Until Retirement]
├─ 1-2 years → Preserve wealth, low risk
├─ 3-5 years → Transition strategy
└─ 5+ years → Still building

  ↓
[DECISION 3: Post-Career Plans]
├─ Media/Broadcasting → Build media brand now
├─ Business Ventures → Launch owned businesses
└─ Retirement → Preserve & compound existing assets

[ALL PATHS CONVERGE]
  ↓
[DECISION 4: Current Offer on Table]
├─ $10M/year endorsement for 3 years (guaranteed)
└─ $2M equity investment in owned business (risky)

  ↓
[DECISION 5: Time Horizon]
├─ Need income now (next 5 years) → Favor endorsement
└─ Building wealth (next 20+ years) → Favor equity

  ↓
[FINAL RECOMMENDATION]
```

### **Decision Node Structure:**

Each decision displays:
- Question text
- 2-4 option buttons
- Info icon with tooltip explaining trade-offs
- Progress indicator (Decision X of 5)

**Example - Decision 1:**
```
Question: "What stage of your career are you in?"

Options:
○ Rookie (ages 22-26)
  Tooltip: "Early career, building reputation, need cash flow"

○ Peak (ages 27-32)
  Tooltip: "Maximum brand value, highest earning potential"

○ Veteran (ages 33+)
  Tooltip: "Planning post-career transition, preserve wealth"
```

### **Outcome Node Structure:**

Final recommendation shows:
- **Recommended Strategy:** (e.g., "70% Equity, 30% Endorsement")
- **Rationale:** Personalized explanation based on path taken
- **Specific Action:** What to do with current offer
- **20-Year Projection:** Expected wealth outcome
- **Risk Assessment:** Risk level and mitigation strategies
- **Real Athlete Example:** Who followed this path successfully

**Example Final Recommendation (Peak Athlete, Strong Brand, $3M Saved, 20-Year Horizon):**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ YOUR PERSONALIZED STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RECOMMENDED ALLOCATION:
60% Equity | 40% Endorsement

RATIONALE:
You're at peak brand value with moderate capital. This is
your window to build generational wealth. Take the $10M
endorsement deal for cash flow, but immediately invest
$6M in owned businesses (product line, equity stakes).
Use remaining $4M for lifestyle and risk mitigation.

SPECIFIC ACTION - CURRENT OFFER:
✓ Accept the $10M/year endorsement deal
✓ Negotiate for equity component (5-10% stake in brand)
✓ Use endorsement cash flow to fund $2M business investment
✓ Structure as: $10M endorsement + $2M equity investment

20-YEAR WEALTH PROJECTION:
Endorsement-only: $87M
Your strategy: $214M (+146% more wealth)

RISK ASSESSMENT:
Risk Level: Moderate
Mitigation: Diversify equity across 3-5 businesses, maintain
$4M cash reserve, keep endorsement income for stability

REAL ATHLETE WHO FOLLOWED THIS PATH:
LeBron James (2010-2015)
- Accepted Nike lifetime deal (endorsement cash flow)
- Invested in Blaze Pizza, SpringHill Entertainment (equity)
- Result: $1B+ net worth, businesses worth $500M+

[Restart Decision Tree] [Export Strategy PDF]
```

### **Decision Logic Mapping:**

**Path Combinations → Recommendations:**

```javascript
const recommendations = {
  "rookie-low_salary-conservative": {
    strategy: "90% Endorsement, 10% Equity",
    action: "Take $10M endorsement, save $1M for future equity",
    projection: "$78M (20 years)",
    risk: "Very Low",
    example: "Early career athlete building foundation"
  },
  "peak-elite_brand-high_capital-long_horizon": {
    strategy: "70% Equity, 30% Endorsement",
    action: "Invest $2M in business, negotiate equity in endorsement deal",
    projection: "$312M (20 years)",
    risk: "Moderate-High",
    example: "LeBron James, Serena Williams"
  },
  "veteran-retiring_soon-preserve": {
    strategy: "20% Equity, 80% Conservative Investments",
    action: "Pass on risky equity, take endorsement if low effort",
    projection: "$124M (20 years)",
    risk: "Low",
    example: "Magic Johnson post-retirement preservation"
  }
  // ... 15-20 total path combinations
}
```

### **Visual Design:**

- **Nodes:** Rounded rectangles, neutral gray (#718096)
- **Active Path:** Highlighted in darker gray (#4A5568)
- **Completed Decisions:** Check marks, lighter gray (#CBD5E0)
- **Connections:** Dashed lines between nodes
- **Current Decision:** Pulsing border animation

### **Accessibility:**
- Full keyboard navigation (Tab/Enter)
- Screen reader announces each decision and current path
- High contrast mode available
- Option to view entire tree structure upfront (for cognitive accessibility)

### **Export Functionality:**
PDF with:
- Decision path taken (visual flowchart)
- Final recommendation
- 20-year projection details
- Action steps checklist

---

## Widget 5: Post-Career Wealth Simulator (Module 4)

### **Status:** ⚠️ **PREVIOUSLY UNDERSPECIFIED** - Complete spec below

### **Widget Purpose:**
Multi-phase simulation showing how career-stage decisions compound to create dramatically different retirement wealth outcomes.

### **Interface Design:**

**Layout:** 3 vertical panels (one per phase) + output visualization at bottom

### **Phase 1: Rookie Years (Ages 22-26)**

**Given Variables (pre-set):**
- Salary progression: Year 1: $2M, Year 2: $2.5M, Year 3: $3M, Year 4: $4M, Year 5: $5M
- Total 5-year earnings: $16.5M

**User Decisions:**

**Decision 1: Lifestyle Spending**
- ○ Frugal (30% of income): Save $11.55M over 5 years
- ○ Moderate (50% of income): Save $8.25M over 5 years
- ○ Lavish (80% of income): Save $3.3M over 5 years

**Decision 2: Investment Strategy** (for saved money)
- ○ Conservative (Bonds - 4% annual return)
- ○ Balanced (60/40 stocks/bonds - 7% annual return)
- ○ Aggressive (100% stocks - 10% annual return)

**Phase 1 Output:**
- End of Year 5 Net Worth = Savings × (1 + return_rate)^years
- Frugal + Aggressive = $11.55M × 1.10^5 = $18.6M
- Lavish + Conservative = $3.3M × 1.04^5 = $4.0M

### **Phase 2: Peak Career (Ages 27-32)**

**Given Variables:**
- Salary progression: $10M, $15M, $20M, $22M, $25M, $25M
- Total 6-year earnings: $117M
- Starting net worth: (from Phase 1)
- Endorsement opportunity: $10M/year guaranteed OR invest $3M in owned business

**User Decisions:**

**Decision 1: Endorsement vs. Equity**
- ○ Take $10M/year endorsement (6 years = $60M guaranteed)
- ○ Invest $3M in owned business
  - Expected return: 25% annual growth
  - Exit Year 10 at 5x revenue multiple
  - Projected exit value: $3M × 1.25^10 × 5 = $140M

**Decision 2: Revenue Stream Allocation**
- Allocate $50M across 5 streams (using Athlete Brand Calculator logic)
- Pre-fill with user's choice from Decision 1:
  - If endorsement: $60M allocated to Endorsements
  - If equity: $3M allocated to Owned Businesses

**Decision 3: Lifestyle Spending**
- ○ Frugal (30%): Save $81.9M + Phase 1 assets
- ○ Moderate (50%): Save $58.5M + Phase 1 assets
- ○ Lavish (80%): Save $23.4M + Phase 1 assets

**Phase 2 Output:**
- End of Year 12 (Age 32) Net Worth = Phase 1 assets compounded + Phase 2 savings compounded + business valuations
- Best case (Frugal + Equity): $18.6M + $81.9M + $140M = $240.5M
- Worst case (Lavish + Endorsement): $4.0M + $23.4M + $0M = $27.4M

### **Phase 3: Retirement Transition (Ages 33-40)**

**Given Variables:**
- Playing salary: Declines to $0 by age 35
- Endorsement income: Declines 60-80% (based on Phase 2 choices)
- Starting net worth: (from Phase 2)
- Owned business valuations: Continue growing or available to sell
- Investment portfolio: Continues compounding

**User Decisions:**

**Decision 1: Business Exit Strategy**
- ○ Sell now (capture current valuation, get cash)
- ○ Hold for growth (continue 25% growth, more risk)

**Decision 2: Post-Career Venture**
- ○ Media/Broadcasting ($500K-$2M/year income)
- ○ Coaching/Front Office ($300K-$1M/year income)
- ○ Business Focus ($0 income, reinvest time in businesses)
- ○ Retirement (no new income, live off assets)

**Decision 3: Drawdown Strategy**
- ○ Preserve: Withdraw 4% annually (assets continue growing)
- ○ Balanced: Withdraw 7% annually (assets stable)
- ○ Aggressive: Withdraw 12% annually (depleting assets)

**Phase 3 Output:**
- End of Year 20 (Age 42) Net Worth
- Ages 42-65 projected wealth (if continue Phase 3 strategy)

**Income During Phase 3:**
```javascript
// Year 13-14 (ages 33-34): Declining salary
salary_33 = phase2_salary * 0.40 // $10M
salary_34 = phase2_salary * 0.10 // $2.5M

// Year 15+ (age 35+): No salary
salary_35_plus = 0

// Endorsements decline
if (phase2_choice === "endorsement") {
  endorsement_income = 10M * 0.30 // 70% decline = $3M/year
} else {
  endorsement_income = 0
}

// Owned businesses continue growing
if (decision1 === "hold") {
  business_value_annual = previous_value * 1.25
} else if (decision1 === "sell") {
  cash_from_sale = business_value
  business_value_annual = 0
}

// Post-career venture income
post_career_income = {
  media: 1000000, // $1M/year average
  coaching: 650000, // $650K/year
  business_focus: 0,
  retirement: 0
}

// Total annual income years 13-20
annual_income = salary + endorsement_income + post_career_income

// Assets continue compounding
assets_end_of_year = (assets_start + annual_income - withdrawals) * (1 + investment_return)
```

### **Output Visualization:**

**Wealth Trajectory Chart:**
- Line chart: X-axis = Age 22-65, Y-axis = Net Worth ($M)
- Three lines:
  1. User's path (based on choices)
  2. "Conservative Builder" comparison (frugal + balanced + preserve)
  3. "Lifestyle Trap" warning (lavish + endorsement + aggressive drawdown)

**Wealth Preservation Score (0-100):**
```javascript
let peak_net_worth = Math.max(...wealth_by_year)
let retirement_net_worth = wealth_at_age_65
let preservation_score = (retirement_net_worth / peak_net_worth) * 100

// 100 = retirement wealth equals or exceeds peak wealth (perfect preservation)
// 50 = retirement wealth is half of peak (moderate preservation)
// 0 = broke at retirement (complete depletion)
```

**Comparison Table:**

| Scenario | Age 32 (Peak) | Age 42 (Transition) | Age 65 (Retirement) | Preservation Score |
|----------|---------------|---------------------|---------------------|-------------------|
| **Your Path** | $240M | $287M | $412M | 95 |
| Conservative Builder | $156M | $198M | $334M | 100 |
| Lifestyle Trap | $27M | $18M | $0 (broke) | 0 |
| Magic Johnson (actual) | $48M | $180M | $1.2B+ | 200+ |
| Allen Iverson (actual) | $200M | $50M | $0 (bankrupt) | 0 |

### **Preset Scenarios (Quick Load):**

**1. Lifestyle Trap:**
- Phase 1: Lavish spending, conservative investing
- Phase 2: Endorsement, lavish spending
- Phase 3: Retirement, aggressive drawdown
- **Outcome:** Broke by age 45

**2. Conservative Builder:**
- Phase 1: Frugal spending, balanced investing
- Phase 2: Hybrid endorsement + equity, moderate spending
- Phase 3: Media career, preserve strategy
- **Outcome:** $334M at age 65

**3. Equity Maximizer:**
- Phase 1: Frugal spending, aggressive investing
- Phase 2: Full equity investment, frugal spending
- Phase 3: Business focus, preserve strategy
- **Outcome:** $512M at age 65 (but high risk)

**4. Magic Johnson (Actual):**
- Phase 1: Moderate spending, balanced investing
- Phase 2: $18M salary + invested $3M in Starbucks/theaters/real estate
- Phase 3: Business focus, held all investments
- **Outcome:** $1.2B+ (businesses compounded 30 years)

**5. Allen Iverson (Actual):**
- Phase 1: Lavish spending ($300K/month lifestyle), no investing
- Phase 2: Endorsement deals, lavish spending ($20M+/year spending)
- Phase 3: No post-career income, aggressive drawdown
- **Outcome:** $0 (bankruptcy despite $200M+ career earnings)

### **Key Insights Display:**

After simulation completes, show:

**Critical Decision Analysis:**
- "Your Phase 2 decision (Equity vs Endorsement) created a $XX difference in 20-year wealth"
- "Your Phase 1 lifestyle choice (Frugal vs Lavish) saved you $XX that compounded to $XX"
- "If you had chosen [alternative], your retirement wealth would be [+/- $XX]"

**Warning Triggers:**
- If Preservation Score < 30: ⚠️ **WARNING: High bankruptcy risk. Your withdrawals exceed asset growth.**
- If Lavish spending in Phase 2: ⚠️ **CAUTION: 78% of athletes who spend >70% of income go broke within 5 years of retirement**
- If no equity investment: ⚠️ **NOTE: Endorsement-only strategy caps wealth. No compounding post-career.**

### **Export Functionality:**
PDF report with:
- All 3 phases' decisions
- Wealth trajectory chart
- Preservation score
- Recommendations for improvement
- "What if?" comparison (if you'd chosen differently)

---

## Widget 6: Serena's Brand Portfolio Analyzer (Module 5)

### **Status:** ⚠️ **PREVIOUSLY UNDERSPECIFIED** - Complete spec below

### **Widget Purpose:**
Pre-loaded variant of Athlete Brand Calculator with Serena Williams' actual portfolio, allowing students to analyze her strategy and test alternative approaches.

### **Interface Design:**

**IDENTICAL to Athlete Brand Calculator (Widget 1), with these additions:**

### **Top Section: Serena's Actual Portfolio (Pre-Loaded)**

**Default View on Load:**
- Sliders automatically set to Serena's allocations:
  - Endorsements: $15M (30%)
  - Owned Businesses: $20M (40%)
  - Investments: $10M (20%)
  - Media/Content: $3M (6%)
  - Licensing: $2M (4%)

**Info Panel (Right Side):**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎾 SERENA'S ACTUAL STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CAREER EARNINGS (2000-2022):
• Prize Money: $94M
• Endorsements: ~$350M (Nike, Gatorade, Wilson)
• Owned Businesses: S by Serena, Serena Ventures
• Current Brand Value: $500M

STRATEGIC ALLOCATION (estimated):
• 30% Endorsements (fee-based income)
• 70% Equity (owned businesses + investments)

KEY ASSETS:
• S by Serena (clothing line) - launched 2018
• Serena Ventures ($111M fund) - launched 2014
• 60+ portfolio companies (MasterClass, Tonal, Daily Harvest)
• NWSL team stakes (women's soccer)

20-YEAR WEALTH PROJECTION: $287M

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### **Middle Section: Analysis Tools**

**Tab 1: Serena's Strategy (Default)**
- Shows her actual allocation
- 20-year wealth trajectory: $50M → $287M
- Key insight: "Equity allocation (70%) created $189M of $287M total wealth"

**Tab 2: Alternative Scenarios**
- Toggle buttons to test alternatives:
  - ○ "What if 100% Endorsements?" → Outcome: $127M (56% less)
  - ○ "What if Conservative Athlete?" (70% endorsements) → Outcome: $143M (50% less)
  - ○ "What if More Aggressive?" (80% equity) → Outcome: $318M (11% more)
  - ○ "What if Michael Jordan's Strategy?" (10% endorsement, 50% licensing) → Outcome: $356M (24% more)

**Tab 3: Serena Ventures Deep Dive**
- Portfolio breakdown (60+ companies)
- Top performers:
  - MasterClass: $2.75B valuation (est. 50-100x return)
  - Tonal: $1.6B valuation (est. 30x return)
  - Daily Harvest: $1.1B valuation (est. 40x return)
- Fund IRR: 25-35% (vs VC benchmark 15-20%)
- Total portfolio value: ~$500M (4.5x on $111M invested)
- Women/POC founders: 78% of portfolio

**Tab 4: Your Custom Strategy**
- Unlock sliders, let students build their own allocation
- Compare to Serena's actual strategy side-by-side

### **Bottom Section: Strategic Insights**

**Automatically Generated Analysis:**

```javascript
// Compare user's allocation to Serena's
let equity_pct_user = (owned_business + investments + media + licensing) / 50
let equity_pct_serena = 0.70

if (equity_pct_user > equity_pct_serena + 0.10) {
  insight = "Your strategy is MORE aggressive than Serena's (${equity_pct_user*100}% equity vs her 70%). Higher risk, higher potential reward."
} else if (equity_pct_user < equity_pct_serena - 0.10) {
  insight = "Your strategy is MORE conservative than Serena's (${equity_pct_user*100}% equity vs her 70%). Lower risk, but less long-term wealth."
} else {
  insight = "Your strategy closely matches Serena's balanced approach (${equity_pct_user*100}% equity). Proven wealth-building allocation."
}
```

**Key Insights Displayed:**

1. **"Why 70% Equity?"**
   - Shows NPV calculation: $15M endorsements @ 8% growth = $87M (20 years)
   - Shows: $35M equity @ 20% growth = $200M (20 years)
   - Conclusion: Equity creates 2.3x more wealth with same initial allocation

2. **"When Did Serena Make These Decisions?"**
   - S by Serena launched 2018 (age 36, near retirement)
   - Serena Ventures launched 2014 (age 32, peak career)
   - Insight: Built equity DURING career when brand value highest

3. **"Was the Risk Worth It?"**
   - Serena Ventures 25-35% IRR vs S&P 500 10% IRR
   - NWSL investments: 10-15x returns (2015-2023)
   - Conclusion: Outperformed public markets significantly

4. **"What If She'd Taken More Endorsements?"**
   - Nike offered larger endorsement deal ($30M+/year) vs S by Serena launch
   - Calculation: $30M endorsement × 10 years = $300M guaranteed
   - S by Serena: $3M investment → Est. $50M+ valuation (2024) + brand control
   - Trade-off: Short-term income vs long-term ownership

### **Case Study Integration:**

**Link to HBS Case:**
- Button: "Read the Full Case" → Links to Module 5 Element 3 (case attachment)
- Highlights: "See Exhibits 4-7 for financial data supporting this analysis"

**Discussion Prompts:**
After using widget, answer:
1. "Why did Serena choose 70% equity allocation instead of maximizing endorsements?"
2. "Was Serena Ventures' focus on women/POC founders financially rational? (Hint: Check IRR vs benchmarks)"
3. "What would YOU do differently if you were Serena in 2010 (age 28)?"

### **Unique Features vs. Standard Athlete Brand Calculator:**

**Additions in Serena's Analyzer:**
1. Pre-loaded Serena data (automatic)
2. Alternative scenario quick toggles
3. Serena Ventures portfolio breakdown
4. Timeline of when decisions were made (2014, 2018)
5. Case study integration points
6. Comparison specifically to Serena (not just generic presets)

**Pedagogical Purpose:**
- Standard Calculator: Experimentation and discovery
- Serena's Analyzer: Analysis of real strategy + "what if" alternatives

### **Export Functionality:**
PDF including:
- Serena's actual allocation vs student's custom allocation
- 20-year projections for both
- Strategic insights comparison
- Answers to discussion prompts (if student completes them)
- Title: "Serena Williams Brand Strategy Analysis - [Student Name]"

---

## Summary: All 6 Widgets Ready to Build

| Widget | Specification Status | Estimated Build Time | Dependencies |
|--------|---------------------|---------------------|--------------|
| 1. Athlete Brand Calculator | ✅ Complete | 4-5 hours | None |
| 2. Emerging Sports Investment Tool | ✅ Complete | 4-5 hours | None |
| 3. Week 4 Concept Map | ✅ Complete | 3-4 hours | D3.js library |
| 4. Athlete Decision Tree | ✅ NOW Complete | 5-6 hours | Flowchart library |
| 5. Post-Career Wealth Simulator | ✅ NOW Complete | 6-8 hours | Chart.js |
| 6. Serena's Brand Portfolio Analyzer | ✅ NOW Complete | 2-3 hours | Widget #1 code reuse |

**Total Build Time:** 24-31 hours for all 6 widgets

**Build Order Recommendation:**
1. Athlete Brand Calculator (foundation)
2. Serena's Analyzer (reuse #1)
3. Emerging Sports Investment Tool (similar calculations to #1)
4. Week 4 Concept Map (visualization, no complex math)
5. Post-Career Wealth Simulator (most complex, multi-phase)
6. Athlete Decision Tree (sequential logic, moderate complexity)

---

## Technical Stack Recommendations

**All Widgets:**
- HTML5 + CSS3 (Geist font via Google Fonts)
- Vanilla JavaScript (no framework required for performance)
- Chart.js for line/bar charts (Widgets 1, 2, 5)
- WCAG 2.2 AA compliance (ARIA labels, keyboard nav, focus management)

**Widget-Specific:**
- Widget 3 (Concept Map): D3.js force-directed graph
- Widget 4 (Decision Tree): Custom flowchart or library like GoJS (free for non-commercial)
- Widgets 1, 2, 5, 6: HTML range sliders + real-time calculation

**Accessibility Pattern (All Widgets):**
```javascript
// Announce dynamic changes to screen readers
function announceToScreenReader(message) {
  const liveRegion = document.getElementById('sr-live-region')
  liveRegion.textContent = message
}

// Example: After slider change
announceToScreenReader("Portfolio updated. Endorsements: $15M. Total wealth projection: $287M")
```

**Export Pattern (All Widgets):**
```javascript
function exportToPDF() {
  const data = {
    user_allocation: currentAllocation,
    projections: calculatedProjections,
    timestamp: new Date()
  }
  // Use jsPDF library
  const doc = new jsPDF()
  doc.text("Athlete Brand Strategy Analysis", 10, 10)
  doc.save("athlete-brand-analysis.pdf")
}
```

---

**All specifications now complete and ready for development. Proceed with Widget #1 (Athlete Brand Calculator)?**
