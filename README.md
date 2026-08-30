# Siyuan (Sylvester) Zhang — Personal Academic Portfolio

The source repository for [www.siyuanzhang.com](https://www.siyuanzhang.com), the personal academic portfolio of Siyuan (Sylvester) Zhang.

The site presents research in physical and embodied intelligence, bio-inspired and soft robotics, reconfigurable systems, assistive robotics, computational design, and robot learning. It also collects selected engineering projects, publications, media coverage, teaching and industry experience, technical skills, a curriculum vitae, and professional links.

> Last updated: August 30, 2026

## Live site and profiles

- Website: [www.siyuanzhang.com](https://www.siyuanzhang.com)
- Curriculum vitae: [CV of ZSY academic simplified.pdf](CV%20of%20ZSY%20academic%20simplified.pdf)
- Google Scholar: [Siyuan Zhang](https://scholar.google.com/citations?user=QDhqc2QAAAAJ&hl=en)
- GitHub: [@SylvesterZHANG007](https://github.com/SylvesterZHANG007)
- LinkedIn: [siyuan-zhang-columbia](https://www.linkedin.com/in/siyuan-zhang-columbia/)
- Instagram: [@siyuan.zh](https://www.instagram.com/siyuan.zh/)
- YouTube: [@sylvesterzhang](https://www.youtube.com/@sylvesterzhang)
- Bilibili: [Sylvester Zhang](https://space.bilibili.com/641605796)

## About

Siyuan Zhang is a Robotics PhD student at the University of Michigan, advised by Prof. Cameron Aubin and Prof. Talia Moore. He earned an M.S. in Mechanical Engineering from Columbia University, where he worked in the Creative Machines Lab with Prof. Hod Lipson and collaborated with Prof. Sunil Agrawal and Prof. Chaoqun Dong. He previously received a B.E. from Sun Yat-sen University under the guidance of Prof. Jianing Wu.

His work focuses on engineering life-like machines that can sense, adapt, reorganize, and evolve through the interaction of morphology, mechanics, computation, and learning.

## Current site content

### Research

| Work | Status / venue | Resources |
| --- | --- | --- |
| **Robotic Mitosis: Engineering Self-Reproduction from 2D Lattices into 3D Morphogenetic Structures** | Manuscript in preparation | [Project page](research-websites/self-reproducing-robot.html) · [Paper](papers/Self_Reproducing_Robot.pdf) |
| **From Structural Design to Dynamics Modeling: Control-Oriented Development of a 3-RRR Parallel Ankle Rehabilitation Robot** | Manuscript in preparation | [Project page](research-websites/rehabilitation-robot.html) · [Paper](papers/rehabilitation-robot.pdf) |
| **Enhancing Grasping Diversity With a Pinch-Suction and Soft-Rigid Hybrid Multimodal Gripper** | *IEEE Transactions on Robotics*, Vol. 41, pp. 3890–3907 | [Project page](research-websites/multimodal-gripper.html) · [Paper](papers/multimodal-gripper.pdf) |
| **Synergizing Structural Stiffness Regulation with Compliance Contact Stiffness: Bioinspired Soft Stimuli-Responsive Materials Design for Soft Machines** | *Advanced Engineering Materials*, Vol. 26, Issue 18, 2400461 | [Project page](research-websites/smart-materials.html) · [Paper](papers/smart-materials.pdf) |
| **Transporting Dispersed Cylindrical Granules: An Intelligent Strategy Inspired by an Elephant Trunk** | *Advanced Intelligent Systems*, Vol. 5, 2300182 | [Project page](research-websites/elephant-trunk.html) · [Paper](papers/elephant-trunk.pdf) |

Each research card on the homepage includes a summary and links to a dedicated project page and paper. Published works also expose expandable abstracts and BibTeX entries directly on the homepage.

### Engineering projects

| Project | Focus | Page |
| --- | --- | --- |
| **Quadruped Spider Robot Design and Gait Optimization** | Quadruped locomotion, gait optimization, bio-inspired design | [View project](quadruped-spider-robot.html) |
| **Advanced Adaptive Tendon-Actuated Robot Manipulator Joint** | Tendon actuation, lever-arm amplification, space robotics | [View project](tendon-actuated-robot.html) |
| **Biomimetic Spherical Robot with Multi-Motion Modes for Space Exploration** | Space robotics, multimodal locomotion, autonomous navigation | [View project](spherical-space-robot.html) |
| **Bionic Flapping-Wing Robot Inspired by Birds** | Flapping-wing flight, bio-inspired aerodynamics, flight control | [View project](flapping-wing-robot.html) |
| **Foldable, Adhesive Crawling CubeSat for Space Station Operations** | CubeSat design, adhesive locomotion, satellite servicing | [View project](cubesat-crawling-robot.html) |

The homepage presents these projects in an interactive coverflow carousel and provides an expandable full-card grid. Each project has a standalone long-form page with images, explanations, and supporting media.

### News, media, experience, and skills

- A dated news timeline records academic, research, and industry milestones.
- The Media & Insights section currently includes the Financial Times feature, [“Can we make robots that eat other robots?”](news/ft-eat-other-robots.html), together with a local [PDF copy](news/ft-eat-other-robots.pdf).
- Teaching experience includes Mechatronics & Embedded Microcomputer Control and Robotics Studio at Columbia University.
- Industry experience includes product design engineering at Amazon and structural design engineering at Insta360.
- Programming and robotics tools include Python, C, C++, MATLAB, Linux, ROS, Arduino, and LaTeX.
- CAD and engineering tools include AutoCAD, SolidWorks, Creo, CATIA, NX, and ANSYS.

## Interface and interaction features

### Navigation

- Fixed glass-style header with a left-aligned personal logo.
- Navigation labels remain geometrically centered across the full header.
- A mirrored search control sits on the right side of the desktop header.
- Scroll-position-aware active navigation state.
- Reading progress indicator along the lower edge of the header.
- Smooth anchor navigation with a fixed-header offset.

### Site search

- Fully client-side search with no backend or external search service.
- Indexes the homepage biography, news, research, projects, experience, and skills.
- Ranks title matches ahead of body-text matches and displays contextual excerpts.
- Limits the result panel to eight high-relevance matches.
- `/` opens search from anywhere on the page.
- `Esc` closes the search dialog.
- Search results move focus to the selected content after smooth scrolling.

The search index covers content rendered on the homepage. It does not crawl text inside separate project pages, PDFs, or other binary assets.

### Responsive and mobile behavior

- Responsive layouts for desktop, tablet, mobile, landscape, and very narrow screens.
- Mobile navigation drops down from beneath the header rather than sliding in horizontally.
- Search and mobile navigation are mutually exclusive, preventing stacked overlays.
- Background gestures are contained without hiding the browser scrollbar, avoiding viewport-width shifts when overlays open.
- Touch-friendly targets and touch feedback for interactive cards.
- Swipe, wheel, arrow-button, and automatic navigation for the project carousel.
- Mobile-specific image, typography, spacing, and hero treatments.

### Motion and progressive enhancement

- Typewriter rotation between “Physical Intelligence,” “Robotics,” and “Embodied AI.”
- Intersection Observer-driven entrance animations.
- Image fade-in behavior.
- Expandable publication abstracts and BibTeX entries.
- Expandable experience details.
- Respect for `prefers-reduced-motion` in continuous hero and carousel animation.

## Technology

The portfolio is a static website and does not require a framework build, package manager, database, or application server.

- Semantic HTML5
- Modern CSS, including Grid, Flexbox, responsive media queries, glass effects, and fluid typography
- Vanilla JavaScript (ES6+)
- Intersection Observer and modern DOM APIs
- Google Fonts (`Source Serif 4` on the main site; Google Sans, Noto Sans, and Castoro on research pages)
- Bundled Bulma, Font Awesome, carousel, and slider assets for the Nerfies-derived research-page layout
- Academicons on research pages
- GitHub Pages-compatible static hosting

## Repository structure

```text
HomePage1/
├── index.html                     # Main portfolio and all homepage content
├── styles.css                    # Shared design system and responsive styles
├── script.js                     # Navigation, search, motion, and interactions
├── CNAME                         # Custom domain: www.siyuanzhang.com
├── README.md                     # Project documentation
├── start-demo.sh                 # Optional local server helper (port 8081)
│
├── images/                       # Portraits, logos, figures, thumbnails, and icons
├── fonts/                        # Local font fallbacks
├── papers/                       # PDFs linked by the research cards
├── news/                         # Media article page, styles, and PDF
│
├── research-websites/            # Five standalone research project pages
│   ├── self-reproducing-robot.html
│   ├── rehabilitation-robot.html
│   ├── multimodal-gripper.html
│   ├── smart-materials.html
│   ├── elephant-trunk.html
│   └── *.css                     # Research-page layout overrides and shared styles
│
├── quadruped-spider-robot.html   # Standalone engineering project pages
├── tendon-actuated-robot.html
├── spherical-space-robot.html
├── flapping-wing-robot.html
├── cubesat-crawling-robot.html
│
├── nerfies-template/             # Vendored research-page template assets
└── Self_Reproducing_Robot/       # Supporting research source and media assets
```

The repository also retains original papers, reports, videos, source material, design notes, and historical implementation documents. Because many assets are binary or high resolution, a full clone is larger than a typical static-site repository.

## Run locally

### 1. Clone the repository

```bash
git clone https://github.com/SylvesterZHANG007/HomePage1.git
cd HomePage1
```

### 2. Start a local static server

Python 3:

```bash
python -m http.server 8081
```

On systems where Python is exposed as `python3`:

```bash
python3 -m http.server 8081
```

macOS or Linux users can also run:

```bash
./start-demo.sh
```

### 3. Open the site

Visit [http://localhost:8081](http://localhost:8081).

A local server is recommended instead of opening `index.html` directly because it reproduces GitHub Pages path handling more accurately and avoids browser restrictions around local files.

## Content maintenance guide

### Update the biography or portrait

- Edit the About section in `index.html`.
- The active professional portrait is `images/professional_photo.jpg`.
- Keep the CV, Google Scholar, GitHub, and LinkedIn links in the adjacent profile-links block synchronized with the footer.

### Add or update research

1. Update or add the research card in `index.html`.
2. Add the detailed page under `research-websites/`.
3. Store the linked paper in `papers/`.
4. Add an abstract and BibTeX block when applicable.
5. Confirm that relative paths work from both the root and `research-websites/` directory.

### Add or update a project

1. Update both the coverflow card and the expanded project-grid card in `index.html`.
2. Add or edit the corresponding standalone root-level HTML page.
3. Place optimized images and videos under a clearly named subdirectory of `images/`.
4. Check the project on desktop and narrow screens because the carousel uses viewport-dependent offsets.

### Update news or media coverage

- Add milestones to the `#news-timeline` list in `index.html`.
- Add media cards to the `#news` section.
- Store standalone articles and related files under `news/`.

### Replace the CV

Replace `CV of ZSY academic simplified.pdf` while keeping the filename unchanged, or update every CV link in the homepage and navigation.

### Extend site search

The client-side index is built in `SiteSearch.buildIndex()` in `script.js`. Add a selector there when introducing a new homepage card type that should be searchable.

### Refresh cached assets

After changing `styles.css` or `script.js`, update their `?v=` query values in `index.html`. This helps GitHub Pages visitors receive the newest assets instead of a cached copy.

## Deployment

The repository is designed for direct static deployment.

### GitHub Pages

1. Push the latest commit to the branch used by GitHub Pages.
2. In the repository’s **Settings → Pages**, publish the repository root from that branch.
3. Keep `CNAME` at the repository root; it currently maps the site to `www.siyuanzhang.com`.
4. Ensure the custom domain’s DNS records continue to point to GitHub Pages.
5. After deployment, verify the homepage, research pages, project pages, PDFs, media, navigation, and search.

No compilation or generated output directory is required.

## Accessibility and compatibility

The current implementation includes semantic section headings, descriptive image alt text, labelled navigation and search controls, live search-result status, keyboard-operable menus, focus placement after search navigation, touch-sized controls, and reduced-motion handling for continuous animation.

The main experience targets current versions of Chrome, Edge, Firefox, and Safari. Some visual effects rely on modern browser capabilities such as `backdrop-filter`, `:has()`, CSS Grid, optional chaining, and Intersection Observer; older browsers may receive a simplified presentation.

## Validation checklist

Before publishing a content or design update:

- Confirm all navigation anchors reach the intended section.
- Test `/`, `Esc`, search result selection, and empty-result behavior.
- Verify the mobile menu opens downward and does not shift the page horizontally.
- Confirm search and the mobile menu cannot remain open simultaneously.
- Exercise carousel arrows, wheel/trackpad navigation, touch swipe, and “See all projects.”
- Open every changed research or project page and its linked PDF.
- Check the layout near 768 px, 480 px, and 360 px widths.
- Run a local HTTP server and confirm `index.html`, `styles.css`, `script.js`, and changed assets return successfully.
- Review `git diff --check` before committing.

## Copyright and reuse

Copyright © 2026 Siyuan (Sylvester) Zhang. All rights reserved.

This repository does not currently include a separate open-source license. The website code, writing, figures, publications, photographs, and media should not be assumed to be licensed for redistribution or reuse. Contact the author before reusing material beyond what is permitted by applicable law.

## Contact

For research collaboration, project opportunities, or questions about the work presented here, use the contact information on [www.siyuanzhang.com](https://www.siyuanzhang.com).
