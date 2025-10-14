# Week 2 Widget Implementation Guide

## Overview
This guide provides complete embed codes and implementation instructions for all 8 interactive widgets built for Week 2: Media, Content & Fan Engagement.

**Total Widgets:** 8
**Widget Files Location:** `modules/week2/widgets/`
**All widgets are:** Standalone HTML files, fully accessible (WCAG 2.2 AA), responsive, with export functionality

---

## Quick Reference Table

| Widget # | Name | Module | File Size | Complexity | Estimated Embed Time |
|----------|------|--------|-----------|------------|---------------------|
| 1 | Audience Size Calculator | Module 3 | ~92 KB | Simple | 5 min |
| 2 | Exclusivity Bidding Simulator | Module 3 | ~42 KB | Medium | 10 min |
| 3 | Platform Economics Visualizer | Module 3 | ~113 KB | Complex | 10 min |
| 4 | Engagement Value Chain Builder | Module 4 | ~102 KB | Medium | 10 min |
| 5 | Rogers Deal Terms Explorer | Module 5 | ~112 KB | Simple | 5 min |
| 6 | Projections vs. Actuals Visualizer | Module 5 | ~70 KB | Medium | 10 min |
| 7 | Viewership Trends Analyzer | Module 5 | ~122 KB | Complex | 10 min |
| 8 | 2026 Decision Simulator (CAPSTONE) | Module 5 | ~138 KB | Complex | 15 min |

---

## Widget 1: Audience Size Calculator

### Location in Storyboard
**Module 3 - Framework Teaching**, Element 4

### Purpose
Demonstrate how audience size and demographics drive media rights valuations using real league examples (NFL, NHL, NBA, MLS, Premier League).

### File Path
```
modules/week2/widgets/audience-size-calculator.html
```

### Uplimit Embed Code
```html
<iframe
    src="./widgets/audience-size-calculator.html"
    width="100%"
    height="900px"
    frameborder="0"
    title="Audience Size Calculator - Calculate media rights valuations"
    allow="clipboard-write"
    style="border: 2px solid #c5b783; border-radius: 12px;">
</iframe>
```

### Implementation Notes
- **Presets Available:** NFL, NHL, NBA, MLS, Premier League, Custom
- **Real-time Calculations:** Total reach, premium multiplier, ad revenue, estimated rights value
- **Comparison Chart:** Bar chart comparing selected league to NFL baseline
- **Export:** JSON export of all inputs and results
- **Learning Objectives:** MLO 2.1 (audience as primary valuation driver)

### Student Instructions (Optional Text Above Widget)
```markdown
**Use this calculator to:**
1. Select a league from presets OR enter custom values
2. Adjust audience metrics (viewers, games, demographics, CPM)
3. See how rights valuations are calculated in real-time
4. Export your analysis for reference
```

---

## Widget 2: Exclusivity Bidding Simulator

### Location in Storyboard
**Module 3 - Framework Teaching**, Element 7

### Purpose
Simulate NHL rights bidding dynamics with 3 competing bidders (Rogers, DAZN, Apple TV+), demonstrating exclusivity premiums.

### File Path
```
modules/week2/widgets/exclusivity-bidding-simulator.html
```

### Uplimit Embed Code
```html
<iframe
    src="./widgets/exclusivity-bidding-simulator.html"
    width="100%"
    height="1000px"
    frameborder="0"
    title="Exclusivity Bidding Simulator - NHL rights bidding scenario"
    style="border: 2px solid #c5b783; border-radius: 12px;">
</iframe>
```

### Implementation Notes
- **Scenario:** User is NHL commissioner choosing between 3 bidders
- **Bidders:** Rogers ($450M), DAZN ($550M), Apple TV+ ($700M)
- **Decision:** Exclusive deal vs. split package ($1.15B total)
- **Interactive Reveal:** Click to reveal all bids, then choose strategy
- **Learning Objectives:** Understand why exclusive rights cost 2-3x more
- **Reset:** Students can reset and try different scenarios

### Student Instructions
```markdown
**Your role: NHL Commissioner (2025)**

1. Click "Reveal All Bids" to see what each company offers
2. Choose between exclusive deal (Option 1) or split package (Option 2)
3. Read strategic analysis explaining why split generates 64% more revenue
4. Consider: Why did Rogers choose exclusive in 2014?
```

---

## Widget 3: Platform Economics Visualizer

### Location in Storyboard
**Module 3 - Framework Teaching**, Element 10

### Purpose
Compare linear TV vs. streaming/DTC profitability models with real-world examples (Rogers NHL, DAZN Canada, Apple TV+ MLS).

### File Path
```
modules/week2/widgets/platform-economics-visualizer.html
```

### Uplimit Embed Code
```html
<iframe
    src="./widgets/platform-economics-visualizer.html"
    width="100%"
    height="1100px"
    frameborder="0"
    title="Platform Economics Visualizer - Compare linear TV vs streaming models"
    allow="clipboard-write"
    style="border: 2px solid #c5b783; border-radius: 12px;">
</iframe>
```

### Implementation Notes
- **Toggle:** Switch between Linear TV and Streaming/DTC models
- **Adjustable Variables:**
  - Linear TV: Rights cost, ad CPM, carriage fee, starting subs, decline %
  - Streaming: Rights cost, sub price, starting subs, growth %, churn %, CAC
- **Real-World Presets:** Rogers NHL, DAZN Canada, Apple TV+ MLS
- **10-Year Projection Chart:** Revenue vs. costs with break-even analysis
- **Strategic Insights:** Dynamic insights based on inputs
- **Learning Objectives:** MLO 2.2 (compare platform strategies)

### Student Instructions
```markdown
**Explore two business models:**

1. Choose "Linear TV" or "Streaming/DTC" tab
2. Adjust sliders to model different scenarios
3. View 10-year projections: Will it break even? When?
4. Try real-world presets to see why Rogers struggled vs. DAZN succeeded
5. Export your model for analysis
```

---

## Widget 4: Engagement Value Chain Builder

### Location in Storyboard
**Module 4 - Streaming Wars Simulation**, Element 12

### Purpose
Build engagement strategy by selecting tactics (mobile app, fantasy, betting, etc.) and see how they increase fan value from $10 → $45/fan.

### File Path
```
modules/week2/widgets/engagement-value-chain-builder.html
```

### Uplimit Embed Code
```html
<iframe
    src="./widgets/engagement-value-chain-builder.html"
    width="100%"
    height="1200px"
    frameborder="0"
    title="Engagement Value Chain Builder - Build your fan engagement strategy"
    allow="clipboard-write"
    style="border: 2px solid #c5b783; border-radius: 12px;">
</iframe>
```

### Implementation Notes
- **Baseline:** 1M fans × $10/year = $10M/year (passive viewing only)
- **6 Engagement Tactics:**
  1. Mobile App: $2M cost, 30% adoption, +$5/fan
  2. Fantasy Integration: $0.5M cost, 15% adoption, +$15/fan
  3. Betting Partnerships: $0 cost, 10% adoption, +$30/fan
  4. Exclusive Content: $3M cost, 20% adoption, +$25/fan
  5. Social Media: $1M cost, 50% adoption, +$8/fan
  6. Gamification: $1.5M cost, 25% adoption, +$12/fan
- **Real-time Calculations:** Total value, ROI, affordable rights budget
- **Engagement Funnel Chart:** Visualize passive → engaged → super-fan progression
- **Strategic Insights:** Trade-off analysis based on selected tactics
- **Learning Objectives:** MLO 2.3 (engagement extends monetization)

### Student Instructions
```markdown
**Build your engagement strategy:**

1. Check boxes to select engagement tactics
2. See real-time updates: total fan value, ROI, affordable rights budget
3. View engagement funnel showing fan progression
4. Read strategic insights about your choices
5. Try different combinations - which tactics deliver best ROI?
```

---

## Widget 5: Rogers Deal Terms Explorer

### Location in Storyboard
**Module 5 - Rogers Case Study**, Element 3

### Purpose
Explore the comprehensive terms of Rogers' $5.2B NHL deal through interactive tabs (rights, platforms, exclusivity, projections, comparison).

### File Path
```
modules/week2/widgets/rogers-deal-terms-explorer.html
```

### Uplimit Embed Code
```html
<iframe
    src="./widgets/rogers-deal-terms-explorer.html"
    width="100%"
    height="1000px"
    frameborder="0"
    title="Rogers Deal Terms Explorer - Explore the $5.2B NHL deal"
    allow="clipboard-write"
    style="border: 2px solid #c5b783; border-radius: 12px;">
</iframe>
```

### Implementation Notes
- **Deal Overview:** $5.2B total, 12 years, $433M/year, 2014-2026
- **5 Interactive Tabs:**
  1. Rights Included: 1,000+ games, all national/regional/playoff games
  2. Platforms Covered: Linear TV, streaming, digital, radio
  3. Exclusivity Terms: TSN shut out, CBC sublicensed, near-monopoly
  4. Revenue Projections: Year 1-7 forecasts (break-even target Year 5)
  5. Comparison: 209% increase vs. previous CBC/TSN deal
- **Keyboard Navigation:** Arrow keys to switch tabs, fully accessible
- **Learning Objectives:** MLO 2.4 (understand deal scope), MLO 2.1 (valuation factors)

### Student Instructions
```markdown
**Explore the deal that changed Canadian sports media:**

1. Click tabs to explore different aspects of the $5.2B agreement
2. Pay attention to Rogers' revenue projections (Tab 4) - these will matter later
3. Compare to the previous deal (Tab 5) to understand why Rogers paid 3x more
4. Export deal terms for case analysis reference
```

---

## Widget 6: Projections vs. Actuals Visualizer

### Location in Storyboard
**Module 5 - Rogers Case Study**, Element 7

### Purpose
Interactive timeline comparing Rogers' financial projections with actual performance (2014-2024), identifying variance drivers.

### File Path
```
modules/week2/widgets/projections-vs-actuals-visualizer.html
```

### Uplift Embed Code
```html
<iframe
    src="./widgets/projections-vs-actuals-visualizer.html"
    width="100%"
    height="1300px"
    frameborder="0"
    title="Projections vs Actuals Visualizer - Rogers 10-year financial analysis"
    allow="clipboard-write"
    style="border: 2px solid #c5b783; border-radius: 12px;">
</iframe>
```

### Implementation Notes
- **Summary Stats:** Total paid ($4.33B), average shortfall, cumulative loss
- **10-Year Chart:** Projected vs. actual revenue lines with break-even benchmark
- **Interactive Scrubber:** Drag timeline to explore each year in detail
- **Year Detail Panel:** Shows projected, actual, variance, key events for selected year
- **Complete Data Table:** Accessible alternative with all 10 years of data
- **CSV Export:** Download complete financial dataset
- **Learning Objectives:** MLO 2.4 (analyze where projections failed), financial analysis skills

### Student Instructions
```markdown
**Analyze Rogers' financial performance:**

1. Review summary stats showing cumulative loss over 10 years
2. Drag the timeline scrubber to explore each year
3. Read key events explaining variance (COVID, cord-cutting, streaming shortfalls)
4. Use data table for detailed year-by-year comparison
5. Export CSV for your case analysis memo
```

---

## Widget 7: Viewership Trends Analyzer

### Location in Storyboard
**Module 5 - Rogers Case Study**, Element 10

### Purpose
3-tab analysis of Hockey Night in Canada ratings decline, Sportsnet NOW subscriber shortfalls, and demographic shifts.

### File Path
```
modules/week2/widgets/viewership-trends-analyzer.html
```

### Uplimit Embed Code
```html
<iframe
    src="./widgets/viewership-trends-analyzer.html"
    width="100%"
    height="1200px"
    frameborder="0"
    title="Viewership Trends Analyzer - Analyze ratings, streaming, and demographics"
    allow="clipboard-write"
    style="border: 2px solid #c5b783; border-radius: 12px;">
</iframe>
```

### Implementation Notes
- **3 Tabs with Charts:**
  1. **Linear TV Ratings:** 1.6M (2014-15) → 1.3M (2023-24), -19% decline
  2. **Streaming Subscribers:** Target 1M vs. actual 350K in Year 5 (65% miss)
  3. **Demographics:** Aging audience (18-34 down 32%, 55+ up 26%)
- **Key Metrics:** Baseline vs. current, 10-year change, gap analysis
- **Complete Data Tables:** All viewership and subscriber data with key events
- **Insights Boxes:** Strategic implications of each trend
- **CSV Export:** All data from 3 tabs
- **Learning Objectives:** MLO 2.4 (market dynamics), MLO 2.3 (engagement challenges)

### Student Instructions
```markdown
**Explore three critical market trends:**

1. **Tab 1 - Linear TV:** See Hockey Night in Canada ratings decline over 10 years
2. **Tab 2 - Streaming:** Compare Sportsnet NOW targets vs. actual subscribers
3. **Tab 3 - Demographics:** Understand audience aging problem
4. Read insights explaining why each trend matters
5. Export all data for case analysis
```

---

## Widget 8: 2026 Decision Simulator (CAPSTONE)

### Location in Storyboard
**Module 5 - Rogers Case Study**, Element 14

### Purpose
5-phase strategic decision tool where students make 2026 NHL rights recommendation, testing ALL Week 2 learning objectives.

### File Path
```
modules/week2/widgets/2026-decision-simulator.html
```

### Uplimit Embed Code
```html
<iframe
    src="./widgets/2026-decision-simulator.html"
    width="100%"
    height="1400px"
    frameborder="0"
    title="2026 Decision Simulator - Make your strategic recommendation"
    allow="clipboard-write"
    style="border: 2px solid #c5b783; border-radius: 12px;">
</iframe>
```

### Implementation Notes
- **5 Phases (Sequential):**
  1. **Set Assumptions:** Cord-cutting rate, streaming growth, viewership trend, competitive intensity, betting revenue
  2. **Choose Option:** Renew exclusive ($325M), split package ($200M), or walk away ($0)
  3. **View Projection:** 10-year financial chart, break-even year, cumulative profit, strategic scorecard
  4. **Compare Alternatives:** Side-by-side table showing all 3 options under your assumptions
  5. **Make Recommendation:** Write 250-word exec summary, export full analysis
- **Dynamic Calculations:** Projections update based on student's assumptions
- **No Single Right Answer:** Multiple valid strategies depending on assumptions
- **Strategic Scorecard:** 5-star ratings across financial, risk, strategic, growth, competitive dimensions
- **JSON Export:** Complete analysis (assumptions + projections + recommendation)
- **Learning Objectives:** Tests ALL MLOs 2.1-2.4 (synthesis/evaluation - Bloom's highest level)

### Student Instructions
```markdown
**CAPSTONE: Make your strategic recommendation for Rogers' 2026 decision**

This is the most complex widget - take your time! Follow the 5 phases:

**Phase 1 - Set Assumptions (5 min):**
- Adjust sliders to reflect YOUR forecast for 2026-2036
- Consider: How fast will cord-cutting continue? Will streaming grow?

**Phase 2 - Choose Option (2 min):**
- Review 3 strategic options with pros/cons
- Select one based on your assumptions

**Phase 3 - View Projection (5 min):**
- See 10-year financial forecast for YOUR choice
- Break-even year, profitability, strategic scorecard

**Phase 4 - Compare Alternatives (3 min):**
- See side-by-side comparison of all 3 options
- Identify which performs best under your assumptions

**Phase 5 - Make Recommendation (10 min):**
- Write 250-word exec summary justifying your choice
- Export full analysis (you'll need this for your memo!)

**Total Time:** ~25 minutes

**Important:** There's no single "right" answer! Your recommendation should be supported by YOUR assumptions and the data.
```

---

## Implementation Workflow

### Step 1: Upload Widget Files
1. Create folder structure: `modules/week2/widgets/`
2. Upload all 8 HTML files to this folder
3. Verify file permissions (publicly readable)

### Step 2: Test Widgets Individually
Before embedding, test each widget by opening directly in browser:
- Check all interactions work (sliders, buttons, tabs)
- Verify charts render correctly
- Test export functionality
- Confirm accessibility (keyboard navigation, screen reader)

### Step 3: Embed in Uplimit
1. Navigate to appropriate module in Uplimit
2. Add "HTML" or "iFrame" element (depending on Uplimit's interface)
3. Copy embed code from this guide
4. Adjust iframe height if needed (test on desktop and mobile)
5. Add student instructions text above iframe

### Step 4: Integration Testing
- Navigate through entire module as student
- Confirm widgets load within reasonable time (<3 seconds)
- Test on multiple browsers (Chrome, Firefox, Safari)
- Test on mobile devices (responsive design should work)
- Verify export buttons create downloads correctly

### Step 5: Faculty Review
- Have course director test all 8 widgets
- Confirm learning objectives are met
- Verify difficulty level appropriate for MBA students
- Check that no widgets give "answers" (preserve assessment integrity)

---

## Troubleshooting Common Issues

### Widget Not Loading
**Problem:** iFrame shows blank or error message
**Solution:**
- Check file path is correct relative to Uplimit page
- Verify file permissions (publicly readable)
- Check browser console for errors (F12)
- Try absolute URL instead of relative path

### Chart Not Rendering
**Problem:** Widget loads but Chart.js graphs don't appear
**Solution:**
- Confirm Chart.js CDN is accessible (firewall issue?)
- Check iframe height is sufficient (try increasing by 200px)
- Verify JavaScript console for errors
- Test widget outside iframe first (direct HTML open)

### Export Not Working
**Problem:** Export button doesn't download file
**Solution:**
- Check `allow="clipboard-write"` is in iframe tag
- Verify browser allows downloads from iframe source
- Test export function outside iframe
- Check browser's download blocker settings

### Mobile Display Issues
**Problem:** Widget too wide or text too small on mobile
**Solution:**
- Verify `width="100%"` in iframe tag
- Check widget has `<meta name="viewport">` tag
- Test responsive CSS breakpoints (widgets designed for mobile)
- Consider portrait vs. landscape orientation

### Accessibility Problems
**Problem:** Screen reader or keyboard navigation not working
**Solution:**
- Confirm iframe has proper `title` attribute
- Check widget has `role` and `aria-*` attributes
- Test with actual screen reader (NVDA, JAWS, VoiceOver)
- Verify focus indicators visible (check CSS)

---

## Performance Optimization

### Load Times
- All widgets load in <3 seconds on standard broadband
- Chart.js loads from CDN (cached after first widget)
- No external dependencies except Chart.js
- Widgets are standalone (no CORS issues)

### Best Practices
1. **Pre-load:** Consider loading widgets on page load (not lazy)
2. **Progressive Enhancement:** Widgets work without JavaScript (fallback to forms/tables)
3. **Caching:** Browser caches HTML/CSS/JS after first load
4. **Bandwidth:** Each widget <150 KB (mobile-friendly)

---

## Accessibility Compliance

All 8 widgets meet **WCAG 2.2 AA standards:**

✅ **Keyboard Navigation:** All interactions accessible via Tab, Arrow keys, Enter, Space
✅ **ARIA Labels:** Proper roles, labels, live regions for dynamic content
✅ **Focus Indicators:** 3px solid outlines on all focusable elements
✅ **Color Contrast:** All text meets 4.5:1 minimum contrast ratio
✅ **Screen Reader Support:** Descriptive labels, announcements for calculations
✅ **Responsive Design:** Works on all screen sizes (mobile, tablet, desktop)
✅ **Reduced Motion:** Respects `prefers-reduced-motion` system setting
✅ **Alternative Text:** Charts have data table alternatives

### Accessibility Testing Checklist
- [ ] Navigate entire widget using only keyboard (no mouse)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify focus indicators visible throughout
- [ ] Check color contrast in browser dev tools
- [ ] Test zoom at 200% (content still readable?)
- [ ] Try on mobile with TalkBack/VoiceOver enabled

---

## Widget Maintenance

### Update Schedule
**Review:** Every 6 months or when data becomes outdated

**What to Update:**
- **Widget 5, 6, 7:** Rogers case data (if deal terms change in 2026)
- **Widget 1:** League data (if new TV deals signed)
- **Widget 3:** Preset values (if company strategies change)
- **All Widgets:** Bug fixes, accessibility improvements, browser compatibility

### Version Control
- Keep original HTML files in version control (Git)
- Document changes in widget comments
- Test thoroughly after any updates
- Maintain backward compatibility with old embed codes

---

## Support & Contact

**For Technical Issues:**
- Instructional Designer: [contact info]
- Web Developer: [contact info]

**For Content Questions:**
- Course Director: [contact info]
- Subject Matter Expert: [contact info]

**For Student Support:**
- Direct students to "Technical Help" link in Uplimit
- Common issues documented in course FAQ

---

**Document Version:** 1.0
**Last Updated:** 2025-10-14
**Total Implementation Time:** ~75 minutes for all 8 widgets
**Next Review Date:** 2026-04-14
