# Agent Log

Append-only record of automated and agent-assisted changes to this repository.

Purpose: this work happens from more than one machine, so local notes are not a
reliable history. Anything an agent should know about a past change belongs
here, in the repository, not in a local file.

## Conventions

- Newest entry first. Never rewrite or delete an existing entry; correct it with
  a new one that says what it supersedes.
- Record what was verified and how, not just what was edited. "Fixed" without a
  check is not a result.
- Record open items and known-failing things explicitly, so the next agent does
  not rediscover them or assume they are already handled.
- No participant data, transcripts, consent records, committee or faculty names,
  credentials, or tokens. See AGENTS.md where present.

---

## 2026-07-31 - Committee-facing presentation deck

Agent: Claude Code, working from the July 24 Chapters 1-3 proposal working copy
read through the Drive connector (doc ID `1hzdzhrs...`, not publicly fetchable;
`export?format=txt` returns 401). Several near-identical local `.docx` copies
exist under similar July 20/24 names, one labeled "Final Submission", so confirm
by doc ID rather than filename.

- Added `presentation/`, a 17-slide keyboard-navigable HTML deck with presenter
  notes, overview mode, and a landscape print stylesheet. This is new; the
  repository had no presentation surface.
- Audited the deck against the controlling proposal. Removed a named construct
  ("The Great Bypass") that does not appear anywhere in the proposal and would
  have sent the committee looking for it. Softened a headline that asserted
  learning loss where the proposal claims only evidentiary unreliability.
  Restored RQ1's non-causal wording and RQ3's purpose clause, which had been
  compressed away. Surfaced the three pressures (noetic displacement, rhetorical
  saturation, existential abstraction) that the framework slide referenced
  without ever introducing.
- Added the determinism guard and the tertiary-orality originality defense, the
  AI-comparison sequencing safeguard (comparison begins only after human themes
  are finalized), the sole-analyst design, the survey self-selection limit, the
  equity recruitment priority, a timeline slide, and an explicit approval ask.
  Moved the equity-boundary slide after the framework so it constrains rather
  than precedes it.
- Linked the deck to the Dissertation Overview front door, this studio, the
  research matrix, the committee brief, the `pedagogical-friction` companion,
  and the two published works the proposal cites (Zenodo DOI
  `10.5281/zenodo.21152544`; `i.e.: inquiry in education` 18(1) art. 4). All
  verified live before linking.
- Wired the deck into the studio sidebar and source links, and renumbered the
  nav entries that followed it.
- Fixed `SOURCES_AND_PRIVACY.md`, which still pointed at a superseded proposal
  doc ID after the 2026-07-30 pass corrected `README.md` and `index.html`.
- Replaced the root "Ecosystem Hub" relative link, which escaped the repository
  and would fail the offline link checker, with its verified absolute URL.
- Removed a local filesystem path from `README.md`, which contradicted the
  repository's own stated policy of excluding local file paths. It remains in
  git history.

Verified: HTML parses clean across edited pages; 17 slides with sequential IDs
and resolving `aria-labelledby`; no duplicate IDs; the slide reorder diffed
against a pre-move backup to confirm nothing was lost; UTF-8 intact after a
scripted rewrite; all relative links resolve; the terminology linter in `ci.yml`
run locally (passes, three non-blocking warnings); contrast computed for new
colour pairs.

Not verified: visual rendering. The available browser surface blocks localhost
and renders `file://` as non-introspectable snapshots, and there is no Node
runtime on this machine, so `axe-core` could not be run locally. Slides use
`overflow: hidden`, so overlong content clips silently. Slides 4, 6, 8, 14, and
16 are the densest and should be checked at projection ratio. The deck has never
been through the accessibility job before this commit; if `check-a11y` fails,
suspect `aria-hidden-focus` on the links inside inactive slides.

Note for the next agent: this work was begun from a local clone three commits
stale, so an earlier draft of it duplicated the 2026-07-30 case-study and doc-ID
corrections. Those duplicates were discarded rather than merged. Fetch before
starting.

## 2026-07-30 - Proposal-defense readiness and source alignment

Agent: OpenAI Codex, working from the July 24 Chapters 1-3 proposal working
copy and a live audit of the proposal-defense pages.

- Replaced older proposal links with the current July 24 working-copy link.
- Replaced the hard-coded readiness percentage with a user-confirmed defense
  preparation checklist that does not score scholarly readiness.
- Corrected participant and instrument mappings, interpretive codebook thematic
  analysis language, survey thresholds, mixed methods integration terms, and
  proposal-stage claims across the Studio, Explorer, and committee brief.
- Restored a current, printable research alignment matrix at `methods-matrix/`.
- Added a readable Explorer fallback when the external concept-map library is unavailable, preventing a blank panel and JavaScript exception.
- Added explicit CITI, IRB, data-security, public-site, and nonparticipant
  artifact boundaries without implying that approvals, recruitment, data
  collection, analysis, or findings are complete.

## 2026-07-24 - Agentic-artifact and framework alignment

Agent: OpenAI Codex, working from the revised Chapters 1-3 proposal and a
cross-site consistency review.

- Updated defense prompts and the explorer to retain at least one bounded,
  prespecified agentic-artifact task within the distinct nonparticipant
  comparison.
- Made the comparison explicitly open to counterexamples and qualities that may
  challenge the framework.
- Clarified infrastructural friction as an active system-level source of
  constraint and enablement rather than a neutral backdrop.
- Kept adult university students identified as participants and preserved the
  proposal-stage boundary.
## 2026-07-22 - Weekly Pages review, accessibility and CI repair

Agent: Claude Opus 4.8 (Claude Code), working from a weekly review of the
`minerclass` GitHub Pages ecosystem against recent academic and professional
activity. Author present and approving changes.

### Ecosystem-wide finding: the accessibility gate was broken, not strict

The `Accessibility Checker` job in `.github/workflows/ci.yml` had been red since
2026-07-17 in every repository that runs it (`pedagogical-friction`,
`diss-proposal-defense`, `dissertationquestionsbeta`). The cause was not page
content. `@axe-core/cli` 4.12.1 bundles a ChromeDriver built for Chrome 151,
while the runner image had Chrome 150:

```
Error: session not created: This version of ChromeDriver only supports Chrome version 151
Current browser version is 150.0.7871.114
```

The browser session never started, so **no page was actually tested between
2026-07-17 and 2026-07-22**. The job reported failure for every file without
running a single check. Treat any result from that window as meaningless.

The workflow was repaired in all three repositories:

- ChromeDriver is now pinned at run time to the runner's installed Chrome major
  version, so image updates cannot silently break the job again.
- A tooling failure (no browser session) is now reported distinctly from a real
  accessibility violation, and fails with an explicit message. This is the
  specific confusion that hid the breakage for five days.
- The gate is scoped to `--tags wcag2a,wcag2aa,wcag21a,wcag21aa`. axe's advisory
  best-practice rules (`page-has-heading-one`, `landmark-one-main`, `region`,
  `landmark-complementary-is-top-level`) no longer block a push. They are still
  worth fixing; they are just not barriers.
- The job honours an optional `.a11yignore` file for generated bundles that
  cannot be corrected in-repo.

### Changes in this repository

- `explorer/index.html`: `#search-input` had only placeholder text, which does
  not provide an accessible name. Added `aria-label`.
- `explorer/index.html`: `.flashcard-back` is a scrollable region that could not
  be reached or scrolled by keyboard (`scrollable-region-focusable`). Added
  `tabindex="0"`, `role="group"`, and an accessible name.
- `index.html`: the rehearsal card was an `<aside>` nested inside `<main>`,
  which trips `landmark-complementary-is-top-level`. It is section-level content
  rather than page-level complementary content, so it is now a `<section>` and
  keeps its `aria-labelledby` name. Styling is class-based, so rendering is
  unchanged.

Post-change: all four pages report zero axe violations under the full default
rule set.

### Verification method

Because CI could not run axe, results were verified independently: axe-core
4.10.2 was loaded into each deployed page in a same-origin iframe and run
against the live document. After the changes below, 17 of 18 pages across
`pedagogical-friction`, `diss-proposal-defense`, and `dissertationquestionsbeta`
report zero violations under axe's full default rule set. The exception is
`dissertationquestionsbeta/dashboard.html`, recorded in that repository's log.

Two earlier claims made during this review were wrong and are corrected here so
they are not repeated:

- `interactive-resume-2026` was reported as missing the EDSAFE AI Vanguard
  Fellowship and all publications. It was not. The page renders its credentials
  and resources from `docs/app.js` at run time, and a fetch of the static HTML
  shell shows an almost empty page. **Check client-rendered pages in a browser,
  not by fetching HTML.** The same mistake produced a false "23 orphaned sites"
  reading of the root hub, whose project grid is also JS-rendered.
- The EdSurge article "How My School Used Common Sense and Collaboration to
  Confront AI" (2026-07-15) is by Pattie Morales and cites the author's term
  *unproductive success*. It is press coverage, not an authored publication, and
  must not be listed as one.

### Cross-repository context

This change set spans five repositories: `pedagogical-friction`,
`diss-proposal-defense`, `dissertationquestionsbeta`, `conference-presentations`,
and `interactive-resume-2026`. Each carries its own `AGENT_LOG.md` entry for the
same date. Check the siblings before assuming a change was isolated.
