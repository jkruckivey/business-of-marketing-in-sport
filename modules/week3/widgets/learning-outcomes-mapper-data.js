// Week 3: Sponsorship & Betting - The Growth Engines - Learning Outcomes Mapping

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

// Week 3 Module Learning Outcomes (MLOs)
const week3MLOs = {
    'mlo-3-1': {
        code: 'MLO 3.1',
        text: 'Understand sponsorship as the financial backbone of sport',
        clos: ['CLO 3']
    },
    'mlo-3-2': {
        code: 'MLO 3.2',
        text: 'Analyze sports betting as a new growth driver in the industry',
        clos: ['CLO 3']
    },
    'mlo-3-3': {
        code: 'MLO 3.3',
        text: 'Calculate how brands measure ROI in sport partnerships',
        clos: ['CLO 3']
    },
    'mlo-3-4': {
        code: 'MLO 3.4',
        text: 'Design sponsorship activations that deliver measurable value',
        clos: ['CLO 3']
    }
};

// Module-specific configurations showing which MLOs each module addresses
const moduleConfigs = {
    'module-1': {
        moduleNumber: 'MODULE 1',
        moduleTitle: 'Welcome & Learning Objectives',
        mlos: [
            week3MLOs['mlo-3-1'],
            week3MLOs['mlo-3-2'],
            week3MLOs['mlo-3-3'],
            week3MLOs['mlo-3-4']
        ]
    },
    'module-2': {
        moduleNumber: 'MODULE 2',
        moduleTitle: 'Sponsorship Framework',
        mlos: [
            {
                code: 'MLO 3.1',
                text: 'Explore sponsorship as the financial backbone through framework building',
                clos: ['CLO 3']
            },
            {
                code: 'MLO 3.3',
                text: 'Learn ROI measurement fundamentals and brand evaluation criteria',
                clos: ['CLO 3']
            }
        ]
    },
    'module-3': {
        moduleNumber: 'MODULE 3',
        moduleTitle: 'Sports Betting Economics',
        mlos: [
            {
                code: 'MLO 3.2',
                text: 'Analyze betting as growth driver across regulatory environments',
                clos: ['CLO 3']
            },
            {
                code: 'MLO 3.1',
                text: 'Understand betting partnerships as new sponsorship category',
                clos: ['CLO 3']
            }
        ]
    },
    'module-4': {
        moduleNumber: 'MODULE 4',
        moduleTitle: 'FanDuel Case Study',
        mlos: [
            {
                code: 'MLO 3.2',
                text: 'Apply frameworks to FanDuel\'s market strategy and partnership model',
                clos: ['CLO 3']
            },
            {
                code: 'MLO 3.3',
                text: 'Evaluate FanDuel\'s approach to measuring partnership value and fan engagement',
                clos: ['CLO 3']
            }
        ]
    },
    'module-5': {
        moduleNumber: 'MODULE 5',
        moduleTitle: 'Group Sprint: Activation Plan',
        mlos: [
            {
                code: 'MLO 3.4',
                text: 'Design 1-page sponsorship activation plan with measurable outcomes',
                clos: ['CLO 3']
            },
            {
                code: 'MLO 3.3',
                text: 'Calculate ROI projections using industry frameworks',
                clos: ['CLO 3']
            }
        ]
    },
    'module-6': {
        moduleNumber: 'MODULE 6',
        moduleTitle: 'Assessment & Reflection',
        mlos: [
            {
                code: 'MLO 3.1',
                text: 'Demonstrate understanding of sponsorship\'s role in sports business (assessment)',
                clos: ['CLO 3']
            },
            {
                code: 'MLO 3.2',
                text: 'Show mastery of betting economics and fan engagement impact (assessment)',
                clos: ['CLO 3']
            },
            {
                code: 'MLO 3.3',
                text: 'Apply ROI calculation frameworks to real scenarios (assessment)',
                clos: ['CLO 3']
            },
            {
                code: 'MLO 3.4',
                text: 'Submit and defend sponsorship activation plan (assessment)',
                clos: ['CLO 3']
            }
        ]
    }
};
