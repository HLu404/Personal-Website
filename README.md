# Personal-Website

My personal website: a single page with a typed intro and links to my contact info, projects, resume, GitHub and LinkedIn.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page markup, including the contact and projects panels |
| `style.css` | Styling: dark theme, link list layout, responsive rules |
| `script.js` | Typing animation and tab open/close behavior |
| `Harry_Resume.pdf` | Resume, opened by the Resume link |

## Running locally

No build step or dependencies. Open `index.html` in a browser:

```
open index.html
```

Fonts (Inter Tight, IBM Plex Sans and Mono) load from Google Fonts, so an internet connection is needed to see them.

## Deploying

The site is static, so it works with GitHub Pages: in the repo's Settings → Pages, choose the `main` branch and save.

## Updating

- **Projects:** edit the `#projects` section in `index.html`.
- **Contact info:** edit the `#contact` section in `index.html`.
- **Resume:** replace `Harry_Resume.pdf`, keeping the same filename.
