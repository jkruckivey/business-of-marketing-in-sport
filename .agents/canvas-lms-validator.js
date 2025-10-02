import { query } from '@anthropic-ai/claude-agent-sdk';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Canvas LMS Integration Validator Agent
 * Ensures widgets embed properly in Canvas and follow AMBA template standards
 * Specific to Business of Marketing in Sport project
 */

const canvasValidatorPrompt = `You are a Canvas LMS integration expert for the Business of Marketing in Sport course at Ivey Business School.

Your role is to validate HTML/CSS/JS files for Canvas LMS compatibility:

1. CANVAS EMBEDDING REQUIREMENTS
   - No external dependencies that Canvas blocks (check CDN links)
   - Iframe-safe JavaScript (no window.top manipulation)
   - Proper viewport meta tags for responsive embedding
   - No conflicting CSS that breaks Canvas UI
   - LocalStorage usage is safe (Canvas allows it)

2. AMBA TEMPLATE COMPLIANCE
   - Follows Ivey's AMBA accessibility standards
   - Proper heading structure for Canvas content area
   - Compatible with Canvas's Rich Content Editor
   - Works within Canvas's iframe security model

3. DP-FRAMEWORK COMPATIBILITY
   - Check for dp-framework CSS classes if used
   - Verify responsive breakpoints work in Canvas
   - Test mobile view compatibility

4. SPORTS MARKETING CONTEXT
   - Educational content aligns with course objectives
   - Widget serves clear pedagogical purpose
   - Instructions are clear for MBA students
   - Terminology matches sports marketing industry standards

5. TECHNICAL CHECKS
   - All resources use HTTPS (Canvas requirement)
   - No inline event handlers (use addEventListener)
   - Export functions generate Canvas-compatible formats
   - No pop-ups or alerts that Canvas blocks

6. EXECUTIVE SESSION INTEGRATION
   - Content supports executive-led learning
   - Real-world sports marketing applications
   - Suitable for 50-student cohort interaction

Provide:
- Canvas compatibility score (0-100%)
- Specific issues with Canvas embedding
- AMBA compliance status
- Recommendations for Canvas optimization
- Embed code snippet if needed`;

async function validateCanvasWidget(widgetPath) {
  console.log(`🌐 Validating Canvas LMS compatibility for: ${widgetPath}\n`);

  try {
    const result = query({
      prompt: `Validate ${widgetPath} for Canvas LMS embedding in the Business of Marketing in Sport course.

Analyze:
1. Canvas LMS compatibility (iframe, security, resources)
2. AMBA template compliance
3. dp-framework usage (if applicable)
4. Sports marketing educational value
5. Executive session suitability
6. Mobile responsiveness in Canvas

Generate a report as canvas-validation-report.md with:
- Overall Canvas compatibility score
- Critical issues blocking Canvas deployment
- AMBA compliance status
- Optimization recommendations
- Canvas embed code example`,

      options: {
        agents: {
          'canvas-lms-validator': {
            description: 'Canvas LMS integration validator for sports marketing course',
            tools: ['read', 'grep', 'glob', 'write'],
            prompt: canvasValidatorPrompt,
            model: 'sonnet'
          }
        },
        systemPrompt: canvasValidatorPrompt,
        permissionMode: 'bypassPermissions'
      }
    });

    for await (const message of result) {
      if (message.type === 'assistant' && message.message?.content) {
        const content = message.message.content;
        for (const block of content) {
          if (block.type === 'text') {
            console.log(block.text);
          }
        }
      }
    }

    console.log('\n✅ Canvas validation complete!');
  } catch (error) {
    console.error('❌ Error during validation:', error.message);
  }
}

export { validateCanvasWidget };

if (process.argv[2]) {
  validateCanvasWidget(process.argv[2]);
}
