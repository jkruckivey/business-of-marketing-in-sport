# MODULE 0: Bridge-In - The $100M Question
**Version:** 2.1.0 | **Last Updated:** 2026-01-13

### Version 2.1.0 Changes
- **RESTORED:** Graphic novels with consistent introduction pattern
- **STANDARDIZED:** Module structure (7 elements for Week 1, 6 for other weeks)

### Version 2.0.0 Changes
- **STANDARDIZED:** Module structure to match course-wide template
- **REMOVED:** Transition text (redundant with Module 1 intro)

**Purpose:** Hook students with compelling business problem, enable diagnostic self-assessment

**Uplimit Structure:** First module in Unit 1

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **▶ Video** ⬤ Required | Business problem scenario (2-3 min) | Upload MP4 + SRT ⚠️ PENDING | Connor McDavid revenue paradox |
| 2 | **◈ AI Roleplay** ◐ Recommended | The $100M Question diagnostic | Configure in Uplimit | Reveal knowledge gaps |
| 3 | **ⓘ Infobox (Callout)** ⬤ Required | The revenue problem statement | Type directly | Blue variant |
| 4 | **⚙ iFrame Widget** ⬤ Required | Pre-Assessment Quiz | Embed `revenue-strategy-pre-assessment.html` | 10-question diagnostic |
| 5 | **ⓘ Infobox (Insight)** ◐ Recommended | Results interpretation + learning path | Type directly | Personalized guidance |
| 6 | **⚙ iFrame Widget** ◐ Recommended | Graphic Novel: "Expansion Day" | Embed PDF or images | CFL anchor project intro |
| 7 | **⚙ iFrame Widget** ◐ Recommended | Graphic Novel: "Five Streams" | Embed PDF or images | Nashville Predators story |

---

## Element 1: Bridge Video Scenario

**File:** `week1-bridge-scenario.mp4`
**Duration:** 2-3 minutes
**Caption File:** ⚠️ **PENDING PRODUCTION** - Needs HeyGen video + SRT caption file
**Format:** Direct-to-camera SME presentation

### Video Script: "The $100 Million Question"

```
[0:00-0:20] INTRODUCTION

SME: "Hi, I'm [NAME], and I've spent [X] years working in professional sport—
most recently as [ROLE] at [ORGANIZATION]. I've been on both sides of the table
for deals worth hundreds of millions of dollars.

And I want to start this course with a problem that's kept me up at night."

[ON-SCREEN TEXT: "The $100 Million Question"]


[0:20-1:10] THE PARADOX SETUP

SME: "Imagine you're the GM of an NHL team. You just signed Connor McDavid—
the best player in hockey—to a $100 million, 8-year contract.

That's $12.5 million per year. Your CFO tracks the immediate impacts:
• Ticket sales jump $5 million
• Jersey sales spike $3 million
• That's $8 million in new revenue

Your board looks at these numbers and asks the obvious question:
'Why did we just LOSE $4.5 million per year on this deal?'

[ON-SCREEN TEXT: "$12.5M cost - $8M revenue = -$4.5M loss?"]


[1:10-1:50] REFRAMING THE PROBLEM

SME: "Here's what I learned the hard way: If you're asking that question,
you're measuring the WRONG things.

Because Connor McDavid isn't worth $8 million to your organization.
He's worth $30 to $40 million per year.

[ON-SCREEN TEXT: "Actual Value: $30-40M/year"]

The problem isn't the numbers. The problem is understanding how sport revenue
works DIFFERENTLY than almost any other business.


[1:50-2:30] CALL-TO-ACTION

SME: "This week, you're going to learn how to see that ecosystem. You'll map
five major revenue streams in professional sport. You'll understand why they're
interdependent. And by the end, you'll be able to defend that $100 million
contract to a skeptical board—with numbers they can't argue with.

But first, I want to know: Do you ALREADY have the knowledge to solve this
problem? Take the diagnostic exercise that follows this video.

Let's find out what you already know... and what you're about to discover."

[END: 2:30]
```

---

## Element 2: AI Roleplay Scenario - The $100M Question

**Scenario Title:** "The $100 Million Question: Can You Solve It Now?"

**Purpose:** Diagnostic activity that reveals knowledge gaps about sports revenue ecosystems before content delivery. Students attempt to explain the Connor McDavid contract paradox using current understanding—most will struggle, creating motivation for Week 1 content.

**When to Use:** Immediately after the bridge video (Element 1)

**Assessment Type:** Diagnostic/Formative (not graded)

---

### Uplimit AI Roleplay Configuration

**Tab 1: Learning Outcome**

**Widget Name:** The $100 Million Question

**Learning Outcome:**
```
Students will demonstrate their current understanding of sports revenue ecosystems by attempting to explain the Connor McDavid contract paradox ($12.5M cost vs. $8M direct revenue). This diagnostic activity will reveal gaps in three key areas:

1. Revenue streams knowledge (can they identify all 5 major revenue sources beyond tickets/jerseys?)
2. Ecosystem thinking (do they understand how revenue streams are interdependent?)
3. Amplification effects (can they explain how star players create value across multiple streams?)

Success = Student finishes knowing exactly what they DON'T know yet, with motivation to learn Week 1 content.
```

**Scenario Setup:** Diagnostic (pre-learning assessment)

---

**Tab 2: Scenario**

**Context:**
```
A junior analyst at an NHL franchise has been asked by their executive to explain the Connor McDavid contract dilemma to the board. The board sees $12.5M/year in salary cost but only $8M in direct revenue (tickets + jerseys), creating an apparent $4.5M annual loss. The learner will attempt to explain why the deal makes financial sense, revealing their current understanding of sports revenue streams, ecosystem interdependencies, and star player value amplification. This diagnostic conversation helps identify knowledge gaps before Week 1 content delivery.
```

**Role of AI (Executive):**
```
A senior NHL executive who asks probing questions to help the junior analyst discover gaps in their understanding of sports revenue valuation.
```

**Role of Student:**
```
The learner plays the role of a junior analyst attempting to explain the Connor McDavid contract's financial logic to their executive using pre-existing knowledge.
```

---

**Tab 3: Hidden Context**

```
**AI Character Context:**
You are a senior NHL executive conducting a diagnostic conversation. The student is encountering sports revenue ecosystems for the first time. Most will struggle—this is intentional and pedagogically valuable.

**What Students Typically Miss (use to guide probing):**
- Media rights amplification (star players drive TV ratings, which drives media revenue)
- Sponsorship value (brands pay premium to associate with star players)
- Merchandise beyond jerseys (memorabilia, licensed products, digital content)
- Betting and fantasy engagement (star players drive betting volume)
- Secondary ticket market effects (playoff runs, premium games)
- League revenue sharing (how individual team success affects league-wide revenue)

**AI Personality Traits:**
- Patient but probing: You know they're learning, so you don't expect perfection—but you want to understand their thinking
- Business-focused: You care about clear explanations backed by strategic reasoning, not jargon
- Socratic: When they struggle, you ask questions that help them discover gaps rather than lecturing
- Realistic: You acknowledge that sports revenue is complex with interdependent streams

**Conversation Strategy:**

Wait for the student to start the conversation. They've been asked to explain why the McDavid contract makes financial sense. Listen to their opening explanation, then respond with probing questions based on what they say:

1. If they mention only tickets/jerseys, ask: "What other revenue streams does an NHL team have beyond gate receipts and merchandise?"

2. If they list streams but treat them as independent, ask: "Do you think these revenue streams operate independently, or are they connected somehow?"

3. If they don't mention ecosystem effects, ask: "When McDavid scores a highlight-reel goal, who benefits besides the Oilers? Think about the league level."

4. Closing (after 3-4 exchanges): Acknowledge their effort and gaps: "You've identified some pieces, but I can tell you're missing how these revenue streams amplify each other—that's the key to understanding why star players are worth more than the direct revenue suggests. This week's content will give you the framework to answer this question confidently."

Exit gracefully after 3-4 exchanges even if they're still struggling—the goal is diagnosis, not mastery.

**Conversation Objectives (3-4 exchanges):**
1. **Opening:** Let student explain their initial thinking without interruption
2. **Probe #1:** If they focus only on tickets/jerseys, ask about other revenue streams
3. **Probe #2:** If they don't see interdependencies, ask about ecosystem effects
4. **Closing:** Acknowledge effort, name specific gaps (e.g., "You identified merchandise but missed media rights amplification"), and encourage them that Week 1 will fill these gaps

**Success Indicators:**
- ✅ Student attempts answer (even if incomplete)
- ✅ Student recognizes their knowledge gaps
- ✅ Student feels motivated to learn, not defeated

**After 3-4 exchanges:** Provide rubric-aligned feedback using the 3 criteria defined in the Criteria tab.
```

---

**Tab 4: Criteria**

**CRITERION 1: Revenue Streams Knowledge**

**Points:** 10

**Description:**
The learner identifies multiple sports revenue sources beyond tickets and jerseys.

**Does not meet expectations:**
The learner mentions only tickets and jerseys or provides minimal identification of revenue streams without demonstrating understanding of the five major sources (media rights, sponsorship, merchandise, betting/gaming, premium experiences).

**Partially meets expectations:**
The learner identifies 2-3 revenue streams beyond tickets/jerseys but may miss key streams (media rights, betting) or provide limited explanation of how they contribute to team revenue.

**Fully meets expectations:**
The learner identifies 4-5 revenue streams beyond tickets/jerseys (media rights, sponsorship, merchandise, betting/gaming, premium experiences) and demonstrates understanding that these represent diverse revenue sources for professional sports teams.

---

**CRITERION 2: Ecosystem Thinking**

**Points:** 10

**Description:**
The learner recognizes that revenue streams are interdependent rather than independent.

**Does not meet expectations:**
The learner treats each revenue stream as independent, failing to recognize connections between streams (e.g., how TV ratings affect sponsorship value, how star players affect multiple streams simultaneously).

**Partially meets expectations:**
The learner demonstrates basic awareness that streams are connected but provides limited explanation of specific interdependencies or misses the cascading/amplification effects.

**Fully meets expectations:**
The learner clearly articulates how revenue streams are interdependent—explaining how star players drive TV ratings (media), attract sponsors (sponsorship), sell merchandise (retail), increase betting engagement (gaming), and create playoff demand (premium tickets), with effects cascading across the ecosystem.

---

**CRITERION 3: Amplification Effects**

**Points:** 10

**Description:**
The learner explains how star players create value that exceeds direct, measurable revenue.

**Does not meet expectations:**
The learner focuses only on direct, measurable revenue (ticket sales, jersey sales) without recognizing amplification effects across the ecosystem.

**Partially meets expectations:**
The learner mentions that star players have value beyond direct revenue but provides limited explanation of the amplification mechanism or specific examples.

**Fully meets expectations:**
The learner clearly explains that star players like McDavid create amplification effects—driving $30-40M in total value through media ratings, national broadcast premium, sponsorship uplift, merchandise across the league, and playoff revenue potential—far exceeding the $8M in direct ticket/jersey revenue.

---

**Feedback Approach:** Diagnostic only (not graded)

Check the box: **"Provide feedback but do not grade"**

---

### Student-Facing Instructions (Place as Text element BEFORE AI Roleplay)

```markdown
### Your Role
You are a **junior analyst** at an NHL franchise. Your executive has just presented the Connor McDavid contract dilemma to the board: $12.5M/year cost, but only $8M in direct revenue. The board is questioning why you'd "lose" $4.5M per year.

### Getting Started
**You need to start the conversation.** Begin by explaining to your executive why you think this deal actually makes financial sense despite the apparent loss.

### Your Goal
⚠️ **This is diagnostic—you're not expected to ace this!** Most students struggle before learning Week 1 content. The goal is to discover gaps in your understanding so you know what to focus on this week.

### Conversation Length
3-4 exchanges with your executive. If you get stuck, that's the point—those are your learning priorities.
```

---

## Element 3: Infobox - The Revenue Problem

```
Title: ◉ The Revenue Problem Professional Sport Faces

Professional sports teams operate with a business model that defies conventional logic: competitors must collaborate financially, revenue sources are deeply interdependent, and investments in one area create unpredictable ripple effects across the ecosystem. This week you'll explore why teams "overpay" for star players, how leagues balance entrepreneurial success with competitive fairness, and which revenue streams are growing versus hitting capacity limits. By the end, you'll solve these problems using real NHL data—but first, let's see what you already know.
```

---

## Element 4: Pre-Assessment Widget

**Widget Purpose:** 10-question diagnostic quiz covering all 4 learning outcomes (WLO 1.1-1.4)

**Widget File:** `revenue-strategy-pre-assessment.html`

**Embed Code:**
```html
<iframe
  src="../../widgets/revenue-strategy-pre-assessment.html"
  width="100%"
  height="800"
  style="border: none; border-radius: 8px;"
  title="Revenue Strategy Pre-Assessment"
  aria-label="10-question diagnostic quiz testing baseline knowledge of sports revenue"
  allowfullscreen
  loading="lazy">
</iframe>
```

**Quiz Topics:**
- Q1-2: Revenue streams knowledge (WLO 1.1)
- Q3-4: Sport's unique business model (WLO 1.2)
- Q5-6: Growth potential vs. risk (WLO 1.3)
- Q7-10: Revenue sharing models (WLO 1.4)

---

## Element 5: Infobox - Results Interpretation

```
Title: ◉ What Your Pre-Assessment Results Mean

Your quiz results create a personalized learning path for this week. Lower scores (0-6/10) suggest spending extra time with Module 3's core content and all interactive exercises—you're starting fresh, which is perfect for building strong fundamentals. Higher scores (7-10/10) indicate solid baseline knowledge, so challenge yourself with the Predators case analysis and Revenue Empire Builder simulation. Remember: this quiz isn't graded, it's a diagnostic tool to help you learn efficiently. Now that you know where you stand, let's build your revenue ecosystem expertise.
```

---

## Element 6: Graphic Novel - "Expansion Day"

**Uplimit Implementation:**
1. Select **Text** element for intro
2. Select **iFrame** or **Image** element for graphic novel

**Introduction Text:**
```markdown
### Visual Story: Explore This Week's Concepts

Before diving into the core content, explore this week's concepts through visual storytelling. These graphic novels bring sports business scenarios to life.
```

**Graphic Novel:** "Expansion Day: A CFL Story"

**Location:** `modules/shared-resources/graphic-novels/01-expansion-day-week1.md`

**Story Synopsis:**
Follow Marcus Chen, a sports executive, as he navigates the high-stakes world of CFL expansion. This story introduces the anchor project you'll develop throughout the course—bringing professional football to a new Canadian market.

**Learning Connection:**
This narrative introduces the CFL Expansion anchor project that threads through all 5 weeks. You'll apply each week's frameworks to build a comprehensive expansion proposal.

---

## Element 7: Graphic Novel - "Five Streams"

**Graphic Novel:** "Five Streams: The Nashville Predators Story"

**Location:** `modules/shared-resources/graphic-novels/01b-five-streams-week1.md`

**Story Synopsis:**
Follow the Nashville Predators' journey from struggling expansion team to playoff contender. This story visualizes how the five revenue streams—media, ticketing, sponsorship, merchandise, and betting—work together as an interconnected ecosystem.

**Learning Connection:**
This narrative introduces the five revenue streams you'll analyze this week and sets up the Nashville Predators case study in Module 5.

---

## Instructor Notes

**Module 0 Purpose:**
- Create cognitive dissonance (the $100M question challenges assumptions)
- Reveal knowledge gaps through AI roleplay and pre-assessment
- Build motivation to learn Week 1 content
- Graphic novels provide visual entry point for diverse learners

**Graphic Novel Notes:**
- "Expansion Day" introduces the CFL anchor project (connects to Milestone 1 in Module 7)
- "Five Streams" visualizes revenue concepts (connects to Nashville Predators case in Module 5)
- Both are optional but recommended for visual/narrative learners
