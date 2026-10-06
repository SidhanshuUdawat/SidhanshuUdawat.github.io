// Add new apps here, then create their product and privacy pages under
// src/pages/appcrazy-labs/<slug>/. The studio directory reads this registry.
export const studio = {
  name: 'AppCrazy Labs',
  path: '/appcrazy-labs/',
  email: 'udawat.sidhanshu@gmail.com',
  description: 'An independent app studio building simple, useful consumer apps and utilities.',
} as const;

export interface StudioApp {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
}

export const uploadfit: StudioApp = {
  slug: 'uploadfit',
  name: 'UploadFit',
  category: 'Image utility',
  tagline: 'Make your image meet exact upload requirements.',
  description: 'Resize, crop and compress images to the dimensions and file size you need. Preview the result, then save or share it. Image processing stays on your device.',
};

export const chatLikeGenZ: StudioApp = {
  slug: 'chat-like-gen-z',
  name: 'Chat Like Gen Z',
  category: 'Writing utility',
  tagline: 'Say it in your own words, with a little more range.',
  description: 'Turn ordinary text into three Gen Z-style options, or decode slang into plain language. Currently in Google Play internal testing.',
};

export const apps: readonly StudioApp[] = [uploadfit, chatLikeGenZ];

export const appPath = (app: StudioApp) => `${studio.path}${app.slug}/`;
export const supportLink = (subject: string) =>
  `mailto:${studio.email}?subject=${encodeURIComponent(subject)}`;
