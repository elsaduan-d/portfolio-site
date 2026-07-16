export type MediaItem = {
  slug: string;
  title: string;
  description: string;
  videoPath: string;
};

export const mediaItems: MediaItem[] = [
  {
    slug: 'between-us-prototype',
    title: 'Between Us Prototype Walkthrough',
    description:
      'A playable project recording showing the interaction flow, prompts, and shared-reflection design of the Between Us prototype.',
    videoPath: '/videos/between-us-screen-recording.mp4'
  }
];
