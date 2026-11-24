/* Mental Models Cards — content
   Based on "Mental Models: The Best Way to Make Intelligent Decisions (~100 Models Explained)" (Farnam Street).
   All card text is paraphrased; "Use it" steps and "Watch out" notes are practical additions. */

const DECK = {
  name: "Mental Models Cards",
  short: "Mental Models",
  subtitle: "~100 models for better decisions",
  storageKey: "mmcards",
  stepsHeading: "Use it",
  insightLabel: "Watch out",
  questionLabel: "Ask yourself",
  about: "Content paraphrased from Farnam Street’s guide <i>Mental Models: The Best Way to Make Intelligent Decisions</i>. “Use it” steps, “Watch out” notes and Recipes are practical additions.",
  ways: [
    ["contents", "Pick a discipline", "Browse the big ideas from eight fields, from physics to human nature."],
    ["shortcuts", "Get straight to it", "Shortcuts match the problem in front of you to a model."],
    ["recipes", "Build a latticework", "Recipes combine three models to tackle a bigger decision."],
    ["random", "Try your luck", "Draw a random model and look for it in your day."]
  ],
  featured: "what-is",
  searchNoun: "models",
  combineNoun: "models"
};

const CATEGORIES = [
  { id: "start",    name: "Start Here",              color: "#5B6B75", blurb: "What mental models are and how to use this deck." },
  { id: "recipe",   name: "Recipe",                  color: "#1B1B1B", blurb: "Three models combined into a latticework for a bigger decision." },
  { id: "general",  name: "General Thinking",        color: "#2F5FA8", blurb: "Core tools that sharpen every other model." },
  { id: "science",  name: "Physics, Chemistry & Biology", color: "#1F7A6F", blurb: "Laws of the natural world as lenses for life and work." },
  { id: "systems",  name: "Systems",                 color: "#5B8A2B", blurb: "How parts interact, grow, break and balance." },
  { id: "math",     name: "Mathematics",             color: "#A6822A", blurb: "Numeracy for judging odds, samples and extremes." },
  { id: "econ",     name: "Economics",               color: "#B8641E", blurb: "Choices under scarcity, markets and trade-offs." },
  { id: "art",      name: "Art",                     color: "#B2433A", blurb: "How stories, framing and performance shape perception." },
  { id: "military", name: "Military & Strategy",     color: "#5E6B2E", blurb: "Competing when the stakes are high." },
  { id: "human",    name: "Human Nature & Judgment", color: "#7A4C9A", blurb: "The biases and instincts that bend our thinking." }
];

const ICONS = {
  start:    '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>',
  recipe:   '<path d="M4 7l8-4 8 4-8 4zM4 12l8 4 8-4M4 17l8 4 8-4"/>',
  general:  '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
  science:  '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/>',
  systems:  '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M8.5 6h7M7.2 8.2l3.6 7.6M16.8 8.2l-3.6 7.6"/>',
  math:     '<path d="M18 5H6l6 7-6 7h12"/>',
  econ:     '<path d="M4 20V4M4 20h16"/><path d="M7 15l4-4 3 3 5-6"/>',
  art:      '<path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.9 0-1-.9-1.4-.9-2.4 0-1 .9-1.7 2-1.7h2a4 4 0 0 0 4-4C21.1 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
  military: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 7v10M8 11h8"/>',
  human:    '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>'
};

const CARDS = [
  /* ================= START HERE ================= */
  { id: "what-is", cat: "start", title: "What Is a Mental Model?",
    tagline: "A simplified explanation of how something works.",
    desc: "Like a map, a mental model keeps the essential and drops the noise. Collect the big ideas from many disciplines and you can see problems from angles others miss.",
    steps: [
      "<b>Learn the model:</b> read the front, then recall the back before you flip.",
      "<b>Spot it in the wild:</b> look for one model at work in your day.",
      "<b>Combine models:</b> real decisions need several lenses. See the <i>Recipe</i> cards.",
      "<b>Check its limits:</b> every model breaks somewhere. Read the ‘Watch out’ box."
    ],
    insight: "One model used everywhere is a hammer looking for nails. The value comes from a latticework of many models that check each other.",
    related: ["shortcuts", "map-territory"] },

  { id: "shortcuts", cat: "start", title: "Shortcuts",
    tagline: "Match the problem in front of you to a model.",
    desc: "Flip for situations and the models that help most.",
    steps: [
      "<b>I’m about to make a big decision.</b> [[second-order|Second-Order Thinking]] or [[inversion|Inversion]]",
      "<b>I’m out of my depth.</b> [[circle|Circle of Competence]] or [[map-territory|Map Is Not the Territory]]",
      "<b>Someone wronged me.</b> [[hanlon|Hanlon’s Razor]] or [[fae|Fundamental Attribution Error]]",
      "<b>Things are stuck.</b> [[bottlenecks|Bottlenecks]] or [[activation-energy|Activation Energy]]",
      "<b>People aren’t doing what I expect.</b> [[incentives|Incentives]] or [[social-proof|Social Proof]]",
      "<b>A result looks amazing.</b> [[regression|Regression to the Mean]] or [[survivorship|Survivorship Bias]]",
      "<b>Everyone says it’s a sure thing.</b> [[bubbles|Bubbles]] or [[confirmation|Confirmation Bias]]",
      "<b>I can’t change a habit.</b> [[inertia|Inertia]] or [[setting|Setting]]",
      "<b>I need to persuade.</b> [[framing|Framing]] or [[audience|Audience]]"
    ],
    related: ["what-is"] },

  /* ================= RECIPES ================= */
  { id: "r-decide", cat: "recipe", title: "Before a Big Decision",
    tagline: "Avoid the obvious failure, see the ripple effects, and leave room for being wrong.",
    desc: "Most bad decisions fail in predictable ways: nobody asked what could go wrong, nobody looked past the first effect, and nothing was held in reserve.",
    combine: ["inversion", "second-order", "margin-safety"],
    stepText: [
      "List what would guarantee failure, then design those out.",
      "For each option ask ‘and then what?’ two or three times.",
      "Size a buffer for being wrong: time, money or capacity."
    ],
    result: "A decision that survives surprises and still looks good a year from now." },

  { id: "r-stuck", cat: "recipe", title: "Unstick a System",
    tagline: "Find out why a team or process isn’t moving and fix the real constraint.",
    desc: "Pushing harder on a stuck system usually fails. Find the constraint, understand what reinforces it, and check what people are actually rewarded for.",
    combine: ["bottlenecks", "feedback-loops", "incentives"],
    stepText: [
      "Locate the slowest step that limits everything else.",
      "Map the loops that keep the current behaviour in place.",
      "Check whether incentives reward the outcome you want."
    ],
    result: "Effort aimed at the one change that moves the whole system." },

  { id: "r-debias", cat: "recipe", title: "Debias Your Judgment",
    tagline: "Stress-test a belief before you bet on it.",
    desc: "The mind grabs the first conclusion, seeks support for it and learns from winners only. Three checks break that chain.",
    combine: ["confirmation", "representativeness", "survivorship"],
    stepText: [
      "Write what evidence would prove you wrong, then go and look for it.",
      "Check the base rate: how often does this usually happen?",
      "Ask who tried the same thing and failed, and why you don’t hear about them."
    ],
    result: "A belief held with the right level of confidence." },

  { id: "r-habit", cat: "recipe", title: "Start a New Habit",
    tagline: "Make change easy to start and hard to stop.",
    desc: "Habits are physics: the status quo resists, starting costs energy, and the environment keeps pulling you back.",
    combine: ["activation-energy", "inertia", "setting"],
    stepText: [
      "Shrink the first step until starting is almost free.",
      "Repeat daily to build momentum so the habit carries itself.",
      "Redesign your surroundings so the new habit is the default."
    ],
    result: "A habit that runs on momentum instead of willpower." },

  { id: "r-hype", cat: "recipe", title: "Judge a Hot Trend",
    tagline: "Separate real value from crowd enthusiasm.",
    desc: "When everyone is excited, prices and opinions drift away from fundamentals. Three lenses bring you back to reality.",
    combine: ["social-proof", "bubbles", "regression"],
    stepText: [
      "Notice how much of your interest comes from other people’s interest.",
      "Compare the story with the underlying value.",
      "Expect extreme results to drift back toward average."
    ],
    result: "Participation on your own terms, or a calm decision to sit out." },

  { id: "r-people", cat: "recipe", title: "Read People Fairly",
    tagline: "Respond to others’ behaviour without paranoia or naivety.",
    desc: "We over-blame character, assume malice and ignore the pressures people are under. Three models correct for that.",
    combine: ["hanlon", "fae", "incentives"],
    stepText: [
      "Assume a mistake before you assume malice.",
      "Look for the situation behind the behaviour, not just the trait.",
      "Ask what the person is rewarded or pressured to do."
    ],
    result: "Less drama, better predictions and more useful conversations." },

  { id: "r-edge", cat: "recipe", title: "Build Your Edge",
    tagline: "Design a career or business advantage others can’t easily copy.",
    desc: "Advantage comes from playing where you know the most, combining rare skills and finding a place that rewards them.",
    combine: ["circle", "alloying", "niches"],
    stepText: [
      "Map honestly what you know deeply and where your knowledge ends.",
      "Combine two or three skills that are rarely found together.",
      "Find the niche where that combination is most valued, and keep adapting it."
    ],
    result: "A position where you compete on strengths rather than effort." },

  /* ================= GENERAL THINKING ================= */
  { id: "map-territory", cat: "general", title: "The Map Is Not the Territory",
    tagline: "Our models of the world are not the world itself.",
    desc: "Every map, report or résumé is a simplification. Useful, but it leaves things out and goes out of date. Trouble starts when we treat the representation as reality.",
    question: "What does this map leave out, and when was it last checked against reality?",
    steps: [
      "Identify the ‘maps’ you rely on: dashboards, plans, reports, reputations.",
      "Check them against first-hand reality regularly.",
      "When you rely on others’ maps, choose mapmakers who are rigorous, transparent and willing to revise."
    ],
    insight: "Updating a map is uncomfortable because it means accepting what is true over what we want to be true.",
    related: ["seeing-front", "first-principles"] },

  { id: "circle", cat: "general", title: "Circle of Competence",
    tagline: "Know exactly where your expertise ends.",
    desc: "You win more often where you have an advantage. The size of your circle matters less than knowing its boundary and being honest about it.",
    question: "Is this inside or outside what I truly understand?",
    steps: [
      "List the areas where your judgment has a strong track record.",
      "When a decision falls outside, slow down or borrow someone else’s circle.",
      "Expand the circle deliberately through learning, not by pretending."
    ],
    insight: "Outside your circle you’re sailing without charts. Confidence there is a warning sign, not a strength.",
    related: ["map-territory", "specialization"] },

  { id: "first-principles", cat: "general", title: "First Principles Thinking",
    tagline: "Break a problem down to its fundamental truths and rebuild.",
    desc: "Instead of copying how things have always been done, strip a problem to what is undeniably true and reason up from there. Rarely done, so it’s a real advantage.",
    question: "What do we know for certain here, and what is just convention?",
    steps: [
      "State the problem and list every assumption behind the current approach.",
      "Challenge each one: is it a law of nature or a habit?",
      "Rebuild a solution from the facts that survive."
    ],
    insight: "It is slow and effortful. Save it for problems where incremental improvement has stopped working.",
    related: ["thought-experiment", "inversion"] },

  { id: "thought-experiment", cat: "general", title: "Thought Experiment",
    tagline: "Test ideas in a sandbox of the mind.",
    desc: "By imagining a simplified scenario you can explore consequences, expose hidden assumptions and see unintended effects without real-world cost.",
    question: "What if…?",
    steps: [
      "Pose a clear ‘what if’ question.",
      "Strip away noise and keep only the variables that matter.",
      "Run the scenario to its logical end and note what surprises you."
    ],
    insight: "A thought experiment is only as good as its assumptions. Test the conclusion in reality before betting on it.",
    related: ["first-principles", "second-order"] },

  { id: "second-order", cat: "general", title: "Second-Order Thinking",
    tagline: "Ask ‘and then what?’",
    desc: "First-order thinking stops at the immediate result. Second-order thinking follows the ripple effects over time, like a chess player thinking several moves ahead.",
    question: "And then what? And after that?",
    steps: [
      "Write down the immediate effect of the decision.",
      "Ask what that effect will cause in a month, a year, five years.",
      "Consider how others will react and what that changes."
    ],
    insight: "Many choices that feel good now are bad later, and many that feel bad now pay off. Judge on the whole journey.",
    related: ["inversion", "incentives"] },

  { id: "probabilistic", cat: "general", title: "Probabilistic Thinking",
    tagline: "Think in odds, not certainties.",
    desc: "Estimate how likely outcomes are, check your assumptions and keep updating as new information arrives. It is uncomfortable, but it beats false certainty.",
    question: "How likely is this, really, and what would change my estimate?",
    steps: [
      "Put a rough probability on the outcomes you care about.",
      "Start from the base rate, then adjust for specifics.",
      "Update when new evidence arrives, and say so."
    ],
    insight: "Saying “I think there’s a 60% chance” is more honest, and more useful, than pretending to know.",
    related: ["representativeness", "sampling"] },

  { id: "inversion", cat: "general", title: "Inversion",
    tagline: "Avoid the paths to failure.",
    desc: "Instead of asking how to succeed, ask what would guarantee failure, then avoid it. Much success comes simply from not making obvious mistakes.",
    question: "What would guarantee this fails?",
    steps: [
      "Write the goal, then flip it: how would we make sure it fails?",
      "List the failure causes honestly.",
      "Remove or guard against each one."
    ],
    insight: "Inversion breaks tunnel vision. When you’re stuck solving forward, try solving backward.",
    related: ["second-order", "margin-safety"] },

  { id: "occam", cat: "general", title: "Occam’s Razor",
    tagline: "Prefer the explanation with the fewest assumptions.",
    desc: "When explanations compete, the simplest one is usually the best bet. It isn’t always true, but it should be preferred until evidence says otherwise.",
    question: "Which explanation needs the fewest things to be true?",
    steps: [
      "List the competing explanations.",
      "Count the assumptions each one needs.",
      "Start with the simplest and only add complexity when facts demand it."
    ],
    insight: "Too simple fails to capture reality; too complex collapses under its own weight.",
    related: ["hanlon", "first-principles"] },

  { id: "hanlon", cat: "general", title: "Hanlon’s Razor",
    tagline: "Don’t assume malice when a mistake explains it.",
    desc: "People forget, act on incomplete information and chase short-term wins. That looks like an attack from outside, but it rarely is.",
    question: "Is there an innocent explanation for this?",
    steps: [
      "Before reacting, list the non-malicious explanations.",
      "Respond to the most likely one with curiosity, not accusation.",
      "Escalate only if evidence of bad intent piles up."
    ],
    insight: "Malice does exist. The razor is a default, not a blindfold.",
    related: ["fae", "occam"] },

  /* ================= PHYSICS, CHEMISTRY & BIOLOGY ================= */
  { id: "relativity", cat: "science", title: "Relativity",
    tagline: "Every view depends on where you stand.",
    desc: "Our perceptions are shaped by our frame of reference. Two people can see the same event very differently. That isn’t relativism: some views are still better supported than others.",
    question: "What would this look like from their position?",
    steps: [
      "Name your own frame: role, background, incentives.",
      "Ask others what they see that you can’t.",
      "Judge their input on evidence and update your view."
    ],
    insight: "Everyone has blind spots. The only cure is borrowing other people’s eyes.",
    related: ["map-territory", "liking"] },

  { id: "reciprocity", cat: "science", title: "Reciprocity",
    tagline: "What you give tends to come back.",
    desc: "People mirror the treatment they receive. Give cynicism and you get it back; give trust and generosity and you usually receive the same.",
    question: "Am I waiting for others to go first?",
    steps: [
      "Decide what you want more of from others.",
      "Give it first, without keeping score.",
      "Be patient. Reciprocity works over repeated interactions."
    ],
    insight: "The common mistake is waiting for the other side to move. Going first is how you unlock it.",
    related: ["cooperation", "trust"] },

  { id: "thermodynamics", cat: "science", title: "Thermodynamics",
    tagline: "Energy is conserved, but disorder always grows.",
    desc: "Energy can’t be created or destroyed, only transformed. Left alone, any system drifts toward disorder (entropy). Order needs constant energy to maintain.",
    question: "What will decay here if nobody puts energy into it?",
    steps: [
      "Identify what in your life or work needs maintenance to stay in order.",
      "Budget regular energy for it instead of waiting for collapse.",
      "Choose people and environments that add energy rather than drain it."
    ],
    insight: "Entropy is the tax on time. A clean room, a healthy team or a good process never stays that way by itself.",
    related: ["equilibrium", "churn"] },

  { id: "inertia", cat: "science", title: "Inertia",
    tagline: "Things keep doing what they’re already doing.",
    desc: "Objects at rest stay at rest; objects in motion stay in motion. Habits, beliefs and organisations work the same way: the bigger and older they are, the more force change takes.",
    question: "How can I make the first move small enough to start today?",
    steps: [
      "Reduce the size of the first step (one push-up, one paragraph).",
      "Keep going daily to build momentum.",
      "Once moving, protect the momentum. Stopping costs more than continuing."
    ],
    insight: "Success creates its own inertia. Big organisations resist change; small ones can use their lightness as an edge.",
    related: ["activation-energy", "velocity"] },

  { id: "friction", cat: "science", title: "Friction and Viscosity",
    tagline: "Remove resistance before adding force.",
    desc: "Friction and viscosity slow everything down. We usually respond by pushing harder, when removing the resistance is often easier and more effective.",
    question: "What is slowing this down that I could simply remove?",
    steps: [
      "List the sources of drag in a process: approvals, handoffs, unclear steps.",
      "Remove or reduce the biggest one before adding effort.",
      "Remember some friction is useful: it gives traction and prevents slips."
    ],
    insight: "Friction can be used strategically: adding it to a rival’s path can matter more than speeding up your own.",
    related: ["velocity", "bottlenecks"] },

  { id: "velocity", cat: "science", title: "Velocity",
    tagline: "Speed with direction.",
    desc: "Velocity is speed in a direction. Moving fast in circles goes nowhere, while steady progress in the right direction crosses continents.",
    question: "Am I moving fast, or am I moving forward?",
    steps: [
      "Set a clear destination before increasing pace.",
      "Increase velocity by adding effort and removing what doesn’t contribute.",
      "Adjust direction as new information arrives."
    ],
    insight: "Busyness is speed without direction.",
    related: ["friction", "inertia"] },

  { id: "leverage", cat: "science", title: "Leverage",
    tagline: "Small force, big result, when applied at the right point.",
    desc: "Leverage multiplies effort: capital, code, media, people and technology all let a little input create outsized output. It amplifies downsides just as much.",
    question: "Where would a small effort create the biggest result?",
    steps: [
      "Identify your sources of leverage: skills, tools, relationships, capital.",
      "Focus on the critical few habits or people with the biggest effect.",
      "Before applying leverage, check the downside if things go wrong."
    ],
    insight: "Leverage used without restraint (too much debt, exploiting people) creates blow-ups and lost loyalty.",
    related: ["debt", "second-order"] },

  { id: "activation-energy", cat: "science", title: "Activation Energy",
    tagline: "The upfront push needed to get things started.",
    desc: "Reactions need a minimum burst of energy to begin. Change works the same way: it costs most at the start, then becomes self-sustaining.",
    question: "What is the minimum push that would get this started?",
    steps: [
      "Identify the starting cost: setup, first conversation, first draft.",
      "Plan to pay it once, deliberately, rather than waiting to feel ready.",
      "Lower the cost where you can (see [[catalysts|Catalysts]])."
    ],
    insight: "Treat the start-up cost as a one-time fee, not a permanent obstacle.",
    related: ["catalysts", "inertia"] },

  { id: "catalysts", cat: "science", title: "Catalysts",
    tagline: "Something that speeds up change without being used up.",
    desc: "A catalyst lowers the energy needed for a reaction, making change faster or possible at all. A mentor, a book or a new tool can play that role, and so can you.",
    question: "What or who could make this change easier?",
    steps: [
      "Identify a catalyst for a change you want: a person, tool or event.",
      "Bring it into the situation early.",
      "Look for chances to be a catalyst for someone else."
    ],
    related: ["activation-energy", "alloying"] },

  { id: "alloying", cat: "science", title: "Alloying",
    tagline: "The right mix can be far greater than the parts.",
    desc: "Combining elements in the right proportions creates properties none has alone. In people, a rare combination of skills is worth far more than any single one.",
    question: "What combination would make this uniquely strong?",
    steps: [
      "List your strongest skills and spot rare pairings (engineering + clear writing).",
      "Add one complementary skill rather than deepening one you already have.",
      "In teams, mix perspectives deliberately, in sensible proportions."
    ],
    insight: "Proportion matters. Too much of one ingredient and the result becomes brittle.",
    related: ["niches", "scarcity"] },

  { id: "natural-selection", cat: "science", title: "Natural Selection & Extinction",
    tagline: "Adapt or be replaced.",
    desc: "Traits that help survival spread; those that don’t disappear. Companies, ideas and careers face the same winnowing when the environment changes.",
    question: "If the environment changed tomorrow, would I still fit?",
    steps: [
      "Watch for changes in your environment: technology, customers, rules.",
      "Keep updating skills and methods before you’re forced to.",
      "Let go of approaches that no longer fit."
    ],
    insight: "There are no permanent victories, only continued adaptation.",
    related: ["red-queen", "creative-destruction"] },

  { id: "red-queen", cat: "science", title: "The Red Queen Effect",
    tagline: "You have to keep running just to stay in place.",
    desc: "In any competitive arena, every advance triggers a counter-advance. Standing still means falling behind, and past advantages make us slow to change.",
    question: "What am I holding onto because it worked before?",
    steps: [
      "Assume competitors are adapting right now.",
      "Build continuous improvement into routine, not one-off projects.",
      "Regularly retire what used to work."
    ],
    insight: "Complacency is the most dangerous side-effect of success.",
    related: ["natural-selection", "creative-destruction"] },

  { id: "ecosystems", cat: "science", title: "Ecosystems",
    tagline: "Everything is connected.",
    desc: "In an ecosystem each part affects many others. Businesses and economies are the same: an intervention in one place ripples in surprising ways.",
    question: "What else will this touch?",
    steps: [
      "Map the players around a decision: customers, partners, competitors, regulators.",
      "Trace how a change for one affects the others.",
      "Be slow to intervene in systems that are working. First, do no harm."
    ],
    insight: "Well-meant fixes often create bigger problems elsewhere.",
    related: ["interdependence", "second-order"] },

  { id: "niches", cat: "science", title: "Niches",
    tagline: "Be the best fit for a specific place.",
    desc: "A niche is a role where a particular species, business or person thrives with less competition. Specialists win in stable times; generalists survive change.",
    question: "Where do my strengths face the least competition?",
    steps: [
      "Define the specific need you serve best.",
      "Build depth there instead of trying to serve everyone.",
      "Watch for shifts that could shrink the niche, and evolve it in time."
    ],
    insight: "A cosy niche can become a trap. Specialisation buys strength at the cost of fragility.",
    related: ["specialization", "alloying"] },

  { id: "self-preservation", cat: "science", title: "Self-Preservation",
    tagline: "The instinct to protect ourselves, including our identity.",
    desc: "Living things protect themselves. For humans that includes status and self-image, so anything threatening how we see ourselves triggers defence.",
    question: "Am I protecting something essential, or just my ego?",
    steps: [
      "Notice when you react defensively to ideas.",
      "Separate genuine threats from threats to your self-image.",
      "Take measured risks: avoiding all risk is itself a risk."
    ],
    insight: "Too much focus on avoiding threats means missing opportunities in plain sight.",
    related: ["denial", "scarcity"] },

  { id: "replication", cat: "science", title: "Replication",
    tagline: "Copy what works, then improve it.",
    desc: "Life spreads by copying, and copying errors drive evolution. Imitating what works gives you a baseline fast; innovation then sets a new one.",
    question: "Who has already solved this, and what can I copy?",
    steps: [
      "Find proven approaches and copy them to reach a baseline.",
      "Learn the environment, then adapt and innovate.",
      "Keep reviewing: what replicated well yesterday may not suit tomorrow."
    ],
    insight: "Unchecked replication, of bad ideas or rapid growth, can be cancerous. Copy what is sound.",
    related: ["algorithms", "natural-selection"] },

  { id: "cooperation", cat: "science", title: "Cooperation",
    tagline: "The secret of human success.",
    desc: "Working together creates options no one has alone. Cooperation needs conditions to last: repeated interactions, shared benefits and protection against cheating.",
    question: "What would make cooperation the rational choice here?",
    steps: [
      "Create repeated interactions rather than one-offs.",
      "Make benefits clearly shared.",
      "Set norms that reward cooperation and penalise free-riding."
    ],
    related: ["reciprocity", "trust"] },

  { id: "hierarchy", cat: "science", title: "Hierarchical Organization",
    tagline: "Structure that lets complexity scale.",
    desc: "Hierarchies allow specialisation and coordination. Too much creates unrest and politics; too little creates chaos.",
    question: "Is our structure serving the mission or the status game?",
    steps: [
      "Check whether layers add coordination or just approvals.",
      "Watch for status contests that pull effort away from the goal.",
      "Adjust: hierarchy should be fluid as needs change."
    ],
    insight: "When climbing the ladder matters more than winning, the organisation tears itself apart.",
    related: ["scale", "incentives"] },

  { id: "incentives", cat: "science", title: "Incentives",
    tagline: "Show me the incentive and I’ll show you the outcome.",
    desc: "Rewards and penalties, visible and hidden, drive behaviour. Short-term incentives often conflict with long-term goals, and badly designed ones backfire.",
    question: "What is each person actually rewarded for here?",
    steps: [
      "List the explicit and hidden rewards in a situation (money, status, approval, ease).",
      "Predict behaviour from incentives, not stated intentions.",
      "Redesign incentives to reward the long-term outcome you want."
    ],
    insight: "People rarely act against their incentives for long, including you.",
    related: ["incentive-bias", "second-order"] },

  { id: "min-energy", cat: "science", title: "Minimising Energy Output",
    tagline: "We default to the path of least resistance.",
    desc: "Conserving energy is natural and sometimes wise, but it blocks learning. Experience only becomes learning through reflection, which takes effort.",
    question: "Where is my laziness costing me learning?",
    steps: [
      "Notice where you take the easy option by default.",
      "Spend energy deliberately where it creates value, like reflecting after key events.",
      "Make the right path the easy path when designing systems for others."
    ],
    related: ["inertia", "first-conclusion"] },

  /* ================= SYSTEMS ================= */
  { id: "feedback-loops", cat: "systems", title: "Feedback Loops",
    tagline: "Outputs that come back as inputs.",
    desc: "Feedback lets systems adjust. Reinforcing loops amplify change; balancing loops dampen it. Without feedback a system just repeats itself.",
    question: "What feedback is this system giving, and who is listening?",
    steps: [
      "Notice the feedback you give and receive daily.",
      "Identify which loops amplify and which stabilise.",
      "Iterate in small steps and watch the response before changing more."
    ],
    insight: "In complex systems, adjusting one loop can affect others in ways that take time to show up.",
    related: ["equilibrium", "bottlenecks"] },

  { id: "equilibrium", cat: "systems", title: "Equilibrium",
    tagline: "Balance is temporary.",
    desc: "Systems move toward balance but rarely stay there. We imagine reaching a stable state (“once X happens I’ll be happy”), but life is constant adjustment.",
    question: "Am I waiting for a steady state that won’t come?",
    steps: [
      "Accept that balance needs constant small corrections.",
      "Seek stability where it is needed (health, finances).",
      "Break equilibrium deliberately when stagnation sets in."
    ],
    related: ["feedback-loops", "thermodynamics"] },

  { id: "bottlenecks", cat: "systems", title: "Bottlenecks",
    tagline: "The slowest part sets the pace for everything.",
    desc: "A system can only move as fast as its narrowest point. Improving anything else is wasted effort. Fix the constraint and the whole system speeds up.",
    question: "Where does work pile up and wait?",
    steps: [
      "Follow the work and find where it queues.",
      "Focus all improvement on that point.",
      "Once fixed, find the next constraint."
    ],
    insight: "Some bottlenecks are deliberate, like quality checks or security. Remove them only if their purpose is gone.",
    related: ["friction", "scale"] },

  { id: "scale", cat: "systems", title: "Scale",
    tagline: "Systems change as they grow or shrink.",
    desc: "What works for ten doesn’t work for a thousand. Growth brings new problems that didn’t exist at a smaller size, and processes need redesigning.",
    question: "What breaks if this is ten times bigger?",
    steps: [
      "Ask how the process would work at 10x and 100x.",
      "Identify which parts will strain first.",
      "Redesign rather than simply multiply."
    ],
    related: ["bottlenecks", "hierarchy"] },

  { id: "margin-safety", cat: "systems", title: "Margin of Safety",
    tagline: "Build a buffer for being wrong.",
    desc: "A bridge built for ten times its expected load survives surprises. A buffer looks overcautious in good times and is what lets you survive bad ones.",
    question: "What if I’m wrong? How much buffer do I need?",
    steps: [
      "Identify where uncertainty and downside are greatest.",
      "Add slack: extra time, cash, capacity or redundancy.",
      "Resist pressure to remove buffers just because nothing has gone wrong yet."
    ],
    insight: "Efficiency drives often eat margins of safety first.",
    related: ["efficiency", "debt"] },

  { id: "churn", cat: "systems", title: "Churn",
    tagline: "Some turnover is healthy; too much kills.",
    desc: "Churn quietly drains customers, people or ideas. Yet some replacement keeps a system fresh: new people bring new ideas.",
    question: "Is this turnover renewing us or bleeding us?",
    steps: [
      "Measure churn. It hides until it becomes a crisis.",
      "Find and fix the causes of unwanted loss.",
      "Welcome the renewal that healthy turnover brings."
    ],
    related: ["thermodynamics", "creative-destruction"] },

  { id: "algorithms", cat: "systems", title: "Algorithms",
    tagline: "Clear steps that reliably produce a result.",
    desc: "An algorithm is a recipe of unambiguous if-then steps. Thinking algorithmically means building processes that produce the right output every time.",
    question: "Could this be turned into a repeatable process?",
    steps: [
      "Write the steps that produced a good result.",
      "Make each step unambiguous with clear if-then rules.",
      "Test, then refine where it fails."
    ],
    related: ["replication", "scale"] },

  { id: "critical-mass", cat: "systems", title: "Critical Mass",
    tagline: "Slowly, then all at once.",
    desc: "Systems can sputter for a long time until enough material, people or effort accumulates, then tip into self-sustaining change.",
    question: "How far are we from the tipping point?",
    steps: [
      "Identify what needs to accumulate: users, habits, supporters.",
      "Keep building even when progress looks invisible.",
      "Once past the tipping point, keep going to make the change stick."
    ],
    related: ["activation-energy", "feedback-loops"] },

  { id: "emergence", cat: "systems", title: "Emergence",
    tagline: "Combinations create something new.",
    desc: "When parts interact, new properties appear that none of them had alone. You can’t predict them, but you can create conditions for them.",
    question: "What new combination could I try?",
    steps: [
      "Mix inputs: new skills, people, reading.",
      "Watch for unexpected results and follow the interesting ones.",
      "Don’t over-plan. Leave room for surprise."
    ],
    related: ["irreducibility", "alloying"] },

  { id: "irreducibility", cat: "systems", title: "Irreducibility",
    tagline: "Some things can’t be broken into parts.",
    desc: "Some systems lose their essence when you break them down. To understand them you have to zoom out and accept their messiness.",
    question: "What is the minimum here that can’t be cut?",
    steps: [
      "Identify what truly cannot be simplified away.",
      "Zoom out to see the whole instead of analysing parts.",
      "Focus change efforts on what you can actually influence."
    ],
    related: ["emergence", "first-principles"] },

  { id: "diminishing", cat: "systems", title: "Diminishing Returns",
    tagline: "The easy wins come first.",
    desc: "Each extra unit of effort yields less than the one before. Going from bad to good is easier than going from good to great.",
    question: "Is the next hour here worth more than an hour elsewhere?",
    steps: [
      "Track the gain from each additional effort.",
      "Notice when returns flatten.",
      "Move resources to where they’ll make a bigger difference."
    ],
    related: ["efficiency", "trade-offs"] },

  /* ================= MATHEMATICS ================= */
  { id: "sampling", cat: "math", title: "Sampling",
    tagline: "How much of the world are you looking at?",
    desc: "Conclusions drawn from small or biased samples are unreliable. Bigger samples get closer to the truth, at a cost of time and money.",
    question: "How many cases is this based on, and how were they chosen?",
    steps: [
      "Check the sample size behind any claim.",
      "Ask how the sample was selected and what bias might creep in.",
      "Gather more data before big decisions, within reason."
    ],
    related: ["small-samples", "survivorship"] },

  { id: "randomness", cat: "math", title: "Randomness",
    tagline: "Much of life has no pattern.",
    desc: "Humans see patterns everywhere and attribute meaning to coincidence. True randomness ignores our theories.",
    question: "Could this just be chance?",
    steps: [
      "Before explaining an outcome, consider luck.",
      "Look at many outcomes before declaring a pattern.",
      "Plan for random shocks rather than predicting them."
    ],
    related: ["regression", "narrative"] },

  { id: "regression", cat: "math", title: "Regression to the Mean",
    tagline: "Extremes tend to be followed by the ordinary.",
    desc: "An exceptional result is usually part skill, part luck. The luck rarely repeats, so the next result tends to be closer to average.",
    question: "How much of this result was luck?",
    steps: [
      "Don’t over-react to one great or terrible result.",
      "Compare with a longer track record.",
      "Be careful crediting a fix: things may have just returned to normal."
    ],
    related: ["randomness", "survivorship"] },

  { id: "multiply-zero", cat: "math", title: "Multiply by Zero",
    tagline: "One zero wipes out everything else.",
    desc: "Any number times zero is zero. One fatal weakness, like unreliability or dishonesty, can cancel out every strength.",
    question: "What is the zero that could cancel all our efforts?",
    steps: [
      "List your strengths, then look for any ‘zero’ that undoes them.",
      "Fix zeros before adding to strengths.",
      "Apply the same check to plans, teams and products."
    ],
    related: ["margin-safety", "inversion"] },

  { id: "equivalence", cat: "math", title: "Equivalence",
    tagline: "Different inputs can produce the same result.",
    desc: "Things can be swapped without changing the essence, and there is usually more than one way to solve a problem. The art is knowing what is truly interchangeable.",
    question: "Is there another way to get the same result?",
    steps: [
      "Define the essential result you need.",
      "List alternative ways to achieve it.",
      "Check what is truly interchangeable and what isn’t."
    ],
    related: ["first-principles", "trade-offs"] },

  { id: "surface-area", cat: "math", title: "Surface Area",
    tagline: "More exposure means more interaction, good and bad.",
    desc: "The more surface area, the more contact with the environment. Exposure to diverse ideas sparks innovation, but also raises vulnerability.",
    question: "Should I increase or reduce my exposure here?",
    steps: [
      "Increase surface area for learning and opportunity.",
      "Reduce it where you’re vulnerable to risk or distraction.",
      "Revisit as circumstances change."
    ],
    related: ["emergence", "margin-safety"] },

  { id: "maxima", cat: "math", title: "Global and Local Maxima",
    tagline: "The first peak may not be the highest.",
    desc: "It is easy to settle on a good-enough solution and stop exploring. Reaching a higher peak may mean going downhill first.",
    question: "Am I stuck on a local peak?",
    steps: [
      "Ask whether you’ve stopped exploring because things are ‘fine’.",
      "Look at very different alternatives, not small tweaks.",
      "Accept a short-term dip if the higher peak is worth it."
    ],
    related: ["optimization", "creative-destruction"] },

  /* ================= ECONOMICS ================= */
  { id: "scarcity", cat: "econ", title: "Scarcity",
    tagline: "Limited things feel more valuable.",
    desc: "Scarcity drives value and choices. It can also trigger hoarding and self-protection when a culture runs too lean. Rare combinations of good qualities are disproportionately rewarded.",
    question: "Is scarcity driving my choice, or my values?",
    steps: [
      "Notice when “limited” or “exclusive” is pushing you.",
      "Check if the choice fits your real goals.",
      "Build scarce value in yourself: a rare mix of skills and character."
    ],
    related: ["supply-demand", "alloying"] },

  { id: "supply-demand", cat: "econ", title: "Supply and Demand",
    tagline: "The push and pull that sets prices.",
    desc: "Shortages raise prices and attract new supply; gluts lower them and discourage investment. Cycles are driven by human greed and fear as much as by resources.",
    question: "What is the supply and demand for what I offer?",
    steps: [
      "Assess demand for your skills or product.",
      "Watch for new supply entering the market.",
      "Use this when negotiating salaries, prices or resources."
    ],
    related: ["scarcity", "bubbles"] },

  { id: "optimization", cat: "econ", title: "Optimization",
    tagline: "Getting the most from limited resources, until it backfires.",
    desc: "Optimising unlocks potential, but it works until it doesn’t. Over-optimised systems lose flexibility.",
    question: "Am I optimising the right thing?",
    steps: [
      "Define what you’re optimising for.",
      "Check what you’re sacrificing to get it.",
      "Know when to stop and leave slack."
    ],
    related: ["efficiency", "maxima"] },

  { id: "trade-offs", cat: "econ", title: "Trade-offs & Opportunity Cost",
    tagline: "Every yes is a no to something else.",
    desc: "Each choice has a cost: the best alternative you gave up. Good decisions weigh those costs consciously against your priorities.",
    question: "What am I giving up by choosing this?",
    steps: [
      "List the options and the best alternative for each.",
      "Name the opportunity cost explicitly.",
      "Choose based on what matters most, not on having it all."
    ],
    related: ["specialization", "efficiency"] },

  { id: "specialization", cat: "econ", title: "Specialization",
    tagline: "Go deep to stand out.",
    desc: "Narrowing your focus builds mastery and impact, but if the world changes, a specialty can become obsolete. The best insights often come from the edges between fields.",
    question: "Where should I go deep, and where should I reach out?",
    steps: [
      "Choose a field to master.",
      "Regularly borrow ideas from neighbouring fields.",
      "Watch for signs that your specialty is losing value."
    ],
    related: ["niches", "circle"] },

  { id: "interdependence", cat: "econ", title: "Interdependence",
    tagline: "No one is self-made.",
    desc: "People, companies and countries rely on each other. That creates synergy, and exposure if someone critical fails you.",
    question: "Who do I depend on, and would they hold in a crisis?",
    steps: [
      "Map your critical dependencies.",
      "Build alliances for mutual benefit.",
      "Have a backup where a single failure would hurt."
    ],
    related: ["ecosystems", "cooperation"] },

  { id: "efficiency", cat: "econ", title: "Efficiency",
    tagline: "Least waste, but not at the cost of resilience.",
    desc: "Efficiency means doing the right things with little waste. Maximum short-term efficiency often removes the slack that helps you survive shocks.",
    question: "What resilience am I trading away for efficiency?",
    steps: [
      "First make sure the task is worth doing at all.",
      "Remove waste in what matters most.",
      "Keep some ‘inefficient’ buffers: cash, inventory, people."
    ],
    insight: "Short-run inefficiency is often long-run efficiency, because it lets you adapt.",
    related: ["margin-safety", "optimization"] },

  { id: "debt", cat: "econ", title: "Debt",
    tagline: "Leverage now, obligation later.",
    desc: "Debt of money, favours or sleep lets you act now but makes you fragile. It feels cheap at the time and often costs more than expected.",
    question: "How much room does this leave me if things go wrong?",
    steps: [
      "List all forms of debt you carry, not only financial.",
      "Borrow only where the gain clearly outweighs the fragility.",
      "Keep a reserve to absorb shocks."
    ],
    related: ["leverage", "margin-safety"] },

  { id: "monopoly", cat: "econ", title: "Monopoly and Competition",
    tagline: "The pull between dominance and rivalry.",
    desc: "Competition keeps firms efficient and innovative; monopolies earn the profits to fund big bets but tend to sow their own decline.",
    question: "Are we competing on price or building something hard to copy?",
    steps: [
      "Assess how many alternatives your customers have.",
      "Build distinctive value rather than racing to the bottom.",
      "If you dominate, guard against complacency."
    ],
    related: ["creative-destruction", "niches"] },

  { id: "creative-destruction", cat: "econ", title: "Creative Destruction",
    tagline: "The new replaces the old.",
    desc: "Innovation keeps replacing old products and ways of working. It is opportunity if you’re the challenger and a threat if you’re the incumbent.",
    question: "What could make what I do obsolete?",
    steps: [
      "Identify what could disrupt your work or industry.",
      "Experiment with the new before you’re forced to.",
      "Don’t cling to the old just because it served you well."
    ],
    related: ["red-queen", "natural-selection"] },

  { id: "gresham", cat: "econ", title: "Gresham’s Law",
    tagline: "Bad drives out good, without consequences.",
    desc: "When low and high quality versions compete and nobody pays a price for the bad, the bad spreads: in money, lending, behaviour and culture.",
    question: "What bad behaviour here faces no consequence?",
    steps: [
      "Notice where poor quality is rewarded or tolerated.",
      "Introduce consequences that favour quality.",
      "Hold the line yourself. True value wins in the long run."
    ],
    related: ["incentives", "fairness"] },

  { id: "bubbles", cat: "econ", title: "Bubbles",
    tagline: "When excitement outruns value.",
    desc: "Bubbles form when collective enthusiasm pushes prices or beliefs far above fundamentals, fed by greed and fear of missing out. They always burst.",
    question: "Am I buying the story or the value?",
    steps: [
      "Compare the price or hype with underlying value.",
      "Notice “this time is different” thinking.",
      "Decide your exit before you enter."
    ],
    insight: "Bubbles also fund real innovation. The infrastructure survives even when investors don’t.",
    related: ["social-proof", "supply-demand"] },

  /* ================= ART ================= */
  { id: "audience", cat: "art", title: "Audience",
    tagline: "Meaning is co-created by the people who receive it.",
    desc: "Every audience brings its own experience, so the same work means different things to different people. Great creators design for their audience without pandering.",
    question: "Who is this for, and what will they bring to it?",
    steps: [
      "Define your audience specifically.",
      "Anticipate how they will interpret your message.",
      "Stay authentic. Let the audience guide, not dictate."
    ],
    related: ["framing", "genre"] },

  { id: "genre", cat: "art", title: "Genre",
    tagline: "Shared expectations that structure an experience.",
    desc: "Genres are rules that tell an audience what to expect. Too formulaic is dull; too far from the rules loses people. The sweet spot honours expectations while adding something new.",
    question: "What does my audience expect, and where can I surprise them?",
    steps: [
      "Identify the conventions of your format (report, pitch, speech).",
      "Meet the core expectations.",
      "Add one fresh element that makes it yours."
    ],
    related: ["audience", "contrast"] },

  { id: "contrast", cat: "art", title: "Contrast",
    tagline: "Difference makes us notice.",
    desc: "Our brains tune out sameness and snap to attention at change. Quiet makes loud powerful; calm makes drama memorable.",
    question: "Where can contrast make my key point stand out?",
    steps: [
      "Place your key message next to its opposite (before/after, problem/solution).",
      "Vary pace and tone in presentations.",
      "Use visual contrast to direct attention."
    ],
    related: ["framing", "rhythm"] },

  { id: "framing", cat: "art", title: "Framing",
    tagline: "How it’s presented changes how it’s understood.",
    desc: "The same facts framed differently lead to different choices. Frames work quietly and emotionally, and can illuminate or mislead.",
    question: "How else could this be framed, and who chose this frame?",
    steps: [
      "When deciding, reframe the options (gain vs loss, cost vs investment).",
      "When communicating, choose a frame that is honest and helpful.",
      "Notice frames others use on you."
    ],
    related: ["audience", "narrative"] },

  { id: "rhythm", cat: "art", title: "Rhythm",
    tagline: "Patterns in time give structure and meaning.",
    desc: "Rhythm organises music, speech and life. Regular beats give structure; variation keeps it alive. Routines of work and rest are the rhythm of a life.",
    question: "What rhythm structures my week, and does it serve me?",
    steps: [
      "Design regular cycles of work, rest and reflection.",
      "Use cadence in speech and writing to make ideas stick.",
      "Vary the beat to avoid monotony."
    ],
    related: ["melody", "contrast"] },

  { id: "melody", cat: "art", title: "Melody",
    tagline: "The thread people remember.",
    desc: "A melody is a sequence with a shape that feels both inevitable and fresh. The best ones balance the familiar and the new, and connect emotionally across cultures.",
    question: "What is the memorable line people will carry away?",
    steps: [
      "Find the one idea you want remembered.",
      "Give it a shape: build, peak, resolve.",
      "Balance familiar elements with one surprise."
    ],
    related: ["rhythm", "narrative"] },

  { id: "plot", cat: "art", title: "Plot",
    tagline: "Change the story to change the results.",
    desc: "A plot is a chain of cause and effect driven by conflict: someone wants something and faces obstacles. The most powerful story is the one you tell yourself about your challenges.",
    question: "What story am I telling myself about this obstacle?",
    steps: [
      "Write down the story you currently tell about a challenge.",
      "Check it against the facts.",
      "Rewrite it in a way that is true and moves you forward."
    ],
    related: ["character", "narrative"] },

  { id: "character", cat: "art", title: "Character",
    tagline: "Obstacles reveal who we are.",
    desc: "Character shapes choices, and choices shape destiny. Characters aren’t fixed: they grow through what they face. Understanding someone’s character helps you predict and empathise.",
    question: "Is this choice a step toward the person I want to be?",
    steps: [
      "Define the character you want to build.",
      "Treat each obstacle as a choice toward or away from it.",
      "Use the same lens to understand others’ motives."
    ],
    related: ["plot", "fae"] },

  { id: "setting", cat: "art", title: "Setting",
    tagline: "Change your environment, or it will change you.",
    desc: "Context shapes what is possible and what we do. Our surroundings influence behaviour more than we realise.",
    question: "What in my environment is pushing me the wrong way?",
    steps: [
      "Audit your physical, social and digital environment.",
      "Remove cues that trigger unwanted behaviour.",
      "Add cues that make the right behaviour easy."
    ],
    related: ["inertia", "social-proof"] },

  { id: "performance", cat: "art", title: "Performance",
    tagline: "Live moments are co-created and can’t be repeated.",
    desc: "Performance exists in the moment, shaped by presence, chance and the audience’s energy. It rewards responsiveness over perfection.",
    question: "How can I be fully present and responsive here?",
    steps: [
      "Prepare well, then let go of perfection.",
      "Read the room and adapt in real time.",
      "Invite the audience to participate."
    ],
    related: ["audience", "rhythm"] },

  /* ================= MILITARY & STRATEGY ================= */
  { id: "seeing-front", cat: "military", title: "Seeing the Front",
    tagline: "Go and see for yourself.",
    desc: "Leaders who personally visit the front line get first-hand information instead of filtered reports, and improve the quality of the reports they get too.",
    question: "When did I last see this first-hand?",
    steps: [
      "Schedule time where the work actually happens.",
      "Talk to the people doing it, not just their managers.",
      "Compare what you see with what reports say."
    ],
    related: ["map-territory", "incentive-bias"] },

  { id: "asymmetric", cat: "military", title: "Asymmetric Warfare",
    tagline: "When you can’t out-muscle, change the rules.",
    desc: "A weaker side wins by using different tactics from the stronger one, creating impact disproportionate to its resources.",
    question: "Where can a different approach beat superior resources?",
    steps: [
      "List where a stronger rival is slow or rigid.",
      "Compete on speed, focus or niche rather than size.",
      "If you’re the bigger side, watch for opponents playing by different rules."
    ],
    related: ["niches", "counterinsurgency"] },

  { id: "two-front", cat: "military", title: "Two-Front War",
    tagline: "Splitting focus weakens you on both fronts.",
    desc: "Fighting on two fronts divides resources. It can be used against a rival, or avoided by settling internal conflict to focus on the real competition.",
    question: "Am I fighting battles on more fronts than I can win?",
    steps: [
      "List the battles you’re currently fighting.",
      "Close or pause the less important fronts.",
      "Settle internal disputes before taking on external ones."
    ],
    related: ["trade-offs", "bottlenecks"] },

  { id: "counterinsurgency", cat: "military", title: "Counterinsurgency",
    tagline: "Answer unconventional threats with smarter strategy, not more force.",
    desc: "Insurgents use asymmetric tactics; effective responses change strategy rather than simply escalating. Tit-for-tat escalation can trap both sides.",
    question: "Is escalation feeding the problem?",
    steps: [
      "Understand why the opposing side is gaining support.",
      "Address root causes rather than symptoms.",
      "Avoid tit-for-tat cycles."
    ],
    related: ["asymmetric", "feedback-loops"] },

  { id: "mad", cat: "military", title: "Mutually Assured Destruction",
    tagline: "When both sides can destroy each other, neither attacks.",
    desc: "Strong opponents often avoid all-out conflict because it would ruin both, as in price wars between rivals. But when a mistake happens, the damage is catastrophic.",
    question: "What keeps both sides from escalating, and what if that fails?",
    steps: [
      "Recognise standoffs where escalation hurts everyone.",
      "Keep channels open to avoid accidental escalation.",
      "Plan for the rare but extreme downside."
    ],
    related: ["two-front", "margin-safety"] },

  /* ================= HUMAN NATURE & JUDGMENT ================= */
  { id: "trust", cat: "human", title: "Trust",
    tagline: "The modern world runs on trust.",
    desc: "We trust strangers every day: drivers, cooks, colleagues. Trusting systems run efficiently, and the rewards of trust are huge.",
    question: "Where would more trust make this faster and cheaper?",
    steps: [
      "Be reliable so others can trust you.",
      "Extend trust deliberately, with sensible checks.",
      "Protect trust. It takes long to build and seconds to lose."
    ],
    related: ["reciprocity", "cooperation"] },

  { id: "incentive-bias", cat: "human", title: "Bias from Incentives",
    tagline: "We believe what pays us to believe.",
    desc: "Incentives don’t just change behaviour, they bend sincere thinking. A salesperson genuinely believes in the product partly because they sell it.",
    question: "What would this advisor gain if I agree?",
    steps: [
      "Ask how the person giving advice is paid or rewarded.",
      "Apply the same check to your own conclusions.",
      "Seek opinions from people with no stake."
    ],
    related: ["incentives", "confirmation"] },

  { id: "pavlovian", cat: "human", title: "Pavlovian Association",
    tagline: "We react to associations, not just facts.",
    desc: "Like Pavlov’s dogs, we feel positive or negative emotions toward things based on past associations rather than their actual effects.",
    question: "Am I reacting to this, or to what it reminds me of?",
    steps: [
      "Notice strong gut reactions.",
      "Trace them to past associations.",
      "Judge the current situation on its own merits."
    ],
    related: ["liking", "framing"] },

  { id: "envy", cat: "human", title: "Envy & Jealousy",
    tagline: "Comparison drives irrational behaviour.",
    desc: "People resent others getting more than them, strongly enough to act against their own interests. Systems that ignore envy tend to self-destruct.",
    question: "Is envy (mine or others’) shaping this decision?",
    steps: [
      "Notice when comparison triggers your reactions.",
      "Design rewards and policies with perceived fairness in mind.",
      "Compare yourself with your past self, not others."
    ],
    related: ["relative-satisfaction", "fairness"] },

  { id: "liking", cat: "human", title: "Liking & Disliking Bias",
    tagline: "We overrate what we like and underrate what we don’t.",
    desc: "Affection and dislike distort judgment of people and ideas, making us miss nuance and important information.",
    question: "Would I judge this differently if someone I disliked proposed it?",
    steps: [
      "Swap the messenger in your head and re-judge the message.",
      "Ask someone neutral for their view.",
      "Look for the strengths in what you dislike, and the flaws in what you like."
    ],
    related: ["pavlovian", "confirmation"] },

  { id: "denial", cat: "human", title: "Denial",
    tagline: "Refusing to see an uncomfortable reality.",
    desc: "Denial protects us from painful truths and keeps behaviour unchanged, sometimes with destructive results.",
    question: "What am I avoiding looking at?",
    steps: [
      "Name the fact you least want to be true.",
      "Look for evidence on it directly.",
      "Ask a trusted person to tell you what they see."
    ],
    related: ["self-preservation", "confirmation"] },

  { id: "availability", cat: "human", title: "Availability Heuristic",
    tagline: "We overweight what comes easily to mind.",
    desc: "Recent, vivid and frequent things feel more important and likely than they are. Anchoring and sunk-cost effects are related.",
    question: "Is this likely, or just memorable?",
    steps: [
      "Check data rather than memorable examples.",
      "Notice recency: what just happened colours judgment.",
      "Write down considerations before deciding, so less obvious ones get a fair hearing."
    ],
    related: ["representativeness", "small-samples"] },

  { id: "representativeness", cat: "human", title: "Representativeness Heuristic",
    tagline: "Judging by resemblance instead of odds.",
    desc: "Three errors: ignoring base rates, stereotyping instead of looking at specifics, and believing a vivid, specific scenario is more likely than a broader one.",
    question: "How often does this happen in general?",
    steps: [
      "Start from the base rate before considering specifics.",
      "Look at the individual case, not the category.",
      "Remember: adding details makes a story more vivid but less probable."
    ],
    related: ["probabilistic", "availability"] },

  { id: "social-proof", cat: "human", title: "Social Proof",
    tagline: "We do what others around us do.",
    desc: "Following the group is a deep instinct that enables cooperation and culture, and leads us into foolish behaviour when the group is wrong.",
    question: "Would I do this if nobody else were doing it?",
    steps: [
      "Separate the evidence from the crowd’s enthusiasm.",
      "Seek out people who disagree.",
      "Use social proof positively: show others the behaviour you want."
    ],
    related: ["bubbles", "setting"] },

  { id: "narrative", cat: "human", title: "Narrative Instinct",
    tagline: "We think in stories.",
    desc: "Humans are storytelling animals; organisations and nations run on shared narratives. Stories help us make meaning, and also make us see causes that aren’t there.",
    question: "Is this a true explanation or just a good story?",
    steps: [
      "Use stories to communicate important ideas.",
      "Be sceptical of neat explanations for messy events.",
      "Check stories against data."
    ],
    related: ["plot", "hindsight"] },

  { id: "curiosity", cat: "human", title: "Curiosity Instinct",
    tagline: "The urge to explore and understand.",
    desc: "Curiosity drove humans to explore and created science itself. It leads to innovation even without direct rewards.",
    question: "What would I explore here if no one was measuring?",
    steps: [
      "Protect time for open-ended exploration.",
      "Ask “why?” and “how does this work?” more often.",
      "Reward curiosity in others."
    ],
    related: ["surface-area", "emergence"] },

  { id: "language", cat: "human", title: "Language Instinct",
    tagline: "Language builds shared worlds.",
    desc: "We are wired to learn grammatical language, and with it we create shared stories, solve problems, gossip and fight. Words shape how we think together.",
    question: "Are we using the same words to mean the same things?",
    steps: [
      "Define key terms when working with others.",
      "Choose words carefully. They shape how ideas are understood.",
      "Listen for the stories a group tells about itself."
    ],
    related: ["narrative", "framing"] },

  { id: "first-conclusion", cat: "human", title: "First-Conclusion Bias",
    tagline: "The first idea in tends to shut the door.",
    desc: "Once the mind settles on an answer, it stops searching. That saves energy and leads us to accept many wrong answers.",
    question: "What were the other possible conclusions?",
    steps: [
      "Generate at least three explanations before choosing.",
      "Delay judgment on important decisions.",
      "Ask someone to argue the opposite."
    ],
    related: ["confirmation", "commitment"] },

  { id: "small-samples", cat: "human", title: "Overgeneralising from Small Samples",
    tagline: "A few cases aren’t a rule.",
    desc: "Generalising is useful, but we often build broad conclusions from a handful of examples, forgetting the law of large numbers.",
    question: "How many examples is this conclusion based on?",
    steps: [
      "Count the cases behind your belief.",
      "Look for counter-examples.",
      "Hold conclusions loosely until the sample grows."
    ],
    related: ["sampling", "availability"] },

  { id: "relative-satisfaction", cat: "human", title: "Relative Satisfaction",
    tagline: "Happiness is measured against others and our past.",
    desc: "We judge our situation relative to peers or our own past, not in absolute terms. This makes us poor predictors of what will make us happy.",
    question: "Compared to what am I judging this?",
    steps: [
      "Notice your reference point.",
      "Choose reference points deliberately (your past self, your values).",
      "Be sceptical of predictions that “X will make me happy”."
    ],
    related: ["envy", "equilibrium"] },

  { id: "commitment", cat: "human", title: "Commitment & Consistency Bias",
    tagline: "We stick to what we’ve already said.",
    desc: "Staying consistent builds trust, but combined with first-conclusion bias it keeps us defending poor answers in the face of evidence.",
    question: "If I were starting fresh today, would I choose this?",
    steps: [
      "Revisit past commitments as if they were new decisions.",
      "Make it normal to change your mind when facts change.",
      "Be careful of public commitments made early."
    ],
    related: ["first-conclusion", "confirmation"] },

  { id: "hindsight", cat: "human", title: "Hindsight Bias",
    tagline: "“I knew it all along.” You didn’t.",
    desc: "Once we know the outcome, we can’t unknow it, and we rewrite what we believed before. That stops us learning from decisions.",
    question: "What did I actually believe before I knew the outcome?",
    steps: [
      "Keep a decision journal: what you expected and why.",
      "Review decisions against what was knowable at the time.",
      "Judge decisions by process, not just outcome."
    ],
    related: ["narrative", "regression"] },

  { id: "fairness", cat: "human", title: "Sensitivity to Fairness",
    tagline: "People react strongly to unfairness.",
    desc: "We are careful judges of fairness, and violations trigger retaliation or distrust. What counts as fair shifts across times and cultures.",
    question: "How will this look to the people on the receiving end?",
    steps: [
      "Check decisions for perceived fairness, not just logic.",
      "Explain the reasons behind outcomes openly.",
      "Remember fairness standards differ between groups."
    ],
    related: ["envy", "reciprocity"] },

  { id: "fae", cat: "human", title: "Fundamental Attribution Error",
    tagline: "Blaming character instead of circumstances.",
    desc: "We over-attribute others’ behaviour to fixed traits and ignore their situation, then are surprised when they behave differently.",
    question: "What situation might explain this behaviour?",
    steps: [
      "List situational factors before judging someone’s character.",
      "Notice you explain your own behaviour by circumstances. Extend others the same.",
      "Change the situation before trying to change the person."
    ],
    related: ["hanlon", "character"] },

  { id: "stress", cat: "human", title: "Influence of Stress",
    tagline: "Stress amplifies every other bias.",
    desc: "Under stress we fall back on instinct and habit and lose careful reasoning. You don’t rise to your expectations; you fall to your level of training.",
    question: "Am I too stressed to think clearly right now?",
    steps: [
      "Recognise your stress signals.",
      "Delay major decisions until calmer, if possible.",
      "Train and rehearse in advance so habits are good ones."
    ],
    related: ["do-something", "first-conclusion"] },

  { id: "survivorship", cat: "human", title: "Survivorship Bias",
    tagline: "We only see the winners.",
    desc: "History is written by the survivors. We study the successful and miss the many who did the same things and failed, so we learn false lessons.",
    question: "Who tried this and failed, and why don’t I hear about them?",
    steps: [
      "Look for the failures that used the same strategy.",
      "Ask how much of the success was luck.",
      "Be wary of advice drawn only from winners."
    ],
    related: ["sampling", "regression"] },

  { id: "do-something", cat: "human", title: "Do-Something Syndrome",
    tagline: "The urge to act, even when action isn’t needed.",
    desc: "We feel a strong need to act and to show value, even when doing nothing is better or when we don’t understand the problem.",
    question: "What happens if I do nothing?",
    steps: [
      "Consider ‘do nothing’ as a real option.",
      "Wait for more information when stakes allow.",
      "Act only where you understand the problem."
    ],
    related: ["ecosystems", "stress"] },

  { id: "confirmation", cat: "human", title: "Confirmation Bias & Falsification",
    tagline: "We see what we already believe.",
    desc: "We look for evidence that supports our beliefs and ignore what contradicts them. Science works because it actively tries to prove ideas wrong.",
    question: "What evidence would prove me wrong?",
    steps: [
      "State the evidence that would change your mind.",
      "Go looking for it actively.",
      "Be suspicious of beliefs that can’t be disproven."
    ],
    related: ["first-conclusion", "commitment"] }
];
