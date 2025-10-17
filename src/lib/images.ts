const meta = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{png,jpg,jpg,webp,svg,gif}', { eager: true });
export const images = Object.fromEntries(
  Object.entries(meta).map(([p, m]) => [p.split('/').pop()?.split('.')[0]!, m.default])
);