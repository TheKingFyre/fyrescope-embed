/* FyreScope live Santa line card for mall websites.
   Usage: <div data-fyl-card data-location="st-laurent" data-lang="en|fr" data-theme="dark|light|red"></div>
   Several cards on one page share one request. */
(function () {
  if (window.__flcCard) { window.__flcCard.scan(); return; }

  var API_URL = 'https://script.google.com/macros/s/AKfycbw3ei9QFSzZbjwxArn-OFk4Jk_VXMkXQQdlqYwo6fnpWbevo3cnk60DIzqmEnCmrlXYBA/exec';
  var CREDIT = { text: 'FyreScope Studios', url: '' }; // set url to link the credit, e.g. 'https://fyrescope.ca'
  var TZ = 'America/Toronto';
  var REFRESH_MS = 120000, RETRY_MS = 3000, MAX_TRIES = 3, TIMEOUT_MS = 10000;
  var CSS = ".flc-host { display: block; container: flc / inline-size; width: 100%; max-width: 760px; margin: 0 auto; padding: 0 }\n.flc-host.flc-fill { max-width: none; height: 100% }\n.flc {\n  --flc-bg: #123a49;\n  --flc-text: #f8f8f8;\n  --flc-quiet: #b9c8cc;\n  --flc-eyebrow: #d4af76;\n  --flc-rule: #ffffff1f;\n  --flc-foot-bg: #0e3140;\n  --flc-open: #6fb7c6;\n  --flc-break: #d4af76;\n  --flc-lineclosed: #b3184a;\n  --flc-closed: #4e6b75;\n  --flc-break-text: #e4c18a;\n  --flc-serif: 'Source Serif 4', 'Source Serif Pro', 'Iowan Old Style', Baskerville, 'Palatino Linotype', Georgia, serif;\n  --flc-sans: Inter, 'Avenir Next', 'Segoe UI Variable', 'Segoe UI', system-ui, Arial, sans-serif;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: var(--flc-bg);\n  color: var(--flc-text);\n  border: 0;\n  border-radius: 0;\n  overflow: hidden;\n  font: 400 15px/1.5 var(--flc-sans);\n  -webkit-font-smoothing: antialiased;\n  text-align: left;\n  letter-spacing: normal;\n  text-transform: none\n}\n.flc.flc-light {\n  --flc-bg: #ffffff;\n  --flc-text: #123a49;\n  --flc-quiet: #4e626b;\n  --flc-eyebrow: #710627;\n  --flc-rule: #d4dadb;\n  --flc-foot-bg: #f3f1ec;\n  --flc-open: #0b596b;\n  --flc-break: #d4af76;\n  --flc-lineclosed: #710627;\n  --flc-closed: #b9c4c6;\n  --flc-break-text: #8a6a2f;\n  border: 1px solid #c4cbcb;\n  box-shadow: 0 13px 35px #0b283317\n}\n.flc.flc-red {\n  --flc-bg: #710627;\n  --flc-text: #fbf6f3;\n  --flc-quiet: #e8c6cd;\n  --flc-eyebrow: #d4af76;\n  --flc-rule: #ffffff26;\n  --flc-foot-bg: #5c0420;\n  --flc-open: #f8f8f8;\n  --flc-break: #d4af76;\n  --flc-lineclosed: #2a0412;\n  --flc-closed: #a2566b;\n  --flc-break-text: #e4c18a\n}\n.flc.flc-red.is-lineclosed .flc-dot { background: #e8c6cd }\n.flc-fill .flc { height: 100% }\n.flc *, .flc *::before, .flc *::after { box-sizing: border-box }\n.flc [hidden] { display: none !important }\n.flc p, .flc span, .flc strong, .flc a {\n  margin: 0; padding: 0; border: 0; background: none; letter-spacing: normal; text-transform: none;\n  font-family: inherit; font-size: inherit; font-weight: inherit; line-height: inherit; color: inherit; text-decoration: none\n}\n.flc::before { content: \"\"; position: absolute; inset: 0 auto 0 0; width: 4px; background: var(--flc-accent, var(--flc-closed)) }\n.flc.is-open { --flc-accent: var(--flc-open) }\n.flc.is-break { --flc-accent: var(--flc-break) }\n.flc.is-lineclosed { --flc-accent: var(--flc-lineclosed) }\n.flc .flc-body { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 12px; padding: 20px 26px 18px 30px }\n.flc .flc-top { display: flex; align-items: center; justify-content: space-between; gap: 12px }\n.flc .flc-eyebrow { font-size: 11px; line-height: 1.4; font-weight: 750; letter-spacing: .17em; text-transform: uppercase; color: var(--flc-eyebrow) }\n.flc .flc-live { display: inline-flex; align-items: center; gap: 7px; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--flc-quiet) }\n.flc .flc-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--flc-accent); flex: none; animation: flc-pulse 2s ease-in-out infinite }\n.flc .flc-main { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 6px 26px }\n.flc .flc-big { display: flex; align-items: baseline; flex-wrap: wrap; gap: 0 10px; line-height: 1; white-space: nowrap }\n.flc .flc-num { font: 500 54px/1 var(--flc-serif); letter-spacing: -.035em }\n.flc .flc-unit { font-size: 15px; font-weight: 600; color: var(--flc-quiet); margin-left: 4px }\n.flc .flc-word { font: 500 38px/1.05 var(--flc-serif); letter-spacing: -.025em }\n.flc.is-break .flc-word { color: var(--flc-break-text) }\n.flc.is-closed .flc-big { opacity: .6 }\n.flc .flc-copy { min-width: 0; padding-left: 26px; border-left: 1px solid var(--flc-rule) }\n.flc .flc-sub {\n  font-size: 14.5px; line-height: 1.4; font-weight: 500; color: var(--flc-text);\n  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden\n}\n.flc .flc-updated { display: block; margin-top: 3px; font-size: 12px; line-height: 1.4; color: var(--flc-quiet) }\n.flc .flc-foot {\n  display: flex; justify-content: space-between; align-items: center; gap: 4px 16px;\n  padding: 8px 26px 8px 30px; background: var(--flc-foot-bg); border-top: 1px solid var(--flc-rule);\n  font-size: 11px; line-height: 1.5; color: var(--flc-quiet)\n}\n.flc .flc-foot a:hover { text-decoration: underline }\n.flc .flc-credit { margin-left: auto; white-space: nowrap; font-weight: 600 }\n.flc .flc-skel {\n  display: block; background: linear-gradient(90deg, #ffffff14 25%, #ffffff29 50%, #ffffff14 75%);\n  background-size: 200% 100%; animation: flc-shimmer 1.5s infinite\n}\n.flc.flc-light .flc-skel { background-image: linear-gradient(90deg, #e4e8e7 25%, #f0f2f1 50%, #e4e8e7 75%) }\n.flc .flc-skel.s-big { width: 120px; height: 50px }\n.flc .flc-skel.s-sub { width: 200px; height: 18px }\n@keyframes flc-pulse { 0%, 100% { opacity: 1 } 50% { opacity: .35 } }\n@keyframes flc-shimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }\n@media (prefers-reduced-motion: reduce) { .flc .flc-dot, .flc .flc-skel { animation: none } }\n@container flc (max-width: 480px) {\n  .flc .flc-body { gap: 10px; padding: 16px 18px 14px 22px }\n  .flc .flc-main { grid-template-columns: 1fr; gap: 6px }\n  .flc .flc-copy { padding-left: 0; border-left: 0 }\n  .flc .flc-num { font-size: 46px }\n  .flc .flc-word { font-size: 31px }\n  .flc .flc-sub { font-size: 14px }\n  .flc .flc-foot { padding: 7px 18px 7px 22px }\n  .flc .flc-foot .flc-note { display: none }\n}";

  var T = {
    en: {
      eyebrow: 'Visit Santa', live: 'Live', hr: 'hr', min: 'min',
      wait: 'Current wait to see Santa',
      noWait: ['No wait', 'Come on over to see Santa'],
      open: ['Open', 'Santa is here today'],
      brk: ['On break', 'Santa will be right back'],
      lineClosed: ['Line closed', 'Closed for today so everyone already in line can see Santa'],
      closed: ['Closed', 'Santa isn’t in right now'],
      error: ['—', 'Live wait times aren’t available right now'],
      updated: function (t) { return 'Updated ' + t; },
      updatedOn: function (d) { return 'Updated ' + d; },
      note: 'Estimates · refreshes every 2 min',
      locale: 'en-US'
    },
    fr: {
      eyebrow: 'Visite au père Noël', live: 'En direct', hr: 'h', min: 'min',
      wait: 'Attente actuelle pour voir le père Noël',
      noWait: ['Aucune attente', 'Venez voir le père Noël dès maintenant'],
      open: ['Ouvert', 'Le père Noël est ici aujourd’hui'],
      brk: ['En pause', 'Le père Noël revient sous peu'],
      lineClosed: ['File fermée', 'Fermée pour aujourd’hui afin que tous ceux déjà en file puissent voir le père Noël'],
      closed: ['Fermé', 'Le père Noël n’est pas ici en ce moment'],
      error: ['—', 'Les temps d’attente ne sont pas disponibles pour le moment'],
      updated: function (t) { return 'Mis à jour à ' + t; },
      updatedOn: function (d) { return 'Mis à jour le ' + d; },
      note: 'Temps estimés · actualisé toutes les 2 min',
      locale: 'fr-CA'
    }
  };

  var hosts = [];
  var state = { data: null, okAt: 0, failed: false, busy: false };
  var cbSeq = 0;

  function slug(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function injectCss() {
    if (document.getElementById('flc-style')) return;
    var s = document.createElement('style');
    s.id = 'flc-style';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function describe(loc, t) {
    if (!loc) return { cls: 'is-closed', word: t.error[0], sub: t.error[1] };
    var status = String(loc.status || '').toUpperCase();
    var mins = Math.max(0, Math.round(Number(loc.waitMinutes) || 0));
    if (status === 'OPEN') {
      if (mins === 0) {
        var w = loc.updateSource === 'AUTO' ? t.open : t.noWait;
        return { cls: 'is-open', word: w[0], sub: w[1], active: true };
      }
      var parts = mins >= 60
        ? [[Math.floor(mins / 60), t.hr]].concat(mins % 60 ? [[mins % 60, t.min]] : [])
        : [[mins, t.min]];
      return { cls: 'is-open', parts: parts, sub: t.wait, active: true };
    }
    if (status === 'BREAK') return { cls: 'is-break', word: t.brk[0], sub: t.brk[1], active: true };
    if (status === 'LINECLOSED') return { cls: 'is-lineclosed', word: t.lineClosed[0], sub: t.lineClosed[1], active: true };
    return { cls: 'is-closed', word: t.closed[0], sub: t.closed[1] };
  }

  function formatUpdated(ts, t) {
    if (!ts) return '';
    var d = new Date(ts);
    if (isNaN(d)) return '';
    var day = function (x) { return x.toLocaleDateString('en-CA', { timeZone: TZ }); };
    if (day(d) === day(new Date())) {
      return t.updated(d.toLocaleTimeString(t.locale, { timeZone: TZ, hour: 'numeric', minute: '2-digit' }));
    }
    return t.updatedOn(d.toLocaleDateString(t.locale, { timeZone: TZ, month: 'short', day: 'numeric' }));
  }

  function build(host) {
    var lang = (host.getAttribute('data-lang') || document.documentElement.lang || 'en').slice(0, 2).toLowerCase();
    var t = T[lang] || T.en;
    var themeName = host.getAttribute('data-theme');
    var theme = (themeName === 'light' || themeName === 'red') ? ' flc-' + themeName : '';
    host.classList.add('flc-host');
    if (host.hasAttribute('data-fill')) host.classList.add('flc-fill');
    host.innerHTML = '';

    var root = host.appendChild(el('section', 'flc is-closed' + theme));
    root.setAttribute('aria-label', t.wait);
    var body = root.appendChild(el('div', 'flc-body'));
    var top = body.appendChild(el('div', 'flc-top'));
    top.appendChild(el('p', 'flc-eyebrow', t.eyebrow));
    var live = top.appendChild(el('span', 'flc-live'));
    live.appendChild(el('span', 'flc-dot'));
    live.appendChild(document.createTextNode(t.live));
    live.hidden = true;

    var main = body.appendChild(el('div', 'flc-main'));
    var big = main.appendChild(el('p', 'flc-big'));
    big.appendChild(el('span', 'flc-skel s-big'));
    var copy = main.appendChild(el('div', 'flc-copy'));
    copy.setAttribute('aria-live', 'polite');
    var sub = copy.appendChild(el('p', 'flc-sub'));
    sub.appendChild(el('span', 'flc-skel s-sub'));
    var upd = copy.appendChild(el('span', 'flc-updated'));

    var foot = root.appendChild(el('div', 'flc-foot'));
    var note = foot.appendChild(el('span', 'flc-note', t.note));
    note.hidden = true;
    var credit = foot.appendChild(el(CREDIT.url ? 'a' : 'span', 'flc-credit', CREDIT.text));
    if (CREDIT.url) { credit.href = CREDIT.url; credit.target = '_blank'; credit.rel = 'noopener'; }

    host._flc = { loc: slug(host.getAttribute('data-location')), t: t, root: root, live: live, big: big, sub: sub, upd: upd, note: note, theme: theme };
  }

  function render(host) {
    var h = host._flc;
    if (!h || (!state.data && !state.failed)) return;
    var loc = null;
    (state.data || []).forEach(function (l) { if (slug(l.location) === h.loc) loc = l; });
    var d = describe(loc, h.t);

    h.root.className = 'flc ' + d.cls + h.theme;
    h.live.hidden = !d.active;
    h.note.hidden = !d.active;

    h.big.innerHTML = '';
    if (d.parts) {
      d.parts.forEach(function (p) {
        var g = h.big.appendChild(el('span'));
        g.appendChild(el('span', 'flc-num', String(p[0])));
        g.appendChild(el('span', 'flc-unit', p[1]));
      });
    } else {
      h.big.appendChild(el('span', 'flc-word', d.word));
    }
    h.sub.textContent = d.sub;
    // On a failed refresh the last good data stays up; its "Updated" time shows how old it is.
    h.upd.textContent = d.active && loc ? formatUpdated(loc.lastUpdated, h.t) : '';
  }

  function renderAll() { hosts.forEach(render); }

  function viaFetch() {
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, TIMEOUT_MS);
    return fetch(API_URL + '?t=' + Date.now(), { cache: 'no-store', signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) { clearTimeout(timer); if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); },
            function (e) { clearTimeout(timer); throw e; });
  }

  function viaJsonp() {
    return new Promise(function (resolve, reject) {
      var name = '__flcCb' + (++cbSeq) + '_' + Date.now();
      var s = document.createElement('script');
      var done = false;
      var timer = setTimeout(function () { finish(); reject(new Error('timeout')); }, TIMEOUT_MS);
      function finish() {
        done = true; clearTimeout(timer);
        if (s.parentNode) s.parentNode.removeChild(s);
        window[name] = function () {};
      }
      window[name] = function (data) { if (done) return; finish(); resolve(data); };
      s.onerror = function () { if (done) return; finish(); reject(new Error('load error')); };
      s.src = API_URL + '?callback=' + name + '&t=' + Date.now();
      document.head.appendChild(s);
    });
  }

  function accept(data) {
    if (!data || !data.success || !Array.isArray(data.locations)) throw new Error('bad data');
    state.data = data.locations;
    state.okAt = Date.now();
    state.failed = false;
  }

  function load(attempt) {
    attempt = attempt || 1;
    if (state.busy && attempt === 1) return;
    state.busy = true;
    viaFetch().catch(viaJsonp).then(accept).then(function () {
      state.busy = false; renderAll();
    }).catch(function () {
      if (attempt < MAX_TRIES) { setTimeout(function () { load(attempt + 1); }, RETRY_MS); return; }
      state.busy = false; state.failed = true; renderAll();
    });
  }

  function scan() {
    injectCss();
    var found = document.querySelectorAll('[data-fyl-card]');
    for (var i = 0; i < found.length; i++) {
      if (hosts.indexOf(found[i]) < 0) { hosts.push(found[i]); build(found[i]); render(found[i]); }
    }
  }
  window.__flcCard = { scan: scan, refresh: function () { load(); } };

  function start() {
    scan();
    load();
    setInterval(function () { if (!document.hidden) load(); }, REFRESH_MS);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden && Date.now() - state.okAt > REFRESH_MS / 2) load();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
