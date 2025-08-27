# The Business of Marketing in Sport - Course Development

## 🎯 Project Overview

Welcome to the development repository for "The Business of Marketing in Sport," a first-of-its-kind course at Ivey Business School. This project creates a comprehensive, accessible, and inclusive online course that follows Universal Design for Learning (UDL) principles and Quality Matters (QM) standards.

### Course Details
- **Duration**: 5-week intensive cohort
- **Format**: Executive-led sessions with industry leaders
- **Enrollment**: Maximum 50 students
- **Focus**: Real-world sports marketing strategies and business models

---

## 🏗️ Project Structure

```
business-of-marketing-in-sport/
├── 📄 README.md                    # This file - your starting point
├── 📄 CLAUDE.md                    # Development log and project notes
├── 🌐 index.html                   # Main course portal
├── 📁 assets/
│   ├── 🎨 css/
│   │   └── main.css                # Main stylesheet (UDL compliant)
│   ├── ⚡ js/
│   │   └── main.js                 # Interactive features & accessibility
│   └── 🖼️ images/                  # Course images and graphics
├── 📁 modules/
│   ├── 📁 module-1/                # Live Content & Media Rights
│   │   ├── index.html             # Module landing page
│   │   └── 📁 resources/          # Module-specific materials
│   ├── 📁 module-2/               # Sports Betting Marketing
│   ├── 📁 module-3/               # Athlete Branding & Endorsements
│   ├── 📁 module-4/               # League & Team Marketing
│   └── 📁 module-5/               # Legacy & Sport Culture
├── 📁 resources/
│   ├── 📁 Course Proposal/        # Original course proposal documents
│   └── 📁 Educational Principles/ # QM standards, UDL guidelines
└── 📁 Project Knowledge/          # Development documentation
```

---

## 🚀 Getting Started (First Time with GitHub?)

### Step 1: Understanding This Repository

A **repository** (or "repo") is like a project folder that tracks all changes to your files. Think of it as a super-powered shared drive that:
- Keeps a history of every change
- Allows multiple people to work together
- Prevents work from being lost
- Shows who changed what and when

### Step 2: Setting Up Your Environment

#### Option A: GitHub Desktop (Recommended for Beginners)
1. **Download GitHub Desktop**: Go to [desktop.github.com](https://desktop.github.com)
2. **Install and Sign In**: Use your GitHub account credentials
3. **Clone This Repository**:
   - Click "Clone a repository from the Internet"
   - Find "business-of-marketing-in-sport" in your list
   - Choose where to save it on your computer
   - Click "Clone"

#### Option B: Command Line (Advanced)
```bash
# Navigate to where you want the project
cd /path/to/your/projects

# Clone the repository
git clone https://github.com/[username]/business-of-marketing-in-sport.git

# Enter the project directory
cd business-of-marketing-in-sport
```

### Step 3: Open the Project

1. **Find the Folder**: Navigate to where you cloned the repository
2. **Open in Browser**: Double-click `index.html` to see the course portal
3. **Open in Code Editor**: Use VS Code, Atom, or your preferred editor

---

## 🛠️ Development Workflow

### Understanding Git Basics

**Git** is the system that tracks changes. Here are the key concepts:

- **Repository (Repo)**: The entire project and its history
- **Commit**: A saved snapshot of your changes
- **Branch**: A separate line of development (like making a copy to experiment)
- **Pull**: Getting the latest changes from the online version
- **Push**: Sending your changes to the online version
- **Merge**: Combining different sets of changes

### Daily Workflow

#### 1. Before You Start Working
```bash
# Get the latest changes from others
git pull origin main
```
*In GitHub Desktop: Click "Fetch origin" then "Pull origin"*

#### 2. Make Your Changes
- Edit HTML, CSS, or JavaScript files
- Add new content or resources
- Test your changes in a browser

#### 3. Save Your Progress
```bash
# See what you've changed
git status

# Add files you want to save
git add .

# Save with a descriptive message
git commit -m "Add Module 2 content and fix navigation bug"

# Send to the online repository
git push origin main
```

*In GitHub Desktop: Write a summary in the bottom left, click "Commit to main", then "Push origin"*

---

## 📚 Course Framework

### Educational Principles

This course is built on three key frameworks:

#### 1. **Universal Design for Learning (UDL)**
- **Multiple Means of Representation**: Content available in text, audio, video, and interactive formats
- **Multiple Means of Engagement**: Students can choose their learning path and pace
- **Multiple Means of Expression**: Various ways to demonstrate knowledge (projects, presentations, written work)

#### 2. **Quality Matters (QM) Standards**
- **Clear Learning Outcomes**: Every objective is measurable and specific
- **Aligned Activities**: All activities support the learning outcomes
- **Accessible Design**: Content is available to all learners regardless of ability

#### 3. **Inclusive Learning Environment**
- **Cultural Responsiveness**: Examples and case studies reflect diverse backgrounds
- **Flexibility**: Multiple pathways and accommodation options
- **Support**: Clear navigation and help resources

### Course Modules

| Module | Topic | Executive Leader | Key Focus |
|--------|-------|------------------|-----------|
| 1 | Live Content & Media Rights | Bell Media/TSN Executive | Media valuation, broadcasting strategy |
| 2 | Sports Betting Marketing | FanDuel Executive | Regulatory landscape, consumer behavior |
| 3 | Athlete Branding | Senior Sports Agent | Personal branding, endorsement deals |
| 4 | League & Team Marketing | MLSE Executive | Fan engagement, season campaigns |
| 5 | Legacy & Sport Culture | Hockey Hall of Fame Chair | Heritage marketing, cultural impact |

---

## 💻 Technical Guide

### HTML Structure

Our HTML follows **semantic structure** for accessibility:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadata and links to CSS -->
</head>
<body>
    <header>
        <!-- Navigation and course title -->
    </header>
    <main>
        <!-- Main content area -->
        <section id="overview">
            <!-- Course overview content -->
        </section>
    </main>
    <footer>
        <!-- Support links and course info -->
    </footer>
</body>
</html>
```

### CSS Framework

We use **CSS Custom Properties** (variables) for consistency:

```css
:root {
    --primary-color: #1e3a8a;      /* Ivey Blue */
    --secondary-color: #059669;     /* Success Green */
    --text-primary: #1f2937;        /* Dark Gray */
    --space-4: 1rem;                /* Standard spacing */
}

/* Usage */
.module-card {
    background: var(--primary-color);
    padding: var(--space-4);
}
```

### JavaScript Features

Our JavaScript adds interactivity while maintaining accessibility:

- **Screen Reader Support**: Announcements for dynamic content
- **Keyboard Navigation**: Full keyboard accessibility
- **User Preferences**: Save accessibility settings
- **Progress Tracking**: Monitor learning progress

---

## 🎨 Content Creation Guidelines

### Writing Content

#### Learning Outcomes Format
Use the **SMART** criteria (Specific, Measurable, Achievable, Relevant, Time-bound):

✅ **Good**: "Analyze the factors that determine media rights valuation using industry frameworks"

❌ **Poor**: "Understand media rights"

#### Accessibility in Writing
- **Plain Language**: Use clear, concise sentences
- **Headings**: Use proper heading hierarchy (H1 > H2 > H3)
- **Alt Text**: Describe images for screen readers
- **Link Text**: Use descriptive link text, not "click here"

### Adding New Content

#### Creating a New Module
1. **Copy Module 1**: Use it as a template
2. **Update Content**: Change titles, outcomes, and executive information
3. **Update Navigation**: Add links in the main portal
4. **Test Accessibility**: Check with keyboard navigation and screen reader

#### Adding Resources
```html
<div class="resource-card">
    <span class="resource-type">Video</span>
    <h3>Resource Title</h3>
    <p>Brief description of the resource and its purpose.</p>
    <ul>
        <li>Key point 1</li>
        <li>Key point 2</li>
    </ul>
    <p><strong>Duration:</strong> 15 minutes</p>
</div>
```

### Image Guidelines

- **File Formats**: Use WebP for modern browsers, JPG/PNG as fallback
- **Size**: Optimize images (aim for under 100KB each)
- **Alt Text**: Always include descriptive alt attributes
- **Responsive**: Images should scale on mobile devices

---

## ♿ Accessibility Standards

### WCAG 2.1 AA Compliance

We follow **Web Content Accessibility Guidelines** Level AA:

#### Color and Contrast
- **Minimum Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Color Independence**: Never rely on color alone to convey information

#### Navigation
- **Keyboard Support**: All interactive elements must be keyboard accessible
- **Skip Links**: Provide "Skip to content" for screen readers
- **Focus Indicators**: Clear visual focus indicators

#### Content Structure
- **Semantic HTML**: Use proper HTML elements (headings, lists, buttons)
- **ARIA Labels**: Add labels for screen readers when needed
- **Image Alt Text**: Describe all informative images

### Testing Your Changes

#### Manual Testing Checklist
- [ ] **Tab Navigation**: Can you navigate using only the Tab key?
- [ ] **Screen Reader**: Test with built-in screen reader (Windows Narrator, Mac VoiceOver)
- [ ] **High Contrast**: Check appearance in high contrast mode
- [ ] **Mobile**: Test on mobile devices or browser dev tools
- [ ] **Different Browsers**: Test in Chrome, Firefox, Safari, Edge

#### Automated Testing Tools
- **WAVE**: [wave.webaim.org](https://wave.webaim.org) - paste your URL
- **axe DevTools**: Browser extension for accessibility testing
- **Lighthouse**: Built into Chrome DevTools, includes accessibility audit

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### "My changes aren't showing up"
1. **Hard Refresh**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Clear Cache**: Check browser developer tools > Network > Disable cache
3. **Check File Path**: Ensure your HTML references the correct CSS/JS files

#### "Git says there are conflicts"
1. **Don't Panic**: This means two people changed the same line
2. **Pull First**: Always `git pull` before starting work
3. **Ask for Help**: Conflicts can be tricky - ask a team member

#### "The page looks broken on mobile"
1. **Check Viewport Tag**: Ensure `<meta name="viewport" content="width=device-width, initial-scale=1.0">` is in your HTML
2. **Test Responsive CSS**: Use browser dev tools to simulate mobile
3. **Check Media Queries**: Our CSS includes mobile breakpoints at 768px

#### "Accessibility tool shows errors"
1. **Missing Alt Text**: Add `alt=""` to decorative images, descriptive text to informative images
2. **Heading Structure**: Don't skip heading levels (H1 > H2 > H3, not H1 > H3)
3. **Color Contrast**: Use our CSS variables to ensure proper contrast

---

## 📋 Development Tasks

### Current Status
✅ **Completed:**
- Main course portal with accessibility features
- Module 1 complete structure
- CSS framework with responsive design
- JavaScript accessibility enhancements
- Educational principles integration

🚧 **In Progress:**
- Module 2-5 development
- Assessment framework creation
- Resource template development
- Student progress tracking
- Multilingual support planning

### How to Contribute

#### Finding Tasks
1. **Check Issues**: Look at GitHub Issues for assigned tasks
2. **Review CLAUDE.md**: See development log for current priorities
3. **Ask Questions**: Don't hesitate to ask what needs work

#### Fork-Based Collaboration Workflow

**Important**: This project uses a **fork-based workflow** for collaboration. Here's how it works:

1. **Fork the Repository**: 
   - Go to the main repository on GitHub
   - Click the "Fork" button (top right)
   - This creates your own copy of the project

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/business-of-marketing-in-sport.git
   cd business-of-marketing-in-sport
   ```

3. **Set Up Remotes**:
   ```bash
   # Your fork is automatically set as 'origin'
   # Add the main repository as 'upstream'
   git remote add upstream https://github.com/MAIN_OWNER/business-of-marketing-in-sport.git
   
   # Verify your remotes
   git remote -v
   ```

#### Task Workflow
1. **Sync with Upstream**: Always start by getting the latest changes
   ```bash
   git checkout main
   git pull upstream main
   git push origin main  # Update your fork
   ```

2. **Pick a Task**: Choose something appropriate for your skill level

3. **Create a Feature Branch**: 
   ```bash
   git checkout -b feature/module-2-development
   ```

4. **Make Changes**: Work on your assigned task

5. **Push to Your Fork**:
   ```bash
   git push origin feature/module-2-development
   ```

6. **Create Pull Request**: 
   - Go to GitHub and create a Pull Request from your fork to the main repository
   - Describe what your changes do and why

7. **Wait for Review**: The project maintainer will review and merge your changes

#### Writing Good Commit Messages
```bash
# Good commit messages:
git commit -m "Add Module 2 landing page with executive spotlight"
git commit -m "Fix navigation accessibility issues in main portal"
git commit -m "Update CSS color contrast for WCAG compliance"

# Poor commit messages:
git commit -m "changes"
git commit -m "fix"
git commit -m "update stuff"
```

---

## 🤝 Collaboration Guidelines

### Communication
- **Ask Questions**: No question is too basic
- **Share Updates**: Let the team know what you're working on
- **Request Reviews**: Always have someone check your work
- **Document Changes**: Update CLAUDE.md for significant changes

### Code Standards
- **Consistent Indentation**: Use 2 or 4 spaces (pick one and stick to it)
- **Commenting**: Add comments for complex code
- **File Organization**: Keep files in the correct folders
- **Naming Conventions**: Use descriptive, consistent names

### Pull Request Process
1. **Create Feature Branch**: Always work on a feature branch, never directly on main
2. **Push to Your Fork**: Push your feature branch to your forked repository
3. **Create Pull Request**: 
   - Go to the main repository on GitHub
   - Click "New Pull Request"
   - Select "compare across forks"
   - Choose your fork and feature branch as the source
   - Choose the main repository and main branch as the destination
4. **Write Description**: Explain what your changes do and why they're needed
5. **Include Screenshots**: Show before/after for visual changes
6. **Test Checklist**: Confirm you've tested your changes
7. **Request Review**: The pull request will automatically notify maintainers

### Keeping Your Fork Updated
```bash
# Before starting new work, always sync with upstream
git checkout main
git pull upstream main
git push origin main

# If you're working on a long-running branch, keep it updated
git checkout your-feature-branch
git merge main  # Or use rebase if you prefer
```

---

## 🔧 Tools and Resources

### Recommended Software
- **Code Editor**: [VS Code](https://code.visualstudio.com) (free)
- **Git Client**: [GitHub Desktop](https://desktop.github.com) (free)
- **Browser Testing**: Chrome, Firefox, Safari, Edge
- **Design**: [Figma](https://figma.com) (free tier available)

### Useful VS Code Extensions
- **Live Server**: Preview HTML changes in real-time
- **Prettier**: Auto-format your code
- **axe Accessibility Linter**: Catch accessibility issues while coding
- **HTML CSS Support**: Better autocomplete for CSS in HTML

### Learning Resources

#### Web Development Basics
- **HTML**: [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- **CSS**: [CSS-Tricks](https://css-tricks.com)
- **JavaScript**: [JavaScript.info](https://javascript.info)

#### Accessibility
- **WebAIM**: [webaim.org](https://webaim.org) - comprehensive accessibility guides
- **A11y Project**: [a11yproject.com](https://a11yproject.com) - practical accessibility tips
- **ARIA Authoring Practices**: [w3.org/WAI/ARIA/apg](https://www.w3.org/WAI/ARIA/apg/)

#### Git and GitHub
- **GitHub Skills**: [skills.github.com](https://skills.github.com) - interactive Git tutorials
- **Atlassian Git Tutorial**: [atlassian.com/git/tutorials](https://www.atlassian.com/git/tutorials)
- **GitHub Desktop Documentation**: [docs.github.com/desktop](https://docs.github.com/en/desktop)

---

## 🆘 Getting Help

### When You're Stuck
1. **Check Documentation**: Look at this README and CLAUDE.md first
2. **Search Issues**: See if someone else had the same problem
3. **Ask the Team**: Post in our team communication channel
4. **Create an Issue**: Document the problem for others

### Emergency Contacts
- **Project Lead**: [Contact information]
- **Technical Lead**: [Contact information]
- **Accessibility Specialist**: [Contact information]

### Useful Commands Cheat Sheet
```bash
# Basic Git commands
git status              # See what's changed
git add .               # Stage all changes
git commit -m "message" # Save changes with message
git push origin main    # Send changes to GitHub
git pull origin main    # Get latest changes

# Branch management
git checkout -b new-feature  # Create and switch to new branch
git checkout main           # Switch to main branch
git merge new-feature       # Merge branch into current branch

# Viewing information
git log                 # See commit history
git diff                # See current changes
```

---

## 📈 Success Metrics

### Project Goals
- **Accessibility**: WCAG 2.1 AA compliance across all pages
- **Usability**: Intuitive navigation and clear information architecture
- **Engagement**: Multiple learning pathways and interaction options
- **Performance**: Fast loading times and mobile optimization
- **Education**: Measurable learning outcomes aligned with activities

### Definition of Done
A feature is complete when it:
- [ ] Functions correctly across all major browsers
- [ ] Passes accessibility testing (WAVE, axe, manual testing)
- [ ] Is responsive on mobile devices
- [ ] Includes proper documentation
- [ ] Has been reviewed by another team member

---

## 🎓 Educational Philosophy

This project embodies evidence-based educational design:

### Learner-Centered Design
- **Choice**: Students can select their learning path
- **Flexibility**: Multiple ways to engage with content
- **Relevance**: Real-world applications with industry leaders

### Accessibility as Innovation
- **Universal Benefit**: Accessibility features help everyone
- **Multiple Modalities**: Content available in various formats
- **Progressive Enhancement**: Features enhance the experience without being required

### Industry Integration
- **Executive Leadership**: Real practitioners sharing current strategies
- **Case Studies**: Actual scenarios from Canadian sports marketing
- **Applied Learning**: Projects based on real industry challenges

---

## 🔄 Continuous Improvement

### Feedback Loops
- **User Testing**: Regular testing with actual students
- **Analytics**: Track engagement and completion rates
- **Instructor Feedback**: Input from course delivery team
- **Industry Updates**: Keep content current with market changes

### Version Control Strategy
- **Main Branch**: Always production-ready
- **Feature Branches**: Individual development work
- **Release Tags**: Mark major version milestones
- **Documentation**: Keep README updated with changes

---

## 📝 Final Notes

Welcome to the team! This project combines cutting-edge web development with educational best practices to create something truly innovative. Remember:

- **Ask questions** - everyone was new once
- **Test thoroughly** - accessibility and quality matter
- **Document your work** - help others understand your contributions
- **Stay curious** - we're creating the future of education

Happy coding! 🚀

---

*This README is a living document. Please update it as the project evolves and don't hesitate to suggest improvements.*