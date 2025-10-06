# Ivey Education Agents - Web Interface

Browser-based interface for running AI quality assurance agents on course content.

## 🚀 Quick Start

### 1. Start the Server

```bash
cd .agents
npm run web
```

The server will start at `http://localhost:3000`

### 2. Open in Browser

Navigate to `http://localhost:3000` in your web browser.

### 3. Enter API Key

- Get your Anthropic API key from https://console.anthropic.com/
- Paste it in the "API Key" field
- It will be saved in your browser's localStorage for future use

### 4. Select an Agent

Choose from 6 available agents:

- **⚡ Content Reviewer** (5-15s) - Quick quality check
- **📊 Accessibility Auditor** (2-5min) - WCAG 2.1 AA compliance
- **📊 Branding Checker** (2-5min) - Ivey design system validation
- **📊 Widget Tester** (3-5min) - Interactive functionality testing
- **📊 Rubric Generator** (3-5min) - QM-aligned assessment rubrics
- **🔥 Student Journey** (5-8min) - Complete persona simulation

### 5. Provide Content

Three input methods:

1. **Upload File**: Drag & drop or click to browse for `.html` files
2. **Paste Content**: Copy/paste HTML directly into textarea
3. **Enter URL**: Provide URL to publicly accessible HTML page

### 6. Run Analysis

Click "Run Analysis" and wait for results. You'll see:
- Loading spinner with estimated time
- Markdown-formatted report
- Download button to save report

## 📁 Files

```
web/
├── index.html          # Main interface
├── app.js             # Frontend JavaScript
├── api/
│   └── run-agent.js   # Backend API handler
├── server.js          # Local test server
├── test-sample.html   # Sample HTML for testing
└── README.md          # This file
```

## 🧪 Testing the Interface

### Test with Sample File

1. Start server: `npm run web`
2. Open `http://localhost:3000`
3. Enter your API key
4. Select "Content Reviewer" agent (fastest)
5. Upload `test-sample.html` (included in this directory)
6. Click "Run Analysis"
7. Verify report appears with quality assessment

### Expected Behavior

**Fast Agent (Content Reviewer)**:
- Should return results in 5-15 seconds
- Report includes: quality rating, strengths, issues, recommendations

**Standard Agents**:
- Should return results in 2-5 minutes
- More detailed analysis with specific code examples

**Opus Agent (Student Journey)**:
- Takes 5-8 minutes
- Most comprehensive analysis with multiple personas

## 🌐 Deployment

This interface is designed for serverless deployment:

### Vercel

```bash
npm install -g vercel
cd web
vercel
```

### Netlify

```bash
npm install -g netlify-cli
cd web
netlify deploy
```

Both platforms will automatically detect the `/api` folder and create serverless functions.

## 🔐 Security

- API keys are stored in browser's localStorage (never sent to our servers)
- All API calls go directly from browser to Anthropic
- No API keys are logged or stored on backend

## 🐛 Troubleshooting

**Server won't start**:
```bash
cd .agents
npm install
npm run web
```

**API errors**:
- Check API key is valid (starts with `sk-ant-`)
- Verify Anthropic API has available credits
- Check browser console for detailed error messages

**No results appearing**:
- Check browser console for errors
- Verify content is valid HTML
- Try with smaller HTML file first

## 💡 Tips

- Start with fast agents (Content Reviewer) for quick testing
- Use Opus agents only when you need deep analysis
- Download reports for offline review
- Test with `test-sample.html` first to verify setup

---

Built with ❤️ by Ivey EdTech Lab | Powered by Claude AI
