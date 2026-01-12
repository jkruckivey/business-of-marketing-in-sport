# MODULE 3: Core Content - Athlete Brand Frameworks (BOPPPS: Presentation)
**Version:** 1.4.0 | **Last Updated:** 2025-12-05

**Purpose:** Interactive discovery of athlete revenue streams and brand building strategies through exercises

**Uplimit Structure:** Fourth module in Unit 4 (Week 4)

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **▬ Text** ⬤ Required | Module intro: Learn by doing | Type directly | Sets interactive learning approach |
| 2 | **▶ Video** ⬤ Required | "The Five Revenue Streams of Athlete Wealth" (2 min) | Upload MP4 | Introduces athlete diversification before calculator widget |
| 3 | **⚙ iFrame Widget** ⬤ Required | **Athlete Brand Calculator** | Embed widget | Build athlete revenue portfolios, compare strategies |
| 4 | **▬ Text** ◐ Recommended | Reflection prompt after widget | Type directly | Process learning from experimentation |
| 5 | **▶ Video** ⬤ Required | "The Emerging Sports Opportunity" (2 min) | Upload MP4 | Explains valuation gaps before investment tool |
| 6 | **⚙ iFrame Widget** ⬤ Required | **Emerging Sports Investment Tool** | Embed widget | Evaluate women's sports & emerging market opportunities |
| 7 | **▬ Text** ◐ Recommended | Reflection prompt after widget | Type directly | Synthesize investment insights |
| 8 | **▶ Video** ◐ Recommended | "NIL and the New Athlete Economy" (2 min) | Upload MP4 | Explains NIL rules and marketing implications |
| 9 | **▤ Details** ○ Optional | Deep dive: Why equity beats fees | Type directly | Mathematical proof with NPV calculations |
| 10 | **◈ AI Chat Widget** ○ Optional | "Test your understanding" | Configure in Uplimit | On-demand support for struggling students |

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

This module features two powerful interactive exercises that let you discover athlete brand principles through manipulation and experimentation—not passive reading:

### **Exercise 1: Athlete Brand Calculator**
Build hypothetical athlete brand portfolios by allocating $50M across five revenue streams (endorsements, owned businesses, investments, media/content, licensing). See in real-time:
- How different allocation strategies create different 20-year wealth outcomes
- Why equity compounds while fees don't
- The power of diversification vs. concentration
- Compare your strategy to Serena Williams' actual portfolio

### **Exercise 2: Emerging Sports Investment Tool**
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

## Element 2: Instructional Video - Five Revenue Streams of Athlete Wealth

**Video Specifications:**
- **Length:** 2 minutes
- **Topic:** "The Five Revenue Streams of Athlete Wealth"
- **Key Points:** LeBron's $1.2B net worth breakdown, five streams (salary, endorsements, owned businesses, media/content, investments), equity vs. fees
- **Accessibility:** Captions required, transcript provided

**Video Status:** 📝 Script complete, awaiting production

**Video Script Reference:** See `modules/week4/video-scripts/week4-instructional-videos-2min.md` - Video 1

**Video Script Summary (2 minutes):**
```
[0:00-0:15] Hook
"LeBron James earned $480 million playing basketball. But he's worth $1.2 billion. Where did the other $720 million come from?"

[0:15-0:45] The Five Revenue Streams
Athletes have five revenue streams: (1) Salary/bonuses, (2) Endorsements, (3) Owned businesses (equity), (4) Media/content, (5) Investments.

[0:45-1:15] Why Diversification Matters
"Playing careers are short. Brands can last forever." Average NFL career: 3.3 years. Michael Jordan earned $93M playing, but Jordan Brand generates $5B annually.

[1:15-1:45] Equity vs. Fees
"Equity compounds. Fees don't." $1M endorsement = $1M. $1M equity at 20% growth = $38M in 20 years.

[1:45-2:00] Transition
"Next, you'll use the Athlete Brand Calculator to build your own portfolio."
```

**Uplimit Implementation:**
1. Upload `week4-video1-athlete-revenue-streams.mp4`
2. Add VTT caption file
3. Place before Athlete Brand Calculator exercise

---

## Element 3: Athlete Brand Calculator Widget

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
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/athlete-brand-calculator.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Athlete Brand Calculator - Build revenue portfolios and compare 20-year wealth outcomes"
  aria-label="Interactive calculator where you build athlete brand revenue portfolios by allocating fifty million dollars across five streams including endorsements, owned businesses, and investments to see twenty-year wealth outcomes"
  allowfullscreen
  loading="lazy">
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

## Element 5: Instructional Video - The Emerging Sports Opportunity

**Video Specifications:**
- **Length:** 2 minutes
- **Topic:** "The Emerging Sports Opportunity"
- **Key Points:** NWSL vs. MLS valuation gap, women's sports growth metrics, investment thesis for emerging markets
- **Accessibility:** Captions required, transcript provided

**Video Status:** 📝 Script complete, awaiting production

**Video Script Reference:** See `modules/week4/video-scripts/week4-instructional-videos-2min.md` - Video 2

**Video Script Summary (2 minutes):**
```
[0:00-0:15] Hook
"An MLS team sells for $700 million. An NWSL team sells for $53 million. Same number of fans, same stadium capacity, same 90-minute games. That's not a market inefficiency. That's an opportunity."

[0:15-0:45] The Valuation Gap
Emerging sports are massively undervalued: WNBA ($100-150M) vs. NBA ($3-4B), NWSL ($50-100M) vs. MLS ($500-800M). These valuations reflect history, not potential.

[0:45-1:15] Why Now?
Three forces closing the gap: (1) Media investment (WNBA $200M/year deal), (2) Sponsorship surge (Nike, Google, Ally Bank), (3) Attendance records (WNBA All-Star 3.4M viewers).

[1:15-1:45] The Investment Thesis
If NWSL team bought at $75M reaches 25% of MLS valuations in 10 years = $100M+ return. Matt Rubinoff (Fairgrounds): "75,000 members with zero marketing spend."

[1:45-2:00] Transition
"Next, you'll use the Emerging Sports Investment Tool to evaluate opportunities across women's sports and emerging markets."
```

**Uplimit Implementation:**
1. Upload `week4-video2-emerging-sports.mp4`
2. Add VTT caption file
3. Place before Emerging Sports Investment Tool widget

---

## Element 6: Emerging Sports Investment Tool Widget

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
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/emerging-sports-investment-tool.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Emerging Sports Investment Tool - Evaluate women's sports and emerging market opportunities"
  aria-label="Interactive investment calculator for evaluating women's sports and emerging market opportunities where you adjust growth rates, risk premiums, and time horizons to calculate expected internal rate of return"
  allowfullscreen
  loading="lazy">
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

## Element 8: Instructional Video - NIL and the New Athlete Economy

**Video Specifications:**
- **Length:** 2 minutes
- **Topic:** "NIL and the New Athlete Economy"
- **Key Points:** NIL rules post-2021, $1.17B market size, college athlete branding, marketing implications
- **Accessibility:** Captions required, transcript provided

**Video Status:** 📝 Script complete, awaiting production

**Video Script Reference:** See `modules/week4/video-scripts/week4-instructional-videos-2min.md` - Video 3

**Video Script Summary (2 minutes):**
```
[0:00-0:15] Hook
"In 2021, college athletes couldn't legally earn a dollar from their name. In 2024, they earned $1.17 billion through NIL deals. The athlete economy changed overnight."

[0:15-0:45] What Is NIL?
NIL = Name, Image, Likeness. Pre-2021 NCAA rules prohibited monetization. Now college athletes can sign endorsements, create content, sell merchandise.

[0:45-1:15] The NIL Economy
$1.17B total deals in 2024. Top athletes earn $1-5M/year. Women athletes over-index: 2× NIL per follower vs. male counterparts (higher engagement rates).

[1:15-1:45] Marketing Implications
Opportunity: Access athletes earlier, lower costs, authentic connections. Risk: Unregulated, no standard contracts. Kevin Abrams: "Players are coming out of college now where they are brands."

[1:45-2:00] Transition
"NIL is reshaping how athletes build brands from day one. In the next module, you'll apply these concepts to the Serena Williams case study."
```

**Uplimit Implementation:**
1. Upload `week4-video3-nil-economy.mp4`
2. Add VTT caption file
3. Place after reflection prompt, before deep dive accordion

---

## Element 9: Details Accordion - Deep Dive: Why Equity Beats Fees

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

- The Athlete Brand Calculator exercise (compounding, diversification, real athlete portfolios)
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

## Element 11: Core Readings - Athlete Equity & Emerging Sports

**Uplimit Implementation:**
1. Select **Details** (accordion) element
2. Copy markdown below:

```markdown
Title: Core Readings: Athlete Equity & Venture Capital

[Expand for required and recommended readings]

### Required Readings (30-40 minutes)

**1. Reuters: "Serena Williams' New Venture Fund Raises $111 Million"**
Clean background on Serena Ventures' fund size, thesis, and first investments.
🔗 [Read Article](https://www.reuters.com/article/us-serena-williams-venture-fund/serena-williams-new-venture-fund-raises-111-million-idUSKCN1T02FJ)

**2. Forbes: "Play To Win: Serena Williams Invested In 14 Unicorn Companies"**
Portfolio overview, returns (e.g., Coinbase), and her VC philosophy.
🔗 [Read Article](https://www.forbes.com/sites/mattcraig/2023/01/23/play-to-win-serena-williams-invested-in-14-unicorn-companies/)

### Recommended Readings (Optional)

**3. Afrotech: "Serena Williams on Raising VC"**
How she built her investor network and deal flow; good for project inspiration.
🔗 [Read Article](https://afrotech.com/serena-williams-vc-funding)

**4. Forbes Athlete Earnings Lists (2025)**
Prize money vs. endorsements vs. equity returns; shows the "top 5% optimize streams 4-5" point.
🔗 [View Latest Rankings](https://www.forbes.com/athletes/)

### Application to Week 4

These readings provide real data behind the frameworks you're experimenting with:
- Serena Ventures fund structure → Apply to WLO 4.1 (revenue streams)
- Unicorn investments → Evidence for WLO 4.2 (equity vs. fees)
- Forbes earnings data → Benchmark for Athlete Brand Calculator exercise
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

Ready to tackle complex wealth-building scenarios? Let's apply your frameworks!

---

## MODULE 3 Complete - Summary

### Elements Created:
1. ✅ Module Introduction (interactive learning approach)
2. ✅ Video 1: "The Five Revenue Streams of Athlete Wealth" (2 min)
3. ✅ Athlete Brand Calculator Widget (full specifications, embed code)
4. ✅ Reflection Prompt 1 (process widget 1 insights)
5. ✅ Video 2: "The Emerging Sports Opportunity" (2 min)
6. ✅ Emerging Sports Investment Tool Widget (full specifications, embed code)
7. ✅ Reflection Prompt 2 (process widget 2 insights)
8. ✅ Video 3: "NIL and the New Athlete Economy" (2 min)
9. ✅ Details Accordion - Deep Dive on Equity vs. Fees (mathematical proof with NPV calculations)
10. ✅ AI Chat Widget - Test Your Understanding

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
