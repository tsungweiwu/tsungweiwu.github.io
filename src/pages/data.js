import zoom from '../assets/zoom-react-laravel.png';
import youtility from '../assets/youtility.png';
import grade from '../assets/gradeCalc.png';
import pong0 from '../assets/pong/pong0.png';
import pong1 from '../assets/pong/pong1.png';
import pong2 from '../assets/pong/pong2.png';
import pong3 from '../assets/pong/pong3.png';
import meet1 from '../assets/meet/meet1.png';
import meet2 from '../assets/meet/meet2.png';
import meet3 from '../assets/meet/meet3.png';
import meet4 from '../assets/meet/meet4.png';
import ig1 from '../assets/instagram/ig1.png';
import ig2 from '../assets/instagram/ig2.png';
import ig3 from '../assets/instagram/ig3.png';
import ig4 from '../assets/instagram/ig4.png';
import webscrape from '../assets/webscrape.png';
import soon from '../assets/comingsoon.jpg';

// eslint-disable-next-line
export default [
    {
        title: 'Zoom Meeting Dashboard',
        description:
            'Web application with React.js as the frontend and Laravel as backend. Zoom manager for multiple users to have limited access to a central Zoom hosting account to create meetings.',
        imageSrc: [zoom],
        frame: '',
        link: 'https://github.com/tsungweiwu/zoom-react-laravel',
        languages: ['All', 'React.js', 'Laravel', 'PHP'],
    },
    {
        title: 'Youtility',
        description:
            'Utility service mobile application & web application allowing customers to have access to multiple utility companies through a central hub. Whether to pay bills or to report an issue with their service.',
        imageSrc: [youtility],
        frame: 'https://www.youtube.com/embed/UNQeow4AL10',
        link: 'https://github.com/tsungweiwu/Utility-2',
        languages: ['All', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Grade Calculator',
        // eslint-disable-next-line
        description:
            "Program that allows myself to calculate my semester's grade using the course grading scales. One can choose to use spreadsheets as an alternative method to calculate their grades, this was only a fun mini project to try out.",
        imageSrc: [grade],
        frame: '',
        link: 'https://github.com/tsungweiwu/grades',
        languages: ['All', 'Java'],
    },
    {
        title: 'Pong',
        description:
            'GBA Emulator project to recreate "ONE" of the world\'s first arcade game using C. This is a two player game, the first to get 7 points, wins the game and you are prompted to start over.',
        imageSrc: [pong0, pong1, pong2, pong3],
        frame: '',
        link: 'https://github.com/tsungweiwu/Pong',
        languages: ['All', 'C'],
    },
    {
        title: 'Instagram Replica',
        description:
            'Practice project to try and replicate the most recent version of Instagram in 2020. Reason for choosing Instagram is because of its C.R.U.D. (Create, Retrieve, Update, Delete) to database required funtionality.',
        imageSrc: [ig1, ig2, ig3, ig4],
        frame: '',
        link: '',
        languages: ['All', 'Swift'],
    },
    {
        title: 'Meet Food & Culture',
        description:
            'Senior Project, to build an app from React Native that allows users from all over the globe to connect through the one thing we can all relate with, food. Food is the gateway to relationships and exploration of new cultures.',
        imageSrc: [meet1, meet2, meet3, meet4],
        frame: '',
        link: '',
        languages: ['All', 'React Native'],
    },
    {
        title: 'Internship Web Scraper',
        description:
            'Practice program to collect specific information about intern positions available and export it to a csv file. This application also helped me understanding the html structures of Glassdoor in a deeper level.',
        imageSrc: [webscrape],
        frame: '',
        link: 'https://github.com/tsungweiwu/InternshipFinder',
        languages: ['All', 'Python'],
    },
];
