# How to Publish Ivey Education Agents to NPM

## Prerequisites

1. **NPM Account**: Create one at https://www.npmjs.com/signup
2. **Verified Email**: Check your email and verify your NPM account
3. **Command Line Access**: Terminal or PowerShell

---

## Step 1: Login to NPM

```bash
npm login
```

Enter your NPM username, password, and email when prompted.

Verify you're logged in:
```bash
npm whoami
```

---

## Step 2: Create NPM Organization (First Time Only)

Since the package is `@ivey-edtech/ai-agents`, you need to create the `ivey-edtech` organization:

1. Go to https://www.npmjs.com/org/create
2. Enter organization name: `ivey-edtech`
3. Choose "Free" plan
4. Click "Create"

---

## Step 3: Prepare for Publishing

From the `.agents` directory:

```bash
cd "C:\Users\jkruck\Ivey Business School\EdTech Lab - Documents\Github\business-of-marketing-in-sport\.agents"
```

Test the package locally:
```bash
npm pack
```

This creates a `.tgz` file - review it to make sure only necessary files are included.

---

## Step 4: Publish to NPM

### First-time publish:

```bash
npm publish --access public
```

**Note:** The `--access public` flag is required for scoped packages (@ivey-edtech) on the free tier.

### Future updates:

When you make changes, update the version in `package.json`:

```json
{
  "version": "1.0.1"  // Increment this
}
```

Then publish:

```bash
npm version patch  # For bug fixes (1.0.0 -> 1.0.1)
npm version minor  # For new features (1.0.0 -> 1.1.0)
npm version major  # For breaking changes (1.0.0 -> 2.0.0)

npm publish
```

---

## Step 5: Verify Publication

Check your package page:
```
https://www.npmjs.com/package/@ivey-edtech/ai-agents
```

Test installation:
```bash
npx @ivey-edtech/ai-agents@latest --help
```

---

## What Your Coworkers Will Do

### Option 1: Quick Use (No Installation)

```bash
npx @ivey-edtech/ai-agents@latest
```

This downloads and runs the agents temporarily. Perfect for one-off use.

### Option 2: Global Install (Regular Use)

```bash
npm install -g @ivey-edtech/ai-agents
```

Then they can run:
```bash
ivey-agents
ivey-agents content-review modules/module-1/index.html
ivey-agents accessibility modules/module-1/widgets/revenue-builder.html
```

### Option 3: Project Install (Team Projects)

In their course project:
```bash
npm install --save-dev @ivey-edtech/ai-agents
```

Then anyone on the team can run:
```bash
npx ivey-agents
```

---

## Setting Up API Keys (Required for All Users)

After installation, users need to set up their Anthropic API key.

The `postinstall` script (`setup.js`) automatically:
1. Creates a `.env` file
2. Prompts them to add their API key
3. Creates a `reports/` directory

They just need to:
1. Get an API key from https://console.anthropic.com/
2. Edit `.env` and add: `ANTHROPIC_API_KEY=sk-ant-...`

---

## Package Files Included

Based on the `files` field in `package.json`, NPM will publish:

✅ **Included:**
- All `.js` files (agents, launcher, CLI)
- `.env.example`
- `README.md`
- `QUICK-REFERENCE.md`
- `TEAM-GUIDE.md`
- `NPM-INSTALL-GUIDE.md`
- `package.json`

❌ **Excluded:**
- `web/**` (Vercel app)
- `reports/**` (Generated reports)
- `node_modules/**`
- `.env` (secrets)

---

## Updating the Package

### For bug fixes:

```bash
# Make your code changes
npm version patch
npm publish
```

### For new features:

```bash
# Add new agent or feature
npm version minor
npm publish
```

### For breaking changes:

```bash
# Change CLI interface or remove agents
npm version major
npm publish
```

---

## Usage Examples for Coworkers

Once published, share these commands with your team:

### Quick Content Review
```bash
npx @ivey-edtech/ai-agents content-review modules/module-1/index.html
```

### Accessibility Audit
```bash
npx @ivey-edtech/ai-agents accessibility modules/module-1/widgets/fan-engagement.html
```

### Generate Rubric
```bash
npx @ivey-edtech/ai-agents rubric modules/module-1/outline.html
```

### Interactive Launcher
```bash
npx @ivey-edtech/ai-agents
```

### Help
```bash
npx @ivey-edtech/ai-agents --help
```

---

## Troubleshooting

### "404 Not Found" when publishing

- Make sure you created the `@ivey-edtech` organization
- Verify you're logged in: `npm whoami`
- Check organization membership: https://www.npmjs.com/settings/ivey-edtech/members

### "You must verify your email"

- Check your email for NPM verification link
- Resend: https://www.npmjs.com/email-edit

### "Package name too similar to existing package"

- Change package name in `package.json` to something unique
- Example: `@ivey-edtech/course-qa-agents`

### "You do not have permission to publish"

- Make sure you own the `@ivey-edtech` organization
- Or publish under your personal account: change name to `ivey-ai-agents` (no @scope)

---

## Alternative: Publish Under Personal Account

If you don't want to create an organization, change `package.json`:

```json
{
  "name": "ivey-education-agents",  // Remove @ivey-edtech/
  // ... rest of file
}
```

Then:
```bash
npm publish
```

Users would install with:
```bash
npx ivey-education-agents@latest
```

---

## Next Steps After Publishing

1. **Update GitHub README**: Add NPM badge and installation instructions
2. **Share with Team**: Send them the `NPM-INSTALL-GUIDE.md`
3. **Test Installation**: Try installing on a fresh machine
4. **Monitor Usage**: Check download stats at https://www.npmjs.com/package/@ivey-edtech/ai-agents
5. **Collect Feedback**: Ask coworkers to report issues on GitHub

---

## Package Maintenance

### Check download stats:
```
https://www.npmjs.com/package/@ivey-edtech/ai-agents
```

### Deprecate old versions:
```bash
npm deprecate @ivey-edtech/ai-agents@1.0.0 "Please upgrade to 1.1.0"
```

### Unpublish (within 72 hours only):
```bash
npm unpublish @ivey-edtech/ai-agents@1.0.0
```

### Transfer ownership:
```
https://www.npmjs.com/settings/ivey-edtech/members
```

---

## Documentation to Share with Coworkers

Send them these files from the package:

1. **NPM-INSTALL-GUIDE.md** - How to install and use
2. **QUICK-REFERENCE.md** - Command cheat sheet
3. **TEAM-GUIDE.md** - Using with Claude Code (alternative method)
4. **README.md** - Full documentation

Or just send them this one command:

```bash
npx @ivey-edtech/ai-agents@latest
```

And tell them to follow the setup prompts!

---

**Ready to publish?** Run `npm publish --access public` from the `.agents` directory.
