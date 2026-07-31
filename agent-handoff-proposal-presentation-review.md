# Agent Handoff: Dissertation Proposal Presentation Review

## Purpose

Conduct an independent, review-only audit of the HTML dissertation proposal presentation before it is committed or published through GitHub Pages.

The presentation should give the dissertation committee a clear, accurate, and defensible account of the proposed study. It should preserve the study's human-centered, qualitative-dominant core and avoid presenting proposal-stage concepts, contextual statistics, or AI-generated materials as participant findings.

## Repository

Repository: `diss-proposal-defense`

Branch at handoff: `main`

Remote: `minerclass/diss-proposal-defense`

The working tree contains uncommitted presentation changes. Do not commit, push, or modify files during this review.

## Files in Scope

- `presentation/index.html`
- `presentation/presentation.css`
- `presentation/presentation.js`
- `index.html`
- `README.md`

The controlling content source is the July 24, 2026 dissertation proposal working copy supplied for committee preparation on July 30, 2026. The source DOCX remains outside the public repository.

## Presentation Intent

Audience: dissertation chair and committee members.

Communication job: By the end, committee members should understand why pedagogical friction is a consequential K-12 problem under generative AI, how the proposed mixed methods design will investigate it, what evidence boundaries protect the study's claims, and what they are being asked to approve.

The current deck contains 16 slides:

1. Title
2. Opening tension
3. Adoption and policy context
4. Productive and exclusionary friction
5. Media-ecological progression
6. The Great Bypass
7. Pedagogical Friction Framework
8. Research questions
9. Qualitative-dominant convergent design
10. Participants and sampling
11. Evidence architecture
12. Analysis and integration
13. Rigor, power, and ethics
14. Agentic AI boundary
15. Contribution and falsifiability
16. Closing committee question

## Content Boundaries

- Generative AI remains the empirical focus.
- Human participant accounts remain the primary evidence.
- The design is qualitative-dominant convergent mixed methods, written as `QUAL + quan`.
- Noetic, rhetorical, and existential friction are learner-facing dimensions.
- Infrastructural friction is the institutional condition enabling or constraining the learner-facing dimensions.
- Productive friction must remain distinct from exclusionary friction.
- Framework concepts are sensitizing concepts, not mandatory codes or findings.
- Secondary datasets provide structural context. They do not directly measure pedagogical friction.
- AI-generated text and agentic artifacts are nonparticipant materials.
- A system response is not evidence of agentic execution.
- Any agentic claim requires a prespecified, bounded multistep task with captured planning, tool use, execution, and process traces.
- Agentic comparison materials cannot support claims about classroom deployment or agentic AI broadly.
- The framework must remain open to revision, qualification, or rejection by the evidence.

## Review Lenses

### 1. Proposal accuracy

- Check visible claims, participant counts, research questions, design notation, evidence sources, analysis, limitations, and agentic boundaries against the controlling proposal.
- Flag overclaiming, compression that changes meaning, or language that makes planned procedures sound completed.
- Check that descriptive national estimates remain clearly labeled as context rather than findings from the proposed participant study.

### 2. Methodological alignment

- Check alignment among research questions, constructivist epistemology, qualitative-dominant convergent design, purposeful sampling, instruments, analysis, and mixed methods integration.
- Confirm that qualitative interpretation leads and quantitative evidence remains supporting and exploratory.
- Confirm that the student retrospective component is represented as a distinct participant perspective rather than equated with professional role groups.

### 3. Committee-facing narrative

- Determine whether the sequence creates a cumulative defense argument rather than summarizing chapters.
- Check whether each slide has one clear narrative job and a defensible takeaway title.
- Identify missing committee concerns, abrupt transitions, repetition, or slides that require too much oral repair.
- Assess whether the closing slide makes the approval decision clear.

### 4. Theoretical precision

- Check the relationship among tertiary algorithmicity, the Great Bypass, unproductive success, and the Pedagogical Friction Framework.
- Preserve the distinction between established influences and the researcher's original concepts.
- Flag technological determinism, nostalgia, or claims that imply all AI use removes learning.
- Check that equity operates as a boundary condition rather than an afterthought.

### 5. Visual and interaction quality

- Inspect all slides at desktop and mobile breakpoints.
- Check clipping, overlap, hierarchy, density, contrast, and unexpected wrapping.
- Test previous and next controls, arrow keys, Home and End, overview mode, presenter notes, fullscreen, URL hashes, and print behavior.
- Check keyboard access, focus visibility, hidden-state behavior, accessible names, and reduced-motion support.

### 6. Privacy and GitHub Pages readiness

- Confirm that the public deck contains no participant data, private analytic material, credentials, tokens, or local source paths.
- Confirm that the source DOCX is not copied into the repository.
- Check local asset paths and links for static GitHub Pages compatibility.
- Identify any content that should remain professional or private rather than public.

## Known Validation Before Review

- JavaScript syntax check passed.
- HTML structure audit found 16 slides, 16 presenter-note source blocks, and no duplicate IDs.
- Local link audit passed.
- Browser console showed no warnings or errors.
- Desktop and mobile overflow checks found no content outside slide boundaries.
- Keyboard Home and End navigation passed.
- Keyboard selection from overview mode passed.
- Presenter notes correctly toggle `aria-hidden` and `inert`.
- Tested foreground and background color pairs meet WCAG AA contrast for normal text.
- Repository terminology scan and `git diff --check` passed.

Treat these as prior checks to verify selectively, not as conclusions the review must accept.

## Reviewer Instructions

- Review only. Do not edit, commit, push, or publish.
- Prioritize substantive issues over personal style preferences.
- Cite the relevant slide number and file location for each finding.
- Rank findings using:
  - `P0`: blocks use or creates serious privacy, ethical, or factual harm.
  - `P1`: materially threatens proposal accuracy or committee confidence.
  - `P2`: meaningful improvement to clarity, rigor, accessibility, or presentation flow.
  - `P3`: optional polish.
- Distinguish observed defects from questions that require the author's judgment.
- If no actionable issues are found in a review lens, say so explicitly.

## Requested Review Output

Provide:

1. A short overall assessment.
2. Ranked actionable findings with slide and file references.
3. Questions requiring Micah's judgment.
4. Strengths worth preserving.
5. A publication recommendation: ready, ready after minor changes, or not ready.

## Independent Review Findings

Review date: July 30, 2026

Review status: Complete

Publication recommendation: **Ready after minor changes**

### Overall Assessment

The presentation is substantively strong and methodologically faithful. All 16 slides and presenter notes preserve the proposal's human-centered, qualitative-dominant design. Participant counts, research questions, `QUAL + quan` notation, evidence roles, analysis, limitations, and agentic boundaries match the controlling proposal.

The independent reviewer found no `P0` issue and no need to redesign the argument or study.

### Ranked Findings

#### P1: Conflicting authoritative proposal links

- `README.md` and the repository `index.html` link to different Chapters 1-3 Google Docs.
- Publishing both links risks sending committee members to a stale or incorrect draft.
- Confirm one authoritative URL and apply it consistently before publication.

#### P2: Mobile slide text is too small for comfortable reading

- The mobile rules in `presentation/presentation.css` replace desktop clamps with container-width units.
- At a roughly 390-pixel viewport, ordinary text at `1.35cqw` is approximately 5 pixels and headings at `4cqw` are approximately 15 pixels.
- The current design avoids overflow by shrinking the full 16:9 slide, but the result is not a genuinely readable mobile experience.
- Consider a mobile reading layout, a landscape-orientation prompt, a zoomable slide surface, or minimum readable type sizes.

#### P2: Spacebar selection from overview can advance one slide too far

- The slide-level Space handler selects a slide and closes overview mode in `presentation/presentation.js`.
- The event can then reach the document-level Space handler, which sees overview mode as closed and calls `nextSlide()`.
- Stop propagation after keyboard selection or otherwise prevent the document handler from processing the same event.

#### P2: Presenter notes suppress normal keyboard slide navigation

- Opening notes moves focus to the close button.
- The global keyboard handler ignores navigation keys when focus is on an interactive element.
- A presenter cannot keep notes open and advance with Arrow, Page, Space, Home, or End until focus is moved elsewhere.
- Permit presentation navigation while the notes drawer is open, except when the focused control requires the keystroke.

#### P2: Shortcut dialog declares modal behavior without isolating focus

- The keyboard-shortcut overlay uses `aria-modal="true"`.
- Its open and close logic does not trap focus or make the underlying presentation inert.
- Keyboard users can Tab from the modal into background controls.
- Either implement modal focus management or remove the modal claim and treat the overlay as a nonmodal help panel.

#### P2: Public README exposes a local workstation path

- `README.md` includes a full `C:\Users\...` Research workspace path.
- This is not participant data, but it unnecessarily exposes a username and organizational directory structure.
- Replace it with a repository-neutral description before publication.

#### P2: Make possible rejection of the framework explicit

- Slide 15 says conflicting evidence will "revise, qualify, or extend" the framework.
- Presenter notes discuss evidence showing where the framework fails, but visible copy does not state that evidence may warrant rejecting the framework.
- Consider "revise, qualify, or reject" if that wording matches the researcher's intended falsifiability boundary.
- This is a precision improvement, not evidence that the current deck treats the framework as a finding.

#### P2: Identify IRB approval as pending

- Slide 13 lists "IRB approval, consent, de-identification, and secure storage" without saying that approval must precede data collection.
- Use "IRB approval before data collection" or another status-accurate phrase to avoid implying that approval has already been obtained.

#### P3: Prepare feasibility and timeline backup material

- The main argument works without an additional slide.
- The deck does not visibly cover instrument review, recruitment feasibility, or the five-stage timeline.
- Prepare a backup slide or rehearsed response for likely committee questions rather than increasing the density of the main sequence.

### Questions Requiring Micah's Judgment

1. Which Chapters 1-3 Google Doc is authoritative, and should a live working draft be linked from a public repository?
2. Does "qualitative themes are developed first" on slide 12 mean interpretive priority or actual temporal sequencing? Interpretive priority fits `QUAL + quan`; temporal sequencing may sound like a sequential design.
3. What are the current CITI and IRB statuses, and should slide 13 state them?
4. Should feasibility and timeline remain oral or backup material, or enter the main 16-slide sequence?
5. Should the visible framework language say that evidence may require rejection, or is revision and qualification the intended boundary?

### Strengths to Preserve

- Human participant accounts remain the primary evidence.
- Adult university students remain a distinct retrospective learner perspective rather than a fourth professional group.
- The 68.9% and 12.5% estimates remain clearly labeled as contextual descriptive estimates rather than proposed-study findings.
- Productive and exclusionary friction remain distinct, with equity functioning as a boundary condition.
- Tertiary algorithmicity and algorithmic secondary orality are identified as original extensions.
- Presenter notes guard against technological inevitability.
- Framework concepts remain sensitizing concepts rather than mandatory codes.
- Slide 14 accurately distinguishes an agentic-capable response from genuine agentic execution.
- The sequence builds a cumulative defense argument and closes with a clear committee-level approval question.
- No participant data, credentials, tokens, or source DOCX were found in the reviewed repository files.

### Review Limitation

The independent agent completed the full proposal comparison and static interaction and accessibility audit. It did not independently repeat the earlier live-browser replay. The earlier desktop, mobile-overflow, console, contrast, and browser interaction checks remain recorded under Known Validation.
