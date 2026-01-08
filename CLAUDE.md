# Business of Sports Marketing - Course Development Guide

## Project Overview
Creating a comprehensive, accessible, and inclusive 5-week MBA-level course on sports business that adheres to:
- **Quality Matters (QM)** standards: Measurable learning outcomes, aligned activities
- **Universal Design for Learning (UDL)**: Multiple means of representation, engagement, and expression
- **WCAG 2.2 AA Accessibility**: Full keyboard navigation, screen reader support, color contrast

## Current Status
- **Week 1**: Complete (5 modules, interactive widgets, storyboard with embedded content)
- **Week 2**: Storyboard complete, widgets in progress
- **Weeks 3-5**: Placeholder structure
- **Anchor Project**: 4-milestone progression threaded across Weeks 2-5
- **AI Agents**: Published to NPM as `@jameskruck/claude-subagents@2.2.2`

## File Structure
```
business-of-sports-marketing/
├── CLAUDE.md (this file - current status)
├── CHANGELOG.md (detailed history)
├── index.html (development storyboard)
├── course-outline.html (master outline)
├── course-index.html (student-facing hub)
├── modules/
│   ├── week1/ ⬅️ ALL WEEK 1 CONTENT
│   │   ├── module-1/ through module-5/ (Week 1 modules)
│   │   ├── text-content/ (markdown embedded in storyboard)
│   │   ├── video-scripts/ (2-min instructional videos)
│   │   ├── uplimit-week1-storyboard.md
│   │   └── week1-module3-redesign-v3-interactive.md
│   ├── week2/ (text-content, video-scripts, storyboard)
│   ├── week3/ through week5/ (placeholders)
│   └── shared-resources/
│       ├── discussion-prompts-and-peer-review-protocols.md
│       ├── visual-content-specifications.md
│       └── REMAINING-WORK-REPORT.md
├── assets/ (css, js, images)
└── .agents/ (AI subagent templates)
```

**Note**: All 5 modules (module-1 through module-5) belong to **Week 1**. The course uses "weeks" (Week 1-5), not "modules."

## Course Structure (5-Week MBA Course)

### Week 1: The Business of Sport - Where the Money Flows
- **Case**: Nashville Predators: Marketing Strategy for an NHL Franchise (Ivey 9B09A006)
- **Executive**: Kevin Abrams (NY Giants) + Stewart Johnston (CFL Commissioner)
- **Focus**: 5 revenue streams (media, ticketing, sponsorship, merch, betting), market feasibility
- **Widgets**: Revenue Mix Slider, Dynamic Pricing Simulator, Ecosystem Cascade

### Week 2: Media, Content & Fan Engagement
- **Case**: Rogers Communications: Sportsnet and NHL Rights (W16179)
- **Executive**: TSN or DAZN Canada
- **Focus**: Media rights valuation, streaming vs traditional
- **Widgets**: Streaming Wars Strategy, Media Rights Calculator

### Week 3: Sponsorship & Betting
- **Case**: FanDuel: Betting on Sports (HBS 520038)
- **Executives**: Andrew Sneyd (FanDuel) + brand sponsor
- **Focus**: Sponsorship ROI, betting as growth driver
- **Widgets**: ROI Calculator, Betting Market Simulator

### Week 4: Athletes, Brands & Emerging Sports
- **Case**: Serena Williams: Building a Brand (HBS 517050)
- **Executives**: Sports agent + Don Rea (PGA) + Niki da Silva + Matt Rubinoff
- **Focus**: Athlete branding, women's sports, emerging markets
- **Widgets**: Athlete Brand Calculator, Emerging Sport Investment Tool

### Week 5: Legacy, Culture & Future
- **Case**: Hockey Hall of Fame (custom case)
- **Executives**: Jamie Dinsmore (HHOF) + Keith Pelley (MLSE)
- **Focus**: Heritage properties, future trends, tradition vs innovation
- **Widgets**: Legacy vs Innovation Matrix, Future Trends Predictor

## Working Guidelines

### Communication Style
- Be concise and direct (fewer than 4 lines unless detail requested)
- Minimize output tokens while maintaining helpfulness
- Answer questions directly without preamble
- Use TodoWrite tool proactively for multi-step tasks

### Technical Approach
- **ALWAYS** use Read tool before editing files
- Follow existing code conventions and accessibility patterns
- Batch tool calls when possible for efficiency
- Use Task tool for complex searches requiring multiple rounds

### File Management
- **NEVER** create documentation files unless explicitly requested
- **ALWAYS** prefer editing existing files over creating new ones
- Maintain WCAG 2.2 AA compliance in all web content
- Keep consistent styling and navigation patterns

### Git Workflow
- Don't commit unless explicitly asked
- Handle merge conflicts by resolving and explaining changes
- Use proper commit messages ending with Claude Code attribution

## Educational Principles

### Quality Matters (QM) Standards
- Learning outcomes must be **measurable** with single action verbs
- Course activities must align with and support learning outcomes
- Assessment strategies must measure stated learning outcomes
- **CRITICAL**: Use ONLY single, measurable verbs (Analyze, Evaluate, Assess, Compare, Design, Develop) - NO compound verbs

### Universal Design for Learning (UDL)
- **Multiple means of representation**: Text, video, visual diagrams, interactive widgets
- **Multiple means of engagement**: Choice in topics, pacing, learning environment
- **Multiple means of action/expression**: Different ways to demonstrate mastery

### Inclusive Learning
- Consider diverse backgrounds and experiences
- Create welcoming environment for all learners
- Accommodate different learning preferences and needs

## Technical Framework
- **Semantic HTML5**: Proper heading structure, ARIA labels, landmark regions
- **CSS Custom Properties**: Consistent design system with accessibility considerations
- **JavaScript Enhancements**: Screen reader announcements, keyboard navigation, user preferences
- **Progress Tracking**: Local storage for user preferences and learning analytics
- **WCAG 2.2 AA Compliance**: Color contrast, keyboard navigation, screen reader support, focus management

## Recent Major Changes

### 2025-10-09: Module 3 V3 Interactive Redesign
- **Problem**: Too much passive reading (~2,650 words)
- **Solution**: 8 interactive widgets replacing explanatory text
- **Result**: Text reduced 3,500 → 1,000 words, active engagement 5% → 75%
- **Widgets Built**: Revenue Mix Slider, Dynamic Pricing Simulator, Ecosystem Cascade Simulator (3 of 8 complete)
- **Content Workflow**: All text embedded directly in storyboards (Uplimit accepts markdown)

### 2025-10-09: Repository Reorganization
- **Change**: Moved from "module-1" through "module-5" folders to week-based structure
- **New Structure**: modules/week1/, modules/week2/, etc.
- **Reason**: Eliminate confusion (all 5 modules belong to Week 1)
- **Benefit**: Clear navigation, scales for future additions

### 2025-10-08: Student Journey Simulation
- **Ran**: 4-persona simulation (Visual Learner, Analytical Thinker, Collaborative Leader, Time-Constrained Professional)
- **Scores**: 72/100, 85/100, 68/100, 78/100
- **Fixes Applied**: Updated time estimates, added rubric links, replaced "Live Session" language, added case access notice

## AI Agents for QA
Published to NPM as `@jameskruck/claude-subagents@2.2.2`:

**Installation**: `npx @jameskruck/claude-subagents@latest --agent=all`

**7 Subagents Available**:
- **accessibility-auditor**: WCAG 2.2 AA compliance checking
- **widget-tester**: 3-persona widget UX testing
- **branding-checker**: Canvas LMS and Uplimit platform validation
- **rubric-generator**: QM-aligned assessment rubrics
- **student-journey-simulator**: 4-persona course experience testing
- **consistency-checker**: Cross-module terminology and concept threading
- **udl-content-generator**: Transforms content into multiple formats
- **assessment-designer**: Comprehensive assessment design with AI integration (464 KB knowledge base)

**Usage**: After installation, use natural language in Claude Code (e.g., "Audit modules/week1/module-1/index.html for accessibility")

## Development Tasks

### Completed ✅
- Week 1 complete (5 modules, storyboard, 3 interactive widgets)
- Week 2 storyboard complete
- Anchor Project structure (4 milestones, 9 tools)
- Async learning conversion (all live sessions → recorded videos)
- Repository reorganized to week-based structure
- AI agents published to NPM

### In Progress 🚧
- Week 1 Module 3: Build remaining 5 widgets (Phase 2 and Phase 3)
- Week 2: Complete interactive widgets
- Visual content: 5 core visual assets (specs created)
- Video production: 5 instructional videos (scripts created, 2-min format)

### Remaining 📋
- Weeks 3-5: Storyboards and interactive widgets
- Discussion forum prompts implementation
- Peer review protocols deployment
- Primary source materials (case studies, media reports)

## Key References
- **Full changelog**: See [CHANGELOG.md](CHANGELOG.md)
- **Visual content specs**: modules/shared-resources/visual-content-specifications.md
- **Discussion prompts**: modules/shared-resources/discussion-prompts-and-peer-review-protocols.md
- **Remaining work report**: modules/shared-resources/REMAINING-WORK-REPORT.md
- **Week 1 storyboard**: modules/week1/uplimit-week1-storyboard.md
- **Week 2 storyboard**: modules/week2/uplimit-week2-storyboard.md
