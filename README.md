# Personal Academic Website

A clean and minimal personal homepage designed for PhD students, researchers, and engineers interested in academic and industrial collaborations.

## Features

- **About Me**: Research interests explained in an accessible way
- **Research Topics**: Detailed overview of research areas
- **Selected Publications**: Academic publications with full citations
- **Projects and Engineering Experience**: Professional work and projects
- **Contact Information**: Multiple ways to get in touch
- **Language Switcher**: Toggle between English and Japanese with full translations

## Design

- Simple, professional layout
- Responsive design (mobile and desktop friendly)
- Minimal color palette without flashy colors
- Easy to navigate with sticky navigation bar

## Usage

This website is ready to be hosted on GitHub Pages. To customize:

1. Edit `index.html` to update your personal information
2. Replace placeholder text with your actual content
3. Update contact links and information
4. Update translations in `lang.js` for both English and Japanese versions
5. Optionally modify `style.css` for custom styling

### Language Switcher

The website includes a language toggle button in the navigation bar that switches between English and Japanese:

- Click the button to toggle languages
- Your language preference is saved automatically
- All content is fully translated including navigation, sections, publications, and projects
- To customize translations, edit the `translations` object in `lang.js`

## Hosting on GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select the branch and root folder
4. Your site will be available at `https://yourusername.github.io/repository-name/`

## Local Testing

To preview locally:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.