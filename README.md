# Le Xing CV Website

This folder now contains a static bilingual CV website generated from `CV-LEXING-2026.docx`.

## Open the site

Open `index.html` in a browser. No build step or server is required.

After GitHub Pages is enabled for this repository, the one-click public CV link is:

https://lexing1105.github.io/personal/

GitHub Pages settings:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

## Edit the CV content

Most future updates should happen in `cv-data.js`.

- Edit English text in `en` fields.
- Edit Chinese text in `zh` fields.
- Add a new section by adding another object to `CV_DATA.sections`.
- Add a new publication by adding it under the relevant year in the `publications` section.
- Update the profile photo by replacing `assets/profile.jpeg`.

## Edit the design

Visual styling lives in `styles.css`. The structure and rendering logic live in `index.html` and `app.js`.

## Export as PDF

Use the `Export PDF` button in the website, then choose "Save as PDF" from the browser dialog. The print stylesheet is tuned for compact A4 output with tighter section spacing.

## GitHub sync

The website files are intended to be versioned in Git. The original Word CV files are ignored by `.gitignore` because they are source/private documents and are not needed to run the website.
