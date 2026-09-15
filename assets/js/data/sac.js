/* ============================================================
   Unit 4 Outcome 2 — School-assessed coursework
   ------------------------------------------------------------
   SAC technique, mapped section by section onto the Virtual
   School Victoria performance descriptors. The subject knowledge
   itself lives in the Unit 4 AoS 2 articles; this category is
   about turning that knowledge into banded marks.

   Pushed into CURRICULUM immediately after Unit 4 AoS 2.
   ============================================================ */

(function () {
  'use strict';

  var SAC = {
    id: 'sac',
    code: 'U4O2 SAC',
    title: 'Cyber security SAC: responding to the case study',
    blurb: 'The 100-mark outcome task. What each of the three sections is marked on, what separates a Medium answer from a Very High one, and a full worked case study with model responses.',
    color: 'var(--exam)',
    practiceFrom: 'u4a2',
    lessons: [

    {
      id: 'sac-overview',
      title: 'How the U4O2 SAC is marked',
      summary: 'The outcome, the three sections, the five key skills and the band scale.',
      kk: ['U4A2 KS1–KS5'],
      body: `
        This outcome is assessed by a **school-assessed coursework task built around a case study your teacher
        provides**. You are not being asked to recall the study design — you are being asked to *apply* it to one
        specific organisation.

        @[sac-outcome]

        Read that sentence carefully, because it is the task: **analyse** the organisation's practices,
        **identify and evaluate** its security controls and threats, and **make recommendations**. Three verbs,
        three sections, and the marks follow them.

        ## The three sections

        | Section | What it covers | Key skills |
        | --- | --- | --- |
        | **1. Analysis** | The organisation's current software development practices, then the vulnerabilities and risks those practices create | KS1, KS2 |
        | **2. Evaluation** | Criteria applied to those practices, plus the legal and ethical consequences | KS3, KS4 |
        | **3. Recommendations** | Mitigations that fix what you found, justified | KS5 |

        The outcome contributes **100 marks**. Bands: Very low 1–20, Low 21–40, Medium 41–60, High 61–80,
        Very high 81–100.

        ## The full performance descriptors

        Everything you are marked on is below. Use the band buttons to see exactly what one band demands before
        you write — then check your draft against it afterwards.

        @[sac-rubric]

        ## The single most useful thing to notice

        Look down any column and then across any row. **The content barely changes between bands — the verb
        does.**

        | Band | Typical verb | What that actually means |
        | --- | --- | --- |
        | Very low | *identifies* | You named the thing |
        | Low | *outlines* | You named it and gave its main features |
        | Medium | *describes / discusses* | You explained how it works in this organisation |
        | High | *explains / analyses / applies* | You showed cause and effect, or ran your criteria and reached a verdict |
        | Very high | *analyses / justifies* | You connected it to the organisation's goals, objectives or an industry framework |

        A student who writes "The company does not use multi-factor authentication" has *identified* a
        vulnerability — Very low. The same student who writes "Because the repository is protected by passwords
        alone, a single phished credential gives an attacker commit access to the fleet-tracking codebase, which
        would let them push malicious code into a product used by a government client — directly threatening the
        company's stated objective of winning a further three government contracts this financial year" has
        *analysed* it, connected it to a goal, and is writing in the Very high band. **Same fact. Four bands
        apart.**

        > [exam] **The two linkage moves that carry the top band.** Almost every Very high descriptor asks you to
        connect back to something: KS1 to *goals and objectives*; KS2 to *impact on the organisation*; KS5 to
        *industry frameworks*. Before you submit, highlight every place you have named a goal, an objective, an
        Act or a framework. If a section has none, it is capped below Very high no matter how correct it is.

        ## A workable order to write in

        1. **Mine the case study first.** Before writing anything, list the organisation's goals, its objectives,
           every current practice, every control it has, every control it is missing, and every incident
           described. Most case studies plant one hook per key skill.
        2. **Write Section 1 analysis.** Practices first, then vulnerabilities — the vulnerabilities must arise
           from the practices you just described, not from a generic list.
        3. **Write Section 2 evaluation.** Your criteria should test the practices from Section 1; the legal and
           ethical consequences should follow from the vulnerabilities in Section 1.
        4. **Write Section 3 recommendations.** Every recommendation must fix something you named in Section 1.
        5. **Do a linkage pass.** Goals, objectives, Acts, frameworks.

        > [tip] The sections are meant to chain. A marker reading Section 3 should be able to point back to the
        exact vulnerability in Section 1 that each recommendation closes. If a recommendation fixes a problem you
        never identified, it reads as a memorised list — and it will be marked as one.
      `
    },

    {
      id: 'sac-analysis',
      title: 'Section 1 — Analysing practices and vulnerabilities',
      summary: 'KS1 and KS2: what the organisation does now, and what that exposes it to.',
      kk: ['U4A2 KS1', 'U4A2 KS3'],
      body: `
        Section 1 has two halves and they are marked separately. Do not blur them together.

        ## KS1 — Analyse and describe the organisation's software development practices

        @[sac-rubric-KS1]

        ### What to cover, in order

        **1. Goals and objectives.** Start here, because the Very high descriptor for this skill needs them and
        so does KS5 later. Pull them straight from the case study.

        - A **goal** is broad and long-term, and not necessarily measurable. *"Become the leading provider of
          fleet-management software in Australia."*
        - An **objective** is specific and **measurable**, and serves a goal. *"Win three further government
          contracts this financial year."*

        Write both, and say which objective serves which goal. That one sentence clears the Low descriptor and
        sets up every linkage you make later.

        **2. In-house or external development.** The Medium descriptor asks explicitly for the **advantages and
        disadvantages** of the approach the organisation has taken. Answer for *this* organisation:

        | | Advantages | Disadvantages |
        | --- | --- | --- |
        | **In-house** | Full control of code and process; developers understand the organisation's data and workflows; sensitive data never leaves the organisation; retains the IP and the expertise; faster response to change | Higher up-front staffing and training cost; may lack specialist security skills; diverts staff from other work |
        | **External** | Access to specialist expertise; often faster; no permanent headcount; contracted, predictable cost | Personal information is disclosed to a third party (Privacy Act exposure); the contractor may claim IP; less direct control; ongoing dependence; supply-chain risk from their code |

        **3. Current security controls.** Name each one the case study mentions, then say **how it protects**
        either the development practice or the data in the application. The Low descriptor wants both — practices
        *and* the data stored within the applications.

        **4. Threat modelling principles.** Named explicitly from the Medium band up, and the place most students
        drop marks because they forget it exists. Say which of the three principles the organisation actually
        performs:

        - **Defining security requirements** — did they decide what needed protecting before building?
        - **Identifying and mitigating threats** — do they systematically work out what could go wrong?
        - **Confirming threats have been mitigated** — do they verify the controls actually work?

        Most case-study organisations do one of these partially and skip the third entirely. Saying so *is* the
        analysis.

        ### The sentence shape that reaches Very high

        > *"[Control] protects [practice or data] by [mechanism]. This supports the organisation's objective of
        [objective] because [consequence if it failed]."*

        Worked: *"Role-based access control on the deployment pipeline protects the production environment by
        ensuring only the two release engineers can push a build. This supports Kestrel's objective of
        maintaining 99.9% platform availability, because an unreviewed build reaching production is the most
        likely cause of an unplanned outage."*

        ## KS2 — Identify and describe vulnerabilities and risks

        @[sac-rubric-KS2]

        ### Work from the practices, not from a list

        Every vulnerability you name must be traceable to something the case study says. The examinable
        vulnerability list is your checklist for *reading* the case study, not a list to copy out.

        | If the case study says… | The vulnerability is… |
        | --- | --- |
        | "all systems run on the same servers" | combined development, testing and production environments |
        | "developers share a login" / "no MFA" / "accounts stay active after staff leave" | poor identity and access management |
        | "updates are applied when there is time" | unpatched software |
        | "code is merged as soon as it compiles" | ineffective code review practices |
        | "the team used a free library from a public repository" | risks from software acquired by third parties |
        | "a developer copied the customer table into the test database" | insider threat (careless, not malicious) + combined environments |
        | "staff connect from cafés over public Wi-Fi" | man-in-the-middle attack |
        | "an employee clicked a link in an email" | malware / social engineering |
        | "they trialled an AI assistant on the office machines" | risks from third-party software; possible data disclosure |

        ### The three-move structure that reaches the top band

        Each vulnerability gets three sentences, and each sentence is worth a band:

        1. **Name it** *(Very low)* — using the study design's term, not a paraphrase.
        2. **Explain the mechanism** *(High)* — how it actually compromises the development practice or the data.
        3. **State the organisational impact** *(Very high)* — what it costs *this* organisation.

        Worked example:

        > **Combined development, testing and production environments.** Kestrel runs all three on the same
        > server cluster, so untested code and live customer data occupy the same machines. *(named)*
        >
        > This compromises development practice because a change that has not passed testing can reach the live
        > platform directly, and it compromises the data because developers and contractors working in the
        > development environment can read production records — including driver licence numbers — that their
        > role does not require. *(mechanism)*
        >
        > For Kestrel this has already materialised: the March incident exposed 4,000 driver records, triggering
        > a notifiable data breach assessment under the Privacy Act 1988 and the loss of the Northern Logistics
        > renewal. Because the government contract requires ISM-aligned separation of environments, the practice
        > also directly threatens the objective of winning three further government contracts. *(impact)*

        > [tip] If the case study describes an incident that **has already happened**, use it. The Very high
        > descriptor says "could impact/**have impacted**" — an incident in the stimulus is the strongest
        > possible evidence of impact, and it is there because the writer wants you to connect it.

        ## Risks versus vulnerabilities

        Both words appear in the descriptors, and they are not synonyms.

        - A **vulnerability** is the weakness itself — no MFA on the repository.
        - A **risk** is the combination of a threat exploiting that weakness, with a **likelihood** and an
          **impact** — "an attacker obtains a developer credential by phishing and pushes malicious code:
          moderate likelihood, major impact."

        Naming both, and rating the risk, is what turns an *outline* into a *discussion*.
      `
    },

    {
      id: 'sac-evaluation',
      title: 'Section 2 — Evaluating practices, law and ethics',
      summary: 'KS3 and KS4: criteria you actually apply, and consequences you actually resolve.',
      kk: ['U4A2 KS2', 'U4A2 KS4'],
      body: `
        ## KS3 — Propose *and apply* criteria

        @[sac-rubric-KS3]

        The whole skill turns on one word. **Medium proposes criteria. High applies them.** Most students write a
        beautiful set of criteria, never use them, and cap themselves at Medium.

        ### A criterion that works has three parts

        1. **The question** — phrased so it can be answered.
        2. **The measure** — what you would count or inspect.
        3. **The data source** — where that measurement comes from.

        Weak: *"Is the code secure?"* — unanswerable, unmeasurable.

        Strong: *"Is the code repository accessed only by currently authorised personnel? Measured by comparing
        the repository's access list against the current staff register, and reviewing the audit log for access
        by departed employees."*

        ### A criteria set that covers the whole outcome

        Pick five or six that match the practices you described in Section 1 — not a generic set.

        | Criterion | Measure | Data source |
        | --- | --- | --- |
        | Are development, testing and production environments separated? | Whether production data appears in non-production databases; whether the three run on shared hardware | System architecture documentation; database inspection |
        | Is repository access restricted to current, authorised staff? | Accounts with write access vs the current staff register; MFA enrolment rate | Repository audit logs and access configuration |
        | Is all code reviewed before release? | Proportion of merges with a recorded second reviewer | Repository merge history |
        | Are systems patched promptly? | Mean days between a patch's release and its deployment | Patch-management records |
        | Is sensitive data encrypted at rest and in transit? | Whether database encryption is enabled; whether all endpoints enforce TLS | Configuration settings; network logs |
        | Do staff complete secure-development training? | Completion rate; phishing-simulation click rate | Training records; simulation results |

        ### Applying them — the part that earns High and Very high

        Build a findings table. One row per criterion, with a **verdict**. This is what "documents the findings
        clearly" means.

        | Criterion | Evidence from the case study | Finding |
        | --- | --- | --- |
        | Environments separated? | All three run on the same server cluster; production data present in the test database | **Not met** — the most serious single failure |
        | Repository access controlled? | Shared team login; no MFA; two departed contractors still hold accounts | **Not met** |
        | Code reviewed before release? | Reviews happen "when there is time"; no record kept | **Partially met** — practised informally, not enforced or evidenced |
        | Patching prompt? | Server OS two major versions behind; patches applied "during quiet periods" | **Not met** |
        | Data encrypted? | TLS on the customer portal; database unencrypted at rest | **Partially met** — in transit only |
        | Training completed? | One induction session at hire; no refresher | **Partially met** |

        Then write two or three sentences of overall judgement: *"Six criteria were applied; none was fully met.
        The failures cluster around environment separation and access management, which together account for
        both incidents described in the case study."*

        > [tip] A partially-met verdict is more sophisticated than a pass/fail. It shows you read the evidence
        rather than pattern-matching.

        ## KS4 — Legal and ethical consequences, and resolutions

        @[sac-rubric-KS4]

        Three things are assessed here and students routinely deliver one.

        ### 1. Legal — the Acts and frameworks, and their relevance

        Naming an Act is Low. **Discussing its relevance to this organisation** is Medium.

        | Instrument | Applies when | What it requires |
        | --- | --- | --- |
        | **Privacy Act 1988 (Cwlth)** | The organisation handles personal information | APP 1 transparency; APP 3 collect only what is necessary; APP 6 use only for the collected purpose; APP 8 care before overseas disclosure; APP 11 **take reasonable steps to secure it**, and destroy or de-identify it when no longer needed |
        | **Privacy and Data Protection Act 2014 (Vic)** | Victorian public sector bodies, and contractors handling their data | IPPs 1, 2, 4, 5, 9 — collection, use and disclosure, data security, openness, transborder flows |
        | **Copyright Act 1968 (Cwlth)** | Third-party code, libraries, content or AI-generated output is used | Source code is protected; using or modifying it without a licence infringes |
        | **Essential Eight** (ACSC) | Any organisation seeking a baseline | Application control, patch applications, configure macro settings, user application hardening, restrict admin privileges, patch operating systems, MFA, regular backups |
        | **Information Security Manual** (ACSC) | Organisations aligning to a government-recognised framework | Guidelines for Software Development: separate development/testing/production environments; secure software design and development; application security testing |

        **APP 11 is the workhorse.** Almost every SAC case study contains an organisation that failed to take
        reasonable steps to secure personal information. Say so explicitly, and say what "reasonable steps" would
        have looked like here.

        ### 2. Ethical — separate from legal, and separately marked

        The Medium descriptor asks you to **identify ethical issues arising due to the actions of the
        organisation**. Legal = required by law. Ethical = the right thing to do, whether or not the law compels
        it.

        | Ethical issue | What it looks like in a case study |
        | --- | --- |
        | **Ineffective security practices** | Customers had no way to assess the risk and no alternative but to trust the organisation with their data |
        | **Use of AI during development** | Over-reliance leaving the team unable to review or maintain its own product; customer data pasted into an external tool; generated code of unknown provenance |
        | **Intellectual property** | Using a contractor's or an open-source author's work without honouring the licence or attribution |
        | **Copyright** | Reusing code, images or content without a licence even where enforcement is unlikely |
        | **Disclosure and transparency** | Delaying notification of a breach, or downplaying it, to protect reputation |

        Delayed breach notification is worth calling out specifically: it is **both** a legal issue (the
        Notifiable Data Breaches scheme under the Privacy Act) **and** an ethical one (affected people could not
        act to protect themselves). Saying that explicitly demonstrates you understand the distinction.

        ### 3. Resolutions — and they must be *viable*

        The Very high descriptor asks for **viable** resolutions referenced to legislation and frameworks. Viable
        means this organisation, with its stated resources, could actually do it.

        | Consequence | Viable resolution | Referenced to |
        | --- | --- | --- |
        | Breach of APP 11 — personal information not secured | Encrypt the customer database at rest; enforce MFA; separate environments and remove production data from development | Privacy Act 1988, APP 11; ISM *Development, testing and production environments* |
        | Notifiable data breach not reported promptly | Adopt a documented incident-response plan naming who assesses a breach and a 72-hour internal escalation deadline | Privacy Act 1988, Notifiable Data Breaches scheme |
        | Personal information retained indefinitely | Set a retention schedule and securely dispose of records no longer needed | Privacy Act 1988, APP 11.2 |
        | Government client's data handled without required controls | Align the development environment to the Essential Eight maturity level required by the contract | Essential Eight; PDP Act 2014 |
        | Unlicensed third-party library in the product | Audit dependencies, replace or license the component, record licences in a register | Copyright Act 1968 |
        | AI assistant used on real customer data | Written AI-use policy: no production data in external tools, mandatory human review of generated code | Ethical; supports APP 6 and APP 8 |

        > [exam] A resolution like "improve security" is not viable — it is a wish. A resolution names **what**
        changes, **who** does it, and **which obligation it satisfies**.
      `
    },

    {
      id: 'sac-recommendations',
      title: 'Section 3 — Recommending and justifying improvements',
      summary: 'KS5: mitigations that close what you found, justified against goals and frameworks.',
      kk: ['U4A2 KS5'],
      body: `
        @[sac-rubric-KS5]

        This is a single key skill, but it carries the whole final section — and its descriptors are the most
        mechanical in the rubric, which makes them the easiest to hit deliberately.

        ## The three required ingredients

        From Medium upwards, every band lists the same three things. Your recommendations must cover **all
        three**, explicitly:

        1. **Security controls** — version control and code repositories, robust identity and access management,
           encryption, code review, regular updates and patches, separated development/testing/production
           environments.
        2. **Threat modelling principles** — defining security requirements, identifying and mitigating threats,
           confirming threats have been mitigated.
        3. **Improvement strategies** — onboarding/induction and developer training focused on secure
           development, and development of risk management plans.

        A set of recommendations that names six security controls and nothing else is capped below Medium, no
        matter how good the controls are. Label your subheadings with these three terms so the marker cannot
        miss them.

        ## The three linkage targets

        This is the part worth memorising, because it maps one-to-one onto the bands:

        | Band | Link your recommendations to… |
        | --- | --- |
        | **Medium** | how the enhanced practices let the organisation **meet its legal obligations** |
        | **High** | how they let it **meet its goals and objectives** |
        | **Very high** | how they let it **meet relevant industry frameworks** |

        These are cumulative in practice. Do all three for each recommendation and you have written across every
        band above Low.

        ## A recommendation template that hits every descriptor

        > **Recommendation:** [what changes]
        >
        > **Addresses:** [the vulnerability from Section 1]
        >
        > **How it works:** [the mechanism — what it actually prevents]
        >
        > **Impact:** [what measurably changes for the organisation]
        >
        > **Legal:** [the obligation it satisfies]
        >
        > **Goals and objectives:** [the goal or objective it supports]
        >
        > **Framework:** [Essential Eight / ISM control it aligns to]

        Worked, against the case study in the next article:

        > **Recommendation:** Separate the development, testing and production environments onto distinct
        > infrastructure, and replace all production data in non-production environments with de-identified or
        > synthetically generated test data.
        >
        > **Addresses:** the combined-environment vulnerability, and the presence of live driver records in the
        > test database.
        >
        > **How it works:** untested code can no longer reach the live platform, because deployment becomes a
        > deliberate promotion between environments rather than a save to a shared server. Developers and
        > contractors working in development can no longer read production records, because those records are not
        > there — which also removes the single largest population of people with access to customer personal
        > information.
        >
        > **Impact:** the two most serious findings from the evaluation (environment separation, access
        > management) are closed by one change. The March incident could not recur in the same form, since the
        > exposed records would not have existed in the environment that was compromised.
        >
        > **Legal:** directly addresses the APP 11 obligation under the **Privacy Act 1988** to take reasonable
        > steps to protect personal information — separating environments is exactly the kind of step a regulator
        > would consider reasonable for an organisation of Kestrel's size.
        >
        > **Goals and objectives:** supports the objective of 99.9% platform availability, because unreviewed
        > code can no longer reach production; and supports the goal of becoming the leading Australian
        > fleet-management provider, since enterprise customers increasingly require evidence of environment
        > separation during procurement.
        >
        > **Framework:** implements the **ISM** *Guidelines for Software Development — Development, testing and
        > production environments*, which the Victorian government contract requires, and supports the
        > **Essential Eight** strategy of restricting administrative privileges by narrowing who holds production
        > access.

        That is one recommendation. Three or four of that quality is a Very high Section 3.

        ## "Analyses the impact" versus "justifies the use"

        The difference between High and Very high on this skill is subtle but real.

        - **Analyses the impact** — what *changes* as a result. Cause and effect. *"MFA reduces the value of a
          stolen password to near zero, so the phishing attack described in the case study would not have
          produced repository access."*
        - **Justifies the use** — why this mitigation *rather than another*, and why it is worth the cost.
          *"MFA is the correct first control because the case study's two incidents both began with credential
          compromise, it is inexpensive relative to re-architecting the platform, and it is one of the Essential
          Eight — so it also satisfies the maturity requirement in the government contract. A password-complexity
          policy alone would not have prevented either incident, because both credentials were phished rather
          than guessed."*

        Justification weighs alternatives. If you never mention an option you rejected, you are analysing, not
        justifying.

        ## Prioritise, and say why

        A strong Section 3 is ordered. Lead with the mitigation that closes the most serious finding, and say
        that is why it is first.

        | Priority | Recommendation | Why here |
        | --- | --- | --- |
        | 1 | Separate environments; remove production data from dev/test | Closes the highest-impact vulnerability and the cause of the actual breach |
        | 2 | Enforce MFA and role-based access; revoke departed accounts | Both incidents began with credential compromise; cheap and fast |
        | 3 | Mandatory code review with recorded reviewer | Prevents defective and malicious changes reaching production |
        | 4 | Defined patching schedule | Closes known vulnerabilities; two Essential Eight strategies |
        | 5 | Threat modelling built into design; induction and ongoing training; risk management plan | Makes the first four durable rather than one-off |

        > [tip] Finish with a short paragraph on **confirming the threats have been mitigated** — audits, access
        reviews, penetration testing, re-running your Section 2 criteria after six months. It is the third threat
        modelling principle, it closes the loop on your own evaluation, and almost nobody writes it.
      `
    },

    {
      id: 'sac-case-study',
      title: 'Worked case study: Kestrel Freight Systems',
      summary: 'A full practice case study with model responses for all five key skills.',
      kk: ['U4A2 KS1–KS5'],
      body: `
        > [warn] This case study is **written for this site** as practice material. It is not a VCAA or school
        paper. It is built to contain one hook for every key skill, so you can practise the full task before your
        teacher hands you the real one.

        ## The case study

        ### Overview

        **Kestrel Freight Systems** is a Melbourne software company of 180 staff. It develops **FleetLink**, a
        fleet-management platform used by freight operators across Australia to track vehicles, manage driver
        rosters, and process customer payments. Kestrel holds a contract with a **Victorian state government
        agency** to supply FleetLink to its vehicle fleet.

        **Goal:** to become the leading provider of fleet-management software in Australia within five years.

        **Objectives for this financial year:**

        - Win three further government contracts.
        - Maintain 99.9% platform availability.
        - Grow the subscriber base by 25%.

        ### Current development practices

        FleetLink is developed **in-house** by a team of 24 developers, supplemented by **four external
        contractors** engaged during peak delivery periods. Kestrel chose in-house development when the platform
        was founded, on the basis that the team understood freight operations better than an external vendor
        would.

        - All development, testing and production systems run on **the same server cluster** in the company's
          office. Setting up separate infrastructure was deferred when the platform was small and has never been
          revisited.
        - The team uses a **cloud code repository**. The four contractors share **one team login**; the
          repository is protected by **password only**.
        - Two contractors who finished their engagement eight months ago **still have active accounts**.
        - **Code review happens "when there is time."** No record is kept of who reviewed what.
        - The server operating system is **two major versions behind**. Patches are applied "during quiet
          periods", typically once or twice a year.
        - Customer data is transmitted over **TLS** on the customer portal, but the production database is
          **not encrypted at rest**.
        - Developers testing the rostering module **copied the live driver table into the test database** so they
          would have realistic data to work with. It contains names, addresses, phone numbers and **driver
          licence numbers** for 4,000 drivers.
        - Developers frequently work from home and from cafés, connecting to the office cluster over **public
          Wi-Fi without a VPN**.
        - In January the team began trialling an **AI coding assistant** installed on office machines. Developers
          have been pasting sections of FleetLink source code into it to get refactoring suggestions. No policy
          governs its use.
        - FleetLink's mapping module uses a **third-party open-source library** downloaded from a public
          repository. Nobody checked its licence terms or reviewed its code.
        - New developers receive **one security induction session** on their first day. There is no refresher and
          no risk management plan.
        - Security requirements were never formally defined for FleetLink. The team fixes security problems as
          they are reported by customers.

        ### The March incident

        In March, a developer received an email appearing to come from the repository provider and entered the
        **shared contractor credentials** into a fake login page. The attacker used those credentials to access
        the repository, and from there reached the shared server cluster.

        **4,000 driver records were exfiltrated**, including licence numbers. Kestrel's leadership became aware
        within two days but **delayed notifying affected drivers for six weeks** while it assessed the
        reputational impact. **Northern Logistics**, a major client, did not renew its contract, citing the
        breach. The government agency has requested evidence that Kestrel's development environment meets the
        **Essential Eight** and the **Information Security Manual** before its contract is renewed.

        ---

        ## Model responses

        > [tip] Read the task first and attempt each section yourself before opening the model response. The
        > value is in comparing your structure against the model, not in reading the model.

        ### KS1 — Analyse and describe the organisation's software development practices

        **Goals and objectives.** Kestrel's **goal** is to become the leading provider of fleet-management
        software in Australia within five years — broad, long-term and not directly measurable. Three
        **objectives** serve it, each measurable: winning three further government contracts, maintaining 99.9%
        platform availability, and growing the subscriber base by 25% this financial year.

        **In-house development.** FleetLink is developed in-house with contractor supplementation. The
        **advantages** for Kestrel are real: the team's understanding of freight operations is the stated reason
        the platform succeeded, Kestrel retains the intellectual property and the domain expertise, and driver
        and payment data need never leave the organisation. The **disadvantages** are visible in the case study:
        Kestrel has no specialist security capability, which shows in the absence of defined security
        requirements and of any threat modelling; and using external contractors reintroduces the third-party
        exposure that in-house development was meant to avoid — the March breach entered through a shared
        contractor credential.

        **Current security controls.** Kestrel operates only three, and each is partial:

        - A **cloud code repository** provides version control — change history, attribution and the ability to
          roll back. This protects the development practice, but its protective value is undermined by a shared
          login and password-only authentication.
        - **TLS** encrypts customer data in transit on the portal, protecting it from interception. It does not
          protect data at rest, and the production database is unencrypted.
        - **Code review** is practised informally. Because it is conditional on available time and unrecorded, it
          cannot be relied on or evidenced to the government client.

        Several controls the study design expects are **absent entirely**: robust identity and access management
        (no MFA, shared credentials, no deprovisioning), regular updates and patches, and separated development,
        testing and production environments.

        **Threat modelling.** Kestrel performs **none of the three principles**. Security requirements were never
        defined for FleetLink, so the first principle is absent. Threats are not systematically identified —
        the team reacts to problems reported by customers rather than anticipating them. And because no controls
        were deliberately chosen against identified threats, there is nothing to confirm, so the third principle
        cannot apply.

        **How the practices relate to the objectives.** Kestrel's current practices actively work against all
        three objectives. Combined environments mean untested code can reach production directly, threatening
        **99.9% availability**. The absence of Essential Eight and ISM alignment is the stated obstacle to the
        government contract renewal, threatening **three further government contracts**. And the March breach
        cost Kestrel the Northern Logistics renewal, working against **25% subscriber growth**. The only practice
        that supports a stated objective is the in-house model itself, which keeps the product knowledge that
        drives the platform's competitive position.

        ---

        ### KS2 — Identify and describe vulnerabilities and risks

        **1. Combined development, testing and production environments.** All three run on one cluster.
        *Mechanism:* untested code can reach the live platform without passing a gate, and anyone with
        development access can read production data. *Risk:* high likelihood, major impact — this is the
        condition that turned a repository compromise into a data breach. *Impact:* the March attacker moved from
        the repository to production data in a single step. Had the environments been separate, the 4,000 driver
        records would not have been reachable.

        **2. Poor identity and access management.** A shared contractor login, password-only authentication, and
        two departed contractors with live accounts. *Mechanism:* a shared credential destroys accountability —
        Kestrel cannot tell which of four contractors an action belongs to — and password-only authentication
        means one phished credential is full access. *Impact:* this is precisely how the March breach began. Two
        dormant accounts remain an open door today.

        **3. Unpatched software.** The server OS is two major versions behind, patched once or twice a year.
        *Mechanism:* published vulnerabilities become public knowledge when a patch is released; unpatched
        systems are exploitable using documented techniques. *Impact:* the government agency's Essential Eight
        requirement names patching operating systems and applications as two of its eight strategies, so this
        single practice blocks the contract renewal.

        **4. Ineffective code review practices.** Reviews occur only when time allows and are unrecorded.
        *Mechanism:* defects and insecure patterns reach production unexamined, and a malicious change by an
        insider or a compromised account would pass unnoticed. *Impact:* Kestrel cannot produce evidence of
        review to the government client even for the reviews it did perform.

        **5. Real customer data in a non-production environment.** The live driver table was copied into test.
        *Mechanism:* it multiplies the number of people who can access personal information far beyond those
        whose role requires it, and places that data in the least-protected environment. *Impact:* the exfiltrated
        records included licence numbers — identity documents, whose loss exposes drivers to identity theft and
        Kestrel to a notifiable data breach under the Privacy Act 1988.

        **6. Man-in-the-middle exposure.** Developers connect to the cluster over public Wi-Fi without a VPN.
        *Mechanism:* traffic on an untrusted network can be intercepted, and credentials or source code captured
        in transit.

        **7. Risks from software acquired by third parties.** The mapping library was downloaded without a
        licence check or code review. *Mechanism:* unreviewed third-party code may contain vulnerabilities or
        malicious behaviour, and it inherits Kestrel's trust level once integrated. *Impact:* a licence breach
        would engage the Copyright Act 1968, and a vulnerability in the library becomes a vulnerability in
        FleetLink.

        **8. Unmanaged AI assistant.** Developers paste FleetLink source into an external AI tool with no policy.
        *Mechanism:* proprietary source code is disclosed to a third party, and generated code of unknown
        provenance enters the product. *Impact:* potential loss of IP protection over the disclosed code, and
        copyright exposure if generated code reproduces licensed material.

        **9. Insider threat.** Not malicious here, but present: the developers who copied the live driver table
        were trying to do their jobs well. *Mechanism:* untrained staff take shortcuts that defeat controls.
        *Impact:* this single well-intentioned action created the data that was later stolen.

        ---

        ### KS3 — Propose and apply criteria

        Six criteria, applied:

        | Criterion | Measure and source | Evidence | Finding |
        | --- | --- | --- | --- |
        | Are development, testing and production environments separated? | Shared hardware; production data in non-production databases — architecture documentation, database inspection | One cluster runs all three; live driver table copied into test | **Not met** |
        | Is repository access restricted to current, authorised personnel with strong authentication? | Accounts vs staff register; MFA enrolment — repository audit log and access configuration | Shared contractor login; password only; two departed accounts active | **Not met** |
        | Is all code reviewed before release, with the review recorded? | Proportion of merges with a named reviewer — repository merge history | Reviews "when there is time"; no records kept | **Partially met** |
        | Are operating systems and applications patched promptly? | Mean days from patch release to deployment — patch-management records | OS two major versions behind; patched once or twice a year | **Not met** |
        | Is personal information encrypted in transit and at rest? | TLS enforcement; database encryption setting — configuration | TLS on the portal; production database unencrypted at rest | **Partially met** |
        | Do developers receive ongoing secure-development training? | Completion rate and refresher frequency — training records | One induction session at hire; no refresher; no risk management plan | **Partially met** |

        **Overall finding.** Six criteria were applied and **none was fully met**: three failed outright and three
        were met only partially. The failures cluster into two groups — **environment separation** and **access
        management** — and those two groups together account for the entire March incident chain, from the
        phished shared credential to the exfiltration of production data. Kestrel's current software development
        practices are **not effective** at protecting either the development process or the data held in
        FleetLink.

        ---

        ### KS4 — Legal and ethical consequences, and resolutions

        **Legal consequences.**

        The **Privacy Act 1988 (Cwlth)** applies because Kestrel holds personal information about 4,000 drivers —
        names, addresses, phone numbers and licence numbers. **APP 11** requires reasonable steps to protect that
        information. An unencrypted production database, shared credentials without MFA, unpatched systems and
        live data sitting in a test environment together fall well short of reasonable steps for an organisation
        of 180 staff. APP 11 also requires destruction or de-identification of information no longer needed — the
        copy in the test database had no ongoing purpose.

        Because the exfiltrated licence numbers are likely to result in **serious harm**, this is an **eligible
        data breach** under the **Notifiable Data Breaches scheme**, requiring notification to affected
        individuals and the OAIC as soon as practicable. Kestrel's six-week delay while it assessed reputational
        impact is a separate breach of that obligation, and reputational management is not a permitted reason
        for delay.

        The **Privacy and Data Protection Act 2014 (Vic)** is relevant through the government contract: as a
        contracted service provider handling a Victorian public sector agency's data, Kestrel is bound by the
        Information Privacy Principles, particularly **IPP 4 (data security)**.

        The **Copyright Act 1968 (Cwlth)** is engaged twice: the mapping library was integrated without checking
        its licence terms, and AI-generated code of unknown provenance has entered the codebase.

        The **Essential Eight** and the **Information Security Manual** are not legislation, but they are
        contractually binding here — the agency has made evidence of alignment a condition of renewal, so failure
        against them is a commercial and contractual consequence.

        **Ethical consequences.**

        *Ineffective security practices.* Drivers never chose to trust Kestrel — their employers did. They had no
        way to assess the risk and no alternative, which places a heightened obligation on Kestrel that it did
        not meet.

        *Delayed disclosure.* This is the clearest ethical failure. For six weeks, 4,000 people whose licence
        numbers were in criminal hands could not freeze credit, watch for identity fraud or replace their
        licences — because Kestrel prioritised its own reputation over their ability to protect themselves. It is
        unlawful and, independently, wrong.

        *Use of AI during development.* Pasting proprietary source into an external tool discloses the company's
        IP to a third party without authorisation, and shipping generated code nobody fully understands erodes
        the team's ability to maintain and secure its own product.

        *Intellectual property.* Using an open-source library without honouring its licence takes the author's
        work while ignoring the only condition attached to it.

        **Resolutions.**

        | Consequence | Viable resolution | Referenced to |
        | --- | --- | --- |
        | APP 11 — personal information not secured | Encrypt the production database at rest; enforce MFA; separate environments; purge production data from test and replace it with de-identified data | Privacy Act 1988, APP 11 |
        | Personal information retained without purpose | Retention and disposal schedule, with secure deletion of the test copy | Privacy Act 1988, APP 11.2 |
        | Notification delayed six weeks | Documented incident-response plan: a named breach assessor, a 72-hour internal escalation deadline, notification decisions removed from the team responsible for reputation | Privacy Act 1988, Notifiable Data Breaches scheme |
        | Government client's data inadequately controlled | Align the development environment to the Essential Eight maturity level in the contract; adopt ISM development guidelines | Essential Eight; ISM; PDP Act 2014, IPP 4 |
        | Unlicensed third-party library | Audit all dependencies, record licences in a register, replace or properly license the mapping library | Copyright Act 1968 |
        | Ungoverned AI assistant | Written AI-use policy: no proprietary source or customer data in external tools; mandatory human review and provenance record for generated code | Copyright Act 1968; supports APP 6 and APP 8 |

        ---

        ### KS5 — Recommendations

        **Priority 1 — Separate the environments and remove production data from development and testing.**
        *(security control)*

        Provision distinct infrastructure for development, testing and production, and replace the copied driver
        table with de-identified or synthetically generated data. This closes the two highest-severity findings
        at once: untested code can no longer reach the live platform, and the population able to read customer
        personal information shrinks from the whole development team plus contractors to only production
        operators. Had this been in place in March, the attacker who obtained repository access would have found
        no production data to exfiltrate. It satisfies **APP 11** under the Privacy Act 1988, supports the
        **99.9% availability** objective by making deployment a deliberate promotion rather than a save to a
        shared server, and implements the **ISM** guideline on development, testing and production environments
        that the government contract requires.

        **Priority 2 — Robust identity and access management.** *(security control)*

        Replace the shared contractor login with individual accounts, enforce **multi-factor authentication** on
        the repository and the cluster, apply role-based permissions on the principle of least privilege, and
        revoke access immediately on departure — starting with the two dormant contractor accounts. Both
        incidents in the case study began with credential compromise, and MFA reduces the value of a phished
        password to near zero. MFA is one of the **Essential Eight**, so this also advances the contract
        requirement directly. It is the correct first control *after* environment separation because it is
        inexpensive and fast, where re-architecting takes months — and a password-complexity policy alone would
        not have prevented March, since the credential was phished rather than guessed.

        **Priority 3 — Mandatory recorded code review.** *(security control)*

        Require a second named reviewer on every merge, enforced by the repository rather than by goodwill. This
        stops defects and insecure patterns reaching production, deters malicious changes through a compromised
        account, and — because the reviewer is recorded — produces the evidence Kestrel currently cannot give the
        government client. It supports the **99.9% availability** objective by catching defects before release.

        **Priority 4 — A defined patching schedule.** *(security control)*

        Patch operating systems and applications on a documented schedule with a maximum deployment window rather
        than "during quiet periods". This closes publicly known vulnerabilities before they can be exploited and
        satisfies **two of the Essential Eight** strategies, both named in the contract condition.

        **Priority 5 — Adopt threat modelling.** *(threat modelling principles)*

        Build all three principles into the development lifecycle. **Define security requirements** for FleetLink
        and for each new module, recorded alongside the functional requirements. **Identify and mitigate threats**
        at design time, rating each by likelihood and impact so effort goes where the risk is. **Confirm threats
        have been mitigated** through scheduled access reviews, application security testing and re-running the
        six evaluation criteria above at six-monthly intervals. This changes Kestrel from reacting to
        customer-reported problems to anticipating them, and it is what makes the first four recommendations
        durable rather than a one-off clean-up.

        **Priority 6 — Training and a risk management plan.** *(improvement strategies)*

        Extend induction into an ongoing program covering phishing recognition, what data may be used in
        development, the AI-use policy and the code review process, with periodic refreshers and phishing
        simulation. Develop a **risk management plan** identifying each risk, rating it, assigning a mitigation
        and an owner, and setting a review cycle. The case study's two most damaging events — the phished
        credential and the copied driver table — were both caused by staff behaviour rather than by a technical
        control failing, so training addresses the actual cause. A documented plan also survives staff turnover,
        which matters for a company that relies on rotating contractors.

        **Overall justification.** These six recommendations close every finding from the evaluation. Together
        they let Kestrel meet its **legal obligations** under the Privacy Act 1988 and the PDP Act 2014; they
        serve its **objectives** of 99.9% availability, three further government contracts and 25% subscriber
        growth — the last because demonstrable security is now a procurement requirement in freight; and they
        align the development environment to the **Essential Eight** and the **Information Security Manual**, the
        two frameworks the government agency has made a condition of renewal.

        ---

        ## Practise it properly

        Attempt the whole task under timed conditions before you read any of the model responses again. Then mark
        yourself against the descriptors, band by band, and write down the single sentence that would have moved
        each section up one band.

        @[sac-rubric]
      `
    }
    ]
  };

  /* Insert immediately after Unit 4 AoS 2, before the exam-skills category. */
  var at = CURRICULUM.findIndex(function (u) { return u.id === 'u4a2'; });
  if (at < 0) CURRICULUM.push(SAC);
  else CURRICULUM.splice(at + 1, 0, SAC);
})();
