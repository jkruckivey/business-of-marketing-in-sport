# MODULE 1: Welcome & Learning Outcomes
**Version:** 1.5.0 | **Last Updated:** 2026-01-13

**Purpose:** Orient students to Week 1, establish learning expectations
**Estimated Time:** 5-7 minutes

### Version 1.5.0 Changes
- **STANDARDIZED:** Module structure to match course-wide template (4 elements)
- **REMOVED:** CFL Project Tie-In Widget (milestone info moved to Module 7)

**Uplimit Structure:** First module in Unit 1

**Content Priority Badges:**
- ⬤ **Required** - Core content essential for learning outcomes and assessments
- ◐ **Recommended** - Important content that enhances understanding and engagement
- ○ **Optional** - Supplemental content for deeper exploration (progressive disclosure)

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **ⓘ Infobox (Callout)** ⬤ Required | Display all 4 WLOs + week overview | Type directly in Uplimit | Blue variant, icon: target ◉ |
| 2 | **▬ Text** ⬤ Required | Week 1 introduction (3 paragraphs) | Embedded below | Sets context for revenue ecosystem topic |
| 3 | **◫ Tiles** ◐ Recommended | 4 revenue stream categories (preview) | Type directly in Uplimit | Blue variant, one tile per stream |
| 4 | **⚙ iFrame Widget** ◐ Recommended | **Learning Outcomes Widget** - Interactive WLO-CLO mapping | Embed `learning-outcomes-week.html` | Shows how week outcomes connect to course goals |
| 5 | **⚙ iFrame Widget** ◐ Recommended | **CFL Project Tie-In** - Your milestone this week | Embed `cfl-project-tie-in.html` | Shows project progression, current week highlighted |

---

## Element 1: Infobox Content
```
Title: ◉ Week 1 Learning Outcomes

By the end of this week, you will:

**WLO 1.1: Map the major revenue streams in professional sport** (Bloom's: Understand)
Identify and explain the five major revenue streams (media rights, ticketing, sponsorship, merchandising, betting) and their relative contribution to league and team finances.

**WLO 1.2: Explain sport's unique business model characteristics** (Bloom's: Understand)
Describe how professional sport differs from traditional business models through competitive balance requirements, revenue interdependence, and collaborative competition.

**WLO 1.3: Evaluate the vulnerabilities and growth potential of each revenue stream** (Bloom's: Evaluate)
Assess risks and opportunities across revenue streams using market data, trends, and strategic frameworks to identify which streams offer sustainable growth.

**WLO 1.4: Analyze different revenue sharing models across leagues** (Bloom's: Analyze)
Compare revenue sharing approaches (NFL vs. NBA vs. European soccer) and determine how these models affect competitive balance and financial sustainability.

**This week focuses on CLO 1: Analyzing Revenue Ecosystems**
```

### Element 2: Text Content
```
The Business of Sport: A Unique Revenue Ecosystem

Professional sport operates unlike any other industry. Teams compete on the field
but must collaborate financially to maintain competitive balance. Revenue streams
are interdependent—strong media rights deals fund player salaries, which attract
talent, which creates compelling content, which increases media value.

This week, we explore the five major revenue streams that power professional sport:
media rights, ticketing and attendance, sponsorship and partnerships, merchandising,
and the emerging betting/gaming sector. We'll examine not just how money flows IN,
but how it flows BETWEEN stakeholders through complex revenue sharing arrangements.

You'll learn why the NFL shares 60% of all revenue equally among teams, while
European soccer operates on a more entrepreneurial model. You'll understand why
the NBA invested billions in creating its own streaming infrastructure, and why
betting legalization fundamentally changes sport's economic equation.
```

### Element 2A: Picture - Professional Sports Ecosystem (NEW v1.4.0)
- **Type:** Stock Photo
- **Placement:** After Element 2 introduction text
- **Suggested Image:** Wide shot of a professional sports stadium during pre-game or intermission, showing the interconnected elements: broadcast cameras, sponsor signage, fans with merchandise, and premium seating areas
- **Alt Text:** "Wide view of a professional sports arena during an event, showing broadcast cameras, corporate sponsor signage along the boards and throughout the venue, fans wearing team merchandise, and visible luxury suites—representing the interconnected revenue ecosystem of media, sponsorship, ticketing, and merchandising"
- **Search Terms:** `sports arena broadcast cameras`, `stadium sponsorship signage`, `sports venue wide shot`
- **Purpose:** Provides visual context for the 5 revenue streams introduced in the text, showing them in action at a real venue
- **Size:** Full width, max 800px

---

### Element 3: Tiles Content
Create 5 tiles:

**Tile 1 - Title:** "Media Rights"
**Tile 1 - Description:** "Broadcasting, streaming, and digital content deals. The largest revenue source for most leagues (40-60%)."

**Tile 2 - Title:** "Ticketing & Live Events"
**Tile 2 - Description:** "Gate receipts, premium seating, hospitality. Direct fan engagement and the gameday experience (20-30%)."

**Tile 3 - Title:** "Sponsorship & Partners"
**Tile 3 - Description:** "Corporate partnerships, naming rights, jersey sponsors. Brand alignment and activation (15-25%)."

**Tile 4 - Title:** "Merchandising"
**Tile 4 - Description:** "Apparel, licensed products, and brand extensions. Centralized models support competitive balance (5-10%)."

**Tile 5 - Title:** "Betting & Gaming"
**Tile 5 - Description:** "Sports betting partnerships and data licensing. The newest and fastest-growing frontier (2-8%, growing 30-40% annually)."

### Element 4: Learning Outcomes Widget

**Widget Purpose:** Interactive visualization showing how Week 1's learning outcomes connect to course-level goals

**Uplimit Implementation:**

**Widget File:** `learning-outcomes-week.html`

**Embed Code:**
```html
<iframe
  src="../../widgets/learning-outcomes-week.html"
  width="100%"
  height="600"
  style="border: none; border-radius: 8px;"
  title="Week 1 Learning Outcomes"
  aria-label="Interactive exercise showing Week 1 learning outcomes and their connection to course goals"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Widget Features:**
- Click any week outcome (WLO 1.1-1.4) to see which course-level outcome it contributes to (CLO 1)
- Interactive highlighting shows connections between week and course goals
- WCAG 2.2 AA compliant with keyboard navigation and screen reader support

**Design Rationale:**
- **ⓘ Infobox (Callout)** makes learning outcomes visible (QM Standard 2, UDL engagement)
- **Text** provides narrative context (UDL representation)
- **◫ Tiles** create visual preview and chunking (UDL engagement, scannable overview)
- Students immediately understand week's scope and expectations

---

### Element 5: CFL Project Tie-In Widget

**Widget Purpose:** Orient students to this week's milestone in the course-long CFL Expansion Project

**Uplimit Implementation:**

**Widget File:** `cfl-project-tie-in.html`

**Embed Code:**
```html
<iframe
  src="../../widgets/cfl-project-tie-in.html"
  width="100%"
  height="500"
  style="border: none; border-radius: 8px;"
  title="CFL Expansion Project - Week 1 Milestone"
  aria-label="Interactive project tracker showing Week 1 milestone in the CFL Expansion Project"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Widget Features:**
- Shows 5-week milestone progression with Week 1 highlighted
- "This Week" section explains what students will build toward their project
- Links milestone to week's learning content


