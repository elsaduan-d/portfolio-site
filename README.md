# Personal Portfolio Website

A Next.js + TypeScript + Tailwind portfolio for Yuzhi Duan / Elsa Duan focused on product management, learning design, AI education, and evidence-based EdTech.

## Run locally

1. Install dependencies:
   `npm install`
2. Process assets:
   `npm run process-assets`
3. Start the dev server:
   `npm run dev`
4. Open `http://localhost:3000`

## Build for production

Run:
`npm run build`

## Page structure

Main routes:
- `/`
- `/about`
- `/experience`
- `/projects`
- `/papers`
- `/contact`

The navbar is shared across all pages and routes to these standalone pages instead of in-page anchor links.

## Content structure

Editable content lives in:
- `data/experiences.ts`
- `data/projects.ts`
- `data/papers.ts`
- `data/media.ts`

Reusable UI components live in:
- `components/Navbar.tsx`
- `components/PageHeader.tsx`
- `components/ExperienceExplorer.tsx`
- `components/ProjectExplorer.tsx`
- `components/PaperExplorer.tsx`
- `components/SlideCarousel.tsx`
- `components/ProjectGallery.tsx`
- `components/Footer.tsx`

## Replacing the hero portrait

The homepage hero uses:
- `public/images/hero-portrait.jpg`

To replace it:
1. Prepare a portrait with enough vertical space around the face.
2. Replace `public/images/hero-portrait.jpg` with the new file.
3. If the crop feels off, adjust the hero `object-position` values in `app/page.tsx`.

Current implementation notes:
- `object-fit: cover` is used through Next/Image sizing.
- Separate mobile and desktop positioning is handled with responsive Tailwind classes.
- A light dark overlay is applied for readability without hiding the portrait.

## Adding new papers

Place source files in:
- `source/papers`

Supported workflow:
- PDFs are copied directly into `public/papers`
- DOCX files are converted into PDFs when LibreOffice is available

After adding papers, run:
`npm run process-assets`

Then add or update the paper metadata in `data/papers.ts`.

## Converting DOCX papers to PDF

The asset script attempts DOCX-to-PDF conversion automatically using LibreOffice.

Install LibreOffice on macOS with:
`brew install --cask libreoffice`

If conversion fails:
- open the DOCX in Microsoft Word or Google Docs
- export it manually as PDF
- place the resulting PDF in `source/papers`
- run `npm run process-assets` again

## Extracting PPT/PPTX slides as images

Place PowerPoint files in:
- `source/slides`

The asset script attempts this workflow:
1. convert PPT/PPTX to PDF with LibreOffice
2. convert PDF pages to PNG images with Poppler (`pdftoppm`)
3. write slide images to `public/project-slides/[file-name]/`

Install required tools on macOS:
- `brew install --cask libreoffice`
- `brew install poppler`

After adding slide decks, run:
`npm run process-assets`

If conversion fails:
- export slides manually as PNG images
- place them in `public/project-slides/[project-name]/`

### Shared deck splitting

The processor includes custom handling for the shared T561 deck currently stored as:
- `source/slides/transform-education-projects.pptx`

It extracts the full deck and then splits slide ranges into:
- `public/project-slides/trash-buddies/`
- `public/project-slides/guess-the-library/`
- `public/project-slides/word-cross-wordy/`
- `public/project-slides/boston-easytrip/`

Current slide mapping:
- `Trash Buddies`: slides 1–5
- `Guess the Library`: slides 6–9
- `Word Cross “Wordy”`: slides 10–13
- `Boston EasyTrip`: slides 15–23

If the deck changes in the future, update the split ranges inside:
- `scripts/process-assets.ts`

## Interactive slide display

True PowerPoint-style interactivity is not preserved on the website because the deployment target is a static web app and the asset pipeline converts deck slides into images.

Instead, project slides are shown with an interactive image carousel that includes:
- previous and next controls
- slide count
- keyboard navigation with left and right arrow keys

The carousel implementation lives in:
- `components/SlideCarousel.tsx`

## Adding videos

Place source videos in:
- `source/videos`

The asset script copies supported formats into:
- `public/videos`

Supported file types:
- `.mp4`
- `.mov`
- `.m4v`
- `.webm`

For best browser compatibility, prefer `.mp4`.

After adding videos, run:
`npm run process-assets`

Then update `data/media.ts` or attach a `videoPath` in `data/projects.ts` if the video should appear inside a project page.

## Deploying to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Set the project root to `portfolio-site` if needed.
4. Use the default build command:
   `npm run build`
5. Deploy.

## Notes

- The script never deletes original source files.
- If a conversion step fails, the script prints a clear error and continues processing the remaining files.
- Existing generated assets are safe to keep under `public/` for deployment.
