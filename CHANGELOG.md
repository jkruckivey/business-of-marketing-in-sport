# Business of Sports Marketing - Detailed Changelog

For current project status and working guidelines, see [CLAUDE.md](CLAUDE.md).

---

## 2026-01-23: Week 2 Widget Simplification

### Week 2 Module 3: Engagement Widget Simplification (v1.7.0 → v1.8.0)
- **SIMPLIFIED:** Replaced `engagement-value-chain-builder.html` (1057 lines, 64 checkbox combinations, Chart.js dependency) with `engagement-strategy-explorer.html` (320 lines, 4 bounded strategy cards)
- **Philosophy:** Follows Week 1 pattern—bounded choices teach principles better than infinite combinations
- **Key Insight Preserved:** Betting integration delivers 800% ROI due to revenue share model ($0.5M investment → $4M net gain)
- **Files Changed:**
  - `engagement-strategy-explorer.html` (NEW) - 4 strategy cards, comparison table, pre-selected betting to surface insight
  - `engagement-value-chain-builder.html` → archived to `widgets/archive/`
  - `module-3-core-content.md` (v1.8.0) - Updated Element 11A intro, Element 12 tool section, Element 12A instructions

### CFL Project Tie-In Widget Fix (all 5 weeks)
- **Fixed:** Milestones appeared clickable but weren't links
- **Change:** Removed fake `<a>` link wrapper and `.milestone-link` CSS styles
- **Files:** `cfl-project-tie-in.html` in week1, week2, week3, week4, week5

### Week 2 Widget Enhancements (earlier in session)
- **streaming-wars-strategy.html:** Added tooltip system, summary dashboard, restart functionality, ARIA labels
- **engagement-value-chain-builder.html:** Added help icons with tooltips, expanded Strategic Insights (before archival)
- **media-rights-pre-assessment.html:** Added export functionality, ARIA labels on progress dots

### Discussion Prompts (NEW)
- **Created** `modules/shared-resources/weekly-discussion-prompts.md`
- 5 weeks of discussion themes with 3 prompts each
- Icebreaker suggestion for Week 1

---

## 2026-01-23: Widget Philosophy & Agent Updates

### Week 1 Module 5: Debrief Refinement (v2.2.0 → v2.3.0)
- **v2.2.0**: Reframed Element 2 (Four Paths infobox) from declarative to exploratory
  - Changed from assuming specific AI roleplay outcomes to presenting paths as "reference points"
  - AI roleplay is conversational—students may explore different paths
- **v2.3.0**: Removed Element 3 (Ecosystem Reflection Coach AI Chat Widget)
  - Redundant: students just completed AI roleplay in Module 4
  - Added connective text "From Simulation to Reality" to Real-World Examples
  - Reduced from 6 to 5 elements, time from ~30 to ~15 min

### Week 1 MC Question Standardization
- **Module 2 (v2.1.0)**: Standardized 5 Kevin Abrams interview quiz questions to correct format
  - Format: Question → Options → After Submission → Feedback correct → Feedback incorrect
- **Module 3 (v2.1.0)**: Standardized 8 MC questions (4 Media Rights + 4 Sponsorship/Merchandising)

### Widget Principles Manifest (NEW)
- **Created** `modules/week1/widget-principles.md` (v1.0.0)
  - Central reference documenting underlying principle, answer key, and expected understanding for each widget
  - Covers: Revenue Streams Explorer, Media Rights Explorer, Dynamic Pricing Simulator, Revenue Ecosystem Challenge
  - Documents deprecated widgets and why (iFrame issues, platform-native preference, complexity reduction)
  - Includes agent integration instructions (Widget Optimizer, AI Coach, QA Testing)

### Widget Philosophy Codified
Identified core principles driving widget simplification decisions:
1. **Right-size for learning stage** - Week 1 intro ≠ Week 4 deep-dive complexity
2. **Platform-native first** - Uplimit AI Roleplay > iFrame roleplay widget
3. **Markdown over JavaScript** - When equivalent learning value, use simpler format
4. **Separate interaction from assessment** - Roleplay teaches; rubric assesses
5. **Discovery over allocation** - Bounded paths (3-4 choices) > infinite sliders
6. **Bounded choices + AI complexity** - Widgets teach frameworks; AI handles nuance

### Education Toolkit Agent Updates (education-toolkit repo)
- **widget-tester.md**: Added Section 7: Pedagogical Correctness (Principle Validation)
  - Check for widget-principles.md file
  - Answer Key Check (do personas arrive at correct understanding?)
  - Bounded Choices Philosophy integration
  - Updated output format with Pedagogical Score and Principle Validation section
- **widget-designer.md**: Added Widget Philosophy section
  - Pre-Build Questions (Does this need to be a widget? Is complexity appropriate? What's the ONE principle?)
  - Bounded Choices Philosophy (why 3-4 paths > infinite sliders)
  - Complexity Ladder (Level 1-5 from markdown to multi-variable simulations)
  - Step 0: Validate Widget Need (REQUIRED before gathering requirements)
  - Step 7: Generate Principle Card (REQUIRED with every widget delivery)
  - Updated IMPORTANT NOTES with philosophy reminder

---

## 2026-01-22: Widget Simplification & Pre-Assessment Restructuring

### Week 1 Module 0: Pre-Assessment Overhaul (v4.0.0)
- **Restructured** challenge-based format: MC questions now appear underneath associated challenges
- **Simplified** feedback to 3 fields per question (After Submission, Correct, Incorrect)
- **Organized** into 4 challenges with 7 MC questions total, aligned to WLOs 1.1-1.4

### Week 1 Module 3: Widget Simplification (v1.8.0 → v2.0.0)
- **v1.8.0**: Updated Elements 6A/6B MC questions to simplified 3-field feedback format
- **v1.9.0**: Replaced Betting Market Comparison iFrame widget with markdown tables (Element 26)
  - Same content, no JavaScript dependency, native Uplimit rendering
- **v2.0.0**: Replaced Sponsorship ROI Calculator iFrame with Activation Examples markdown (Element 21)
  - 12-input calculator was too complex for Week 1 intro
  - New content teaches activation > logo placement through real examples (Scotiabank, Delta, etc.)
  - Calculator preserved for Week 3 deep-dive

### Week 1 Module 4: Native AI Roleplay Conversion (v2.0.0 → v2.3.0)
- **Renamed** "Build Your Revenue Empire" → "Revenue Ecosystem Challenge"
- **Replaced** HTML iFrame roleplay widget with native Uplimit AI Roleplay element
- **Created** full 4-tab AI Roleplay configuration (Patricia Chen, Board Chair character)
- **Updated** rubric criteria: Strategic Reasoning (10), Ecosystem Understanding (10), Adaptive Decision-Making (10)
- **Removed** Element 5 (Strategic Decision Analysis, 750-1000 words) to reduce redundant work
- **Expanded** Hidden Context (v2.3.0) with comprehensive course knowledge:
  - All 4 WLOs with Bloom's levels
  - Full Patricia Chen character (background, communication style)
  - All 5 revenue streams with ecosystem effects and key insights
  - Detailed consequence scripts for all 4 decision paths
  - Edge case handling

### Week 1 Module 5: Debrief Rewrite (v2.0.0 → v2.1.0)
- **Archived** `module-5-case-study.md` → `module-5-case-study.md.archive` (Nashville Predators case removed)
- **Renamed** `module-5-simulation-debrief-alternate.md` → `module-5-debrief.md`
- **Rewrote** entire module to align with Revenue Ecosystem Challenge (decision-based, not allocation-based)
- **Removed** Strategy Comparison Tool (percentage-based widget no longer fits)
- **Simplified** from 10 elements to 6 elements
- **New structure:**
  - Connecting intro (reflection on 5-year journey)
  - The Four Paths infobox (Growth/Foundation × Cut/Double outcomes)
  - Ecosystem Reflection Coach (AI chat about cascade effects)
  - Real-World Cascade Examples (Cowboys, Packers, Vegas)
  - CFL Bridge (apply ecosystem lens to project)
  - What's Next (transition to Module 6)
- **v2.1.0 Enhancements:**
  - Expanded Element 4 with detailed real-world examples including citations:
    - Dallas Cowboys: Commercial Maximizer (~$1.2B revenue, AT&T Stadium, ~$250M sponsorship)
    - Green Bay Packers: Community Anchor (148,000 season ticket waiting list, $72.9M 2025 NFL Draft impact)
    - Vegas Golden Knights: Growth Gambler ($500M→$1.85B valuation, 2023 Stanley Cup)
  - Added comparative analysis table (Primary Revenue Driver, Growth Trajectory, Risk Profile, Sustainability)
  - Verified all text reflects student position (post-Module 4 roleplay, pre-Module 6 assessment)

### Week 2 Module 0: Pre-Assessment Alignment (v3.0.0)
- **Converted** from 14-question iFrame widget to 8 native MC questions
- **Restructured** into 4 challenges aligned to WLOs 2.1-2.4
- **Applied** simplified 3-field feedback format matching Week 1

### Media Rights Explorer Widget
- **Applied** 10 credibility fixes including:
  - NHL rights context (U.S. vs global)
  - Softened 16× multiplier claim
  - Replaced precise demographics with qualitative descriptions
  - Added structural insight about predictability
  - Added comparative benchmarks (NFL vs World Series/NBA Finals/Oscars)

### Cross-Module Consistency Fixes
- **Fixed** "Uplift" → "Uplimit" typos across Modules 2, 3, 5, 7
- **Updated** Module 5 & 6 references from "Revenue Empire Builder" to "Revenue Ecosystem Challenge"
- **Corrected** Module 7 Week 2 executive: Stewart Johnston → Al Dak (SVP Revenue, Rogers Sports and Media)
- **Updated** Module 3 widget table to mark `ecosystem-roleplay.html` as deprecated

---

## 2024-08-27: Initial Project Setup
- Project initialization and structure planning
- Reviewed course proposal PDF (comprehensive 4-page document)
- Analyzed educational principles documents (QM Standards, UDL Guidelines, Inclusive Teaching)
- Created main course portal (index.html) with UDL-compliant design
- Developed Module 1 structure with accessibility features
- Implemented comprehensive CSS framework following WCAG AA standards
- Created JavaScript framework with accessibility enhancements
- **CRITICAL QM FIX**: Revised all learning outcomes to use single, measurable action verbs
  - Course Learning Outcomes: Analyze, Evaluate, Assess, Compare, Design, Develop
  - Module Learning Outcomes: 20 specific, measurable tasks across all modules
  - Removed compound verbs ("understand and evaluate") and unmeasurable language ("gain insights")
  - Maintained proper CLO-to-MLO alignment throughout all modules

## 2025-09-29: SME Alignment and Course Integration
- **SME Structure Integration**: Aligned course with 5-week SME materials structure
  - Updated from 6-module to 5-week framework per SME requirements
  - Integrated specific case studies: NHL Canucks, Rogers/TSN, FanDuel, Serena Williams, Hockey Hall of Fame
  - Added executive leaders for each week: Bell Media/TSN, DAZN, FanDuel/sponsors, sports agents/PGA, HHOF/MLSE
- **Learning Outcomes Realignment**: Updated CLO structure to match 5-week format
- **Widget Development and Integration**: Created 5 interactive widgets for Week 1
- **Accessibility Enhancements**: Implemented comprehensive high contrast mode
- **Course Index Integration**: Linked existing components into main development storyboard
- **Interactive Widget Embedding**: Integrated all 5 Module 1 widgets directly into module outline

## 2025-10-01: Simplified Outline Format Development
- **Simplified Module Outlines Created**: Developed clean, scannable outline format for all 5 modules
  - Format structure: Outcome → Supporting Content → Aligned Assessment
  - Created individual outline.html files for each module
- **Comprehensive Course Outline**: Created master course-outline.html
- **Consistent Structure Across All Modules**: Meta information, learning outcomes, assessments, executive sessions, UDL implementation

## 2025-10-01: Anchor Project Threading Complete
- **Anchor Project Structure**: Created comprehensive 4-milestone progression across Weeks 2-5
  - Week 2: Team Formation & Property Selection
  - Week 3: Revenue Model & Sponsorship Strategy
  - Week 4: Brand Strategy & Market Positioning
  - Week 5: Final Presentation & Executive Pitch
- **Module Outline Updates**: Added Anchor Project sections to all module outlines
- **Tools Created**: 9 interactive tools across Weeks 2-5 (Property Selector, Team Charter, Revenue Canvas, Positioning Builder, Competitive Mapper, Presentation Timer, Pitch Checklist, Peer Evaluation)

## 2025-10-02: Asynchronous Learning Conversion
- **Full Async Transition**: Converted all live session references to asynchronous recorded video content
- **Module Outlines Updated (All 5 Weeks)**: Changed "Executive Session" → "Executive Video Content"
- **Engagement Model Revised**: Discussion forum participation replaces live Q&A
- **Assessment Language Updated**: Async flexibility throughout

## 2025-10-05: AI Agent System Expansion
- **AI Agent Infrastructure Enhancement**: Built two-track agent system (Fast API agents + SDK agents)
- **Advanced Agent Development** (6 new SDK-based agents): widget-student-simulator, sports-industry-updater, student-journey-simulator, consistency-checker, rubric-generator, udl-content-generator
- **Interactive Launcher System**: agent-launcher.js with CLI menu, LAUNCH-AGENTS.bat
- **Module 1 SME Alignment Completion**: Integrated NHL Vancouver Canucks case (W14149) as Week 1 centerpiece

## 2025-10-06: AI Agents Repository Split and MCP Server Infrastructure
- **Repository Separation**: Split agents into dedicated education-ai-agents repository
- **Three Distribution Methods**: Templates, MCP Servers, SDK Workflows
- **MCP Server Infrastructure Created**: accessibility-auditor MCP server with 3 custom tools
- **Package Published to NPM**: education-ai-agents v1.2.0
- **Accessibility Improvements via Subagents**: Fixed Modules 1-3 (focus styles, skip links, ARIA labels, semantic landmarks)

## 2025-10-06: Web Interface for AI Agents
- **Web Interface Development**: Created browser-based interface for running agents without installation
- **Web Interface Features**: Zero installation, 6 agents, drag-and-drop file upload, API key localStorage
- **Deployment Configuration**: vercel.json and netlify.toml for serverless deployment

## 2025-10-07: Claude Code Subagents Published to NPM
- **NPM Package Publication**: Successfully published `@jameskruck/claude-subagents@2.0.0`
- **Subagents Included (7 total)**: accessibility-auditor, widget-tester, branding-checker, rubric-generator, student-journey-simulator, consistency-checker, udl-content-generator
- **CLI Installation System**: Interactive help, single agent install, install all agents
- **Natural Language Invocation**: Works with natural language after restart
- **Benefits vs MCP Servers**: FREE (uses Claude Code subscription), simple setup, no API keys required

## 2025-10-07: Assessment Designer with Bundled Knowledge Base (v2.2.1)
- **Knowledge Base Integration**: Converted PDF research to markdown and bundled with NPM package (464 KB, 9 files)
- **Embedded Core Knowledge**: AI assessment principles, Three-Tier Permission Model, AI-Resistant Design Principles
- **Hybrid Knowledge Approach**: Quick embedded knowledge + comprehensive bundled files

## 2025-10-08: Course Name Correction
- **Course Renaming**: Corrected from "Business of Marketing in Sport" to "Business of Sports Marketing"
- **Files Updated**: 31 occurrences updated across all HTML, MD, JS, BAT, and JSON files

## 2025-10-08: Student Journey Simulation and High-Priority Fixes
- **Student Journey Simulation**: Ran student-journey-simulator subagent with 4 personas
  - Sarah (Visual Learner): 72/100 - struggled with text-heavy content
  - Marcus (Analytical Thinker): 85/100 - frustrated by missing data sources
  - Priya (Collaborative Leader): 68/100 - isolated by lack of collaboration
  - Alex (Time-Constrained Professional): 78/100 - time overruns
- **High-Priority Fixes Applied**: Replaced "Live Session" language, added rubric links, recalibrated time estimates, added case access notice

## 2025-10-09: Week 1 Module 3 Redesign (V1, V2, V3)
### V1: Varied Content Delivery
- **Problem**: Single 3,500-word text block, monotonous delivery
- **Solution**: Broke into 14 varied elements (6 text files, 1 video, 2 images, 2 infoboxes, 1 list, 1 table, 1 accordion)

### V2: Further Reduced Text Density
- **Problem**: Still too text heavy (~2,650 words)
- **Solution**: 20 elements with strategic visual breaks
  - Split text blocks into 300-400 word chunks (2-3 min max)
  - Added second video at midpoint
  - Added 2 new images (4 total)
  - Added AI Chat Widget

### V3: Interactive Redesign - Replace Text with Widgets
- **Problem**: Still too much passive reading (75% passive, 25% active)
- **Solution**: 30 elements with 8 interactive widgets
  - **Text reduced**: 3,500 → 2,650 → 1,000 words
  - **Reading time**: 20 min → 15 min → 8 min
  - **Active engagement**: 5% → 25% → 75%
  - **Phase 1 Widgets Built** (3 of 8): Revenue Mix Slider, Dynamic Pricing Simulator, Ecosystem Cascade Simulator

### Workflow Change: Embedded Markdown in Storyboards
- **User Request**: Put text directly into storyboards (Uplimit accepts markdown)
- **Implementation**: Embedded all text content blocks with "Copy the markdown below directly into Uplimit:"

## 2025-10-09: Instructional Video Scripts, Visual Content Specs, Collaborative Learning
- **Instructional Video Scripts Created**:
  - Week 1: 3 videos (2-min format) - Revenue Streams, Revenue Sharing, Rogers Deal
  - Week 2: 2 videos (2-min format) - Media Rights Valuation, Linear vs Streaming
- **Visual Content Specifications Document**: 5 core visual assets specified with design specs
- **Discussion Forum Prompts & Peer Review Protocols**: 5 discussion prompts, 2 peer review protocols

## 2025-10-09: Repository Reorganization - Week-Based Folder Structure
- **Problem**: Course has "weeks" but folders named "module-1" through "module-5"
- **Solution**: Reorganized into week-based hierarchy (modules/week1/, modules/week2/, etc.)
- **Changes**: Created week1-5 folders, moved all content into appropriate weeks, created shared-resources/
- **Benefits**: Clear week-based navigation, eliminates confusion, scales for future additions

## 2025-10-12: Week 2 Storyboard Alignment with Week 1 Format
- **Storyboard Formatting Standardization**: Updated modules/week2/uplimit-week2-storyboard.md to match Week 1's professional format
  - **Emoji Replacement**: Changed all colored emoji (🔴 🟡 🟢) to black symbols (⬤ ◐ ○) for accessibility and neutral design
  - **Infobox Title Updates**: Replaced all emoji symbols with Week 1 style (◉ ▶ ▪ ■ ◆) for consistency
  - **Widget Specifications Enhanced**: Added detailed "How It Works" sections for all 3 Week 2 widgets
  - **Accessibility Checklists**: Added complete WCAG 2.2 AA compliance details for each widget
- **Format Consistency**: Week 2 storyboard now matches Week 1's professional presentation style and detail level

## 2025-10-13: Week 2 Storyboard Alignment Complete - Video Duration Standardization
- **Video Duration Standardization Completed**: Finalized all video references in Week 2 storyboard to match Week 1's brief format
  - **Rogers Retrospective Video Updated**: Reduced from 14-minute to 2-minute format (6 edits across storyboard)
  - **Executive Session Video**: Previously updated to 2-minute format
- **Week 2 Alignment Project Complete**: All 8 formatting tasks finished
  - Accessibility-first design: Black symbols, neutral colors, WCAG 2.2 AA compliance
  - Brief video format: All videos 2 minutes
  - Embedded content: Markdown embedded directly (no separate .docx files)
  - Widget specifications: Complete inputs/outputs, accessibility, learning objectives

## 2025-10-13: Week 2 V3 Interactive Redesign Document Complete
- **Comprehensive V3 Redesign Created**: Built complete week2-v3-redesign-interactive.md (1,950 lines)
  - **Module 3: Media Rights Framework Redesign** - Text reduced 67%, reading time reduced 65%, active engagement 10% → 60%
  - **Module 5: Rogers Case Study Redesign** - Text reduced 70%, reading time reduced 68%, active engagement 5% → 65%
  - **8 New Interactive Widgets Specified**: Audience Size Calculator, Exclusivity Bidding Simulator, Platform Economics Visualizer, Engagement Value Chain Builder, Rogers Deal Terms Explorer, Projections vs. Actuals Visualizer, Viewership Trends Analyzer, 2026 Decision Simulator
- **Comparison Metrics V1 vs. V3**: Total text words 4,500 → 1,500 (-67%), interactive widgets 1 → 9 (+800%), active engagement 15% → 75%
- **Implementation Roadmap**: 73-83 hours total across 4 phases

## 2025-10-14: Week 2 V3 Interactive Implementation Complete
- **All 8 Widgets Built**: 65-70 hours of implementation work completed
  - **Phase 2 Widgets** (4 widgets, ~25 hours): Exclusivity Bidding Simulator, Platform Economics Visualizer, Projections vs. Actuals Visualizer, 2026 Decision Simulator (capstone)
  - **Phase 3 Widgets** (4 widgets, ~20 hours): Audience Size Calculator, Engagement Value Chain Builder, Rogers Deal Terms Explorer, Viewership Trends Analyzer
  - **Phase 4 Documentation** (3 guides, ~5 hours): AI Coaching Configuration, Widget Implementation Guide, Widget Testing Checklist
- **Technical Achievements**: Chart.js 4.4.0 integration, WCAG 2.2 AA compliance, ARIA patterns, state management, real-time calculations, export functionality, responsive design
- **Pedagogical Impact**: Active engagement 35% → 75%, reading time -65%, interactive time +480%, full Bloom's Taxonomy coverage
- **Files Created**: 8 widget HTML files (~8,500 lines total) + 3 documentation files (~50 pages)

## 2025-10-14: Week 2 V3 Critical Fixes Based on Student Journey Simulation
- **Student Journey Simulation Conducted**: Tested all 8 Week 2 V3 widgets with 3 learner personas
  - Sarah (Visual Learner): 88/100 - frustrated by Widget 6 showing red bars without explanation
  - Priya (Collaborative Leader): 71/100 - paralyzed by Widget 8's 250-word memo requirement
  - Marcus (Analytical Thinker): 70/100 (emotional) - frustrated by opaque calculations
- **3 Critical Fixes Implemented**:
  - **Widget 6**: Added collapsible explanation tooltip revealing 4 critical misjudgments
  - **Widget 8**: Replaced 250-word textarea with interactive 5×3 star rating matrix
  - **Widget 2**: Confirmed existing transparency (no changes needed)
- **Expected Impact**: Sarah 88→92, Priya 71→78, Marcus 70→85 (emotional)

## 2025-10-14: Week 2 Phase 1 Uplimit Platform Alignment Complete
- **Uplimit Platform Standards Review**: Identified 11 gaps across 5 categories
- **Phase 1 Implementation** (4 critical fixes, achieved 80% Uplimit alignment):
  - **AI Chat Widgets → Core Learning Coaches**: Changed from "Optional" to "Recommended", reframed as teaching assistants
  - **Module 5 Split**: Divided into 5A (10 min) and 5B (13 min) for microlearning compliance
  - **3 Structured Discussion Prompts**: Added after Modules 3, 4, and 5B (15 points total)
  - **Memo Micro-Steps with AI Feedback**: Restructured assessment into 4-step scaffolded process (55 points total)
- **Pedagogical Improvements**: Reduced writing anxiety, improved quality through formative feedback, maintained rigor, UDL support, social learning integration
