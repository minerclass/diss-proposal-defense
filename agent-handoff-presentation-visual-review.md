# Agent Handoff: Presentation Visual and Layout Review

## Purpose

Review the rendered layout of the 17-slide dissertation proposal defense
presentation and fix anything that clips, overflows, crowds, or reads poorly
when projected.

**This is a visual review, not a content review.** The slide content was audited
against the controlling proposal on 2026-07-31 and is committed. Do not rewrite
wording, retitle slides, reorder them, or "improve" claims. If a layout problem
can only be solved by cutting text, propose the cut and say which slide, rather
than making the edit silently.

## Repository

- Repository: `minerclass/diss-proposal-defense`
- Branch: `main`
- Baseline commit: `416343e` ("Add committee-facing proposal presentation deck")
- Live: <https://minerclass.github.io/diss-proposal-defense/presentation/>

Files in scope:

- `presentation/index.html`
- `presentation/presentation.css`
- `presentation/presentation.js`

Do not modify `app.js`, `committee-brief.html`, `methods-matrix/`, `explorer/`,
or `intellectual-history.js`. Those belong to a separate July 30 workstream.

## Why this review is needed

The deck was built and verified structurally but **never rendered or looked at**.
The prior agent could not view it:

- The available browser surface blocks `http://localhost` by policy.
- It renders `file://` URLs as static snapshots that cannot be introspected
  (`get_page_text`, `read_page`, and `javascript_tool` all return "no site is
  open").
- There is no Node runtime on the authoring machine, so `axe-core` and any
  headless browser could not be run locally.

What *was* verified: HTML parses clean, 17 slides with sequential IDs, all
`aria-labelledby` resolve, no duplicate IDs, all links resolve, UTF-8 intact,
CSS braces balanced, and all four CI jobs pass (terminology, links, secrets,
accessibility). **CI accessibility passing says nothing about whether text
fits.** `axe` does not detect clipped content.

## The core risk

`presentation.css` sets `overflow: hidden` on `.slide` (and on `.deck`). Content
taller than the 16:9 slide box is **silently cut off**. There is no scrollbar and
no visual warning. A slide can look fine in a tall browser window and lose its
last line on a projector.

Type scales with CSS container queries (`cqw` units inside `clamp()`), so the
failure mode is resolution-dependent: text shrinks with the container up to the
`clamp()` minimum, then clips.

## Slide inventory

Character counts are on-slide text only, excluding speaker notes. Anything at or
above ~750 is worth close attention; the three highest are the priority.

| # | Class | Section | Chars | Takeaway title |
|---|---|---|---:|---|
| 1 | `slide-title` | Opening | 420 | Pedagogical Friction in the Age of Generative AI and Tertiary Algorithmicity |
| 2 | `slide-statement` | Problem | 256 | A finished artifact no longer reliably shows the thinking behind it. |
| 3 | `slide-data` | Problem | 506 | Adoption is running ahead of institutional clarity. |
| **4** | `slide-timeline` | Framework | **827** | The shift is from algorithmic selection to algorithmic production. |
| 5 | `slide-process` | Framework | 699 | AI can route around the formation the assignment was meant to produce. |
| **6** | `slide-framework` | Framework | **871** | Three learner-facing forms depend on one institutional condition. |
| 7 | `slide-boundary` | Framework | 549 | The question is not whether school should be difficult. |
| **8** | `slide-questions` | Questions | **820** | The study follows meaning from experience to institutional action. |
| 9 | `slide-design` | Design | 687 | Qualitative interpretation leads. Quantitative evidence adds context. |
| 10 | `slide-participants` | Design | 736 | Four vantage points reveal where friction is experienced and governed. |
| 11 | `slide-evidence` | Design | 557 | Each source answers a different weakness in the evidence. |
| 12 | `slide-integration` | Analysis | 463 | Integration preserves difference instead of forcing agreement. |
| 13 | `slide-rigor` | Rigor | 655 | The study makes the researcher's investment visible and challengeable. |
| **14** | `slide-agentic` | Boundaries | **781** | A system response is not evidence of agentic execution. |
| 15 | `slide-test` | Contribution | 564 | The framework earns value only if it helps interpret practice and survives contradiction. |
| **16** | `slide-timeline` | Decision | **778** | Approval starts the IRB and instrument sequence, not data collection. |
| 17 | `slide-close` | Decision | 608 | You are not asked to approve the framework. You are asked whether this design can examine it credibly. |

## Specific things to check

### Untested layout added on 2026-07-31

These three are new and have never been seen rendered. Check them first.

1. **`.pressure-row` on slide 5.** A new three-column `<ul>` added *below* the
   existing `.bypass-map`. `.bypass-map` is `flex: 1` and carries
   `padding-bottom: 4.5cqw` to make room for the absolutely-positioned
   `.bypass-arc`. The new row is a flex sibling beneath it. Verify the arc does
   not collide with or overlap the pressure row, and that the row does not push
   the coda off the slide.

2. **`.closing-links` on slide 17.** Five links in a flex row inside
   `.closing-footer`, which is absolutely positioned and `justify-content:
   space-between` with a `<p>` on the left. Verify the links wrap sensibly and do
   not collide with the identity line at 16:9 or on a narrower projector.

3. **Slide 16 reuses `.media-timeline`** (built for slide 4) with five items. It
   also uses `.timeline-current` on item 01. Verify the reused component reads
   correctly with different content lengths — slide 16's `<small>` text is
   noticeably longer than slide 4's.

### Everything else

- **Slide 6** is the densest slide in the deck (871). It has a four-part
  `.framework-composition` (three columns plus a foundation block) *and* a
  `.source-line` added on 2026-07-31. That added line is the most likely thing to
  clip.
- **Slide 4** (827) has a five-item timeline, a coda, *and* a two-sentence
  source-line.
- **Slide 8** (820) has three research questions at full proposal wording. These
  were deliberately restored to full length and should not be shortened without
  flagging; RQ1 and RQ3 contain `<em>` emphasis that must survive.
- **Slide 14** (781) has an `.agentic-rule` callout plus a four-item
  `.boundary-list` plus a coda.
- **Slide 10** (736) has a four-column `.role-spectrum` plus a two-clause
  `.survey-callout`.

### Modes to check beyond the default view

- **Overview mode** (`O`) — scales all 17 slides into a grid.
- **Print / PDF** — `@media print` sets `@page { size: 13.333in 7.5in }` with each
  slide `break-after: page`. Confirm one slide per page with nothing cut.
- **Fullscreen** (`F`).
- **Presenter notes drawer** (`N`) — every slide has notes; several are long.
- **Narrow viewport** — there is a `@media (max-width: 820px)` block and a
  `@media (max-height: 620px) and (min-width: 821px)` block.

## How to actually see it

The prior agent could not. Options for the next one:

- If you have Node: `npx serve` in the repo root, then open the presentation
  path. This also lets you run `npx @axe-core/cli`.
- If you have Python: `python -m http.server 8000` from the repo root.
- Simplest: the deck is already live at
  <https://minerclass.github.io/diss-proposal-defense/presentation/>. It is a
  static site with no build step, so the published version is the source.
- Check at 1920x1080 and 1280x720 at minimum. The deck is designed 16:9.

To find clipping programmatically once you can run JS in the page:

```js
document.querySelectorAll('.slide').forEach(s => {
  const f = s.querySelector('.slide-field');
  if (f && f.scrollHeight > f.clientHeight + 1) {
    console.log(s.id, 'CLIPPED', f.scrollHeight - f.clientHeight, 'px');
  }
});
```

Note that inactive slides are `display: none` and `inert`, so you must activate
each slide before measuring. Stepping with the right-arrow key and measuring the
active slide is the reliable approach.

## Content boundaries that constrain any fix

If a layout fix requires touching text, these must hold. They come from the
controlling proposal, not from style preference.

- Generative AI is the empirical focus; the agentic component is bounded and
  exploratory.
- Human participant accounts are the primary evidence.
- The design is qualitative-dominant convergent mixed methods, written
  `QUAL + quan`.
- Noetic, rhetorical, and existential friction are learner-facing. Infrastructural
  friction is the institutional condition enabling or constraining them, not a
  fourth peer dimension.
- Productive friction stays distinct from exclusionary friction.
- Framework concepts are sensitizing concepts, not mandatory codes or findings.
- Secondary datasets are structural context and do not measure pedagogical
  friction.
- AI-generated text and agentic artifacts are nonparticipant materials.
- Slide 3's national percentages must stay labeled as context, never as findings.
- Slide 14's agentic boundary language is near-verbatim from Chapter Three. Do not
  compress it.

The controlling source is the Google Doc `1hzdzhrs...` ("Revision Working Copy -
July 24 -'26"), read via the Drive connector. It is not publicly fetchable and
`export?format=txt` returns 401. Several near-identical local `.docx` copies exist
under similar July 20/24 names, including one labeled "Final Submission", so
confirm by doc ID rather than filename.

## Environment warnings

- **This clone lives inside a syncing OneDrive folder and OneDrive corrupts
  `.git`.** On 2026-07-31 this caused, in one session: stale remote-tracking refs
  that made `git fetch` fail with "bad object"; a transient "no such file" on a
  file that existed; an "invalid object / Error building trees" that aborted a
  commit; and a "No commits yet on main" that aborted a push. All were transient
  and retries succeeded, but verify `git status` and `git fsck` before concluding
  anything is actually broken, and retry rather than repairing. Consider working
  from a clone outside OneDrive.
- **Fetch before starting.** The same session began from a clone three commits
  stale and duplicated an entire workstream that had already been done and pushed.
- `gh` is not installed on the authoring machine. The GitHub REST API over
  `Invoke-RestMethod` works read-only without a token.

## Definition of done

- Every slide renders complete at 16:9 with no clipped text, at 1920x1080 and
  1280x720.
- Overview mode, fullscreen, notes drawer, and print-to-PDF all render correctly.
- The three untested components above are confirmed or fixed.
- CI stays green (terminology, links, secrets, accessibility).
- Any text cut is listed explicitly in the summary, with the slide number and what
  was removed, so it can be reviewed against the proposal.
- Append a dated entry to `AGENT_LOG.md` describing what changed, what was
  verified and how, and what remains open. Newest first; do not rewrite existing
  entries; no participant data, faculty names, credentials, or tokens.
