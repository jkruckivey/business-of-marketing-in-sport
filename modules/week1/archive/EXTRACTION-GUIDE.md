# Storyboard Extraction Guide
**Manual extraction reference for uplimit-week1-storyboard-complete.md**

**Total Lines:** 2,196
**File:** `uplimit-week1-storyboard-complete.md`

---

## ✅ Already Extracted (3/13)

1. ✅ **Overview & Learning Outcomes** → `learning-design/overview-and-outcomes.md`
   - Lines: 31-51 (Course context)

2. ✅ **V3 Philosophy** → `learning-design/v3-philosophy.md`
   - Lines: 54-130 (Design principles & research)

3. ✅ **Module 1** → `module-content/module-1-welcome.md`
   - Lines: 144-209

---

## ⏳ Ready to Extract (10 remaining)

### Module Content Files

#### 4. Module 2: Executive Leader Perspective
**Target file:** `module-content/module-2-executive.md`
**Lines:** 211-285 (75 lines)
**Command:**
```bash
sed -n '211,285p' uplimit-week1-storyboard-complete.md > module-content/module-2-executive.md
```
**Add header:** "# Module 2: Executive Leader Perspective"

---

#### 5. Module 3: Revenue Streams ★ (LARGEST FILE)
**Target file:** `module-content/module-3-revenue-streams.md`
**Lines:** 286-1147 (862 lines)
**Command:**
```bash
sed -n '286,1147p' uplimit-week1-storyboard-complete.md > module-content/module-3-revenue-streams.md
```
**Add header:** "# Module 3: Core Content - Revenue Streams"
**Note:** This is the V3 Interactive-First module with all 8 widgets

---

#### 6. Module 4: Revenue Empire Builder
**Target file:** `module-content/module-4-activity.md`
**Lines:** 1148-1287 (140 lines)
**Command:**
```bash
sed -n '1148,1287p' uplimit-week1-storyboard-complete.md > module-content/module-4-activity.md
```
**Add header:** "# Module 4: Interactive Activity - Revenue Empire Builder"

---

#### 7. Module 5: NHL Canucks Case Study
**Target file:** `module-content/module-5-case-study.md`
**Lines:** 1288-1437 (150 lines)
**Command:**
```bash
sed -n '1288,1437p' uplimit-week1-storyboard-complete.md > module-content/module-5-case-study.md
```
**Add header:** "# Module 5: Case Study - NHL Vancouver Canucks"

---

#### 8. Module 6: Reflection Memo Assessment
**Target file:** `module-content/module-6-assessment.md`
**Lines:** 1438-1671 (234 lines)
**Command:**
```bash
sed -n '1438,1671p' uplimit-week1-storyboard-complete.md > module-content/module-6-assessment.md
```
**Add header:** "# Module 6: Assessment - Reflection Memo"

---

#### 9. Module 7: Wrap-Up & Preview
**Target file:** `module-content/module-7-wrapup.md`
**Lines:** 1672-1794 (123 lines)
**Command:**
```bash
sed -n '1672,1794p' uplimit-week1-storyboard-complete.md > module-content/module-7-wrapup.md
```
**Add header:** "# Module 7: Wrap-Up & Preview"

---

### Widget Files

#### 10. Widget Specifications
**Target file:** `widgets/widget-specifications.md`
**Lines:** 1795-1882 (88 lines)
**Command:**
```bash
sed -n '1795,1882p' uplimit-week1-storyboard-complete.md > widgets/widget-specifications.md
```
**Add header:** "# Widget Specifications"
**Note:** Phase 1, 2, 3 status and links to all 8 widgets

---

#### 11. Widget Implementation Guide
**Target file:** `widgets/widget-implementation.md`
**Lines:** Extract widget iFrame code blocks from Module 3
**Note:** Could extract all iFrame embed codes from Module 3 for quick reference
**Command:** (Manual - pull iFrame blocks from Module 3 lines 286-1147)

---

### Build Guide Files

#### 12. Content Preparation Checklist
**Target file:** `build-guide/content-checklist.md`
**Lines:** 1883-1960 (78 lines)
**Command:**
```bash
sed -n '1883,1960p' uplimit-week1-storyboard-complete.md > build-guide/content-checklist.md
```
**Add header:** "# Content Preparation Checklist"

---

#### 13. Build Timeline
**Target file:** `build-guide/build-timeline.md`
**Lines:** 1961-2011 (51 lines)
**Command:**
```bash
sed -n '1961,2011p' uplimit-week1-storyboard-complete.md > build-guide/build-timeline.md
```
**Add header:** "# Build Timeline (Recommended)"

---

#### 14. UDL & Accessibility Standards
**Target file:** `learning-design/udl-accessibility.md`
**Lines:** 2012-2196 (185 lines - end of file)
**Command:**
```bash
sed -n '2012,$p' uplimit-week1-storyboard-complete.md > learning-design/udl-accessibility.md
```
**Add header:** "# UDL & Accessibility Standards"

---

## Quick Extraction Script

Run all at once (after reviewing):

```bash
cd modules/week1

# Module 2
echo "# Module 2: Executive Leader Perspective" > module-content/module-2-executive.md
echo "" >> module-content/module-2-executive.md
sed -n '211,285p' uplimit-week1-storyboard-complete.md >> module-content/module-2-executive.md

# Module 3 (large)
echo "# Module 3: Core Content - Revenue Streams" > module-content/module-3-revenue-streams.md
echo "" >> module-content/module-3-revenue-streams.md
sed -n '286,1147p' uplimit-week1-storyboard-complete.md >> module-content/module-3-revenue-streams.md

# Module 4
echo "# Module 4: Interactive Activity - Revenue Empire Builder" > module-content/module-4-activity.md
echo "" >> module-content/module-4-activity.md
sed -n '1148,1287p' uplimit-week1-storyboard-complete.md >> module-content/module-4-activity.md

# Module 5
echo "# Module 5: Case Study - NHL Vancouver Canucks" > module-content/module-5-case-study.md
echo "" >> module-content/module-5-case-study.md
sed -n '1288,1437p' uplimit-week1-storyboard-complete.md >> module-content/module-5-case-study.md

# Module 6
echo "# Module 6: Assessment - Reflection Memo" > module-content/module-6-assessment.md
echo "" >> module-content/module-6-assessment.md
sed -n '1438,1671p' uplimit-week1-storyboard-complete.md >> module-content/module-6-assessment.md

# Module 7
echo "# Module 7: Wrap-Up & Preview" > module-content/module-7-wrapup.md
echo "" >> module-content/module-7-wrapup.md
sed -n '1672,1794p' uplimit-week1-storyboard-complete.md >> module-content/module-7-wrapup.md

# Widget Specifications
echo "# Widget Specifications" > widgets/widget-specifications.md
echo "" >> widgets/widget-specifications.md
sed -n '1795,1882p' uplimit-week1-storyboard-complete.md >> widgets/widget-specifications.md

# Content Checklist
echo "# Content Preparation Checklist" > build-guide/content-checklist.md
echo "" >> build-guide/content-checklist.md
sed -n '1883,1960p' uplimit-week1-storyboard-complete.md >> build-guide/content-checklist.md

# Build Timeline
echo "# Build Timeline (Recommended)" > build-guide/build-timeline.md
echo "" >> build-guide/build-timeline.md
sed -n '1961,2011p' uplimit-week1-storyboard-complete.md >> build-guide/build-timeline.md

# UDL & Accessibility
echo "# UDL & Accessibility Standards" > learning-design/udl-accessibility.md
echo "" >> learning-design/udl-accessibility.md
sed -n '2012,$p' uplimit-week1-storyboard-complete.md >> learning-design/udl-accessibility.md

echo "✅ Extraction complete! 13/13 files created."
```

---

## After Extraction

1. **Verify files:** Check each file has correct content
2. **Add cross-references:** Update links to point to new split files
3. **Update INDEX.md:** Change all "Coming soon" to file links
4. **Archive original:** Rename `uplimit-week1-storyboard-complete.md` to `_ARCHIVE-uplimit-week1-storyboard-complete.md`
5. **Git commit:** Add all new files

---

## Verification Checklist

- [ ] All 10 remaining files created
- [ ] Each file has proper header
- [ ] Line ranges match content
- [ ] Module 3 contains all 8 widget sections
- [ ] Widget specs file has Phase 1/2/3 sections
- [ ] INDEX.md updated with ✅ status
- [ ] Original file archived with `_ARCHIVE-` prefix
- [ ] Git commit with all files

---

## File Size Reference

| File | Lines | Estimated Size |
|------|-------|----------------|
| Module 2 | 75 | Small |
| **Module 3** | **862** | **LARGE** |
| Module 4 | 140 | Medium |
| Module 5 | 150 | Medium |
| Module 6 | 234 | Medium |
| Module 7 | 123 | Small |
| Widget Specs | 88 | Small |
| Content Checklist | 78 | Small |
| Build Timeline | 51 | Small |
| UDL & Accessibility | 185 | Medium |

**Total:** 1,986 lines to extract (of 2,196 total)
