export type LanguageKey = 'en' | 'no';

export type ContactsText = {
  title: string; 
}

export type ProjectsText = {
  title: string;
  tagline: string;   
}

export type HomeText = {
  title: string;
  tagline: string;       
  description: string;   
};

export type SkillsText = {
  title: string;
  tagline: string;       
  category_1: string,
  category_2: string,  
};

export type LanguageContent = {
  nav: string[];
  home: HomeText;
  skills: SkillsText;
  projects: ProjectsText;
  contacts: ContactsText;
};

export type ContentText = Record<LanguageKey, LanguageContent>;