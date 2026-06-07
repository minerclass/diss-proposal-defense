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
    evidence: "Merriam aligns the bounded study with applied educational inquiry through particularistic focus, thick description, and heuristic understanding, while QUAL + quan integration supplies complementary structural context.",
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
    defense: "The proposal uses a convergent mixed methods design embedded within a constructivist educational case study. Stake supplies the initial collective instrumental logic; Merriam supplies the stronger methodological center for applied educational meaning-making.",
    evidence: "The Stake-to-Merriam transition clarifies that the study seeks a particularistic, descriptive, and heuristic understanding of a bounded educational phenomenon, while joint displays and meta-inferences integrate bounded quantitative context.",
    challenge: "Why move from Stake to Merriam?",
    answer: "Stake helps explain why multiple participant groups illuminate a shared issue. Merriam more directly aligns the study with applied educational research, bounded-case definition, thick description, and participants' constructed meanings."
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
    rq: "RQ1: How do K-12 classroom-facing educators understand and navigate the friction-reducing affordances of generative AI in academic work?",
    data: "Classroom-facing educator interviews, card sort, and educator survey branch.",
    analysis: "Thematic coding aligned to noetic, rhetorical, existential, and infrastructural friction.",
    integration: "Primary qualitative findings anchor the joint displays and chapter narrative.",
    status: "Core"
  },
  {
    rq: "RQ2: What institutional conditions, including policy, assessment design, professional development, and leadership disposition, enable or constrain friction-preserving pedagogy?",
    data: "Administrator and leader interviews, institutional documents, leader survey branch, and secondary context such as NCES SPP.",
    analysis: "Case-oriented document analysis and cross-role thematic comparison.",
    integration: "Explains how teacher-level judgments meet district policy and governance conditions.",
    status: "Core"
  },
  {
    rq: "RQ3: How can the Pedagogical Friction Framework inform AI policy development in K-12 contexts?",
    data: "Synthesized findings across interviews, documents, and supporting quantitative evidence.",
    analysis: "Framework application, cross-case synthesis, and meta-inference development.",
    integration: "Produces the proposal's practitioner-scholar contribution.",
    status: "Core"
  },
  {
    rq: "SRQ: How do current university students who were in grades 10-12 when GenAI became publicly available describe changes in cognitive struggle, authorial ownership, and learning processes?",
    data: "Retrospective university student accounts, if retained in the approved design.",
    analysis: "Temporal qualitative analysis comparing pre-GenAI and post-GenAI schooling experiences.",
    integration: "Illuminates the learner side of the transition without displacing the K-12 educator core.",
    status: "Bound"
  },
  {
    rq: "QRQ1-QRQ3: How do role, context, policy presence, professional development access, institutional support, and role differences relate to educator perceptions and pedagogical-friction domains?",
    data: "Original K-12 educator survey.",
    analysis: "Descriptive patterns, reliability checks, cautious domain-level comparisons; factor analysis only if N and item structure justify it.",
    integration: "Contextualizes qualitative findings without overpowering the case study logic.",
    status: "Revise"
  },
  {
    rq: "QRQ4: At the national level, what is the magnitude of the gap between school neighborhood poverty categories in AI literacy instruction and written AI policy?",
    data: "Secondary datasets such as the NCES School Pulse Panel, and related public datasets if approved.",
    analysis: "Descriptive and disaggregated national context analysis.",
    integration: "Tests whether institutional readiness and AI literacy opportunities are patterned by school context.",
    status: "Revise"
  },
  {
    rq: "SAQ: When AI systems respond as educators to the same protocol and instrument, how do their outputs differ structurally from human practitioner responses?",
    data: "Bounded AI-generated responses to the same interview protocol and survey instrument.",
    analysis: "Rhetorical and discourse comparison as artifact analysis, not human-subjects evidence.",
    integration: "Illuminates rhetorical saturation, existential abstraction, and the limits of synthetic educator discourse.",
    status: "Bound"
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

const sources = [
  {
    cluster: "media ecology",
    year: "1938",
    title: "Experience and Education",
    author: "John Dewey",
    role: "Frames learning as experience, continuity, and educative difficulty.",
    bridge: "Supports the distinction between productive and unproductive educational difficulty.",
    status: "Verify bibliography"
  },
  {
    cluster: "media ecology",
    year: "1964",
    title: "Understanding Media",
    author: "Marshall McLuhan",
    role: "Provides the media-ecological claim that media reshape perception, scale, and social organization.",
    bridge: "Helps explain GenAI as a condition of schooling, not merely a tool inside schooling.",
    status: "Local source folder"
  },
  {
    cluster: "media ecology",
    year: "1982",
    title: "Orality and Literacy",
    author: "Walter J. Ong",
    role: "Supplies the oral/literate media ecology that the qualifying paper extends toward algorithmic secondary orality.",
    bridge: "A core theoretical ancestor for tertiary algorithmicity.",
    status: "Core source"
  },
  {
    cluster: "media ecology",
    year: "1992",
    title: "Technopoly",
    author: "Neil Postman",
    role: "Names how technological systems reorganize cultural judgment and institutional priorities.",
    bridge: "Supports the governance and school-policy dimension of the dissertation.",
    status: "Verify bibliography"
  },
  {
    cluster: "learning science",
    year: "1978",
    title: "Mind in Society",
    author: "Lev Vygotsky",
    role: "Anchors mediation, social learning, and the role of tools in cognition.",
    bridge: "Useful for explaining why AI-mediated language changes the learning situation.",
    status: "Verify bibliography"
  },
  {
    cluster: "learning science",
    year: "1980",
    title: "Mindstorms",
    author: "Seymour Papert",
    role: "Offers a constructionist account of computers, learning, and student authorship.",
    bridge: "Creates a contrast between learner construction and AI-assisted bypass.",
    status: "Local source folder"
  },
  {
    cluster: "learning science",
    year: "1988",
    title: "Cognitive load during problem solving",
    author: "John Sweller",
    role: "Clarifies why some difficulty aids learning and some overloads working memory.",
    bridge: "Helps discipline the productive/exclusionary friction distinction.",
    status: "Verify bibliography"
  },
  {
    cluster: "learning science",
    year: "1994",
    title: "Memory and metamemory considerations in the training of human beings",
    author: "Robert A. Bjork",
    role: "Introduces desirable difficulties as a learning-science anchor.",
    bridge: "Supports friction as a carefully designed condition rather than mere hardship.",
    status: "Verify bibliography"
  },
  {
    cluster: "learning science",
    year: "2008",
    title: "Productive Failure",
    author: "Manu Kapur",
    role: "Shows how structured struggle can prepare learners for deeper conceptual understanding.",
    bridge: "Provides a central empirical cousin to pedagogical friction.",
    status: "Verify bibliography"
  },
  {
    cluster: "algorithm studies",
    year: "2017",
    title: "Thinking critically about and researching algorithms",
    author: "Rob Kitchin",
    role: "Frames algorithms as social, technical, and epistemic arrangements that need critical study.",
    bridge: "Supports the move from tool use to algorithmic conditions.",
    status: "Local source folder"
  },
  {
    cluster: "algorithm studies",
    year: "2018",
    title: "If...Then: Algorithmic Power and Politics",
    author: "Taina Bucher",
    role: "Helps locate algorithmic systems within power, perception, and social life.",
    bridge: "Strengthens the institutional and governance strand.",
    status: "Local source folder"
  },
  {
    cluster: "media ecology",
    year: "2010",
    title: "Taking Care of Youth and the Generations",
    author: "Bernard Stiegler",
    role: "Connects technology, attention, formation, and generational responsibility.",
    bridge: "Supports the dissertation's concern with schooling, care, and attention under technical systems.",
    status: "Local source folder"
  },
  {
    cluster: "ai education",
    year: "2020",
    title: "GPT-3: Its Nature, Scope, Limits, and Consequences",
    author: "Luciano Floridi and Massimo Chiriatti",
    role: "Provides a philosophical and technical account of large language model limits.",
    bridge: "Useful for separating fluent production from understanding.",
    status: "Verify bibliography"
  },
  {
    cluster: "ai education",
    year: "2021",
    title: "On the Dangers of Stochastic Parrots",
    author: "Emily M. Bender, Timnit Gebru, Angelina McMillan-Major, and Shmargaret Shmitchell",
    role: "Names risks around language models, scale, harms, and meaning.",
    bridge: "Supports caution around rhetorical fluency and synthetic text.",
    status: "Verify bibliography"
  },
  {
    cluster: "methods",
    year: "2018",
    title: "Designing and Conducting Mixed Methods Research",
    author: "John W. Creswell and Vicki L. Plano Clark",
    role: "Methods anchor for convergent mixed methods, integration, and joint displays.",
    bridge: "Supports the QUAL + quan design and meta-inference language.",
    status: "Verify methods citation"
  },
  {
    cluster: "methods",
    year: "2009/2016",
    title: "Constructivist case study methodology for educational research",
    author: "Sharan B. Merriam",
    role: "Primary case study methodology anchor for constructivist educational inquiry.",
    bridge: "Centers the study as particularistic, descriptive, and heuristic while preserving a clearly bounded educational case.",
    status: "Primary methods anchor"
  }
];

const questions = [
  ["Why this study now?", "Because GenAI changes not only what students can produce, but how schools infer learning, authorship, judgment, and effort from educational artifacts."],
  ["What is the unit of analysis?", "The study should name the bounded K-12 case logic clearly: educator reasoning, institutional conditions, and friction-preserving practice within selected K-12 contexts."],
  ["What makes this mixed methods?", "The qualitative strand is primary, while survey, secondary data, document analysis, and artifact comparisons contextualize, challenge, or extend the qualitative interpretations."],
  ["How will you avoid overclaiming?", "By making supporting strands bounded, treating AI artifacts as illustrative discourse artifacts, and avoiding claims about findings before data collection."],
  ["What needs chair guidance?", "Question hierarchy, participant groups, sample targets, student strand status, AI comparison placement, instrument appendices, and proposal hearing expectations."]
];

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
      <td data-label="Question / strand">${row.rq}</td>
      <td data-label="Data source">${row.data}</td>
      <td data-label="Analysis">${row.analysis}</td>
      <td data-label="Integration point">${row.integration}</td>
      <td data-label="Status"><span class="status-chip ${row.status === "Core" ? "verified" : "caution"}">${row.status}</span></td>
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

function updateReadiness() {
  const savedChecks = JSON.parse(localStorage.getItem(storage.checks) || "{}");
  const completedChecks = Object.values(savedChecks).filter(Boolean).length;
  const base = 52;
  const score = Math.min(100, base + Math.round((completedChecks / sampleChecks.length) * 28));
  qs("#readinessBar").style.width = `${score}%`;
  qs("#readinessText").textContent = `${score}% ready: strongest next work is scope, sample size, instruments, and IRB language.`;
}

function bindEvents() {
  qsa(".nav-item").forEach(button => {
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
  renderQuestions();
  bindEvents();
  updateReadiness();

  const hashView = window.location.hash.replace("#", "");
  if (hashView && qs(`#view-${hashView}`)) {
    showView(hashView);
  }
}

init();
