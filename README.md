# SoftDev Revision

An interactive revision site for **VCE Applied Computing: Software Development, Units 3 & 4** (study design from 2025), plus dedicated preparation for the **Unit 4 Outcome 2 cyber security SAC**.

Built from the exam revision folder: the study design's key knowledge / key skills checklist, the VCAA examination specifications, VCAA examinations 2022–2025, the DLTV and TSSM 2025 trial papers with their sample solutions, and the Virtual School Victoria U4O2 performance descriptors.

## What's in it

**47 articles** across six categories, each tagged with the key knowledge and key skills it revises:

| Category | Covers |
| --- | --- |
| Unit 3 · AoS 1 | Programming — data types, structures and sources, OOP, language features, naming conventions, validation, internal documentation, algorithms, errors, debugging and testing, design tools, AI in programming |
| Unit 3 · AoS 2 | Analysis and design — why organisations develop software, briefs, Gantt charts, context diagrams / DFDs / use case diagrams, the SRS, legal requirements, file management, ideation, evaluation criteria, UX, design principles |
| Unit 4 · AoS 1 | Development and evaluation — efficient and effective solutions, repositories and APIs, alpha and beta testing, evaluation strategies, project monitoring |
| Unit 4 · AoS 2 | Cyber security — organisations, vulnerabilities, security controls, threat modelling, evaluating practices, legislation and frameworks, ethics, improving practices |
| **U4O2 SAC** | **The cyber security school-assessed coursework — how it is marked, section-by-section technique, and a full worked case study** |
| Exam skills | Exam structure and timing, command terms, answering technique |

### Unit 4 Outcome 2 SAC

The SAC is a 100-mark response to a teacher-provided case study, marked against five key skills across three sections. The site includes:

- **The full performance descriptors** as an interactive grid — pick a band to read just that column, with a *"moving up a band"* note on every key skill explaining what actually separates it from the one below.
- **Section-by-section technique** — KS1/KS2 analysis, KS3/KS4 evaluation, KS5 recommendations — including the three linkage targets that carry the top bands (legal obligations → goals and objectives → industry frameworks).
- **A complete worked case study** (Kestrel Freight Systems) written for this site, containing one hook per key skill, with model responses for all five.

Unit 4 AoS 2 itself is written to SAC depth rather than exam depth: the vulnerability article maps each of the ten named weaknesses to the phrases that signal it in a case study, and `evaluating-practices` covers KS3 — writing criteria that can actually be *applied* — as a topic in its own right.

### Practice

**175 questions**, every one taken from a real paper, tagged by area of study and by the article that covers it:

| Paper | Notes |
| --- | --- |
| VCAA 2025 | Current study design |
| DLTV Trial Exam 1, 2025 | Current study design, with sample solutions |
| TSSM Trial Exam, 2025 | Current study design, with sample solutions |
| VCAA 2024 / 2023 / 2022 | Previous study design — filtered (see below) |

- **End-of-area-of-study practice.** Every AoS page finishes with its own exam questions, filterable to every question, multiple choice only, or written responses only. The SAC category borrows the Unit 4 AoS 2 bank.
- Seven preset quizzes, per-topic quizzes, and six full papers sittable whole or section by section with the Section C case study insert alongside.

**Question order is reshuffled on every attempt** in all practice modes, so you learn to recognise the question rather than its position. Full past papers keep their printed order. Questions that originally depended on a neighbour's stimulus carry their own copy of it.

Multiple choice is auto-marked with an explanation. Written responses are self-marked against worked sample answers, with the marking notes from the original solution books where they exist.

**23 inline SVG diagrams** — context diagrams, DFDs, use case diagrams, Gantt charts, inheritance hierarchies, mock-ups and game grids. Drawn with `currentColor` so they read in both themes, with one accent reserved for the element a question turns on. One multiple-choice question uses picture options.

**Progress** — reading progress and quiz accuracy per area of study, weakest first, with links back to the relevant articles. Stored in `localStorage`; nothing is uploaded.

## Running it

Static site, no build step, no dependencies.

```
python3 -m http.server 8000
# then open http://localhost:8000
```

Deployed via GitHub Pages from the repository root.

## Structure

```
index.html
assets/
  css/main.css
  js/
    markdown.js          mini-markdown renderer used for all content
    app.js               hash router, sidebar, quiz engine, progress
    data/
      curriculum.js      article library
      sac.js             U4O2 SAC category, appended to CURRICULUM
      rubric.js          SAC performance descriptors + interactive grid renderer
      diagrams.js        inline SVG diagrams, referenced as @[diagram-id]
      questions.js       question bank (VCAA 2025, DLTV 2025, TSSM 2025)
      questions-past.js  VCAA 2022-2024, filtered to the current study design
      exams.js           exam and quiz definitions, case study inserts
```

To add an article, append a lesson object to the relevant unit in `curriculum.js`. To add questions, append to `QUESTIONS` with a `unit` and a `topic` matching a lesson `id` — every quiz that qualifies picks it up automatically. To add a diagram, register it in `DIAGRAMS` and reference it as `@[your-id]` on its own line in any article, stimulus, sample answer or case study; for picture options, set `optionDiagrams: [...]` on the question. The same `@[...]` mechanism resolves rubric fragments — `@[sac-rubric]` for the full grid, `@[sac-rubric-KS3]` for one key skill.

A category with no questions of its own can borrow another's with `practiceFrom: '<unitId>'`.

## How the older papers were filtered

The 2022–2024 papers were sat under the previous study design, and the copies in the revision folder mark no-longer-examinable questions with a red strikethrough. That strikethrough is a **visual** property and does not survive text extraction, so it could not be read directly.

Instead every candidate question was checked against the **2025 study design's key knowledge and key skills**, and anything testing removed material was excluded — which is what the red lines encode. Borderline cases were dropped rather than kept. Excluded topics:

- development models (agile, waterfall, spiral, build-and-fix)
- goals and objectives of *information systems*
- characteristics of data integrity (accuracy, authenticity, reasonableness, timeliness)
- associative arrays and hash tables
- networks, bandwidth and hardware performance
- software auditing and penetration testing as named practices
- the Health Records Act 2001
- marketability as a design factor
- SQL injection as a named risk

Those papers therefore carry fewer marks here than in print. **Worth spot-checking against the original PDFs.**

## Known gaps

- VCAA does not publish multiple-choice answers for the 2022–2025 papers, so those answers and explanations are worked from the pseudocode and the study design rather than an official key. DLTV and TSSM answers come from their published solution books.
- One question (2025 Section A Q9) had four picture options that could not be reconstructed faithfully from the source PDF. It is rebuilt from the question stem, tests the same point, and is labelled **adapted** in the UI.
- The VCAA sample questions PDF in the folder is image-only and extracts to nothing, so it is not included.
- 2020 and 2021 papers are two study-design generations old and were not included.
- The Kestrel Freight Systems case study is **written for this site as practice material** — it is not a VCAA or school paper, and is labelled as such in the app.
- A StuDocu copy of another school's U4O2 SAC could not be used: the domain is blocked by the network proxy. The performance descriptors and the study design's key knowledge were used instead, which are the authoritative sources anyway.

---

Exam questions are reproduced for personal study. VCAA material is © Victorian Curriculum and Assessment Authority; trial exam material is © DLTV and © TSSM respectively; the U4O2 performance descriptors are © Virtual School Victoria. Diagrams are redrawn, not reproduced.
