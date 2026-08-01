# Agent Handoff: Proposal Defense Visual Storytelling Redesign

classification: public

## Purpose

Take the 17-slide dissertation proposal defense presentation through a second,
more ambitious visual-design pass. The first pass fixed fit, clipping,
responsive behavior, and several weak layouts. The deck is now technically
clean, but it is not yet visually strong enough for the proposal defense.

This next pass is **an art-direction and visual-storytelling redesign**, not
another spacing-only review.

## Current repository state

- Repository: `minerclass/diss-proposal-defense`
- Branch: `main`
- Current baseline: `d08b76f` ("Improve presentation visual layout")
- Live deck: <https://minerclass.github.io/diss-proposal-defense/presentation/>
- GitHub status verified 2026-07-31: local and remote `main` match.
- The four repository CI gates and the Pages deployment passed for `d08b76f`.

Files already changed in the first visual pass:

- `presentation/presentation.css`
- `AGENT_LOG.md`

The first visual-review handoff remains useful for density, content boundaries,
and testing requirements:

- `agent-handoff-presentation-visual-review.md`
- `agent-handoff-proposal-presentation-review.md`

## The user's direction

The current result is still too typographically compressed and visually
passive. Long headings bunch letters and lines together even when the slide has
substantial unused space. Several slides fill the canvas with large text and
repeated rectangular panels instead of creating a memorable visual argument.

The user wants:

- more breathing room within and around lines of text;
- less reliance on one large headline plus empty background;
- fewer repeated card and column layouts;
- more dynamic, thoughtful, concept-driven visuals;
- stronger variation in slide silhouette and pacing;
- a deck that feels designed for a consequential live defense, not enlarged
  prose placed on a 16:9 canvas.

Screenshots supplied with this feedback specifically call attention to slides
1, 2, 6, and 13, but the next agent should treat the concern as deck-wide.

## Communication job

By the end, the dissertation committee should understand why polished output
is no longer reliable evidence of learning, see how the conceptual framework
becomes a credible empirical design, and feel confident that the proposed study
can examine the problem responsibly.

The visual system should help the presenter make that argument. It should not
merely decorate the claims.

## Reference direction

Study these references before changing the deck:

### Conference presentation ecosystem

- Hub: <https://minerclass.github.io/conference-presentations/>
- DuPage ROE session: <https://minerclass.github.io/dupage-roe-session-26/>
- NLU doctoral colloquium deck:
  <https://minerclass.github.io/nlu-doccolloquium-may26/>

Useful qualities to translate into the defense deck:

- act-based pacing and clear section transitions;
- sparse transition slides that let one idea land;
- case-based openings rather than immediate abstraction;
- interactive reveals that expose a distinction or contradiction;
- short audience experiments that make the learning problem experiential;
- simple sequences such as "policy question / integrity question /
  developmental question" that build toward the central claim;
- strong typographic hierarchy without forcing every title into the same size,
  width, and line-height.

The DuPage deck is particularly useful for its progression from a clean claim,
to an interactive comparison, to a sixty-second learning experiment. The
lesson is not to copy those activities into the proposal defense. The lesson is
that each visual move performs part of the argument.

### Dissertation visual ecosystem

- Dissertation sites dashboard:
  <https://minerclass.github.io/dissertationquestionsbeta/dissertation-sites/>
- Tertiary algorithmicity visual companion:
  <https://minerclass.github.io/dissertationquestionsbeta/tertiary-algorithmicity-companion/>

Useful qualities to translate:

- editorial scale shifts and selective emphasis within headings;
- constellations, stages, hinges, ruptures, pathways, and layered systems as
  visual metaphors;
- a slower visual rhythm for theoretical material;
- staged explanations in which the reader first sees a structure, then the
  rupture or consequence;
- meaningful contrasts rather than generic decorative shapes;
- recurring visual motifs that connect media ecology, learning, institutions,
  and evidence without turning every slide into a dashboard.

Do not copy the sites' navigation bars, tabs, cards, or webpage density into the
deck. Translate their conceptual and editorial qualities into slide-native
compositions.

## Diagnosis of the current screenshots

### Slide 1: title

The full title is large and compressed into the upper-left quadrant. The title
uses four heavy lines while the center and lower-right areas remain visually
inactive. The background arcs are atmospheric but do not yet clarify the idea.

Target: give the title a deliberate reading sequence. Use scale contrast,
selective emphasis, or a conceptual aperture/threshold visual so the negative
space becomes part of the composition. Keep the full title and identity
information, but do not let all title words carry the same weight.

### Slide 2: opening tension

The statement-and-equation redesign is cleaner than the original, but it still
reads as two text zones floating on a large field. The equation names the
problem without visualizing what disappears between product and learning.

Target: show the missing process or evidence trace. Possibilities include a
fading reasoning trail, an artifact whose visible surface separates from its
hidden formation, or a before/after reveal. Preserve the core statement and the
"polished product does not equal durable learning" logic.

### Slide 6: framework

Three equal cards occupy most of the slide but contain relatively little text,
creating large dead interiors. The composition makes head, room, and world look
like interchangeable categories, while the system foundation reads as a fourth
card.

Target: depict head, room, and world as three learner-facing relations around a
human or learning event, with infrastructural friction as the environmental
field, foundation, or containing condition. The visual must preserve the
conceptual asymmetry: infrastructural friction is not a fourth peer dimension.

### Slide 13: rigor, power, and ethics

The title is oversized and tightly set at the top, followed by a large inactive
middle field. The quotation and checklist sit low and feel disconnected.

Target: make the researcher's interpretive investment visible as an audit
trail. The quote can anchor one side while reflexivity, memoing, negative-case
analysis, member checking, peer debriefing, and research protections form a
traceable chain of challenge around it.

## Typography requirements

The current global heading rule applies roughly the same treatment to most
slides:

- large container-relative type;
- `letter-spacing: -.035em`;
- `line-height: .98`;
- broad automatic wrapping.

That combination is acceptable for short titles but makes long titles feel
dense and bunched. Do not solve this by simply shrinking every heading.

Required approach:

1. Create length-aware title treatments. Short, medium, and long titles should
   not share one size and measure.
2. Use deliberate line breaks based on meaning, not only automatic wrapping.
3. For long headings, test approximately `-.015em` to `-.02em` tracking and
   `1.02` to `1.08` line-height before reducing size.
4. Let scale contrast create hierarchy inside a title when appropriate. A key
   phrase may be larger or differently colored while a qualifying phrase is
   quieter.
5. Avoid four nearly equal headline lines when the same wording can be staged
   as a dominant claim plus a supporting phrase.
6. Review kerning and line breaks at 1920 x 1080, 1280 x 720, and in the print
   export. Do not approve typography from a montage alone.

## Visual system to build

Retain the existing ink, paper, rust, teal, and gold palette unless a carefully
tested refinement strengthens it. Retain the editorial serif/sans relationship.
The arcs can remain, but they should become one element in a richer system.

Build a visual vocabulary around:

- **trace:** what evidence of thinking remains or disappears;
- **threshold:** where support becomes bypass;
- **pathway:** how tasks, processes, evidence, and decisions unfold;
- **field:** how institutional conditions enable or constrain learning;
- **lens:** how the framework sensitizes interpretation without predetermining
  findings;
- **weave:** how QUAL and quan evidence retain difference while informing one
  interpretation;
- **boundary:** how equity and agentic claims are constrained;
- **constellation:** how perspectives or contributions relate without becoming
  interchangeable boxes.

Use original abstract or editorial visuals where they materially clarify a
claim. Avoid stock images of robots, glowing brains, circuit heads, generic
classrooms, or hands touching holograms. If generated imagery is used, keep it
conceptual, text-free, compatible with the palette, and subordinate to the
argument.

Aim for five to seven signature visual moments across the deck rather than 17
unrelated illustrations. Other slides can use strong typography, diagrams,
progressive reveals, or spatial compositions that reuse the same vocabulary.

## Slide-by-slide visual targets

| # | Current visual problem | Target direction |
|---|---|---|
| 1 | Four dense title lines plus passive arcs | Editorial title sequence with selective emphasis and an aperture or threshold visual |
| 2 | Statement and equation remain disconnected text zones | Reveal the missing reasoning trace between finished product and durable learning |
| 3 | Two percentages read as isolated statistics | Turn the data into a widening institutional-clarity gap or diverging paths |
| 4 | Five stages still behave like equal columns | Build a media-ecology progression with a visible authorship hinge between curation and generation |
| 5 | Process cards and bypass arc compete | Make the intended learning pathway primary and show generative AI visibly routing around the formation step |
| 6 | Three mostly empty cards flatten the framework | Use a head/room/world constellation around learning, held within an infrastructural field |
| 7 | Preserve/remove comparison is box-like | Use a threshold, filter, or decision fork that tests productive versus exclusionary friction |
| 8 | Three full questions create a document-like list | Show the inquiry movement from experience, to sensemaking, to institutional action; reveal questions progressively |
| 9 | QUAL + quan relationship resembles two cards | Use a dominant qualitative stream with a supporting quantitative stream that joins only at interpretation |
| 10 | Four participant groups are equal columns | Place four vantage points around the shared phenomenon and differentiate what each can see |
| 11 | Evidence sources are horizontal bands | Build an evidence ecology in which each source answers a named weakness without becoming a hierarchy of truth |
| 12 | Integration uses repeated panels | Visualize weaving, overlay, or a joint-display matrix that preserves convergence, divergence, expansion, and silence |
| 13 | Large title, empty middle, disconnected checklist | Create an audit trail of interpretive challenge around the researcher's visible position |
| 14 | Rule plus safeguard list reads as policy prose | Show a bounded execution track with entry conditions, captured traces, guardrails, and a clear stopping boundary |
| 15 | Three contribution columns are static | Use a constellation or bridge connecting scholarly, practical, and policy value to contradiction testing |
| 16 | Approval sequence is another five-column timeline | Create a directional runway from approval through preparation, collection, analysis, and integration; make the no-data-before-approval boundary unmistakable |
| 17 | Closing claim, commitments, and links compete | Center the committee decision, make the three commitments supporting evidence, and reduce links to a quiet closing utility layer |

## Interaction and motion

The deck already supports keyboard navigation, overview, fullscreen, presenter
notes, and print. Add interaction only when it strengthens comprehension.

Good candidates:

- slide 2: reveal the hidden formation or evidence trace;
- slide 4: step through the five media conditions;
- slide 5: animate the intended path, then reveal the bypass;
- slide 6: introduce head, room, and world before revealing the system field;
- slide 7: move a scenario across the productive/exclusionary threshold;
- slide 8: reveal one research question at a time;
- slide 12: layer QUAL, quan, and integrated interpretation;
- slide 14: reveal guardrails around the bounded task;
- slide 16: advance through the post-approval sequence.

Requirements:

- interaction must remain keyboard accessible;
- the print version must show the complete final state;
- no essential claim may exist only inside a hover state;
- motion should be restrained and respect reduced-motion preferences;
- transitions should establish sequence, contrast, or causality, not decorate.

## Content boundaries

The accuracy audit remains controlling. Do not rewrite claims merely to make a
layout easier. Preserve these distinctions:

- Generative AI is the empirical focus; the agentic component is bounded and
  exploratory.
- Human participant accounts are the primary evidence.
- The design is qualitative-dominant convergent mixed methods, written
  `QUAL + quan`.
- Noetic, rhetorical, and existential friction are learner-facing.
  Infrastructural friction is the institutional condition enabling or
  constraining them, not a fourth peer dimension.
- Productive friction remains distinct from exclusionary friction.
- Framework concepts are sensitizing concepts, not mandatory codes or findings.
- Secondary datasets provide structural context and do not measure pedagogical
  friction.
- AI-generated text and agentic artifacts are nonparticipant materials.
- Context percentages on slide 3 are not study findings.
- No participant data is collected before approval.

If a stronger composition requires changing visible wording, propose the exact
change and rationale before making it. Deliberate line breaks, hierarchy spans,
and progressive reveal wrappers may be added without changing the words.

## Files in scope

Primary:

- `presentation/index.html`
- `presentation/presentation.css`
- `presentation/presentation.js`

Optional:

- `presentation/assets/` for original, public-safe visual assets created for the
  deck.

Also append a new entry to `AGENT_LOG.md` after validation. Do not modify the
other Studio surfaces unless the user explicitly expands the scope.

## Workflow for the next agent

1. **Fetch first.** Confirm `HEAD...origin/main` divergence before editing.
2. Render the current 17-slide baseline at 1920 x 1080 and 1280 x 720.
3. Create a slide-by-slide visual storyboard before changing CSS. Define the
   visual job of every slide and mark the five to seven signature moments.
4. Establish the title-length system and shared visual vocabulary first.
5. Redesign in sections, rendering after each section rather than after all 17.
6. Test every progressive reveal with keyboard input and reduced motion.
7. Verify the final print state contains every required claim.
8. Run all CI-equivalent checks locally, including terminology, links,
   accessibility, and sensitive-pattern review.
9. Append a dated `AGENT_LOG.md` entry with what changed, what was verified, and
   what remains open.
10. Do not commit or push unless the user explicitly requests it.

## Definition of done

- Every slide has a clear visual job and one dominant focal point.
- No more than three adjacent slides use the same silhouette.
- Long titles no longer feel bunched or mechanically wrapped.
- Empty space feels intentional because it frames a focal visual, trace,
  threshold, pathway, or decision.
- Slides 1, 2, 6, and 13 are materially re-conceived, not merely resized.
- At least five signature visual moments materially clarify the argument.
- The framework's conceptual asymmetries remain accurate.
- All 17 slides render without clipping at 1920 x 1080 and 1280 x 720.
- Overview, fullscreen, presenter notes, reduced motion, keyboard navigation,
  and print-to-PDF work correctly.
- The print export contains 17 complete landscape pages.
- All repository CI gates pass.
