export type HomeNavItem = {
  label: string;
  icon: string;
  active?: boolean;
};

export type HomeSuggestion = {
  name: string;
  handle: string;
};

export type HomeQuickAction = {
  label: string;
  icon: string;
};

export type SurfacePatternDescriptor = {
  id: 'landing' | 'post';
  containerClass: string;
  headingClass: string;
  bodyClass: string;
};
