# Module 3 V3 Redesign: Interactive-First Approach

## Problem with V2
Even after V2 redesign, Module 3 still has **~2,650 words** of text broken across 9 sections (200-400 words each). While better than V1, it's still text-heavy and passive.

**Text blocks in V2:**
- Element 1: Introduction (200 words)
- Element 5: Media Rights Part 1 (300 words)
- Element 7: Media Rights Part 2 (300 words)
- Element 9: Ticketing Part 1 (350 words)
- Element 11: Ticketing Part 2 (400 words)
- Element 13: Sponsorship (400 words)
- Element 16: Merchandising & Betting (400 words)
- Element 18: Revenue Ecosystem (350 words)

**Total:** 2,700 words = ~15-18 minutes of continuous reading

---

## V3 Redesign Philosophy

**"Show, Don't Tell"**

Replace explanatory text with **interactive demonstrations** that let students discover concepts themselves.

**Design Principles:**
1. **No text block over 150 words** (1 minute max)
2. **Interactive widget every 2-3 elements** (not just visual)
3. **Micro-learning**: Bite-sized concept → immediate interaction → reinforcement
4. **Student agency**: Students manipulate variables and see outcomes
5. **Progressive complexity**: Start simple (list), build to complex (simulation)

---

## V3 Module 3 Structure (30 Elements)

### **Section 1: Introduction & Overview (Elements 1-4)**

| Element | Type | Content | Time | Words |
|---------|------|---------|------|-------|
| 1 | **Text** | Brief intro + 5 streams list | 1 min | 100 |
| 2 | **Video** | 5 Revenue Streams (animated) | 2 min | - |
| 3 | **Vertical List** | 5 streams at a glance | 1 min | - |
| 4 | **🎮 Interactive Widget** | Revenue Mix Slider | 3 min | - |

**Widget 1: Revenue Mix Slider**
- **Purpose:** Let students build a revenue portfolio by adjusting sliders
- **Interaction:** 5 sliders (Media, Ticketing, Sponsorship, Merch, Betting) = 100%
- **Feedback:** Real-time pie chart + risk score + growth projection
- **Learning:** Understand trade-offs between streams (high growth = high risk)
- **Implementation:** Simple HTML/CSS/JS with range inputs

---

### **Section 2: Media Rights Deep Dive (Elements 5-11)**

| Element | Type | Content | Time | Words |
|---------|------|---------|------|-------|
| 5 | **Text** | Why media is 40-60% | 1 min | 100 |
| 6 | **🎮 Interactive Widget** | Media Deal Calculator | 4 min | - |
| 7 | **Infobox** | Key insight: Appointment viewing | 1 min | 50 |
| 8 | **Image** | Media rights timeline | 1 min | - |
| 9 | **Text** | Streaming vs. Traditional | 1 min | 120 |
| 10 | **Table** | Streaming vs. Traditional comparison | 1 min | - |
| 11 | **🎮 Interactive Widget** | Streaming Wars Decision Game | 5 min | - |

**Widget 2: Media Deal Calculator**
- **Purpose:** Calculate media rights value based on inputs
- **Inputs:** League size, audience (millions), ad rate (CPM), contract length
- **Outputs:** Total deal value, per-team share, % of revenue
- **Examples:** NFL ($110B), NHL ($5.2B), MLS ($250M)
- **Learning:** Understand what drives media rights valuation
- **Bonus:** Toggle "shared vs. local" to see revenue sharing impact

**Widget 3: Streaming Wars Decision Game**
- **Purpose:** Choose between traditional TV vs. streaming offers
- **Scenario:** You're the NHL commissioner. Two offers:
  - **ESPN (Traditional):** $8B over 10 years, guaranteed, ad-based
  - **Apple TV+ (Streaming):** $10B over 10 years, subscription-based, global reach
- **Trade-offs:** Immediate $ vs. long-term growth, reach vs. revenue share
- **Decision:** Students choose and see 5-year projection
- **Learning:** Why leagues split rights packages (hedge strategy)

---

### **Section 3: Ticketing Economics (Elements 12-18)**

| Element | Type | Content | Time | Words |
|---------|------|---------|------|-------|
| 12 | **Text** | Ticketing basics | 1 min | 100 |
| 13 | **🎮 Interactive Widget** | Dynamic Pricing Simulator | 5 min | - |
| 14 | **Image** | Premium seating breakdown | 1 min | - |
| 15 | **Text** | Premium seating strategy | 1 min | 120 |
| 16 | **🎮 Interactive Widget** | Stadium Revenue Optimizer | 4 min | - |
| 17 | **Infobox** | Key insight: 10-15% capacity = 40-50% revenue | 1 min | 50 |
| 18 | **Details** | PSL case study (SoFi Stadium) | 1 min | - |

**Widget 4: Dynamic Pricing Simulator**
- **Purpose:** Adjust ticket prices based on demand factors
- **Scenario:** Toronto Raptors vs. various opponents
- **Inputs:** Opponent quality (slider), day of week (dropdown), team record (slider)
- **Output:** Recommended price, attendance projection, total revenue
- **Real examples:**
  - Lakers (Saturday, winning season) → $400/ticket
  - Pistons (Tuesday, losing season) → $120/ticket
- **Learning:** How dynamic pricing works in practice

**Widget 5: Stadium Revenue Optimizer**
- **Purpose:** Design premium vs. general seating mix
- **Inputs:** Total capacity (18,000), % luxury suites, % club seats, % general admission
- **Pricing:** Suites ($200K/season), Club ($10K/seat), GA ($75/game × 41 games)
- **Output:** Total ticketing revenue + breakdown
- **Challenge:** Maximize revenue while maintaining fan accessibility
- **Learning:** Why teams prioritize premium seating expansion

---

### **Section 4: Sponsorship & Merchandising (Elements 19-24)**

| Element | Type | Content | Time | Words |
|---------|------|---------|------|-------|
| 19 | **Video** | Sponsorship & Merchandising (2 min) | 2 min | - |
| 20 | **Text** | Sponsorship basics | 1 min | 100 |
| 21 | **🎮 Interactive Widget** | Sponsorship ROI Calculator | 4 min | - |
| 22 | **Image** | Sponsorship activation pyramid | 1 min | - |
| 23 | **Text** | Merchandising models | 1 min | 100 |
| 24 | **Tiles** | 3 merchandising spikes (championships, stars, designs) | 1 min | - |

**Widget 6: Sponsorship ROI Calculator**
- **Purpose:** Calculate sponsor value from brand exposure
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

---

### **Section 5: Betting & Gaming (Elements 25-27)**

| Element | Type | Content | Time | Words |
|---------|------|---------|------|-------|
| 25 | **Text** | Betting growth | 1 min | 100 |
| 26 | **🎮 Interactive Widget** | Betting Legalization Timeline | 3 min | - |
| 27 | **Infobox** | Betting growth statistics | 1 min | - |

**Widget 7: Betting Legalization Timeline (Interactive Map)**
- **Purpose:** Visualize betting legalization spread across North America
- **Interaction:** Slider from 2018 → 2024, map lights up as states legalize
- **Data points:**
  - 2018: PASPA struck down, 8 states legal
  - 2021: Canada legalizes single-game betting
  - 2024: 38+ US states legal (70%+ population)
- **Click state:** See legalization date, market size, league partnerships
- **Learning:** Speed and scale of betting integration

---

### **Section 6: Revenue Ecosystem Synthesis (Elements 28-30)**

| Element | Type | Content | Time | Words |
|---------|------|---------|------|-------|
| 28 | **Text** | Ecosystem principle intro | 1 min | 100 |
| 29 | **🎮 Interactive Widget** | Ecosystem Cascade Simulator | 5 min | - |
| 30 | **Image** | Revenue ecosystem diagram | 1 min | - |

**Widget 8: Ecosystem Cascade Simulator (Connor McDavid Example)**
- **Purpose:** Show how one investment amplifies across streams
- **Scenario:** Sign Connor McDavid ($12.5M/year)
- **Interaction:** Click on "Direct Effects" vs. "Indirect Effects" to reveal cascades
- **Animation:**
  - Start: $12.5M salary cost (red)
  - Direct: $5M tickets + $3M merch = $8M (yellow) [Net: -$4.5M]
  - Indirect: +$10M media, +$5M sponsorship, +$15M playoff, +$2M betting = +$32M (green)
  - **Total ecosystem value: $30M+ net gain**
- **Learning:** Why teams "overpay" for stars (ecosystem thinking vs. direct ROI)
- **Compare:** Try with different investment types (new arena, betting deal, streaming platform)

---

## V3 Module Summary

**Total Elements:** 30 (up from 20 in V2)

**Element Breakdown:**
- **Text:** 9 blocks (100-120 words each) = ~1,000 words total (down from 2,650)
- **Videos:** 2 (4 minutes total)
- **Interactive Widgets:** 8 (25 minutes total engagement time)
- **Visual elements:** 3 images, 1 table, 3 infoboxes, 1 vertical list, 1 tiles
- **Optional depth:** 1 Details accordion

**Student Experience:**
- **Total time:** ~35 minutes (up from 23 min in V2, but MUCH higher engagement)
- **Reading time:** ~8 minutes (down from 18 minutes)
- **Interactive time:** ~25 minutes (up from 0 minutes hands-on)
- **Passive viewing:** ~5 minutes (videos, images)

**Cognitive Engagement:**
- V1: 95% passive reading
- V2: 75% passive (reading + viewing), 25% visual scanning
- V3: 25% passive, 75% **active manipulation and discovery**

---

## Widget Development Priorities

### **Phase 1: Must-Have (Build First)**
1. ✅ Revenue Mix Slider (simple, foundational)
2. ✅ Dynamic Pricing Simulator (demonstrates core concept)
3. ✅ Ecosystem Cascade Simulator (synthesis, high-impact visual)

### **Phase 2: High-Value**
4. ✅ Media Deal Calculator (quantitative understanding)
5. ✅ Stadium Revenue Optimizer (design thinking)
6. ✅ Sponsorship ROI Calculator (business case thinking)

### **Phase 3: Nice-to-Have**
7. ⭕ Streaming Wars Decision Game (strategic trade-offs)
8. ⭕ Betting Legalization Timeline (data visualization)

---

## Technical Specifications

### Widget Base Template
All widgets use consistent structure:
- **HTML:** Semantic, accessible (ARIA labels, keyboard nav)
- **CSS:** Ivey design system (gold #c5b783, dark theme)
- **JS:** Vanilla JavaScript (no frameworks, fast load)
- **Size:** 800px × 600px (modal: 1200px × 900px)
- **Export:** JSON download for student portfolios
- **Accessibility:** WCAG 2.2 AA compliant

### Widget Hosting
- **Development:** Local `modules/module-3/widgets/` directory
- **Production:** GitHub Pages or CDN
- **iFrame embed:** Direct URL in Uplimit

---

## Pedagogical Rationale

### Why This Works (Research-Backed)

**1. Active Learning (Bonwell & Eison, 1991)**
- Students construct knowledge through manipulation
- Immediate feedback reinforces understanding
- Discovery learning more memorable than passive reading

**2. Cognitive Load Theory (Sweller, 1988)**
- Short text chunks (100 words) prevent working memory overload
- Interactivity provides mental breaks between concepts
- Visual representations reduce cognitive load

**3. Constructivism (Vygotsky)**
- Students build mental models through experimentation
- Widgets provide scaffolding (hints, examples, constraints)
- Social learning via discussion of widget outcomes

**4. Gamification (Deterding et al., 2011)**
- Scenarios and challenges increase motivation
- Immediate feedback creates engagement loop
- Exploration encouraged (try different scenarios)

---

## Comparison: V1 vs. V2 vs. V3

| Metric | V1 (Original) | V2 (Reduced Text) | V3 (Interactive) |
|--------|---------------|-------------------|------------------|
| **Total Elements** | 6 | 20 | 30 |
| **Text Words** | 3,500 | 2,650 | 1,000 |
| **Reading Time** | 20 min | 15 min | 8 min |
| **Interactive Widgets** | 0 | 0 | 8 |
| **Active Engagement** | 5% | 25% | 75% |
| **Videos** | 1 | 2 | 2 |
| **Passive → Active Ratio** | 95:5 | 75:25 | 25:75 |

**Student Feedback Prediction:**
- V1: "Too much reading, boring"
- V2: "Better pacing, still a lot of text"
- V3: "Fun, engaging, I learned by doing"

---

## Implementation Timeline

### Week 1: Core Widgets (Phase 1)
- Revenue Mix Slider: 3-4 hours
- Dynamic Pricing Simulator: 4-5 hours
- Ecosystem Cascade Simulator: 5-6 hours
- **Total:** 12-15 hours

### Week 2: Business Logic Widgets (Phase 2)
- Media Deal Calculator: 4 hours
- Stadium Revenue Optimizer: 5 hours
- Sponsorship ROI Calculator: 4 hours
- **Total:** 13 hours

### Week 3: Advanced Widgets (Phase 3)
- Streaming Wars Decision Game: 6 hours
- Betting Legalization Timeline: 5 hours
- **Total:** 11 hours

### Week 4: Testing & Refinement
- Accessibility testing: 3 hours
- Cross-browser testing: 2 hours
- User testing with students: 4 hours
- **Total:** 9 hours

**Grand Total:** 45-50 hours for full V3 implementation

---

## Success Metrics

### Quantitative
- **Engagement time:** >30 minutes average (target: 35 min)
- **Completion rate:** >85% finish all widgets
- **Bounce rate:** <15% exit mid-module
- **Widget interactions:** >5 per student average

### Qualitative
- **Student feedback:** "Learned by doing" sentiment
- **Comprehension:** Higher quiz scores on concepts taught via widgets
- **Transfer:** Students reference widget scenarios in case analysis

---

## Next Steps

1. **Review & Approve V3 Design:** Get SME feedback on widget concepts
2. **Prioritize Widget Development:** Build Phase 1 (must-haves) first
3. **Create Widget Specifications:** Detailed technical docs for each widget
4. **Build & Test:** Develop widgets with accessibility from start
5. **Update Storyboard:** Replace V2 with V3 structure in main storyboard
6. **Pilot Test:** Get student feedback on beta widgets

---

**Status:** V3 Design Complete — Ready for Widget Development
**Created:** 2025-10-09
**Version:** 3.0 (Interactive-First)
