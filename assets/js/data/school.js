/* ============================================================
   Virtual School Victoria — Unit 4 weekly activities
   ------------------------------------------------------------
   Source material supplied by the student: the Week 9, 10, 11 and
   12 activity sheets. CodeWave Solutions is the case study VSV
   runs across Weeks 10 and 11, so it gets the full five-key-skill
   SAC treatment here.

   Adds two lessons to the U4O2 SAC category and a set of written
   -response questions to the Unit 4 AoS 2 bank.
   ============================================================ */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     Lessons
     --------------------------------------------------------- */

  var LESSONS = [

  {
    id: 'sac-codewave',
    title: 'School case study: CodeWave Solutions',
    summary: 'Your own course case study, run through all five key skills as a SAC rehearsal.',
    kk: ['VSV Weeks 10–11', 'U4A2 KS1–KS5'],
    body: `
      > [exam] **This is the case study your course actually uses.** It appears in both the Week 10 and Week 11
      activity sheets, which means the topics it plants are the ones your teacher has decided matter. Whether or
      not the SAC uses CodeWave itself, rehearsing all five key skills against it is the closest practice you can
      get.

      ## The case study

      **CodeWave Solutions** is a small but fast-growing Australian software development company building custom
      applications for clients in retail, education and logistics. Its main development office is an open-plan
      workspace with a small server room at the back that also doubles as storage for old equipment.

      - The team frequently uses **third-party APIs** — payment processing, location tracking — integrated
        **without thorough vetting or security testing**, because deadlines are tight. **Unused APIs are left
        active** long after they are needed.
      - Development, testing and production **all run on the same servers**. Developers can push changes live
        quickly, but untested code can break systems or introduce vulnerabilities.
      - **Code reviews are meant to happen but are often skipped or done hastily.**
      - Applications rely on **open-source components that are not kept up to date**. Security patches are
        delayed for weeks or months. This has already caused minor incidents where known vulnerabilities were
        exploited by automated malware scans.
      - Access uses **username and password only**. MFA is not enforced, staff **reuse passwords** across
        platforms, access rights are never reviewed, and **former employees may still hold credentials**.
      - Antivirus exists but is **not centrally managed**; some machines have outdated or expired software.
        There is **little network monitoring**, so a man-in-the-middle attack would be hard to detect.
      - **Freelance developers** contribute code remotely, sometimes over **unsecured public Wi-Fi**. There is no
        policy verifying that external contributors follow secure practices.
      - A **security awareness program was planned but never implemented**. One junior developer clicked a link
        in a fake invoice email that almost caused a ransomware infection.
      - The "open and trusting" culture means **sensitive files sit in shared folders with minimal
        restrictions** — a disgruntled employee could copy confidential code or client data undetected.

      CodeWave has never had a major breach, but as it takes on higher-profile clients the stakes are rising.

      ### Week 11 adds two more threads

      **The customer questionnaire.** Lucas, CodeWave's founder, has an online questionnaire clients complete so
      he can recommend suitable packages. He **downloads the responses as a CSV to his laptop** and keeps them
      there.

      **The Emotet infection.** A developer, Mia, opened an email titled *"support wildfire relief efforts"* with
      a Word attachment carrying the **Emotet Trojan**. Her machine then spammed her whole contact list,
      including CodeWave's clients and staff. A scan also found **cryptomining malware and malicious adware**.

      ## Mining the case study

      Before writing anything, do the extraction pass. CodeWave is unusually generous — it plants **nine of the
      ten** named vulnerabilities:

      | Named vulnerability | The sentence that plants it |
      | --- | --- |
      | Use of APIs | "third-party APIs … integrated without thorough vetting"; "unused APIs are left active" |
      | Malware | "automated malware scans"; the Emotet Trojan; cryptomining malware and adware |
      | Unpatched software | "open-source components … not always kept up to date"; "patches delayed for weeks or months" |
      | Poor identity and access management | "username-and-password"; "MFA is not enforced"; "reuse passwords"; "former employees may still have credentials" |
      | Man-in-the-middle attacks | "little monitoring of network activity"; freelancers on "unsecured public Wi-Fi" |
      | Insider threats | "open and trusting culture"; "shared folders with minimal restrictions" |
      | Cyber security incidents | "minor incidents where known vulnerabilities were exploited"; the Emotet infection |
      | Risks from third-party software | third-party APIs and open-source components, unvetted |
      | Ineffective code review | "code reviews … often skipped or done hastily" |
      | Combined dev/test/production | "development, testing, and production all run on the same servers" |

      > [tip] The only one not explicitly planted is a *deliberate* insider act — CodeWave's insider risk is
      described as **potential**, not realised. Saying that precisely ("the insider threat here is latent rather
      than materialised") is the kind of distinction that reads as analysis.

      ## KS1 — Analysing the practices

      **Goals and objectives.** CodeWave's case study is thin here, and that is worth noticing rather than
      glossing over. The stated direction — *"small but fast-growing"*, *"taking on more high-profile clients"*
      — is a **goal**: grow the business and move upmarket. **No measurable objectives are stated.** In a SAC you
      would say so explicitly and infer: an objective consistent with that goal would be winning a stated number
      of high-profile clients, or achieving the security posture those clients require during procurement.

      That inference is not padding — it sets up every linkage in KS5. If you cannot name a goal, you cannot
      reach the Very high band on KS1 or KS5.

      **In-house or external.** CodeWave develops **in-house, supplemented by freelancers**. Advantages: the team
      controls its own delivery and holds the client relationships and domain knowledge. Disadvantages, all
      visible: no specialist security capability (which is why nothing is vetted, patched or reviewed), and the
      freelance model reintroduces third-party exposure — remote contributors on unsecured networks, with no
      policy verifying their practices.

      **Current security controls.** CodeWave has very few, and each is defective:

      | Control | Present? | Assessment |
      | --- | --- | --- |
      | Version control / repository | Implied, not described | Cannot be relied on as a control if not described |
      | Identity and access management | **Password only** | No MFA, shared reuse, no deprovisioning, no review — effectively absent |
      | Encryption | Not mentioned | Absent |
      | Code review | **Nominally in place** | "Often skipped or done hastily" — a policy, not a control |
      | Updates and patches | **Delayed weeks to months** | Present in principle, ineffective in practice |
      | Separated environments | **No** | All three on the same servers |
      | Antivirus | **Yes, but** not centrally managed, some expired | Partially effective |

      **Threat modelling.** CodeWave performs **none of the three principles**. Security requirements are never
      defined (APIs go in without vetting, code without review). Threats are not identified in advance —
      incidents are discovered after the fact by automated scans or by a developer clicking a link. And nothing
      is verified: there is no monitoring, no audit, no testing.

      That absence is the **root cause** of everything else. Saying so converts a list of faults into an analysis:

      > *"CodeWave's security posture is not the result of bad decisions but of no decisions. Because security
      > requirements were never defined and threats never identified, its controls accumulated by habit rather
      > than by design — which is why it has antivirus (a default) but no MFA (a choice), and why the practices
      > that fail are exactly the ones that require someone to have thought about them in advance."*

      ## KS2 — Vulnerabilities, risks and impact

      Take three or four and go deep rather than listing nine shallowly. The strongest for CodeWave:

      **Combined environments.** Untested code reaches production with no gate, and everyone with development
      access can reach live client data. For a company whose entire product is *custom applications for clients*,
      a single bad push damages a client's system, not just CodeWave's — which is the reputational risk the case
      study closes on.

      **Poor identity and access management.** Password-only, reused across platforms, never reviewed, with
      former employees retaining credentials. The risk: a credential compromised in *any unrelated breach*
      anywhere on the internet grants access to CodeWave's client projects. Likelihood high, impact major. Emotet
      already demonstrated that CodeWave's staff will click.

      **Unvetted and abandoned third-party APIs.** Each unvetted API inherits CodeWave's trust and its clients'
      data. **Unused APIs left active** are worse than unused — they are unmonitored attack surface nobody
      remembers to patch.

      **Realised impact.** Use what has actually happened: known vulnerabilities **already exploited** by
      automated scans; the Emotet infection which spammed **clients and staff**, meaning CodeWave's security
      failure directly reached its customers' inboxes; and cryptomining malware, which means an attacker held
      execution on company machines and chose to monetise it — this time.

      ## KS3 — Criteria, applied

      | Criterion | Evidence | Finding |
      | --- | --- | --- |
      | Are dev, test and production separated? | All three on the same servers | **Not met** |
      | Is access controlled with strong authentication and reviewed? | Password only, no MFA, reuse, no review, ex-staff retain credentials | **Not met** |
      | Is all code reviewed before release? | "Often skipped or done hastily" | **Partially met** |
      | Are components and systems patched promptly? | Open-source components stale; patches delayed weeks to months | **Not met** |
      | Are third-party APIs vetted before and after integration? | No vetting; unused APIs left active | **Not met** |
      | Is endpoint protection centrally managed and current? | Antivirus present but unmanaged, some expired | **Partially met** |
      | Is network activity monitored? | "Little monitoring" | **Not met** |
      | Do staff receive security awareness training? | Program planned, never implemented | **Not met** |

      **Overall:** eight criteria applied, **six not met and two only partially**. Not one practice is fully
      effective. The failures cluster into **absent access control**, **absent environment separation** and
      **absent verification of anything** — and the Emotet incident sits at the intersection of all three.

      ## KS4 — Legal and ethical

      **Privacy Act 1988.** CodeWave holds client business data and, through the questionnaire, client contact
      details. **APP 11** requires reasonable steps to secure it — password-only access, no encryption and
      unmonitored networks fall short. The **questionnaire CSV on Lucas's laptop** is the sharpest example: a
      single unencrypted file of client information on a portable device, outside any managed system, with no
      stated retention limit. That engages APP 11 on both counts — protection *and* destruction when no longer
      needed — and **APP 3** if the questionnaire collects more than is reasonably necessary.

      **Emotet and notification.** The infection spammed clients and staff. If client personal information was
      accessed or disclosed and serious harm is likely, the **Notifiable Data Breaches scheme** requires
      notification to affected individuals and the OAIC.

      **Copyright Act 1968.** Open-source components are used throughout with no tracking of versions or licence
      terms.

      **Essential Eight and ISM.** Not law, but the benchmark CodeWave will be measured against as it pursues
      high-profile clients. Against the Essential Eight it currently fails **patch applications**, **patch
      operating systems**, **multi-factor authentication**, **restrict administrative privileges** and
      **application control**.

      **Ethical.** The "open and trusting" culture is presented as a virtue, and interrogating that is where the
      marks are: trust is a decision CodeWave makes about *its own* risk, but the data at stake belongs to
      **clients who never agreed to it**. Also: promising a security awareness program and never delivering it,
      then relying on the staff who were never trained; and the junior developer who clicked the invoice link
      being the product of that failure rather than the cause of it.

      ## KS5 — Recommendations

      Priority order, with the three required ingredients labelled:

      1. **Separate development, testing and production** *(security control)* — closes the highest-impact
         finding; stops untested code reaching client systems and removes live client data from the environment
         freelancers can reach. Aligns to the **ISM** *Environments* guideline.
      2. **Enforce MFA, individual accounts, least privilege and immediate deprovisioning** *(security control)* —
         Emotet showed staff will click; MFA makes a stolen credential nearly worthless. **Essential Eight:**
         MFA and restrict administrative privileges.
      3. **Mandatory recorded code review, enforced by the repository** *(security control)* — converts a policy
         that is "often skipped" into a control that cannot be.
      4. **A patching schedule with a maximum window, plus a dependency register tracking every open-source
         component and its licence** *(security control)* — **Essential Eight:** patch applications and operating
         systems; also closes the Copyright Act exposure.
      5. **Adopt threat modelling** *(threat modelling principles)* — define security requirements for each
         client project before build; identify and rate threats at design time; and **confirm mitigation**
         through central antivirus management, network monitoring and re-running these criteria quarterly. This
         is what stops the list above decaying back to where it started.
      6. **Deliver the security awareness program, and write the freelancer policy** *(improvement strategies)* —
         plus a **risk management plan** with an owner and a review cycle for each risk. Both incidents in the
         case study came from people, not technology.

      **Linkage.** These let CodeWave meet its **legal obligations** under the Privacy Act 1988 (APP 11) and the
      Copyright Act 1968; they serve its **goal** of moving upmarket, because enterprise and government clients
      audit exactly these controls during procurement; and they align it to the **Essential Eight** and the
      **ISM** — the frameworks those clients will name.

      ## The Week 10 and 11 questions

      Attempt each before reading the pointers.

      **Week 10 Q1 — seven or more security risks.** Use the vulnerability table above; name them in
      study-design language, not paraphrase.

      **Week 10 Q2 — why combining environments creates problems.** Four mechanisms: untested code reaches live
      systems; production data becomes reachable from development; a compromise anywhere reaches everywhere; and
      updates cannot be trialled safely.

      **Week 10 Q3 — how poor IAM leads to insider threat.** The link is **accountability and least privilege**.
      Shared or unreviewed credentials mean actions cannot be attributed to a person, and access far exceeds what
      roles require — so an insider can take data *and* cannot be identified afterwards. Ex-employees retaining
      credentials makes them insiders indefinitely.

      **Week 10 Q4 — policies for third-party software and APIs.** Vet before integration; maintain a dependency
      and licence register; monitor advisories; schedule updates; **decommission unused APIs**; and require the
      same standard of freelancers' contributions.

      **Week 10 Q5 — how social engineering succeeds there.** No training, an open and trusting culture, no
      verification policy for external contributors, and no monitoring to catch the consequences. Emotet is the
      worked example.

      **Week 11 Q1 — privacy/security/legislative concerns with the questionnaire.** Collection (APP 3 — is every
      field necessary?), storage (an unencrypted CSV on a personal laptop), use and disclosure (APP 6 — is
      recommending packages the purpose clients were told about?), security (APP 11), retention (APP 11.2 — how
      long is "readily available"?), and transparency (APP 1 — is there a privacy policy covering this?).

      **Week 11 Q2 — recommendations after Emotet.** Structure them under the five headings the sheet gives you:
      security and privacy practices, computer security, staff computer use, staff training, new software. Map
      each to a control from the table above.

      **Week 11 Q3 — security requirements for the new solution *and* for the development process.** This is the
      question closest to the SAC, because it asks for both halves: requirements *in* the product (authentication,
      encryption, validation, logging, access control) and requirements *around* how it is built (separated
      environments, code review, dependency vetting, threat modelling, testing).
    `
  },

  {
    id: 'sac-activities',
    title: 'Week 9 and 12 activity workouts',
    summary: 'Ethics scenarios, Essential Eight / ISM situations, in-house vs external, threat modelling and evaluation.',
    kk: ['VSV Weeks 9 & 12', 'U4A2 KK2, KK5, KK6, KK7, KK8'],
    body: `
      Guidance for the other two activity sheets. Attempt each task before reading the pointers — the value is
      in comparing your structure, not in borrowing the content.

      ## Week 9, Activity 1 — Ethical decisions

      Five scenarios. The sheet tells you the frame to argue in: **honesty, integrity, responsibility, legality
      and fairness**. Use those words explicitly — it is what the task is marked on.

      A structure that works for all five:

      1. **State your decision** plainly, first sentence.
      2. **Name the principles** it rests on, from the sheet's list.
      3. **Acknowledge the pull the other way** — the reason someone might do otherwise. This is what makes it
         "well-reasoned" rather than a slogan.
      4. **Give the consequence** of the alternative, to you and to others.

      | Scenario | The principles in tension | The move that earns marks |
      | --- | --- | --- |
      | 1. Taking credit | Honesty and fairness vs. self-interest | Correct it. Note that the colleague's career is affected by an error that costs you almost nothing to fix |
      | 2. Misleading a client | Honesty and integrity vs. commission | Disclose. Note that the mismatch surfaces anyway — at implementation — and then costs the client *and* the relationship |
      | 3. Unintended transfer | Legality and honesty vs. genuine need | Report it. Financial pressure explains the temptation but does not change ownership; keeping it is a legal matter, not just an ethical one |
      | 4. Security flaw | Responsibility vs. following instructions | Escalate. Users are exposed while you wait, and they never consented to that risk. Escalate through proper channels first, and record that you did |
      | 5. AI without acknowledgement | Honesty and integrity vs. deadline | Disclose the use. Note the difference between AI as a **tool you understand and verify** and AI as a **substitute for work you are claiming as yours** |

      > [tip] Scenario 4 is the one that connects straight to the SAC: it is the ethics of **disclosure timing**,
      the same issue as delaying a breach notification. If you can argue it here, you can argue it there.

      ## Week 9, Activity 2 — Essential Eight and ISM applied

      Your sheet gives the ISM in three groupings: **Environments** (separation, access controls, safe data
      handling, monitoring), **Secure design** (secure coding standards, threat modelling, code reviews,
      training) and **Testing** (SAST, DAST, penetration testing, remediation). Use your teacher's wording.

      ### Situation 1 — Outdated software, pop-up ads

      - **Essential Eight:** patch applications; patch operating systems; user application hardening;
        application control.
      - **ISM:** Testing (the vulnerability should have been found by scanning); Environments (monitoring would
        have detected the change).
      - **Why:** the pop-ups indicate the site is **already compromised** — two years unpatched means publicly
        documented exploits. A government agency's users have no choice but to use the site.
      - **Practical action:** take the application offline or isolate it, patch to current, then scan for
        injected content before restoring.

      ### Situation 2 — Macro-enabled malware

      - **Essential Eight:** configure Microsoft Office macro settings; user application hardening; application
        control; patch applications.
      - **ISM:** Environments (safe data handling of files received from outside); Secure design (training).
      - **Why:** the macro is downloading unknown files — an active malware delivery channel into a **finance
        company**, where the payoff for an attacker is highest.
      - **Practical action:** block macros from the internet by policy so they cannot be enabled at all, and
        route client spreadsheets through a sanitising step.

      ### Situation 3 — Unrestricted developer access to production

      - **Essential Eight:** restrict administrative privileges; multi-factor authentication.
      - **ISM:** Environments (**separation** and access controls); Secure design (code review before changes
        reach production).
      - **Why:** this is the combined-environment problem in its purest form — any developer can change live
        booking data with no approval and no record of who did it.
      - **Practical action:** remove direct production database access entirely; changes go through a reviewed,
        promoted deployment, with break-glass access logged and alerted.

      ### Situation 4 — Real customer data in testing

      - **Essential Eight:** restrict administrative privileges; regular backups (for the recovery side).
      - **ISM:** Environments (separation and **safe data handling**).
      - **Why:** names, addresses and **payment details** in a test environment multiply who can reach them and
        place them where protections are weakest. It engages **APP 11** and **APP 6** — the data was collected to
        process transactions, not to test software.
      - **Practical action:** replace production data with **de-identified or synthetically generated** test
        data, and purge the existing copies.

      ## Week 12, Activity 1 — In-house vs external, healthcare

      A medium healthcare company needs a patient management system handling **sensitive medical data** under
      strict privacy law.

      | | In-house | External |
      | --- | --- | --- |
      | **Advantages** | Patient data never leaves the organisation; full control over security decisions; clinicians' workflow knowledge is in the building; changes can be made as regulation shifts | Specialist expertise in health software and compliance; faster delivery; vendors may already hold relevant certification; no permanent headcount |
      | **Disadvantages / risks** | Expensive to staff; likely lacks specialist security and compliance capability; slow; capability leaves with key people | **Patient data disclosed to a third party**; the vendor's security becomes yours; IP and exit terms must be negotiated; ongoing dependence; supply-chain risk from their components |

      **Third-party component risk specifically** (Q4): components inherit the system's privileges; an unpatched
      library becomes a route to medical records; licence terms bind you; and you may not be told promptly when
      a vulnerability is found.

      **The recommendation** (Q5) — take a position and defend it. The defensible answer either way turns on
      **who carries the risk**:

      > *A hybrid is the strongest recommendation: contract an external vendor with demonstrated health-sector
      > compliance experience, because a medium company will not build that capability in time, but retain the
      > data. Require the vendor to develop against de-identified data in a separated environment, contract for
      > IP ownership and exit, and bind them to the Privacy Act obligations the healthcare company itself
      > carries. That captures the expertise advantage while keeping the disclosure risk — which is the one risk
      > that cannot be undone — inside the organisation.*

      Whatever you choose, the marks are in **naming the deciding factor** rather than listing both columns.

      ## Week 12, Activity 2 — Threat modelling in practice

      Pick one application and run the three principles. Worked for a **mobile banking app**:

      **Define security requirements** (at least three):

      1. Only the authenticated account holder may view or move funds in an account.
      2. All account and transaction data is encrypted in transit and at rest.
      3. Every transaction is logged immutably with the identity that initiated it.

      **Identify threats** (at least two categories):

      | Threat | How it works here |
      | --- | --- |
      | **Data breach** | Credentials phished or reused from another site; attacker signs in and reads account data |
      | **Code injection** | Unvalidated input in the payee field reaches a query or is rendered to another user |
      | **Man-in-the-middle** | App used on public Wi-Fi; traffic intercepted if TLS is not enforced or certificates not validated |

      **Mitigations:** MFA plus device binding and anomaly detection for the first; parameterised queries, input
      validation and output encoding for the second; enforced TLS with certificate pinning for the third.

      **Confirming the mitigation works** — this is the principle most students skip, and the task asks for it
      explicitly:

      - **SAST** on every build to catch injection patterns in source.
      - **DAST** against a running build in the test environment.
      - **Penetration testing** before release, with **remediation** tracked to closure.
      - Reviewing authentication logs for anomaly-detection hits that were not acted on.

      ## Week 12, Activity 3 — Evaluating a development practice

      The extract reports four findings. Three weaknesses, each linked to an evaluation criterion, each with an
      improvement:

      | Weakness | Criterion it fails | Improvement |
      | --- | --- | --- |
      | Data encrypted in transit but **not at rest** | **Security controls** — encryption | Enable database and backup encryption at rest, so a stolen disk or dump is useless |
      | Developers **rarely review code** for security flaws | **Secure design / code review** | Mandatory recorded review enforced by the repository, plus SAST in the pipeline so review is not the only net |
      | Third-party libraries used with **no update history tracked** | **Third-party components** | Dependency register with versions and licences; subscribe to advisories; scheduled update cycle |
      | Incident response plan **never tested** | **Risk evaluation / verification** | Run a tabletop exercise at least annually; record what failed and fix it |

      > [exam] That last row is the third threat modelling principle again — **confirming threats have been
      mitigated**. An untested plan is an assumption, not a control. Whenever an evaluation question hands you
      something that exists but has never been verified, that is the point it wants you to make.
    `
  }
  ];

  /* Append to the U4O2 SAC category, before the Kestrel worked example
     so the school's own case study comes first. */
  var sac = CURRICULUM.find(function (u) { return u.id === 'sac'; });
  if (sac) {
    var at = sac.lessons.findIndex(function (l) { return l.id === 'sac-case-study'; });
    if (at < 0) at = sac.lessons.length;
    LESSONS.forEach(function (l, i) { sac.lessons.splice(at + i, 0, l); });
  }

  /* ---------------------------------------------------------
     Written-response questions drawn from the activity sheets
     --------------------------------------------------------- */

  if (typeof SOURCES !== 'undefined') {
    SOURCES.vsv = { label: 'VSV Unit 4 activities', short: 'VSV activity' };
  }

  var CODEWAVE_STIM = 'CodeWave Solutions is a small, fast-growing Australian software company building custom applications for retail, education and logistics clients.\n\n' +
    '- Third-party APIs are integrated **without vetting or security testing**; unused APIs are left active.\n' +
    '- Development, testing and production **run on the same servers**.\n' +
    '- Code reviews are "often skipped or done hastily".\n' +
    '- Open-source components are not kept up to date; patches are delayed weeks to months.\n' +
    '- Access is **username and password only** — no MFA, passwords reused, access never reviewed, former employees may retain credentials.\n' +
    '- Antivirus is not centrally managed; some machines have expired software; there is little network monitoring.\n' +
    '- Freelance developers contribute remotely, sometimes over **unsecured public Wi-Fi**, with no policy verifying their practices.\n' +
    '- A security awareness program was planned but never implemented; a junior developer clicked a fake invoice link that almost caused a ransomware infection.\n' +
    '- An "open and trusting" culture leaves sensitive files in shared folders with minimal restrictions.';

  if (typeof QUESTIONS !== 'undefined') {
    QUESTIONS.push(

    {
      id: 'vsv-w10-q1', src: 'vsv', section: 'C', type: 'short', marks: 7, unit: 'u4a2', topic: 'vulnerabilities',
      stimulus: CODEWAVE_STIM,
      stem: 'Identify seven or more security risks in the way CodeWave Solutions is currently run.',
      sample: `Name each in study-design language rather than paraphrasing — that is what makes it markable.

1. **Combined development, testing and production environments** — all three run on the same servers, so untested code can reach live client systems and production data is reachable from development.
2. **Poor identity and access management** — password-only authentication, no MFA, passwords reused across platforms, access rights never reviewed, and former employees potentially retaining credentials.
3. **Risks from software acquired by third parties** — third-party APIs integrated without vetting or security testing, and unused APIs left active as unmonitored attack surface.
4. **Unpatched software** — open-source components not kept current, with security patches delayed weeks or months; known vulnerabilities have already been exploited by automated scans.
5. **Ineffective code review practices** — reviews are nominally part of the process but "often skipped or done hastily", so defects and insecure patterns reach production unexamined.
6. **Malware** — antivirus is not centrally managed and some installations have expired, leaving machines unprotected; a phishing link almost delivered ransomware.
7. **Man-in-the-middle attacks** — freelancers connect over unsecured public Wi-Fi and there is little network monitoring, so interception would be both possible and undetected.
8. **Insider threats** — sensitive files sit in shared folders with minimal restrictions under an "open and trusting" culture, so a disgruntled employee could copy code or client data undetected.
9. **Cyber security incidents** — minor incidents have already occurred where known vulnerabilities were exploited.

*(A tenth: no security awareness training, which is the root cause behind the phishing and social-engineering exposure.)*`
    },

    {
      id: 'vsv-w10-q2', src: 'vsv', section: 'C', type: 'short', marks: 4, unit: 'u4a2', topic: 'vulnerabilities',
      stimulus: CODEWAVE_STIM,
      stem: 'Why does combining development, testing and production environments create potential security problems?',
      sample: `Four distinct mechanisms — a strong answer gives more than one.

**Untested code reaches live systems.** With no gate between environments, a change that has not passed testing can affect the production system directly. For CodeWave, whose product is custom applications *for clients*, that means a bad push damages a client's operations, not just its own.

**Production data becomes reachable from development.** Everyone with development access — including remote freelancers — can read live client data their role does not require. This multiplies the number of people exposed to that information far beyond those who need it, which is precisely what APP 11 of the Privacy Act asks an organisation to limit.

**A compromise anywhere reaches everywhere.** Because the environments share infrastructure, malware on a developer's machine or a stolen development credential reaches production in one step. There is no boundary to stop lateral movement.

**Changes cannot be trialled safely.** There is no environment in which to verify an update before it goes live, so every deployment is also the test.`
    },

    {
      id: 'vsv-w10-q3', src: 'vsv', section: 'C', type: 'short', marks: 4, unit: 'u4a2', topic: 'vulnerabilities',
      stimulus: CODEWAVE_STIM,
      stem: 'How could poor identity and access management lead to an insider threat?',
      sample: `The link runs through **accountability** and **least privilege**.

**Excessive access creates the opportunity.** Because access rights are never reviewed and files sit in shared folders with minimal restrictions, staff can reach client code and data well beyond what their role requires. An insider does not need to defeat any control — the access is already granted.

**Absent accountability removes the deterrent.** With no access logging, no network monitoring and passwords reused across platforms, actions cannot reliably be attributed to a person. An insider who knows they cannot be identified faces no realistic consequence, and CodeWave could not prove what was taken even after the fact.

**Former employees remain insiders indefinitely.** Credentials are not revoked on departure, so someone with no current relationship to CodeWave — and no reason to protect it — retains legitimate access. This is the sharpest form of the risk, because the organisation has lost even the informal control of the person being in the building.

**It need not be malicious.** The same weaknesses let a well-intentioned employee copy client data somewhere convenient and insecure. CodeWave's insider risk is currently *latent* rather than realised, but the conditions for it are all present.`
    },

    {
      id: 'vsv-w10-q4', src: 'vsv', section: 'C', type: 'short', marks: 5, unit: 'u4a2', topic: 'improving-security',
      stimulus: CODEWAVE_STIM,
      stem: 'What policies or practices could CodeWave introduce to reduce the risks from third-party software and APIs?',
      sample: `**Vet before integration.** Require every third-party API or library to be reviewed before use — its security documentation, its licence terms, its maintenance history and its known vulnerabilities — with a named approver. This closes the current practice of integrating under deadline pressure with no assessment.

**Maintain a dependency and licence register.** Record every component, its version and its licence. This makes patching possible (you cannot update what you have not listed) and closes CodeWave's exposure under the **Copyright Act 1968**, since open-source components carry licence obligations that are currently untracked.

**Monitor advisories and patch on a schedule.** Subscribe to vulnerability notifications for every registered component and apply security updates within a defined maximum window, rather than deferring them for weeks or months while new features are built. This addresses two **Essential Eight** strategies — patch applications and patch operating systems.

**Decommission unused APIs.** Any integration no longer needed is removed, not left active. Unused APIs are worse than unused: they are attack surface nobody monitors or patches because nobody remembers they are there.

**Extend the standard to external contributors.** Require freelance developers to meet the same vetting, review and connection-security standards, verified rather than assumed — CodeWave currently has no policy confirming that external contributors follow secure practices at all.`
    },

    {
      id: 'vsv-w10-q5', src: 'vsv', section: 'C', type: 'short', marks: 4, unit: 'u4a2', topic: 'vulnerabilities',
      stimulus: CODEWAVE_STIM,
      stem: 'How could a social engineering attack succeed in an organisation like CodeWave?',
      sample: `Four conditions at CodeWave make it likely rather than merely possible.

**No training.** The security awareness program was planned and never implemented, so staff have never been taught to recognise phishing, pretexting or fraudulent phone calls. The junior developer who clicked the fake invoice link is the product of that gap, not the cause of it.

**A culture that discourages challenge.** An "open and trusting" workplace is exactly the environment social engineering exploits: an attacker impersonating a client or a colleague is likely to be accommodated rather than verified, because verifying feels rude.

**No verification policy for external parties.** Freelancers contribute remotely with no process confirming who they are or how they work, so an attacker impersonating a contributor has a plausible route in.

**Nothing to catch the consequences.** With little network monitoring, unmanaged antivirus and no access logging, a successful attack would run undetected — which is why the invoice-link incident is described as "almost" causing a ransomware infection rather than as having been detected and stopped.

Once a credential is obtained this way, CodeWave's password-only authentication means it is immediately sufficient, and the combined environments mean it reaches production.`
    },

    {
      id: 'vsv-w11-q1', src: 'vsv', section: 'C', type: 'short', marks: 6, unit: 'u4a2', topic: 'legislation-frameworks',
      stimulus: `Lucas, the founder of CodeWave, has created an online questionnaire for clients to complete so they can be recommended suitable software packages and service plans.

He downloads the questionnaire responses as a **CSV file to his laptop** so he can review them and have the information about his clients stored readily available.`,
      stem: 'Describe any privacy, security, or legislative concerns you can identify to do with this survey. Justify your answers.',
      sample: `**Collection — APP 3.** The Privacy Act requires an organisation to collect only personal information reasonably necessary for its functions. A questionnaire designed to recommend software packages needs business requirements; if it also collects names, contact details, financial information or anything else not required for that recommendation, it over-collects.

**Notification and transparency — APP 1 and APP 5.** Clients should be told, at the point of collection, who is collecting the information, why, how it will be stored and who it may be disclosed to. Nothing in the scenario indicates a privacy policy or a collection notice exists.

**Use and disclosure — APP 6.** The stated purpose is recommending suitable packages. Keeping the data "readily available" for future reference, or using it for marketing or client profiling later, is a secondary purpose requiring consent.

**Security — APP 11.** This is the most serious concern. The responses are downloaded as an **unencrypted CSV onto a laptop** — a portable device, outside any managed system, with no stated encryption, access control or backup. A lost or stolen laptop discloses every client's responses at once. Given CodeWave's wider practices (password-only access, unmanaged antivirus, no monitoring), the laptop is unlikely to be protected by anything else either. CSV also carries no access controls of its own: anyone who obtains the file can read all of it.

**Retention — APP 11.2.** "Stored readily available" implies indefinite retention. The Act requires personal information to be destroyed or de-identified once it is no longer needed for the purpose it was collected.

**Data quality and access — APP 10 and APP 12.** Clients have a right to access and correct information held about them; a private CSV on one person's laptop makes that practically impossible to honour.

**Justification.** Together these mean the survey is not merely a weak practice but a likely breach of APP 11, and the harm is concentrated: a single file loss exposes every client at once, including clients whose own reputations depend on CodeWave.`
    },

    {
      id: 'vsv-w11-q2', src: 'vsv', section: 'C', type: 'short', marks: 10, unit: 'u4a2', topic: 'improving-security',
      stimulus: `A CodeWave developer, Mia, opened an email titled "support wildfire relief efforts" with a Word attachment containing the **Emotet Trojan**. Her computer has spammed everyone in her contact list, including CodeWave's clients and staff. Scanning the machines also found **cryptomining malware and malicious adware**.

You have been hired as a cybersecurity consultant to remove the malware, alert customers, and put systems in place to prevent future attacks.`,
      stem: 'What recommendations would you make to Lucas regarding: security and privacy practices; computer security; staff computer use; staff training; and new software?',
      sample: `Answer under the five headings the task gives you — the structure is the mark scheme.

**Security and privacy practices.** Establish an incident response plan naming who assesses an incident and who decides on notification, and test it. Because client contact details were disclosed to an attacker, assess this as a possible eligible data breach and notify affected clients and the OAIC under the **Notifiable Data Breaches scheme** if serious harm is likely. Introduce a data handling policy covering what may be stored where — starting with Lucas's questionnaire CSV. Adopt a risk management plan with an owner and review cycle per risk.

**Computer security.** Deploy **centrally managed** endpoint protection so no machine can run expired software, and verify coverage rather than assume it. Enforce **MFA** and individual accounts, and revoke former employees' credentials immediately. **Block macros from internet-sourced Office documents by policy** — this is how Emotet arrived, and it is an Essential Eight strategy. Patch operating systems and applications on a defined schedule. Introduce network monitoring and logging so a future infection is detected rather than inferred. Separate development, testing and production so a compromised workstation cannot reach client systems.

**Staff computer use.** Write an acceptable-use policy: no password reuse between work and personal accounts, a password manager provided, no work on unsecured public Wi-Fi without a VPN, and a clear, blame-free procedure for reporting a suspicious email or a click already made. Extend the same requirements to freelance contributors, and verify compliance rather than trusting it.

**Staff training.** Finally deliver the security awareness program that was planned and never implemented, covering phishing and social engineering recognition, safe handling of attachments, and what to do in the first five minutes after a suspected compromise. Run it at induction *and* as periodic refreshers, and measure it with phishing simulations. Mia's click is the direct consequence of this program's absence.

**New software.** Add email filtering with attachment sandboxing, a password manager, an MFA solution, a centrally managed endpoint protection suite, a code repository enforcing mandatory review, and dependency-scanning tooling. Vet each of these before purchase — CodeWave's existing habit of adopting third-party components without assessment is itself one of the risks being fixed.`
    },

    {
      id: 'vsv-w11-q3', src: 'vsv', section: 'C', type: 'short', marks: 8, unit: 'u4a2', topic: 'threat-modelling',
      stimulus: `Lucas asks Brown Duck Software to develop a new system for CodeWave with much higher security features, and to plan and document the requirements.`,
      stem: 'What are your recommendations for the security requirements of the software solution, and the security of the software development process? Justify each of your recommendations.',
      sample: `The question has **two halves** — requirements *in* the product, and requirements *around* how it is built. Answer both explicitly; this is the closest activity question to the SAC.

**Security requirements of the solution**

- **Authentication and authorisation.** Individual accounts with MFA, and role-based access on least privilege. *Justification:* CodeWave's current breach path is credential compromise; MFA makes a stolen password insufficient, and least privilege limits what any single compromise reaches.
- **Encryption in transit and at rest.** TLS on every connection; database and backup encryption. *Justification:* protects client data both from interception on the unsecured networks freelancers use, and from disclosure if storage is stolen — the gap the questionnaire CSV currently exemplifies.
- **Input validation on all entry points.** *Justification:* prevents injection attacks reaching the database, and is the cheapest control to build in at design time versus retrofitting.
- **Audit logging.** Every access to and modification of client data recorded immutably with the identity responsible. *Justification:* CodeWave currently cannot attribute actions to a person, which is what makes its insider risk unmanageable.
- **Data retention and disposal.** Automatic purging of personal information once no longer needed. *Justification:* satisfies APP 11.2, which CodeWave's "keep it readily available" habit currently breaches.

**Security of the development process**

- **Separated development, testing and production environments**, with **de-identified or synthetic test data**. *Justification:* prevents untested code reaching live systems and removes real client data from the environment with the weakest controls — ISM *Environments*.
- **Mandatory recorded code review** enforced by the repository. *Justification:* converts CodeWave's "often skipped" review into a control that cannot be bypassed, and produces evidence for clients who ask.
- **Threat modelling at design time.** Define security requirements before building, identify and rate threats, and confirm mitigations. *Justification:* this is what changes CodeWave from reacting to incidents to anticipating them — and it is the root-cause fix, since its current controls were never chosen against identified threats.
- **Dependency vetting and a licence register.** *Justification:* closes the unvetted-API and stale-open-source risks, and the Copyright Act exposure.
- **Security testing before release** — SAST in the pipeline, DAST against a running build, and penetration testing before launch, with remediation tracked. *Justification:* verification is the third threat modelling principle; without it every other control is an assumption.
- **Developer training and secure coding standards.** *Justification:* both CodeWave incidents originated in human behaviour, not a technical control failing.`
    },

    {
      id: 'vsv-w12-q1', src: 'vsv', section: 'C', type: 'short', marks: 8, unit: 'u4a2', topic: 'organisations',
      stimulus: `A **medium-sized healthcare company** needs a new patient management system. It is debating whether to build the system in-house or outsource development to a third-party vendor. The system must comply with strict privacy laws and handle **sensitive medical data**.`,
      stem: 'Discuss the advantages and disadvantages of in-house versus external development for this project, the risks of relying on third-party components, and recommend an option with justification.',
      sample: `**Advantages of in-house.** Patient data never leaves the organisation, which is decisive where the data is sensitive medical information. The company retains full control over security decisions rather than inheriting a vendor's. Clinical staff who understand the actual workflow are in the building, so requirements are better understood. And the system can be changed as privacy regulation shifts without renegotiating a contract.

**Disadvantages of in-house.** A medium-sized healthcare company is unlikely to employ specialist health-software or security capability, and building it takes time the project does not have. Development is slower and diverts staff from core work. Capability is concentrated in a few people and leaves when they do.

**Advantages of external.** Access to vendors with demonstrated health-sector experience and, often, existing compliance certification. Faster delivery. No permanent headcount, with cost fixed in the contract. The vendor brings practices proven across other clients.

**Risks of third-party components.** Components run with the system's privileges, so a vulnerability in a library becomes a route to patient records. Licence terms bind the healthcare company under the **Copyright Act 1968**. Vulnerability disclosure depends on the supplier's diligence and may be slow. And the company may be unable to patch a component itself if the vendor controls the build.

**Recommendation.** A **hybrid**: contract an external vendor with demonstrated health-sector compliance experience, but retain the data.

*Justification.* The deciding factor is **which risk is reversible**. A capability gap can be bought; a disclosure of patient medical records cannot be undone. So take the expertise externally — the company will not build health-compliance capability in time, and a poorly built system is itself the larger privacy risk — while keeping the exposure inside: require the vendor to develop against **de-identified data in a separated environment**, contract explicitly for IP ownership and exit rights, bind the vendor to the same **Privacy Act 1988** obligations the healthcare company carries, and require evidence of alignment to the **Essential Eight** and the **ISM** before go-live.`
    },

    {
      id: 'vsv-w12-q2', src: 'vsv', section: 'C', type: 'short', marks: 8, unit: 'u4a2', topic: 'threat-modelling',
      stem: 'Choose one type of application and apply the threat modelling principles to it: define at least three security requirements, identify potential threats from at least two categories, suggest mitigation strategies for each, and explain how you would confirm that the mitigation works.',
      sample: `Worked for a **mobile banking app**.

**1. Define security requirements**

- Only the authenticated account holder may view balances or move funds in an account.
- All account and transaction data is encrypted in transit and at rest.
- Every transaction is logged immutably against the identity that initiated it, and logs cannot be altered by application users.

**2. Identify threats**

| Threat category | How it applies here |
| --- | --- |
| **Data breach** | Credentials phished or reused from a breach of another site; the attacker signs in and reads or exfiltrates account data |
| **Code injection** | Unvalidated input in a payee or reference field reaches a database query, or is stored and later rendered to another user |
| **Man-in-the-middle** | The app is used on public Wi-Fi; traffic is intercepted where TLS is not enforced or certificates are not validated |

**3. Mitigation strategies**

- *Data breach:* multi-factor authentication, device binding so a new device triggers re-verification, anomaly detection on login location and transaction pattern, and encryption at rest so stolen storage is unreadable.
- *Code injection:* parameterised queries, input validation against an allow-list, output encoding, and least-privilege database accounts so even a successful injection is contained.
- *Man-in-the-middle:* enforced TLS on every endpoint with certificate pinning in the app, and refusal to operate over a connection that fails validation.

**4. Confirming the mitigation works**

This is the third principle and the part the task asks for explicitly.

- **SAST** on every build, to catch injection patterns in source before release.
- **DAST** against a running build in the testing environment, to exercise the endpoints as an attacker would.
- **Penetration testing** before each major release, with findings tracked through to **remediation** rather than logged and forgotten.
- **Reviewing authentication and anomaly logs** in production to confirm the detection rules actually fire, and that alerts are acted on.
- Re-running the same checks on a schedule, since a mitigation verified once is only verified for that build.`
    },

    {
      id: 'vsv-w12-q3', src: 'vsv', section: 'C', type: 'short', marks: 9, unit: 'u4a2', topic: 'evaluating-practices',
      stimulus: `An extract from a project's Software Security Evaluation / Checklist. The team reports:

- Some data is encrypted in transmission but **not while stored**.
- Developers **rarely review code** for security flaws.
- Third-party libraries are used, but **no one tracks update history**.
- There is an incident response plan, but it has **never been tested**.`,
      stem: 'Identify three weaknesses in this organisation\'s software development practices, link each to the criteria for evaluation, and recommend improvements.',
      sample: `| Weakness | Criterion it fails | Recommended improvement |
| --- | --- | --- |
| Data encrypted in transit but **not at rest** | **Security controls — encryption** | Enable encryption at rest on databases and backups, so a stolen disk, a dumped database or an exfiltrated backup is unreadable. Transit encryption only protects data while it moves; most breaches take data where it sits. |
| Developers **rarely review code** for security flaws | **Secure design — code review** | Make review mandatory and enforced by the repository, with the reviewer recorded, and add SAST to the build pipeline so review is not the only net. "Rarely" means the control exists on paper only. |
| Third-party libraries with **no update history tracked** | **Third-party components / supply chain** | Maintain a dependency register with versions and licences, subscribe to vulnerability advisories, and patch on a defined schedule. You cannot update what you have not inventoried, and licence terms are a Copyright Act obligation. |
| Incident response plan **never tested** | **Risk evaluation and verification** | Run a tabletop exercise at least annually, record what failed, and fix it. |

**The point worth making explicitly.** The last row is the strongest answer even though it looks like the mildest finding. An untested plan is an **assumption, not a control** — it is the third threat modelling principle, *confirming threats have been mitigated*, left undone. An organisation that discovers its plan does not work during an actual incident is in a worse position than one with no plan, because it has been relying on it.

**Overall evaluation.** Of the four practices reported, none is fully effective: two exist but are not enforced (code review, incident response), one is partial (encryption in transit only), and one is absent (dependency tracking). The common thread is **verification** — this organisation adopts controls and never checks that they work.`
    }

    );
  }
})();
