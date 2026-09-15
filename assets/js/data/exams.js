/* ============================================================
   Quiz and exam definitions.
   Question lists are derived from QUESTIONS at load time so that
   adding a question to the bank automatically feeds every quiz
   it qualifies for.
   ============================================================ */

/* ---------- Full past / trial papers ---------- */

const EXAMS = [
  {
    id: 'vcaa25',
    title: 'VCAA 2025 examination',
    subtitle: 'The real thing — Thursday 13 November 2025',
    blurb: 'The official VCAA paper. Multiple choice is auto-marked; short answer questions are self-marked against worked sample responses.',
    src: 'vcaa25',
    caseStudy: `**Section C case study — rental property management**

A real estate company operating **60 agencies across Australia** offers rental property management services.

Agencies vary in how they manage rental applications. Larger agencies use dedicated applications or reports generated from a software package; **smaller agencies still use spreadsheets**. Agents handle emails with tenants and property owners, copying details into property records. Financial tasks such as rent collection and payments to owners are managed by a **separate application**. Every three months all agencies must send financial summaries and tenancy information to the finance team at head office. Collection and collation are time-consuming and sometimes lead to mistakes.

Leadership decides to move rental property management services to a **web-based application** bringing rental applications, maintenance requests, communications, inspection notices and financial reports into one platform, to improve communication, reduce manual work and prevent errors.

**The project team**

- **Kate** — project lead. Ensures the project stays on track and that the solution meets the company's needs.
- **Jack and Claire** — business analysts.
- **Jin** — financial analyst at head office, responsible for collecting and collating data from each agency (1–2 hours per agency, manually).
- **Sun and Nadia** — graphic/web designers, focused on the design of the solution.
- **John** — development lead.
- **Ben** — senior developer, working with John.

**Analysis.** Jack and Claire produce the context diagram below.

@[vcaa25-context]

**Design.** Users are classified as **property owners, property managers, head office staff or tenants**. Ben suggests a **User** class with a subclass for each group via inheritance.

@[inheritance-user]
 The team will design a **RentalProperty** object. When property managers register a property they collect:

- property details: type, number of bedrooms and bathrooms, size, **rent amount (per month)**
- address: street number, street name, city, state, postcode
- availability: when the property will be ready to rent
- additional notes

Leadership also wants to store the property's **occupancy status (true or false)**, maintenance requests and inspection schedules.`
  },
  {
    id: 'dltv25',
    title: 'DLTV Trial Examination 1',
    subtitle: 'Digital Learning and Teaching Victoria, 2025',
    blurb: 'A full trial paper written against the 2025 study design, with official sample solutions and marking notes.',
    src: 'dltv25',
    caseStudy: `**Section C case study — Tailored Software / MyPuppySchool**

**Tailored Software** is a small software house led by **Fatima**. Its organisational **goal** is to significantly increase its number of users over the next five years; a supporting **objective** is to gain 20% more users.

Fatima's team includes several **newly-hired, novice programmers**. In previous projects, code files were kept on a single computer or on a flash drive that floated around the office.

**MyPuppySchool** is a web-based solution for dog obedience schools. Key features from the solution brief:

- Dog owners can register their details
- Dog owners can update their details and register their dog(s)
- Trainers can schedule training sessions
- Dog owners can book and pay for scheduled sessions
- Trainers can mark attendance of owners and dogs

The website must work seamlessly across both desktop browsers and mobile devices. **A dedicated mobile app is out of scope due to economic constraints.**

Design work includes a use case diagram (containing an error), a mobile mock-up of the *register a dog* page, an object description and data dictionary for **DogOwner**, and pseudocode for **calculateCost**, which should apply a discount to owners who have attended **at least 5** sessions.

Later in development a **serious data breach** is discovered: customers of a *different*, already-released Tailored Software application receive third-party warnings that their passwords and PII have been compromised. Tailored Software keeps **all systems together on the same hardware**, and real customer data from the released application was found in the MyPuppySchool development environment. The programmers say they did not use existing customer data — but they did use an **experimental AI assistant** installed on the office systems to generate it.`
  },
  {
    id: 'tssm25',
    title: 'TSSM Trial Examination',
    subtitle: 'TSSM, 2025',
    blurb: 'A second full trial paper with worked solutions, covering all three sections.',
    src: 'tssm25',
    caseStudy: `**Section C case study — The Odd Box**

**The Odd Box** is a sustainable family-run food company in Victoria, managed by **Bailey**. It reduces food waste by collecting fresh but oddly shaped or imperfect fruit and vegetables from local farms. Produce meeting aesthetic standards is sold to supermarkets (**Premium**); imperfect items are sorted, packed into subscription boxes and delivered weekly to individual customers (**OddBox**).

Currently most data is entered **manually into spreadsheets** by staff — time-consuming and error-prone. Bailey has asked **Yu Xiang** to design and develop a system to improve efficiency, and Yu Xiang has asked **Maree** to work with them. Yu Xiang will start with sorting and classifying produce; Maree will start with weekly subscription orders and box contents.

**Requirements**

- Sorting and classifying produce as Premium or OddBox
- Tracking farm deliveries and produce weights
- Managing weekly subscription orders and box contents
- Generating reports on supply, demand and wastage
- Ensuring traceability for quality assurance

**Main features**

- A mobile data entry interface for staff at receiving docks
- An automated classification algorithm based on weight, shape and colour
- A database to manage inventory, orders and customer details
- Defined user roles: admin, packer, delivery staff, customers
- A dashboard for weekly statistics, trends and forecasts`
  },
  {
    id: 'vcaa24',
    title: 'VCAA 2024 examination',
    subtitle: 'Previous study design — filtered to current content',
    blurb: 'Questions from the 2024 paper that still test the 2025 study design. Anything examining removed content has been cut.',
    src: 'vcaa24',
    legacy: true,
    caseStudy: `**Section C case study — Cafe SD rewards application**

**Cafe SD** is a cafe chain. **SoDeBiz** is developing a **rewards application** for them, with **Vanja** and **Taylor** on the project.

Customers earn points on purchases and redeem them for coffee. When a customer wants to use their points, the staff member must first check that enough points are available: the application checks the **Customer ID** and displays the customer's **points balance**.

Customers can redeem points at **any Cafe SD store**, so transactions must be saved in a **central location** and a customer's current balance retrieved and updated from any store.

Later in the project Cafe SD decides customers should be able to order **other menu items**, not just coffee — a change from the original plan.`
  },
  {
    id: 'vcaa23',
    title: 'VCAA 2023 examination',
    subtitle: 'Previous study design — filtered to current content',
    blurb: 'A strong paper for algorithms, DFDs, data dictionaries and third-party API risk. Removed-content questions excluded.',
    src: 'vcaa23',
    legacy: true,
    caseStudy: `**Section C case study — AI transcription and translation platform**

A **software-as-a-service** business in Melbourne, with offices around the world, provides productivity and project-management software. It has decided to offer **translation and transcription services using artificial intelligence**.

**Ness** is the development leader. Her team is mostly Melbourne-based, with some staff working remotely overseas. The project runs in three phases:

- **Phase 1:** User profile (including authentication) module
- **Phase 2:** Transcription module
- **Phase 3:** Translation module

**Secure development practices** Ness will implement:

- two-factor authentication (password and swipe card) for office spaces and devices
- logs recording user access to office spaces and the development environment, including failed attempts
- ongoing professional learning about secure development practices
- ongoing code auditing for security vulnerabilities, industry standards and legal requirements

**Phase 1.** Users sign up with name, email address and billing information, then verify their email by clicking a link in a confirmation email. Once verified they log in with email and password. Because of the size of the business, the team is required under the **Privacy Act 1988** to protect users' personal details from unauthorised access and misuse.

**Phase 2.** Two alternative designs for the transcription module interface have been produced, to be judged against three criteria: the design follows common layout conventions for easy navigation; uses standard symbols to communicate functions; and minimises typing to be more efficient across a range of devices.

**Phase 3.** Translation initially supports five languages (Chinese, English, French, Arabic, Spanish), with 50 intended eventually. Because of a delay, a **third-party AI translation service** will be accessed via **API** requests so the platform can be released on time.`
  },
  {
    id: 'vcaa22',
    title: 'VCAA 2022 examination',
    subtitle: 'Previous study design — filtered to current content',
    blurb: 'Good coverage of DFD rules, use case relationships, validation and test tables. Removed-content questions excluded.',
    src: 'vcaa22',
    legacy: true,
    caseStudy: `**Section C case study — IszCool Canteen**

**Shane** has just finished a software engineering degree. Recalling long canteen queues at school, he and his friends started **IszCool Solutions** to develop an online canteen ordering system called **IszCool Canteen**. As a start-up with limited funds they mostly **work from home**, sometimes using a shared meeting room at a local business hub.

Shane's former school, **Centurion Secondary College**, has approved development of a prototype. If successful, IszCool Solutions will sell the software to other schools.

**Features**

- Parents create an account and add credit to it.
- Parents and students enter orders for that day, or pre-orders for the next week.
- Parents set a **daily limit** to stop students ordering too much.
- Students collect orders by scanning their **student ID card**, setting the order status to *waiting*.
- A separate canteen version of the app lists *waiting* orders; staff click an order to set it to *completed*.

**School council requests**

- Orders allocated to either recess or lunch collection.
- Orders cannot be edited by parents or students after 8.30 am on the day of collection.
- If an item is unavailable, canteen staff can substitute it or refund that item.
- Orders can be collected only by the student with their ID card.

**File handling.** Staff are expected to save all project files and data on a **shared drive**. Several modules are developed simultaneously, with copies installed on various notebooks and desktops for testing and editing — and there have been issues with **unauthorised copies** being accessed by people outside the development team.`
  }
];

/* ---------- Section metadata ---------- */

const SECTION_META = {
  A: { name: 'Section A', desc: 'Multiple-choice questions, 1 mark each', marks: 20 },
  B: { name: 'Section B', desc: 'Short-answer questions', marks: 20 },
  C: { name: 'Section C', desc: 'Case study — short and extended answer', marks: 60 }
};

/* ---------- Practice quiz presets ---------- */

const QUIZZES = [
  {
    id: 'mc-drill',
    title: 'Section A rapid drill',
    blurb: 'Every multiple-choice question in the bank, shuffled. Best single warm-up before a practice exam.',
    icon: '⚡',
    pick: function () { return QUESTIONS.filter(function (q) { return q.type === 'mcq'; }); },
    shuffle: true
  },
  {
    id: 'u3a1',
    title: 'Unit 3 AoS 1 — Programming',
    blurb: 'Data types, structures, sources, OOP, validation, errors, algorithms and design tools.',
    icon: '💾',
    pick: function () { return questionsForUnit('u3a1'); },
    shuffle: true
  },
  {
    id: 'u3a2',
    title: 'Unit 3 AoS 2 — Analysis and design',
    blurb: 'Briefs, Gantt charts, DFDs, use case diagrams, the SRS, legal duties, UX and design principles.',
    icon: '📐',
    pick: function () { return questionsForUnit('u3a2'); },
    shuffle: true
  },
  {
    id: 'u4a1',
    title: 'Unit 4 AoS 1 — Development and evaluation',
    blurb: 'Alpha and beta testing, evaluation strategies, project monitoring and scope creep.',
    icon: '🔧',
    pick: function () { return questionsForUnit('u4a1'); },
    shuffle: true
  },
  {
    id: 'u4a2',
    title: 'Unit 4 AoS 2 — Cyber security',
    blurb: 'Vulnerabilities, security controls, threat modelling, legislation, frameworks and ethics.',
    icon: '🔐',
    pick: function () { return questionsForUnit('u4a2'); },
    shuffle: true
  },
  {
    id: 'past-papers',
    title: 'Past VCAA papers only',
    blurb: 'Every question drawn from the 2022, 2023 and 2024 examinations, filtered to the current study design.',
    icon: '\ud83d\uddc3\ufe0f',
    pick: function () {
      return QUESTIONS.filter(function (q) { return ['vcaa22', 'vcaa23', 'vcaa24'].indexOf(q.src) >= 0; });
    },
    shuffle: true
  },
  {
    id: 'written',
    title: 'Written response workout',
    blurb: 'Short and extended answer questions only, with worked sample responses to mark yourself against.',
    icon: '✍️',
    pick: function () { return QUESTIONS.filter(function (q) { return q.type === 'short'; }); },
    shuffle: true
  }
];

/* ---------- Lookups ---------- */

function getExam(id) {
  return EXAMS.find(function (e) { return e.id === id; }) || null;
}

function getQuiz(id) {
  return QUIZZES.find(function (q) { return q.id === id; }) || null;
}

function examQuestions(examId, section) {
  return QUESTIONS.filter(function (q) {
    return q.src === examId && (!section || q.section === section);
  });
}
