# 张芷衔 · 个人 Portfolio 网站

一个**纯静态**的个人作品集网站（HTML + CSS + JS + Chart.js），无需构建，打开即用，部署在 GitHub Pages。

- 🌐 **线上链接（发给别人看，一个就够）**：`https://zz10965-alt.github.io/`
- 🌐 本地预览：双击 `index.html`，或在目录下运行 `python -m http.server 8000` 后访问 `http://localhost:8000`

---

## 网站结构（8 个板块）

1. **首页 / 封面** —— 姓名 · 定位（数据分析 · 商业分析 · 数据科学）· 关键数字
2. **关于** —— 教育 + 技能雷达图 + 按能力方向的项目覆盖图
3. **实习经历** —— 4 段实习时间线（悬停预览，点击看详情）
4. **项目** —— 14 个分析/建模项目，按 4 个能力方向筛选
5. **工程** —— 3 个代码库 + 架构图
6. **科研** —— 7 篇已发表 + 专著 + 6 篇在审
7. **荣誉** —— 分级奖项 + 校园经历
8. **联系** —— 邮箱 / 电话 / GitHub

右上角有 **EN / 中文** 一键切换。

---

## 怎么改（都不用碰布局代码）

### 1. 改文字
打开 **`js/data.js`**，改对应的 `{ en: "...", zh: "..." }` 即可（英文在前、中文在后）。
每段文字都是双语，切语言会自动生效。文件里有中文注释说明。

### 2. 加项目截图
1. 把图片放进 **`assets/img/projects/`** 文件夹；
2. 在 `js/data.js` 找到对应项目，把 `image: ''` 改成 `image: '文件名.png'`（例如 `image: 'medicare.png'`）。
   - 图片映射关系见 `assets/img/projects/README.md`（别放错项目）。

### 3. 换头像
替换 **`assets/img/profile.png`**（保持文件名不变，建议正方形）。

### 4. 改配色
打开 `js/data.js` 顶部的 `CATEGORIES`，改 `color` 的色值；主色在 `css/style.css` 顶部的 `:root` 里（`--primary`）。

### 5. 填 LinkedIn / 改 tagline
- LinkedIn：`js/data.js` → `hero.linkedin` 填入你的链接，图标会自动出现。
- tagline：`js/data.js` → `hero.tagline`。

---

## 怎么上线（改完推上去）

```bash
git add -A
git commit -m "update portfolio"
# 若本地有失效代理，用下面这条绕开：
git -c http.proxy= -c https.proxy= push
```

推送后约 1 分钟内线上生效（GitHub Pages 自动构建静态站）。

---

## 文件结构

```
portfolio/
├── index.html              # 页面骨架（一般不用改）
├── css/style.css           # 样式（配色/动效）
├── js/
│   ├── data.js             # ★ 全部文字内容（主要编辑这里）
│   ├── main.js             # 渲染 + 交互（一般不用改）
│   ├── charts.js           # 雷达图 / 能力条
│   └── vendor/chart.umd.min.js  # Chart.js 本地副本
├── assets/img/
│   ├── profile.png         # 头像
│   ├── projects/           # 项目截图（你补充）
│   └── diagrams/           # 架构图（代码生成）
└── QUESTIONS.md            # 待你确认的问题清单
```
