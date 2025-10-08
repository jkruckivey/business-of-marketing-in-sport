# Ivey Education Agents v1.0.0 - Release Notes

**Release Date:** October 6, 2025

## 🎉 First Official Release!

AI-Powered Quality Assurance & Course Development Toolkit for Ivey Business School EdTech Lab

## ✨ What's New

### 11 Specialized AI Agents

**Fast API Agents** (5-15 seconds):
- **Sports Content Reviewer** - Quick quality checks for course content

**SDK Analysis Agents** (2-5 minutes):
- **Widget Student Simulator** - Tests with 3 MBA personas (Quick Learner, Methodical Analyst, Struggling Student)
- **Sports Industry Context Updater** - Validates 2024-25 sports business data
- **Accessibility Auditor** - WCAG 2.1 AA compliance checking
- **Branding Checker** - Ivey design system validation
- **Canvas LMS Validator** - LMS integration compatibility
- **Widget Tester** - Interactive functionality testing
- **Rubric Generator** - Auto-generates QM-aligned assessment rubrics
- **UDL Content Generator** - Creates multimodal formats (audio, visual, interactive)

**Advanced Analysis Agents** (5-8 minutes, uses Opus):
- **Student Journey Simulator** - Simulates complete 5-week course experience with 4 personas
- **Consistency Checker** - Cross-module narrative flow and concept threading analysis

### Interactive Launcher
- Beautiful CLI menu with colored output
- Quick actions: `w1`-`w5` for module reviews
- Shortcuts: `journey`, `consistency`
- 11 agents accessible from one interface

### Automated Reporting
- All agents generate detailed markdown reports
- Priority-ranked issues and recommendations
- Before/after code examples with line numbers
- Saved to `reports/` directory

## 📥 Installation

### Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)
- Anthropic API key ([get one here](https://console.anthropic.com/))

### Quick Start

```bash
# Clone the repository
git clone https://github.com/jkruckivey/ivey-education-agents.git
cd ivey-education-agents

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY

# Launch interactive menu
npm start
```

## 🚀 Usage Examples

### Run Specific Agent
```bash
# Fast content review (5-15 seconds)
node sports-content-reviewer-fast.js "../path/to/module-1/index.html"

# Widget testing with student personas (3-5 minutes)
node widget-student-simulator.js "../path/to/widget.html"

# Full student journey simulation (5-8 minutes, uses Opus)
node student-journey-simulator.js
```

### Use Interactive Launcher
```bash
npm start

# Then type:
# "1" - Run Sports Content Reviewer
# "w1" - Quick review of Module 1
# "journey" - Full student journey simulation
# "exit" - Quit
```

## 📊 Model Usage

- **Haiku** - Fast API agents (5-15s)
- **Sonnet** - Standard SDK agents (2-5min)
- **Opus** - Complex reasoning agents (5-8min)

Estimated costs per run:
- Fast agents: ~$0.01
- Standard agents: ~$0.05-0.15
- Opus agents: ~$0.50-1.00

## 🔧 Configuration

All agents respect `.env` configuration:

```env
ANTHROPIC_API_KEY=your_key_here
DEFAULT_MODEL=claude-sonnet-4-5-20251206  # Optional: override default
```

## 📝 Generated Reports

All agents save markdown reports to `reports/` directory:
- `reports/sports-content-review-TIMESTAMP.md`
- `reports/widget-student-simulation-TIMESTAMP.md`
- `reports/student-journey-TIMESTAMP.md`
- etc.

Reports include:
- Executive summary
- Priority-ranked issues (High/Medium/Low)
- Specific line numbers and code examples
- Before/after recommendations
- Strategic insights

## 🎯 Use Cases

### Course Development
- Review module content before SME review
- Test widgets with realistic student personas
- Generate QM-compliant assessment rubrics
- Create multimodal UDL content variations

### Quality Assurance
- Validate accessibility (WCAG 2.1 AA)
- Check branding consistency
- Ensure LMS compatibility
- Verify sports industry data currency

### Strategic Analysis
- Simulate complete student journeys
- Check cross-module consistency
- Identify narrative gaps
- Optimize learning flow

## 🐛 Known Issues

- `.exe` build not supported due to ES module + Anthropic SDK complexity
- Must have Node.js installed (not standalone executable)
- Opus agents can take 5-8 minutes for complex analysis
- Reports directory not created automatically (agents create it on first run)

## 🔮 Roadmap

### v1.1 (Planned)
- [ ] Add assessment alignment checker
- [ ] Create engagement analytics agent
- [ ] Build case study validator
- [ ] Add Uplimit LMS export agent

### v2.0 (Future)
- [ ] Web dashboard for reports
- [ ] Batch processing for multiple modules
- [ ] Custom agent configuration files
- [ ] Integration with CI/CD pipelines

## 🙏 Acknowledgments

Built with:
- [Anthropic Claude](https://www.anthropic.com/) - AI models (Haiku, Sonnet, Opus)
- [Chalk](https://github.com/chalk/chalk) - Terminal styling
- [Chokidar](https://github.com/paulmillr/chokidar) - File watching

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

This toolkit is developed for Ivey Business School EdTech Lab. For questions or contributions:
- Open an issue on GitHub
- Contact: Ivey EdTech Lab

---

**Example Project:** [Business of Sports Marketing](https://github.com/jkruckivey/business-of-sports-marketing)

Built with ❤️ by Ivey EdTech Lab
