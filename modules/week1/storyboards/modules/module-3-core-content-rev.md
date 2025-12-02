## MODULE 3: Core Content - Revenue Streams (BOPPPS: Participatory - Interactive Discovery) • **V3 INTERACTIVE-FIRST REDESIGN**
**Purpose:** Provide foundational knowledge about each revenue stream through INTERACTIVE DISCOVERY and hands-on manipulation (supports MLO 1.1, 1.2, 1.3)

**Uplimit Structure:** Third module in Unit 1

### V3 Module 3 Structure (30 Elements)

**Content Summary:**
- **Total text:** ~1,000 words broken into 9 micro-readings (100-120 words each, ~1 minute each)
- **Total video:** 4 minutes (2 videos - one at start, one at midpoint for mental break)
- **Interactive widgets:** 8 widgets, ~25 minutes total hands-on engagement
- **Visual elements:** 3 images, 1 table, 3 infoboxes, 1 vertical list, 1 tiles, 1 details accordion
- **Total time:** ~35 minutes (higher than V2, but **75% ACTIVE engagement**)

### Section 1: Introduction & Overview (Elements 1-4)

| Order | Element | Content/Purpose | Time | Words | Source |
|-------|---------|----------------|------|-------|--------|
| 1 | **▬ Text** ⬛ Required | Brief intro + 5 streams list | 1 min | 100 | Type directly |
| 2 | **▶ Video** ⬛ Required | 5 Revenue Streams (animated) | 2 min | - | Upload `week1-video1-revenue-streams.mp4` |
| 3 | **⊞ Vertical List** ⬛ Required | 5 streams at a glance | 1 min | - | Type directly |
| 4 | **⚙ iFrame Widget** ⬛ Required | **Revenue Mix Slider** | 3 min | - | Embed `revenue-mix-slider.html` |
| 5 | **⚙ iFrame Widget** ◐ Recommended | **Learning Outcomes Widget** - Interactive MLO-CLO mapping | Embed `learning-outcomes-module-3.html` | Shows how module outcomes connect to course goals |


#### Element 1: Introduction Text
**Copy this markdown directly into Uplimit:**

```markdown
# Understanding Sport Revenue Streams

**Applied question:** Which stream do you believe is the best near-term growth lever for your chosen team, and what evidence would change your mind?



> **Personalized pickup from Module 1**
>
> You identified **{{m1_stream_choice}}** as the most volatile revenue stream and noted: “{{m1_volatility_reason}}.”
> In this module, you’ll put that instinct to the test. If you didn’t make a selection earlier, choose one now and keep it in mind as you use the simulators.

**Design note:** To avoid redundancy, we **won’t re-define** each stream here. For concise definitions, see **Module 1**. Below, each section starts with an **applied question** and a tool to explore trade-offs.


In Module 1, you saw a preview of professional sport's five major revenue streams. Now it's time to explore each one in depth—how they work, what drives their value, and most importantly, how they interconnect.

Professional sports organizations generate revenue through five major streams, each with distinct characteristics, risks, and growth trajectories. Unlike traditional businesses where revenue sources operate independently, sport revenue streams are deeply interconnected—creating what industry experts call a **"revenue ecosystem"** rather than a portfolio.

**The Five Major Revenue Streams (Revisited):**

1. **Media Rights** (40-60% of revenue) - Broadcasting and streaming deals
2. **Ticketing & Live Events** (20-30% of revenue) - Gate receipts and in-venue spending
3. **Sponsorship & Partnerships** (15-25% of revenue) - Corporate deals and brand alignment
4. **Merchandising & Licensing** (5-10% of revenue) - Apparel and licensed products
5. **Betting & Gaming** (2-8% and growing) - The emerging frontier

As you work through this module, pay attention to how these streams interconnect. An investment in one area often creates ripple effects across the entire ecosystem—a principle that separates strategic sports business leaders from purely financial operators.
```

#### Element 2: Video - Five Revenue Streams Overview
- **File:** `week1-video1-revenue-streams.mp4`
- **Duration:** 2 minutes
- **VTT Transcript:** `week1-video1-revenue-streams.vtt`
- **Video Title:** "Five Revenue Streams in Professional Sports"
- **Video Caption:** "2-minute overview of media rights, ticketing, sponsorship, merchandising, and betting"

**FULL SCRIPT:**

```
[OPENING - 0:00-0:15]
[ON-SCREEN: Five revenue stream icons appearing]

NARRATOR:
Professional sports generates revenue from five major sources. Understanding these
streams is essential for analyzing sports business strategy.

Let's break them down quickly.

---

[SECTION: THE FIVE STREAMS - 0:15-1:45]
[ANIMATION: Each stream appears with percentage]

NARRATOR:
Stream #1: Media Rights (40-60% of revenue)
Broadcasting and streaming deals. The NFL's current media rights total $110 billion
over 11 years. This is the foundation of modern sports economics.

Stream #2: Ticketing & Live Events (20-30%)
Not just ticket sales—luxury suites, dynamic pricing, concessions, parking. Teams
generate $40-50 per attendee beyond the ticket price.

Stream #3: Sponsorship & Partnerships (15-25%)
Corporate deals like naming rights, jersey sponsors, and category partnerships.
Scotiabank Arena pays $30-50 million per year for naming rights.

Stream #4: Merchandising & Licensing (5-10%)
Jerseys, hats, video games. Often pooled and shared equally across teams to maintain
competitive balance.

Stream #5: Betting & Gaming (2-8%, growing fast)
The newest frontier. Leagues earn billions through betting partnerships, data licensing,
and media integration. Growing 30-40% year-over-year.

---

[CONCLUSION - 1:45-2:00]
[ANIMATION: Five streams connecting as ecosystem]

NARRATOR:
Key insight: These streams don't exist in isolation. They're interconnected.
Investment in one stream amplifies others.

Successful organizations build revenue ecosystems, not portfolios.

[END SCREEN]
```

#### Element 3: Vertical List Content
Create 5 numbered items:

**Item 1 - Title:** "Media Rights"
**Item 1 - Description:** "Broadcasting and streaming deals. Typically 40-60% of total revenue for major leagues. Predictable, long-term contracts. Risk: Cord-cutting and audience fragmentation."

**Item 2 - Title:** "Ticketing & Attendance"
**Item 2 - Description:** "Gate receipts and premium seating. 20-30% of revenue. Variable based on team performance and market size. Risk: Venue capacity limits and economic downturns."

**Item 3 - Title:** "Sponsorship"
**Item 3 - Description:** "Corporate partnerships and naming rights. 15-25% of revenue. Relationship-driven, brand alignment critical. Risk: Sponsor financial health and brand controversies."

**Item 4 - Title:** "Merchandising"
**Item 4 - Description:** "Apparel and licensed products. 5-10% of revenue (centralized leagues). Tied to team/player popularity. Risk: Consumer discretionary spending."

**Item 5 - Title:** "Betting & Gaming"
**Item 5 - Description:** "Sports betting partnerships and data licensing. Emerging stream, growing rapidly. Risk: Regulatory changes and integrity concerns."

#### Element 4: iFrame Widget - Revenue Mix Slider

### Element 5: Learning Outcomes Widget

**Widget Purpose:** Interactive visualization showing how this module's learning outcomes connect to course-level goals

**Uplimit Implementation:**

**Widget File:** `learning-outcomes-module-3.html`

**Embed Code:**
```html
<iframe
  src="../../widgets/learning-outcomes-module-3.html"
  width="100%"
  height="600"
  style="border: none; border-radius: 8px;"
  title="Learning Outcomes - Module 3"
  aria-label="Interactive widget showing module learning outcomes and their connection to course goals"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Widget Features:**
- Click any module outcome to see which course-level outcomes it contributes to
- Interactive highlighting shows connections between module and course goals
- WCAG 2.2 AA compliant with keyboard navigation and screen reader support


### ⚙ Interactive Activity: Revenue Mix Slider

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

**Widget Purpose:** Interactive portfolio builder where students allocate 100% across 5 revenue streams and see real-time feedback on risk/growth projections.

**How It Works:**
- 5 sliders for each revenue stream (Media Rights, Ticketing, Sponsorship, Merchandising, Betting)
- Sliders automatically adjust so total = 100%
- Real-time pie chart visualization
- Risk score calculated (weighted by stream risk levels)
- Growth projection calculated (weighted by stream growth trends)
- Export allocation as JSON for student portfolios

**Learning Objectives:**
- MLO 1.1: Understand relative size of each revenue stream
- MLO 1.3: Explore trade-offs between high-growth (high-risk) and stable streams

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/widgets/revenue-mix-slider.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Revenue Mix Slider - Build your revenue portfolio"
  aria-label="Interactive revenue portfolio builder where you allocate 100% across 5 revenue streams using sliders to see risk and growth projections"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Accessibility:**
- ✅ Keyboard navigation (Tab, Arrow keys, Enter)
- ✅ ARIA labels on all sliders
- ✅ Screen reader announcements for value changes
- ✅ High contrast mode support
- ✅ Color-blind safe palette (gold, blue, green, orange, purple)

**Status:** ✅ Phase 1 widget - BUILT AND READY

---

### Section 2: Media Rights Deep Dive (Elements 5-11)

| Order | Element | Content/Purpose | Time | Words | Source |
|-------|---------|----------------|------|-------|--------|
| 5 | **▬ Text** ⬛ Required | Why media is 40-60% | 1 min | 100 | Type directly |
| 6 | **⚙ iFrame Widget** ▣ Recommended | **Media Rights Calculator** | 4 min | - | Embed `media-rights-calculator.html` |
| 7 | **ⓘ Infobox** ⬛ Required | Key insight: Appointment viewing | 1 min | 50 | Type directly |
| 8 | **▭ Image** ▣ Recommended | Media rights timeline | 1 min | - | Upload `media-rights-timeline.png` |
| 9 | **▬ Text** ⬛ Required | Streaming vs. Traditional | 1 min | 120 | Type directly |
| 10 | **▦ Table** ⬛ Required | Streaming vs. Traditional comparison | 1 min | - | Type directly |
| 11 | **⚙ iFrame Widget** ▢ Optional | **Streaming Wars Decision Game** | 5 min | - | Embed `streaming-wars-game.html` |

#### Element 5: Media Rights Text
**Copy this markdown directly into Uplimit:**

```markdown
# Media Rights: The Dominance

**Applied question:** If national media revenue flattened next season, where could you reallocate effort to defend total revenue without eroding fan experience?


Media rights—the fees paid by broadcasters and streaming services to air games—represent the **largest revenue stream** for most professional leagues, typically accounting for **40-60% of total revenue**.

These deals are massive: the NFL's current media rights contracts total **$110 billion over 11 years** ($10B/year), while the English Premier League generates over **$5 billion per year** from domestic and international broadcast rights.

**Why Sports Command Premium Value:**
- **Cost per thousand viewers (CPM)** for premium sports: **$50-70**
- **CPM for scripted television:** **$15-25**
- **Premium multiplier:** Sports command **3-4× higher advertising rates**

For leagues, broadcast deals provide **predictable, long-term revenue** (often 9-12 year contracts), allowing teams to make long-term financial commitments like player contracts and facility investments.
```

#### Element 6: iFrame Widget - Media Rights Calculator

### ⚙ Interactive Activity: Media Rights Calculator

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

**Widget Purpose:** Calculate media rights value based on inputs (league size, audience, ad rates, contract length).

**Widget Status:** ✅ Phase 2 widget - BUILT AND READY

**How It Works:**
- **Inputs:** League size, audience (millions), ad rate (CPM), contract length
- **Outputs:** Total deal value, per-team share, % of revenue
- **Examples:** NFL ($110B), NHL ($5.2B), MLS ($250M)
- **Learning:** Understand what drives media rights valuation
- **Bonus:** Toggle "shared vs. local" to see revenue sharing impact

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/modules/week1/widgets/media-rights-calculator.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Media Rights Calculator - Calculate media rights value"
  aria-label="Interactive calculator for media rights valuation based on league size, audience reach, advertising rates, and contract length"
  allowfullscreen
  loading="lazy">
</iframe>
```

#### Element 7: Infobox - Appointment Viewing Insight
```
Title: ◆ Key Insight: "Appointment Viewing"

Sports are the last true appointment viewing—you can't watch "later" without risking spoilers from social media. This creates predictable, simultaneous audiences (rare in 2024), premium advertising rates, subscription retention power, and cultural currency. This unique characteristic explains why sports rights command prices that seem economically irrational—until you understand their strategic defensive value for traditional broadcasters and offensive value for streaming disruptors.
```

#### Element 8: Image - Media Rights Timeline
- **File:** `media-rights-timeline.png`
- **Alt Text:** "Timeline showing major media rights deals from 2020-2025 across NHL, NBA, NFL, and MLB. Bars show contract values and durations, illustrating escalating rights costs and shift to streaming platforms."
- **Caption:** "Media Rights Escalation: Major League Deals 2020-2025"
- **Size:** Optimized for web, max 800px width

#### Element 9: Streaming vs Traditional Text
**Copy this markdown directly into Uplimit:**

```markdown
# The Streaming Wars

**Applied question:** How would a mid-season shift from cable to streaming change your pricing, sponsorship inventory, or content strategy this month?


The rise of streaming has fundamentally disrupted sports media economics. Companies like Amazon, Apple, and DAZN have entered bidding wars, driving rights values higher while introducing new business models.

**How Streaming Differs from Traditional Broadcasting:**

Streaming platforms operate with fundamentally different economics than traditional TV. They use subscription-based revenue models instead of advertising, offer global distribution instead of regional licensing, collect detailed viewer analytics instead of aggregated ratings, and accept 3-5 year payback periods instead of immediate ROI expectations.

**The Hybrid Model Emerges:**

Leagues increasingly split rights packages to maximize total revenue: sell traditional TV rights to one partner (NBC, ESPN), sell streaming rights to another (Apple, Amazon), and create direct-to-consumer platforms (NBA League Pass, NHL.TV). This **"hybrid model"** hedges against uncertainty about the future of television while capturing value from both worlds.
```

#### Element 10: Table - Streaming vs Traditional Comparison

| **Factor** | **Traditional TV** | **Streaming** |
|-----------|-------------------|--------------|
| **Revenue model** | Advertising-dependent | Subscription-based |
| **Geographic reach** | Regional licensing | Global distribution |
| **Engagement data** | Aggregated ratings (Nielsen) | Detailed viewer analytics |
| **Profitability timeline** | Immediate ROI expectations | 3-5 year payback periods |

**Table Note:** "Streaming platforms' different economics explain why tech companies can outbid traditional broadcasters—they're valuing strategic fit, not just immediate revenue."

#### Element 11: iFrame Widget - Streaming Wars Decision Game

### ⚙ Interactive Activity: Streaming Wars Decision Game

**Practice: MLO 1.1 (Understand media rights options) & MLO 1.3 (Evaluate strategic trade-offs)**

Leagues increasingly face a critical question: traditional TV with guaranteed revenue, or streaming with global reach and uncertain returns? The NHL, NBA, and NFL have all split rights packages to hedge their bets.

In this decision game, you're the NHL commissioner choosing between two media offers: ESPN (traditional, $8B/10 years, advertising-based) or Apple TV+ (streaming, $10B/10 years, subscription-based, global reach). You'll see 5-year financial projections and understand why "hybrid deals" became the industry standard.

**What you'll discover:**
- Why streaming offers higher total value but more uncertainty
- The trade-offs between guaranteed ad revenue vs. subscription growth
- How cord-cutting trends impact long-term broadcast value
- Why leagues split rights packages instead of choosing one platform

**Time commitment:** 5 minutes
**Learning outcomes practiced:** MLO 1.1 (Understanding media rights landscape), MLO 1.3 (Evaluating strategic media decisions)

---

**Widget Purpose:** Choose between traditional TV vs. streaming offers to understand strategic trade-offs.

**Widget Status:** ✅ Built and Ready

**Scenario:** You're the NHL commissioner. Two offers:

- **ESPN (Traditional):** $8B over 10 years, guaranteed, ad-based
- **Apple TV+ (Streaming):** $10B over 10 years, subscription-based, global reach

**Decision:** Students choose and see 5-year projection
**Learning:** Why leagues split rights packages (hedge strategy)

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/widgets/streaming-wars-game.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Streaming Wars Decision Game - Choose ESPN vs Apple deal"
  aria-label="Interactive decision game where you choose between traditional TV and streaming media offers with 5-year financial projections"
  allowfullscreen
  loading="lazy">
</iframe>
```

---

### Section 3: Ticketing Economics (Elements 12-18)

| Order | Element | Content/Purpose | Time | Words | Source |
|-------|---------|----------------|------|-------|--------|
| 12 | **▬ Text** ⬛ Required | Ticketing basics | 1 min | 100 | Type directly |
| 13 | **⚙ iFrame Widget** ⬛ Required | **Dynamic Pricing Simulator** | 5 min | - | Embed `dynamic-pricing-simulator.html` |
| 14 | **▭ Image** ▣ Recommended | Premium seating breakdown | 1 min | - | Upload `premium-seating-breakdown.png` |
| 15 | **▬ Text** ⬛ Required | Premium seating strategy | 1 min | 120 | Type directly |
| 16 | **⚙ iFrame Widget** ▢ Optional (Phase 3) | **Stadium Revenue Optimizer** | 4 min | - | Embed `stadium-revenue-optimizer.html` |
| 17 | **ⓘ Infobox** ▣ Recommended | Premium seat economics insight | 1 min | 50 | Type directly |
| 18 | **▤ Details** ▢ Optional | PSL case study (SoFi Stadium) | 1 min | - | Type directly |

#### Element 12: Ticketing Basics Text
**Copy this markdown directly into Uplimit:**

```markdown
# Ticketing: The Live Experience

**Applied question:** If you had to raise total ticket yield by 8% without raising face value, what two levers would you test first—and why?


Ticketing and live event revenue—including ticket sales, premium seating, and in-venue spending—accounts for **20-30% of total revenue** for most teams. Unlike media rights, which are negotiated at the league level and often shared, ticketing revenue is largely **local and team-controlled**.

**Dynamic Pricing Revolution:**

Teams now adjust ticket prices based on demand factors: opponent quality (Lakers vs. Pistons), team performance (playoff contention), day of week (weekend vs. weekday), and special events (giveaways, rivalries). The Toronto Raptors might charge **$150** for a Tuesday game against Detroit, but **$400** for a Saturday game against the Lakers.

Over a full season, dynamic pricing can **increase ticketing revenue by 15-25%** compared to static pricing.
```

#### Element 13: iFrame Widget - Dynamic Pricing Simulator

### ⚙ Interactive Activity: Dynamic Pricing Simulator

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

**Widget Purpose:** Simulate dynamic ticket pricing for Toronto Raptors games based on demand factors.

**Widget Status:** ✅ Phase 1 widget - BUILT AND READY

**How It Works:**
- **Inputs:**
  - Opponent strength slider (Weak → Strong)
  - Day of week dropdown (Monday-Sunday)
  - Team record slider (Losing → Winning)
  - Special events checkbox (Rivalry game, giveaway, jersey retirement)
- **Outputs:**
  - Recommended ticket price ($50-500)
  - Attendance projection (50%-100% capacity)
  - Total revenue calculation
  - Comparison vs. static pricing
- **Real Examples:** Lakers (Saturday, winning) = $400 | Pistons (Tuesday, losing) = $120

**Learning Objectives:**
- MLO 1.1: Understand ticketing revenue stream mechanics
- MLO 1.3: Evaluate revenue optimization strategies and trade-offs

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/widgets/dynamic-pricing-simulator.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Dynamic Pricing Simulator - Optimize Raptors ticket prices"
  aria-label="Interactive ticket pricing simulator where you adjust prices based on opponent strength, day of week, and team performance to maximize revenue"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Accessibility:**
- ✅ Keyboard navigation for all controls
- ✅ ARIA labels and live regions for real-time updates
- ✅ Screen reader friendly output announcements
- ✅ High contrast mode with WCAG AA compliance
- ✅ Focus indicators on all interactive elements

#### Element 14: Image - Premium Seating Breakdown
- **File:** `premium-seating-breakdown.png`
- **Alt Text:** "Stadium seating diagram showing luxury suites, club seats, and general admission with corresponding revenue percentages. Premium seating (10-15% of capacity) generates 40-50% of total ticketing revenue."
- **Caption:** "Premium Seating Economics: 10-15% of Capacity Generates 40-50% of Revenue"
- **Size:** Optimized for web, max 800px width

#### Element 15: Premium Seating Strategy Text
**Copy this markdown directly into Uplimit:**

```markdown
# The Premium Seating Strategy

**Applied question:** You have 220 unsold club seats for a low-demand game. What bundle or segmentation move maximizes margin without discounting the brand?


The evolution of stadium economics has shifted dramatically from a **"fill the seats"** model to a **"maximize per-capita revenue"** model. Modern venues are designed with tiered experiences that extract maximum value from affluent customers.

**Premium Seating Tiers:**

- **Luxury Suites:** $100,000-500,000 per season (12-24 seats, catering, private rooms)
- **Club Seats:** $5,000-15,000 per seat per season (exclusive lounges, premium sight lines)
- **Courtside/Field Level:** $500-2,000+ per game (celebrity seating, concierge service)

**The Critical Economic Insight:** Premium seating generates 40-50% of ticketing revenue despite representing only 10-15% of capacity. This explains why virtually every stadium renovation prioritizes premium inventory expansion.
```

#### Element 16: iFrame Widget - Stadium Revenue Optimizer

### ⚙ Interactive Activity: Stadium Revenue Optimizer

**Practice: MLO 1.1 (Understand ticketing revenue structure) & MLO 1.3 (Evaluate revenue optimization strategies)**

Modern stadium economics have shifted from a "fill the seats" model to a "maximize per-capita revenue" model. Premium seating (luxury suites, club seats) represents only 10-15% of capacity but generates 40-50% of ticketing revenue.

In this optimizer, you'll design the seating mix for an 18,000-seat arena by adjusting the percentage of luxury suites, club seats, and general admission. Watch how total revenue changes as you prioritize premium inventory—and discover why virtually every stadium renovation expands premium seating.

**What you'll discover:**
- Why 10-15% of capacity generates 40-50% of revenue
- The trade-off between maximizing revenue and maintaining fan accessibility
- How premium seating pricing creates exponential returns
- Why teams prioritize luxury suite expansion in renovations

**Time commitment:** 4 minutes
**Learning outcomes practiced:** MLO 1.1 (Understanding premium seating economics), MLO 1.3 (Evaluating revenue optimization vs. accessibility)

---

**Widget Status:** ✅ Built and Ready

**Widget Purpose:** Design premium vs. general seating mix to maximize revenue.

**How It Works:**
- **Inputs:** Total capacity (18,000), % luxury suites, % club seats, % general admission
- **Pricing:** Suites ($200K/season), Club ($10K/seat), GA ($75/game × 41 games)
- **Output:** Total ticketing revenue + breakdown
- **Challenge:** Maximize revenue while maintaining fan accessibility
- **Learning:** Why teams prioritize premium seating expansion

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/widgets/stadium-revenue-optimizer.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Stadium Revenue Optimizer - Design premium vs GA mix"
  aria-label="Interactive stadium seating designer where you allocate capacity between luxury suites, club seats, and general admission to maximize revenue"
  allowfullscreen
  loading="lazy">
</iframe>
```

#### Element 17: Infobox - Premium Seat Economics
```
Title: ◆ Key Insight: Premium Seat Economics

Premium seating represents only 10-15% of total venue capacity but generates 40-50% of total ticketing revenue. Luxury suites ($100K-500K per season), club seats ($5K-15K per seat), and courtside/field level tickets ($500-2,000+ per game) command exponential premiums over general admission seating. This revolutionary insight transformed modern stadium design—virtually every renovation or new construction prioritizes premium inventory expansion because 20-30 new luxury suites generate more revenue than 2,000 upper bowl seats combined.
```

#### Element 18: Details - PSL Case Study
```
Title: Personal Seat Licenses (PSLs) - SoFi Stadium Case

[Expand for case study]

Some teams sell **Personal Seat Licenses**—one-time fees (often $5,000-75,000) for the right to purchase season tickets in premium locations.

**SoFi Stadium (Rams/Chargers) Case:**
- Generated over **$600 million** from PSL sales
- Funds stadium construction without increasing team debt
- PSL owners pay $5K-$75K upfront, THEN pay for season tickets annually

**Controversy:**
Fans pay thousands just for the *right* to buy expensive tickets. This creates accessibility issues but provides massive upfront capital for stadium construction.

**Beyond the Ticket:**
Total non-ticket revenue can reach **$40-50 per attendee** (concessions $15-30, parking $20-100, merchandise). This turns a $100 ticket into **$140-150 in total venue spending**—why teams view declining attendance as a crisis affecting the entire in-venue ecosystem.
```

---

### Section 4: Sponsorship & Merchandising (Elements 19-24)

| Order | Element | Content/Purpose | Time | Words | Source |
|-------|---------|----------------|------|-------|--------|
| 19 | **▶ Video** ⬛ Required | Sponsorship & Merchandising (2 min) | 2 min | - | Upload `week1-video2-sponsorship-merch.mp4` |
| 20 | **▬ Text** ⬛ Required | Sponsorship basics | 1 min | 100 | Type directly |
| 21 | **⚙ iFrame Widget** ⬛ Required | **Sponsorship ROI Calculator** | 4 min | - | Embed `sponsorship-roi-calculator.html` |
| 22 | **▭ Image** ▣ Recommended | Sponsorship activation pyramid | 1 min | - | Upload `sponsorship-activation-pyramid.png` |
| 23 | **▬ Text** ⬛ Required | Merchandising models | 1 min | 100 | Type directly |
| 24 | **◫ Tiles** ▣ Recommended | 3 merchandising spikes | 1 min | - | Type directly |

#### Element 19: Video - Sponsorship & Merchandising Overview
- **File:** `week1-video2-sponsorship-merch.mp4`
- **Duration:** 2 minutes
- **VTT Transcript:** `week1-video2-sponsorship-merch.vtt`
- **Video Title:** "Sponsorship & Merchandising: Brand-Driven Revenue"
- **Video Caption:** "2-minute overview of corporate partnerships and licensed products"

**Pedagogical Note:** This video provides a **mental break** at the midpoint of the module (after 12 elements). Students have been reading/interacting for ~20 minutes and benefit from passive viewing before continuing.

**FULL SCRIPT:**

```
[OPENING - 0:00-0:15]
[ON-SCREEN: Brand logos (Scotiabank, Nike, FanDuel) surrounding sports team logos]

NARRATOR:
While media rights and ticketing depend on the game itself, two revenue streams are
driven by brand value: sponsorship and merchandising.

Let's see how teams monetize their brands through corporate partnerships and consumer
products.

---

[SECTION: SPONSORSHIP - 0:15-1:00]
[ANIMATION: Stadium with naming rights, jersey patches, in-venue signage]

NARRATOR:
Sponsorship: 15-25% of Revenue

The most visible sponsorship deals are naming rights: Scotiabank Arena in Toronto—
$800 million over 20 years. That's $40 million per year just for the name.

[ON-SCREEN: Jersey patch examples from NBA]

Jersey sponsorship arrived in North America in 2017. The NBA allows a 2.5-inch patch
on uniforms. Top deals reach $20-30 million per year—Golden State Warriors and Rakuten,
$20 million annually.

[ANIMATION: Sponsor activation examples]

But the best sponsors don't just buy logos—they create experiences. Scotiabank's
"Scene+ Night" at Leafs games integrates their loyalty program with ticket offers and
in-arena experiences. Fans remember positive moments, not just a logo.

Key sponsorship categories:
- Naming rights ($15-50M/year)
- Jersey/uniform patches ($5-30M/year)
- Category partnerships—official bank, beer, airline ($500K-10M/year)

---

[SECTION: MERCHANDISING - 1:00-1:45]
[ANIMATION: Jerseys, hats, merchandise flooding screen]

NARRATOR:
Merchandising: 5-10% of Revenue

Most major North American leagues—NFL, NHL, MLB—use a centralized model. The league
manages all licensing, then splits revenue equally among teams.

Why? Competitive balance. This prevents the Yankees and Cowboys from dominating
merchandise sales and creating massive revenue gaps.

[ON-SCREEN: LeBron Lakers jersey, Championship gear, City Edition designs]

Revenue spikes during:
- Championship runs: Sales increase 200-400% during playoffs
- Star acquisitions: LeBron's trade to the Lakers generated over $1 million in jersey
  sales within hours
- New designs: NBA "City Edition" jerseys generate over $100 million annually

[ANIMATION: Digital commerce icons]

Digital commerce transformed merchandising—teams now sell globally without retail
partnerships. The Toronto Raptors ship merchandise to 85+ countries through their
online store.

---

[CONCLUSION - 1:45-2:00]
[ON-SCREEN: Sponsorship + Merchandising = Brand-Driven Revenue]

NARRATOR:
Key insight: These are brand-driven revenue streams. The stronger your brand, the
more valuable your sponsorship inventory and the more merchandise you sell.

Next up: Betting—the newest and fastest-growing revenue frontier.

[END SCREEN]
```

#### Element 20: Sponsorship Basics Text
**Copy this markdown directly into Uplimit:**

```markdown
# Sponsorship: Brand Alignment and Activation

**Applied question:** Your top sponsor wants measurable in-venue engagement lift. Which two activation metrics would you prioritize and how would you instrument them?


Corporate sponsorship represents **15-25% of revenue** for most professional teams, with higher percentages in markets with deep-pocketed corporations.

**Major Sponsorship Categories:**

- **Naming Rights:** Scotiabank Arena (Toronto) ~$40M/year, Chase Center (Warriors) ~$15M/year
- **Jersey Sponsorship:** Warriors + Rakuten ~$20M/year, Lakers + Bibigo ~$12-14M/year
- **Category Partnerships:** "Official beer," "official airline," "official bank" ($500K-$10M/year)

**Activation: Beyond the Logo**

The best sponsors **activate** beyond logos—creating fan experiences that build positive associations. Scotiabank's "Scene+ Night" at Leafs games integrates loyalty programs with exclusive ticket offers and in-arena experiences. Delta's Lakers partnership includes exclusive lounges, travel content series, and behind-the-scenes player content.
```

#### Element 21: iFrame Widget - Sponsorship ROI Calculator

### ⚙ Interactive Activity: Sponsorship ROI Calculator

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

**Widget Purpose:** Calculate sponsor value from brand exposure based on deal type, market size, and activation level.

**Widget Status:** ✅ Phase 2 widget - BUILT AND READY

**How It Works:**
- **Inputs:**
  - Deal type: Naming rights, jersey patch, category partner
  - Market size: Large (Toronto), Medium (Edmonton), Small (Winnipeg)
  - Activation level: Logo only, Event presence, Full integration
- **Outputs:**
  - Brand impressions (millions)
  - Estimated brand lift (%)
  - Customer acquisition (estimated)
  - Deal value ($M/year)
- **Examples:** Scotiabank Arena ($40M), Warriors + Rakuten ($20M)
- **Learning:** Why activation matters more than logo placement

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/widgets/sponsorship-roi-calculator.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Sponsorship ROI Calculator - Calculate brand value"
  aria-label="Interactive calculator for sponsorship value based on deal type, market size, and activation level to estimate brand impressions and ROI"
  allowfullscreen
  loading="lazy">
</iframe>
```

#### Element 22: Image - Sponsorship Activation Pyramid
- **File:** `sponsorship-activation-pyramid.png`
- **Alt Text:** "Pyramid diagram showing sponsorship activation levels from bottom to top: Logo Placement (low value), Event Presence, Digital Integration, Experience Creation, and Full Brand Integration (high value). Each level shows increasing value to sponsors and fans."
- **Caption:** "Sponsorship Value Pyramid: From Logo to Integration"
- **Size:** Optimized for web, max 800px width

#### Element 23: Merchandising Models Text
**Copy this markdown directly into Uplimit:**

```markdown
# Merchandising: Brand Extension

**Applied question:** A surprise player breakout spikes jersey demand. What’s your immediate two-week merchandising move to capture upside without overstock risk?


Merchandising and licensing revenue represents **5-10% of revenue** for most teams. Professional leagues take different approaches:

**Centralized Model (NFL, NHL, MLB):** League office manages all licensing. Revenue pooled and distributed equally to all teams. Protects small-market teams from imbalance.

**Decentralized Model (European Soccer):** Teams control their own merchandise rights. Popular clubs generate 10-20× more than smaller clubs. Rewards brand-building but creates wealth disparity.

**Key Revenue Drivers:** Championship runs (sales increase 200-400% during playoffs), star acquisitions (LeBron's Lakers trade = $1M+ in jersey sales within hours), and new designs (NBA "City Edition" jerseys generate $100M+ annually).
```

#### Element 24: Tiles - 3 Merchandising Spikes
Create 3 tiles (1x3 horizontal layout):

**Tile 1 - Title:** "• Championships"
**Tile 1 - Description:** "Playoff runs drive 200-400% sales increases. Winning teams sell championship gear, commemorative items, and celebration merchandise."

**Tile 2 - Title:** "• Star Players"
**Tile 2 - Description:** "Superstar acquisitions create immediate sales spikes. LeBron to Lakers = $1M+ in jersey sales within hours of announcement."

**Tile 3 - Title:** "• Limited Designs"
**Tile 3 - Description:** "Special edition jerseys (City Edition, throwbacks, collaborations) create artificial scarcity and drive $100M+ in annual revenue."

---

### Section 5: Betting & Gaming (Elements 25-27)

| Order | Element | Content/Purpose | Time | Words | Source |
|-------|---------|----------------|------|-------|--------|
| 25 | **▬ Text** ⬛ Required | Betting growth | 1 min | 100 | Type directly |
| 26 | **⚙ iFrame Widget** ▢ Optional | **Betting Market Simulator** | 3 min | - | Embed `betting-market-simulator.html` |
| 27 | **ⓘ Infobox** ▣ Recommended | Betting growth statistics | 1 min | - | Type directly |

#### Element 25: Betting Growth Text
**Copy this markdown directly into Uplimit:**

```markdown
# Betting & Gaming: The Emerging Frontier

**Applied question:** Your jurisdiction loosens in-app betting rules. What’s the lowest-risk integration that increases ARPU without harming family segments?


Sports betting represents the **newest and fastest-growing revenue stream**, currently **2-8% of revenue** but growing **30-40% year-over-year**.

**Legalization Timeline:**
- **2018:** U.S. Supreme Court strikes down federal betting ban (PASPA)
- **2021:** Canada legalizes single-game betting (August 2021)
- **2024:** Legal in **38+ U.S. states** covering **70%+ of population**

**How Leagues Monetize Betting:**
1. **Official Partner Designations:** FanDuel, DraftKings pay $50-200M/year for legitimacy and marketing access
2. **Data Licensing:** Leagues sell real-time game data for $10-50M/year
3. **Media Integration:** Betting odds in broadcasts, betting-focused content, stadium signage

**Strategic Value:** Fans with bets watch **30-40% more sports content**, games between weak teams gain interest, in-game betting keeps fans engaged throughout.
```

#### Element 26: iFrame Widget - Betting Market Simulator

### ⚙ Interactive Activity: Betting Market Simulator

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
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/module-3/widgets/betting-market-simulator.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Betting Market Simulator - Explore betting revenue strategies"
  aria-label="Interactive simulator for sports betting partnerships where you make strategic decisions about data licensing and media integration"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Accessibility:**
- ✅ Keyboard navigation for all controls
- ✅ ARIA labels on interactive elements
- ✅ Screen reader compatible
- ✅ High contrast mode support
- ✅ WCAG 2.2 AA compliant

#### Element 27: Infobox - Betting Growth Statistics
```
Title: ◆ Betting Growth Statistics

The sports betting market has exploded since legalization: global sports betting market exceeds $200 billion annually, U.S. market grew from $0 (2017) to $100+ billion (2024), and betting partnerships now represent 2-8% of league revenue (growing 30-40% annually). Fans with active bets watch 30-40% more sports content, driving increased viewership and advertising value across all revenue streams. Despite integrity concerns, leagues have decided betting integration is inevitable—better to regulate directly than leave to black markets.
```

---

### Section 6: Revenue Ecosystem Synthesis (Elements 28-30)

| Order | Element | Content/Purpose | Time | Words | Source |
|-------|---------|----------------|------|-------|--------|
| 28 | **▬ Text** ⬛ Required | Ecosystem principle intro | 1 min | 100 | Type directly |
| 29 | **⚙ iFrame Widget** ⬛ Required | **Ecosystem Cascade Simulator** | 5 min | - | Embed `ecosystem-cascade-simulator.html` |
| 30 | **▭ Image** ▣ Recommended | Revenue ecosystem diagram | 1 min | - | Upload `revenue-ecosystem-diagram.png` |

#### Element 28: Ecosystem Principle Text
**Copy this markdown directly into Uplimit:**

```markdown
# Revenue Interdependence: The Ecosystem Principle

**Applied question:** If you push hard on one stream, which other stream is most at risk—and how will you measure unintended effects?


The critical insight that distinguishes expert sports business analysts from novices: **Revenue streams don't exist in isolation—they form an ecosystem.**

Consider the Edmonton Oilers signing Connor McDavid to an **8-year, $100 million contract** ($12.5M per year). Direct revenue from his impact: ticket sales increase ~$5M/year, merchandise sales spike ~$3M/year. Total direct revenue: ~$8M/year.

At first glance, this seems like a **losing investment**—paying $12.5M to generate $8M.

But this analysis misses the **ecosystem amplification**: media rights value increases (+$10M annually), sponsorship renewals at premium rates (+$5M annually), playoff revenue ($15-20M per deep run), franchise valuation increase ($50-100M), and betting engagement (+$2M annually).

**Total ecosystem value: $30-40M+ annually**—far exceeding the $12.5M salary cost.

This explains why teams "overpay" for stars. They're investing in **ecosystem amplification** across media, sponsorship, merchandise, and brand value.
```

#### Element 29: iFrame Widget - Ecosystem Cascade Simulator

### ⚙ Interactive Activity: Ecosystem Cascade Simulator

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

**Widget Purpose:** Demonstrate how one strategic investment (signing Connor McDavid) creates cascading effects across all revenue streams.

**Widget Status:** ✅ Phase 1 widget - BUILT AND READY

**How It Works:**
- **Scenario:** Edmonton Oilers sign Connor McDavid ($12.5M/year salary)
- **Click to reveal effects:**
  - **Direct Effects:** Ticketing (+$5M), Merchandising (+$3M) = $8M total
  - **Indirect Effects:** Media rights (+$10M), Sponsorship (+$5M), Playoff revenue (+$15M), Betting (+$2M) = $32M total
  - **Net ecosystem value:** $30M+ gain (far exceeding $12.5M cost)
- **Visual:** Animated cascade showing money flowing from one stream to others
- **Alternative scenarios:** Compare star player vs. new arena vs. betting deal
- **Export:** Save ecosystem analysis as PDF

**Learning Objectives:**
- MLO 1.1: See how revenue streams interconnect (ecosystem vs. portfolio)
- MLO 1.2: Understand sport's unique business model (why teams "overpay")
- MLO 1.3: Evaluate strategic investment decisions across multiple streams

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-marketing-in-sport/widgets/ecosystem-cascade-simulator.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Ecosystem Cascade Simulator - Connor McDavid investment analysis"
  aria-label="Interactive simulator showing how signing Connor McDavid creates cascading effects across all revenue streams with direct and indirect value calculations"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Accessibility:**
- ✅ Keyboard navigation (Tab, Space, Enter to reveal cascades)
- ✅ ARIA live regions announce each cascade effect
- ✅ Screen reader reads full calculation breakdown
- ✅ High contrast mode for visual effects
- ✅ Alternative text descriptions for visual animations
- ✅ Color-coded by effect type (red = cost, yellow = direct, green = indirect)

**Pedagogical Note:** This is the **synthesis widget** that ties the entire module together. Students should have completed Elements 1-28 before encountering this, so they can see how all concepts (media rights, ticketing, sponsorship, merchandising, betting) interconnect in real strategic decisions.

#### Element 30: Image - Revenue Ecosystem Diagram
- **File:** `revenue-ecosystem-diagram.png`
- **Alt Text:** "Diagram showing five revenue streams (media rights, ticketing, sponsorship, merchandising, betting) as interconnected nodes. Arrows between nodes illustrate how investment in one stream creates positive effects in others. Example labeled: Star player signing increases ticketing, media value, merchandise, and betting engagement simultaneously."
- **Caption:** "Revenue Ecosystem: Investment in One Stream Amplifies Others"
- **Size:** Optimized for web, max 800px width

**Visual to Create:**
- 5 circles representing each revenue stream
- Arrows connecting all streams showing interdependencies
- Central principle: "Investment in one amplifies others"
- Specific example annotated: Star player acquisition → ticketing ↑, media ↑, merch ↑, betting ↑

---

### Module 3 Design Rationale Summary

**V3 Interactive-First Improvements:**
- ✅ **Text reduced 62%**: 2,650 words → 1,000 words
- ✅ **No text block exceeds 1 minute** (100-120 words max)
- ✅ **Interactive widget every 2-3 elements** (8 total widgets)
- ✅ **Active engagement increased 3x**: From 25% to 75%
- ✅ **"Show, Don't Tell"**: Students discover concepts through manipulation
- ✅ **Phase 1 widgets built**: Revenue Mix Slider, Dynamic Pricing Simulator, Ecosystem Cascade Simulator (fully accessible, ready to embed)

**Student Experience:**
1. Read brief intro (1 min) → Watch overview video (2 min) → Scan list (1 min) → **BUILD PORTFOLIO** (3 min widget)
2. Read media intro (1 min) → **CALCULATE DEAL VALUE** (4 min widget) → Read insight → View timeline
3. Read streaming text (1 min) → View table → **MAKE STRATEGIC CHOICE** (5 min widget)
4. Read ticketing intro (1 min) → **OPTIMIZE PRICING** (5 min widget) → View diagram → Read premium strategy
5. Read premium text (1 min) → **DESIGN STADIUM** (4 min widget) → Read insight
6. **WATCH VIDEO BREAK** (2 min) → Read sponsorship (1 min) → **CALCULATE ROI** (4 min widget)
7. Read merchandising (1 min) → View tiles → Read betting (1 min) → View stats
8. Read ecosystem text (1 min) → **SIMULATE CASCADE** (5 min widget) → View diagram

**Total Time:** ~35 minutes
**Active Engagement:** 25 minutes (75%)
**Passive Reading:** 8 minutes (25%)

---

## 🎯 FINAL PROJECT CONNECTION

**How Module 3 Supports Your Final Strategic Vision:**

Module 3 taught you the core content for all five revenue streams through interactive discovery. This deep knowledge enables sophisticated revenue modeling in your Week 5 capstone.

**What You Learned:**
- Media rights (40-60%) dominate, but streaming vs. linear creates strategic trade-offs
- Ticketing generates 20-30% but dynamic pricing can increase by 15-25%
- Sponsorship ROI requires activation spending (2-3× rights fees)
- Merchandising spikes during success periods (championships drive 40-60% increases)
- Betting (2-8% currently) is growing 30-40% annually

**How to Apply This to Your Final Project:**

When you build your 5-year strategic vision in Week 5, Module 3's interactive widgets provide the quantitative foundation:

- **Revenue Projections:** Use the ecosystem cascade model to forecast interdependent revenue growth. Don't project streams independently—show how investment in one stream amplifies others (e.g., signing star player → ticket sales + merchandise + media value).
- **Pricing Strategy:** Reference the dynamic pricing simulator to justify your ticketing approach. Example: "Implementing dynamic pricing (as modeled in Week 1) could increase gate receipts by 15-25% without reducing sellouts."
- **Sponsorship Value Proposition:** Use Module 3's sponsorship ROI framework to explain what sponsors get for their investment. Your vision should quantify reach, engagement, and conversion potential.

**Real-World Application:** The interactive widgets you used aren't theoretical—they're based on actual league data and industry benchmarks. When you pitch your strategic vision, reference these tools to ground your projections in reality.

---

## Module 3 Complete - Transition to Module 4

**What You've Learned:**
You've now explored all five revenue streams through hands-on discovery. You understand that media rights (40-60%) dominate modern sports economics, ticketing and premium seating create tiered fan experiences, sponsorship activation drives brand value beyond logos, merchandising spikes during key moments, and betting is the fastest-growing frontier. Most importantly, you've seen how these streams form an **ecosystem**—investments in one area cascade through all others.

**Key Takeaways:**
- Revenue streams are interdependent, not independent
- Connor McDavid's $12.5M salary generates $30-40M in ecosystem value
- Premium seating (10-15% of capacity) generates 40-50% of ticketing revenue
- Streaming economics differ fundamentally from traditional broadcast models
- Betting legalization creates multiple monetization opportunities

**Up Next: Module 4 - Build Your Revenue Empire**
You've learned the theory and played with individual widgets. Now it's time to put it all together in a strategic simulation. In Module 4, you'll build a complete revenue strategy for a professional sports team, making trade-offs across all five streams while managing risk and maximizing growth.

Ready to become a sports business strategist? Let's go!

---