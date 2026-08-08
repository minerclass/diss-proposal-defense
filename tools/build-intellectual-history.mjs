// Regenerates intellectual-history.js from the Pedagogical Friction Studio data.
//
// The canonical bibliography lives in the sibling dissertation-proposal-studio
// repo (data/traditions.json + data/references.json). This script merges those
// two files with the hand-written defense prose that predates them, so the
// shared dataset stays reproducible when the studio bibliography changes.
//
//   node tools/build-intellectual-history.mjs [path-to-dissertation-proposal-studio]
//
// Clusters come from the studio's traditions. References the studio has not
// mapped to a tradition land in "Proposal Bibliography" — they are not assigned
// a lineage here, because that is a scholarly claim the data does not make.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");
const studioRoot = path.resolve(
  process.argv[2] || path.join(repoRoot, "..", "dissertation-proposal-studio")
);

for (const file of ["data/traditions.json", "data/references.json"]) {
  if (!fs.existsSync(path.join(studioRoot, file))) {
    console.error(`Missing ${file} under ${studioRoot}`);
    console.error("Pass the path to the dissertation-proposal-studio checkout as argv[2].");
    process.exit(1);
  }
}

const readJson = (p) => JSON.parse(fs.readFileSync(path.join(studioRoot, p), "utf8"));
const traditionsFile = readJson("data/traditions.json");
const referencesFile = readJson("data/references.json");
const traditions = traditionsFile.traditions;
const references = referencesFile.references;
const frictionLabels = referencesFile.frictionLabels;

const UNMAPPED_CLUSTER = "Proposal Bibliography";

// ---------------------------------------------------------------------------
// Titles for the proposal-transcribed entries.
//
// Those records carry a complete APA citation but an empty title field, and the
// cards are keyed on title. parseTitle() recovers it from the citation; the
// overrides below cover the cases it cannot get right on its own — titles that
// end in a question mark, contain a translator credit, or sit behind a
// full publication date rather than a bare year. Each was read against the
// citation string in data/references.json.
// ---------------------------------------------------------------------------
const TITLE_OVERRIDES = {
  "proposal-baudrillard-1994": "Simulacra and simulation",
  "proposal-postman-1998": "Five things we need to know about technological change",
  "proposal-bender-2021": "On the dangers of stochastic parrots: Can language models be too big?",
  "proposal-braun-2021":
    "One size fits all? What counts as quality practice in (reflexive) thematic analysis?",
  "proposal-bryman-2006": "Integrating quantitative and qualitative research: How is it done?",
  "proposal-zawacki-richter-2019":
    "Systematic review of research on artificial intelligence applications in higher education: Where are the educators?",
  "proposal-kaufman-2025":
    "Uneven adoption of artificial intelligence tools among U.S. teachers and principals in the 2023–2024 school year",
  "proposal-gadamer-2004": "Truth and method",
  "proposal-kittler-1990": "Discourse networks 1800/1900",
  "proposal-ong-2017": "Language as hermeneutic: A primer on the word and digitization",
  "proposal-stalder-2018": "The digital condition",
  "proposal-stiegler-2010":
    "Technics and time, 3: Cinematic time and the question of the new sophist",
};

function parseTitle(citation) {
  if (!citation) return "";
  // Skip past the "(2025)" / "(1998, March 28)" / "(n.d.)" date parenthetical.
  const date = citation.match(/\((?:n\.d\.|\d{4}[a-z]?)(?:,[^)]*)?\)\s*\./);
  if (!date) return "";
  const rest = citation.slice(date.index + date[0].length).trim();
  // End the title at the first sentence period that is not an initial ("S.")
  // or a common abbreviation.
  const end = rest.search(/(?<!\b[A-Z])(?<!\bed)(?<!\bEds)(?<!\bEd)(?<!\bTrans)(?<!\bVol)\.\s/);
  return (end === -1 ? rest : rest.slice(0, end)).replace(/\.$/, "").trim();
}

// ---------------------------------------------------------------------------
// Defense prose written before the studio bibliography existed.
//
// Keyed by the reference it describes, so the curated role/bridge survives the
// merge instead of being replaced by the shorter annotation.
// ---------------------------------------------------------------------------
const CURATED = {
  dewey1938: {
    role: "Frames learning as experience, continuity, and educative difficulty.",
    bridge: "Supports the distinction between productive and unproductive educational difficulty.",
    status: "Verify bibliography",
  },
  mcluhan1964: {
    role: "Provides the media-ecological claim that media reshape perception, scale, and social organization.",
    bridge: "Helps explain GenAI as a condition of schooling, not merely a tool inside schooling.",
    status: "Local source folder",
  },
  ong1982: {
    role: "Supplies the oral/literate media ecology that the qualifying paper extends toward algorithmic secondary orality.",
    bridge: "A core theoretical ancestor for tertiary algorithmicity.",
    status: "Core source",
  },
  postman1992: {
    role: "Names how technological systems reorganize cultural judgment and institutional priorities.",
    bridge: "Supports the governance and school-policy dimension of the dissertation.",
    status: "Verify bibliography",
  },
  "proposal-vygotsky-1978": {
    role: "Anchors mediation, social learning, and the role of tools in cognition.",
    bridge: "Useful for explaining why AI-mediated language changes the learning situation.",
    status: "Verify bibliography",
  },
  papert1980: {
    role: "Offers a constructionist account of computers, learning, and student authorship.",
    bridge: "Creates a contrast between learner construction and AI-assisted bypass.",
    status: "Local source folder",
  },
  "proposal-sweller-1988": {
    role: "Clarifies why some difficulty aids learning and some overloads working memory.",
    bridge: "Helps discipline the productive/exclusionary friction distinction.",
    status: "Verify bibliography",
  },
  kapur2008: {
    role: "Shows how structured struggle can prepare learners for deeper conceptual understanding.",
    bridge: "Provides a central empirical cousin to pedagogical friction.",
    status: "Verify bibliography",
  },
  "proposal-floridi-2020": {
    role: "Provides a philosophical and technical account of large language model limits.",
    bridge: "Useful for separating fluent production from understanding.",
    status: "Verify bibliography",
  },
  "proposal-bender-2021": {
    role: "Names risks around language models, scale, harms, and meaning.",
    bridge: "Supports caution around rhetorical fluency and synthetic text.",
    status: "Verify bibliography",
  },
  "proposal-creswell-2018": {
    role: "Methods anchor for convergent mixed methods, integration, and joint displays.",
    bridge: "Supports the QUAL + quan design and meta-inference language.",
    status: "Verify methods citation",
  },
  crotty1998: {
    role: "Interpretive foundation for situated and co-constructed meaning (Lincoln & Guba, 1985; Guba & Lincoln, 1994; Crotty, 1998).",
    bridge: "Connects constructivist assumptions to sensemaking questions and thematic interpretation.",
    status: "Primary methods foundation",
  },
};

// Sources named in the defense prose that the studio library does not carry as
// their own record. Kept so the merge adds sources without dropping any.
const STANDALONE = [
  {
    id: "defense-bjork-1994",
    cluster: "Learning Sciences of Productive Struggle",
    year: "1994",
    title: "Memory and metamemory considerations in the training of human beings",
    author: "Bjork, R. A.",
    role: "Introduces desirable difficulties as a learning-science anchor.",
    bridge: "Supports friction as a carefully designed condition rather than mere hardship.",
    status: "Verify bibliography",
  },
  {
    id: "defense-kitchin-2017",
    cluster: "Critical Algorithm Studies",
    year: "2017",
    title: "Thinking critically about and researching algorithms",
    author: "Kitchin, R.",
    role: "Frames algorithms as social, technical, and epistemic arrangements that need critical study.",
    bridge: "Supports the move from tool use to algorithmic conditions.",
    status: "Local source folder",
  },
  {
    id: "defense-bucher-2018",
    cluster: "Critical Algorithm Studies",
    year: "2018",
    title: "If...Then: Algorithmic power and politics",
    author: "Bucher, T.",
    role: "Helps locate algorithmic systems within power, perception, and social life.",
    bridge: "Strengthens the institutional and governance strand.",
    status: "Local source folder",
  },
  {
    id: "defense-stiegler-2010-youth",
    cluster: "Stieglerian Critique",
    year: "2010",
    title: "Taking care of youth and the generations",
    author: "Stiegler, B.",
    role: "Connects technology, attention, formation, and generational responsibility.",
    bridge: "Supports the dissertation's concern with schooling, care, and attention under technical systems.",
    status: "Local source folder",
  },
];

// ---------------------------------------------------------------------------
// Merge
// ---------------------------------------------------------------------------
const byId = new Map(traditions.map((t) => [t.id, t]));
const clusterOrder = new Map(
  [...traditions]
    .sort((a, b) => a.originYear - b.originYear)
    .map((t, i) => [t.name, i])
);
clusterOrder.set(UNMAPPED_CLUSTER, clusterOrder.size);

const numericYear = (year) => {
  const m = String(year).match(/\d{4}/);
  return m ? Number(m[0]) : 9999;
};

const entries = references.map((ref) => {
  const tradition = ref.tradition ? byId.get(ref.tradition) : null;
  const curated = CURATED[ref.id];
  const title = ref.title || TITLE_OVERRIDES[ref.id] || parseTitle(ref.citation) || "(untitled)";

  const defaultStatus = ref.id.startsWith("proposal-")
    ? "July 2026 proposal reference list"
    : "Annotated bibliography entry";

  return {
    id: ref.id,
    cluster: tradition ? tradition.name : UNMAPPED_CLUSTER,
    year: String(ref.year),
    title,
    author: ref.author || "",
    role: curated?.role || ref.annotation || "",
    bridge:
      curated?.bridge ||
      tradition?.contribution ||
      "Cited in the July 2026 proposal; not mapped to a tradition lineage in the studio data.",
    status: curated?.status || defaultStatus,
    // Only the 120 entries transcribed from the proposal carry a full APA
    // string. The rest fall back to venue, which is all the studio data has.
    citation: ref.citation || "",
    venue: ref.venue || "",
    doi: ref.doi || "",
    url: ref.url || "",
    era: tradition?.era || "",
    frictions: (ref.frictions || []).map((f) => frictionLabels[f] || f),
  };
});

// The standalone entries name a cluster rather than a reference, so their era
// is resolved from the tradition that cluster belongs to.
const byName = new Map(traditions.map((t) => [t.name, t]));
const all = [
  ...entries,
  ...STANDALONE.map((s) => ({
    citation: "",
    venue: "",
    doi: "",
    url: "",
    era: byName.get(s.cluster)?.era || "",
    frictions: [],
    ...s,
  })),
];

all.sort((a, b) => {
  const ca = clusterOrder.get(a.cluster) ?? 999;
  const cb = clusterOrder.get(b.cluster) ?? 999;
  if (ca !== cb) return ca - cb;
  const ya = numericYear(a.year);
  const yb = numericYear(b.year);
  if (ya !== yb) return ya - yb;
  return a.author.localeCompare(b.author);
});

// Every view keys a selected source on `id`. Three separate Stiegler 2010 works
// sit in this corpus, so the older `author-year` key was genuinely ambiguous.
const keys = new Map();
for (const entry of all) {
  if (keys.has(entry.id)) {
    console.error(`Duplicate id: ${entry.id}`);
    console.error(`  ${keys.get(entry.id)}`);
    console.error(`  ${entry.title}`);
    process.exit(1);
  }
  keys.set(entry.id, entry.title);
}

const banner = `// Generated by tools/build-intellectual-history.mjs — do not edit by hand.
// Source: dissertation-proposal-studio/data/{traditions,references}.json
// ${all.length} sources across ${new Set(all.map((s) => s.cluster)).size} clusters.
`;

fs.writeFileSync(
  path.join(repoRoot, "intellectual-history.js"),
  `${banner}window.intellectualHistorySources = ${JSON.stringify(all, null, 2)};\n`,
  "utf8"
);

console.log(`Wrote ${all.length} sources.`);
for (const [cluster, index] of [...clusterOrder].sort((a, b) => a[1] - b[1])) {
  console.log(`  ${String(all.filter((s) => s.cluster === cluster).length).padStart(3)}  ${cluster}`);
}
