# Proposal Defense Studio

Interactive GitHub Pages-ready dissertation proposal defense workspace for:

- rehearsing the proposal argument,
- stress-testing claims and likely committee questions,
- mapping research questions to data sources and analysis,
- separating public explanation from private research data,
- exploring the intellectual history behind the reference set.

The public studio also includes an expanded dissertation explorer at `explorer/`. Its public reference atlas intentionally excludes local file paths, full-text source extracts, and private research data.

All three literature-map views use the shared `intellectual-history.js` dataset so their source sequence, roles, proposal bridges, taxonomy kinds, and verification language remain aligned. Each view selects sources by the stable source `id`, not by array position or an ambiguous author-year key.

`intellectual-history.js` is generated, not hand-edited. It merges the typed literature-map groups and reference library published by the [Dissertation Proposal Studio](https://minerclass.github.io/dissertation-proposal-studio/) with the defense prose written before that bibliography existed. Regenerate it after the studio bibliography changes:

```
node tools/build-intellectual-history.mjs [path-to-dissertation-proposal-studio]
```

The path defaults to a `dissertation-proposal-studio` checkout beside this repository. Clusters come from the Studio's literature map; references the Studio has not mapped to a group are placed under **Proposal Bibliography** rather than being assigned a lineage here.

The standalone shared working experience is published from `intellectual-history/` and links back to both the Proposal Defense Studio and Expanded Explorer.

## Companion relationship

The defense site treats two public companions as a layered resource rather than merging their codebases:

- [Pedagogical Friction Companion](https://minerclass.github.io/pedagogical-friction/#study) is the current defense-facing entry point for the research questions, framework, and Chapter 2–3 walkthroughs.
- [Dissertation Proposal Studio](https://minerclass.github.io/dissertation-proposal-studio/#traditions) is the deeper reference for the comprehensive literature map, source library, methods, and RQ connections.

The Defense Room links to both with these distinct roles. Keeping the sites separate preserves their different interaction models while giving readers one clear path between them.

## Project Status

This first version is grounded in the local Phase 2 artifacts in this workspace:

- `DISSERTATION_DRIVE_REVIEW_PHASE2.md`
- `PHASE_2_DISSERTATION_PROPOSAL_ALIGNMENT_MAP.md`
- `CHAPTER_1_3_RUBRIC_REVIEW_PHASE2.md`
- an inventory of the local research folder (not committed)

The Google Drive folder should be re-ingested when the Drive connector is available. Do not treat the source atlas as a final APA reference list until citation details are verified against the controlling proposal bibliography.

## Authoritative Google Docs

- Current Chapters 1-3 proposal working copy (July 24, 2026): <https://docs.google.com/document/d/1hzdzhrsTSO3E5iAsoAszn5bniFNMIn25h7RMwnd0Lzg/edit>
- Qualifying paper: <https://docs.google.com/document/d/1ZtE5wDm3HvBcHt6LB7DyI1_oUZx5oc89CrKbRl_WAGY/edit?usp=sharing>

## How to Use

Open `index.html` in a browser. No build step is required.

For GitHub Pages:

1. Create or choose a repository.
2. Commit the full repository contents, including the committee brief, Explorer, intellectual history, and research matrix.
3. Enable GitHub Pages from the repository root.
4. Review the published page for privacy boundaries before sharing.

## Modes

- **Proposal Presentation:** 17-slide, keyboard-navigable HTML defense presentation with presenter notes, source blocks, overview mode, fullscreen mode, and print-to-PDF support at `presentation/`.
- **Defense Room:** core argument constellation and two-minute opening rehearsal.
- **Claims Lab:** committee-facing claims with evidence anchors, likely challenges, and rehearsed answers.
- **Methods Map:** RQ-to-data-source-to-analysis alignment plus evidence-based defense preparation checks.
- **One-Page Research Matrix:** print-ready alignment of the three primary research questions with participants, instruments, analysis, framework dimensions, and integration points at `methods-matrix/`.
- **Traditions and Research Map:** searchable working atlas of 155 sources across 19 typed groups. It combines the Studio library with four defense-context sources and labels recorded, partial, or missing reference metadata rather than presenting every entry as bibliography-ready.
- **Challenge Deck:** active-recall rehearsal for adversarial theory, methodology, equity, positionality, and practice questions, with source-cautious response scaffolds.
- **Committee Questions:** rehearsal prompts and a local scratchpad.

## Privacy Boundary

This repository is suitable for public explanation, rehearsal, and source mapping. It is not suitable for:

- consent records,
- interview recordings,
- transcripts,
- survey responses,
- participant names,
- recruitment logs,
- private analytic memos,
- staff or student data,
- API keys or credentials.

Use approved secure systems for human-subjects research data after proposal and IRB approval.
