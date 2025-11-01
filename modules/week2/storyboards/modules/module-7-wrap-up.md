## MODULE 7: Wrap-Up, Preview & Anchor Project Milestone
**Purpose:** Consolidate Week 2 learning, preview Week 3, launch Anchor Project Team Formation

**Uplimit Structure:** Final module in Unit 2

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **Infobox (Callout)** ⬤ Required | Week 2 key takeaways | Type directly | Blue variant, summary |
| 2 | **Text** ⬤ Required | Anchor Project Milestone 1: Team Formation | Type directly | Launch group project |
| 3 | **iFrame** ⬤ Required | Property Selection Tool | Custom widget hosted | Interactive team activity |
| 4 | **iFrame** ⬤ Required | Team Charter Builder | Custom widget hosted | Team formation tool |
| 5 | **Text** ◐ Recommended | Preview of Week 3 content | Type directly | Build anticipation |
| 6 | **Details** ○ Optional | Anchor Project FAQs (optional) | Type directly | Optional guidance |
| 7 | **⚙ iFrame Widget** ◐ Recommended | **Learning Outcomes Widget** - Interactive MLO-CLO mapping | Embed `learning-outcomes-module-7.html` | Shows how module outcomes connect to course goals |


**Detailed Content Specifications:**

### Infobox Content:
```
Title: ◉ Week 2 Key Takeaways

You've completed your deep dive into media rights and fan monetization! Here's what
you should take away:

✓ Sports remain "appointment viewing" in an on-demand world—this drives premium valuations
✓ Streaming economics differ fundamentally from linear TV (LTV vs. immediate ROI)
✓ Fan engagement monetization extends beyond passive viewing (data, sponsorship, retention)
✓ Mega-deals like Rogers/NHL require scenario planning and flexibility—disruption happens

This foundation prepares you for Week 3, where we'll explore the fastest-growing revenue
streams: sponsorship activation and sports betting integration.

Plus: This week you'll form your Anchor Project team and select your sport property!

Well done! 👏
```

### Text Content - Anchor Project Milestone 1:
```
## ◉ Anchor Project: Team Formation & Property Selection

Welcome to the **Anchor Project** - your 60% final assessment for this course!

Over the next 4 weeks, your team will develop a comprehensive marketing plan for a
sport organization. This week (Week 2), you'll form your team and choose your property.

**What You'll Accomplish This Week:**

### Step 1: Form Your Team (5-6 students)
Use the **Team Charter Builder** tool below to:
• Introduce yourselves (background, interests, strengths)
• Define roles (Project Manager, Research Lead, Financial Analyst, Creative Lead, etc.)
• Establish communication norms (meeting frequency, response times, tools)
• Create conflict resolution process

### Step 2: Select Your Sport Property
Use the **Property Selection Tool** below to explore 19 curated options:

**Legacy Properties:** Established teams/leagues (e.g., Toronto FC, Vancouver Whitecaps, Rugby Canada)
**Emerging Sports:** High-growth opportunities (e.g., Canadian Premier League, National Lacrosse League)
**Major Events:** One-time or recurring events (e.g., 2026 FIFA World Cup - Toronto/Vancouver)

Your team should choose a property that:
• Is interesting and marketable
• Presents clear business challenges (revenue growth, fan engagement, market expansion)
• Has accessible public information (financial data, attendance, media presence)

### Step 3: Write Your 1-Page Project Proposal
**Due: End of Week 2**

Include:
• Team roster with roles
• Chosen sport property
• 250-word rationale: Why is this property interesting? What marketing challenges does it face?

**Deliverable:** Upload PDF to [submission portal]

**Grading:** This milestone is worth 10 points (of 60 total project points). Evaluated
on team composition, property selection defensibility, and articulated challenges.

---

**Use the tools below to get started!**
```

### iFrame 1 Specifications - Property Selection Tool:

**Widget Purpose:** Help teams explore and select a sport property for their Anchor Project marketing plan.

**Widget Status:** ✅ Anchor Project tool - BUILT AND READY

**How It Works:**
- **Inputs:**
  - Category filter: Legacy (established teams), Emerging (growth sports), Events (one-time/recurring)
  - Market size filter: Large (Toronto/Vancouver), Medium (Calgary/Ottawa), Small (regional)
  - Revenue tier filter: $50M+, $10-50M, Under $10M
- **Outputs:**
  - 19 curated property cards with: Name, league, market, revenue tier, key marketing challenges
  - Comparison view (select up to 3 properties side-by-side)
  - Export shortlist as PDF for team discussion
- **Examples:** Toronto FC (MLS, large market, sponsorship saturation challenge), Canadian Premier League (emerging, small markets, awareness challenge), 2026 FIFA World Cup Toronto/Vancouver (event, massive scale, legacy planning challenge)
- **Learning:** Understand diverse sport properties, identify marketing challenges, select appropriate scope for semester project

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/modules/module-2/widgets/property-selector.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Property Selection Tool - Choose your Anchor Project property"
  aria-label="Interactive selection tool for choosing your sports business property focus for the Anchor Project"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Accessibility:**
- ✅ Keyboard navigation for filtering and card selection
- ✅ ARIA labels on all filter controls
- ✅ Screen reader compatible property descriptions
- ✅ High contrast card design
- ✅ Focus indicators on clickable cards

### iFrame 2 Specifications - Team Charter Builder:

**Widget Purpose:** Guide teams through creating a comprehensive team charter to establish norms, roles, and conflict resolution processes.

**Widget Status:** ✅ Anchor Project tool - BUILT AND READY

**How It Works:**
- **Inputs (4 sections):**
  - **Section 1: Team Roster** - Names, backgrounds, strengths, assigned roles (PM, Research Lead, Financial Analyst, Creative Lead, Editor)
  - **Section 2: Communication Norms** - Meeting frequency (weekly? bi-weekly?), tools (Slack, Teams, email), response time expectations (24hr? 48hr?)
  - **Section 3: Working Guidelines** - Decision-making process (consensus? majority vote?), work distribution approach (divide-and-conquer? collaborative?), accountability mechanisms
  - **Section 4: Conflict Resolution** - Escalation steps (direct conversation → team meeting → instructor), mediation approach, ground rules for disagreements
- **Outputs:**
  - Complete team charter document with all 4 sections
  - Export as PDF (saves filled charter for team reference throughout project)
  - Email reminder option (sends charter to all team members)
- **Examples:** Sample charters from previous cohorts (anonymized), best practice templates
- **Learning:** Establish clear expectations early, prevent common group work issues, practice professional team formation

**Uplimit Implementation:**
```html
<iframe
  src="https://jkruckivey.github.io/business-of-sports-marketing/modules/module-2/widgets/team-charter.html"
  width="100%"
  height="700"
  style="border: none; border-radius: 8px;"
  title="Team Charter Builder - Create your team agreements"
  aria-label="Interactive team charter builder where you establish working agreements and roles for collaborative projects"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Accessibility:**
- ✅ Keyboard navigation through all form fields
- ✅ ARIA labels on all input fields
- ✅ Screen reader compatible section navigation
- ✅ High contrast form design
- ✅ Clear focus indicators on active fields
- ✅ Error messages announced to screen readers

### Text Content - Week 3 Preview:
```
## Looking Ahead: Week 3 - Sponsorship & Betting (The Growth Engines)

Next week, we shift focus to the fastest-growing revenue streams in professional sport:
corporate sponsorship activation and sports betting integration.

You'll explore:
• How sponsorship ROI is measured and maximized
• Betting partnerships and data monetization
• Regulatory landscape and integrity concerns
• Real tactics used by FanDuel, MGM, and major leagues

Executive Leaders: Andrew Sneyd (FanDuel) + Brand Sponsor Executive
Core Case: FanDuel - Betting on Sports (HBS 520038)

Plus: Your Anchor Project continues with **Week 3 Milestone: Revenue Model & Sponsorship
Strategy**. You'll use the Revenue Model Canvas Builder and Sponsorship ROI Calculator
to develop your property's revenue strategy.

Get ready for another intensive week! See you in Week 3.
```

### Details Content - Anchor Project FAQs:
```
Title: ◆ Anchor Project FAQs

[Expand for answers to common questions]

**Q: How many team members should we have?**
A: 5-6 students is ideal. Fewer than 5 makes workload challenging; more than 6 creates
coordination overhead.

**Q: Can we choose a property not on the list?**
A: Yes, with instructor approval. Your property must: (1) Have sufficient public data
available, (2) Present clear marketing challenges, (3) Be a professional or semi-pro
organization (not amateur/recreational). Submit your proposal for approval.

**Q: What if our chosen property is also chosen by another team?**
A: That's fine! Different teams will develop different strategies for the same property.
This mirrors real consulting competitions.

**Q: How much time should we invest in the Anchor Project each week?**
A: Week 2: 2-3 hours (team formation, property selection)
   Week 3: 2-3 hours (revenue model development)
   Week 4: 3-4 hours (brand strategy, competitive analysis)
   Week 5: 4-6 hours (final presentation preparation)

**Q: What if a team member isn't contributing?**
A: Your Team Charter should include accountability mechanisms. If issues persist, use
your conflict resolution process. As a last resort, contact the instructor. Peer
evaluations in Week 5 will account for individual contributions.

**Q: Can we interview executives at our chosen property?**
A: Absolutely! Original research strengthens your project. If you conduct interviews,
include key insights and quotes in your final presentation.

**Q: What resources are available beyond the tools?**
A: Each week provides readings, frameworks, and templates. Use office hours for team
check-ins. The AI chat assistants can help with specific questions. Discussion forums
are great for crowdsourcing ideas from other teams.
```


### Element 7: Learning Outcomes Widget

**Widget Purpose:** Interactive visualization showing how this module's learning outcomes connect to course-level goals

**Uplimit Implementation:**

**Widget File:** `learning-outcomes-module-7.html`

**Embed Code:**
```html
<iframe
  src="../../widgets/learning-outcomes-module-7.html"
  width="100%"
  height="600"
  style="border: none; border-radius: 8px;"
  title="Learning Outcomes - Module 7"
  aria-label="Interactive widget showing module learning outcomes and their connection to course goals"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Widget Features:**
- Click any module outcome to see which course-level outcomes it contributes to
- Interactive highlighting shows connections between module and course goals
- WCAG 2.2 AA compliant with keyboard navigation and screen reader support

**Design Rationale:**
- **Infobox** reinforces key Week 2 concepts and launches Anchor Project (closure + transition)
- **Text** provides clear Anchor Project instructions and timeline (QM clarity, scaffolding)
- **iFrames (2)** offer interactive tools for team formation and property selection (UDL engagement, authentic tasks)
- **Week 3 preview** builds anticipation and helps students prepare (continuity)
- **Details (FAQs)** answers common questions without overwhelming main flow (UDL progressive disclosure)
- Anchor Project integrates course content into applied, collaborative work (authentic assessment, teamwork)
- Tools reduce coordination friction and provide structure (scaffolding for group work)

---

## Content Preparation Checklist for Week 2

### Text Documents to Prepare:
- ☐ `week2-intro.docx` (3 paragraphs, introduction + Week 1 connection)
- ☐ `week2-media-rights-framework.docx` (6-7 pages, core reading on valuation & economics)
- ☐ `week2-hbr-excerpt.docx` (2-3 pages, "Why Sports Rights Are Last Must-Have")
- ☐ `week2-rogers-case.docx` (10-12 pages, full Rogers NHL case study)

### Videos to Create/Upload:

**Instructional Videos** (Concept explainers - narrated with animation):
- ☐ `week2-video1-valuation-framework.mp4` (2 minutes) - 5-factor media rights valuation
- ☐ `week2-video1-valuation-framework.vtt` (VTT captions file)
- ☐ Script: See `modules/video-scripts/week2-instructional-videos-2min.md` (Video 1)

- ☐ `week2-video2-linear-vs-streaming.mp4` (2 minutes) - Business model comparison
- ☐ `week2-video2-linear-vs-streaming.vtt` (VTT captions file)
- ☐ Script: See `modules/video-scripts/week2-instructional-videos-2min.md` (Video 2)

**Executive Session Video** (SME-led interview):
- ☐ `week2-executive-session.mp4` (2 minutes) - SME handles this separately
- ☐ `week2-executive-transcript.vtt` (VTT captions file)
- ☐ `week2-executive-poster.jpg` (thumbnail image)

**Case Study Video** (Optional - can be cut if not needed):
- ☐ `week2-rogers-retrospective.mp4` (2 minutes) - "10 Years Later" analysis
- ☐ `week2-rogers-retrospective.vtt` (VTT captions file)

### Custom Widgets:
- ☐ `media-rights-calculator.html` (rights valuation tool) - if not already created
- ☐ `platform-comparison.html` (linear vs. DTC comparison) - if not already created
- ☐ `streaming-wars-strategy.html` (interactive simulation)
  - Test on multiple browsers ✓
  - Verify accessibility (keyboard, screen reader) ✓
  - Host at URL: `https://jkruckivey.github.io/business-of-sports-marketing/widgets/streaming-wars-strategy.html`
- ☐ `property-selector.html` (Anchor Project tool - may already exist)
- ☐ `team-charter.html` (Anchor Project tool - may already exist)

### Images:
- ☐ `fan-engagement-value-chain.png` (diagram for Module 3)
  - Alt text written ✓
  - Optimized for web ✓

### Content to Type Directly in Uplimit:
- ☐ All Infobox content (7 total across all modules)
- ☐ Tiles content (3 tiles in Module 1)
- ☐ Vertical List content (5 items in Module 3)
- ☐ Tables (2 total: Linear vs. Streaming comparison, Rogers deal summary)
- ☐ All Details accordion content (multiple across modules)
- ☐ Text Response rubric (Module 6)
- ☐ Anchor Project instructions (Module 7)

### AI Chat Widgets to Configure (Core Learning Coaches):
- ☐ "Media Strategy Q&A" (Module 2) - Your Learning Coach
- ☐ "Platform Strategy Assistant" (Module 4) - Your Strategy Coach
- ☐ "Rogers Case Analysis Coach" (Module 6) - Your Case Analysis Coach

---

## Build Timeline (Recommended)

### Week 1: Structure & Objectives
- ☐ Create Unit 2 in Uplimit (with dates: Sep 2-8)
- ☐ Create all 7 modules within Unit 2
- ☐ Add all Infoboxes with learning objectives

### Week 2: Text Content
- ☐ Import `week2-intro.docx`
- ☐ Import `week2-media-rights-framework.docx`
- ☐ Import `week2-hbr-excerpt.docx`
- ☐ Import `week2-rogers-case.docx`
- ☐ Type all direct text content (Anchor Project instructions, preview, etc.)

### Week 3: Visual & Interactive
- ☐ Create Tiles (3 in Module 1)
- ☐ Create Vertical List (5 items in Module 3)
- ☐ Create Tables (2 total)
- ☐ Upload videos + transcripts (Module 2: 2min session, Module 5: 2min retrospective)
- ☐ Upload image (fan engagement value chain)

### Week 4: Interactive Elements
- ☐ Embed Streaming Wars Strategy widget (iFrame in Module 4)
- ☐ Embed Property Selector widget (iFrame in Module 7)
- ☐ Embed Team Charter Builder widget (iFrame in Module 7)
- ☐ Create all Details accordions
- ☐ Configure 3 AI Chat Widgets

### Week 5: Assessment & Anchor Project
- ☐ Create Text Response question (Module 6)
- ☐ Build complete rubric with criteria and point values
- ☐ Write all feedback templates
- ☐ Enable AI grading and test
- ☐ Set up Anchor Project submission portal

### Week 6: Review & Test
- ☐ Walk through entire Week 2 as student
- ☐ Test all links, videos, widgets
- ☐ Verify accessibility (keyboard navigation, screen readers)
- ☐ Test Anchor Project tools (Property Selector, Team Charter)
- ☐ Peer review
- ☐ Pilot with small group (if possible)

---

## UDL & Accessibility Verification

### Multiple Means of Representation ✓
- ☐ Video content has VTT transcripts (Module 2: 2min + Module 5: 2min)
- ☐ Core concepts presented in multiple formats:
  - Text (readings, case study)
  - Video (executive session, retrospective)
  - Visual (tables, diagram, case exhibits)
  - Interactive (simulation widget, Anchor Project tools)
- ☐ All images have descriptive alt text
- ☐ Text is scalable (not embedded in images)
- ☐ Case exhibits available in multiple formats (HTML tables + PDF downloads)

### Multiple Means of Engagement ✓
- ☐ Students have choices:
  - Optional Details accordions (progressive disclosure)
  - Optional AI Chat support
  - Anchor Project property selection (19 options)
  - Multiple paths to profitability in simulation
- ☐ Real-world relevance clear (executive practitioner, $5.2B case, consulting memo)
- ☐ Learning objectives visible at module start
- ☐ Variety in activity types (read, watch, simulate, analyze, write, collaborate)
- ☐ Anchor Project offers choice and team-based learning

### Multiple Means of Action/Expression ✓
- ☐ Assessment allows different demonstration modes:
  - Written memo (analytical, Text Response)
  - Simulation performance (strategic decision-making)
  - Team charter and proposal (collaborative)
- ☐ Scaffolding available (AI Chat, Details with frameworks, widget hints)
- ☐ Self-paced interactive activities (simulation, Anchor Project tools)
- ☐ Rubric transparent (students know expectations)
- ☐ Group work option (Anchor Project)

### WCAG 2.1 AA Compliance ✓
- ☐ Color contrast sufficient (test all Infobox variants)
- ☐ All interactive elements keyboard-accessible (widgets, accordions, chats)
- ☐ Proper heading hierarchy maintained
- ☐ Form labels clear (Text Response, widget inputs)
- ☐ No auto-playing media
- ☐ Video captions available (VTT for both videos)
- ☐ ARIA labels on custom widgets

---

## Learning Outcome Alignment Map

Verify that every element serves the MLOs:

| **MLO** | **Bloom's Level** | **Supporting Elements** | **Assessment** |
|---------|------------------|------------------------|---------------|
| **MLO 2.1:** Explore media rights valuation | Knowledge/<br>Comprehension | • Text (valuation framework)<br>• Vertical List (5 drivers)<br>• Video (executive session Part 1)<br>• Case (Rogers valuation assumptions) | Mini-Case Memo (evaluate Rogers' valuation methodology)<br><br>Simulation (make rights acquisition decisions) |
| **MLO 2.2:** Compare linear vs. streaming | Analysis | • Text (platform economics)<br>• Table (linear vs. DTC comparison)<br>• Video (executive session Part 1)<br>• iFrame (Streaming Wars simulation)<br>• Case (Rogers' platform strategy) | Mini-Case Memo (platform strategy recommendation)<br><br>Simulation (achieve streaming profitability) |
| **MLO 2.3:** Understand fan engagement monetization | Comprehension | • Text (fan engagement section)<br>• Image (value chain diagram)<br>• Video (executive session Part 2)<br>• Case (Rogers' engagement tactics) | Mini-Case Memo (engagement strategy analysis)<br><br>Simulation (engagement investment decisions) |
| **MLO 2.4:** Evaluate Rogers NHL deal | Evaluation | • Text (full case narrative)<br>• Table (deal summary)<br>• Details (3 exhibits with financial/viewership data)<br>• Video (10-year retrospective)<br>• Video (executive session Part 3) | Mini-Case Memo (overall deal evaluation + recommendations) |

**Alignment Check:** ✅ All MLOs supported by multiple elements and measured comprehensively by assessment

---

## 🎯 FINAL PROJECT CONNECTION

**How Week 2 Supports Your Final Strategic Vision:**

Week 2 taught you how to evaluate and design media rights strategies—the largest revenue stream (40-60%) for most sports properties. This expertise is central to your Week 5 capstone.

**What You Mastered:**
- Media rights valuation frameworks (audience × demographics × exclusivity × platform reach)
- Platform economics (linear advertising vs. streaming subscription models)
- Deal structure and negotiation (term, exclusivity, revenue models, flexibility clauses)
- Performance evaluation (projected vs. actual analysis, mistake identification, strategic pivots)

**How to Apply This to Your Final Project:**

Your Week 5 strategic vision must integrate Week 2's media frameworks comprehensively:

- **Media Rights Section (likely 30-40% of your capstone):** This is your property's largest revenue stream. Use Week 2's valuation tools, platform comparison frameworks, and deal structure templates to design a sophisticated 5-year media strategy.
- **Integration with Other Weeks:** Media strategy connects to everything: Week 1 (ecosystem effects), Week 3 (sponsorship amplification through media), Week 4 (athlete brand exposure via media), Week 5 (heritage vs. innovation in media approach).
- **Real Numbers:** Your vision needs quantitative projections. Use Week 2's widgets and case data to benchmark realistic media rights valuations for your property.

**Integration Across All Weeks:**
- Week 1 = Revenue ecosystem foundation
- **Week 2 = Media rights specialization (40-60% of revenue)**
- Week 3 = Sponsorship/betting specialization
- Week 4 = Athlete brand specialization
- Week 5 = Synthesis into 5-year vision

**Real-World Application:** Media strategy is the foundation of modern sports economics. Your Week 5 capstone must demonstrate mastery of this domain—Week 2 provided the technical toolkit.

---

## Summary: Week 2 Complete Build Specifications

**Total Modules:** 7
**Total Elements:** ~55 (across all modules)

**Element Breakdown:**
- **Infoboxes:** 7 (various variants)
- **Text imports:** 4 documents
- **Text typed directly:** ~8 sections
- **Videos:** 2 (2min + 2min, both with VTT transcripts)
- **Tiles:** 1 set (3 tiles)
- **Vertical List:** 1 (5 items)
- **Tables:** 2
- **Details:** ~12 accordions
- **iFrames:** 3 (Streaming Wars simulation, Property Selector, Team Charter)
- **AI Chat Widgets:** 3
- **Text Response:** 1 (with rubric)
- **Images:** 1

**Estimated Build Time:**
- Content creation (if starting from scratch): 50-70 hours
- Content already exists: 20-25 hours to import, configure, and test

**Maintenance:**
- Update Rogers case data annually (deal ended 2026, new data available)
- Refresh executive session every 2-3 years
- Update simulation if platform economics shift significantly
- Review rubric based on student memo performance
- Update Anchor Project property list annually (add/remove organizations)

---

**This storyboard provides a complete blueprint for building Week 2 in Uplimit.**

Follow it step-by-step to create a pedagogically sound, UDL-aligned, accessible learning experience with tight outcome alignment and seamless Anchor Project integration.

---

**Built with ❤️ for Learning Experience Designers**
*From robust outline → strategic storyboard → effective Uplimit course*

**Related Resources:**
- `uplimit-element-selection-guide.md` (Why each element was chosen)
- `uplimit-storyboard-template.md` (Blank template for other weeks)
- `uplimit-text-import-guide.md` (How to prepare .docx files)
- `uplimit-boms-week1-example.md` (Week 1 complete example)
