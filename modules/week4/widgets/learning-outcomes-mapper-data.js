// Week 4: Athletes, Brands & Emerging Sports - Learning Outcomes Mapping

// Course-Level Outcomes (CLOs) for Business of Marketing in Sport
const courseOutcomes = [
    {
        code: 'CLO 1',
        text: 'Analyze revenue generation strategies across sports business ecosystems'
    },
    {
        code: 'CLO 2',
        text: 'Evaluate strategic partnerships and brand building approaches'
    },
    {
        code: 'CLO 3',
        text: 'Design data-driven investment and growth strategies'
    },
    {
        code: 'CLO 4',
        text: 'Apply frameworks to solve complex sports business problems'
    }
];

// Week 4 Module Learning Outcomes (MLOs)
const week4MLOs = {
    'mlo-4-1': {
        code: 'MLO 4.1',
        text: 'Analyze the five athlete revenue streams and distinguish equity-based wealth from fee-based income',
        clos: ['CLO 1', 'CLO 4']
    },
    'mlo-4-2': {
        code: 'MLO 4.2',
        text: 'Evaluate owned asset strategy versus endorsement strategy with NPV analysis and risk assessment',
        clos: ['CLO 2', 'CLO 3', 'CLO 4']
    },
    'mlo-4-3': {
        code: 'MLO 4.3',
        text: 'Assess women\'s sports and emerging sports investment opportunities using IRR and first-mover advantage analysis',
        clos: ['CLO 3', 'CLO 4']
    },
    'mlo-4-4': {
        code: 'MLO 4.4',
        text: 'Design post-career transition strategies that preserve wealth across 50+ year time horizons',
        clos: ['CLO 2', 'CLO 3', 'CLO 4']
    }
};

// Module-specific configurations showing which MLOs each module addresses
const moduleConfigs = {
    'module-0': {
        moduleNumber: 'MODULE 0',
        moduleTitle: 'Bridge-In: The Athlete Brand Paradox',
        mlos: [
            {
                code: 'Diagnostic',
                text: 'Pre-assessment covering all 4 Week 4 learning outcomes to establish baseline knowledge',
                clos: ['CLO 4']
            }
        ]
    },
    'module-1': {
        moduleNumber: 'MODULE 1',
        moduleTitle: 'Welcome & Learning Outcomes',
        mlos: [
            week4MLOs['mlo-4-1'],
            week4MLOs['mlo-4-2'],
            week4MLOs['mlo-4-3'],
            week4MLOs['mlo-4-4']
        ]
    },
    'module-2': {
        moduleNumber: 'MODULE 2',
        moduleTitle: 'Executive Perspectives',
        mlos: [
            {
                code: 'MLO 4.1',
                text: 'Identify the five revenue streams through practitioner examples (sports agent, PGA executive)',
                clos: ['CLO 1', 'CLO 4']
            },
            {
                code: 'MLO 4.2',
                text: 'Understand owned vs endorsed assets from real agent negotiations',
                clos: ['CLO 2', 'CLO 3', 'CLO 4']
            },
            {
                code: 'MLO 4.3',
                text: 'Learn women\'s sports investment thesis from industry experts',
                clos: ['CLO 3', 'CLO 4']
            }
        ]
    },
    'module-3': {
        moduleNumber: 'MODULE 3',
        moduleTitle: 'Core Content: Frameworks',
        mlos: [
            {
                code: 'MLO 4.1',
                text: 'Build athlete brand portfolios using the Athlete Brand Calculator widget',
                clos: ['CLO 1', 'CLO 4']
            },
            {
                code: 'MLO 4.2',
                text: 'Calculate NPV differences between endorsement fees and owned business equity',
                clos: ['CLO 2', 'CLO 3', 'CLO 4']
            },
            {
                code: 'MLO 4.3',
                text: 'Evaluate NWSL, WNBA, and emerging sport opportunities with IRR analysis',
                clos: ['CLO 3', 'CLO 4']
            }
        ]
    },
    'module-4': {
        moduleNumber: 'MODULE 4',
        moduleTitle: 'Interactive Simulations',
        mlos: [
            {
                code: 'MLO 4.4',
                text: 'Simulate career-phase decisions using the Post-Career Wealth Simulator',
                clos: ['CLO 2', 'CLO 3', 'CLO 4']
            },
            {
                code: 'MLO 4.1',
                text: 'Navigate endorsement vs equity trade-offs with the Athlete Decision Tree',
                clos: ['CLO 1', 'CLO 4']
            }
        ]
    },
    'module-5': {
        moduleNumber: 'MODULE 5',
        moduleTitle: 'Case Study: Serena Williams',
        mlos: [
            {
                code: 'MLO 4.1',
                text: 'Map Serena\'s revenue streams (endorsements, S by Serena, Serena Ventures, media)',
                clos: ['CLO 1', 'CLO 4']
            },
            {
                code: 'MLO 4.2',
                text: 'Analyze why Serena chose 30% endorsements / 70% equity allocation',
                clos: ['CLO 2', 'CLO 3', 'CLO 4']
            },
            {
                code: 'MLO 4.3',
                text: 'Evaluate Serena Ventures\' women\'s sports investments (NWSL teams, women-founded startups)',
                clos: ['CLO 3', 'CLO 4']
            },
            {
                code: 'MLO 4.4',
                text: 'Assess how Serena built assets during career (2014-2018) that sustain post-retirement value',
                clos: ['CLO 2', 'CLO 3', 'CLO 4']
            }
        ]
    },
    'module-6': {
        moduleNumber: 'MODULE 6',
        moduleTitle: 'Assessment: Strategic Brand Memo',
        mlos: [
            {
                code: 'MLO 4.1',
                text: 'Design revenue stream allocation strategy for hypothetical athlete (Section 1)',
                clos: ['CLO 1', 'CLO 4']
            },
            {
                code: 'MLO 4.2',
                text: 'Compare owned assets vs endorsements with NPV analysis (Section 2)',
                clos: ['CLO 2', 'CLO 3', 'CLO 4']
            },
            {
                code: 'MLO 4.3',
                text: 'Recommend 2-3 specific investment opportunities with IRR projections (Section 3)',
                clos: ['CLO 3', 'CLO 4']
            },
            {
                code: 'MLO 4.4',
                text: 'Create post-career transition plan with wealth preservation analysis (Section 4)',
                clos: ['CLO 2', 'CLO 3', 'CLO 4']
            }
        ]
    },
    'module-7': {
        moduleNumber: 'MODULE 7',
        moduleTitle: 'Wrap-Up & Reflection',
        mlos: [
            {
                code: 'Recap',
                text: 'Reflect on Week 4 journey and connect to Anchor Project Milestone 3',
                clos: ['CLO 4']
            }
        ]
    }
};
