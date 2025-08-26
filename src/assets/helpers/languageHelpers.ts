
import { type ContentText, type LanguageKey } from "./types";


export const contentText: ContentText = {
  en: {
    nav: [
        'Home',
        'Skills',
        'Projects',
        'Contacts',
    ],
    home: {
      title: 'Web-Developer',
      tagline: 'I create, build and improve <br/> your online experience.',
      description: 'Hi, I’m Rob(ertas) Tamulionis, a web developer with 6+ years of experience, specializing in ReactJS and its ecosystem. I’ve worked in both fast-moving startups and large corporate environments, gaining a solid foundation in building scalable, user-friendly applications. <br/> Along the way, I’ve also worked extensively with PHP/Laravel and VueJS, giving me a versatile toolkit to adapt to different projects. I’m always eager to explore new technologies and push my skills further. <br/> I’m eager to take the next step in my career—tackling new challenges and delivering value as part of an ambitious team.'
    },
    skills: {
      title: 'Skills',
      tagline: 'Over the past 6 years as a web developer, I’ve worked with a wide range of tools and technologies. Some have become part of my everyday workflow, while others I’ve used to solve specific challenges. To give a clearer picture, I’ve grouped my skills into two categories',
      category_1: 'Comfortbale',
      category_2: 'Additional Experience'
    },
    projects: {
      title: 'Projects',
      tagline: 'Here’s a selection of my most notable projects, both professional and personal.'
    },
    contacts: {
      title: 'Contacts'
    }
  },
  no: {
    nav: [
    'Hjem',
    'Ferdigheter',
    'Prosjekter',
    'Kontakt',
    ],
    home: {
      title: 'Webutvikler',
      tagline: 'Jeg skaper, bygger og forbedrer <br/> din digitale opplevelse.',
      description: 'Hei, jeg er Rob(ertas) Tamulionis, en webutvikler med over 6 års erfaring, spesialisert på ReactJS og dets økosystem. Jeg har jobbet både i hurtigvoksende startups og i store konsern, og har opparbeidet meg et solid grunnlag i å bygge skalerbare og brukervennlige applikasjoner. <br/> Underveis har jeg også jobbet mye med PHP/Laravel og VueJS, noe som har gitt meg et allsidig verktøysett til å tilpasse meg ulike prosjekter. Jeg er alltid nysgjerrig på nye teknologier og ønsker kontinuerlig å utvikle ferdighetene mine. <br/> Nå ser jeg frem til å ta neste steg i karrieren min – å møte nye utfordringer og skape verdi som en del av et ambisiøst team.'
    },
    skills: {
      title: 'Ferdigheter',
      tagline: 'I løpet av de siste 6 årene som webutvikler har jeg arbeidet med et bredt spekter av verktøy og teknologier. Noen har blitt en del av min daglige arbeidsflyt, mens andre har jeg brukt til å løse spesifikke utfordringer. For å gi et tydeligere bilde har jeg delt ferdighetene mine inn i to kategorier',
      category_1: 'Komfortabel',
      category_2: 'Tilleggs­erfaring'
    },
    projects: {
      title: 'Prosjekter',
      tagline: 'Her er et utvalg av mine mest bemerkelsesverdige prosjekter, både profesjonelle og personlige.'
    },
    contacts: {
      title: 'Kontakt'
    }
  },
};

export const getDefaultLanguage = (): LanguageKey => {
  const savedLang = localStorage.getItem("lang") as LanguageKey | null;
  const browserLang = navigator.language.split("-")[0] as LanguageKey;
  const supported: LanguageKey[] = ['en', 'no'];

  if (savedLang && supported.includes(savedLang)) {
    return savedLang;
  } else if (supported.includes(browserLang)) {
    return browserLang;
  } else {
    return "en";
  }
};