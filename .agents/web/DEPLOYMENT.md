# Deployment Guide - Ivey Education Agents Web Interface

This guide will help you deploy the web interface to free hosting platforms.

## ☁️ Deployment Options

### Option 1: Vercel (Recommended)

**Pros**: Fast, automatic HTTPS, excellent for serverless functions
**Cost**: Free for personal projects

#### Steps:

1. **Install Vercel CLI** (one time):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to web directory**:
   ```bash
   cd "C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\business-of-sports-marketing\.agents\web"
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow prompts**:
   - Login to Vercel (creates account if needed)
   - Confirm project settings (default is fine)
   - Wait for deployment (~30 seconds)
   - You'll get a live URL: `https://your-project.vercel.app`

5. **Update app.js** (if needed):
   - For production, the `/api/run-agent` path will work automatically
   - Vercel handles serverless function routing

#### Custom Domain (Optional):

```bash
vercel --prod
vercel domains add yourdomain.com
```

---

### Option 2: Netlify

**Pros**: Great UI, drag-and-drop deployment, built-in forms
**Cost**: Free for personal projects

#### Steps:

1. **Install Netlify CLI** (one time):
   ```bash
   npm install -g netlify-cli
   ```

2. **Navigate to web directory**:
   ```bash
   cd "C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\business-of-sports-marketing\.agents\web"
   ```

3. **Login to Netlify**:
   ```bash
   netlify login
   ```

4. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

5. **Follow prompts**:
   - Create new site or link existing
   - Publish directory: `.` (current directory)
   - Wait for deployment (~30 seconds)
   - You'll get a live URL: `https://your-site.netlify.app`

#### Alternative: Drag & Drop

1. Go to https://app.netlify.com/drop
2. Drag the entire `web/` folder into the browser
3. Wait for deployment
4. Get instant live URL

---

### Option 3: GitHub Pages + Cloudflare Workers

**Pros**: Free, integrates with existing GitHub repo
**Cons**: More complex setup for API functions

Not recommended for this project (serverless functions are easier on Vercel/Netlify).

---

## 🔧 Configuration

### Environment Variables

Both Vercel and Netlify support environment variables (though not needed for this project since API keys are client-side).

**Vercel**:
```bash
vercel env add ANTHROPIC_API_KEY
```

**Netlify**:
```bash
netlify env:set ANTHROPIC_API_KEY your_key_here
```

### Custom Domains

**Vercel**:
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

**Netlify**:
- Go to Site Settings → Domain Management
- Add custom domain
- Update DNS records as instructed

---

## ✅ Post-Deployment Testing

After deployment, test the live site:

1. **Navigate to your live URL**
2. **Enter API key** (will be saved in browser localStorage)
3. **Select "Content Reviewer" agent** (fastest for testing)
4. **Upload `test-sample.html`**
5. **Click "Run Analysis"**
6. **Verify report appears** (should take 5-15 seconds)

### Troubleshooting

**API errors**:
- Check browser console for detailed errors
- Verify API key is valid (starts with `sk-ant-`)
- Ensure Anthropic API has available credits

**Slow loading**:
- Opus agent takes 5-8 minutes (expected)
- Check network tab for API call status

**Function timeouts**:
- Vercel: Default 10s timeout (upgrade for longer)
- Netlify: Default 10s timeout (upgrade for longer)
- Opus agent may timeout on free tier

---

## 📊 Monitoring

### Vercel

- Dashboard: https://vercel.com/dashboard
- Real-time logs, analytics, performance metrics
- Function execution logs available

### Netlify

- Dashboard: https://app.netlify.com/
- Deploy logs, function logs, analytics
- Form submissions (if added later)

---

## 🔄 Updating Deployment

### Vercel

```bash
cd web
vercel --prod
```

### Netlify

```bash
cd web
netlify deploy --prod
```

Both platforms also support **Git integration** for automatic deployments:
- Push to GitHub → auto-deploy
- No manual commands needed

---

## 💰 Cost Considerations

**Hosting**: Free on both platforms
**API Costs**: Charged by Anthropic based on usage
- Fast agents (Haiku): ~$0.01 per run
- Standard agents (Sonnet): ~$0.05-0.15 per run
- Opus agents: ~$0.50-1.00 per run

**Bandwidth**: Free tier includes:
- Vercel: 100 GB/month
- Netlify: 100 GB/month

---

## 🎯 Recommended Setup

For Ivey EdTech Lab team members:

1. **Deploy to Vercel** (easiest, most reliable)
2. **Use custom domain** (optional): `agents.ivey.uwo.ca`
3. **Share URL** with course developers
4. **Monitor usage** via Vercel dashboard

**Estimated setup time**: 5 minutes

---

## 📧 Support

Questions about deployment?
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com/
- Anthropic API: https://docs.anthropic.com/

---

Built with ❤️ by Ivey EdTech Lab
