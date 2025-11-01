// Week 1: The Business of Sport - Where the Money Flows - Learning Outcomes Mapping

// Course-Level Outcomes (CLOs) for Business of Marketing in Sport
const courseOutcomes = [
    {
        code: 'CLO 1',
        text: 'Analyze revenue generation strategies across sports business ecosystems'
    },
    {
        code: 'CLO 2',
        text: 'Evaluate media & fan monetization approaches'
    },
    {
        code: 'CLO 3',
        text: 'Design sponsorship & betting growth strategies'
    },
    {
        code: 'CLO 4',
        text: 'Build athlete & emerging sport brands'
    },
    {
        code: 'CLO 5',
        text: 'Balance legacy properties with innovation trends'
    }
];

// Week 1 Module Learning Outcomes (MLOs)
const week1MLOs = {
    'mlo-1-1': {
        code: 'MLO 1.1',
        text: 'Map the major revenue streams in professional sport',
        clos: ['CLO 1']
    },
    'mlo-1-2': {
        code: 'MLO 1.2',
        text: 'Explain sport\'s unique business model characteristics',
        clos: ['CLO 1']
    },
    'mlo-1-3': {
        code: 'MLO 1.3',
        text: 'Evaluate the vulnerabilities and growth potential of each revenue stream',
        clos: ['CLO 1']
    },
    'mlo-1-4': {
        code: 'MLO 1.4',
        text: 'Analyze different revenue sharing models across leagues',
        clos: ['CLO 1']
    }
};

// Module-specific configurations showing which MLOs each module addresses
const moduleConfigs = {
    'module-0': {
        moduleNumber: 'MODULE 0',
        moduleTitle: 'Bridge-In: The Connor McDavid Paradox',
        mlos: [
            {
                code: 'Diagnostic',
                text: 'Pre-assessment covering all 4 Week 1 learning outcomes to establish baseline knowledge',
                clos: ['CLO 1']
            }
        ]
    },
    'module-1': {
        moduleNumber: 'MODULE 1',
        moduleTitle: 'Welcome & Learning Objectives',
        mlos: [
            week1MLOs['mlo-1-1'],
            week1MLOs['mlo-1-2'],
            week1MLOs['mlo-1-3'],
            week1MLOs['mlo-1-4']
        ]
    },
    'module-2': {
        moduleNumber: 'MODULE 2',
        moduleTitle: 'Executive Leader Perspective',
        mlos: [
            {
                code: 'MLO 1.1',
                text: 'Identify the five revenue streams through executive insights and practitioner examples',
                clos: ['CLO 1']
            },
            {
                code: 'MLO 1.2',
                text: 'Understand sport\'s unique business model from Bell Media/TSN executive perspective',
                clos: ['CLO 1']
            }
        ]
    },
    'module-3': {
        moduleNumber: 'MODULE 3',
        moduleTitle: 'Core Content: Revenue Streams',
        mlos: [
            {
                code: 'MLO 1.1',
                text: 'Explore each revenue stream in depth using interactive widgets and discovery',
                clos: ['CLO 1']
            },
            {
                code: 'MLO 1.2',
                text: 'Analyze how revenue streams interconnect as an ecosystem',
                clos: ['CLO 1']
            },
            {
                code: 'MLO 1.3',
                text: 'Evaluate vulnerabilities and growth opportunities for each stream',
                clos: ['CLO 1']
            }
        ]
    },
    'module-4': {
        moduleNumber: 'MODULE 4',
        moduleTitle: 'Interactive Activity: Revenue Empire Builder',
        mlos: [
            {
                code: 'MLO 1.3',
                text: 'Apply revenue stream knowledge by building a five-year strategy',
                clos: ['CLO 1']
            },
            {
                code: 'MLO 1.1',
                text: 'Make strategic allocation decisions across all five revenue streams',
                clos: ['CLO 1']
            }
        ]
    },
    'module-5': {
        moduleNumber: 'MODULE 5',
        moduleTitle: 'Case Study: NHL Vancouver Canucks',
        mlos: [
            {
                code: 'MLO 1.4',
                text: 'Analyze NHL revenue sharing model and impact on competitive balance',
                clos: ['CLO 1']
            },
            {
                code: 'MLO 1.3',
                text: 'Evaluate Canucks\' revenue challenges in Canadian market',
                clos: ['CLO 1']
            }
        ]
    },
    'module-6': {
        moduleNumber: 'MODULE 6',
        moduleTitle: 'Assessment: Reflection Memo',
        mlos: [
            {
                code: 'MLO 1.1',
                text: 'Demonstrate understanding of all revenue streams (assessment)',
                clos: ['CLO 1']
            },
            {
                code: 'MLO 1.2',
                text: 'Explain sport\'s unique business model in written memo (assessment)',
                clos: ['CLO 1']
            },
            {
                code: 'MLO 1.3',
                text: 'Evaluate which revenue stream is most at-risk with evidence (assessment)',
                clos: ['CLO 1']
            },
            {
                code: 'MLO 1.4',
                text: 'Apply revenue sharing understanding to investment recommendation (assessment)',
                clos: ['CLO 1']
            }
        ]
    },
    'module-7': {
        moduleNumber: 'MODULE 7',
        moduleTitle: 'Wrap-Up & Reflection',
        mlos: [
            {
                code: 'Recap',
                text: 'Reflect on Week 1 journey and connect to upcoming Week 2 media content',
                clos: ['CLO 1']
            }
        ]
    }
};
