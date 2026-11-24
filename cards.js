/* Customer Service Cards — content
   Based on notes from "Perfect Phrases for Customer Service" (59 tools and techniques),
   rewritten and grouped for TAEPP Member Support. Frameworks (HEARD, LAST, service recovery,
   customer effort) and general principles are added from wider service practice.
   All example phrases are illustrative. Adapt them to your own voice and IAL policy. */

const DECK = {
  name: "Customer Service Cards",
  short: "Service Cards",
  subtitle: "59 techniques + frameworks for member support",
  storageKey: "cscards",
  stepsHeading: "How to do it",
  insightLabel: "Watch out",
  questionLabel: "Use it when",
  about: "Techniques rewritten from notes on <i>Perfect Phrases for Customer Service</i>. Frameworks (HEARD, LAST, service recovery, customer effort) and principles come from wider service practice. Example phrases are illustrative: adapt them to your voice and IAL policy.",
  ways: [
    ["contents", "Start here", "How the deck works and the order most conversations follow."],
    ["shortcuts", "I need to…", "Match the situation in front of you to the right technique."],
    ["recipes", "Playbooks", "Three techniques combined for a common tough situation."],
    ["random", "Try your luck", "Draw a random technique and practise it today."]
  ],
  featured: "how-to",
  searchNoun: "techniques",
  combineNoun: "techniques"
};

const CATEGORIES = [
  { id: "start",    name: "Start Here",                 color: "#5B6B75", blurb: "How to use this deck, and shortcuts by situation." },
  { id: "recipe",   name: "Playbook",                   color: "#1B1B1B", blurb: "Three techniques combined for a common tough situation." },
  { id: "listen",   name: "Listen & Understand",        color: "#2F5FA8", blurb: "Find out what the customer actually needs." },
  { id: "defuse",   name: "Defuse Emotions",            color: "#1F7A6F", blurb: "Lower the temperature before solving anything." },
  { id: "redirect", name: "Redirect & Take Control",    color: "#5E6B2E", blurb: "Steer the conversation back to the problem." },
  { id: "words",    name: "Words & Tone",               color: "#A6822A", blurb: "Choose words that land well." },
  { id: "courtesy", name: "Courtesy & Rapport",         color: "#C2577E", blurb: "Show the customer they matter." },
  { id: "body",     name: "Body Language & Space",      color: "#7A4C9A", blurb: "What you show without speaking." },
  { id: "inform",   name: "Inform & Advise",            color: "#2F8AA0", blurb: "Help the customer understand what is happening and what they can do." },
  { id: "solve",    name: "Solve & Go Further",         color: "#B8641E", blurb: "Act on the problem and show the effort." },
  { id: "limit",    name: "Limit, Separate & Escalate", color: "#A23B32", blurb: "When other techniques fail, protect people and the process." },
  { id: "close",    name: "Follow Up & Close",          color: "#4E8A2E", blurb: "Finish what you promised and end on a positive note." },
  { id: "frame",    name: "Frameworks & Principles",    color: "#6B5B4E", blurb: "Wider ideas from service practice and research." }
];

const ICONS = {
  start:    '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>',
  recipe:   '<path d="M4 7l8-4 8 4-8 4zM4 12l8 4 8-4M4 17l8 4 8-4"/>',
  listen:   '<path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-5.6 1.4"/><path d="M10 9a2 2 0 0 1 4 0"/>',
  defuse:   '<path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z"/>',
  redirect: '<path d="M4 18V9a4 4 0 0 1 4-4h10"/><path d="M14 1l4 4-4 4"/>',
  words:    '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
  courtesy: '<path d="M3 12l4-4 3 3 4-4 7 7"/><path d="M7 16l3 3 4-4"/>',
  body:     '<circle cx="12" cy="5" r="2.5"/><path d="M12 8v7M8 11h8M9 21l3-6 3 6"/>',
  inform:   '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  solve:    '<path d="M14.7 6.3a4 4 0 0 0-5.3 5.3L3 18l3 3 6.4-6.4a4 4 0 0 0 5.3-5.3l-2.6 2.6-2.4-.6-.6-2.4z"/>',
  limit:    '<path d="M8 3h8l5 5v8l-5 5H8l-5-5V8z"/><path d="M8 12h8"/>',
  close:    '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
  frame:    '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'
};

const CARDS = [
  /* ================= START HERE ================= */
  { id: "how-to", cat: "start", title: "How to Use This Deck",
    tagline: "59 techniques in 10 groups, plus frameworks and playbooks.",
    desc: "Most good conversations follow the same order: listen, defuse, redirect, inform, solve, then follow up and close. Limits and escalation sit outside that order. Use them only when the other techniques have failed, or at once if safety is at risk.",
    steps: [
      "<b>Learn a card:</b> read the front, try to recall how to do it, then flip to check.",
      "<b>Study mode:</b> tap Study, then mark each card Got it or Again.",
      "<b>In the moment:</b> open [[shortcuts|I need to…]] and match the situation to a technique.",
      "<b>Combine:</b> real conversations need several techniques. See the Playbook cards.",
      "<b>In writing:</b> body-language and voice cards have no direct email version. Get the same effect with structure, word choice and specific thanks."
    ],
    insight: "Example phrases are illustrative. Adapt them to your own voice and to IAL policy before using them with members.",
    related: ["shortcuts", "heard", "last"] },

  { id: "shortcuts", cat: "start", title: "I Need to…",
    tagline: "Match the situation in front of you to a technique.",
    desc: "Flip for common situations and the techniques that help most.",
    steps: [
      "<b>Calm an angry person.</b> [[venting|Allow venting]], [[empathy|Empathy statements]], then [[refocus|Refocus]]",
      "<b>Stop a rant.</b> [[neutral-mode|Some people think that]] or [[when-q|When question]]",
      "<b>Say no.</b> [[level|Level]], [[positive-no|Say what you can do]] and [[alternatives|Provide alternatives]]",
      "<b>Deliver bad news.</b> [[preemptive|Preemptive strike]] and [[explain-actions|Explain reasoning]]",
      "<b>Handle abuse.</b> [[no-bait|Not taking the bait]], [[set-limits|Set limits]], [[disengage|Disengage]]",
      "<b>Fix our own error.</b> [[admit|Admit mistakes]], [[expedite|Expedite]], [[finish-fu|Finish off / follow up]]",
      "<b>Make someone feel in control.</b> [[choices|Offering choices]] and [[pros-cons|Pros and cons]]",
      "<b>Hand over a case.</b> [[supervisor|Refer to supervisor]] and [[fcr|No re-explaining]]",
      "<b>End well.</b> [[summarise|Summarise]], [[takeaway|Customer takeaway]], [[close-positive|Close positively]]"
    ],
    related: ["how-to"] },

  /* ================= PLAYBOOKS ================= */
  { id: "r-angry", cat: "recipe", title: "The Angry Caller",
    tagline: "A member is shouting about a renewal stuck for three weeks.",
    desc: "Problem-solving too early fails: the member ignores your fix because they don’t feel heard yet. Lower the temperature first, then move to action.",
    combine: ["venting", "empathy", "refocus"],
    stepText: [
      "Let them finish without interrupting. Short signals only.",
      "Name the feeling and its source, then say sorry for the impact.",
      "In the same breath, steer to what you can do today."
    ],
    result: "A calmer member who is listening to the fix instead of fighting you." },

  { id: "r-decline", cat: "recipe", title: "Saying No in Writing",
    tagline: "Declining a request that falls outside the criteria, by email.",
    desc: "A bare refusal feels like a wall. A clear reason, a real alternative and a route to review keep trust even when the answer is no.",
    combine: ["level", "alternatives", "arrange-fu"],
    stepText: [
      "State the decision honestly and firmly, with the reason and no blame.",
      "Set out the options that are still open.",
      "Say what happens next and by when."
    ],
    result: "A firm no the member understands, with a way forward." },

  { id: "r-abuse", cat: "recipe", title: "The Abusive Customer",
    tagline: "Someone starts swearing at you at the counter or on the phone.",
    desc: "Your job is to stay calm, give them a fair chance to change, and protect yourself and others if they don’t.",
    combine: ["no-bait", "set-limits", "disengage"],
    stepText: [
      "Ignore the insults and keep speaking to the problem.",
      "Name the behaviour, the consequence and the choice: “It’s up to you.”",
      "If it continues, take a short break or end the contact per policy."
    ],
    result: "Control of the conversation, with your dignity and safety intact." },

  { id: "r-queue", cat: "recipe", title: "A Queue Is Building",
    tagline: "The helpdesk is busy and people are waiting.",
    desc: "Waiting feels longer when it is unexplained and when people feel stuck. Information and options make the same wait feel shorter.",
    combine: ["waiting", "choices", "thanks"],
    stepText: [
      "Explain the reason and the likely wait, and suggest what they can do meanwhile.",
      "Offer a choice: wait, or receive the answer by email later.",
      "Thank them specifically for their patience."
    ],
    result: "Calmer customers who chose how to spend their wait." },

  { id: "r-error", cat: "recipe", title: "We Made the Mistake",
    tagline: "A member missed a deadline because we gave the wrong date.",
    desc: "When the fault is ours, speed and honesty matter more than anything. Name it first, fix it fast, and check back.",
    combine: ["preemptive", "admit", "finish-fu"],
    stepText: [
      "Raise the problem before they do.",
      "Own the error plainly, without excuses, and say what you have done.",
      "Check back later that the fix worked."
    ],
    result: "A member who trusts you more because of how you handled the error." },

  { id: "r-bad-news", cat: "recipe", title: "Delivering Bad News",
    tagline: "An appeal was rejected or a waiver can’t be granted.",
    desc: "People accept hard outcomes better when they understand the reasons and feel the process was fair.",
    combine: ["explain-actions", "softeners", "fairness"],
    stepText: [
      "Explain how and why the decision was made.",
      "Avoid absolute, harsh wording while staying clear.",
      "Show the criteria were applied consistently and how to request a review."
    ],
    result: "An unwelcome decision the member sees as fair." },

  /* ================= 1. LISTEN & UNDERSTAND ================= */
  { id: "active-listening", cat: "listen", title: "Active Listening",
    tagline: "Reflect back what you heard, often as a question.",
    desc: "Restate the key points of what the customer said and check them. It proves you heard and catches misunderstandings early.",
    question: "At the start of any contact, and whenever the issue is complicated or emotional.",
    steps: [
      "Pick out the two or three key facts the customer gave.",
      "Restate them in your own words.",
      "End with a check: “Is that right?”"
    ],
    example: "“So the renewal went through on your side, but your status still shows as pending. Is that right?”",
    insight: "Don’t parrot their exact words back. It sounds mechanical. Rephrase.",
    related: ["summarise", "ack-needs"] },

  { id: "ack-needs", cat: "listen", title: "Acknowledge Customer’s Needs",
    tagline: "Say out loud what the customer needs.",
    desc: "Rephrase something they told you, or respond to something you notice about them, such as a worried tone or a deadline they mentioned.",
    question: "Early on, before you explain or defend anything.",
    steps: [
      "Listen for the underlying need, not only the request.",
      "Name it back in one sentence.",
      "Use it to guide what you do next."
    ],
    example: "“It sounds like the most important thing for you is a confirmed date before Friday.”",
    insight: "Acknowledging a need is not promising to meet it. Be careful not to imply a guarantee.",
    related: ["active-listening", "probing"] },

  { id: "probing", cat: "listen", title: "Ask Probing Questions",
    tagline: "Move from broad to specific to find the real issue.",
    desc: "Instead of a vague opener, make a short observation, then ask a narrower question. Each answer guides the next question.",
    question: "The request is unclear, or the first words aren’t the real issue.",
    steps: [
      "Start with an observation about what you can see.",
      "Ask one focused question.",
      "Narrow further based on the answer."
    ],
    example: "“I see you’ve opened the appeal form. Is it about the CPD hours or the deadline?” Then: “Which period are you looking at?”",
    insight: "A string of questions can feel like an interrogation. Explain why you’re asking.",
    related: ["active-listening", "explain-actions"] },

  { id: "summarise", cat: "listen", title: "Summarise the Conversation",
    tagline: "Confirm you both understood the same thing.",
    desc: "Briefly restate what has been said and agreed, so both sides leave with the same picture.",
    question: "After a long or tangled exchange, before ending, and before handing over.",
    steps: [
      "List the key facts and what was agreed.",
      "Ask if you’ve missed anything.",
      "Confirm the next step and who owns it."
    ],
    example: "“Let me check I have this right: your certificate expired in March, you sent proof last week, and you need written confirmation. Have I missed anything?”",
    insight: "A summary that leaves out the customer’s main concern does more harm than no summary.",
    related: ["active-listening", "teach-back", "takeaway"] },

  { id: "phone-silence", cat: "listen", title: "Telephone Silence",
    tagline: "Use deliberate pauses; avoid unexplained ones.",
    desc: "A short pause lets the customer finish, lets emotion pass, or invites them to say more. But unexplained silence while you work feels like being ignored.",
    question: "After the customer finishes a long account, and any time you need to look something up.",
    steps: [
      "Pause a beat before replying to a long or emotional account.",
      "If you need time, say what you’re doing and how long it will take.",
      "Give short updates during longer checks."
    ],
    example: "“Take your time, I’m listening.” While checking: “I’m pulling up your record now. This will take about a minute.”",
    insight: "In email, the equivalent of silence is no reply. Send a holding reply rather than leave someone waiting.",
    related: ["venting", "explain-actions"] },

  /* ================= 2. DEFUSE EMOTIONS ================= */
  { id: "empathy", cat: "defuse", title: "Empathy Statements",
    tagline: "Name the emotion and its source.",
    desc: "Say what they feel and why: “frustrated about the delay.” Avoid vague lines like “I see where you’re coming from,” which tell the customer nothing.",
    question: "The customer shows anger, worry, disappointment or confusion.",
    steps: [
      "Identify the feeling: frustration, worry, upset.",
      "Identify the cause: the delay, the form, the error.",
      "Put both in one short sentence."
    ],
    example: "“I can hear how frustrating it’s been to wait three weeks without an update.”",
    insight: "Empathy is not agreement. You can recognise the feeling without accepting their facts.",
    related: ["empathy-not-agree", "ack-no-encourage", "apologise"] },

  { id: "apologise", cat: "defuse", title: "Apologise",
    tagline: "Say sorry for the impact, whoever caused it.",
    desc: "An apology does not automatically mean accepting responsibility. You can be sorry for the experience even when the cause is unclear or outside your control.",
    question: "Something went wrong for the customer.",
    steps: [
      "Apologise for the specific impact, not with a generic “sorry for any inconvenience”.",
      "Keep it short and sincere.",
      "Move straight to what happens next."
    ],
    example: "“I’m sorry this has caused you so much stress.” (If the fault is ours: “I’m sorry we sent you the wrong date.”)",
    insight: "Repeated or over-long apologies sound defensive. One clear apology is enough.",
    related: ["admit", "empathy", "heard"] },

  { id: "admit", cat: "defuse", title: "Admit Mistakes",
    tagline: "When we got it wrong, say so plainly.",
    desc: "Own the error without excuses or blame-shifting, and move straight to the fix. Honesty here builds more trust than any defence.",
    question: "You’ve checked the facts and the error is ours.",
    steps: [
      "Confirm the facts first.",
      "State the mistake in one plain sentence.",
      "Say what you have already done or will do to fix it."
    ],
    example: "“The reminder went to your old email address. That was our error. I’ve updated your record and resent it just now.”",
    insight: "Don’t take blame the evidence doesn’t support. Apologise for the impact instead.",
    related: ["apologise", "preemptive", "recovery-paradox"] },

  { id: "venting", cat: "defuse", title: "Allow Venting",
    tagline: "Let them get it all out without interrupting.",
    desc: "Most angry customers are ordinary people who are upset for the moment. They can’t hear solutions until they feel heard.",
    question: "The customer is angry and talking at length.",
    steps: [
      "Stay quiet, apart from short signals: “Mm-hm,” “I see.”",
      "Wait until they slow down.",
      "Thank them for explaining, then ask your first question."
    ],
    example: "“Thank you for explaining all of that. May I ask a couple of questions?”",
    insight: "If they ignore your suggestions and you keep repeating yourself, you started solving too early.",
    related: ["empathy", "ack-no-encourage", "timing"] },

  { id: "ack-no-encourage", cat: "defuse", title: "Acknowledge Without Encouraging",
    tagline: "One sentence on the feeling, then straight to the problem.",
    desc: "Acknowledge the feeling briefly and, without stopping, steer back to the problem. Dwelling on emotion feeds it.",
    question: "The customer keeps returning to how upset they are.",
    steps: [
      "Acknowledge the feeling in one short sentence.",
      "Don’t pause after it.",
      "Bridge immediately to an action."
    ],
    example: "“I understand you’re upset about the delay. Let’s look at what we can do today.”",
    insight: "Pausing after the acknowledgement invites another round of venting.",
    related: ["refocus", "empathy"] },

  { id: "youre-right", cat: "defuse", title: "You’re Right!",
    tagline: "Honest, emphatic agreement that stops a rant.",
    desc: "An angry customer expects an argument. Agreeing with a point that is true surprises them, often leaves them with nothing to say, and opens the door for other techniques.",
    question: "The customer makes a point that is actually true.",
    steps: [
      "Find the part of their complaint that is fair.",
      "Agree with it clearly and without hedging.",
      "Follow with what you’ll do about it."
    ],
    example: "“You’re right. You should have heard from us before the deadline, not after it.”",
    insight: "Never agree with something false to calm someone down. It creates a promise you can’t keep.",
    related: ["agreement", "admit"] },

  { id: "agreement", cat: "defuse", title: "Find Agreement Points",
    tagline: "Build a sense of “we’re in it together.”",
    desc: "Look for things you can honestly agree on. A technique used in hostage negotiation, it turns an argument into shared work.",
    question: "The conversation feels adversarial.",
    steps: [
      "Listen for a goal you share.",
      "Name it out loud.",
      "Use it as the starting point for the solution."
    ],
    example: "“We both want this sorted out before the audit date, so let’s work backwards from there.”",
    insight: "Agreeing on goals is safe. Be careful agreeing on facts until you’ve checked them.",
    related: ["youre-right", "face-saving"] },

  { id: "face-saving", cat: "defuse", title: "Face-Saving Out",
    tagline: "Give them a graceful way to change course.",
    desc: "People dig in when backing down means losing face. Offer a way out that keeps their dignity intact.",
    question: "The customer made a mistake or took a hard line and now needs a dignified exit.",
    steps: [
      "Spot when someone needs to back down.",
      "Point to something outside them: the form, the timing, the wording.",
      "Move on quickly without dwelling on it."
    ],
    example: "“The two dates are easy to mix up. The form doesn’t make it obvious. Let’s use the corrected one.”",
    insight: "Never say “I told you so,” even politely. It removes the exit you just offered.",
    related: ["agreement", "question-state"] },

  /* ================= 3. REDIRECT & TAKE CONTROL ================= */
  { id: "refocus", cat: "redirect", title: "Refocus",
    tagline: "Steer back to the problem and what can be done.",
    desc: "After acknowledging the emotion, move the conversation to the next action. It is the second half of [[ack-no-encourage|Acknowledge without encouraging]].",
    question: "The conversation drifts into the past, other issues, or feelings.",
    steps: [
      "Acknowledge briefly.",
      "Name the most useful next step.",
      "Ask a question that requires a decision or a fact."
    ],
    example: "“That sounds frustrating. What would help most right now is the corrected letter. Shall I send it today?”",
    insight: "Refocusing too early, before they feel heard, sounds like brushing them off.",
    related: ["ack-no-encourage", "broken-record"] },

  { id: "broken-record", cat: "redirect", title: "Broken Record",
    tagline: "Repeat the message calmly, in different words.",
    desc: "Restate your main point until the customer starts to engage. Stay polite and don’t get pulled into side arguments.",
    question: "The customer keeps repeating a demand or ignores your options.",
    steps: [
      "Decide the one message that matters.",
      "Repeat it, rephrased each time.",
      "Keep your tone even and end with a choice."
    ],
    example: "“You have several options. [Describe them.] Which would you prefer?” Then: “Which of those would work best for you?”",
    insight: "Repeating the exact same words sounds robotic and can inflame. Vary the wording.",
    related: ["refocus", "choices"] },

  { id: "neutral-mode", cat: "redirect", title: "Some People Think That",
    tagline: "Neutral mode: respond to an attack without arguing.",
    desc: "Restate the customer’s claim neutrally with the fixed phrase “Some people do think that…”. The form matters. They usually reply briefly and stop, then you follow with empathy and a refocus.",
    question: "The customer is making aggressive or exaggerated claims.",
    steps: [
      "Say: “Some people do think that [their claim, stated plainly].”",
      "Let them respond briefly.",
      "Follow with an [[empathy|Empathy statement]] and [[refocus|Refocus]]."
    ],
    example: "“Some people do think that the process is deliberately slow.” Then: “That’s frustrating. Let’s see how I can move your case along.”",
    insight: "Don’t change the wording or add sarcasm. It only works when it sounds completely neutral.",
    related: ["when-q", "empathy", "refocus"] },

  { id: "when-q", cat: "redirect", title: "When Question",
    tagline: "“When did you start thinking that…?”",
    desc: "Ask when they started thinking a key point they made. It forces them to stop and think, which interrupts the flow of angry speech.",
    question: "A rant is building and you need to break its momentum.",
    steps: [
      "Pick a key point from what they said.",
      "Summarise it neutrally.",
      "Ask: “When did you start thinking that…?”"
    ],
    example: "“When did you start thinking that the renewal had been rejected?”",
    insight: "Tone is everything. Asked with an edge, it sounds like a challenge.",
    related: ["neutral-mode", "probing"] },

  { id: "distract", cat: "redirect", title: "Distract",
    tagline: "Shift attention to something neutral so the peak passes.",
    desc: "Gently move attention to a form, a seat, a glass of water or a different question, so the emotional peak can pass.",
    question: "Anger is high and logic isn’t landing yet.",
    steps: [
      "Offer something practical or comforting.",
      "Give them a small, easy task.",
      "Return to the issue once they settle."
    ],
    example: "“Would you like to sit down while I pull up your file? Then you can tell me the reference number.”",
    insight: "Distraction must not look like avoidance. Come back to the issue quickly.",
    related: ["timing", "refocus"] },

  { id: "no-bait", cat: "redirect", title: "Not Taking the Bait",
    tagline: "Don’t respond to insults or provocation.",
    desc: "Ignore insults, sarcasm and abuse. Don’t let an unpleasant customer ruin your day, and don’t lower yourself to their level.",
    question: "Remarks become personal or provocative.",
    steps: [
      "Let the remark pass without comment.",
      "Keep your voice level.",
      "Speak only to the problem."
    ],
    example: "(Ignore “You people are useless.”) “I’d like to get this resolved. Could you give me the application reference?”",
    insight: "Ignoring insults has limits. If abuse continues, move to [[set-limits|Set limits]].",
    related: ["set-limits", "refocus"] },

  { id: "preemptive", cat: "redirect", title: "Preemptive Strike",
    tagline: "Name the problem before they do.",
    desc: "Raising the issue first shows you understand their concern and aren’t hiding from it. It takes the heat out before it builds.",
    question: "You know the customer is likely to be upset: a delay, a refusal, a known error.",
    steps: [
      "Open by naming the problem.",
      "Acknowledge its impact.",
      "Move to what you’re doing about it."
    ],
    example: "“Before we start, I know the last reply took too long, and I’m sorry. Let’s make sure this one is clear.”",
    insight: "Don’t overdo it. Naming a problem the customer hadn’t noticed can create one.",
    related: ["admit", "explain-actions"] },

  /* ================= 4. WORDS & TONE ================= */
  { id: "level", cat: "words", title: "Level",
    tagline: "Honest and forthright, strong, without blaming.",
    desc: "Say what is true, say what you can and cannot do, and leave out accusation and spin. Firm without being harsh.",
    question: "You must deliver a refusal, a correction or a hard truth.",
    steps: [
      "State the fact or decision plainly.",
      "Give the reason in one sentence.",
      "Remove any word that points at the customer’s fault."
    ],
    example: "“The deadline passed on 30 June, so I can’t process this as a standard renewal. I can explain the late-renewal route and help you through it.”",
    insight: "Avoid “You failed to…”. Describe the situation, not the person.",
    related: ["positive-no", "softeners", "plain"] },

  { id: "softeners", cat: "words", title: "Verbal Softeners",
    tagline: "Swap absolute language for softer words.",
    desc: "Words like “never” and “always” sound authoritarian and antagonise even mild customers. Use unlikely, perhaps, sometimes, it’s possible, occasionally.",
    question: "You need to disagree or correct without antagonising.",
    steps: [
      "Spot absolutes: never, always, impossible, definitely.",
      "Replace them with softer, accurate words.",
      "Pair with an offer to check."
    ],
    example: "Instead of “We never make that kind of mistake”: “It’s unlikely the record was changed, but let me check the audit trail with you.”",
    insight: "Don’t soften a firm decision into something that sounds negotiable. Softeners are for claims, not rules.",
    related: ["level", "question-state"] },

  { id: "plain", cat: "words", title: "Plain Language",
    tagline: "Short, everyday words. Explain the jargon.",
    desc: "Customers can’t act on what they don’t understand. Use common words, short sentences, and explain acronyms.",
    question: "Always, and especially with first-time members or when explaining policy.",
    steps: [
      "Replace jargon with everyday words.",
      "Spell out acronyms the first time.",
      "Keep sentences short."
    ],
    example: "Instead of “Your CPD requirement is outstanding”: “You still need 12 more hours of continuing professional development.”",
    insight: "Plain is not casual. You can be simple and still professional.",
    related: ["explanations", "level"] },

  { id: "voice-tone", cat: "words", title: "Voice Tone (Emphatic)",
    tagline: "Calm, steady and warm, with emphasis on the commitment.",
    desc: "Your tone carries more than your words. Keep it even, and stress the words that carry your promise.",
    question: "On calls and in person, especially with upset customers.",
    steps: [
      "Lower your pace and volume slightly.",
      "Stress the key commitment word.",
      "In writing, get the same effect with clear structure."
    ],
    example: "Stress the promise word: “I will call you back by three o’clock.”",
    insight: "Matching an angry customer’s volume escalates things. Stay a notch calmer than them.",
    related: ["nonverbals", "assure-effort"] },

  { id: "question-state", cat: "words", title: "Question Instead of State",
    tagline: "Turn commands into questions.",
    desc: "People dislike being ordered around. A question softens a statement and leaves them a choice.",
    question: "You need the customer to take an action or hear something they may not know.",
    steps: [
      "Notice when you’re about to say “You need to…”.",
      "Rephrase as “Were you aware…?” or “Would you be able to…?”",
      "Leave room for them to answer."
    ],
    example: "“Were you aware that our member helpdesk can check this for you?” (instead of “You need to call the helpdesk.”)",
    insight: "Don’t turn a real requirement into an optional-sounding question. Be clear when something is mandatory.",
    related: ["softeners", "choices"] },

  /* ================= 5. COURTESY & RAPPORT ================= */
  { id: "courtesy", cat: "courtesy", title: "Common Courtesy",
    tagline: "Please, thank you, a greeting, an introduction.",
    desc: "When courtesy slips, problems escalate. Stay polite, even with people you feel don’t deserve it.",
    question: "Every contact.",
    steps: [
      "Greet and introduce yourself.",
      "Use please and thank you naturally.",
      "Stay courteous even when they aren’t."
    ],
    example: "“Good morning, this is Sam from Member Support. How may I help?”",
    insight: "Courtesy is in your interest, not just theirs. It keeps difficult contacts from escalating.",
    related: ["thanks", "use-name"] },

  { id: "thanks", cat: "courtesy", title: "Thank-Yous",
    tagline: "Be specific about what you’re thanking them for.",
    desc: "A bare “thank you” sounds automatic. Thanking them for something specific shows you noticed.",
    question: "They wait, supply information, raise a concern or end the contact.",
    steps: [
      "Name what you’re grateful for.",
      "Say it once, sincerely.",
      "Thank people for complaints too: they help you improve."
    ],
    example: "“Thank you for being so patient while I checked this.”",
    insight: "Thanking someone for their patience when they clearly weren’t patient can sound sarcastic.",
    related: ["courtesy", "last"] },

  { id: "use-name", cat: "courtesy", title: "Use Customer’s Name",
    tagline: "It shows they matter, and that you know who they are.",
    desc: "Using a name signals importance. It also reduces anonymity, and anonymity tends to increase aggression.",
    question: "Early in the interaction and at key moments.",
    steps: [
      "Note the name and how they prefer to be addressed.",
      "Use it at the start and at key points.",
      "Don’t overuse it."
    ],
    example: "“Mr Lim, I’ve found your application. Here’s what I can see.”",
    insight: "Using a name in every sentence sounds scripted. Two or three times is enough.",
    related: ["courtesy"] },

  /* ================= 6. BODY LANGUAGE & SPACE ================= */
  { id: "nonverbals", cat: "body", title: "Appropriate Nonverbals",
    tagline: "Open posture, eye contact, attentive nods.",
    desc: "Your body speaks before you do. Show attention and openness; avoid crossed arms, sighs, eye-rolling and checking your phone.",
    question: "Any face-to-face contact, including video calls.",
    steps: [
      "Face the customer with an open posture.",
      "Keep your hands visible and uncrossed.",
      "Nod when they make a point."
    ],
    example: "Turn away from your screen when they start speaking, and look at them while they explain.",
    insight: "Nonverbals that contradict your words win. A sigh cancels a polite sentence.",
    related: ["smiles", "voice-tone"] },

  { id: "smiles", cat: "body", title: "Appropriate Smiles",
    tagline: "Match your expression to the moment.",
    desc: "Smile warmly at greetings and good news. Don’t smile when someone is angry or when delivering bad news: it can read as mocking.",
    question: "Every face-to-face contact.",
    steps: [
      "Smile at the greeting.",
      "Switch to a calm, caring expression when hearing a complaint.",
      "Smile again at a positive close."
    ],
    example: "A warm smile at hello; a serious, attentive face while they describe the problem.",
    insight: "A fixed smile through a complaint looks like you’re not taking it seriously.",
    related: ["nonverbals"] },

  { id: "height", cat: "body", title: "Manage Height Differentials",
    tagline: "Aim for roughly equal eye level.",
    desc: "Towering over a seated customer, or being looked down on from a higher position, shifts power and raises tension.",
    question: "Face-to-face, especially in tense moments.",
    steps: [
      "Notice who is standing and who is sitting.",
      "Invite them to sit, and sit too.",
      "If they stand and won’t sit, stand to restore balance."
    ],
    example: "“Please, have a seat. I’ll sit too, so we can go through this together.”",
    insight: "Standing up suddenly can read as a threat. Move slowly and explain what you’re doing.",
    related: ["distance", "nonverbals"] },

  { id: "distance", cat: "body", title: "Manage Interpersonal Distance",
    tagline: "Keep a respectful distance and adjust it when tension rises.",
    desc: "About an arm’s length is a common guide. Standing slightly to the side feels less confrontational than face-on.",
    question: "Tension is rising in person.",
    steps: [
      "Keep about an arm’s length.",
      "Angle your body slightly to the side.",
      "Make sure you both have a clear way out."
    ],
    example: "Step back a little, turn slightly, and keep the doorway clear.",
    insight: "Comfortable distance varies by person and culture. Watch for someone stepping back.",
    related: ["height", "security"] },

  { id: "stop-sign", cat: "body", title: "Stop Sign (Nonverbal)",
    tagline: "A calm raised palm that signals “let’s pause.”",
    desc: "When someone is talking over you, a calm gesture paired with a soft phrase can create a pause. Use it lightly and with cultural sensitivity.",
    question: "Someone is escalating and a verbal request alone isn’t working.",
    steps: [
      "Raise a palm at chest height, slowly.",
      "Pair it with a quiet, respectful phrase.",
      "Lower it once they pause."
    ],
    example: "Palm raised, softly: “I want to help. May I say something?”",
    insight: "A sharp or high gesture looks aggressive. Keep it low, slow and brief.",
    related: ["nonverbals", "set-limits"] },

  /* ================= 7. INFORM & ADVISE ================= */
  { id: "explain-actions", cat: "inform", title: "Explain Reasoning or Actions",
    tagline: "Say what you’re doing and why.",
    desc: "People get frustrated, even frightened, when they don’t understand what’s going on. Narrating your actions removes the mystery.",
    question: "Before checking, pausing, transferring or refusing anything.",
    steps: [
      "Say what you’re about to do.",
      "Say why.",
      "Say how long it will take."
    ],
    example: "“I’m checking your CPD record because I need to confirm the dates before I can approve the extension.”",
    insight: "Explaining is not justifying. Keep it short and factual.",
    related: ["explanations", "phone-silence"] },

  { id: "explanations", cat: "inform", title: "Provide Explanations",
    tagline: "Teach the customer how things work.",
    desc: "An educated customer is usually easier to serve and more loyal. Explaining the rule prevents the next problem.",
    question: "The problem comes from a misunderstanding of a rule, form or process.",
    steps: [
      "Find the misunderstanding.",
      "Explain the rule and its purpose simply.",
      "Check they’ve understood."
    ],
    example: "“The system asks for both dates because the first starts the cycle and the second shows when it ends.”",
    insight: "Explaining in a lecturing tone makes people feel stupid. Explain as you would to a respected colleague.",
    related: ["plain", "teach-back", "effort"] },

  { id: "pros-cons", cat: "inform", title: "Pros and Cons",
    tagline: "Present options in a balanced way.",
    desc: "A one-sided pitch makes customers suspicious of your motives. Balance makes you more credible.",
    question: "The customer must choose between options.",
    steps: [
      "List the main benefit of each option.",
      "List the main drawback of each.",
      "Let them weigh it up."
    ],
    example: "“The extension gives you more time, but moves your next renewal date. The standard route is quicker, but needs the full hours by the deadline.”",
    insight: "Hiding a drawback you know about will surface later as a complaint.",
    related: ["alternatives", "recommend", "choices"] },

  { id: "alternatives", cat: "inform", title: "Provide Alternatives",
    tagline: "Lay out the other options that are open.",
    desc: "Showing alternatives proves you want them to understand their options. It’s informational and doesn’t demand an answer.",
    question: "The preferred option isn’t available.",
    steps: [
      "Acknowledge what can’t be done.",
      "List the realistic alternatives.",
      "Offer to go through them."
    ],
    example: "“I can’t waive the fee, but there are two other routes you could consider. Shall I go through them?”",
    insight: "Only list options that are genuinely available to this customer.",
    related: ["positive-no", "pros-cons", "choices"] },

  { id: "recommend", cat: "inform", title: "Expert Recommendations",
    tagline: "Offer advice, but ask first.",
    desc: "Expert advice, or simplifying things so they reach their goal efficiently, is invaluable. Ask permission before giving it.",
    question: "The customer is unsure which option to choose.",
    steps: [
      "Ask: “Would you like my recommendation?”",
      "Give one clear recommendation.",
      "Give the reason, tied to their situation."
    ],
    example: "“Would you like my recommendation? Given your dates, I’d suggest the late-renewal route.”",
    insight: "Recommend; don’t decide for them. The choice stays theirs.",
    related: ["pros-cons", "alternatives"] },

  { id: "waiting", cat: "inform", title: "Suggest an Alternative to Waiting",
    tagline: "Explain the delay and offer something better than waiting.",
    desc: "Explain the reason for the wait, suggest something useful to do meanwhile, or offer to reschedule.",
    question: "Queues, call backlogs, slow back-office checks.",
    steps: [
      "Say why there’s a wait and how long.",
      "Suggest something useful to do meanwhile.",
      "Offer a way not to wait at all."
    ],
    example: "“Processing takes about 15 minutes today. You’re welcome to wait, or I can email you the outcome this afternoon.”",
    insight: "Underestimating the wait is worse than giving an honest, longer one.",
    related: ["expectations", "choices"] },

  { id: "takeaway", cat: "inform", title: "Provide a Customer Takeaway",
    tagline: "Give them something to keep.",
    desc: "A written summary, reference number, next steps or a link saves them from having to remember, or from calling back.",
    question: "At the end of any contact that includes actions, deadlines or decisions.",
    steps: [
      "Decide what they need to remember.",
      "Put it in writing.",
      "Include a reference number and the next date."
    ],
    example: "“I’ll email you a summary today with your reference number, the three documents we need and the date to submit them.”",
    insight: "A takeaway full of policy text gets ignored. Keep it to what they must do.",
    related: ["summarise", "effort", "arrange-fu"] },

  /* ================= 8. SOLVE & GO FURTHER ================= */
  { id: "above-beyond", cat: "solve", title: "Above and Beyond",
    tagline: "Do more than the minimum, where it’s fair.",
    desc: "Customers, even difficult ones, often show great loyalty when they see extra effort, and are less likely to direct anger at you if they can’t get exactly what they want.",
    question: "Occasionally, where it’s fair and within your authority.",
    steps: [
      "Look for the next problem they haven’t noticed.",
      "Fix it, or flag it, while you’re there.",
      "Tell them what you did."
    ],
    example: "“I’ve also checked your other applications, and one more needs attention. Let me sort that now.”",
    insight: "Going beyond for one customer must not mean treating others unfairly. Stay within policy.",
    related: ["effort", "assure-effort"] },

  { id: "assure-effort", cat: "solve", title: "Assurances of Effort",
    tagline: "Promise what you control: your effort.",
    desc: "“I will do everything I can” is a safe commitment when the outcome depends on people or systems you don’t control.",
    question: "The result is uncertain or someone else decides.",
    steps: [
      "Be honest that you can’t promise the outcome.",
      "Promise specific actions you will take.",
      "Follow through visibly."
    ],
    example: "“I can’t promise the committee’s decision, but I will make sure your case goes in with all the supporting evidence.”",
    insight: "Vague effort promises (“I’ll look into it”) sound like a brush-off. Name the action.",
    related: ["assure-result", "expectations"] },

  { id: "assure-result", cat: "solve", title: "Assurances of Result",
    tagline: "Promise a specific outcome, only when you can guarantee it.",
    desc: "A firm promise reassures, but only if you have the authority and facts to deliver it.",
    question: "You control the result.",
    steps: [
      "Check you can deliver.",
      "State the outcome and time precisely.",
      "Deliver, or warn them before the deadline if something changes."
    ],
    example: "“Your corrected certificate will be in your inbox by 5 pm today.”",
    insight: "A broken guarantee damages trust more than no guarantee.",
    related: ["assure-effort", "complete-fu"] },

  { id: "choices", cat: "solve", title: "Offering Choices / Empowering",
    tagline: "Give back a sense of control.",
    desc: "Customers get angry when they feel helpless against policy and red tape. Real choices, even small ones, restore control.",
    question: "You have more than one acceptable way forward.",
    steps: [
      "Find two or three acceptable options.",
      "Present them simply.",
      "Ask which they prefer."
    ],
    example: "“I can send the letter by email today or by post. Which would you prefer?”",
    insight: "Too many choices overwhelm. Two or three is plenty.",
    related: ["alternatives", "broken-record", "pros-cons"] },

  { id: "expedite", cat: "solve", title: "Expedite",
    tagline: "Speed things up when it’s justified.",
    desc: "Prioritise or fast-track a case, but only when it’s fair to others, and explain what you’re doing.",
    question: "An imminent deadline, or a long delay already suffered (especially our fault).",
    steps: [
      "Check that speeding up is justified and allowed.",
      "Take the action: flag as urgent, skip a non-essential step.",
      "Tell them what changes and when they’ll hear."
    ],
    example: "“Because your deadline is tomorrow, I’ve marked your case as urgent. You’ll hear from us by noon.”",
    insight: "Expediting for whoever shouts loudest rewards the wrong behaviour and is unfair to others.",
    related: ["admit", "assure-result"] },

  { id: "bonus", cat: "solve", title: "Bonus Buy-Off",
    tagline: "A small goodwill gesture to repair the relationship.",
    desc: "After a clear failure, a small extra, such as a priority slot or a direct contact, signals you value the relationship. Use sparingly, within policy.",
    question: "We caused a clear inconvenience and the fix alone doesn’t feel enough.",
    steps: [
      "Check what you’re allowed to offer.",
      "Make it relevant to their inconvenience.",
      "Offer it after the fix, not instead of it."
    ],
    example: "“To make up for the delay, I’ll give you my direct contact for this case so you don’t have to start over.”",
    insight: "A gesture offered before the problem is fixed can look like a bribe.",
    related: ["recovery-paradox", "above-beyond"] },

  /* ================= 9. LIMIT, SEPARATE & ESCALATE ================= */
  { id: "set-limits", cat: "limit", title: "Set Limits",
    tagline: "“If you… then I… It’s up to you.”",
    desc: "Name the behaviour, the consequence and the choice, calmly and without making it personal. Use only after other techniques fail, and know your policy on ending a contact.",
    question: "The customer is abusive, swearing or threatening.",
    steps: [
      "<b>If:</b> name the specific behaviour.",
      "<b>Then:</b> name the consequence.",
      "<b>Choice:</b> “It’s up to you whether we continue.” Then follow through."
    ],
    example: "“If you continue to shout, then I’ll have to end this call. It’s up to you whether we continue.”",
    insight: "A limit you don’t enforce teaches the customer that limits are empty.",
    related: ["no-bait", "disengage", "security"] },

  { id: "disengage", cat: "limit", title: "Disengage",
    tagline: "Take a break for a fresh start.",
    desc: "Step away so both sides can calm down or think clearly. When the conversation resumes, it feels like a fresh start.",
    question: "The conversation is going in circles or emotions are too high.",
    steps: [
      "Give a neutral reason for the break.",
      "Say when you’ll be back.",
      "Come back on time and restart calmly."
    ],
    example: "“Let me step away for a moment and check with a colleague. I’ll be back shortly.”",
    insight: "Disengaging without saying when you’ll return feels like abandonment.",
    related: ["timing", "set-limits"] },

  { id: "timing", cat: "limit", title: "Use of Timing with Angry Customers",
    tagline: "A short timeout gives them time to think.",
    desc: "Most angry customers come back calmer after a short break, and some apologise. A timeout is not a punishment.",
    question: "After a heated exchange, together with [[disengage|Disengage]].",
    steps: [
      "Offer a short break with a reason.",
      "Keep it to a few minutes.",
      "Return and restart without referring back to the outburst."
    ],
    example: "“I’ll take five minutes to find the details. Would you like to wait here or shall I call you back?”",
    insight: "Breaks longer than a few minutes give them a new reason to be angry.",
    related: ["disengage", "venting"] },

  { id: "audience", cat: "limit", title: "Audience Removal",
    tagline: "Move the conversation away from onlookers.",
    desc: "An audience makes people perform and makes backing down harder. Serve them somewhere private.",
    question: "Other customers or colleagues are watching.",
    steps: [
      "Offer a private space as a courtesy.",
      "Make sure a colleague knows where you are.",
      "Continue the conversation there."
    ],
    example: "“Could we speak in the meeting room? It will be quieter and more private.”",
    insight: "Don’t isolate yourself with someone who seems dangerous. Safety comes first.",
    related: ["isolate", "security", "privacy"] },

  { id: "isolate", cat: "limit", title: "Isolate / Detach Customer",
    tagline: "Separate them from what feeds the escalation.",
    desc: "A companion egging them on, a public comment thread or a crowded counter can fuel things. Deal with the customer one to one.",
    question: "A third party or public setting is making things worse.",
    steps: [
      "Identify what is feeding the escalation.",
      "Offer a one-to-one channel.",
      "Continue privately."
    ],
    example: "(Online) “Thanks for flagging this. I’ll message you privately so we can sort out your details safely.”",
    insight: "Moving a public complaint private must not look like hiding it. Reply publicly that you’re helping.",
    related: ["audience", "privacy"] },

  { id: "supervisor", cat: "limit", title: "Refer to Supervisor",
    tagline: "Hand over to someone with more authority, with a briefing.",
    desc: "Some customers calm down when they speak to someone senior. Brief the supervisor first, with the name, the issue and their state of mind, so the customer doesn’t repeat everything.",
    question: "The customer asks for a manager, or the issue is beyond your authority.",
    steps: [
      "Brief the supervisor: name, issue, state of mind.",
      "Tell the customer who is taking over and that they’re briefed.",
      "Hand over warmly, not as a punishment."
    ],
    example: "“I’d like to bring in my supervisor, Ms Chen. She already has your details, so you won’t need to explain it all again.”",
    insight: "An unbriefed handover makes the customer start again, which raises their anger.",
    related: ["third-party", "fcr", "own-it"] },

  { id: "third-party", cat: "limit", title: "Refer to Third Party",
    tagline: "Bring in someone who knows more, or who fits better.",
    desc: "Someone else may know the subject better, or have a style that works better with this customer.",
    question: "You lack the expertise, or the relationship is stuck.",
    steps: [
      "Identify the right person.",
      "Brief them.",
      "Introduce them and explain why."
    ],
    example: "“Our CPD adviser handles this type of case daily. Let me introduce you.”",
    insight: "A referral without a warm introduction feels like being passed around.",
    related: ["supervisor", "fcr"] },

  { id: "security", cat: "limit", title: "Contact Security / Authorities",
    tagline: "Safety first: yours, your colleagues’ and other customers’.",
    desc: "When there are threats or a risk of harm, escalate to security, the authorities or senior management. Follow your emergency procedure.",
    question: "Threats, violence or any risk that someone could be hurt.",
    steps: [
      "Stay calm and keep a safe distance.",
      "Alert a colleague, security or the authorities.",
      "Afterwards, record what happened and report it."
    ],
    example: "(Calmly, to a colleague) “Please call security. I’ll stay with the customer until they arrive.”",
    insight: "Don’t wait until it’s too late. If you feel unsafe, act.",
    related: ["set-limits", "distance", "self-care"] },

  { id: "privacy", cat: "limit", title: "Privacy and Confidentiality",
    tagline: "Protect personal and case information.",
    desc: "Verify identity before sharing anything. Never discuss another person’s details, or a customer’s case where others can overhear.",
    question: "Always, especially when a third party contacts you on someone’s behalf.",
    steps: [
      "Verify identity before sharing details.",
      "Share only what’s needed.",
      "Move sensitive discussions somewhere private."
    ],
    example: "“To protect your privacy, I need to confirm a few details before I can discuss your record.”",
    insight: "Explain why you’re checking, or verification feels like suspicion.",
    related: ["audience", "isolate"] },

  /* ================= 10. FOLLOW UP & CLOSE ================= */
  { id: "arrange-fu", cat: "close", title: "Arrange Follow-Up",
    tagline: "What you’ll do, by when, and how they’ll hear.",
    desc: "A good follow-up plan has three parts: what you’ll do in the meantime, a specific time, and a choice of how and when they hear back.",
    question: "You can’t resolve the matter immediately.",
    steps: [
      "Say what you’ll do between now and the follow-up.",
      "Give a specific time.",
      "Offer a choice of channel: call, email, or they contact you."
    ],
    example: "“I’ll check with the committee today and update you by 3 pm tomorrow. Would you prefer a call or an email?”",
    insight: "“I’ll get back to you soon” is not a follow-up plan.",
    related: ["complete-fu", "expectations"] },

  { id: "complete-fu", cat: "close", title: "Complete Follow-Up",
    tagline: "Do what you said, when you said.",
    desc: "If something changes, tell the customer before the deadline, not after.",
    question: "Every time a follow-up was promised.",
    steps: [
      "Diarise every promised follow-up.",
      "Deliver on time.",
      "If you can’t, update them before the deadline with a new date."
    ],
    example: "“I said I’d update you by 3 pm. The committee hasn’t met yet. I’ll update you again on Thursday morning.”",
    insight: "A missed follow-up erases the goodwill you earned in the original conversation.",
    related: ["arrange-fu", "finish-fu"] },

  { id: "finish-fu", cat: "close", title: "Finish Off / Follow Up",
    tagline: "Check back that the fix worked.",
    desc: "Once it’s resolved, confirm the customer is satisfied. It closes the loop and catches problems early.",
    question: "After a complaint, an error, or any case that took effort.",
    steps: [
      "Wait a sensible time after the fix.",
      "Contact them to check it worked.",
      "Fix anything left over."
    ],
    example: "“I’m following up to confirm you received the corrected letter and that everything now looks right on your side.”",
    insight: "Follow-up is where many organisations fall short in service recovery.",
    related: ["recovery-paradox", "complete-fu"] },

  { id: "close-positive", cat: "close", title: "Close Interactions Positively",
    tagline: "End every contact on a positive note.",
    desc: "Even difficult conversations should end well. Sarcasm is never acceptable: it reignites the anger.",
    question: "Every interaction.",
    steps: [
      "Summarise the next step.",
      "Thank them specifically.",
      "Leave the door open."
    ],
    example: "“Thank you for your patience today. You have the next steps now, and I’m here if anything is unclear.”",
    insight: "People remember endings most. See [[peak-end|The ending matters]].",
    related: ["peak-end", "thanks", "summarise"] },

  /* ================= FRAMEWORKS & PRINCIPLES ================= */
  { id: "heard", cat: "frame", title: "HEARD",
    tagline: "Hear, Empathize, Apologize, Resolve, Diagnose.",
    desc: "A service recovery sequence popularly attributed to Disney. Emotion first, then solution, then prevention.",
    question: "We got something wrong, the customer is upset, and you want to stop it happening again.",
    steps: [
      "<b>Hear:</b> let them tell the whole story without interrupting.",
      "<b>Empathize:</b> show you understand how they feel.",
      "<b>Apologize:</b> for the impact, even if you’re not the cause.",
      "<b>Resolve:</b> agree a fix with a clear timeline.",
      "<b>Diagnose:</b> afterwards, find the root cause and fix the process."
    ],
    example: "“I’d be frustrated too. I’m sorry this happened. I’ll correct it today and confirm by email.”",
    insight: "Some versions use different words for the letters. The idea is the same.",
    related: ["last", "complaints-info", "apologise"] },

  { id: "last", cat: "frame", title: "LAST",
    tagline: "Listen, Apologise, Solve, Thank.",
    desc: "A four-step script short enough to remember in the middle of a tense conversation.",
    question: "You need a quick, lightweight recovery script.",
    steps: [
      "<b>Listen:</b> “Can you tell me what happened?”",
      "<b>Apologise:</b> “I’m sorry about that.”",
      "<b>Solve:</b> “Let me see what I can do to correct this now.”",
      "<b>Thank:</b> “Thank you for telling us. It helps us improve.”"
    ],
    insight: "Don’t solve before you listen, or the fix may not match the failure. Use [[heard|HEARD]] when you also need to prevent a repeat.",
    related: ["heard", "thanks"] },

  { id: "recovery-paradox", cat: "frame", title: "Service Recovery Paradox",
    tagline: "A problem fixed brilliantly can build more loyalty than no problem.",
    desc: "Coined in 1992 by McCollough and Bharadwaj. Real but not universal: it works less well for repeat failures, big failures and faults the customer sees as avoidable.",
    question: "Thinking about how to respond after a failure.",
    steps: [
      "Fix it quickly and generously.",
      "Explain what you’ve changed.",
      "Follow up afterwards."
    ],
    example: "After an error: apologise, fix it fast, explain the change, and check back a few days later.",
    insight: "Recovery is not a substitute for getting it right. A slow or grudging fix lets them down twice.",
    related: ["finish-fu", "heard", "admit"] },

  { id: "effort", cat: "frame", title: "Make It Easy",
    tagline: "Reducing customer effort builds loyalty more than delight.",
    desc: "A 2010 HBR study (Dixon, Freeman and Toman, 75,000+ customers) found that reducing the work customers must do to solve their problem drives loyalty; delighting them mostly doesn’t.",
    question: "Designing any reply, form or process.",
    steps: [
      "Resolve the current issue and head off the next one.",
      "Don’t make them switch channels or repeat information.",
      "Tell them exactly what to do next."
    ],
    example: "Answer the follow-up question they haven’t asked yet, and attach the form they’ll need.",
    insight: "Extra flourishes don’t make up for a reply that leaves the member with more work.",
    related: ["fcr", "takeaway", "above-beyond"] },

  { id: "own-it", cat: "frame", title: "Own It",
    tagline: "The customer should always know who has their case.",
    desc: "One clear owner prevents dropped cases. If you hand over, say who has it, what they know, and when they’ll hear next.",
    question: "Any case that needs more than one contact.",
    steps: [
      "Take ownership out loud.",
      "Give your name and how to reach you.",
      "If you hand over, introduce the new owner."
    ],
    example: "“I’m taking ownership of this. I’ll be your contact until it’s resolved.”",
    insight: "“Someone will get back to you” means no one owns it.",
    related: ["supervisor", "fcr"] },

  { id: "fcr", cat: "frame", title: "No Re-Explaining",
    tagline: "Aim to resolve first time; never make them start over.",
    desc: "Resolve at first contact where you can. When you can’t, record the case so nobody has to ask the customer to repeat themselves.",
    question: "Every contact, and especially transfers.",
    steps: [
      "Try to resolve it now.",
      "If not, record everything needed to continue.",
      "Brief whoever takes over."
    ],
    example: "“I’ve noted everything in your file, so my colleague will already have the details.”",
    insight: "Having to repeat a story is one of the biggest drivers of customer effort.",
    related: ["effort", "supervisor", "own-it"] },

  { id: "positive-no", cat: "frame", title: "Say What You Can Do",
    tagline: "The positive no: lead with what’s possible.",
    desc: "When you must refuse, give the reason and lead with what you can do. People remember the alternative more kindly than a bare refusal.",
    question: "Declining any request.",
    steps: [
      "Say clearly what can’t be done.",
      "Give the reason.",
      "Move straight to what can be done."
    ],
    example: "Instead of “We can’t extend the deadline”: “The deadline can’t be extended, but I can help you submit today and explain the late-renewal route.”",
    insight: "Don’t bury the no. A vague answer leads to a second, angrier contact.",
    related: ["level", "alternatives"] },

  { id: "expectations", cat: "frame", title: "Manage Expectations",
    tagline: "Under-promise, then deliver.",
    desc: "Give realistic timelines. A missed promise hurts more than a longer, honest estimate.",
    question: "Giving any timeline or outcome.",
    steps: [
      "Check how long it really takes.",
      "Give a realistic estimate with a little buffer.",
      "Update them if anything changes."
    ],
    example: "“Allow five working days. I’ll tell you sooner if it’s ready earlier.”",
    insight: "Padding too much makes you look slow. Aim for honest, not inflated.",
    related: ["assure-result", "arrange-fu", "waiting"] },

  { id: "empathy-not-agree", cat: "frame", title: "Empathy Is Not Agreement",
    tagline: "Recognise the feeling; keep the decision.",
    desc: "You can understand how someone feels without accepting their facts or giving them what they ask for.",
    question: "Showing empathy while holding a firm position.",
    steps: [
      "Acknowledge the feeling.",
      "State the decision separately.",
      "Explain how it was made."
    ],
    example: "“I understand why this feels unfair, and I’m going to explain how the decision was made.”",
    insight: "Mixing them up leads to over-promising: “I understand, I’ll get that sorted” when you can’t.",
    related: ["empathy", "level", "fairness"] },

  { id: "fairness", cat: "frame", title: "Fair Process",
    tagline: "Be heard, give reasons, be consistent.",
    desc: "In registry and policy work, customers judge the process as much as the outcome.",
    question: "Making or explaining a decision, appeal or waiver.",
    steps: [
      "Let the customer be heard.",
      "Give clear reasons tied to the criteria.",
      "Treat similar cases alike, and explain how to request a review."
    ],
    example: "“This decision follows the published criteria. If you have new evidence, here’s how to request a review.”",
    insight: "Exceptions made for one person quickly become a fairness problem for everyone else.",
    related: ["empathy-not-agree", "explanations", "level"] },

  { id: "teach-back", cat: "frame", title: "Teach-Back",
    tagline: "Ask them to say the next step in their own words.",
    desc: "Checking understanding catches gaps before they become a second contact, without sounding like a test.",
    question: "The end of any contact with steps to follow.",
    steps: [
      "Frame it as checking your explanation, not their memory.",
      "Ask what they’ll do first.",
      "Clarify anything they miss."
    ],
    example: "“To make sure I explained it clearly, could you tell me what you’ll do first?”",
    insight: "Asked condescendingly, it feels like a quiz. Own the explanation.",
    related: ["summarise", "explanations"] },

  { id: "complaints-info", cat: "frame", title: "Complaints Are Information",
    tagline: "Each complaint points to a possible process problem.",
    desc: "Log the cause, look for patterns, fix the root. It’s the Diagnose step of HEARD at team level.",
    question: "After any complaint is resolved.",
    steps: [
      "Record the cause, not just the fix.",
      "Look for repeats.",
      "Change the form, template or process."
    ],
    example: "Three members misread the same form field, so change the wording on the form.",
    insight: "Fixing each complaint individually while the cause stays hides the real problem.",
    related: ["heard", "effort"] },

  { id: "peak-end", cat: "frame", title: "The Ending Matters",
    tagline: "People judge an experience by its peak and its end.",
    desc: "The peak-end effect: the most intense moment and the final minute shape how the whole contact is remembered.",
    question: "Closing any interaction, especially a hard one.",
    steps: [
      "Give a clear summary.",
      "Close warmly.",
      "Confirm the next step."
    ],
    example: "End a tough call with: “Thank you for working through this with me. You’ll have the confirmation by Friday.”",
    insight: "A rushed, cold close can undo an otherwise good conversation.",
    related: ["close-positive", "summarise"] },

  { id: "self-care", cat: "frame", title: "Look After Yourself",
    tagline: "Difficult contacts are draining.",
    desc: "Staying calm is easier when you’re not carrying the last bad call. Recovery is part of the job.",
    question: "After a difficult or abusive contact.",
    steps: [
      "Take a short break afterwards.",
      "Debrief with a colleague or supervisor.",
      "Report abuse; don’t absorb it."
    ],
    example: "“That call was rough. I’m taking five minutes before the next one.”",
    insight: "Remember: the customer’s anger is usually about the situation, not about you.",
    related: ["no-bait", "security"] }
];
