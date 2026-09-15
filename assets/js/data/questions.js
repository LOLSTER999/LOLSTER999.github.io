/* ============================================================
   Question bank
   ------------------------------------------------------------
   Questions are reproduced from the papers in the revision folder:
     VCAA  — 2025 VCE Applied Computing: Software Development exam
     DLTV  — Applied Computing: Software Development Trial Exam 1, 2025
     TSSM  — Software Development Units 3 & 4 Trial Examination, 2025

   Each question carries:
     unit  — u3a1 | u3a2 | u4a1 | u4a2   (for weak-area analysis)
     topic — the lesson id it revises, so results can link back
   Diagram-only questions from the original papers are omitted where
   the diagram cannot be represented faithfully in text.
   ============================================================ */

const SOURCES = {
  vcaa25: { label: 'VCAA 2025 exam',  short: 'VCAA 2025' },
  dltv25: { label: 'DLTV Trial Exam 1, 2025', short: 'DLTV 2025' },
  tssm25: { label: 'TSSM Trial Exam, 2025',   short: 'TSSM 2025' }
};

const QUESTIONS = [

/* ==========================================================
   VCAA 2025 — SECTION A
   ========================================================== */
{
  id: 'vcaa25-a1', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'data-structures',
  stimulus: `Consider the following visual representation of a data structure that stores a series of numbers as floating point values.

~~~
index    0     1     2     3     4
value   1.2   5.0   4.1   2.6   3.9
~~~`,
  stem: 'The data structure represented above is',
  options: ['a record.', 'an XML file.', 'a one-dimensional array.', 'a two-dimensional array.'],
  answer: 2,
  explanation: 'A single row of same-typed values accessed by one index is a **one-dimensional array**. A record holds fields of *varying* data types; a 2D array needs rows *and* columns.'
},
{
  id: 'vcaa25-a2', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'naming-conventions',
  stem: "`street_number` is an example of a variable using which naming convention?",
  options: ['Hungarian notation', 'snake casing', 'camel casing', 'snail casing'],
  answer: 1,
  explanation: 'All lower case with words joined by underscores is **snake casing**. Hungarian notation would use a type prefix (`strStreetNumber`); camel casing would be `streetNumber`. "Snail casing" does not exist.'
},
{
  id: 'vcaa25-a3', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'errors',
  stem: 'Ana Lucia writes a short program. When she tries to run it, the compiler shows an error message indicating a syntax error. Ana Lucia has most likely',
  options: [
    'attempted to divide a number by zero.',
    'used a variable that has not been defined.',
    'missed a required symbol within an instruction.',
    'executed a loop condition that causes the program to run indefinitely.'
  ],
  answer: 2,
  explanation: 'A **syntax error** breaks the rules of the language and is caught by the compiler *before* the program runs — such as a missing symbol. Divide by zero is a runtime error, and an infinite loop is a logic error.'
},
{
  id: 'vcaa25-a4', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'language-features',
  stimulus: `The following pseudocode is used to calculate a cash bonus for referring new customers.

~~~
1  IF referrals <= 10 THEN
2    RETURN referrals * 500
3  ELSEIF referrals > 10 AND referrals <= 30 THEN
4    RETURN 5000 + (referrals - 10) * 600
5  ELSEIF referrals > 30 THEN
6    RETURN 15000 + (referrals - 30) * 700
7  ENDIF
~~~`,
  stem: 'The control structure being used in the pseudocode segment above is',
  options: ['repetition.', 'selection.', 'property.', 'method.'],
  answer: 1,
  explanation: '`IF … ELSEIF … ENDIF` chooses between alternative paths, which is **selection**. Repetition would require a loop. "Property" and "method" are OOP terms, not control structures.'
},
{
  id: 'vcaa25-a5', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'design-tools',
  stimulus: `The same pseudocode as the previous question:

~~~
1  IF referrals <= 10 THEN
2    RETURN referrals * 500
3  ELSEIF referrals > 10 AND referrals <= 30 THEN
4    RETURN 5000 + (referrals - 10) * 600
5  ELSEIF referrals > 30 THEN
6    RETURN 15000 + (referrals - 30) * 700
7  ENDIF
~~~

The cash bonus calculation *should* work so that:

- fewer than 10 referrals results in a cash bonus of $500 per referral
- between 10 and 30 referrals results in a cash bonus of $5000, plus $600 for every referral after the 10th
- more than 30 referrals results in a cash bonus of $15 000, plus $700 for every referral after the 30th.`,
  stem: 'Which one of the following statements is correct?',
  options: [
    '9 referrals will result in a higher cash bonus than 10 referrals.',
    '10 referrals will result in a higher cash bonus than 11 referrals.',
    '29 referrals will result in a higher cash bonus than 31 referrals.',
    '31 referrals will result in a higher cash bonus than 29 referrals.'
  ],
  answer: 2,
  explanation: 'Trace it. 29 referrals → 5000 + (29−10)×600 = 5000 + 11 400 = **$16 400**. 31 referrals → 15 000 + (31−30)×700 = **$15 700**. So 29 referrals pays more than 31 — the tier boundaries produce a drop. (9 → $4500 vs 10 → $5000, and 10 → $5000 vs 11 → $5600, so A and B are false.)'
},
{
  id: 'vcaa25-a6', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'ux',
  stimulus: `A mock-up of an online tax calculator is described as follows. Default font is Arial 12pt black; the title and button font is 20pt.

The elements on the page appear in this order and arrangement:

~~~
Easy tax calculator
[Calculate tax]  Enter the date for this calculation:
Field for income
Tax: $
Enter the income to calculate the tax on:
Field for date
Space for providing output
Are you claiming the tax-free threshold?   [ ] Check box
~~~

Labels and their corresponding fields are not positioned together, and the button appears before the inputs.`,
  stem: 'Based on the mock-up provided, the user experience (UX) characteristic that could be improved the most is',
  options: ['contrast.', 'portability.', 'affordance.', 'authentication.'],
  answer: 2,
  explanation: '**Affordance** is how clearly an element communicates what it does and what input it needs. Here labels sit nowhere near their fields, so the user cannot tell what to type where. Contrast is a *design principle*, not one of the four UX characteristics; portability is not a UX characteristic at all; authentication is only a component of the security characteristic.'
},
{
  id: 'vcaa25-a7', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'design-tools',
  stimulus: `The online tax calculator takes a date, an income, and a checkbox indicating whether the user is claiming the tax-free threshold. It outputs the tax payable.`,
  stem: 'Which one of the following input-process-output (IPO) charts best reflects the processing of the online tax calculator?',
  options: [
    'Input: date, income · Process: look up tax rate; calculate tax · Output: tax',
    'Input: date, income, tax-free threshold · Process: calculate tax; look up tax rate; subtract tax-free threshold amount from income · Output: tax',
    'Input: date, income, tax-free threshold · Process: look up tax rate; subtract tax-free threshold amount from income; calculate tax · Output: tax',
    'Input: date, income, tax-free threshold · Process: look up tax rate; if tax-free threshold claimed, subtract tax-free threshold amount from income; calculate tax · Output: tax'
  ],
  answer: 3,
  explanation: 'The chart must list **every** input (including the checkbox) and must reflect the **conditional** behaviour. Only option D says "*if* tax-free threshold claimed, subtract…". Option A omits the checkbox; B has the processes out of order; C subtracts the threshold unconditionally.'
},
{
  id: 'vcaa25-a8', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'requirements',
  stem: 'Penny is working on a mobile application and needs to ensure it performs well on devices with limited processing power. Which of the following factors is most relevant to this constraint?',
  options: [
    "the project's budget for marketing",
    'the hardware capabilities of target devices',
    "user feedback about the mobile application's user interface",
    'compliance with industry frameworks, such as the Information Security Manual'
  ],
  answer: 1,
  explanation: 'Limited processing power is a **technical constraint** — specifically the hardware capabilities of the devices the solution must run on. Budget is economic, feedback relates to usability, and the ISM is a legal/framework consideration.'
},
{
  id: 'vcaa25-a10', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'analysis-tools',
  stimulus: `An incomplete use case diagram of a vehicle parking payment application is shown below.

@[vcaa25-parking-uc]

Drivers access the application via their mobile phones. When logged into their accounts they can check their vehicle's parking status, purchase parking time, and increase their parking time. Payment is handled within the application. Parking officers at the local council office can use their laptops to adjust parking rates within the application.`,
  stem: 'The unlabelled actor represents',
  options: ['a mobile phone.', 'a parking officer.', 'the local council office.', 'the parking payment application.'],
  answer: 1,
  explanation: 'Actors are **roles that interact with the system**. The only other role described is the **parking officer**, who adjusts parking rates. A mobile phone is a device, not an actor; the council office is a place; and the application is the system itself, which sits inside the boundary.'
},
{
  id: 'vcaa25-a11', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'oop',
  stem: "Juliet is designing a class for a bank application. To prevent external access, she wants to ensure that the variable `accountBalance` can only be accessed and modified by methods inside the Account class. Which access modifier should Juliet use?",
  options: ['public', 'default', 'private', 'protected'],
  answer: 2,
  explanation: '**private** restricts access to the defining class only. `public` allows access from anywhere; `protected` also allows subclasses; there is no examinable "default" modifier in this study design.'
},
{
  id: 'vcaa25-a12', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'alpha-testing',
  stem: 'Richard notices that his application is not performing calculations correctly, and decides to comment out some of the code. One of the benefits of this approach is that',
  options: [
    'the commented-out code is removed and can never be used again.',
    'the application will run faster because the errors have been removed.',
    'all errors in the code will be fixed and no further investigation will be needed.',
    'he can review and adjust the code as needed and continue to debug the application.'
  ],
  answer: 3,
  explanation: 'Commenting out **preserves** the code while disabling it, so the developer can isolate the fault and restore or adjust the code afterwards. The other options claim commenting out deletes code or fixes errors, which it does not.'
},
{
  id: 'vcaa25-a13', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'project-monitoring',
  stem: 'A project manager realises that a task on the critical path is running behind by two days. What is the most effective way for her to record and address this delay?',
  options: [
    'Provide additional resources to the project.',
    'Shorten a non-critical task in the project by two days.',
    'Remove non-critical tasks from the project to compensate for the delay.',
    'Adjust the timeframe for the delayed task and reschedule dependent tasks accordingly.'
  ],
  answer: 3,
  explanation: 'The question asks how to **record and address** the delay — both verbs matter. Adjusting the timeframe and rescheduling dependent tasks does both. Adding resources might address it but records nothing, and shortening or removing *non-critical* tasks cannot recover time on the critical path.'
},
{
  id: 'vcaa25-a14', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'project-monitoring',
  stem: 'A project has repeatedly added new features at the client\'s request, leading to scope creep. Without adjustments to the project plan, what is the most likely long-term impact?',
  options: [
    'The original objectives of the project may not be achieved as resources are diverted to the new features.',
    'Added features will lead to better stakeholder satisfaction even if the project is delayed.',
    'The project will exceed its budget and timeline but achieve a higher-quality outcome.',
    'The team will complete the project as planned but with reduced motivation.'
  ],
  answer: 0,
  explanation: 'Scope creep without plan adjustment diverts time, budget and people away from the agreed requirements, so **the original objectives may not be met**. The other options wrongly present scope creep as producing a better or unchanged outcome.'
},
{
  id: 'vcaa25-a15', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'language-features',
  stimulus: `Within the code of a bicycle shop solution there is:

- a constant called \`GST\` with a value of 0.1 (10% tax)
- a global variable called \`markup\` with a value of 1 (100% markup)
- a local variable called \`price\`, which refers to the purchase price of the bicycle.`,
  stem: 'Which one of the following statements is **incorrect**?',
  options: [
    "To change the value of `GST`, the code would need to be changed.",
    "The global variable `markup` can be called from anywhere in the code.",
    "The local variable `price` can only be called from within a selection control structure.",
    "The value of `markup` could change based on the line of code that is currently being executed."
  ],
  answer: 2,
  explanation: 'Scope is determined by the **function or block** in which a variable is declared, not by the type of control structure. A local variable is accessible anywhere inside its own function. The other three statements are all true: constants require a code change, globals are accessible everywhere, and a global\'s value can change as execution proceeds.'
},
{
  id: 'vcaa25-a16', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'vulnerabilities',
  stem: 'One example of an insider threat to an organisation and its development environment is that',
  options: [
    "a developer modifies the configuration of the development environment, which allows the application's code and data to become publicly accessible.",
    'an international group of malicious individuals repeatedly send phishing emails to employees, and a receptionist clicks a link within the email.',
    'anti-malware scanning tools detect and block suspicious scripts uploaded by external consultants.',
    "an electrical fire caused by a hardware fault damages the organisation's network infrastructure."
  ],
  answer: 0,
  explanation: 'An **insider** threat originates from someone *within* the organisation — here, a developer whose configuration change exposes code and data. B describes an external attack, C is a control working correctly, and D is a physical/hardware incident.'
},
{
  id: 'vcaa25-a17', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'security-controls',
  stimulus: `A company uses software on a single device in its reception area to manage a visitor log. The log stores sensitive information about each visitor — their face, name, licence ID number and visit times. Visitors type their name, select who they are visiting, provide licence ID numbers and have their photo taken; the photo and details are printed onto a visitor sticker.`,
  stem: 'Which one of the following statements highlights the most important security control for the data stored by the application?',
  options: [
    'The data stored by the application should be encrypted.',
    'The data should be backed up to the cloud so it can be restored in the event of data loss.',
    'Each visitor should be required to set up multi-factor authentication on their phone to verify their identity.',
    'Complex passwords should have a minimum length of 12 characters, be based on non-dictionary words and include a mixture of upper case, lower case and symbol characters.'
  ],
  answer: 0,
  explanation: 'The risk here is **sensitive personal information at rest on a device in a public area**, so **encryption** is the most important control. Backups protect against loss, not disclosure; requiring visitors to set up MFA is impractical and protects accounts rather than the stored data; password complexity protects the operator account, not the data itself.'
},
{
  id: 'vcaa25-a18', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'legislation-frameworks',
  stem: 'Desmond works for the Victorian Government, which is updating the security of a third-party application that stores contact details of approved contractors. The Copyright Act 1968 (Cwlth) would be breached if Desmond',
  options: [
    'applied an official patch.',
    'accidentally deleted some of the data during the update process.',
    'backed up the data to an insecure file server before applying the update.',
    "edited the code directly without obtaining permission from the code's author."
  ],
  answer: 3,
  explanation: 'The Copyright Act protects the **expression of ideas**, including source code. Modifying a third party\'s code without permission breaches it. Deleting data and using an insecure server are privacy/security problems (Privacy Act, PDP Act), and applying an official patch is authorised by the vendor.'
},
{
  id: 'vcaa25-a19', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'legislation-frameworks',
  stem: 'Which one of the following is a strategy listed in the Essential Eight?',
  options: ['prevent scope creep', 'perform regular backups', 'develop evaluation criteria', 'include detailed internal documentation'],
  answer: 1,
  explanation: '**Regular backups** is one of the Essential Eight. The other three are software development practices from Units 3 and 4, not cyber security mitigation strategies.'
},
{
  id: 'vcaa25-a20', src: 'vcaa25', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'ethics',
  stem: 'A software development organisation uses artificial intelligence (AI) to write the initial code of all new software packages it develops. This is an ethical issue because',
  options: [
    'the code written might not be efficient.',
    'any use of AI to write code is unethical.',
    'the organisation might be too reliant on AI.',
    'the AI might not put meaningful comments in the code it writes.'
  ],
  answer: 2,
  explanation: 'The ethical concern is **over-reliance** — the organisation may lose the capability to review, debug and take responsibility for its own product. Options A and D describe quality problems, not ethical ones, and B is far too absolute.'
},

/* ==========================================================
   VCAA 2025 — SECTION B (short answer)
   ========================================================== */
{
  id: 'vcaa25-b1a', src: 'vcaa25', section: 'B', type: 'short', marks: 1, unit: 'u3a2', topic: 'project-management',
  stem: 'Describe how tasks are sequenced in a Gantt chart.',
  sample: `Tasks are placed along a horizontal time axis in the order in which they must occur, with the length of each bar showing the task's duration. A task that depends on another begins only after that task's bar ends, and dependencies are shown by linking arrows; tasks whose bars overlap vertically can run concurrently.`
},
{
  id: 'vcaa25-b1b', src: 'vcaa25', section: 'B', type: 'short', marks: 2, unit: 'u3a2', topic: 'project-management',
  stimulus: `Sayid is managing a software development project with these tasks: research into desirable features (1 week), determining functional requirements (1 week), designing the user interfaces (2 weeks), developing the solution (4 weeks), alpha testing (2 weeks), beta testing (1 week) and preparing the solution for release (1 week).

Dependencies: functional requirements and user interface design must be complete before development begins; beta testing can only occur once alpha testing is complete; the solution can be released once adjustments following beta testing are complete.`,
  stem: 'Aside from project completion, identify one potential milestone in the project and explain its significance in monitoring progress.',
  sample: `**Milestone:** completion of alpha testing.

**Explanation:** this milestone confirms that development is finished and the solution is stable enough for beta testing to begin. Because beta testing and release both depend on it, reaching it late immediately tells Sayid that the remaining tasks must be rescheduled and that the final release date is at risk — so it is a checkpoint against which the whole back half of the project can be measured.

*(Other acceptable milestones: completion of the software requirements/functional requirements, completion of user interface design, completion of development, completion of beta testing.)*`
},
{
  id: 'vcaa25-b1c', src: 'vcaa25', section: 'B', type: 'short', marks: 2, unit: 'u3a2', topic: 'project-management',
  stimulus: `Sayid is managing a software development project with tasks for research, functional requirements, user interface design, development, alpha testing, beta testing and release. Requirements and interface design must finish before development begins; beta testing follows alpha testing; release follows adjustments after beta testing.`,
  stem: "Describe how a Gantt chart can be used to monitor and document the progress of Sayid's software development project.",
  sample: `Sayid can compare the **actual** progress of each task against its planned bar to see whether the project is ahead of or behind schedule at any point in time. Where a task over-runs, he adjusts the length and start dates of that bar and of every dependent task, and annotates the chart to record what changed and why.

Because the chart shows dependencies and the critical path, he can immediately see whether a delayed task will push out the final delivery date or whether it has enough float to absorb the delay. The updated chart therefore becomes a documented record of the project's progress as well as a monitoring tool.`
},
{
  id: 'vcaa25-b2', src: 'vcaa25', section: 'B', type: 'short', marks: 2, unit: 'u4a2', topic: 'improving-security',
  stimulus: `A software development organisation is working with a major sporting brand on a project that will potentially generate millions of dollars in sales annually. The organisation has employed several new software developers and has noticed that secure development practices are not being followed.`,
  stem: 'Describe a strategy that the organisation could use to improve the security of software development practices.',
  sample: `The organisation could introduce **structured onboarding and induction practices with developer training focused on secure development**. New developers would complete a formal induction covering the organisation's security policies and protocols — what data may be used in a development environment, how credentials are handled, the mandatory code review process, and how to recognise and report phishing or suspicious requests — followed by regular refresher training rather than a single session.

This addresses the actual cause of the problem: the newly employed developers do not yet know the organisation's expectations, so training them directly reduces the risk of insecure practices reaching a high-value client project.

*(An equally valid answer: develop a formal **risk management plan** identifying risks, rating them by likelihood and impact, assigning mitigation measures and naming who is responsible for each.)*`
},
{
  id: 'vcaa25-b3', src: 'vcaa25', section: 'B', type: 'short', marks: 4, unit: 'u4a2', topic: 'vulnerabilities',
  stimulus: `Frank is applying updates to the software that runs the day-to-day operations of their business. The business runs a **combined development, testing and production environment**, and the software is still being used while it is being updated.`,
  stem: 'Identify and explain two risks associated with proceeding with the update.',
  sample: `**Risk 1 — untested changes reach the live system.** Because development, testing and production share one environment, an update that has not been fully tested is applied directly to the system the business depends on. If the update introduces a fault, day-to-day operations stop immediately and there is no separate, verified production version to fall back on.

**Risk 2 — real operational and customer data is exposed in the development environment.** Live business data is present where development work is taking place, so developers and testers can access information they do not need for their role, and any compromise of a development machine reaches production data directly. This increases the likelihood of a data breach and the organisation's exposure under the Privacy Act 1988.

*(Also acceptable: users working in the system while it is updated may corrupt data mid-update, or experience unpredictable behaviour and data loss.)*`
},
{
  id: 'vcaa25-b4', src: 'vcaa25', section: 'B', type: 'short', marks: 4, unit: 'u3a1', topic: 'errors',
  stem: `For each error description below, name the relevant type of error, choosing from: logic, overflow, index out of range, type mismatch, divide by zero.

1. There is not enough memory available for the application, leading it to stop working and crash.
2. An application attempts to store text-based data within an array of integers.
3. When a condition is tested, the user receives unexpected outputs.
4. A counter used with an array has been erroneously incremented and moved past the last item in the array.`,
  sample: `1. **overflow**
2. **type mismatch**
3. **logic**
4. **index out of range**

Note that only #3 is a logic error — the program runs and produces a wrong result with no error message. The other three are runtime errors: the program is syntactically valid but fails during execution.`
},
{
  id: 'vcaa25-b5a', src: 'vcaa25', section: 'B', type: 'mcq', unit: 'u3a1', topic: 'data-structures',
  stimulus: `A game is being developed for three players. Each player uses a symbol: C, M or X. Players take turns entering their symbol in an empty position on a **5×5 grid**. The first player to get three of their symbols in a row (horizontally, vertically or diagonally) wins.

Part of an in-progress game:

@[vcaa25-grid]`,
  stem: 'Which data structure is best suited to storing the information described?',
  options: ['one-dimensional array', 'two-dimensional array', 'record'],
  answer: 1,
  explanation: 'The board has rows **and** columns of the same data type, and any cell is addressed by two indices — e.g. `grid[2][1]` holds "C". That is a **two-dimensional array**.'
},
{
  id: 'vcaa25-b5b', src: 'vcaa25', section: 'B', type: 'short', marks: 2, unit: 'u3a1', topic: 'data-types',
  stimulus: `A game for three players. Each player uses a symbol: **C**, **M** or **X**. Players take turns entering their symbol in an empty position on a **5\u00d75 grid**. The first player to get three of their symbols in a row wins.`,
  stem: 'Identify the data type that would be best used to store the symbols that the players use, and provide one reason why it is the best choice.',
  sample: `**Character.**

Each symbol is a single letter — C, M or X — so a character stores exactly what is needed and nothing more. It uses less memory than a string, and because a character can only ever hold one symbol it simplifies validation: there is no need to check the length of the entry before comparing it.`
},
{
  id: 'vcaa25-b5c', src: 'vcaa25', section: 'B', type: 'short', marks: 2, unit: 'u3a1', topic: 'data-sources',
  stimulus: `The game is to be played online. When a player makes a move, the coordinates of the move and the player's symbol are sent to the other players to update their displays. It is possible that future updates to the game could require more information to be sent.`,
  stem: 'Describe two benefits of using XML to send information on a player\'s move.',
  sample: `**Benefit 1 — it is self-describing and hierarchical.** Each value is wrapped in a named tag, so the receiving clients can identify which number is the row, which is the column and which is the symbol without a separate specification. Related values can be grouped inside a parent element, which a flat format like CSV cannot represent.

**Benefit 2 — it is extensible.** If a future update needs to send additional information (a timestamp, a move number, a chat message), new tags can be added to the message without breaking clients that only read the existing tags. Older versions of the game simply ignore tags they do not recognise.`
},

/* ==========================================================
   VCAA 2025 — SECTION C (case study)
   ========================================================== */
{
  id: 'vcaa25-c1', src: 'vcaa25', section: 'C', type: 'short', marks: 3, unit: 'u3a2', topic: 'why-develop',
  stem: 'Jin has the job of collating all the spreadsheets sent in from each agency. It takes Jin 1–2 hours per agency to manually collate the spreadsheets, which is time-consuming. State three reasons why the head office may wish to undertake a software development project.',
  sample: `1. **To increase productivity and efficiency.** Automating collation removes 60–120 hours of manual work each quarter across the 60 agencies, freeing Jin to do analysis rather than data entry.

2. **To reduce costs.** Fewer staff hours are spent on repetitive collation, and fewer errors mean less time and money spent finding and correcting mistakes in financial summaries.

3. **To meet organisational objectives or needs.** A single web-based platform gives consistent, accurate data across all 60 agencies, which the current mixture of dedicated applications, software packages and spreadsheets cannot provide — and it improves communication between agencies and head office.`
},
{
  id: 'vcaa25-c2', src: 'vcaa25', section: 'C', type: 'short', marks: 4, unit: 'u4a2', topic: 'organisations',
  stem: 'Justify why it would be better for the company to develop the web-based application in-house, rather than use an external development team.',
  sample: `**Understanding of existing processes.** Jack and Claire have already analysed how all 60 agencies currently collect and send data, and Jin knows the collation process first-hand. An in-house team can draw on that knowledge continuously, whereas an external team would have to be briefed and would still be working second-hand.

**Protection of personal and financial information.** The solution handles tenants' and owners' personal details, rental applications and financial reports. Keeping development in-house means this data never leaves the organisation, reducing the company's exposure under the Privacy Act 1988 and avoiding the risk of disclosure through a third party.

**Responsiveness to change.** Requirements will keep evolving as agencies of different sizes migrate from spreadsheets and dedicated applications. In-house developers can respond to changes immediately, without renegotiating a contract or paying variation costs.

**Retention of intellectual property and expertise.** The company keeps ownership of the code and the knowledge of how it works, so future maintenance and extensions do not depend on an external contractor remaining available or claiming rights over the solution.`
},
{
  id: 'vcaa25-c3', src: 'vcaa25', section: 'C', type: 'short', marks: 4, unit: 'u3a2', topic: 'srs',
  stimulus: `To create the software requirements specification, Jack and Claire need to gather data on how each real estate agency currently collects, inputs and sends data to the head office, and need a detailed understanding of the requirements of the new web-based application.`,
  stem: 'For each of the stakeholders below, state which method of data collection should be used and provide one reason why this method is the most appropriate: (a) property managers at every agency; (b) leadership team members.',
  sample: `**Property managers at every agency — survey (questionnaire).**
There are property managers across 60 agencies, so a survey is the only practical way to reach all of them. It gathers comparable, standardised responses from a large, geographically spread group efficiently, allowing Jack and Claire to identify which practices are common across agencies and which differ between large and small ones.

**Leadership team members — interview.**
The leadership team is a small group whose input concerns strategic needs and priorities rather than routine practice. An interview allows open-ended discussion and follow-up questions, so Jack and Claire can probe the reasoning behind requirements and clarify ambiguities on the spot — depth that a fixed survey could not provide.`
},
{
  id: 'vcaa25-c5', src: 'vcaa25', section: 'C', type: 'short', marks: 3, unit: 'u3a2', topic: 'requirements',
  stem: `Classify each statement as either a **functional requirement (1)** or a **non-functional requirement (2)**.

1. The software solution does not need to run on Apple devices.
2. Financial reports can be generated for up to 10 years of data.
3. Tenants are able to lodge maintenance requests.`,
  sample: `1. **Non-functional requirement (2).** This is a statement about *portability* — which platforms the solution must support — not about a feature the solution provides.

2. **Functional requirement (1).** Generating financial reports is something the solution *does*; the 10-year limit describes the scope of that function.

3. **Functional requirement (1).** Lodging maintenance requests is a specific behaviour the solution provides to a user group.`
},
{
  id: 'vcaa25-c7a', src: 'vcaa25', section: 'C', type: 'short', marks: 2, unit: 'u3a1', topic: 'oop',
  stimulus: `Users within the system are classified as property owners, property managers, head office staff or tenants. Ben has suggested that while a **User** class is necessary, a subclass should be established for each user group via inheritance.`,
  stem: 'Describe one benefit of inheritance in this context and provide an example with reference to the case study.',
  sample: `**Benefit — code reuse and consistency.** Attributes and methods common to every user can be written once in the parent User class, and each subclass automatically receives them rather than duplicating the code. This also means a change or fix made in the parent applies to every user type at once, which reduces maintenance effort and the risk of the user types behaving inconsistently.

**Example.** Attributes such as userID, name, email and password, and a method such as login(), are defined once in the User class. The PropertyOwner, PropertyManager, HeadOfficeStaff and Tenant subclasses inherit all of them, and each then adds only what is specific to it — for example, Tenant adds a lease start date and PropertyManager adds the agency they are assigned to.`
},
{
  id: 'vcaa25-c7b', src: 'vcaa25', section: 'C', type: 'short', marks: 2, unit: 'u3a1', topic: 'design-tools',
  stimulus: `An object description for a RentalProperty object has two labelled sections:

~~~
A:  propertyID (string), ownerID (string), tenantID (string), agentID (string),
    propertyType (string), address (string()), numBedrooms (integer),
    numBathrooms (integer), size (integer), availableFrom (date), notes (string),
    maintenanceReqs (MaintenanceReq()), inspectionSch (Inspection())

B:  getPropertyDetails(), isAvailable(), updateRentAmount(newRentAmount),
    updateMaintenanceRequest(MaintenanceReq), scheduleInspection(Inspection),
    assignTenant(tenantID, leaseStartDate)
~~~`,
  stem: 'Identify the name of each section of the object description, labelled A and B.',
  sample: `**A — Properties / attributes** (the data each RentalProperty object stores, with its data type).

**B — Methods** (the actions a RentalProperty object can perform).`
},
{
  id: 'vcaa25-c7c', src: 'vcaa25', section: 'C', type: 'short', marks: 4, unit: 'u3a1', topic: 'design-tools',
  stimulus: `When property managers register a property, they collect: property details (type, number of bedrooms and bathrooms, size, **rent amount per month**), address, availability, and additional notes. The leadership team also wants to store extra details such as the property's **occupancy status (true or false)**, maintenance requests and inspection schedules.

The object description already includes propertyID, ownerID, tenantID, agentID, propertyType, address, numBedrooms, numBathrooms, size, availableFrom, notes, maintenanceReqs and inspectionSch. Two attributes (C and D) are missing.`,
  stem: 'Complete the object description by identifying the missing properties/attributes and their respective data types.',
  sample: `| Property/attribute name | Data type |
| --- | --- |
| **rentAmount** (rent per month) | **floating point** — it is a monetary amount that requires decimal places |
| **occupied** (occupancy status) | **Boolean** — the case study states it is true or false |

One mark each for the attribute name, one mark each for a correct and appropriately justified data type.`
},
{
  id: 'vcaa25-c8', src: 'vcaa25', section: 'C', type: 'short', marks: 4, unit: 'u3a2', topic: 'ux',
  stimulus: `Two sketches for the property manager dashboard:

**Sketch 1** — a single column. A welcome line, then a note that "Tenant X offered $3000 per month for Property X", then an inspection notice, then a free-text box headed "Type your activity here:", then a list headed "You may:" containing *Check your calendar*, *Check your upcoming inspections*, *Update your profile*, then Submit note / Submit buttons.

**Sketch 2** — a multi-panel layout. Distinct panels headed *Inspections* and *Calendar*, with inspections grouped under each manager's name (Manager X: Property A – Saturday 10am, Property C – Saturday 12pm; Manager Y: Property B – Saturday 11am), a notifications panel showing the tenant's offer and the inspection time, a *Select Property* control, and a day view listing the times of each activity on Saturday 6 December.`,
  stem: 'For each sketch, justify which characteristic of user experience is better demonstrated compared to the other sketch.',
  sample: `**Sketch 1 — affordance.** The available actions are stated explicitly under the heading "You may:", and each control is clearly labelled with what it does ("Check your upcoming inspections", "Submit note"). A manager can see at a glance what the interface allows them to do and how to do it, whereas Sketch 2 relies on the user inferring what the panels and the *Select Property* control will do.

**Sketch 2 — usability.** All the information a property manager needs is grouped and visible on one screen: inspections organised by manager, a calendar with times, and notifications, so the user can complete their work without navigating away. Sketch 1 requires the manager to click through to a separate calendar and inspections list, which takes more steps for the same task. Grouping related information into labelled panels also makes the screen faster to scan.`
},
{
  id: 'vcaa25-c9', src: 'vcaa25', section: 'C', type: 'short', marks: 3, unit: 'u4a1', topic: 'efficient-effective',
  stem: 'Explain how user-centred design could be used to ensure that the web-based application is efficient and effective.',
  sample: `User-centred design means designing around the needs and abilities of the four identified user groups — property owners, property managers, head office staff and tenants — and involving them throughout development.

**How it is applied:** collect data from each group about how they currently work (surveys of property managers, interviews with the leadership team, observation of Jin's collation process); test the sketches and mock-ups with real users from each group and act on their feedback; and beta test the finished functions with the group that will actually use them.

**Effect on efficiency:** because the interface is designed around the tasks users actually perform, they complete those tasks in fewer steps and with fewer errors — Jin no longer manually collates spreadsheets, and property managers reach inspection information directly rather than through unnecessary navigation.

**Effect on effectiveness:** the solution meets the real requirements of each user group rather than the developers' assumptions, so it does what the company needs and is usable by staff across agencies of very different sizes. It also reduces expensive rework late in the project, because problems are found while designs are still cheap to change.`
},
{
  id: 'vcaa25-c10a', src: 'vcaa25', section: 'C', type: 'short', marks: 4, unit: 'u4a2', topic: 'security-controls',
  stimulus: `John wants to ensure the development environment is protected from a range of threats. He proposes implementing the following security controls as a minimum: robust identity and access management, and version control.`,
  stem: 'Explain how each security control would protect the software development practices or the data to be stored within the application.',
  sample: `**Robust identity and access management.** Only authenticated and authorised people can reach the development environment, the source code and the tenant and owner data held in the application. Using multi-factor authentication and role-based permissions on the principle of least privilege means each developer or staff member can access only what their role requires — so a stolen password alone is not enough to get in, and an insider cannot reach personal or financial data unrelated to their work. Access is removed promptly when someone leaves.

**Version control.** Every change to the code is recorded with its author and timestamp, creating an audit trail that shows who altered what and when. If a change introduces a fault or a vulnerability, the team can identify it and roll back to a known-good version rather than losing work. Code is stored centrally rather than on individual machines, so it survives a hardware failure and can be access-controlled and logged in one place.`
},
{
  id: 'vcaa25-c10b', src: 'vcaa25', section: 'C', type: 'short', marks: 1, unit: 'u4a2', topic: 'threat-modelling',
  stem: 'State a threat modelling principle that could be used to support the protection of the software development practices **after security requirements have been defined**.',
  sample: `**Identifying and mitigating threats** — systematically working out what could go wrong and applying controls to reduce or eliminate each threat.

*(The third principle, confirming that threats have been mitigated, follows after this one.)*`
},
{
  id: 'vcaa25-c11a', src: 'vcaa25', section: 'C', type: 'short', marks: 1, unit: 'u3a1', topic: 'validation',
  stimulus: `~~~
1  BEGIN
2    IF age is not blank THEN
3      IF age < 18 THEN
4        DISPLAY "Must be 18 or over to apply."
5        RETURN False
6      ELSEIF monthly_income < (rental_price * 3) THEN
7        DISPLAY "Monthly income too low."
8        RETURN False
9      ELSE
10       DISPLAY "Application is valid."
11       RETURN True
12     ENDIF
13   ENDIF
14 END
~~~`,
  stem: 'Identify the validation technique that has been used on line 2 of the pseudocode.',
  sample: `**Existence checking** — line 2 confirms that a value has actually been entered for age (the field is not blank) before any further processing occurs.`
},
{
  id: 'vcaa25-c11b', src: 'vcaa25', section: 'C', type: 'short', marks: 2, unit: 'u3a1', topic: 'validation',
  stimulus: `Ben's feasibility pseudocode for validating a rental application:

~~~
1  BEGIN
2    IF age is not blank THEN
3      IF age < 18 THEN
4        DISPLAY "Must be 18 or over to apply."
5        RETURN False
6      ELSEIF monthly_income < (rental_price * 3) THEN
7        DISPLAY "Monthly income too low."
8        RETURN False
9      ELSE
10       DISPLAY "Application is valid."
11       RETURN True
12     ENDIF
13   ENDIF
14 END
~~~`,
  stem: 'Identify a validation technique that should be added to the pseudocode and explain why it is necessary.',
  sample: `**Type checking** should be added.

The code checks only that age is not blank, then immediately compares it numerically on line 3 (\`age < 18\`) and compares monthly_income numerically on line 6. If the applicant enters text — or leaves monthly_income blank entirely — those comparisons will fail or raise a **type mismatch** runtime error, and the application will crash rather than telling the applicant what is wrong. Type checking each field before comparison ensures the values are numeric, so the comparisons are valid and the user receives a meaningful message.

*(Range checking is also defensible — for example rejecting an age of 200 — but type checking is the more direct fix for the code as written.)*`
},
{
  id: 'vcaa25-c11c', src: 'vcaa25', section: 'C', type: 'short', marks: 6, unit: 'u4a1', topic: 'alpha-testing',
  stimulus: `Ben's feasibility pseudocode for validating a rental application:

~~~
1  BEGIN
2    IF age is not blank THEN
3      IF age < 18 THEN
4        DISPLAY "Must be 18 or over to apply."
5        RETURN False
6      ELSEIF monthly_income < (rental_price * 3) THEN
7        DISPLAY "Monthly income too low."
8        RETURN False
9      ELSE
10       DISPLAY "Application is valid."
11       RETURN True
12     ENDIF
13   ENDIF
14 END
~~~`,
  stem: 'Complete the test table to represent the required tests based on the pseudocode. Assume the rental_price is $2000 per month and that all other required values have been entered. Test 1 is done for you: Age 18, Monthly income 2000, expected and actual output "Monthly income too low."',
  sample: `Three tests per pair of marks. The income threshold is rental_price × 3 = **$6000**.

| Test | Age | Monthly income | Expected output displayed | Actual output returned |
| --- | --- | --- | --- | --- |
| 1 | 18 | 2000 | Monthly income too low. | Monthly income too low. |
| 2 | 17 | 8000 | Must be 18 or over to apply. | Must be 18 or over to apply. |
| 3 | 18 | 6000 | Application is valid. | Application is valid. |
| 4 | 25 | 5999 | Monthly income too low. | Monthly income too low. |

Test 2 checks the age branch just below the boundary; tests 3 and 4 sit exactly **on** and just **below** the $6000 income boundary. Choosing boundary values is what earns marks here — three tests all comfortably inside a range test very little.`
},
{
  id: 'vcaa25-c12a', src: 'vcaa25', section: 'C', type: 'short', marks: 1, unit: 'u4a1', topic: 'beta-testing',
  stem: 'State which user group should be selected to participate in beta testing a function that retrieves an inspection report.',
  sample: `**Property managers** — they are the user group who request and use inspection reports, so they are the only testers able to judge whether the retrieved report is correct, complete and useful in practice.`
},
{
  id: 'vcaa25-c12b', src: 'vcaa25', section: 'C', type: 'short', marks: 3, unit: 'u4a1', topic: 'beta-testing',
  stimulus: `Alpha testing of the rental property platform is complete and identified issues are resolved. Ben is ready to commence beta testing of the function that **retrieves an inspection report** — a function used by **property managers**.`,
  stem: 'Describe a beta testing strategy that could be implemented, with reference to that user group.',
  sample: `**Recruit and plan.** Select a group of property managers drawn from agencies of different sizes — including at least one small agency currently using spreadsheets — and give them access to the application for a defined period, using their own devices in their normal working environment.

**Test scenarios.** Ask each manager to complete realistic scenarios rather than abstract instructions: retrieve an inspection report for a specific property, retrieve a report for a property with no completed inspection, and retrieve a report immediately after an inspection has been recorded. These scenarios cover normal use and the edge cases that only appear with real data.

**Observation and documentation of results.** Observe a sample of managers attempting the scenarios (in person or by screen recording) to see where they hesitate or make errors, and provide an in-app feedback form so every tester can report issues as they occur. Record each issue with the steps to reproduce it, the expected and actual result, and the device used, then prioritise the results into changes to the solution before release.`
},
{
  id: 'vcaa25-c13', src: 'vcaa25', section: 'C', type: 'short', marks: 3, unit: 'u4a1', topic: 'project-monitoring',
  stimulus: `The design stage ran over the allocated time. An excerpt from the project log:

~~~
08/09/2025 – Nadia J.   Design of the user interface has taken a week longer than expected.
09/09/2025 – Nadia J.   Design of the interface and feedback now finalised.
14/09/2025 – Sun K.     Object descriptions tracking as expected.
17/09/2025 – Sun K.     Object descriptions completed ahead of time.
~~~`,
  stem: 'Describe one potential issue that might arise due to the way the changes to the project plan were being recorded. Recommend two ways that the recording of the project\'s progress could be improved.',
  sample: `**Issue.** The entries record *that* the user interface design ran a week over, but not **why**, and there is no record of what was done about it — no note of the impact on dependent tasks or the critical path, and no corresponding adjustment to the project plan. Entries are also made only by the person doing each task and at irregular intervals, so Kate as project lead cannot see the overall position of the project or judge whether the delivery date is at risk.

**Recommendation 1.** Record the **cause** of each variance and its **impact on dependent tasks and the critical path**, and annotate the Gantt chart with the rescheduled dates at the same time. This turns the log into something that supports a decision rather than just a diary of events.

**Recommendation 2.** Make entries at **regular, defined intervals** — for example daily, or at every milestone — using a consistent format, and have Kate consolidate them into a single project log so that progress across all team members is visible in one place.`
},

/* ==========================================================
   DLTV Trial Exam 1, 2025 — SECTION A
   ========================================================== */
{
  id: 'dltv25-a1', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'design-tools',
  stem: 'Input-process-output (IPO) charts and pseudocode are created at which stage of the problem-solving methodology?',
  options: ['development', 'evaluation', 'analysis', 'design'],
  answer: 3,
  explanation: 'IPO charts and pseudocode are **design tools**, created in the **design** stage. Analysis determines requirements, constraints and scope; development is where the code is written.'
},
{
  id: 'dltv25-a2', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'ai-programming',
  stem: 'When considering artificial intelligence (AI) assistant tools, which of these approaches is best for a software development team?',
  options: [
    'Encourage the use of AI assistants to replace experienced programmers as mentors.',
    'Ensure employees understand the limits and strengths of AI assistants.',
    'Adopt the most widely used AI assistant because it will be bias free.',
    'Completely forbid use of AI assistants.'
  ],
  answer: 1,
  explanation: 'Responsible and ethical use means developers understand both what AI tools do well and where they fail, so human oversight remains. Replacing mentors risks over-reliance, no AI is bias-free, and a blanket ban discards genuine productivity benefits.'
},
{
  id: 'dltv25-a3', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'language-features',
  stimulus: `In this pseudocode, the values for firstName and yearOfBirth come from a webpage form.

~~~
Begin concat(firstName, yearOfBirth)
  If length of firstName > 10 then
    firstName ← first 10 characters of firstName
  End If
  random ← random integer between 1000 and 9999
  user ← firstName + yearOfBirth + random
  Return user
End concat
~~~`,
  stem: 'The purpose of the concat function is to',
  options: [
    "trim the user's first name down to 10 characters.",
    "concatenate the user's first name and year of birth.",
    "generate a username utilising the user's first name and year of birth.",
    "generate a random number if the user's first name has more than 10 characters."
  ],
  answer: 2,
  explanation: 'Read what the function **returns**: a value called `user`, built from the name, year of birth and a random number. Trimming the name and generating the random number are steps *towards* that purpose, not the purpose itself.'
},
{
  id: 'dltv25-a4', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'validation',
  stimulus: `In this pseudocode, the values for firstName and yearOfBirth come from a webpage form.

~~~
Begin concat(firstName, yearOfBirth)
  If length of firstName > 10 then
    firstName \u2190 first 10 characters of firstName
  End If
  random \u2190 random integer between 1000 and 9999
  user \u2190 firstName + yearOfBirth + random
  Return user
End concat
~~~`,
  stem: 'To validate firstName, which type of check should be added at the start of the function?',
  options: ['type and range check', 'existence and type check', 'existence and range check', 'existence, type and range check'],
  answer: 1,
  explanation: 'firstName must actually have been entered (**existence**) and must be text rather than numbers or symbols (**type**). A range check applies to numeric bounds and is not meaningful for a first name — the length limit is handled by the trimming logic, not by validation.'
},
{
  id: 'dltv25-a5', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'ideation',
  stem: 'The purpose of a mind map is to',
  options: [
    'visually represent a user interface.',
    'gather inspiration from colours.',
    'connect and organise ideas.',
    'evaluate and rule out ideas.'
  ],
  answer: 2,
  explanation: 'A mind map **connects and organises ideas** around a central concept. Representing an interface is a mock-up or sketch; gathering colour inspiration is a mood board; and ideation deliberately defers evaluation.'
},
{
  id: 'dltv25-a6', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'project-monitoring',
  stem: 'Which of these best describes scope creep as a cause of project delays?',
  options: [
    'Additional features were added to the solution.',
    'Changes in personnel slowed development down.',
    'Technical issues meant that some features were difficult to implement.',
    'Budgetary issues meant staff had to use less efficient software for development.'
  ],
  answer: 0,
  explanation: 'Scope creep is specifically the **addition of features beyond the agreed scope** after development has begun. The other options describe the two other named factors — personnel changes and technical issues — and an economic constraint.'
},
{
  id: 'dltv25-a7', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'evaluation-criteria',
  stem: 'Which of these might be a measure of efficiency for a software solution?',
  options: ['completeness', 'maintainability', 'cost of data manipulation', 'communication of message'],
  answer: 2,
  explanation: '**Efficiency** concerns the resources consumed — time, cost, effort — so *cost of data manipulation* is a measure of efficiency. Completeness, maintainability and communication of message are all measures of **effectiveness**.'
},
{
  id: 'dltv25-a8', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'oop',
  stimulus: `Tran has designed classes for a vehicle rental fleet management library. The **Car** and **Van** classes inherit all methods and attributes of the **Vehicle** class.

~~~
Vehicle
  registrationNumber: string
  type: string
  manufacturer: string
  model: string
  year: integer
  rent(date)
  return(date)

Car                 Van
  rented: Boolean     capacity: float
                      rented: Boolean
~~~`,
  stem: 'rent(date) in the Vehicle class is best described as',
  options: ['a method', 'a function', 'a member variable', 'an attribute'],
  answer: 0,
  explanation: 'A function that belongs to a class and operates on its objects is a **method**. "Function" is the general term for a standalone routine; member variables and attributes hold data, not behaviour.'
},
{
  id: 'dltv25-a9', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'oop',
  stem: 'Tran decides to add the `rented` Boolean to the Vehicle class and remove it from the Car and Van subclasses. This is an example of',
  options: ['a 2D array.', 'Inheritance.', 'Generalisation.', 'eXtensible Markup Language (XML).'],
  answer: 2,
  explanation: '**Generalisation** is moving common attributes and methods *up* into a shared parent class. Inheritance is the mechanism by which the subclasses then receive it — the act of relocating the shared member is generalisation.'
},
{
  id: 'dltv25-a10', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'approaches',
  stem: "Catriona has obtained Tran's code library. When she needs help creating objects defined by Tran's classes, Catriona should begin by",
  options: [
    'reading the class definition code Tran wrote.',
    "defining her own classes by copying Tran's code.",
    "defining her own classes that extend Tran's classes.",
    "checking the documentation included with Tran's classes."
  ],
  answer: 3,
  explanation: 'The first step with any third-party library is to **read its documentation** — that is what it exists for. Reading the implementation is slower and unnecessary, and copying the code raises copyright issues as well as duplicating work.'
},
{
  id: 'dltv25-a11', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'srs',
  stem: 'Which of these is **not** included in a software requirements specification (SRS)?',
  options: [
    'context diagrams and data flow diagrams of existing systems',
    'constraints affecting the proposed solution',
    'mood boards for the proposed solution',
    'use case diagrams'
  ],
  answer: 2,
  explanation: 'A **mood board** is an ideation tool used in the **design** stage. The SRS is the output of *analysis*, containing requirements, constraints, scope, user characteristics, technical environment and analytical tools depicting existing systems.'
},
{
  id: 'dltv25-a12', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'srs',
  stem: 'Sophie wants to collect data about an existing retail checkout system, following user complaints that it regularly slows down for no apparent reason. Which of these data-collection methods is most useful for Sophie?',
  options: [
    'interviews with the managers of the users',
    'observation of the system over a period of time',
    'a survey about how easy it is to learn to use the system',
    "a report on the system's profitability over a period of time"
  ],
  answer: 1,
  explanation: 'The users cannot identify a cause ("no apparent reason"), so asking them will not help. **Observation over time** reveals what actually happens and under what conditions the slowdown occurs — behaviour that opinion-based methods would miss.'
},
{
  id: 'dltv25-a13', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'algorithms',
  stem: 'The quick sort algorithm is chosen instead of the selection sort algorithm when a',
  options: ['large array is being sorted.', 'small array is being sorted.', 'simple algorithm is needed.', 'complex algorithm is needed.'],
  answer: 0,
  explanation: 'Quick sort is significantly faster on **large** data sets, which is the only reason to accept its extra complexity. Selection sort is simpler and perfectly adequate for small arrays.'
},
{
  id: 'dltv25-a14', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'errors',
  stem: "Terri misspells the keyword 'while' when implementing a while loop. This produces",
  options: ['an index out of range error.', 'a type mismatch error.', 'a runtime error.', 'a syntax error.'],
  answer: 3,
  explanation: 'A misspelled keyword breaks the rules of the language, so the compiler or interpreter rejects it **before the program runs** — a **syntax error**. Runtime errors occur during execution of otherwise valid code.'
},
{
  id: 'dltv25-a15', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'alpha-testing',
  stem: 'In alpha testing, breakpoints are used to',
  options: [
    'separate documentation into dot points.',
    'separate comments in code.',
    'pause execution of code.',
    'stop execution of code.'
  ],
  answer: 2,
  explanation: 'A breakpoint **pauses** execution at a chosen line so the developer can inspect variable values and step through the code. It does not terminate the program — the distinction between "pause" and "stop" is the whole question.'
},
{
  id: 'dltv25-a16', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'security-controls',
  stem: 'Whenever Philippa logs into her favourite social media website on her laptop, she is required to enter a code sent to her mobile phone via SMS. This is an example of',
  options: ['biometric authentication.', 'asymmetric key encryption.', 'multi-factor authentication.', 'single factor authentication.'],
  answer: 2,
  explanation: 'Two different kinds of evidence are required — something she **knows** (the password) and something she **has** (the phone receiving the SMS) — which is **multi-factor authentication**. Biometrics would be something she *is*.'
},
{
  id: 'dltv25-a17', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'project-monitoring',
  stem: 'Three senior programmers left an organisation in the late stages of developing a new software solution, causing delays to tasks in the critical path. Where should this event be recorded?',
  options: ['in code documentation', 'in the project change log', 'under constraints in the SRS', 'it does not need to be recorded'],
  answer: 1,
  explanation: 'Personnel changes affecting the schedule are recorded in the **project change log** (and reflected by annotating the Gantt chart), so the cause and impact of the delay are documented. The SRS is written during analysis and is not the place to record events during development.'
},
{
  id: 'dltv25-a18', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'legislation-frameworks',
  stem: 'Which of these is **not** one of the Essential Eight cyber security measures recommended by the Australian Cyber Security Centre?',
  options: ['restrict administration privileges', 'secure personal information', 'patch operating systems', 'perform regular backups'],
  answer: 1,
  explanation: '"Secure personal information" is a **privacy obligation** (APP 11), not one of the Essential Eight. The other three — restricting administrative privileges, patching operating systems and regular backups — are all Essential Eight strategies.'
},
{
  id: 'dltv25-a19', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'threat-modelling',
  stem: 'Which of these risks would receive the lowest risk rating in a risk-assessment matrix?',
  options: [
    'catastrophic data breach: major impact and low probability',
    'staff shortage: minor impact and very high probability',
    'software crashes: minor impact and low probability',
    'data breach: major impact and medium probability'
  ],
  answer: 2,
  explanation: 'Risk rating combines **impact × likelihood**, so the lowest rating requires both to be low: **minor impact and low probability**. A minor-impact risk with very high probability still rates higher, because it will actually occur.'
},
{
  id: 'dltv25-a20', src: 'dltv25', section: 'A', type: 'mcq', unit: 'u4a2', topic: 'organisations',
  stem: 'Johan wants to use an external developer to design and program one of the new functions of his software solution, which is already in use. His cyber security advisor suggests mitigating the risks associated with this approach, because of an Australian privacy law. Why might an Australian privacy law be relevant?',
  options: [
    'external development might cost more than in-house development',
    "Johan's own staff might not be able to access code developed externally",
    "the external developers might claim rights to the software's intellectual property",
    'user information might be exposed to third parties through the external developer'
  ],
  answer: 3,
  explanation: 'The **Privacy Act 1988** governs the handling of personal information. Using an external developer on a live system risks **exposing user information to a third party**. The IP concern is real but is a *copyright/contract* issue, and cost is an economic constraint.'
},

/* ==========================================================
   DLTV Trial Exam 1, 2025 — SECTION B / C
   ========================================================== */
{
  id: 'dltv25-b1', src: 'dltv25', section: 'B', type: 'short', marks: 3, unit: 'u3a2', topic: 'analysis-tools',
  stimulus: `Examine this data flow diagram (DFD) showing some operations at a flower shop.

@[dltv-flowershop-dfd]`,
  stem: 'a. Name the type of DFD element represented by *order flowers* and *restock flowers*. b. Explain how this diagram breaks a rule for valid DFD design.',
  sample: `**a.** They are **processes** — elements that transform data.

**b.** The *order quantity* data flow runs **directly between two data stores**. This breaks the rule that every data flow must **begin and/or end at a process**: data cannot move from one store to another without a process acting on it.

*(One mark for identifying the offending flow, one for stating the rule it breaks. Both are required.)*`
},
{
  id: 'dltv25-b2', src: 'dltv25', section: 'B', type: 'short', marks: 4, unit: 'u3a2', topic: 'brief',
  stimulus: `Jesse has been asked to write a brief for a new social media platform. It will be developed and maintained by Jesse's friend as a personal side business. The platform's main feature is to host videos that users from all over the world create, allowing other users to comment on them.`,
  stem: 'Assess the originality and feasibility of the proposed solution.',
  sample: `**Originality.** Originality is the extent to which a proposed solution offers something genuinely new rather than duplicating what already exists. This solution appears to be **lacking in originality**: several hugely successful global platforms already provide exactly the described functionality — user-uploaded video with comments — and the brief identifies nothing that would distinguish it from them.

**Feasibility.** Feasibility is whether the solution can realistically be built, funded and operated. This solution faces serious challenges. **Operationally**, hosting and moderating video from users all over the world requires substantial infrastructure and staffing, well beyond what one person maintaining a personal side business could provide — and moderating the misuse that occurs on every social platform is a continuous obligation. **Financially**, the storage and bandwidth costs of hosting global video at a scale that could compete with existing platforms would be prohibitive for a side business.`
},
{
  id: 'dltv25-b3', src: 'dltv25', section: 'B', type: 'short', marks: 4, unit: 'u3a1', topic: 'errors',
  stimulus: `~~~
Begin
  temperatures ← [21.0, 22.0, 23.0, 21.0, 22.0, 23.0, 20.0, 21.0]
  average ← temperatures[0]
  For i = 1 To 9
    average ← i * average + temperatures[i]
    average ← average / (i + 1)
    Print 'Moving average is', average
  Next i
End
~~~`,
  stem: 'a. Write the output for the first 4 iterations of the loop only. b. When the code was run, an "index out of range" error occurred. Explain why.',
  sample: `**a.**
~~~
Moving average is 21.5
Moving average is 22.0
Moving average is 21.75
Moving average is 21.8
~~~

*(Working: i=1 → (1×21.0 + 22.0)/2 = 21.5. i=2 → (2×21.5 + 23.0)/3 = 22.0. i=3 → (3×22.0 + 21.0)/4 = 21.75. i=4 → (4×21.75 + 22.0)/5 = 21.8.)*

**b.** An "index out of range" error occurs when code references an array position that does not exist. The array \`temperatures\` holds **8 items**, so its valid indexes are **0 to 7**. The loop runs \`i\` from 1 **to 9**, so when \`i\` reaches 8 the statement \`temperatures[i]\` references an element beyond the end of the array and the error is raised. The loop bound should be 7.`
},
{
  id: 'dltv25-b4', src: 'dltv25', section: 'B', type: 'short', marks: 6, unit: 'u3a2', topic: 'legal-analysis',
  stimulus: `Seok Jun is designing an app that uses a cloud-based API to analyse dialogue in novels:

- The user can search and download the full text of popular, current books from undisclosed websites, all from within the app.
- The app automatically decomposes the book text to extract thousands of dialogue snippets like "I'll be there soon," and "Fly, you fools!".
- The API uses AI techniques to predict the villains and heroes in the story from the snippets.`,
  stem: "a. Explain why some of the app's functionality might be affected by federal law in Australia. b. Define the term 'application programming interface' (API). c. The app will let users save projects in a single file containing the book text snippets **and** separate data about villains and heroes. State whether Seok Jun should use CSV or XML, and justify your answer with two reasons.",
  sample: `**a.** The **Copyright Act 1968 (Cwlth)** protects the expression of ideas, including the text of published books. The app downloads the **full text of current, popular books from undisclosed websites** and then copies, adapts and transmits that text as dialogue snippets to a cloud API — all without any indication of a licence from the copyright owners. Both the downloading and the reproduction of the text would breach copyright.

**b.** An **application programming interface (API)** is a defined set of rules that allows different software applications to communicate with and use each other's functionality, often across the internet.

**c.** Seok Jun should use **XML**.

*Reason 1:* the dialogue snippets **contain commas** ("I'll be there soon,"). In a CSV file a comma is the field delimiter, so a snippet containing one would be split across fields and corrupt the record. XML delimits values with named tags, so embedded commas are harmless.

*Reason 2:* the file must hold the snippets **and** separate data about villains and heroes in one project file. That requires a **hierarchical structure** with different kinds of nested records, which XML supports through nested elements. CSV can only represent a single flat table of like rows.`
},
{
  id: 'dltv25-b5', src: 'dltv25', section: 'B', type: 'short', marks: 3, unit: 'u4a2', topic: 'vulnerabilities',
  stimulus: `Global pharmaceutical company Zentaya suffered a major cyber security incident when valuable company data was exposed to rival companies. Independent reviews revealed the attack involved low-level employees being manipulated through misleading emails to repeatedly access and reveal sensitive data over several months.`,
  stem: 'a. State two security vulnerabilities at Zentaya that might have allowed this incident to occur. b. Describe two mitigation measures that might have prevented it.',
  sample: `**a.**
- **Poor identity and access management practices** — low-level employees were able to access highly sensitive data that their roles did not require, so the principle of least privilege was not being applied.
- **Social engineering / phishing** — staff were successfully manipulated by misleading emails, indicating no effective defence against phishing.

**b.**
- **Improved employee training and policy.** Regular security awareness training teaching staff to recognise manipulative or suspicious requests, verify unusual instructions through a separate channel, and report suspected phishing. Because the attack relied on repeated manipulation over several months, trained staff would very likely have identified and reported it early.
- **More restrictive authentication and access controls.** Applying role-based access on the principle of least privilege so that only personnel who genuinely need sensitive data can reach it, combined with multi-factor authentication and monitoring of access logs for unusual patterns — such as one employee repeatedly retrieving sensitive records.`
},
{
  id: 'dltv25-c1', src: 'dltv25', section: 'C', type: 'short', marks: 3, unit: 'u4a2', topic: 'organisations',
  stimulus: `Tailored Software has a goal to significantly increase their number of users over the next 5 years, and an objective to gain 20% more users.`,
  stem: 'Using examples from the case study, explain how organisational objectives differ from organisational goals, while helping to achieve them.',
  sample: `**Objectives are measurable; goals are not necessarily measurable.** A goal is a broad, long-term aim that states a direction, whereas an objective sets a specific, quantifiable target.

**Objectives are how goals are achieved and assessed.** Because a goal cannot be measured directly, objectives are linked to it as concrete steps whose achievement can be checked.

**Applied to the case study:** Tailored Software's *goal* of "significantly increasing their number of users over the next 5 years" is not measurable — "significantly" has no defined value. The *objective* of "gaining 20% more users" is measurable, and achieving it demonstrably moves the organisation towards that goal.`
},
{
  id: 'dltv25-c5', src: 'dltv25', section: 'C', type: 'short', marks: 7, unit: 'u4a2', topic: 'improving-security',
  stimulus: `In previous projects, Tailored Software kept code files on a single computer or a flash drive that floated around the office. Fatima's newly-hired programmers propose to use an online code repository instead.`,
  stem: "a. Discuss two advantages of using an online code repository compared with Tailored Software's previous approach. b. Propose one criterion to formalise secure development practices in the use of code repositories. c. Describe how your criterion might be measured, including the data to collect.",
  sample: `**a.**
- **Version control.** A repository tracks every change to every file and retains earlier versions, recording who made each change and when. Under the previous approach, a change that broke the code could not be identified or undone — the only copy was overwritten, and if the flash drive was lost or corrupted the work was gone entirely.
- **Collaboration.** Multiple programmers can work on different parts of the solution simultaneously and have their changes merged systematically. Previously, only one person could hold the flash drive at a time, so work had to be serialised, and two people editing copies would inevitably overwrite each other.

*(Also acceptable: automated integration and testing whenever changes are submitted.)*

**b.** *Criterion:* **Is the code repository accessed only by authorised personnel?**

**c.** *Measurement:* review the repository's **audit logs** and its **access-configuration settings**, comparing the list of accounts with access against the current staff list and their roles. Any account belonging to a former employee, any account with broader permissions than its role requires, or any access from an unexpected location or at an unusual time indicates the criterion is not being met. The data to collect is therefore the repository's **audit logs, access records and configuration settings**.`
},
{
  id: 'dltv25-c7', src: 'dltv25', section: 'C', type: 'short', marks: 5, unit: 'u3a1', topic: 'oop',
  stimulus: `Object description and data dictionary for a dog owner:

~~~
Name: DogOwner
Properties/Attributes:  private firstName
                        private surname
                        noOfSessions
                        ownedDogs
Methods:                getFirstName()
                        getSurname()
~~~

| Name | Data type | Description |
| --- | --- | --- |
| firstName | string | The owner's first name |
| surname | string | The owner's surname |
| noOfSessions | float | The number of training sessions attended |
| ownedDogs | list of Dog objects | The dogs registered with the owner |
| getFirstName() | method | Returns the owner's first name |
| setFirstName(name) | method | Sets the owner's first name |
| getSurname() | method | Returns the owner's surname |
| setSurname(name) | method | Sets the owner's surname |`,
  stem: 'a. Explain why float is not the best datatype for the noOfSessions attribute. b. Define the concept of encapsulation, supporting your answer with examples of public and private attributes and methods from the object description and data dictionary.',
  sample: `**a.** noOfSessions is a **count** of training sessions attended, so its values are always whole numbers — an owner cannot attend 3.5 sessions. An **integer** is therefore the appropriate type. A floating point type requires more memory for the same numerical range, is slower to process, and introduces unnecessary validation complexity and the possibility of an inexact decimal value being stored or compared.

**b.** **Encapsulation** is bundling an object's data together with the methods that operate on it, and restricting direct access to that data from outside the class. Attributes are declared **private** and access is provided only through controlled **public** methods, so the class can validate every change.

In the DogOwner description, \`firstName\` and \`surname\` are declared **private**, so no code outside the class can read or alter them directly. Access is instead provided through the public methods \`getFirstName()\` and \`setFirstName(name)\` (and the equivalents for surname), which control how the value is read and written — and could, for example, reject an empty name before storing it.`
},
{
  id: 'dltv25-c8', src: 'dltv25', section: 'C', type: 'short', marks: 8, unit: 'u3a1', topic: 'internal-documentation',
  stimulus: `The function for calculating the cost of a training session should apply a discount for owners who have already attended at least 5 sessions, but it contains an error.

~~~
Begin calculateCost(owner, baseCost, discount)
  If owner.noOfSessions <= 5 Then
    cost ← baseCost - baseCost * discount
  Else
    cost ← baseCost
  End If
  Return cost
End calculateCost
~~~`,
  stem: 'a. Determine the value returned when owner.noOfSessions = 3, baseCost = 40 and discount = 0.25. b. To perform a boundary test of the condition, recommend three test values for owner.noOfSessions. c. Identify and write the line of code that has the error, and write the corrected line. d. Justify the need for internal documentation when this function is implemented, using the discount parameter in your answer. e. State the naming convention used in the pseudocode.',
  sample: `**a.** \`30\`. With noOfSessions = 3, the condition \`3 <= 5\` is true, so cost = 40 − (40 × 0.25) = 40 − 10 = **30**.

**b.** **4, 5 and 6** — one below the boundary, the boundary value itself, and one above.

**c.**
Error line: \`If owner.noOfSessions <= 5 Then\`
Corrected line: \`If owner.noOfSessions >= 5 Then\`

The requirement is a discount for owners who have attended **at least 5** sessions, but the code applies the discount to owners with **5 or fewer** — exactly backwards. (Writing \`=>\` instead of \`>=\` is not accepted, and referring to the line only by its number is not accepted.)

**d.** Internal documentation improves **readability**: a comment above the function explains what calculateCost does and what each parameter means, so a reader understands its purpose without tracing the logic. It supports **maintenance** and work by **different programmers**: the team member who later changes the discount rules can see the original intent, which is exactly the kind of understanding whose absence produced the \`<=\` error here.

Applied to the **discount parameter** specifically: the function expects discount as a **floating point proportion between 0 and 1** — 0.25 meaning 25% — not as a percentage value like 25. Nothing in the code communicates that. Without a comment stating it, another programmer could pass \`25\`, and the function would silently calculate 40 − (40 × 25) = −960 rather than raising any error.

**e.** **Camel case** — \`noOfSessions\`, \`baseCost\`, \`calculateCost\`.`
},
{
  id: 'dltv25-c9', src: 'dltv25', section: 'C', type: 'short', marks: 7, unit: 'u4a2', topic: 'vulnerabilities',
  stimulus: `During development of MyPuppySchool, a serious data breach is discovered when existing Tailored Software customers begin receiving warnings from third parties that their passwords and other personal identification information (PII) have been compromised. Fatima realises Tailored Software has not prioritised secure development practices, with many novice programmers on the team.

An initial review reveals that **real customer data from a different, already-released Tailored Software application was found in the development environment for MyPuppySchool**. Tailored Software keeps all systems together on the same hardware. The programmers claim they did not use existing customers' data, but they did use an **experimental AI assistant installed on the office systems** to generate the data.`,
  stem: 'a. Name and outline an industry framework Fatima might use to guide a strategy for mitigating cyber vulnerabilities and threats. b. Suggest two security vulnerabilities in the software development practices at Tailored Software. c. Name the relevant legislation. d. Explain how introducing onboarding and induction practices could help prevent incidents like this in future.',
  sample: `**a.** The **Information Security Manual (ISM)**, published by the Australian Cyber Security Centre. It provides a cyber security framework of principles and guidelines that organisations apply to identify and manage risks, implement security controls, detect and understand cyber security events, and respond to and recover from incidents. Its *Guidelines for Software Development* cover separating development, testing and production environments; secure software design and development; and application security testing. *(The Essential Eight is also acceptable.)*

**b.**
- **Vulnerability 1 — combined development, testing and production environments.** Tailored Software keeps all systems on the same hardware and does not separate the data belonging to different applications, so real customer PII from a released application was present in the MyPuppySchool development environment where novice programmers could access it.
- **Vulnerability 2 — use of an experimental AI assistant with unknown capabilities.** An unvetted AI tool installed on office systems was used to "generate" data. It may in fact have drawn on the real customer data available on those systems, and it may transmit whatever it processes to a third party. Introducing a tool whose behaviour and data handling are not understood is a significant risk.

*(Also acceptable: programmers had unrestricted access to customers' PII when their role did not require it.)*

**c.** The **Privacy Act 1988 (Cwlth)** — in particular APP 11, which requires an organisation to take reasonable steps to protect the personal information it holds.

**d.** Fatima's team includes many **novice programmers** who have no established understanding of secure development practice and evidently did not know that real customer data must never be used in a development environment, or that an experimental AI tool should not be used without approval.

A structured onboarding and induction program would ensure every new developer is taught the organisation's security policies, protocols and procedures before they start work — including which data may be used in development, how environments are separated, and a defined policy on the use of AI assistants and what may be given to them. Because the breach was caused by developers not knowing the rules rather than by a technical control failing, training addresses the actual cause and would very likely have prevented it.`
},
{
  id: 'dltv25-c10', src: 'dltv25', section: 'C', type: 'short', marks: 5, unit: 'u4a1', topic: 'beta-testing',
  stimulus: `As the solution passes the half-way point of development, Fatima begins planning for beta testing over a 3-week period. Beta testing will ensure the key functionality works effectively and efficiently and that the target audience is satisfied. She is aware of several local dog obedience schools who may be willing to participate.

The key features are unchanged from the initial brief — owners register their details, owners update details and register dogs, trainers schedule training sessions, owners book and pay for sessions, trainers mark attendance — except for a new feature allowing trainers to generate certificates for graduating dogs.`,
  stem: 'a. Suggest three test scenarios for beta testing MyPuppySchool. b. Outline a methodology for feedback to be obtained from beta testers.',
  sample: `**a.**
1. A dog owner registers their details and then registers one or more dogs against their account.
2. A trainer schedules a training session, and an owner books and pays for that session.
3. A trainer generates a certificate for a graduating dog — the newly added feature, which has had the least prior use.

*(Also acceptable: a trainer marking attendance for a session; an owner updating their existing details.)*

**b.** **Recruit** staff and members from the local dog obedience schools Fatima has identified, choosing testers across both trainer and owner roles so every user group is represented, and give them access for the full three-week period using their own devices in their normal environment.

**Capture feedback through a defined system:** an in-app feedback form attached to each scenario so issues can be reported at the moment they occur, plus a short structured survey after each scenario covering whether the task was completed, how long it took and what was confusing.

**Hold regular feedback sessions** with the participating schools — for example weekly — to discuss issues in more depth and observe testers attempting the scenarios. All results are documented with the steps to reproduce each issue, and prioritised into changes to the solution before release.`
},

/* ==========================================================
   TSSM Trial Exam, 2025 — SECTION A
   ========================================================== */
{
  id: 'tssm25-a1', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'project-management',
  stem: 'A student records milestones, dependencies and the critical path in a Gantt chart. Why is it important to monitor the progress of the project throughout the development stages?',
  options: [
    'To evaluate the quality of the final product',
    'To identify the coding errors in the program',
    'To ensure the solution remains within the allocated budget',
    'To ensure tasks are completed in the correct order and on schedule'
  ],
  answer: 3,
  explanation: 'Monitoring a Gantt chart is about **sequence and schedule** — confirming tasks are completed in the planned order, on time, with dependencies managed. Evaluating the product and finding coding errors are different activities entirely.'
},
{
  id: 'tssm25-a2', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'ai-programming',
  stem: 'A student uses AI-powered tools that generate code based on natural language prompts, helping to reduce development time. What is the main advantage of using prompts to generate code?',
  options: [
    'It guarantees the code will be free of bugs.',
    'It removes the need for human coders entirely.',
    'It speeds up development by auto-generating code.',
    'It ensures the code will be perfectly optimised and free of bugs.'
  ],
  answer: 2,
  explanation: 'The genuine benefit is **speed** — automating repetitive and boilerplate code. Options claiming AI *guarantees* bug-free code, *removes* human coders or *ensures* perfect optimisation are all absolutes, and all wrong: human oversight remains essential.'
},
{
  id: 'tssm25-a3', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'beta-testing',
  stem: 'Which of the following best describes the purpose of beta testing in the software development process?',
  options: [
    'To find issues through real-world user testing before release.',
    'To correct syntax errors and logic errors found during coding.',
    'To ensure that the software design meets the original specifications.',
    'To verify that individual modules of code function correctly in isolation.'
  ],
  answer: 0,
  explanation: 'Beta testing is conducted by **real users in a real environment** before release. Correcting errors during coding and testing modules in isolation are **alpha** testing activities carried out by the development team.'
},
{
  id: 'tssm25-a4', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'ai-programming',
  stem: 'What is the main advantage of automated debugging using AI tools?',
  options: [
    'It always finds logic errors.',
    'It replaces the need for human developers.',
    'It speeds up the identification and fixing of code errors.',
    'It rewrites the entire code automatically without the user\'s input.'
  ],
  answer: 2,
  explanation: 'AI debuggers and linters **reduce the time** spent finding and fixing errors. They do **not** reliably catch every logic error, and they do not replace developers — both are absolutes that give the distractors away.'
},
{
  id: 'tssm25-a5', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'requirements',
  stem: 'Which of the following describes a non-functional requirement?',
  options: [
    'The solution must record customer orders.',
    'The solution must be available 99% of the time.',
    'The user must be able to reset their password if forgotten.',
    'The solution must allow users to log in and change their password.'
  ],
  answer: 1,
  explanation: 'Availability describes **how well** the solution performs — a quality attribute (reliability), so it is non-functional. Recording orders, resetting a password and logging in are all specific behaviours the solution provides, so they are functional.'
},
{
  id: 'tssm25-a6', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'design-tools',
  stem: 'Which design tool is best used to define input, processing, and output clearly?',
  options: ['IPO chart', 'Mock-up', 'Data dictionary', 'Object description'],
  answer: 0,
  explanation: 'The **IPO chart** exists precisely to set out inputs, processes and outputs in three columns. A mock-up shows the interface, a data dictionary describes data elements, and an object description describes a class.'
},
{
  id: 'tssm25-a7', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'design-tools',
  stem: 'In a data dictionary, what is most likely recorded?',
  options: [
    'The time users log in',
    'The types and formats of data used.',
    'The sequence of function calls and methods',
    'The network connections between computers'
  ],
  answer: 1,
  explanation: 'A data dictionary records **metadata about data**: field names, data types, formats, sizes, descriptions and often validation rules. It does not record runtime behaviour or infrastructure.'
},
{
  id: 'tssm25-a8', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'data-structures',
  stem: 'Which data structure allows storage of multiple rows and columns of data?',
  options: ['Record', 'One-dimensional array', 'Two-dimensional array', 'Boolean array'],
  answer: 2,
  explanation: 'Rows **and** columns means a **two-dimensional array**, accessed with two indices. A record holds fields of varying types for one item; a 1D array is a single line of values.'
},
{
  id: 'tssm25-a9', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'data-sources',
  stem: 'What is a main advantage of using a CSV file as a data source?',
  options: [
    'It encrypts data by default',
    'It compresses images automatically',
    'It supports complex hierarchical data',
    'It can easily be read by humans and computers'
  ],
  answer: 3,
  explanation: 'CSV is a plain text format that is **readable by people and directly importable by software** such as spreadsheets. It offers no encryption or compression, and hierarchical data is exactly what CSV *cannot* represent — that is XML\'s strength.'
},
{
  id: 'tssm25-a10', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'oop',
  stem: 'What does the principle of abstraction involve?',
  options: [
    'Reusing existing classes',
    'Creating sub-classes from parent classes',
    'Protecting data from outside modification',
    'Hiding the details and showing only essential features'
  ],
  answer: 3,
  explanation: '**Abstraction** hides unnecessary complexity and exposes only what is essential. Creating subclasses is inheritance, and protecting data from outside modification is encapsulation.'
},
{
  id: 'tssm25-a11', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'oop',
  stem: 'Inheritance in OOP allows',
  options: [
    'functions to return multiple values.',
    'subclasses to take on behaviours of parent classes.',
    'the creation of multiple instances of a variable.',
    'classes to become immutable for the whole use of the solution.'
  ],
  answer: 1,
  explanation: 'Inheritance lets a **subclass receive the attributes and methods of its parent class**, supporting code reuse and a class hierarchy. The other options describe unrelated language behaviours.'
},
{
  id: 'tssm25-a12', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'project-management',
  stem: 'What is the main purpose of setting milestones in a project plan?',
  options: [
    'To decide the final design of the solution',
    'To track the number of team members involved in the project',
    'To break the project into manageable checkpoints and track progress',
    'To measure the quality of the code written and proceed to the next stage'
  ],
  answer: 2,
  explanation: 'Milestones are **zero-duration checkpoints** marking the completion of a significant phase, letting the project manager assess whether the project is on track. They record progress; they do not measure code quality.'
},
{
  id: 'tssm25-a13', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'data-types',
  stem: 'Which of the following is an example of a Boolean data type?',
  options: ['True / False', 'High / Low', 'Male / Female', 'Undetermined'],
  answer: 0,
  explanation: 'A Boolean can hold exactly two values: **true or false**. "High/Low" and "Male/Female" are pairs of *strings* or an enumeration, not Boolean values, however binary they look.'
},
{
  id: 'tssm25-a14', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'validation',
  stem: 'Which two validation techniques would be used to ensure that a value entered is a number, and that it falls within a specified range?',
  options: [
    'Type checking and Range checking',
    'Logical checking and Range checking',
    'Type checking and Existence checking',
    'Existence checking and Logical checking'
  ],
  answer: 0,
  explanation: '**Type checking** confirms the value is numeric; **range checking** confirms it falls within acceptable bounds. "Logical checking" is not one of the three examinable techniques — existence, type and range are.'
},
{
  id: 'tssm25-a15', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'data-structures',
  stem: "Kalen is designing a game leaderboard storing players' names alongside their scores in a table-like format. Which data structure is the best choice for organising this information into rows and columns?",
  options: ['Record', 'Boolean', 'One-dimensional array', 'Two-dimensional array'],
  answer: 3,
  explanation: 'A table of names in one column and scores in another is a **two-dimensional array**. The phrase "rows and columns" in a question stem is a direct signal.'
},
{
  id: 'tssm25-a16', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'requirements',
  stem: 'How can social factors influence software development?',
  options: [
    'By defining the core functionalities of the system.',
    'By making the software accessible to people with disabilities.',
    'By determining the scope and programming language to use.',
    'By ensuring the software is scalable and maintainable for future updates.'
  ],
  answer: 1,
  explanation: '**Social** constraints concern how the software affects and includes people — accessibility, cultural considerations, inclusivity and user safety. Choice of programming language and scalability are **technical** considerations.'
},
{
  id: 'tssm25-a17', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'srs',
  stem: 'Which of the following is true about using reports to gather requirements for a new software project?',
  options: [
    'Reports are typically focused on user experience and feedback.',
    'Reports cannot be used to gather data on system requirements.',
    "Reports are useful for understanding users' likes and dislikes of the system.",
    'Reports provide historical data that can guide the development of new features.'
  ],
  answer: 3,
  explanation: 'Reports supply **historical and quantitative evidence** — usage statistics, past incidents, support logs, trends over time. Opinions and preferences come from surveys and interviews, not from reports.'
},
{
  id: 'tssm25-a18', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u4a1', topic: 'project-monitoring',
  stimulus: `Anna Lisa and Nischal are leading a project to develop an attendance tracking app for a teen dance club. The agreed features were logging attendance, generating reports and sending alerts to parents. Midway through development, a trainer began requesting new features — integrating the competition calendar, adding student performance in competitions. Wanting to please everyone, Anna Lisa and Nischal started adding these requests **without updating the timeline or budget**.`,
  stem: 'This situation is an example of',
  options: ['Scope creep', 'Agile development', 'Poor user interface design', 'Effective stakeholder engagement'],
  answer: 0,
  explanation: 'Features added after development began, **without adjusting the timeline, budget or resources**, is the textbook definition of **scope creep**. Agile development plans and re-plans deliberately; this project did neither.'
},
{
  id: 'tssm25-a19', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a2', topic: 'file-management',
  stem: 'Which of the following best describes the purpose of version control in file management?',
  options: [
    'To recover files after a hardware failure',
    'To encrypt files to prevent unauthorised access',
    'To track and manage changes made to files over time',
    'To ensure multiple copies of the same file are always stored in different locations'
  ],
  answer: 2,
  explanation: 'Version control **tracks and manages changes over time**, allowing changes to be reviewed and earlier versions restored. Recovering from hardware failure is the purpose of *backups*, and storing copies in different locations is redundancy — related, but distinct.'
},
{
  id: 'tssm25-a20', src: 'tssm25', section: 'A', type: 'mcq', unit: 'u3a1', topic: 'algorithms',
  stimulus: `~~~
index   0   1   2   3   4   5   6   7   8   9  10
value   6  10  15  22  45  56  98 100 120 159 190
~~~`,
  stem: 'Using binary search, how many iterations are required to find the number 15 in this sorted array of 11 elements?',
  options: ['1', '2', '3', '4'],
  answer: 1,
  explanation: '**Iteration 1:** the middle of indexes 0–10 is index 5 → value 56. Since 15 < 56, search the left half (0–4). **Iteration 2:** the middle of 0–4 is index 2 → value 15. Found. **2 iterations.**'
},

/* ==========================================================
   TSSM Trial Exam, 2025 — SECTION B / C
   ========================================================== */
{
  id: 'tssm25-b1', src: 'tssm25', section: 'B', type: 'short', marks: 3, unit: 'u3a1', topic: 'data-sources',
  stem: `Select the file type — CSV, TXT or XML — that best matches each description.

a. This format is easy to use with spreadsheets and works well for simple, flat data like produce type, weight and colour. However, it does not support nested or grouped information easily.
b. A plain text file can store produce information using custom formatting, but it does not follow a standard structure, making it harder to read or share with other systems.
c. This format is structured and supports tags, allowing for clear grouping of produce items with multiple attributes. It is ideal for data sharing between systems and maintaining a hierarchy of information.`,
  sample: `a. **CSV** — flat, tabular, spreadsheet-friendly, no nesting.
b. **TXT** — plain text with no standard structure, so other systems cannot reliably parse it.
c. **XML** — tag-based, hierarchical, self-describing and designed for exchange between systems.`
},
{
  id: 'tssm25-b2', src: 'tssm25', section: 'B', type: 'short', marks: 4, unit: 'u3a1', topic: 'language-features',
  stem: 'Explain two reasons why a developer would use a local instead of a global variable.',
  sample: `**Reason 1 — isolation and predictability.** A local variable can only be accessed within the function in which it is declared, so no other part of the program can change its value unexpectedly. This makes it possible to understand what a function does by reading that function alone, without checking for outside interference.

**Reason 2 — easier debugging.** When a value turns out to be wrong, the search is confined to the one function that owns the variable. A global variable could have been modified anywhere in the program, so tracing the cause of an incorrect value is far harder.

*(Also creditable: a local variable only occupies memory while its function is executing, and using locals avoids naming collisions between different parts of the program.)*`
},
{
  id: 'tssm25-b3', src: 'tssm25', section: 'B', type: 'short', marks: 4, unit: 'u3a1', topic: 'data-structures',
  stem: 'Describe one key difference between a one-dimensional and a two-dimensional array, including how you might access elements in each, with an example of representation.',
  sample: `| | One-dimensional array | Two-dimensional array |
| --- | --- | --- |
| **Structure** | Elements are arranged in a single line | Data is stored in a grid of rows and columns |
| **How elements are accessed** | Using a **single index** | Using **two indices** — row and column |
| **Example** | \`array[12]\` | \`array[0][10]\` |

The key difference is dimensionality: a 1D array is a simple list requiring one index, whereas a 2D array is table-like and requires both a row and a column index to identify a single element.`
},
{
  id: 'tssm25-b4', src: 'tssm25', section: 'B', type: 'short', marks: 4, unit: 'u3a1', topic: 'oop',
  stimulus: `Mia and Ethan are working on a customer management system for an e-commerce platform. They create a general **Customer** class with attributes like name, email and address. From this class they create subclasses **RegularCustomer**, **PremiumCustomer** and **VIPCustomer**, each containing additional details relevant to their membership type. The developers ensure that sensitive information such as payment details is only accessible and modified through secure methods.`,
  stem: 'Explain how the principles of inheritance and encapsulation are applied in the design of the system.',
  sample: `**Inheritance.** The RegularCustomer, PremiumCustomer and VIPCustomer subclasses inherit the common attributes and behaviours of the parent Customer class — name, email and address — rather than each redefining them. This gives code reuse and consistency across all customer types, and lets each subclass add only what is specific to it (such as loyalty points for PremiumCustomer) without duplicating the shared code. A change to the shared behaviour need only be made once, in the parent class.

**Encapsulation.** Sensitive data such as payment details is not exposed directly; it is declared private and can only be accessed or modified through secure public methods. Those methods control and validate every access, so the payment data is protected from unauthorised or invalid changes from elsewhere in the system, and the internal storage of that data can be changed later without breaking the rest of the application.`
},
{
  id: 'tssm25-b5', src: 'tssm25', section: 'B', type: 'short', marks: 3, unit: 'u4a2', topic: 'security-controls',
  stimulus: `A security audit of a school system identified these issues:

- Unencrypted student data
- Lack of multi-factor authentication (MFA) for teachers' accounts
- Uncontrolled access by admin staff to sensitive documents`,
  stem: 'Choose one of the security issues listed above and suggest a strategy that the IT manager could implement to reduce the risk.',
  sample: `**Issue chosen: lack of multi-factor authentication for teachers' accounts.**

The IT manager should deploy an MFA system using authenticator apps, so that logging in requires both something the teacher knows (their password) and something they have (a code from their device). The school's authentication policy should be updated to make MFA **mandatory** for all staff rather than optional, and guidance and support provided to help teachers set it up. Even if a teacher's password is phished or reused from a breached site, an attacker would still be unable to access student records without the second factor.

*(Alternative — uncontrolled admin access: assign access permissions strictly by job role on the principle of least privilege, enable audit logs recording who accesses or edits sensitive documents, and review access rights regularly to reflect role changes and staff departures.)*`
},
{
  id: 'tssm25-b6', src: 'tssm25', section: 'B', type: 'short', marks: 2, unit: 'u3a2', topic: 'analysis-tools',
  stem: 'Explain what a use case diagram is and describe how it helps in understanding system functionality.',
  sample: `A **use case diagram** is a visual analysis tool that shows the interactions between the users of a system and the system itself. It contains a **system boundary** enclosing the **use cases** (the functions the system performs), with **actors** — the roles that interact with the system — drawn outside the boundary and connected to the use cases by **associations**, plus «includes» and «extends» relationships between use cases.

It helps developers understand system functionality by showing, at a glance, **who** will use the system, **what** each role can do with it, and which functions always or sometimes involve other functions. This makes it easier to identify required features, spot missing functionality, and confirm with stakeholders that the scope is right before any code is written.`
},
{
  id: 'tssm25-c2', src: 'tssm25', section: 'C', type: 'short', marks: 5, unit: 'u3a2', topic: 'analysis-tools',
  stimulus: `Yu Xiang is currently developing a use case diagram for The Odd Box system, shown below.

@[tssm-usecase]`,
  stem: 'a. Describe the relationship between "View Reports" and "Print Reports". b. Identify two issues with the use case diagram. c. Complete the labels for the missing elements A and B.',
  sample: `**a.** Printing is optional: once the manager has viewed a report they *may* choose to print it, but they need not. This is an **«extends»** relationship — the extending use case occurs only under a certain condition, unlike «includes», which always occurs.

**b.**
- A **person's name is not a valid label for an actor**. Actors represent *roles*, so it should be labelled "Manager" rather than "Bailey".
- **Actors must be located outside the system boundary**, not inside it. Only use cases belong inside the boundary.

**c.**
- A = **«includes»**
- B = **«extends»**`
},
{
  id: 'tssm25-c4', src: 'tssm25', section: 'C', type: 'short', marks: 4, unit: 'u3a1', topic: 'design-tools',
  stimulus: `Yu Xiang has started a data dictionary for produce classification at The Odd Box. Produce is classified as Premium or OddBox based on weight (in grams), shape and colour, and whether it is bruised.`,
  stem: 'Complete the data dictionary by entering the correct data type for each field: Produce Type, Weight, Is Bruised, Category.',
  sample: `| Field name | Data type | Description |
| --- | --- | --- |
| produceType | **string** | The type of fruit or vegetable |
| weight | **integer** | Weight in grams — a whole number |
| isBruised | **Boolean** | Indicates whether the produce is bruised (true/false) |
| category | **string** | Result of classification ("Premium" or "OddBox") |

Note the reasoning: weight in grams is recorded as a whole number, so integer is correct; "is bruised" has exactly two possible values, so it is Boolean.`
},
{
  id: 'tssm25-c5', src: 'tssm25', section: 'C', type: 'short', marks: 4, unit: 'u3a1', topic: 'data-sources',
  stimulus: `Maree suggests storing produce data for The Odd Box in an XML file. The system must exchange data between the sorting system, a mobile data-entry app used at receiving docks, and external partners such as delivery services.`,
  stem: 'Describe two advantages of using XML for storing data in this system.',
  sample: `**Advantage 1 — structured and self-describing.** XML stores data using custom tags that name each value, so a record such as produce type, weight, colour and classification is easy to understand and manually inspect. For a small business like The Odd Box this matters when staff need to debug a misclassification or review records without a specialised tool, because the file explains itself.

**Advantage 2 — widely supported and hierarchical, so it suits data exchange.** XML is supported across platforms and software systems, and it can group related items in a hierarchy (for example a delivery containing many produce items, each with several attributes). This makes it straightforward to share produce records between the sorting system, the mobile data-entry app used at the receiving docks, and external partners such as delivery services and reporting tools — something a flat CSV file could not represent.`
},
{
  id: 'tssm25-c9', src: 'tssm25', section: 'C', type: 'short', marks: 3, unit: 'u3a2', topic: 'ux',
  stem: 'a. Explain why interoperability is important. b. How does interoperability apply to the produce classification process at The Odd Box?',
  sample: `**a.** Interoperability is the ability of a software solution to work with, and exchange data with, other systems, devices and applications. It is important because it removes the need for staff to re-enter the same data into multiple systems, which lowers the risk of errors and improves efficiency across the whole process. It also means the solution can adapt to future upgrades or changes in related technology, rather than becoming an isolated system that has to be replaced.

**b.** For the produce classification process, interoperability means the solution must be able to exchange and use data with other systems — the produce and inventory database, the external subscription-order system, and physical equipment such as scanners and sorting machinery at the receiving docks. If the classification system can receive weights directly from connected scales and push results straight to the inventory database, the manual spreadsheet entry that is currently time-consuming and error-prone is eliminated, and classification and packing become both faster and more accurate.`
},
{
  id: 'tssm25-c10', src: 'tssm25', section: 'C', type: 'short', marks: 4, unit: 'u3a2', topic: 'design-principles',
  stimulus: `Bailey at The Odd Box wants the system to be accessible on mobile devices — staff at the receiving docks will use a mobile data entry interface.`,
  stem: 'Describe two strategies to ensure the design is responsive and user-friendly on smaller screens.',
  sample: `**Strategy 1 — simplify the layout and prioritise content.** Design each screen to show only the information and controls the user needs for the current task, using a single-column layout and large, well-spaced buttons that can be pressed accurately with a finger (good affordance) — particularly important for dock staff who may be wearing gloves or working quickly. Secondary information is moved behind a clearly labelled control rather than crowding the screen.

**Strategy 2 — use responsive design techniques.** Build the interface so that it adapts to the size of the screen it is displayed on: elements reflow rather than being cut off, text remains legible without zooming, and tap targets stay large enough on both small phones and tablets. This means one interface works across the range of devices staff actually use, without maintaining a separate design for each.`
},
{
  id: 'tssm25-c11', src: 'tssm25', section: 'C', type: 'short', marks: 5, unit: 'u4a2', topic: 'ethics',
  stem: 'a. Outline one consequence for a company if its security practices are not effective. b. Discuss one ethical issue that can arise from using artificial intelligence in a system. c. Explain how multi-factor authentication reduces the risk of unauthorised access.',
  sample: `**a.** Ineffective security practices can lead to a data breach, resulting in **financial loss** (remediation costs, compensation and lost business), **damage to the company's reputation**, **legal penalties** under the Privacy Act 1988, and a lasting **loss of trust** from customers and stakeholders.

**b.** **Over-reliance on AI during development.** Where a team uses an AI assistant to generate the bulk of its code, developers may lose the understanding needed to review, debug and maintain that code. The organisation still bears responsibility for what its software does, but becomes less able to explain or fix it — and cannot be confident the generated code is secure or that it does not reproduce copyrighted material. Responsible practice requires developers to understand the limits of the tool, review all generated code, and follow a policy on what data may be given to it.

**c.** Multi-factor authentication requires a user to provide **two or more different kinds of evidence** to prove their identity:

- Something the user **knows** — a password or PIN
- Something the user **has** — a phone, security token or SMS code
- Something the user **is** — a fingerprint or facial recognition

Because the factors are of different kinds, an attacker who obtains one of them (typically the password, through phishing or a reused-credential breach) still cannot log in without also holding the second. This makes unauthorised access far harder even when a password has been compromised.`
},
{
  id: 'tssm25-c12', src: 'tssm25', section: 'C', type: 'short', marks: 4, unit: 'u4a1', topic: 'approaches',
  stimulus: `Yu Xiang and Maree are working on different parts of The Odd Box system — Yu Xiang on produce sorting and classification, Maree on weekly subscription orders and box contents.`,
  stem: 'Discuss two ways version control can support collaboration between Maree and Yu Xiang during the development of this project.',
  sample: `**Way 1 — a complete, attributed history of changes.** Version control tracks every change made to the project files over time, recording **who** made each change and **when**. This means Maree and Yu Xiang can each see what the other has altered, understand why a piece of shared code behaves differently than expected, and **roll back to an earlier version** if a change breaks something — rather than discovering a problem with no way to recover the working code.

**Way 2 — concurrent work without overwriting.** Both developers can work on their own parts of the solution at the same time — Yu Xiang on classification, Maree on subscription orders — and version control **merges** their changes systematically when they are submitted. Without it, two people editing copies of the same files would inevitably overwrite each other's work, losing progress and introducing bugs. Where both have changed the same section, the system flags a conflict for them to resolve deliberately instead of silently discarding one version.`
},
{
  id: 'tssm25-c13', src: 'tssm25', section: 'C', type: 'short', marks: 4, unit: 'u4a2', topic: 'improving-security',
  stem: 'Describe two processes that could mitigate threats and ensure a thorough and effective approach to cyber security.',
  sample: `**Monitoring and logging.** Continuously observing system activity and recording events such as logins, file access and configuration changes. Logs make it possible to detect suspicious behaviour early — for example one account repeatedly retrieving sensitive records — to identify a breach when it occurs, and to investigate afterwards to establish what was accessed and how. Without logs, an organisation may not know a breach has occurred at all.

**Patch management.** Regularly updating software and operating systems with security patches and bug fixes on a defined schedule. Unpatched software is one of the most commonly exploited weaknesses, because vulnerabilities become publicly known when a patch is released; prompt patching closes them before attackers can use them. Patching applications and operating systems appears twice in the Essential Eight for this reason.

*(Also creditable: regular access-control reviews to ensure users hold only the permissions their role requires, and ongoing security training for staff.)*`
},
{
  id: 'tssm25-c14', src: 'tssm25', section: 'C', type: 'short', marks: 4, unit: 'u4a2', topic: 'organisations',
  stimulus: `Yu Xiang told Bailey that developing the project was more expensive than buying off-the-shelf software, which Bailey was not happy about at the start.`,
  stem: 'Identify two advantages of using external developers to create custom software.',
  sample: `**Advantage 1 — specialist expertise and a solution tailored to the organisation.** External developers bring skills the organisation does not employ in-house, and custom development means the system fits The Odd Box's actual workflows — sorting and classifying produce by weight, shape and colour, and managing weekly subscription boxes — rather than forcing staff to adapt their process to whatever a generic package supports.

**Advantage 2 — control over features and future direction, without permanent staff costs.** Custom software gives the organisation control over what features are built, how it integrates with existing systems such as inventory and delivery, and how it grows as the business does — flexibility that off-the-shelf products do not offer. Using external developers delivers this without the cost and delay of recruiting and training a permanent development team, at a cost agreed up front in the contract.`
}

];

/* ---------- Derived helpers ---------- */

const QUESTION_INDEX = {};
QUESTIONS.forEach(function (q) { QUESTION_INDEX[q.id] = q; });

function questionsBy(filterFn) {
  return QUESTIONS.filter(filterFn);
}

function questionsForUnit(unitId) {
  return QUESTIONS.filter(function (q) { return q.unit === unitId; });
}

function questionsForTopic(topicId) {
  return QUESTIONS.filter(function (q) { return q.topic === topicId; });
}
