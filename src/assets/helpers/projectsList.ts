import OneCall from '../images/photos/onecall.png';
import OneCallWebshop from '../images/photos/onecall-webshop.png';
import Zeipt from '../images/photos/zeipt.png';
import ZeiptProject from '../images/photos/zeipt-project.png';
import Rtdevs3 from '../images/photos/rtdevs-3.png';
import Rtdevs4 from '../images/photos/rtdevs-4.png';

// A single localized project entry
export type LocalizedProject = {
    name: string;
    description: string;
    link: string;
    git?: string;
    image: string;
}

// Full project with English + Norwegian versions
export type ProjectItem = {
    en: LocalizedProject;
    no: LocalizedProject;
}

export const projectsList: ProjectItem[] = [
    {
        en: {
            name: 'OneCall',
            description: 'OneCall website with a complete order flow, article sections, and user dashboards in My Pages.',
            link: 'https://onecall.no/',
            git: undefined,
            image: OneCall,
        },
        no: {
            name: 'OneCall',
            description: 'OneCall-nettsted med fullstendig bestillingsflyt, artikkelseksjoner og brukerdashbord i Mine Sider.',
            link: 'https://onecall.no/',
            git: undefined,
            image: OneCall,
        }
    },
    {
        en: {
            name: 'OneCall/MyCall Webshop',
            description: 'OneCall/MyCall e-commerce platform featuring advanced product filtering, product bundling options, secure user authentication, and a streamlined checkout system.',
            link: 'https://nettbutikk.onecall.no/',
            git: undefined,
            image: OneCallWebshop,
        },
        no: {
            name: 'OneCall/MyCall Nettbutikk',
            description: 'OneCall/MyCall e-handelsplattform med avansert produktfiltrering, pakkeløsninger, sikker brukerautentisering og en strømlinjeformet kasseprosess.',
            link: 'https://nettbutikk.onecall.no/',
            git: undefined,
            image: OneCallWebshop,
        }
    },
    {
        en: {
            name: 'Zeipt',
            description: 'Zeipt website and user dashboard for API usage.',
            link: 'https://zeipt.com',
            git: undefined,
            image: Zeipt,
        },
        no: {
            name: 'Zeipt',
            description: 'Zeipt-nettside og brukerdashbord for API-bruk.',
            link: 'https://zeipt.com',
            git: undefined,
            image: Zeipt,
        }
    },
    {
        en: {
            name: 'The Zeipt Project',
            description: 'Zeipt Company’s second page, a project aimed at increasing awareness.',
            link: 'https://thezeiptproject.com',
            git: undefined,
            image: ZeiptProject,
        },
        no: {
            name: 'The Zeipt Project',
            description: 'Zeipt-selskapets andre side, et prosjekt rettet mot å øke bevisstheten.',
            link: 'https://thezeiptproject.com',
            git: undefined,
            image: ZeiptProject,
        }
    },
    {
        en: {
            name: 'Rtdevs-4',
            description: 'This is the fourth iteration of my portfolio page.',
            link: 'https://google.com',
            git: 'https://github.com/RobertasTamulionis/rtdevs-3',
            image: Rtdevs4,
        },
        no: {
            name: 'Rtdevs-4',
            description: 'Dette er den fjerde iterasjonen av min porteføljeside.',
            link: 'https://google.com',
            git: 'https://github.com/RobertasTamulionis/rtdevs-3',
            image: Rtdevs4,
        }
    },
    {
        en: {
            name: 'Rtdevs-3',
            description: 'This is the third iteration of my portfolio page.',
            link: 'https://google.com',
            git: 'https://github.com/RobertasTamulionis/rtdevs-3',
            image: Rtdevs3,
        },
        no: {
            name: 'Rtdevs-3',
            description: 'Dette er den tredje iterasjonen av min porteføljeside.',
            link: 'https://google.com',
            git: 'https://github.com/RobertasTamulionis/rtdevs-3',
            image: Rtdevs3,
        }
    }
];