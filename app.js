const storage = {
  opening: "proposalDefenseStudio.openingAnswer.v1",
  committee: "proposalDefenseStudio.committeeNotes.v1",
  checks: "proposalDefenseStudio.sampleChecks.v1"
};

const nodes = {
  "Pedagogical Friction": {
    claim: "The study is not arguing that all difficulty is good. It distinguishes productive friction that supports interpretation, authorship, and judgment from exclusionary friction that blocks access.",
    evidence: "Phase 2 reviews identify this distinction as a major strength because it keeps the proposal from romanticizing struggle.",
    risk: "Committee members may ask how the framework becomes observable in interviews, survey domains, and document analysis."
  },
  "Tertiary Algorithmicity": {
    claim: "Generative AI changes the media ecology of schoolwork by shaping meaning before students and teachers have fully entered the interpretive task.",
    evidence: "The qualifying paper functions as the conceptual bridge from Ong and media ecology into algorithmic secondary orality and tertiary algorithmicity.",
    risk: "The proposal should let external literature carry the evidentiary load, with the qualifying paper serving as organizing synthesis."
  },
  "Output Looks Like Learning": {
    claim: "The practical problem is not only cheating or tool adoption. It is the gap between polished educational output and durable evidence of reasoning, authorship, and understanding.",
    evidence: "The local Phase 2 review names this as the project's practitioner-facing formulation and its clearest bridge to K-12 educators.",
    risk: "The defense should avoid implying findings before data collection."
  },
  "K-12 Policy and Practice": {
    claim: "K-12 AI governance needs to address instruction, assessment, equity, privacy, and professional judgment, not only acceptable use.",
    evidence: "The proposal is situated in Curriculum, Advocacy, and Policy and focuses on institutional conditions that enable or constrain friction-preserving pedagogy.",
    risk: "Public-facing GitHub materials must not collect participant data or expose district-sensitive material."
  },
  "Merriam-Aligned Case Study": {
    claim: "The design transitions from Stake's useful collective instrumental framing toward Merriam's constructivist educational case study approach as the methodological center.",
    evidence: "Merriam aligns the bounded study with interpretive educational inquiry through particularistic focus, thick description, and heuristic understanding, while QUAL + quan integration supplies complementary structural context.",
    risk: "The defense must explain what the bounded case is, how participant groups relate to it, and how mixed methods integration supports rather than overrides constructivist case interpretation."
  }
};

const defenseSequence = [
  ["Purpose", "Investigate how K-12 educators respond to friction-reducing GenAI affordances, what institutional conditions shape that work, and how the framework can inform AI policy."],
  ["Problem", "Generative AI can make schoolwork appear successful while bypassing interpretive labor, authorial ownership, and durable learning processes."],
  ["Framework", "Pedagogical friction responds to noetic displacement, rhetorical saturation, and existential abstraction without romanticizing exclusionary difficulty."],
  ["Design", "A convergent QUAL + quan design embedded in a Merriam-aligned constructivist case study can examine professional reasoning, institutional conditions, learner retrospection, and bounded quantitative context."],
  ["Boundary", "The student strand, quantitative strands, secondary datasets, and AI artifact strand support the core qualitative questions rather than becoming separate dissertations."],
  ["Contribution", "The study can inform K-12 AI policy, assessment, instructional design, and media-ecological scholarship while avoiding claims before data collection."]
];

const claims = [
  {
    id: "problem-polished-output",
    type: "problem",
    title: "Polished output is not reliable evidence of learning.",
    defense: "The dissertation's central problem is the widening gap between product quality and evidence of interpretation, authorship, judgment, and durable understanding.",
    evidence: "Grounded in the current Chapters 1-3 review and the practitioner-facing phrase, output looks like learning.",
    challenge: "How will you avoid treating all AI-supported production as shallow?",
    answer: "By distinguishing the appearance of learning from verified learning processes, and by asking educators how they preserve evidence of reasoning rather than assuming AI use is always harmful."
  },
  {
    id: "framework-friction",
    type: "framework",
    title: "Pedagogical friction is a design and governance concept.",
    defense: "The framework helps educators decide which difficulties support learning and which difficulties should be removed for access, equity, or clarity.",
    evidence: "The Phase 2 review names productive versus exclusionary friction as a key conceptual safeguard.",
    challenge: "Is friction just a new name for productive struggle?",
    answer: "It draws from productive struggle and desirable difficulties, but extends the idea into media ecology, AI governance, institutional policy, authorship, and professional judgment."
  },
  {
    id: "framework-tertiary",
    type: "framework",
    title: "Tertiary algorithmicity gives the study a theoretical contribution.",
    defense: "The dissertation is not only an AI adoption study. It studies how generative systems alter the conditions under which students and educators encounter language, authorship, and cognition.",
    evidence: "The qualifying paper is treated as the theoretical spine, with Ong, McLuhan, Postman, Stiegler, algorithm studies, and learning science carrying the external literature base.",
    challenge: "Will the committee see this as too theoretical for an Ed.D. proposal?",
    answer: "The defense should present theory as the reason the practical problem matters, then immediately show how it maps to instruments, coding, and policy implications."
  },
  {
    id: "method-fit",
    type: "method",
    title: "The methods design fits because the problem is interpretive and institutional.",
    defense: "The proposal uses a convergent mixed methods design embedded within a constructivist educational case study. Stake supplies the initial collective instrumental logic; Merriam supplies the stronger methodological center for interpretive educational meaning-making.",
    evidence: "The Stake-to-Merriam transition clarifies that the study seeks a particularistic, descriptive, and heuristic understanding of a bounded educational phenomenon, while joint displays and meta-inferences integrate bounded quantitative context.",
    challenge: "Why move from Stake to Merriam?",
    answer: "Stake helps explain why multiple participant groups illuminate a shared issue. Merriam more directly aligns the study with interpretive educational research, bounded-case definition, thick description, and participants' constructed meanings."
  },
  {
    id: "ethics-public-private",
    type: "ethics",
    title: "GitHub Pages is for explanation and rehearsal, not participant data.",
    defense: "The public site can support defense preparation, source mapping, and study explanation, but approved secure systems must handle consent, survey data, transcripts, and identifiable notes.",
    evidence: "Repository review guardrails and Phase 2 planning both warn against storing human-subjects data in public GitHub infrastructure.",
    challenge: "Can public research infrastructure bias participants?",
    answer: "Participant-facing materials should be reviewed separately, use neutral language, and avoid leading claims. This defense studio is primarily researcher-facing unless later adapted after IRB review."
  }
];

const methodRows = [
  {
    rq: "RQ1: How do K-12 classroom-facing educators understand and navigate the friction-reducing affordances of generative AI in academic work, particularly in relation to productive and exclusionary friction?",
    participants: "Primary: classroom-facing educators. Supporting: adult university-student retrospective accounts and educator survey respondents.",
    instruments: "Educator interview and card sort; student retrospective interview and card sort; dimension-organized educator survey.",
    analysis: "Theoretical thematic analysis, card-sort reasoning, student temporal coding, descriptive/exploratory survey analysis, and negative-case analysis.",
    dimensions: "Noetic, rhetorical, and existential; infrastructural as conditioning layer; productive/exclusionary friction and the threats of tertiary algorithmicity.",
    integration: "RQ1 joint display compares classroom accounts, learner retrospectives, card-sort reasoning, and survey patterns."
  },
  {
    rq: "RQ2: What institutional conditions, including policy, assessment design, professional development, leadership disposition, and governance structures, enable or constrain friction-preserving pedagogy across classroom, building, and system levels?",
    participants: "Primary: educators, building administrators, district/system leaders, and institutional documents. Contextual: educator survey, NCES, and RAND.",
    instruments: "Role-specific interviews and card sorts; document analysis protocol; educator survey; secondary-data extraction and framework mapping.",
    analysis: "Cross-role thematic comparison, document analysis, exploratory role comparisons, secondary-data trend/disaggregation analysis, and negative-case analysis.",
    dimensions: "Infrastructural as primary; noetic, rhetorical, and existential as conditioned domains; policy, leadership, professional development, assessment, governance, and access.",
    integration: "RQ2 joint display identifies enabling conditions, constraints, gaps, and equity patterns across sources."
  },
  {
    rq: "RQ3: What framework-aligned policy language, assessment expectations, and instructional-design supports do K-12 educators and school-system leaders describe as necessary to preserve productive friction while reducing exclusionary friction under conditions of generative AI?",
    participants: "Integrated findings and disconfirming evidence from all approved RQ1 and RQ2 sources; no additional participant group.",
    instruments: "No new instrument. Uses the completed RQ1 and RQ2 protocols.",
    analysis: "Cross-question synthesis, joint-display comparison, narrative weaving, framework application, meta-inference development, and review of divergence.",
    dimensions: "All four friction dimensions, productive/exclusionary friction, threats of tertiary algorithmicity, and governance-assessment-instruction alignment.",
    integration: "Cross-question meta-inference translates RQ1 experience and RQ2 institutional conditions into bounded implications."
  }
];

const sampleChecks = [
  "Set one target survey range and remove conflicting N values.",
  "Define minimum useful N, target N, and stretch N.",
  "Make exploratory factor analysis conditional rather than promised.",
  "Clarify whether university student retrospectives are main, supporting, or future-study material.",
  "List inclusion criteria and recruitment channels by participant group.",
  "Move all instruments into appendices or separate IRB attachments once chair preference is known."
];

const boundaries = [
  ["Public GitHub Pages", "Defense rehearsal, concept map, source atlas, non-participant study explanation, presentation support."],
  ["Private Research Storage", "Consent records, identifiable interviews, transcripts, raw survey data, recruitment logs, analytic memos with identities."],
  ["Participant-Facing Materials", "Neutral recruitment language, approved consent text, approved protocols, links only to IRB-approved tools."],
  ["AI-Use Record", "Drafting support, search organization, coding assistance boundaries, human verification, final authorship responsibility."]
];

const sources = window.intellectualHistorySources;

const questions = [
  ["Why this study now?", "Because GenAI changes not only what students can produce, but how schools infer learning, authorship, judgment, and effort from educational artifacts."],
  ["What is the unit of analysis?", "The study should name the bounded K-12 case logic clearly: educator reasoning, institutional conditions, and friction-preserving practice within selected K-12 contexts."],
  ["What makes this mixed methods?", "The qualitative strand is primary, while survey, secondary data, document analysis, and artifact comparisons contextualize, challenge, or extend the qualitative interpretations."],
  ["How will you avoid overclaiming?", "By making supporting strands bounded, treating AI artifacts as illustrative discourse artifacts, and avoiding claims about findings before data collection."],
  ["What needs chair guidance?", "Question hierarchy, participant groups, sample targets, student strand status, AI comparison placement, instrument appendices, and proposal hearing expectations."]
];

const challengeCategories = [
  {
    title: "Theory and Media Ecology",
    challenges: [
      {
        title: "Default is not destiny",
        question: "If tertiary algorithmicity describes an environment that defaults toward removing cognitive resistance, how does the study avoid technological determinism and preserve educator and learner agency?",
        rationale: "Media ecology arguments can sound deterministic unless the defense clearly distinguishes environmental pressures from inevitable outcomes.",
        points: [
          "<strong>Distinguish default from destiny.</strong> Generative AI can make frictionless output the path of least resistance without making it the only possible path.",
          "<strong>Use pedagogical friction as evidence of agency.</strong> Educators, learners, designers, and policymakers can intentionally preserve or restore interpretive labor.",
          "<strong>Keep the empirical claim bounded.</strong> The study examines how educators and institutions make sense of these conditions; it does not claim that technology produces one universal effect."
        ]
      },
      {
        title: "Why extend Ong now?",
        question: "Why use Ong's media ecology to explain generative AI, and how do you avoid stretching a framework developed before contemporary algorithmic systems beyond its useful limits?",
        rationale: "The defense must show that Ong is an intentional theoretical choice, while also demonstrating where his framework requires extension.",
        points: [
          "<strong>Lead with fit.</strong> Ong is useful because the dissertation asks how communication technologies reorganize consciousness, authorship, interpretation, and learning.",
          "<strong>Name the rupture.</strong> The qualifying paper identifies assumptions that no longer hold when algorithmic systems curate and generate symbolic content.",
          "<strong>Present an extension, not a transplant.</strong> Algorithmic secondary orality and tertiary algorithmicity preserve Ong's media-ecological question while revising its account of authorship and circulation."
        ]
      }
    ]
  },
  {
    title: "Methodology and Design",
    challenges: [
      {
        title: "Bound the case",
        question: "With several role groups and supporting evidence strands, what is inside the bounded case, and what remains contextual or supplemental?",
        rationale: "A case study needs a clear boundary, especially when a qualitative-dominant mixed methods design includes multiple forms of evidence.",
        points: [
          "<strong>Name the case positively.</strong> The case is educator and institutional sensemaking about pedagogical friction under conditions of generative AI within the approved K-12 study boundary.",
          "<strong>Treat role groups as vantage points.</strong> Classroom, building, and system-level perspectives illuminate the same bounded phenomenon while remaining available for careful within-case comparison.",
          "<strong>Bound supporting strands.</strong> Survey, secondary, learner-retrospective, document, and artifact evidence should contextualize, challenge, or extend the core qualitative interpretation rather than become separate studies."
        ]
      },
      {
        title: "Reconcile pragmatism and constructivism",
        question: "How does a pragmatist mixed methods rationale operate within a Merriam-aligned constructivist case study, and where does integration actually occur?",
        rationale: "The committee may ask whether the philosophical and methodological layers reinforce one another or create an unresolved epistemological clash.",
        points: [
          "<strong>Separate the jobs.</strong> Pragmatism explains why multiple forms of evidence are useful for the research questions; constructivism guides how the bounded case and participant meaning-making are interpreted.",
          "<strong>Keep QUAL primary.</strong> The qualitative case logic governs the study, while quantitative and supporting strands supply bounded context.",
          "<strong>Name integration procedures.</strong> Joint displays, narrative weaving, divergence review, and cross-question meta-inferences connect the strands."
        ]
      }
    ]
  },
  {
    title: "Pedagogical Friction",
    challenges: [
      {
        title: "Make the dimensions observable",
        question: "How will the study distinguish noetic, rhetorical, existential, and infrastructural friction in actual data rather than treating them as elegant but overlapping concepts?",
        rationale: "A conceptual framework becomes empirically useful only when the proposal explains what counts as evidence and how ambiguity will be handled.",
        points: [
          "<strong>Noetic friction</strong> concerns the cognitive and interpretive work a task requires.",
          "<strong>Rhetorical friction</strong> concerns dialogue, audience, explanation, and the testing of claims.",
          "<strong>Existential friction</strong> concerns authorship, ownership, accountability, and whether a learner stands behind the work.",
          "<strong>Infrastructural friction</strong> concerns the institutional conditions that enable or constrain classroom-level practice.",
          "<strong>Allow overlap.</strong> Coding and memoing should document when an episode reasonably expresses more than one dimension."
        ]
      },
      {
        title: "Protect the equity distinction",
        question: "How will the study keep productive friction from becoming a justification for barriers that are exclusionary for learners who need access, accommodation, or support?",
        rationale: "The productive-versus-exclusionary distinction is central to the framework's ethical and practical credibility.",
        points: [
          "<strong>Do not presume difficulty is beneficial.</strong> The framework asks what work supports learning and what barriers merely block participation.",
          "<strong>Study sensemaking and conditions.</strong> The research examines how educators distinguish these forms of friction and what institutional supports shape those judgments.",
          "<strong>Treat misclassification as a finding.</strong> Tensions, disagreement, and disconfirming evidence are analytically important rather than problems to hide."
        ]
      }
    ]
  },
  {
    title: "Positionality and Practice",
    challenges: [
      {
        title: "Manage technoskeptical positionality",
        question: "How will you prevent a technoskeptical practitioner stance from turning the analysis into confirmation of the cognitive costs you already expect to find?",
        rationale: "A strong positionality defense names both the interpretive value of the researcher's experience and concrete safeguards against confirmation bias.",
        points: [
          "<strong>Define the stance carefully.</strong> Technoskepticism asks what is lost alongside what is gained; it is not an anti-technology conclusion.",
          "<strong>Use visible safeguards.</strong> Reflexive memoing, transparent coding decisions, disconfirming-case analysis, and review of divergent evidence make the stance examinable.",
          "<strong>Protect the recruitment boundary.</strong> Recruiting outside the researcher's supervisory context reduces authority and role-conflict risks."
        ]
      },
      {
        title: "Translate theory to governance",
        question: "What would a friction-centered approach change in district AI governance, assessment, or instructional design without claiming findings before the study is complete?",
        rationale: "An Ed.D. defense needs a credible route from theory and inquiry to practice while keeping implications proportionate to the eventual evidence.",
        points: [
          "<strong>Shift the governance question.</strong> Move beyond only asking whether use is allowed or compliant to asking what human learning work an activity should preserve.",
          "<strong>Connect policy and assessment.</strong> Institutions may need to support process evidence, oral explanation, iterative drafts, and other demonstrations of reasoning.",
          "<strong>Keep implications conditional.</strong> The dissertation can offer evidence-supported principles and bounded recommendations after analysis, not universal prescriptions in advance."
        ]
      }
    ]
  }
];

let currentChallengeCategory = 0;
let currentChallenge = 0;

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function showView(viewName) {
  qsa(".view").forEach(view => view.classList.toggle("active", view.id === `view-${viewName}`));
  qsa(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === viewName));
  window.location.hash = viewName;
}

function renderDefense() {
  qs("#defenseSequence").innerHTML = defenseSequence.map(([title, text], index) => `
    <article class="sequence-step">
      <strong>${index + 1}. ${title}</strong>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderClaims() {
  const filter = qs("#claimFilter").value;
  const selected = qs(".claim-button.active")?.dataset.claim || claims[0].id;
  const filtered = claims.filter(claim => filter === "all" || claim.type === filter);
  qs("#claimList").innerHTML = filtered.map(claim => `
    <button class="claim-button ${claim.id === selected ? "active" : ""}" type="button" data-claim="${claim.id}">
      <strong>${claim.title}</strong>
      <span>${claim.type}</span>
    </button>
  `).join("");
  renderClaimDetail(filtered.find(claim => claim.id === selected) || filtered[0] || claims[0]);
}

function renderClaimDetail(claim) {
  qs("#claimDetail").innerHTML = `
    <p class="section-label">${claim.type} claim</p>
    <h3>${claim.title}</h3>
    <p>${claim.defense}</p>
    <div class="detail-grid">
      <div class="detail-box"><strong>Evidence anchor</strong><p>${claim.evidence}</p></div>
      <div class="detail-box"><strong>Likely challenge</strong><p>${claim.challenge}</p></div>
      <div class="detail-box"><strong>Rehearsed answer</strong><p>${claim.answer}</p></div>
      <div class="detail-box"><strong>Proposal move</strong><p>Show where this claim appears in Chapters 1-3 and how it maps to the methods matrix.</p></div>
    </div>
  `;
}

function renderMethods() {
  qs("#methodRows").innerHTML = methodRows.map(row => `
    <tr>
      <td data-label="Research question">${row.rq}</td>
      <td data-label="Participants / evidence">${row.participants}</td>
      <td data-label="Instruments">${row.instruments}</td>
      <td data-label="Analysis">${row.analysis}</td>
      <td data-label="Framework dimensions">${row.dimensions}</td>
      <td data-label="Integration point">${row.integration}</td>
    </tr>
  `).join("");

  const savedChecks = JSON.parse(localStorage.getItem(storage.checks) || "{}");
  qs("#sampleChecks").innerHTML = sampleChecks.map((item, index) => `
    <li>
      <input type="checkbox" id="check-${index}" data-check="${index}" ${savedChecks[index] ? "checked" : ""}>
      <label for="check-${index}">${item}</label>
    </li>
  `).join("");

  qs("#boundaryGrid").innerHTML = boundaries.map(([title, text]) => `
    <article class="boundary-item">
      <strong>${title}</strong>
      <p>${text}</p>
    </article>
  `).join("");
  updateReadiness();
}

function renderHistory() {
  const search = qs("#historySearch").value.trim().toLowerCase();
  const filter = qs("#historyFilter").value;
  const selected = qs(".source-button.active")?.dataset.source || `${sources[0].author}-${sources[0].year}`;
  const filtered = sources.filter(source => {
    const haystack = `${source.cluster} ${source.year} ${source.title} ${source.author} ${source.role} ${source.bridge}`.toLowerCase();
    return (filter === "all" || source.cluster === filter) && (!search || haystack.includes(search));
  });
  qs("#historyTimeline").innerHTML = filtered.map(source => {
    const key = `${source.author}-${source.year}`;
    return `
      <button class="source-button ${key === selected ? "active" : ""}" type="button" data-source="${key}">
        <strong>${source.year} · ${source.author}</strong>
        <span>${source.title} · ${source.cluster}</span>
      </button>
    `;
  }).join("") || `<div class="detail-box"><strong>No sources match.</strong><p>Try a broader search or cluster filter.</p></div>`;
  renderSourceDetail(filtered.find(source => `${source.author}-${source.year}` === selected) || filtered[0] || sources[0]);
}

function renderSourceDetail(source) {
  qs("#sourceDetail").innerHTML = `
    <p class="section-label">${source.cluster}</p>
    <h3>${source.author}</h3>
    <p><strong>${source.year}. ${source.title}.</strong></p>
    <div class="detail-grid">
      <div class="detail-box"><strong>Role in intellectual history</strong><p>${source.role}</p></div>
      <div class="detail-box"><strong>Bridge to the proposal</strong><p>${source.bridge}</p></div>
      <div class="detail-box"><strong>Verification status</strong><p>${source.status}. Check final APA 7 details against the proposal bibliography before publication as a reference list.</p></div>
      <div class="detail-box"><strong>Defense use</strong><p>Use this source to explain how the dissertation connects theory, learning, governance, and empirical design.</p></div>
    </div>
  `;
}

function renderQuestions() {
  qs("#questionList").innerHTML = questions.map(([question, answer], index) => `
    <button class="question-button" type="button" data-question="${index}">
      <strong>${question}</strong>
      <span>${answer}</span>
    </button>
  `).join("");
}

function renderChallengeDeck() {
  const category = challengeCategories[currentChallengeCategory];
  const challenge = category.challenges[currentChallenge];

  qs("#challengeCategories").innerHTML = challengeCategories.map((item, index) => `
    <button class="challenge-category ${index === currentChallengeCategory ? "active" : ""}" type="button" data-challenge-category="${index}">
      <strong>${item.title}</strong>
      <span>${item.challenges.length} challenges</span>
    </button>
  `).join("");

  qs("#challengeProgress").textContent = `${category.title} | ${currentChallenge + 1} of ${category.challenges.length}`;
  qs("#challengeHeading").textContent = challenge.title;
  qs("#challengeQuestion").textContent = challenge.question;
  qs("#challengeRationale").textContent = challenge.rationale;
  qs("#challengePoints").innerHTML = challenge.points.map(point => `<li>${point}</li>`).join("");
  qs("#challengeAnswer").hidden = true;
  qs("#revealChallenge").textContent = "Reveal rationale and response scaffold";
  qs("#previousChallenge").disabled = currentChallenge === 0;
  qs("#nextChallenge").disabled = currentChallenge === category.challenges.length - 1;
}

function updateReadiness() {
  const savedChecks = JSON.parse(localStorage.getItem(storage.checks) || "{}");
  const completedChecks = Object.values(savedChecks).filter(Boolean).length;
  const base = 52;
  const score = Math.min(100, base + Math.round((completedChecks / sampleChecks.length) * 28));
  qs("#readinessBar").style.width = `${score}%`;
  qs("#readinessText").textContent = `${score}% ready: strongest next work is scope, sample size, instruments, and IRB language.`;
}

function bindEvents() {
  qsa(".nav-item[data-view]").forEach(button => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  qsa("[data-view-link]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showView(link.dataset.viewLink);
    });
  });

  qsa(".node").forEach(button => {
    button.addEventListener("click", () => {
      qsa(".node").forEach(node => node.classList.remove("active"));
      button.classList.add("active");
      const node = nodes[button.dataset.node];
      qs("#nodeDetail").innerHTML = `<strong>${button.dataset.node}:</strong> ${node.claim}<br><br><strong>Evidence:</strong> ${node.evidence}<br><br><strong>Defense risk:</strong> ${node.risk}`;
    });
  });

  qs("#claimFilter").addEventListener("change", renderClaims);
  qs("#claimList").addEventListener("click", event => {
    const button = event.target.closest(".claim-button");
    if (!button) return;
    qsa(".claim-button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderClaimDetail(claims.find(claim => claim.id === button.dataset.claim));
  });

  qs("#historySearch").addEventListener("input", renderHistory);
  qs("#historyFilter").addEventListener("change", renderHistory);
  qs("#historyTimeline").addEventListener("click", event => {
    const button = event.target.closest(".source-button");
    if (!button) return;
    qsa(".source-button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderSourceDetail(sources.find(source => `${source.author}-${source.year}` === button.dataset.source));
  });

  qs("#challengeCategories").addEventListener("click", event => {
    const button = event.target.closest("[data-challenge-category]");
    if (!button) return;
    currentChallengeCategory = Number(button.dataset.challengeCategory);
    currentChallenge = 0;
    renderChallengeDeck();
  });

  qs("#revealChallenge").addEventListener("click", () => {
    const answer = qs("#challengeAnswer");
    answer.hidden = !answer.hidden;
    qs("#revealChallenge").textContent = answer.hidden ? "Reveal rationale and response scaffold" : "Hide response scaffold";
  });

  qs("#previousChallenge").addEventListener("click", () => {
    if (currentChallenge === 0) return;
    currentChallenge -= 1;
    renderChallengeDeck();
  });

  qs("#nextChallenge").addEventListener("click", () => {
    const finalIndex = challengeCategories[currentChallengeCategory].challenges.length - 1;
    if (currentChallenge === finalIndex) return;
    currentChallenge += 1;
    renderChallengeDeck();
  });

  qs("#sampleChecks").addEventListener("change", event => {
    const checkbox = event.target.closest("[data-check]");
    if (!checkbox) return;
    const savedChecks = JSON.parse(localStorage.getItem(storage.checks) || "{}");
    savedChecks[checkbox.dataset.check] = checkbox.checked;
    localStorage.setItem(storage.checks, JSON.stringify(savedChecks));
    updateReadiness();
  });

  qs("#openingAnswer").value = localStorage.getItem(storage.opening) || "This dissertation asks how K-12 educators can preserve the forms of interpretive labor that still matter for learning when generative AI can produce polished academic artifacts quickly. The study is necessary because schools need more than acceptable-use rules; they need a way to distinguish productive friction from barriers that should be removed. A convergent mixed methods design embedded in a Merriam-aligned constructivist case study fits because the problem is interpretive, institutional, educational, and policy-facing.";
  qs("#openingAnswer").addEventListener("input", event => localStorage.setItem(storage.opening, event.target.value));

  qs("#committeeNotes").value = localStorage.getItem(storage.committee) || [
    "Chair-facing questions:",
    "- Should RQ1-RQ3 be the only core question set?",
    "- Should the student retrospective strand remain in the proposal?",
    "- What target survey N is acceptable?",
    "- Where should the AI artifact comparison live?",
    "- Which appendices or IRB attachments should hold instruments?"
  ].join("\n");
  qs("#committeeNotes").addEventListener("input", event => localStorage.setItem(storage.committee, event.target.value));

  qs("#resetNotes").addEventListener("click", () => {
    localStorage.removeItem(storage.opening);
    localStorage.removeItem(storage.committee);
    localStorage.removeItem(storage.checks);
    window.location.reload();
  });

  qs("#printView").addEventListener("click", () => window.print());
  bindTimer();
}

let timerHandle = null;
let secondsLeft = 120;

function bindTimer() {
  qs("#startTimer").addEventListener("click", () => {
    if (timerHandle) {
      clearInterval(timerHandle);
      timerHandle = null;
      qs("#startTimer").textContent = "Start 2:00";
      return;
    }
    secondsLeft = 120;
    qs("#startTimer").textContent = "Pause";
    updateTimer();
    timerHandle = setInterval(() => {
      secondsLeft -= 1;
      updateTimer();
      if (secondsLeft <= 0) {
        clearInterval(timerHandle);
        timerHandle = null;
        qs("#startTimer").textContent = "Start 2:00";
      }
    }, 1000);
  });
}

function updateTimer() {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  qs("#timerOutput").textContent = `${minutes}:${seconds}`;
}

function init() {
  renderDefense();
  renderClaims();
  renderMethods();
  renderHistory();
  renderChallengeDeck();
  renderQuestions();
  bindEvents();
  updateReadiness();

  const hashView = window.location.hash.replace("#", "");
  if (hashView && qs(`#view-${hashView}`)) {
    showView(hashView);
  }
}

init();
