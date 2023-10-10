import React, { useState } from 'react'
import gitLogo from '../assets/img/skills/tool/icon-git-hub.png'


function Card({ content }) {

    const [onOverGit, setOnOverGit] = useState(false)
    console.log(onOverGit)

    return (
        <div className='w-auto lg:w-[400px]  px-4 flex flex-col justify-center rounded-lg drop-shadow-lg hover:drop-shadow-2xl hover:cursor-pointer'>
            <div className='z-10 flex justify-center'>
                <img src={content.img} alt=""
                    className='rounded-lg w-[240px] h-[180px] ' />
            </div>
            <div className='mt-6 px-6 bg-[#FCE097] h-auto lg:h-[430px] p-4 relative -top-20 rounded'>
                <div className='mt-16'>
                    <h3 className='font-Lilita-One text-3xl mb-4'>
                        {content.header}
                    </h3>
                    <p>
                        {content.content}
                    </p>
                    <div className='mt-4 w-auto
                    flex items-center gap-6'>
                        <a href={content.link} target='blank' onMouseEnter={() => setOnOverGit(true)} onMouseLeave={() => setOnOverGit(false)} className='z-20' >
                            <img src={gitLogo} className='w-[60px] hover:animate-bounce ' alt="" />
                        </a>
                        <div className={` w-[180px] pr-4 relative z-10 text-[#FF6F6F]
                        rounded-sm
                        ${!onOverGit ? 'translate-x-0' : '-translate-x-5 overflow-hidden transition-transform duration-300 transform'}`}>
                            <p className={`font-Lilita-One text-2xl ${!onOverGit ? '' : 'animate-bounce'} text-[#D2272B]`}>
                                go to git {!onOverGit ? '' : '...'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card