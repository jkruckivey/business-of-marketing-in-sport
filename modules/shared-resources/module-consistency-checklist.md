# Module Consistency Checklist
**Version:** 1.0.0 | **Last Updated:** 2026-01-14

## Purpose
Ensures consistent structure across the same module type in each week. Use this checklist when creating or auditing storyboards.

---

## Naming Conventions

### File Names (MUST match)
| Module | Standard Name | Notes |
|--------|--------------|-------|
| 0 | `module-0-bridge-in.md` | |
| 1 | `module-1-welcome.md` | |
| 2 | `module-2-executive.md` | NOT "executives" (plural) |
| 3 | `module-3-core-content.md` | |
| 4 | `module-4-interactive.md` | |
| 5 | `module-5-case-study.md` | |
| 6 | `module-6-assessment.md` | |
| 7 | `module-7-wrap-up.md` | |

### Known Inconsistencies to Fix
| Week | Current Name | Should Be |
|------|-------------|-----------|
| 3 | `module-1.5-executive.md` | Move content to `module-2-executive.md` |
| 3 | `module-2-sponsorship-framework.md` | Rename to `module-3-core-content.md` |
| 3 | `module-3-betting-economics.md` | Merge into `module-3-core-content.md` or create Part 2 |
| 3 | `module-4-case-study.md` | Rename to `module-5-case-study.md` |
| 3 | `module-5-strategy-memo.md` | Rename to `module-6-assessment.md` |
| 5 | `module-2-executives.md` | Rename to `module-2-executive.md` (remove 's') |

---

## Module 0: Bridge-In

### Required Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 1 | **Video** | Hook/scenario video (2-3 min) | ⬤ Required |
| 2 | **AI Roleplay** | Diagnostic roleplay | ◐ Recommended |
| 3 | **Infobox (Callout)** | Problem statement | ⬤ Required |
| 4 | **iFrame Widget** | Pre-assessment quiz | ⬤ Required |
| 5 | **Infobox (Insight)** | Results interpretation | ◐ Recommended |

### Optional Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 6 | **iFrame Widget** | Graphic Novel 1 | ◐ Recommended |
| 7 | **iFrame Widget** | Graphic Novel 2 | ◐ Recommended |

### Checklist
- [ ] Hook video exists with caption file
- [ ] Pre-assessment quiz widget embedded
- [ ] Infobox sets up the week's central question
- [ ] Graphic novels introduce anchor project context (Week 1 only has both; others have 1)

---

## Module 1: Welcome & Learning Outcomes

### Required Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 1 | **Infobox (Callout)** | Display all 4 WLOs | ⬤ Required |
| 2 | **Text** | Week introduction (2-3 paragraphs) | ⬤ Required |

### Optional Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 3 | **Tiles** | Preview of key topics (4 tiles) | ◐ Recommended |
| 4 | **iFrame Widget** | Learning Outcomes Widget | ◐ Recommended |
| 5 | **iFrame Widget** | CFL Project Tie-In | ◐ Recommended |

### Checklist
- [ ] All 4 WLOs listed with Bloom's level
- [ ] CLO connection stated ("This week focuses on CLO X")
- [ ] Introduction text connects to previous week
- [ ] No milestone info here (moved to Module 7)

---

## Module 2: Executive Interview

### Required Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 1 | **Text** | Connecting intro | ⬤ Required |
| 2 | **Infobox (Callout)** | Executive bio + viewing guide | ⬤ Required |
| 3 | **Video** | Executive interview (30-60 min) | ⬤ Required |
| 3A | **Practice Quiz** | Interview comprehension (5 questions) | ⬤ Required |

### Optional Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 4 | **Details** | Transcript & extended bio | ○ Optional |
| 5 | **AI Chat Widget** | "Executive Q&A" | ○ Optional |

### Checklist
- [ ] Connecting text references previous module
- [ ] Infobox includes: bio, viewing guide with 4 bullet points, WLO alignment
- [ ] Video has caption file (.srt or .vtt)
- [ ] Practice Quiz has 5 questions with correct/incorrect feedback
- [ ] AI Chat widget named "[Executive Name] Q&A" or "Executive Q&A"

### Practice Quiz Format
```
### Question X: [Topic]

[Question text]

A) [Option]
B) [Option]
C) [Option] ✅
D) [Option]

**Feedback (Correct):** [Explanation]

**Feedback (Incorrect):** [Guidance to correct answer]
```

---

## Module 3: Core Content

### Required Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 1 | **Text** | Module introduction | ⬤ Required |
| 2+ | **Video** | Concept videos (2 min each) | ⬤ Required |
| XA | **Practice Quiz** | After each major section (3-5 questions) | ⬤ Required |

### Structure Pattern
Core content modules follow this repeating pattern:
1. Section intro text
2. Video (2 min)
3. Widget or interactive element
4. **Practice Quiz** (Element XA after content block)
5. Discussion or reflection prompt
6. Repeat for next section

### Optional Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| - | **iFrame Widget** | Interactive exercises | ⬤-◐ Varies |
| - | **Discussion** | Peer discussion prompt | ◐ Recommended |
| - | **Details** | Deep dive content | ○ Optional |
| - | **AI Chat Widget** | "Test Your Understanding" | ○ Optional |

### Checklist
- [ ] Clear section structure (not one long narrative)
- [ ] At least 2 concept videos with captions
- [ ] At least 2 Practice Quizzes placed after major content sections
- [ ] Interactive widget if week includes one
- [ ] Connects to WLOs explicitly
- [ ] Recommended readings in accordion at end

---

## Module 4: Interactive Simulation

### Required Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 1 | **Text** | Simulation introduction | ⬤ Required |
| 2 | **Infobox (Callout)** | Simulation overview | ⬤ Required |
| 3 | **iFrame Widget** | Primary simulation | ⬤ Required |
| 4 | **Text** | Reflection prompt | ◐ Recommended |

### Optional Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 5 | **Discussion** | Share simulation results | ◐ Recommended |
| 6 | **Details** | Advanced simulation features | ○ Optional |
| 7 | **AI Chat Widget** | Simulation support | ○ Optional |

### Checklist
- [ ] Pre-widget context text explains purpose
- [ ] Widget has WCAG 2.2 AA compliance
- [ ] Estimated time commitment stated
- [ ] Reflection prompt after widget
- [ ] Connection to anchor project made explicit

---

## Module 5: Case Study

### Required Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 1 | **Text** | Connecting intro | ⬤ Required |
| 2 | **Infobox (Callout)** | Case overview + reading instructions | ⬤ Required |
| 3 | **Video** | Case analysis framework (2 min) | ⬤ Required |
| 4 | **Text** | Case narrative | ⬤ Required |
| 5 | **Table** | Benchmarks/comparisons | ◐ Recommended |
| 6 | **Details** | Exhibit A (financial data) | ⬤ Required |
| 7 | **Text** | Case analysis continuation | ⬤ Required |
| 8 | **Details** | Exhibit B (projections) | ⬤ Required |
| 9 | **Details** | Exhibit C (stakeholders) | ◐ Recommended |
| 10 | **Text** | Discussion questions | ◐ Recommended |
| 11 | **AI Roleplay** | Defend recommendation | ◐ Recommended |
| 12 | **Text** | Module summary | ⬤ Required |

### Checklist
- [ ] Financial disclosure if using scaled/modeled figures
- [ ] Composite quote disclaimer if using fictional stakeholder quotes
- [ ] Exhibits labeled A, B, C consistently
- [ ] Discussion questions aligned to WLOs
- [ ] AI Roleplay is formative (ungraded) - graded memo in Module 6
- [ ] Sources cited for financial data

---

## Module 6: Assessment

### Required Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 1 | **Text** | Connecting intro | ⬤ Required |
| 2 | **Infobox (Assessment)** | Assessment overview (purple variant) | ⬤ Required |
| 3-5 | **Text Response** | Micro-step scaffolding (optional) | ◐ Recommended |
| X | **AI Roleplay** | Practice pitch (formative) | ◐ Recommended |
| X | **File Response** | Submission | ⬤ Required |
| X | **Infobox (Next Steps)** | What's Next (green variant) | ⬤ Required |

### Checklist
- [ ] Assessment infobox uses purple variant
- [ ] Points clearly stated (typically 40 points)
- [ ] Rubric criteria listed or linked
- [ ] AI Roleplay for practice before submission
- [ ] File upload configured with rubric grading
- [ ] What's Next infobox uses green variant

---

## Module 7: Wrap-Up

### Required Elements
| # | Element | Purpose | Badge |
|---|---------|---------|-------|
| 1 | **Infobox (Callout)** | Key takeaways (5 insights) | ⬤ Required |
| 2 | **Text** | Anchor project milestone intro | ⬤ Required |
| 2A | **iFrame Widget** | Milestone support tool (if applicable) | ◐ Recommended |
| 3 | **Infobox (Assessment)** | Milestone brief (purple variant) | ⬤ Required |
| 4 | **File Response** | Milestone submission | ⬤ Required |
| 5 | **Infobox (Next Steps)** | What's Next (green variant) | ⬤ Required |
| 6 | **Details** | Recommended readings | ◐ Recommended |

### Checklist
- [ ] Key takeaways summarize week (5 bullet points)
- [ ] Milestone brief includes point value
- [ ] Transition to next week is explicit
- [ ] Recommended readings in accordion

---

## Cross-Module Consistency Checks

### Version Headers
Every module must start with:
```markdown
# MODULE X: [Title]
**Version:** X.X.X | **Last Updated:** YYYY-MM-DD

### Version X.X.X Changes
- **[ACTION]:** Description
```

### Element Tables
Every module must have an element table after the header:
```markdown
| Order | Element | Content/Purpose | Source | Implementation Notes |
|-------|---------|----------------|--------|---------------------|
| 1 | **▬ Text** ⬤ Required | ... | ... | ... |
```

### Content Priority Badges
Use consistently:
- ⬤ **Required** - Core content
- ◐ **Recommended** - Important enhancement
- ○ **Optional** - Supplemental/progressive disclosure

### Element Numbering
- Main elements: 1, 2, 3, 4...
- Sub-elements (like Practice Quizzes): 3A, 6A, 9A...
- Never skip numbers

### Practice Quiz Placement
- After executive interview: Element 3A
- After core content sections: After each major video/widget block
- Format: 4-5 questions, correct answer marked with ✅
- Include Feedback (Correct) and Feedback (Incorrect) for each

---

## Audit Process

### Weekly Module Audit
For each week, verify:
1. [ ] All 8 modules present (0-7)
2. [ ] File names follow conventions
3. [ ] Version headers present
4. [ ] Element tables present
5. [ ] Required elements exist
6. [ ] Practice Quizzes placed correctly
7. [ ] WLO alignment stated

### Cross-Week Audit
Compare same module across weeks:
1. [ ] Module 0s have same structure
2. [ ] Module 1s have same structure
3. [ ] Module 2s have same structure (executive interview pattern)
4. [ ] Module 6s have same structure (assessment pattern)
5. [ ] Module 7s have same structure (wrap-up pattern)

---

## Quick Reference: Week 3 Restructuring Needed

Week 3 has non-standard naming. To align:

| Current | Target | Action |
|---------|--------|--------|
| module-1.5-executive.md | module-2-executive.md | Rename + merge Andrew Sneyd content |
| module-2-sponsorship-framework.md | module-3-core-content.md | Rename |
| module-3-betting-economics.md | (merge into above) | Merge as Part 2 of Module 3 |
| module-4-case-study.md | module-5-case-study.md | Rename |
| module-5-strategy-memo.md | module-6-assessment.md | Rename |

---

**Prepared for:** Business of Sports Marketing Course
**Last Updated:** 2026-01-14
