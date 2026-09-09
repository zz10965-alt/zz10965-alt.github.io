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
};
