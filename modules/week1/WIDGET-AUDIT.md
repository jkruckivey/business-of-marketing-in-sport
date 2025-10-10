# Week 1 Widget Audit Report
**Date:** 2025-10-09
**Purpose:** Verify widget inventory, name consistency, and learner-facing introductions

---

## Widget Inventory Comparison

### Storyboard References (Module 3 - Core Content)

| Element | Widget Name in Storyboard | File Referenced | Status | Actual File Exists? |
|---------|---------------------------|----------------|--------|-------------------|
| 4 | Revenue Mix Slider | `revenue-mix-slider.html` | ✅ Required | ✅ YES - modules/week1/module-3/widgets/revenue-mix-slider.html |
| 6 | Media Deal Calculator | `media-deal-calculator.html` | 🟡 Recommended | ❌ NO - File not found |
| 11 | Streaming Wars Decision Game | `streaming-wars-game.html` | 🟢 Optional | ❌ NO - Not built (Phase 3) |
| 13 | Dynamic Pricing Simulator | `dynamic-pricing-simulator.html` | ✅ Required | ✅ YES - modules/week1/module-3/widgets/dynamic-pricing-simulator.html |
| 16 | Stadium Revenue Optimizer | `stadium-revenue-optimizer.html` | 🟡 Recommended | ❌ NO - File not found |
| 21 | Sponsorship ROI Calculator | `sponsorship-roi-calculator.html` | ✅ Required | ✅ YES - modules/week1/module-3/widgets/sponsorship-roi-calculator.html |
| 26 | Betting Legalization Timeline | `betting-timeline.html` | 🟢 Optional | ❌ NO - Not built (Phase 3) |
| 29 | Ecosystem Cascade Simulator | `ecosystem-cascade-simulator.html` | ✅ Required | ✅ YES - modules/week1/module-3/widgets/ecosystem-cascade-simulator.html |

### Module 4 Widget Reference

| Module | Widget Name in Storyboard | File Referenced | Status | Actual File Exists? |
|--------|---------------------------|----------------|--------|-------------------|
| Module 4 | Revenue Empire Builder | `revenue-empire-builder.html` | 🟡 Recommended | ❌ NO - File not found |

---

## Actual Widget Files Found (Not in Storyboard)

### Module 1 Widgets (10 files)
- ✅ `business-model-comparator.html`
- ✅ `case-study-rogers-tsn.html`
- ✅ `completion-tracker.html`
- ✅ `executive-profile.html`
- ✅ `learning-outcomes.html`
- ✅ `market-entry-simulator.html`
- ✅ `reading-checklist.html`
- ✅ `revenue-crisis-simulator.html`
- ✅ `revenue-stream-mapper.html`
- ✅ `rights-deal-negotiation.html`

### Module 2 Widgets (4 files)
- ✅ `media-rights-calculator.html` ⚠️ Should this be in Module 3 as "Media Deal Calculator"?
- ✅ `platform-comparison.html`
- ✅ `property-selector.html`
- ✅ `team-charter.html`

### Module 3 Widgets (6 files)
- ✅ `betting-market-simulator.html` ⚠️ Similar to "Betting Legalization Timeline"?
- ✅ `dynamic-pricing-simulator.html` ✅ Matches storyboard
- ✅ `ecosystem-cascade-simulator.html` ✅ Matches storyboard
- ✅ `revenue-canvas-builder.html`
- ✅ `revenue-mix-slider.html` ✅ Matches storyboard
- ✅ `sponsorship-roi-calculator.html` ✅ Matches storyboard

### Module 4 Widgets (4 files)
- ✅ `athlete-brand-calculator.html`
- ✅ `competitive-mapper.html`
- ✅ `emerging-sport-investment.html`
- ✅ `positioning-builder.html`

### Module 5 Widgets (3 files)
- ✅ `peer-evaluation.html`
- ✅ `pitch-checklist.html`
- ✅ `presentation-timer.html`

---

## Issues Identified

### 🔴 Critical Issues

1. **Missing Required Widget**: `media-deal-calculator.html` (Element 6)
   - **Status:** Required in storyboard, file not found
   - **Possible Solution:** Use `media-rights-calculator.html` from module-2/widgets?
   - **Action:** Verify if media-rights-calculator is the same widget

2. **Missing Recommended Widget**: `stadium-revenue-optimizer.html` (Element 16)
   - **Status:** Recommended in storyboard, file not found
   - **Action:** Build widget OR mark as Phase 3 (optional)

3. **Missing Recommended Widget**: `revenue-empire-builder.html` (Module 4)
   - **Status:** Recommended in storyboard, file not found
   - **Action:** Build widget OR use existing alternatives

### 🟡 Naming Inconsistencies

1. **Media Deal Calculator vs Media Rights Calculator**
   - Storyboard: `media-deal-calculator.html`
   - Actual file: `media-rights-calculator.html` (in module-2)
   - **Action:** Rename file OR update storyboard

2. **Betting Timeline vs Betting Market Simulator**
   - Storyboard: `betting-timeline.html` (timeline visualization)
   - Actual file: `betting-market-simulator.html` (market simulator)
   - **Action:** Clarify if these are different widgets or same widget with name mismatch

### 🟢 Optional Widgets (Phase 3 - Not Built Yet)

1. `streaming-wars-game.html` - Not built (expected)
2. `betting-timeline.html` - Not built, but `betting-market-simulator.html` exists

---

## Widget Usage by Module

### Module 1: Welcome & Learning Objectives
**Widgets in files:** 10 widgets (business-model-comparator, case-study-rogers-tsn, etc.)
**Widgets in storyboard:** 0 widgets referenced
**Issue:** Storyboard doesn't reference any Module 1 widgets. Are these used in the actual HTML pages?

### Module 2: Executive Leader Perspective
**Widgets in files:** 4 widgets (media-rights-calculator, platform-comparison, property-selector, team-charter)
**Widgets in storyboard:** 0 widgets referenced in Module 2 section
**Issue:** Storyboard doesn't reference Module 2 widgets

### Module 3: Core Content - Revenue Streams
**Widgets in storyboard:** 8 widgets referenced
**Widgets in files:** 6 widgets exist
**Match rate:** 3/8 exact matches (37.5%)
**Issue:** 5 widgets referenced but missing or misnamed

### Module 4: Interactive Activity
**Widgets in storyboard:** 1 widget (revenue-empire-builder)
**Widgets in files:** 4 widgets (athlete-brand-calculator, competitive-mapper, emerging-sport-investment, positioning-builder)
**Issue:** Storyboard doesn't reference existing Module 4 widgets

### Module 5: Assessment
**Widgets in storyboard:** 0 widgets referenced
**Widgets in files:** 3 widgets (peer-evaluation, pitch-checklist, presentation-timer)
**Issue:** Storyboard doesn't reference Module 5 widgets

---

## Recommendations

### Immediate Actions

1. **Resolve Media Calculator Naming**
   - Check if `media-rights-calculator.html` (module-2) is the same as `media-deal-calculator.html` (storyboard Element 6)
   - If yes: Move file to module-3 and rename, OR update storyboard to reference module-2 file
   - If no: Build `media-deal-calculator.html` as specified

2. **Clarify Betting Widget**
   - Check if `betting-market-simulator.html` can replace `betting-timeline.html` (Element 26)
   - If yes: Update storyboard to reference correct file
   - If no: Mark as Phase 3 (optional, not built yet)

3. **Update Storyboard to Reference Existing Widgets**
   - Module 1: Decide which of the 10 widgets should be in storyboard
   - Module 2: Decide which of the 4 widgets should be in storyboard
   - Module 4: Update to reference existing widgets (athlete-brand-calculator, etc.)
   - Module 5: Update to reference existing widgets (peer-evaluation, etc.)

4. **Build or Mark Optional**
   - `stadium-revenue-optimizer.html` - Build OR mark as Phase 3
   - `revenue-empire-builder.html` - Build OR remove from storyboard

### Learner-Facing Introduction Text (Missing)

Currently, the storyboard provides:
- Widget purpose
- How it works
- Learning objectives

**Missing:** Explicit learner-facing introduction text that appears BEFORE the widget, such as:

> "In this interactive activity, you'll practice **MLO 1.1: Map the major revenue streams in professional sport**. Use the Revenue Mix Slider to build your own revenue portfolio and discover the trade-offs between high-growth (high-risk) and stable revenue streams. This hands-on experience will help you understand why different leagues prioritize different revenue strategies."

**Action:** Add learner-facing introduction for all 8 Module 3 widgets (and any others included in final storyboard)

---

## Next Steps

1. ✅ Complete this audit (DONE)
2. ⭕ Verify media-rights-calculator vs media-deal-calculator
3. ⭕ Verify betting-market-simulator vs betting-timeline
4. ⭕ Decide which widgets to include in storyboard (all modules)
5. ⭕ Add learner-facing introduction text for all included widgets
6. ⭕ Update storyboard with corrections and additions
7. ⭕ Build missing required/recommended widgets OR mark as Phase 3

---

**Audit Complete:** 2025-10-09
**Files Audited:** 27 widget HTML files, 1 storyboard document
**Issues Found:** 3 critical, 2 naming inconsistencies, multiple missing references
