# Visual Storyboard — Proposal Defense Deck

Written before CSS changes, per the redesign handoff. Baseline `d08b76f`,
diagnosed from headless-Chrome renders at 1920x1080.

## Verified baseline problems

Rendered and inspected, not inferred:

- **Global heading rule** applies `letter-spacing: -.035em` and
  `line-height: .98` to every `h1`/`h2` regardless of length. Short titles look
  intentional; long ones bunch. This is the root typographic cause.
- **Slide 1** — three heavy title lines in the upper-left; roughly the lower 45%
  of the canvas is inert. Every title word carries equal weight, so the eye has
  no entry point. Arcs are atmospheric only.
- **Slide 2** — title block and equation are two disconnected text zones with a
  large empty rust field between and below them. The equation *names* the
  problem without showing what goes missing.
- **Slide 6** — three cards whose interiors are ~75% empty. The infrastructural
  bar is rendered as a filled tan rectangle beneath them, so it reads as a
  fourth peer card. **This actively contradicts the framework's core asymmetry.**
  The source-line is crammed against the bar.
- **Slide 13** — three stacked horizontal bands (title / void / quote+list) with
  a dead middle and a dead bottom third.

## Design system (build first)

### Length-aware titles

Replace the one-size heading rule with a `data-title` scale on each section:

| Token | Chars | Size | Tracking | Leading | Measure |
|---|---|---|---|---|---|
| `short` | < 45 | `clamp(2.2rem, 5.4cqw, 5.9rem)` | `-.03em` | `.99` | 12em |
| `medium` | 45–75 | `clamp(1.95rem, 4.2cqw, 4.5rem)` | `-.022em` | `1.04` | 17em |
| `long` | > 75 | `clamp(1.6rem, 3.2cqw, 3.5rem)` | `-.014em` | `1.09` | 23em |

Plus in-title hierarchy spans, so a title is a reading sequence rather than a
uniform block:

- `.t-lead` — the dominant phrase (larger, full contrast)
- `.t-quiet` — qualifying phrase (smaller, lower contrast, own line)

### Visual vocabulary

Six primitives, reused rather than reinvented per slide:

- **trace** — fading marks showing evidence of thinking that no longer survives
- **threshold** — a hinge where support becomes bypass
- **field** — a containing condition that surrounds rather than sits beside
- **constellation** — related-but-not-interchangeable nodes around a center
- **spine** — a traceable chain of challenge or sequence
- **aperture** — concentric opening used for entry and closure

Palette, serif/sans pairing, and arcs are retained. Arcs become one element in
the system rather than the only non-text element.

## Signature moments

Five, not seventeen. Each performs part of the argument:

1. **Slide 1 — aperture.** Title as reading sequence; negative space framed by a
   concentric opening.
2. **Slide 2 — two routes, one horizon.** Identical artifacts above the line an
   evaluator can see; a switchback route and a straight one below it.
3. **Slide 6 — constellation in a field.** Head/room/world around a learning
   event, *contained by* an infrastructural field.
4. **Slide 13 — spine.** Interpretive investment as a traceable audit chain.
5. **Slide 17 — aperture (reprise).** Closes the loop opened on slide 1.

## Slide targets

| # | Job | Move |
|---|---|---|
| 1 | Enter the argument | Aperture; staged title with `.t-lead` / `.t-quiet` |
| 2 | Break the inference | Identical artifacts above the evidence horizon; unequal routes below |
| 3 | Establish the moment | Two figures as a widening clarity gap |
| 4 | Name the condition | Progression with a visible authorship hinge |
| 5 | Show the bypass | Intended path primary; AI routing around it |
| 6 | Present the framework | Constellation held in an infrastructural field |
| 7 | Constrain it | Threshold with a scenario tested across it |
| 8 | Ask the questions | Movement from experience to institutional action |
| 9 | Justify the design | Dominant QUAL stream, supporting quan joining late |
| 10 | Locate the vantage points | Four positions around a shared phenomenon |
| 11 | Show evidence ecology | Each source answers a named weakness |
| 12 | Integrate | Weave preserving convergence/divergence/expansion/silence |
| 13 | Make bias challengeable | Spine of challenge around the researcher's position |
| 14 | Bound the agentic claim | Bounded track with entry, traces, guardrails, stop |
| 15 | State contribution | Constellation tied to contradiction testing |
| 16 | Sequence approval | Runway with an unmistakable no-data-before-approval gate |
| 17 | Ask for the decision | Aperture reprise; commitments as support, links quiet |

## Constraints carried forward

Content boundaries from the accuracy audit are controlling. No visible wording
changes without proposing them first. Deliberate line breaks, hierarchy spans,
and reveal wrappers are permitted because they do not change the words.

Slides use `overflow: hidden`, so every change must be re-rendered and checked,
not reasoned about.
