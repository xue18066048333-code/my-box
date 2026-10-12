/* ============================================================================
   中诚特卫 · 网站交互逻辑
   ----------------------------------------------------------------------------
   本文件负责「把 data/site-data.js 里的内容渲染成页面」以及交互行为。
   除非你要改变功能，否则不需要修改本文件。
   ========================================================================== */
(function () {
  'use strict';

  var DATA = window.SITE_DATA;
  if (!DATA) {
    console.error('[中诚特卫] 未找到 site-data.js，请确认 data/site-data.js 已正确加载。');
    return;
  }

  /* ---- 语言 ------------------------------------------------------------- */
  var lang = 'cn';
  try { lang = localStorage.getItem('zc-lang') || 'cn'; } catch (e) { lang = 'cn'; }
  if (lang !== 'cn' && lang !== 'en') lang = 'cn';

  function t(v) {
    if (v === null || v === undefined) return '';
    if (typeof v === 'string') return v;
    return v[lang] !== undefined ? v[lang] : (v.cn || v.en || '');
  }
  function other(v) {
    if (!v || typeof v === 'string') return '';
    return lang === 'cn' ? (v.en || '') : (v.cn || '');
  }
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  /* ---- 渲染：导航 ------------------------------------------------------- */
  function renderNav() {
    $('navLinks').innerHTML = DATA.nav.map(function (n) {
      return '<a href="' + esc(n.href) + '">' + esc(t(n.label)) + '</a>';
    }).join('');

    $('footerLinks').innerHTML = DATA.nav.map(function (n) {
      return '<a href="' + esc(n.href) + '">' + esc(t(n.label)) + '</a>';
    }).join('');

    $('navCta').textContent = t(DATA.hero.ctaPrimary);
  }

  /* ---- 渲染：首屏 ------------------------------------------------------- */
  function renderHero() {
    $('heroEyebrow').textContent = t(DATA.hero.eyebrow);

    var h1 = $('heroTitle');
    h1.textContent = lang === 'cn' ? DATA.brand.nameCn : DATA.brand.nameEn;
    h1.classList.toggle('is-long', lang !== 'cn');

    $('heroEn').textContent = lang === 'cn' ? DATA.brand.nameEn : DATA.brand.nameCn;
    $('heroLead').textContent = t(DATA.hero.lead);
    $('heroCta1').textContent = t(DATA.hero.ctaPrimary);
    $('heroCta2').textContent = t(DATA.hero.ctaSecondary);
    $('heroScroll').textContent = t(DATA.hero.scroll);
    $('heroSlogan').textContent = DATA.brand.slogan;
  }

  /* ---- 渲染：数据条 ----------------------------------------------------- */
  function renderStats() {
    $('stats').innerHTML = DATA.stats.map(function (s, i) {
      return '<div class="stat reveal" data-d="' + i + '">' +
        '<b>' + esc(s.value) + '</b>' +
        '<span>' + esc(t(s.label)) + '</span>' +
        '</div>';
    }).join('');
  }

  /* ---- 通用：版块标题 --------------------------------------------------- */
  function head(tagId, titleId, subId, idx, titleObj, subObj) {
    var tag = $(tagId);
    if (tag) tag.textContent = idx + ' / ' + String(titleObj.en || '').toUpperCase();
    var el = $(titleId);
    if (el) {
      el.innerHTML = esc(t(titleObj)) +
        (other(titleObj) ? '<span class="en">' + esc(other(titleObj)) + '</span>' : '');
    }
    var sub = $(subId);
    if (sub) sub.textContent = subObj ? t(subObj) : '';
  }

  /* ---- 渲染：服务类型 --------------------------------------------------- */
  function renderServices() {
    var s = DATA.sectionServices;
    head('svcTag', 'svcTitle', 'svcSub', s.index, s.title, s.sub);

    $('svcGrid').innerHTML = DATA.services.map(function (sv, i) {
      var tags = (sv.tags || []).map(function (x) { return '<i>' + esc(t(x)) + '</i>'; }).join('');
      return '<article class="svc-card reveal" data-d="' + (i % 4) + '" data-service="' + esc(sv.id) + '" tabindex="0" role="button">' +
        '<div class="svc-media"><img src="' + esc(sv.img) + '" alt="' + esc(t(sv.name)) + '" loading="lazy" decoding="async"></div>' +
        '<span class="svc-code">' + esc(sv.code) + '</span>' +
        '<div class="svc-body">' +
          '<h3 class="svc-name">' + esc(t(sv.name)) + '</h3>' +
          '<p class="svc-sub">' + esc(t(sv.sub)) + '</p>' +
          '<p class="svc-desc">' + esc(t(sv.desc)) + '</p>' +
          '<div class="svc-tags">' + tags + '</div>' +
          '<div class="svc-cta"><u></u><span>' + esc(t(DATA.serviceCta)) + '</span></div>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ---- 渲染：安保方案流程 ----------------------------------------------- */
  function renderOps() {
    var s = DATA.sectionOps;
    head('opsTag', 'opsTitle', 'opsSub', s.index, s.title, s.sub);

    $('opsTrack').innerHTML = DATA.ops.map(function (o, i) {
      return '<div class="ops-step reveal" data-d="' + (i % 4) + '">' +
        '<span class="ops-dot"></span>' +
        '<span class="ops-num">' + esc(o.step) + '</span>' +
        '<h3 class="ops-name">' + esc(t(o.name)) + '</h3>' +
        '<p class="ops-desc">' + esc(t(o.desc)) + '</p>' +
      '</div>';
    }).join('');
  }

  /* ---- 渲染：覆盖地区（经纬网格部署图） --------------------------------- */
  function renderCoverage() {
    var s = DATA.sectionCoverage;
    head('covTag', 'covTitle', 'covSub', s.index, s.title, s.sub);
    $('covNote').textContent = t(s.note);

    var W = 640, H = 360, PAD = 26;
    var lonMin = 25, lonMax = 110, latMin = -28, latMax = 25;
    var cw = W - PAD * 2, ch = H - PAD * 2;
    var px = function (lon) { return PAD + (lon - lonMin) / (lonMax - lonMin) * cw; };
    var py = function (lat) { return PAD + (latMax - lat) / (latMax - latMin) * ch; };
    var LINE = 'rgba(242,239,233,0.09)';
    var MUTE = '#7A756C';
    var g = '';
    var lon, lat, x, y, lab;

    for (lon = Math.ceil(lonMin / 15) * 15; lon <= lonMax; lon += 15) {
      x = px(lon);
      g += '<line x1="' + x.toFixed(1) + '" y1="' + PAD + '" x2="' + x.toFixed(1) + '" y2="' + (H - PAD) + '" stroke="' + LINE + '" stroke-width="1"/>';
      g += '<text class="m-axis" x="' + x.toFixed(1) + '" y="' + (H - 10) + '" text-anchor="middle">' + lon + '\u00B0E</text>';
    }
    for (lat = Math.ceil(latMin / 15) * 15; lat <= latMax; lat += 15) {
      y = py(lat);
      g += '<line x1="' + PAD + '" y1="' + y.toFixed(1) + '" x2="' + (W - PAD) + '" y2="' + y.toFixed(1) + '" stroke="' + LINE + '" stroke-width="1"/>';
      lab = lat === 0 ? '0\u00B0' : (lat > 0 ? lat + '\u00B0N' : Math.abs(lat) + '\u00B0S');
      g += '<text class="m-axis" x="8" y="' + (y + 3.5).toFixed(1) + '">' + lab + '</text>';
    }

    // 赤道强调线
    y = py(0);
    g += '<line x1="' + PAD + '" y1="' + y.toFixed(1) + '" x2="' + (W - PAD) + '" y2="' + y.toFixed(1) + '" stroke="rgba(200,16,46,0.35)" stroke-width="1" stroke-dasharray="6 6"/>';

    DATA.coverage.forEach(function (c, i) {
      var nx = px(c.lon), ny = py(c.lat);
      var toLeft = nx > W * 0.62;
      var tx = toLeft ? nx - 18 : nx + 18;
      var anchor = toLeft ? 'end' : 'start';
      g += '<circle class="cov-pulse" cx="' + nx.toFixed(1) + '" cy="' + ny.toFixed(1) + '" fill="none" stroke="#C8102E" stroke-width="1.5" style="animation-delay:' + (i * 0.55).toFixed(2) + 's"/>';
      g += '<circle class="m-dot" cx="' + nx.toFixed(1) + '" cy="' + ny.toFixed(1) + '"/>';
      g += '<circle class="m-core" cx="' + nx.toFixed(1) + '" cy="' + ny.toFixed(1) + '"/>';
      g += '<line x1="' + (toLeft ? nx - 12 : nx + 12).toFixed(1) + '" y1="' + ny.toFixed(1) + '" x2="' + (toLeft ? nx - 26 : nx + 26).toFixed(1) + '" y2="' + ny.toFixed(1) + '" stroke="rgba(232,67,63,0.55)" stroke-width="1"/>';
      g += '<text class="m-lab" x="' + tx.toFixed(1) + '" y="' + (ny - 2).toFixed(1) + '" text-anchor="' + anchor + '">' + esc(t(c.name)) + '</text>';
      g += '<text class="m-sub" x="' + tx.toFixed(1) + '" y="' + (ny + 15).toFixed(1) + '" text-anchor="' + anchor + '">' + esc(t(c.region)).toUpperCase() + '</text>';
    });

    g += '<text class="m-hud" x="' + (W - PAD) + '" y="' + (PAD - 10) + '" text-anchor="end">' + pad2(DATA.coverage.length) + ' / COUNTRIES</text>';

    $('covMap').innerHTML =
      '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + esc(t(s.title)) + '">' + g + '</svg>' +
      '<span class="cov-hint">' + esc(t(s.mapHint)) + '</span>';

    $('covList').innerHTML = DATA.coverage.map(function (c) {
      return '<div class="cov-item">' +
        '<span class="rg">' + esc(t(c.region)) + '</span>' +
        '<div><b>' + esc(t(c.name)) + '</b><em>' + esc(other(c.name)) + '</em></div>' +
      '</div>';
    }).join('');
  }

  /* ---- 渲染：团队实力（视频） ------------------------------------------- */
  function renderMedia() {
    var s = DATA.sectionMedia;
    head('mdTag', 'mdTitle', 'mdSub', s.index, s.title, s.sub);

    $('mediaGrid').innerHTML = DATA.media.map(function (m, i) {
      return '<article class="media-card reveal" data-d="' + i + '">' +
        '<div class="media-frame">' +
          '<span class="media-dur">' + esc(m.duration) + '</span>' +
          '<video controls preload="none" playsinline poster="' + esc(m.poster) + '">' +
            '<source src="' + esc(m.src) + '" type="video/mp4">' +
          '</video>' +
        '</div>' +
        '<div class="media-body">' +
          '<h3>' + esc(t(m.name)) + '<span class="en">' + esc(other(m.name)) + '</span></h3>' +
          '<p>' + esc(t(m.desc)) + '</p>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ---- 渲染：报价档位 --------------------------------------------------- */
  function renderPricing() {
    var s = DATA.sectionPricing;
    head('priTag', 'priTitle', 'priSub', s.index, s.title, s.sub);

    $('plans').innerHTML = DATA.plans.map(function (p, i) {
      var feats = (p.features || []).map(function (f) { return '<li>' + esc(t(f)) + '</li>'; }).join('');
      return '<article class="plan reveal' + (p.featured ? ' is-featured' : '') + '" data-d="' + i + '">' +
        (p.featured && p.badge ? '<span class="plan-badge">' + esc(t(p.badge)) + '</span>' : '') +
        '<h3 class="plan-name">' + esc(t(p.name)) + '</h3>' +
        '<p class="plan-en">' + esc(other(p.name)) + '</p>' +
        '<p class="plan-for">' + esc(t(p.forWhom)) + '</p>' +
        '<p class="plan-price">' + esc(t(p.price)) + '</p>' +
        '<ul class="plan-feats">' + feats + '</ul>' +
        '<button class="btn btn--primary btn--block" type="button" data-order-open data-service="' + esc(p.id) + '">' +
          esc(t(DATA.planCta)) + '</button>' +
      '</article>';
    }).join('');
  }

  /* ---- 渲染：关于我们 --------------------------------------------------- */
  function renderAbout() {
    var s = DATA.sectionAbout;
    head('abTag', 'abTitle', null, s.index, s.title, null);
    $('abBody').textContent = t(DATA.about.body);

    $('abFacts').innerHTML = DATA.about.facts.map(function (f) {
      return '<div><dt>' + esc(t(f.label)) + '</dt><dd>' + esc(t(f.value)) + '</dd></div>';
    }).join('');
  }

  /* ---- 渲染：询价表单 --------------------------------------------------- */
  function serviceOptions(selected) {
    return DATA.services.map(function (s) {
      return '<option value="' + esc(s.id) + '"' + (s.id === selected ? ' selected' : '') + '>' +
        esc(t(s.name)) + ' — ' + esc(other(s.name)) + '</option>';
    }).join('');
  }

  function fieldHtml(key, type, full, required) {
    var label = t(DATA.form.fields[key]);
    var cls = 'field' + (full ? ' field--full' : '');
    var req = required ? ' required' : '';
    if (type === 'textarea') {
      return '<div class="' + cls + '"><label>' + esc(label) + '</label>' +
        '<textarea name="' + key + '"' + req + ' placeholder=""></textarea></div>';
    }
    if (type === 'date') {
      return '<div class="' + cls + '"><label>' + esc(label) + '</label>' +
        '<input type="date" name="' + key + '"' + req + '></div>';
    }
    return '<div class="' + cls + '"><label>' + esc(label) + '</label>' +
      '<input type="text" name="' + key + '"' + req + ' autocomplete="off"></div>';
  }

  function submitRow(btnId) {
    return '<div class="form-actions">' +
      '<button class="btn btn--primary" type="submit" id="' + btnId + '">' + esc(t(DATA.form.submit)) + '</button>' +
      '<p class="form-notice">' + esc(t(DATA.form.notice)) + '</p>' +
    '</div>';
  }

  function renderQuote() {
    var s = DATA.sectionQuote;
    head('qtTag', 'qtTitle', 'qtSub', s.index, s.title, s.sub);

    $('qtSide').innerHTML = '<dl>' +
      '<dt>' + esc(t({ cn: '服务区域', en: 'Regions' })) + '</dt>' +
      '<dd>' + DATA.coverage.map(function (c) { return esc(t(c.name)); }).join(' · ') + '</dd>' +
      '<dt>' + esc(t({ cn: '服务语言', en: 'Languages' })) + '</dt>' +
      '<dd>' + esc(t(DATA.brand.languages)) + '</dd>' +
      '<dt>' + esc(t({ cn: '团队规模', en: 'Team' })) + '</dt>' +
      '<dd>' + esc(t(DATA.brand.team)) + '</dd>' +
      '<dt>' + esc(t({ cn: '对接方式', en: 'Process' })) + '</dt>' +
      '<dd>' + esc(t({ cn: '收到需求后由专人联系，确认细节并出具方案与报价。', en: 'A dedicated contact will follow up to confirm details and issue a plan and quote.' })) + '</dd>' +
    '</dl>';

    var sel = DATA.services.length ? DATA.services[0].id : '';
    $('quoteForm').innerHTML =
      '<div class="form-grid">' +
        '<div class="field field--full"><label>' + esc(t(DATA.form.fields.service)) + '</label>' +
          '<select name="service" required>' + serviceOptions(sel) + '</select></div>' +
        fieldHtml('name', 'text', false, true) +
        fieldHtml('contact', 'text', false, true) +
        fieldHtml('location', 'text', false, false) +
        fieldHtml('start', 'date', false, false) +
        fieldHtml('scale', 'text', false, false) +
        fieldHtml('message', 'textarea', true, false) +
      '</div>' +
      submitRow('quoteSubmit');
  }

  function renderModalShell() {
    $('modalTitle').textContent = t(DATA.ui.orderTitle);

    var sel = DATA.services.length ? DATA.services[0].id : '';
    $('modalForm').innerHTML =
      '<div class="form-grid">' +
        '<div class="field field--full"><label>' + esc(t(DATA.form.fields.service)) + '</label>' +
          '<select name="service" required>' + serviceOptions(sel) + '</select></div>' +
        fieldHtml('name', 'text', false, true) +
        fieldHtml('contact', 'text', false, true) +
        fieldHtml('location', 'text', false, false) +
        fieldHtml('message', 'textarea', true, false) +
      '</div>' +
      submitRow('modalSubmit');
  }

  /* ---- 渲染：页脚 ------------------------------------------------------- */
  function renderFooter() {
    $('footerNote').textContent = t(DATA.footer.note);
    $('footerCopy').textContent = '© ' + new Date().getFullYear() + ' ' + t(DATA.footer.copyright);
  }

  /* ---- 全量渲染 --------------------------------------------------------- */
  function renderAll() {
    document.documentElement.lang = lang === 'cn' ? 'zh-CN' : 'en';
    document.title = DATA.brand.nameCn + ' ' + DATA.brand.nameEn + ' | ' + t(DATA.sectionServices.title) + ' · ' + t(DATA.sectionCoverage.title);

    renderNav();
    renderHero();
    renderStats();
    renderServices();
    renderOps();
    renderCoverage();
    renderMedia();
    renderPricing();
    renderAbout();
    renderQuote();
    renderModalShell();
    renderFooter();

    bindCards();
    observeReveals();
    syncLangButtons();
  }

  /* ---- 滚动入场 --------------------------------------------------------- */
  var io = null;
  function observeReveals() {
    var items = document.querySelectorAll('.reveal:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add('is-in'); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  }

  /* ---- 询价弹窗 --------------------------------------------------------- */
  var modal = $('modal');
  var lastFocus = null;

  function openModal(serviceId) {
    var ok = $('modalOk');
    ok.classList.remove('is-on');
    var form = $('modalForm');
    form.reset();

    var select = form.querySelector('select[name="service"]');
    if (select && serviceId) {
      var found = false;
      Array.prototype.forEach.call(select.options, function (o) {
        if (o.value === serviceId) { o.selected = true; found = true; }
      });
      if (!found) select.selectedIndex = 0;
    }

    var svc = null;
    for (var i = 0; i < DATA.services.length; i++) {
      if (DATA.services[i].id === serviceId) { svc = DATA.services[i]; break; }
    }
    $('modalService').textContent = svc ? (t(svc.name) + ' · ' + other(svc.name)) : t(DATA.sectionQuote.title);

    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    document.body.classList.add('no-scroll');
    var first = modal.querySelector('input[name="name"]');
    if (first) setTimeout(function () { first.focus(); }, 60);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---- 卡片与按钮绑定 --------------------------------------------------- */
  function bindCards() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-order-open]'), function (btn) {
      btn.addEventListener('click', function () {
        openModal(btn.getAttribute('data-service') || '');
      });
    });

    Array.prototype.forEach.call(document.querySelectorAll('.svc-card'), function (card) {
      function go() { openModal(card.getAttribute('data-service') || ''); }
      card.addEventListener('click', go);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
      });
    });
  }

  /* ---- 表单提交（演示） ------------------------------------------------- */
  function handleSubmit(form, okEl) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]');
      var contact = form.querySelector('[name="contact"]');
      if (name && !name.value.trim()) { name.focus(); return; }
      if (contact && !contact.value.trim()) { contact.focus(); return; }
      okEl.textContent = t(DATA.form.success);
      okEl.classList.add('is-on');
      form.reset();
      if (okEl.scrollIntoView) okEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }

  /* ---- 语言切换 --------------------------------------------------------- */
  function syncLangButtons() {
    Array.prototype.forEach.call(document.querySelectorAll('.lang button'), function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem('zc-lang', lang); } catch (e) { /* 忽略 */ }
    renderAll();
  }

  /* ---- 导航滚动状态 / 移动菜单 ------------------------------------------ */
  function initNav() {
    var nav = $('nav');
    function onScroll() {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var burger = $('burger');
    var links = $('navLinks');
    burger.addEventListener('click', function () {
      links.classList.toggle('is-open');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('is-open');
    });
  }

  /* ---- 启动 ------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    renderAll();
    initNav();
    handleSubmit($('quoteForm'), $('formOk'));
    handleSubmit($('modalForm'), $('modalOk'));

    Array.prototype.forEach.call(document.querySelectorAll('.lang button'), function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.hasAttribute('data-order-close')) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  });
})();
