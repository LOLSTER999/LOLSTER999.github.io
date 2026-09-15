/* ============================================================
   Article library — VCE Applied Computing: Software Development
   Units 3 & 4 (Study Design from 2025)

   Structure mirrors the study design's areas of study so that every
   article maps back to specific key knowledge (KK) / key skills (KS).
   Body text uses the mini-markdown subset in ../markdown.js.
   Code fences use ~~~ so the JS template literals stay readable.
   ============================================================ */

const CURRICULUM = [

/* ============================================================
   UNIT 3 · AREA OF STUDY 1
   ============================================================ */
{
  id: 'u3a1',
  code: 'Unit 3 · AoS 1',
  title: 'Software development: programming',
  blurb: 'Data, code and the craft of writing modules that work — plus the design tools used to plan them and the testing used to prove them.',
  color: 'var(--u3a1)',
  lessons: [

  {
    id: 'requirements',
    title: 'Requirements, constraints and scope',
    summary: 'What the solution must do, what limits it, and where its edges are.',
    kk: ['U3A1 KK2'],
    body: `
      Almost every exam paper opens a case study by describing what a client wants. Your first job is to sort those
      statements into the right buckets. Examiners award marks for using the exact vocabulary below.

      ## Functional requirements

      A **functional requirement** describes *what the solution does* — a specific behaviour, feature or function.
      A useful test: could you tick it off by watching someone use the software?

      - "Tenants are able to lodge maintenance requests."
      - "The system must classify produce as Premium or OddBox."
      - "Trainers can mark attendance for a session."

      ## Non-functional requirements

      A **non-functional requirement** describes *how well* the solution does it — a quality or attribute rather than
      a feature. Common categories you should be able to name:

      | Category | Example statement |
      | --- | --- |
      | Performance | "Search results return in under 2 seconds." |
      | Reliability / availability | "The solution must be available 99.9% of the time." |
      | Usability | "The mobile interface must be usable by non-technical warehouse staff." |
      | Portability | "The website works across desktop browsers and mobile devices." |
      | Security | "Personal data must be encrypted at rest." |
      | Maintainability | "Code must include internal documentation for every module." |

      > [exam] **Trap.** "The software solution does not need to run on Apple devices" is a *non-functional*
      requirement — it is about portability, not about a feature. Statements phrased as limits on quality or platform
      are almost always non-functional.

      ## Constraints

      **Constraints** are the limits the developer has to work within. The study design names four categories, and
      exam questions frequently ask you to name and apply one:

      - **Economic** — budget, cost of licences, cost of hosting, staff cost.
      - **Legal** — the Privacy Act 1988, the Copyright Act 1968, accessibility obligations.
      - **Social** — accessibility for people with disability, cultural expectations, inclusivity, user expectations.
      - **Technical** — hardware capability of target devices, available bandwidth, existing systems it must talk to,
        the skills of the development team.

      > [tip] If a question says "devices with limited processing power", the answer is a **technical** constraint
      (the hardware capabilities of target devices). If it says "accessible to people with disabilities", that is a
      **social** consideration.

      ## Scope

      **Scope** defines the boundaries of the solution — what is in, and what is deliberately out. It is expressed
      through **version/solution boundaries**.

      "A dedicated mobile app is out of scope due to economic constraints" means two things at once: the feature
      **will not be built in this version**, and the reason is **cost**. If an exam question asks you to *interpret*
      a scope statement, spell out both parts and then state the consequence for the client.

      > [exam] Scope statements are also the seed of a later question about **scope creep** (U4 AoS 1). If the scope
      boundary is unclear, extra features leak in and the project plan drifts.
    `
  },

  {
    id: 'data-types',
    title: 'Data types',
    summary: 'Text, numeric and Boolean — and how to justify a choice.',
    kk: ['U3A1 KK4', 'U4A1 KK2'],
    body: `
      The examinable list is short, so learn it exactly.

      | Group | Types | Typical use |
      | --- | --- | --- |
      | Text | character, string | A single symbol (\`C\`, \`M\`, \`X\`); a name, address, ID |
      | Numeric | integer, floating point, date/time | Counts and indexes; measurements and money; timestamps |
      | Boolean | true / false | Occupancy status, "is bruised", flags |

      ## Choosing — and justifying — a type

      Exam questions rarely ask only "what type?". They ask you to **identify the type and give one reason**. Build
      your reason from these angles:

      - **Fit to the data.** A count of training sessions is a whole number, so \`integer\` beats \`float\`.
        A grid symbol is one letter, so \`character\` beats \`string\`.
      - **Memory.** Floating point values usually take more memory than the equivalent integer.
      - **Speed.** Integer arithmetic is faster to process than floating point.
      - **Validation.** Restricting to the correct type reduces the validation you need and the errors that slip
        through. A Boolean can only ever be true or false — no range checking required.
      - **Precision.** Floating point cannot represent every decimal exactly, which matters for money comparisons.

      > [tip] Model answer shape: *"Integer, because the number of sessions attended is always a whole number.
      Using integer takes less memory than floating point and avoids the risk of an inexact decimal value."*

      ## Boolean, carefully

      Boolean means **true/false** only. "High / Low" and "Male / Female" are *not* Boolean data types — they are two
      strings, or an enumeration. An exam distractor list will usually include one of those.

      ## Date/time

      Date/time is grouped under **numeric** in this study design. Storing a date as a date/time value (rather than a
      string) lets the program sort, compare and calculate differences between dates.
    `
  },

  {
    id: 'data-structures',
    title: 'Data structures',
    summary: '1D arrays, 2D arrays and records — recognising them from a diagram.',
    kk: ['U3A1 KK5', 'U4A1 KK2'],
    body: `
      Three structures are examinable. Section A almost always shows you a picture and asks which one it is.

      ## One-dimensional array

      A single line of elements of the **same** data type, accessed by **one index**.

      ~~~
      index    0     1     2     3     4
      value   1.2   5.0   4.1   2.6   3.9

      temperatures[2]  →  4.1
      ~~~

      Use when you have a simple list: scores, temperatures, names.

      ## Two-dimensional array

      A **grid** of rows and columns, all the same data type, accessed by **two indices**.

      ~~~
             0    1    2    3    4
        0    .    .    X    .    .
        1    .    X    M    .    .
        2    X    C    C    M    .

      grid[2][1]  →  "C"
      ~~~

      Use when data is naturally table-like: a game board, a leaderboard of names beside scores, a seating plan.

      > [exam] A 5×5 game grid, a spreadsheet-style leaderboard, or "rows and columns" in the stem → **two-dimensional
      array**, every time.

      ## Record

      A record groups **fields of varying data types** under one item, accessed by **field name or field index**.

      ~~~
      RentalProperty
        propertyID   (string)
        numBedrooms  (integer)
        availableFrom(date)
        occupied     (Boolean)
      ~~~

      Use when one real-world thing has several differently-typed attributes. The give-away in a question stem is
      **"varying data types"**.

      ## Telling them apart

      | Clue in the question | Structure |
      | --- | --- |
      | "a series of numbers", one row of values | 1D array |
      | rows and columns, table, grid, board | 2D array |
      | different data types describing one thing | record |
      | single index | 1D array |
      | two indices | 2D array |
      | field name / field index | record |
    `
  },

  {
    id: 'data-sources',
    title: 'Data sources: TXT, CSV and XML',
    summary: 'Structure of each file type and the reasons to pick one.',
    kk: ['U3A1 KK6'],
    body: `
      Three file formats are examinable, and the standard question is *"which would you use, and give two reasons?"*.

      ## Plain text (TXT)

      **Structure:** unformatted characters. Any layout is a private convention between the writer and the reader.

      **Reasons for use:** simple, tiny, readable by any program, good for logs and notes.

      **Against:** no standard structure, so it is hard for other systems to parse or share reliably.

      ## Delimited (CSV)

      **Structure:** rows of values separated by a delimiter (usually a comma), with an optional header row.
      A flat table — every row has the same fields.

      ~~~
      produceType,weight,isBruised,category
      tomato,150,FALSE,Premium
      carrot,350,FALSE,OddBox
      ~~~

      **Reasons for use:** easily read by both humans and machines; opens directly in spreadsheets; compact; ideal
      for a single flat table of like rows.

      **Against:** cannot represent nesting or hierarchy; **breaks when a value itself contains a comma**; no data
      types — everything is text.

      ## XML

      **Structure:** hierarchical, using nested opening and closing **tags**, with a single root element.

      ~~~
      <move>
        <player symbol="X"/>
        <position row="2" col="1"/>
      </move>
      ~~~

      **Reasons for use:**

      - Represents **hierarchical / nested** data that CSV cannot.
      - **Self-describing** — tags name each piece of data, so a human or another system can interpret the file
        without a separate specification.
      - **Extensible** — new tags can be added later without breaking programs that read the existing ones.
      - Widely supported across platforms, so it is good for **exchanging data between systems**.
      - Handles values containing commas without any special escaping.

      **Against:** verbose, so files are larger and slower to transmit than the CSV equivalent.

      > [exam] The 2025 VCAA paper asked for two benefits of XML for sending a game move where "future updates could
      require more information to be sent". The two marks were for (1) the structure is self-describing/hierarchical
      so the receiver knows what each value means, and (2) it is extensible, so extra data can be added later without
      breaking existing clients. Always tie the benefit back to the case study.
    `
  },

  {
    id: 'oop',
    title: 'Principles of object-oriented programming',
    summary: 'Abstraction, encapsulation, generalisation, inheritance.',
    kk: ['U3A1 KK7'],
    body: `
      Four principles, four definitions. Learn one crisp sentence for each, then practise attaching an example from
      a case study.

      ## Abstraction

      **Hiding unnecessary detail and exposing only the essential features.** A driver uses a steering wheel without
      knowing how the rack and pinion works. In code, a method \`getPropertyDetails()\` lets other classes get what
      they need without knowing how the data is stored.

      ## Encapsulation

      **Bundling data and the methods that operate on it inside a class, and restricting direct access to that data.**
      Attributes are made \`private\`; controlled access is provided through public **getter** and **setter** methods.

      ~~~
      DogOwner
        private firstName          <- cannot be touched from outside
        public  getFirstName()     <- controlled read
        public  setFirstName(name) <- controlled write, can validate
      ~~~

      The benefit: the class can validate every change, and internal storage can be reworked without breaking other
      code.

      ## Generalisation

      **Moving common attributes and methods up into a shared parent class.** If \`Car\` and \`Van\` both have a
      \`rented\` Boolean, removing it from each subclass and putting it in \`Vehicle\` is generalisation.

      ## Inheritance

      **A subclass takes on (inherits) the attributes and methods of a parent class, and can add its own.**

      ~~~
      User                       <- parent: userID, name, email, login()
       ├── PropertyOwner         <- adds ownedProperties
       ├── PropertyManager       <- adds assignedAgency
       ├── Tenant                <- adds leaseStart
       └── HeadOfficeStaff       <- adds department
      ~~~

      @[inheritance-user]

      **Benefits to quote:** code reuse (write the shared behaviour once), consistency (every user type logs in the
      same way), and easier maintenance (fix the parent, every subclass gets the fix).

      > [exam] Generalisation and inheritance are two directions of the same relationship. *Generalisation* is the
      design act of pulling shared members upward; *inheritance* is the language mechanism by which subclasses
      receive them. A question that says "Tran decides to add \`rented\` to \`Vehicle\` and remove it from \`Car\`
      and \`Van\`" is describing **generalisation**.

      ## Access modifiers

      Examinable in U4 AoS 1, but learn them here:

      - **public** — accessible from anywhere.
      - **protected** — accessible within the class and its subclasses.
      - **private** — accessible only within the class that defines it.

      If a question says a variable should only be reachable by methods *inside* its own class, the answer is
      **private**.
    `
  },

  {
    id: 'language-features',
    title: 'Features of a programming language',
    summary: 'Variables, scope, control structures, operators, functions and GUIs.',
    kk: ['U3A1 KK8', 'U4A1 KK3'],
    body: `
      ## Variables, constants and scope

      - A **variable** holds a value that can change while the program runs.
      - A **constant** holds a value that cannot change while the program runs — changing it means changing the code.
      - A **local variable** is declared inside a function/method and is only accessible within it.
      - A **global variable** is declared outside all functions and is accessible from anywhere in the program.

      **Why prefer local variables?** Two standard marks:

      1. **Isolation** — the variable cannot be altered unexpectedly from elsewhere, so a function's behaviour is
         easier to reason about.
      2. **Easier debugging** — when a value is wrong you only have to inspect one function, not the whole program.
      3. **Memory** — the variable only exists while the function runs.

      > [exam] 2025 VCAA asked which statement about a constant \`GST\`, a global \`markup\` and a local \`price\`
      was *incorrect*. The answer was "the local variable \`price\` can only be called from within a selection control
      structure" — scope is about the **function/block** it was declared in, not about which control structure runs.

      ## Control structures

      Three, and only three:

      - **Sequence** — statements execute one after another in order.
      - **Selection** — a decision: \`IF … THEN … ELSEIF … ELSE … ENDIF\`, or a CASE/SWITCH.
      - **Iteration / repetition** — a loop: \`FOR\`, \`WHILE\`, \`REPEAT … UNTIL\`.

      ## Operators

      | Kind | Examples |
      | --- | --- |
      | Arithmetic | \`+\`  \`-\`  \`*\`  \`/\`  \`MOD\`  \`^\` |
      | Conditional (relational) | \`=\`  \`<>\`  \`<\`  \`>\`  \`<=\`  \`>=\` |
      | Logical | \`AND\`  \`OR\`  \`NOT\` |

      ## Functions and methods

      A **function** is a named block of instructions that performs a specific task and can be called from anywhere
      it is in scope, usually returning a value. A **method** is a function that belongs to a class and operates on
      an object.

      Benefits worth quoting: avoids repeating code, makes the program easier to read and test, and lets one fix
      apply everywhere the function is used.

      ## Classes, objects, GUIs

      - A **class** is the blueprint; an **object** is an instance created from it.
      - A **GUI** provides interface controls — buttons, text fields, dropdowns, checkboxes, labels — through which
        the user interacts with the solution. Dropdowns and checkboxes **restrict** input and so reduce data-entry
        errors compared with free-text fields; that comparison is a common short-answer mark.
    `
  },

  {
    id: 'naming-conventions',
    title: 'Naming conventions',
    summary: 'Hungarian notation, camel casing, snake casing — and why they matter.',
    kk: ['U3A1 KK9', 'U3A1 KS4'],
    body: `
      ## The three named conventions

      | Convention | Form | Example |
      | --- | --- | --- |
      | **Hungarian notation** | a type prefix, then a capitalised name | \`strFirstName\`, \`intAge\`, \`btnSubmit\`, \`txtEmail\` |
      | **Camel casing** | first word lower case, each later word capitalised | \`firstName\`, \`numBedrooms\`, \`calculateCost\` |
      | **Snake casing** | all lower case, words joined by underscores | \`street_number\`, \`monthly_income\`, \`rental_price\` |

      There is no "snail casing" — that is a standing distractor in multiple choice.

      ## Purposes

      Say more than "it looks neat". The marks are for:

      - **Readability** — a consistent scheme makes the purpose of each identifier obvious at a glance.
      - **Maintenance** — a different programmer (or you, months later) can understand and safely change the code.
      - **Fewer errors** — consistent naming reduces the chance of using the wrong variable.
      - **Type visibility** — Hungarian notation in particular signals the data type or control type in the name
        itself, which helps when a language does not show types at the point of use.

      ## Applying it to interface controls

      Naming conventions apply to **variables, interface controls and code structures**. Interface controls are
      usually named with a Hungarian-style prefix so the control type is obvious: \`btnCalculateTax\`,
      \`txtIncome\`, \`lblResult\`, \`chkTaxFreeThreshold\`.

      > [tip] If you are asked to *identify* the convention, look at the first character and the separators.
      Underscore → snake. Type prefix → Hungarian. Otherwise, lower-then-capital → camel.
    `
  },

  {
    id: 'validation',
    title: 'Validation techniques',
    summary: 'Existence, type and range checking.',
    kk: ['U3A1 KK10', 'U4A1 KK5'],
    body: `
      Exactly three techniques are examinable. Anything else (like a "logical check") is a distractor.

      ## Existence checking

      Confirms that **data has actually been entered** — the field is not blank/null.

      ~~~
      IF age is not blank THEN ...
      ~~~

      ## Type checking

      Confirms the data is of the **correct data type** — that a number field contains a number, not text.

      ~~~
      IF monthly_income IS NUMERIC THEN ...
      ~~~

      ## Range checking

      Confirms a value falls **within acceptable bounds**.

      ~~~
      IF age >= 18 AND age <= 120 THEN ...
      ~~~

      ## Combining them, in order

      Real validation applies them in sequence, because each depends on the one before:

      1. **Existence** — is there anything there at all?
      2. **Type** — is it the right kind of thing?
      3. **Range** — is it a sensible value?

      > [exam] A very common Section C question shows pseudocode that checks existence only, then asks *"identify a
      validation technique that should be added and explain why"*. The strong answer names **type checking** and
      explains that if the user types text into the age or income field, the numeric comparison on the following
      line will fail or produce a **type mismatch** runtime error. Naming the technique earns one mark; connecting
      it to a concrete failure in the given code earns the second.

      ## Validation vs testing

      Do not confuse them. **Validation** is code inside the solution that checks *user input* while it runs.
      **Testing** is something the *developer* does to check the solution behaves correctly. A test table is not
      validation.
    `
  },

  {
    id: 'internal-documentation',
    title: 'Internal documentation',
    summary: 'Comments, explanation, maintenance and stubs.',
    kk: ['U3A1 KK11', 'U3A1 KS5'],
    body: `
      **Internal documentation** is documentation written *inside the source code* — comments, header blocks,
      meaningful names, indentation and whitespace. (External documentation, like a user manual, is a different
      thing.)

      ## The three examinable purposes

      1. **Explaining and justifying data and code structures.** Not *what* the line does — a reader can see that —
         but *why* it was written that way. "Using a 2D array here because the grid is fixed at 5×5."
      2. **Code maintenance.** Later changes are faster and safer when the original intent is recorded. This matters
         most when a **different programmer** picks up the code, or when the original author returns months later.
      3. **Placeholder comments for future development (stubs).** A stub marks work that is planned but not yet
         written, so the structure exists and the team knows what is outstanding.

      ~~~
      ' calculateCost(owner, baseCost, discount)
      ' discount is a proportion between 0 and 1 (0.25 = 25%), NOT a percentage.
      ' Applies the loyalty discount once the owner has attended 5+ sessions.
      Begin calculateCost(owner, baseCost, discount)
        ...
      End calculateCost

      ' TODO: apply concession pricing for pensioners — see requirement FR-14
      ~~~

      > [exam] A 3-mark "justify the need for internal documentation" question expects: (1) a purpose such as
      readability/explanation, (2) a second purpose such as maintenance or other programmers, and (3) **a specific
      example drawn from the given code**. The example is where most marks are lost. In the DLTV trial, the marked
      example was documenting that \`discount\` is expected as \`0.25\`, not \`25\` — without that note a later
      programmer could pass the wrong scale and silently produce absurd prices.
    `
  },

  {
    id: 'algorithms',
    title: 'Sorting and searching algorithms',
    summary: 'Selection sort, quick sort, linear search, binary search.',
    kk: ['U3A1 KK12'],
    body: `
      Four algorithms are named in the study design. You need to know how each works, and when you would choose it.

      ## Linear search

      Check each element in turn from the start until the target is found or the list ends.

      - Works on **unsorted** data.
      - Simple to write.
      - Slow on large lists — worst case, every element is examined.

      ## Binary search

      Requires a **sorted** list. Compare the target with the middle element; if it is smaller, discard the upper
      half; if larger, discard the lower half; repeat on what remains.

      Worked example — find \`15\` in an 11-element sorted array:

      ~~~
      index   0   1   2   3   4   5   6   7   8   9  10
      value   6  10  15  22  45  56  98 100 120 159 190

      Iteration 1: middle of 0–10 is index 5 → 56.  15 < 56 → search 0–4
      Iteration 2: middle of 0–4  is index 2 → 15.  Found.

      Answer: 2 iterations
      ~~~

      Each step halves the search space, so binary search is far faster than linear search on large sorted lists.

      ## Selection sort

      Repeatedly find the smallest remaining element and swap it into the next position.

      - Simple to understand and implement.
      - Inefficient on large data sets — the number of comparisons grows with the square of the list size.
      - Fine for **small** arrays.

      ## Quick sort

      Choose a **pivot**, partition the list into elements below and above the pivot, then recursively sort each
      partition.

      - Much faster than selection sort on **large** data sets.
      - More complex to implement, and uses recursion.

      > [exam] The standard multiple-choice framing is: *"quick sort is chosen instead of selection sort when…"* →
      **a large array is being sorted**. Efficiency is the only reason to accept the extra complexity.

      ## Choosing one

      | Situation | Choose |
      | --- | --- |
      | Small list, simplicity matters | selection sort |
      | Large list, speed matters | quick sort |
      | Unsorted list, one-off lookup | linear search |
      | Sorted list, repeated lookups | binary search |
    `
  },

  {
    id: 'errors',
    title: 'Types of errors',
    summary: 'Syntax, logic and the four named runtime errors.',
    kk: ['U3A1 KK13'],
    body: `
      Three categories, with runtime errors broken into four named kinds. Section B loves a matching table on this.

      ## Syntax errors

      The code **breaks the rules of the language**, so it will not compile or run. A missing bracket, a missing
      keyword, a misspelled \`while\`, a missing semicolon. The compiler or interpreter reports these before the
      program runs.

      ## Logic errors

      The code **runs, but produces the wrong result**. There is no error message — the program simply does the
      wrong thing. The classic symptom in a question stem: *"when a condition is tested, the user receives
      unexpected outputs"*, or *"the code is not performing calculations correctly"*.

      A \`<=\` that should be \`>=\` is a logic error.

      ## Runtime errors

      The code is syntactically valid but **fails while executing**. Four are named:

      | Runtime error | What triggers it |
      | --- | --- |
      | **Overflow** | A value or allocation exceeds available capacity — e.g. not enough memory, so the application crashes |
      | **Index out of range** | An array is accessed at a position that does not exist (a counter incremented past the last item) |
      | **Type mismatch** | An operation is attempted on incompatible types — e.g. storing text in an array of integers |
      | **Divide by zero** | A division where the divisor evaluates to zero |

      ## Worked example: index out of range

      ~~~
      temperatures ← [21.0, 22.0, 23.0, 21.0, 22.0, 23.0, 20.0, 21.0]   ' 8 items, indexes 0–7
      For i = 1 To 9
        average ← i * average + temperatures[i]
        ...
      Next i
      ~~~

      The loop drives \`i\` up to 9, but the highest valid index is 7. On \`i = 8\` the program references an element
      that does not exist and raises an **index out of range** error.

      > [exam] When asked to explain an error, always do two things: (1) state what that error type means in general,
      and (2) point at the exact line or value in the given code that causes it.
    `
  },

  {
    id: 'debugging-testing',
    title: 'Debugging and testing modules',
    summary: 'Breakpoints, debugging statements, test data and test tables.',
    kk: ['U3A1 KK14', 'U4A1 KK6'],
    body: `
      ## Debugging techniques

      - **Breakpoints** — a marker that **pauses execution** at a chosen line so the developer can inspect the
        current values of variables and step through the code line by line. (Pauses, not stops.)
      - **Debugging statements** — temporary output statements that print the value of a variable at a point in
        execution, so the developer can see where a value first goes wrong.
      - **Commenting out code** — temporarily disabling a section to isolate the source of a fault. The benefit is
        that the code is **retained and can be restored or adjusted**, rather than deleted.

      ## Constructing test data

      Good test data deliberately covers three zones:

      - **Valid / typical** — normal values that should be accepted.
      - **Invalid** — values that should be rejected (wrong type, blank, out of range).
      - **Boundary** — values right at the edge of a condition, where off-by-one errors hide.

      For the condition \`noOfSessions <= 5\`, the boundary test values are **4, 5 and 6** — one below, the boundary
      itself, and one above.

      ## Test tables

      A test table records, for each test: what is being tested, the input data, the **expected output**, the
      **actual output**, and often a pass/fail or action column.

      | Test | Age | Monthly income | Expected output | Actual output |
      | --- | --- | --- | --- | --- |
      | 1 | 18 | 2000 | Monthly income too low. | Monthly income too low. |
      | 2 | 17 | 9000 | Must be 18 or over to apply. | Must be 18 or over to apply. |
      | 3 | 25 | 6000 | Application is valid. | Application is valid. |
      | 4 | (blank) | 6000 | No output — validation stops | No output |

      A test **passes** when expected and actual match. When they differ, the difference is the defect to
      investigate.

      > [exam] When you are asked to *complete* a test table, work strictly from the pseudocode as written — not
      from what the code was *supposed* to do. If a faulty branch means a Premium item is classified as OddBox, then
      OddBox is the **actual** result, and the mismatch with the expected result is the point of the question.

      ## Alpha vs beta testing

      - **Alpha testing** is done **by the development team**, internally, on modules and on the whole solution.
        Breakpoints, commenting out code and test tables belong here.
      - **Beta testing** is done **by real users in a real environment** before release. See the U4 AoS 1 article.
    `
  },

  {
    id: 'design-tools',
    title: 'Design tools for modules',
    summary: 'Data dictionaries, mock-ups, object descriptions, IPO charts, pseudocode.',
    kk: ['U3A1 KK3', 'U3A2 KK14'],
    body: `
      The same five tools appear in both U3 AoS 1 and U3 AoS 2. They are produced in the **design** stage of the
      problem-solving methodology.

      ## Data dictionary

      A table describing every data element in the solution: field name, data type, size/format, description, and
      often validation rules and an example.

      | Field name | Data type | Description |
      | --- | --- | --- |
      | produceType | string | The type of fruit or vegetable |
      | weight | integer | Weight in grams |
      | isBruised | Boolean | Indicates whether the produce is bruised |
      | category | string | Result of classification |

      ## Mock-up

      A visual representation of a user interface, annotated with the design decisions: fonts and sizes, colours,
      control types, spacing, and what each element does. Mock-ups are how design principles and UX get assessed
      before any code exists.

      ## Object description

      A description of a class/object showing its **name**, its **properties/attributes** (with data types) and its
      **methods**. It is the OOP counterpart of a data dictionary.

      ~~~
      Name:                RentalProperty

      Properties/attributes:
        propertyID    (string)
        numBedrooms   (integer)
        rentAmount    (float)
        occupied      (Boolean)
        availableFrom (date)

      Methods:
        getPropertyDetails()
        isAvailable()
        updateRentAmount(newRentAmount)
      ~~~

      > [exam] In 2025 VCAA you had to label the two sections of an object description — the answers were
      **properties/attributes** and **methods** — and then supply missing attributes with their data types by
      reading the case study. Attributes must come from the stimulus, with a plausible type.

      ## IPO chart

      Three columns — **Input**, **Process**, **Output** — showing what data goes in, what the module does with it,
      and what comes out.

      | Input | Process | Output |
      | --- | --- | --- |
      | date, income, tax-free threshold claimed | look up tax rate; if threshold claimed, subtract threshold amount from income; calculate tax | tax |

      The trap: a correct IPO chart must include **every** input shown on the mock-up, and the process column must
      reflect any **conditional** behaviour ("if the threshold is claimed, then…"), not just the happy path.

      ## Pseudocode

      A structured, language-independent description of an algorithm. Use consistent keywords, indentation and one
      instruction per line.

      ~~~
      BEGIN calculateBonus(referrals)
        IF referrals <= 10 THEN
          RETURN referrals * 500
        ELSEIF referrals <= 30 THEN
          RETURN 5000 + (referrals - 10) * 600
        ELSE
          RETURN 15000 + (referrals - 30) * 700
        ENDIF
      END calculateBonus
      ~~~

      > [tip] To answer "trace this pseudocode" questions, build a small table of variables and update it line by
      line. Do not read the code and guess — write the values down.
    `
  },

  {
    id: 'ai-programming',
    title: 'AI in programming',
    summary: 'Prompt-generated code, automated debugging, optimisation and ethics.',
    kk: ['U3A1 KK1', 'U4A1 KK4', 'U4A2 KK8'],
    body: `
      This is new key knowledge in the 2025 study design, so it appears in every recent paper. Four sub-points.

      ## Using prompts to generate code

      A developer describes the required behaviour in natural language and an AI assistant produces code.

      - **Benefit:** speeds up development by auto-generating boilerplate and repetitive code.
      - **Limit:** the output is **not guaranteed to be correct, secure or efficient**, so human review remains
        essential.

      > [exam] Every distractor that claims AI "guarantees bug-free code", "removes the need for human coders" or
      "ensures perfectly optimised code" is wrong. The correct option always leaves human oversight in place.

      ## Automated debugging and testing of modules

      AI tools and linters can scan code to find syntax errors and some logic errors, suggest fixes, and generate
      test cases automatically. The advantage is **speed of identifying and fixing errors**, not perfection —
      automated tools do not reliably catch every logic error.

      ## Code optimisation

      AI can suggest more efficient algorithms, remove redundant code, or restructure loops to reduce processing
      time and memory use. The developer still has to verify that the optimised version behaves identically.

      ## Responsible and ethical use

      This is the part most often examined in extended response. The issues:

      - **Over-reliance.** A team that generates all initial code with AI may lose the skills and understanding
        needed to review, debug and maintain it. This is the ethical problem — not that AI is used at all.
      - **Intellectual property and copyright.** AI models are trained on existing code, and generated output may
        reproduce copyrighted work. Using it may breach the **Copyright Act 1968 (Cwlth)**.
      - **Data privacy.** Pasting customer data or proprietary source code into an external AI tool sends it to a
        third party — a potential breach of the **Privacy Act 1988 (Cwlth)**.
      - **Security.** Generated code may contain vulnerabilities; an experimental AI assistant installed on office
        systems may draw on real customer data it should never have seen.
      - **Bias and accountability.** If AI-influenced decisions affect users, someone must remain accountable for
        the outcome.

      **Responsible practice:** ensure developers understand the strengths *and* limits of AI assistants, require
      human code review of all generated code, set a policy on what data may be given to AI tools, and record where
      AI was used.
    `
  }
  ]
},

/* ============================================================
   UNIT 3 · AREA OF STUDY 2
   ============================================================ */
{
  id: 'u3a2',
  code: 'Unit 3 · AoS 2',
  title: 'Software development: analysis and design',
  blurb: 'Briefs, project plans, analysis diagrams, legal duties, ideation and the design of an interface people can actually use.',
  color: 'var(--u3a2)',
  lessons: [

  {
    id: 'why-develop',
    title: 'Why organisations develop software',
    summary: 'The four examinable reasons — and how to apply them to a case study.',
    kk: ['U3A2 KK1'],
    body: `
      Section C often opens with "state three reasons why the organisation may wish to undertake a software
      development project". Three marks, and the reasons must be **grounded in the case study**.

      ## The four reasons in the study design

      1. **Increasing productivity and efficiency.** Automating a manual process so staff do more in less time, and
         so that errors from manual handling disappear.
      2. **Reducing costs.** Less staff time on repetitive work, fewer errors to correct, less duplicated software.
      3. **Identifying opportunities to address gaps in the market.** Offering something competitors do not.
      4. **Meeting organisational objectives or needs.** Supporting a stated goal — expansion, compliance,
         consistency across sites.

      ## Turning a case study into marks

      Given: *"Jin takes 1–2 hours per agency to manually collate spreadsheets from 60 agencies, and the process
      sometimes leads to mistakes."*

      | Reason | Applied answer |
      | --- | --- |
      | Productivity/efficiency | Automating collation removes 60–120 hours of manual work each quarter, freeing Jin for analysis |
      | Reducing costs | Fewer staff hours on collation, and fewer costly errors to find and fix |
      | Meeting organisational needs | A single platform gives consistent data across all 60 agencies, which the current mix of spreadsheets and packages cannot |

      > [tip] A bare reason ("to increase efficiency") is usually worth less than a reason plus its evidence from the
      stimulus. Name the reason, then quote the detail that supports it.

      ## Goals versus objectives

      Related, and separately examinable (U4 AoS 2 KK1):

      - A **goal** is a broad, long-term aim. It is *not necessarily measurable*. "Significantly increase our number
        of users over the next five years."
      - An **objective** is a specific, **measurable** target that works towards a goal. "Gain 20% more users this
        financial year."

      Objectives exist to make goals achievable and assessable.
    `
  },

  {
    id: 'brief',
    title: 'The solution brief',
    summary: 'Outline, users, languages, feasibility and originality.',
    kk: ['U3A2 KK2', 'U3A2 KS1'],
    body: `
      A **brief** documents a problem, need or opportunity at the very start of a project. Five features are
      examinable.

      ## 1. Problem / need / opportunity outline

      A short statement of what is wrong or what could be better, and why it matters now.

      ## 2. Proposed users

      Who will use the solution, and what characterises them — technical skill, age, accessibility needs, the device
      they will use, how often. This feeds directly into UX and design decisions later.

      ## 3. Programming languages to be used

      Which language(s) and why — team skills, platform support, available libraries.

      ## 4. Feasibility

      Whether the solution can realistically be built and run. Assess it across dimensions:

      - **Economic** — can it be funded, and will the benefit exceed the cost?
      - **Technical** — do the team and the technology exist to build it?
      - **Operational** — can the organisation run and maintain it once built? (Moderation, support, hosting.)
      - **Schedule** — can it be delivered in the time available?
      - **Legal** — can it be operated lawfully?

      ## 5. Originality

      Whether the solution offers something genuinely new, or duplicates what already exists. A social video
      platform "where users worldwide upload videos and others comment" **lacks originality** — several global
      platforms already do exactly that.

      > [exam] The DLTV trial asked students to *assess* originality and feasibility of a proposed social media
      platform built by one friend as a side business. Full marks needed: (1) a statement of what originality means,
      (2) applied — several huge platforms already offer this exact functionality, (3) what feasibility means, and
      (4) applied — hosting global video and moderating misuse demands resources far beyond a personal side
      business. **Define, then apply**, for each term.
    `
  },

  {
    id: 'project-management',
    title: 'Project management and Gantt charts',
    summary: 'Tasks, sequencing, dependencies, milestones and the critical path.',
    kk: ['U3A2 KK3', 'U3A2 KS2'],
    body: `
      A **Gantt chart** is a horizontal bar chart plotting project tasks against a timeline. Seven features are
      examinable.

      ## The features

      1. **Identification of tasks** — every task is listed, usually one per row.
      2. **Sequencing of tasks** — tasks are placed along the time axis in the order they must occur; a task that
         depends on another starts only after that one finishes. Bars that overlap vertically run concurrently.
      3. **Time allocation** — the **length of each bar** shows the duration of that task.
      4. **Dependencies** — arrows (or linked bars) show that one task cannot start until another completes.
      5. **Milestones** — significant checkpoints, shown as a diamond with **zero duration**. They mark the
         completion of a phase, not work itself.
      6. **Critical path** — the longest continuous chain of dependent tasks. It determines the **minimum project
         duration**: any delay to a task on the critical path delays the entire project.
      7. **Monitoring and documenting progress** — the planned chart is compared against actual progress; bars are
         adjusted, annotations added, and dependent tasks rescheduled.

      @[gantt-anatomy]

      ## Milestones — how to earn the second mark

      Naming a milestone is one mark. The second mark is for its **significance in monitoring progress**.

      *"Completion of alpha testing is a milestone. It confirms that development is finished and the solution is
      stable enough for beta testing to begin, so if the milestone is reached late the project lead knows
      immediately that beta testing and release must be rescheduled."*

      ## Tasks on and off the critical path

      A task **not** on the critical path has **float/slack**: it can run over by some amount without delaying the
      project. A task **on** the critical path has none.

      > [exam] 2025 VCAA: a critical-path task is running two days late — what is the most effective way to *record
      and address* it? The answer is **adjust the timeframe for the delayed task and reschedule dependent tasks
      accordingly**. Note the verb "record": adding resources might help the delay, but it does not document it.
      Read what the question actually asks you to do.

      ## Using a Gantt chart to monitor progress

      For a "describe how a Gantt chart is used to monitor and document progress" question, cover:

      - Compare **actual** completion dates against the **planned** bars to see whether the project is ahead or
        behind.
      - **Adjust** bar lengths and start dates when tasks over- or under-run, and reschedule dependent tasks.
      - **Annotate** the chart to record what changed and why.
      - Watch the **critical path** to know whether a delay threatens the final deadline.
    `
  },

  {
    id: 'analysis-tools',
    title: 'Context diagrams, DFDs and use case diagrams',
    summary: 'The three analytical tools, their components and their rules.',
    kk: ['U3A2 KK8', 'U3A2 KS4'],
    body: `
      Three diagrams, each with a fixed component vocabulary. Marks are lost for using the wrong words.

      ## Context diagram (Level 0)

      Shows the system as **one single process** in the centre, the **external entities** that interact with it, and
      the **data flows** between them.

      - Exactly **one** process — the whole system.
      - **No data stores** appear on a context diagram.
      - Every arrow is labelled with the data that flows along it.

      ## Data flow diagram (Level 1)

      Decomposes that single process into its component processes. Four component types:

      | Component | Represents |
      | --- | --- |
      | **Process** | An action that transforms data (e.g. "make maintenance report") |
      | **External entity** | A person, role or system outside the boundary (e.g. "Property manager") |
      | **Data store** | Where data is held (e.g. "Properties") |
      | **Data flow** | Labelled movement of data between the above |

      **The rules that get examined:**

      - Every data flow must **begin and/or end at a process**. A flow directly between two data stores, or directly
        between two external entities, is invalid.
      - A Level 1 DFD must be **balanced** with its context diagram: the same external entities and the same
        external data flows appear on both.
      - Every process must have at least one input and one output.

      @[dfd-rules]

      > [exam] "Explain how this diagram breaks a rule for valid DFD design" is a two-mark question: one mark for
      **pointing at the specific offending flow**, one for **stating the rule** it breaks. Both are needed.

      ## Use case diagram

      Shows what the system does from the users' point of view. Components:

      - **System boundary** — a box enclosing the system. **Actors go outside it; use cases go inside.**
      - **Actors** — roles (not individual people's names) that interact with the system: "Driver", "Parking
        officer", "Manager". Labelling an actor with a person's name is an error.
      - **Use cases** — ovals naming a function the system performs: "Purchase parking time".
      - **Associations** — plain lines connecting an actor to a use case.
      - **Relationships:**
        - **«includes»** — the base use case **always** performs the included one. "Purchase parking time"
          *includes* "Process payment": you can never purchase without paying.
        - **«extends»** — the extending use case **sometimes** happens, under a condition. "View reports" is
          *extended by* "Print reports": the manager may print, but need not.

      @[usecase-anatomy]

      > [tip] Includes = always / mandatory. Extends = optional / conditional. If you can imagine the base use case
      completing without the other, it is **extends**.

      Common errors to look for in "find the mistake" questions: actors drawn inside the boundary; an actor named as
      a person rather than a role; «includes» used where the behaviour is optional; an arrow pointing the wrong way.
    `
  },

  {
    id: 'srs',
    title: 'Software requirements specification',
    summary: 'What an SRS contains — and what it deliberately does not.',
    kk: ['U3A2 KK9', 'U3A2 KS5'],
    body: `
      The **SRS** is the formal output of the analysis stage. It records what the solution must do, before any
      design work begins.

      ## Contents

      | Section | Contains |
      | --- | --- |
      | **Requirements** | Functional and non-functional requirements |
      | **Constraints** | Economic, legal, social and technical limits |
      | **Scope** | What is in and out of this version — the solution boundaries |
      | **User characteristics** | Who the users are: roles, technical skill, accessibility needs, frequency of use |
      | **Technical environment** | Hardware, operating systems, browsers, networks and existing systems it must run on or connect to |
      | **Analytical tools depicting existing processes and systems** | Context diagrams, DFDs and use case diagrams of the **current** system |

      ## What is *not* in an SRS

      Design artefacts. **Mood boards, sketches, mind maps and mock-ups belong to the design stage**, not the
      analysis stage. A standard multiple-choice question asks which item is *not* included in an SRS, and the
      answer is the ideation or design tool.

      > [exam] The diagrams in an SRS depict the **existing** system. Diagrams of the *proposed* system are produced
      during design. If a question hinges on "existing processes and systems", that phrase is doing work.

      ## Collecting the data behind it

      To write the SRS you first collect data. Match the method to the situation — this is a recurring 4-mark
      Section C question where you must **state a method and justify it for that stakeholder**:

      | Method | Best when | Why |
      | --- | --- | --- |
      | **Survey / questionnaire** | Many people, spread across sites | Efficiently gathers comparable data from a large group — e.g. property managers at all 60 agencies |
      | **Interview** | Few people, need depth | Allows follow-up questions and detailed reasoning — e.g. the leadership team explaining strategic needs |
      | **Observation** | Behaviour matters more than opinion | Reveals what actually happens, including problems users have not noticed — e.g. a checkout system that slows down "for no apparent reason" |
      | **Report / existing documentation** | Historical or quantitative evidence needed | Provides usage statistics, incident logs and trends over time |

      The mark is almost never for naming the method alone — it is for the **reason it suits that specific
      stakeholder**.
    `
  },

  {
    id: 'legal-analysis',
    title: 'Legal requirements: privacy and intellectual property',
    summary: 'Copyright Act 1968, Privacy Act 1988 and the Victorian PDP Act 2014.',
    kk: ['U3A2 KK10', 'U4A2 KK7'],
    body: `
      Three pieces of legislation are examinable by name. Knowing **which one applies to which situation** is worth
      more than reciting principle numbers.

      ## Copyright Act 1968 (Cwlth)

      Protects the **expression of ideas** — including source code, text, images, music and video. Copyright exists
      automatically; no registration is required. Breaches include:

      - Copying or adapting someone else's code without permission.
      - **Editing a third party's code directly without the author's permission**, even to apply a fix.
      - Downloading and processing the full text of books without a licence.
      - Using AI-generated code that reproduces copyrighted material.

      > [exam] 2025 VCAA asked when the Copyright Act would be breached during a security update of a third-party
      application. Applying an official patch, deleting data accidentally and backing up insecurely are all
      problems — but only **editing the code without the author's permission** is a *copyright* breach. Match the
      wrongdoing to the right Act.

      ## Privacy Act 1988 (Cwlth)

      Governs how organisations handle **personal information**. The study design names Australian Privacy
      Principles **1, 3, 6, 8, 9 and 11**:

      | APP | Requirement |
      | --- | --- |
      | APP 1 | Open and transparent management of personal information — have a clear privacy policy |
      | APP 3 | Only collect personal information that is reasonably necessary |
      | APP 6 | Only use or disclose information for the purpose it was collected |
      | APP 8 | Take reasonable steps before disclosing information overseas |
      | APP 9 | Do not adopt or use government-related identifiers as your own |
      | APP 11 | Take reasonable steps to **secure** personal information, and destroy or de-identify it when no longer needed |

      APP 11 is the one that applies to a **data breach**. If a case study describes leaked passwords or personal
      identification information, the Privacy Act 1988 is the answer.

      ## Privacy and Data Protection Act 2014 (Vic)

      Applies to **Victorian public sector** organisations. Named Information Privacy Principles: **1, 2, 4, 5, 7, 9
      and 10** — covering collection, use and disclosure, data security, openness, access and correction, unique
      identifiers, and transborder data flows.

      > [tip] Which Act? Ask two questions. *Is it about code, text or creative work being copied?* → Copyright Act
      1968. *Is it about personal information?* → Privacy Act 1988 for private/Commonwealth organisations, PDP Act
      2014 for Victorian government bodies.
    `
  },

  {
    id: 'file-management',
    title: 'File management',
    summary: 'Naming conventions, version control, backups, security, disposal.',
    kk: ['U3A2 KK11'],
    body: `
      Five techniques, each with a purpose you should be able to state in a sentence.

      ## Naming conventions

      Consistent, descriptive file names make files findable and their contents predictable — often including a
      date or version number: \`SRS_MyPuppySchool_v2_2025-08-14.docx\`.

      ## Version control

      **Tracks and manages changes to files over time.** Its purposes:

      - See **who** changed **what** and **when**.
      - **Revert** to an earlier version when a change breaks something.
      - Let multiple developers work simultaneously and **merge** their work instead of overwriting it.
      - Provide an audit trail — which also makes it a **security control** (see U4 AoS 2).

      Version control is not a backup: its purpose is change management, not disaster recovery.

      ## Backups

      | Type | What it copies | Restore | Storage / time |
      | --- | --- | --- | --- |
      | **Full** | Everything, every time | Fastest — one set of media | Slowest to create, most space |
      | **Incremental** | Only what changed **since the last backup of any kind** | Slowest — needs the last full backup plus every incremental since | Fastest to create, least space |
      | **Differential** | Only what changed **since the last full backup** | Medium — needs the last full plus the latest differential | Medium; grows each day until the next full backup |

      **Performing regular backups is one of the Essential Eight** — see the cyber security unit.

      ## Security

      Controlling who can access files: authentication, access permissions based on role, and encryption of data at
      rest and in transit.

      ## Disposal

      Securely destroying data that is no longer needed — secure deletion, physical destruction of media, and
      de-identification. **APP 11 requires it**: personal information must be destroyed or de-identified once it is
      no longer needed for the purpose it was collected.
    `
  },

  {
    id: 'ideation',
    title: 'Ideation techniques and tools',
    summary: 'Mood boards, brainstorming, mind maps, sketches and annotations.',
    kk: ['U3A2 KK12', 'U3A2 KS6'],
    body: `
      **Ideation** is the stage where design *ideas* are generated — before detailed designs are produced. Five
      tools are named.

      ## Mood board

      A collage of images, colours, fonts, textures and existing interfaces, assembled to establish the **look and
      feel** of a solution and communicate it to a client. It gathers inspiration; it does not specify layout.

      ## Brainstorming

      Rapid, uncensored generation of as many ideas as possible from a group, with evaluation deliberately deferred
      until afterwards. The point is quantity and range.

      ## Mind map

      A diagram that **connects and organises ideas** around a central concept, branching outwards into
      sub-branches. It shows relationships and hierarchy between ideas.

      ~~~
                          ┌── comparable rental properties
        Property insights ┤
                          └── tenant interest and demographics
                    │
      Prospective landlord component
                    │
                          ┌── contract management
        Compliance ───────┤
                          └── payment and maintenance portals
                    │
                          ┌── clear and intuitive
        User interface ───┤
                          └── matches the company's branding
      ~~~

      > [exam] "Complete the mind map" questions give you a list of loose ideas and one completed branch. Work out
      the **categories** for the empty main branches from the stem, then slot each loose idea under the branch it
      belongs to. Marks are for a sensible grouping, not for artistry.

      ## Sketches

      Quick, rough, hand-drawn representations of possible interfaces or layouts. Fast to produce and to discard —
      that is their value. A sketch is *not* a mock-up: a mock-up is detailed and annotated with specifications.

      ## Annotations

      Notes added to a sketch or mock-up explaining what an element is, how it behaves, or why it is there.
      Annotations turn a picture into a design a developer can build.

      > [tip] If a question asks you to "add an element and associated annotation", you get one mark for choosing a
      sensible element (e.g. a small "i" info icon beside the dog-size field) and one for the annotation explaining
      the behaviour (e.g. "tapping the icon opens a tooltip describing each size category, keeping the extra text off
      the page").
    `
  },

  {
    id: 'evaluation-criteria',
    title: 'Evaluation criteria: efficiency and effectiveness',
    summary: 'Writing criteria you could actually measure.',
    kk: ['U3A2 KK13', 'U3A2 KS7', 'U4A1 KK8'],
    body: `
      Criteria are written during **design** (so you know what success looks like) and applied during **evaluation**
      (after the solution has been in use). Both halves are examinable.

      ## Efficiency vs effectiveness

      **Efficiency** is about the resources consumed — time, cost, effort.

      - Speed of processing
      - Cost of data manipulation
      - Effort required of the user (clicks, keystrokes, time to complete a task)
      - Use of storage and processing capacity

      **Effectiveness** is about how well the solution does its job.

      - Completeness — does it do everything required?
      - Accuracy — is the output correct?
      - Readability, clarity, attractiveness of output
      - Usability and accessibility
      - Communication of message
      - Relevance and timeliness
      - Maintainability

      > [exam] "Cost of data manipulation" is **efficiency**. "Completeness", "maintainability" and "communication of
      message" are **effectiveness**. This exact distinction has been tested in multiple choice.

      ## Writing a criterion that earns marks

      Weak: *"The solution should be fast."*

      Strong: *"The attendance page allows a trainer to mark attendance for 30 dogs and their owners in under 90
      seconds."*

      A good criterion is:

      - **Specific** to the solution and its users;
      - **Measurable** — it states a target or a way of counting;
      - Written as a **question** or a **statement** that can be answered yes/no or with a number.

      Criteria are often phrased as questions: *"Is the output accurate?" "Does the interface meet the needs of
      non-technical warehouse staff?"*

      ## Techniques for applying criteria

      Naming a criterion is half the job; a question may then ask **how you would measure it**:

      | Criterion | Technique to apply it |
      | --- | --- |
      | Accuracy — how often the software makes mistakes | Review helpdesk records of reported problems and complaints; compare system output against known-correct data |
      | Attractiveness — do users find the interface comfortable | Interview or survey users after a period of use |
      | Speed of a task | Time users completing the task; log server response times |
      | Usability | Observe users attempting set tasks and count errors and requests for help |
    `
  },

  {
    id: 'ux',
    title: 'User experience (UX)',
    summary: 'Affordance, interoperability, security and usability.',
    kk: ['U3A2 KK15'],
    body: `
      Exactly four UX characteristics are named in the study design. Learn all four — questions ask you to pick the
      one a design demonstrates *best* or *worst*.

      ## Affordance

      **How clearly an element communicates what it does and how to use it.** A button that looks pressable; an icon
      whose meaning is obvious; a field whose label makes the required input clear; a tap target big enough for a
      finger.

      Poor affordance: a mock-up where labels sit nowhere near their fields, so the user cannot tell which label
      belongs to which input; a calendar with buttons too small to press accurately on a phone.

      ## Interoperability

      **The ability of the solution to work and exchange data with other systems, devices and applications.**

      Why it matters: it removes manual re-entry of data (and the errors that come with it), lets the solution
      connect to scanners, payment systems and external databases, and makes future upgrades easier.

      ## Security

      Named in the study design as **authentication and data protection** — verifying who the user is, and
      protecting their data with encryption and access control. As a UX characteristic, the design question is
      whether security measures protect the user without making the solution painful to use.

      ## Usability

      **How easily and successfully users can achieve their goals.** Covers learnability, efficiency of use,
      error prevention and recovery, accessibility, and consistency.

      Design choices that improve usability: dropdowns and checkboxes instead of free-text (fewer invalid entries);
      consistent placement of buttons and labels; clear grouping of related information; only showing the
      information the user needs right now.

      > [exam] The 2025 VCAA mock-up question ("which UX characteristic could be improved the most?") had answer
      **affordance** — the labels and fields were scattered so the user could not tell what to enter where.
      *Portability* and *authentication* were distractors: portability is not one of the four UX characteristics,
      and authentication is a component of security, not the characteristic itself.

      ## Comparing two designs

      When a question shows two sketches and asks which characteristic each demonstrates better, structure your
      answer as: **name the characteristic → point to the specific element in that sketch → say why it is better
      than the other sketch.** All three parts are needed for full marks.
    `
  },

  {
    id: 'design-principles',
    title: 'Design principles for user interfaces',
    summary: 'Alignment, balance, contrast, space, text formatting, usability, navigation.',
    kk: ['U3A2 KK16', 'U3A2 KS8'],
    body: `
      Seven principles, split between **appearance** and **functionality**. A question may ask you to explain one
      with reference to a mock-up, so pair each definition with a concrete observation.

      ## Appearance

      **Alignment** — how elements line up horizontally and vertically. Consistent alignment creates order and makes
      a page easier to scan; deliberately breaking alignment (centring a submit button) signals that an element has
      different priority.

      **Balance** — the distribution of visual weight across the interface. A balanced layout does not feel heavier
      on one side. Symmetrical balance feels formal and stable; asymmetrical balance feels dynamic.

      **Contrast** — difference between elements: light against dark, large against small, bold against regular.
      Contrast creates a **visual hierarchy** (the user sees the most important thing first) and is essential for
      **readability and accessibility** — dark text on a light background.

      **Space** — the empty area around and between elements. White space separates groups of related content,
      reduces clutter and gives the eye somewhere to rest.

      **Text formatting** — font choice, size, weight, colour, line spacing and case. Consistent formatting signals
      structure: headings large and bold, body text plain and legible, no more than two or three typefaces.

      ## Functionality

      **Usability** — see the UX article. In design-principle terms: is the interface easy to learn, quick to use,
      forgiving of mistakes and accessible?

      **Navigation** — how the user moves between screens and finds what they need. Good navigation is consistent
      across pages, shows where the user currently is, and is never more than a few steps from anything important.

      ## Writing a strong 2-mark answer

      *"Explain why alignment is an important principle for user interface design, with reference to the mock-up."*

      1. **Define and state the impact:** alignment is how elements line up vertically or horizontally; it affects
         both appearance and functionality because it drives readability.
      2. **Reference the mock-up specifically:** each label is horizontally aligned with its input field so the user
         can immediately see which label belongs to which control, and all elements are left-aligned except the
         submit button, which is centred to mark it as the highest-priority action.

      > [tip] One mark for the principle, one mark for the evidence. Never write a design-principle answer without
      naming an element from the stimulus.
    `
  }
  ]
},

/* ============================================================
   UNIT 4 · AREA OF STUDY 1
   ============================================================ */
{
  id: 'u4a1',
  code: 'Unit 4 · AoS 1',
  title: 'Software development: development and evaluation',
  blurb: 'Building the solution, testing it properly, evaluating it against criteria, and assessing how the project plan held up.',
  color: 'var(--u4a1)',
  lessons: [

  {
    id: 'efficient-effective',
    title: 'Characteristics of efficient and effective solutions',
    summary: 'User-centred design, clear code, detailed internal documentation.',
    kk: ['U4A1 KK1'],
    body: `
      Three characteristics are named. Each is a likely 3-mark "explain how X makes the solution efficient and
      effective" question.

      ## User-centred design

      Designing around the needs, abilities and context of the actual users, and involving them throughout.

      In practice:

      1. **Identify the users and their characteristics** — for a rental platform: property owners, property
         managers, head-office staff and tenants, each with different tasks and different technical confidence.
      2. **Collect data from them** — interviews, surveys, observation of the current process.
      3. **Involve them in design** — test sketches and mock-ups with real users and act on the feedback.
      4. **Test with them** — beta testing with the target user group.

      **Why it makes the solution efficient and effective:** users complete tasks in fewer steps and with fewer
      errors (efficiency), and the solution actually meets their needs rather than the developer's assumptions
      (effectiveness). It also reduces expensive rework late in the project.

      ## Clear and concise code

      Meaningful names, consistent naming conventions, functions and methods instead of repeated blocks, sensible
      indentation, and no redundant instructions.

      Benefits: faster to read and understand, easier and cheaper to maintain, fewer places for bugs to hide, and
      often faster to execute.

      ## Detailed internal documentation

      Comments explaining and justifying data and code structures, plus stubs marking planned work. See the U3 AoS 1
      article — the same key knowledge is examined again here in the context of a finished solution.

      > [exam] A question asking "explain how user-centred design could ensure the application is efficient and
      effective" wants both words addressed explicitly. Write one sentence connecting UCD to **efficiency** and one
      connecting it to **effectiveness**, each grounded in the case study's user groups.
    `
  },

  {
    id: 'approaches',
    title: 'Approaches to software development',
    summary: 'Code repositories, APIs and libraries, AI assistants.',
    kk: ['U4A1 KK4'],
    body: `
      Three "established and innovative approaches" are named.

      ## Code repositories

      A managed store for source code, holding its full change history. Advantages over keeping files on one
      computer or a shared flash drive:

      - **Version control** — every change is tracked with who made it and when, and any earlier version can be
        restored if a change breaks the solution.
      - **Collaboration** — several developers work at once on different parts and their changes are **merged**
        rather than overwriting one another. No physical hardware needs to be passed around.
      - **Automated testing / integration** — repositories can be configured to build and test code automatically
        whenever changes are submitted.
      - **Backup and availability** — the code exists off a single machine, so a hardware failure does not lose it.

      > [exam] "Discuss two advantages" is worth 2 marks each: **name** the advantage, then **compare** it against
      the alternative described in the case study. Naming alone earns half.

      ## APIs and libraries

      An **application programming interface (API)** is a defined set of rules that allows different software
      applications to communicate with each other, often over the internet. A **library** is a collection of
      pre-written code that a developer can call rather than writing from scratch.

      **Benefits:** faster development, functionality the team could not build itself (mapping, payments, AI
      analysis), and code that has already been tested by many users.

      **Risks:** the solution depends on a third party's availability, pricing, security and continued support —
      and data sent to an external API leaves your control, which is a privacy consideration.

      ## AI-based assistants

      Covered in detail in the U3 AoS 1 article on AI in programming. In the development stage specifically:
      generating boilerplate code from prompts, automated debugging and test generation, and code optimisation —
      always with human review, and with a policy governing what data may be shared with the tool.

      When you meet an unfamiliar library or class written by someone else, the first step is to **read the
      documentation supplied with it** — not to read through the implementation code, and not to copy it into your
      own classes.
    `
  },

  {
    id: 'alpha-testing',
    title: 'Debugging and alpha testing',
    summary: 'Checking the solution meets requirements and functions correctly.',
    kk: ['U4A1 KK6', 'U4A1 KS5'],
    body: `
      **Alpha testing** is carried out **by the development team**, in-house, before the solution goes to real
      users. Its purpose is to confirm the solution **meets the requirements** and **functions correctly**.

      ## The four named techniques

      - **Breakpoints** — pause execution at a chosen line to inspect variable values and step through the code.
      - **Commenting out code** — temporarily disable a section to isolate a fault; the code is preserved so it can
        be reviewed, adjusted and restored.
      - **Relevant test data** — valid, invalid and boundary values chosen to exercise every path.
      - **Test cases comparing expected and actual output in testing tables** — the formal record of what was
        tested and what happened.

      ## Designing test cases from the requirements

      Work systematically:

      1. List each functional requirement.
      2. For each, identify the conditions in the code (every \`IF\`, every loop bound).
      3. For each condition, write test data that is **inside**, **outside** and **on** the boundary.
      4. Record the **expected** output *before* running the test — otherwise you will unconsciously accept
         whatever the code produces.
      5. Run, record the **actual** output, and investigate every mismatch.

      ## Completing a test table under exam conditions

      Given this pseudocode and a rental price of $2000/month:

      ~~~
      IF age is not blank THEN
        IF age < 18 THEN
          DISPLAY "Must be 18 or over to apply."   RETURN False
        ELSEIF monthly_income < (rental_price * 3) THEN
          DISPLAY "Monthly income too low."        RETURN False
        ELSE
          DISPLAY "Application is valid."          RETURN True
        ENDIF
      ENDIF
      ~~~

      | Test | Age | Monthly income | Expected output | Actual output |
      | --- | --- | --- | --- | --- |
      | 1 | 18 | 2000 | Monthly income too low. | Monthly income too low. |
      | 2 | 17 | 8000 | Must be 18 or over to apply. | Must be 18 or over to apply. |
      | 3 | 18 | 6000 | Application is valid. | Application is valid. |
      | 4 | 25 | 5999 | Monthly income too low. | Monthly income too low. |

      Notice tests 3 and 4 sit **on and just below the $6000 boundary** ($2000 × 3). Boundary values are where the
      marks are.

      > [exam] Trace the pseudocode exactly as printed. If a branch is faulty, the **actual** column must record the
      faulty result — that mismatch is the answer the examiner wants, not a corrected version.
    `
  },

  {
    id: 'beta-testing',
    title: 'Beta testing',
    summary: 'Testing plans, scenarios, observation and documenting results.',
    kk: ['U4A1 KK7', 'U4A1 KS6'],
    body: `
      **Beta testing** is conducted by **real users, in a real environment**, after alpha testing is complete and
      before general release. Its purpose is to find issues that only appear in genuine use, and to confirm the
      target audience is satisfied.

      ## The three named strategies

      ### 1. Construction of a testing plan and test scenarios

      A **testing plan** sets out who will test, over what period, on what devices, and how feedback will be
      captured. A **test scenario** is a realistic task the tester is asked to complete — expressed in the user's
      language, not the developer's.

      Good scenarios for a rental platform:

      - A property manager retrieves an inspection report for a given property.
      - A tenant lodges a maintenance request with a photo attached.
      - A property owner approves a maintenance request from an email notification.

      ### 2. Observation of testing scenarios

      Watching users attempt the scenarios, in person or via screen recording, and noting where they hesitate, make
      mistakes, or need help. Observation reveals problems users never think to report.

      ### 3. Documentation of test results

      Recording every issue with enough detail to reproduce it: what the tester did, what they expected, what
      happened, on what device, and how severe it was. Results are then prioritised into changes to the solution.

      ## Choosing the right user group

      Match the tester to the function. If the function retrieves an **inspection report**, the beta testers must be
      **property managers** — they are the group that uses it and the only ones who can judge whether the output is
      correct and useful.

      ## Writing a 3-mark beta testing strategy

      Cover three things, all tied to the case study:

      1. **Who** — recruit a specific group (e.g. property managers across several agencies; staff at local dog
         obedience schools).
      2. **What they do** — the specific scenarios they will attempt, over a stated period.
      3. **How feedback is captured** — an in-app feedback form, structured surveys after each scenario, and regular
         review sessions, with results documented and prioritised.

      > [exam] Generic answers ("get some users to test it and collect feedback") score poorly. Name the user group
      from the stimulus, name the functions they will test, and name the feedback mechanism.
    `
  },

  {
    id: 'evaluation',
    title: 'Evaluation strategies',
    summary: 'Criteria, time frame, responsibility — and applying them.',
    kk: ['U4A1 KK8', 'U4A1 KK9', 'U4A1 KS7'],
    body: `
      Evaluation happens **after the solution has been in use for a period**, not immediately at release. That gap
      is deliberate: you cannot judge whether a solution is effective until real work has been done with it.

      ## The three features of an evaluation strategy

      1. **Evaluation criteria** — what will be measured, written back in the design stage. See the U3 AoS 2
         article.
      2. **Time frame** — when the evaluation will occur and over what period. "Three months after release, using
         data collected over the preceding four weeks." Long enough for meaningful data, soon enough to act on it.
      3. **Responsibility** — who will collect the data and who will make the judgement. Naming a person or role
         is what turns a plan into something that actually happens.

      ## Techniques for applying evaluation criteria

      | To measure | Collect |
      | --- | --- |
      | Accuracy | Helpdesk records of reported errors; comparison of system output against known-correct data |
      | Speed / efficiency | Timing of users completing standard tasks; system response-time logs |
      | Usability | Observation of users performing set tasks; count of errors and help requests |
      | Attractiveness, satisfaction | Interviews and surveys with each user group |
      | Completeness | Checking delivered functionality against the functional requirements in the SRS |

      ## Structuring an evaluation answer

      For each criterion: **name the criterion → name the technique → name the data you would collect → say what
      result would mean success.**

      *"Accuracy — how often the software makes mistakes. Review the helpdesk log for the first three months after
      release and count reported calculation errors per 1000 transactions. Fewer than one per 1000 would meet the
      criterion."*

      > [tip] Evaluating the **solution** (efficiency and effectiveness) and assessing the **project plan** are two
      different questions with different content. Do not mix them up — see the next article.
    `
  },

  {
    id: 'project-monitoring',
    title: 'Monitoring projects and assessing the plan',
    summary: 'Scope creep, personnel changes, technical issues, logs and annotations.',
    kk: ['U4A1 KK10', 'U4A1 KK11', 'U4A1 KK12', 'U4A1 KS8'],
    body: `
      ## Factors that influence the effectiveness of a project plan

      Three are named, and each has a predictable consequence:

      - **Scope creep** — features are added after development starts without adjusting the timeline, budget or
        resources. Long-term impact: **the original objectives may not be achieved, because resources are diverted
        to the new features.** Deadlines slip and quality drops.
      - **Personnel changes** — staff leave, join or change roles mid-project. New people need time to get up to
        speed; lost expertise can delay tasks on the critical path.
      - **Technical issues** — hardware failures, unexpected complexity, dependencies on third-party systems that do
        not behave as documented.

      > [exam] For scope creep the tempting distractors say the project will "achieve a higher-quality outcome" or
      "better stakeholder satisfaction". They are wrong: without adjustments to the plan, the failure is that the
      **original objectives are not met**.

      ## Techniques for recording progress

      - **Adjustments to tasks** — splitting, adding or removing tasks as reality diverges from the plan.
      - **Adjustments to time frames** — changing durations and start dates, and rescheduling dependent tasks.
      - **Annotations to project plans** — notes on the Gantt chart recording what changed and **why**.
      - **Monitoring and documenting progress using logs/journals** — dated entries recording what happened.

      ## Reading a project log critically

      A common Section C question shows a log excerpt and asks what is wrong with how progress was recorded:

      ~~~
      08/09/2025 – Nadia J.  Design of the user interface has taken a week longer than expected.
      09/09/2025 – Nadia J.  Design of the interface and feedback now finalised.
      14/09/2025 – Sun K.    Object descriptions tracking as expected.
      17/09/2025 – Sun K.    Object descriptions completed ahead of time.
      ~~~

      **The issue:** entries state *that* a task ran over, but not **why**, and there is no record of what was done
      about it — no impact on dependent tasks, no adjustment to the plan. Entries are also irregular and made only
      by the person doing the task, so the project lead cannot see the whole picture or the effect on the critical
      path.

      **Recommendations that earn marks:**

      - Record the **cause** of each variance, not just the fact of it, so patterns can be identified and avoided.
      - Record the **impact** on dependent tasks and the critical path, and **annotate the Gantt chart** with the
        rescheduled dates.
      - Make entries at **regular, defined intervals** (e.g. daily or at each milestone) rather than ad hoc.
      - Have a single person — the project lead — consolidate entries so the whole project is visible in one place.

      ## Assessing the effectiveness of the project plan

      This is a distinct skill from evaluating the solution. Three techniques are named:

      1. **Review the number of changes** made to the project plan during the project. Many changes suggests the
         original plan was unrealistic.
      2. **Examine why the changes were necessary** — were they avoidable (poor estimation, unclear scope) or
         unavoidable (a supplier failing)?
      3. **Assess the impact of the changes on project completion** — did the project still finish on time, on
         budget and in scope?
    `
  }
  ]
},

/* ============================================================
   UNIT 4 · AREA OF STUDY 2
   ============================================================ */
{
  id: 'u4a2',
  code: 'Unit 4 · AoS 2',
  title: 'Cyber security: secure software development practices',
  blurb: 'The whole of the Outcome 2 knowledge base — organisations, vulnerabilities, controls, threat modelling, evaluation, law, ethics and improvement. Written deep enough for the SAC, not just the exam.',
  color: 'var(--u4a2)',
  lessons: [

  {
    id: 'organisations',
    title: 'Organisations, goals and where software comes from',
    summary: 'Goals vs objectives, and the in-house / external decision — the foundation of every SAC answer.',
    kk: ['U4A2 KK1', 'U4A2 KK2'],
    body: `
      Everything in this area of study is assessed **against a specific organisation**. That makes this article
      the foundation: if you cannot state what the organisation is trying to achieve, you cannot analyse whether
      its practices support it, and you cannot reach the top band of any key skill.

      ## Goals and objectives

      | | Goal | Objective |
      | --- | --- | --- |
      | **Scope** | Broad, long-term direction | Specific, short-term target |
      | **Measurable?** | Not necessarily | **Always** |
      | **Time frame** | Years | Usually this quarter or this financial year |
      | **Example** | "Become the leading provider of fleet-management software in Australia" | "Win three further government contracts this financial year" |

      **Objectives exist to make goals achievable and assessable.** A goal states a direction; an objective is a
      checkpoint you can tick or fail. Every objective should serve a goal, and a good answer says which one it
      serves.

      > [exam] The 3-mark version of this question wants three things: (1) objectives are measurable; (2) goals
      are not necessarily measurable; (3) an example from the case study showing an objective serving a goal.
      Miss the third and you cap at 2.

      ### Finding them in a case study

      They are usually stated, but not always labelled. Look for:

      - **Goal language:** "aims to", "wants to become", "our vision", "over the next five years".
      - **Objective language:** any **number** — a percentage, a count, a deadline, a service level. "Grow the
        subscriber base by 25%", "maintain 99.9% availability", "reduce support tickets by half".

      If the case study gives you only goals, you can reasonably infer objectives from the numbers mentioned
      elsewhere — but say that you are inferring.

      ## Medium and large organisations

      The study design specifies **medium and large** organisations, and size genuinely changes the analysis:

      - **More people means more insider risk** — not because staff are malicious, but because access is harder
        to keep to the minimum each role needs.
      - **Formal process becomes necessary.** A three-person team can review each other's code informally; a
        180-person company cannot, so it needs a recorded process.
      - **Regulatory exposure rises.** Larger organisations hold more personal information, so a breach affects
        more people, and the "reasonable steps" expected under the Privacy Act scale with the organisation's
        size and resources.
      - **Turnover creates orphaned access.** Accounts of departed staff and finished contractors are one of the
        most common findings in a SAC case study.

      ## Developing in-house or externally

      Named explicitly in the Medium band of KS1, and a guaranteed source of marks because the descriptor asks
      for **advantages and disadvantages**.

      ### In-house

      | Advantages | Disadvantages |
      | --- | --- |
      | Full control over the process, the code and the release schedule | Higher up-front cost to employ, train and retain developers |
      | Developers understand the organisation's workflows, data and customers | May lack specialist skills — security expertise especially |
      | **Sensitive data never leaves the organisation**, reducing Privacy Act exposure | Slower if the team is small; diverts staff from other work |
      | Retains the intellectual property *and* the expertise | Capability walks out the door when a key developer leaves |
      | Requirements can change without renegotiating a contract | No external perspective challenging bad habits |

      ### External

      | Advantages | Disadvantages |
      | --- | --- |
      | Access to specialist expertise the organisation does not employ | **Personal information is disclosed to a third party** — a Privacy Act risk under APP 6 and APP 8 |
      | Often faster to deliver | The contractor may claim intellectual property rights unless the contract says otherwise |
      | No permanent headcount; predictable contracted cost | Less direct control; slower response to change |
      | Brings practices and standards from other clients | Ongoing dependence on the contractor's availability and pricing |
      | | **Supply-chain risk** — their code, their libraries, their security practices become yours |

      ### Writing it for a SAC

      Do not reproduce the table. Pick the three or four rows that **this organisation's case study actually
      demonstrates**, and quote the evidence:

      > *"Kestrel's in-house model has delivered the domain understanding the case study credits for FleetLink's
      > success, and keeps driver and payment data inside the organisation. But the disadvantage is equally
      > visible: with no specialist security capability, Kestrel never defined security requirements for the
      > platform and performs no threat modelling. Using external contractors to cover peak periods then
      > reintroduces exactly the third-party exposure the in-house model was meant to avoid — the March breach
      > entered through a shared contractor credential."*

      That single paragraph covers advantages, disadvantages and case-study evidence, and sets up the
      vulnerability analysis that follows.

      ## Custom versus off-the-shelf

      A related decision that sometimes appears. Custom software — in-house or contracted — is **tailored to the
      organisation's actual workflows** and gives control over features, integrations and the upgrade path.
      Off-the-shelf is cheaper and faster but forces the organisation to adapt its process to the software, and
      its security posture is the vendor's decision, not yours.
    `
  },

  {
    id: 'vulnerabilities',
    title: 'Vulnerabilities and risks in development environments',
    summary: 'The ten named weaknesses, how to recognise each in a case study, and how to turn one into a full answer.',
    kk: ['U4A2 KK3', 'U4A2 KS3'],
    body: `
      This is the single highest-value article in the area of study. KS2 is assessed on it directly, KS3
      evaluates against it, KS4's consequences flow from it and KS5's recommendations must close it.

      ## Vulnerability, threat, risk — three different words

      The descriptors use all three and markers notice when students treat them as synonyms.

      | Term | Definition | Example |
      | --- | --- | --- |
      | **Vulnerability** | A weakness in a system or practice | The repository is protected by a password only |
      | **Threat** | Something or someone that could exploit that weakness | An attacker running a phishing campaign |
      | **Risk** | A threat exploiting a vulnerability, with a **likelihood** and an **impact** | "An attacker phishes a developer credential and pushes malicious code — moderate likelihood, major impact" |

      A vulnerability on its own is a fact. A risk is a judgement, and judgements are what get marked at the
      higher bands.

      ## The ten named vulnerabilities

      ### 1. Use of application programming interfaces (APIs)

      **What it is.** The solution depends on an external service it does not control.

      **How it compromises development.** The API's own security, availability and pricing become yours. Data
      sent to it leaves the organisation — engaging **APP 8** if it is processed overseas. A change to the API
      can break your product without warning.

      **Case-study signals:** "integrates a third-party service", "sends requests to", "uses a cloud-based".

      ### 2. Malware

      **What it is.** Ransomware, spyware, viruses, trojans and keyloggers on development machines or servers.

      **How it compromises development.** Source code can be stolen or encrypted; credentials captured; a
      compromised build machine can inject malicious code into the product itself, which then ships to every
      customer.

      **Case-study signals:** "clicked a link", "downloaded an attachment", "a USB drive found in the car park",
      "systems were encrypted".

      ### 3. Unpatched software

      **What it is.** Known vulnerabilities left open because updates have not been applied.

      **How it compromises development.** When a vendor releases a patch, the vulnerability it fixes becomes
      **public knowledge** — attackers read patch notes. Unpatched systems are then exploitable using documented,
      often automated, techniques. Two of the Essential Eight address this specifically.

      **Case-study signals:** "two versions behind", "updates are applied when there is time", "the server has
      not been restarted in months".

      ### 4. Poor identity and access management practices

      **What it is.** Shared logins, no multi-factor authentication, excessive permissions, accounts left active
      after people leave.

      **How it compromises development.** A shared credential **destroys accountability** — you cannot tell who
      did what. Password-only authentication means one phished credential equals full access. Excessive
      permissions mean any single compromise reaches everything.

      **Case-study signals:** "the team shares a login", "no MFA", "still has access", "everyone has admin",
      "the password is written on a whiteboard".

      ### 5. Man-in-the-middle attacks

      **What it is.** Communication between two parties is intercepted by a third.

      **How it compromises development.** Credentials, source code and customer data can be read in transit, and
      the attacker can **alter** what is delivered — the altered-invoice scenario, or a modified package
      download.

      **Case-study signals:** "public Wi-Fi", "no VPN", "unencrypted connection", "the details on the invoice had
      changed".

      ### 6. Insider threats

      **What it is.** Harm originating from someone **inside** the organisation — an employee, contractor or
      anyone with legitimate access.

      **How it compromises development.** Insiders are already past the perimeter controls. They can exfiltrate
      code or data, weaken configuration, or introduce malicious changes.

      **The distinction that earns marks:** an insider threat need not be malicious. A developer who copies the
      live customer table into a test database to get realistic data is a careless insider threat, and in most
      SAC case studies that is exactly what has happened.

      **Case-study signals:** "a developer changed the configuration", "copied the data", "a disgruntled
      employee", "took files when they left".

      ### 7. Cyber security incidents

      **What it is.** An event that has actually compromised confidentiality, integrity or availability.

      **Why it matters for the SAC:** an incident in the stimulus is your **evidence of impact**, which is what
      the Very high band of KS2 asks for. Use it.

      ### 8. Risks present from software acquired by third parties

      **What it is.** Libraries, packages, frameworks and applications brought in from outside — a supply-chain
      risk.

      **How it compromises development.** Once integrated, third-party code runs with your product's privileges.
      Its vulnerabilities become your vulnerabilities, and its licence terms bind you under the **Copyright Act
      1968**. Open-source is not the same as safe or unencumbered.

      **Case-study signals:** "downloaded a free library", "open-source component", "nobody checked the licence",
      "a package from a public repository".

      ### 9. Ineffective code review practices

      **What it is.** Code reaching production without another person examining it — or reviews that happen but
      are not enforced or recorded.

      **How it compromises development.** Defects, insecure patterns and hard-coded credentials ship unexamined,
      and a malicious change through a compromised account passes unnoticed. If reviews are unrecorded, the
      organisation cannot **evidence** them to a client or auditor even when they did happen.

      **Case-study signals:** "merged as soon as it compiles", "reviews happen when there is time", "no record is
      kept".

      ### 10. Combined development, testing and production environments

      **What it is.** Development, testing and live systems sharing infrastructure and data.

      **How it compromises development.** This is usually the most serious finding in a case study, because it
      multiplies every other weakness:

      - Untested code can reach the live system with no gate in between.
      - **Real customer data ends up in development**, where protections are weaker and far more people have
        access than their role requires.
      - A compromise of any development machine reaches production directly.
      - Updates cannot be trialled safely before release.

      **Case-study signals:** "all systems run on the same server", "the test database contains live data", "the
      developers work directly on the live site".

      ## Turning a vulnerability into a full-band answer

      Three moves, three bands:

      | Move | Band it reaches | What it sounds like |
      | --- | --- | --- |
      | **Name** it in study-design language | Very low / Low | "Kestrel has poor identity and access management practices." |
      | **Explain the mechanism** — how it compromises the practice or the data | High | "A shared contractor login removes accountability, and password-only authentication means a single phished credential grants full repository access." |
      | **State the organisational impact** | Very high | "This is how the March breach began; it cost Kestrel the Northern Logistics renewal and triggered a notifiable data breach assessment." |

      ## Rating the risk

      A risk-assessment matrix combines **likelihood** and **impact**:

      | | Low probability | Medium probability | High probability |
      | --- | --- | --- | --- |
      | **Major impact** | Medium | High | Extreme |
      | **Moderate impact** | Low | Medium | High |
      | **Minor impact** | **Lowest** | Low | Medium |

      The lowest-rated risk needs **both** minor impact and low probability. A minor-impact risk that is almost
      certain still rates higher, because it will actually happen.

      Rating your vulnerabilities lets you **prioritise** them, and a prioritised list is what makes Section 3
      of a SAC read as analysis rather than a checklist.
    `
  },

  {
    id: 'security-controls',
    title: 'Security controls',
    summary: 'The six named controls, the vulnerability each one closes, and how to explain them.',
    kk: ['U4A2 KK4', 'U4A2 KK9'],
    body: `
      Six controls are named in the study design. For the SAC you need to do three things with each: say whether
      the organisation has it, explain **how it protects** the practice or the data, and later recommend it where
      it is missing.

      ## The control-to-vulnerability map

      This table is the one to memorise, because it lets you answer "what should they do about it?" instantly.

      | Control | Closes | Essential Eight / ISM link |
      | --- | --- | --- |
      | Version control and code repositories | Ineffective code review; insider threats; loss of code | Regular backups |
      | Robust identity and access management | Poor IAM; insider threats; malware spread; man-in-the-middle credential reuse | MFA; restrict administrative privileges |
      | Encryption | Man-in-the-middle; data exposure after a breach | — |
      | Code review | Ineffective code review; insider threats; third-party code risk | — |
      | Regular updates and patches | Unpatched software; malware | Patch applications; patch operating systems |
      | Separated development, testing and production environments | Combined environments; insider access to production data | ISM *Development, testing and production environments* |

      ## 1. Version control and code repositories

      **How it protects.** Every change is recorded with its author and timestamp, producing an **audit trail**.
      A faulty or malicious change can be identified and **rolled back** to a known-good version. Code lives
      centrally rather than on individual machines, so a lost laptop does not lose the work, and access to the
      repository can be restricted and logged in one place. Multiple developers' changes are **merged** rather
      than overwriting each other.

      **What it is not.** Version control is not a backup — its purpose is change management. Say this if a
      question compares them.

      ## 2. Robust identity and access management

      **How it protects.** Only authenticated, authorised people reach the development environment, the source
      code and the data. It is the control that limits both external attackers and insider threats.

      Four components, and a strong answer names them:

      - **Strong authentication**, ideally **multi-factor**.
      - **Role-based access** on the **principle of least privilege** — each person gets only what their role
        requires, and nothing more.
      - **Prompt deprovisioning** when someone leaves or a contract ends.
      - **Logging and review** of who accessed what.

      ### Multi-factor authentication

      Requires two or more **different kinds** of evidence:

      - Something you **know** — password, PIN
      - Something you **have** — phone, security token, SMS code
      - Something you **are** — fingerprint, facial recognition

      Because the factors are different in kind, an attacker who obtains the password — typically by phishing or
      from a breach of another site — still cannot log in. This is why MFA is the highest-value single
      recommendation in most case studies: it defeats the attack that actually happened.

      ## 3. Encryption

      **How it protects.** Converts data into a form that is unreadable without the key, so intercepted or
      stolen data is useless to the attacker.

      Two states, and the distinction matters:

      - **In transit** — data moving across a network, protected by TLS. Defeats man-in-the-middle interception.
      - **At rest** — data stored in a database, on disk or in backups. Defeats an attacker who has already got
        in, and is what limits the harm of a breach.

      Case studies very often have one and not the other. "TLS on the customer portal but an unencrypted
      production database" is a specific, markable finding.

      ## 4. Code review

      **How it protects.** Another developer examines the code before it is merged, catching defects, insecure
      patterns and hard-coded credentials. It deters malicious changes, because the author knows someone will
      look. It spreads knowledge across the team, reducing the risk concentrated in one person. And when the
      reviewer is **recorded**, it produces evidence for clients and auditors.

      To be a real control it must be **mandatory and enforced by the tooling**, not dependent on goodwill or
      spare time.

      ## 5. Regular updates and patches

      **How it protects.** Closes known vulnerabilities before they can be exploited. The urgency comes from the
      fact that a patch **announces** the vulnerability it fixes, so the window between release and deployment
      is a window of known, documented exposure.

      A real control has a **defined schedule and a maximum deployment window**, not "when there is time".

      ## 6. Separated development, testing and production environments

      **How it protects.**

      - Untested code cannot affect the live system — deployment becomes a deliberate promotion between
        environments rather than a save.
      - **Real customer data need never appear in development.** Use de-identified or synthetically generated
        test data instead.
      - A compromise in development does not reach production.
      - Changes can be validated in testing before release.

      This is the control that most often does the most work in a SAC, because combined environments is usually
      the most serious finding.

      ## Writing about controls for the SAC

      The Low descriptor asks you to outline controls protecting **both** the development practices **and the
      data stored within the applications**. Cover both halves explicitly.

      The Very high descriptor asks you to **analyse how the practices support goals and objectives**. So:

      > *"Role-based access control on the deployment pipeline protects the production environment by ensuring
      > only release engineers can push a build* **[how it protects the practice]** *and protects customer records
      > by preventing developers from reading production data their role does not require* **[how it protects the
      > data]**. *This supports the 99.9% availability objective, because an unreviewed build reaching production
      > is the most likely cause of an unplanned outage."* **[link to objective]**

      > [tip] A control the organisation **has but does not enforce** is worth more marks than one it simply
      lacks — it lets you write about the gap between policy and practice, which is exactly the kind of nuance
      the top bands reward.
    `
  },

  {
    id: 'threat-modelling',
    title: 'Threat modelling',
    summary: 'The three principles — named explicitly in the rubric from Medium upwards.',
    kk: ['U4A2 KK5'],
    body: `
      **Threat modelling** is a structured process for finding security weaknesses in a design *before* they are
      built, and confirming they have been dealt with.

      > [exam] Threat modelling appears by name in the **Medium, High and Very high** descriptors of KS1, and
      again in every band of KS5 from Medium up. It is the single most commonly forgotten requirement in this
      outcome. If your SAC response never uses the phrase "threat modelling", you have capped yourself.

      ## The three principles

      They run in order, and each depends on the one before.

      ### 1. Defining security requirements

      Decide **what must be protected, and to what standard**, before design begins.

      - What data will the solution hold, and how sensitive is it?
      - Who should be able to reach it, and who should not?
      - What laws and frameworks apply — Privacy Act, PDP Act, Essential Eight, ISM?
      - What would a breach cost, in money, reputation and contracts?

      These requirements go into the software requirements specification **alongside** the functional and
      non-functional requirements. If security is only considered after the product works, it is retrofitted,
      and retrofitted security is both weaker and more expensive.

      ### 2. Identifying and mitigating threats

      Systematically work out what could go wrong, and design controls to prevent it.

      - **Identify** — who might attack, what they would want, and where the design is weak. Walk the KK3
        vulnerability list against your own system.
      - **Assess** — rate each threat by **likelihood** and **impact** using a risk matrix, so effort goes where
        the risk actually is. Rate before you spend.
      - **Mitigate** — apply controls that reduce or eliminate the threat.

      ### 3. Confirming threats have been mitigated

      **Verify that the controls actually work** — through testing, code review, application security testing,
      penetration testing, and reviewing audit logs and configuration settings.

      A control that was designed but never verified is not a mitigation; it is an assumption. This third
      principle is the one almost every case-study organisation skips, and saying so explicitly is free marks.

      ## Diagnosing an organisation's threat modelling

      For a SAC, work through the three principles and give a verdict on each:

      | Principle | Question to ask the case study | Typical finding |
      | --- | --- | --- |
      | Defining security requirements | Were security requirements written down before building? | Absent — "security issues are fixed as customers report them" |
      | Identifying and mitigating threats | Is there a systematic process, or is it reactive? | Reactive — no risk register, no threat assessment |
      | Confirming mitigation | Is anything audited, tested or reviewed after the fact? | Absent entirely |

      Then state the consequence: *"Because Kestrel performs none of the three principles, its controls were not
      chosen against identified threats — they accumulated by habit. That is why the controls it does have
      (a repository, TLS) protect against risks it never faced, while the risks that materialised in March
      (credential compromise reaching production data) had no control at all."*

      That sentence is analysis, and it is the difference between the Medium and Very high descriptors.

      ## Where it belongs in each SAC section

      | Section | How threat modelling appears |
      | --- | --- |
      | **KS1 — analysis** | Describe which principles the organisation performs, and how they protect practices and data |
      | **KS2 — vulnerabilities** | Absent threat modelling is itself a root-cause weakness: it explains *why* the other vulnerabilities exist |
      | **KS3 — evaluation** | "Are security requirements defined and verified?" is a legitimate evaluation criterion |
      | **KS5 — recommendations** | Named as a required ingredient: recommend all three principles, not just controls |
    `
  },

  {
    id: 'evaluating-practices',
    title: 'Evaluating security practices with criteria',
    summary: 'KS3 in full — writing criteria that can be measured, then actually applying them.',
    kk: ['U4A2 KK6', 'U4A2 KS2'],
    body: `
      A whole section of the SAC is marked on this, and it is the one students most often half-do. The key
      knowledge is short — *criteria for evaluating the security of software development practices within an
      organisation* — but the skill behind it carries 20 marks.

      ## Why criteria, and not just an opinion

      "Their security is bad" is a judgement with nothing behind it. A criterion turns a judgement into a
      **test**: something you can point at evidence for, and that someone else applying the same criterion would
      reach the same answer on.

      ## The anatomy of a usable criterion

      Three parts. Missing any one of them costs a band.

      1. **The question** — phrased so it can be answered, ideally yes / no / partially.
      2. **The measure** — what you would actually count, compare or inspect.
      3. **The data source** — where that measurement comes from.

      | | Weak | Strong |
      | --- | --- | --- |
      | Question | "Is the code secure?" | "Is all code reviewed by a second developer before release?" |
      | Measure | — | Proportion of merges with a recorded second reviewer |
      | Source | — | Repository merge history for the last six months |

      The weak version cannot be answered, so it cannot be applied — which caps you at the Low band no matter
      how many you write.

      ## A criteria set that covers the outcome

      Choose five or six that match the practices the case study actually describes. Each one below maps to a
      named security control or vulnerability, which is what makes it *relevant* rather than generic.

      | Criterion | Measure | Data source |
      | --- | --- | --- |
      | Are development, testing and production environments separated? | Whether they share hardware; whether production data appears in non-production databases | Architecture documentation; database inspection |
      | Is repository access restricted to current, authorised personnel? | Accounts with write access vs current staff register; MFA enrolment rate | Repository audit logs; access configuration |
      | Is all code reviewed before release, and recorded? | Proportion of merges with a named reviewer | Repository merge history |
      | Are operating systems and applications patched promptly? | Mean days between patch release and deployment | Patch-management records |
      | Is personal information encrypted in transit and at rest? | TLS enforcement on all endpoints; database encryption setting | Configuration settings; network logs |
      | Do developers complete secure-development training? | Completion rate; phishing-simulation click rate | Training records; simulation results |
      | Are security requirements defined and verified? | Whether an SRS records security requirements; whether any audit confirms them | SRS; audit and test reports |
      | Is data disposed of when no longer needed? | Existence of a retention schedule; age of oldest records held | Retention policy; database query |

      > [tip] Criteria are conventionally phrased as **questions**. It makes the "apply" step obvious, because
      applying a question means answering it.

      ## Applying them — where High and Very high live

      The Medium descriptor stops at *proposing* criteria and *describing how they could be measured*. **High
      requires you to apply them.** Very high requires the application to be accurate, measured and **documented
      clearly**.

      "Documented clearly" has a concrete meaning: a table, one row per criterion, with a verdict in every row.

      | Criterion | Evidence from the case study | Finding |
      | --- | --- | --- |
      | Environments separated? | All three on one server cluster; live driver table copied into test | **Not met** |
      | Repository access controlled? | Shared contractor login; password only; two departed accounts active | **Not met** |
      | Code reviewed and recorded? | Reviews happen "when there is time"; no records kept | **Partially met** |
      | Patching prompt? | OS two major versions behind; patched once or twice yearly | **Not met** |
      | Data encrypted? | TLS on the portal; production database unencrypted at rest | **Partially met** |
      | Training ongoing? | One induction session at hire; no refresher | **Partially met** |

      ### Use three verdicts, not two

      **Met / partially met / not met** is more sophisticated than pass/fail, and it is usually more accurate.
      "Partially met" is the right answer whenever a practice exists but is not enforced, not recorded, or covers
      only part of what it should — which describes most real organisations.

      ## The overall judgement

      Finish with two or three sentences that synthesise the table. This is what "accurately evaluate and
      measure" means at the top band — a marker should not have to add up your rows themselves.

      > *"Six criteria were applied and none was fully met: three failed outright and three were met only
      > partially. The failures cluster into two groups — environment separation and access management — and
      > those two groups together account for the entire March incident chain, from the phished shared credential
      > to the exfiltration of production data. Kestrel's current practices are therefore not effective at
      > protecting either the development process or the data held in FleetLink."*

      Notice what that does: counts the findings, groups them, connects them to the evidence, and answers the
      actual question.

      ## Efficiency and effectiveness

      If a question asks you to classify criteria rather than security-specific ones, the general distinction
      still applies:

      - **Efficiency** — resources consumed: time, cost, effort. *"How long does it take to deploy a patch?"*
      - **Effectiveness** — how well it does its job: completeness, accuracy, usability, maintainability.
        *"Does the control actually prevent the threat it was chosen for?"*

      Most security criteria are effectiveness measures, but patching speed and time-to-detect are efficiency
      measures, and saying which is which shows you understand the distinction.
    `
  },

  {
    id: 'legislation-frameworks',
    title: 'Legislation and industry frameworks',
    summary: 'The Acts, the APPs, the Essential Eight and the ISM — and how to argue their relevance.',
    kk: ['U4A2 KK7'],
    body: `
      Five instruments are named in the study design. Naming them is the Low band; **discussing their relevance
      to this organisation** is Medium; using them to justify resolutions and recommendations is Very high.

      ## Privacy Act 1988 (Cwlth)

      Governs how organisations handle **personal information** — information about an identified or reasonably
      identifiable individual. It applies to most organisations with turnover above $3 million, and to all
      health service providers.

      The study design names **APP 1, 3, 6, 8, 9 and 11** for this area of study:

      | APP | Requirement | When it appears in a case study |
      | --- | --- | --- |
      | **APP 1** | Open and transparent management — have a clear, current privacy policy | The organisation has no privacy policy, or does not follow the one it has |
      | **APP 3** | Collect only personal information reasonably necessary for your functions | Collecting licence numbers or dates of birth with no stated need |
      | **APP 6** | Use or disclose only for the purpose it was collected | Customer data pasted into an AI tool; production data used for testing |
      | **APP 8** | Take reasonable steps before disclosing overseas | A third-party API or cloud service processing data offshore |
      | **APP 9** | Do not adopt or use government-related identifiers as your own | Using driver licence numbers as account identifiers |
      | **APP 11** | **Take reasonable steps to secure** personal information, and destroy or de-identify it when no longer needed | Almost every case study — this is the workhorse |

      ### APP 11 is the one to master

      Two obligations in one principle:

      1. **Protect** the information from misuse, interference, loss and unauthorised access, modification or
         disclosure.
      2. **Destroy or de-identify** it once it is no longer needed for the purpose it was collected.

      "Reasonable steps" is deliberately relative — it scales with the **sensitivity of the data, the harm a
      breach would cause, and the organisation's size and resources**. That is what makes it arguable, and
      arguable is what the discussion bands want:

      > *"For a 180-staff company holding driver licence numbers, reasonable steps under APP 11 would clearly
      > include encryption at rest and multi-factor authentication — both are inexpensive and standard practice.
      > Kestrel had neither, so its failure is not a marginal judgement call."*

      ### The Notifiable Data Breaches scheme

      Part of the Privacy Act. Where a data breach is likely to result in **serious harm** and cannot be
      remediated, the organisation must notify **affected individuals and the OAIC as soon as practicable**.

      Two things make this a rich source of marks: delay is a **separate breach** from the original failure, and
      it is simultaneously a **legal and an ethical** issue — which lets you cover both halves of KS4 with one
      example.

      ## Privacy and Data Protection Act 2014 (Vic)

      Applies to **Victorian public sector** organisations — and, importantly for case studies, to **contracted
      service providers handling their data**. If the organisation has a state government client, this Act is
      relevant and most students miss it.

      Named Information Privacy Principles for this area of study: **IPP 1, 2, 4, 5, 9** — collection, use and
      disclosure, **data security**, openness, and transborder data flows. **IPP 4 (data security)** is the
      counterpart of APP 11.

      ## Copyright Act 1968 (Cwlth)

      Protects the **expression of ideas**, including source code, text, images and designs. Copyright exists
      automatically; no registration is needed.

      Breaches that appear in case studies:

      - Using a third-party library without complying with its licence terms — **open source is licensed, not
        free of obligations**.
      - Copying code from another employer, a previous project or a colleague at a different company.
      - Modifying a vendor's code without permission.
      - Shipping AI-generated code that reproduces copyrighted training material.

      ## The Essential Eight

      Eight mitigation strategies published by the **Australian Cyber Security Centre**:

      1. **Application control** — only approved applications may execute
      2. **Patch applications**
      3. **Configure Microsoft Office macro settings**
      4. **User application hardening**
      5. **Restrict administrative privileges**
      6. **Patch operating systems**
      7. **Multi-factor authentication**
      8. **Regular backups**

      There are also **maturity levels** (0 to 3) describing how completely each strategy is implemented, which
      is why contracts often specify "Essential Eight Maturity Level 2" rather than just "the Essential Eight".

      > [exam] Multiple choice loves offering a plausible non-member — "secure personal information", "prevent
      scope creep", "develop evaluation criteria", "include internal documentation". None are in the Essential
      Eight.

      ## Information Security Manual (ISM)

      Also from the ACSC. A comprehensive cyber security framework organisations apply to protect systems and
      data — principles for governing, protecting, detecting and responding.

      The study design names three guidelines from its **Guidelines for Software Development**:

      - **Development, testing and production environments** — keep them separated, and do not use production
        data in development or testing.
      - **Secure software design and development** — build security in from design: threat modelling, secure
        coding, code review.
      - **Application security testing** — test the application specifically for security weaknesses, not only
        for functionality.

      Those three map almost exactly onto the most common SAC findings, which is why the ISM is usually the
      strongest framework to cite.

      ## Legislation versus framework

      A distinction worth making explicitly in a SAC:

      | | Legislation | Framework |
      | --- | --- | --- |
      | Examples | Privacy Act 1988, PDP Act 2014, Copyright Act 1968 | Essential Eight, ISM |
      | Binding? | Yes — by law, with penalties | Not by law — but often **contractually** binding |
      | Consequence of failure | Investigation, enforceable undertakings, civil penalties | Lost contracts, failed audits, lost certification |

      Frameworks become effectively mandatory the moment a client writes them into a contract — which is exactly
      what case studies set up when they mention a government client asking for evidence of compliance.

      ## Choosing the right instrument under pressure

      | The case study describes… | Cite |
      | --- | --- |
      | Personal information leaked, or poorly secured | **Privacy Act 1988**, APP 11 |
      | A breach not reported, or reported late | **Privacy Act 1988**, Notifiable Data Breaches scheme |
      | Data kept long after it was needed | **Privacy Act 1988**, APP 11.2 |
      | Data sent to an overseas service or API | **Privacy Act 1988**, APP 8 |
      | Data used for something other than why it was collected | **Privacy Act 1988**, APP 6 |
      | A Victorian government client or agency | **PDP Act 2014**, IPP 4 |
      | Someone else's code, library or content reused | **Copyright Act 1968** |
      | A baseline set of technical controls is wanted | **Essential Eight** |
      | Secure development practice specifically | **ISM**, Guidelines for Software Development |
    `
  },

  {
    id: 'ethics',
    title: 'Ethical issues in software development',
    summary: 'The four named issues, how ethics differs from law, and how to write about both.',
    kk: ['U4A2 KK8', 'U4A2 KS4'],
    body: `
      KS4 asks for legal **and** ethical consequences. Most students write only the legal half, so the ethical
      half is where marks are most easily gained.

      ## The distinction

      | | Legal | Ethical |
      | --- | --- | --- |
      | Source | An Act of Parliament | Professional and community expectations of right conduct |
      | Test | Did they break the law? | Was it the right thing to do? |
      | Consequence | Investigation, penalty, enforceable undertaking | Reputational damage, loss of trust, professional censure |

      They overlap but neither contains the other. Some things are legal and unethical — shipping code you know
      is insecure because the contract does not require otherwise. Some things are illegal but widely
      considered harmless. **The most powerful examples for a SAC are the ones that are both**, because you can
      analyse them twice.

      ## The four named ethical issues

      ### 1. Ineffective security practices

      Beyond any legal breach, an organisation that fails to protect data it was trusted with has acted
      unethically. The argument that earns marks:

      > *The people whose data was exposed generally had no way to assess the risk and no realistic alternative.
      > Drivers did not choose Kestrel — their employers did. That asymmetry places a heightened obligation on
      > the organisation holding the data, independent of what the law requires.*

      Consequences to name: financial loss, reputational damage, legal penalties, and loss of trust from
      customers, staff and partners.

      ### 2. Use of artificial intelligence during development

      Four distinct problems, and naming several shows range:

      - **Over-reliance.** A team that generates most of its code with AI may lose the understanding needed to
        review, debug and maintain it. The organisation still bears responsibility for what it ships, but becomes
        less able to explain or fix it. *This is the ethical issue* — not that AI is used at all.
      - **Data disclosure.** Pasting customer data or proprietary source into an external assistant discloses it
        to a third party, usually without consent and often offshore.
      - **Provenance.** Generated code may reproduce copyrighted training material, and nobody can tell.
      - **Accountability.** Someone must remain answerable for what the software does. "The AI wrote it" is not
        an answer to a regulator or a customer.

      > [exam] For "why is using AI to write all initial code an ethical issue?", the answer is **over-reliance**.
      Options saying "any use of AI is unethical" or "the code might not be efficient" describe absolutism and
      quality respectively, not ethics.

      ### 3. Intellectual property

      Who owns the code, the designs and the data? Ethically, contributors' work should be acknowledged and
      their rights respected — including **open-source licence terms**, which are legally binding *and* carry a
      community expectation of attribution and reciprocity. When development is outsourced, IP ownership must be
      settled in the contract, or the external developer may have a legitimate claim.

      ### 4. Copyright issues

      Using images, code, libraries, fonts or content without a licence. Ethically this deprives creators of
      recognition and income even where enforcement is unlikely — "nobody would ever find out" is not a defence.

      ## Two more that case studies plant

      Not named in the study design as separate dot points, but they arise directly from the named issues and
      markers reward them:

      **Disclosure and transparency.** Delaying or downplaying a breach to protect reputation. This is the
      strongest ethical example available in most case studies, because the harm is concrete: for every week of
      delay, affected people cannot freeze credit, change passwords or watch for fraud. And it is
      *simultaneously* a legal breach of the Notifiable Data Breaches scheme.

      **Use of real customer data in development.** Legally an APP 6 and APP 11 problem. Ethically, the customer
      consented to their data being used to deliver a service, not to sit in a test database so a developer
      could see realistic values.

      ## Structuring an ethical-issues answer

      Four moves:

      1. **Name** the issue precisely.
      2. **Explain** why it is ethically problematic — *who is harmed, and how*.
      3. **Apply** it to the specific actions in the case study.
      4. **Give the consequence**, covering both **legal** (which Act, what penalty) and **non-legal**
         (reputation, trust, lost customers).

      Worked:

      > *"Kestrel's six-week delay in notifying affected drivers is its clearest ethical failure. For six weeks,
      > 4,000 people whose licence numbers were in criminal hands could not freeze credit, watch for identity
      > fraud or replace their licences — because Kestrel prioritised assessing its own reputational exposure
      > over their ability to protect themselves. The people harmed had no say in the decision and no knowledge
      > it was being made on their behalf. This is also unlawful: the Notifiable Data Breaches scheme requires
      > notification as soon as practicable, and reputational management is not a permitted ground for delay. The
      > non-legal consequence has already materialised in the loss of the Northern Logistics contract."*

      That single paragraph covers the ethical issue, the harm, the case-study application, the legal breach and
      the commercial consequence — all four moves, both halves of KS4.

      ## Resolutions must be viable

      The Very high descriptor asks for **viable** resolutions. Viable means this organisation, with its stated
      resources, could actually do it — and it names **what** changes, **who** does it, and **which obligation
      it satisfies**.

      "Be more ethical" is not a resolution. "Adopt a documented incident-response plan that names a breach
      assessor and sets a 72-hour internal escalation deadline, with the notification decision removed from the
      team responsible for reputation" is.
    `
  },

  {
    id: 'improving-security',
    title: 'Improving secure development practices',
    summary: 'KS5 content — mitigation measures, training, risk management plans, and justification.',
    kk: ['U4A2 KK6', 'U4A2 KK9', 'U4A2 KK10', 'U4A2 KS5'],
    body: `
      The final key skill asks you to **recommend and justify** improvements. This article covers what to
      recommend; the SAC section article covers how to structure and justify it.

      ## The two named strategies

      The study design names exactly two strategies for improving the security of software development
      practices. Both must appear in a full-mark answer.

      ### 1. Onboarding / induction practices and developer training

      New developers — especially novices and contractors — do not automatically know an organisation's security
      expectations. A structured induction covers:

      - Security policies, protocols and procedures, and **why** they exist.
      - Practical rules: **what data may be used in development**, how credentials are handled, what may be given
        to AI assistants.
      - Secure coding practices and the code review process.
      - How to recognise and report phishing, social engineering and suspicious requests.
      - **Ongoing refreshers**, not a single session on day one, plus phishing simulation to measure whether it
        worked.

      **Why it works — the argument that earns marks:** most incidents involve human behaviour, not a technical
      control failing. A clicked phishing link, production data copied into a test database, credentials
      committed to a repository. Training addresses the **cause**; controls only contain the symptom. If a case
      study's incidents were caused by people doing the wrong thing while trying to do their jobs, say so and
      make training a priority recommendation.

      ### 2. Development of risk management plans

      A documented plan that:

      - **Identifies** each risk to the organisation and its development environment.
      - **Rates** each by likelihood and impact.
      - **Assigns** a mitigation measure to each.
      - **Names an owner** responsible for it.
      - **Sets a review cycle**, so the plan stays current.

      **Why it works:** it turns ad-hoc security into a repeatable process that survives staff turnover — which
      matters especially for organisations relying on rotating contractors. It also creates the documentation a
      client or auditor asks for.

      ## Mitigation measures — the full menu

      Pick the ones that match the vulnerabilities the case study actually has. Recommending a control for a
      problem the organisation does not have reads as a memorised list.

      | Vulnerability | Mitigation |
      | --- | --- |
      | Combined environments | Separate development, testing and production onto distinct infrastructure; use de-identified or synthetic test data |
      | Poor identity and access management | Individual accounts; **MFA**; role-based access on least privilege; immediate deprovisioning; access logging and periodic review |
      | Unpatched software | Defined patching schedule with a maximum deployment window; automated patch management |
      | Ineffective code review | Mandatory second reviewer enforced by the repository, with the reviewer recorded |
      | Third-party software risk | Vet dependencies before integration; maintain a licence register; monitor for vulnerability advisories |
      | Malware | Application control; anti-malware; user application hardening; restrict administrative privileges |
      | Man-in-the-middle | Enforce TLS everywhere; require a VPN for remote access; certificate pinning |
      | Insider threats | Least privilege; logging and monitoring; separation of duties; training; offboarding process |
      | Unmanaged AI assistants | Written AI-use policy: what data may be shared, mandatory human review, provenance recorded |
      | Data retained too long | Retention schedule with secure disposal |
      | No verification | Scheduled access reviews, application security testing, penetration testing, audit-log review |

      ## Criteria for evaluating the improvements

      KK6 asks for criteria to evaluate the security of development practices — and the same criteria that
      measured the *current* state measure whether your recommendations worked. Say this explicitly: re-running
      the Section 2 criteria after six months is how the organisation confirms the threats have actually been
      mitigated, which is the **third threat modelling principle**.

      | Criterion | How it is measured | Data to collect |
      | --- | --- | --- |
      | Is the repository accessed only by authorised personnel? | Compare access list against staff register; check MFA enrolment | Audit logs; access configuration |
      | Are environments separated? | Check whether production data appears in dev/test | Architecture docs; database inspection |
      | Is all code reviewed? | Proportion of merges with a recorded reviewer | Repository history |
      | Are systems patched promptly? | Mean days from patch release to deployment | Patch-management records |
      | Has training been effective? | Completion rates; phishing-simulation click rate over time | Training records; simulation results |
      | Are threats verified as mitigated? | Number and severity of findings per audit, tracked over successive audits | Audit and penetration-test reports |

      ## Sequencing recommendations

      A strong set of recommendations is **ordered**, and says why. Lead with what closes the most serious
      finding.

      1. **Contain the biggest exposure first** — usually environment separation and removing production data
         from development.
      2. **Close the entry point** — identity and access management, because most incidents begin with a
         credential.
      3. **Stop the recurrence** — code review, patching schedule.
      4. **Make it durable** — threat modelling built into the lifecycle, training, risk management plan.
      5. **Verify** — audits, access reviews, re-running the evaluation criteria.

      > [tip] Step 5 is the one almost nobody writes, and it is explicitly the third threat modelling principle.
      Ending your recommendations with *how the organisation will confirm the mitigations worked* closes the loop
      on your own evaluation and signals that you understand security as a process rather than a shopping list.
    `
  }
  ]
},

/* ============================================================
   EXAM SKILLS
   ============================================================ */
{
  id: 'exam',
  code: 'Exam skills',
  title: 'How the exam works',
  blurb: 'Structure, marks, timing, command terms and the mistakes that cost the most marks.',
  color: 'var(--exam)',
  lessons: [

  {
    id: 'structure',
    title: 'Exam structure and timing',
    summary: 'Three sections, 100 marks, two hours.',
    kk: ['VCAA examination specifications'],
    body: `
      ## The format

      - **Reading time:** 15 minutes. **Writing time:** 2 hours.
      - The examination contributes **50%** of the study score.
      - Total: **100 marks**.

      | Section | Content | Marks |
      | --- | --- | --- |
      | **A** | 20 multiple-choice questions, 1 mark each | 20 |
      | **B** | Short-answer questions | 20 |
      | **C** | Short-answer and extended-answer questions, based on a **case study** supplied in a detachable insert in the centrefold | 60 |

      All questions are compulsory. Section A answers go on the Multiple-Choice Answer Sheet; Sections B and C are
      answered in the spaces provided.

      **Approved materials:** pens, pencils, highlighters, erasers, sharpeners, rulers, and one scientific
      calculator.

      ## What is examinable

      All outcomes and all key knowledge and key skills from Units 3 and 4, plus three specific parts of the study
      design: **"Terms used in this study"** (pp. 12–16), **"Units 1 to 4: Problem-solving methodology"** (p. 17)
      and **"Problem-solving methodology specifications"** (pp. 18–23).

      That last point matters: the exam uses study-design terminology **exactly**, and questions can span more than
      one area of study.

      ## A workable time plan

      | Phase | Time | What to do |
      | --- | --- | --- |
      | Reading time (15 min) | — | Read the **Section C insert case study first**. Note the user groups, the data described, and any diagram with a gap or an error. Then skim Section C's questions so your reading has a purpose. |
      | Section A | ~20 min | 1 minute per question. Flag anything that takes longer and move on. |
      | Section B | ~22 min | Roughly 1 minute per mark. |
      | Section C | ~65 min | Roughly 1 minute per mark. |
      | Review | ~10 min | Return to flagged questions; check every part-question has been attempted. |

      > [tip] **One mark ≈ one minute ≈ one distinct point.** A 4-mark question needs four separate, developed
      points — not one point written four ways.

      ## The insert

      Section C's case study is detachable. Remove it during reading time and keep it beside you. Almost every
      Section C answer must **refer to the case study specifically** — generic answers are explicitly marked down.
    `
  },

  {
    id: 'command-terms',
    title: 'Command terms',
    summary: 'What each instruction word actually requires.',
    kk: ['VCAA Glossary of Command Terms'],
    body: `
      The command term tells you how much to write and what kind of thinking is required. Mark allocation confirms
      it. Getting this wrong is the single most common way to lose marks on content you actually know.

      | Term | What is required |
      | --- | --- |
      | **State / Name** | Give a short answer with no elaboration. Usually 1 mark. |
      | **Identify** | Recognise and name the thing being asked for. No explanation unless the question also asks. |
      | **List** | Give the required number of items, one after another. |
      | **Define** | Give the precise meaning of a term. |
      | **Outline** | Give the main features in brief — more than "state", less than "describe". |
      | **Describe** | Give a detailed account of the characteristics or the process. Usually 2+ marks. |
      | **Explain** | Say **how** or **why**. Show cause and effect, or the reasoning behind something. |
      | **Discuss** | Present the relevant points, usually including more than one side or perspective. |
      | **Compare** | Identify similarities **and** differences between two things. |
      | **Justify** | Give reasons or evidence supporting a decision or claim. Take a position and defend it. |
      | **Evaluate** | Judge the value or quality against criteria, and reach a conclusion. |
      | **Analyse** | Break something into its parts and examine how they relate. |
      | **Propose / Recommend / Suggest** | Put forward a course of action — and, unless told otherwise, say why. |
      | **Complete** | Fill in the missing parts of a table, diagram or code. |

      ## The traps

      - **"Identify and explain two risks"** — four marks, and the structure is two identifications plus two
        explanations. Identifying both risks without explaining either caps you at half.
      - **"Justify"** never means "describe". It means choose a side and support it. In 2025 VCAA, *"justify why it
        would be better to develop in-house"* required arguments **for in-house**, grounded in the case study.
      - **"Describe a strategy"** requires the strategy plus how it works — not just its name.
      - **"With reference to the case study"** is not decoration. Answers that could apply to any organisation lose
        marks even when the content is correct.

      ## Matching structure to marks

      - **1 mark** → one precise term or statement.
      - **2 marks** → a point plus its development, *or* two distinct points. Look at the wording.
      - **3 marks** → often definition + application + consequence; or three separate points.
      - **4+ marks** → usually a stated number of items, each needing development. Count the items the question
        asks for and give exactly that many, each fully developed.

      > [exam] If the question numbers its parts ("Risk 1 ___ Risk 2 ___"), the answer boxes are telling you the
      structure. Use every box, and keep each answer inside its own box.
    `
  },

  {
    id: 'answering-technique',
    title: 'Answering technique and common mistakes',
    summary: 'Where marks are actually lost.',
    kk: [],
    body: `
      ## Section A

      - Answer **every** question — there is no penalty for a wrong answer, so never leave a blank.
      - Eliminate first. Two of the four options are usually clearly wrong; the decision is between the remaining
        two.
      - Watch for **"incorrect"**, **"not"**, **"least"** and **"best"** in the stem. Underline them.
      - Options containing absolutes — *always*, *never*, *guarantees*, *all errors*, *removes the need entirely* —
        are usually wrong, especially in AI questions.
      - When a stem gives a scenario, decide what **concept** is being tested before you look at the options.

      ## Section B

      - Use the terminology of the study design. Write "existence checking", not "checks if it's empty".
      - When asked to explain an error in given code, do two things: state what that error type means, and point to
        the specific line or value that causes it.
      - Trace pseudocode with a written variable table. Do not do it in your head.

      ## Section C

      - **Read the insert first**, during reading time.
      - Every answer must be anchored in the case study. Name the actual people, roles, data and systems from the
        stimulus.
      - When the question supplies a diagram with labels A, B, C, D, cross-check against the context diagram or the
        stimulus text — the answers are always derivable from what you were given.
      - For "identify the error" questions in diagrams, the error is usually one of: a data flow between two stores,
        an actor inside the system boundary, an actor named as a person instead of a role, «includes» where
        «extends» belongs, or an arrow reversed.

      ## The mistakes that cost the most

      1. **Answering a different command term than the one asked.** Describing when asked to justify; listing when
         asked to explain.
      2. **Generic answers in Section C.** "Version control lets you track changes" earns less than "version control
         lets Maree and Yu Xiang work on the classification and subscription modules simultaneously and merge their
         changes, instead of overwriting each other's files."
      3. **Not giving the required number of points.** "State three reasons" with two reasons caps you at 2/3.
      4. **Confusing paired concepts.** Alpha vs beta testing. Validation vs testing. Goals vs objectives.
         Functional vs non-functional. Includes vs extends. Efficiency vs effectiveness. Generalisation vs
         inheritance. Version control vs backups.
      5. **Correcting the code instead of tracing it.** In test tables, the "actual" column records what the code as
         written really produces.
      6. **Running out of time in Section C.** It is worth 60 of 100 marks. Do not spend 40 minutes on Section A.

      ## A reusable answer skeleton

      For most 2–3 mark conceptual questions:

      1. **Define** the term in study-design language.
      2. **Apply** it to the specific case study detail.
      3. **State the consequence** — the benefit, the risk, or the impact on the organisation.

      That structure reliably hits the marking points, and it stops you from writing a definition and nothing else.
    `
  }
  ]
}

];

/* ---------- Derived indexes ---------- */

const LESSON_INDEX = (function () {
  const flat = [];
  CURRICULUM.forEach(function (unit) {
    unit.lessons.forEach(function (lesson, i) {
      flat.push({
        key: unit.id + '/' + lesson.id,
        unitId: unit.id,
        unitCode: unit.code,
        unitTitle: unit.title,
        color: unit.color,
        index: i,
        lesson: lesson
      });
    });
  });
  return flat;
})();

function getUnit(id) {
  return CURRICULUM.find(function (u) { return u.id === id; }) || null;
}

function getLesson(unitId, lessonId) {
  const unit = getUnit(unitId);
  if (!unit) return null;
  const i = unit.lessons.findIndex(function (l) { return l.id === lessonId; });
  if (i < 0) return null;
  return {
    unit: unit,
    lesson: unit.lessons[i],
    prev: i > 0 ? unit.lessons[i - 1] : null,
    next: i < unit.lessons.length - 1 ? unit.lessons[i + 1] : null,
    index: i
  };
}
