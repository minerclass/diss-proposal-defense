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

## 2026-08-13 - Version the presentation stylesheet link

Agent: Claude Opus 5 (Claude Code), at the author's request. Supersedes the
"Not done" item in the entry below, which declined this.

`presentation/index.html` now loads `presentation.css?v=20260813a`, matching the
`?v=YYYYMMDD` + letter scheme already used for `styles.css` at the repo root.
Reason it changed: this deck gets presented live, and a ten-minute window where
a browser can pair new HTML with a stale stylesheet is worth more than the cost
of remembering to bump a string.

**This now has to be bumped on every `presentation.css` change.** A comment
above the link in the HTML says so. If a CSS edit ships and the visual does not
change for anyone holding a cached copy, this is why.

**Verified.** Fresh load resolves `presentation.css?v=20260813a`, stylesheet
parses with `.route-line` present, `.route-line` computes
`rgba(255,253,248,.82)`, both `.trace-doc` elements measure 152.73x52.39,
console clean.

**Not done.** `presentation.js` is still unversioned, as are the scripts on the
root page. Stale JS against new HTML would break slide navigation rather than
just styling, so it is the larger of the two risks and is still open.

## 2026-08-13 - Harden the slide 2 routes against a missing stylesheet

Agent: Claude Opus 5 (Claude Code), after the author saw the slide render with
black inkblots where the routes should be.

Cause was a cache split, not a bug: Pages serves `presentation.css` with
`Cache-Control: max-age=600`, so a browser holding the pre-deploy stylesheet
paired it with the new HTML for up to ten minutes. It self-heals.

What it exposed is worth keeping fixed. An SVG `<path>` with no CSS defaults to
`fill: black, stroke: none`, so any stylesheet failure turns the opening slide
of the defense into black blobs. The two route SVGs now carry `fill="none"`,
`stroke`, `stroke-width`, and the cap/join as presentation attributes, with
`fill="#f5d9a8"` on the start circles. CSS overrides presentation attributes, so
the styled render is unchanged; the no-CSS render degrades to cream strokes.

**Verified.** Reproduced the stale-stylesheet state locally (sheet loaded, 394
rules, no `.route-line`) and confirmed the fallback draws cream, not black. With
the fresh sheet, `.route-line` computes `rgba(255,253,248,.82)` over the
attribute and both `.trace-doc` elements still measure 152.73x52.39.

**Not done.** No cache-busting query was added to the stylesheet link. The
ten-minute window self-heals and a version param would need bumping on every CSS
change. A hard reload before presenting is the mitigation.

## 2026-08-12 - Slide 2 visual rebuilt as two routes to one artifact

Agent: Claude Opus 5 (Claude Code), at the author's report that the polished
product versus durable learning visual "does not seem to track."

**Diagnosis.** The old `.trace-field` drew six solid bars against ten fading
bars, joined by a `≠`. Two problems. It rendered as a paragraph of text beside a
faded paragraph of text, which reads as a loading skeleton rather than as
missing thinking. And the `≠` argued the weak form of the claim: "polished
product does not equal durable learning" has been true since the take-home
essay. The slide's own headline and coda argue the sharp form, that the artifact
carries no signal of which case it is, which is why the coda can call it an
evidence problem before a misconduct problem.

**Replacement.** Two artifacts drawn from identical markup sit above a dashed
horizon labelled "what an evaluator can see." Below it, two SVG routes to the
same endpoint: a switchback path (221 units, measured with `getTotalLength`)
labelled "drafted, reconsidered, revised" and a straight line (77 units)
labelled "produced in one pass." Same destination, 2.9x the distance, and the
distance is the part that does not survive into the product. This also puts the
friction argument itself in the opening visual instead of a generic inequality.

Two intermediate versions were rejected on screenshot: a wrapped field of small
marks (reverted to reading as a paragraph, the original failure) and a
rectilinear switchback (read as a circuit trace). The rounded serpentine holds.

- Removed: `.trace-side`, `.trace-label`, `.trace-artifact`, `.trace-formation`,
  `.trace-bars`, `.trace-marks`, `.trace-hinge`. Grepped the repo; no remaining
  references outside this log's older entries.
- `.slide-statement .slide-field` columns went from `1.16fr / minmax(18cqw,
  .84fr)` to `1fr / minmax(26cqw, .95fr)` to give the visual room.
- Both `.trace-doc` elements must stay byte-identical. Any per-column override
  inverts the point of the slide.

**Verified.** DOM contrast sweep over the new subtree against the actual
`--rust-dark` (#6f3324) background: 5 text nodes, 0 failures (caps and route
labels 5.77:1, horizon label 7.07:1). Non-text graphics: doc border 3.23:1, doc
bars 8.31:1, route stroke 6.97:1, all clearing 3:1. The doc border started at
`.45` alpha for this reason; `.3` measured 2.25:1. Rendering checked at desktop
and tablet widths and in overview mode; console clean.

**Not done.** axe was not run locally, and print/PDF output was not checked.
Speaker notes for the slide were left alone; the talk track still matches.

## 2026-08-11 - Route the full companion and direct RQ path

Agent: OpenAI Codex, implementing the author's follow-up after comparing the
two live sites.

- Changed the Defense Room's primary Pedagogical Friction route from `#study`
  to `#top` so it opens the companion's full narrative argument.
- Preserved `#study` as a separate direct route to the exact research
  questions, evidence and participant mappings, analysis, integration, and
  interpretive boundaries.
- Expanded the Companion Path from two cards to three: full current companion,
  RQs and study design, and comprehensive literature and methods.
- Preserved the separate codebases and proposal-stage research boundaries.

Local verification: all three cards rendered as native links with the intended
section anchors; the sidebar opens `#top`; desktop used three equal columns;
390 x 844 collapsed to one column with no horizontal overflow; no duplicate
IDs or browser warnings/errors were found. Live Pages verification remains
pending until this commit deploys.

## 2026-08-11 - Clarify the current and comprehensive companion sites

Agent: OpenAI Codex, implementing the author's request to connect the two
proposal companions from the Defense Room.

- Replaced two mislabeled links that called `dissertation-proposal-studio` the
  Pedagogical Friction Studio.
- Added the current `pedagogical-friction/#study` companion to the sidebar,
  source links, and a new two-card Companion Path in the Defense Room.
- Kept `dissertation-proposal-studio/#traditions` as the comprehensive
  literature-and-methods destination and described the two sites as a layered
  resource rather than combining their separate codebases.
- Preserved the proposal-stage and public/private research boundaries.

Local verification: both companion cards rendered as native links; their
destination anchors resolved on the two live companion sites; desktop and
390 x 844 checks found no horizontal overflow; the mobile cards collapsed to
one column; no duplicate IDs or browser warnings/errors were found. Live Pages
verification remains pending until this commit deploys.

## 2026-08-07 - Pages now publishes through actions/deploy-pages

Agent: Claude Opus 5 (Claude Code). Requested by the author after the legacy
build hung twice in one session.

**Why.** The legacy branch-based Pages build hung on both pushes today. The
signature was identical each time: the `build` job sat with `updated_at` never
advancing past `created_at`, `deploy` never started, and the Ecosystem Quality
Checks passed the whole time, so the commit looked green while the live site
served a stale dataset. The first hang lasted 87 minutes before it was
cancelled. Cancelling and then `POST /repos/:owner/:repo/pages/builds` cleared
it within a minute both times, which is worth remembering if this recurs
elsewhere in the ecosystem, since the sibling repos are still on legacy.

**What changed.** New `.github/workflows/pages.yml` checks out the repository
and publishes it as a Pages artifact. No build step; the tree served is the
same one the legacy build published, and `.nojekyll` still applies. The
repository's Pages `build_type` was switched from `legacy` to `workflow`
through the API, so pushes no longer trigger the dynamic build. That switch is
repository configuration, not a file, so it will not travel with a fork or a
restore from this repo alone.

Action versions were checked against their latest releases rather than written
from memory, which mattered: the current majors are `checkout@v7`,
`configure-pages@v6`, `upload-pages-artifact@v5`, and `deploy-pages@v5`, all
well ahead of the v4/v3 pairs that were current when most examples were
written.

`concurrency.cancel-in-progress` is deliberately **false**. Cancelling a
`deploy-pages` run mid-publish can leave the Pages environment half-updated,
which is the failure this change exists to avoid. `workflow_dispatch` is
enabled so a stuck deploy can be re-run without an empty commit.

**Verified.** First run deployed in 20 seconds against the legacy build's 87
minutes. `build_type` reads `workflow`, and `/`, `intellectual-history/`,
`explorer/`, `presentation/`, `methods-matrix/`, and `committee-brief.html` all
return 200 with the correct 155-source, 18-cluster dataset. Quality checks
still pass on the same push.

**Not done:** deployment stays independent of Ecosystem Quality Checks, matching
the previous behaviour, so a red quality check does not block publication.
Gating it is a one-line `needs:` change if that is wanted. `ci.yml` still pins
`actions/checkout@v4` and emits the Node 20 deprecation annotation; not touched
here.

## 2026-08-07 - Braun and Clarke moved to Constructivist Qualitative Inquiry

Agent: Claude Opus 5 (Claude Code). Researcher decision on the split the entry
below flagged as contestable.

Braun and Clarke (2006, 2021) move from Research Methods and Analysis to
Constructivist Qualitative Inquiry, on the reasoning that reflexive thematic
analysis treats the researcher as an instrument, which is an epistemological
commitment rather than a procedural step. Saldaña, Patton, and Malterud stay
with procedure. Cluster counts go from 6 and 16 to 8 and 14; the total stays
155 across 18 clusters.

Changed in the studio repo (`dissertation-proposal-studio@51fda76`) and
regenerated here. Two `tradition` fields, plus the derived thinkers lists,
contribution blurbs, and refs arrays.

Verified on a local server at the 127.0.0.1 origin: Constructivist Qualitative
Inquiry lists 8 works ending in the two Braun and Clarke entries, Research
Methods lists 14 with no Braun, and doubled punctuation stays at 0.

## 2026-08-07 - Proposal Bibliography bucket emptied; 18 clusters

Agent: Claude Opus 5 (Claude Code). Follow-on to the entry below, at the
author's instruction: map the 104 unmapped proposal references to traditions.

The mapping was written to the **studio** repo, not here.
`dissertation-proposal-studio/data/references.json` now assigns a `tradition` to
all 151 references, and `data/traditions.json` carries four new traditions.
`intellectual-history.js` was regenerated from it. The rationale, including the
one contestable split, is in that repo's `AI_AUDIT_TRAIL_TRADITION_MAPPING.md` —
read it there rather than duplicating it here.

Net effect on this repo: 15 clusters to 18, and the **Proposal Bibliography
cluster is now empty**, so it no longer appears in either filter. Every source
now shows a real tradition bridge instead of the "not mapped to a tradition"
fallback. The fallback string stays in the generator for future unmapped refs.

Four new clusters: Tertiary Orality Scholarship (6), Educational Sensemaking
(5), Research Methods and Analysis (16), Disability, Access, and Exclusionary
Difficulty (2). Largest existing cluster is now Generative AI in Education at 40.

Also: the four `defense-*` standalone entries had no `era`, since they are not
studio records. The generator now resolves it from the tradition their cluster
belongs to, so all 155 carry one.

Verified: 155 sources and 18 clusters on all three consumers, Proposal
Bibliography absent from both filters, Tertiary Orality filters to 6, no console
errors. Terminology linter clean on both repos; all JSON parses. On the studio
side, `private/` confirmed untracked and no em dashes introduced in user-facing
copy, per that repo's AGENTS.md.

**Not done:** `js/app.js` in the studio renders the works list as `Author.. Title`,
because it appends a period to an author string that already ends in one. It is
pre-existing and shows on untouched traditions, but longer works lists make it
more visible. Left alone as unrelated to the mapping.

## 2026-08-07 - Intellectual history carries the full studio corpus (16 to 155)

Agent: Claude Opus 5 (Claude Code). Requested by the author: add the cited
sources from the Pedagogical Friction Studio's `#traditions` section and its
Reference Library to `intellectual-history/`.

**What changed.** `intellectual-history.js` went from 16 hand-written entries to
155, generated by the new `tools/build-intellectual-history.mjs` from the
sibling `dissertation-proposal-studio` repo's `data/traditions.json` (14
traditions) and `data/references.json` (151 references). Clusters are now the
studio's tradition names instead of the old five ad-hoc labels.

**Three decisions worth knowing.**

- The 104 references the studio has not mapped to a tradition are grouped under
  **Proposal Bibliography**, not distributed into traditions. Assigning a lineage
  to a source is a scholarly claim the underlying data does not make, so the
  generator does not invent one. Reassign them in the studio's
  `references.json` (`tradition` field) and regenerate; they will move.
- Four sources named in the old defense prose are not in the studio library at
  all: Bjork 1994, Kitchin 2017, Bucher 2018, and Stiegler's *Taking care of
  youth and the generations*. They are preserved as `defense-*` entries in the
  generator's `STANDALONE` list rather than dropped. The studio has *different*
  Bucher (2012) and Stiegler (2010, *Technics and time, 3*) works.
- Curated role/bridge prose for the 12 overlapping sources survives the merge
  via the generator's `CURATED` map, keyed by reference id, instead of being
  replaced by the shorter studio annotation.

**A real bug this surfaced.** `app.js` keyed the selected source on
`${author}-${year}`. The corpus holds three distinct Stiegler 2010 works, so
that key was ambiguous and two of the three were unreachable. Entries now carry
a stable `id` and all views key on it. The generator hard-fails on a duplicate
id, so this cannot regress silently.

`index.html`'s cluster `<select>` had the five old cluster names hard-coded and
would have filtered to nothing against the new data. It is now built from the
dataset in `renderHistoryFilter()`.

**Titles.** The 104 proposal-transcribed references carry a full APA citation
but an empty `title`, and the cards are keyed on title. `parseTitle()` recovers
it from the citation; 12 cases it cannot get right on its own — titles ending in
a question mark, translator credits, and Postman's `(1998, March 28)` full date
— are in `TITLE_OVERRIDES`. All 104 outputs were read against their citation
strings, not spot-checked.

**Detail pane.** The static "Defense use" box said the same sentence on every
source and is replaced by a Reference box: the full APA citation where one
exists (120 of 155), the studio's `venue` otherwise, plus a DOI or URL link
where present (76 DOIs). Friction tags and the tradition span now render when
the data carries them. All interpolated values are HTML-escaped; the previous
code was not escaping, and the new corpus is full of ampersands.

**Verified** on a local `serve` at all three consumers — `intellectual-history/`,
`index.html#history`, and `explorer/` — 155 sources on each, no console errors.
Cluster filter, search across titles and citations, and the empty state all
behave. Selecting the second of the three Stieglers now resolves correctly.
Contrast measured on every new and reused text style: lowest is 5.02:1
(`.source-card small`), all clear AA. Mobile at 375px reports no horizontal
overflow. Terminology linter: no forbidden terms in any changed file; the two
review-level warnings in `index.html` and `app.js` are pre-existing and outside
this diff.

**Not done:** axe was not run locally — the contrast sweep above covers what
this change touched, but CI is still the gate. The studio repo is unchanged;
this was a one-way import.

## 2026-08-04 - Slides 2 and 11 contrast misses cleared

Agent: Claude Opus 5 (Claude Code). Closes the open item left by the entry
below, at the author's instruction.

- Slide 2, `.trace-formation .trace-label` ("Durable learning"):
  `rgba(255,253,248,.58)` to `.62`. 4.33:1 to **4.71:1**.
- Slide 11, `.evidence-comparison`: `opacity: .86` to `.90`. 4.41:1 to
  **4.78:1**.

Both were deliberately de-emphasised, so the values are the smallest that clear
AA rather than a reset to full strength. The hierarchy each was expressing still
reads: the formation label stays quieter than the artifact label, and the
evidence rows still step 1 → .93 → .90.

Verified with the DOM contrast sweep described below: **216 text nodes across
all 17 slides, 0 failures**. Predicted and measured ratios agreed exactly on
both, so that sweep can be trusted to size this kind of change in advance
instead of guessing at alpha values.

Still open: the CI accessibility job remains blind to contrast on this deck for
the two reasons recorded below. Closing that gap would mean adding a sweep like
this one to the workflow. Not attempted here.

## 2026-08-04 - Invisible first guardrail on slide 14, and an axe blind spot

Agent: Claude Opus 5 (Claude Code). Reported by the author.

**The bug.** `.boundary-list li:first-child { color: var(--white) }` rendered
slide 14's first guardrail, "Comparison begins only after themes from human
accounts are finalized", as white text on the cream slide. Contrast 1.13:1, so
the line was invisible; only its teal checkmark showed. Introduced 2026-07-31 in
d178657, not by the interaction work earlier today.

The storyboard assigned slide 14 "entry, traces, guardrails, stop", so the first
row was meant to read as the entry condition. The dark background that white was
written for never landed, and the `.agentic-rule` box above now carries that
role. Fix: drop the colour rule. The line keeps its `<strong>` weight, which is
what set it apart anyway. All five guardrails now sit at 13.92:1.

**Why CI did not catch it, and will not catch the next one.** The axe job is
blind to this whole class of bug, for two compounding reasons:

1. Inactive slides are `display: none`, and axe skips hidden content. Running
   axe against `presentation/index.html` only ever tests slide 1 plus the bar,
   dock, and dialogs. Sixteen slides are never examined.
2. Even with a slide made active, axe returns colour-contrast on it as
   **incomplete**, not as a violation: "Element's background color could not be
   determined due to a background gradient". `--exit` only fails on violations,
   so an invisible line passes green. Verified by reintroducing the bug in a
   scratch copy: 0 violations, with the offending node sitting in `incomplete`.

This is very likely why the 2026-08-02 progressive-reveal contrast problem also
shipped past a green check. Treat the axe job as covering structure and naming,
not colour, on this deck.

**What was used instead.** A DOM contrast sweep run in the browser: activate
each slide, walk every element with a direct text node, resolve the nearest
ancestor with an opaque background, multiply the opacity chain, and compare
against WCAG AA thresholds with the large-text rule applied. 216 text nodes
across all 17 slides. Two gotchas worth knowing if this is rerun:

- Disable animations first. `.slide.active` carries `animation: slide-in .32s
  both`, whose `from` state is `opacity: 0`. Toggling `active` restarts it, and
  a synchronous `getComputedStyle` then reports opacity 0 for everything, which
  silently reports every element as failing at ratio 1.00.
- Validate with a positive control. Reinjecting the bug drops the first
  guardrail to 1.13:1 while its siblings stay at 13.92:1.

**Open, not fixed, needs the author's call.** Two pre-existing marginal misses,
both just under AA and neither introduced today:

- Slide 2, `.trace-label` "Durable learning": 4.33:1, needs 4.5. It is
  `rgba(255,253,248,.58)` on rust. Raising the alpha to about .62 clears it.
- Slide 11, the `.evidence-comparison` label "Separately labeled nonparticipant
  comparison": 4.41:1, needs 4.5. The block sits at `opacity: .86`; about .90
  clears it.

## 2026-08-04 - Timeline stages on slides 4 and 16 made selectable

Agent: Claude Opus 5 (Claude Code). Third entry this day; follows the two below.

Both slides that use the `.media-timeline` component now have selectable
stages, so one implementation covers them. Keys 1 through 5 select a stage,
Escape closes, and leaving either slide resets it.

Slide 4, the media-ecology progression. Detail names what changes at each stage
and who it is attributed to. Stages 3, 4, and 5 are quoted from the existing
speaker notes and source line. **Stages 1 and 2 are newly drafted single
sentences** summarizing Ong on primary orality and literacy; they are the only
new prose in this change and were flagged to the author for approval:

- 01 "Knowledge lives in speech, memory, and performance. What cannot be
  remembered cannot persist."
- 02 "Writing externalizes memory. Analysis, revision, and a durable record
  become possible."

Slide 16, the study timeline. Detail is drawn entirely from the slide's own
speaker notes and from slides 9 and 12: CITI status on stage 1, why stage 2 is
the one the committee can most usefully shape and that cognitive-interview
respondents are recruited outside the main study, the same-policy-moment
rationale and the documented reduction order on stage 3, the below-80
frequencies-only rule on stage 4, and the four integration outcomes on stage 5.

Structural notes:

- Unlike slide 6, nothing changed element type. `strong`, `small`, and `span`
  are all phrasing content, so they sit inside a `button` unchanged. The `li`
  keeps its position, right border, and `timeline-current` / `timeline-original`
  background classes; the button inside carries the padding and the
  `flex-direction: column; justify-content: flex-end` the cell used to have.
  The absolutely positioned `.timeline-number` still resolves against the `li`,
  so it did not move.
- `.timeline-current` is teal with light text, so the hover and selected states
  have a second pair of rules for that cell.
- Each slide's resting line was moved into the swappable block rather than a
  new line being added: slide 4's coda and slide 16's source line are now the
  resting state of `.timeline-aside`. Slide 4's Ong and Stalder source line
  stays outside and always visible, because it is a citation.
- The aside reserves 8.8cqw. The timeline `ol` is `flex: 1` and gives up that
  space, dropping from 198px to 162px at a 779px deck. The big stage numbers
  still clear their labels by 94px or more.

Validated:

- No reflow. Timeline height, first-cell position, aside height, and
  slide-field bottom are identical across the resting state and all five
  stages, on both slides.
- Reserved height is 70% filled by the tallest panel on each slide, leaving
  18px of 60px headroom at a 779px deck. Because `.slide` is the query
  container, is locked to 16:9, and every dimension involved is in `cqw`, the
  layout is scale-invariant: measurements were identical at every container
  width tried, so that headroom holds at any projector resolution.
- Resting geometry matches the previous commit when compared through real hash
  navigation: slide, field, and timeline left and top identical.
- axe-core 4.12.1, WCAG 2.0/2.1 A and AA: 0 violations, in the default state
  and on a temporary copy with the tallest panel on each slide forced open and
  its button marked selected, covering both the plain and the teal cell. The
  copy was deleted.
- Keys 1-5, Escape, cross-slide reset, and every slide still fitting its box
  all verified. Slide 8's and slide 6's existing shortcuts still work; the
  digit handler now dispatches on which slide is showing.

Method note that cost time: forcing a slide active by toggling the `active`
class, rather than navigating, leaves it without the state `showSlide` applies
and reports a false 9px horizontal offset against a baseline. Compare through
real navigation.

## 2026-08-04 - Framework nodes on slide 6 made selectable

Agent: Claude Opus 5 (Claude Code). Follows the entry below, same day.

The three learner-facing forms on slide 6 are now controls. Selecting one names
the pressure it answers and lights the infrastructural field it depends on,
which is the dependency the slide's own title asserts. Keys 1, 2, and 3 select
head, room, and world; Escape closes; leaving the slide resets it.

No claim, definition, or card copy changed. The detail text is quoted from
slide 5's three pressures, so the interaction links two slides that already
argue this and introduces nothing new:

- Noetic friction, answers noetic displacement
- Rhetorical friction, answers rhetorical saturation
- Existential friction, answers existential abstraction

Each panel closes with "Sustained or constrained by infrastructural friction",
restating the relationship the slide already claims.

Structural notes for whoever edits this slide next:

- The `article` elements became `button`s, so `h3` became `span.node-title` and
  the card's `p`/`small` became `span.node-desc`/`span.node-small`. Buttons take
  phrasing content only. The `article`-keyed CSS was retargeted to `.node`.
- The button is `display: block`, not flex, and `.node-kicker` stays inline.
  That reproduces the article's box model exactly. A flex column was tried
  first and shortened every card by about 10px, because the inline kicker had
  been sitting on a taller line box.
- `.node-title` restates what three rules used to supply between them:
  `.slide h3` gave the serif face and 1.05 leading, `.framework-constellation
  h3` the size and margins, the UA sheet the bold weight. The overview and
  max-width 820px sizes are restated too, since those rules keyed on `h3` and
  `p` element names and no longer match.
- The resting note and the three panels share one grid cell at a reserved
  9.6cqw height, so selection never moves the constellation.
- Selection adds emphasis to the chosen node rather than dimming the other two.
  Dimming would drop their text contrast, which is the failure recorded in the
  2026-08-02 entry below.

Validated at 1280x720 against the committed baseline (ce4aa2e) rendered side by
side in an iframe at the same viewport:

- The resting state is **pixel-identical** to the baseline across the kicker,
  title, description, small print, card box, core, constellation, field label,
  field note, and all three card positions. Zero computed-style or geometry
  differences.
- Constellation height, all three card positions, core position, aside height,
  and slide-field bottom are identical across the resting state and all three
  selections. No reflow.
- axe-core 4.12.1, WCAG 2.0/2.1 A and AA: 0 violations, both in the default
  state and on a temporary copy with a node detail and its active field state
  forced open. The temporary copy was deleted.
- Keys 1/2/3, Escape, reset-on-navigate, overview rendering, and slide 8's
  existing question shortcuts all verified. Every slide still fits its box.

Gotcha that cost time here: after editing CSS, the review browser kept serving
the cached stylesheet across `location.reload()` and `navigate`, so a corrected
rule appeared not to apply and an early comparison reported false differences.
Cache-bust the stylesheet href, or load the page with a query string, before
trusting any computed-style reading.

## 2026-08-04 - Interactive research questions, section rail, and Studio access

Agent: Claude Opus 5 (Claude Code).

Presentation only. No slide claim, research-status language, reveal order, or
research question wording changed. The three research questions were already
present on slide 8 and their text is untouched; what changed is how they are
navigated.

Added:

- **Slide 8 research questions are now selectable.** Each question became a
  button. Selecting one swaps a panel underneath showing who it draws on, what
  evidence answers it, and how that evidence is read, plus the framework form
  it ties to. Panel content is drawn from slides 10, 11, and 12 and the
  existing speaker notes; no new claim was introduced. Keys 1, 2, and 3 open
  the matching question and pull the progressive reveal forward to it. All
  three questions stay on the slide at all times and stay in the accessibility
  tree; the panel is fixed height so swapping never reflows the slide.
- **Section rail** replaces the flat progress bar in the control dock. It is
  built from each slide's `data-section`, so it stays correct if slides move.
  Segments are proportional to section length, fill as the deck advances, and
  jump to the start of a section on click, which is the Q&A path back to a
  part of the argument.
- **Standing Studio link** in the top bar plus a **Materials dialog** (M) with
  the Proposal Defense Studio as the primary destination and direct links to
  the Claims Lab, Traceability Matrix, Challenge Deck, Committee Questions,
  printable matrix and brief, explorer, intellectual history, the framework
  companion, the Overview, and Miner (2026a). The closing footer link was
  relabeled "Proposal Defense Studio".
- **Talk timer** (T, Shift+T resets) in the status area.
- Section-tinted shell wash and a short slide entrance, both collapsing under
  `prefers-reduced-motion`.

Also fixed a latent presenting annoyance: arrow keys were previously swallowed
whenever focus sat on any button or link, so clicking a control killed keyboard
navigation until focus moved. Only text-entry targets now block navigation
keys; Space and Enter still belong to the focused control.

Validated against a local server at 1600x900 and 1920x1080:

- axe-core 4.12.1, WCAG 2.0/2.1 A and AA: **0 violations**, both in the default
  state and on a temporary copy with the Materials dialog and an evidence panel
  forced open, since axe skips hidden content. The temporary copy was deleted.
- Evidence panel height is constant at 155px across the resting line and all
  three questions, so no question selection reflows the slide. All three panels
  clear the container by 15px or more.
- Every slide's `.slide-field` still fits inside its slide box; no regressions.
- Rail, timer, dialog focus and Escape return, keys 1/2/3, and overview-mode
  clicks on a question all verified. No console errors.

Known and unchanged: slide 8 reports 263px of clipped scroll overflow. This is
pre-existing and not caused by this work. It was confirmed by swapping the
original slide 8 markup back into the live page and re-measuring: identical
991px scrollHeight either way. Nothing is visibly cut off, since `.slide` is
`overflow: hidden` and no element extends past the slide's bottom edge.

Two notes for the next agent:

- Viewport resizing in the review browser changed `innerWidth` and media-query
  matching but did not re-resolve CSS `vw`/`vh` units, so the deck stayed
  1600x900 while `innerWidth` reported 1366. Slide 8's type is entirely
  container-relative (`cqw`), so its proportions hold at any deck size, but do
  not trust absolute pixel readings taken after a resize.
- This clone lives in a OneDrive-synced folder. During this session AGENT_LOG.md
  was edited successfully, showed as modified in `git status`, and then
  disappeared from disk minutes later with no conflict copy written. It was
  recovered with `git restore` and the entry reapplied. Check `git status` for
  unexpected deletions before committing here.

## 2026-08-02 - Progressive-reveal contrast repair

Agent: OpenAI Codex.

Raised the pending-step opacity in presentation/presentation.css from .12
to .78. The former value made the three pressure labels and the
Unproductive success coda on slide 5 look disabled and rendered their text
at roughly 1.2:1 contrast against the cream slide. The revised value keeps the
step-by-step emphasis change without making unrevealed content illegible; the
same repair applies consistently to all six slides with progressive reveals.

No slide copy, research-status language, reveal order, navigation behavior, or
layout geometry changed.

Validated locally through Playwright at 1920 x 987. The slide 5 pressure row
and coda remained inside the slide bounds at pending opacity .78. Advancing the
reveal raised the pressure row to full opacity without changing layout. The
accessibility snapshot retained all slide content and controls. The only console
error was the pre-existing missing favicon.ico response from the local server.

---

## 2026-07-31 - Progressive reveals

Agent: Claude Code, closing the last open item from the redesign handoff.

Added stepped reveals to six slides: 5 (bypass, then the three pressures, then
the diagnosis), 6 (the three learner-facing forms, then the field that holds
them), 8 (one research question at a time), 12 (strands apart, joined, then the
four relationships), 14 (rule, guardrails, then the limit on the claim), and 16
(sequence, then the boundary it starts from).

Design decisions worth keeping:

- **Opacity only, never display or visibility.** Slides use `overflow: hidden`,
  so a reveal that changed layout could push content out of a slide that
  currently fits. Unrevealed elements sit at `opacity: .12` and animate to 1.
- **Content stays in the DOM and in the accessibility tree.** Nothing is hidden
  from assistive technology, so no claim exists only behind a reveal. The steps
  are a pacing device for the presenter, not a content gate.
- Inactive slides are forced to their finished state, so overview mode and any
  direct jump by hash show the complete argument.
- Arriving at a slide backwards lands on its completed state rather than an
  empty one; arriving forwards starts at step 0.
- Print and `prefers-reduced-motion` both force the fully revealed state.

Verified: reveal behaviour confirmed from a render of slide 6 showing the three
learner-facing nodes at full opacity with the infrastructural field label, note,
and source line still dimmed; `presentation.js` braces balanced; 20 step markers
present; with every step force-revealed, 17/17 slides clear the out-of-bounds and
scroll probe at 1280x720.

Not verified this pass: the same fully-revealed probe at 1920x1080 returned no
result after repeated headless-Chrome hangs. 17/17 was confirmed at 1920x1080
earlier in the session before reveals were added, and because reveals change
only opacity they cannot alter layout, so the risk is low. It has not been
directly measured. Also unmeasured since adding reveals: a fresh print export.

Operational note: headless Chrome accumulated 52 stray processes across this
session's many `--user-data-dir` invocations and began hanging. Kill stray
`chrome` processes if renders start timing out.

Concurrency note: another agent modified `index.html`, `styles.css`, and this log
while this work was in progress. Those changes were left untouched; the reveal
work is confined to `presentation/`.

## 2026-07-31 - Boundaries scope-limit layout repair

Agent: OpenAI Codex.

- Replaced the Boundaries panel's reused checkbox-grid markup with a dedicated
  semantic list for the four scope limitations.
- Preserved every claim and explanation while separating headings from body
  copy and adding consistent dividers, spacing, line height, and text color.
- Kept the checklist component unchanged for the preparation tracker that still
  uses its intended checkbox-and-label structure.

Verified: direct `#boundaries` load; visual review at the default viewport and
at 1920x1080; responsive measurement at 390x844; no item overlap, clipped text,
or horizontal page overflow; browser console reported no warnings or errors;
`git diff --check` passed. This repair is local and has not been committed or
pushed.

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

## 2026-08-09 - Literature-map accuracy, stable IDs, and keyboard access

Agent: OpenAI Codex, implementing the author's follow-up to a verification review.

- Regenerated `intellectual-history.js` from the revised Pedagogical Friction
  Studio taxonomy: 155 sources across 19 typed groups.
- Replaced the public claim that every item is part of a canonical, fully cited
  corpus. The standalone view now describes a shared working map and labels
  recorded APA citations, partial metadata, and missing reference records.
- Added each group's taxonomy `kind` to the shared dataset and public views so
  intellectual lineages are distinct from frameworks, research infrastructure,
  and evidence or practice context.
- Converted the standalone selector and Explorer timeline from positional array
  indices to stable source IDs. The primary Studio view already used stable IDs.
- Rebuilt Explorer timeline entries as native buttons with visible focus,
  `aria-pressed` state, and Enter/Space activation through native button
  behavior.
- Preserved the proposal-stage boundary. No participant data, findings, or
  claims of IRB or committee approval were added.
