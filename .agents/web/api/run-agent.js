// Serverless API endpoint for running agents
// Compatible with Vercel/Netlify

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Dynamic import for Anthropic SDK
        const { default: Anthropic } = await import('@anthropic-ai/sdk');

        const { agent, content, apiKey } = req.body;

        // Validate inputs
        if (!agent || !content || !apiKey) {
            return res.status(400).json({ error: 'Missing required fields: agent, content, or apiKey' });
        }

        if (!apiKey.startsWith('sk-ant-')) {
            return res.status(400).json({ error: 'Invalid API key format' });
        }

        // Initialize Anthropic client
        const anthropic = new Anthropic({
            apiKey: apiKey,
        });

        // Route to appropriate agent handler
        let result;
        switch (agent) {
            case 'sports-content-reviewer-fast':
                result = await runContentReviewer(anthropic, content);
                break;
            case 'accessibility-auditor':
                result = await runAccessibilityAuditor(anthropic, content);
                break;
            case 'branding-checker':
                result = await runBrandingChecker(anthropic, content);
                break;
            case 'widget-tester':
                result = await runWidgetTester(anthropic, content);
                break;
            case 'rubric-generator':
                result = await runRubricGenerator(anthropic, content);
                break;
            case 'student-journey-simulator':
                result = await runStudentJourney(anthropic, content);
                break;
            default:
                return res.status(400).json({ error: 'Unknown agent type' });
        }

        return res.status(200).json({
            success: true,
            report: result
        });

    } catch (error) {
        console.error('Error running agent:', error);
        return res.status(500).json({
            error: error.message || 'Internal server error',
            stack: error.stack
        });
    }
}

// Agent implementations

async function runContentReviewer(anthropic, content) {
    const prompt = `You are a content quality reviewer for educational course materials.

Analyze the following HTML content and provide:
1. Overall quality assessment (1-5 stars)
2. Strengths (3-5 specific points)
3. Issues to address (High/Medium/Low priority)
4. Specific recommendations with line numbers if applicable
5. Accessibility concerns
6. UDL (Universal Design for Learning) compliance

HTML Content:
\`\`\`html
${content}
\`\`\`

Provide your analysis in clear markdown format.`;

    const message = await anthropic.messages.create({
        model: 'claude-haiku-4-20250514',
        max_tokens: 4096,
        messages: [
            { role: 'user', content: prompt }
        ]
    });

    return message.content[0].text;
}

async function runAccessibilityAuditor(anthropic, content) {
    const prompt = `You are a WCAG 2.1 AA accessibility auditor.

Audit the following HTML content for accessibility compliance:

1. **WCAG 2.1 AA Compliance Check**
   - Color contrast issues
   - Alt text for images
   - Heading hierarchy
   - Keyboard navigation
   - Form labels
   - ARIA attributes

2. **Priority-Ranked Issues**
   - Critical (must fix)
   - High (should fix)
   - Medium (recommended)
   - Low (nice to have)

3. **Specific Code Examples**
   - Show problematic code
   - Provide corrected version
   - Include line numbers if possible

4. **Overall Score** (0-100)

HTML Content:
\`\`\`html
${content}
\`\`\`

Format your report in markdown.`;

    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-5-20251206',
        max_tokens: 8192,
        messages: [
            { role: 'user', content: prompt }
        ]
    });

    return message.content[0].text;
}

async function runBrandingChecker(anthropic, content) {
    const prompt = `You are a brand consistency checker for Ivey Business School.

Brand Guidelines:
- Primary color: Ivey Blue (#1e3a8a)
- Secondary color: Gold (#c5b783)
- Typography: Professional, clean fonts
- Tone: Academic yet approachable
- Logo usage: Clear, prominent, professional

Analyze the HTML content for:
1. Color scheme adherence
2. Typography consistency
3. Logo usage (if applicable)
4. Brand voice/tone in copy
5. Visual hierarchy
6. Professional appearance

HTML Content:
\`\`\`html
${content}
\`\`\`

Provide specific recommendations in markdown format.`;

    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-5-20251206',
        max_tokens: 6144,
        messages: [
            { role: 'user', content: prompt }
        ]
    });

    return message.content[0].text;
}

async function runWidgetTester(anthropic, content) {
    const prompt = `You are a widget functionality and UX tester for educational interactive tools.

Test the following widget HTML for:
1. **Functionality Analysis**
   - Interactive elements (buttons, inputs, etc.)
   - JavaScript logic and event handlers
   - Data validation
   - Error handling

2. **UX Assessment**
   - Intuitive design
   - Clear instructions
   - Feedback mechanisms
   - Loading states

3. **Student Experience**
   - Simulate 3 personas:
     a) Quick Learner (tech-savvy)
     b) Methodical Analyst (careful, detail-oriented)
     c) Struggling Student (needs extra support)

4. **Issues Found**
   - Bugs or errors
   - Confusing UX
   - Missing features
   - Accessibility concerns

HTML Content:
\`\`\`html
${content}
\`\`\`

Provide detailed testing report in markdown.`;

    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-5-20251206',
        max_tokens: 8192,
        messages: [
            { role: 'user', content: prompt }
        ]
    });

    return message.content[0].text;
}

async function runRubricGenerator(anthropic, content) {
    const prompt = `You are an assessment rubric generator following Quality Matters (QM) standards.

From the HTML content, extract learning outcomes and generate a comprehensive rubric.

Create:
1. **Assessment Criteria** (4-6 criteria based on learning outcomes)
2. **Performance Levels** (Excellent, Proficient, Developing, Needs Improvement)
3. **Point Values** (aligned with criteria importance)
4. **Detailed Descriptors** for each level
5. **Total Points Breakdown**

Ensure:
- Alignment with measurable learning outcomes
- Clear, objective language
- Appropriate point distribution
- QM compliance

HTML Content:
\`\`\`html
${content}
\`\`\`

Generate rubric in markdown table format.`;

    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-5-20251206',
        max_tokens: 6144,
        messages: [
            { role: 'user', content: prompt }
        ]
    });

    return message.content[0].text;
}

async function runStudentJourney(anthropic, content) {
    const prompt = `You are simulating a complete student learning journey through course content.

Simulate 4 different student personas:
1. **Visual Learner** - Prefers images, videos, diagrams
2. **Analytical Thinker** - Enjoys data, logic, frameworks
3. **Collaborative Leader** - Thrives in group activities
4. **Time-Constrained Professional** - Needs efficient, focused content

For each persona, analyze:
- First impressions
- Engagement level (1-10)
- Pain points and friction
- Positive experiences
- Learning effectiveness
- Completion likelihood
- Suggestions for improvement

HTML Content:
\`\`\`html
${content}
\`\`\`

Provide comprehensive journey analysis in markdown format.`;

    const message = await anthropic.messages.create({
        model: 'claude-opus-4-20250514',
        max_tokens: 16384,
        messages: [
            { role: 'user', content: prompt }
        ]
    });

    return message.content[0].text;
}
