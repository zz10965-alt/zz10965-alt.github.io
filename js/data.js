/* =========================================================================
 *  ★★★ 这是你唯一需要常改的文件（内容都在这里）★★★
 *  -------------------------------------------------------------------------
 *  改文字：直接改下面的 { en: "...", zh: "..." } 即可，英文在前、中文在后。
 *  加截图：把图片放进 assets/img/projects/ 文件夹，
 *          再把对应项目的 image 字段填成 "文件名.png"（例如 "medicare.png"）。
 *  改头像：替换 assets/img/profile.jpg 即可。
 *  改配色：改本文件顶部的 CATEGORIES 里的 color 值。
 *  语言切换 / 筛选 / 弹窗 / 图表 都是自动的，不用改别的文件。
 * ========================================================================= */

/* 4 个能力方向（筛选标签 + 项目分类 + 图表配色都用它们） */
const CATEGORIES = [
  { id: 'analysis',    en: 'Data Analysis & Business Insight', zh: '数据分析与商业洞察', color: '#2563EB' },
  { id: 'engineering', en: 'Data Engineering & Development',  zh: '数据工程与数据开发',   color: '#0D9488' },
  { id: 'ml',          en: 'ML & Statistical Modeling',       zh: '机器学习与统计建模',   color: '#F59E0B' },
  { id: 'viz',         en: 'Data Products & Visualization',   zh: '数据产品与可视化',     color: '#EC4899' }
];

/* ============================== 全站内容 ============================== */
window.PORTFOLIO = {

  /* ---------- 顶部导航 ---------- */
  nav: [
    { id: 'home',        en: 'Home',        zh: '首页' },
    { id: 'about',       en: 'About',       zh: '关于' },
    { id: 'experience',  en: 'Experience',  zh: '实习经历' },
    { id: 'projects',    en: 'Projects',    zh: '项目' },
    { id: 'engineering', en: 'Engineering', zh: '工程' },
    { id: 'research',    en: 'Research',    zh: '科研' },
    { id: 'awards',      en: 'Awards',      zh: '荣誉' },
    { id: 'contact',     en: 'Contact',     zh: '联系' }
  ],

  /* ---------- 首页 / 封面 Hero ---------- */
  hero: {
    name:     { en: 'Zhixian Zhang', zh: '张芷衔' },
    role:     { en: 'Data Analytics · Business Analytics · Data Science', zh: '数据分析 · 商业分析 · 数据科学' },
    tagline:  { en: 'Turning data into impact — from insight to decision.', zh: '让数据产生价值 —— 从洞察到决策。' },
    location: { en: 'New York, NY · Open to China & US roles', zh: '美国纽约 · 面向中美双市场机会' },
    intro:    { en: 'MS in Management and Analytics @ NYU (GPA 3.92/4.0). I turn messy data into clear decisions — through analysis, modeling, engineering, and visualization.',
                 zh: '纽约大学管理与分析硕士（GPA 3.92/4.0）。用分析、建模、工程与可视化，把复杂数据变成清晰决策。' },
    email:    { en: 'zzz0429x@163.com', zh: 'zzz0429x@163.com' },
    github:   'https://github.com/zz10965-alt',
    linkedin: ''
  },

  /* ---------- 关于 / About ---------- */
  about: {
    title: { en: 'About me', zh: '关于我' },
    paragraphs: [
      { en: 'I am a data generalist who can cover the full analytics lifecycle — from querying raw data and building pipelines, to statistical modeling and building the dashboards that drive decisions. My background spans both business analytics and software/data engineering, which lets me speak the language of both analysts and engineers.',
        zh: '我是一名能够覆盖完整数据分析生命周期的数据通才——从查询原始数据、搭建数据管道，到统计建模，再到做出驱动决策的可视化看板。我的背景横跨商业分析与软件/数据工程，能同时用分析师和工程师的语言工作。' },
      { en: 'I have delivered analytics at Google and NielsenIQ·GfK, built data platforms at an education-tech company, and published 7 papers plus a co-authored book on AI data systems.',
        zh: '我曾在谷歌、尼尔森 IQ·GfK 做数据分析，在一家教育科技公司搭建数据平台，并发表 7 篇论文、合著 1 部关于 AI 数据系统的专著。' }
    ],
    radarNote: { en: 'Skill radar — qualitative self-assessment (1–5), based on hands-on project & internship usage.',
                 zh: '技能雷达图 —— 基于项目与实习实际使用的定性自评（1–5 分）。' }
  },

  /* ---------- 教育 Education ---------- */
  education: [
    {
      school:   { en: 'New York University', zh: '纽约大学' },
      degree:   { en: 'M.S. in Management and Analytics', zh: '管理与分析 理学硕士' },
      detail:   { en: 'GPA 3.92 / 4.0', zh: 'GPA 3.92 / 4.0' },
      period:   '2025.09 – 2027.02',
      location: { en: 'New York, USA', zh: '美国纽约' },
      courses:  { en: 'Data-Driven Decision Making · Business Analytics · Quantitative Methods · ML Fundamentals · Database Management Systems',
                  zh: '数据驱动决策 · 商业分析 · 定量研究方法 · 机器学习基础 · 数据库管理系统' }
    },
    {
      school:   { en: 'Chongqing University of Technology', zh: '重庆理工大学' },
      degree:   { en: 'B.M. in Administration Management', zh: '管理学学士（行政管理）' },
      detail:   { en: 'Top 10% of major', zh: '专业前 10%' },
      period:   '2021.09 – 2025.05',
      location: { en: 'Chongqing, China', zh: '中国重庆' },
      courses:  { en: 'Statistics · Quantitative Research · Probability & Statistics · Python · Economics · Social Psychology',
                  zh: '统计学 · 量化研究 · 概率论与数理统计 · Python · 经济学 · 社会心理学' }
    }
  ],

  /* ---------- 技能雷达（6 轴，自评 1-5）---------- */
  skillsRadar: {
    labels: [
      { en: 'Python', zh: 'Python' },
      { en: 'SQL', zh: 'SQL' },
      { en: 'Statistics & ML', zh: '统计与建模' },
      { en: 'Visualization', zh: '数据可视化' },
      { en: 'Data Engineering', zh: '数据工程' },
      { en: 'Business Insight', zh: '业务沟通' }
    ],
    values: [4.2, 4.5, 4.0, 4.0, 3.5, 4.5]
  },

  /* ---------- 技能分组（文本列表）---------- */
  skillGroups: [
    { name: { en: 'Programming', zh: '编程语言' }, items: [
      { en: 'Python (Pandas / NumPy)', zh: 'Python (Pandas / NumPy)' },
      { en: 'SQL', zh: 'SQL' },
      { en: 'R', zh: 'R' },
      { en: 'Java', zh: 'Java' },
      { en: 'C# (.NET 8)', zh: 'C# (.NET 8)' }
    ] },
    { name: { en: 'Data & Analysis', zh: '数据分析' }, items: [
      { en: 'Data Cleaning', zh: '数据清洗' },
      { en: 'Descriptive Statistics', zh: '描述性统计' },
      { en: 'Hypothesis Testing (t / χ² / Kruskal-Wallis)', zh: '假设检验（t / χ² / Kruskal-Wallis）' },
      { en: 'Regression', zh: '回归分析' },
      { en: 'Pearson Correlation', zh: '皮尔逊相关' },
      { en: 'Clustering (K-Means)', zh: '聚类分析（K-Means）' },
      { en: 'Coefficient of Variation', zh: '变异系数' },
      { en: 'IQR Outlier Detection', zh: 'IQR 异常值检测' },
      { en: 'A/B Testing (methodology)', zh: 'A/B 测试（方法论）' },
      { en: 'User Segmentation', zh: '用户细分' }
    ] },
    { name: { en: 'Database & Engineering', zh: '数据库与工程' }, items: [
      { en: 'MySQL', zh: 'MySQL' },
      { en: 'SQL Server', zh: 'SQL Server' },
      { en: 'Relational Modeling', zh: '关系型建模' },
      { en: 'Stored Procedures', zh: '存储过程' },
      { en: 'ETL Basics', zh: 'ETL 基础' },
      { en: 'Spark', zh: 'Spark' },
      { en: 'Spring Boot', zh: 'Spring Boot' },
      { en: 'Git', zh: 'Git' }
    ] },
    { name: { en: 'Visualization & BI', zh: '可视化与 BI' }, items: [
      { en: 'Tableau', zh: 'Tableau' },
      { en: 'Power BI', zh: 'Power BI' },
      { en: 'Excel (Pivot / Functions)', zh: 'Excel（透视表 / 函数）' },
      { en: 'SPSS', zh: 'SPSS' }
    ] },
    { name: { en: 'Machine Learning', zh: '机器学习' }, items: [
      { en: 'Decision Tree', zh: '决策树' },
      { en: 'Random Forest', zh: '随机森林' },
      { en: 'Logistic Regression', zh: '逻辑回归' },
      { en: 'Spark ML', zh: 'Spark ML' },
      { en: 'Weka', zh: 'Weka' }
    ] }
  ],

  /* ---------- 实习经历 Experience（时间线 + 点击弹窗）---------- */
  experience: [
    {
      slug: 'google', accent: '#1E4E79', diagram: { en: 'assets/img/diagrams/google-en.svg', zh: 'assets/img/diagrams/google-zh.svg' },
      company:  { en: 'Google', zh: '谷歌（Google）' },
      role:     { en: 'Data Analyst Intern — Large Customer Sales (LCS) Ad Analytics', zh: '数据分析实习生 · 大客户销售（LCS）广告分析组' },
      location: { en: 'Beijing, China', zh: '中国北京' },
      period:   '2026.07 – 2026.09',
      summary:  { en: 'Supported ad-campaign analytics for large app clients — data extraction, KPI diagnosis and report automation.',
                  zh: '为大型 App 客户提供广告投放分析支持——数据提取、KPI 诊断与报表自动化。' },
      bullets: [
        { en: 'Wrote SQL (JOIN / GROUP BY / CASE WHEN / aggregation) to query 100K+ ad rows across 10+ app clients and 50+ campaigns, building analysis datasets by campaign / channel / time.',
          zh: '用 SQL（JOIN / GROUP BY / CASE WHEN / 聚合）跨 10+ App 客户、50+ 广告系列查询 10 万+ 条投放数据，按活动/渠道/时间搭建分析数据集。' },
        { en: 'Analyzed CTR, CVR, CPA, spend and conversions with Pandas — WoW/MoM, benchmark, drill-down and attribution to locate root causes of performance swings.',
          zh: '用 Pandas 分析 CTR/CVR/CPA/花费/转化等 KPI，周环比/月环比 + 基准 + 下钻 + 归因，定位表现波动根因。' },
        { en: 'Built a Tableau auto-report pipeline of 8 KPIs × 6 dimensions, cutting weekly data prep from 3h to 1h (adopted by later interns).',
          zh: '搭建 8 KPI × 6 维度 Tableau 自动报表管道，周数据准备 3h→1h，后续实习生沿用。' }
      ],
      tech: ['SQL', 'Python (Pandas)', 'Tableau'],
      metrics: [
        { value: '100K+', label: { en: 'ad rows queried', zh: '查询投放数据' } },
        { value: '50+',   label: { en: 'campaigns', zh: '广告系列' } },
        { value: '3h→1h', label: { en: 'weekly prep saved', zh: '周数据准备省时' } }
      ]
    },
    {
      slug: 'ai-solution', accent: '#0E7490', diagram: { en: 'assets/img/diagrams/ai-solution-en.svg', zh: 'assets/img/diagrams/ai-solution-zh.svg' },
      company:  { en: 'AI Solution', zh: 'AI Solution' },
      role:     { en: 'Data Development Intern', zh: '数据开发实习生' },
      location: { en: 'Covina, CA, USA', zh: '美国科维纳' },
      period:   '2026.05 – 2026.07',
      summary:  { en: 'Maintained the data layer of an education platform serving thousands of users.',
                  zh: '维护数千用户教育平台的数据层。' },
      bullets: [
        { en: 'Maintained 12+ relational SQL Server tables (users / question bank / answers), wiring joins, inserts, updates and stored procedures across the data chain.',
          zh: '维护 12+ 张 SQL Server 关联表（用户/题库/答题），联表查询/插入/更新/存储过程打通数据链路。' },
        { en: 'Optimized 10 stored procedures + 2 migration scripts on the C#/.NET 8 platform, implementing data validation / soft-delete / cascading to prevent accidental deletion and conflicts.',
          zh: '优化 C#/.NET 8 平台 10 个存储过程 + 2 个迁移脚本，实现数据校验/软删除/级联，规避误删与冲突。' },
        { en: 'Built a Tableau dashboard monitoring weekly registrations and core KPIs for a platform serving thousands of users and 1500+ questions.',
          zh: '为数千用户、1500+ 题目的平台搭建 Tableau 看板，监控周注册量及核心指标。' }
      ],
      tech: ['SQL Server', 'C# (.NET 8)', 'ASP.NET Core MVC', 'Tableau'],
      metrics: [
        { value: '12+',   label: { en: 'SQL Server tables', zh: '关联表' } },
        { value: '10',    label: { en: 'stored procedures optimized', zh: '存储过程优化' } },
        { value: '1000s', label: { en: 'platform users', zh: '平台用户' } }
      ]
    },
    {
      slug: 'nielsen', accent: '#B45309',
      company:  { en: 'NielsenIQ · GfK', zh: '尼尔森 IQ · GfK' },
      role:     { en: 'Business Analyst Intern — Market Research', zh: '商业分析实习生 · 市场研究部' },
      location: { en: 'Guangzhou, China', zh: '中国广州' },
      period:   '2025.05 – 2025.08',
      summary:  { en: 'Delivered consumer & market insights for a smartphone brand strategy.',
                  zh: '为手机品牌策略交付消费者与市场洞察。' },
      bullets: [
        { en: 'Cleaned and validated 2600+ consumer surveys (Saudi 1040 + Egypt 1641), handling missing values, inconsistencies, format errors and outliers.',
          zh: '清洗校验沙特 1040 + 埃及 1641 = 2600+ 份问卷，处理缺失/不一致/格式异常/离群。' },
        { en: 'Analyzed purchase drivers, pricing, brand preference and channel behavior with Excel / Python — descriptive stats + segment comparison + competitor scraping.',
          zh: '用 Excel/Python 分析购买驱动/定价/品牌偏好/渠道行为，描述统计 + 分群对比 + 竞品信息抓取。' },
        { en: 'Synthesized quantitative + qualitative insights across Saudi / Egypt / India into product positioning, regional launch and user-operation strategy, delivered to realme.',
          zh: '整合沙特/埃及/印度三国量化 + 定性洞察，输出产品定位/区域投放/用户运营策略，交付 realme。' }
      ],
      tech: ['Python', 'Excel', 'SPSS'],
      metrics: [
        { value: '2600+', label: { en: 'surveys cleaned', zh: '问卷清洗' } },
        { value: '3',     label: { en: 'markets synthesized', zh: '市场整合' } }
      ]
    },
    {
      slug: 'conch', accent: '#9F1239',
      company:  { en: 'Chengdu Conch Profiles', zh: '成都海螺型材' },
      role:     { en: 'Marketing Department Assistant', zh: '市场部 助理' },
      location: { en: 'Chengdu, China', zh: '中国成都' },
      period:   '2023 & 2024 (summer)',
      summary:  { en: 'Supported B2B market research and marketing campaign execution.',
                  zh: '支持 B2B 市场调研与营销活动执行。' },
      bullets: [
        { en: 'Conducted market research and competitor analysis for building-materials products.',
          zh: '开展建材产品市场调研与竞品分析。' },
        { en: 'Assisted campaign execution, prepared promotional materials, and statistically summarized survey results.',
          zh: '协助营销活动执行、制作宣传物料，并对调研结果做统计汇总。' }
      ],
      tech: ['Excel', 'Survey Analysis'],
      metrics: [
        { value: '2', label: { en: 'summers', zh: '暑期经历' } }
      ]
    }
  ],

  /* ---------- 项目 Projects（14 个分析项目 + 3 个数据看板，可多标签筛选）----------
   *  type: 'dashboard' 的条目 = 数据看板项目（挂在「数据产品与可视化」分类下），全宽展示。
   *  image: 留空 = 显示占位图；填 "文件名.png" 即可显示你的截图 */
  projects: [
    {
      slug: 'medicare', title: { en: 'US Medicare Payment Variation Analysis', zh: '美国医保支付区域差异分析' },
      categories: ['analysis', 'ml'],
      period: { en: '2026.03 – 2026.05', zh: '2026.03 – 2026.05' },
      role: { en: 'Team Lead · team of 3', zh: '项目负责人 · 3 人团队' },
      image: '',
      summary: { en: 'Analyzed state-to-state variation in US Medicare inpatient payments across states and DRGs.',
                 zh: '分析美国医保住院支付在州与 DRG 之间的区域差异。' },
      highlights: [
        { en: 'Cleaned 146,427 CMS inpatient records (2,945 hospitals, 51 states, 534 DRGs) → 13,845 state-DRG observations.',
          zh: '清洗 146,427 条 CMS 住院记录（2945 医院、51 州、534 DRG）→ 聚合为 13,845 条州-DRG 观测。' },
        { en: 'Found a 2.5× gap between the highest and lowest states (MD $39,922 vs VT $15,674); 95.3% of DRGs exceed the 15% variation threshold.',
          zh: '最高/最低州支付差 2.5×（MD $39,922 vs VT $15,674）；95.3% DRG 超 15% 波动阈值。' },
        { en: 'Applied Kruskal-Wallis, χ², Dunn-Bonferroni post-hoc and K-Means (k=3) to cluster states and flag cost anomalies.',
          zh: '用 Kruskal-Wallis、χ²、Dunn-Bonferroni 事后检验与 K-Means(k=3) 聚类州并标记成本异常。' }
      ],
      tech: ['Python (Pandas)', 'SQL', 'SPSS', 'Tableau'],
      metrics: [
        { value: '2.5×',   label: { en: 'payment gap', zh: '支付差距' } },
        { value: '146,427', label: { en: 'records cleaned', zh: '清洗记录' } },
        { value: '95.3%',  label: { en: 'DRGs over threshold', zh: 'DRG 超阈值' } }
      ],
      chart: {
        id: 'proj-medicare-chart', type: 'hbar',
        title: { en: 'Average inpatient payment — highest vs lowest state', zh: '平均住院支付 —— 最高 vs 最低州' },
        note: { en: 'Per-stay payment, a 2.5× gap between Maryland and Vermont.', zh: '单次住院支付，马里兰与佛蒙特相差 2.5 倍。' },
        labels: { en: ['Maryland (MD)', 'Vermont (VT)'], zh: ['马里兰（MD）', '佛蒙特（VT）'] },
        series: [ { data: [39922, 15674], colors: ['#2563EB', '#94A3B8'] } ]
      }
    },
    {
      slug: 'mysql-sales', title: { en: 'Customer Sales Analysis & Database Design', zh: 'MySQL 销售与客户分析' },
      categories: ['analysis', 'engineering'],
      period: { en: '2025.10 – 2025.12', zh: '2025.10 – 2025.12' },
      role: { en: 'Team Lead · team of 5', zh: '项目负责人 · 5 人团队' },
      image: '',
      summary: { en: 'End-to-end relational modeling to advanced SQL analytics for a sales database.',
                 zh: '从关系型建模到高阶 SQL 分析的销售数据库全流程。' },
      highlights: [
        { en: 'Designed customer / order / product / geography relational models with primary-foreign-key constraints.',
          zh: '设计客户/订单/产品/地理信息关系型数据模型，含主外键约束。' },
        { en: 'Wrote multi-table joins, subqueries, RANK() and ROLLUP for revenue, high-value customers and country-level sales.',
          zh: '用多表联查/子查询/RANK()/ROLLUP 分析营收、高价值客户与分国家销售。' },
        { en: 'Optimized high-frequency queries with composite and functional indexes.',
          zh: '用复合索引/函数索引优化高频查询性能。' }
      ],
      tech: ['MySQL', 'SQL', 'Database Design'],
      metrics: [
        { value: '5', label: { en: 'entities modeled', zh: '建模实体' } },
        { value: '3+', label: { en: 'index types', zh: '索引类型' } }
      ]
    },
    {
      slug: 'attrition', title: { en: 'Employee Attrition & Workplace AI-Risk Analysis', zh: '员工流失与职场 AI 风险分析' },
      categories: ['ml', 'analysis'],
      period: { en: '2026.08', zh: '2026.08' },
      role: { en: 'Individual project', zh: '个人项目' },
      image: '',
      summary: { en: 'Modeled the drivers of employee attrition (~10K employees) and the role of perceived AI job risk.',
                 zh: '建模近万名员工的流失驱动因素及 AI 岗位风险感知的作用。' },
      highlights: [
        { en: 'EDA on ~10K employee records (8 departments, 25 job titles) with pay, tenure, engagement, WLB and AI-risk perception.',
          zh: '对近万名员工记录（8 部门、25 岗位）做 EDA，含薪酬/司龄/敬业度/工作生活平衡/AI 风险感知。' },
        { en: 'Logistic regression (p<0.001) + Cohen\'s d effect sizes; overall attrition 17.9%; burnout (d=0.854) and engagement (d=-0.828) are the strongest drivers.',
          zh: '逻辑回归(p<0.001)+Cohen\'s d 效应量；整体流失率 17.9%；burnout(d=0.854) 与 engagement(d=-0.828) 为最强驱动。' },
        { en: 'AI-risk perception is an independent but secondary factor; customer-service/sales show the highest attrition (24.1% / 20.0%).',
          zh: 'AI 风险感知独立但次要；客服/销售流失最高（24.1%/20.0%）。' }
      ],
      tech: ['Python (Pandas)', 'SPSS', 'Logistic Regression'],
      metrics: [
        { value: '17.9%', label: { en: 'overall attrition', zh: '整体流失率' } },
        { value: '~10K',  label: { en: 'employees analyzed', zh: '员工记录' } },
        { value: 'd=0.854', label: { en: 'strongest driver (burnout)', zh: '最强驱动(burnout)' } }
      ],
      chart: {
        id: 'proj-attrition-chart', type: 'hbar',
        title: { en: 'Attrition rate — overall vs top departments', zh: '流失率 —— 整体 vs 主要部门' },
        note: { en: 'Customer service and sales show the highest attrition.', zh: '客服与销售部门流失率最高。' },
        labels: { en: ['Overall', 'Customer service', 'Sales'], zh: ['整体', '客服', '销售'] },
        series: [ { data: [17.9, 24.1, 20.0], colors: ['#2563EB', '#F59E0B', '#EF4444'] } ]
      }
    },
    {
      slug: 'ai-layoffs', title: { en: 'Global AI & Tech Layoffs Analysis (2020–2026)', zh: '全球 AI 科技裁员分析（2020–2026）' },
      categories: ['analysis'],
      period: { en: '2026', zh: '2026' },
      role: { en: 'Individual project', zh: '个人项目' },
      image: '',
      summary: { en: 'Quantified how the share of layoff causes tied to AI automation evolved across 1,850 layoff events.',
                 zh: '量化 1850 起裁员事件中 AI 自动化占比的演变。' },
      highlights: [
        { en: 'Full EDA on 1,850 layoff events (74 companies, 18 countries) — AI-related share rose from 11–14% (2020–23) to 38% (early 2026).',
          zh: '对 1850 起裁员事件（74 公司、18 国）全流程 EDA——AI 相关占比从 11–14% 升至 38%。' },
        { en: 'Identified high-exposure industries (Industrial Tech AI share 6.25%→75%) and countries (Germany 11.63%→63.33%).',
          zh: '识别高暴露行业（工业科技 AI 占比 6.25%→75%）与国家（德国 11.63%→63.33%）。' }
      ],
      tech: ['Python (Pandas)', 'Jupyter'],
      metrics: [
        { value: '1,850', label: { en: 'layoff events', zh: '裁员事件' } },
        { value: '38%',   label: { en: 'AI share (2026)', zh: 'AI 占比(2026)' } }
      ],
      chart: {
        id: 'proj-ai-chart', type: 'grouped',
        title: { en: 'AI-related share of layoff causes — 2020–23 vs 2026', zh: 'AI 相关裁员占比 —— 2020–23 对比 2026' },
        note: { en: 'Share of layoff causes tied to AI automation; overall 11–14% → 38%.', zh: 'AI 自动化相关裁员占比；整体从 11–14% 升至 38%。' },
        labels: { en: ['Overall', 'Industrial Tech (industry)', 'Germany (country)'], zh: ['总体', '工业科技（行业）', '德国（国家）'] },
        series: [
          { label: { en: '2020–23', zh: '2020–23' }, data: [12.5, 6.25, 11.63], color: '#94A3B8' },
          { label: { en: '2026', zh: '2026' }, data: [38, 75, 63.33], color: '#F59E0B' }
        ]
      }
    },
    {
      slug: 'patent-nlp', title: { en: 'Patent Infringement Detection (NLP + ML)', zh: '专利侵权识别（NLP + 机器学习）' },
      categories: ['ml'],
      period: { en: '2026', zh: '2026' },
      role: { en: 'Individual project', zh: '个人项目' },
      image: '',
      summary: { en: 'Detected potential patent infringement via text similarity and ML classification.',
                 zh: '通过文本相似度与机器学习分类识别潜在专利侵权。' },
      highlights: [
        { en: 'Preprocessed product descriptions and patent claims (cleaning, tokenization, stop-word removal).',
          zh: '预处理产品描述与专利声明（清洗、分词、去停用词/特殊字符）。' },
        { en: 'Built a TF-IDF matrix, computed cosine similarity between products and patents, and trained an ML model to predict infringement.',
          zh: '构建 TF-IDF 特征矩阵、计算产品-专利余弦相似度，训练 ML 模型预测侵权。' }
      ],
      tech: ['Python', 'scikit-learn', 'TF-IDF', 'NLP'],
      metrics: [
        { value: 'TF-IDF', label: { en: 'vectorization', zh: '向量化' } },
        { value: 'ML', label: { en: 'classification', zh: '分类预测' } }
      ]
    },
    {
      slug: 'majors-ai', title: { en: 'College Majors, Earnings & AI-Exposure Analysis', zh: '大学专业、收入与 AI 暴露度分析' },
      categories: ['analysis'],
      period: { en: '2026', zh: '2026' },
      role: { en: 'Individual project', zh: '个人项目' },
      image: '',
      summary: { en: 'Analyzed how AI exposure relates to earnings and growth across 227,980 college programs.',
                 zh: '分析 22.8 万条院校-专业记录中 AI 暴露度与收入/增长的关系。' },
      highlights: [
        { en: 'Correlation analysis on 227,980 program records (6,774 institutions, 429 majors, 49 fields) — AI-software exposure correlates with median earnings r=0.534 and job growth r=0.484.',
          zh: '对 227,980 条记录（6774 院校、429 专业、49 领域）做相关分析——AI 暴露度与中位收入 r=0.534、职业增长 r=0.484。' },
        { en: 'Identified high-value majors (Engineering, Computer & Info Sciences, Math & Statistics).',
          zh: '识别高价值专业（工程、计算机与信息科学、数学与统计）。' }
      ],
      tech: ['Python (Pandas)', 'Jupyter'],
      metrics: [
        { value: '227,980', label: { en: 'program records', zh: '专业记录' } },
        { value: 'r=0.534', label: { en: 'AI exposure × earnings', zh: 'AI 暴露×收入' } }
      ]
    },
    {
      slug: 'ev-battery', title: { en: 'EV Battery Failure Risk Analysis', zh: '电动汽车电池故障风险分析' },
      categories: ['ml', 'analysis'],
      period: { en: '2026', zh: '2026' },
      role: { en: 'Individual project', zh: '个人项目' },
      image: '',
      summary: { en: 'Predicted battery failure risk from 200,000 vehicle-battery records and usage signals.',
                 zh: '基于 20 万条车辆-电池记录与使用信号预测电池故障风险。' },
      highlights: [
        { en: 'EDA on 200,000 records (20 brands, 9 battery makers, 5 cell chemistries); overall failure rate 9.96%.',
          zh: '对 20 万条记录（20 品牌、9 电池厂商、5 电芯体系）做 EDA；整体故障率 9.96%。' },
        { en: 'Identified high-failure chemistries / brands / usage patterns; capacity loss, aging score, voltage imbalance and thermal risk correlate strongly with failure.',
          zh: '识别高故障电芯体系/品牌/使用模式；容量损失、老化分、电压失衡、热风险等信号与故障强相关。' }
      ],
      tech: ['Python (Pandas)', 'Jupyter'],
      metrics: [
        { value: '200K',  label: { en: 'records analyzed', zh: '记录数' } },
        { value: '9.96%', label: { en: 'failure rate', zh: '故障率' } }
      ]
    },
    {
      slug: 'furniture-db', title: { en: 'Furniture Company Database System', zh: '家具公司数据库系统' },
      categories: ['engineering'],
      period: { en: '2025.09 – 2025.12', zh: '2025.09 – 2025.12' },
      role: { en: 'Team member · team of 5', zh: '团队成员 · 5 人团队' },
      image: '',
      summary: { en: 'Designed a relational database with modeling, complex SQL, indexes and stored procedures.',
                 zh: '设计含数据建模、复杂 SQL、索引与存储过程的关系型数据库。' },
      highlights: [
        { en: 'Modeled furniture sales entities (customer / order / product / geography) with ER diagrams and stage-table loading.',
          zh: '设计家具销售实体（客户/订单/产品/地理）ER 模型与 stage 表加载。' },
        { en: 'Wrote 3+ table joins, subqueries, analytic functions, and built non-unique / composite / functional indexes.',
          zh: '编写 3+ 表 join、子查询、分析函数，并建立非唯一/复合/函数索引。' },
        { en: 'Implemented stored procedures for full-table statistics.',
          zh: '实现统计全表数据的存储过程。' }
      ],
      tech: ['MySQL', 'MySQL Workbench', 'SQL'],
      metrics: [
        { value: '4', label: { en: 'phases delivered', zh: '阶段交付' } }
      ]
    },
    {
      slug: 'applied-prog', title: { en: 'Applied Programming & Database Coursework', zh: '应用编程与数据库课程作业' },
      categories: ['engineering', 'ml'],
      period: { en: '2026 (Spring)', zh: '2026（春）' },
      role: { en: 'Individual coursework', zh: '个人课程作业' },
      image: '',
      summary: { en: 'Hands-on exercises across SPSS, Weka, Python, Spark ML, R and SQL.',
                 zh: '覆盖 SPSS、Weka、Python、Spark ML、R、SQL 的编程与数据分析练习。' },
      highlights: [
        { en: 'SPSS linear regression predicting income (Age+Edu); T-test comparing remote vs on-site satisfaction.',
          zh: 'SPSS 线性回归预测收入（Age+Edu）；T 检验比较远程/现场满意度。' },
        { en: 'Weka wine-quality prediction — Random Forest (MAE 0.429) beats Linear Regression (MAE 0.5017).',
          zh: 'Weka 葡萄酒质量预测——随机森林(MAE 0.429) 优于线性回归(MAE 0.5017)。' },
        { en: 'Python CA assignments, Spark ML exercises, R notebooks, and SQL DDL/DML with check constraints & stored procedures.',
          zh: 'Python 编程练习、Spark ML 练习、R notebook，以及含 check constraint 与存储过程的 SQL。' }
      ],
      tech: ['SPSS', 'Weka', 'Python', 'Spark ML', 'R', 'SQL'],
      metrics: [
        { value: '6', label: { en: 'tools practiced', zh: '工具练习' } }
      ]
    },
    {
      slug: 'retention', title: { en: 'Predicting Employee Retention (Quantitative)', zh: '员工留任意愿定量预测' },
      categories: ['ml'],
      period: { en: '2025.09 – 2025.12', zh: '2025.09 – 2025.12' },
      role: { en: 'Team member · team of 5', zh: '团队成员 · 5 人团队' },
      image: '',
      summary: { en: 'Modeled 12-month retention intent with moderated and multiple linear regression.',
                 zh: '用调节回归与多元线性回归预测员工 12 个月留任意愿。' },
      highlights: [
        { en: 'Modeled retention intent (1–100) against WFH ratio, commute time, job satisfaction and hourly pay (N=1,000).',
          zh: '以 WFH 比例、通勤时间、工作满意度、时薪预测留任意愿（1–100，N=1000）。' },
        { en: 'Tested the moderating role of employment status (full-time vs part-time) with moderated regression + model diagnostics.',
          zh: '用调节回归 + 模型诊断检验雇佣状态（全职/兼职）的调节效应。' }
      ],
      tech: ['SPSS', 'R', 'Moderated Regression'],
      metrics: [
        { value: 'N=1,000', label: { en: 'sample size', zh: '样本量' } }
      ]
    },
    {
      slug: 'fengdu', title: { en: 'Collaborative Governance of Elderly-Childcare (Fengdu)', zh: '丰都「一老一小」协同治理研究' },
      categories: ['analysis'],
      period: { en: '2023 – 2024', zh: '2023 – 2024' },
      role: { en: 'First author / lead', zh: '第一作者 / 负责人' },
      image: '',
      summary: { en: 'Case study on multi-actor collaborative governance of an elderly-childcare mutual-aid project.',
                 zh: '对一老一小互助项目多主体协同治理机制的案例研究。' },
      highlights: [
        { en: 'Conducted surveys, field visits and interviews to study the "Garden" elderly-childcare mutual-aid project in Fengdu County.',
          zh: '用问卷 + 现场勘查 + 访谈调研丰都县「花园里」一老一小互助项目。' },
        { en: 'Proposed a multi-actor collaborative governance design and long-term strategy; won the National College Student Social Security Case Competition Excellence Award.',
          zh: '提出多主体协同优化设计与长效策略；获第三届全国大学生社会保障案例大赛优秀奖（国家级）。' }
      ],
      tech: ['Survey Research', 'Interview', 'SPSS'],
      metrics: [
        { value: { en: 'National', zh: '国家级' }, label: { en: 'case award', zh: '案例大赛' } }
      ]
    },
    {
      slug: 'hualongqiao', title: { en: 'Low-Carbon Community Governance (Undergrad Thesis)', zh: '化龙桥街道低碳社区建设实证分析' },
      categories: ['analysis'],
      period: { en: '2024.09 – 2025.05', zh: '2024.09 – 2025.05' },
      role: { en: 'First author · independent', zh: '一作 · 独立完成' },
      image: '',
      summary: { en: 'Empirical thesis on low-carbon community building using the SFIC collaborative-governance model.',
                 zh: '以 SFIC 协同治理模型为框架的低碳社区建设实证论文。' },
      highlights: [
        { en: 'Applied the SFIC model (starting conditions / facilitative leadership / institutional design / collaborative process) to evaluate low-carbon community outcomes.',
          zh: '以 SFIC 模型（起始条件/催化领导/制度设计/协同过程）实证分析低碳建设成效与困境。' },
        { en: 'Combined questionnaires, in-depth interviews and quantitative analysis (reliability / validity checks) to propose an optimization framework.',
          zh: '问卷 + 深度访谈 + 定量分析（信度/效度检验），提出「资源均衡—党政引领—激励相容—共识构建」优化框架。' }
      ],
      tech: ['Questionnaire', 'Interview', 'SPSS'],
      metrics: [
        { value: 'SFIC', label: { en: 'governance model', zh: '治理模型' } }
      ]
    },
    {
      slug: 'wujiang', title: { en: 'Rural Elderly Social Support (Wujiang Basin)', zh: '乌江流域农村老人社会支持研究' },
      categories: ['analysis', 'ml'],
      period: { en: '2023 – 2024', zh: '2023 – 2024' },
      role: { en: 'Research lead', zh: '调研负责人' },
      image: '',
      summary: { en: 'Compared rural elderly social support across four mutual-aid elderly-care models.',
                 zh: '对比 4 种互助养老模式下农村老人社会支持的差异。' },
      highlights: [
        { en: 'Surveyed 5 districts and 14 villages across the Wujiang basin (Wulong, Fuling, Pengshui, Youyang, Enshi).',
          zh: '调研乌江流域 5 区 14 村（武隆、涪陵、彭水、酉阳、恩施）。' },
        { en: 'Descriptive statistics + multivariate logistic regression in SPSS 27.0, with reliability / validity checks.',
          zh: 'SPSS 27.0 描述性分析 + 多元 logistic 回归，含信度/效度检验。' }
      ],
      tech: ['SPSS', 'Logistic Regression', 'Questionnaire'],
      metrics: [
        { value: { en: '5 districts · 14 villages', zh: '5区14村' }, label: { en: 'fieldwork scope', zh: '调研范围' } },
        { value: '4', label: { en: 'care models compared', zh: '养老模式对比' } }
      ]
    },
    {
      slug: 'migrated-elderly', title: { en: 'Social Adaptation of Migrating Elderly', zh: '随子女迁居老人社会适应性研究' },
      categories: ['analysis'],
      period: { en: '2022 – 2024', zh: '2022 – 2024' },
      role: { en: 'Project lead · first author', zh: '项目负责人 · 第一作者' },
      image: '',
      summary: { en: 'Studied social adaptation of the ~18M elderly who migrate with their children.',
                 zh: '针对 1800 万随迁老人群体，研究其社会适应现状与影响因素。' },
      highlights: [
        { en: 'Designed two questionnaires (elderly 55+ and their children) plus semi-structured interviews with four actors (elderly / children / community / government).',
          zh: '设计两类问卷（55 岁+随迁老人 + 子女）+ 四主体（老人/子女/社区/政府）半结构式访谈。' },
        { en: 'Built a "happiness model" for migrating elderly; selected for the Challenge Cup and Innovation-Entrepreneurship program.',
          zh: '构建随迁老人「幸福新模式」；获挑战杯校内选拔 + 大创计划立项。' }
      ],
      tech: ['Questionnaire', 'Interview', 'SPSS'],
      metrics: [
        { value: { en: '~18M', zh: '1800万' }, label: { en: 'target population', zh: '目标群体' } }
      ]
    },
    {
      slug: 'db-platform', type: 'dashboard', theme: '#0D9488',
      title: { en: 'Learning Platform Ops Dashboard', zh: '教学平台运营看板' },
      categories: ['viz'], period: { en: '2026', zh: '2026' },
      role: { en: 'Data Development Intern · AI Solution', zh: '数据开发实习生 · AI Solution' },
      summary: { en: 'Tableau-style ops dashboard monitoring registrations, daily active users, study hours and course performance for an ed-tech platform (illustrative sample data).',
                 zh: 'Tableau 风格运营看板，监控教学平台的注册、日活、学习时长与课程表现（示意数据）。' },
      tech: ['Tableau', 'SQL Server', 'Chart.js'],
      metrics: [
        { value: '18,742', label: { en: 'total users', zh: '总用户' } },
        { value: '68.3%', label: { en: 'completion rate', zh: '完成率' } }
      ],
      kpis: [
        { label: { en: 'Total users', zh: '总注册用户' }, value: '18,742', delta: { en: '+12.4% MoM', zh: '环比 +12.4%' }, up: true },
        { label: { en: 'Daily active users', zh: '日活跃用户' }, value: '3,256', delta: { en: '+8.1% MoM', zh: '环比 +8.1%' }, up: true },
        { label: { en: 'Monthly study hours', zh: '本月学习时长' }, value: '41,920', delta: { en: '+5.6% MoM', zh: '环比 +5.6%' }, up: true },
        { label: { en: 'Completion rate', zh: '课程完成率' }, value: '68.3%', delta: { en: '+2.1 pp', zh: '+2.1 pp' }, up: true }
      ],
      charts: [
        { id: 'db1-c1', span: 'full', type: 'line', title: { en: 'Weekly Active Users — Last 12 Weeks', zh: '周活跃用户 —— 近 12 周' }, note: { en: 'Active users & new registrations by week.', zh: '按周统计的活跃用户与新注册。' },
          labels: { en: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'], zh: ['第1周','第2周','第3周','第4周','第5周','第6周','第7周','第8周','第9周','第10周','第11周','第12周'] },
          series: [
            { label: { en: 'Active users', zh: '活跃用户' }, data: [2100,2280,2450,2390,2620,2780,2900,2840,3050,3120,3200,3256], color: '#0D9488', fill: true },
            { label: { en: 'New registrations', zh: '新增注册' }, data: [420,510,480,560,610,590,680,640,720,760,790,810], color: '#F59E0B', fill: true }
          ] },
        { id: 'db1-c2', span: 'half', type: 'doughnut', title: { en: 'User Role Mix', zh: '用户角色分布' }, note: { en: 'Registered users by role.', zh: '注册用户按角色占比。' },
          labels: { en: ['Students','Teachers','Admins'], zh: ['学生','教师','管理员'] },
          series: [ { data: [14244,3374,1124], colors: ['#0D9488','#2563EB','#EAB308'] } ] },
        { id: 'db1-c3', span: 'half', type: 'hbar', title: { en: 'Top Courses by Enrollment', zh: '热门课程（按报名人数）' }, note: { en: 'Top 5 courses by cumulative enrollment.', zh: '累计报名人数前 5 的课程。' },
          labels: { en: ['Python for Data Analysis','SQL in Practice','Intro to Machine Learning','Tableau Visualization','Statistics Fundamentals'], zh: ['Python 数据分析基础','SQL 实战','机器学习入门','Tableau 可视化','统计学基础'] },
          series: [ { data: [2840,2310,1980,1650,1420], colors: ['#0D9488','#2563EB','#EAB308','#EC4899','#0EA5E9'] } ] }
      ]
    },
    {
      slug: 'db-ads', type: 'dashboard', theme: '#F59E0B',
      title: { en: 'Ad Campaign Analytics Dashboard', zh: '广告投放分析看板' },
      categories: ['viz'], period: { en: '2026', zh: '2026' },
      role: { en: 'Data Analyst Intern · Google LCS', zh: '数据分析实习生 · 谷歌 LCS' },
      summary: { en: 'Ad-campaign KPI dashboard tracking CTR, CVR, CPA and channel spend for large app clients (illustrative sample data).',
                 zh: '面向大型 App 客户的广告投放 KPI 看板，追踪 CTR、CVR、CPA 与渠道花费（示意数据）。' },
      tech: ['Tableau', 'SQL', 'Python (Pandas)'],
      metrics: [
        { value: '2.4%', label: { en: 'CTR', zh: '点击率' } },
        { value: '$14.2', label: { en: 'avg CPA', zh: '平均获客成本' } }
      ],
      kpis: [
        { label: { en: 'Total ad spend', zh: '广告总花费' }, value: '$128,400', delta: { en: '+6.2% WoW', zh: '周环比 +6.2%' }, up: true },
        { label: { en: 'CTR', zh: '点击率' }, value: '2.4%', delta: { en: '+0.3 pp', zh: '+0.3 pp' }, up: true },
        { label: { en: 'CVR', zh: '转化率' }, value: '5.8%', delta: { en: '+0.4 pp', zh: '+0.4 pp' }, up: true },
        { label: { en: 'Avg CPA', zh: '平均获客成本' }, value: '$14.20', delta: { en: '-8.5%', zh: '-8.5%' }, up: true }
      ],
      charts: [
        { id: 'db2-c1', span: 'full', type: 'line', title: { en: 'Weekly CTR & CVR', zh: '周点击率与转化率' }, note: { en: 'Click-through and conversion rate, 8 weeks.', zh: '近 8 周点击率与转化率走势。' },
          labels: { en: ['W1','W2','W3','W4','W5','W6','W7','W8'], zh: ['第1周','第2周','第3周','第4周','第5周','第6周','第7周','第8周'] },
          series: [
            { label: { en: 'CTR %', zh: '点击率' }, data: [2.1,2.2,2.0,2.3,2.2,2.4,2.3,2.4], color: '#F59E0B', fill: false },
            { label: { en: 'CVR %', zh: '转化率' }, data: [5.2,5.4,5.3,5.6,5.5,5.7,5.6,5.8], color: '#2563EB', fill: false }
          ] },
        { id: 'db2-c2', span: 'half', type: 'doughnut', title: { en: 'Spend by Channel', zh: '渠道花费占比' }, note: { en: 'Share of total ad spend.', zh: '广告花费按渠道占比。' },
          labels: { en: ['Search','Display','Video','Social','In-app'], zh: ['搜索','展示','视频','社交','应用内'] },
          series: [ { data: [42,26,18,9,5], colors: ['#F59E0B','#2563EB','#EC4899','#0D9488','#0EA5E9'] } ] },
        { id: 'db2-c3', span: 'half', type: 'hbar', title: { en: 'CPA by Channel', zh: '各渠道获客成本（CPA）' }, note: { en: 'Cost per acquisition, lower is better.', zh: '每获客成本，越低越好。' },
          labels: { en: ['Search','In-app','Video','Social','Display'], zh: ['搜索','应用内','视频','社交','展示'] },
          series: [ { data: [12.4,13.1,15.6,16.9,18.2], colors: ['#0D9488','#0EA5E9','#F59E0B','#EC4899','#2563EB'] } ] }
      ]
    },
    {
      slug: 'db-market', type: 'dashboard', theme: '#EC4899',
      title: { en: 'Smartphone Market Research Dashboard', zh: '手机市场研究看板' },
      categories: ['viz'], period: { en: '2025', zh: '2025' },
      role: { en: 'Business Analyst Intern · NielsenIQ GfK', zh: '商业分析实习生 · 尼尔森 IQ GfK' },
      summary: { en: 'Consumer & brand insight dashboard from 2,600+ surveys across Saudi Arabia, Egypt and India (illustrative sample data).',
                 zh: '基于沙特、埃及、印度 2600+ 份问卷的消费者与品牌洞察看板（示意数据）。' },
      tech: ['Excel', 'SPSS', 'Python'],
      metrics: [
        { value: '2,600+', label: { en: 'surveys', zh: '问卷' } },
        { value: '3', label: { en: 'markets', zh: '市场' } }
      ],
      kpis: [
        { label: { en: 'Surveys cleaned', zh: '清洗问卷' }, value: '2,600+', delta: { en: '1040 + 1641', zh: '1040 + 1641' }, up: true },
        { label: { en: 'Markets', zh: '覆盖市场' }, value: '3', delta: { en: 'Saudi · Egypt · India', zh: '沙特·埃及·印度' }, up: true },
        { label: { en: 'Top brand share', zh: 'Top 品牌份额' }, value: '34%', delta: { en: 'Brand A', zh: '品牌 A' }, up: true },
        { label: { en: 'Citing price', zh: '首选价格因素' }, value: '68%', delta: { en: 'top driver', zh: '首要驱动' }, up: true }
      ],
      charts: [
        { id: 'db3-c1', span: 'full', type: 'hbar', title: { en: 'Brand Preference Share', zh: '品牌偏好份额' }, note: { en: 'Top 5 brands by stated preference.', zh: '消费者偏好前 5 品牌份额。' },
          labels: { en: ['Brand A','Brand B','Brand C','Brand D','Brand E'], zh: ['品牌 A','品牌 B','品牌 C','品牌 D','品牌 E'] },
          series: [ { data: [34,26,18,12,10], colors: ['#EC4899','#2563EB','#F59E0B','#0D9488','#0EA5E9'] } ] },
        { id: 'db3-c2', span: 'half', type: 'radar', title: { en: 'Purchase Drivers by Market', zh: '购买驱动因素（分市场）' }, note: { en: 'Importance score 1–5 by market.', zh: '各市场购买因素重要度（1–5 分）。' },
          labels: { en: ['Price','Brand','Performance','Battery','Camera','Design'], zh: ['价格','品牌','性能','续航','相机','外观'] },
          series: [
            { label: { en: 'Saudi', zh: '沙特' }, data: [4.6,3.8,4.2,4.0,3.9,3.5], color: '#EC4899' },
            { label: { en: 'Egypt', zh: '埃及' }, data: [4.8,3.5,3.9,4.1,3.6,3.3], color: '#2563EB' },
            { label: { en: 'India', zh: '印度' }, data: [4.4,4.0,4.4,3.8,4.1,3.7], color: '#F59E0B' }
          ] },
        { id: 'db3-c3', span: 'half', type: 'grouped', title: { en: 'Purchase Intent by Market', zh: '购买意向（分市场）' }, note: { en: 'Share of respondents by intent.', zh: '受访者购买意向占比。' },
          labels: { en: ['Saudi','Egypt','India'], zh: ['沙特','埃及','印度'] },
          series: [
            { label: { en: 'Intend', zh: '考虑购买' }, data: [38,44,52], color: '#EC4899' },
            { label: { en: 'Maybe', zh: '可能购买' }, data: [45,40,35], color: '#2563EB' },
            { label: { en: 'Not', zh: '不考虑' }, data: [17,16,13], color: '#CBD5E1' }
          ] }
      ]
    }
  ],

  /* ---------- 工程 Engineering（3 个代码库 + 架构图）---------- */
  engineering: [
    {
      slug: 'seckill', accent: '#1E4E79',
      title: { en: 'Seckill (Flash-Sale) System', zh: '秒杀（抢购）系统' },
      oneLiner: { en: 'High-concurrency e-commerce flash-sale system', zh: '高并发电商秒杀系统' },
      diagram: { en: 'assets/img/diagrams/seckill-en.svg', zh: 'assets/img/diagrams/seckill-zh.svg' },
      repo: 'https://github.com/zz10965-alt/seckill-system',
      stack: ['Spring Boot 2.3.6', 'MySQL + MyBatis', 'Redis (Jedis) + Lua', 'RocketMQ', 'Sentinel'],
      summary: { en: 'Solves the core high-concurrency problems of flash sales: atomic inventory deduction, traffic peak-shaving, rate limiting, distributed locks and cache preheating.',
                 zh: '解决秒杀核心高并发问题：库存原子扣减、流量削峰、限流、分布式锁与缓存预热。' },
      highlights: [
        { en: 'Atomic inventory deduction via Redis + Lua scripts to prevent overselling.',
          zh: '用 Redis + Lua 脚本做库存原子扣减，防止超卖。' },
        { en: 'Async order / payment decoupled through RocketMQ messages for peak-shaving.',
          zh: '通过 RocketMQ 消息异步下单/支付实现削峰。' },
        { en: 'Cache preheating, distributed locks, Sentinel rate limiting and Snowflake global IDs.',
          zh: '缓存预热、分布式锁、Sentinel 限流与 Snowflake 全局 ID。' }
      ]
    },
    {
      slug: 'paas', accent: '#0E7490',
      title: { en: 'PaaS Cloud Management Console', zh: 'PaaS 云管理控制台' },
      oneLiner: { en: 'Frontend console for a cloud-native PaaS platform', zh: '云原生 PaaS 平台管理控制台前端' },
      diagram: { en: 'assets/img/diagrams/paas-en.svg', zh: 'assets/img/diagrams/paas-zh.svg' },
      repo: 'https://github.com/zz10965-alt/go-paas-frontend',
      stack: ['HTML5 / CSS3 / JS', 'Bootstrap 4', 'jQuery', 'Chart.js'],
      summary: { en: 'Visual management of applications, services, domains, storage, images and users, plus a cloud-app marketplace.',
                 zh: '可视化管理应用、服务、域名、存储、镜像与用户，外加云应用市场。' },
      highlights: [
        { en: 'Built list / create / detail pages for Pods, Services, Routes (domains), Volumes and Users.',
          zh: '实现 Pod、服务、路由（域名）、存储卷、用户的列表/创建/详情页。' },
        { en: 'Added a cloud-app marketplace page (OA, low-code, CRM, alerting, etc.).',
          zh: '新增云应用市场页（OA、低代码、CRM、告警等）。' }
      ]
    },
    {
      slug: 'ai-agent', accent: '#B45309',
      title: { en: 'AI Conversational Agent (RAG)', zh: 'AI 对话智能体（RAG）' },
      oneLiner: { en: 'Retrieval-augmented AI agent with voice & memory', zh: '带语音与记忆的检索增强 AI 智能体' },
      diagram: { en: 'assets/img/diagrams/ai-agent-en.svg', zh: 'assets/img/diagrams/ai-agent-zh.svg' },
      repo: 'https://github.com/zz10965-alt/ai-conversational-agent',
      stack: ['FastAPI 0.104.1', 'LangChain 0.0.335', 'Qdrant 1.5.0', 'Redis', 'OpenAI 1.2.4'],
      summary: { en: 'A retrieval-augmented conversational agent that combines vector search, conversation memory and speech I/O.',
                 zh: '结合向量检索、对话记忆与语音输入输出的检索增强对话智能体。' },
      highlights: [
        { en: 'RAG pipeline over Qdrant vector store for grounded, context-aware answers.',
          zh: '基于 Qdrant 向量库的 RAG 管道，提供有据可依的上下文感知回答。' },
        { en: 'Redis-backed conversation memory plus Whisper speech-to-text and TTS output.',
          zh: 'Redis 对话记忆 + Whisper 语音转文字 + TTS 语音输出。' }
      ]
    }
  ],

  /* ---------- 科研 Research（7 篇已发表 + 专著 + 6 篇在审）---------- */
  publications: [
    {
      title: { en: 'Research on AI System Performance Modeling and Online Optimization Methods Based on Runtime Telemetry Data (RT-TOP)',
               zh: '基于运行时遥测数据的 AI 系统性能建模与在线优化方法（RT-TOP）' },
      venue: { en: 'ADSCN2026 (EI Conference)', zh: 'EI 会议 ADSCN2026' },
      role: { en: 'Sole author', zh: '独立作者' }, year: '2026', type: 'paper',
      metric: { value: '-17.8%', label: { en: 'P99 latency (p<1e-10)', zh: 'P99 延迟优化' } }
    },
    {
      title: { en: 'Research on Performance Optimization Methods for Resource-Aware Model Services in AI Systems (RASPO)',
               zh: 'AI 系统中资源感知模型服务的性能优化方法（RASPO）' },
      venue: { en: 'SPIOT-6th (EI Conference)', zh: 'EI 会议 SPIOT-6th' },
      role: { en: 'Sole author', zh: '独立作者' }, year: '2026', type: 'paper',
      metric: { value: '-39.7%', label: { en: 'P99 latency (p<1e-6)', zh: 'P99 延迟降低' } }
    },
    {
      title: { en: 'Research on the Design of Scalable Enterprise-Level AI Systems Data Platform Architectures from an SDE Perspective',
               zh: 'SDE 视角下可扩展企业级 AI 系统数据平台架构设计' },
      venue: { en: 'IJBDIT (PK0836)', zh: '国际期刊 IJBDIT（PK0836）' },
      role: { en: 'Sole author', zh: '独立作者' }, year: '2026', type: 'paper',
      metric: { value: '-22.6%', label: { en: 'median E2E latency (p<0.01)', zh: '端到端延迟中位数' } }
    },
    {
      title: { en: 'Research on Model Engineering Integration Methods for AI Systems Based on Data-Driven Intelligence',
               zh: '基于数据驱动智能的 AI 系统模型工程集成方法' },
      venue: { en: 'IJBDIT (PK0858)', zh: '国际期刊 IJBDIT（PK0858）' },
      role: { en: 'Sole author', zh: '独立作者' }, year: '2026', type: 'paper',
      metric: { value: 'Qlib+MLflow/DVC', label: { en: 'MLOps toolchain', zh: 'MLOps 工具链' } }
    },
    {
      title: { en: 'Research on Service-Oriented Packaging of AI Systems and Data-Driven Decision Support',
               zh: 'AI 系统服务化封装与数据驱动决策支持' },
      venue: { en: 'Engineering Advances (Vol.6, Iss.3)', zh: '国际期刊 Engineering Advances' },
      role: { en: 'Sole author', zh: '独立作者' }, year: '2026', type: 'paper',
      metric: { value: 'REST/gRPC', label: { en: 'service packaging', zh: '服务化封装' } }
    },
    {
      title: { en: 'Analyzing the Influential Factors of Sports Brands on Brand Equity (Decathlon case)',
               zh: '体育赛事营销对品牌资产的影响因素分析（迪卡侬案例）' },
      venue: { en: 'BMMFT 2024 (Frankfurt)', zh: '国际会议 BMMFT 2024（法兰克福）' },
      role: { en: 'Sole author', zh: '独立作者' }, year: '2024', type: 'paper',
      metric: { value: 'CPCI', label: { en: 'indexed', zh: '收录' } }
    },
    {
      title: { en: 'Quantitative Research on China\'s Pension Policy from the Perspective of Policy Tools',
               zh: '政策工具视角下中国养老金政策定量研究' },
      venue: { en: 'IConSES 2023 (Las Vegas)', zh: '国际会议 IConSES 2023（拉斯维加斯）' },
      role: { en: 'Sole author', zh: '独立作者' }, year: '2023', type: 'paper',
      metric: { value: '539', label: { en: 'policy documents analyzed', zh: '政策文本分析' } }
    },
    {
      title: { en: 'Cloud Native Intelligent Computing System: Infrastructure, Data Platform, and System Innovation',
               zh: '云原生智能计算系统：基础设施、数据平台与系统创新' },
      venue: { en: 'Book (324 pages)', zh: '专著（324 页）' },
      role: { en: '4th author', zh: '第 4 作者' }, year: '2026', type: 'book',
      metric: { value: '324', label: { en: 'pages', zh: '页数' } }
    }
  ],

  /* ---------- 荣誉 Awards（分级）---------- */
  awards: [
    { level: 'national', levelLabel: { en: 'National', zh: '国家级' }, items: [
      { title: { en: 'National Scholarship', zh: '国家奖学金' }, year: '2024' },
      { title: { en: '3rd National College Student Social Security Case Competition — Excellence Award', zh: '第三届全国大学生社会保障案例大赛 · 优秀奖' }, year: '2023' },
      { title: { en: 'National Top-100 Summer Social Practice Team', zh: '全国大学生暑期社会实践 · 百强团队' }, year: '2023' }
    ] },
    { level: 'city', levelLabel: { en: 'Provincial / City', zh: '省市级' }, items: [
      { title: { en: 'Chongqing "Golden Autumn" Social Practice — Excellence Award', zh: '重庆市「金色之秋」三下乡实践 · 优秀奖' }, year: '2023' },
      { title: { en: '"Assist the Disabled, Build Dreams" Volunteer Service — Silver Award', zh: '「助残筑梦」志愿服务 · 银奖' }, year: '' }
    ] },
    { level: 'school', levelLabel: { en: 'University', zh: '校级' }, items: [
      { title: { en: '"Pioneer Cup" Extracurricular Academic Competition — Special Prize', zh: '重庆理工大学「开拓杯」· 特等奖' }, year: '' },
      { title: { en: '"Challenge Cup" — First Prize', zh: '「挑战杯」· 一等奖' }, year: '' },
      { title: { en: 'Social Survey Report Competition — First Prize', zh: '社会调查报告大赛 · 一等奖' }, year: '' },
      { title: { en: 'Merit Student', zh: '三好学生' }, year: '' },
      { title: { en: 'Outstanding Student Cadre', zh: '优秀学生干部' }, year: '' },
      { title: { en: 'Outstanding League Member', zh: '优秀共青团员' }, year: '' },
      { title: { en: 'Second-Class Scholarship ×2', zh: '校级乙等奖学金 ×2' }, year: '2022–2024' }
    ] },
    { level: 'college', levelLabel: { en: 'College', zh: '院级' }, items: [
      { title: { en: '"Challenge Cup" Entrepreneurship — First Prize', zh: '「挑战杯」创业计划 · 一等奖' }, year: '' },
      { title: { en: 'China "Internet+" Innovation & Entrepreneurship — 2nd / 3rd Prize', zh: '中国国际「互联网+」创新创业 · 二等/三等奖' }, year: '' },
      { title: { en: 'National Advertising Art Contest (Chongqing) — First Prize', zh: '全国大学生广告艺术大赛（重庆赛区）· 一等奖' }, year: '' }
    ] }
  ],

  /* ---------- 校园经历 Campus ---------- */
  campus: [
    { title: { en: 'Vice President, University Student Association for Science & Tech', zh: '校大学生科学技术协会 副会长' }, period: { en: '2022 – 2024', zh: '2022 – 2024' } },
    { title: { en: 'Academic Mentoring / Study-Tutoring Group', zh: '学业导学团 / 学习帮扶' }, period: { en: '2022 – 2024', zh: '2022 – 2024' } },
    { title: { en: '"Assist the Disabled, Build Dreams" volunteer project', zh: '「助残筑梦」志愿服务项目' }, period: { en: '2023', zh: '2023' } },
    { title: { en: '"Three Trips to the Countryside" summer practice', zh: '「三下乡」暑期社会实践' }, period: { en: '2023', zh: '2023' } },
    { title: { en: 'Dianya Primary School volunteer teaching', zh: '典雅小学支教 / 义教' }, period: { en: '2022', zh: '2022' } }
  ],

  /* ---------- 联系 Contact ---------- */
  contact: {
    title: { en: 'Let\'s connect', zh: '联系我' },
    subtitle: { en: 'Open to DA / BA / DS / DE / AI-analytics roles in China and the US.', zh: '开放中美两地 DA / BA / DS / DE / AI 分析方向的机会。' },
    email: { en: 'zzz0429x@163.com', zh: 'zzz0429x@163.com' },
    phone: { en: '13896598567', zh: '13896598567' },
    linkedin: ''
  }
};
