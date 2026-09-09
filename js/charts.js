/* =========================================================================
 *  charts.js —— Chart.js 图表（技能雷达图 + 能力方向条）
 *  依赖 js/vendor/chart.umd.min.js；若 CDN/本地都未加载则优雅降级。
 * ========================================================================= */

window.renderCharts = function () {
  if (typeof Chart === 'undefined') return;

  const L = window.LANG;

  /* ---------- 技能雷达图（6 轴，自评 1–5）---------- */
  const radarEl = document.getElementById('skill-radar');
  if (radarEl) {
    if (window._radar) window._radar.destroy();
    const R = PORTFOLIO.skillsRadar;
    window._radar = new Chart(radarEl, {
      type: 'radar',
      data: {
        labels: R.labels.map(x => t(x)),
        datasets: [{
          label: L === 'zh' ? '熟练度' : 'Proficiency',
          data: R.values,
          backgroundColor: 'rgba(30, 78, 121, 0.16)',
          borderColor: '#1E4E79',
          borderWidth: 2,
          pointBackgroundColor: '#1E4E79',
          pointRadius: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true, min: 0, max: 5,
            ticks: { stepSize: 1, display: false, backdropColor: 'transparent' },
            grid: { color: 'rgba(100,116,139,0.18)' },
            angleLines: { color: 'rgba(100,116,139,0.18)' },
            pointLabels: { color: '#334155', font: { size: 12, weight: '500' } }
          }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  /* ---------- 能力方向条（各方向项目数）---------- */
  const barEl = document.getElementById('capability-bar');
  if (barEl) {
    if (window._bar) window._bar.destroy();
    const counts = CATEGORIES.map(c => PORTFOLIO.projects.filter(p => p.categories.includes(c.id)).length);
    window._bar = new Chart(barEl, {
      type: 'bar',
      data: {
        labels: CATEGORIES.map(c => t(c)),
        datasets: [{
          data: counts,
          backgroundColor: CATEGORIES.map(c => c.color),
          borderRadius: 6,
          barThickness: 40
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: 'rgba(100,116,139,0.12)' } },
          y: { grid: { display: false }, ticks: { color: '#334155', font: { size: 12 } } }
        },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: c => (L === 'zh' ? ' 个项目' : ' projects') } }
        }
      }
    });
  }

  /* ---------- 数据亮点 ① 项目分类占比（环形图） ---------- */
  const catEl = document.getElementById('viz-categories');
  if (catEl) {
    if (window._vizCat) window._vizCat.destroy();
    const counts = CATEGORIES.map(c => PORTFOLIO.projects.filter(p => p.categories.includes(c.id)).length);
    window._vizCat = new Chart(catEl, {
      type: 'doughnut',
      data: {
        labels: CATEGORIES.map(c => t(c)),
        datasets: [{ data: counts, backgroundColor: CATEGORIES.map(c => c.color), borderColor: '#fff', borderWidth: 2, hoverOffset: 10 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '58%',
        plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 14, font: { size: 11 } } } }
      }
    });
    document.getElementById('viz-categories-note').textContent = L === 'zh' ? '14 个项目按能力方向的分布（项目可多标签）' : '14 projects across 4 capability directions (multi-tagged)';
  }

  /* ---------- 数据亮点 ② 论文与专著按年份（柱状） ---------- */
  const pubsEl = document.getElementById('viz-pubs');
  if (pubsEl) {
    if (window._vizPubs) window._vizPubs.destroy();
    const byYear = {};
    PORTFOLIO.publications.forEach(p => { byYear[p.year] = (byYear[p.year] || 0) + 1; });
    const years = Object.keys(byYear).sort();
    const pubColors = ['#9F1239', '#B45309', '#1E4E79', '#0E7490'];
    window._vizPubs = new Chart(pubsEl, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [{ data: years.map(y => byYear[y]), backgroundColor: years.map((_, i) => pubColors[i % pubColors.length]), borderRadius: 6, maxBarThickness: 56 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: 'rgba(100,116,139,0.12)' } }, x: { grid: { display: false } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => (L === 'zh' ? ' 项' : ' items') } } }
      }
    });
    document.getElementById('viz-pubs-note').textContent = L === 'zh' ? '已发表论文 + 专著按年份分布（共 8 项）' : 'Published papers + book by year (8 items)';
  }

  /* ---------- 数据亮点 ③ Medicare 州支付差异（横向柱状） ---------- */
  const medEl = document.getElementById('viz-medicare');
  if (medEl) {
    if (window._vizMed) window._vizMed.destroy();
    window._vizMed = new Chart(medEl, {
      type: 'bar',
      data: {
        labels: [L === 'zh' ? '马里兰州（最高）' : 'Maryland (highest)', L === 'zh' ? '佛蒙特州（最低）' : 'Vermont (lowest)'],
        datasets: [{ data: [39922, 15674], backgroundColor: ['#1E4E79', '#0E7490'], borderRadius: 6, maxBarThickness: 58 }]
      },
      options: {
        indexAxis: 'y', responsive: true, maintainAspectRatio: false,
        scales: { x: { beginAtZero: true, ticks: { callback: v => '$' + v.toLocaleString() }, grid: { color: 'rgba(100,116,139,0.12)' } }, y: { grid: { display: false } } },
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => '$' + c.parsed.x.toLocaleString() } } }
      }
    });
    document.getElementById('viz-medicare-note').textContent = L === 'zh' ? '最高 / 最低州住院支付相差 2.5×（$39,922 vs $15,674）' : '2.5× payment gap between the highest & lowest states ($39,922 vs $15,674)';
  }

  /* ---------- 数据亮点 ④ AI 裁员占比前后对比（分组柱状） ---------- */
  const aiEl = document.getElementById('viz-ai');
  if (aiEl) {
    if (window._vizAI) window._vizAI.destroy();
    window._vizAI = new Chart(aiEl, {
      type: 'bar',
      data: {
        labels: [L === 'zh' ? '德国' : 'Germany', L === 'zh' ? '工业科技行业' : 'Industrial Tech'],
        datasets: [
          { label: L === 'zh' ? '早期（2020–23）' : 'Earlier (2020–23)', data: [11.63, 6.25], backgroundColor: '#CBD5E1', borderRadius: 5 },
          { label: L === 'zh' ? '2026 初' : 'Early 2026', data: [63.33, 75], backgroundColor: '#B45309', borderRadius: 5 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        scales: { y: { beginAtZero: true, ticks: { callback: v => v + '%' }, grid: { color: 'rgba(100,116,139,0.12)' } }, x: { grid: { display: false } } },
        plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 12, font: { size: 11 } } }, tooltip: { callbacks: { label: c => c.dataset.label + ': ' + c.parsed.y + '%' } } }
      }
    });
    document.getElementById('viz-ai-note').textContent = L === 'zh' ? 'AI 相关裁员占比整体从 11–14% 升至 38%（2026 初）' : 'Overall AI-related layoff share rose from 11–14% to 38% (early 2026)';
  }

  /* ---------- Tableau 看板 ① 周活跃用户（折线） ---------- */
  const dauEl = document.getElementById('dash-dau');
  if (dauEl) {
    if (window._dashDau) window._dashDau.destroy();
    const wk = Array.from({ length: 12 }, (_, i) => (L === 'zh' ? '第' : 'W') + (i + 1));
    window._dashDau = new Chart(dauEl, {
      type: 'line',
      data: {
        labels: wk,
        datasets: [
          { label: L === 'zh' ? '活跃用户' : 'Active users', data: [2100, 2280, 2450, 2390, 2620, 2780, 2900, 2840, 3050, 3120, 3200, 3256], borderColor: '#2F6B9E', backgroundColor: 'rgba(47,107,158,0.13)', fill: true, tension: 0.35, pointRadius: 2.5, pointBackgroundColor: '#2F6B9E', borderWidth: 2 },
          { label: L === 'zh' ? '新增注册' : 'New registrations', data: [420, 510, 480, 560, 610, 590, 680, 640, 720, 760, 790, 810], borderColor: '#3C9D6E', backgroundColor: 'rgba(60,157,110,0.08)', fill: true, tension: 0.35, pointRadius: 2.5, pointBackgroundColor: '#3C9D6E', borderWidth: 2 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: { y: { beginAtZero: true, grid: { color: 'rgba(120,120,120,0.10)' }, ticks: { font: { size: 10 } } }, x: { grid: { display: false }, ticks: { font: { size: 10 } } } },
        plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 6, font: { size: 11 } } } }
      }
    });
  }

  /* ---------- Tableau 看板 ② 用户角色分布（环形） ---------- */
  const rolesEl = document.getElementById('dash-roles');
  if (rolesEl) {
    if (window._dashRoles) window._dashRoles.destroy();
    window._dashRoles = new Chart(rolesEl, {
      type: 'doughnut',
      data: {
        labels: [L === 'zh' ? '学生' : 'Students', L === 'zh' ? '教师' : 'Teachers', L === 'zh' ? '管理员' : 'Admins'],
        datasets: [{ data: [14244, 3374, 1124], backgroundColor: ['#2F6B9E', '#3C9D6E', '#C08A3E'], borderColor: '#fff', borderWidth: 2, hoverOffset: 8 }]
      },
      options: { responsive: true, maintainAspectRatio: false, cutout: '56%', plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 7, padding: 10, font: { size: 11 } } } } }
    });
  }

  /* ---------- Tableau 看板 ③ 每周答题量（分组柱状） ---------- */
  const wdEl = document.getElementById('dash-weekday');
  if (wdEl) {
    if (window._dashWd) window._dashWd.destroy();
    const days = L === 'zh' ? ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    window._dashWd = new Chart(wdEl, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [
          { label: L === 'zh' ? '学生' : 'Students', data: [1240, 1380, 1420, 1350, 1180, 890, 760], backgroundColor: '#2F6B9E', borderRadius: 4 },
          { label: L === 'zh' ? '教师' : 'Teachers', data: [210, 235, 260, 245, 205, 120, 95], backgroundColor: '#8FB3D0', borderRadius: 4 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, grid: { color: 'rgba(120,120,120,0.10)' }, ticks: { font: { size: 10 } } }, x: { grid: { display: false }, ticks: { font: { size: 10 } } } }, plugins: { legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 6, font: { size: 11 } } } } }
    });
  }

  /* ---------- Tableau 看板 ④ 热门课程（横向柱状） ---------- */
  const coursesEl = document.getElementById('dash-courses');
  if (coursesEl) {
    if (window._dashCourses) window._dashCourses.destroy();
    const cnames = L === 'zh'
      ? ['Python 数据分析基础', 'SQL 实战', '机器学习入门', 'Tableau 可视化', '统计学基础']
      : ['Python for Data Analysis', 'SQL in Practice', 'Intro to Machine Learning', 'Tableau Visualization', 'Statistics Fundamentals'];
    window._dashCourses = new Chart(coursesEl, {
      type: 'bar',
      data: { labels: cnames, datasets: [{ data: [2840, 2310, 1980, 1650, 1420], backgroundColor: ['#2F6B9E', '#3C9D6E', '#C08A3E', '#9F1239', '#8FB3D0'], borderRadius: 5, maxBarThickness: 34 }] },
      options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, scales: { x: { beginAtZero: true, grid: { color: 'rgba(120,120,120,0.10)' }, ticks: { font: { size: 10 } } }, y: { grid: { display: false }, ticks: { font: { size: 10.5 } } } }, plugins: { legend: { display: false } } }
    });
  }
};
