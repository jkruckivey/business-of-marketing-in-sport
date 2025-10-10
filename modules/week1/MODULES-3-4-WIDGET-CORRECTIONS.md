# Modules 3 & 4 Widget Corrections
**Date:** 2025-10-09
**Focus:** Module 3 (Core Content) and Module 4 (Interactive Activity)

---

## Module 3: Core Content - Revenue Streams

### Current Status: 6 Widget Files Exist

| Widget File | Status | Storyboard Reference |
|------------|--------|---------------------|
| `revenue-mix-slider.html` | ✅ Built | ✅ Referenced correctly |
| `dynamic-pricing-simulator.html` | ✅ Built | ✅ Referenced correctly |
| `sponsorship-roi-calculator.html` | ✅ Built | ✅ Referenced correctly |
| `ecosystem-cascade-simulator.html` | ✅ Built | ✅ Referenced correctly |
| `betting-market-simulator.html` | ✅ Built | ⚠️ NOT in storyboard (should replace betting-timeline) |
| `revenue-canvas-builder.html` | ✅ Built | ⚠️ NOT in storyboard |

### Widgets Referenced in Storyboard But Missing

| Widget Name in Storyboard | File Expected | Status | Proposed Fix |
|---------------------------|---------------|--------|--------------|
| Media Deal Calculator | `media-deal-calculator.html` | ❌ Missing | ✅ **Use** `media-rights-calculator.html` from module-2/widgets (RENAME/MOVE) |
| Stadium Revenue Optimizer | `stadium-revenue-optimizer.html` | ❌ Missing | 🟡 **Mark as Phase 3** (optional, not built) |
| Streaming Wars Decision Game | `streaming-wars-game.html` | ❌ Missing | 🟢 **Already marked Phase 3** (optional) |
| Betting Legalization Timeline | `betting-timeline.html` | ❌ Missing | ✅ **Replace with** `betting-market-simulator.html` (different widget, but covers betting) |

---

## Module 4: Interactive Activity

### Current Status: 4 Widget Files Exist

| Widget File | Purpose | Storyboard Reference |
|------------|---------|---------------------|
| `athlete-brand-calculator.html` | Calculate athlete brand value | ⚠️ NOT in storyboard |
| `competitive-mapper.html` | Map competitive landscape | ⚠️ NOT in storyboard |
| `emerging-sport-investment.html` | Analyze emerging sports | ⚠️ NOT in storyboard |
| `positioning-builder.html` | Build brand positioning | ⚠️ NOT in storyboard |

### Widget Referenced in Storyboard But Missing

| Widget Name in Storyboard | File Expected | Status | Proposed Fix |
|---------------------------|---------------|--------|--------------|
| Revenue Empire Builder | `revenue-empire-builder.html` | ❌ Missing | 🔴 **Need to build** OR **Replace** with one of the 4 existing widgets |

**Issue:** The storyboard describes Module 4 as focused on "Revenue Empire Builder" (a simulation where students allocate $50M budget across revenue streams), but this widget doesn't exist. Instead, we have 4 widgets related to branding/positioning.

**This suggests Module 4 content may have evolved from the original storyboard plan.**

---

## Recommended Fixes

### Module 3 Corrections

#### Fix 1: Rename Media Calculator (Element 6)
**Current storyboard reference:** `media-deal-calculator.html`
**Actual file:** `modules/week1/module-2/widgets/media-rights-calculator.html`

**Actions:**
1. Move file from `module-2/widgets/` to `module-3/widgets/`
2. OR update storyboard iFrame to reference module-2 path
3. Update storyboard text from "Media Deal Calculator" to "Media Rights Calculator"

**Learner-Facing Introduction Text:**
```markdown
### Interactive Activity: Media Rights Calculator

**Practice: MLO 1.1 (Map major revenue streams) & MLO 1.3 (Evaluate growth potential)**

You've just learned that media rights are the largest revenue stream for most leagues (40-60% of total revenue). Now it's time to understand what drives media rights valuations.

In this interactive calculator, you'll input key factors—league size, audience reach, advertising rates, and contract length—to calculate total media deal value. You'll see how variables like viewership and CPM (cost per thousand viewers) dramatically impact the final deal size.

**What you'll discover:**
- Why the NFL's $110B deal dwarfs other leagues
- How audience size and advertising rates multiply
- The difference between shared vs. local media revenue

**Time commitment:** 4 minutes
**Learning outcome practiced:** MLO 1.1 (Mapping revenue streams), MLO 1.3 (Evaluating growth potential)

[LAUNCH WIDGET]
```

#### Fix 2: Replace Betting Timeline with Betting Market Simulator (Element 26)
**Current storyboard reference:** `betting-timeline.html` (interactive map showing legalization spread)
**Actual file:** `betting-market-simulator.html` (market simulator for betting strategy)

**Actions:**
1. Update storyboard to reference `betting-market-simulator.html`
2. Update description to match what the simulator actually does
3. Keep as 🟢 Optional (Phase 3)

**Learner-Facing Introduction Text:**
```markdown
### Interactive Activity: Sports Betting Market Simulator

**Practice: MLO 1.1 (Map major revenue streams) & MLO 1.3 (Evaluate vulnerabilities and growth potential)**

Sports betting is the fastest-growing revenue stream (30-40% year-over-year growth) and represents a fundamental shift in how leagues monetize fan engagement. This simulator lets you explore betting market dynamics and strategic decisions.

In this activity, you'll make decisions about betting partnerships, data licensing deals, and media integration. You'll see how different strategies impact revenue, fan engagement, and risk exposure.

**What you'll discover:**
- How betting legalization creates revenue opportunities
- Trade-offs between official partnerships vs. open market
- Why leagues prioritize betting data licensing

**Time commitment:** 3 minutes
**Learning outcome practiced:** MLO 1.1 (Mapping revenue streams), MLO 1.3 (Evaluating growth potential and risks)

[LAUNCH WIDGET]
```

#### Fix 3: Add Revenue Canvas Builder (NEW - Not in storyboard)
**File exists:** `revenue-canvas-builder.html`

**Should this be added to Module 3?** This widget appears to be for building revenue models, which fits Module 3's focus.

**Learner-Facing Introduction Text (if added):**
```markdown
### Interactive Activity: Revenue Model Canvas Builder

**Practice: MLO 1.1 (Map major revenue streams) & MLO 1.3 (Debate vulnerabilities and growth potential)**

Now that you've explored individual revenue streams, it's time to design a complete revenue model. This canvas builder helps you visualize how different revenue streams work together in a professional sports organization.

In this activity, you'll allocate resources across the 5 major revenue streams, identify key partnerships, and map out revenue flow. You'll create a strategic canvas that shows how your revenue streams interconnect (ecosystem thinking).

**What you'll discover:**
- How revenue streams support each other
- Resource allocation trade-offs
- Strategic priorities based on market conditions

**Time commitment:** 5 minutes
**Learning outcome practiced:** MLO 1.1 (Mapping revenue streams), MLO 1.3 (Analyzing growth potential)

[LAUNCH WIDGET]
```

#### Fix 4: Mark Stadium Revenue Optimizer as Phase 3 (Optional)
**Current storyboard reference:** `stadium-revenue-optimizer.html` (🟡 Recommended)
**Status:** Not built

**Action:** Change priority from 🟡 Recommended to 🟢 Optional (Phase 3, not yet built)

---

### Module 4 Corrections

#### Current Storyboard Description (Module 4)
The storyboard describes Module 4 as:
- **Title:** "Interactive Activity - Revenue Empire Builder"
- **Widget:** A simulation where students allocate $50M budget across 5 revenue streams over 5 years
- **Purpose:** Apply MLO 1.1 and 1.3 through strategic budget decisions

#### Actual Widget Files (Module 4)
The actual widgets are focused on **branding and athlete marketing**:
1. `athlete-brand-calculator.html` - Calculate athlete brand value
2. `competitive-mapper.html` - Map competitive landscape
3. `emerging-sport-investment.html` - Analyze emerging sports opportunities
4. `positioning-builder.html` - Build brand positioning strategies

**These widgets align with Week 4 content (CLO 4: Build Athlete & Emerging Sport Brands), NOT Week 1/Module 4.**

#### Proposed Fix: Two Options

**Option A: Keep Storyboard as-is, Build Revenue Empire Builder**
- Build the `revenue-empire-builder.html` widget as specified
- Move the 4 existing widgets to Week 4 content
- Maintain current storyboard structure

**Option B: Update Storyboard to Match Existing Widgets**
- Remove Revenue Empire Builder from Module 4
- Simplify Module 4 to use one of the existing interactive widgets from Module 3
- OR create a different Module 4 activity (case discussion, reflection, etc.)
- Move the 4 branding widgets to Week 4 storyboard

**Recommendation:** **Option B** - Don't build a new widget if existing widgets work. Simplify Module 4 to be a reflection/application activity instead of a new simulation.

**Proposed Module 4 Revision:**
Instead of a simulation, make Module 4 a **reflective application activity** where students:
1. Review their work from Module 3 widgets (revenue mix slider, pricing simulator, etc.)
2. Write a short reflection connecting widget insights to the Canucks case (Module 5)
3. No new widget needed - builds on existing interactive experiences

---

## Summary of Changes Needed in Storyboard

### Module 3 (8 widgets total after changes)

| Element | Current Name | Corrected Name | File Path | Priority | Action |
|---------|-------------|----------------|-----------|----------|--------|
| 4 | Revenue Mix Slider | ✅ No change | `module-3/widgets/revenue-mix-slider.html` | 🔴 Required | Add learner intro |
| 6 | Media Deal Calculator | **→ Media Rights Calculator** | `module-2/widgets/media-rights-calculator.html` | 🟡 Recommended | Rename + Add learner intro |
| 11 | Streaming Wars Decision Game | ✅ No change | (Not built) | 🟢 Optional Phase 3 | Leave as-is |
| 13 | Dynamic Pricing Simulator | ✅ No change | `module-3/widgets/dynamic-pricing-simulator.html` | 🔴 Required | Add learner intro |
| 16 | Stadium Revenue Optimizer | ✅ No change | (Not built) | 🟢 **Change to Optional Phase 3** | Update priority |
| 21 | Sponsorship ROI Calculator | ✅ No change | `module-3/widgets/sponsorship-roi-calculator.html` | 🔴 Required | Add learner intro |
| 26 | Betting Legalization Timeline | **→ Betting Market Simulator** | `module-3/widgets/betting-market-simulator.html` | 🟢 Optional | Rename + Add learner intro |
| 29 | Ecosystem Cascade Simulator | ✅ No change | `module-3/widgets/ecosystem-cascade-simulator.html` | 🔴 Required | Add learner intro |

**Optional Addition:**
- **NEW Element (25a):** Revenue Canvas Builder | `module-3/widgets/revenue-canvas-builder.html` | 🟡 Recommended | Add to storyboard with learner intro

### Module 4 (Needs decision)

**Current:** References `revenue-empire-builder.html` (doesn't exist)

**Options:**
1. Build the widget as specified
2. Remove widget, make Module 4 a reflection activity
3. Replace with different interactive element

**Recommendation:** Option 2 (reflection activity, no new widget)

---

## Next Steps

1. ✅ Audit complete (THIS DOCUMENT)
2. ⭕ **User decision:** Module 4 approach (build new widget vs. reflection activity)
3. ⭕ Move/rename media-rights-calculator to module-3
4. ⭕ Write learner-facing introduction text for all Module 3 widgets
5. ⭕ Update storyboard with corrections
6. ⭕ Test all widget links and accessibility

---

**Document Complete:** 2025-10-09
**Modules Covered:** Module 3 (Core Content), Module 4 (Interactive Activity)
**Widgets Audited:** 10 files (6 in Module 3, 4 in Module 4)
**Changes Required:** 3 naming fixes, 1 priority change, 6 learner introductions needed
