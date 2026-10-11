# Human-Like Redundancy Resolution — Project Page

A deployable, static academic project page inspired by [Bunny-VisionPro](https://dingry.github.io/projects/bunny_visionpro). Built with standard HTML, CSS and vanilla JavaScript. No Node.js, npm, Python package, or build command is required.

## What is included

- `index.html`: complete paper project page, authors, abstract, method, evaluation, demos, citations
- `styles.css`: responsive styles
- `script.js`: BibTeX copy control
- `assets/`: images extracted from the supplied paper (figures/experiments)
- `paper.pdf`: the supplied manuscript PDF

## Quick preview

From inside this folder, run:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/> in your browser. You can also double-click `index.html` to preview it directly.

## Publish under your existing personal homepage

Your repository: <https://github.com/chaotan2003/chaotan2003.github.io>

1. Clone that repository (or open your existing local checkout):

   ```bash
   git clone https://github.com/chaotan2003/chaotan2003.github.io.git
   cd chaotan2003.github.io
   ```

2. Create `projects/human-like-redundancy/` in the repository and copy **all of the files in this folder** into it, maintaining `assets/` and filenames. Do not overwrite the homepage root `index.html`.

3. Commit and push:

   ```bash
   git add projects/human-like-redundancy
   git commit -m "Add bimanual teleoperation project page"
   git push origin main
   ```

4. If the GitHub Pages source is `main` / root, the project page will be published at:

   <https://chaotan2003.github.io/projects/human-like-redundancy/>

   GitHub Pages may require a short time to publish changes. If your site uses a different branch/deployment configuration, update that configuration accordingly.

## Changes to make before publishing

- **arXiv**: When your arXiv entry exists, add a resource button linking to the real arXiv URL. The local `paper.pdf` already works.
- **Paper**: Replace `paper.pdf` with the final release when the manuscript is finalized.
- **BibTeX**: Replace the generic `@misc` BibTeX with the official arXiv/conference record when available.
- **Authors/affiliation**: Verify author names, affiliations, corresponding author, and links against the final public manuscript.

## Attribution and reuse

All figures in this website were extracted from the supplied *Human-Like Redundancy Resolution for Real-Time Bimanual Humanoid Teleoperation* PDF. This implementation does not copy code or images from Bunny-VisionPro; it follows the same common research-project-page presentation pattern.
