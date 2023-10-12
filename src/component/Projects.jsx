import Card from './Card'
import imgFitUpPorject from '../assets/img/projects/fit-up-porject.png'
import imgFindYourHat from '../assets/img/projects/find-your-hat.png'
import imgCloneStaticWebsite from '../assets/img/projects/clone-static-website_colmar-project.png'
import imgEnrollSystem from '../assets/img/projects/Course-registration-system.png'
import imgReactAssessment from '../assets/img/projects/react-project.png'

function Projects() {
    const fitUpPorject = {
        img: imgFitUpPorject,
        header: 'Fit Up Porject',
        content: 'The Fit Up Project was a website for creating exercise schedules by yourself. It was developed using The MEAN stack, and CRUD was implemented through the API, while tailwindcss was used to make the UI page attractive and beautiful.',
        link: 'https://github.com/kongtuk2539/fit-up-project.git',
        viewApp: '#'
    }

    const findYourHat = {
        img: imgFindYourHat,
        header: 'Find Your Hat',
        content: `Find Your Hat was a game developed with JS in which a map (field) was created. Obstacles (walls) were generated, including the player's spawn point and the hat's location. The player had to navigate through the obstacles to reach the hat.`,
        link: 'https://github.com/kongtuk2539/javascript_assignments.git',
        viewApp: 'https://replit.com/@Thokongtuk/56-find-your-hat-56Tho#index.js'
    }

    const cloneStaticWebsite = {
        img: imgCloneStaticWebsite,
        header: 'Colmar Project',
        content: 'The Colmar Project was a static website clone created using HTML and CSS, and it featured responsive support.',
        link: 'https://github.com/kongtuk2539/colmar-project.git',
        viewApp: 'https://colmar-56.vercel.app/'
    }

    const enrollSystem = {
        img: imgEnrollSystem,
        header: 'Enroll System',
        content: 'The Enroll System was a website for registering for online music courses. User rights were divided into three parts: administrators, teachers, and students. The frontend was developed using Angular, and the backend utilized C# .NET 6 to create APIs.',
        link: 'https://github.com/kongtuk2539/Project-EnrollSystem.git',
        viewApp: '#'
    }

    const reactAssessment = {
        img: imgReactAssessment,
        header: 'React Assessment',
        content: 'The React Assessment was a CRUD app that used axios to connect with API endpoints to retrieve data for display within the app.',
        link: 'https://github.com/kongtuk2539/React-Assessment-.git',
        viewApp: 'https://react-assessment-pink.vercel.app/'
    }
    return (
        <div id='projects' className='pt-5' data-aos="zoom-in-down">
            <div className='text-center font-Lilita-One text-[48px] text-[#D2272B]'>
                <h1>Projects</h1>
            </div>
            <div className='h-auto flex flex-col lg:flex-row justify-between items-center px-6 py-14' data-aos="zoom-in-left">
                <Card content={fitUpPorject} />
                <Card content={enrollSystem} />
                <Card content={reactAssessment} />
            </div>
            <div className='h-auto flex flex-col lg:flex-row justify-center gap-6 items-center px-6' data-aos="zoom-in-right">
                <Card content={findYourHat} />
                <Card content={cloneStaticWebsite} />
            </div>
        </div>
    )
}

export default Projects