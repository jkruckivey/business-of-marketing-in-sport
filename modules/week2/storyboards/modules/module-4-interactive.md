## MODULE 4: Interactive Activity - Streaming Wars Strategy
**Purpose:** Active learning - simulate platform strategy decisions (supports MLO 2.2 - Application/Analysis level)

**Uplimit Structure:** Fourth module in Unit 2

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **Infobox (Callout)** ⬤ Required | Activity instructions and learning objectives | Type directly | Blue variant, clear task |
| 2 | **⚙ iFrame Widget** ⬤ Required | **Learning Outcomes Widget** | Embed widget | Shows which MLOs practiced |
| 3 | **iFrame** ◐ Recommended | Streaming Wars Strategy widget | Custom widget hosted | Interactive simulation |
| 3 | **Text** ⬤ Required | Reflection prompt | Type directly | Connect activity to MLOs |
| 5 | **AI Chat Widget** ◐ Recommended | Your Strategy Coach for simulation decisions | Configure in Uplimit | Named: "Platform Strategy Assistant" |
| 6 | **Details** ○ Optional | Hints and strategic considerations (optional) | Type directly | Accordion for struggling students |

**Detailed Content Specifications:**

### Infobox Content:
```
Title: ■ Activity: Streaming Wars Strategy Simulation

You are the VP of Content Strategy for a new Canadian streaming platform. Your goal:
build a profitable sports streaming service by acquiring rights, setting pricing,
and managing subscriber growth vs. content costs.

Learning Objectives:
• Apply MLO 2.2: Compare linear and streaming economics through simulation
• Apply MLO 2.1: Make rights valuation decisions with budget constraints
• Apply MLO 2.3: Balance content investment with fan engagement tactics

Instructions:
1. Choose sports properties to bid on (hockey, basketball, soccer, emerging sports)
2. Set your subscription pricing strategy
3. Make quarterly decisions about rights renewal, pricing changes, and engagement investments
4. Achieve profitability within 5 years while managing churn

Time: 30-45 minutes | Can be completed in multiple sessions
Part of Week 2 Executive Session (40 min block)
```

### iFrame Specifications:

**Widget Purpose:** Simulate streaming platform strategy decisions to understand trade-offs between content costs, pricing, and subscriber growth.

**Widget Status:** ✅ Phase 2 widget - BUILT AND READY

**How It Works:**
- **Inputs:**
  - Rights acquisition budget ($0-$100M/year across hockey, basketball, soccer, emerging sports)
  - Subscription pricing ($9.99 - $29.99/month)
  - Quarterly decisions: Renew rights? Adjust pricing? Invest in engagement features?
- **Outputs:**
  - Subscriber count (0-1M potential)
  - Monthly churn rate (5%-20%)
  - Monthly recurring revenue (MRR)
  - Total content costs
  - Profitability timeline (years to break even)
- **Real Examples:** Rogers Sportsnet NOW ($27.99/month), DAZN Canada ($24.99/month), TSN Direct ($19.99/month)
- **Scenarios:** Competitor launches (pricing pressure), Recession hits (churn increases), Star player trade (subscriber spike)
- **Learning:** Balance content investment vs. subscriber growth, understand 3-5 year payback timelines, experience streaming economics

**Learning Objectives:**
- MLO 2.2: Compare linear broadcasting economics to streaming/DTC profitability timelines
- MLO 2.1: Make rights valuation decisions with budget constraints
- MLO 2.3: Balance engagement tactics with content costs

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/widgets/streaming-wars-strategy.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Streaming Wars Strategy - Build a profitable sports streaming service"
  aria-label="Interactive strategy builder where you design a sports streaming service by choosing content, pricing, and distribution models"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Accessibility:**
- ✅ Keyboard navigation functional (Tab, Arrow keys, Enter)
- ✅ ARIA labels on all sliders and controls
- ✅ Screen reader announcements for quarterly results
- ✅ High contrast mode support
- ✅ Color-blind safe visualization (blue, orange, gray palette)
- ✅ Focus indicators on all interactive elements

### Text Content (Reflection Prompt):
```
After completing the Streaming Wars Strategy simulation:

Strategic Reflection Questions:
• What was your path to profitability? How many years did it take?
• Which sports properties delivered the best ROI? Which were too expensive?
• How did you balance content costs vs. subscriber acquisition?
• What surprised you about the economics of streaming vs. expectations?

This simulation prepares you to analyze the Rogers/NHL deal in Module 5. Rogers
essentially made these same strategic decisions—but with $5.2 billion at stake.
Consider: Would you have made the Rogers deal using the insights from this simulation?
```

### AI Chat Widget Configuration:
- **Widget Name:** "Platform Strategy Assistant"
- **System Prompt:** "You are a helpful strategy advisor for MBA students learning about streaming platform economics. Provide guidance for the Streaming Wars Strategy simulation. Don't give direct answers, but ask Socratic questions to help students think through their platform strategy decisions. Focus on: content portfolio diversification, subscriber lifetime value, churn management, pricing psychology, and rights cost vs. subscriber growth trade-offs."
- **Welcome Message:** "Working through your platform strategy? I can help you think through your rights acquisition and pricing decisions. What aspect of your strategy are you considering?"
- **Show System Prompt:** No

### Details Content:
```
Title: ◆ Strategic Considerations (Open if you're stuck)

Not sure how to approach this simulation? Here are some frameworks:

**Customer Lifetime Value (LTV):**
How long will subscribers stay? If average subscriber stays 18 months at $19.99/month,
their LTV is ~$360. How much can you spend to acquire them? How much on content to
retain them?

**Content Portfolio Strategy:**
• Anchor Properties: High-cost, broad appeal (e.g., NHL, NBA) - drive subscriptions
• Niche Properties: Lower-cost, targeted appeal (e.g., esports, rugby) - reduce churn
• Emerging Properties: Speculative bets (e.g., women's sports, new leagues) - differentiation

**The Streaming Profitability Paradox:**
Growth requires spending on content AND customer acquisition. Profitability requires
reducing both. Most streaming services lose money for 3-5 years building scale.

**Pricing Strategy:**
• Too low: Can't cover content costs, perceived as low-quality
• Too high: Small addressable market, high churn risk
• Sweet spot: Premium enough to signal quality, accessible enough for mass market

**Rights Negotiation:**
• Exclusive rights cost 2-3x more than non-exclusive
• Multi-year deals lock in costs but reduce flexibility
• Regional rights (Canada-only) cheaper than global but smaller audience

**Engagement Investments:**
Beyond just streaming games, consider: interactive features, fantasy integration,
social viewing, original content (documentaries, shoulder programming).
These reduce churn but add costs.

**Key Question:**
What is your differentiation? Why do subscribers choose YOU over competitors?
```

**Design Rationale:**
- **iFrame widget** provides experiential learning of complex economics (UDL engagement, Application level)
- **Infobox** clearly frames task and connects to MLOs (QM clarity)
- **Reflection prompt** encourages metacognition and case study preparation (transfer)
- **AI Chat** offers adaptive support for struggling students (UDL scaffolding)
- **Details** provides strategic frameworks without prescribing answers (progressive disclosure)
- Multiple paths to profitability - no single "right" strategy (UDL choice)
- Directly prepares students to evaluate Rogers deal critically (MLO 2.4)

---

## 💬 DISCUSSION PROMPT #2: Share Your Streaming Wars Strategy

**Post to Discussion Forum** (⬤ Required - 5 points)

**Prompt:**
Share your Streaming Wars simulation results and strategy. Did you achieve profitability? What key decisions led to your outcome?

**Requirements:**
- **Screenshot:** Upload an image of your final simulation dashboard (profitability timeline, subscriber count, etc.)
- **Reflection:** 50 words minimum explaining your strategy and what you learned
- **Peer Engagement:** React to at least 2 peers' strategies with questions or observations
- **Deadline:** Before starting Module 5 case study

**Example Post:**
"[Screenshot attached] I achieved profitability in Year 4 by [strategy]. My biggest lesson was [insight]. Seeing others' approaches, I'm curious: Did anyone succeed with [alternative strategy]?"

**Why This Matters:**
Comparing strategies reveals multiple paths to success and failure. You'll see how different approaches to rights acquisition, pricing, and engagement affect profitability—directly preparing you to evaluate Rogers' actual decisions in the case study.

**Grading:** 5 participation points (included in Week 2's 40% weekly engagement grade)
- 3 points: Screenshot + 50-word reflection
- 2 points: Two quality peer reactions

---

## 🌟 MENTAL BREAK #3: Prepare for Case Analysis

**You've completed:** Framework learning + strategic simulation
**Coming next:** Rogers $5.2B NHL case study (23-25 minutes)

**Take a moment to:**
- Stand and do 5 shoulder rolls backward, 5 forward
- Get fresh water or coffee
- Step outside for 60 seconds if possible (fresh air resets focus)

**Progress:** You're 70% through Week 2 content! The simulation showed you platform strategy in action. Now you'll analyze a real mega-deal to see where theory meets reality. This case has 4 interactive data widgets—it's fascinating but dense.

*This is your most important break. The case study requires critical thinking and synthesis. Take 3-5 minutes to truly reset before diving into the Rogers deal.*

---

## 🎯 FINAL PROJECT CONNECTION

**How Module 4 Supports Your Final Strategic Vision:**

Module 4's Streaming Wars simulation gave you hands-on experience building a direct-to-consumer media strategy. This is critical for your Week 5 capstone if your property pursues DTC.

**What You Learned:**
- Streaming economics require balancing content acquisition costs, customer acquisition, pricing, and churn
- Platform profitability takes 3-5 years due to upfront investment in content and marketing
- Strategic trade-offs: exclusive rights (2-3× cost) vs. non-exclusive, broad content portfolio vs. niche focus

**How to Apply This to Your Final Project:**

When you craft your 5-year media strategy in Week 5, Module 4's simulation provides your DTC analysis framework:

- **Build vs. License Decision:** If your property considers launching its own streaming service, use Module 4's economics to model profitability timelines. Example: "Following Streaming Wars simulation learnings, our DTC platform requires $50M initial investment with break-even projected in Year 4."
- **Content Strategy:** Module 4 taught portfolio balance—anchor properties (broad appeal, high cost) + niche content (retention, lower cost). Apply this to your property's content mix.
- **Customer Economics:** Reference Module 4's LTV calculations to justify pricing. Show subscriber lifetime value exceeds acquisition cost.

**Real-World Application:** Major leagues (NBA, NFL, NHL) are evaluating DTC strategies. Module 4's simulation mirrors the financial models they build to decide whether to launch proprietary streaming services.

---

