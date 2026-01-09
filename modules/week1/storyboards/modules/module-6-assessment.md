# Your Executive Memo + Project Milestone 1
**Version:** 1.5.0 | **Last Updated:** 2026-01-07

**Purpose:** Assess student understanding of Week 1 content (measures WLO 1.1, 1.2, 1.3, 1.4) AND submit CFL Expansion Project Milestone 1

### Version 1.5.0 Changes
- **ENHANCED:** Redesigned AI Roleplay (Sarah Chen) with collaborative character, hidden reference data, tolerance bands, and natural conversation flow
- **NEW:** Added detailed sports revenue reference data for AI to guide questions without revealing answers
- **NEW:** Added PE-specific context (IRR expectations, traditional metrics) for more authentic conversation

### Version 1.6.0 Changes
- **REMOVED:** PAIRR methodology - now uses AI feedback only
- **UPDATED:** CFL Expansion Project Milestone 1 now individual submission
- Individual executive memo remains as primary assessment

**Uplimit Structure:** Sixth module in Unit 1

| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **▬ Text** ⬤ Required | Connecting intro from The Predators Problem | Type directly | Sets context, connects narrative |
| 2 | **Infobox (Insight)** ⬤ Required | Assignment instructions and rubric preview | Type directly | Purple variant, assessment focus |
| 2A | **▬ Text** ◐ Recommended | UDL Learning Supports Introduction | Type directly | Explains 4 support options |
| 2B | **Video** ◐ Recommended | Guided Demo: Writing Your Memo (6 min) | Upload MP4 | SME think-aloud walkthrough |
| 2C | **Widget (HTML)** ◐ Recommended | Annotated Exemplar Explorer | Embed HTML | Interactive developing→exemplary comparison |
| 2D | **Details** ◐ Recommended | Micro-Tutorial Library | Type directly | Accordion with 5 skill videos |
| 2E | **Audio** ◐ Recommended | Audio Instructions (4 min) | Upload MP3 | Voice-narrated assignment overview |
| 3 | **AI Roleplay** ◐ Recommended | Practice pitch to private equity | Configure in Uplimit | Rehearse your investment recommendation before writing memo |
| 4 | **Text Response** ⬤ Required | 1-page reflection memo submission | Configure in Uplimit | Rubric evaluation mode |
| 5 | **Details** ○ Optional | Rubric details and examples (optional) | Type directly | Accordion - transparent criteria |
| 6 | **AI Chat Widget** ○ Optional | Writing support (optional) | Configure in Uplimit | Named: "Writing Assistant" |
| 7 | **ⓘ Infobox** ⬤ Required | CFL Project Milestone 1 Instructions | Type directly | Individual project component |
| 8 | **File Upload** ⬤ Required | Milestone 1: Market Analysis Brief | Configure in Uplimit | Individual submission |

### Element 1: Connecting Introduction Text
**Copy this markdown directly into Uplimit:**

```markdown
You've explored revenue streams through interactive discovery in Five Revenue Streams, built a five-year strategy in Build Your Revenue Empire, and analyzed the Nashville Predators' real-world challenges in The Predators Problem. You've seen how revenue ecosystems work in theory and in practice.

Now it's time to demonstrate what you've learned. In this final assessment, you'll step into the role of a strategic advisor to a private equity firm considering a major investment in professional sports. They need to understand whether sports teams operate like other businesses—and if not, what makes them different. Your task: write a clear, evidence-based executive memo that synthesizes everything you've learned this week into actionable investment guidance.
```

### Element 2: Infobox Content

```
Title: ▪ Assessment: Revenue Ecosystem Reflection Memo

You'll write a 1-page executive memo advising a private equity firm considering investing in a professional sports team. Your memo should explain the unique characteristics of sport's revenue model and identify 2-3 factors that would influence their investment decision. This assessment measures WLOs 1.1-1.4 and is worth 30 points. Use the rubric below to guide your work.
```

---

## UDL LEARNING SUPPORTS (Elements 2A-2E)

**Design Rationale:** These four learning supports provide multiple means of representation (UDL Principle 1) and multiple means of engagement (UDL Principle 3). Students self-select the supports they need based on their learning preferences and prior experience with executive memo writing. All supports are optional but recommended.

---

### Element 2A: UDL Learning Supports Introduction

**Copy this markdown directly into Uplimit:**

```markdown
## Choose Your Learning Path

Before you start writing, we've created two optional resources to help you succeed. Pick what works best for how YOU learn.

| If you learn best by... | Try this resource | Time |
|------------------------|-------------------|------|
| **Following a step-by-step walkthrough** | Interactive Guided Demo | 6-7 min |
| **Seeing examples with explanations** | Annotated Exemplar Explorer | 5-10 min |

The **Interactive Guided Demo** includes voiceover narration—you can play/pause, replay steps, or mute and read at your own pace.

**Already confident writing executive memos?** Skip ahead to the AI Roleplay practice (Element 3) or go straight to writing.

**New to business writing?** We recommend the Interactive Guided Demo first, then the Annotated Exemplar Explorer.
```

---

### Element 2B: Interactive Guided Demo - Writing Your Memo

**Widget:** `guided-memo-demo.html`
**Hosted URL:** `https://jkruckivey.github.io/business-of-marketing-in-sport/widgets/guided-memo-demo.html`

**Widget Specifications:**
- **Type:** SCORM package with HTML + MP3 voiceover files
- **Length:** 7 steps, ~6-7 minutes total
- **SME Voice:** Matt Diamond (AI-generated from voice clone)
- **Accessibility:** WCAG 2.2 AA, keyboard navigable, mute option for text-only

**Widget Status:** ✅ Widget complete, ⏳ Audio files pending generation

**Widget Features:**
- Step-by-step navigation (Next/Previous)
- Audio controls (Play/Pause, Replay, Mute)
- Progress bar showing step X of 7
- Visual memo mockup showing progressive writing
- Keyboard navigation (arrow keys, spacebar for play/pause)
- Auto-plays voiceover on step change (if unmuted)

**Audio Files Needed:**
| File | Duration |
|------|----------|
| `guided-memo-step1-introduction.mp3` | ~45 sec |
| `guided-memo-step2-prompt.mp3` | ~60 sec |
| `guided-memo-step3-header.mp3` | ~45 sec |
| `guided-memo-step4-analysis.mp3` | ~75 sec |
| `guided-memo-step5-factors.mp3` | ~60 sec |
| `guided-memo-step6-revision.mp3` | ~60 sec |
| `guided-memo-step7-summary.mp3` | ~45 sec |

**Voiceover Scripts:** See `widgets/audio/GUIDED-MEMO-DEMO-VOICEOVER-SCRIPTS.md`

---

**VOICEOVER CONTENT SUMMARY (Matt Diamond):**

```
[0:00-0:30] INTRODUCTION

[Screen: Title slide "Writing Your Executive Memo: A Guided Walkthrough"]

NARRATOR: "Hi, I'm [Instructor Name]. In the next six minutes, I'm going to walk you through exactly how I would approach this executive memo assignment. I'll show you my thinking process—including the parts where I get stuck and have to revise. Let's write this together."

[Screen: Opens blank Word document]

---

[0:30-1:30] STEP 1: UNDERSTANDING THE PROMPT

[Screen: Assignment prompt visible on screen]

NARRATOR: "First, I always read the prompt twice. Let me highlight the key requirements..."

[Highlights on screen as narrator speaks]

"One-page memo... advising a private equity firm... unique characteristics of sport's revenue model... 2-3 investment decision factors. Okay, so I need to do TWO things: explain what makes sports different, AND give them actionable guidance."

[Opens rubric in split screen]

"Let me check the rubric... Revenue Stream Analysis is worth 10 points, Investment Factors is 10 points... So these are equally weighted. I shouldn't spend 80% of my memo on one and ignore the other."

[Types quick outline]

"I'm going to sketch a quick outline before I write:
- Opening: Set up the context (1-2 sentences)
- Section 1: How sports revenue is unique (150-200 words)
- Section 2: 2-3 factors for investment decision (150-200 words)
- Closing: Bottom-line recommendation (1-2 sentences)"

---

[1:30-3:00] STEP 2: WRITING THE ANALYSIS

[Screen: Starts typing memo format]

NARRATOR: "I'll start with the memo header—this is standard business format."

[Types: To: Brookfield Capital Investment Committee / From: [Name], Sports Business Consultant / Date: [Today] / Re: Sports Team Investment Analysis]

"Now the opening. I want to get straight to the point—executives don't want fluff."

[Types, speaking aloud]: "Professional sports teams operate under a fundamentally different economic model than traditional businesses. Before investing $500M-$1B, you need to understand three characteristics that make sports unique—and why they matter for your returns."

"See how I'm setting up expectations? They know I'm going to cover three things. Now let me deliver on that promise."

[Types Section 1, thinking aloud]

"First characteristic... I'll talk about revenue ecosystem interdependence. Let me pull data from the course..."

[Types]: "First, revenue streams are deeply interconnected. Media rights (55% of NHL revenue) depend on competitive balance, which requires revenue sharing among teams. This means individual team profitability is partially determined by league-wide policies, not just team management decisions."

"Good—I've made a claim AND supported it with a specific percentage from the course content. Let me add the Predators example..."

[Continues typing, showing the process of drafting, pausing, checking notes]

---

[3:00-4:30] STEP 3: INVESTMENT FACTORS

NARRATOR: "Now for the investment factors section. The rubric says 'specific, defensible factors backed by evidence.' Let me think about what Sarah Chen—our PE investor—would actually care about..."

[Types, thinking aloud]

"If I were investing $500M, I'd want to know about downside protection AND upside potential. Let me frame it that way."

[Types]: "Two factors should guide your investment decision:

1. Revenue sharing structure: Leagues with robust sharing (NFL) protect downside risk. The Predators case shows how market selection affects all revenue streams—some cities project $30M EBITDA while others project losses.

2. Emerging revenue exposure: Teams with rights to betting partnerships and digital content can capture high-growth revenue streams outside traditional sharing pools. These streams could represent 15-20% of revenue by 2030."

"Notice I'm being specific—not just 'look at revenue sharing' but explaining WHY it matters for an investor. And I'm citing the case."

---

[4:30-5:30] STEP 4: REVISION AND POLISH

[Screen: Shows full draft, ~400 words]

NARRATOR: "Okay, I have a draft. But I'm at 420 words and the limit is 500. Let me check if everything earns its place..."

[Scrolls through, highlighting sections]

"This sentence is redundant... delete. This phrase is wordy—'in order to' can just be 'to'... And here I said 'unique' twice in the same paragraph."

[Makes edits on screen]

"Now let me check against the rubric one more time. Revenue streams analyzed? Yes, I covered media rights and mentioned interdependencies. Investment factors? Yes, two specific factors with evidence. Business communication? Memo format, clear writing... looks good."

"One more thing—do I have a clear bottom-line recommendation?"

[Scrolls to end, adds closing]

"I'll add: 'Bottom line: Sports teams are not traditional businesses, but with proper due diligence on league revenue structures and emerging stream potential, they can deliver attractive risk-adjusted returns.'"

---

[5:30-6:00] CLOSING

NARRATOR: "That's it. Total time from blank page to finished draft: about 45 minutes for me, and that's with experience. Give yourself 60-90 minutes for your first draft, then use the AI Writing Assistant to get feedback and revise."

"Key takeaways:
1. Read the prompt and rubric BEFORE writing
2. Make an outline to organize your thinking
3. Support every claim with specific evidence
4. Revise for concision—every word should earn its place
5. Check your draft against the rubric before submitting"

"Good luck with your memo. You've got this."

[End screen: "Ready to write? Try the AI Roleplay to practice your pitch first, or dive into your draft."]
```

---

### Element 2C: Annotated Exemplar Explorer Widget

**Widget Purpose:** Interactive side-by-side comparison showing a developing draft transformed into an exemplary draft, with clickable annotations explaining what makes each revision effective.

**Widget Status:** 📝 Specification complete, awaiting development

**Widget Specifications:**
- **Type:** HTML/JavaScript interactive widget
- **Accessibility:** WCAG 2.2 AA compliant, keyboard navigable, screen reader compatible
- **Export:** None (viewing only)

---

**WIDGET DESIGN SPECIFICATION**

**Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│  ANNOTATED EXEMPLAR EXPLORER                                    │
│  ─────────────────────────────────────────────────────────────  │
│  [Tab: Developing Draft] [Tab: Exemplary Draft] [Tab: Changes]  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────┐  ┌──────────────────┐  │
│  │                                     │  │ ANNOTATIONS      │  │
│  │  [Memo content with highlighted     │  │                  │  │
│  │   hotspots - clickable sections]    │  │ Click any        │  │
│  │                                     │  │ highlighted      │  │
│  │  "Professional sports teams         │  │ section to see   │  │
│  │   [operate differently]¹ than       │  │ instructor       │  │
│  │   traditional businesses..."        │  │ feedback.        │  │
│  │                                     │  │                  │  │
│  │  ¹ ← Click numbered hotspots        │  │ ──────────────── │  │
│  │                                     │  │ [Annotation      │  │
│  │                                     │  │  content appears │  │
│  │                                     │  │  here when       │  │
│  │                                     │  │  hotspot clicked]│  │
│  └─────────────────────────────────────┘  └──────────────────┘  │
│                                                                 │
│  Progress: 0/8 annotations viewed                               │
└─────────────────────────────────────────────────────────────────┘
```

**Content - Developing Draft (with 8 annotation hotspots):**

```markdown
**TO:** Investment Committee
**FROM:** Sports Consultant
**RE:** Sports Investment

[HOTSPOT 1: "Vague header - missing date, full titles"]

Professional sports teams are different from other businesses. [HOTSPOT 2: "Too vague - HOW are they different?"] They make money from several sources including media, tickets, sponsorship, merchandise, and betting.

The revenue streams are connected to each other. [HOTSPOT 3: "Claims without evidence - no data"] For example, media rights are important for teams. Revenue sharing also matters because it helps teams stay competitive.

If you invest, you should think about a few things. [HOTSPOT 4: "Weak transition - 'a few things' is vague"] First, look at how the league shares revenue. [HOTSPOT 5: "Generic advice - not specific to THIS investment"] Second, consider the growth potential. Third, think about the risks involved.

Overall, sports teams can be good investments but there are also risks to consider. [HOTSPOT 6: "Wishy-washy conclusion - no clear recommendation"] You should do more research before deciding. [HOTSPOT 7: "Passes the buck - they hired YOU for a recommendation"]

[HOTSPOT 8: "Missing word count indicator, no memo formatting polish"]
```

**Content - Exemplary Draft:**

```markdown
**TO:** Brookfield Capital Investment Committee
**FROM:** [Name], Sports Business Consultant
**DATE:** [Current Date]
**RE:** Professional Sports Team Investment Analysis: Revenue Model Assessment

Professional sports teams operate under a fundamentally different economic model than traditional businesses. Before committing $500M-$1B, you must understand three characteristics that create both opportunity and risk.

**1. Revenue Ecosystem Interdependence**
Unlike traditional businesses, sports revenue streams are deeply interconnected. Media rights (55% of NHL revenue) depend on competitive balance maintained through revenue sharing. The Nashville Predators case demonstrates this: despite market challenges, the team must evaluate how different markets would affect their revenue mix—media rights, ticketing, sponsorship, and merchandise all vary dramatically by city.

**2. Shared Economics Create Unusual Incentives**
Sports teams must collaborate with competitors to maximize value. Strong league governance (salary caps, draft systems, revenue pools) correlates with franchise stability. Leagues with robust sharing—NFL distributes 63% of revenue equally—show lower variance in team valuations.

**Investment Decision Factors**

Two factors should guide your due diligence:

1. **Revenue sharing structure:** Prioritize leagues/teams where sharing protects downside. Calculate the "floor" revenue a team receives regardless of performance.

2. **Emerging stream exposure:** Evaluate the team's position in betting partnerships and digital content rights. These streams (projected 15-20% of revenue by 2030) sit outside traditional sharing pools, creating upside for first-movers.

**Recommendation:** Sports teams are not traditional businesses, but with proper due diligence on league revenue structures and emerging stream potential, they offer attractive risk-adjusted returns for patient capital. I recommend proceeding to Phase 2 due diligence on the shortlisted properties.

*[498 words]*
```

**Annotation Content (8 annotations):**

| # | Section | Annotation Text |
|---|---------|-----------------|
| 1 | Header | **What's missing:** Professional memos include full recipient/sender titles, specific date, and descriptive subject line. The exemplary version tells the reader exactly what this memo covers before they read it. |
| 2 | Opening claim | **Show, don't just tell:** "Different" is vague. The exemplary version specifies HOW they're different (interdependent revenue, shared economics) with a hook that promises three specific insights. |
| 3 | Unsupported claims | **Evidence matters:** Every claim needs support. Notice how the exemplary version cites "55% of NHL revenue" and references the Predators case. Your reader is a data-driven PE investor—give them numbers. |
| 4 | Weak transition | **Signpost your structure:** "A few things" forces the reader to count. The exemplary version uses a clear header ("Investment Decision Factors") and numbers each factor explicitly. |
| 5 | Generic advice | **Be specific and actionable:** "Look at revenue sharing" is advice anyone could give. The exemplary version tells them exactly WHAT to look for: "Calculate the 'floor' revenue a team receives regardless of performance." |
| 6 | Weak conclusion | **Take a position:** Executives hire consultants to make recommendations, not hedge. The exemplary version gives a clear verdict: "I recommend proceeding to Phase 2 due diligence." |
| 7 | Deflection | **Own your expertise:** "Do more research" sounds like you're not confident in your analysis. If you need more information, specify exactly what data you need and why. Otherwise, make the call. |
| 8 | Missing polish | **Professional formatting matters:** Word count shows you respect the limit. Clean formatting (headers, bold, bullets) makes the memo scannable—executives skim before they read. |

**Widget Functionality:**
- Tabs switch between Developing/Exemplary/Changes views
- "Changes" view shows side-by-side with strikethrough/additions
- Clicking hotspots displays annotation in sidebar
- Progress tracker shows annotations viewed (gamification)
- "View All Annotations" button for linear reading preference
- Keyboard navigation: Tab to move between hotspots, Enter to select

---

### Element 2D: ~~Micro-Tutorial Library~~ (REMOVED)

**Status:** Consolidated into Element 2B (Interactive Guided Demo)

The Interactive Guided Demo now covers all micro-tutorial content:
- Step 2: Understanding prompts and rubrics
- Step 3: Memo format
- Step 4: Citing evidence from course content
- Step 5: Structuring recommendations
- Step 6: Editing for concision

Students can replay individual steps as needed, making separate micro-tutorials redundant.

---

### Element 2E: Audio Instructions (OPTIONAL)

**Purpose:** Voice-narrated version of assignment instructions for auditory learners and accessibility. Students can listen while commuting, exercising, or as reinforcement after reading.

**Audio Specifications:**
- **Length:** 4 minutes
- **Format:** MP3 (128kbps minimum for voice clarity)
- **Accessibility:** Transcript provided (same as script below)

**Uplimit Implementation:**
1. Select **Audio** element (or embed in Text element with HTML5 audio player)
2. Upload MP3 file
3. Add transcript below audio player

**Audio Status:** 📝 Script complete, awaiting recording

---

**AUDIO SCRIPT: "Your Executive Memo Assignment - Audio Overview" (4 min)**

```
[0:00-0:30] INTRODUCTION

Welcome to the audio overview of your Week 1 Executive Memo assignment. This recording covers everything you need to know to succeed. Feel free to listen while you review the written instructions, or use this as a refresher before you start writing.

---

[0:30-1:15] THE ASSIGNMENT

Your task is to write a one-page executive memo—that's 500 words maximum—advising a private equity firm that's considering investing in a professional sports team.

Your memo needs to do two things. First, explain what makes sports teams different from traditional businesses. Think about what you learned about revenue ecosystems, competitive balance, and revenue sharing. Second, identify two to three factors that should influence their investment decision. These should be specific and evidence-based, not generic advice.

This assignment measures all four of this week's learning outcomes and is worth 30 points.

---

[1:15-2:00] HOW YOU'LL BE EVALUATED

The rubric has four criteria.

Revenue Stream Analysis is worth 10 points. You need to accurately describe at least three revenue streams and show how they're interconnected—not just list them separately.

Investment Factors is also worth 10 points. Identify two to three specific factors backed by evidence from the course content. Generic advice like "consider the risks" won't earn full credit.

Application of Concepts is worth 5 points. Reference the executive session, readings, and especially the Predators case study.

Business Communication is worth 5 points. Use proper memo format, write clearly and concisely, and stay within the 500-word limit.

---

[2:00-2:45] RESOURCES TO HELP YOU

Before you start writing, you have several optional resources available.

The Guided Demo Video shows an instructor writing a memo from scratch, thinking aloud through the process. It's about six minutes and shows you what good looks like.

The Annotated Exemplar Explorer is an interactive tool that compares a developing draft to an exemplary draft. Click on highlighted sections to see what makes the difference.

The Micro-Tutorial Library has five short videos—one to two minutes each—on specific skills like writing executive summaries, citing evidence, and editing for concision. Pick the ones you need.

And of course, you're listening to the audio instructions right now.

---

[2:45-3:30] THE PROCESS

Here's the recommended workflow. First, use the AI Roleplay to practice your pitch. You'll have a conversation with Sarah Chen, a fictional PE investor, and get feedback on your arguments before you write.

Then write your first draft. Give yourself 60 to 90 minutes.

Then use the AI Writing Assistant to get feedback on your draft and make improvements.

Finally, submit your polished memo through the submission box.

The optional AI feedback bonus (1 point) rewards students who use the AI Writing Assistant to strengthen their analysis.

---

[3:30-4:00] CLOSING

That's everything you need to know. To summarize: one-page memo, 500 words max, explain what makes sports different, give two to three investment factors, use evidence from the course, and write in professional memo format.

You have all the tools. Now go write something great. Good luck!

[End]
```

**Transcript Note:**
Add this text below the audio player:
```
📄 **Transcript:** [Expand to read full transcript]
[Insert full script text in collapsible element]
```

---

### Element 3: AI Roleplay - Private Equity Practice Pitch

**🎮 Widget Purpose:** Formative practice where students rehearse their investment recommendation before writing the final memo, receiving AI feedback to strengthen their arguments and executive communication.

**Widget Status:** ⭕ Needs configuration in Uplimit platform

**Element Type:** AI Roleplay (4-tab configuration)

---

## UPLIMIT CONFIGURATION

### Tab 1: Learning Objective

**Name:** Private Equity Investment Pitch: Revenue Ecosystem Recommendation

**Learning Objective:**
Students will practice articulating revenue ecosystem analysis and investment recommendations in professional conversation, testing their arguments and receiving formative feedback before writing their final memo. This supports WLOs 1.1-1.4 (Analysis level) while developing executive communication skills.

**Scenario Setup:**
Formative practice conversation (not graded)

---

### Tab 2: Scenario

**Context:**
Brookfield Capital, a private equity firm, is considering investing $500M-$1B in acquiring a mid-market professional sports team. The firm's Managing Partner, Sarah Chen, has hired you as a sports business consultant to advise on the investment opportunity.

Sarah has done deals in hospitality, real estate, and retail—but never in sports. She's heard sports teams are "different" from normal businesses, but she's skeptical. She needs you to explain what makes sports unique, where the money comes from, and whether this is a good investment.

This is a collaborative conversation - Sarah genuinely wants to learn from your expertise. She hasn't studied sports business herself; that's why she hired you. This roleplay is formative practice (not graded) to help you rehearse before writing your final memo.

**Role of AI (Sarah Chen):** Sarah Chen is the Managing Partner at Brookfield Capital with 15 years of private equity experience in traditional industries. She's smart, curious, and genuinely wants to understand—but she needs concepts explained in business fundamentals language, not sports jargon.

**Role of Student:** You are a sports business consultant advising Brookfield Capital on whether to invest in a professional sports team.

---

### Tab 3: Hidden Context

**Hidden Context (AI knows, student doesn't see):**

```
CHARACTER: Sarah Chen, Brookfield Capital Managing Partner
- Warm, intellectually curious, genuinely wants to learn
- Appreciates the expertise the consultant brings
- You hired this consultant - you have NOT studied sports business yourself
- You're excited to finally understand how sports economics work

YOUR ROLE: You're a collaborative client who wants to understand sports business so you can make a smart investment decision. You haven't researched sports revenue yourself - that's why you hired a consultant. Ask questions out of genuine curiosity, not to test or trip them up.

---
CASE CONTEXT:
Brookfield Capital is evaluating a $500M-$1B investment in acquiring a mid-market professional sports team.

THE INVESTMENT THESIS:
- Sports teams have appreciated significantly (average franchise values up 10-15% annually)
- Live sports content is highly valuable in streaming era
- But sports economics are different from traditional businesses

WHAT SARAH KNOWS (Traditional PE):
- IRR expectations: 15-20% for this asset class
- Typical deal structure: Leverage, operating improvements, exit in 5-7 years
- Familiar metrics: EBITDA, revenue growth, market share, competitive moats

WHAT SARAH DOESN'T KNOW (Sports-Specific):
- Why sports teams cooperate AND compete simultaneously
- How revenue sharing works and why it exists
- Why winning doesn't always equal profit
- How media rights, ticketing, sponsorship, merch, and betting interconnect

---
REFERENCE DATA (Use to guide your questions - NEVER reveal these numbers):

SPORTS REVENUE MIX (Typical Major League Team):
- Media rights: 40-60% of revenue (largest stream)
- Ticketing/gameday: 20-30% of revenue
- Sponsorship: 15-25% of revenue
- Merchandising: 5-10% of revenue
- Betting/gaming: 2-8% of revenue (fastest growing, 30-40% annual growth in new markets)

REVENUE SHARING CONTEXT:
- NFL: ~60% of revenue shared equally
- NHL: ~50% of national media/licensing shared
- EPL: Tiered (50% equal, 25% finishing position, 25% TV appearances)
- Purpose: Maintain competitive balance so fans stay engaged

ECOSYSTEM DYNAMICS:
- Signing star player → merchandise sales up 20-30%
- Signing star player → ticket demand up 15-20%
- Signing star player → sponsorship value up 10-15%
- Signing star player → media interest up (hard to quantify)
- These effects CASCADE - one investment affects all streams

GROWTH vs. RISK BY STREAM:
- Media: Largest but disrupted by streaming; contracts locked 7-12 years
- Ticketing: Stable but capacity-constrained; dynamic pricing adds 15-25%
- Sponsorship: Growing via naming rights ($30-50M/year for arenas)
- Betting: Fastest growth but regulatory uncertainty
- Merch: Steady but dependent on star players and winning

VALUATION CONTEXT:
- Average MLB franchise: ~$2.5B
- Average NFL franchise: ~$4.5B
- Average NBA franchise: ~$3B
- Average NHL franchise: ~$1B
- Premium for large markets (NYC, LA) vs. small markets (KC, Milwaukee)

---
CRITICAL INSTRUCTION - DO NOT REVEAL THESE NUMBERS:
You have this data to help you ask smart follow-up questions, but you must NEVER:
- State any of these figures yourself
- Confirm or deny if the consultant's numbers are correct
- Say "that's right" or "that's wrong"
- Provide the "answer" if they seem stuck

HOW TO USE THE REFERENCE DATA:
You're a sophisticated investor who knows what good analysis looks like - but you don't know sports. Use this knowledge to ask good follow-up questions.

If their number is CLOSE (within ~10%):
- Accept it naturally and ask: "And what does that mean for our investment?"
- Or: "Interesting - how does that compare to other industries I know?"

If their number seems OFF (more than ~20% different):
- Don't say it's wrong, but show curiosity: "Help me understand that figure"
- Or: "Walk me through how you got there - I want to make sure I understand"
- Or: "That's surprising to me - can you explain where that data comes from?"

If their number is WAY OFF (wrong order of magnitude):
- Gently probe: "Hmm, that doesn't quite match what I've seen in other industries. Can you double-check that?"
- Or: "Before I take this to my partners, I want to make sure we've got solid numbers. Where did that come from?"

If they use JARGON you don't understand:
- Ask: "I'm not familiar with that term - can you explain it in plain language?"
- Or: "How would you explain that to my partners who've never looked at sports?"

---
CONVERSATION FLOW:

1. OPENER: "Thanks for coming in. I've done deals in hotels, retail, office buildings - but never sports. My partners are excited about this opportunity, but I'll be honest: I don't really understand how sports teams make money. Can you walk me through it?"
   - Let them explain the basics
   - Follow up: "That's helpful. You mentioned [X] - tell me more about how that works?"

2. PROBE REVENUE STREAMS: "Okay, so there are multiple revenue streams. Talk me through a few of them. Where's the growth potential? And where are the limits?"
   - Let them analyze 2-3 streams
   - If vague: "Can you give me a sense of the numbers? What percentage of revenue are we talking?"
   - If jargon: "I'm not sure I follow - can you explain that in terms I'd use for a hotel deal?"

3. EXPLORE ECOSYSTEM THINKING: "Here's something I don't understand. In my deals, I look at each revenue stream independently. But you seem to be saying sports is different. Why?"
   - Listen for ecosystem/interdependence thinking
   - Probe: "So if I invest in a star player, you're saying that affects MORE than just ticket sales?"
   - If they explain well: "That's a really helpful way to think about it. Give me an example?"

4. ASSESS RISKS: "I like what I'm hearing, but what am I missing? What should I be worried about?"
   - Test risk awareness
   - Respect candor: "I appreciate you being honest about that"
   - Probe: "How big a concern is that? What could go wrong?"

5. INVESTMENT FACTORS: "If you had to give me 2-3 factors to prioritize in my decision, what would they be?"
   - Listen for actionable, specific recommendations
   - If generic: "Can you be more specific? How would I actually evaluate that?"
   - If strong: "That's practical. What data would I need to assess that?"

6. CLOSING: "Alright, bottom line: Would you recommend we do this deal? And why or why not?"
   - Accept ANY well-reasoned recommendation
   - Ask: "What would make you change your mind?"
   - Ask: "How confident are you feeling about this analysis?"

---
RESPONSE STYLE:
- Be warm and conversational - you're a client who genuinely wants to learn
- Use phrases like: "That's interesting...", "Help me understand...", "I'm curious about..."
- Acknowledge their expertise: "That's a helpful way to think about it", "I hadn't considered that"
- If they ask "Is that right?" say: "You're the expert here - what's your confidence level on that?"
- Be encouraging but still probe for clarity and specificity
- Translate to business fundamentals: "So it's kind of like how in hotels, occupancy drives F&B revenue?"

ENDING THE CONVERSATION:
- Let the conversation continue as long as the student is engaged
- When they've made a clear recommendation and defended it, wrap up warmly
- Closing: "This is really helpful. I feel like I finally understand how sports economics work - and more importantly, I feel confident presenting this to my partners. Thank you for walking me through it so clearly."
```

---

### Tab 4: Criteria (Rubric)

**Uplimit Configuration:**
- ✅ Enable automated AI grading
- ✅ Include evaluation levels
- ⭕ Apply points (disabled - formative feedback only, not scored)

---

**CRITERION 1: Revenue Ecosystem Explanation**

**Description:**
Clearly explains how sports revenue differs from traditional business models.

**Does not meet expectations:**
The learner treats revenue streams as independent silos and uses generic business language without sports-specific insights about interdependence or competitive balance.

**Partially meets expectations:**
The learner acknowledges that sports revenue works differently but may not fully explain the ecosystem dynamics or may miss key unique characteristics like shared economics.

**Fully meets expectations:**
The learner uses ecosystem thinking to explain unique characteristics clearly, demonstrating how media rights value depends on competitive talent distribution and how revenue streams interconnect.

---

**CRITERION 2: Revenue Stream Analysis**

**Description:**
Analyzes multiple revenue streams with specificity, showing both growth potential and risks.

**Does not meet expectations:**
The learner provides vague generalizations about revenue streams without data, ignores risks, or fails to show trade-offs between growth and constraints.

**Partially meets expectations:**
The learner analyzes revenue streams with some specificity but may lack data/percentages or may focus only on growth without discussing risks and limits.

**Fully meets expectations:**
The learner analyzes 3+ streams with specific data and percentages, clearly articulates both growth potential and risks, and demonstrates understanding of trade-offs (e.g., "Media rights generate 50% of revenue with 3-5% annual growth, but streaming disruption creates downside risk").

---

**CRITERION 3: Investment Factors**

**Description:**
Identifies specific, actionable investment factors backed by evidence.

**Does not meet expectations:**
The learner provides generic factors without supporting evidence or fails to frame recommendations as prioritization for investment decision-making.

**Partially meets expectations:**
The learner identifies reasonable factors with some justification but may lack specificity or may not clearly frame how these factors guide investment decisions.

**Fully meets expectations:**
The learner identifies 2-3 specific, defensible factors backed by evidence and frames them as actionable priorities for investment decisions (e.g., "Prioritize revenue sharing stability to protect downside and emerging stream potential to capture upside").

---

**CRITERION 4: Executive Communication**

**Description:**
Communicates concisely and confidently with data-driven reasoning.

**Does not meet expectations:**
The learner rambles, avoids using data to support claims, or responds defensively when challenged on weak points.

**Partially meets expectations:**
The learner communicates reasonably well but may include some filler language, lack conciseness, or miss opportunities to support claims with data.

**Fully meets expectations:**
The learner provides direct, concise answers supported by data, responds to probing questions with additional evidence, and demonstrates confident executive communication style.

---

## UPLIMIT ACCESSIBILITY FEATURES

**Built-in Platform Accessibility:**
- ✅ Text-based chat interface (keyboard accessible by default)
- ✅ Screen reader compatible (standard Uplimit AI Roleplay)
- ✅ No time limits enforced (students control pacing, can pause/resume)
- ✅ Conversation history saved (students can review entire exchange)

**Formative Assessment Note:**
This roleplay is explicitly formative (not graded) to reduce anxiety and encourage experimentation. Students can retry multiple times to refine their pitch before writing the final memo.

---

### Element 4: Text Response Question Configuration

**Element Type:** Text Response (File upload enabled)

---

## UPLIMIT CONFIGURATION

### Tab 1: Instructions

**Question:**
```
Submit your 1-page Revenue Ecosystem Reflection Memo here.
```

**Additional Instructions (optional):**
```
Before submitting, check that you have:
- Explained sport's unique revenue characteristics
- Analyzed at least 3 revenue streams
- Identified 2-3 investment decision factors
- Applied concepts from this week's content
- Used professional business writing (memo format)
- Stayed within 500-word limit
```

**Template Upload:** No template provided

---

### Tab 2: Criteria (Feedback Rubric)

**Uplimit Configuration:**
- ✅ Enable automated AI grading
- ✅ Include evaluation levels
- ✅ Apply points (40 points total)

---

**CRITERION 1: Revenue Stream Analysis**

**Points:** 10

**Description:**
Accurately describes and analyzes at least 3 revenue streams with understanding of interdependencies.

**Does not meet expectations (0 pts):**
The learner analyzes fewer than 3 streams, provides minimal analysis, or treats streams as independent silos without showing interdependencies.

**Partially meets expectations (5 pts):**
The learner analyzes 3 streams but may lack depth or miss some key interdependencies and unique characteristics.

**Fully meets expectations (10 pts):**
The learner accurately describes and analyzes 3+ revenue streams, demonstrating clear understanding of interdependencies and unique characteristics of sport's revenue model.

---

**CRITERION 2: Investment Factors**

**Points:** 10

**Description:**
Identifies 2-3 specific, well-justified investment decision factors supported by evidence.

**Does not meet expectations (0 pts):**
The learner provides generic or vague factors without supporting evidence from course content, or identifies fewer than 2 factors.

**Partially meets expectations (5 pts):**
The learner identifies 2-3 reasonable factors with some justification but may lack specificity or full support from course evidence.

**Fully meets expectations (10 pts):**
The learner identifies 2-3 specific, defensible factors that would influence investment decision, clearly supported with evidence from course content.

---

**CRITERION 3: Application of Concepts**

**Points:** 10

**Description:**
Effectively applies concepts from executive session, readings, and case study.

**Does not meet expectations (0 pts):**
The learner makes minimal or no reference to course content, relying primarily on general business knowledge.

**Partially meets expectations (5 pts):**
The learner applies some course concepts but may miss opportunities to make deeper connections or reference specific case data.

**Fully meets expectations (10 pts):**
The learner effectively applies concepts from executive session, readings, and Predators case, making relevant and specific connections.

---

**CRITERION 4: Business Communication**

**Points:** 10

**Description:**
Professional memo format with clear, concise writing appropriate for executive audience.

**Does not meet expectations (0 pts):**
The learner does not use memo format, exceeds word limit significantly, or uses unclear/unprofessional communication style.

**Partially meets expectations (5 pts):**
The learner uses memo format but may have minor formatting issues, slightly exceed word limit, or have some clarity issues.

**Fully meets expectations (10 pts):**
The learner uses professional memo format, writes clearly and concisely with appropriate tone for executive audience, and stays within 500-word limit.

---

**Total Points:** 40

---

### Element 5: Details - Rubric Examples Content
```
Title: Rubric Details & Example Excerpts

[Expand to see evaluation criteria and examples]

## Revenue Stream Analysis (10 points)

Accurately describes and analyzes at least 3 revenue streams with understanding of interdependencies.

**Does not meet expectations (0 pts):**
The learner analyzes fewer than 3 streams, provides minimal analysis, or treats streams as independent silos without showing interdependencies.

**Partially meets expectations (5 pts):**
The learner analyzes 3 streams but may lack depth or miss some key interdependencies and unique characteristics.

**Fully meets expectations (10 pts):**
The learner accurately describes and analyzes 3+ revenue streams, demonstrating clear understanding of interdependencies and unique characteristics of sport's revenue model.

**Example Excerpt (Fully Meets):**
"Media rights generate 55% of NHL revenue, but this value depends entirely on
competitive balance maintained through revenue sharing. Without sharing, wealthy
teams would monopolize talent, creating predictable outcomes that decrease media
value for all. The Predators case shows how market selection dramatically affects
but must compete for scarce local sponsorship dollars..."

---

## Investment Factors (10 points)

Identifies 2-3 specific, well-justified investment decision factors supported by evidence.

**Does not meet expectations (0 pts):**
The learner provides generic or vague factors without supporting evidence from course content, or identifies fewer than 2 factors.

**Partially meets expectations (5 pts):**
The learner identifies 2-3 reasonable factors with some justification but may lack specificity or full support from course evidence.

**Fully meets expectations (10 pts):**
The learner identifies 2-3 specific, defensible factors that would influence investment decision, clearly supported with evidence from course content.

**Example Excerpt (Fully Meets):**
"Two factors would drive my investment decision: (1) Revenue sharing stability—
leagues with proven revenue sharing models (like the NFL) protect downside risk,
and (2) Emerging stream potential—teams with rights to betting partnerships and
digital content can capture high-growth revenue outside traditional sharing pools."

---

## Application of Concepts (10 points)

Effectively applies concepts from executive session, readings, and case study.

**Does not meet expectations (0 pts):**
The learner makes minimal or no reference to course content, relying primarily on general business knowledge.

**Partially meets expectations (5 pts):**
The learner applies some course concepts but may miss opportunities to make deeper connections or reference specific case data.

**Fully meets expectations (10 pts):**
The learner effectively applies concepts from executive session, readings, and Predators case, making relevant and specific connections.

**Example Excerpt (Fully Meets):**
"As Kevin Abrams noted in the executive session, 'We're a $10 billion mom and pop
shop'—this captures sport's unique tension between massive valuations and
relationship-driven operations. The Predators case reinforces this: market feasibility
depends heavily on local demographics, corporate base, marketing effectiveness,
and the revenue ecosystem unique to each potential city."

---

## Business Communication (10 points)

Professional memo format with clear, concise writing appropriate for executive audience.

**Does not meet expectations (0 pts):**
The learner does not use memo format, exceeds word limit significantly, or uses unclear/unprofessional communication style.

**Partially meets expectations (5 pts):**
The learner uses memo format but may have minor formatting issues, slightly exceed word limit, or have some clarity issues.

**Fully meets expectations (10 pts):**
The learner uses professional memo format, writes clearly and concisely with appropriate tone for executive audience, and stays within 500-word limit.

**Example Format (Fully Meets):**
TO: Brookfield Capital Investment Committee
FROM: [Name], Sports Business Consultant
DATE: [Current Date]
RE: Professional Sports Team Investment Analysis

[Body uses headers, bullet points, and bold text strategically for scannability]

---

## Total Points: 40

| Criterion | Points | Weight |
|-----------|--------|--------|
| Revenue Stream Analysis | 10 | 25% |
| Investment Factors | 10 | 25% |
| Application of Concepts | 10 | 25% |
| Business Communication | 10 | 25% |
| **Total** | **40** | **100%** |

**AI Feedback Bonus (Optional):**
- AI Writing Assistant used: +1 pt
- **Maximum Total: 41 pts**
```

---

### Element 6: AI Chat Widget Configuration
- **Widget Name:** "Writing Assistant"
- **System Prompt:** "You are a helpful writing coach for MBA students. Provide feedback and suggestions on business memo writing, structure, and analysis. Do NOT write content for students. Instead, ask questions to help them clarify their thinking. Focus on: clear executive communication, logical argumentation, evidence-based reasoning, and concise writing. If students ask you to write their memo, redirect them to develop their own analysis with your guidance."
- **Welcome Message:** "Need help with your reflection memo? I can help you organize your thoughts, strengthen your arguments, or improve your business writing. What would you like to work on?"
- **Show System Prompt:** No

**Design Rationale:**
- **Infobox** provides crystal-clear instructions and expectations (QM Standard 3)
- **AI Roleplay** offers formative practice before summative assessment (UDL scaffolding, feedback for learning)
- **Text Response with rubric** aligns assessment to Bloom's level (Analysis) and stated WLOs
- **Rubric** ensures transparent, consistent evaluation (QM Standard 3, UDL clarity)
- **AI grading** enables timely feedback at scale while maintaining rigor
- **Details** makes rubric fully transparent (students know exactly what's expected)
- **AI Chat** provides writing support without doing the work for students (UDL scaffolding)
- Authentic task (executive memo to investors) connects to real-world practice
- Word limit ensures concision (professional communication skill)
- Measures all 4 WLOs (comprehensive assessment of Week 1 learning)
- **Practice-before-performance model**: AI Roleplay (Element 3) lets students rehearse arguments and receive feedback before submitting final memo (Element 4)

---

## Element 7: CFL Project Milestone 1 Instructions

### ⓘ Infobox Content

```markdown
Title: 🏈 CFL Expansion Project - Milestone 1: Market Selection & Revenue Projections

**Individual Deliverable:** Market Analysis Brief (2-3 pages)
**Weight:** 15% of total project grade (15 points)
**Due:** End of Week 1

Your submission should include:

**1. City Selection & Justification**
- Which city are you proposing for CFL expansion?
- Population, demographics, existing sports landscape
- Corporate base for sponsorship potential
- Stadium/venue options
- Historical CFL presence or football culture

**2. 5-Year Revenue Projections**
Using this week's revenue stream framework, project Year 1-5 revenue:
- Media rights allocation (CFL revenue sharing model)
- Ticketing (capacity, pricing, attendance projections)
- Sponsorship (local market potential)
- Merchandising (new market dynamics)
- Betting partnerships (provincial regulations)

**3. Competitive Analysis**
- What other sports/entertainment competes for the same dollars?
- How does CFL positioning differ from NHL, NBA, MLS in this market?

**Suggested Cities:** Halifax, Quebec City, Saskatoon, London ON, Moncton, or propose your own!

📋 **Full Project Details:** [CFL Expansion Project Guide](../../shared-resources/cfl-expansion-project.md)
```

---

## Element 8: Milestone 1 File Upload

**Uplimit Configuration:**
- **Element Type:** File Upload
- **Allowed Formats:** PDF, DOCX, Google Docs link
- **Individual Submission:** One submission per student

**Submission Instructions:**
```markdown
## Milestone 1 Submission

Upload your Market Analysis Brief here.

**Requirements:**
- 2-3 pages (excluding title page and references)
- Professional formatting (headers, page numbers)
- Your name on title page

**Filename Format:** `LastName_M1_MarketAnalysis.pdf`

**Rubric Preview:**
| Criterion | Points |
|-----------|--------|
| City Selection Justification | 5 |
| Revenue Projections (5 streams) | 5 |
| Competitive Analysis | 3 |
| Professional Presentation | 2 |
| **Total** | **15** |
```


