import fs from 'node:fs/promises';
import path from 'node:path';

export type SlideCaption = {
  title?: string;
  body?: string;
  bullets?: string[];
};

export type SlideItem =
  | {
      type: 'image';
      src: string;
      alt?: string;
      caption?: SlideCaption;
      composition?: 'guess-the-library-slide-1';
      frameSrc?: string;
    }
  | { type: 'youtube'; src: string; title: string; poster?: string; caption?: SlideCaption };

async function readSlideManifest(folder: string) {
  try {
    const manifestPath = path.join(folder, 'slides.json');
    const raw = await fs.readFile(manifestPath, 'utf8');
    return JSON.parse(raw) as SlideItem[];
  } catch {
    return null;
  }
}

export async function getSlideItems(slug: string, title?: string): Promise<SlideItem[]> {
  const folder = path.join(process.cwd(), 'public', 'project-slides', slug);
  const manifest = await readSlideManifest(folder);

  if (manifest) {
    return manifest;
  }

  try {
    const files = (await fs.readdir(folder))
      .filter((file) => /\.(png|jpg|jpeg|webp|gif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    return files.map((file, index) => ({
      type: 'image' as const,
      src: `/project-slides/${slug}/${file}`,
      alt: title ? `${title} slide ${index + 1}` : undefined
    }));
  } catch {
    return [];
  }
}
