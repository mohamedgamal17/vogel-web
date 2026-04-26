export type PostComposerMediaPreview = {
  name: string;
  kind: 'image' | 'video';
  previewUrl: string;
};

export type PostSurfacePattern = {
  containerClass: string;
  sectionGapToken: string;
  controlVariant: 'soft' | 'stroked' | 'filled';
};
