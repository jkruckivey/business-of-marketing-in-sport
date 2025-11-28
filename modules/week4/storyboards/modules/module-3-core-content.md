# MODULE 3: Core Content - Athlete Brand Frameworks (BOPPPS: Presentation)
**Version:** 1.3.0 | **Last Updated:** 2025-01-27

**Purpose:** Interactive discovery of athlete revenue streams and brand building strategies through widgets

**Uplimit Structure:** Fourth module in Unit 4 (Week 4)

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **▬ Text** ⬤ Required | Module intro: Learn by doing | Type directly | Sets interactive learning approach |
| 2 | **⚙ iFrame Widget** ⬤ Required | **Athlete Brand Calculator** | Embed widget | Build athlete revenue portfolios, compare strategies |
| 3 | **▬ Text** ◐ Recommended | Reflection prompt after widget | Type directly | Process learning from experimentation |
| 4 | **⚙ iFrame Widget** ⬤ Required | **Emerging Sports Investment Tool** | Embed widget | Evaluate women's sports & emerging market opportunities |
| 5 | **▬ Text** ◐ Recommended | Reflection prompt after widget | Type directly | Synthesize investment insights |
| 6 | **▤ Details** ○ Optional | Deep dive: Why equity beats fees | Type directly | Mathematical proof with NPV calculations |
| 7 | **◈ AI Chat Widget** ○ Optional | "Test your understanding" | Configure in Uplimit | On-demand support for struggling students |

---

## Element 1: Module Introduction

**Uplimit Implementation:**
1. Select **Text** element
2. Copy markdown below:

```markdown
# Learn by Doing: Interactive Athlete Brand Exploration

**Connecting to Weeks 1-3:** In Week 1, you learned leagues generate revenue through five streams—now you'll see athletes have their own five streams. In Week 2, you learned media rights valuations depend on CPM and engagement metrics—athletes similarly value their brands using reach and conversion data. In Week 3, you learned sponsorship ROI calculations and the 2-3× activation rule—athletes face the same trade-offs when deciding between endorsement fees and equity investments.

**Module 2 Connection:** Remember Kevin Abrams' insight about managing salary cap "like a portfolio, not a checking account"? Athletes must apply the same thinking to their career earnings—diversifying across revenue streams rather than spending linearly.

You've seen the theory from practitioners. Now it's time to experiment hands-on.

This module features two powerful interactive tools that let you discover athlete brand principles through manipulation and experimentation—not passive reading:

### **Widget 1: Athlete Brand Calculator**
Build hypothetical athlete brand portfolios by allocating $50M across five revenue streams (endorsements, owned businesses, investments, media/content, licensing). See in real-time:
- How different allocation strategies create different 20-year wealth outcomes
- Why equity compounds while fees don't
- The power of diversification vs. concentration
- Compare your strategy to Serena Williams' actual portfolio

### **Widget 2: Emerging Sports Investment Tool**
Evaluate investment opportunities in women's sports and emerging markets. Adjust variables (growth rate, risk premium, time horizon) and see:
- Expected returns for NWSL, WNBA, women's soccer, pickleball investments
- How valuation gaps create arbitrage opportunities
- Risk-adjusted returns comparing emerging vs. established properties
- When to invest (first-mover advantage) vs. wait (let market stabilize)

**Learning Approach:**
Don't just read instructions and follow steps. **Experiment**: Try extreme allocations (100% endorsements vs. 100% owned businesses). Make intentionally bad decisions to see what breaks. Ask "what if?" and test your hypotheses.

The insights you discover through experimentation will be more memorable—and more useful—than anything you could read in a textbook.

Ready? Let's experiment.
```

---

## Element 2: Athlete Brand Calculator Widget

**Widget Purpose:** Interactive tool for building athlete revenue portfolios and comparing 20-year wealth outcomes

**File:** `athlete-brand-calculator.html`

### Widget Functionality:

**Interface Design:**
- **Top Section:** Portfolio allocation sliders (5 revenue streams, must total $50M)
  - Endorsements & Sponsorships (fee-based income)
  - Owned Businesses (equity-based wealth)
  - Investment Portfolio (compounding returns)
  - Media & Content Production (IP ownership)
  - Licensing & IP Rights (passive income)

- **Middle Section:** Real-time calculations showing:
  - Year 1 income vs. Year 20 wealth
  - Compounding effects visualization (line chart)
  - Diversification score (0-100)
  - Risk-adjusted returns

- **Bottom Section:** Compare Your Strategy
  - Serena Williams' actual portfolio (estimated)
  - LeBron James' portfolio (estimated)
  - Michael Jordan's portfolio (estimated)
  - "Conservative Athlete" (70% endorsements, 30% other)
  - "Wealth Builder" (30% endorsements, 70% equity)

**Key Learning Mechanics:**
1. **Compound vs. Linear Growth:** Endorsements grow linearly (or decline post-career), equity compounds exponentially
2. **Diversification:** Spreading across streams reduces risk but may reduce peak returns
3. **Time Horizon:** 20-year view shows dramatically different outcomes than 5-year view
4. **Real Examples:** Comparing to Serena/LeBron/MJ shows proven strategies

**Technical Specifications:**
- WCAG 2.2 AA compliant (keyboard navigation, screen reader support, high contrast)
- Uplimit branding (Geist font, neutral grays, minimal aesthetic)
- Responsive design (works on mobile/tablet/desktop)
- No time limits (students control pacing)
- Export results (CSV or PDF) for Anchor Project use

**Uplimit Embed Code:**
```html
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/athlete-brand-calculator.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Athlete Brand Calculator - Build revenue portfolios and compare 20-year wealth outcomes"
  aria-label="Interactive calculator where you build athlete brand revenue portfolios by allocating fifty million dollars across five streams including endorsements, owned businesses, and investments to see twenty-year wealth outcomes"
  allowfullscreen
  loading="lazy">
=======
=======
>>>>>>> Stashed changes
<iframe src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/athlete-brand-calculator.html"
        width="900"
        height="800"
        title="Athlete Brand Calculator - Build revenue portfolios and compare 20-year wealth outcomes"
        frameborder="0"
        allowfullscreen
        aria-label="Interactive calculator for building athlete brand revenue portfolios across five streams with 20-year projections">
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
</iframe>
```

---

## Element 3: Reflection Prompt After Widget 1

**Uplimit Implementation:**
1. Select **Text** element
2. Copy markdown below:

```markdown
### What Did You Discover?

After experimenting with the Athlete Brand Calculator, take 2 minutes to reflect:

**1. What surprised you most?**
- Which revenue stream created the most wealth over 20 years?
- How different were the outcomes between "70% endorsements" and "70% equity"?
- At what point did compounding become dramatically visible?

**2. Which strategy would YOU choose?**
- If you were a 25-year-old athlete with 10-year peak career ahead, how would you allocate $50M?
- Would you prioritize income (endorsements) or wealth (equity)? Why?
- How much risk are you willing to take?

**3. How does this apply to your Anchor Project?**
- If your project involves athlete partnerships, which revenue streams should you prioritize?
- If analyzing a sports business, are you building fee-based income or equity-based wealth?

**Actionable Insight:** Write down ONE strategic decision you'll make differently in your Anchor Project based on this experimentation.
```

---

## Element 4: Emerging Sports Investment Tool Widget

**Widget Purpose:** Interactive tool for evaluating women's sports and emerging market investment opportunities

**File:** `emerging-sports-investment-tool.html`

### Widget Functionality:

**Interface Design:**
- **Top Section:** Investment Selection
  - Choose investment opportunity from dropdown:
    - NWSL franchise ($40M entry)
    - WNBA expansion team ($50M entry)
    - Women's soccer club (European) ($20M entry)
    - Pickleball pro league stake ($10M entry)
    - Women's rugby franchise ($5M entry)

- **Middle Section:** Adjustable Variables (sliders)
  - Annual growth rate (5-50%)
  - Risk premium (0-15%)
  - Time horizon (5-20 years)
  - Exit multiple (1x-10x)

- **Bottom Section:** Calculated Returns
  - Expected IRR (Internal Rate of Return)
  - Risk-adjusted return (Sharpe ratio)
  - Comparison to S&P 500 baseline
  - Comparison to established sports properties (MLS, NBA)
  - Break-even timeline
  - Sensitivity analysis (best case / worst case scenarios)

**Key Learning Mechanics:**
1. **Growth Rate Impact:** Small changes in growth rate create massive outcome differences over time
2. **Risk vs. Return:** Higher growth potential comes with higher risk—how to balance?
3. **First-Mover Advantage:** Entering at $40M valuation (NWSL) vs. waiting until $100M
4. **Comparable Analysis:** Comparing women's sports returns to established men's leagues
5. **Valuation Gaps:** Why women's properties valued at 1/10th of men's despite similar growth rates

**Example Scenarios Pre-Loaded:**
- **NWSL Conservative:** 15% growth, 10% risk, 10 years → 18% IRR vs. 10% S&P → Worth it?
- **NWSL Aggressive:** 35% growth, 15% risk, 10 years → 42% IRR → High risk, high reward
- **WNBA Moderate:** 20% growth, 8% risk, 15 years → 22% IRR vs. NBA franchise 12% IRR
- **Pickleball Speculative:** 50% growth (years 1-5), 20% risk → 60% IRR but 40% bust risk

**Technical Specifications:**
- WCAG 2.2 AA compliant
- Uplimit branding standards
- Responsive design
- Export investment memo (PDF) for Anchor Project use
- Real-time recalculation as variables adjust

**Uplimit Embed Code:**
```html
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/emerging-sports-investment-tool.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Emerging Sports Investment Tool - Evaluate women's sports and emerging market opportunities"
  aria-label="Interactive investment calculator for evaluating women's sports and emerging market opportunities where you adjust growth rates, risk premiums, and time horizons to calculate expected internal rate of return"
  allowfullscreen
  loading="lazy">
=======
=======
>>>>>>> Stashed changes
<iframe src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/emerging-sports-investment-tool.html"
        width="900"
        height="800"
        title="Emerging Sports Investment Tool - Evaluate women's sports and emerging market opportunities"
        frameborder="0"
        allowfullscreen
        aria-label="Interactive investment calculator for women's sports and emerging sports properties with IRR and risk analysis">
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
</iframe>
```

---

## Element 5: Reflection Prompt After Widget 2

**Uplimit Implementation:**
1. Select **Text** element
2. Copy markdown below:

```markdown
### Investment Insights: What Did the Numbers Reveal?

After experimenting with the Emerging Sports Investment Tool, reflect:

**1. Risk vs. Reward Trade-offs**
- Which opportunity offered the best risk-adjusted return?
- Was the NWSL's 18% IRR worth the 10% risk premium compared to S&P 500's 10% IRR with 5% risk?
- At what growth rate does women's sports become a "no-brainer" investment?

**2. First-Mover Advantage Timing**
- If you wait 5 years for NWSL valuations to stabilize, what returns do you give up?
- What's your personal risk tolerance: Invest now at $40M or wait until $80M but with lower risk?

**3. Valuation Gap Opportunities**
- Why are NWSL franchises $40M when MLS franchises are $500M despite similar growth rates?
- Does this represent market inefficiency (opportunity) or accurate risk pricing (caution)?

**4. Application to Your Analysis**
- If your Anchor Project involves women's sports or emerging markets, what growth assumptions will you use?
- How will you justify your projections to skeptical investors?

**Actionable Insight:** Based on this analysis, would YOU invest $40M in an NWSL franchise today? Write your 2-sentence investment thesis.
```

---

## Element 6: Details Accordion - Deep Dive: Why Equity Beats Fees

**Uplimit Implementation:**
1. Select **Details** (accordion) element
2. Copy markdown below:

```markdown
Title: Deep Dive: The Mathematics of Equity vs. Fees (NPV Proof)

[Expand for detailed financial analysis]

### Why Equity-Based Wealth Always Beats Fee-Based Income (Given Sufficient Time)

This is the mathematical proof that explains why Michael Jordan earns more from Nike royalties ($130M/year) than he earned playing basketball ($93M total career).

---

### Scenario A: Fee-Based Endorsement Deal

**Deal Structure:**
- $10M/year endorsement contract
- 5-year term (typical athlete endorsement)
- Total payments: $50M over 5 years
- Post-contract: $0/year (contract expires, relevance fades)

**20-Year Cash Flows:**
- Years 1-5: $10M/year = $50M total
- Years 6-20: $0/year = $0
- **Total 20-year earnings: $50M**
- **NPV at 8% discount rate: $39.9M**

---

### Scenario B: Equity Investment in Owned Business

**Deal Structure:**
- Athlete invests $2M to launch own athletic wear brand
- Owns 100% equity
- Business grows 25% annually (comparable to successful athletic brands)
- Exit in Year 10 at 5x revenue multiple

**20-Year Cash Flows:**

| Year | Revenue | Profit (20% margin) | Athlete Take-Home | Cumulative Value |
|------|---------|---------------------|-------------------|------------------|
| 1 | $2M | $400K | $400K | $400K |
| 2 | $2.5M | $500K | $500K | $900K |
| 3 | $3.1M | $625K | $625K | $1.5M |
| 4 | $3.9M | $781K | $781K | $2.3M |
| 5 | $4.9M | $976K | $976K | $3.3M |
| ... | ... | ... | ... | ... |
| 10 | $18.6M | $3.7M | $3.7M | $18.7M cash + $93M exit = **$111.7M** |
| 11-20 | (Reinvest exit proceeds at 10% return) | | | **$290M** |

**Total 20-year wealth: $290M**
**NPV at 8% discount rate: $104M**

---

### The Difference: $104M (Equity) vs. $40M (Fees) = **160% More Wealth**

**Why does this happen?**
1. **Compounding:** Equity compounds annually at 25% growth rate; fees are fixed $10M/year
2. **Time Horizon:** Over 20 years, compound growth dominates linear payments
3. **Ownership:** Athlete captures 100% of business value appreciation; endorsement fees are fixed regardless of brand growth
4. **Reinvestment:** Exit proceeds reinvested generate additional compounding (Years 11-20)
5. **Independence:** Owned business value doesn't depend on playing career; endorsements expire when relevance fades

**Real-World Example: Michael Jordan**
- Playing career earnings (1984-2003): $93M
- Nike endorsement deals (1984-2003): ~$100M
- **Nike royalty deal (2003-present):** $130M/year × 20 years = **$2.6 BILLION**

Jordan's royalty deal (equity-like structure where he earns % of Air Jordan sales) generated **26x more** wealth than his playing career.

---

### The Trade-Off: Risk

**Fee-Based Income:**
- ✅ Guaranteed payments (low risk)
- ✅ Immediate cash flow (can spend now)
- ✅ No capital required upfront
- ❌ Fixed returns (no upside if brand explodes)
- ❌ Expires after contract term
- ❌ Doesn't compound

**Equity-Based Wealth:**
- ❌ Requires upfront capital ($2M investment)
- ❌ Risk of failure (business could go bankrupt)
- ❌ Delayed cash flow (Years 1-5 are modest)
- ✅ Unlimited upside (if successful, returns compound infinitely)
- ✅ Sustained post-retirement value
- ✅ Compounds over time

**Strategic Implication:**
Athletes should take fee-based endorsements EARLY in career (ages 22-26) when they need cash flow and haven't accumulated capital. Then shift to equity investments at PEAK career (ages 27-32) when brand value is highest and they have capital to deploy.

---

### Your Anchor Project Application

If your project involves:
- **Athlete partnerships:** Structure as equity joint ventures (rev share, profit share) not flat fees
- **Endorsement strategy:** Calculate NPV of equity stake vs. fixed payment over 10-20 years
- **Business model design:** Ask "Are we building fee-based income or equity-based wealth?"

The math doesn't lie: Given sufficient time, equity always beats fees.
```

---

## Element 7: AI Chat Widget Configuration

**Uplimit Implementation:**
1. Select **AI Chat** element
2. Configure as follows:

**Widget Name:** "Test Your Understanding"

**System Prompt:**
```
You are a knowledgeable assistant helping MBA students understand athlete brand portfolios and emerging sports investments. Answer questions about:

- The Athlete Brand Calculator widget (compounding, diversification, real athlete portfolios)
- The Emerging Sports Investment Tool (IRR calculations, risk-adjusted returns, valuation gaps)
- Why equity beats fees over long time horizons
- How to apply these frameworks to their Anchor Project

Provide clear, business-focused explanations with specific numbers and examples. Help students connect widget experimentation to strategic decisions.
```

**Welcome Message:**
```
Hi! I can help you understand insights from the Athlete Brand Calculator and Emerging Sports Investment Tool. What questions do you have about portfolio strategies, investment returns, or how to apply these frameworks?
```

---

## Module 3 Complete - Transition to Module 4

**What You've Learned:**
Through hands-on experimentation, you've discovered:
- Why equity-based wealth compounds while fee-based income doesn't
- How different athlete portfolio allocations create vastly different 20-year outcomes
- Why women's sports and emerging markets offer superior risk-adjusted returns
- The mathematics proving why Michael Jordan's Nike royalties exceed his playing career earnings

**Key Insights from Experimentation:**
- Serena Williams' 70% equity / 30% endorsement allocation isn't random—it's strategic wealth building
- NWSL's 18% IRR vs. S&P 500's 10% represents massive opportunity if growth thesis proves correct
- First-mover advantage is real: Entering at $40M vs. $80M doubles returns if valuations reach $200M
- Diversification reduces risk but concentration creates wealth (risk tolerance determines strategy)

**Up Next: Module 4 - Advanced Interactive Simulations**
You've built foundational understanding through experimentation. Now you'll apply these frameworks to complex multi-variable scenarios and strategic trade-offs.

<<<<<<< Updated upstream
<<<<<<< Updated upstream
Ready to tackle complex wealth-building scenarios? Let's apply your frameworks!

=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
---

## MODULE 3 Complete - Summary

### Elements Created:
1. ✅ Module Introduction (interactive learning approach)
2. ✅ Athlete Brand Calculator Widget (full specifications, embed code)
3. ✅ Reflection Prompt 1 (process widget 1 insights)
4. ✅ Emerging Sports Investment Tool Widget (full specifications, embed code)
5. ✅ Reflection Prompt 2 (process widget 2 insights)
6. ✅ Details Accordion - Deep Dive on Equity vs. Fees (mathematical proof with NPV calculations)
7. ✅ AI Chat Widget - Test Your Understanding

### Widget Specifications Provided:
- **Athlete Brand Calculator:** Portfolio allocation across 5 streams, 20-year projections, comparison to real athletes
- **Emerging Sports Investment Tool:** IRR calculations, risk-adjusted returns, sensitivity analysis, comparable investments

### Pedagogical Design:
- Learn by doing: Experimentation before explanation
- Reflection prompts ensure processing of insights
- Mathematical deep dive for students who want proof
- AI chat provides on-demand support for struggling students
- Direct application to Anchor Project throughout

### Total Time Estimate:
- Reading (intro + reflection prompts): 8 minutes
- Widget 1 (Athlete Brand Calculator): 20 minutes
- Widget 2 (Emerging Sports Investment Tool): 20 minutes
- Optional deep dive reading: 10 minutes
- **Total Module 3 time: 48-58 minutes**
