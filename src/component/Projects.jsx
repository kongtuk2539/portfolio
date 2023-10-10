import Card from './Card'

function Projects() {
    const fitUpPorject = {
        img: '/src/assets/img/projects/fit-up-porject.png',
        header: 'Fit Up Porject',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae in deserunt adipisci deleniti dolores labore est distinctio asperiores suscipit. Deserunt, illum? Alias odit molestiae at nesciunt asperiores ab hic consequatur?',
        link: 'https://github.com/kongtuk2539/fit-up-project.git'
    }

    const findYourHat = {
        img: '/src/assets/img/projects/find-your-hat.png',
        header: 'Find Your Hat',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae in deserunt adipisci deleniti dolores labore est distinctio asperiores suscipit. Deserunt, illum? Alias odit molestiae at nesciunt asperiores ab hic consequatur?',
        link: 'https://github.com/kongtuk2539/javascript_assignments.git'
    }

    const cloneStaticWebsite = {
        img: '/src/assets/img/projects/clone-static-website_colmar-project.png',
        header: 'Colmar Project',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae in deserunt adipisci deleniti dolores labore est distinctio asperiores suscipit. Deserunt, illum? Alias odit molestiae at nesciunt asperiores ab hic consequatur?',
        link: 'https://github.com/kongtuk2539/colmar-project.git'
    }

    const enrollSystem = {
        img: '/src/assets/img/projects/Course-registration-system.png',
        header: 'Enroll System',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae in deserunt adipisci deleniti dolores labore est distinctio asperiores suscipit. Deserunt, illum? Alias odit molestiae at nesciunt asperiores ab hic consequatur?',
        link: 'https://github.com/kongtuk2539/Project-EnrollSystem.git'
    }

    const reactAssessment = {
        img: '/src/assets/img/projects/react-project.png',
        header: 'React Assessment',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quae.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae in deserunt adipisci deleniti dolores labore est distinctio asperiores suscipit. Deserunt, illum? Alias odit molestiae at nesciunt asperiores ab hic consequatur?',
        link: 'https://github.com/kongtuk2539/React-Assessment-.git'
    }
    return (
        <div id='projects' className='pt-5'>
            <div className='text-center font-Lilita-One text-[48px] text-[#D2272B]'>
                <h1>Projects</h1>
            </div>
            <div className='h-auto flex justify-between items-center px-6 py-14'>
                <Card content={fitUpPorject} />
                <Card content={enrollSystem} />
                <Card content={reactAssessment} />
            </div>
            <div className='h-auto flex justify-center gap-6 items-center px-6'>
                <Card content={findYourHat} />
                <Card content={cloneStaticWebsite} />
            </div>
        </div>
    )
}

export default Projects