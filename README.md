# Siam Hasan — Portfolio

A personal portfolio for entry-level IT support and service desk opportunities, with a secondary focus on cloud administration. Built with HTML, CSS, and JavaScript, with AI assistance during development.

## Features

- Cyberpunk theme with cyan and magenta accents
- Responsive toolkit, certification list, and project sections
- Accessible mobile navigation and reduced-motion support
- Clearly distinguished completed certifications, current study, and future lab ideas
- Direct email, LinkedIn, and GitHub links

## Project structure

```text
index.html                 Page content and semantic markup
assets/
  css/styles.css           Layout, theme, and responsive styles
  js/main.js               Navigation interactions and footer year
scripts/
  serve.mjs                Local development server
  check.mjs                Asset and section-link checks
package.json               Development commands; no dependencies
```

## Run locally

Requires Node.js 18 or newer. No package installation or build step is needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173. To use another port, set the `PORT` environment variable before running the command.

## Validate

```sh
npm run check
```

Checks JavaScript syntax, local asset paths, unique HTML IDs, and section anchors. Browser layout and interaction checks are performed separately.

## Update content

Edit `index.html` for biography, skills, certifications, projects, and contact links. Future lab ideas are not presented as completed work. Update those entries only when there is work to demonstrate.

## Publishing

This repository contains website source. Hosting is not configured; pushing code does not intentionally deploy the website.

## Contact

- Email: siamhasan773@gmail.com
- LinkedIn: https://www.linkedin.com/in/siamhasan-tech/
- GitHub: https://github.com/siam9922
