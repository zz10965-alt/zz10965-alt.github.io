/* =========================================================================
 *  charts.js —— Chart.js 图表（技能雷达图 + 能力方向条）
 *  依赖 js/vendor/chart.umd.min.js；若 CDN/本地都未加载则优雅降级。
 * ========================================================================= */

/* 十六进制色 → rgba（带透明度），用于图表填充/雷达底色 */
function dashAlpha(hex, a) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
  if (!m) return 'rgba(120,120,120,' + a + ')';
  const n = parseInt(m[1], 16);
  return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
}

/* 数据看板图表配置（按 data.js 中 dashboard 项目的 charts 定义，支持 line/doughnut/hbar/grouped/radar） */
function buildDashConfig(cfg, L) {
  const labels = cfg.labels ? (L === 'zh' ? cfg.labels.zh : cfg.labels.en) : [];
  const legendBottom = { position: 'bottom', labels: { usePointStyle: true, boxWidth: 7, padding: 10, font: { size: 11 } } };
  const legendTop = { position: 'top', labels: { usePointStyle: true, boxWidth: 6, font: { size: 11 } } };
  switch (cfg.type) {
    case 'line':
      return {
        type: 'line',
        data: { labels, datasets: cfg.series.map(s => ({
          label: t(s.label), data: s.data,
          borderColor: s.color, backgroundColor: dashAlpha(s.color, 0.13),
          fill: !!s.fill, tension: 0.35, pointRadius: 2.5, pointBackgroundColor: s.color, borderWidth: 2
        })) },
        options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
          scales: { y: { beginAtZero: true, grid: { color: 'rgba(120,120,120,0.10)' }, ticks: { font: { size: 10 } } }, x: { grid: { display: false }, ticks: { font: { size: 10 } } } },
          plugins: { legend: legendTop } }
      };
    case 'doughnut':
      return {
        type: 'doughnut',
        data: { labels, datasets: [{ data: cfg.series[0].data, backgroundColor: cfg.series[0].colors, borderColor: '#fff', borderWidth: 2, hoverOffset: 8 }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '56%', plugins: { legend: legendBottom } }
      };
    case 'hbar':
      return {
        type: 'bar',
        data: { labels, datasets: [{ data: cfg.series[0].data, backgroundColor: cfg.series[0].colors, borderRadius: 5, maxBarThickness: 30 }] },
        options: { responsive: true, maintainAspectRatio: false, indexAxis: 'y',
          scales: { x: { beginAtZero: true, grid: { color: 'rgba(120,120,120,0.10)' }, ticks: { font: { size: 10 } } }, y: { grid: { display: false }, ticks: { font: { size: 10.5 } } } },
          plugins: { legend: { display: false } } }
      };
    case 'grouped':
      return {
        type: 'bar',
        data: { labels, datasets: cfg.series.map(s => ({ label: t(s.label), data: s.data, backgroundColor: s.color, borderRadius: 5 })) },
        options: { responsive: true, maintainAspectRatio: false,
          scales: { y: { beginAtZero: true, grid: { color: 'rgba(120,120,120,0.10)' }, ticks: { font: { size: 10 } } }, x: { grid: { display: false }, ticks: { font: { size: 10 } } } },
          plugins: { legend: legendBottom } }
      };
    case 'radar':
      return {
        type: 'radar',
        data: { labels, datasets: cfg.series.map(s => ({
          label: t(s.label), data: s.data, borderColor: s.color,
          backgroundColor: dashAlpha(s.color, 0.14), borderWidth: 2, pointBackgroundColor: s.color, pointRadius: 2.5
        })) },
        options: { responsive: true, maintainAspectRatio: false,
          scales: { r: { beginAtZero: true, min: 0, max: 5, ticks: { stepSize: 1, display: false, backdropColor: 'transparent' }, grid: { color: 'rgba(100,116,139,0.18)' }, angleLines: { color: 'rgba(100,116,139,0.18)' }, pointLabels: { color: '#334155', font: { size: 11 } } } },
          plugins: { legend: legendBottom } }
      };
    default:
      return { type: 'bar', data: { labels, datasets: [] }, options: { responsive: true, maintainAspectRatio: false } };
  }
}

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

  /* ---------- 数据看板图表（遍历所有 dashboard 项目的 charts，按类型自动渲染） ---------- */
  PORTFOLIO.projects.filter(p => p.type === 'dashboard').forEach(p => {
    (p.charts || []).forEach(cfg => {
      const el = document.getElementById(cfg.id);
      if (!el) return;
      const key = '_dash_' + cfg.id;
      if (window[key]) window[key].destroy();
      window[key] = new Chart(el, buildDashConfig(cfg, L));
    });
  });
};
