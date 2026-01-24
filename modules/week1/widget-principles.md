# Week 1 Widget Principles Manifest
**Version:** 1.0.0 | **Last Updated:** 2026-01-23

**Purpose:** Central reference documenting the underlying principle, answer key, and expected understanding for each interactive element. Used for QA, AI coach alignment, and instructor reference.

---

## How to Use This Document

1. **Course Developers:** Verify new widgets teach a clear, testable principle
2. **AI Coach Configuration:** Copy relevant sections into Hidden Context
3. **QA/Testing:** Check student understanding against answer keys
4. **Widget Optimizer Agent:** Flag widgets missing principle documentation

---

## Widget Principle Card Template

```markdown
## Widget: [Name]

**Module:** [Location]
**Element:** [Number]
**Learning Objectives:** [WLOs supported]
**Status:** Active | Deprecated | Planned

### Underlying Principle
[1-2 sentences: The core concept this widget teaches]

### Answer Key / Expected Understanding
- [What students should conclude]
- [Key relationships they should observe]
- [Numbers/outcomes that demonstrate understanding]

### Common Misconceptions
- [What students often get wrong]
- [Intuitive but incorrect assumptions]

### AI Coach Reinforcement
- [What the AI should probe for]
- [How to guide students who missed the principle]

### Connection to Course Arc
[How this principle builds toward later content]
```

---

# Active Widgets

## Widget: Revenue Streams Explorer

**Module:** 3 (Core Content)
**Element:** 4
**Learning Objectives:** WLO 1.1
**Status:** Active

### Underlying Principle
Sports revenue comes from five interconnected streams, not independent channels. Media rights dominate (40-60%), but the streams amplify each other.

### Answer Key / Expected Understanding
- Media rights = largest stream (40-60% of revenue)
- Ticketing = 20-30% (local, team-controlled)
- Sponsorship = 15-20% (activation > logo placement)
- Merchandising = 10-15% (centralized in NA leagues)
- Betting = 2-8% (fastest growing, highest risk)
- Key insight: Percentages matter less than understanding INTERDEPENDENCE

### Common Misconceptions
- "Betting is the future, so invest everything there"
- "Each stream operates independently"
- "Biggest stream = most important strategic focus"

### AI Coach Reinforcement
- Ask: "Which stream creates value for OTHER streams?"
- Probe: "If ticketing increases, what happens to sponsorship value?"
- Guide toward ecosystem thinking, away from "pick the winner"

### Connection to Course Arc
Foundation for Module 4 simulation and Module 5 real-world examples. Students need stream literacy before exploring cascade effects.

---

## Widget: Media Rights Explorer

**Module:** 3 (Core Content)
**Element:** 6
**Learning Objectives:** WLO 1.1, 1.2
**Status:** Active

### Underlying Principle
Media rights value is driven by audience size and "appointment viewing" (live sports resist DVR/time-shifting). This explains why sports command 3-4x premium CPM rates.

### Answer Key / Expected Understanding
- NFL rights ($10B/year) worth 16x NHL ($625M) primarily due to audience size
- Live sports CPM: $50-70 vs. scripted TV: $15-25
- "Appointment viewing" = fans watch live to avoid spoilers
- Streaming vs. traditional = different economics (subscription vs. advertising)
- Hybrid deals hedge against platform uncertainty

### Common Misconceptions
- "Streaming will replace traditional TV entirely"
- "Sports are valuable because of production quality"
- "All leagues should pursue the same media strategy"

### AI Coach Reinforcement
- Ask: "Why can't you watch a game 'later' like a Netflix show?"
- Probe: "What makes advertisers pay 3-4x more for sports?"
- Connect to revenue sharing: "How does Green Bay benefit from NFL's national deal?"

### Connection to Course Arc
Sets up Week 2 deep-dive into Rogers/TSN media rights case. Students need to understand WHY media rights are valuable before analyzing specific deals.

---

## Widget: Dynamic Pricing Simulator

**Module:** 3 (Core Content)
**Element:** 13
**Learning Objectives:** WLO 1.1, 1.3
**Status:** Active

### Underlying Principle
Dynamic pricing captures consumer surplus by adjusting prices based on demand factors (opponent, day, team performance). It can increase ticketing revenue 15-25% vs. static pricing.

### Answer Key / Expected Understanding
- Same seat, different prices based on: opponent quality, day of week, team performance, special events
- Lakers game = $400, Pistons game = $150 (same seat)
- Dynamic pricing increases revenue 15-25% over static
- Ceiling effect: Even perfect pricing hits stadium capacity limits
- Premium seating (suites, clubs) = higher margin, relationship-based

### Common Misconceptions
- "Dynamic pricing is gouging fans"
- "Higher prices always mean more revenue"
- "Ticketing can grow infinitely with better pricing"

### AI Coach Reinforcement
- Ask: "What's the maximum ticketing revenue possible?" (capacity x max price x games)
- Probe: "Why do teams sell season tickets at discount vs. dynamic single-game?"
- Connect to ceiling effects: "How is ticketing different from media rights growth?"

### Connection to Course Arc
Introduces ceiling effects concept critical for Module 4 simulation. Students choosing "foundation" strategy need to understand ticketing's limits AND its cascade effects.

---

## Widget: Revenue Ecosystem Challenge (Native AI Roleplay)

**Module:** 4 (Interactive)
**Element:** 3
**Learning Objectives:** WLO 1.3, 1.4
**Status:** Active (Native Uplimit AI Roleplay)

### Underlying Principle
Foundation investments (ticketing, media) create CASCADE EFFECTS that amplify all other streams. High growth rate ≠ best strategic choice because isolated growth doesn't compound.

### Answer Key / Expected Understanding

**The Four Paths:**
| Path | Choices | Outcome | Why |
|------|---------|---------|-----|
| Growth → Cut | Betting/merch, then cut costs | ~$138M | New customers churned, no loyalty base |
| Growth → Double | Betting/merch, then invest more | ~$152M | High CAC, fragile growth |
| Foundation → Cut | Ticketing/media, then cut costs | ~$156M | Loyal base held, but cascade weakened |
| Foundation → Double | Ticketing/media, then invest more | ~$178M | Counter-cyclical win, cascade amplified |

**The Cascade Effect:**
1. Invest in ticketing → 94% season ticket renewal, sellouts
2. Full arenas → Media ratings up 15-20%
3. Higher ratings → Better media rights at renewal
4. Engaged fans → Buy 40% more merchandise WITHOUT direct investment
5. Sponsors see engagement → Pay 25% premium

**Why Betting Doesn't Cascade:**
- Sportsbooks pay for access to ALL fans, not YOUR engaged fans
- Whether fans bet doesn't affect attendance or jersey sales
- High growth is real but ISOLATED

### Common Misconceptions
- "35% growth beats 5% growth, obviously"
- "Cut costs during recession = smart business"
- "Each stream succeeds or fails independently"

### AI Coach Reinforcement
- Ask: "Did any streams grow that you didn't invest in directly?"
- Probe: "What happened to merchandise sales when you invested in ticketing?"
- Challenge: "Why did 35% growth underperform 5% growth?"
- Connect: "What does this mean for your CFL city selection?"

### Connection to Course Arc
Central experiential learning for Week 1. Principles discovered here are validated in Module 5 real-world examples and applied in Module 7 CFL milestone.

---

# Markdown Content (Replaced Widgets)

## Content: Betting Market Comparison Tables

**Module:** 3 (Core Content)
**Element:** 26
**Learning Objectives:** WLO 1.1, 1.3
**Status:** Active (Markdown, replaced iFrame widget)

### Underlying Principle
Betting is the fastest-growing revenue stream (30-40% YoY) but carries highest regulatory risk. Different markets have different legal frameworks affecting revenue potential.

### Answer Key / Expected Understanding
- US: State-by-state legalization (38+ states, 70%+ population)
- Canada: Single-game betting legal since August 2021
- Growth potential: 2-8% of revenue now, could reach 10-15%
- Risk: Regulatory changes can eliminate revenue overnight
- League monetization: Official partnerships, data rights, in-venue betting

### Common Misconceptions
- "Betting will become the dominant revenue stream"
- "Legal everywhere means same opportunity everywhere"
- "Betting growth has no ceiling"

### AI Coach Reinforcement
- Ask: "What happens to betting revenue if regulations change?"
- Probe: "Why might a team NOT want betting as their primary growth strategy?"
- Connect to risk assessment in CFL project

### Connection to Course Arc
Sets up Week 3 FanDuel case study. Students need regulatory context before analyzing betting company strategy.

---

## Content: Sponsorship Activation Examples

**Module:** 3 (Core Content)
**Element:** 21
**Learning Objectives:** WLO 1.1
**Status:** Active (Markdown, replaced ROI Calculator)

### Underlying Principle
Sponsorship value comes from ACTIVATION (fan experiences, brand integration) not just logo placement. The best deals create positive associations through engagement, not impressions.

### Answer Key / Expected Understanding
- Logo placement = baseline (necessary but not differentiating)
- Activation = experiences that build brand association
- Examples:
  - Scotiabank Scene+ Night: Loyalty integration + ticket offers
  - Delta Lakers: Exclusive lounges + player content
  - Gatorade: Sideline presence + athlete endorsement
- Naming rights ($15-50M/year): Brand spoken millions of times
- ROI measured in brand lift, not just impressions

### Common Misconceptions
- "Bigger logo = better sponsorship"
- "Sponsorship ROI is impossible to measure"
- "Only consumer brands benefit from sports sponsorship"

### AI Coach Reinforcement
- Ask: "What's the difference between seeing a logo and having an experience?"
- Probe: "Why would Moody's (B2B financial firm) sponsor the Giants?"
- Connect to Kevin Abrams interview: sponsors as advisory board

### Connection to Course Arc
Foundation for Week 3 sponsorship deep-dive. ROI Calculator preserved for Week 3 when students need quantitative analysis skills.

---

# Deprecated Widgets

## Widget: Revenue Empire Builder (iFrame)

**Module:** 4 (Interactive)
**Status:** DEPRECATED - Replaced by Native AI Roleplay

### Why Deprecated
- Allocation-based (percentages) vs. decision-based (strategic choices)
- iFrame embed issues on Uplimit platform
- No grading integration
- Couldn't capture nuanced student reasoning

### Principle Preserved In
Revenue Ecosystem Challenge (Native AI Roleplay) - same cascade effects principle, better implementation

---

## Widget: Sponsorship ROI Calculator (iFrame)

**Module:** 3 (Core Content)
**Status:** DEPRECATED for Week 1 - Preserved for Week 3

### Why Deprecated for Week 1
- 12 inputs too complex for introductory module
- Students need conceptual foundation before quantitative analysis
- Activation concept teachable through examples (less cognitive load)

### Principle Preserved In
- Week 1: Sponsorship Activation Examples (markdown)
- Week 3: ROI Calculator reintroduced for deep-dive

---

## Widget: Betting Market Simulator (iFrame)

**Module:** 3 (Core Content)
**Status:** DEPRECATED - Replaced by Markdown Tables

### Why Deprecated
- Interactive simulation didn't add learning value over static comparison
- JavaScript dependency created maintenance burden
- Same principle teachable through well-designed tables

### Principle Preserved In
Betting Market Comparison Tables (markdown) - same regulatory/growth content, simpler delivery

---

# Agent Integration

## For Widget Optimizer Agent

When auditing widgets, check:

1. **Has Principle Card?** - Every widget needs documented principle
2. **Answer Key Exists?** - Must have testable expected understanding
3. **Misconceptions Listed?** - Common errors should be anticipated
4. **AI Coach Guidance?** - How should AI reinforce the principle?
5. **Course Arc Connection?** - How does this build toward later learning?

## For AI Coach Configuration

Copy these sections into Hidden Context:
- Underlying Principle
- Answer Key / Expected Understanding
- Common Misconceptions
- AI Coach Reinforcement

## For QA Testing

Verify students demonstrate understanding from Answer Key:
- Can they state the principle?
- Do they avoid listed misconceptions?
- Can they apply to new context (CFL project)?

---

# Maintenance

**When Adding New Widget:**
1. Create Principle Card using template
2. Document answer key with specific outcomes
3. List 3+ common misconceptions
4. Write AI coach prompts
5. Connect to course arc

**When Deprecating Widget:**
1. Move to Deprecated section
2. Document why deprecated
3. Note where principle is preserved
4. Update any AI coaches referencing old widget
