import OneCall from '../images/photos/OneCall.png';
import Zeipt from '../images/photos/zeipt.png';
import ZeiptProject from '../images/photos/zeipt-project.png';
import Rtdevs3 from '../images/photos/rtdevs-3.png';

export type ProjectItem = {
    name: string;
    description: string;
    link: string;
    git?: string;
    image: string;
}

export const projectsList: ProjectItem[] = [
    {
        name: 'OneCall',
        description: 'OneCall website with a complete order flow, article sections, and user dashboards in My Pages.',
        link: 'https://onecall.no/',
        git: undefined,
        image: OneCall,
    },
    {
        name: 'Zeipt',
        description: 'Zeipt website and user dashboard for API usage.',
        link: 'https://zeipt.com',
        git: undefined,
        image: Zeipt,
    },
    {
        name: 'The Zeipt Project',
        description: 'Zeipt Company’s second page, a project aimed at increasing awareness.',
        link: 'https://thezeiptproject.com',
        git: undefined,
        image: ZeiptProject,
    },   
    {
        name: 'Rtdevs-3',
        description: 'This is the third iteration of my portfolio page..',
        link: 'https://google.com',
        git: undefined,
        image: Rtdevs3,
    }, 
]