/* ============================================================
   Inline SVG diagrams.
   ------------------------------------------------------------
   Referenced from article and question markdown as @[diagram-id].
   Everything is drawn with currentColor so both themes work; a
   literal accent is reserved for the one element a question turns
   on (an error to spot, a label to supply).
   Visual grammar, kept constant across every diagram:
     process        rounded rectangle
     external entity plain rectangle
     data store     open-ended rectangle (bar top and bottom)
     actor          stick figure
     use case       ellipse
     fault          dashed stroke in the "bad" colour
   ============================================================ */

(function (global) {
  'use strict';

  var N = 0;
  function uid(p) { return p + '-' + (++N); }

  /* ---------- primitives ---------- */

  function defs(id) {
    return '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="9" refY="5" ' +
      'markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
      '<path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>';
  }

  function fig(label, caption, w, h, body, extraClass) {
    return '<figure class="diagram' + (extraClass ? ' ' + extraClass : '') + '">' +
      '<svg role="img" aria-label="' + label.replace(/"/g, '&quot;') + '" viewBox="0 0 ' + w + ' ' + h + '" ' +
      'xmlns="http://www.w3.org/2000/svg">' + body + '</svg>' +
      (caption ? '<figcaption>' + caption + '</figcaption>' : '') +
      '</figure>';
  }

  /* text: multi-line, centred on (x,y) */
  function txt(x, y, lines, opts) {
    opts = opts || {};
    var size = opts.size || 12;
    var anchor = opts.anchor || 'middle';
    var weight = opts.weight ? ' font-weight="' + opts.weight + '"' : '';
    var fill = ' fill="' + (opts.fill || 'currentColor') + '"';
    var arr = Array.isArray(lines) ? lines : [lines];
    var startY = y - ((arr.length - 1) * (size + 2)) / 2;
    return '<text x="' + x + '" y="' + startY + '" text-anchor="' + anchor + '" font-size="' + size + '"' +
      weight + fill + ' dominant-baseline="middle" font-family="inherit">' +
      arr.map(function (l, i) {
        return '<tspan x="' + x + '" dy="' + (i ? size + 2 : 0) + '">' + l + '</tspan>';
      }).join('') + '</text>';
  }

  function proc(x, y, w, h, lines, accent) {
    var c = accent || 'currentColor';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="9" ' +
      'fill="var(--surface-2)" stroke="' + c + '" stroke-width="1.5"/>' +
      txt(x + w / 2, y + h / 2, lines, { fill: c });
  }

  function entity(x, y, w, h, lines, accent) {
    var c = accent || 'currentColor';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="2" ' +
      'fill="none" stroke="' + c + '" stroke-width="1.5"/>' +
      txt(x + w / 2, y + h / 2, lines, { fill: c });
  }

  function store(x, y, w, h, lines, accent) {
    var c = accent || 'currentColor';
    return '<line x1="' + x + '" y1="' + y + '" x2="' + (x + w) + '" y2="' + y + '" stroke="' + c + '" stroke-width="1.5"/>' +
      '<line x1="' + x + '" y1="' + (y + h) + '" x2="' + (x + w) + '" y2="' + (y + h) + '" stroke="' + c + '" stroke-width="1.5"/>' +
      txt(x + w / 2, y + h / 2, lines, { fill: c });
  }

  function usecase(cx, cy, rx, ry, lines, accent) {
    var c = accent || 'currentColor';
    return '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" ' +
      'fill="var(--surface-2)" stroke="' + c + '" stroke-width="1.5"/>' +
      txt(cx, cy, lines, { fill: c, size: 11 });
  }

  /* stick figure, feet at y+h */
  function actor(cx, y, label, accent) {
    var c = accent || 'currentColor';
    return '<g stroke="' + c + '" stroke-width="1.5" fill="none">' +
      '<circle cx="' + cx + '" cy="' + (y + 7) + '" r="7"/>' +
      '<line x1="' + cx + '" y1="' + (y + 14) + '" x2="' + cx + '" y2="' + (y + 32) + '"/>' +
      '<line x1="' + (cx - 10) + '" y1="' + (y + 21) + '" x2="' + (cx + 10) + '" y2="' + (y + 21) + '"/>' +
      '<line x1="' + cx + '" y1="' + (y + 32) + '" x2="' + (cx - 9) + '" y2="' + (y + 46) + '"/>' +
      '<line x1="' + cx + '" y1="' + (y + 32) + '" x2="' + (cx + 9) + '" y2="' + (y + 46) + '"/>' +
      '</g>' + txt(cx, y + 58, label, { fill: c, size: 11 });
  }

  /* arrow with optional label; dash for faults */
  function arrow(m, x1, y1, x2, y2, label, opts) {
    opts = opts || {};
    var c = opts.color || 'currentColor';
    var dash = opts.dash ? ' stroke-dasharray="5 4"' : '';
    var s = '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" ' +
      'stroke="' + c + '" stroke-width="1.4"' + dash + ' marker-end="url(#' + m + ')"/>';
    if (label) {
      var lx = opts.lx != null ? opts.lx : (x1 + x2) / 2;
      var ly = opts.ly != null ? opts.ly : (y1 + y2) / 2 - 6;
      s += '<rect x="' + (lx - (label.length * 3.1 + 5)) + '" y="' + (ly - 8) + '" width="' + (label.length * 6.2 + 10) +
        '" height="15" rx="3" fill="var(--surface)" opacity="0.92"/>' +
        txt(lx, ly, label, { size: 10.5, fill: c });
    }
    return s;
  }

  function line(x1, y1, x2, y2, opts) {
    opts = opts || {};
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" ' +
      'stroke="' + (opts.color || 'currentColor') + '" stroke-width="1.4"' +
      (opts.dash ? ' stroke-dasharray="5 4"' : '') + '/>';
  }

  function boundary(x, y, w, h, title) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="6" ' +
      'fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.55"/>' +
      txt(x + w / 2, y + 16, title, { size: 11, weight: '700' });
  }

  var BAD = 'var(--bad)';
  var ACC = 'var(--accent)';

  var D = {};

  /* ============================================================
     TEACHING DIAGRAMS (articles)
     ============================================================ */

  D['dfd-rules'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    /* valid row */
    b += txt(16, 24, 'VALID', { size: 11, weight: '700', anchor: 'start' });
    b += entity(16, 46, 104, 42, ['Property', 'manager']);
    b += proc(264, 44, 130, 46, ['make', 'maintenance report']);
    b += store(536, 54, 128, 28, 'Properties');
    b += arrow(m, 122, 67, 262, 67, 'inspection_results', { ly: 55 });
    b += arrow(m, 396, 67, 534, 67, 'maintenance_details', { ly: 55 });
    /* invalid row */
    b += txt(16, 132, 'INVALID', { size: 11, weight: '700', fill: BAD, anchor: 'start' });
    b += store(60, 160, 120, 28, 'Orders', BAD);
    b += store(522, 160, 120, 28, 'Properties', BAD);
    b += arrow(m, 184, 174, 520, 174, 'order_quantity', { color: BAD, dash: true, ly: 162 });
    b += txt(340, 210, 'a data flow may not run store &#8594; store', { size: 11, fill: BAD });
    return fig(
      'Valid data flow diagram fragment where flows pass through a process, contrasted with an invalid flow running directly between two data stores.',
      'Every data flow must begin and/or end at a <strong>process</strong>. A flow straight from one data store to another — the classic exam error — has nothing transforming the data.',
      680, 228, b);
  })();

  D['usecase-anatomy'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += boundary(120, 14, 400, 212, 'Parking payment application');
    b += actor(56, 60, 'Driver');
    b += actor(56, 150, 'Parking officer');
    b += usecase(225, 64, 68, 24, ['Purchase', 'parking time']);
    b += usecase(225, 132, 68, 24, ['Increase', 'parking time']);
    b += usecase(225, 198, 68, 20, 'Adjust rates');
    b += usecase(452, 100, 54, 24, ['Process', 'payment']);
    b += line(72, 82, 158, 64);
    b += line(72, 172, 158, 198);
    b += arrow(m, 295, 70, 398, 92, '&#171;includes&#187;', { color: ACC, lx: 348, ly: 60 });
    b += arrow(m, 295, 128, 398, 110, '&#171;includes&#187;', { color: ACC, lx: 348, ly: 142 });
    b += txt(320, 250, 'Actors sit OUTSIDE the boundary and are named as roles, never as people', { size: 11 });
    return fig(
      'Use case diagram anatomy: two actors outside a system boundary, use cases inside, and two includes relationships pointing at a shared Process payment use case.',
      '&#171;includes&#187; = the base use case <strong>always</strong> performs it (you cannot buy parking without paying). &#171;extends&#187; = it happens only <strong>sometimes</strong>, under a condition.',
      640, 266, b);
  })();

  D['gantt-anatomy'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    var x0 = 140, colW = 34, top = 40;
    for (var w = 0; w <= 9; w++) {
      b += line(x0 + w * colW, 30, x0 + w * colW, 232, { color: 'var(--border)' });
      if (w < 9) b += txt(x0 + w * colW + colW / 2, 22, 'wk ' + (w + 1), { size: 9.5, fill: 'var(--text-faint)' });
    }
    var rows = [
      { n: 'Research', s: 0, d: 1, crit: false },
      { n: 'Requirements', s: 1, d: 1, crit: true },
      { n: 'UI design', s: 1, d: 2, crit: true },
      { n: 'Development', s: 3, d: 4, crit: true },
      { n: 'Alpha testing', s: 7, d: 2, crit: true }
    ];
    rows.forEach(function (r, i) {
      var y = top + i * 32;
      b += txt(132, y + 10, r.n, { size: 11, anchor: 'end' }).replace('text-anchor="middle"', 'text-anchor="end"');
      b += '<rect x="' + (x0 + r.s * colW) + '" y="' + y + '" width="' + (r.d * colW) + '" height="20" rx="4" fill="' +
        (r.crit ? BAD : 'var(--surface-2)') + '" stroke="' + (r.crit ? BAD : 'currentColor') + '" stroke-width="1.3" opacity="' +
        (r.crit ? '0.9' : '1') + '"/>';
    });
    /* dependency arrows */
    b += arrow(m, x0 + 2 * colW, 60, x0 + 2 * colW, 72);
    b += arrow(m, x0 + 3 * colW, 124, x0 + 3 * colW, 136);
    b += arrow(m, x0 + 7 * colW, 188, x0 + 7 * colW, 200);
    /* milestone diamond */
    var mx = x0 + 9 * colW, my = top + 5 * 32 + 10;
    b += txt(132, my, 'Milestone: ready', { size: 11, anchor: 'end' }).replace('text-anchor="middle"', 'text-anchor="end"');
    b += '<polygon points="' + mx + ',' + (my - 9) + ' ' + (mx + 9) + ',' + my + ' ' + mx + ',' + (my + 9) + ' ' + (mx - 9) + ',' + my +
      '" fill="currentColor"/>';
    b += txt(300, 268, 'Red bars = the critical path. Any slip here slips the whole project.', { size: 11, fill: BAD });
    return fig(
      'Gantt chart anatomy showing task bars against a nine week timeline, dependency arrows between bars, a zero-duration milestone diamond, and the critical path highlighted.',
      'Bar <strong>length</strong> is duration, bar <strong>position</strong> is sequence, arrows are dependencies, and the diamond is a milestone — zero duration, marking a checkpoint rather than work.',
      560, 282, b);
  })();

  D['inheritance-user'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += proc(196, 16, 148, 52, ['User', 'userID · name · email', 'login()'], ACC);
    b += line(270, 68, 270, 88);
    b += line(74, 88, 466, 88);
    var subs = [
      { x: 8, n: ['PropertyOwner', 'ownedProperties'] },
      { x: 140, n: ['PropertyManager', 'assignedAgency'] },
      { x: 272, n: ['Tenant', 'leaseStartDate'] },
      { x: 404, n: ['HeadOfficeStaff', 'department'] }
    ];
    subs.forEach(function (s) {
      b += line(s.x + 66, 88, s.x + 66, 108);
      b += proc(s.x, 108, 132, 44, s.n);
    });
    return fig(
      'Inheritance hierarchy with a User parent class and four subclasses: PropertyOwner, PropertyManager, Tenant and HeadOfficeStaff.',
      'Shared attributes and methods live once in the parent; each subclass inherits them and adds only what is specific to it.',
      544, 164, b);
  })();

  /* ============================================================
     VCAA 2025
     ============================================================ */

  D['vcaa25-context'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += proc(230, 118, 172, 66, ['Rental Property', 'Management System'], ACC);
    b += entity(24, 22, 116, 44, 'Owner');
    b += entity(24, 234, 116, 44, 'Tenant');
    b += entity(556, 128, 132, 46, ['Property', 'manager']);
    /* Owner — flows sit in the clear band between the box and the process */
    b += arrow(m, 142, 58, 264, 116, 'approval_request', { lx: 208, ly: 78 });
    b += arrow(m, 250, 116, 146, 66, 'inspection_confirmation', { lx: 208, ly: 104 });
    /* Tenant */
    b += arrow(m, 142, 238, 264, 186, 'maintenance_request', { lx: 208, ly: 196 });
    b += arrow(m, 250, 186, 146, 234, 'inspection_notice', { lx: 208, ly: 222 });
    /* Property manager — horizontal, labels in the 150px gap */
    b += arrow(m, 554, 140, 404, 140, 'inspection_results', { lx: 479, ly: 128 });
    b += arrow(m, 404, 162, 554, 162, 'inspection_report', { lx: 479, ly: 176 });
    return fig(
      'Context diagram for the Rental Property Management System with three external entities — Owner, Tenant and Property manager — and labelled data flows to and from a single central process.',
      'A context diagram (Level 0) has exactly <strong>one</strong> process, <strong>no</strong> data stores, and every arrow labelled with the data that flows along it.',
      720, 300, b);
  })();

  D['vcaa25-grid'] = (function () {
    var b = '';
    var x0 = 60, y0 = 34, c = 42;
    var cells = { '0,2': 'X', '1,1': 'X', '1,2': 'M', '2,0': 'X', '2,1': 'C', '2,2': 'C', '2,3': 'M' };
    for (var r = 0; r < 5; r++) {
      b += txt(x0 - 16, y0 + r * c + c / 2, String(r), { size: 11, fill: 'var(--text-faint)' });
      for (var col = 0; col < 5; col++) {
        if (r === 0) b += txt(x0 + col * c + c / 2, y0 - 14, String(col), { size: 11, fill: 'var(--text-faint)' });
        b += '<rect x="' + (x0 + col * c) + '" y="' + (y0 + r * c) + '" width="' + c + '" height="' + c +
          '" fill="var(--surface)" stroke="var(--border-strong)" stroke-width="1"/>';
        var v = cells[r + ',' + col];
        if (v) b += txt(x0 + col * c + c / 2, y0 + r * c + c / 2, v, { size: 19, weight: '700', fill: ACC });
      }
    }
    b += txt(x0 + 2.5 * c, y0 + 5 * c + 26, 'grid[2][1] holds &quot;C&quot; — two indices, so a two-dimensional array', { size: 11 });
    return fig(
      'A five by five game grid with row and column indices zero to four, containing the symbols X, M and C placed in an in-progress game.',
      'Rows <em>and</em> columns of one data type, addressed by two indices.',
      380, 290, b);
  })();

  /* ============================================================
     DLTV 2025
     ============================================================ */

  D['dltv-flowershop-dfd'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += entity(16, 96, 96, 44, 'Customer');
    b += proc(150, 22, 128, 44, 'order flowers');
    b += proc(150, 168, 128, 44, 'restock flowers');
    b += store(380, 30, 116, 26, 'Stock');
    b += store(380, 176, 116, 26, 'Suppliers');
    b += arrow(m, 114, 106, 148, 56, 'order', { lx: 131, ly: 80 });
    b += arrow(m, 114, 130, 148, 178, 'low_stock', { lx: 131, ly: 156 });
    b += arrow(m, 280, 44, 378, 44, 'stock_query', { lx: 329, ly: 32 });
    b += arrow(m, 280, 190, 378, 190, 'restock_order', { lx: 329, ly: 178 });
    b += arrow(m, 438, 60, 438, 174, 'order quantity', { color: BAD, dash: true, lx: 438, ly: 117 });
    b += txt(270, 248, 'the dashed flow runs store &#8594; store, with no process between them', { size: 11, fill: BAD });
    return fig(
      'Flower shop data flow diagram in which an order quantity flow runs directly between the Stock and Suppliers data stores, breaking a DFD rule.',
      'The fault to name: <strong>order quantity</strong> runs directly between two data stores. Every flow must begin and/or end at a process.',
      560, 264, b);
  })();

  D['dltv-usecase'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += boundary(112, 12, 400, 222, 'MyPuppySchool');
    b += actor(56, 56, 'Owner');
    b += actor(56, 150, 'Trainer');
    b += usecase(214, 74, 78, 24, ['Register /', 'update owner']);
    b += usecase(430, 74, 60, 24, 'Register dog');
    b += usecase(214, 142, 78, 24, ['Schedule', 'session']);
    b += usecase(214, 202, 78, 22, 'Book & pay');
    b += line(72, 78, 136, 78);
    b += line(72, 172, 136, 146);
    b += line(72, 166, 136, 86);
    b += arrow(m, 292, 74, 370, 74, '', { color: BAD, dash: true });
    b += txt(331, 54, '&#171;includes&#187;', { size: 10.5, fill: BAD });
    b += txt(300, 258, 'should be &#171;extends&#187;, with the arrow pointing the other way', { size: 11, fill: BAD });
    return fig(
      'MyPuppySchool use case diagram with Owner and Trainer actors, where the relationship between Register slash update owner and Register dog is incorrectly marked as includes.',
      'Registering an owner does not <em>always</em> register a dog — so the relationship is conditional. The arrow direction is wrong too.',
      620, 272, b);
  })();

  D['dltv-mockup'] = (function () {
    var b = '';
    b += '<rect x="70" y="10" width="200" height="300" rx="16" fill="var(--surface)" stroke="currentColor" stroke-width="1.6"/>';
    b += txt(170, 36, 'Register a dog', { size: 13, weight: '700' });
    var fields = [['Dog name', 56], ['Breed', 100], ['Size', 144]];
    fields.forEach(function (f) {
      b += txt(88, f[1] + 10, f[0], { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
      b += '<rect x="88" y="' + (f[1] + 18) + '" width="164" height="20" rx="4" fill="var(--surface-2)" stroke="var(--border-strong)"/>';
    });
    b += txt(88, 198, 'Date of birth', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    /* cramped calendar */
    for (var r = 0; r < 3; r++) for (var c2 = 0; c2 < 7; c2++) {
      b += '<rect x="' + (88 + c2 * 23) + '" y="' + (208 + r * 15) + '" width="21" height="13" fill="none" stroke="' + BAD + '" stroke-width="0.9"/>';
    }
    b += '<rect x="128" y="266" width="84" height="26" rx="13" fill="var(--accent)" />';
    b += txt(170, 279, 'Submit', { size: 11, weight: '700', fill: '#fff' });
    b += arrow(uid('ar'), 300, 224, 264, 224, '', {});
    b += defs('x');
    b += txt(400, 210, 'calendar targets are', { size: 11, fill: BAD });
    b += txt(400, 226, 'too small for a finger', { size: 11, fill: BAD });
    b += txt(400, 242, '&#8594; poor affordance', { size: 11, fill: BAD });
    return fig(
      'Mobile mock-up of a register-a-dog form with name, breed and size fields, a cramped calendar picker, and a submit button.',
      'Affordance is generally good — large buttons, nothing hidden — <em>except</em> the calendar, whose targets are too small to press accurately.',
      520, 320, b);
  })();

  /* ============================================================
     TSSM 2025
     ============================================================ */

  D['tssm-usecase'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += boundary(96, 12, 484, 232, 'The Odd Box system');
    b += actor(160, 52, 'Bailey', BAD);
    b += txt(160, 132, 'actor inside the boundary,', { size: 10.5, fill: BAD });
    b += txt(160, 148, 'and named as a person', { size: 10.5, fill: BAD });
    b += usecase(320, 70, 68, 22, 'View Reports');
    b += usecase(320, 140, 68, 22, 'Print Reports');
    b += usecase(320, 208, 70, 22, 'Classify produce');
    b += arrow(m, 320, 94, 320, 116, '', { color: ACC });
    b += txt(340, 105, 'B', { size: 13, weight: '700', fill: ACC });
    b += usecase(506, 208, 46, 22, 'Log entry');
    b += arrow(m, 392, 208, 458, 208, '', { color: ACC });
    b += txt(425, 194, 'A', { size: 13, weight: '700', fill: ACC });
    return fig(
      'The Odd Box use case diagram with an actor drawn inside the system boundary and labelled with a person name, plus two unlabelled relationships marked A and B.',
      'Two faults to name: the actor is <strong>inside</strong> the boundary, and it is labelled with a person&rsquo;s name rather than the role (&ldquo;Manager&rdquo;).',
      620, 260, b);
  })();

  D['tssm-mockups'] = (function () {
    var b = '';
    /* Mock-up 1 — constrained input */
    b += txt(140, 18, 'Mock-up 1', { size: 12, weight: '700' });
    b += '<rect x="20" y="30" width="240" height="190" rx="8" fill="var(--surface)" stroke="currentColor" stroke-width="1.4"/>';
    b += txt(40, 54, 'Produce type', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="40" y="62" width="200" height="22" rx="4" fill="var(--surface-2)" stroke="var(--border-strong)"/>';
    b += txt(228, 73, '&#9662;', { size: 12 });
    b += txt(50, 73, 'tomato', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += txt(40, 104, 'Shape', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="40" y="112" width="200" height="22" rx="4" fill="var(--surface-2)" stroke="var(--border-strong)"/>';
    b += txt(228, 123, '&#9662;', { size: 12 });
    b += txt(50, 123, 'uniform', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="40" y="152" width="13" height="13" rx="3" fill="none" stroke="currentColor"/>';
    b += txt(63, 159, 'Bruised', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="150" y="180" width="90" height="24" rx="12" fill="var(--accent)"/>';
    b += txt(195, 192, 'Classify', { size: 11, weight: '700', fill: '#fff' });
    b += txt(140, 240, 'dropdowns + checkbox restrict input', { size: 10.5, fill: 'var(--ok)' });
    /* Mock-up 2 — free text */
    b += txt(420, 18, 'Mock-up 2', { size: 12, weight: '700' });
    b += '<rect x="300" y="30" width="240" height="190" rx="8" fill="var(--surface)" stroke="currentColor" stroke-width="1.4"/>';
    [['Produce type', 54], ['Shape', 104], ['Bruised (Y/N)', 148]].forEach(function (f) {
      b += txt(320, f[1], f[0], { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
      b += '<rect x="320" y="' + (f[1] + 8) + '" width="200" height="22" rx="4" fill="var(--surface)" stroke="' + BAD + '"/>';
    });
    b += '<rect x="430" y="180" width="90" height="24" rx="12" fill="var(--accent)"/>';
    b += txt(475, 192, 'Classify', { size: 11, weight: '700', fill: '#fff' });
    b += txt(420, 240, 'free-text fields allow invalid entries', { size: 10.5, fill: BAD });
    return fig(
      'Two mock-ups of the produce classification screen side by side: the first using dropdowns and a checkbox, the second using free-text fields.',
      'The usability comparison the question wants: constrained controls prevent invalid and inconsistent data entry; free text does not.',
      560, 254, b);
  })();

  /* ============================================================
     VCAA 2022
     ============================================================ */

  D['y2022-dfd'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += entity(16, 40, 88, 36, 'purchaser');
    b += entity(16, 196, 88, 36, 'parent');
    b += entity(486, 118, 88, 36, 'purchaser');
    b += proc(146, 34, 96, 40, ['1. Enter', 'order item']);
    b += proc(146, 190, 96, 40, ['2. Check', 'balance']);
    b += proc(316, 34, 96, 40, ['3. Check', 'daily spend']);
    b += proc(316, 190, 96, 40, ['4. Update', 'order']);
    b += store(196, 118, 100, 24, 'menu');
    b += store(340, 118, 100, 24, 'account');
    b += arrow(m, 106, 52, 144, 50, 'order_request', { lx: 116, ly: 34 });
    b += arrow(m, 194, 74, 214, 116, 'available_items', { lx: 150, ly: 100 });
    b += arrow(m, 106, 210, 144, 210, 'balance_add', { lx: 118, ly: 194 });
    b += arrow(m, 242, 208, 314, 208, 'order_details');
    b += arrow(m, 242, 54, 314, 54, 'order_details');
    b += arrow(m, 380, 116, 380, 78, 'account_balance', { lx: 424, ly: 98 });
    b += arrow(m, 396, 74, 396, 116, 'spend_warning', { lx: 470, ly: 66 });
    b += arrow(m, 412, 206, 484, 150, 'order_confirmation', { lx: 470, ly: 196 });
    return fig(
      'Level 0 data flow diagram for the IszCool Canteen ordering module with purchaser and parent external entities, four processes, and menu and account data stores.',
      'IszCool Canteen, Level 0. Note that <em>purchaser</em> appears twice — duplicating an external entity for readability is allowed, and is one of the features the question asks you to judge.',
      590, 250, b);
  })();

  D['y2022-usecase'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += boundary(120, 12, 340, 252, 'IszCool Canteen ordering module');
    b += actor(60, 46, 'student', BAD);
    b += actor(60, 132, 'parent', BAD);
    b += actor(60, 212, 'canteen staff', BAD);
    b += usecase(232, 72, 68, 22, 'remove order');
    b += usecase(232, 146, 68, 22, 'update balance');
    b += usecase(232, 220, 68, 22, 'add item');
    b += usecase(398, 110, 52, 22, 'view orders');
    b += line(76, 68, 164, 72);
    b += line(76, 154, 164, 150);
    b += line(76, 234, 164, 220);
    b += arrow(m, 300, 220, 360, 126, '&#171;extends&#187;', { lx: 356, ly: 178 });
    b += '<rect x="214" y="102" width="36" height="18" rx="4" fill="none" stroke="' + ACC + '" stroke-dasharray="4 3"/>';
    b += txt(232, 111, '?', { size: 12, weight: '700', fill: ACC });
    b += txt(290, 292, 'part c: is remove order &#8594; update balance an &#171;includes&#187; or an &#171;extends&#187;?', { size: 11, fill: ACC });
    return fig(
      'IszCool Canteen use case diagram with student, parent and canteen staff actors and an unlabelled relationship between remove order and update balance.',
      'The actors are drawn as stick figures but sit outside the boundary — the error the question asks about is in how they are <em>represented</em>. The dashed box marks the relationship you must supply.',
      580, 306, b);
  })();

  D['y2022-mockups'] = (function () {
    var b = '';
    b += txt(140, 18, 'Mock-up A', { size: 12, weight: '700' });
    b += '<rect x="20" y="30" width="240" height="200" rx="8" fill="var(--surface)" stroke="currentColor" stroke-width="1.4"/>';
    b += txt(40, 52, 'Select language', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="40" y="60" width="120" height="20" rx="4" fill="var(--surface-2)" stroke="var(--border-strong)"/>';
    b += txt(50, 70, 'English', { size: 10, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += txt(150, 70, '&#9662;', { size: 11 });
    b += txt(40, 100, 'Select student', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="40" y="108" width="120" height="20" rx="4" fill="var(--surface-2)" stroke="var(--border-strong)"/>';
    b += txt(52, 118, 'Student A', { size: 10, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += txt(150, 118, '&#9662;', { size: 11 });
    b += txt(40, 150, 'Enter amount of money to add', { size: 10, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="40" y="158" width="120" height="20" rx="4" fill="var(--surface)" stroke="var(--border-strong)"/>';
    b += txt(48, 168, '$', { size: 10, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += txt(208, 70, 'Update balance', { size: 10, fill: BAD });
    b += txt(208, 116, 'Update payment', { size: 10, fill: BAD });
    b += txt(208, 129, 'details', { size: 10, fill: BAD });
    b += txt(140, 250, 'labels sit apart from their controls', { size: 10.5, fill: BAD });

    b += txt(420, 18, 'Mock-up B', { size: 12, weight: '700' });
    b += '<rect x="300" y="30" width="240" height="200" rx="8" fill="var(--surface)" stroke="currentColor" stroke-width="1.4"/>';
    b += txt(320, 52, 'Select student', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    ['A', 'B', 'C'].forEach(function (s, i) {
      b += '<rect x="' + (320 + i * 40) + '" y="60" width="32" height="22" rx="4" fill="var(--surface-2)" stroke="var(--border-strong)"/>';
      b += txt(336 + i * 40, 71, s, { size: 11 });
    });
    b += txt(320, 104, 'Select language', { size: 10.5, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="320" y="112" width="120" height="20" rx="4" fill="var(--surface-2)" stroke="var(--border-strong)"/>';
    b += txt(320, 152, 'Enter amount of money to add', { size: 10, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="320" y="160" width="120" height="20" rx="4" fill="var(--surface)" stroke="var(--border-strong)"/>';
    b += '<rect x="320" y="192" width="100" height="22" rx="11" fill="var(--accent)"/>';
    b += txt(370, 203, 'Confirm payment', { size: 9.5, weight: '700', fill: '#fff' });
    return fig(
      'Mock-up A and Mock-up B of the IszCool Canteen balance screen side by side, showing different label placement and control choices.',
      'Mock-up A places its action labels away from the controls they belong to, so the user cannot tell what each control does — the affordance failure the question asks you to name.',
      560, 264, b);
  })();

  /* ============================================================
     VCAA 2023
     ============================================================ */

  D['y2023-context'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += proc(340, 128, 200, 68, ['Translation and', 'transcription service'], ACC);
    b += entity(24, 140, 110, 44, 'user');
    b += entity(390, 22, 112, 40, 'user');
    b += arrow(m, 136, 148, 338, 148, 'personal_details', { lx: 237, ly: 141 });
    b += arrow(m, 338, 166, 136, 166, 'confirmation_email', { lx: 237, ly: 159 });
    b += arrow(m, 136, 184, 338, 184, 'verified_email_address', { lx: 237, ly: 177 });
    b += arrow(m, 416, 64, 416, 126, '');
    b += txt(356, 96, 'login_details', { size: 10.5 });
    b += arrow(m, 470, 126, 470, 64, '');
    b += txt(528, 96, 'login_status', { size: 10.5 });
    return fig(
      'Context diagram for the user profile and authentication module, with a user external entity exchanging personal details, confirmation email, verified email address, login details and login status with the service.',
      'The named flows here are what the Level 1 DFD question asks you to match its labels against.',
      700, 226, b);
  })();

  D['y2023-dfd'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += proc(150, 24, 110, 42, ['1. Check', 'username']);
    b += proc(150, 168, 110, 42, ['2. Authenticate', 'password']);
    b += store(330, 100, 130, 26, 'user database');
    b += '<rect x="22" y="34" width="76" height="30" rx="2" fill="none" stroke="' + ACC + '" stroke-width="1.6" stroke-dasharray="5 4"/>';
    b += txt(60, 49, 'A', { size: 14, weight: '700', fill: ACC });
    b += '<rect x="22" y="178" width="76" height="30" rx="2" fill="none" stroke="' + ACC + '" stroke-width="1.6" stroke-dasharray="5 4"/>';
    b += txt(60, 193, 'B', { size: 14, weight: '700', fill: ACC });
    b += '<rect x="330" y="212" width="130" height="30" rx="2" fill="none" stroke="' + ACC + '" stroke-width="1.6" stroke-dasharray="5 4"/>';
    b += txt(395, 227, 'C', { size: 14, weight: '700', fill: ACC });
    b += arrow(m, 100, 44, 148, 44, 'username');
    b += arrow(m, 148, 58, 100, 58, 'invalid_username', { lx: 124, ly: 76 });
    b += arrow(m, 205, 66, 205, 166, 'valid_username + password', { lx: 205, ly: 116 });
    b += arrow(m, 100, 190, 148, 190, 'password');
    b += arrow(m, 262, 178, 328, 126, 'hashed_password', { lx: 300, ly: 160 });
    b += arrow(m, 262, 196, 328, 226, '', {});
    return fig(
      'Partial Level 1 data flow diagram of the authentication process with two processes, a user database data store, and three unlabelled elements marked A, B and C.',
      'Supply A, B and C by matching them against the external entities and flows on the context diagram — the two diagrams must balance.',
      480, 256, b);
  })();

  D['y2023-designs'] = (function () {
    var b = '';
    b += txt(140, 18, 'Design A', { size: 12, weight: '700' });
    b += '<rect x="20" y="30" width="240" height="180" rx="8" fill="var(--surface)" stroke="currentColor" stroke-width="1.4"/>';
    b += '<rect x="20" y="30" width="240" height="24" rx="8" fill="var(--surface-2)"/>';
    ['File', 'Settings', 'Logout'].forEach(function (t, i) {
      b += txt(48 + i * 62, 43, t, { size: 10 });
    });
    b += txt(140, 74, 'Upload Source File', { size: 11, weight: '700' });
    b += txt(40, 100, 'Choose Source', { size: 10, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="40" y="108" width="200" height="20" rx="4" fill="var(--surface)" stroke="' + BAD + '"/>';
    b += txt(52, 118, 'Enter file path', { size: 9.5, anchor: 'start', fill: 'var(--text-faint)' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += txt(40, 148, 'Destination File', { size: 10, anchor: 'start' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="40" y="156" width="200" height="20" rx="4" fill="var(--surface)" stroke="' + BAD + '"/>';
    b += txt(52, 166, 'Enter file type', { size: 9.5, anchor: 'start', fill: 'var(--text-faint)' }).replace('text-anchor="middle"', 'text-anchor="start"');
    b += '<rect x="160" y="184" width="80" height="20" rx="10" fill="var(--accent)"/>';
    b += txt(200, 194, 'Transcribe', { size: 10, weight: '700', fill: '#fff' });
    b += txt(140, 230, 'typed paths and file types', { size: 10.5, fill: BAD });

    b += txt(420, 18, 'Design B', { size: 12, weight: '700' });
    b += '<rect x="300" y="30" width="240" height="180" rx="8" fill="var(--surface)" stroke="currentColor" stroke-width="1.4"/>';
    b += '<rect x="300" y="30" width="52" height="180" rx="8" fill="var(--surface-2)"/>';
    [['&#8962;', 56], ['&#9881;', 96], ['&#8631;', 136]].forEach(function (ic) {
      b += txt(326, ic[1], ic[0], { size: 15 });
    });
    b += txt(326, 190, '&#9099;', { size: 14 });
    b += txt(446, 66, 'Choose Source', { size: 11, weight: '700' });
    b += '<rect x="376" y="82" width="140" height="30" rx="6" fill="var(--surface-2)" stroke="var(--border-strong)" stroke-dasharray="4 3"/>';
    b += txt(446, 97, 'drop a file here', { size: 9.5, fill: 'var(--text-faint)' });
    b += txt(446, 130, 'Output Settings', { size: 11, weight: '700' });
    ['mp3', 'wav', 'm4a'].forEach(function (t, i) {
      b += '<rect x="' + (376 + i * 48) + '" y="142" width="42" height="20" rx="10" fill="var(--surface-2)" stroke="var(--border-strong)"/>';
      b += txt(397 + i * 48, 152, t, { size: 9.5 });
    });
    b += '<rect x="436" y="180" width="80" height="20" rx="10" fill="var(--accent)"/>';
    b += txt(476, 190, 'Transcribe', { size: 10, weight: '700', fill: '#fff' });
    b += txt(420, 230, 'icons + selection, minimal typing', { size: 10.5, fill: 'var(--ok)' });
    return fig(
      'Design A and Design B for the transcription module interface side by side; Design A uses typed text fields while Design B uses an icon rail, a drop zone and selectable output formats.',
      'Judge these against the three stated criteria: common layout conventions, standard symbols, and minimising typing across devices.',
      560, 244, b);
  })();

  /* ============================================================
     VCAA 2024
     ============================================================ */

  D['y2024-dfd'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += proc(196, 88, 128, 46, ['Check points', 'balance']);
    b += '<rect x="20" y="92" width="110" height="38" rx="2" fill="none" stroke="' + ACC + '" stroke-width="1.6" stroke-dasharray="5 4"/>';
    b += txt(75, 111, 'i.', { size: 14, weight: '700', fill: ACC });
    b += '<rect x="196" y="196" width="128" height="30" rx="2" fill="none" stroke="' + ACC + '" stroke-width="1.6" stroke-dasharray="5 4"/>';
    b += txt(260, 211, 'ii.', { size: 14, weight: '700', fill: ACC });
    b += store(370, 98, 120, 26, 'Customer Datastore');
    b += arrow(m, 132, 102, 194, 102, 'Customer ID', { lx: 163, ly: 88 });
    b += arrow(m, 194, 122, 132, 122, 'Points confirmation', { lx: 163, ly: 140 });
    b += arrow(m, 260, 134, 260, 194, '', {});
    b += arrow(m, 326, 111, 368, 111, '');
    return fig(
      'Partial data flow diagram for a points balance enquiry, with the external entity and one data flow left unlabelled and marked i and ii.',
      'Two labels to supply, then a judgement: is this a Level 0 or a Level 1 DFD, and what tells you?',
      520, 240, b);
  })();


  /* Parking payment use case — the second actor deliberately unlabelled */
  D['vcaa25-parking-uc'] = (function () {
    var m = uid('ar');
    var b = defs(m);
    b += boundary(120, 12, 356, 232, 'Parking payment application');
    b += actor(56, 52, 'Driver');
    b += actor(56, 152, '?', ACC);
    b += usecase(240, 68, 70, 22, 'Create account');
    b += usecase(240, 134, 70, 24, ['Check parking', 'status']);
    b += usecase(240, 200, 70, 24, ['Purchase /', 'increase time']);
    b += usecase(408, 134, 54, 24, ['Process', 'payment']);
    b += line(72, 74, 170, 68);
    b += line(72, 80, 170, 134);
    b += line(72, 86, 170, 200);
    b += line(72, 174, 170, 206);
    return fig(
      'Parking payment application use case diagram with a labelled Driver actor and a second, unlabelled actor marked with a question mark.',
      'Actors are <strong>roles</strong>. Work out what the unlabelled one must be from what the stem says each group can do.',
      560, 254, b);
  })();

  /* Four candidate relationship layouts for the parking use case */
  function ucOption(rel, dir, both) {
    var m = uid('ar');
    var b = defs(m);
    b += usecase(60, 32, 50, 22, ['Purchase', 'time']);
    b += usecase(60, 104, 50, 22, ['Increase', 'time']);
    b += usecase(292, 68, 46, 22, ['Process', 'payment']);
    var lbl = '&#171;' + rel + '&#187;';
    if (dir === 'fwd') {
      if (both) b += arrow(m, 112, 38, 244, 60, lbl, { color: ACC, lx: 178, ly: 26 });
      b += arrow(m, 112, 108, 244, 84, lbl, { color: ACC, lx: 178, ly: 122 });
    } else {
      if (both) b += arrow(m, 244, 60, 112, 38, lbl, { color: ACC, lx: 178, ly: 26 });
      b += arrow(m, 244, 84, 112, 108, lbl, { color: ACC, lx: 178, ly: 122 });
    }
    return fig('Use case relationship option', '', 380, 146, b, 'opt-diagram');
  }
  D['uc-opt-a'] = ucOption('extends', 'fwd', false);
  D['uc-opt-b'] = ucOption('includes', 'fwd', true);
  D['uc-opt-c'] = ucOption('extends', 'fwd', true);
  D['uc-opt-d'] = ucOption('includes', 'rev', true);

  global.DIAGRAMS = D;
})(window);
