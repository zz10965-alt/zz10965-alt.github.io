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
};
