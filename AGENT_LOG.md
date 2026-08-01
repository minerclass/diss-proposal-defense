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

## 2026-07-31 - Visual storytelling redesign, first section

Agent: Claude Code, working the art-direction redesign handoff. **Partial: the
design system and two of four flagged slides are done. Slides 2 and 13 are not.**

**Rendering is now solved for this machine.** There is no Node, playwright, or
selenium, and the in-app browser blocks localhost and cannot introspect
`file://`. But Chrome is installed at
`C:\Program Files\Google\Chrome\Application\chrome.exe` and headless mode works:
`--headless --disable-gpu --no-sandbox --virtual-time-budget=3000
--window-size=W,H --screenshot=out.png "file:///...#slide-N"`. The deck's JS
reads `location.hash`, so any slide can be targeted directly. `--dump-dom` with
an injected measurement script gives automated overflow checks. Previous entries
recording "cannot verify visually" are superseded.

- Captured and inspected all 17 baseline slides at 1920x1080 before editing.
  Confirmed the reported problems are real rather than inferred, and found the
  root typographic cause: the global `h1`/`h2` rule applied
  `letter-spacing: -.035em` and `line-height: .98` to every title regardless of
  length, so long titles bunched while short ones looked intentional.
- Added `presentation/STORYBOARD.md` recording the diagnosis, the design system,
  the six visual primitives, and per-slide targets. Written before CSS changes.
- Built a length-aware title system: default tracking relaxed to `-.022em` and
  leading to `1.04`, plus `data-title="short"` and `data-title="long"` scales,
  plus `.t-lead` / `.t-quiet` spans so a title can be a reading sequence rather
  than a uniform block. Tagged slides 15 and 17 as long.
- **Slide 1 re-conceived.** Title staged as "Pedagogical Friction" dominant over
  a quieter qualifier; added a concentric aperture so the right-hand negative
  space frames the composition instead of sitting inert.
- **Slide 6 re-conceived.** Replaced three mostly-empty cards plus a filled
  foundation bar with a constellation: head, room, and world arranged around a
  central learning event, all enclosed by a dashed infrastructural field. This
  was also a correctness fix, not only aesthetics: the old filled bar read as a
  fourth peer card, contradicting the framework's stated asymmetry.
- No visible wording was changed on any slide.

Verified: all 17 slides pass an automated out-of-bounds and scroll-overflow probe
at both 1920x1080 and 1280x720; slides 1 and 6 visually reviewed as rendered
images; 17 sections with sequential IDs intact; local terminology scan passes.

Caught and fixed during the work: the staged title initially collapsed its
`textContent`, so the control-dock caption read "Pedagogical Frictionin the
Age...". `presentation.js` builds that caption from `textContent`, so block-level
spans inside a heading need literal whitespace between them.

**Slides 2 and 13 completed in a follow-up pass**, so all four flagged slides are
now re-conceived:

- **Slide 2 — trace.** Replaced the floating equation with a vertical trace in
  the right column: "Polished product" as six solid, crisp bars above the hinge,
  "Durable learning" below as irregular marks fading stepwise to nothing. The
  slide now shows what disappears rather than only naming it. The three existing
  text strings and the `aria-label` are unchanged; the marks and bars are
  decorative and `aria-hidden`.
- **Slide 13 — audit spine.** The quote anchors mid-left against a gold rule
  while the six safeguards became numbered nodes on a full-height vertical spine,
  distributed with `justify-content: space-between`. This removed the dead middle
  band and makes the safeguards read as a traceable chain of challenge rather
  than a floating checklist.

Verified after this pass: 17/17 slides clear an automated out-of-bounds and
scroll-overflow probe at both 1920x1080 and 1280x720; slides 1, 2, 6, and 13
reviewed as rendered images; sequential IDs and `aria-labelledby` resolution
intact; terminology scan passes.

Caught during verification: the first attempt to re-probe silently ran against a
stale copy of the deck because the probe-rebuild step failed on a missing marker
and the failure did not stop the run. The rebuild now asserts that the source
contains the new markup before probing. Treat a probe result as meaningless
unless the probe file is known to have been rebuilt.

**Remaining slides completed in a third pass** as a consolidated CSS-only change
reusing existing class names, so no markup or wording changed:

- s3 widening clarity gap via a gradient wedge off the divider, with the second
  figure recoloured rust against the first in teal.
- s4 and s16 gained a hinge/gate rule on `.timeline-current`, marking the
  authorship rupture and the no-data-before-approval boundary.
- s7 boundary marker became a threshold with connectors above and below, and the
  two sides took teal/rust to separate preserve from remove.
- s8 questions gained connectors so the three read as a movement.
- s9 the quantitative side is now visibly subordinate in weight and type size
  rather than an equal card.
- s10 vantage points offset alternately, with the student group dashed and blue
  to mark it as a distinct perspective.
- s11 evidence bands took a weight order: solid teal primary, blue supporting,
  dashed rust nonparticipant comparison.
- s12 an overlap bracket above the join shows the strands meeting only at
  integration.
- s14 the rule became an entry condition with a gold rule and the sequencing
  safeguard highlighted.
- s15 middle contribution offset into a constellation; the falsifiability line
  now sits above a rule.
- s17 links demoted to a quiet utility layer so the decision dominates.

Verified: 17/17 clear the out-of-bounds and scroll probe at 1920x1080 and
1280x720, using a probe rebuilt from the current file with an assertion that the
new markup is present.

Honest limits on this third pass: only slide 3 was spot-checked as a rendered
image; the other twelve were verified for fit but not reviewed visually. The s3
wedge is subtle enough that the teal/rust colour contrast, not the shape, is
doing most of the work, and it may deserve a stronger treatment. These are
refinements to existing compositions rather than the ground-up re-conceptions
applied to slides 1, 2, 6, and 13, so the "no more than three adjacent slides
share a silhouette" criterion is improved but probably not fully met.

Still not done: no progressive reveals were added anywhere. Print output has not
been re-verified since the redesign began, and the print stylesheet has its own
`@page` geometry that these changes could disturb. Nothing was committed or
pushed, per the handoff.

## 2026-07-31 - Presentation visual and layout review

Agent: OpenAI Codex, completing the visual review handed off after the content
accuracy audit.

- Completed a slide-by-slide aesthetic and layout pass across all 17 slides
  without changing or removing visible wording.
- Re-composed slide 2 as an asymmetric statement-and-equation layout, giving
  the opening tension a clearer focal point and stronger visual balance.
- Reworked the five-stage timelines on slides 4 and 16 with prominent sequence
  numerals, lower-aligned descriptions, and a clearer final/current stage.
- Improved hierarchy elsewhere by widening the usable title measure, removing
  unnecessary inset space on the evidence slide, emphasizing the bypassed
  learner process, increasing the framework source-line contrast, and giving
  the agentic safeguards equal vertical weight.
- Kept the existing palette, typography, decorative arcs, and restrained
  academic tone. No new assets or dependencies were added.

Verified: fetched `origin/main` before editing and confirmed no divergence;
rendered every slide at 1920 x 1080 and 1280 x 720; ran 34 DOM fit checks with
no slide-field clipping, out-of-bounds descendants, or horizontal page
overflow; visually reviewed the full deck and both target sizes; tested Home,
End, and ArrowRight navigation plus overview, presenter notes, and fullscreen
fallback modes; browser console had no warnings or errors; print export produced
17 landscape 960 x 540 point pages and the rendered pages showed no clipping or
overlap. The local terminology scan found zero forbidden terms and three
pre-existing review warnings. The changed CSS produced no sensitive-pattern
hits, and `git diff --check` passed apart from the existing line-ending notice.

Not verified: GitHub Actions had not run at the time of local validation. Open
items: none in the visual review scope.

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
