/* ============================================================
   Trial-paper questions restored
   ------------------------------------------------------------
   Section C questions from the two 2025 company trial papers
   (DLTV Trial Exam 1, TSSM Trial Exam) that were skipped on the
   first pass because their stimulus is an image in the source
   PDF. These five need no diagram — they read entirely off the
   case study, which is already stored in exams.js.

   Still not included, because the question cannot be answered
   without a figure that would have to be invented rather than
   reproduced:
     DLTV C2   Gantt chart — names the tasks at labels i, ii, iii
     DLTV C4   use case diagram containing a deliberate error
     TSSM C6   test table against the classification pseudocode
     TSSM C7   completing the average-weight pseudocode
     TSSM C3b  purpose of the function in that pseudocode

   Sample answers follow the published solution books.
   ============================================================ */

QUESTIONS.push(

/* ---------- DLTV Trial Exam 1, 2025 — Section C ---------- */
{
  id: 'dltv25-c3', src: 'dltv25', section: 'C', type: 'short', marks: 6, unit: 'u3a2', topic: 'srs',
  stimulus: `The software requirements specification (SRS) for MyPuppySchool is starting to take shape.`,
  stem: "a. Identify two functional requirements from the solution brief. b. Identify a non-functional requirement belonging to the category of portability. c. The SRS states that 'a dedicated mobile app for MyPuppySchool is out of scope due to economic constraints'. Interpret the statement to clarify whether MyPuppySchool will have a dedicated app.",
  sample: `**a.** Any two of the features named in the solution brief — each is something the system must **do**:

- Dog owners can **register their details**.
- Dog owners can **update their details and register their dog(s)**.
- Trainers can **schedule training sessions**.
- Dog owners can **book and pay for** scheduled sessions.
- Trainers can **mark attendance** of owners and dogs.

*1 mark each, to a maximum of 2.*

**b.** *Portability* is about the solution running across different platforms and devices, so: **the website must work seamlessly across both desktop browsers and mobile devices.**

**c.** Three moves, one mark each:

- **'Out of scope'** means the feature will **not be implemented** as part of this project — it sits outside the agreed boundary of what is being built.
- **'Economic constraints'** are the financial limitations affecting the project — the budget available will not stretch to it.
- Therefore **MyPuppySchool will not have a dedicated mobile app**, because building one was judged too costly. Mobile users are served by the responsive website instead.

> [tip] Part c is a *command term* question — "interpret" means unpack the words in the quote and then state what follows for this organisation. Answering only "no, it will not have an app" scores 1 of 3.`
},
{
  id: 'dltv25-c11', src: 'dltv25', section: 'C', type: 'short', marks: 2, unit: 'u4a1', topic: 'evaluation',
  stimulus: `Three months after the release of MyPuppySchool, Fatima prepares to evaluate the success of the software application.`,
  stem: 'For each of the following criteria, describe one appropriate technique that can be applied to evaluate it. a. Accuracy — how often the software makes mistakes. b. Attractiveness — whether customers find the interface comforting to use.',
  sample: `**a. Accuracy.** Check the records of the **dedicated helpdesk** for MyPuppySchool for logged problems and complaints, counting reports of incorrect behaviour — wrong session costs, attendance marked against the wrong dog, failed payments — over the three months since release. The system's **error logs** serve the same purpose.

**b. Attractiveness.** **Interview users** — both the obedience schools and the dog owners — or survey them, asking directly how the interface feels to use. Attractiveness is a *subjective* quality, so it has to be measured by asking people rather than by counting events.

> [exam] Notice the pairing: an **objective** criterion is evaluated from **records the system already produces**; a **subjective** one is evaluated by **asking users**. Matching the technique to the kind of criterion is what earns the mark.`
},

/* ---------- TSSM Trial Exam, 2025 — Section C ---------- */
{
  id: 'tssm25-c1', src: 'tssm25', section: 'C', type: 'short', marks: 4, unit: 'u3a2', topic: 'srs',
  stem: 'a. Identify two functional requirements for produce management. b. Identify one non-functional requirement for performance and reliability. c. Identify one non-functional requirement for usability.',
  sample: `**a. Functional — what the system must do:**

1. The system must **sort and classify produce as either Premium or OddBox** based on weight, shape and colour.
2. The system must allow **manual or automated entry of produce attributes** when a delivery is received.

*(Also acceptable from the requirements list: track farm deliveries and produce weights; manage weekly subscription orders and box contents; generate reports on supply, demand and wastage; ensure traceability for quality assurance.)*

**b. Non-functional — performance and reliability:** the system must handle **real-time data entry without lag on mobile devices** at the receiving docks. *(Or: the system must be available **99.9% of the time**, especially during packing and delivery windows.)*

**c. Non-functional — usability:** the mobile interface must be **intuitive and accessible to non-technical warehouse staff**. *(Or: the admin dashboard must present easy-to-read visual reports and alerts.)*

> [tip] The test is grammatical as much as conceptual. A functional requirement completes "*the system must **do**…*"; a non-functional one completes "*the system must **be**…*". If your answer names a feature, it is functional; if it describes a quality of the whole solution — speed, uptime, ease of use, portability — it is non-functional.`
},
{
  id: 'tssm25-c3', src: 'tssm25', section: 'C', type: 'short', marks: 2, unit: 'u3a1', topic: 'language-features',
  adapted: true,
  stem: 'Explain what a function is.',
  sample: `A function is a **named block of code that performs one specific task**, written once and then **called** by name whenever that task is needed, instead of the same instructions being rewritten each time.

A full-mark answer usually adds what passes in and out: a function can accept **parameters** (the values it works on) and **return** a result to the code that called it.

Why it matters beyond the definition: functions give **reuse** (write once, call many times), **readability** (a descriptive name states intent in one line) and **maintainability** (a fix is applied in one place rather than everywhere the code was duplicated).

> [exam] This is the standalone half of TSSM 2025 Section C Question 3. Part b asked for the purpose of a specific classification function shown as pseudocode in the paper; that image could not be reproduced, so only part a appears here — hence the **adapted** label.`
},
{
  id: 'tssm25-c15', src: 'tssm25', section: 'C', type: 'short', marks: 2, unit: 'u4a1', topic: 'evaluation',
  stem: 'Provide two criteria for assessing the effectiveness of the solution.',
  sample: `Any two criteria that test whether the solution **does its job**, phrased so they can actually be answered:

- **Is the produce classification accurate?** — the proportion of deliveries the system classifies as Premium or OddBox correctly, checked against a manual sample.
- **Does the solution meet the needs of its users?** — whether dock staff, packers and Bailey can complete their tasks without falling back to spreadsheets.
- **Is the interface intuitive?** — whether non-technical warehouse staff can enter a delivery without assistance after a single training session.
- **Are the weekly reports complete and readable?** — whether supply, demand and wastage figures are produced without manual assembly.

> [warn] Keep **effectiveness** and **efficiency** apart. Effectiveness asks *does it do the job* — accuracy, completeness, usability, readability. Efficiency asks *what does it cost to do* — time taken per delivery, staff hours saved, processing speed. A question asking for effectiveness criteria earns nothing for "it is faster than the spreadsheets".`
}

);
