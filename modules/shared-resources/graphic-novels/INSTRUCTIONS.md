# Graphic Novel Creation Instructions

**Purpose:** Step-by-step guide for creating course graphic novels using NotebookLM. Use this document to restart or continue the graphic novel creation process.

---

## Overview

Each week of the course has an accompanying graphic novel that introduces key concepts through visual storytelling. These are generated using Google's NotebookLM slide deck feature with a consistent art style.

**Art Style:** Retro Sports Illustrated (1970s-80s painted sports magazine aesthetic)
- Warm oranges, golden yellows, amber tones
- Visible brushstrokes (painted look, not digital/clean)
- Sports journalism aesthetic from vintage magazines
- Dramatic lighting and compositions

---

## File Structure

```
modules/shared-resources/graphic-novels/
├── INSTRUCTIONS.md          ← This file
├── PROMPTS.md               ← All NotebookLM prompts
├── 00-expansion-day-course-intro.md   ← Course intro comic script
├── 01-five-streams-week1.md           ← Week 1 comic script
├── 02-rogers-deal-week2.md            ← Week 2 comic script (to create)
├── 03-fanduel-week3.md                ← Week 3 comic script (to create)
├── 04-serena-week4.md                 ← Week 4 comic script (to create)
└── 05-hockey-hall-week5.md            ← Week 5 comic script (to create)
```

---

## Script Template

Each graphic novel script follows this structure:

```markdown
# [Title]: A [Context] Graphic Novel Script
**Week [#]: [Week Title]**
**Style:** Retro Sports Illustrated - 1970s-80s painted sports magazine look with warm colors and visible brushstrokes
**Purpose:** [Learning purpose of this comic]

---

[COVER PAGE]
Title: [COMIC TITLE]
Visual Description: [Detailed description of cover image, including character, setting, key visual elements. Specify aspect ratio 16:9.]

---

[PAGE 1]
Layout Note: [How panels are arranged on page]
Style Note: [Mood/color guidance for this page]

[PANEL 1]
Shot Type & Angle: [Wide shot, medium shot, close-up, etc.]
Visual Description: [Detailed description of what to render]
Caption: [Narrative text boxes]
Dialogue (CHARACTER): "[What they say]"

[PANEL 2]
...

---

[PAGE 2]
...

---

[END]
```

### Script Writing Rules

1. **Be explicit with labels** - Don't write "five rivers flowing toward arena." Write "five rivers labeled TICKETS, MEDIA, SPONSORS, MERCHANDISE, PREMIUM flowing toward arena."

2. **Use consistent naming** - Pick "RIVER" or "STREAM" and stick with it throughout.

3. **Specify counts explicitly** - Write "ONLY five revenue rivers" not just "five rivers" to prevent AI from adding extras.

4. **No Production Notes** - NotebookLM will try to render any text it sees. Remove all typography notes, font specifications, or technical instructions from the script.

5. **Clear dialogue attribution** - Format as `Dialogue (CHARACTER): "Text"` on its own line.

6. **Descriptive captions** - Use `Caption:` prefix for narrative text boxes.

7. **Panel descriptions are instructions** - Write them as clear visual directions, not prose.

---

## Creating a New Graphic Novel

### Step 1: Write the Script

1. Identify the week's key concepts to visualize
2. Create a narrative arc with protagonist, conflict, and resolution
3. Map concepts to visual moments (e.g., "5 revenue streams" = "5 rivers of light")
4. Write the script following the template above
5. Save as `XX-short-name-weekX.md` in the graphic-novels folder

**Character Guidelines:**
- Create diverse, professional protagonists
- Give them clear motivations tied to the week's business problems
- Use real organizations when possible (Nashville Predators, Rogers, etc.)
- Avoid historical inaccuracies (research team/league histories)

### Step 2: Prepare for NotebookLM

1. Review script for any production notes or technical text - REMOVE THEM
2. Check that all key elements have explicit labels
3. Verify counts are explicit ("ONLY five")
4. Ensure dialogue and captions are clearly formatted

### Step 3: Generate in NotebookLM

1. Go to [NotebookLM](https://notebooklm.google.com/)
2. Create a new notebook
3. Upload the script file as a source
4. Click "Generate" → "Slide Deck"
5. When prompted for description, paste the prompt from `PROMPTS.md`
6. Wait for generation (may take 1-2 minutes)

### Step 4: Review Output

Check for these common issues:

| Issue | How to Fix |
|-------|------------|
| Wrong labels | Edit script with more explicit labels, regenerate |
| Extra elements added | Add "ONLY [number]" constraints, regenerate |
| Text rendered as image | Remove production notes from script, regenerate |
| Missing panels | Ensure each [PANEL] has complete Visual Description |
| Wrong style | Reinforce "Retro Sports Illustrated" in prompt |
| Historical inaccuracy | Research and fix script, regenerate |

### Step 5: Export and Integrate

1. Export as PDF or download individual images
2. Upload to Uplimit course builder
3. Update the corresponding module storyboard with embed instructions
4. Add accessibility notes (alt text reference, transcript location)

---

## Placement in Course

| Comic | Placement | Storyboard Location |
|-------|-----------|---------------------|
| Expansion Day | Week 1, Module 0 | Element 2 (after video, before AI Roleplay) |
| Five Streams | Week 1, Module 0 | Element 7 (after quiz results, before transition) |
| Rogers Deal | Week 2, Module 0 | After quiz results coach |
| FanDuel | Week 3, Module 0 | After quiz results coach |
| Serena | Week 4, Module 0 | After quiz results coach |
| Hockey Hall | Week 5, Module 0 | After quiz results coach |

**Pattern:** Each weekly comic goes in Module 0 (Bridge-In) after the pre-assessment results, replacing the traditional module summary with visual storytelling.

---

## Storyboard Integration Template

Add this to each Module 0 storyboard after the quiz results element:

```markdown
## Element 6: Graphic Novel - "[Title]"

**Purpose:** Visual narrative that introduces the week's key concepts through storytelling.

**Graphic Novel:** "[Full Title]"

**Location:** `modules/shared-resources/graphic-novels/XX-filename.md`

**Implementation:** Generated using NotebookLM from the script. Upload resulting PDF or embed images in Uplimit.

**Story Synopsis:**
[2-3 sentence summary of the story and its connection to learning]

**Learning Connection:**
[How this narrative introduces week's concepts]

**Accessibility:**
- Full text script available in `XX-filename.md`
- Alt text for each panel included in script
- High contrast visual style (Retro Sports Illustrated aesthetic)

---

## Element 7: Transition Text - [Transition Title]

**Text Content:**

```markdown
### From Story to Strategy

[Transition paragraph connecting comic to upcoming learning]

**What You'll Master:**
- [Key concept 1]
- [Key concept 2]
- [Key concept 3]

[Motivating closing statement]
```
```

---

## Weekly Concepts to Visualize

### Week 1: The Business of Sport
- **Core Concept:** 5 revenue streams (media, ticketing, sponsorship, merchandise, betting/premium)
- **Visual Metaphor:** Five streams flowing into an arena
- **Protagonist:** Jessica Torres (Latina, 40s, CRO)
- **Script:** `01-five-streams-week1.md` ✅ COMPLETE

### Week 2: Media, Content & Fan Engagement
- **Core Concept:** Media rights valuation, streaming economics
- **Visual Metaphor:** The gamble of a massive rights deal
- **Protagonist:** Raj Sharma (South Asian, 50s, media executive)
- **Script:** `02-the-bet-week2.md` ✅ COMPLETE

### Week 3: Sponsorship & Betting
- **Core Concept:** Sponsorship activation, betting partnerships
- **Visual Metaphor:** Going "all in" on new revenue frontier
- **Protagonist:** Denise Carter (Black woman, 40s, VP Partnerships)
- **Script:** `03-all-in-week3.md` ✅ COMPLETE

### Week 4: Athletes, Brands & Emerging Sports
- **Core Concept:** Athlete brand equity, women's sports growth
- **Visual Metaphor:** Building a personal brand empire
- **Protagonist:** Maya Jordan (Black woman, 40s, athlete-entrepreneur)
- **Script:** `04-building-an-empire-week4.md` ✅ COMPLETE

### Week 5: Legacy, Culture & Future
- **Core Concept:** Heritage vs. innovation, future trends
- **Visual Metaphor:** Preserving history while embracing change
- **Protagonist:** Elena Kowalski (Ukrainian-Canadian, 50s, museum CEO)
- **Script:** `05-the-hall-week5.md` ✅ COMPLETE

---

## Restarting the Process

If starting fresh or continuing after a break:

1. **Read this file** for context and guidelines
2. **Check `PROMPTS.md`** for existing prompts and templates
3. **Review completed scripts** (00 and 01) for style reference
4. **Identify which weeks need scripts** (look for "TO CREATE" above)
5. **Write script** following template and rules
6. **Generate in NotebookLM** using corresponding prompt
7. **Update storyboard** with placement instructions
8. **Update PROMPTS.md** with final prompt used

---

## Quality Checklist

Before finalizing any graphic novel:

- [ ] Art style consistent (Retro Sports Illustrated)
- [ ] All key concepts visually represented
- [ ] Labels explicit and correct
- [ ] No extra elements added by AI
- [ ] Historical facts accurate
- [ ] Diverse, professional characters
- [ ] Story arc complete (conflict → resolution)
- [ ] Script saved in graphic-novels folder
- [ ] Prompt documented in PROMPTS.md
- [ ] Storyboard updated with placement
- [ ] Accessibility notes included

---

## Contact for Questions

These graphic novels were developed for the Business of Marketing in Sport MBA course. If you have questions about the process, refer to the conversation history or the course CLAUDE.md for context.
