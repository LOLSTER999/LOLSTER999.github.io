/* Tiny markdown subset renderer.
   Supports: ## / ### headings, paragraphs, - and 1. lists (with wrapped
   continuation lines and one level of nesting), ``` or ~~~ fenced code,
   | tables |, > callouts (> [tip] / > [warn] / > [exam]) with lazy
   continuation, inline **bold**, *italic*, `code`, [text](url).
   Deliberately small: content is authored by us, not user-supplied. */
(function (global) {
  'use strict';

  var ITEM_ANY  = /^([-*]|\d+[.)])\s+/;
  var BLOCK_ANY = /^(#{2,4}\s|```|~~~|>\s?|[-*]\s|\d+[.)]\s|@\[[\w-]+\]\s*$)/;

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function inline(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, function (_, c) { return '<code>' + c + '</code>'; })
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  }

  function tableRow(line) {
    return line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(function (c) { return c.trim(); });
  }

  function dedent(lines) {
    var indents = lines.filter(function (l) { return l.trim(); })
                       .map(function (l) { return l.match(/^ */)[0].length; });
    var base = indents.length ? Math.min.apply(null, indents) : 0;
    return base ? lines.map(function (l) { return l.slice(base); }) : lines;
  }

  function render(src) {
    if (!src) return '';
    var lines = dedent(String(src).replace(/\r\n/g, '\n').split('\n'));
    var out = [];
    var i = 0;

    function listBlock(ordered) {
      var tag = ordered ? 'ol' : 'ul';
      var startRe = ordered ? /^\d+[.)]\s+(.*)$/ : /^[-*]\s+(.*)$/;
      var nestRe = /^\s+([-*]|\d+[.)])\s+(.*)$/;
      var items = [];

      while (i < lines.length) {
        var line = lines[i];

        if (!line.trim()) {
          // A blank line only continues the list if another item of the same
          // kind follows at column 0; otherwise the list is finished.
          var j = i + 1;
          while (j < lines.length && !lines[j].trim()) j++;
          if (j < lines.length && !/^\s/.test(lines[j]) && startRe.test(lines[j])) { i = j; continue; }
          break;
        }

        var m = (!/^\s/.test(line)) && line.match(startRe);
        if (m) { items.push({ text: m[1], children: [] }); i++; continue; }

        if (!items.length) break;
        var last = items[items.length - 1];

        var nm = line.match(nestRe);
        if (nm) { last.children.push(nm[2]); i++; continue; }

        // Anything else that is not the start of another block is a wrapped
        // continuation of the current item (markdown's lazy continuation).
        if (/^\s/.test(line) || !BLOCK_ANY.test(line)) {
          if (last.children.length) last.children[last.children.length - 1] += ' ' + line.trim();
          else last.text += ' ' + line.trim();
          i++;
          continue;
        }

        break;
      }

      return '<' + tag + '>' + items.map(function (it) {
        return '<li>' + inline(it.text) +
          (it.children.length
            ? '<ul>' + it.children.map(function (c) { return '<li>' + inline(c) + '</li>'; }).join('') + '</ul>'
            : '') +
          '</li>';
      }).join('') + '</' + tag + '>';
    }

    while (i < lines.length) {
      var line = lines[i];

      if (!line.trim()) { i++; continue; }

      // Diagram reference: a line of the form @[diagram-id] expands to the
      // inline SVG figure registered in DIAGRAMS (see data/diagrams.js).
      var dref = line.match(/^@\[([\w-]+)\]\s*$/);
      if (dref) {
        var fig = (global.DIAGRAMS || {})[dref[1]];
        out.push(fig || '<p class="diagram-missing">[missing diagram: ' + esc(dref[1]) + ']</p>');
        i++;
        continue;
      }

      // Fenced code (``` or ~~~ — the latter keeps JS template literals readable)
      if (/^(```|~~~)/.test(line)) {
        var fence = line.slice(0, 3);
        i++;
        var buf = [];
        while (i < lines.length && lines[i].slice(0, 3) !== fence) { buf.push(lines[i]); i++; }
        i++;
        out.push('<pre><code>' + esc(buf.join('\n')) + '</code></pre>');
        continue;
      }

      // Headings
      var h = line.match(/^(#{2,4})\s+(.*)$/);
      if (h) {
        out.push('<h' + h[1].length + '>' + inline(h[2]) + '</h' + h[1].length + '>');
        i++;
        continue;
      }

      // Callout / blockquote — absorbs wrapped lines that carry no ">" marker
      if (/^>\s?/.test(line)) {
        var cbuf = [];
        while (i < lines.length) {
          if (/^>\s?/.test(lines[i])) { cbuf.push(lines[i].replace(/^>\s?/, '')); i++; continue; }
          if (lines[i].trim() && !BLOCK_ANY.test(lines[i]) && !/^\s*\|/.test(lines[i])) {
            cbuf.push(lines[i]); i++; continue;
          }
          break;
        }
        var cls = '';
        var kind = (cbuf[0] || '').match(/^\[(tip|warn|exam)\]\s*/i);
        if (kind) { cls = ' ' + kind[1].toLowerCase(); cbuf[0] = cbuf[0].slice(kind[0].length); }
        out.push('<div class="callout' + cls + '">' + render(cbuf.join('\n')) + '</div>');
        continue;
      }

      // Table
      if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
        var head = tableRow(line);
        i += 2;
        var rows = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) { rows.push(tableRow(lines[i])); i++; }
        out.push('<div class="table-wrap"><table><thead><tr>' +
          head.map(function (c) { return '<th>' + inline(c) + '</th>'; }).join('') +
          '</tr></thead><tbody>' +
          rows.map(function (r) {
            return '<tr>' + r.map(function (c) { return '<td>' + inline(c) + '</td>'; }).join('') + '</tr>';
          }).join('') +
          '</tbody></table></div>');
        continue;
      }

      // Lists
      if (/^[-*]\s+/.test(line)) { out.push(listBlock(false)); continue; }
      if (/^\d+[.)]\s+/.test(line)) { out.push(listBlock(true)); continue; }

      // Paragraph
      var pbuf = [];
      while (i < lines.length && lines[i].trim() &&
             !BLOCK_ANY.test(lines[i]) && !/^\s*\|/.test(lines[i])) {
        pbuf.push(lines[i].trim());
        i++;
      }
      if (pbuf.length) out.push('<p>' + inline(pbuf.join(' ')) + '</p>');
      else i++;
    }

    return out.join('\n');
  }

  function stripMd(src) {
    return String(src || '')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/~~~[\s\S]*?~~~/g, ' ')
      .replace(/^@\[[\w-]+\]\s*$/gm, ' ')
      .replace(/^[ \t]*[>#]+[ \t]*/gm, ' ')     // blockquote / heading markers
      .replace(/^[ \t]*[-*][ \t]+/gm, ' ')      // list bullets
      .replace(/\[(tip|warn|exam)\]/gi, ' ')    // callout kind markers
      .replace(/[*`|]/g, '')                    // emphasis, code, table pipes
      .replace(/\s+/g, ' ')
      .trim();
  }

  global.md = { render: render, strip: stripMd, escape: esc, inline: inline };
})(window);
