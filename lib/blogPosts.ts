// ─── Blog post data ───────────────────────────────────────────────────────────
// Add new articles here. The blog index and article pages both source from this file.
//
// content is an array of "blocks". Each block has a type:
//   - h2 / h3          heading
//   - p                paragraph (supports inline **bold** and [link text](url))
//   - ul / ol          list (items: string[])
//   - table            table (headers: string[], rows: string[][])
//   - callout          coloured tip/warning box (variant: 'tip' | 'warning' | 'info')
//   - divider          horizontal rule
// ─────────────────────────────────────────────────────────────────────────────

export type BlockType =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; variant: 'tip' | 'warning' | 'info'; text: string }
  | { type: 'divider' };

export interface BlogPost {
  slug: string;
  title: string;
  desc: string;
  date: string;          // e.g. "2 June 2025"
  readTime: string;      // e.g. "8 min read"
  category: string;      // e.g. "Strategy" | "Maths" | "Routine"
  imageUrl: string;      // Unsplash or similar — full URL
  imageAlt: string;
  content: BlockType[];
}

export const BLOG_POSTS: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'how-to-use-mock-exams',
    title: 'How to use 11+ mock exams properly',
    desc: "Most families sit papers and check the score. That's not enough. Here is a complete system for timing, marking, and turning every mock into a concrete improvement plan.",
    date: '2 June 2025',
    readTime: '9 min read',
    category: 'Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
    imageAlt: 'Child studying at a desk with papers and a pencil',
    content: [
      {
        type: 'p',
        text: 'Mock exams are the single most effective preparation tool for the 11+. Used properly, they replicate real exam conditions, expose gaps before they matter, and build the stamina and confidence your child needs on the day. Used poorly — which is most of the time — they create a false sense of progress or unnecessary anxiety.',
      },
      {
        type: 'p',
        text: 'This guide gives you a complete system. Not just "sit the paper and mark it", but a structured approach that turns every mock into a genuine step forward.',
      },
      { type: 'h2', text: 'Why most families waste their mock exams' },
      {
        type: 'p',
        text: 'The typical pattern is: buy a CGP or Bond book, sit the paper at the kitchen table, check answers, note the score, move on. The problem is that the score tells you nothing useful on its own. A 70% in Maths paper 3 is not a meaningful data point. **Which questions? Which topics? Under what conditions?** Without that detail, you cannot target practice effectively.',
      },
      {
        type: 'callout',
        variant: 'warning',
        text: 'Doing more mock exams without reviewing mistakes is one of the most common preparation errors. You are not building skill — you are building familiarity with failure.',
      },
      { type: 'h2', text: 'Before the exam: setting proper conditions' },
      {
        type: 'p',
        text: 'The environment matters more than most parents realise. Children who practise in distracting or relaxed conditions and then sit in a formal exam hall often underperform relative to their actual ability. The transition is jarring.',
      },
      {
        type: 'ul',
        items: [
          'Use a proper desk — not the sofa, not the floor, not with the TV on in the background',
          'Set a countdown timer and start it before giving your child the paper',
          'No interruptions for the full duration — treat it as the real exam',
          'No calculator unless the paper explicitly allows one',
          'Keep water available but no snacks during the timed section',
          'If possible, use paper and pencil — not a screen — to match the actual exam format',
        ],
      },
      {
        type: 'p',
        text: 'For GL Assessment papers, the standard timing is 50 minutes for each section. For CEM papers, timing varies by section. Check the specific format for the schools your child is applying to and replicate it exactly.',
      },
      { type: 'h2', text: 'During marking: go deeper than right and wrong' },
      {
        type: 'p',
        text: 'Standard marking — tick or cross each answer — gives you a score. What you actually need is a **topic map**. For every incorrect answer, record the topic it belongs to. Here is a simple tracking table to use after each paper:',
      },
      {
        type: 'table',
        headers: ['Topic', 'Paper 1', 'Paper 2', 'Paper 3', 'Action needed'],
        rows: [
          ['Fractions', '✗ ✗', '✗', '✗ ✗', 'Prioritise — 5 errors across 3 papers'],
          ['Percentages', '✗', '—', '—', 'One-off — monitor'],
          ['Area & Perimeter', '—', '✗ ✗', '✗', 'Emerging pattern — address'],
          ['Sequences', '—', '—', '—', 'Solid — no action needed'],
          ['Vocabulary', '✗ ✗ ✗', '✗ ✗', '✗ ✗', 'Critical gap — daily work required'],
        ],
      },
      {
        type: 'p',
        text: 'This kind of tracking across multiple papers is far more valuable than any single score. Three fraction errors across three papers is a structural gap. One geometry error once is noise.',
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Download our free topic tracker spreadsheet from the resources section. Fill it in after every mock and you will have a clear picture of where to focus within a few weeks.',
      },
      { type: 'h2', text: 'The review session: the most important 45 minutes' },
      {
        type: 'p',
        text: 'Many families skip this step entirely. A mock exam without a review session is, at best, half as useful as it should be. The review is where learning actually happens.',
      },
      {
        type: 'ol',
        items: [
          'Sit with your child within 24 hours of the mock — not a week later when memory has faded',
          'Go through every incorrect answer, not just the ones marked wrong by luck',
          'For each one: ask your child to explain how they approached it before showing the correct method',
          'If they have no idea where to start, that is a topic gap — add it to the tracker',
          'If they nearly got it right, that is a technique gap — drill the specific method',
          'End the session by identifying the top 1–2 topics to work on before the next mock',
        ],
      },
      {
        type: 'p',
        text: 'The review session should take 30–45 minutes. If your child did very poorly, split it across two sessions so it does not become overwhelming or demoralising.',
      },
      { type: 'h2', text: 'Frequency: how many mocks, how often' },
      {
        type: 'p',
        text: 'This is where most families get it wrong in one of two directions — either too few (one mock paper and then the real thing) or too many (a paper every week from Year 4).',
      },
      {
        type: 'table',
        headers: ['Time before exam', 'Recommended frequency', 'Focus'],
        rows: [
          ['12+ months', 'None needed', 'Foundation skills and reading'],
          ['6–12 months', 'One per month', 'Familiarisation with format'],
          ['3–6 months', 'Every 2–3 weeks', 'Topic gap identification'],
          ['6–10 weeks', 'Weekly', 'Full conditions, timed, reviewed'],
          ['Final 2 weeks', 'No new mocks', 'Rest, consolidation, light revision'],
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'Doing too many mocks too early exhausts the available paper supply and means your child enters the real exam having seen very similar questions before — which can create false confidence rather than genuine ability.',
      },
      { type: 'h2', text: 'Scoring: what the numbers actually mean' },
      {
        type: 'p',
        text: 'Raw scores are less useful than most parents think. What matters more is **progress over time** and **topic-level accuracy**. That said, here is a rough benchmark for GL Assessment Maths and English papers:',
      },
      {
        type: 'table',
        headers: ['Score range', 'What it suggests', 'Priority action'],
        rows: [
          ['Below 55%', 'Significant gaps — foundation work needed', 'Topic-by-topic remediation before more mocks'],
          ['55–70%', 'Developing — clear gaps remain', 'Target weakest topics, maintain mock schedule'],
          ['70–80%', 'Solid — competitive for most grammar schools', 'Refine technique, practise under time pressure'],
          ['80–90%', 'Strong — competitive for selective schools', 'Focus on the hard questions only, maintain stamina'],
          ['90%+', 'Excellent — consider harder paper variants', 'Maintain, do not over-prepare, prioritise rest'],
        ],
      },
      { type: 'h2', text: 'Common mistakes to avoid' },
      {
        type: 'ul',
        items: [
          'Doing mocks without reviewing them — the most common mistake by far',
          'Focusing only on the score rather than the topic breakdown',
          'Letting your child mark their own paper immediately after — they will rationalise errors',
          'Running mocks back-to-back without consolidation time in between',
          'Using mocks as a punishment or a way to demonstrate consequences for poor performance',
          'Comparing your child\'s score to siblings, cousins, or friends — it creates anxiety with no benefit',
        ],
      },
      { type: 'h2', text: 'Using online mocks alongside paper-based ones' },
      {
        type: 'p',
        text: 'Paper-based mocks are essential — the real exam is on paper, and handwriting, bubbling answers, and managing a physical booklet are skills in themselves. But online mocks offer something paper cannot: **instant, topic-level feedback**.',
      },
      {
        type: 'p',
        text: 'At 11 Plus Exam Papers, our online mocks give you per-question explanations and highlight which topics need work immediately after the session ends. This makes them ideal for mid-week practice between paper-based sittings. Use both in combination for the best results.',
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'A good rhythm: one paper-based mock every 2–3 weeks with a full review session, plus two shorter online practice sessions per week targeting specific topics.',
      },
      { type: 'h2', text: 'Summary' },
      {
        type: 'ol',
        items: [
          'Set proper exam conditions every time — no shortcuts',
          'Track mistakes by topic, not just by score',
          'Always hold a review session within 24 hours',
          'Space mocks appropriately — more frequent as the exam approaches',
          'Use online practice between paper sittings to target identified gaps',
          'Stop all mocks in the final two weeks and focus on rest',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'best-11-plus-practice-routine',
    title: 'A sensible 11+ practice routine for Year 4 and Year 5',
    desc: 'Consistency beats cramming every time. Here is a week-by-week structure that builds genuine ability without burning your child out before the exam.',
    date: '10 June 2025',
    readTime: '11 min read',
    category: 'Routine',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    imageAlt: 'Child writing in a notebook at a wooden desk',
    content: [
      {
        type: 'p',
        text: 'The 11+ is not a test you can cram for. Unlike a one-off school topic test, it assesses accumulated ability — pattern recognition, reading fluency, mathematical automaticity — built over months and years, not days. The families who do best are rarely the ones who work hardest in the final six weeks. They are the ones who built a consistent, well-structured routine from Year 4 onwards.',
      },
      {
        type: 'p',
        text: 'This guide gives you a practical, stage-by-stage routine designed around how children actually learn — with enough structure to make progress, and enough flexibility to keep it sustainable.',
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'Every child is different. This plan is a framework, not a rigid prescription. Adjust session lengths and frequency based on how your child responds — a child who is exhausted and resentful will not absorb anything.',
      },
      { type: 'h2', text: 'Stage 1: Year 4 (12–18 months before the exam)' },
      {
        type: 'p',
        text: 'This is the foundation stage. The goal is not to teach 11+ content — it is to build the underlying skills that 11+ content draws on. Children who enter Year 5 with strong numeracy, a wide reading vocabulary, and decent working memory are far better placed than those who start drilling papers from scratch.',
      },
      { type: 'h3', text: 'What to focus on in Year 4' },
      {
        type: 'ul',
        items: [
          '**Times tables to 12×12** — fully automatic, no counting. This underpins almost every Maths topic in the 11+',
          '**Reading widely** — fiction, non-fiction, broadsheet articles. Vocabulary and comprehension both develop through volume of reading',
          '**Mental arithmetic** — addition, subtraction, and multiplication of two-digit numbers without a calculator',
          '**Spelling patterns** — prefixes, suffixes, common irregular words. Not 11+ wordlists yet, just broad foundations',
          '**Logical puzzles** — number sequences, odd-one-out games, simple code puzzles. This builds the intuition needed for Verbal and Non-Verbal Reasoning',
        ],
      },
      { type: 'h3', text: 'Recommended session structure in Year 4' },
      {
        type: 'table',
        headers: ['Days per week', 'Session length', 'Content'],
        rows: [
          ['4–5 days', '15–20 minutes', 'Mental maths or times tables practice'],
          ['Every day', '20–30 minutes', 'Independent reading (any book they enjoy)'],
          ['2–3 days', '10–15 minutes', 'Spelling or vocabulary work'],
          ['Weekends', 'Optional', 'Logical puzzle books or board games'],
        ],
      },
      {
        type: 'p',
        text: 'Total structured practice in Year 4 should be no more than 30–40 minutes per day. More than that at this stage produces diminishing returns and risks burning your child out before the real work begins.',
      },
      { type: 'h2', text: 'Stage 2: Year 5 — first half (September to December)' },
      {
        type: 'p',
        text: 'This is where subject-specific 11+ preparation begins in earnest. Your child now starts working through the four core 11+ subjects: Maths, English, Verbal Reasoning, and Non-Verbal Reasoning. The approach is still topic-based at this stage — not full papers yet.',
      },
      { type: 'h3', text: 'Session structure: Year 5 first half' },
      {
        type: 'table',
        headers: ['Day', 'Subject', 'Duration', 'Activity type'],
        rows: [
          ['Monday', 'Maths', '35–40 min', 'Topic work — one concept at a time (e.g. fractions)'],
          ['Tuesday', 'English', '35–40 min', 'Comprehension passage + vocabulary'],
          ['Wednesday', 'Verbal Reasoning', '25–30 min', 'Question type practice (codes, sequences, analogies)'],
          ['Thursday', 'Non-Verbal Reasoning', '25–30 min', 'Question type practice (patterns, matrices, shapes)'],
          ['Friday', 'Weak area', '30 min', 'Targeted remediation based on the week\'s errors'],
          ['Weekend', 'Rest or reading', '—', 'No structured 11+ work'],
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Introduce one new question type per week for Verbal and Non-Verbal Reasoning rather than jumping between types. Mastery of each type individually is much faster than trying to do everything at once.',
      },
      { type: 'h2', text: 'Stage 3: Year 5 — second half (January to Easter)' },
      {
        type: 'p',
        text: 'By now your child should have covered most of the topic content. This stage shifts the focus toward timed practice and mock exams. The volume of practice stays similar but the format changes — shorter, timed topic sets replace open-ended topic work.',
      },
      {
        type: 'ul',
        items: [
          'Introduce timed topic sets: 10 questions in 10 minutes, marked immediately',
          'Add one short mock section per week (e.g. a 20-question timed Maths paper)',
          'Review every piece of work — do not just check the score',
          'Begin using a topic tracker to identify persistent weaknesses',
          'Start timing comprehension passages to build reading speed',
        ],
      },
      { type: 'h2', text: 'Stage 4: Year 5 — final push (Easter to exam)' },
      {
        type: 'p',
        text: 'This is the most intensive stage, but "intensive" does not mean five hours per day. It means focused, well-reviewed practice under genuine exam conditions. The biggest mistake families make at this stage is increasing volume rather than increasing quality.',
      },
      { type: 'h3', text: 'Weekly structure in the final 10 weeks' },
      {
        type: 'table',
        headers: ['Activity', 'Frequency', 'Duration'],
        rows: [
          ['Full mock exam (paper-based)', 'Once per week', '50–90 min depending on format'],
          ['Mock review session', 'Within 48 hours of mock', '30–45 min'],
          ['Topic remediation', '2–3 times per week', '20–30 min per session'],
          ['Timed practice sets', 'Daily', '10–20 min'],
          ['Reading', 'Daily', '20–30 min — do not drop this'],
          ['Rest day', 'At least one per week', 'No 11+ work at all'],
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        text: 'Do not stop reading in the final weeks. Many families drop reading in favour of more paper practice. This is a mistake — English scores often drop in the final month when reading stops, because vocabulary and comprehension speed deteriorate faster than most people expect.',
      },
      { type: 'h2', text: 'The final two weeks: what to do (and not do)' },
      {
        type: 'p',
        text: 'With two weeks to go, stop sitting new mock papers. Your child\'s ability is now set — last-minute cramming will not change it meaningfully, but anxiety and exhaustion can genuinely harm performance. This is the rest and consolidation phase.',
      },
      {
        type: 'ul',
        items: [
          'Light revision only — go through a few questions from already-completed topics',
          'Review the topic tracker and spend 20 minutes on the top 2–3 weak areas, nothing more',
          'Maintain normal sleep and exercise routines',
          'Do not introduce any new material or unfamiliar question types',
          'Have a calm conversation about what to expect on the day — logistics, timing, what to bring',
          'On the evening before: normal dinner, no revision, early night',
        ],
      },
      { type: 'h2', text: 'Common routine mistakes' },
      {
        type: 'table',
        headers: ['Mistake', 'Why it happens', 'What to do instead'],
        rows: [
          ['Starting too late (Year 6 term 1)', 'Underestimating the competition', 'Begin structured practice in Year 4'],
          ['Sessions too long (2+ hours)', 'Parental anxiety', 'Cap at 45–60 min max — quality over quantity'],
          ['No rest days', 'Fear of falling behind', 'Build in at least one full rest day per week'],
          ['Skipping review sessions', 'Time pressure', 'The review is more important than the mock itself — never skip it'],
          ['Switching resources constantly', 'Chasing the "best" book', 'Pick one core resource per subject and stick to it'],
          ['Over-comparing to siblings or peers', 'Natural parental concern', 'Focus on your child\'s trajectory, not others\''],
        ],
      },
      { type: 'h2', text: 'A note on tutoring' },
      {
        type: 'p',
        text: 'A good tutor can be valuable — particularly for identifying gaps that a parent might miss, or for providing the accountability structure that some children need from someone other than their parents. But tutoring is not a substitute for a solid home routine. The children who benefit most from tutors are those who also have a consistent structure at home.',
      },
      {
        type: 'p',
        text: 'If you are considering a tutor, look for someone with specific 11+ experience in your region — GL Assessment and CEM papers require different preparation, and local knowledge of marking standards and school-specific formats genuinely matters.',
      },
      { type: 'h2', text: 'Summary: the routine at a glance' },
      {
        type: 'table',
        headers: ['Stage', 'When', 'Daily time', 'Key focus'],
        rows: [
          ['Foundation', 'Year 4', '30–40 min', 'Times tables, reading, mental maths'],
          ['Topic work', 'Y5 Sep–Dec', '35–40 min', 'All four subjects, one topic at a time'],
          ['Timed practice', 'Y5 Jan–Easter', '40–50 min', 'Timed topic sets, first mock sections'],
          ['Full mocks', 'Easter to exam', '45–60 min', 'Weekly full mocks with thorough review'],
          ['Rest phase', 'Final 2 weeks', '20 min max', 'Light consolidation, no new content'],
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: 'maths-topics-to-master',
    title: '11+ Maths topics to master before timed mocks',
    desc: 'A complete topic-by-topic breakdown of what appears most frequently in GL Assessment and CEM Maths papers, with practical advice on how to practise each area effectively.',
    date: '18 June 2025',
    readTime: '12 min read',
    category: 'Maths',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80',
    imageAlt: 'Maths equations and diagrams on a chalkboard',
    content: [
      {
        type: 'p',
        text: '11+ Maths is not GCSE Maths, and it is not KS2 SATs Maths either. It sits in its own space — drawing heavily on Year 5 and Year 6 curriculum content, but presented in ways that reward quick thinking, pattern recognition, and multi-step reasoning rather than just procedural accuracy.',
      },
      {
        type: 'p',
        text: 'Understanding exactly which topics appear most frequently — and in what form — is the first step to efficient preparation. This guide gives you a complete breakdown, topic by topic, with practical advice on how to practise each one.',
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'GL Assessment and CEM Maths papers cover broadly similar content but differ in style. GL papers tend to be more straightforward topic-by-topic; CEM papers mix topics within single questions and reward flexible thinking. This guide covers both.',
      },
      { type: 'h2', text: 'How topics are weighted across papers' },
      {
        type: 'p',
        text: 'Based on analysis of past GL Assessment and CEM Maths papers, here is an approximate breakdown of topic frequency:',
      },
      {
        type: 'table',
        headers: ['Topic area', 'Approximate share of marks', 'Difficulty level'],
        rows: [
          ['Number & calculation', '30–35%', 'Foundation — must be solid'],
          ['Word problems & reasoning', '20–25%', 'High — often where marks are lost'],
          ['Fractions, decimals & percentages', '15–20%', 'High — tested repeatedly'],
          ['Shape, space & measure', '15%', 'Medium — broad coverage needed'],
          ['Data handling & probability', '10%', 'Medium — straightforward if practised'],
          ['Algebra & sequences', '5–10%', 'Medium — growing in CEM papers'],
        ],
      },
      { type: 'h2', text: '1. Number and calculation' },
      {
        type: 'p',
        text: 'This is the engine room of 11+ Maths. Almost every other topic depends on fast, accurate number work. Children who are slow at basic arithmetic waste time on every question — not just the number questions.',
      },
      { type: 'h3', text: 'What to know' },
      {
        type: 'ul',
        items: [
          'Times tables to 12×12 — completely automatic, no hesitation',
          'Place value up to millions and down to thousandths',
          'Rounding to the nearest 10, 100, 1,000, and to decimal places',
          'Mental addition and subtraction of three- and four-digit numbers',
          'Long multiplication and short/long division',
          'Factors, multiples, prime numbers, square numbers, cube numbers',
          'Order of operations (BIDMAS/BODMAS)',
          'Negative numbers — addition, subtraction, and ordering on a number line',
        ],
      },
      { type: 'h3', text: 'How to practise' },
      {
        type: 'p',
        text: 'Times tables should be tested with random recall rather than recitation — "what is 7×8?" not "recite the 7 times table". Apps like Times Tables Rock Stars work well for this. For place value and rounding, use short daily drills of 10 questions, timed. Aim for under 8 minutes for 20 mixed number questions before moving to paper practice.',
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'If times tables are not fully automatic by Year 4, make this the top priority before anything else. Every other topic will be slower and harder until this foundation is solid.',
      },
      { type: 'h2', text: '2. Fractions, decimals and percentages' },
      {
        type: 'p',
        text: 'This topic area appears in almost every 11+ paper and is consistently one of the most common sources of dropped marks. The key is not just knowing the rules — it is being able to move fluently between fractions, decimals, and percentages within a single question.',
      },
      { type: 'h3', text: 'What to know' },
      {
        type: 'ul',
        items: [
          'Equivalent fractions and simplifying to lowest terms',
          'Adding and subtracting fractions with different denominators',
          'Multiplying and dividing fractions (including mixed numbers)',
          'Converting between fractions, decimals, and percentages',
          'Finding a percentage of an amount (e.g. 35% of 240)',
          'Percentage increase and decrease',
          'Fraction of a quantity (e.g. ¾ of 360)',
          'Ordering fractions with different denominators',
        ],
      },
      {
        type: 'table',
        headers: ['Key conversion', 'Fraction', 'Decimal', 'Percentage'],
        rows: [
          ['One half', '1/2', '0.5', '50%'],
          ['One quarter', '1/4', '0.25', '25%'],
          ['Three quarters', '3/4', '0.75', '75%'],
          ['One third', '1/3', '0.333…', '33.3%'],
          ['One fifth', '1/5', '0.2', '20%'],
          ['One tenth', '1/10', '0.1', '10%'],
          ['One eighth', '1/8', '0.125', '12.5%'],
        ],
      },
      {
        type: 'p',
        text: 'Children should know the key conversions in the table above by heart. Deriving them each time wastes valuable seconds in the exam.',
      },
      { type: 'h2', text: '3. Word problems and multi-step reasoning' },
      {
        type: 'p',
        text: 'Word problems are where the 11+ differs most sharply from standard school Maths. The calculation involved is rarely difficult — the challenge is identifying what to calculate in the first place, and then executing two or three steps in the right order.',
      },
      { type: 'h3', text: 'Common word problem types' },
      {
        type: 'ol',
        items: [
          '**Ratio and proportion** — "Share £120 in the ratio 3:5. How much does each person receive?"',
          '**Speed, distance, time** — "A train travels 180km in 2.5 hours. What is its average speed?"',
          '**Cost and change** — "4 items cost £3.60 each. How much change from £20?"',
          '**Combined operations** — questions requiring two or more separate calculations before reaching the answer',
          '**Algebra in context** — "I think of a number, multiply by 4, then subtract 7. The result is 29. What was my number?"',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Teach your child to underline the question (the last sentence) before reading the rest. Many children read all the information and then forget what they were actually asked to find.',
      },
      { type: 'h2', text: '4. Shape, space and measure' },
      {
        type: 'p',
        text: 'This is a broad topic area that benefits from wide coverage rather than deep drilling of any single concept. Questions rarely require complex geometric proof — they test whether your child knows the right formula and can apply it quickly.',
      },
      { type: 'h3', text: 'What to know' },
      {
        type: 'ul',
        items: [
          'Area of rectangles, triangles, parallelograms, and compound shapes',
          'Perimeter of all 2D shapes including irregular polygons',
          'Volume of cuboids (length × width × height)',
          'Angle rules: angles on a straight line (180°), in a triangle (180°), around a point (360°), vertically opposite angles',
          'Properties of 2D shapes — sides, angles, symmetry of triangles, quadrilaterals, polygons',
          'Coordinates in all four quadrants',
          'Reflection and rotation of shapes',
          'Converting between units of length, mass, capacity, and time',
          'Reading scales, including non-standard scales',
        ],
      },
      {
        type: 'table',
        headers: ['Shape', 'Area formula', 'Must also know'],
        rows: [
          ['Rectangle', 'length × width', 'Perimeter = 2(l + w)'],
          ['Triangle', '½ × base × height', 'Angles sum to 180°'],
          ['Parallelogram', 'base × height', 'Not base × slant side'],
          ['Circle', 'π × r² (less common)', 'Radius = diameter ÷ 2'],
          ['Cuboid (volume)', 'l × w × h', 'Units are cubed (cm³)'],
        ],
      },
      { type: 'h2', text: '5. Algebra and sequences' },
      {
        type: 'p',
        text: 'Algebra appears more frequently in 11+ papers than many families expect, particularly in CEM papers. The good news is that 11+ algebra is not complicated — it is typically single-step equation solving and pattern recognition.',
      },
      {
        type: 'ul',
        items: [
          'Simple equations: find the value of x (e.g. 3x + 5 = 20)',
          'Substitution: if a = 4 and b = 7, find the value of 3a + 2b',
          'Number sequences: identify the rule and find missing terms',
          'Function machines: input → rule → output',
          'Expressing word problems as equations',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'For sequences, always look for both the difference between terms (arithmetic) and the ratio between terms (geometric). Many children only check addition/subtraction and miss multiplication-based sequences entirely.',
      },
      { type: 'h2', text: '6. Data handling and probability' },
      {
        type: 'p',
        text: 'This is typically the most straightforward topic area for well-prepared children, but it is also the one most often neglected during revision — which means it is a reliable source of free marks if your child has covered it.',
      },
      {
        type: 'ul',
        items: [
          'Reading and interpreting bar charts, line graphs, pie charts, and pictograms',
          'Mean (average): sum of values ÷ number of values',
          'Median: the middle value when ordered',
          'Mode: the most frequently occurring value',
          'Range: highest value minus lowest value',
          'Probability: expressing likelihood as a fraction, decimal, or percentage',
          'Simple probability problems: "A bag contains 3 red and 5 blue balls. What is the probability of picking red?"',
        ],
      },
      { type: 'h2', text: 'Building a preparation checklist' },
      {
        type: 'p',
        text: 'Use this checklist to track which topics your child has covered and which still need work. Aim to have every topic at "confident" level before starting full timed mocks.',
      },
      {
        type: 'table',
        headers: ['Topic', 'Not started', 'In progress', 'Confident', 'Notes'],
        rows: [
          ['Times tables (auto)', '☐', '☐', '☐', ''],
          ['Place value & rounding', '☐', '☐', '☐', ''],
          ['Fractions', '☐', '☐', '☐', ''],
          ['Decimals & percentages', '☐', '☐', '☐', ''],
          ['Word problems', '☐', '☐', '☐', ''],
          ['Area & perimeter', '☐', '☐', '☐', ''],
          ['Angles', '☐', '☐', '☐', ''],
          ['Coordinates', '☐', '☐', '☐', ''],
          ['Sequences', '☐', '☐', '☐', ''],
          ['Algebra', '☐', '☐', '☐', ''],
          ['Mean, median, mode', '☐', '☐', '☐', ''],
          ['Probability', '☐', '☐', '☐', ''],
          ['Data interpretation', '☐', '☐', '☐', ''],
        ],
      },
      { type: 'h2', text: 'When to start timed mocks' },
      {
        type: 'p',
        text: 'Do not start sitting full timed Maths papers until your child can confidently handle at least 80% of the topic checklist above. Starting too early means they encounter topics they have not yet covered, which teaches them to skip questions rather than solve them — a habit that is very hard to break later.',
      },
      {
        type: 'p',
        text: 'The right approach is: topic work first, timed topic sets second, full papers third. Rush this sequence and you will plateau earlier and with more anxiety.',
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
