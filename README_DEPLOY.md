# James Chen Portfolio

This folder is a static GitHub Pages-ready portfolio.

## Files

- `index.html` - the page content
- `styles.css` - the visual design
- `visitors.js` - shared daily and total visitor counts
- `boise-map.png` - the static map showing Boise, Idaho
- `myface.jpg` - the profile image
- `github-logo.svg`, `linkedin-logo.svg`, `gmail-logo.png` - local social logos
- `html-logo.svg`, `css-logo.svg`, `javascript-logo.svg`, `python-logo.svg`, `django-logo.svg` - technology logos
- `ai-icon.svg` - Lucide brain-circuit icon representing AI apps
- `PickingGeekAI.jpg`, `HackerMooseAI_Logo.png`, `US_Photo.jpeg` - linked portfolio images

## Publish on GitHub Pages

1. Create a repository named `jameschenpochih.github.io` under `github.com/jameschenpochih`.
2. Upload `index.html`, `styles.css`, `visitors.js`, and all `.svg`, `.png`, `.jpg`, and `.jpeg` assets in this folder to the repository root.
3. In GitHub, open **Settings > Pages**.
4. Set the source to the main branch and root folder.
5. Your site will be available at `https://jameschenpochih.github.io/`.

## Before publishing

Visitor statistics use the external CounterAPI service: https://counterapi.com/.
The footer requests unique visitor counts for the current Boise calendar date and all time.
The daily counter changes at midnight in America/Boise. The service determines visitor deduplication using anonymized hashes; these are not exact counts of individual people.
Counts start when tracking is enabled and cannot reconstruct prior traffic.
Local previews do not send tracking requests. If the service is unavailable, the footer displays `--`.
The tracking request shares the published hostname with the service, which receives the visitor's IP address.

Replace these placeholders:

- project GitHub links after each repo is public
- About me text, if you want a more personal biography
