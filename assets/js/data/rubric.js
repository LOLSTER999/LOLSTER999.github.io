/* ============================================================
   VCE Software Development — Unit 4 Outcome 2
   School-assessed coursework performance descriptors
   ------------------------------------------------------------
   Transcribed from the Virtual School Victoria performance
   descriptors sheet. Referenced from markdown as @[sac-rubric]
   (full interactive grid) or @[sac-rubric-KS1] (one row).

   The grid is rendered as a real table with data-band attributes;
   app.js attaches one delegated click handler so the band filter
   keeps working across re-renders.
   ============================================================ */

(function (global) {
  'use strict';

  var BANDS = [
    { id: 'vlow',  label: 'Very low',  marks: '1–20'   },
    { id: 'low',   label: 'Low',       marks: '21–40'  },
    { id: 'med',   label: 'Medium',    marks: '41–60'  },
    { id: 'high',  label: 'High',      marks: '61–80'  },
    { id: 'vhigh', label: 'Very high', marks: '81–100' }
  ];

  var SECTIONS = [
    {
      title: "An analysis of the organisation's software development practices",
      skills: [
        {
          id: 'KS1',
          skill: "analyse and describe an organisation's software development practices",
          cells: {
            vlow: ['Identifies the goals of the organisation.',
                   'Identifies the current security controls used to protect software development practices.'],
            low:  ['Outlines the goals and objectives of the organisation.',
                   'Outlines the current security controls used to protect software development practices and data stored within the applications.'],
            med:  ['Explains the advantages and disadvantages of developing software in-house or externally.',
                   'Describes how the current security controls and threat modelling principles are used to protect software development practices and the data stored within the applications.'],
            high: ["Explains the organisation's current software development practices, including the use of security controls and threat modelling principles."],
            vhigh:["Analyses how the organisation's current software development practices, including the use of security controls and threat modelling principles, support goals and objectives."]
          },
          lift: 'Stop listing controls and start showing how they serve the business. A High answer explains the practices; a Very High answer ties every one of them back to a goal or objective you named earlier.'
        },
        {
          id: 'KS2',
          skill: 'identify and describe vulnerabilities and risks based on current practices',
          cells: {
            vlow: ['Identifies vulnerabilities based on current practices.'],
            low:  ['Outlines vulnerabilities and risks based on current practices.'],
            med:  ['Discusses how the identified vulnerabilities and risks compromise software development and the data stored within applications.'],
            high: ['Explains the nature of the vulnerabilities and risks and how they compromise software development practices.'],
            vhigh:['Describes how the identified vulnerabilities and risks could impact/have impacted the organisation as a result of compromised software development practices.']
          },
          lift: 'Push past naming the weakness to naming the damage. Very High answers land on consequences the organisation actually suffers — lost revenue, breach notification, a stalled release — not just "data could be exposed".'
        }
      ]
    },
    {
      title: 'An evaluation of the current security controls and threats',
      skills: [
        {
          id: 'KS3',
          skill: 'propose and apply criteria to evaluate the effectiveness of the current software development practices',
          cells: {
            vlow: ['Identifies effectiveness measures that can be used to evaluate current software development practices.'],
            low:  ['Outlines criteria to evaluate the effectiveness of the current software development practices.'],
            med:  ['Proposes relevant criteria to evaluate the effectiveness of the current software development practices.',
                   'Describes how relevant criteria can be measured to evaluate the effectiveness of the current software development practices.'],
            high: ['Applies appropriate criteria to evaluate the effectiveness of the current software development practices.'],
            vhigh:['Applies a set of criteria to accurately evaluate and measure the effectiveness of the current software development practices.',
                   'Documents the findings clearly.']
          },
          lift: 'The jump from Medium to High is the word <strong>applies</strong>. Medium proposes criteria and says how they could be measured; High actually runs them against the case study and reaches a verdict. Very High adds a documented, measured result — a table with a finding in every row.'
        },
        {
          id: 'KS4',
          skill: 'identify and discuss the possible legal and ethical consequences to an organisation for ineffective software development practices, and how these could be resolved',
          cells: {
            vlow: ['Identifies legal issues relating to ineffective software development practices.'],
            low:  ['Outlines the relevant legal issues and consequences arising from ineffective software development practices.',
                   'Outlines the key legislation and industry frameworks relevant to the organisation.'],
            med:  ['Discusses the relevance of the key legislation and industry frameworks to the organisation.',
                   'Identifies ethical issues arising due to the actions of the organisation.',
                   'Identifies possible resolutions to the identified legal and ethical consequences.'],
            high: ['Discusses possible legal and ethical consequences that have arisen due to the actions of the organisation.',
                   'Proposes resolutions to the identified legal and ethical consequences.'],
            vhigh:['Discusses viable resolutions to identified legal and ethical consequences, with reference to relevant key legislation and industry frameworks.']
          },
          lift: 'Two halves, and most students do only one. Legal <em>and</em> ethical. Then resolutions that are <strong>viable</strong> — something this organisation could actually do — each named back to the Act or framework that requires it.'
        }
      ]
    },
    {
      title: 'Recommendations to improve practices',
      skills: [
        {
          id: 'KS5',
          skill: 'recommend and justify improvements to organisations and their development environments to enhance secure software development practices',
          cells: {
            vlow: ['Identifies mitigation methods, including security controls, to reduce or eliminate threats, vulnerabilities and risks to the organisation and their development environment to improve software development practices.'],
            low:  ['Outlines mitigation methods, including security controls, to reduce or eliminate threats, vulnerabilities and risks to the organisation and their development environment to improve software development practices.'],
            med:  ['Recommends and describes feasible mitigation methods to enhance secure software development practices, including: security controls, threat modelling principles, improvement strategies.',
                   'References how the enhanced practices enable the organisation to meet legal obligations.'],
            high: ['Analyses the impact of new mitigation methods to enhance secure software development practices, including: security controls, threat modelling principles, improvement strategies.',
                   'References how the enhanced practices enable the organisation to meet its goals and objectives.'],
            vhigh:['Justifies the use of new mitigation methods to enhance secure software development practices, including: security controls, threat modelling principles, improvement strategies.',
                   'References how the enhanced practices enable the organisation to meet relevant industry frameworks.']
          },
          lift: 'All three top bands want the same three ingredients — security controls, threat modelling principles, improvement strategies. What changes is what you tie them to: <strong>Medium → legal obligations</strong>, <strong>High → the organisation’s goals and objectives</strong>, <strong>Very High → industry frameworks</strong> (Essential Eight, ISM). Hit all three and you have covered every band above Low.'
        }
      ]
    }
  ];

  var OUTCOME = 'On completion of this unit the student should be able to respond to a teacher-provided case study to analyse an organisation’s software development practices, identify and evaluate current security controls and threats to software development practices, and make recommendations to improve practices.';

  /* ---------------- rendering ---------------- */

  function esc(s) {
    return String(s).replace(/&(?![a-z#0-9]+;)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function cellHtml(lines) {
    if (!lines || !lines.length) return '<span class="rb-empty">—</span>';
    return lines.map(function (l) { return '<p>' + esc(l) + '</p>'; }).join('');
  }

  function bandHead() {
    return '<tr><th class="rb-skill-head">Key skill</th>' +
      BANDS.map(function (b) {
        return '<th class="rb-band rb-' + b.id + '"><span class="rb-band-label">' + b.label + '</span>' +
               '<span class="rb-band-marks">' + b.marks + '</span></th>';
      }).join('') + '</tr>';
  }

  function skillRow(sk) {
    return '<tr data-skill="' + sk.id + '">' +
      '<th class="rb-skill"><span class="rb-ks">' + sk.id + '</span>' + esc(sk.skill) + '</th>' +
      BANDS.map(function (b) {
        return '<td class="rb-cell rb-' + b.id + '" data-band="' + b.id + '">' + cellHtml(sk.cells[b.id]) + '</td>';
      }).join('') + '</tr>';
  }

  function liftRow(sk) {
    return '<tr class="rb-lift-row" data-skill="' + sk.id + '"><td colspan="6">' +
      '<strong>Moving up a band &middot; ' + sk.id + '</strong> ' + sk.lift + '</td></tr>';
  }

  function grid(opts) {
    opts = opts || {};
    var only = opts.only;
    var showLift = opts.lift !== false;

    var html = '<div class="rubric" data-active-band="">';

    html += '<div class="rubric-controls">' +
      '<span class="rubric-controls-label">Highlight a band:</span>' +
      '<button type="button" class="rb-btn is-on" data-band-btn="">All</button>' +
      BANDS.map(function (b) {
        return '<button type="button" class="rb-btn rb-btn-' + b.id + '" data-band-btn="' + b.id + '">' +
               b.label + '</button>';
      }).join('') +
      '</div>';

    html += '<div class="table-wrap rubric-wrap"><table class="rubric-table">';
    html += '<thead>' + bandHead() + '</thead>';

    SECTIONS.forEach(function (sec) {
      var skills = only ? sec.skills.filter(function (s) { return s.id === only; }) : sec.skills;
      if (!skills.length) return;
      html += '<tbody class="rb-section">';
      if (!only) {
        html += '<tr class="rb-section-head"><td colspan="6">' + esc(sec.title) + '</td></tr>';
      }
      skills.forEach(function (sk) {
        html += skillRow(sk);
        if (showLift) html += liftRow(sk);
      });
      html += '</tbody>';
    });

    html += '</table></div>';
    html += '<p class="rubric-hint">\u2194 Scroll the grid sideways, or pick a single band above to read just that column.</p>';
    html += '<p class="rubric-key"><strong>Marking scale</strong> — the outcome contributes <strong>100 marks</strong>: ' +
      BANDS.map(function (b) { return b.label + ' ' + b.marks; }).join(' &middot; ') + '</p>';
    html += '</div>';
    return html;
  }

  var R = {};
  R['sac-rubric'] = grid();
  SECTIONS.forEach(function (sec) {
    sec.skills.forEach(function (sk) {
      R['sac-rubric-' + sk.id] = grid({ only: sk.id });
    });
  });

  R['sac-outcome'] = '<figure class="diagram outcome-box"><blockquote class="outcome-quote">' +
    '<span class="outcome-label">Unit 4 Outcome 2</span>' + esc(OUTCOME) +
    '</blockquote></figure>';

  global.RUBRIC = R;
  global.RUBRIC_DATA = { bands: BANDS, sections: SECTIONS, outcome: OUTCOME };
})(window);
