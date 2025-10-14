# Week 2 Widget Testing Checklist

## Testing Overview

**Purpose:** Ensure all 8 interactive widgets function correctly, are accessible, and provide excellent user experience before launch.

**Testing Phases:**
1. **Functional Testing** - All features work as designed
2. **Accessibility Testing** - WCAG 2.2 AA compliance
3. **Cross-Browser Testing** - Works on all major browsers
4. **Mobile Testing** - Responsive design on devices
5. **Performance Testing** - Load times and responsiveness
6. **User Experience Testing** - Student-facing usability

**Recommended Testing Order:**
1. Test each widget standalone (direct HTML open)
2. Test widgets embedded in Uplimit (iframe)
3. Test complete module flow as student
4. Faculty review and sign-off

---

## Widget 1: Audience Size Calculator

### Functional Testing
- [ ] Page loads without errors
- [ ] League dropdown populates with 6 options (NFL, NHL, NBA, MLS, Premier League, Custom)
- [ ] Preset buttons load correct data for each league
- [ ] Input fields accept valid numbers
- [ ] Real-time calculations update as inputs change
- [ ] Results display correctly: Total reach, premium multiplier, ad revenue, rights value, per-game value
- [ ] Comparison chart renders with 2 bars (NFL baseline, selected league)
- [ ] Bar chart shows correct values
- [ ] Export button downloads JSON file with all data
- [ ] JSON file contains valid, readable data
- [ ] Reset button returns to NFL defaults

### Accessibility Testing
- [ ] Tab key navigates through dropdown, inputs, preset buttons, export button
- [ ] Dropdown operable with arrow keys + Enter
- [ ] Input fields have proper labels (visible or aria-label)
- [ ] Results region has aria-live="polite" for screen reader announcements
- [ ] Chart has descriptive aria-label
- [ ] Focus indicators visible on all interactive elements (3px solid outline)
- [ ] Color contrast meets 4.5:1 minimum (check with browser dev tools)
- [ ] Screen reader announces calculations when updated

### Cross-Browser Testing
- [ ] Chrome (latest): All functions work
- [ ] Firefox (latest): All functions work
- [ ] Safari (latest): All functions work
- [ ] Edge (latest): All functions work
- [ ] Chart.js loads correctly in all browsers
- [ ] Export works in all browsers (no download blocker issues)

### Mobile Testing
- [ ] Widget responsive on mobile (320px width minimum)
- [ ] Touch targets at least 44×44px
- [ ] Text readable without zooming
- [ ] Dropdowns and inputs usable with touch
- [ ] Chart renders correctly on small screens
- [ ] Export works on mobile browsers

---

## Widget 2: Exclusivity Bidding Simulator

### Functional Testing
- [ ] Scenario description displays clearly
- [ ] 3 bidder cards visible (Rogers, DAZN, Apple)
- [ ] "Reveal All Bids" button shows bid amounts with staggered animation
- [ ] Bid amounts display: $450M, $550M, $700M
- [ ] Bidder rationale text displays for each company
- [ ] Decision section becomes visible after reveal
- [ ] 2 option cards clickable (Option 1: Exclusive, Option 2: Split)
- [ ] Selected option highlights with green background
- [ ] Strategic analysis updates based on selection
- [ ] Analysis text explains exclusive ($700M) vs. split ($1.15B) correctly
- [ ] Reset button clears selection and hides bids
- [ ] Reset scrolls to top of widget

### Accessibility Testing
- [ ] Reveal button has clear label and focus indicator
- [ ] Bidder cards have role="button" semantics (not just divs)
- [ ] Bid amounts announced by screen reader after reveal
- [ ] Option cards keyboard navigable (Tab + Enter or Space)
- [ ] Analysis region has aria-live for dynamic updates
- [ ] Keyboard users can complete entire workflow without mouse
- [ ] Color not sole means of conveying selection (green bg + border)

### Cross-Browser Testing
- [ ] Animation timing consistent across browsers
- [ ] Green selection styling renders correctly
- [ ] Text formatting preserved (bold, spacing)
- [ ] Reset button works in all browsers

### Mobile Testing
- [ ] Cards stack vertically on narrow screens
- [ ] Touch targets large enough for option selection
- [ ] Analysis text readable on mobile
- [ ] No horizontal scrolling

---

## Widget 3: Platform Economics Visualizer

### Functional Testing
- [ ] Model toggle buttons visible (Linear TV, Streaming/DTC)
- [ ] Toggle switches between models correctly
- [ ] Linear TV controls display when selected
- [ ] Streaming controls display when switching
- [ ] All sliders functional with smooth dragging
- [ ] Slider values display next to labels (update in real-time)
- [ ] Dropdowns work (viewership trend, competitive intensity)
- [ ] 3 preset buttons load correct data (Rogers NHL, DAZN Canada, Apple TV+ MLS)
- [ ] Chart renders with 3 lines (revenue, costs, profit)
- [ ] Chart updates when sliders change
- [ ] Break-even year calculates correctly
- [ ] Year 10 profit displays with correct sign (positive/negative coloring)
- [ ] Cumulative profit sums all years correctly
- [ ] Strategic insights update dynamically based on inputs
- [ ] Insights text relevant to current model and values
- [ ] Export button downloads JSON with assumptions + projections
- [ ] Reset button returns to Rogers NHL defaults

### Accessibility Testing
- [ ] Toggle buttons have role="tab" with aria-selected
- [ ] Arrow keys navigate between toggle buttons
- [ ] Active panel has role="tabpanel"
- [ ] Sliders have aria-valuemin, aria-valuemax, aria-valuenow
- [ ] Slider labels properly associated (for attribute or aria-labelledby)
- [ ] Chart canvas has descriptive aria-label
- [ ] Metrics region has aria-live for screen reader updates
- [ ] Keyboard-only navigation completes all tasks

### Cross-Browser Testing
- [ ] Chart.js renders correctly in all browsers
- [ ] Toggle styling consistent
- [ ] Slider styling works (especially Firefox and Safari)
- [ ] Calculations produce same results across browsers
- [ ] JSON export naming consistent

### Mobile Testing
- [ ] Toggle buttons stack or wrap on mobile
- [ ] Sliders usable with touch (adequate thumb size)
- [ ] Chart readable on small screens (adjust aspect ratio?)
- [ ] Controls don't overlap or extend off-screen

---

## Widget 4: Engagement Value Chain Builder

### Functional Testing
- [ ] Baseline info displays: 1M fans × $10/year = $10M
- [ ] 6 tactic checkboxes visible with stats
- [ ] Checking box adds tactic to strategy
- [ ] Tactic card highlights when selected (green background)
- [ ] Results update in real-time as tactics selected
- [ ] Calculations correct:
  - Total fan value increases appropriately
  - Total cost sums selected tactics
  - ROI formula correct: ((value - baseline - cost) / cost) × 100
  - Affordable rights = total value × 0.70
  - Avg fan value = total value / 1M
- [ ] Engagement funnel chart displays 3 segments (passive, engaged, super-fan)
- [ ] Chart updates when tactics change
- [ ] Fan distribution logic correct (betting/content = super-fan, others = engaged)
- [ ] Strategic insights update dynamically
- [ ] Insights relevant to selected tactics
- [ ] Clear All button unchecks all tactics
- [ ] Export downloads JSON with selected tactics + results

### Accessibility Testing
- [ ] Checkboxes keyboard accessible (Space to toggle)
- [ ] Labels properly associated with checkboxes
- [ ] Tactic cards have role="checkbox" or proper semantics
- [ ] Stats visible and readable by screen reader
- [ ] Results region aria-live="polite"
- [ ] Chart has alt description
- [ ] Insights list properly structured (ul/li)

### Cross-Browser Testing
- [ ] Checkbox styling consistent
- [ ] Green highlight works across browsers
- [ ] Chart renders correctly
- [ ] Calculations match across browsers

### Mobile Testing
- [ ] Tactic cards stack on mobile
- [ ] Touch targets adequate for checkboxes
- [ ] Chart fits mobile width
- [ ] Results cards readable on small screens

---

## Widget 5: Rogers Deal Terms Explorer

### Functional Testing
- [ ] Deal overview displays: $5.2B, 12 years, $433M/year, 2014-2026
- [ ] 4 stat cards show correct values
- [ ] 5 tab buttons visible
- [ ] Tab 1 active by default (Rights Included)
- [ ] Clicking tab switches content panel
- [ ] Tab content matches tab label
- [ ] All 5 tabs have complete content:
  - Tab 1: Rights list (national, regional, playoffs, international, shoulder)
  - Tab 2: Platforms list (linear TV, streaming, digital, radio)
  - Tab 3: Exclusivity terms (TSN out, CBC sublicensed, monopoly)
  - Tab 4: Revenue projections timeline (Years 1, 3, 5, 7)
  - Tab 5: Comparison table (previous deal vs Rogers)
- [ ] Checkmarks and X marks display correctly (green/red)
- [ ] Timeline years and values formatted correctly
- [ ] Comparison table calculates +209% increase correctly
- [ ] Export button downloads JSON with all 5 tabs' data
- [ ] JSON structured logically by tab

### Accessibility Testing
- [ ] Tabs follow ARIA tabs pattern (role="tablist", role="tab", role="tabpanel")
- [ ] Arrow keys navigate between tabs
- [ ] Tab panels have aria-labelledby pointing to tab button
- [ ] Active tab has aria-selected="true"
- [ ] Tab panels keyboard accessible
- [ ] Lists properly structured (ul/li with semantic HTML)
- [ ] Table has proper headers (th/td structure)
- [ ] Color not sole indicator (checkmarks/X also convey meaning)

### Cross-Browser Testing
- [ ] Tab switching works smoothly
- [ ] Tab styling consistent (active tab border)
- [ ] Table renders correctly
- [ ] Export works

### Mobile Testing
- [ ] Tabs wrap on mobile without breaking
- [ ] Tab content readable on small screens
- [ ] Table scrollable horizontally if needed
- [ ] Timeline stacks vertically on mobile

---

## Widget 6: Projections vs. Actuals Visualizer

### Functional Testing
- [ ] Summary stats display: Total paid, average shortfall, total loss
- [ ] Chart renders with 3 lines: Projected (blue), Actual (red), Break-even (green dashed)
- [ ] 10 years of data plotted correctly (2014-2024)
- [ ] Timeline scrubber slider functional
- [ ] Dragging scrubber updates detail panel
- [ ] Detail panel shows correct year data:
  - Projected revenue
  - Actual revenue
  - Variance ($ and %)
  - Key event text
- [ ] Variance coloring: negative = red, positive = green
- [ ] Year labels display below scrubber (2014, 2016, 2018, 2020, 2022, 2024)
- [ ] Current year indicator updates as scrubber moves
- [ ] Data table populated with all 10 years
- [ ] Table sortable/readable
- [ ] Export button downloads CSV with complete dataset
- [ ] CSV formatted correctly (headers, commas, quotes around events)

### Accessibility Testing
- [ ] Scrubber slider has aria-label, aria-valuemin, aria-valuemax, aria-valuenow
- [ ] Scrubber keyboard operable (Arrow keys)
- [ ] Detail panel has aria-live="polite"
- [ ] Chart has descriptive aria-label
- [ ] Table has th elements with scope attribute
- [ ] Table keyboard navigable

### Cross-Browser Testing
- [ ] Chart rendering consistent
- [ ] Slider styling works (especially range thumb)
- [ ] CSV export filename consistent
- [ ] Table styling preserved

### Mobile Testing
- [ ] Chart readable on mobile (may need portrait orientation)
- [ ] Scrubber touch-draggable
- [ ] Detail panel text wraps properly
- [ ] Table scrollable on mobile
- [ ] CSV download works on mobile browsers

---

## Widget 7: Viewership Trends Analyzer

### Functional Testing
- [ ] 3 tab buttons visible (Linear TV Ratings, Streaming Subscribers, Demographics)
- [ ] Tab 1 active by default
- [ ] Tabs switch content panels correctly
- [ ] **Tab 1 (Ratings):**
  - 3 metric cards display: Baseline 1.6M, Current 1.3M, Change -19%
  - Chart shows 10 years of viewership data (2014-2024)
  - Line chart trends downward correctly
  - Insights box lists 5 key insights
  - Data table shows all 10 seasons with change % and events
- [ ] **Tab 2 (Streaming):**
  - 4 metric cards: Year 5 target 1.0M, Actual 350K, Gap -65%, 2024 Current 450K
  - Chart shows target vs. actual lines (8 years)
  - Gap clearly visible between lines
  - Insights box lists 5 streaming insights
  - Data table shows years 1-8 with gap %
- [ ] **Tab 3 (Demographics):**
  - Bar chart shows 2014 vs 2024 for 5 demographics
  - Demographic shifts visible (18-34 down, 55+ up)
  - Insights box lists 5 demographic insights
  - Data table shows demographic breakdown with advertiser value
- [ ] Export button downloads CSV with ALL 3 tabs' data
- [ ] CSV has clear section headers

### Accessibility Testing
- [ ] Tabs follow ARIA pattern
- [ ] Arrow keys navigate tabs
- [ ] Charts have descriptive labels
- [ ] Tables have proper structure
- [ ] Metrics cards announce values to screen readers
- [ ] Insights lists properly structured

### Cross-Browser Testing
- [ ] All 3 charts render correctly
- [ ] Tab switching smooth
- [ ] CSV export consistent

### Mobile Testing
- [ ] Tabs wrap on mobile
- [ ] Charts adjust to mobile width
- [ ] Tables scrollable
- [ ] Metric cards stack vertically

---

## Widget 8: 2026 Decision Simulator (CAPSTONE)

### Functional Testing
- [ ] 5 phase buttons visible in navigation
- [ ] Phase 1 active by default
- [ ] **Phase 1 (Assumptions):**
  - 5 inputs functional (sliders + dropdowns)
  - Values display next to labels
  - "Continue to Options" button navigates to Phase 2
- [ ] **Phase 2 (Options):**
  - 3 option cards visible with pros/cons
  - Cards selectable (green highlight)
  - "View Projection" button requires selection
  - Alert if no option selected
  - Button navigates to Phase 3
- [ ] **Phase 3 (Projection):**
  - Calculations run based on Phase 1 assumptions + Phase 2 choice
  - 3 metric cards show results: Break-even, Year 10 profit, Cumulative profit
  - Chart displays 10-year projection (revenue, costs, profit lines)
  - Strategic scorecard shows 5 criteria with star ratings
  - Stars display correctly (1-5, filled vs. empty)
  - Back/Continue buttons work
- [ ] **Phase 4 (Comparison):**
  - Table compares all 3 options side-by-side
  - Calculations run for all options automatically
  - Table shows 5 metrics per option
  - Best values highlighted (optional)
  - Back/Continue buttons work
- [ ] **Phase 5 (Recommendation):**
  - Textarea accepts text input
  - Word count updates in real-time
  - Word count warning at 225+ words (yellow)
  - Word count error at 250+ words (red)
  - Export button downloads JSON with full analysis
  - JSON includes assumptions, option, projections, recommendation text
- [ ] Phase navigation: completed phases marked (checkmark or color change)
- [ ] Can navigate backward to change assumptions
- [ ] Calculations update when going back and changing inputs

### Accessibility Testing
- [ ] Phase buttons keyboard navigable
- [ ] Phase content keyboard accessible
- [ ] All sliders have aria attributes
- [ ] Option cards keyboard selectable (Enter/Space)
- [ ] Chart has description
- [ ] Table has proper th/td structure
- [ ] Textarea has label
- [ ] Word count aria-live announcements

### Cross-Browser Testing
- [ ] Phase navigation works smoothly
- [ ] Calculations consistent across browsers
- [ ] Charts render correctly
- [ ] Textarea and word count functional
- [ ] JSON export works

### Mobile Testing
- [ ] Phase buttons wrap on mobile
- [ ] Option cards stack vertically
- [ ] Chart readable (may need landscape)
- [ ] Table scrollable
- [ ] Textarea adequate size for typing
- [ ] Export works on mobile

---

## General Testing Across All Widgets

### Performance Testing
- [ ] Each widget loads in <3 seconds on standard broadband
- [ ] Chart.js CDN loads reliably
- [ ] No memory leaks after extended use
- [ ] Smooth animations (no jank)
- [ ] Export functions don't freeze browser

### Security Testing
- [ ] No external scripts loaded (except Chart.js CDN)
- [ ] No localStorage used that could expose student data
- [ ] Export files don't contain sensitive information
- [ ] iframes sandboxed appropriately in Uplimit

### Integration Testing (Uplimit Embedded)
- [ ] All widgets display correctly in iframes
- [ ] iframe heights appropriate (no excessive scrolling)
- [ ] iframe `allow` attributes set correctly (clipboard-write for export)
- [ ] Widgets don't conflict with Uplimit's CSS/JS
- [ ] Navigation within Uplimit works (next module button accessible)

### User Experience Testing
- [ ] Instructions clear (students understand what to do)
- [ ] Visual design consistent across all 8 widgets (Ivey colors, spacing)
- [ ] Error messages helpful (if validation added)
- [ ] Loading states visible (if widgets fetch data)
- [ ] Success feedback clear (e.g., "Export successful!")
- [ ] Pedagogical value evident (students learn from interactions)

---

## Faculty Review Checklist

**Course Director should verify:**
- [ ] Learning objectives met by each widget
- [ ] Difficulty level appropriate for MBA students
- [ ] Real-world data accurate and current
- [ ] No widgets provide "answers" to assessments
- [ ] Widgets support, don't replace, critical thinking
- [ ] Estimated time requirements realistic
- [ ] Widgets enhance, not distract from, learning

**Faculty should test:**
- [ ] Complete student workflow (all 7 modules + 8 widgets)
- [ ] Widgets integrated logically into content flow
- [ ] Widget outputs useful for case analysis
- [ ] Assessment integrity preserved (Widget 3 doesn't write memos)
- [ ] Any faculty-facing dashboard or analytics (if available)

---

## Sign-Off

### Testing Team

**Functional Testing Completed:**
- Tester Name: ________________
- Date: ________________
- Issues Found: ______ (document separately)
- All Critical Issues Resolved: ☐ Yes ☐ No

**Accessibility Testing Completed:**
- Tester Name: ________________
- Date: ________________
- WCAG Level Achieved: ☐ A ☐ AA ☐ AAA
- All Critical Issues Resolved: ☐ Yes ☐ No

**Cross-Browser Testing Completed:**
- Tester Name: ________________
- Date: ________________
- Browsers Tested: ☐ Chrome ☐ Firefox ☐ Safari ☐ Edge
- All Critical Issues Resolved: ☐ Yes ☐ No

**Mobile Testing Completed:**
- Tester Name: ________________
- Date: ________________
- Devices Tested: ________________
- All Critical Issues Resolved: ☐ Yes ☐ No

**Faculty Review Completed:**
- Reviewer Name: ________________
- Date: ________________
- Approval for Launch: ☐ Yes ☐ No (revisions needed)
- Comments: ________________________________

### Final Sign-Off

**Course Launch Approved:**
- Course Director: ________________ Date: ________
- Instructional Designer: ________________ Date: ________
- IT/Technical Lead: ________________ Date: ________

---

## Post-Launch Monitoring

**First Week After Launch:**
- [ ] Monitor student engagement analytics (widget usage rates)
- [ ] Check for technical support tickets related to widgets
- [ ] Review student feedback/comments about widgets
- [ ] Verify export functionality working for all students
- [ ] Confirm no browser compatibility issues reported

**First Month After Launch:**
- [ ] Collect student satisfaction data (surveys)
- [ ] Analyze learning outcomes (did widgets improve performance?)
- [ ] Review faculty feedback (ease of grading, student preparedness)
- [ ] Identify any needed updates or improvements
- [ ] Document lessons learned for future widget development

---

**Document Version:** 1.0
**Last Updated:** 2025-10-14
**Next Review Date:** 2026-04-14 (or after first cohort completes course)
