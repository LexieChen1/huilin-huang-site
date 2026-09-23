# Dr. Huilin Huang — Academic Website

Research group website for Dr. Huilin Huang, Assistant Professor in the Department of Environmental Sciences at the University of Virginia.

## Local development

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create the production site in `dist/`, `npm run preview` to preview that build, and `npm run lint` for ESLint checks.

## Pages

- Home: research overview, principal investigator, and selected publications.
- Research: three research themes and selected funded projects.
- People: principal investigator, team, education, career history, and professional service.
- Publications: 26 CV entries, newest published papers first, with search, year and status filters, and DOI links where supplied.
- Teaching: courses and mentoring.
- Opportunities: research inquiries and contact details.

## Content sources and maintenance

The supplied **December 2025 CV** is the source for biography, education, professional experience, research, publications, grants, historical mentoring, and professional service. Publication statuses are explicitly dated to that CV; they are not live updates. The original site supplies the lab name, current team members (including the name “Ra” as originally provided), and the 2026 teaching entry.

- Edit publication records in `src/data/publications.js`. The `citation` field retains the transcribed citation; DOI links use only supplied identifiers. The CV's repeated fire-model DOI for the LS4P paper was intentionally omitted from its link.
- Edit research themes in `src/data/research.js`.
- Edit team members in `src/pages/Ourteam.jsx` and courses in `src/pages/Teaching.jsx`.
- Replace `src/assets/Huilin_Huang_CV.pdf` to update the downloadable CV and update the visible date and download filename accordingly.
- Colors, type, and shared styles are in `src/index.css`; pages have their own stylesheets.
- The fire photograph and team portraits reuse original site assets. Optimized fire and Lexie images are in `public/`.
- Fonts load from Google Fonts, with local serif and sans-serif fallbacks.

The design takes inspiration from the research-first organization of [Danica Lombardozzi’s website](https://www.danicalombardozzi.com/) while using an independent visual design and original copy based on Huilin Huang’s work.

## Deployment

Deploy the contents of `dist/` to a static host. Configure the host to serve `index.html` for application routes such as `/research` and `/publications` (React Router history fallback). The site is configured for a domain root. No contact form backend is required; contact links open an email client.

Originally developed and maintained by Lexie Chen, Research Assistant for Dr. Huilin Huang, January 2026.
