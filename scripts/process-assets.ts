import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const sourcePapersDir = path.join(root, 'source', 'papers');
const sourceSlidesDir = path.join(root, 'source', 'slides');
const sourceVideosDir = path.join(root, 'source', 'videos');
const publicPapersDir = path.join(root, 'public', 'papers');
const publicSlidesDir = path.join(root, 'public', 'project-slides');
const publicVideosDir = path.join(root, 'public', 'videos');

async function ensureDir(dirPath: string) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function listFilesRecursive(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const files = await Promise.all(
      entries.map(async (entry) => {
        const fullPath = path.join(dirPath, entry.name);
        return entry.isDirectory() ? listFilesRecursive(fullPath) : [fullPath];
      })
    );
    return files.flat();
  } catch {
    return [];
  }
}

function commandExists(name: string) {
  const result = spawnSync('which', [name], { encoding: 'utf8' });
  return result.status === 0 ? result.stdout.trim() : null;
}

async function copyFileSafe(sourcePath: string, destinationPath: string) {
  await ensureDir(path.dirname(destinationPath));
  await fs.copyFile(sourcePath, destinationPath);
}


async function preserveTeacherReflectionLabGifs(slideFile: string, slugDir: string) {
  const gifMappings = [
    { mediaName: 'image17.gif', slideNumber: 9 },
    { mediaName: 'image18.gif', slideNumber: 10 },
    { mediaName: 'image19.gif', slideNumber: 11 }
  ];

  for (const { mediaName, slideNumber } of gifMappings) {
    const extractGif = spawnSync('unzip', ['-p', slideFile, `ppt/media/${mediaName}`], {
      encoding: 'buffer',
      maxBuffer: 30 * 1024 * 1024
    });

    if (extractGif.status !== 0 || !extractGif.stdout || extractGif.stdout.length === 0) {
      console.warn('Failed to preserve animated GIF for', mediaName);
      continue;
    }

    const gifDestination = path.join(slugDir, `slide-${String(slideNumber).padStart(2, '0')}.gif`);
    const pngDestination = path.join(slugDir, `slide-${String(slideNumber).padStart(2, '0')}.png`);

    await fs.writeFile(gifDestination, Buffer.from(extractGif.stdout));
    await fs.rm(pngDestination, { force: true });
  }

  console.log('Preserved animated demo GIFs for teacher-reflection-lab-final-presentation.');
}


async function prepareGuessTheLibrarySlides(slideFile: string, slugDir: string) {
  const extractGif = spawnSync('unzip', ['-p', slideFile, 'ppt/media/image1.gif'], {
    encoding: 'buffer',
    maxBuffer: 30 * 1024 * 1024
  });

  if (extractGif.status === 0 && extractGif.stdout && extractGif.stdout.length > 0) {
    await fs.writeFile(path.join(slugDir, 'slide-1.gif'), Buffer.from(extractGif.stdout));
  } else {
    console.warn('Failed to preserve animated GIF for guess-the-library slide 1.');
  }

  const manifest = [
    {
      type: 'image',
      src: '/project-slides/guess-the-library/slide-1.gif',
      alt: 'Guess the Library slide 1',
      composition: 'guess-the-library-slide-1',
      frameSrc: '/project-slides/guess-the-library/slide-1.png'
    },
    {
      type: 'image',
      src: '/project-slides/guess-the-library/slide-2.png',
      alt: 'Guess the Library slide 2'
    },
    {
      type: 'image',
      src: '/project-slides/guess-the-library/slide-3.png',
      alt: 'Guess the Library slide 3'
    }
  ];

  await fs.writeFile(path.join(slugDir, 'slides.json'), JSON.stringify(manifest, null, 2));
  console.log('Prepared guess-the-library manifest with animated GIF and YouTube embed.');
}

async function prepareWordCrossWordySlides(slugDir: string) {
  const files = (await fs.readdir(slugDir))
    .filter((file) => /\.(png|jpg|jpeg|webp|gif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const manifest = files.map((file, index) => ({
    type: 'image',
    src: `/project-slides/word-cross-wordy/${file}`,
    alt: `Word Cross Wordy slide ${index + 1}`
  }));

  await fs.writeFile(path.join(slugDir, 'slides.json'), JSON.stringify(manifest, null, 2));
  console.log('Prepared word-cross-wordy walkthrough slide manifest.');
}

async function copyMatchingSlides(sourceDir: string, destinationSlug: string, slideNumbers: number[]) {
  const destinationDir = path.join(publicSlidesDir, destinationSlug);
  await ensureDir(destinationDir);

  for (const [index, slideNumber] of slideNumbers.entries()) {
    const sourceFile = path.join(sourceDir, `slide-${String(slideNumber).padStart(2, '0')}.png`);
    const destinationFile = path.join(destinationDir, `slide-${String(index + 1).padStart(2, '0')}.png`);

    try {
      await copyFileSafe(sourceFile, destinationFile);
    } catch {
      console.warn('Skipped missing split slide:', sourceFile);
    }
  }
}

async function processPdfs() {
  const files = await listFilesRecursive(sourcePapersDir);
  const pdfs = files.filter((file) => file.toLowerCase().endsWith('.pdf'));

  for (const pdf of pdfs) {
    const destination = path.join(publicPapersDir, path.basename(pdf));
    await copyFileSafe(pdf, destination);
    console.log('Copied PDF:', path.basename(pdf));
  }
}

async function processDocxPapers() {
  const files = await listFilesRecursive(sourcePapersDir);
  const docxFiles = files.filter((file) => /\.docx$/i.test(file) && !path.basename(file).startsWith('~$'));
  const soffice = commandExists('soffice');

  if (!soffice && docxFiles.length > 0) {
    console.warn('DOCX conversion skipped: LibreOffice/soffice not found. Install with: brew install --cask libreoffice');
    return;
  }

  for (const docx of docxFiles) {
    const outDir = publicPapersDir;
    const result = spawnSync(soffice as string, ['--headless', '--convert-to', 'pdf', '--outdir', outDir, docx], {
      encoding: 'utf8'
    });

    if (result.status !== 0) {
      console.error('DOCX conversion failed for', path.basename(docx));
      if (result.stderr) console.error(result.stderr.trim());
      continue;
    }

    const targetName = path.basename(docx).replace(/\.docx$/i, '.pdf');
    console.log('Converted DOCX to PDF:', targetName);
  }
}

async function processSlides() {
  const slideFiles = (await listFilesRecursive(sourceSlidesDir)).filter((file) => /\.(ppt|pptx)$/i.test(file));
  const soffice = commandExists('soffice');
  const pdftoppm = commandExists('pdftoppm');

  if (!soffice || !pdftoppm) {
    if (slideFiles.length > 0) {
      console.warn('Slide extraction skipped: requires LibreOffice and Poppler. Install with: brew install --cask libreoffice && brew install poppler');
    }
    return;
  }

  for (const slideFile of slideFiles) {
    const slug = path.basename(slideFile).replace(/\.(ppt|pptx)$/i, '');
    const slugDir = path.join(publicSlidesDir, slug);
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'portfolio-slides-'));
    const pdfPath = path.join(tempDir, slug + '.pdf');
    await fs.rm(slugDir, { recursive: true, force: true });
    await ensureDir(slugDir);

    const convertToPdf = spawnSync(soffice, ['--headless', '--convert-to', 'pdf', '--outdir', tempDir, slideFile], {
      encoding: 'utf8'
    });

    if (convertToPdf.status !== 0) {
      console.error('Slide conversion failed for', path.basename(slideFile));
      if (convertToPdf.stderr) console.error(convertToPdf.stderr.trim());
      continue;
    }

    const outputPrefix = path.join(slugDir, 'slide');
    const convertToImages = spawnSync(pdftoppm, ['-png', pdfPath, outputPrefix], { encoding: 'utf8' });

    if (convertToImages.status !== 0) {
      console.error('PDF to image extraction failed for', path.basename(slideFile));
      if (convertToImages.stderr) console.error(convertToImages.stderr.trim());
      continue;
    }

    console.log('Extracted slide images for', slug);

    if (slug === 'teacher-reflection-lab-final-presentation') {
      await preserveTeacherReflectionLabGifs(slideFile, slugDir);
    }

    if (slug === 'guess-the-library') {
      await prepareGuessTheLibrarySlides(slideFile, slugDir);
    }

    if (slug === 'word-cross-wordy') {
      await prepareWordCrossWordySlides(slugDir);
    }

    if (slug === 'transform-education-projects') {
      const hasStandaloneTrashBuddies = slideFiles.some((file) => /(^|\/)trash-buddies\.(ppt|pptx)$/i.test(file));
      const hasStandaloneGuessTheLibrary = slideFiles.some((file) => /(^|\/)guess-the-library\.(ppt|pptx)$/i.test(file));
      const hasStandaloneWordy = slideFiles.some((file) => /(^|\/)word-cross-wordy\.(ppt|pptx)$/i.test(file));
      const hasStandaloneBostonEasyTrip = slideFiles.some((file) => /(^|\/)boston-easytrip\.(ppt|pptx)$/i.test(file));

      if (!hasStandaloneTrashBuddies) {
        await copyMatchingSlides(slugDir, 'trash-buddies', [1, 2, 3, 4, 5]);
      }
      if (!hasStandaloneGuessTheLibrary) {
        await copyMatchingSlides(slugDir, 'guess-the-library', [6, 7, 8, 9]);
      }
      if (!hasStandaloneWordy) {
        await copyMatchingSlides(slugDir, 'word-cross-wordy', [10, 11, 12, 13]);
      }
      if (!hasStandaloneBostonEasyTrip) {
        await copyMatchingSlides(slugDir, 'boston-easytrip', [15, 16, 17, 18, 19, 20, 21, 22, 23]);
      }
      console.log('Split shared T561 deck into project-specific slide folders where standalone decks are not present.');
    }
  }
}

async function processVideos() {
  const videoFiles = (await listFilesRecursive(sourceVideosDir)).filter((file) => /\.(mp4|mov|m4v|webm)$/i.test(file));

  for (const video of videoFiles) {
    const destination = path.join(publicVideosDir, path.basename(video));
    await copyFileSafe(video, destination);
    console.log('Copied video:', path.basename(video));
  }
}

async function main() {
  await Promise.all([ensureDir(publicPapersDir), ensureDir(publicSlidesDir), ensureDir(publicVideosDir)]);

  await processPdfs();
  await processDocxPapers();
  await processSlides();
  await processVideos();

  console.log('Asset processing complete.');
}

main().catch((error) => {
  console.error('Asset processing failed with an unexpected error.');
  console.error(error);
  process.exit(1);
});
