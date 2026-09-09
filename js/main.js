/* =========================================================================
 *  main.js —— 渲染 + 交互（筛选 / 时间线 / 弹窗 / 语言切换 / 动效）
 *  正常情况下你不用改这个文件；改内容去 js/data.js。
 * ========================================================================= */

window.LANG = 'en'; // 默认英文；'zh' 为中文
let ACTIVE_FILTER = 'all';

/* 取当前语言文本 */
function t(o) {
  if (o == null) return '';
  if (typeof o === 'string') return o;
  return o[window.LANG] || o.en || '';
}

/* ---------- 小工具：按分类取颜色 ---------- */
const CAT_COLOR = {};
CATEGORIES.forEach(c => { CAT_COLOR[c.id] = c.color; });
function catColor(id) { return CAT_COLOR[id] || '#2563EB'; }
function catName(id) { const c = CATEGORIES.find(x => x.id === id); return c ? t(c) : id; }

/* ---------- 小图标（装饰用） ---------- */
const ICONS = {
  analysis: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 5-6"/></svg>',
  engineering: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  ml: '<svg viewBox="0 0 24 24"><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><path d="M6.5 6.5l4.5 10M17.5 6.5l-4.5 10"/></svg>',
  viz: '<svg viewBox="0 0 24 24"><rect x="4" y="10" width="4" height="10"/><rect x="10" y="4" width="4" height="16"/><rect x="16" y="7" width="4" height="13"/></svg>'
};

/* ---------- 语言切换 ---------- */
function setLang(lang) {
  window.LANG = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-lang]').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  renderAll();
}

/* ---------- 主渲染 ---------- */
function renderAll() {
  renderNav();
  applyStaticI18n();
  renderHero();
  renderStats();
  renderAbout();
  renderExperience();
  renderProjects();
  renderEngineering();
  renderResearch();
  renderAwards();
  renderContact();
  bindScrollAnimations();
  if (window.renderCharts) window.renderCharts();
}

/* ---------- 导航 ---------- */
function renderNav() {
  document.getElementById('nav-links').innerHTML = PORTFOLIO.nav.map(n =>
    `<a href="#${n.id}">${t(n)}</a>`).join('');
}

/* ---------- 静态文案（index.html 里 data-i18n 的部分）---------- */
const I18N = {
  'view-work':          { en: 'View my work', zh: '查看我的作品' },
  'get-in-touch':       { en: 'Get in touch', zh: '联系我' },
  'education':          { en: 'Education', zh: '教育经历' },
  'capability-coverage':{ en: 'Capability coverage by direction', zh: '按能力方向的项目覆盖' },
  'skills':             { en: 'Skills', zh: '技能' },
  'experience':         { en: 'Experience', zh: '实习经历' },
  'experience-sub':     { en: 'Click for full details', zh: '点击查看详情' },
  'projects':           { en: 'Projects', zh: '项目' },
  'projects-sub':       { en: 'Filter by capability direction', zh: '按能力方向筛选' },
  'engineering':        { en: 'Engineering', zh: '工程' },
  'engineering-sub':    { en: 'Personal code projects with architecture diagrams', zh: '带架构图的个人代码项目' },
  'research':           { en: 'Research & Publications', zh: '科研与论文' },
  'awards':             { en: 'Awards & Honors', zh: '奖项荣誉' },
  'campus':             { en: 'Campus & Leadership', zh: '校园经历' },
  'data-highlights':    { en: 'Data highlights', zh: '数据亮点' },
  'data-highlights-sub':{ en: 'A few key numbers from my projects, visualized.', zh: '把项目里的几个关键数字画成图表。' }
};
function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[key]) el.textContent = I18N[key][window.LANG] || I18N[key].en;
  });
}

/* ============================== ① Hero ============================== */
function renderHero() {
  const H = PORTFOLIO.hero;
  document.getElementById('hero-name').textContent = t(H.name);
  document.getElementById('hero-role').textContent = t(H.role);
  document.getElementById('hero-tagline').textContent = t(H.tagline);
  document.getElementById('hero-intro').textContent = t(H.intro);
  document.getElementById('hero-location-text').textContent = t(H.location);

  document.getElementById('hero-email').href = 'mailto:' + t(H.email);
  document.getElementById('hero-github').href = H.github;
  const li = document.getElementById('hero-linkedin');
  if (H.linkedin) { li.href = H.linkedin; li.style.display = ''; } else { li.style.display = 'none'; }

  // 封面左右悬浮数据卡片（装饰，真实数据）
  const badges = [
    { v: '680K+', l: { en: 'records processed (all projects)', zh: '累计处理记录（全部项目）' }, icon: '🗄️' },
    { v: '3h→1h',   l: { en: 'weekly prep saved', zh: '周报表省时' }, icon: '⚡' },
    { v: '2.5×',    l: { en: 'payment gap found', zh: '支付差距' }, icon: '📈' },
    { v: 'RAG',     l: { en: 'AI agent built', zh: 'AI 智能体' }, icon: '🤖' }
  ];
  const stickers = [
    { icon: '📊', cls: 'st-1', rot: '-12deg' },
    { icon: '📈', cls: 'st-2', rot: '10deg' },
    { icon: '🧮', cls: 'st-3', rot: '8deg' },
    { icon: '🗄️', cls: 'st-4', rot: '-8deg' },
    { icon: '🤖', cls: 'st-5', rot: '-6deg' },
    { icon: '🔍', cls: 'st-6', rot: '12deg' }
  ];
  document.getElementById('hero-decor').innerHTML =
    badges.map((b, i) => `
    <div class="float-badge fb-${i + 1}"><span class="fb-ico">${b.icon}</span><span class="fb-v">${b.v}</span><span class="fb-l">${t(b.l)}</span></div>`).join('') +
    stickers.map(s => `<span class="sticker ${s.cls}" style="--rot:${s.rot}">${s.icon}</span>`).join('');
}

function renderStats() {
  const stats = [
    { value: 3.92, decimals: 2, suffix: '', label: { en: 'GPA / 4.0 (NYU)', zh: 'GPA / 4.0（NYU）' } },
    { value: 7, decimals: 0, suffix: '', label: { en: 'Published papers', zh: '已发表论文' } },
    { value: 17, decimals: 0, suffix: '', label: { en: 'Projects & dashboards', zh: '项目与看板' } },
    { value: 4, decimals: 0, suffix: '', label: { en: 'Internships', zh: '实习经历' } },
    { value: 28, decimals: 0, suffix: '', label: { en: 'Awards & honors', zh: '奖项荣誉' } }
  ];
  document.getElementById('stats-grid').innerHTML = stats.map(s => `
    <div class="stat">
      <div class="stat-value"><span class="count" data-target="${s.value}" data-decimals="${s.decimals}">0</span>${s.suffix}</div>
      <div class="stat-label">${t(s.label)}</div>
    </div>`).join('');
}

/* ============================== ② About ============================== */
function renderAbout() {
  const A = PORTFOLIO.about;
  document.getElementById('about-title').textContent = t(A.title);
  document.getElementById('about-paras').innerHTML = A.paragraphs.map(p => `<p>${t(p)}</p>`).join('');
  document.getElementById('radar-note').textContent = t(A.radarNote);

  document.getElementById('edu-list').innerHTML = PORTFOLIO.education.map(e => `
    <div class="edu-card reveal">
      <div class="edu-head">
        <div>
          <h4>${t(e.school)}</h4>
          <div class="edu-degree">${t(e.degree)}</div>
        </div>
        <div class="edu-meta">
          <span class="edu-detail">${t(e.detail)}</span>
          <span class="edu-period">${e.period}</span>
          <span class="edu-loc">${t(e.location)}</span>
        </div>
      </div>
      <div class="edu-courses"><span class="mini-label">${window.LANG === 'zh' ? '主修课程' : 'Relevant coursework'}:</span> ${t(e.courses)}</div>
    </div>`).join('');

  document.getElementById('skill-groups').innerHTML = PORTFOLIO.skillGroups.map(g => `
    <div class="skill-group reveal">
      <h5>${t(g.name)}</h5>
      <div class="chips">${g.items.map(i => `<span class="chip">${t(i)}</span>`).join('')}</div>
    </div>`).join('');
}

/* ============================== ③ Experience ============================== */
function renderExperience() {
  document.getElementById('exp-list').innerHTML = PORTFOLIO.experience.map((e, i) => `
    <div class="tl-item reveal" style="--accent:${e.accent}" data-i="${i}">
      <div class="tl-marker"></div>
      <div class="tl-card" data-modal="exp-${i}">
        <div class="tl-period">${e.period}</div>
        <h4>${t(e.company)}</h4>
        <div class="tl-role">${t(e.role)}</div>
        <div class="tl-loc">${t(e.location)}</div>
        <p class="tl-summary">${t(e.summary)}</p>
        <div class="tl-tech">${e.tech.map(x => `<span class="chip">${x}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

/* ============================== ④ Projects（含数据看板）============================== */
function renderDashboardProject(p) {
  const theme = p.theme || catColor(p.categories[0]);
  const sheets = (p.charts || []).map(c => `
    <div class="tb-sheet ${c.span === 'full' ? 'tb-sheet-full' : ''}">
      <div class="tb-sheet-head"><span class="tb-sheet-ico" style="background:${theme}"></span><span class="tb-sheet-title">${t(c.title)}</span></div>
      <div class="tb-sheet-body"><canvas id="${c.id}"></canvas></div>
      <div class="tb-sheet-note">${t(c.note)}</div>
    </div>`).join('');
  return `
    <article class="proj-card dash-proj" style="--accent:${theme}">
      <div class="dash-head">
        <div>
          <h4>${t(p.title)}</h4>
          <div class="proj-role">${t(p.role)}</div>
        </div>
        <div class="dash-head-meta">
          <div class="proj-tags">${p.categories.map(c => `<span class="tag" style="color:${catColor(c)};border-color:${catColor(c)}">${catName(c)}</span>`).join('')}</div>
          <div class="proj-tech">${p.tech.map(x => `<span class="chip">${x}</span>`).join('')}</div>
        </div>
      </div>
      <p class="dash-summary">${t(p.summary)}</p>
      <div class="tb-kpis">${p.kpis.map(k => `
        <div class="tb-kpi">
          <div class="tb-kpi-label">${t(k.label)}</div>
          <div class="tb-kpi-value" style="color:${theme}">${k.value}</div>
          <div class="tb-kpi-delta ${k.up ? 'up' : 'down'}">${k.up ? '▲' : '▼'} ${t(k.delta)}</div>
        </div>`).join('')}</div>
      <div class="tb-sheets">${sheets}</div>
    </article>`;
}

/* ============================== ④ Projects ============================== */
function renderProjects() {
  const cats = PORTFOLIO.projects.flatMap(p => p.categories);
  document.getElementById('filter-bar').innerHTML = `
    <button class="filter-btn ${ACTIVE_FILTER === 'all' ? 'active' : ''}" data-filter="all">${window.LANG === 'zh' ? '全部' : 'All'}</button>
    ${CATEGORIES.map(c => `
      <button class="filter-btn ${ACTIVE_FILTER === c.id ? 'active' : ''}" data-filter="${c.id}" style="--c:${c.color}">
        <span class="dot" style="background:${c.color}"></span>${t(c)}
      </button>`).join('')}`;

  const list = PORTFOLIO.projects.filter(p => ACTIVE_FILTER === 'all' || p.categories.includes(ACTIVE_FILTER));
  document.getElementById('project-grid').innerHTML = list.map((p, idx) => {
    const realIdx = PORTFOLIO.projects.indexOf(p);
    if (p.type === 'dashboard') return renderDashboardProject(p);
    const mainCat = p.categories[0];
    return `
    <article class="proj-card" style="--accent:${catColor(mainCat)}" data-modal="proj-${realIdx}">
      <div class="proj-img">${p.image ? `<img src="assets/img/projects/${p.image}" alt="${t(p.title)}" loading="lazy">` : projectPlaceholder(p)}</div>
      <div class="proj-body">
        <div class="proj-tags">${p.categories.map(c => `<span class="tag" style="color:${catColor(c)};border-color:${catColor(c)}">${catName(c)}</span>`).join('')}</div>
        <h4>${t(p.title)}</h4>
        <div class="proj-role">${t(p.role)}</div>
        <p class="proj-summary">${t(p.summary)}</p>
        <div class="proj-metrics">
          ${p.metrics.map(m => `<div class="metric"><span class="m-value">${t(m.value)}</span><span class="m-label">${t(m.label)}</span></div>`).join('')}
        </div>
        <div class="proj-tech">${p.tech.map(x => `<span class="chip">${x}</span>`).join('')}</div>
      </div>
    </article>`;
  }).join('');
}

function projectPlaceholder(p) {
  return `<div class="ph" style="background:linear-gradient(135deg, ${catColor(p.categories[0])}22, ${catColor(p.categories[p.categories.length - 1])}33)">
    <span class="ph-icon" style="color:${catColor(p.categories[0])}">${ICONS[p.categories[0]] || ICONS.analysis}</span>
    <span class="ph-hint">${window.LANG === 'zh' ? '在此放截图' : 'screenshot'}</span>
  </div>`;
}

/* ============================== ⑤ Engineering ============================== */
function renderEngineering() {
  document.getElementById('eng-grid').innerHTML = PORTFOLIO.engineering.map((e, i) => `
    <article class="eng-card reveal" style="--accent:${e.accent}">
      <div class="eng-top">
        <div>
          <h4>${t(e.title)}</h4>
          <div class="eng-oneliner">${t(e.oneLiner)}</div>
        </div>
        <a class="repo-btn" href="${e.repo}" target="_blank" rel="noopener">${window.LANG === 'zh' ? '代码仓库' : 'Repo'} ↗</a>
      </div>
      <div class="eng-stack">${e.stack.map(s => `<span class="chip">${s}</span>`).join('')}</div>
      <p class="eng-summary">${t(e.summary)}</p>
      <ul class="eng-points">${e.highlights.map(h => `<li>${t(h)}</li>`).join('')}</ul>
      <div class="eng-diagram" data-modal="diag-${i}">
        <img src="${t(e.diagram)}" alt="${t(e.title)} architecture" loading="lazy">
      </div>
    </article>`).join('');
}

/* ============================== ⑥ Research ============================== */
function renderResearch() {
  document.getElementById('pub-list').innerHTML = PORTFOLIO.publications.map((p, i) => `
    <div class="pub-item reveal">
      <div class="pub-year">${p.year}</div>
      <div class="pub-main">
        <div class="pub-title">${t(p.title)}</div>
        <div class="pub-meta">
          <span class="pub-venue">${t(p.venue)}</span>
          <span class="pub-role">${t(p.role)}</span>
          ${p.type === 'book' ? '<span class="badge-book">' + (window.LANG === 'zh' ? '专著' : 'Book') + '</span>' : ''}
        </div>
      </div>
      <div class="pub-metric"><span class="m-value">${t(p.metric.value)}</span><span class="m-label">${t(p.metric.label)}</span></div>
    </div>`).join('');

}

/* ============================== ⑦ Awards ============================== */
function renderAwards() {
  document.getElementById('awards-wrap').innerHTML = PORTFOLIO.awards.map(level => `
    <div class="award-level reveal">
      <h4 class="award-level-title">${t(level.levelLabel)}</h4>
      <div class="award-items">
        ${level.items.map(a => `
          <div class="award-item">
            <span class="award-medal">${medalFor(level.level)}</span>
            <span class="award-text">${t(a.title)}</span>
            ${a.year ? `<span class="award-year">${a.year}</span>` : ''}
          </div>`).join('')}
      </div>
    </div>`).join('');

  document.getElementById('campus-list').innerHTML = PORTFOLIO.campus.map(c => `
    <div class="campus-item reveal"><span class="campus-dot"></span><span>${t(c.title)}</span><span class="campus-period">${t(c.period)}</span></div>`).join('');
}

function medalFor(level) {
  const map = { national: '🏅', city: '🥈', school: '🎓', college: '📘' };
  return map[level] || '⭐';
}

/* ============================== ⑧ Contact ============================== */
function renderContact() {
  const C = PORTFOLIO.contact;
  document.getElementById('contact-title').textContent = t(C.title);
  document.getElementById('contact-subtitle').textContent = t(C.subtitle);
  document.getElementById('contact-email').href = 'mailto:' + t(C.email);
  document.getElementById('contact-email-text').textContent = t(C.email);
  document.getElementById('contact-phone').textContent = t(C.phone);
  document.getElementById('contact-linkedin').href = C.linkedin || '#';
}

/* ============================== 弹窗 Modal ============================== */
function openModal(key) {
  const [type, i] = key.split('-');
  const idx = parseInt(i, 10);
  const body = document.getElementById('modal-body');
  let html = '';

  if (type === 'exp') {
    const e = PORTFOLIO.experience[idx];
    html = `
      <div class="m-accent" style="background:${e.accent}"></div>
      <h3>${t(e.company)}</h3>
      <div class="m-role">${t(e.role)}</div>
      <div class="m-meta">${e.period} · ${t(e.location)}</div>
      <p class="m-summary">${t(e.summary)}</p>
      <ul class="m-bullets">${e.bullets.map(b => `<li>${t(b)}</li>`).join('')}</ul>
      <div class="m-row"><span class="m-label">${window.LANG === 'zh' ? '技术栈' : 'Tech'}:</span> ${e.tech.map(x => `<span class="chip">${x}</span>`).join('')}</div>
      <div class="m-metrics">${e.metrics.map(m => `<div class="metric"><span class="m-value">${t(m.value)}</span><span class="m-label">${t(m.label)}</span></div>`).join('')}</div>
      ${e.diagram ? `<div class="m-img diag-zoom"><img src="${t(e.diagram)}" alt="${t(e.company)}"></div>` : ''}`;
  } else if (type === 'proj') {
    const p = PORTFOLIO.projects[idx];
    html = `
      <div class="m-accent" style="background:${catColor(p.categories[0])}"></div>
      <div class="m-tags">${p.categories.map(c => `<span class="tag" style="color:${catColor(c)};border-color:${catColor(c)}">${catName(c)}</span>`).join('')}</div>
      <h3>${t(p.title)}</h3>
      <div class="m-meta">${t(p.period)} · ${t(p.role)}</div>
      <p class="m-summary">${t(p.summary)}</p>
      <ul class="m-bullets">${p.highlights.map(h => `<li>${t(h)}</li>`).join('')}</ul>
      <div class="m-row"><span class="m-label">${window.LANG === 'zh' ? '技术栈' : 'Tech'}:</span> ${p.tech.map(x => `<span class="chip">${x}</span>`).join('')}</div>
      <div class="m-metrics">${p.metrics.map(m => `<div class="metric"><span class="m-value">${t(m.value)}</span><span class="m-label">${t(m.label)}</span></div>`).join('')}</div>
      ${p.image ? `<div class="m-img"><img src="assets/img/projects/${p.image}" alt="${t(p.title)}"></div>` : ''}`;
  } else if (type === 'diag') {
    const e = PORTFOLIO.engineering[idx];
    html = `
      <div class="m-accent" style="background:${e.accent}"></div>
      <h3>${t(e.title)} — ${window.LANG === 'zh' ? '架构图' : 'Architecture'}</h3>
      <div class="m-img diag-zoom"><img src="${t(e.diagram)}" alt="${t(e.title)}"></div>
      <p class="m-summary" style="margin-top:12px">${t(e.summary)}</p>`;
  }

  body.innerHTML = html;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================== 动效 ============================== */
let revealIO = null;
function observeReveals() {
  if (!revealIO) {
    revealIO = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealIO.unobserve(en.target); } });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll('.reveal:not(.in)').forEach(el => revealIO.observe(el));
}

function bindScrollAnimations() {
  // reveal-on-scroll
  observeReveals();

  // count-up numbers
  const cio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      cio.unobserve(el);
      const target = parseFloat(el.dataset.target);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const dur = 1200, start = performance.now();
      function tick(now) {
        const k = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - k, 3);
        const val = target * eased;
        el.textContent = val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        if (k < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.count').forEach(el => cio.observe(el));
}

/* ============================== 初始化 ============================== */
document.addEventListener('DOMContentLoaded', () => {
  // 语言切换按钮
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  // 移动端汉堡菜单
  document.getElementById('nav-burger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });

  // 筛选
  document.getElementById('filter-bar').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    ACTIVE_FILTER = btn.dataset.filter;
    renderProjects();
    if (window.renderCharts) window.renderCharts();
  });

  // 弹窗（事件委托）
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-modal]');
    if (opener) openModal(opener.dataset.modal);
  });
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  renderAll();
});
