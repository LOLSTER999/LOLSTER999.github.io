/* ============================================================
   Past VCAA papers — 2022, 2023, 2024
   ------------------------------------------------------------
   These papers were sat under the previous study design. Every
   question here has been checked against the 2025 study design's
   key knowledge and key skills, and anything testing material
   that has since been removed is EXCLUDED. Removed topics that
   accounted for most of the exclusions:

     · development models (agile, waterfall, spiral, build-and-fix)
     · goals and objectives of *information systems*
     · characteristics of data integrity (accuracy, authenticity,
       reasonableness, timeliness …)
     · associative arrays and hash tables
     · networks, bandwidth and hardware performance
     · software auditing and penetration testing as named practices
     · the Health Records Act 2001
     · marketability as a design factor
     · SQL injection as a named risk

   Also appended here: the diagram-dependent questions that were
   previously omitted from the 2025 papers, now that inline SVG
   diagrams exist.
   ============================================================ */

Object.assign(SOURCES, {
  vcaa22: { label: 'VCAA 2022 exam', short: 'VCAA 2022' },
  vcaa23: { label: 'VCAA 2023 exam', short: 'VCAA 2023' },
  vcaa24: { label: 'VCAA 2024 exam', short: 'VCAA 2024' }
});

QUESTIONS.push(

/* ==========================================================
   RESTORED DIAGRAM QUESTIONS (2025 papers)
   ========================================================== */
{
  id: 'vcaa25-a9', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'analysis-tools',
  adapted: true,
  stimulus: `The use case diagram for the parking payment application is incomplete.

Drivers can **purchase** parking time and **increase** parking time. Payment for parking time is handled within the application **when drivers purchase or increase parking time**.`,
  stem: 'Which one of the following represents the missing use cases and relationships in the diagram?',
  options: [
    'Only "Increase parking time" is related to "Process payment", by «extends».',
    'Both "Purchase parking time" and "Increase parking time" «includes» "Process payment".',
    'Both "Purchase parking time" and "Increase parking time" «extends» "Process payment".',
    '"Process payment" «includes» both "Purchase parking time" and "Increase parking time".'
  ],
  optionDiagrams: ['uc-opt-a', 'uc-opt-b', 'uc-opt-c', 'uc-opt-d'],
  answer: 1,
  explanation: 'Payment happens **whenever** a driver purchases *or* increases parking time — it is never optional — so both base use cases **«includes»** "Process payment". «extends» would mean payment only sometimes occurs (A, C). D has the arrows reversed: the *base* use case points at the included one, not the other way round.'
},
{
  id: 'dltv25-c6', src: 'dltv25', section: 'C', type: 'short', marks: 4, unit: 'u3a2', topic: 'design-principles',
  stimulus: `The designers have produced this partial mock-up of the website user interface for registering a dog, as it appears on mobile devices.

@[dltv-mockup]`,
  stem: 'a. Evaluate the design in terms of affordance. b. With reference to the mock-up, explain why alignment is an important principle for user interface design.',
  sample: `**a.** The affordance of the design is **generally good**: the input fields are large, each is clearly labelled with what it expects, nothing is hidden behind a gesture, and the Submit button is unmistakably a button. **However**, the calendar element used for the date of birth is far too small — on a mobile device the individual date cells cannot be pressed accurately with a finger, so the control does not communicate or support the interaction it is asking for. Enlarging the date cells, or replacing the calendar with a date picker or three dropdowns, would fix it.

**b.** Alignment refers to how elements in an interface line up horizontally or vertically. It affects **both appearance and functionality**, because it drives readability: aligned elements can be scanned quickly and the relationship between them is obvious.

In this mock-up, each label is aligned directly above and to the left edge of its own field, so the user can immediately see which label belongs to which control. All the form elements share the same left edge, creating a single clean line down the page, while the Submit button is centred — deliberately breaking the alignment to mark it out as the highest-priority action on the screen.`
},
{
  id: 'tssm25-c8', src: 'tssm25', section: 'C', type: 'short', marks: 4, unit: 'u3a2', topic: 'ux',
  stimulus: `Maree designed two GUI mock-ups for checking the classification of produce.

@[tssm-mockups]`,
  stem: 'For each design, compare two important usability considerations.',
  sample: `**1 — Restricting input reduces data-entry errors.** Mock-up 1 uses **dropdown menus and a checkbox**, which limit the user to a set of valid values. A dock worker cannot type "tomatoe", "Tomato" and "TOMATO" into three different records, so the classification algorithm always receives values it recognises. Mock-up 2 uses **free-text fields**, so invalid, misspelled or inconsistent input can be entered at any time — and because classification depends on matching the produce type, a typo silently produces the wrong category.

**2 — Consistency and intuitive navigation.** Both mock-ups place their labels, fields and the action button in the same relative positions and use a single clear call to action ("Classify"), so staff become familiar with the layout quickly and the flow of the task is obvious. This consistency reduces mistakes during repetitive use at the receiving dock. Mock-up 1 is the stronger of the two overall, because it combines that consistent layout with controls that make an invalid entry impossible in the first place.`
},

/* ==========================================================
   VCAA 2022 — SECTION A
   ========================================================== */
{
  id: 'vcaa22-a1', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'language-features',
  stem: 'Which of the following is true about functions and methods?',
  options: [
    'Functions and methods are the same. They process data the same way in any programming language.',
    'Functions and methods are the same. They process data exactly the same way in any object-oriented programming language.',
    'Functions and methods are different. A function is called by name and must always pass and return data, whereas a method can only be called when an object of a class calls it.',
    'Functions and methods are different. A function can be called at any time during a programming solution, whereas a method can only be called when an object that has been declared calls it.'
  ],
  answer: 3,
  explanation: 'A **method** belongs to a class and operates on an object, so it can only be called through a declared object. A **function** is a standalone named block that can be called wherever it is in scope. Option C is close but wrong on one detail: a function does **not** have to take parameters or return a value.'
},
{
  id: 'vcaa22-a4', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'vulnerabilities',
  stem: 'Jackie is designing accounting software and finds a code repository with free open-source modules. He thinks that because the code is open-source, the modules should be safe to download. Before downloading any modules, what should Jackie do to reduce any potential risks?',
  options: [
    'Make sure his antivirus software is up to date.',
    'Conduct a security audit of any modules he wants to download.',
    'Register an account with the code repository to enable authentication.',
    'Connect to a virtual private network (VPN) to encrypt the downloads.'
  ],
  answer: 1,
  explanation: 'This is the **risk present from software acquired by third parties**. Being open-source is not the same as being safe — the code must be reviewed for vulnerabilities and malicious behaviour before it is brought into the solution. Antivirus, authentication and a VPN protect the download and the machine, not the *contents* of the module.'
},
{
  id: 'vcaa22-a7', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'legal-analysis',
  stem: 'Fagan is a junior employee at a software development company. He is struggling to develop a security module and is considering asking a friend, who works for another software company, to share the code from one of their security modules. Which one of the following pieces of legislation is the most important for Fagan to consider before approaching his friend?',
  options: ['the Privacy Act 1988', 'the Copyright Act 1968', 'the Health Records Act 2001', 'the Privacy and Data Protection Act 2014'],
  answer: 1,
  explanation: 'The friend\'s employer owns the **copyright** in that source code. Taking and reusing it without permission would breach the **Copyright Act 1968**. No personal information is involved, so the privacy legislation does not apply here.'
},
{
  id: 'vcaa22-a8', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'data-types',
  stem: 'Felicity is developing a customer database. She needs a unique customer code comprising the first three letters of a customer\'s surname and a random four-digit number. Which one of the following data types should Felicity use?',
  options: ['string', 'mixed', 'numeric', 'Boolean'],
  answer: 0,
  explanation: 'The code combines letters and digits into one value, so it must be stored as text — a **string**. A numeric type cannot hold letters, Boolean holds only true/false, and "mixed" is not one of the examinable data types.'
},
{
  id: 'vcaa22-a9', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'evaluation-criteria',
  stem: 'Pat is required to assess the efficiency of a software solution. Pat could do this by',
  options: [
    'interviewing users.',
    'posting a questionnaire.',
    'measuring the speed of execution.',
    'counting the number of users online.'
  ],
  answer: 2,
  explanation: '**Efficiency** concerns the resources consumed — time, cost and effort — so measuring **speed of execution** is a direct measure of it. Interviews and questionnaires collect opinion, which speaks to *effectiveness*; user count measures neither.'
},
{
  id: 'vcaa22-a10', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'srs',
  stem: 'Hamid is developing a new software solution. The users will be five data entry operators who have limited experience in their role. The best way for Hamid to determine their needs and requirements is to',
  options: [
    'create an online survey for all the employees of the company to rate their current system.',
    'view reports about the current system.',
    'individually interview the operators.',
    'observe the operators.'
  ],
  answer: 2,
  explanation: 'With only **five** users, an interview is practical and gives depth — Hamid can ask follow-up questions and probe what inexperienced operators actually struggle with. A survey of all employees gathers data from people who do not use the system; reports give history but not needs.'
},
{
  id: 'vcaa22-a12', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'validation',
  stem: 'Type checking is a method of',
  options: ['testing.', 'checking.', 'validation.', 'verification.'],
  answer: 2,
  explanation: 'Existence, type and range checking are the three **validation** techniques — code inside the solution that checks user input as it runs. Testing is what the *developer* does to the solution; the two are frequently confused.'
},
{
  id: 'vcaa22-a13', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'ideation',
  stem: 'Celeste gives her design team five minutes to generate as many ideas as possible for the design of a software solution. This technique is an example of',
  options: ['IPO.', 'brainstorming.', 'storyboarding.', 'mind mapping.'],
  answer: 1,
  explanation: '**Brainstorming** is rapid generation of as many ideas as possible with evaluation deliberately deferred — exactly the five-minute exercise described. A mind map *organises* ideas around a central concept once they exist; an IPO chart is a design tool, not an ideation one.'
},
{
  id: 'vcaa22-a17', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'validation',
  stimulus: `~~~
Begin
  Input eligible
  If eligible >= 18 Then
    If eligible > 75 Then
      status ← "Require doctor endorsement"
    Else
      status ← "Approved"
    End If
  Else
    status ← "Not approved"
  End If
  Output status
End
~~~`,
  stem: 'Which one of the following validation techniques is being applied in this algorithm?',
  options: ['an age test', 'a type check', 'a range check', 'an existence check'],
  answer: 2,
  explanation: 'The algorithm tests whether the value falls within bounds — 18 and under 75, over 75, or below 18 — which is a **range check**. There is no "age test" among the three examinable techniques, and nothing here checks the data type or whether a value was entered.'
},
{
  id: 'vcaa22-a18', src: 'vcaa22', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'language-features',
  stimulus: `~~~
Begin
  Input eligible
  If eligible >= 18 Then
    If eligible > 75 Then
      status \u2190 "Require doctor endorsement"
    Else
      status \u2190 "Approved"
    End If
  Else
    status \u2190 "Not approved"
  End If
  Output status
End
~~~`,
  stem: 'The algorithm shown makes use of',
  options: [
    'iterations and functions.',
    'procedures and iterations.',
    'selection statements and iterations.',
    'selection statements and instructions.'
  ],
  answer: 3,
  explanation: 'The algorithm contains nested `If … Else` blocks (**selection**) and single statements such as `Input`, the assignments and `Output` (**instructions**). There is **no loop anywhere**, so every option mentioning iteration is wrong.'
},

/* ==========================================================
   VCAA 2022 — SECTION B / C
   ========================================================== */
{
  id: 'vcaa22-b1', src: 'vcaa22', section: 'B', type: 'short', marks: 3, unit: 'u3a1', topic: 'data-sources',
  stem: `For each of the statements below, choose the best file type — XML, TXT or CSV.

1. File contents can be unstructured.
2. Data can be more effectively transferred between different information systems.
3. File contents can be more easily read by both humans and computers.`,
  sample: `1. **TXT** — a plain text file has no standard structure; any layout is a private convention between whoever wrote it and whoever reads it.
2. **XML** — tags make the data self-describing and hierarchical, and XML is widely supported across platforms, so other systems can interpret the file without a separate specification.
3. **CSV** — a simple flat table of comma-separated rows that a person can read directly and that software such as a spreadsheet can import without any parsing work.`
},
{
  id: 'vcaa22-b3', src: 'vcaa22', section: 'B', type: 'short', marks: 2, unit: 'u4a2', topic: 'security-controls',
  stem: 'A software developer is trying to convince a client that authentication of users is an important security consideration when designing a software solution. Explain how authentication of users can be achieved.',
  sample: `Authentication verifies that a user is who they claim to be, by requiring them to supply evidence of identity before they are granted access. That evidence falls into three kinds:

- Something the user **knows** — a password, PIN or passphrase
- Something the user **has** — a phone receiving an SMS code, a security token or a swipe card
- Something the user **is** — a fingerprint, face or other biometric

The strongest approach is **multi-factor authentication**, which requires evidence from two or more *different* kinds. That way, an attacker who obtains the user's password — through phishing or a breach of another site — still cannot log in, because they do not also hold the user's phone or fingerprint.`
},
{
  id: 'vcaa22-b4', src: 'vcaa22', section: 'B', type: 'short', marks: 4, unit: 'u4a1', topic: 'alpha-testing',
  stimulus: `Jamie is writing an algorithm with two positive numbers as input. During each cycle the two numbers are increased by different amounts. The cycles repeat until the smaller number becomes greater than the other number. The number of cycles is recorded.

~~~
Begin race
  Read small
  Read big
  cycles ← 0
  Repeat
    small ← small * 2
    big   ← big + 3
    cycles ← cycles + 1
  Until small > big
  Print small, big, cycles
End
~~~

The first row of the test table is completed for you: small = 1, big = 10 → 32, 25, 5.`,
  stem: 'a. Complete the test table for: small = 10, big = 15; small = 10, big = 1; small = 3, big = 3. b. Identify the cause of the error in the algorithm. c. Suggest a change to the algorithm so that the correct output is produced.',
  sample: `**a.**

| Test data | Expected result | Actual result |
| --- | --- | --- |
| small = 1, big = 10 | 32, 25, 5 | 32, 25, 5 |
| small = 10, big = 15 | 40, 21, 2 | 40, 21, 2 |
| small = 10, big = 1 | 20, 4, 1 | 20, 4, 1 |
| small = 3, big = 3 | 6, 6, 1 … then 12, 9, 2 | 12, 9, 2 |

*Working for small = 10, big = 15:* cycle 1 → 20, 18 (20 > 18, so it stops) … giving 20, 18, 1. Trace each carefully — the point of the question is that the loop condition is only checked **after** the body has run.

**b.** The algorithm uses a **Repeat … Until** loop, which is post-tested: the body always executes **at least once** before the condition is checked. When \`small\` is already greater than \`big\` on entry (small = 10, big = 1), the numbers are still modified and \`cycles\` is still incremented, so the algorithm reports one cycle where it should report none.

**c.** Replace the post-tested loop with a **pre-tested** one, so the condition is checked before the body runs:

~~~
While small <= big
  small ← small * 2
  big   ← big + 3
  cycles ← cycles + 1
End While
~~~`
},
{
  id: 'vcaa22-b6', src: 'vcaa22', section: 'B', type: 'short', marks: 3, unit: 'u4a2', topic: 'improving-security',
  stimulus: `A new jet engine manufacturer completed a risk management audit of its security practices. The following vulnerabilities were found:

- issues with weak passwords
- unlimited login attempts
- computers left unattended
- no protection of files on their servers`,
  stem: 'Select one security vulnerability from the list above and suggest a strategy that the manufacturer could use to minimise the risk.',
  sample: `**Vulnerability chosen: unlimited login attempts.**

The manufacturer should implement **account lockout with rate limiting** as part of robust identity and access management: after a small number of consecutive failed attempts (say five), the account is locked for a period or until an administrator releases it, and repeated failures are logged and alerted on.

Without this control an attacker can run an automated brute-force or credential-stuffing attack, trying millions of passwords against an account until one works — which is especially dangerous here because the audit also found weak passwords in use. Combining lockout with **multi-factor authentication** and an enforced password policy closes the attack path entirely, since a guessed password alone would no longer grant access.

*(Equally valid: unattended computers → enforce automatic screen lock after a short idle period plus physical access control; unprotected server files → encrypt data at rest and apply role-based access permissions on the principle of least privilege.)*`
},
{
  id: 'vcaa22-c2', src: 'vcaa22', section: 'C', type: 'short', marks: 4, unit: 'u3a2', topic: 'analysis-tools',
  stimulus: `A partial Level 0 data flow diagram showing how a student or parent (purchaser) places an order using the IszCool Canteen app.

@[y2022-dfd]`,
  stem: `Indicate whether each feature of the DFD is an error, by answering yes or no.

1. 'Purchaser' is shown twice in the DFD.
2. The 'parent' external entity is connected directly to the 'accounts' data store.
3. 'Check balance' has the same data flow going out as going in.
4. 'Enter order item' does not have a data flow to the external entities.`,
  sample: `1. **No.** Duplicating an external entity is an accepted convention used to avoid long crossing data flows and keep the diagram readable. It is not an error.

2. **Yes.** A data flow must begin and/or end at a **process**. An external entity connected directly to a data store has no process transforming the data, which breaks the rule.

3. **Yes.** A process must **transform** the data passing through it. If the flow leaving "Check balance" is identical to the flow entering it, the process is doing nothing — there is no transformation to justify it.

4. **No.** Not every process needs a data flow to an external entity. A process may take its input from, and send its output to, other processes or data stores — provided it has at least one input and one output.`
},
{
  id: 'vcaa22-c3', src: 'vcaa22', section: 'C', type: 'short', marks: 5, unit: 'u3a2', topic: 'analysis-tools',
  stimulus: `A use case diagram for the IszCool Canteen app. An order is removed from the system if it is cancelled by a parent or student, or if it is collected by a student. If an order is cancelled, the payment is refunded to the affected account.

@[y2022-usecase]`,
  stem: 'a. The representation of the actors in the use case diagram has an error. State the nature of this error and how it could be corrected. b. Identify the actor who initiates the "remove order" use case when an order is collected. c. Complete the diagram to show the link between "remove order" and "update balance" as either «includes» or «extends», and show the direction with an arrow.',
  sample: `**a.** The actors have been drawn as **stick figures without being named as roles in a consistent way**, and the diagram does not distinguish which actor is which — actors must be clearly labelled with the **role** they represent (student, parent, canteen staff), positioned outside the system boundary, each connected by an association line to only the use cases that role can initiate. Correct it by labelling each actor with its role and drawing an association line from each actor to every use case it uses.

**b.** The **student** — the case study states that an order is removed when it is collected by a student scanning their ID card.

**c.** **«extends»**, with the arrow pointing **from "update balance" to "remove order"**.

An order is removed in two situations: when it is cancelled, *and* when it is collected. The balance is only updated (refunded) in the **cancellation** case — so updating the balance happens *sometimes*, under a condition, which is exactly what «extends» means. If it were «includes», every removal would have to refund the account, which would wrongly refund students who simply collected their lunch.`
},
{
  id: 'vcaa22-c5', src: 'vcaa22', section: 'C', type: 'short', marks: 2, unit: 'u3a2', topic: 'ux',
  stimulus: `Shane has developed two mock-ups for the IszCool Canteen app.

@[y2022-mockups]`,
  stem: 'a. Define the term "affordance". b. Provide an example of how affordance has not been demonstrated in Mock-up A.',
  sample: `**a.** **Affordance** is how clearly an element of an interface communicates what it does and how it is meant to be used — a button that looks pressable, a field whose label makes the required input obvious, an icon whose meaning is immediately understood.

**b.** In Mock-up A the action labels "Update balance" and "Update payment details" are positioned **away from the controls they belong to**, off to the right of the dropdowns rather than on or beside a button. A user cannot tell whether these are headings, links or buttons, or which control performs each action — so the interface fails to communicate what is clickable and what each element does.`
},
{
  id: 'vcaa22-c6', src: 'vcaa22', section: 'C', type: 'short', marks: 3, unit: 'u3a2', topic: 'evaluation-criteria',
  stem: `Classify each evaluation criterion as measuring **efficiency** or **effectiveness**.

1. Can users from different language backgrounds easily use the app?
2. Does the user interface enable input on a range of devices?
3. Are users able to quickly update their payment details?`,
  sample: `1. **Effectiveness** — this is about whether the app does its job for all its users (usability and accessibility), not about the resources it consumes.
2. **Effectiveness** — this concerns whether the solution works across the devices it needs to (portability/usability), which is a measure of how well it does its job.
3. **Efficiency** — "quickly" is about the **time** the user spends, which is a resource. Efficiency questions almost always turn on time, cost or effort.`
},
{
  id: 'vcaa22-c9', src: 'vcaa22', section: 'C', type: 'short', marks: 3, unit: 'u3a1', topic: 'data-structures',
  stimulus: `IszCool Solutions needs a data structure to store parent and student details temporarily, before the data is written to a file. A parent must provide:

- StudentID
- parent's name
- parent's email address
- phone number
- name on credit card
- credit card number
- credit card expiry date and CVV number
- daily limit for student order`,
  stem: 'a. Identify the type of data structure that IszCool Solutions should use. b. Explain why the data structure identified in part a. is the most appropriate type to store the data.',
  sample: `**a.** A **record**.

**b.** The listed items are attributes of **one thing** — a single parent-and-student registration — and they are of **varying data types**: StudentID and the names are strings, the phone number and credit card number are strings or integers, the expiry date is a date, and the daily limit is a numeric value. A record is the only examinable structure that groups fields of *different* data types under one item, and each field can be accessed by its **field name**, which makes the code readable and less error-prone.

An array cannot be used, because both a one-dimensional and a two-dimensional array hold elements of a **single** data type and are accessed by numeric index only — the mixture of strings, dates and numbers here could not be stored without losing the type of each value.`
},
{
  id: 'vcaa22-c11', src: 'vcaa22', section: 'C', type: 'short', marks: 4, unit: 'u3a1', topic: 'internal-documentation',
  stimulus: `Two programmers will write the code for the app. Ming argues that internal documentation is not functional and slows down the writing of the more important code modules. Soula believes internal documentation is just as important as the code.`,
  stem: 'a. Which programmer — Ming or Soula — has the more acceptable approach and why? b. Assuming internal documentation is to be used, describe two characteristics of internal documentation.',
  sample: `**a. Soula.** Internal documentation costs a small amount of time while the code is being written and saves far more later. Two programmers are working on this app simultaneously, and each will have to read and modify code the other wrote — without comments explaining and justifying the data and code structures, that is slow and error-prone. The app will also need maintenance long after both have forgotten the detail. Ming is right that documentation is not *executed*, but "not functional" is not the same as "not valuable": the cost of undocumented code is paid every time anyone returns to it.

**b.**
1. **It explains and justifies the data and code structures** — not restating what a line does, which the reader can see, but recording *why* it was written that way, such as why a record was chosen to hold each order.
2. **It supports maintenance, including placeholder comments (stubs)** marking work planned but not yet written, so the structure of the solution is visible and the team knows what remains outstanding.

*(Also creditable: meaningful identifier names, consistent indentation and whitespace, and a header block naming the module's author, purpose and date.)*`
},
{
  id: 'vcaa22-c12', src: 'vcaa22', section: 'C', type: 'short', marks: 3, unit: 'u4a1', topic: 'alpha-testing',
  stimulus: `~~~
Begin
  If accountBalance >= totalPurchase
    If totalPurchase <= dailyLimit
      accountBalance ← accountBalance – totalPurchase
      Print accountBalance
    Else
      Print "You have exceeded your daily limit"
    End If
  Else
    Print "Top up your account"
  End If
End
~~~

The first row is done for you: accountBalance 20, dailyLimit 15, totalPurchase 20 → "You have exceeded your daily limit."`,
  stem: 'Complete the test table using accountBalance = 20 and dailyLimit = 15 throughout, choosing values of totalPurchase that test the remaining paths.',
  sample: `| accountBalance | dailyLimit | totalPurchase | Output |
| --- | --- | --- | --- |
| 20 | 15 | 20 | You have exceeded your daily limit |
| 20 | 15 | 15 | 5 |
| 20 | 15 | 25 | Top up your account |
| 20 | 15 | 16 | You have exceeded your daily limit |

The three paths through the code are: purchase within both limits (row 2, printing the new balance of 5); purchase greater than the balance (row 3); and purchase within the balance but over the daily limit (rows 1 and 4).

Row 2 uses **15**, exactly on the \`<= dailyLimit\` boundary, and row 4 uses **16**, one above it — boundary values are where off-by-one errors hide, and choosing them is what earns the marks.`
},
{
  id: 'vcaa22-c13', src: 'vcaa22', section: 'C', type: 'short', marks: 4, unit: 'u4a2', topic: 'security-controls',
  stimulus: `Several modules of the IszCool Canteen app are being developed simultaneously. Copies of the software have been installed on various notebooks and desktops for testing and editing. The latest working version is always accessible to the development team through a browser online. However, there are issues with unauthorised copies being accessed by people other than the development team.`,
  stem: 'a. List one physical security control and one software security control that could protect the development of the app. b. Identify and describe how the use of a software security control would ensure that there is always a working version of the app accessible to the development team.',
  sample: `**a.**
- **Physical security control:** locking the room or cabinet where the development notebooks and desktops are kept, and requiring a swipe card for entry — with devices set to lock automatically when unattended. (IszCool staff work from home and from a shared business hub, so unattended devices are a real exposure.)
- **Software security control:** robust identity and access management on the code repository and the online environment — individual accounts with multi-factor authentication and role-based permissions, so only development team members can reach the code.

**b.** **Version control within a code repository.**

Every change any developer submits is recorded with its author and timestamp, and all previous versions are retained. Because several modules are being developed at once, each developer's changes are **merged** rather than overwriting anyone else's work, and conflicts are flagged for deliberate resolution instead of being silently lost.

If a change breaks the build, the team can identify exactly which submission caused it and **roll back to the last known-good version**, so a working copy remains available online at all times. The repository also holds the authoritative copy centrally rather than on individual notebooks, so a lost or compromised laptop does not take the working version with it — and its access log shows who retrieved the code, which is what IszCool needs to investigate the unauthorised copies.`
},

/* ==========================================================
   VCAA 2023 — SECTION A
   ========================================================== */
{
  id: 'vcaa23-a1', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'algorithms',
  stimulus: `~~~
Function search(list[], low, high, target)
1   While low <= high
2     mid ← (low + high) / 2
3     If target = list[mid] Then
4       Return mid
5     End search
6     Else If target > list[mid] Then
7       low ← mid + 1
8     Else
9       high ← mid - 1
10    End If
11  End While
12  Return -1
End search
~~~`,
  stem: 'The type of algorithm shown in the pseudocode is a',
  options: ['binary search.', 'insertion sort.', 'linear search.', 'quick sort.'],
  answer: 0,
  explanation: 'The algorithm repeatedly takes the **middle** element and discards half the remaining range by moving `low` or `high` — that is a **binary search**. A linear search would step through elements one at a time, and neither sort algorithm returns a position for a target.'
},
{
  id: 'vcaa23-a2', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'algorithms',
  stimulus: `From the trace table for the search algorithm: with low = 0 and high = 9, mid = 4 and \`list[mid]\` = 17. Later, with low = 5 and high = 9, mid = 7 and \`list[mid]\` = 23.`,
  stem: 'Which one of the following lists of numbers could have been used in this trace?',
  options: [
    '1, 8, 17, 23, 25, 27',
    '0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    '8, 27, 1, 19, 17, 23, 21, 4, 13, 25',
    '1, 4, 8, 13, 17, 19, 21, 23, 25, 27'
  ],
  answer: 3,
  explanation: 'Three things must all hold: the list has **10 elements** (high starts at 9), it is **sorted** (binary search requires it), and `list[4] = 17` with `list[7] = 23`. Only option D satisfies all three — A has six elements, B is sorted but has the wrong values, and C is unsorted.'
},
{
  id: 'vcaa23-a3', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'language-features',
  stimulus: `~~~
Function search(list[], low, high, target)
1   While low <= high
2     mid \u2190 (low + high) / 2
3     If target = list[mid] Then
4       Return mid
5     End search
6     Else If target > list[mid] Then
7       low \u2190 mid + 1
8     Else
9       high \u2190 mid - 1
10    End If
11  End While
12  Return -1
End search
~~~`,
  stem: "In the search algorithm, the statement 'Else' relates to which one of the following control structures?",
  options: ['iteration', 'selection', 'a method', 'a function'],
  answer: 1,
  explanation: '`If … Else If … Else` chooses between alternative paths, which is **selection**. The `While` in the same algorithm is the iteration; methods and functions are not control structures at all.'
},
{
  id: 'vcaa23-a4', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'internal-documentation',
  stem: 'Within an application\'s code base, comments describe the function of sections of code and support future maintenance. How do programming languages differentiate between code to be executed and comments that should be ignored?',
  options: [
    'Comments are stored in a separate file to the code.',
    'Comments are only placed at the very start of the file containing the code.',
    'Comments commence with a symbol character or sequence of characters.',
    'Programming languages are intelligent enough to tell the difference between code and comments.'
  ],
  answer: 2,
  explanation: 'A comment is marked by a **specific symbol or sequence** that tells the compiler or interpreter to ignore the rest of the line or block — `//`, `#`, `\'`, `/* … */` depending on the language. Internal documentation lives *inside* the source file, which rules out A.'
},
{
  id: 'vcaa23-a6', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'srs',
  stem: 'In which stage of the problem-solving methodology does collecting data to determine requirements take place?',
  options: ['design', 'analysis', 'evaluation', 'development'],
  answer: 1,
  explanation: 'Determining solution requirements, constraints and scope is the work of the **analysis** stage, and its output is the software requirements specification. Design turns those requirements into detailed designs; development builds them.'
},
{
  id: 'vcaa23-a7', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'srs',
  stimulus: `Poh is planning to introduce new software. When checking the **customer satisfaction logs** of the existing system, Poh identifies that the current software does not cater to the needs of users from diverse cultural backgrounds.`,
  stem: 'In analysing the needs of the new software, which data collection technique is Poh using?',
  options: ['logs presented in a report', 'an interview', 'observation', 'a survey'],
  answer: 0,
  explanation: 'Poh is examining **existing records** — the satisfaction logs — rather than asking or watching anyone. Reports and logs supply historical and quantitative evidence about a system, which is exactly what is happening here.'
},
{
  id: 'vcaa23-a8', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'requirements',
  stem: 'Given that Poh is looking to meet the needs of users from diverse cultural backgrounds, what type of constraint would this place on the development of the solution?',
  options: ['legal', 'social', 'technical', 'economic'],
  answer: 1,
  explanation: '**Social** constraints concern how the solution affects and includes people — cultural expectations, accessibility, inclusivity and user diversity. Nothing here is about law, technology or money.'
},
{
  id: 'vcaa23-a9', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'project-management',
  stem: 'If the completion of an entire project is delayed because one particular task has taken longer to complete than expected, that task must be',
  options: ['a milestone.', 'a Gantt chart.', 'on the critical path.', 'the last task in the project.'],
  answer: 2,
  explanation: 'The **critical path** is the chain of dependent tasks that determines the minimum project duration — by definition, a delay to any task on it delays the whole project. A task off the critical path has float and can slip without that effect. A milestone has zero duration, so it cannot itself run over.'
},
{
  id: 'vcaa23-a10', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'legal-analysis',
  stem: 'Under the Privacy Act 1988, organisations are required to',
  options: [
    'de-identify all sensitive or personal information.',
    'notify individuals of the reasons for collecting their personal data.',
    'withhold an individual\'s personal data, despite the individual making a reasonable request for access.',
    'disclose the precise storage location of all personal and sensitive data related to an individual, including data stored locally and in the cloud.'
  ],
  answer: 1,
  explanation: 'APP 1 and APP 5 require **open and transparent handling** — telling individuals why their information is being collected. A is too absolute (data must be destroyed or de-identified only once no longer needed), C is the *opposite* of the access right, and D is not required.'
},
{
  id: 'vcaa23-a13', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'evaluation',
  stem: 'In which stage of the problem-solving methodology is a strategy developed to determine whether a solution has met requirements?',
  options: ['design', 'analysis', 'evaluation', 'development'],
  answer: 0,
  explanation: 'The **evaluation strategy** — the criteria, the time frame and who is responsible — is written during **design**, so the team knows what success looks like before building. It is *applied* later, in the evaluation stage, after the solution has been in use.'
},
{
  id: 'vcaa23-a14', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'language-features',
  stem: 'Stephen is writing a block of code that will accept coordinates as parameters and return a Boolean value to indicate whether the given location is on land. This code will be called from multiple different parts of his program. This block of code is most likely',
  options: ['a control structure.', 'an instruction.', 'a function.', 'a method.'],
  answer: 2,
  explanation: 'A named block that takes parameters, returns a value and can be called from anywhere in the program is a **function**. It would only be a *method* if it belonged to a class and operated on an object, which nothing in the stem suggests.'
},
{
  id: 'vcaa23-a15', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'data-structures',
  stimulus: `The following diagram represents a data structure that organises related data of a single data type. The index uses integers.

~~~
index   0    1    2    3    4
value   5   10   22    6
~~~`,
  stem: 'Which of the following data structures does the diagram represent?',
  options: ['array', 'record', 'variable', 'associative array'],
  answer: 0,
  explanation: 'A single line of values of **one data type**, accessed by an **integer** index, is an **array**. A record holds fields of varying types; a variable holds one value; an associative array is keyed by names rather than integers (and is not part of the current study design).'
},
{
  id: 'vcaa23-a16', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'evaluation-criteria',
  stem: 'Which of the following is a characteristic of an effective software solution?',
  options: ['authenticity', 'completeness', 'cost of data processing', 'speed of processing instructions'],
  answer: 1,
  explanation: '**Completeness** — does the solution do everything it was required to do — is a measure of **effectiveness**. Cost and speed are measures of *efficiency*, because they concern resources consumed.'
},
{
  id: 'vcaa23-a17', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'vulnerabilities',
  stem: "A finance officer receives an invoice by email from the school's regular stationery supplier and notices that the supplier's banking details have changed. The officer contacts the supplier, who confirms they sent the invoice but their banking details have not changed. This could suggest that the stationery supplier is a victim of",
  options: ['a data breach.', 'a phishing scam.', 'social engineering.', 'a man-in-the-middle attack.'],
  answer: 3,
  explanation: 'The supplier genuinely sent the invoice, but what arrived had been **altered in transit** — someone intercepted the communication between the two parties and changed the banking details before it reached the recipient. That interception and alteration is the defining characteristic of a **man-in-the-middle attack**.'
},
{
  id: 'vcaa23-a19', src: 'vcaa23', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'analysis-tools',
  stem: 'Use case diagrams are used to outline and summarise how',
  options: [
    'data is manipulated and flows through a system.',
    'actors interact with a system and its functions.',
    'external entities interact with a system.',
    'data is transmitted across a network.'
  ],
  answer: 1,
  explanation: 'A use case diagram shows **actors** — the roles that use the system — and the **use cases** they interact with. Option A describes a data flow diagram, and option C uses "external entities", which is DFD/context-diagram vocabulary, not use case vocabulary.'
},

/* ==========================================================
   VCAA 2023 — SECTION B / C
   ========================================================== */
{
  id: 'vcaa23-b2', src: 'vcaa23', section: 'B', type: 'short', marks: 2, unit: 'u3a1', topic: 'data-types',
  stem: 'Explain why it is sometimes necessary to store numbers in a string data type variable. Provide an example of when numbers should be stored as a string rather than as a numeric data type.',
  sample: `A numeric data type should only be used for values you intend to **calculate with**. Some values are made up of digits but are really **identifiers or codes**: they are never added, averaged or compared numerically, they may contain leading zeros or non-digit characters such as spaces and plus signs, and they may be longer than a numeric type can hold precisely. Storing them as numbers would strip leading zeros and lose information.

**Example:** an Australian mobile phone number such as \`0412 345 678\`. Stored as a number the leading zero disappears, giving 412345678, and the spaces cannot be kept — so it must be stored as a **string**.

*(Equally valid: postcodes such as 0800, credit card numbers, student ID numbers, product barcodes.)*`
},
{
  id: 'vcaa23-b3', src: 'vcaa23', section: 'B', type: 'short', marks: 4, unit: 'u3a1', topic: 'design-tools',
  stimulus: `An app developer is creating a sports-scoring application that is currently in the design stage. Two of the solution designs are shown: a **Login screen** with username and password fields, a login button and a logo image; and a **Welcome / Main menu** screen with a greeting and the options *Score a New Game*, *Previous Scores*, and *Settings and User Preferences*.`,
  stem: 'a. Identify the type of design tool used for the sports-scoring application. b. Explain how object descriptions and pseudocode represent different aspects of the solution design, in comparison to the design tool identified in part a.',
  sample: `**a.** A **mock-up** — a visual representation of the user interface showing the layout, the controls and their labels.

**b.** The three tools describe **different aspects** of the same solution.

A **mock-up** represents the **appearance and layout of the user interface**: what the user sees, which controls exist, where they sit, and how the screen is organised. It says nothing about what happens internally when a button is pressed.

An **object description** represents the **data structure of the solution** — the classes it will contain, their properties/attributes with data types, and their methods. For this app it would describe a Game or Player object holding scores, not how any screen looks.

**Pseudocode** represents the **processing logic** — the step-by-step algorithm a module follows, using sequence, selection and iteration. For this app it would set out how a score is validated and added to a running total.

So the mock-up covers the *interface*, the object description covers the *data*, and pseudocode covers the *processing* — together they describe a solution that no one tool could specify alone.`
},
{
  id: 'vcaa23-b4', src: 'vcaa23', section: 'B', type: 'short', marks: 5, unit: 'u4a1', topic: 'beta-testing',
  stimulus: `Ananta leads a team creating a workflow management tool for a large marketing organisation. As the project nears completion she is conducting usability testing, and knows that members of the development team should not be participants.

To record the results she is considering two methods.
**Method 1:** recording a video of the tests.
**Method 2:** observing the tests directly so she can ask clarifying questions.`,
  stem: 'a. Identify who should participate in the usability test and explain why. b. Identify which method Ananta should use. Justify your answer.',
  sample: `**a.** The participants should be **the intended end users — employees of the marketing organisation who will use the tool to monitor production of marketing and advertising materials**.

They are the only people who bring the real tasks, the real domain knowledge and, crucially, **no prior knowledge of how the software was built**. Developers know where every control is and what each label means, so they navigate around problems unconsciously and cannot judge whether the solution is learnable. Testing with genuine users is what reveals whether the tool actually meets the requirements in practice.

**b.** **Method 2 — direct observation with clarifying questions.**

The decisive advantage is that Ananta can ask **why** something happened at the moment it happens. A video shows *that* a user hesitated for twenty seconds on a screen, but not whether they were confused by a label, searching for a missing control, or simply reading. Asking in the moment captures the reasoning, which is what turns an observation into an actionable change.

Direct observation also allows follow-up on unexpected behaviour and lets her probe issues the test plan did not anticipate.

The trade-off is that observation is not a permanent record and the observer's presence may make participants self-conscious, so a strong answer notes that **recording the session as well** would combine the reasoning captured live with a reviewable record. But if only one method may be used, Method 2 yields the more useful data.`
},
{
  id: 'vcaa23-b6', src: 'vcaa23', section: 'B', type: 'short', marks: 2, unit: 'u3a2', topic: 'file-management',
  stem: 'Compare how version control is different from backing up a file.',
  sample: `They have **different purposes**, and neither substitutes for the other.

**Version control** manages *change*. It records every modification made to a file over time, along with who made it and when, and retains all previous versions. Its purpose is to let a team collaborate without overwriting each other's work, to see how and why the code reached its current state, and to **revert to a specific earlier version** when a change breaks something.

**Backing up** manages *loss*. It creates a copy of files at a point in time, stored separately, so that data can be **restored after a hardware failure, deletion, corruption or ransomware attack**. A backup is typically a snapshot of the whole set of files, not a history of individual edits, and it does not record who changed what.

In short: version control answers "what changed, by whom, and can I go back to a particular version?", whereas a backup answers "the data is gone — can I get it back?"`
},
{
  id: 'vcaa23-c2', src: 'vcaa23', section: 'C', type: 'short', marks: 3, unit: 'u4a2', topic: 'improving-security',
  stimulus: `Ness has set out the secure development practices her team will implement:

- two-factor authentication (password and swipe card) to access office spaces and devices
- logs recording user access to office spaces and the development environment, including failed attempts
- ongoing professional learning about secure development practices
- ongoing code auditing for security vulnerabilities
- ongoing code auditing to meet industry standards and legal requirements around security

These practices will be evaluated for their effectiveness once the project is complete.`,
  stem: 'Suggest three criteria that Ness could use to evaluate the effectiveness of the secure development practices she will be putting in place.',
  sample: `Each criterion should be specific and **measurable**, and should target one of the practices Ness has actually put in place.

**Criterion 1: Is access to office spaces and the development environment restricted to authorised personnel only?**
Measured by reviewing the access logs against the current staff list, and counting failed access attempts and any successful access by an account that should no longer have it.

**Criterion 2: Are security vulnerabilities identified and resolved promptly through code auditing?**
Measured by the number of vulnerabilities found per audit and the average time between a vulnerability being identified and being fixed — a falling count over successive audits indicates the practices are working.

**Criterion 3: Have all team members completed the ongoing professional learning on secure development?**
Measured by training completion records, and corroborated by whether the same categories of vulnerability keep reappearing in code audits after training has been delivered.`
},
{
  id: 'vcaa23-c3', src: 'vcaa23', section: 'C', type: 'short', marks: 2, unit: 'u3a1', topic: 'naming-conventions',
  stem: 'Ness and her team need to select a naming convention to be used by all team members when naming variables, functions and other components of their code base. Describe one characteristic that their naming convention should incorporate, and provide an example of what this characteristic would look like when implemented in this solution.',
  sample: `**Characteristic: names should be descriptive and consistently formatted, so that the purpose of every identifier is clear from its name alone.**

The team is distributed between Melbourne and overseas offices, and three separate modules are being built in sequence, so developers will constantly read code written by someone else. A consistent, self-describing convention means a reader understands an identifier without tracing where it came from, which supports both collaboration and later maintenance.

**Example:** adopting **camel case** with descriptive names across the whole code base, so the transcription module uses \`transcribedText\`, \`wordLibrary\` and \`audioCheck()\` rather than \`tt\`, \`wl\` and \`ac()\`. Every team member follows the same rule, so a developer joining the translation module recognises the pattern immediately.

*(Snake case — \`transcribed_text\` — would be equally acceptable, provided it is applied consistently.)*`
},
{
  id: 'vcaa23-c5', src: 'vcaa23', section: 'C', type: 'short', marks: 3, unit: 'u3a2', topic: 'analysis-tools',
  stimulus: `The context diagram for the user profile and authentication module:

@[y2023-context]

Below is a partial Level 1 data flow diagram representing the authentication process, with three elements unlabelled:

@[y2023-dfd]`,
  stem: 'Referring to the context diagram, identify the correct names for labels A, B and C.',
  sample: `**A: user** — the external entity supplying the username to the "Check username" process, and receiving \`invalid_username\` back.

**B: user** — the same external entity supplying the password to the "Authenticate password" process. (Duplicating an external entity in a DFD is an accepted convention to avoid long crossing data flows.)

**C: login_status** — the data flow returned from the "Authenticate password" process to the user, reporting the outcome of the authentication attempt.

The method that earns the marks: a Level 1 DFD must **balance** with its context diagram, so every external entity and every external data flow on one must appear on the other. Read the labels straight off the context diagram rather than inventing plausible names.`
},
{
  id: 'vcaa23-c9', src: 'vcaa23', section: 'C', type: 'short', marks: 3, unit: 'u3a2', topic: 'evaluation-criteria',
  stimulus: `Two alternative designs for the transcription module's user interface:

@[y2023-designs]

The three evaluation criteria for the designs:

1. Design follows common layout conventions for easy navigation.
2. Design uses standard symbols to communicate functions.
3. Design minimises typing to be more efficient across a range of devices.`,
  stem: 'Use the provided criteria to select a preferred design, Design A or Design B. Justify your choice.',
  sample: `**Preferred design: Design B.**

**Criterion 1 — common layout conventions.** Design B uses a persistent left-hand icon rail for navigation with the content to its right, which is the conventional layout for a web application and matches what users already know from other tools. Design A uses a File/Settings/Logout menu bar, which is a desktop-application convention and is less familiar in a browser.

**Criterion 2 — standard symbols.** Design B communicates its functions with **standard icons** — a home glyph, a settings cog, a logout symbol — which are recognised across languages. This matters for a translation and transcription platform whose users are, by definition, working across languages. Design A relies entirely on English text labels.

**Criterion 3 — minimises typing.** This is where the difference is decisive. Design A requires the user to **type a file path and type a file type** into text fields, which is slow, error-prone and close to unusable on a mobile device. Design B provides a **drop zone for the file** and **selectable output format chips**, so the same task is completed with taps and no typing at all.

Design B satisfies all three criteria; Design A clearly fails the third.`
},
{
  id: 'vcaa23-c10', src: 'vcaa23', section: 'C', type: 'short', marks: 4, unit: 'u4a1', topic: 'alpha-testing',
  stimulus: `Uploading a file for transcription involves checking that the file can be processed. The platform checks the file extension. Valid audio types are .m4a, .mp3, .flac, .ogg and .wav; valid video types are .mp4, .avi, .ogv and .mov. If a valid file is selected it is uploaded for transcription. If any other file type is selected — **including audio and video types other than those listed** — a message is displayed indicating the file is incompatible and asking the user to upload a different file.`,
  stem: 'a. Construct a set of tests to fully test the checking of files uploaded to the platform. b. Explain how the use of an error message when an incompatible file is uploaded would increase the effectiveness of the user interface.',
  sample: `**a.**

| Proposed test | Example file name | Expected result |
| --- | --- | --- |
| Valid audio extension | \`interview.mp3\` | File uploaded for transcription |
| Valid video extension | \`lecture.mp4\` | File uploaded for transcription |
| Audio/video type **not** on the list | \`podcast.wma\` | Incompatible-file message displayed |
| Non-media file type | \`notes.pdf\` | Incompatible-file message displayed |
| No extension / no file selected | \`recording\` | Incompatible-file message displayed |

The third row is the one that distinguishes a strong answer: the stem explicitly says audio and video types *other than those listed* must be rejected, so a test that only tries a PDF does not fully test the check.

**b.** Without a message, a user whose file is rejected sees nothing happen and has no way to tell whether the upload failed, the platform is still working, or they did something wrong — so they retry the same file, or abandon the task.

A clear error message makes the interface effective because it tells the user **what went wrong and how to fix it**: that this file type cannot be processed, and that they should upload a different file. Naming the accepted formats in the message would strengthen it further, letting the user convert the file and succeed on the next attempt rather than guessing. This is error prevention and recovery — a core component of usability, and therefore of how completely the solution meets its users' needs.`
},
{
  id: 'vcaa23-c12', src: 'vcaa23', section: 'C', type: 'short', marks: 6, unit: 'u3a1', topic: 'design-tools',
  stimulus: `~~~
Begin
  For i ← 0 to transc_text.length – 1
    Set error to -1
    Set matched to true
    If compare(transc_text[i], wordLibrary[]) is false Then
      Set matched to false
    End If
    If matched is true Then
      Set matched to result of audio_Check(rec[i])
    End If
    If matched is false Then
      Set error to i
      reTranscribe(rec[error])
      Subtract 1 from i
    End If
  Next i
End
~~~

Part of the data dictionary is already complete: **error** is an integer used to determine the position of an error within the transcription; **rec[]** is an array (audio).`,
  stem: 'Complete the data dictionary for transc_text[], rec[], i, matched and wordLibrary[].',
  sample: `| Name | Data type / structure | Description |
| --- | --- | --- |
| error | integer | Position of an error within the transcription |
| **transc_text[]** | **array of strings** | Collection of words transcribed from the uploaded audio |
| rec[] | array (audio) | **The audio segments of the uploaded recording, one per transcribed word** |
| **i** | **integer** | **Loop counter / index used to step through each transcribed word** |
| **matched** | **Boolean** | Used to determine whether an issue with the transcription has been detected |
| **wordLibrary[]** | **array of strings** | Collection of words from previously transcribed audio |

The reasoning: \`transc_text\` and \`wordLibrary\` both hold **words**, so they are arrays of strings; \`i\` counts loop iterations and indexes an array, so it is a whole number — an **integer**; and \`matched\` is only ever set to true or false, so it is a **Boolean**.`
},
{
  id: 'vcaa23-c13', src: 'vcaa23', section: 'C', type: 'short', marks: 3, unit: 'u4a1', topic: 'approaches',
  stimulus: `To launch on time, Ness's team will integrate a **third-party AI-based translation service** into their platform via API requests. She is worried this could present issues in the medium and long term.`,
  stem: 'Propose how Ness and her team could manage each of these risks. Risk 1: loss of access to the service during server maintenance conducted by the third party. Risk 2: security vulnerabilities could be introduced into the platform. Risk 3: user data could be transferred internationally without users\' knowledge.',
  sample: `**Risk 1 — loss of access during third-party maintenance.**
Negotiate a service level agreement specifying guaranteed uptime and advance notice of scheduled maintenance, and design the module to **fail gracefully**: queue translation requests when the API is unavailable and process them when service resumes, showing users a clear status message rather than an error. Identifying a second provider that could be switched to removes the single point of failure entirely.

**Risk 2 — security vulnerabilities introduced into the platform.**
Vet the provider before integration and review its security documentation and certifications. In the platform itself, **validate and sanitise everything** sent to and returned from the API rather than trusting it, use encrypted connections for every call, restrict the API credentials to the minimum permissions needed and store them securely, and include the integration in the team's ongoing code auditing so the third-party boundary is reviewed like any other code.

**Risk 3 — user data transferred internationally without users' knowledge.**
This engages **APP 8 of the Privacy Act 1988**, which requires reasonable steps before disclosing personal information overseas. Establish where the provider processes and stores data, and choose one with onshore processing if possible. Update the privacy policy and obtain informed consent so users know their documents may be sent overseas for translation (**APP 1** and **APP 6**), and **de-identify or minimise** the content sent — transmitting only the text needed for translation, stripped of names and account identifiers.`
},
{
  id: 'vcaa23-c14', src: 'vcaa23', section: 'C', type: 'short', marks: 4, unit: 'u3a1', topic: 'data-sources',
  stimulus: `The translation module splits the source document into paragraphs, generating an XML file. It sends each paragraph to the API as a separate request, working through each paragraph node. As each paragraph is translated, the API **adds the translated data to the end of the original XML file**. A junior developer recommends using a CSV file instead.`,
  stem: 'a. Justify why it is better to use an XML file in this scenario, rather than a CSV file. b. From the options below, circle one factor that would influence the decision to use an XML file when designing the module: affordance · interoperability · marketability · security.',
  sample: `**a.** Three reasons, all specific to this module:

**The data is hierarchical.** The document splits into paragraphs, and each paragraph must carry both its original text and, later, its translation. XML represents that nesting naturally with a document element containing paragraph nodes, each holding child elements. CSV can only represent a **flat table of like rows** and could not hold the original and translated versions of a structured document together.

**The content contains commas.** Paragraphs of natural-language prose are full of commas — and the platform handles Chinese, English, French, Arabic and Spanish, adding further punctuation variation. In CSV a comma is the field delimiter, so every paragraph would break across fields and corrupt the file. XML delimits with named tags, so punctuation inside a value is harmless.

**It is extensible.** The API **appends** translated data to the existing file, and the platform is intended to grow from five to fifty languages. New elements can be added to an XML file without breaking code that reads the existing ones, so translations in additional languages can be added to the same document over time.

**b. Interoperability** — the file is the medium of exchange between Ness's platform and an external third-party service, and XML's wide support across platforms and systems is exactly what makes that exchange reliable.`
},

/* ==========================================================
   VCAA 2024
   ========================================================== */
{
  id: 'vcaa24-a1', src: 'vcaa24', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'validation',
  stem: 'Type checking is a validation technique that ensures that the',
  options: [
    'data entered falls within a certain range.',
    'required field has data entered and is not empty or blank.',
    'data entered has a minimum number of characters.',
    'data entered is of a particular data type.'
  ],
  answer: 3,
  explanation: '**Type checking** confirms the data is of the correct data type — that a numeric field contains a number, not text. Option A describes range checking and option B describes existence checking; the three are constantly swapped in distractors.'
},
{
  id: 'vcaa24-a2', src: 'vcaa24', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'alpha-testing',
  stem: 'Testing the usability of software solutions takes place in which stage of the problem-solving methodology?',
  options: ['analysis', 'design', 'development', 'evaluation'],
  answer: 2,
  explanation: 'Testing — including usability testing — happens in the **development** stage, alongside building the solution. The *evaluation* stage occurs after the solution has been in use for a period and judges it against the criteria written during design.'
},
{
  id: 'vcaa24-a12', src: 'vcaa24', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'srs',
  stimulus: `A developer is identifying needs and requirements for an update to an application used by police to check vehicle registration details, and believes a good starting place is to analyse the existing application.`,
  stem: 'Which of the following data collection techniques would determine the **efficiency** of the existing application?',
  options: [
    'surveying police members about ways to make the updated application run more quickly',
    'observing the number of errors police members make when using the existing application',
    'reviewing the system logs printed as reports to determine the time taken for each check',
    'interviewing police members to determine if they think updating their passwords every three months is too frequent'
  ],
  answer: 2,
  explanation: 'Efficiency is about **resources consumed**, so it needs objective measurement — the system logs give the actual **time taken** per check. Surveys and interviews collect opinion, and counting user errors measures effectiveness (usability), not efficiency.'
},
{
  id: 'vcaa24-a13', src: 'vcaa24', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'file-management',
  stem: 'Which of the following is **not** a technique to manage files effectively?',
  options: ['using version control', 'saving on a USB drive', 'using naming conventions', 'maintaining regular backups'],
  answer: 1,
  explanation: 'Version control, naming conventions and backups are three of the five named file management techniques. **Saving on a USB drive** is a storage location, not a management technique — and a poor one: it is easily lost, rarely encrypted and gives no change history.'
},
{
  id: 'vcaa24-a14', src: 'vcaa24', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'language-features',
  stimulus: `~~~
Begin
  x ← 1
  y ← 1
  While x < 5
    x ← x + y
    y ← x + y
  End While
  Print y
End
~~~`,
  stem: 'What is the expected output from the pseudocode above?',
  options: ['5', '6', '7', '8'],
  answer: 3,
  explanation: 'Trace it in a table. Start x = 1, y = 1. **Iteration 1:** x = 1 + 1 = 2, then y = 2 + 1 = 3. **Iteration 2:** x = 2 + 3 = 5, then y = 5 + 3 = **8**. Now x = 5, so `x < 5` is false and the loop exits. The program prints **y**, not x — which is the trap.'
},
{
  id: 'vcaa24-a15', src: 'vcaa24', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'vulnerabilities',
  stem: 'A defining characteristic of a man-in-the-middle attack is',
  options: [
    'exploiting software vulnerabilities.',
    'alteration of web application data.',
    'unauthorised access to databases.',
    'intercepting communication between two parties.'
  ],
  answer: 3,
  explanation: 'A man-in-the-middle attack **intercepts communication between two parties** who believe they are talking directly to each other — typically over an unsecured network or an unencrypted connection. The attacker can then read and sometimes alter the traffic, but the interception is what defines it.'
},
{
  id: 'vcaa24-a17', src: 'vcaa24', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'vulnerabilities',
  stem: 'In a security strategy, what is an effective technique for managing risks associated with third-party software?',
  options: [
    'ignoring software updates provided by third-party vendors',
    'allowing third-party software to run with administrative privileges',
    'using third-party software without reviewing its source or provider',
    'conducting thorough security audits of third-party software before integration'
  ],
  answer: 3,
  explanation: 'Third-party software must be **reviewed before it is brought into the solution**, because once integrated its vulnerabilities become yours. The other three options each *increase* the risk: ignoring patches leaves known vulnerabilities open, administrative privileges breach least privilege, and using code unreviewed is the risk itself.'
},
{
  id: 'vcaa24-a19', src: 'vcaa24', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'evaluation-criteria',
  stem: 'During an e-commerce checkout operation, the process of validating a credit card typically takes about five seconds. Which of the following statements is most likely to be true?',
  options: [
    'The process is not efficient because of the timeliness of the inputs.',
    'The process is effective because the validation performed is correct.',
    'The process is not effective because the validation operation is not clear.',
    'The process is efficient because a slower process is likely to be cheaper.'
  ],
  answer: 1,
  explanation: '**Effectiveness** is about whether the process does its job — and validating the card correctly is exactly that, regardless of how long it takes. The five seconds is a question of *efficiency*, not effectiveness. Option D inverts the relationship: slower is not more efficient.'
},
{
  id: 'vcaa24-b3', src: 'vcaa24', section: 'B', type: 'short', marks: 4, unit: 'u3a2', topic: 'project-management',
  stimulus: `When reviewing the development of a web-based application, a software company realised they had spent too long designing the user interface and as a result ran out of time to develop a payment function.`,
  stem: 'a. Identify one tool that could be used to identify project tasks that are on the critical path. b. Discuss how identifying tasks on the critical path and recording the progress of the project could have prevented this problem from occurring.',
  sample: `**a.** A **Gantt chart** (produced in project management software).

**b.** A Gantt chart shows every task against a timeline with its dependencies, which makes the **critical path** visible — the chain of dependent tasks that determines the minimum project duration. Had the company identified that user interface design sat on the critical path and that development of the payment function depended on it, they would have known from the outset that **every day of overrun in design was a day taken directly from development**, rather than treating design as having slack it did not have.

**Recording progress** is the other half. By comparing actual completion against the planned bars at regular intervals, the project manager would have seen the design task running over **while it was happening**, not at the review afterwards. That early warning creates options that are still open at the time: reallocate developers to the design task, reduce the scope of the interface work, negotiate a later delivery date, or move the payment function to a subsequent version as a deliberate decision.

Recording progress also means **annotating the plan** with what changed and why, and rescheduling the dependent tasks — so the impact on the payment function would have been documented and visible to everyone, instead of emerging only when time ran out.`
},
{
  id: 'vcaa24-b5', src: 'vcaa24', section: 'B', type: 'short', marks: 3, unit: 'u3a2', topic: 'ux',
  stimulus: `Mustafa is designing a software solution to enhance the resolution of satellite imagery. It allows users to zoom into any region of the world up to a distance of 1 metre, and produces an image at any zoom level in less than half a second.

**Magnification tool 1:** when the user selects the magnifier tool the cursor becomes a magnifying glass. Each left-click on the map zooms in by an additional 5%, and each right-click zooms out by 5%.

**Magnification tool 2:** the user types a zoom percentage into a text box and the map zooms to that percentage.`,
  stem: 'a. State one functional requirement of this system. b. Select one of the magnification tools and state one reason why it has better affordance than the other.',
  sample: `**a.** *"The solution allows users to zoom into any region of the world to a level of detail of 1 metre."*

This is functional because it describes something the solution **does**. (The half-second response time in the stem is a *non-functional* requirement — it describes how well the solution performs, not a feature.)

**b. Magnification tool 1** has better affordance.

When the tool is selected the cursor **changes into a magnifying glass**, which immediately signals to the user what the tool does and that clicking on the map will magnify it. The interaction is direct — the user clicks the part of the map they want to see, and repeated clicks give continuous feedback as the image zooms in 5% at a time, so it is obvious both what to do and that it is working.

Tool 2 gives no such signal: a bare text box does not communicate that it controls magnification, does not indicate what range of values is acceptable, and requires the user to already know what percentage corresponds to the level of detail they want.`
},
{
  id: 'vcaa24-c4', src: 'vcaa24', section: 'C', type: 'short', marks: 4, unit: 'u3a2', topic: 'analysis-tools',
  stimulus: `When a customer wants to use their points to purchase a coffee, the staff member must first check there are enough points available. The rewards application checks the Customer ID and displays the customer's points balance.

@[y2024-dfd]`,
  stem: 'a. Complete the diagram by filling in the two missing labels, i and ii. b. State whether the diagram is a Level 0 or Level 1 data flow diagram, and state one reason why.',
  sample: `**a.**
- **i. Customer** (or *staff member* / *Cafe SD staff*) — the **external entity** that supplies the Customer ID and receives the points confirmation back.
- **ii. points balance** (or *customer_points*) — the **data flow** returned from the Customer Datastore to the "Check points balance" process, carrying the balance that is then displayed.

**b.** It is a **Level 1** data flow diagram.

The reason: it shows a **named, numbered individual process** ("Check points balance") together with a **data store**, decomposing one specific function of the system. A **Level 0** diagram — a context diagram — represents the *entire* system as a **single** process and contains **no data stores at all**. The presence of the Customer Datastore alone settles it.`
},
{
  id: 'vcaa24-c9', src: 'vcaa24', section: 'C', type: 'short', marks: 2, unit: 'u3a1', topic: 'data-sources',
  stimulus: `Customers can redeem points at any Cafe SD store. The rewards application saves transactions in a central location so that a customer's current points balance can be retrieved and updated at any store. Vanja is deciding whether to use a CSV file or an XML file.`,
  stem: 'State one benefit of using a CSV file format and one benefit of using an XML file format to retrieve or update a customer\'s points balance.',
  sample: `**CSV:** the data is a simple flat table — one row per customer holding a customer ID and a points balance — which is exactly what CSV is designed for. Files are **compact and fast to read and write**, which matters when a balance must be retrieved and updated quickly at the point of sale, and the file can be opened directly in a spreadsheet by Cafe SD staff without any special tooling.

**XML:** the data is **self-describing and hierarchical**, so each value is wrapped in a named tag and a customer record can contain nested detail — such as the individual transactions making up the balance, each with its own store and timestamp. It is also **extensible**: Cafe SD can add new elements later (as they do when they extend the app beyond coffee to other menu items) without breaking the code that already reads the file, and its wide platform support makes exchanging data between separate stores more reliable.`
}

);
