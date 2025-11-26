export interface ClassInfo {
  id: string;
  title: string;
  ageGroup?: string;
  schedule: string;
  time: string;
  description?: string;
}

export const Section = {
  HERO: 'hero',
  MAIN_CLASS: 'main-class',
  INSTRUCTOR: 'instructor',
  OTHER_CLASSES: 'other-classes',
  LOCATION: 'location',
  CONTACT: 'contact'
} as const;

export type Section = (typeof Section)[keyof typeof Section];

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}