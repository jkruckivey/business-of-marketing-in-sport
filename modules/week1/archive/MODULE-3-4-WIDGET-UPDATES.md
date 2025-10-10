# Module 3 & 4 Widget Updates for Storyboard
**Date:** 2025-10-09
**Purpose:** Add learner-facing introductions and fix naming issues

---

## Instructions for Updating Storyboard

Replace the widget sections in `uplimit-week1-storyboard-complete.md` with the content below. Each widget now includes:
1. ✅ **Correct file names**
2. ✅ **Learner-facing introduction text** (appears BEFORE the widget)
3. ✅ **Explicit MLO references** in learner-facing text
4. ✅ **Technical specifications** for Uplimit build

---

## MODULE 3 WIDGET UPDATES

### Element 4: Revenue Mix Slider ✅ (NO CHANGES - Already Perfect)

**Learner-Facing Introduction (ADD THIS BEFORE THE WIDGET):**

```markdown
### 🎯 Interactive Activity: Revenue Mix Slider

**Practice: MLO 1.1 (Map major revenue streams) & MLO 1.3 (Evaluate growth potential and risks)**

You've just learned about the five major revenue streams in professional sport. Now it's time to see how they work together as an ecosystem.

In this interactive activity, you'll build your own revenue portfolio by allocating 100% across the five streams: Media Rights, Ticketing, Sponsorship, Merchandising, and Betting. As you adjust the sliders, you'll see real-time feedback on your portfolio's risk level and growth potential.

**What you'll discover:**
- Why most leagues depend heavily on media rights (40-60%)
- The trade-offs between high-growth streams (Betting) and stable streams (Ticketing)
- How different allocation strategies create different risk profiles

**Time commitment:** 3 minutes
**Learning outcomes practiced:** MLO 1.1 (Mapping revenue streams), MLO 1.3 (Evaluating growth potential and risks)

---
```

**[Keep all existing technical specs - no changes needed]**

---

### Element 6: Media Rights Calculator ⚠️ (FIX NAMING + ADD LEARNER INTRO)

**CHANGE IN TABLE:**
- Current name: "Media Deal Calculator"
- **New name:** "Media Rights Calculator"
- **New file reference:** Embed `media-rights-calculator.html` (from module-2/widgets)

**Learner-Facing Introduction (ADD THIS BEFORE THE WIDGET):**

```markdown
### 🎯 Interactive Activity: Media Rights Calculator

**Practice: MLO 1.1 (Map major revenue streams) & MLO 1.3 (Evaluate growth potential)**

You've learned that media rights are the largest revenue stream for most leagues (40-60% of total revenue). But what determines how much a media deal is worth?

In this interactive calculator, you'll input key factors—league size, audience reach, advertising rates (CPM), and contract length—to calculate total media deal value. You'll see how variables like viewership and cost-per-thousand viewers multiply to create deals worth billions.

**What you'll discover:**
- Why the NFL's $110B deal dwarfs other leagues
- How audience size and advertising rates interact
- The impact of contract length on total deal value
- The difference between shared vs. local media revenue

**Time commitment:** 4 minutes
**Learning outcomes practiced:** MLO 1.1 (Understanding media rights mechanics), MLO 1.3 (Evaluating what drives growth)

---
```

**Technical Specifications:**

#### Element 6: iFrame Widget - Media Rights Calculator

**Widget Purpose:** Calculate media rights value based on inputs (league size, audience, ad rates, contract length).

**Widget Status:** ✅ Built and Ready (located in module-2/widgets/)

**File Location:** `modules/week1/module-2/widgets/media-rights-calculator.html`

**How It Works:**
- **Inputs:** League size, audience (millions), ad rate (CPM), contract length
- **Outputs:** Total deal value, per-team share, % of revenue
- **Examples:** NFL ($110B), NHL ($5.2B), MLS ($250M)
- **Learning:** Understand what drives media rights valuation
- **Bonus:** Toggle "shared vs. local" to see revenue sharing impact

**Uplimit Implementation:**
```html
<iframe src="https://jkruckivey.github.io/business-of-marketing-in-sport/module-2/widgets/media-rights-calculator.html"
        width="800"
        height="600"
        title="Media Rights Calculator - Calculate media rights value"
        frameborder="0"
        allowfullscreen>
</iframe>
```

**Accessibility:**
- ✅ Keyboard navigation for all inputs
- ✅ ARIA labels on all form controls
- ✅ Screen reader announcements for calculated results
- ✅ High contrast mode support
- ✅ WCAG 2.2 AA compliant

---

### Element 13: Dynamic Pricing Simulator ✅ (NO NAMING CHANGES - ADD LEARNER INTRO)

**Learner-Facing Introduction (ADD THIS BEFORE THE WIDGET):**

```markdown
### 🎯 Interactive Activity: Dynamic Pricing Simulator

**Practice: MLO 1.1 (Understand ticketing mechanics) & MLO 1.3 (Evaluate revenue optimization strategies)**

Ticketing generates 20-30% of team revenue, but not all games are equal. Dynamic pricing lets teams adjust prices based on demand factors—and can increase annual revenue by 15-25%.

In this simulator, you'll set ticket prices for Toronto Raptors games based on opponent strength, day of week, team record, and special events. Watch how these factors impact attendance and total revenue in real time.

**What you'll discover:**
- Why Lakers tickets cost $400 but Pistons tickets cost $120
- The trade-off between higher prices and lower attendance
- How dynamic pricing captures more value than static pricing
- Which factors have the biggest impact on demand

**Time commitment:** 5 minutes
**Learning outcomes practiced:** MLO 1.1 (Understanding ticketing revenue stream), MLO 1.3 (Evaluating optimization strategies)

---
```

**[Keep all existing technical specs - no changes needed]**

---

### Element 16: Stadium Revenue Optimizer ⚠️ (CHANGE PRIORITY - ADD NOTE)

**CHANGE IN TABLE:**
- Current priority: 🟡 Recommended
- **New priority:** 🟢 Optional (Phase 3 - Not Yet Built)

**ADD THIS NOTE:**
```
**Widget Status:** ⭕ Phase 3 widget - TO BE BUILT

This widget is planned for future development. Once built, it will let students design the premium vs. general admission seating mix to maximize revenue while maintaining fan accessibility.
```

---

### Element 21: Sponsorship ROI Calculator ✅ (NO NAMING CHANGES - ADD LEARNER INTRO)

**Learner-Facing Introduction (ADD THIS BEFORE THE WIDGET):**

```markdown
### 🎯 Interactive Activity: Sponsorship ROI Calculator

**Practice: MLO 1.1 (Understand sponsorship mechanics) & MLO 1.3 (Evaluate activation strategies)**

Sponsorship generates 15-25% of team revenue, but not all sponsorships are equal. The best sponsors activate beyond logos—creating fan experiences that build positive brand associations.

In this calculator, you'll input deal type (naming rights, jersey patch, category partner), market size, and activation level to calculate brand impressions, estimated brand lift, and deal value. You'll see why activation matters more than logo placement alone.

**What you'll discover:**
- Why Scotiabank Arena costs $40M/year but smaller markets pay $10M
- How "full integration" drives 3-5× more value than "logo only"
- The relationship between brand impressions and sponsorship value
- Why sponsors measure success beyond visibility

**Time commitment:** 4 minutes
**Learning outcomes practiced:** MLO 1.1 (Understanding sponsorship revenue stream), MLO 1.3 (Evaluating activation strategies)

---
```

**[Keep all existing technical specs - no changes needed]**

---

### Element 26: Betting Market Simulator ⚠️ (FIX NAMING + ADD LEARNER INTRO)

**CHANGE IN TABLE:**
- Current name: "Betting Legalization Timeline"
- **New name:** "Betting Market Simulator"
- **New file reference:** Embed `betting-market-simulator.html`

**Learner-Facing Introduction (ADD THIS BEFORE THE WIDGET):**

```markdown
### 🎯 Interactive Activity: Betting Market Simulator

**Practice: MLO 1.1 (Map emerging revenue streams) & MLO 1.3 (Evaluate growth potential and risks)**

Sports betting is the fastest-growing revenue stream (30-40% year-over-year growth), currently representing 2-8% of league revenue. Legalization has fundamentally changed how leagues monetize fan engagement.

In this simulator, you'll make strategic decisions about betting partnerships, data licensing deals, and media integration. You'll see how different approaches impact revenue, fan engagement, and risk exposure.

**What you'll discover:**
- How betting legalization creates multiple revenue opportunities
- Trade-offs between official partnerships vs. open market approaches
- Why data licensing is a separate (and valuable) revenue stream
- How betting integration drives increased viewership across all content

**Time commitment:** 3 minutes
**Learning outcomes practiced:** MLO 1.1 (Understanding betting revenue stream), MLO 1.3 (Evaluating growth potential and regulatory risks)

---
```

**Technical Specifications:**

#### Element 26: iFrame Widget - Betting Market Simulator

**Widget Purpose:** Explore betting market strategies and understand revenue opportunities from legalization.

**Widget Status:** ✅ Built and Ready (located in module-3/widgets/)

**File Location:** `modules/week1/module-3/widgets/betting-market-simulator.html`

**How It Works:**
- **Inputs:** Partnership strategy selection, data licensing approach, media integration level
- **Outputs:** Revenue projections, engagement metrics, risk assessment
- **Scenarios:** Official partner deals, data licensing, media integration
- **Learning:** Understand how betting creates multiple revenue streams

**Uplimit Implementation:**
```html
<iframe src="https://jkruckivey.github.io/business-of-marketing-in-sport/module-3/widgets/betting-market-simulator.html"
        width="900"
        height="650"
        title="Betting Market Simulator - Explore betting revenue strategies"
        frameborder="0"
        allowfullscreen>
</iframe>
```

**Accessibility:**
- ✅ Keyboard navigation for all controls
- ✅ ARIA labels on interactive elements
- ✅ Screen reader compatible
- ✅ High contrast mode support
- ✅ WCAG 2.2 AA compliant

---

### Element 29: Ecosystem Cascade Simulator ✅ (NO NAMING CHANGES - ADD LEARNER INTRO)

**Learner-Facing Introduction (ADD THIS BEFORE THE WIDGET):**

```markdown
### 🎯 Interactive Activity: Ecosystem Cascade Simulator

**Practice: MLO 1.1 (See revenue stream interconnections) & MLO 1.2 (Understand sport's unique business model) & MLO 1.3 (Evaluate strategic investments)**

This is where everything comes together. You've explored each revenue stream individually—now it's time to see how they form an **ecosystem** rather than a portfolio.

In this simulation, you'll analyze the Edmonton Oilers signing Connor McDavid to an $8-year, $100 million contract. At first glance, it looks like a losing investment: $12.5M salary vs. $8M direct revenue. But click to reveal the **indirect effects** and watch the ecosystem amplification unfold.

**What you'll discover:**
- How a single investment cascades through all five revenue streams
- Why teams "overpay" for stars (ecosystem thinking vs. direct ROI)
- The difference between direct effects (tickets, merchandise) and indirect effects (media, sponsorship, playoffs, betting)
- How strategic decisions create ripple effects worth $30-40M+ annually

**Time commitment:** 5 minutes
**Learning outcomes practiced:** MLO 1.1 (Seeing interconnections), MLO 1.2 (Understanding sport's unique model), MLO 1.3 (Evaluating strategic investments)

---
```

**[Keep all existing technical specs - no changes needed]**

---

## MODULE 4 WIDGET UPDATE

### Element 2: Revenue Empire Builder Widget

**Learner-Facing Introduction (ADD THIS BEFORE THE WIDGET):**

```markdown
### 🎯 Interactive Activity: Revenue Empire Builder

**Practice: MLO 1.1 (Apply revenue stream knowledge) & MLO 1.3 (Evaluate growth potential and manage risks)**

You've explored each revenue stream through interactive simulations. Now it's time to put it all together and build a complete revenue strategy.

You are the new CFO of a mid-market professional sports team. Your challenge: maximize revenue over a 5-year period by strategically investing $50M across the five revenue streams. You'll make year-by-year decisions, respond to market events, and balance growth against risk.

**What you'll practice:**
- Allocating budget across media rights, ticketing, sponsorship, merchandising, and betting
- Managing portfolio risk vs. growth potential
- Responding to market events (recessions, new competitors, regulatory changes)
- Understanding how revenue streams create synergies

**Strategic considerations:**
- Media rights provide stability but require long-term contracts
- Ticketing is capacity-limited (ceiling on growth)
- Sponsorship takes time to build but can be very profitable
- Betting offers high growth but carries regulatory risk
- Diversification helps weather market changes

**Time commitment:** 30-45 minutes (can be completed in multiple sessions)
**Learning outcomes practiced:** MLO 1.1 (Applying revenue stream knowledge), MLO 1.3 (Evaluating growth potential and managing risks)

---
```

**Technical Specifications:**

### Element 2: iFrame Widget - Revenue Empire Builder

**Widget Purpose:** Multi-year simulation where students build and manage a revenue portfolio, making strategic decisions and responding to market events.

**Widget Status:** ☐ Needs to be built (Option A selected by user)

**File Location (when built):** `modules/week1/module-4/widgets/revenue-empire-builder.html`

**Widget Features:**
- Interactive budget allocation sliders (allocate $50M across 5 streams)
- Year-by-year decision points with scenario-based choices
- Market events that impact strategy (e.g., "New streaming service offers rights deal - accept?")
- Real-time feedback on revenue performance and risk levels
- Final score and performance summary with strategic insights
- Export functionality for student portfolios

**How It Works:**
- **Year 1:** Initial $50M budget allocation across 5 streams
- **Years 2-5:** Reinvestment decisions based on previous year performance
- **Random events:** Market disruptions, opportunities, regulatory changes
- **Success metrics:** Total revenue growth, risk management, strategic adaptability
- **Feedback:** Real-time visualization of portfolio performance

**Learning Objectives:**
- MLO 1.1: Apply understanding of how revenue streams work together
- MLO 1.3: Evaluate growth potential and risks in realistic scenarios
- Practice strategic decision-making under uncertainty
- Develop portfolio management skills (diversification, risk management)

**Uplimit Implementation (when built):**
```html
<iframe src="https://jkruckivey.github.io/business-of-marketing-in-sport/module-4/widgets/revenue-empire-builder.html"
        width="800"
        height="600"
        title="Revenue Empire Builder - Build your 5-year revenue strategy"
        frameborder="0"
        allowfullscreen>
</iframe>
```

**Widget Accessibility Requirements:**
- ✅ Keyboard navigation functional (Tab, Arrow keys, Enter)
- ✅ ARIA labels on all interactive elements
- ✅ ARIA live regions announce year transitions and events
- ✅ Color-blind safe color scheme (test all visualizations)
- ✅ Screen reader compatible (all text and data readable)
- ✅ Focus indicators on all controls
- ✅ High contrast mode support
- ✅ WCAG 2.2 AA compliant

**Build Specifications:**
- **Estimated build time:** 12-15 hours
- **Technologies:** HTML, CSS (Ivey design system), Vanilla JavaScript
- **Data:** Revenue growth rates, risk multipliers, market event probabilities
- **Testing:** Multi-browser testing (Chrome, Firefox, Safari, Edge)
- **Accessibility testing:** Keyboard-only testing, screen reader testing (NVDA/JAWS)

---

## SUMMARY OF CHANGES

### Module 3 (8 widgets)

| Element | Widget Name | Change Type | Status |
|---------|------------|-------------|--------|
| 4 | Revenue Mix Slider | ✅ Add learner intro only | No technical changes |
| 6 | **Media Rights Calculator** | ⚠️ Rename + Add learner intro | Update name & file path |
| 11 | Streaming Wars Decision Game | ✅ No changes | Phase 3 (optional, not built) |
| 13 | Dynamic Pricing Simulator | ✅ Add learner intro only | No technical changes |
| 16 | Stadium Revenue Optimizer | ⚠️ Change priority to Phase 3 | Not built |
| 21 | Sponsorship ROI Calculator | ✅ Add learner intro only | No technical changes |
| 26 | **Betting Market Simulator** | ⚠️ Rename + Add learner intro | Update name & file path |
| 29 | Ecosystem Cascade Simulator | ✅ Add learner intro only | No technical changes |

### Module 4 (1 widget)

| Element | Widget Name | Change Type | Status |
|---------|------------|-------------|--------|
| 2 | Revenue Empire Builder | ✅ Add learner intro + Build widget | Needs to be built (12-15 hrs) |

---

## NEXT STEPS

1. ✅ Review this document for accuracy
2. ⭕ Copy learner-facing introductions into main storyboard file
3. ⭕ Fix naming: "Media Deal Calculator" → "Media Rights Calculator"
4. ⭕ Fix naming: "Betting Legalization Timeline" → "Betting Market Simulator"
5. ⭕ Update Stadium Revenue Optimizer priority to Phase 3
6. ⭕ Build Revenue Empire Builder widget (12-15 hours)
7. ⭕ Test all widget embeds and learner-facing text flow

---

**Document Complete:** 2025-10-09
**Widgets Covered:** 9 widgets (8 in Module 3, 1 in Module 4)
**Learner Introductions Added:** 8 (all Module 3 widgets + Module 4 widget)
**Naming Fixes:** 2 (Media Rights Calculator, Betting Market Simulator)
**Priority Changes:** 1 (Stadium Revenue Optimizer → Phase 3)
