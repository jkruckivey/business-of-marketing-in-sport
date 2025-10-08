# GitHub Actions - Automated Quality Checks

This workflow automatically runs AI agents on your course content whenever you push changes.

## 🚀 Setup (One-Time)

### 1. Add Anthropic API Key to GitHub Secrets

1. Go to your repo: https://github.com/jkruckivey/business-of-sports-marketing
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `ANTHROPIC_API_KEY`
5. Value: Your Anthropic API key (starts with `sk-ant-`)
6. Click **Add secret**

### 2. Commit and Push the Workflow

```bash
cd "C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\business-of-sports-marketing"
git add .github/workflows/course-quality-check.yml
git commit -m "Add automated quality check workflow"
git push
```

## ✅ That's It!

The workflow will now run automatically whenever:
- You push changes to `modules/**/*.html` files
- You create a Pull Request with HTML changes
- You manually trigger it from GitHub Actions tab

## 📊 Viewing Results

### After Each Run:

1. Go to **Actions** tab in your repo
2. Click on the latest **Course Quality Check** workflow
3. Scroll down to **Artifacts**
4. Download `quality-reports-[commit-hash].zip`
5. Open the markdown reports

### On Pull Requests:

The bot will automatically comment with a summary of the quality check results!

## 🎯 What Gets Checked

**On Every Push:**
- ✅ Content quality review (all module index.html files)
- ♿ Accessibility audit (Module 1)
- 🧪 Widget testing (selected widgets)

**Reports Generated:**
- `sports-content-review-TIMESTAMP.md`
- `accessibility-audit-TIMESTAMP.md`
- `widget-test-TIMESTAMP.md`

## ⚙️ Customizing the Workflow

Edit `.github/workflows/course-quality-check.yml` to:

- **Run different agents**: Add more agent scripts
- **Check more files**: Modify the file paths
- **Run on schedule**: Add a cron trigger
- **Notify on Slack**: Add Slack notification step

### Example: Add Student Journey Simulator

```yaml
- name: Run Student Journey Simulator
  working-directory: .agents
  env:
    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
  run: |
    echo "👥 Simulating student journeys..."
    node student-journey-simulator.js || true
```

### Example: Run on Schedule (Daily at 9 AM)

```yaml
on:
  schedule:
    - cron: '0 9 * * *'  # Every day at 9 AM UTC
  push:
    branches: [ main ]
```

## 💰 Cost Considerations

**GitHub Actions**: Free for public repos (2,000 minutes/month)

**Anthropic API Costs**:
- Content Reviewer (Haiku): ~$0.01 per file
- Accessibility Auditor (Sonnet): ~$0.10 per file
- Widget Tester (Sonnet): ~$0.10 per widget

**Estimated Monthly Cost** (assuming 20 pushes/month):
- ~$2-5/month for basic quality checks
- Add budget monitoring in Anthropic console

## 🔒 Security Notes

- API key is stored as encrypted GitHub Secret
- Never commit your API key to the repo
- Only repo admins can view/edit secrets
- Workflow runs in isolated environment

## 🐛 Troubleshooting

**Workflow not running?**
- Check that API key secret is named exactly `ANTHROPIC_API_KEY`
- Verify the workflow file is in `.github/workflows/` directory
- Check Actions tab for error messages

**Agent errors?**
- Check that `.agents/` directory has all agent files
- Verify `package.json` dependencies are correct
- Check API key has sufficient credits

**No reports generated?**
- Agents may have failed silently (check workflow logs)
- Reports are only created if agents complete successfully
- Check file paths in workflow match your repo structure

## 📚 Learn More

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Anthropic API Documentation](https://docs.anthropic.com/)
- [Agent Details](.agents/README.md)

---

Built with ❤️ by Ivey EdTech Lab
