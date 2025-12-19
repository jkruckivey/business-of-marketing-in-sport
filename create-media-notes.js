const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle, HeadingLevel, AlignmentType } = require('docx');
const fs = require('fs');

// Video data extracted from SME scripts
const videos = [
  // Week 1
  {
    code: "VIDEO #0 IO - Cohort - BOSM – W1-M0, V1",
    title: "The $100 Million Question",
    format: "Direct-to-camera with slides",
    length: "2:30",
    placement: "Module 0 (Bridge-In)",
    script: [
      { text: "Hi, I'm [NAME], and I've spent [X] years working in professional sport—most recently as [ROLE] at [ORGANIZATION]. I've been on both sides of the table for deals worth hundreds of millions of dollars.\n\nAnd I want to start this course with a problem that's kept me up at night.", visual: "Title Slide: \"The $100 Million Question\"\n\nOn \"Hi, I'm\": Lower third — Name + Title appears" },
      { text: "Imagine you're the GM of an NHL team. You just signed Connor McDavid—the best player in hockey—to a $100 million, 8-year contract.\n\nThat's $12.5 million per year. Your CFO tracks the immediate impacts:\n- Ticket sales jump $5 million\n- Jersey sales spike $3 million\n- That's $8 million in new revenue\n\nYour board looks at these numbers and asks the obvious question: 'Why did we just LOSE $4.5 million per year on this deal?'", visual: "On \"$100 million, 8-year contract\": Contract slide appears ($100M / 8 years = $12.5M/year)\n\nOn \"Ticket sales jump\": Revenue math appears ($5M + $3M = $8M)\n\nOn \"LOSE $4.5 million\": Loss equation appears ($12.5M - $8M = -$4.5M?)" },
      { text: "Here's what I learned the hard way: If you're asking that question, you're measuring the WRONG things.\n\nBecause Connor McDavid isn't worth $8 million to your organization. He's worth $30 to $40 million per year.\n\nThe problem isn't the numbers. The problem is understanding how sport revenue works DIFFERENTLY than almost any other business.\n\nThere's a revenue ecosystem at play here—interdependencies that your CFO's spreadsheet will never capture.", visual: "On \"$30 to $40 million per year\": Text \"Actual Value: $30-40M/year\" appears\n\nOn \"revenue ecosystem at play\": Revenue ecosystem visual (5 streams connected)" },
      { text: "This week, you're going to learn how to see that ecosystem. You'll map five major revenue streams in professional sport. You'll understand why they're interdependent. And by the end, you'll be able to defend that $100 million contract to a skeptical board—with numbers they can't argue with.\n\nBut first, I want to know: Do you ALREADY have the knowledge to solve this problem? Take the diagnostic exercise that follows this video.\n\nLet's find out what you already know... and what you're about to discover.", visual: "On \"diagnostic exercise that follows\": Text \"Next: Diagnostic Exercise + Pre-Assessment\" appears\n\nRemains to end" }
    ]
  },
  {
    code: "VIDEO #1 IO - Cohort - BOSM – W1-M3, V1",
    title: "Five Revenue Streams",
    format: "Animated graphics with narrator",
    length: "2:00",
    placement: "Module 3 (Core Reading)",
    script: [
      { text: "Professional sports generates revenue from five major sources. Understanding these streams is essential for analyzing sports business strategy.\n\nLet's break them down quickly.", visual: "Background: Stadium montage\n\nOn \"five major sources\": 5 ICONS appear — TV icon (media) → Ticket icon → Handshake icon (sponsorship) → Jersey icon (merch) → Dice icon (betting)\n\nAll 5 icons stay visible" },
      { text: "Stream 1: Media Rights—40-60% of revenue. Broadcasting and streaming deals. The NFL's current media rights total $110 billion over 11 years. This is the foundation of modern sports economics.\n\nStream 2: Ticketing and Live Events—20-30%. Not just ticket sales—luxury suites, dynamic pricing, concessions, parking. Teams generate $40-50 per attendee beyond the ticket price.\n\nStream 3: Sponsorship and Partnerships—15-25%. Corporate deals like naming rights, jersey sponsors, and category partnerships.\n\nStream 4: Merchandising and Licensing—5-10%. Jerseys, hats, video games. Often pooled and shared equally across teams.\n\nStream 5: Betting and Gaming—2-8%, growing fast. The newest frontier. Growing 30-40% year-over-year.", visual: "Percentage bars animate beside each icon:\n\nOn \"Media Rights—40-60%\": Bar grows to \"40-60%\"\n\nOn \"Ticketing and Live Events—20-30%\": Bar grows to \"20-30%\"\n\nOn \"Sponsorship and Partnerships—15-25%\": Bar grows to \"15-25%\"\n\nOn \"Merchandising and Licensing—5-10%\": Bar grows to \"5-10%\"\n\nOn \"Betting and Gaming—2-8%\": Bar grows to \"2-8%\" + pulses with \"Fastest Growing\" label" },
      { text: "Key insight: These streams don't exist in isolation. They're interconnected. Investment in one stream amplifies others.\n\nSuccessful organizations build revenue ecosystems, not portfolios.", visual: "5 icons reposition from row to circle formation (bars fade out)\n\nOn \"interconnected\": Animated lines connect all 5 icons to central hub\n\nOn \"revenue ecosystems, not portfolios\": Text appears below\n\nText \"Next: Revenue Mix Widget\" appears" }
    ]
  },
  {
    code: "VIDEO #2 IO - Cohort - BOSM – W1-M3, V2",
    title: "Sponsorship & Merchandising",
    format: "Animated graphics with narrator",
    length: "2:00",
    placement: "Module 3, Element 12",
    script: [
      { text: "While media rights and ticketing depend on the game itself, two revenue streams are driven by brand value: sponsorship and merchandising.\n\nLet's see how teams monetize their brands through corporate partnerships and consumer products.", visual: "Background: Arena exterior" },
      { text: "Sponsorship: 15-25% of Revenue.\n\nThe most visible sponsorship deals are naming rights: Scotiabank Arena in Toronto—$800 million over 20 years. That's $40 million per year just for the name.\n\nJersey sponsorship arrived in North America in 2017. Top deals reach $20-30 million per year.\n\nBut the best sponsors don't just buy logos—they create experiences. Fans remember positive moments, not just a logo.\n\nKey sponsorship categories: Naming rights at $15-50 million per year. Jersey and uniform patches at $5-30 million per year. Category partnerships at $500K-10 million per year.", visual: "Tiered pyramid builds from top down:\n\nOn \"naming rights\": Top tier — Arena icon + \"Naming Rights: $800M / 20 years\"\n\nOn \"Jersey sponsorship\": Middle tier — Jersey icon + \"Jersey Patches: $20-30M/year\"\n\nOn \"Key sponsorship categories\": Base tier — Partner icons + \"Category Partners: $5-15M/year\"" },
      { text: "Merchandising: 5-10% of Revenue.\n\nMost major North American leagues use a centralized model. The league manages all licensing, then splits revenue equally among teams. Why? Competitive balance.\n\nRevenue spikes during championship runs. Star acquisitions drive dramatic spikes. New designs generate consistent revenue.\n\nDigital commerce transformed merchandising—teams now sell globally without retail partnerships.", visual: "On \"Scene+ Night\": Text appears as example\n\nOn \"Fans remember positive moments\": Text \"Activations drive engagement, not just logos\" appears\n\nOn \"Merchandising: 5-10%\": Jersey icon + \"Merchandising: 5-10% of Revenue\" appears" },
      { text: "Key insight: These are brand-driven revenue streams. The stronger your brand, the more valuable your sponsorship inventory and the more merchandise you sell.\n\nNext up: Betting—the newest and fastest-growing revenue frontier.", visual: "Split screen comparison:\n\nOn \"brand-driven revenue streams\": Left side — \"Strong Brand\" / Right side — \"Weak Brand\"\n\nText \"Next: Betting & Gaming\" appears" }
    ]
  },
  {
    code: "VIDEO #3 IO - Cohort - BOSM – W1-M5, V1",
    title: "Revenue Sharing Models",
    format: "Animated comparisons",
    length: "2:00",
    placement: "Module 5 (Before Case Study)",
    script: [
      { text: "Unlike most industries, professional sports leagues NEED their competitors to thrive. Why?\n\nBecause competitive balance creates a better product—and makes everyone more money.\n\nThis is the logic behind revenue sharing.", visual: "On \"NEED their competitors to thrive\": Text \"Competitors need each other to thrive\" appears\n\nOn \"revenue sharing\": 3 generic league shield ICONS appear in row: League A shield → League B shield → League C crest" },
      { text: "Model 1: NFL—Maximum Socialism, 60% shared. Nearly all revenue is shared equally. Result? The Green Bay Packers—population 105,000—generate similar revenue to the New York Giants. Highest competitive parity in sports.\n\nModel 2: NHL—Moderate Sharing, 50% shared. National media rights, streaming, and merchandise are shared. Local media rights and ticket sales stay with teams. The complication? Canadian teams earn in Canadian dollars but pay players in U.S. dollars.\n\nModel 3: Premier League—Tiered Distribution. TV revenue split three ways: 50% equal, 25% based on finishing position, 25% based on TV appearances.", visual: "Simple 3-column comparison table:\n\nOn \"Model 1: NFL\": NFL column — \"60% shared\"\n\nOn \"Model 2: NHL\": NHL column — \"50% shared\" + \"CAD/USD challenge\"\n\nOn \"Model 3: Premier League\": Premier League column — \"50/25/25 split\"\n\nOn \"Green Bay Packers\": Text \"Green Bay (pop. 105K) ≈ NYC Giants revenue\" appears below" },
      { text: "Why this matters: Revenue sharing limits strategic options, creates governance tensions, and affects team valuations.\n\nIn the Vancouver Canucks case, you'll see how revenue sharing—and currency headwinds—affect strategic decisions.", visual: "New slide (columns fade out)\n\nOn \"limits strategic options\": Text \"More sharing = fewer strategic options\" appears\n\nOn \"Vancouver Canucks case\": Text \"Next: Canucks Case Study\" appears" }
    ]
  },
  {
    code: "VIDEO #4 IO - Cohort - BOSM – W1-M7, V1",
    title: "Rogers NHL Deal",
    format: "Graphics with data points",
    length: "2:00",
    placement: "Module 7 (Week 2 preview)",
    script: [
      { text: "November 2013: Rogers Communications paid $5.2 billion for exclusive Canadian NHL rights—12 years, all platforms, all games.\n\nThe largest sports media deal in Canadian history.\n\nThis deal presented a case study in media market disruption and strategic challenges.", visual: "B-roll: Hockey broadcast or sports network studio\n\nOn \"$5.2 billion\": \"$5.2 Billion / 12 Years\" appears\n\nOn \"largest sports media deal\": \"Canada's Largest Sports Media Deal\" appears" },
      { text: "Rogers' Three Strategic Goals:\n\nGoal 1: Defend cable subscribers. They believed NHL rights would prevent cord-cutting. Reality: Canadian traditional TV subscriptions declined significantly during the contract period.\n\nGoal 2: Build streaming dominance. They projected 1+ million Sportsnet NOW subscribers. Reality: They reached only 450,000 by 2024.\n\nGoal 3: Brand positioning. Become Canada's #1 sports network. Partial success.\n\nRogers' annual rights fees escalated from $300 million to $500 million across the contract period.", visual: "3 goals build vertically with status indicators:\n\nOn \"Goal 1: Defend cable\": Cable icon + \"1. Defend Cable\" + ❌ \"Declined\"\n\nOn \"Goal 2: Build streaming\": Streaming icon + \"2. Streaming Dominance\" + ❌ \"450K vs. 1M target\"\n\nOn \"Goal 3: Brand positioning\": Brand icon + \"3. Brand Leadership\" + ✓ \"Partial success\"\n\nOn \"$300 million to $500 million\": Cost escalation bar appears: \"$300M → $500M\"" },
      { text: "Lessons learned: Content alone isn't enough—streaming experience and platform architecture matter. Long-term rights deals require flexibility clauses for market disruptions. Media landscape disruption creates risks for fixed-price, multi-year commitments.\n\nIn Week 2, you'll analyze this deal in depth.", visual: "B-roll: Streaming/cord-cutting imagery\n\nOn \"Content alone isn't enough\": Text appears\n\nOn \"flexibility clauses\": \"Long-term deals need flexibility\" appears\n\nOn \"creates risks\": \"Market disruption creates risk\" appears\n\nText \"Week 2: Media Rights & Fan Engagement\" appears" }
    ]
  },
  // Week 2
  {
    code: "VIDEO #5 IO - Cohort - BOSM – W2-M3, V1",
    title: "Media Rights Valuation",
    format: "Animated framework",
    length: "2:00",
    placement: "Module 3 (Before simulation)",
    script: [
      { text: "Amazon paid $1 billion per year for NFL Thursday Night Football. Rogers paid $5.2 billion over 12 years for NHL Canadian rights.\n\nHow do media companies decide what sports content is worth?\n\nThe Five-Factor Valuation Framework.", visual: "2 deal examples build:\n\nOn \"Amazon paid $1 billion\": Streaming platform icon + \"Streamer A: $1B/year\"\n\nOn \"Rogers paid $5.2 billion\": Broadcaster icon + \"Broadcaster B: $5.2B/12 years\"" },
      { text: "Factor 1: Audience Size and Demographics. Larger, more valuable audiences command higher prices.\n\nCritical: Model viewership trends, not just current numbers. Rogers assumed stable NHL ratings. They experienced ratings declines.\n\nFactor 2: Exclusivity and Competition. More bidders equals higher prices. Exclusive rights cost 2-3x more than non-exclusive.\n\nFactor 3: Content Volume and Scheduling. Quality matters more than quantity. One NFL primetime game is worth 10-15 mid-week NHL games.\n\nFactor 4: Brand Alignment and Sponsorship. Sponsorship revenue can subsidize 20-35% of rights costs.\n\nFactor 5: Platform Strategy Fit. Sometimes you pay more because it serves strategic goals. Warning: Strategic value must be measurable.", visual: "5 factor ICONS build vertically:\n\nOn \"Factor 1: Audience Size\": People icon + \"1. Audience Size & Demographics\"\n\nOn \"Factor 2: Exclusivity\": Lock icon + \"2. Exclusivity & Competition\"\n\nOn \"Factor 3: Content Volume\": Calendar icon + \"3. Content Volume & Scheduling\"\n\nOn \"Factor 4: Brand Alignment\": Handshake icon + \"4. Sponsorship Integration\"\n\nOn \"Factor 5: Platform Strategy\": Device icon + \"5. Platform Strategy Fit\"\n\nOn \"Rogers assumed stable NHL ratings\": Warning icon pulses with \"Model trends, not current numbers\"" },
      { text: "The Five Factors: Audience Size and Demographics. Exclusivity and Competition. Content Volume and Scheduling. Brand Alignment and Sponsorship. Platform Strategy Fit.\n\nIn the Streaming Wars simulation, you'll apply this framework to make your own billion-dollar decisions.", visual: "5 icons reposition into connected diagram (lines link all 5)\n\nOn \"Streaming Wars simulation\": Text \"Next: Streaming Wars Simulation\" appears" }
    ]
  },
  {
    code: "VIDEO #6 IO - Cohort - BOSM – W2-M3, V2",
    title: "Linear vs Streaming",
    format: "Split-screen comparison",
    length: "2:00",
    placement: "Module 3 (Before simulation)",
    script: [
      { text: "For 50 years, sports media economics were simple: Broadcast games on TV, sell ads, make money.\n\nThen streaming arrived.\n\nLinear TV vs. Streaming: Fundamentally different economics.", visual: "Animation: Old TV morphing into streaming app" },
      { text: "Revenue Models.\n\nLinear TV: Advertising at 70-80% plus carriage fees at 20-30%.\n\nStreaming: Subscriptions at 80-95% plus optional ads at 5-20%.\n\nKey difference: Linear monetizes audience. Streaming monetizes subscribers.", visual: "Split screen layout:\n\nOn \"Linear TV: Advertising\": LEFT — TV icon + \"Linear TV\" + pie chart (70% ads, 30% carriage)\n\nOn \"Streaming: Subscriptions\": RIGHT — Streaming icon + \"Streaming\" + pie chart (85% subscriptions, 15% ads)\n\nOn \"Linear monetizes audience\": Text \"Linear = Audience / Streaming = Subscribers\" appears" },
      { text: "Cost Structures.\n\nLinear TV: Rights fees at 60-70% plus production at 20-30% plus low distribution costs.\n\nStreaming: Rights fees at 40-50% plus technology at 25-35% plus customer acquisition at 20-30%. Must build platform from scratch.\n\nProfitability Timelines.\n\nLinear TV: Immediate if priced right.\n\nStreaming: 3-5 years using customer lifetime value model.\n\nKey Risks.\n\nLinear TV: Cord-cutting, audience fragmentation.\n\nStreaming: High churn, price sensitivity, competition from tech giants.", visual: "Split layout with cost bars:\n\nLEFT — TV icon + \"Linear TV\" + cost bars (65% Rights, 25% Production, 10% Distribution)\n\nRIGHT — Streaming icon + \"Streaming\" + cost bars (45% Rights, 30% Tech, 25% Acquisition)\n\nTimeline graphic: \"Day 1 profit\" on Linear, \"Year 5 profit\" on Streaming\n\nRisks: Scissors icon + \"Cord-cutting\" under Linear, Churn icon + \"High churn\" under Streaming" },
      { text: "Most successful strategy? Hybrid. Maintain linear TV cash flow while building streaming for the future.\n\nThe risk? Cord-cutting cannibalizes faster than streaming grows. This is what happened to Rogers.\n\nIn your simulation, you'll choose: Linear, streaming, or hybrid?", visual: "3 diverging paths:\n\nOn \"Hybrid\": TV icon + \"Linear\" path (left) / Hybrid icon + \"Hybrid\" path (center) / Streaming icon + \"Streaming\" path (right)\n\nOn \"what happened to Rogers\": Text \"Rogers' challenge: cord-cutting cannibalized faster than streaming grew\" appears" }
    ]
  },
  // Week 3
  {
    code: "VIDEO #7 IO - Cohort - BOSM – W3-M0, V1",
    title: "Bridge-In Hook",
    format: "Direct-to-camera with text overlays",
    length: "2:00",
    placement: "Module 0 (Bridge-In)",
    script: [
      { text: "There's a question that haunts every CMO in sports marketing.\n\nMajor brands spend hundreds of millions of dollars annually on sports sponsorships globally.\n\nYour CFO looks at this budget and asks: What are we getting for this investment?\n\nSo you show them the metrics: billions of impressions, billions of viewers reached.\n\nAnd they ask the killer follow-up: How many shoes did that sell?\n\nSilence. Because most sponsorship ROI is fuzzy. We measure impressions, not conversions.", visual: "B-roll: Football stadium with sponsor signage\n\nOn \"hundreds of millions of dollars\": \"Billions spent on sponsorship\" appears\n\nOn \"What are we getting\": \"CFO asks: What are we getting?\" appears\n\nOn \"How many shoes did that sell\": \"But how many shoes did that sell?\" appears" },
      { text: "But something changed in 2018. Sports betting legalization created sponsors who CAN measure conversion: FanDuel, DraftKings, BetMGM.\n\nWhen a betting operator sponsors a team, they know exactly how many people downloaded the app, placed a bet, and became customers. That attribution loop changes everything about sponsorship valuation.", visual: "B-roll: Sports betting app footage\n\nOn \"something changed in 2018\": \"2018: Everything Changed\" appears\n\nOn \"attribution loop\": \"Exposure → Download → Bet → Customer\" appears" },
      { text: "This week, you'll learn to think like both sides: the brand trying to prove ROI, and the betting operator who actually can. By Friday, you'll design an activation plan that answers the CFO's question with data, not hope.", visual: "Split screen:\n\nOn \"think like both sides\": LEFT — Brand icon + \"Brand Perspective\" / RIGHT — Betting icon + \"Operator Perspective\"\n\nText \"Next: Diagnostic Exercise\" appears" }
    ]
  },
  {
    code: "VIDEO #8 IO - Cohort - BOSM – W3-M1, V1",
    title: "Executive Perspective",
    format: "Direct-to-camera",
    length: "2:00",
    placement: "Module 1 (Welcome)",
    script: [
      { text: "How do brands decide where to invest in sports sponsorships—and how do they measure success?\n\nA common mistake: thinking the rights fee is the investment. Wrong. For every $1 in rights fees, brands spend $2-3 on activation. If we pay $5 million to sponsor a team, we'll spend $10-15 million amplifying it.\n\nThe real question isn't \"Can we afford the rights?\"—it's \"Can we activate at scale?\"", visual: "Iceberg graphic builds:\n\nOn \"rights fee is the investment\": Iceberg shape appears → Small tip labeled \"Rights Fee\"\n\nOn \"$2-3 on activation\": Water line reveals large underwater portion labeled \"Activation Costs (2-3x)\"\n\nOn \"$10-15 million amplifying\": Text \"$1 Rights = $2-3 Activation\" appears" },
      { text: "We measure three layers: Reach—how many people saw our brand? Engagement—did they interact? And Conversion—did they buy?\n\nReach is easy—broadcast impressions. Engagement requires data partnerships. Conversion is hardest—tying sales to sponsorship exposure. That's where betting partnerships excel.", visual: "B-roll: Brand activation at sporting event\n\nOn \"Reach—how many people\": \"1. Reach (impressions)\" appears\n\nOn \"Engagement—did they interact\": \"2. Engagement (interaction)\" appears\n\nOn \"Conversion—did they buy\": \"3. Conversion (sales)\" appears\n\nOn \"betting partnerships excel\": \"Betting = Clear Attribution\" appears" },
      { text: "When we partner with FanDuel or DraftKings, we access first-party data: who bet, what they bet on, when they converted. That attribution loop is impossible with traditional jersey sponsors.\n\nSports betting operators offer co-marketing deals where we share customer acquisition costs and conversion data. It's why betting-integrated sponsorships command 20-30% premiums.\n\nYour activation plan this week needs to answer: What's the reach? What's the engagement mechanism? How do we measure conversion?", visual: "B-roll: Executive/boardroom footage\n\nOn \"What's the reach\": \"Reach? ✓\" appears\n\nOn \"What's the engagement\": \"Engagement? ✓\" appears\n\nOn \"How do we measure conversion\": \"Conversion? ?\" appears\n\nOn \"20-30% premiums\": \"20-30% premium for attribution data\" appears" }
    ]
  },
  {
    code: "VIDEO #9 IO - Cohort - BOSM – W3-M2, V1",
    title: "Sponsorship 101",
    format: "SME with animated graphics",
    length: "2:00",
    placement: "Module 2 (Core Content)",
    script: [
      { text: "Why does Coca-Cola pay FIFA hundreds of millions to sponsor the World Cup? Because 3.5 billion people watch it—but that's not the whole story.\n\nSponsorship has two costs: rights fees—what you pay the property—and activation costs—what you spend amplifying the partnership.\n\nIf a brand pays $300M per year in rights, they'll spend $600-900M in activation. The rights fee is just the entry ticket.", visual: "Two-bar diagram builds:\n\nOn \"3.5 billion people watch\": Text \"World Cup: 3.5 billion viewers\" appears\n\nOn \"$300M per year in rights\": First bar grows — \"$300M rights fee\"\n\nOn \"$600-900M in activation\": Second bar grows — \"$600-900M activation\"\n\nOn \"entry ticket\": Label \"Total: $900M-1.2B\" appears" },
      { text: "In exchange, sponsors receive three things. First, Reach—logo exposure across broadcasts, stadiums, digital. Second, Engagement—branded activations, hospitality, fan experiences. Third, Category exclusivity—major sponsors block competitors.\n\nThat exclusivity premium is worth 30-50% of the rights fee alone.", visual: "B-roll: Sponsor signage and fan experiences\n\nOn \"First, Reach\": \"1. Reach (logo exposure)\" appears\n\nOn \"Second, Engagement\": \"2. Engagement (experiences)\" appears\n\nOn \"Third, Category exclusivity\": \"3. Exclusivity (30-50% of value)\" appears" },
      { text: "Brands measure sponsorship like advertising: cost per thousand impressions, or CPM. Premium sports advertising reaches $5,000-10,000 CPM.\n\nWhy lower CPM? Frequency. Fans see a jersey sponsor 20-30 times per season. That repetition builds brand recall.\n\nNext, you'll use the Sponsorship Valuation Calculator to model real deals.", visual: "On \"$5,000-10,000 CPM\": \"CPM: $5,000-10,000 for premium sports\" appears\n\nOn \"20-30 times per season\": \"20-30 exposures per season\" appears\n\nOn \"Sponsorship Valuation Calculator\": \"Next: Calculate Your ROI\" appears" }
    ]
  },
  {
    code: "VIDEO #10 IO - Cohort - BOSM – W3-M3, V1",
    title: "Betting 101",
    format: "SME with data visualizations",
    length: "2:00",
    placement: "Module 3 (Interactive)",
    script: [
      { text: "Sports bettors watch 40% more live sports than non-bettors. They engage 3x more on digital platforms. They spend 2x more on merchandise. That's why betting operators pay premium sponsorship rates.\n\nBetting transforms passive viewers into active participants. When you have money on a game, every play matters. That engagement translates to longer viewing times, more ad exposure, and higher brand recall.", visual: "B-roll: Fans watching game with phones out\n\nOn \"40% more live sports\": \"40% more live sports viewing\" appears\n\nOn \"3x more on digital platforms\": \"3x digital engagement\" appears\n\nOn \"2x more on merchandise\": \"2x merchandise spending\" appears" },
      { text: "Traditional sponsors struggle to prove ROI. How do you connect a jersey logo to shoe sales? Betting operators don't have this problem.\n\nEvery customer has an account. Every bet is tracked. When FanDuel or DraftKings sponsors the NBA, they know exactly how many customers came from broadcast exposure vs. social media vs. stadium signage. That attribution data is worth billions.", visual: "Simple diagram:\n\nOn \"How do you connect\": Split screen — unclear path (left: \"Ad → ??? → Sale\") vs. clear funnel (right: \"Exposure → Download → Bet → Customer\")\n\nOn \"20-30% premiums\": Text \"20-30% premium for attribution\" appears" },
      { text: "This is why betting sponsors pay 20-30% premiums over traditional sponsors. They're not just buying impressions—they're buying customers with measurable lifetime value.\n\nA sports betting customer is worth $500-1,500 in lifetime revenue. If sponsorship drives 100,000 new customers, that's $50-150 million in value.\n\nNext, you'll use the Betting Economics Calculator.", visual: "B-roll: Sports betting app interface\n\nOn \"$500-1,500 in lifetime revenue\": \"$500-1,500 per customer\" appears\n\nOn \"100,000 new customers\": \"100K customers = $50-150M value\" appears\n\nText \"Next: Betting Economics Widget\" appears" }
    ]
  },
  {
    code: "VIDEO #11 IO - Cohort - BOSM – W3-M4, V1",
    title: "FanDuel Case",
    format: "Direct-to-camera",
    length: "2:00",
    placement: "Module 4 (Case Study)",
    script: [
      { text: "FanDuel and DraftKings entered the market aggressively following the 2018 Supreme Court decision that legalized sports betting across states. They pursued rapid expansion through substantial marketing investments and sponsorship partnerships.\n\nWhen sports betting legalized state-by-state starting in May 2018, operators faced a strategic choice: acquire customers now to establish market presence, or move cautiously and risk losing market share.\n\nFanDuel and DraftKings chose aggressive expansion.", visual: "B-roll: News footage or sportsbook opening\n\nOn \"2018 Supreme Court decision\": \"May 2018: Supreme Court Decision\" appears\n\nOn \"State-by-state\": \"State-by-state legalization begins\" appears" },
      { text: "FanDuel's sponsorship strategy focuses on market penetration and customer acquisition. Every NFL partnership, every stadium sponsorship, and every broadcast integration has a clear goal: drive customer adoption through increased visibility.\n\nUnlike traditional sponsors measuring \"brand awareness,\" betting operators measure cost-per-install and conversion metrics directly tied to business outcomes.", visual: "Funnel diagram builds:\n\nOn \"aggressive expansion\": Text \"Major betting operators chose aggressive growth\" appears\n\nOn \"visibility\": Top of funnel — \"Visibility\"\n\nOn \"adoption\": Middle of funnel — \"Adoption\"\n\nOn \"customer\": Bottom of funnel — \"Customer\"\n\nOn \"customer acquisition\": Text \"Every dollar → customer acquisition\" appears" },
      { text: "Here's the case dilemma: What's the path to profitability? Aggressive market entry requires substantial investment. The question becomes: How do operators transition from customer acquisition to sustainable profitability?\n\nYour analysis should evaluate unit economics and the factors that determine long-term viability.\n\nAs you read the case, focus on: acquisition costs, lifetime value, retention rates, and the timeline to profitability.", visual: "B-roll: Business/financial footage\n\nOn \"path to profitability\": \"Customer Acquisition Cost vs. Lifetime Value\" appears\n\nOn \"unit economics\": \"Your Analysis: Can unit economics work?\" appears\n\nText \"Next: Case Study Analysis\" appears" }
    ]
  },
  // Week 4
  {
    code: "VIDEO #12 IO - Cohort - BOSM – W4-M0, V1",
    title: "Bridge-In Hook",
    format: "Direct-to-camera with text overlays",
    length: "2:00",
    placement: "Module 0 (Bridge-In)",
    script: [
      { text: "Here's a problem that challenges everything most people think they know about athlete brands.\n\nSerena Williams' career generated nearly $95 million in prize money over 27 years. Her endorsement earnings over her career were substantial. Yet her total brand equity—including her ventures, media presence, and business ownership—represents significantly more value.\n\nSo where does that additional brand value come from? How do you BUILD a brand worth 5x your on-field earnings?", visual: "B-roll: Serena Williams highlights\n\nOn \"challenges everything\": \"Brand Value ≠ Prize Money\" appears\n\nOn \"$95 million in prize money\": \"$95M prize money (27 years)\" appears\n\nOn \"5x your on-field earnings\": \"Total brand equity: 5x+\" appears" },
      { text: "Here's the key insight: Elite brand value isn't built on performance alone. Serena is one of the greatest athletes ever—but so are dozens of tennis players who never reached 10% of her brand equity.\n\nThe difference is strategic brand architecture. Which revenue streams to prioritize. When to invest in post-career assets. How to build equity in businesses you OWN, not just endorse.", visual: "B-roll: Athlete business footage\n\nOn \"Performance ≠ Brand Value\": Text appears\n\nOn \"strategic brand architecture\": \"The difference: strategic brand architecture\" appears\n\nOn \"OWN, not just endorse\": \"Own, Don't Rent\" appears" },
      { text: "This week, you'll learn how elite athletes build substantial personal brands. You'll understand the five revenue streams athletes use—and which create long-term wealth versus short-term income.\n\nBut first: Can you already explain where that brand value comes from? Take the diagnostic exercise next.", visual: "B-roll: Mix of athlete competition and business\n\nOn \"five revenue streams athletes use\": \"Five athlete revenue streams\" appears\n\nOn \"long-term wealth versus short-term\": \"Which build long-term wealth?\" appears\n\nOn \"diagnostic exercise next\": \"Next: Diagnostic Exercise\" appears" }
    ]
  },
  {
    code: "VIDEO #13 IO - Cohort - BOSM – W4-M1, V1",
    title: "Athlete Revenue Streams",
    format: "SME with animated graphics",
    length: "2:00",
    placement: "Module 1 (Welcome)",
    script: [
      { text: "Every elite athlete has access to five revenue streams. Most athletes optimize for one or two. The highest-net-worth athletes optimize for all five.\n\nStream one: Prize money and salary. This is what you earn competing. It stops when you stop playing.\n\nStream two: Endorsements. Brands pay you to represent them. You're renting your image—you don't own anything.\n\nStream three: Appearances and speaking. Typically $100K-500K per appearance. High hourly rate, but doesn't scale.", visual: "B-roll: Athletes competing, signing autographs\n\nOn \"Stream one: Prize money\": \"1. Prize Money/Salary\" appears\n\nOn \"Stream two: Endorsements\": \"2. Endorsements\" appears\n\nOn \"Stream three: Appearances\": \"3. Appearances ($100K-500K)\" appears\n\nOn \"Trading Time for Money\": \"Streams 1-3: Trading Time for Money\" appears" },
      { text: "Stream four: Equity deals. Instead of cash, you take ownership stakes. Strategic investments can generate significant returns.\n\nStream five: Owned businesses. You build and own the asset. Through Serena Ventures, Williams manages a portfolio of 85+ companies. These generate value whether she plays tennis or not.\n\nThe pattern is clear: Streams one through three trade time for money. Streams four and five build assets that compound.", visual: "Two-line comparison diagram:\n\nOn \"Stream four: Equity deals\": Flat line draws labeled \"Streams 1-3: Trading time for money\"\n\nOn \"Stream five: Owned businesses\": Curved line draws above labeled \"Streams 4-5: Assets that compound\"\n\nOn \"85+ companies\": Text \"Athlete Venture Fund: 85+ companies\" appears" },
      { text: "Elite athletes shift from renting their brand to owning their future.\n\nNext, you'll use the Athlete Brand Calculator to model these streams. See how the mix changes an athlete's long-term wealth trajectory.", visual: "B-roll: Financial planning imagery\n\nOn \"Athlete Brand Calculator\": \"Next: Athlete Brand Calculator\" appears" }
    ]
  },
  {
    code: "VIDEO #14 IO - Cohort - BOSM – W4-M2, V1",
    title: "Women's Sports",
    format: "SME with data visualizations",
    length: "2:00",
    placement: "Module 2 (Executive Interviews)",
    script: [
      { text: "Women's sports sponsorship is experiencing rapid growth. The NWSL quadrupled sponsorship revenue over five years to reach approximately $60 million in 2024. The WNBA more than doubled its sponsorship revenue to $55 million in the same period. This isn't charity—it's smart money recognizing an undervalued asset.\n\nHere's the investment thesis. Women's sports audiences are growing rapidly. Yet sponsorship dollars lag far behind. That gap is the opportunity.", visual: "Bar chart builds:\n\nOn \"NWSL quadrupled\": Bar A grows — \"League A: 4x growth → $60M\"\n\nOn \"WNBA more than doubled\": Bar B grows — \"League B: 2x growth → $55M\"\n\nOn \"smart money recognizing\": Text \"Audience growing, sponsorship lagging = opportunity\" appears" },
      { text: "Why now? Three converging factors.\n\nFirst, media coverage finally caught up—streaming platforms need content, and women's sports deliver engaged audiences.\n\nSecond, brands discovered that women's sports fans are more loyal and more likely to purchase from sponsors.\n\nThird, athletes like Serena Williams, Megan Rapinoe, and Caitlin Clark proved individual stars can drive massive engagement.", visual: "B-roll: Women's sports highlights, packed stadiums\n\nOn \"Why now?\": \"Why now?\" appears\n\nOn \"media coverage finally caught up\": \"1. Media coverage caught up\" appears\n\nOn \"fans are more loyal\": \"2. Fans more loyal, more likely to buy\" appears\n\nOn \"Serena Williams, Megan Rapinoe\": \"3. Star athletes drive engagement\" appears" },
      { text: "The smart money is moving fast. Major media companies are securing women's sports rights. Financial services brands are becoming sponsors.\n\nThe question for brands: Do you sponsor women's sports now while valuations are relatively low, or wait until prices catch up?", visual: "B-roll: Investment/business meeting footage\n\nOn \"smart money is moving fast\": \"Smart money moving fast\" appears\n\nOn \"sponsor women's sports now\": \"Sponsor now or pay more later?\" appears\n\nOn \"Executive Interviews\": \"Next: Executive Interviews\" appears" }
    ]
  },
  {
    code: "VIDEO #15 IO - Cohort - BOSM – W4-M3, V1",
    title: "Emerging Sports",
    format: "SME with comparison graphics",
    length: "2:00",
    placement: "Module 3 (Interactive)",
    script: [
      { text: "Pickleball has grown dramatically in recent years. Padel is the fastest-growing racket sport in Europe. Esports viewership rivals traditional sports. How do you evaluate whether to invest in an emerging sport?\n\nUse the four-factor framework.", visual: "B-roll: Pickleball, padel, esports footage\n\nOn \"Pickleball has grown\": \"Pickleball, Padel, Esports...\" appears\n\nOn \"How do you evaluate\": \"How do you evaluate emerging sports?\" appears" },
      { text: "Factor one: Demographic breadth. Does it appeal to multiple age groups? Broader appeal means staying power.\n\nFactor two: Accessibility. Can anyone play? Low barriers to entry mean faster adoption.\n\nFactor three: Media viability. Can it be broadcast or streamed? Understand the broadcast economics before investing.\n\nFactor four: Monetization infrastructure. Are there leagues, tours, venues? You need commercial structure to create sponsorship opportunities.", visual: "Simple 2x2 grid diagram:\n\nOn \"Factor one: Demographic breadth\": \"1. Demographic Breadth\" appears\n\nOn \"Factor two: Accessibility\": \"2. Accessibility\" appears\n\nOn \"Factor three: Media viability\": \"3. Media Viability\" appears\n\nOn \"Factor four: Monetization infrastructure\": \"4. Monetization Infrastructure\" appears" },
      { text: "Apply this to emerging sports opportunities. Each property has different strengths and weaknesses. The right answer depends on your timeline and risk tolerance.\n\nYour analyst's interview shows how to validate emerging sports opportunities before scaling.", visual: "B-roll: Emerging sports action\n\nOn \"different strengths and weaknesses\": \"Each sport has different strengths\" appears\n\nOn \"timeline and risk tolerance\": \"Your timeline & risk tolerance matter\" appears\n\nOn \"Emerging Sports Widget\": \"Next: Emerging Sports Widget\" appears" }
    ]
  },
  {
    code: "VIDEO #16 IO - Cohort - BOSM – W4-M4, V1",
    title: "Serena Case",
    format: "Direct-to-camera",
    length: "2:00",
    placement: "Module 4 (Case Study)",
    script: [
      { text: "Serena Williams is not just an exceptional tennis player. She's a case study in how athletes transform athletic excellence into business empires. Your analysis should focus on the strategic decisions, not just the achievements.\n\nThe case presents three strategic pivots.\n\nFirst, from endorser to investor. Serena shifted from taking endorsement cash to taking equity stakes.", visual: "B-roll: Serena on court transitioning to business\n\nOn \"business empires\": \"Athlete → Business Empire\" appears\n\nOn \"strategic decisions\": \"How did she do it?\" appears" },
      { text: "Second, from athlete to founder. Serena Ventures now manages a portfolio of 85+ companies. She's not just investing—she's building a venture firm.\n\nThird, from individual to platform. S by Serena isn't just a clothing line—it's a platform for other women entrepreneurs. She's leveraging her brand to amplify others.\n\nThe question isn't whether Serena is successful—it's whether her playbook is replicable.", visual: "B-roll: Business/entrepreneurship footage\n\nOn \"from endorser to investor\": \"1. Endorser → Investor\" appears\n\nOn \"from athlete to founder\": \"2. Athlete → Founder (85+ companies)\" appears\n\nOn \"from individual to platform\": \"3. Individual → Platform\" appears" },
      { text: "As you analyze the case, focus on timing. When did she start investing? How did she balance business building with competing?\n\nThe sequencing matters—she built business infrastructure while still playing, so she had momentum when she transitioned.\n\nThe AI Case Coach will help you map Serena's decisions to the five revenue streams framework.", visual: "B-roll: Athletes in business settings\n\nOn \"built business infrastructure while still playing\": \"Key: Built infrastructure while still playing\" appears\n\nOn \"Can other athletes follow\": \"Can others follow this playbook?\" appears\n\nOn \"Case Study Analysis\": \"Next: Case Study Analysis\" appears" }
    ]
  },
  // Week 5
  {
    code: "VIDEO #17 IO - Cohort - BOSM – W5-M0, V1",
    title: "Bridge-In Hook",
    format: "Direct-to-camera with text overlays",
    length: "2:00",
    placement: "Module 0 (Bridge-In)",
    script: [
      { text: "Executives at heritage sports properties face an impossible choice: Preserve tradition and watch revenues decline, or innovate aggressively and risk losing your soul.\n\nImagine you're CEO of a heritage institution. Your institution generates steady annual revenue—respectable, but flat over several years.\n\nYour board proposes transformation: VR experiences, AI-powered tours, pop-ups in new markets. The projections show you could increase annual revenue substantially.", visual: "B-roll: Historic sports venue or museum\n\nOn \"Preserve tradition\": \"Option A: Preserve tradition\" appears\n\nOn \"innovate aggressively\": \"Option B: Innovate aggressively\" appears\n\nOn \"You're CEO\": \"You're CEO. Flat revenue. Board proposes transformation.\" appears" },
      { text: "But there's a catch. Your curatorial staff resigns in protest—they call it commercialization. Long-time members cancel. Donors who value authenticity threaten to leave.\n\nIf you lose credibility, you lose donations AND your position as the authoritative voice in your field.\n\nThe question isn't \"Can we make more money?\" It's \"Can we grow WITHOUT losing what makes us valuable?\"", visual: "B-roll: Museum/heritage institution interior\n\nOn \"curatorial staff resigns\": \"Staff revolt. Donors threaten to leave.\" appears\n\nOn \"lose credibility\": \"If you lose credibility, you lose everything.\" appears\n\nOn \"Can we grow WITHOUT\": \"Can we grow WITHOUT losing what makes us valuable?\" appears" },
      { text: "This is the heritage monetization dilemma. You can't just apply Weeks 1-4 frameworks. Revenue matters, but so does authenticity.\n\nThis week, you'll learn frameworks for balancing tradition with innovation.\n\nBut first: Could you solve this now? Take the diagnostic to find out.", visual: "B-roll: Heritage property exterior\n\nOn \"Take the diagnostic\": \"Next: Diagnostic Exercise\" appears" }
    ]
  },
  {
    code: "VIDEO #18 IO - Cohort - BOSM – W5-M2, V1",
    title: "Heritage Framework",
    format: "SME with animated framework",
    length: "2:00",
    placement: "Module 2 (Executive Interviews)",
    script: [
      { text: "Heritage properties face a unique constraint: Your authenticity IS your asset. Monetize too aggressively, and you destroy the very thing people value. But refuse to evolve, and you become irrelevant.\n\nUse the Heritage Balance Grid. On one axis: Revenue Impact—how much money does this generate? On the other axis: Authenticity Risk—how much does this threaten our credibility?", visual: "B-roll: Authentic heritage moments\n\nOn \"authenticity IS your asset\": \"Your authenticity IS your asset\" appears\n\nOn \"Monetize too aggressively\": \"Monetize too aggressively → destroy the value\" appears" },
      { text: "High revenue, low risk: Digital archive access, expanded merchandise, membership tiers. These are obvious wins.\n\nLow revenue, high risk: Branded experiences that feel disconnected from mission. These require extreme caution.\n\nThe dangerous quadrant is high revenue, high risk. An initiative might generate significant revenue, but if stakeholders perceive it as inconsistent with your mission, donors and members revolt.", visual: "Simple 2x2 grid diagram:\n\nAxes: \"Revenue Impact\" (X) vs. \"Authenticity Risk\" (Y)\n\nOn \"High revenue, low risk\": \"Sweet Spot\" appears\n\nOn \"high revenue, high risk\": \"Danger Zone\" appears\n\nOn \"Digital archive access\": \"Safe but Limited\" appears\n\nOn \"extreme caution\": \"Avoid\" appears" },
      { text: "Three tests for any initiative.\n\nFirst, does it serve your mission or replace it?\n\nSecond, would your most loyal stakeholders accept it?\n\nThird, is it reversible? Experiments are fine; permanent damage isn't.\n\nThe executives you'll hear from use versions of this framework—but they draw the lines in different places.", visual: "B-roll: Decision-making/boardroom\n\nOn \"serve your mission or replace it\": \"1. Does it serve your mission?\" appears\n\nOn \"loyal stakeholders accept it\": \"2. Would stakeholders accept?\" appears\n\nOn \"Is it reversible\": \"3. Is it reversible?\" appears\n\nText \"Next: Executive Interviews\" appears" }
    ]
  },
  {
    code: "VIDEO #19 IO - Cohort - BOSM – W5-M3, V1",
    title: "Future Trends",
    format: "SME with trend graphics",
    length: "2:00",
    placement: "Module 3 (Interactive)",
    script: [
      { text: "What will sports business look like in 2030? Five trends are reshaping the industry. Understanding them helps you build strategies that last.\n\nTrend one: Direct-to-consumer everything. Leagues and teams are building their own streaming platforms, apps, and membership programs. Why share revenue with broadcasters when you can own the customer relationship?\n\nTrend two: Sports betting integration deepens. We're moving from sponsorship to embedded products. Imagine watching a game where betting is integrated into the broadcast.", visual: "B-roll: Future-looking sports/tech imagery\n\nOn \"Five trends\": \"Five trends reshaping sports business\" appears\n\nOn \"Trend one: Direct-to-consumer\": \"1. Direct-to-consumer everything\" appears\n\nOn \"Trend two: Sports betting integration\": \"2. Betting integration deepens\" appears" },
      { text: "Trend three: Women's sports reach parity economics. Within the next decade, top women's leagues will command valuations comparable to men's second-tier leagues.\n\nTrend four: AI transforms operations. From ticket pricing to injury prediction to fan engagement, AI is being deployed across every function.", visual: "B-roll: Mix of women's sports, AI footage\n\nOn \"Trend three: Women's sports\": \"3. Women's sports reach parity\" appears\n\nOn \"Trend four: AI transforms\": \"4. AI transforms operations\" appears" },
      { text: "Trend five: Heritage becomes competitive advantage. As sports become more commercial, the properties with authentic history become more valuable. Storied franchises aren't just teams—they're cultural institutions.\n\nThat heritage creates pricing power and fan loyalty that new franchises can't replicate.\n\nYour league executive's vision reflects several of these trends.", visual: "B-roll: Heritage footage\n\nOn \"Trend five: Heritage becomes\": \"5. Heritage becomes competitive advantage\" appears\n\nOn \"Future Trends Widget\": \"Next: Future Trends Widget\" appears" }
    ]
  },
  {
    code: "VIDEO #20 IO - Cohort - BOSM – W5-M4, V1",
    title: "HHOF Case",
    format: "Direct-to-camera",
    length: "2:00",
    placement: "Module 4 (Case Study)",
    script: [
      { text: "This case study isn't about hockey specifically. It's about every heritage property facing the same dilemma: How do you grow without becoming something you're not?\n\nThe case presents a real strategic tension. The Hockey Hall of Fame generates revenue from admission, retail, and hospitality. The board wants growth initiatives. The staff and donors want to preserve the institution's integrity.\n\nBoth sides have legitimate arguments.", visual: "B-roll: Sports heritage museum\n\nOn \"isn't about hockey specifically\": \"This isn't just about hockey\" appears\n\nOn \"every heritage property\": \"Every heritage property faces this dilemma\" appears\n\nOn \"board wants\": \"Board wants growth. Staff wants preservation.\" appears" },
      { text: "Here's what makes this case hard: The growth opportunities ARE real. VR experiences could attract younger audiences. International pop-ups could tap new markets.\n\nBut the risks are also real. Heritage institutions that over-commercialize lose credibility permanently.\n\nYour analysis should avoid two traps. Trap one: Assuming growth always wins. Trap two: Assuming tradition always wins.", visual: "B-roll: VR experiences, museum exhibits\n\nOn \"growth opportunities ARE real\": \"The opportunities ARE real\" appears\n\nOn \"risks are also real\": \"The risks ARE real\" appears\n\nOn \"two traps\": \"Trap 1: Growth always wins. Trap 2: Tradition always wins.\" appears" },
      { text: "The right answer is boundary-setting. What specific initiatives preserve authenticity while driving growth? Where exactly is the line?\n\nThat line is different for every organization—your job is to find where it is.\n\nAs you watch the executive interviews, note how each leader defines their boundaries.", visual: "B-roll: Heritage institution\n\nOn \"boundary-setting\": \"The answer: boundary-setting\" appears\n\nOn \"line is different for every organization\": \"Where is the line for THIS organization?\" appears\n\nOn \"executive interviews\": \"Next: Case Study Analysis\" appears" }
    ]
  },
  {
    code: "VIDEO #21 IO - Cohort - BOSM – W5-M6, V1",
    title: "Course Synthesis",
    format: "Direct-to-camera",
    length: "2:00",
    placement: "Module 6 (Wrap-Up)",
    script: [
      { text: "Congratulations—you've completed five weeks of the Business of Sports Marketing. You now have frameworks that working professionals use to make million-dollar decisions. Let's connect everything before your capstone.", visual: "B-roll: Celebration/achievement imagery\n\nOn \"Congratulations\": \"Congratulations!\" appears\n\nOn \"frameworks that working professionals use\": \"You now have frameworks professionals use.\" appears" },
      { text: "Week 1 taught you revenue ecosystems—the five streams and how they interconnect.\n\nWeek 2 showed you media rights economics—how streaming changes valuations.\n\nWeek 3 covered sponsorship and betting—ROI frameworks and the attribution advantage.\n\nWeek 4 explored athlete brands and emerging sports—the five revenue streams and evaluation frameworks.\n\nWeek 5 added the final piece: Heritage and future trends.", visual: "B-roll: Course highlights montage\n\nOn \"Week 1 taught you revenue ecosystems\": \"Week 1: Revenue Ecosystems\" appears\n\nOn \"Week 2 showed you media rights\": \"Week 2: Media Rights\" appears\n\nOn \"Week 3 covered sponsorship\": \"Week 3: Sponsorship & Betting\" appears\n\nOn \"Week 4 explored athlete brands\": \"Week 4: Athletes & Emerging Sports\" appears\n\nOn \"Week 5 added\": \"Week 5: Heritage & Future\" appears" },
      { text: "Your capstone project requires you to integrate all five weeks. You're not just designing a brand. You're building a business case.\n\nYour strategy needs to achieve multiple objectives: Build sustainable revenue across all five streams. Position your franchise competitively. Be financially viable from day one.\n\nGood luck with your capstone. You have everything you need. Now show us what you can build.", visual: "B-roll: Strategic planning/success imagery\n\nOn \"sustainable revenue\": \"Build sustainable revenue\" appears\n\nOn \"competitively\": \"Position competitively\" appears\n\nOn \"financially viable\": \"Ensure financial viability\" appears\n\nOn \"Good luck\": \"Good luck!\" appears" }
    ]
  }
];

async function createDocument() {
  const children = [];

  // Title
  children.push(
    new Paragraph({
      text: "Business of Sports Marketing – Media Notes",
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({ text: "" })
  );

  // Process each video
  for (const video of videos) {
    // Video header
    children.push(
      new Paragraph({
        text: video.code + " (" + video.title + ")",
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 },
      })
    );

    // Metadata section
    children.push(
      new Paragraph({ children: [new TextRun({ text: "Video format: ", bold: true }), new TextRun(video.format)] }),
      new Paragraph({ children: [new TextRun({ text: "Video code: ", bold: true }), new TextRun(video.code.split(" (")[0])] }),
      new Paragraph({ children: [new TextRun({ text: "Video title: ", bold: true }), new TextRun(video.title)] }),
      new Paragraph({ children: [new TextRun({ text: "Placement: ", bold: true }), new TextRun(video.placement)] }),
      new Paragraph({ children: [new TextRun({ text: "Length: ", bold: true }), new TextRun(video.length)] }),
      new Paragraph({ children: [new TextRun({ text: "Editing requirements: ", bold: true }), new TextRun("")] }),
      new Paragraph({ children: [new TextRun({ text: "Panopto tags: ", bold: true }), new TextRun("")] }),
      new Paragraph({ text: "" })
    );

    // Create table with Script and Visuals columns
    const tableRows = [
      // Header row
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({ children: [new TextRun({ text: "Script", bold: true })], alignment: AlignmentType.CENTER })],
            shading: { fill: "E7E6E6" },
            width: { size: 50, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [new Paragraph({ children: [new TextRun({ text: "Visuals", bold: true })], alignment: AlignmentType.CENTER })],
            shading: { fill: "E7E6E6" },
            width: { size: 50, type: WidthType.PERCENTAGE },
          }),
        ],
      }),
    ];

    // Add rows for each script section
    for (const section of video.script) {
      tableRows.push(
        new TableRow({
          children: [
            new TableCell({
              children: section.text.split('\n').map(line => new Paragraph({ text: line, spacing: { after: 100 } })),
              width: { size: 50, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
              children: section.visual.split('\n').map(line => new Paragraph({ text: line, spacing: { after: 100 } })),
              width: { size: 50, type: WidthType.PERCENTAGE },
            }),
          ],
        })
      );
    }

    children.push(
      new Table({
        rows: tableRows,
        width: { size: 100, type: WidthType.PERCENTAGE },
      }),
      new Paragraph({ text: "" }),
      new Paragraph({ text: "---", alignment: AlignmentType.CENTER }),
      new Paragraph({ text: "" })
    );
  }

  const doc = new Document({
    sections: [{
      properties: {},
      children: children,
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync("/Users/jameskruck/Documents/GitHub/business-of-marketing-in-sport/Media Notes - IO - Cohort - BOSM.docx", buffer);
  console.log("Document created: Media Notes - IO - Cohort - BOSM.docx");
}

createDocument().catch(console.error);
