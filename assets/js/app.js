/* ============================================================
   SoftDev Revision — application shell
   Hash router, sidebar, article renderer, quiz engine, progress.
   No dependencies; state persists in localStorage.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Storage ---------------- */

  const STORE_KEY = 'softdev-revision-v1';

  const store = {
    data: { read: {}, quiz: {}, theme: null, navOpen: {} },
    load: function () {
      try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) Object.assign(this.data, JSON.parse(raw));
      } catch (e) { /* storage unavailable — run in-memory */ }
      return this.data;
    },
    save: function () {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(this.data)); } catch (e) {}
    },
    isRead: function (key) { return !!this.data.read[key]; },
    setRead: function (key, v) {
      if (v) this.data.read[key] = Date.now(); else delete this.data.read[key];
      this.save();
    },
    recordQuiz: function (id, result) {
      const list = this.data.quiz[id] || (this.data.quiz[id] = []);
      list.push(result);
      if (list.length > 20) list.shift();
      this.save();
    },
    bestQuiz: function (id) {
      const list = this.data.quiz[id];
      if (!list || !list.length) return null;
      return list.reduce(function (a, b) { return (b.pct > a.pct) ? b : a; });
    },
    lastQuiz: function (id) {
      const list = this.data.quiz[id];
      return list && list.length ? list[list.length - 1] : null;
    }
  };
  store.load();

  /* ---------------- Utilities ---------------- */

  const $ = function (sel, root) { return (root || document).querySelector(sel); };
  const $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(s) { return window.md.escape(String(s == null ? '' : s)); }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function letter(i) { return 'ABCDEFGH'[i]; }

  function pctBand(p) {
    if (p >= 90) return { label: 'Outstanding — exam ready on this material.', color: 'var(--ok)' };
    if (p >= 75) return { label: 'Strong. Tidy up the misses and move on.', color: 'var(--ok)' };
    if (p >= 60) return { label: 'Solid base, but the gaps below will cost marks.', color: 'var(--warn)' };
    if (p >= 40) return { label: 'Shaky. Re-read the linked articles before retrying.', color: 'var(--warn)' };
    return { label: 'Start with the articles — this material needs a first pass.', color: 'var(--bad)' };
  }

  /* Data files append to QUESTIONS after questions.js builds its index,
     so rebuild it here — once every script has run. */
  Object.keys(QUESTION_INDEX).forEach(function (k) { delete QUESTION_INDEX[k]; });
  QUESTIONS.forEach(function (q) { QUESTION_INDEX[q.id] = q; });

  /* Total lesson count for progress */
  const TOTAL_LESSONS = LESSON_INDEX.length;

  function readCount() {
    return Object.keys(store.data.read).filter(function (k) {
      return LESSON_INDEX.some(function (l) { return l.key === k; });
    }).length;
  }

  /* ---------------- Theme ---------------- */

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    store.data.theme = t;
    store.save();
  }

  (function initTheme() {
    const saved = store.data.theme;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));
  })();

  $('#themeToggle').addEventListener('click', function () {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ---------------- Sidebar ---------------- */

  const sidebar = $('#sidebar');
  const scrim = $('#scrim');
  const navToggle = $('#navToggle');

  function closeNav() {
    sidebar.classList.remove('open');
    scrim.hidden = true;
    navToggle.setAttribute('aria-expanded', 'false');
  }
  function toggleNav() {
    const open = sidebar.classList.toggle('open');
    scrim.hidden = !open;
    navToggle.setAttribute('aria-expanded', String(open));
  }
  navToggle.addEventListener('click', toggleNav);
  scrim.addEventListener('click', closeNav);

  function buildSidebar() {
    const done = readCount();
    const pct = TOTAL_LESSONS ? Math.round(done / TOTAL_LESSONS * 100) : 0;

    let html = '';

    html += '<div class="nav-progress">' +
              '<div class="nav-progress-label"><span>Articles read</span><span>' + done + ' / ' + TOTAL_LESSONS + '</span></div>' +
              '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
            '</div>';

    html += '<a class="nav-simple" href="#/" data-nav="home">🏠 Overview</a>';

    CURRICULUM.forEach(function (unit) {
      const open = store.data.navOpen[unit.id] !== false;
      const unitDone = unit.lessons.filter(function (l) { return store.isRead(unit.id + '/' + l.id); }).length;
      html += '<div class="nav-section">' +
        '<button class="nav-head" data-unit="' + unit.id + '" aria-expanded="' + open + '">' +
          '<span class="nav-dot" style="background:' + unit.color + '"></span>' +
          '<span>' + esc(unit.code) + '</span>' +
          '<span class="nav-count">' + unitDone + '/' + unit.lessons.length + '</span>' +
          '<svg class="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>' +
        '</button>' +
        '<ul class="nav-list" data-list="' + unit.id + '"' + (open ? '' : ' hidden') + '>' +
          unit.lessons.map(function (l) {
            const key = unit.id + '/' + l.id;
            return '<li><a href="#/learn/' + unit.id + '/' + l.id + '" data-nav="' + key + '"' +
                   (store.isRead(key) ? ' class="done"' : '') + '>' +
                   '<span class="nav-check">✓</span><span>' + esc(l.title) + '</span></a></li>';
          }).join('') +
        '</ul></div>';
    });

    html += '<div style="height:10px"></div>';
    html += '<a class="nav-simple" href="#/practice" data-nav="practice">🎯 Practice quizzes</a>';
    html += '<a class="nav-simple" href="#/exams" data-nav="exams">📄 Full exams</a>';
    html += '<a class="nav-simple" href="#/progress" data-nav="progress">📊 My progress</a>';

    $('#sidebarInner').innerHTML = html;

    $$('.nav-head').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const id = btn.dataset.unit;
        const list = $('[data-list="' + id + '"]');
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        list.hidden = open;
        store.data.navOpen[id] = !open;
        store.save();
      });
    });

    highlightNav();
  }

  function highlightNav() {
    const hash = location.hash || '#/';
    $$('#sidebarInner a').forEach(function (a) { a.classList.remove('active'); });
    const m = hash.match(/^#\/learn\/([^/]+)\/([^/]+)/);
    let target = null;
    if (m) target = $('[data-nav="' + m[1] + '/' + m[2] + '"]');
    else if (hash.indexOf('#/practice') === 0) target = $('[data-nav="practice"]');
    else if (hash.indexOf('#/exams') === 0 || hash.indexOf('#/exam/') === 0) target = $('[data-nav="exams"]');
    else if (hash.indexOf('#/progress') === 0) target = $('[data-nav="progress"]');
    else if (hash === '#/' || hash === '') target = $('[data-nav="home"]');
    if (target) target.classList.add('active');
  }

  /* ---------------- Search ---------------- */

  const searchIndex = (function () {
    const idx = [];
    LESSON_INDEX.forEach(function (l) {
      idx.push({
        kind: 'Article · ' + l.unitCode,
        title: l.lesson.title,
        href: '#/learn/' + l.unitId + '/' + l.lesson.id,
        text: (l.lesson.title + ' ' + l.lesson.summary + ' ' + (l.lesson.kk || []).join(' ') + ' ' + window.md.strip(l.lesson.body)).toLowerCase()
      });
    });
    QUESTIONS.forEach(function (q) {
      idx.push({
        kind: 'Question · ' + SOURCES[q.src].short + ' §' + q.section,
        title: window.md.strip(q.stem).slice(0, 110),
        href: '#/question/' + q.id,
        text: (window.md.strip(q.stem) + ' ' + window.md.strip(q.stimulus || '') + ' ' + (q.options || []).join(' ')).toLowerCase()
      });
    });
    return idx;
  })();

  const searchInput = $('#search');
  const searchResults = $('#searchResults');

  function runSearch() {
    const q = searchInput.value.trim().toLowerCase();
    if (q.length < 2) { searchResults.hidden = true; return; }
    const terms = q.split(/\s+/);
    const hits = searchIndex.filter(function (item) {
      return terms.every(function (t) { return item.text.indexOf(t) >= 0; });
    }).slice(0, 12);

    searchResults.innerHTML = hits.length
      ? hits.map(function (h) {
          return '<a href="' + h.href + '"><span class="sr-kind">' + esc(h.kind) + '</span>' + esc(h.title) + '</a>';
        }).join('')
      : '<div class="sr-empty">No matches for “' + esc(searchInput.value) + '”.</div>';
    searchResults.hidden = false;
  }

  searchInput.addEventListener('input', runSearch);
  searchInput.addEventListener('focus', runSearch);
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-wrap')) searchResults.hidden = true;
  });
  searchResults.addEventListener('click', function (e) {
    if (e.target.closest('a')) { searchResults.hidden = true; searchInput.value = ''; }
  });

  /* ---------------- Views ---------------- */

  const main = $('#main');

  function setView(html) {
    main.innerHTML = html;
    main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  /* --- Home --- */

  function viewHome() {
    const done = readCount();
    const pct = TOTAL_LESSONS ? Math.round(done / TOTAL_LESSONS * 100) : 0;
    const mcqCount = QUESTIONS.filter(function (q) { return q.type === 'mcq'; }).length;
    const saCount = QUESTIONS.filter(function (q) { return q.type === 'short'; }).length;

    let html = `
      <section class="hero">
        <div class="eyebrow"><span class="dot" style="background:var(--exam)"></span>VCE Applied Computing · Study design from 2025</div>
        <h1>Software Development · Units 3 &amp; 4</h1>
        <p class="lede">Articles covering every piece of key knowledge in the study design, and practice questions taken
        straight from the 2025 VCAA examination and two full trial papers — each with worked solutions.</p>
        <div class="btn-row">
          <a class="btn primary" href="#/learn/${CURRICULUM[0].id}/${CURRICULUM[0].lessons[0].id}">Start learning →</a>
          <a class="btn" href="#/practice">Practice questions</a>
          <a class="btn ghost" href="#/exams">Full exams</a>
        </div>
      </section>

      <div class="stat-row">
        <div class="stat"><b>${TOTAL_LESSONS}</b><span>revision articles</span></div>
        <div class="stat"><b>${mcqCount}</b><span>multiple-choice questions</span></div>
        <div class="stat"><b>${saCount}</b><span>written responses with solutions</span></div>
        <div class="stat"><b>${pct}%</b><span>of articles read</span></div>
      </div>

      <h2 class="section-title">Areas of study</h2>
      <p class="section-note">Every article maps back to the key knowledge and key skills it revises.</p>
      <div class="grid">`;

    CURRICULUM.forEach(function (unit) {
      const unitDone = unit.lessons.filter(function (l) { return store.isRead(unit.id + '/' + l.id); }).length;
      html += `
        <a class="card card-accent" style="border-top-color:${unit.color}" href="#/unit/${unit.id}">
          <div class="eyebrow" style="margin-bottom:6px"><span class="dot" style="background:${unit.color}"></span>${esc(unit.code)}</div>
          <h3>${esc(unit.title)}</h3>
          <p>${esc(unit.blurb)}</p>
          <div class="card-meta"><span class="pill">${unit.lessons.length} articles</span><span>${unitDone} read</span></div>
        </a>`;
    });

    html += `</div>

      <h2 class="section-title">Jump straight into practice</h2>
      <div class="grid">
        <a class="card" href="#/quiz/mc-drill">
          <h3>⚡ Section A rapid drill</h3>
          <p>All ${mcqCount} multiple-choice questions from the three papers, shuffled and auto-marked.</p>
        </a>
        <a class="card" href="#/exam/vcaa25">
          <h3>📄 VCAA 2025 exam</h3>
          <p>Sit the real paper section by section, with the case study insert alongside Section C.</p>
        </a>
        <a class="card" href="#/progress">
          <h3>📊 Find your weak spots</h3>
          <p>See which areas of study your quiz results say need work, and jump to the articles that cover them.</p>
        </a>
      </div>

      <div class="callout exam" style="margin-top:26px">
        <p><strong>Exam shape:</strong> 15 minutes reading, 2 hours writing, 100 marks. Section A is 20 multiple-choice
        questions (20 marks), Section B is short answer (20 marks), Section C is a case study worth 60 marks.
        <a href="#/learn/exam/structure">Read the full breakdown →</a></p>
      </div>`;

    setView(html);
  }

  /* --- Unit overview --- */

  function viewUnit(unitId) {
    const unit = getUnit(unitId);
    if (!unit) return viewNotFound();

    const qCount = questionsForUnit(unitId).length;

    let html = `
      <div class="page-head">
        <div class="crumb"><a href="#/">Overview</a> › ${esc(unit.code)}</div>
        <div class="eyebrow"><span class="dot" style="background:${unit.color}"></span>${esc(unit.code)}</div>
        <h1>${esc(unit.title)}</h1>
        <p class="lede">${esc(unit.blurb)}</p>
      </div>`;

    html += '<ul class="lesson-list">';
    unit.lessons.forEach(function (l, i) {
      const key = unit.id + '/' + l.id;
      html += `<li><a href="#/learn/${unit.id}/${l.id}" class="${store.isRead(key) ? 'done' : ''}">
          <span class="lesson-num">${store.isRead(key) ? '✓' : (i + 1)}</span>
          <span class="lesson-body"><strong>${esc(l.title)}</strong><span>${esc(l.summary)}</span></span>
        </a></li>`;
    });
    html += '</ul>';

    html += aosPracticeSection(unit);

    setView(html);
  }

  /* Exam-question practice for one area of study, shown at the end of the unit */
  function aosPracticeSection(unit) {
    const all = questionsForUnit(unit.id);
    if (!all.length) return '';

    const mcq = all.filter(function (q) { return q.type === 'mcq'; });
    const written = all.filter(function (q) { return q.type === 'short'; });
    const marks = all.reduce(function (t, q) { return t + (q.marks || 1); }, 0);
    const best = store.bestQuiz('aos:' + unit.id + ':all');

    const modes = [
      { id: 'all', icon: '📝', title: 'Every question', n: all.length,
        desc: 'Multiple choice and written responses together, exactly as a real paper mixes them.' },
      { id: 'mcq', icon: '⚡', title: 'Multiple choice only', n: mcq.length,
        desc: 'Auto-marked with an explanation on every question. Quick to run through.' },
      { id: 'written', icon: '✍️', title: 'Written responses only', n: written.length,
        desc: 'Self-marked against worked sample answers. Slower, and where the marks are.' }
    ].filter(function (m) { return m.n > 0; });

    let html = `
      <section class="aos-practice" id="practice">
        <div class="aos-practice-head">
          <div>
            <div class="eyebrow" style="margin-bottom:6px"><span class="dot" style="background:${unit.color}"></span>End of ${esc(unit.code)}</div>
            <h2 class="section-title" style="margin-bottom:6px">Exam questions for this area of study</h2>
            <p class="section-note" style="margin:0">
              ${all.length} real questions worth ${marks} marks, drawn from all six papers and covering only
              ${esc(unit.title.toLowerCase())}. <strong>The order is reshuffled every attempt</strong>, so you
              practise recognising the question rather than remembering its position.
            </p>
          </div>
          ${best ? `<div class="aos-best"><b>${best.pct}%</b><span>best so far</span></div>` : ''}
        </div>
        <div class="grid" style="margin-bottom:0">`;

    modes.forEach(function (mode) {
      html += `
        <a class="card" href="#/aos/${unit.id}/${mode.id}">
          <h3>${mode.icon} ${esc(mode.title)}</h3>
          <p>${esc(mode.desc)}</p>
          <div class="card-meta"><span class="pill">${mode.n} question${mode.n > 1 ? 's' : ''}</span></div>
        </a>`;
    });

    html += '</div></section>';
    return html;
  }

  /* --- Article --- */

  function viewLesson(unitId, lessonId) {
    const ctx = getLesson(unitId, lessonId);
    if (!ctx) return viewNotFound();

    const unit = ctx.unit, lesson = ctx.lesson;
    const key = unitId + '/' + lessonId;
    const isRead = store.isRead(key);
    const related = questionsForTopic(lessonId);

    let html = `
      <div class="page-head">
        <div class="crumb"><a href="#/">Overview</a> › <a href="#/unit/${unit.id}">${esc(unit.code)}</a></div>
        <div class="eyebrow"><span class="dot" style="background:${unit.color}"></span>Article ${ctx.index + 1} of ${unit.lessons.length}</div>
        <h1>${esc(lesson.title)}</h1>
        <p class="lede">${esc(lesson.summary)}</p>
        ${(lesson.kk && lesson.kk.length)
          ? '<div class="kk-tags">' + lesson.kk.map(function (k) { return '<span class="kk-tag">' + esc(k) + '</span>'; }).join('') + '</div>'
          : ''}
      </div>

      <article class="article">${window.md.render(lesson.body)}</article>

      <div class="article-footer">
        <div class="btn-row">
          <button class="btn done-toggle ${isRead ? 'is-done' : ''}" id="doneBtn">
            ${isRead ? '✓ Marked as read' : 'Mark as read'}
          </button>
          ${related.length ? `<a class="btn primary" href="#/topic/${lessonId}">Practise this topic (${related.length})</a>` : ''}
        </div>
        <div class="pager">
          ${ctx.prev
            ? `<a href="#/learn/${unit.id}/${ctx.prev.id}"><small>← Previous</small><strong>${esc(ctx.prev.title)}</strong></a>`
            : '<span></span>'}
          ${ctx.next
            ? `<a class="next" href="#/learn/${unit.id}/${ctx.next.id}"><small>Next →</small><strong>${esc(ctx.next.title)}</strong></a>`
            : (questionsForUnit(unit.id).length
                ? `<a class="next finish" href="#/aos/${unit.id}/all"><small>End of ${esc(unit.code)} →</small><strong>Exam questions for this area of study</strong></a>`
                : '<span></span>')}
        </div>
      </div>`;

    setView(html);

    $('#doneBtn').addEventListener('click', function () {
      const now = !store.isRead(key);
      store.setRead(key, now);
      this.classList.toggle('is-done', now);
      this.textContent = now ? '✓ Marked as read' : 'Mark as read';
      buildSidebar();
    });
  }

  /* --- Practice hub --- */

  function viewPractice() {
    let html = `
      <div class="page-head">
        <h1>Practice quizzes</h1>
        <p class="lede">Every question is taken from the 2025 VCAA examination or one of the two 2025 trial papers.
        Multiple choice is marked instantly with an explanation; written responses come with worked sample answers to
        mark yourself against.</p>
      </div>
      <div class="grid">`;

    QUIZZES.forEach(function (quiz) {
      const n = quiz.pick().length;
      if (!n) return;
      const best = store.bestQuiz('quiz:' + quiz.id);
      html += `
        <a class="card" href="#/quiz/${quiz.id}">
          <h3>${quiz.icon} ${esc(quiz.title)}</h3>
          <p>${esc(quiz.blurb)}</p>
          <div class="card-meta">
            <span class="pill">${n} questions</span>
            ${best ? `<span>Best: ${best.pct}%</span>` : '<span>Not attempted</span>'}
          </div>
        </a>`;
    });

    html += `</div>

      <h2 class="section-title">Practise a single topic</h2>
      <p class="section-note">Topics with questions attached in the bank.</p>
      <div class="grid">`;

    const byTopic = {};
    QUESTIONS.forEach(function (q) { (byTopic[q.topic] = byTopic[q.topic] || []).push(q); });

    LESSON_INDEX.forEach(function (l) {
      const qs = byTopic[l.lesson.id];
      if (!qs || !qs.length) return;
      html += `
        <a class="card" href="#/topic/${l.lesson.id}">
          <div class="eyebrow" style="margin-bottom:6px"><span class="dot" style="background:${l.color}"></span>${esc(l.unitCode)}</div>
          <h3>${esc(l.lesson.title)}</h3>
          <div class="card-meta"><span class="pill">${qs.length} question${qs.length > 1 ? 's' : ''}</span></div>
        </a>`;
    });

    html += '</div>';
    setView(html);
  }

  /* --- Exams hub --- */

  function viewExams() {
    let html = `
      <div class="page-head">
        <h1>Full exams</h1>
        <p class="lede">Complete papers, presented section by section. Work through them in order, or jump to a single
        section. The Section C case study stays visible while you answer, exactly as the detachable insert does in the
        real exam.</p>
      </div>
      <div class="grid">`;

    EXAMS.forEach(function (ex) {
      const qs = examQuestions(ex.id);
      const secs = ['A', 'B', 'C'].filter(function (s) { return examQuestions(ex.id, s).length; });
      const best = store.bestQuiz('exam:' + ex.id);
      html += `
        <a class="card card-accent" style="border-top-color:var(--exam)" href="#/exam/${ex.id}">
          <h3>${esc(ex.title)}</h3>
          <p>${esc(ex.blurb)}</p>
          <div class="card-meta">
            <span class="pill">${qs.length} questions</span>
            <span>Sections ${secs.join(', ')}</span>
            ${ex.legacy ? '<span class="pill legacy">filtered</span>' : ''}
            ${best ? `<span>Best: ${best.pct}%</span>` : ''}
          </div>
        </a>`;
    });

    html += `</div>
      <div class="callout warn">
        <p><strong>The three 2022&ndash;2024 papers were sat under the previous study design.</strong> Every question
        has been checked against the 2025 key knowledge and key skills, and anything testing removed content is cut &mdash;
        development models (agile, waterfall), information-system goals and objectives, data integrity characteristics,
        hash tables and associative arrays, networks and bandwidth, software auditing and penetration testing, the
        Health Records Act 2001, marketability, and SQL injection. That is why those papers carry fewer marks here than
        in print.</p>
        <p>A question marked <span class="pill adapted">adapted</span> had picture options in the original that could not
        be reproduced faithfully; it has been redrawn from the question stem and tests the same point.</p>
      </div>`;

    setView(html);
  }

  /* --- Exam detail --- */

  function viewExam(examId) {
    const ex = getExam(examId);
    if (!ex) return viewNotFound();

    let html = `
      <div class="page-head">
        <div class="crumb"><a href="#/exams">Full exams</a> › ${esc(ex.title)}</div>
        <div class="eyebrow"><span class="dot" style="background:var(--exam)"></span>${esc(ex.subtitle)}</div>
        <h1>${esc(ex.title)}</h1>
        <p class="lede">${esc(ex.blurb)}</p>
      </div>

      <div class="btn-row" style="margin-bottom:26px">
        <a class="btn primary" href="#/sit/${ex.id}/all">Sit the whole paper</a>
      </div>

      <h2 class="section-title">By section</h2>
      <ul class="lesson-list">`;

    ['A', 'B', 'C'].forEach(function (s) {
      const qs = examQuestions(ex.id, s);
      if (!qs.length) return;
      const marks = qs.reduce(function (t, q) { return t + (q.marks || 1); }, 0);
      html += `<li><a href="#/sit/${ex.id}/${s}">
        <span class="lesson-num">${s}</span>
        <span class="lesson-body">
          <strong>${SECTION_META[s].name} — ${SECTION_META[s].desc}</strong>
          <span>${qs.length} questions · ${marks} marks available here</span>
        </span></a></li>`;
    });

    html += '</ul>';

    if (ex.caseStudy) {
      html += `<h2 class="section-title" style="margin-top:32px">Section C case study</h2>
        <div class="stimulus article">${window.md.render(ex.caseStudy)}</div>`;
    }

    setView(html);
  }

  /* --- Progress --- */

  function viewProgress() {
    const done = readCount();
    const pct = TOTAL_LESSONS ? Math.round(done / TOTAL_LESSONS * 100) : 0;

    /* Aggregate correctness per unit from stored MCQ results */
    const unitStats = {};
    CURRICULUM.forEach(function (u) { unitStats[u.id] = { right: 0, total: 0 }; });

    Object.keys(store.data.quiz).forEach(function (k) {
      store.data.quiz[k].forEach(function (run) {
        (run.detail || []).forEach(function (d) {
          const q = QUESTION_INDEX[d.id];
          if (!q || q.type !== 'mcq' || !unitStats[q.unit]) return;
          unitStats[q.unit].total++;
          if (d.right) unitStats[q.unit].right++;
        });
      });
    });

    let html = `
      <div class="page-head">
        <h1>My progress</h1>
        <p class="lede">Everything here is stored in this browser only — nothing is uploaded anywhere.</p>
      </div>

      <div class="stat-row">
        <div class="stat"><b>${done}/${TOTAL_LESSONS}</b><span>articles read</span></div>
        <div class="stat"><b>${pct}%</b><span>of the library</span></div>
      </div>

      <h2 class="section-title">Reading by area of study</h2>
      <ul class="weak-list" style="margin-bottom:30px">`;

    CURRICULUM.forEach(function (u) {
      const n = u.lessons.filter(function (l) { return store.isRead(u.id + '/' + l.id); }).length;
      const p = Math.round(n / u.lessons.length * 100);
      html += `<li>
        <span class="nav-dot" style="background:${u.color}"></span>
        <span style="min-width:150px">${esc(u.code)}</span>
        <span class="wbar bar"><i style="width:${p}%;background:${u.color}"></i></span>
        <span style="font-variant-numeric:tabular-nums">${n}/${u.lessons.length}</span>
        <a href="#/unit/${u.id}">Open →</a>
      </li>`;
    });

    html += '</ul><h2 class="section-title">Multiple-choice accuracy</h2>';

    const anyAttempts = Object.keys(unitStats).some(function (k) { return unitStats[k].total > 0; });

    if (!anyAttempts) {
      html += '<p class="section-note">No quiz attempts yet. <a href="#/practice">Try a practice quiz</a> and your accuracy by area of study will show up here.</p>';
    } else {
      html += '<p class="section-note">Across every attempt you have made. Lowest first — that is where the marks are.</p><ul class="weak-list">';
      CURRICULUM.filter(function (u) { return unitStats[u.id].total > 0; })
        .map(function (u) {
          const s = unitStats[u.id];
          return { unit: u, pct: Math.round(s.right / s.total * 100), s: s };
        })
        .sort(function (a, b) { return a.pct - b.pct; })
        .forEach(function (row) {
          const colour = row.pct >= 75 ? 'var(--ok)' : row.pct >= 50 ? 'var(--warn)' : 'var(--bad)';
          html += `<li>
            <span class="nav-dot" style="background:${row.unit.color}"></span>
            <span style="min-width:150px">${esc(row.unit.code)}</span>
            <span class="wbar bar"><i style="width:${row.pct}%;background:${colour}"></i></span>
            <span style="font-variant-numeric:tabular-nums;color:${colour};font-weight:700">${row.pct}%</span>
            <a href="#/quiz/${row.unit.id}">Practise →</a>
          </li>`;
        });
      html += '</ul>';
    }

    html += `<div class="btn-row" style="margin-top:30px">
      <button class="btn" id="resetBtn">Reset all progress</button>
    </div>`;

    setView(html);

    $('#resetBtn').addEventListener('click', function () {
      if (!confirm('Reset all reading progress and quiz results? This cannot be undone.')) return;
      store.data.read = {};
      store.data.quiz = {};
      store.save();
      buildSidebar();
      viewProgress();
    });
  }

  /* ---------------- Quiz engine ---------------- */

  const quizState = null;

  function startQuiz(opts) {
    /* opts: { id, title, subtitle, questions, caseStudy, backHref, backLabel } */
    let questions = opts.questions;
    if (!questions.length) {
      setView('<div class="empty"><h1>Nothing here yet</h1><p>No questions are attached to this selection.</p><p><a href="#/practice">Back to practice</a></p></div>');
      return;
    }

    const state = {
      id: opts.id,
      title: opts.title,
      questions: questions,
      i: 0,
      answers: new Array(questions.length).fill(null), // {right:bool, choice:int} | {self:int}
      revealed: new Array(questions.length).fill(false),
      caseStudy: opts.caseStudy,
      shuffled: !!opts.shuffled,
      backHref: opts.backHref || '#/practice',
      backLabel: opts.backLabel || 'Practice'
    };

    renderQuestion(state, opts);
  }

  function quizTotals(state) {
    let gained = 0, possible = 0;
    state.questions.forEach(function (q, i) {
      const a = state.answers[i];
      const marks = q.marks || 1;
      possible += marks;
      if (!a) return;
      if (q.type === 'mcq') gained += a.right ? marks : 0;
      else if (typeof a.self === 'number') gained += a.self;
    });
    return { gained: gained, possible: possible };
  }

  function renderQuestion(state, opts) {
    const q = state.questions[state.i];
    const t = quizTotals(state);
    const answeredCount = state.answers.filter(Boolean).length;
    const progressPct = Math.round(state.i / state.questions.length * 100);

    let html = `
      <div class="page-head">
        <div class="crumb"><a href="${state.backHref}">${esc(state.backLabel)}</a> › ${esc(state.title)}</div>
        <h1 style="font-size:26px">${esc(state.title)}</h1>
      </div>`;

    if (state.caseStudy) {
      html += `<details style="margin-bottom:18px">
        <summary style="cursor:pointer;font-weight:650;padding:10px 0">📎 Section C case study insert (click to open)</summary>
        <div class="stimulus article">${window.md.render(state.caseStudy)}</div>
      </details>`;
    }

    html += `<div class="quiz-shell">
      <div class="quiz-bar">
        <span class="qcount">Q ${state.i + 1} / ${state.questions.length}</span>
        <span class="bar"><i style="width:${progressPct}%"></i></span>
        ${state.shuffled ? '<span class="shuffled" title="Reshuffled every attempt, so you cannot learn the order.">&#8646; shuffled</span>' : ''}
        <span class="qscore">${t.gained} / ${t.possible} marks</span>
      </div>
      <div class="quiz-body">
        <div class="q-source">
          <span class="pill">${esc(SOURCES[q.src].short)}</span>
          <span class="pill">Section ${q.section}</span>
          ${q.marks ? `<span class="pill">${q.marks} mark${q.marks > 1 ? 's' : ''}</span>` : ''}
          ${q.adapted ? '<span class="pill adapted" title="The original options were pictures that could not be reproduced faithfully; these have been redrawn from the question stem.">adapted</span>' : ''}
        </div>`;

    if (q.stimulus) {
      html += `<div class="stimulus article">${window.md.render(q.stimulus)}</div>`;
    }

    html += `<div class="q-stem article">${window.md.render(q.stem)}</div>`;

    const ans = state.answers[state.i];
    const revealed = state.revealed[state.i];

    if (q.type === 'mcq') {
      const pictorial = !!(q.optionDiagrams && q.optionDiagrams.length);
      html += '<ul class="options' + (pictorial ? ' pictorial' : '') + '">';
      q.options.forEach(function (opt, oi) {
        let cls = 'opt';
        if (revealed) {
          if (oi === q.answer) cls += ' correct';
          else if (ans && ans.choice === oi) cls += ' wrong';
          else cls += ' muted';
        }
        const label = '<span class="opt-letter">' + letter(oi) + '</span><span>' + window.md.inline(opt) + '</span>';
        if (pictorial) {
          const svg = (window.DIAGRAMS || {})[q.optionDiagrams[oi]] || '';
          html += `<li><button class="${cls}" data-choice="${oi}" ${revealed ? 'disabled' : ''}>
            <span class="opt-head">${label}</span>${svg}
          </button></li>`;
        } else {
          html += `<li><button class="${cls}" data-choice="${oi}" ${revealed ? 'disabled' : ''}>${label}</button></li>`;
        }
      });
      html += '</ul>';

      if (revealed) {
        const right = ans && ans.right;
        html += `<div class="feedback ${right ? 'right' : 'wrong'}">
          <strong class="verdict">${right ? '✓ Correct' : '✗ Not quite — the answer is ' + letter(q.answer)}</strong>
          <div class="article">${window.md.render(q.explanation || '')}</div>
        </div>`;
      }
    } else {
      /* short answer */
      html += `<textarea class="sa-input" id="saInput" placeholder="Write your response here. Aim for roughly one developed point per mark…">${esc(state.answers[state.i] && state.answers[state.i].text || '')}</textarea>`;

      if (!revealed) {
        html += '<div class="btn-row"><button class="btn primary" id="revealBtn">Show sample response</button></div>';
      } else {
        html += `<div class="sample article"><h4>Sample response — ${q.marks} mark${q.marks > 1 ? 's' : ''}</h4>${window.md.render(q.sample || '')}</div>`;
        html += '<div class="self-mark"><span>Mark your own response:</span>';
        for (let m = 0; m <= (q.marks || 1); m++) {
          const sel = ans && ans.self === m;
          html += `<button class="btn ${sel ? 'primary' : ''}" data-self="${m}">${m}</button>`;
        }
        html += '</div>';
      }
    }

    /* Navigation */
    html += '<div class="btn-row" style="margin-top:20px">';
    if (state.i > 0) html += '<button class="btn" id="prevBtn">← Previous</button>';
    if (state.i < state.questions.length - 1) {
      html += '<button class="btn primary" id="nextBtn">Next →</button>';
    } else {
      html += '<button class="btn primary" id="finishBtn">Finish and see results</button>';
    }
    html += `<span style="margin-left:auto;font-size:13px;color:var(--text-muted)">${answeredCount} answered</span>`;
    html += '</div>';

    html += '</div></div>';

    setView(html);

    /* --- wire up --- */

    function saveText() {
      const ta = $('#saInput');
      if (!ta) return;
      const prev = state.answers[state.i] || {};
      state.answers[state.i] = Object.assign({}, prev, { text: ta.value });
    }

    $$('.opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const choice = Number(btn.dataset.choice);
        state.answers[state.i] = { choice: choice, right: choice === q.answer };
        state.revealed[state.i] = true;
        renderQuestion(state, opts);
      });
    });

    const revealBtn = $('#revealBtn');
    if (revealBtn) revealBtn.addEventListener('click', function () {
      saveText();
      state.revealed[state.i] = true;
      renderQuestion(state, opts);
    });

    $$('[data-self]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        saveText();
        const prev = state.answers[state.i] || {};
        state.answers[state.i] = Object.assign({}, prev, { self: Number(btn.dataset.self) });
        renderQuestion(state, opts);
      });
    });

    const prevBtn = $('#prevBtn');
    if (prevBtn) prevBtn.addEventListener('click', function () {
      saveText(); state.i--; renderQuestion(state, opts);
    });

    const nextBtn = $('#nextBtn');
    if (nextBtn) nextBtn.addEventListener('click', function () {
      saveText(); state.i++; renderQuestion(state, opts);
    });

    const finishBtn = $('#finishBtn');
    if (finishBtn) finishBtn.addEventListener('click', function () {
      saveText(); showResults(state);
    });
  }

  function showResults(state) {
    const t = quizTotals(state);
    const pct = t.possible ? Math.round(t.gained / t.possible * 100) : 0;
    const band = pctBand(pct);

    /* Persist */
    const detail = state.questions.map(function (q, i) {
      const a = state.answers[i];
      return {
        id: q.id,
        right: q.type === 'mcq' ? !!(a && a.right) : (a && typeof a.self === 'number' ? a.self === (q.marks || 1) : false),
        answered: !!a
      };
    });
    store.recordQuiz(state.id, { pct: pct, gained: t.gained, possible: t.possible, when: Date.now(), detail: detail });

    /* Weak topics from this run */
    const topicMiss = {};
    state.questions.forEach(function (q, i) {
      const a = state.answers[i];
      let ok;
      if (q.type === 'mcq') ok = a && a.right;
      else ok = a && typeof a.self === 'number' && a.self >= (q.marks || 1) * 0.7;
      if (!ok) topicMiss[q.topic] = (topicMiss[q.topic] || 0) + 1;
    });

    let html = `
      <div class="page-head">
        <div class="crumb"><a href="${state.backHref}">${esc(state.backLabel)}</a> › Results</div>
      </div>

      <div class="quiz-shell">
        <div class="result-hero">
          <div class="result-ring" style="color:${band.color}">${pct}%</div>
          <p class="result-sub">${t.gained} of ${t.possible} marks · ${esc(state.title)}</p>
          <p class="result-band" style="color:${band.color}">${esc(band.label)}</p>
          <div class="btn-row" style="justify-content:center">
            <button class="btn primary" id="retryBtn">Try again</button>
            <a class="btn" href="${state.backHref}">Back to ${esc(state.backLabel.toLowerCase())}</a>
          </div>
        </div>
        <ul class="breakdown">`;

    state.questions.forEach(function (q, i) {
      const a = state.answers[i];
      let mark, cls;
      if (!a) { mark = '–'; cls = 's'; }
      else if (q.type === 'mcq') { mark = a.right ? '✓' : '✗'; cls = a.right ? 'y' : 'n'; }
      else if (typeof a.self === 'number') {
        const full = a.self >= (q.marks || 1) * 0.7;
        mark = a.self; cls = full ? 'y' : 'n';
      } else { mark = '–'; cls = 's'; }

      const lesson = LESSON_INDEX.find(function (l) { return l.lesson.id === q.topic; });
      html += `<li>
        <span class="bmark ${cls}">${mark}</span>
        <span class="btext">${esc(window.md.strip(q.stem).slice(0, 90))}</span>
        <span class="btopic">${lesson ? '<a href="#/learn/' + lesson.unitId + '/' + lesson.lesson.id + '">' + esc(lesson.lesson.title) + '</a>' : ''}</span>
      </li>`;
    });

    html += '</ul></div>';

    const weak = Object.keys(topicMiss).sort(function (a, b) { return topicMiss[b] - topicMiss[a]; }).slice(0, 5);
    if (weak.length) {
      html += '<h2 class="section-title" style="margin-top:32px">Go back over these</h2><ul class="weak-list">';
      weak.forEach(function (topicId) {
        const l = LESSON_INDEX.find(function (x) { return x.lesson.id === topicId; });
        if (!l) return;
        html += `<li>
          <span class="nav-dot" style="background:${l.color}"></span>
          <span style="flex:1"><strong>${esc(l.lesson.title)}</strong> <span style="color:var(--text-faint)">· ${esc(l.unitCode)}</span></span>
          <span class="pill">${topicMiss[topicId]} missed</span>
          <a href="#/learn/${l.unitId}/${l.lesson.id}">Read →</a>
        </li>`;
      });
      html += '</ul>';
    }

    setView(html);

    $('#retryBtn').addEventListener('click', function () {
      route(); /* re-enter the same route, which reshuffles */
    });
  }

  /* --- Quiz route entry points --- */

  function viewQuiz(quizId) {
    const quiz = getQuiz(quizId) || (getUnit(quizId) && {
      id: quizId,
      title: getUnit(quizId).code + ' — ' + getUnit(quizId).title,
      blurb: '',
      pick: function () { return questionsForUnit(quizId); },
      shuffle: true
    });
    if (!quiz) return viewNotFound();

    let qs = quiz.pick();
    if (quiz.shuffle) qs = shuffle(qs);

    startQuiz({
      id: 'quiz:' + quizId,
      title: quiz.title,
      questions: qs,
      shuffled: !!quiz.shuffle,
      backHref: '#/practice',
      backLabel: 'Practice'
    });
  }

  function viewAosQuiz(unitId, mode) {
    const unit = getUnit(unitId);
    if (!unit) return viewNotFound();
    mode = mode || 'all';

    let qs = questionsForUnit(unitId);
    if (mode === 'mcq') qs = qs.filter(function (q) { return q.type === 'mcq'; });
    else if (mode === 'written') qs = qs.filter(function (q) { return q.type === 'short'; });

    const label = mode === 'mcq' ? ' — multiple choice'
                : mode === 'written' ? ' — written responses'
                : ' — exam questions';

    startQuiz({
      id: 'aos:' + unitId + ':' + mode,
      title: unit.code + label,
      questions: shuffle(qs),
      shuffled: true,
      backHref: '#/unit/' + unitId,
      backLabel: unit.code
    });
  }

  function viewTopicQuiz(topicId) {
    const qs = shuffle(questionsForTopic(topicId));
    const l = LESSON_INDEX.find(function (x) { return x.lesson.id === topicId; });
    startQuiz({
      id: 'topic:' + topicId,
      title: (l ? l.lesson.title : topicId) + ' — practice',
      questions: qs,
      shuffled: qs.length > 1,
      backHref: l ? '#/learn/' + l.unitId + '/' + l.lesson.id : '#/practice',
      backLabel: l ? 'Article' : 'Practice'
    });
  }

  function viewSit(examId, section) {
    const ex = getExam(examId);
    if (!ex) return viewNotFound();
    const sec = (section === 'all') ? null : section;
    const qs = examQuestions(examId, sec);
    const needsCase = !sec || sec === 'C';

    startQuiz({
      id: 'exam:' + examId + (sec ? ':' + sec : ''),
      title: ex.title + (sec ? ' — ' + SECTION_META[sec].name : ''),
      questions: qs,
      caseStudy: needsCase ? ex.caseStudy : null,
      backHref: '#/exam/' + examId,
      backLabel: ex.title
    });
  }

  /* --- Single question permalink (from search) --- */

  function viewQuestion(qid) {
    const q = QUESTION_INDEX[qid];
    if (!q) return viewNotFound();
    startQuiz({
      id: 'single:' + qid,
      title: 'Question · ' + SOURCES[q.src].short,
      questions: [q],
      backHref: '#/practice',
      backLabel: 'Practice'
    });
  }

  function viewNotFound() {
    setView('<div class="empty"><h1>Page not found</h1><p>That link does not match anything in the site.</p><p><a href="#/">Back to the overview</a></p></div>');
  }

  /* ---------------- Router ---------------- */

  function route() {
    const hash = location.hash.replace(/^#/, '') || '/';
    const parts = hash.split('/').filter(Boolean);

    closeNav();

    if (!parts.length)                       viewHome();
    else if (parts[0] === 'unit')            viewUnit(parts[1]);
    else if (parts[0] === 'learn')           viewLesson(parts[1], parts[2]);
    else if (parts[0] === 'practice')        viewPractice();
    else if (parts[0] === 'exams')           viewExams();
    else if (parts[0] === 'exam')            viewExam(parts[1]);
    else if (parts[0] === 'sit')             viewSit(parts[1], parts[2] || 'all');
    else if (parts[0] === 'quiz')            viewQuiz(parts[1]);
    else if (parts[0] === 'aos')             viewAosQuiz(parts[1], parts[2]);
    else if (parts[0] === 'topic')           viewTopicQuiz(parts[1]);
    else if (parts[0] === 'question')        viewQuestion(parts[1]);
    else if (parts[0] === 'progress')        viewProgress();
    else                                     viewNotFound();

    highlightNav();
  }

  window.addEventListener('hashchange', route);

  buildSidebar();
  route();
})();
