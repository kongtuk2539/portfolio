import React, { useEffect } from 'react'
import User from '../assets/img/pf4.png'
import { Link } from 'react-scroll';
import iconResume from '../assets/img/icon-resume.png'
import iconGit from '../assets/img/icon-git.png'
import iconLinked from '../assets/img/icon-linkedin.png'

function Summary() {
    const linkResume = 'https://drive.google.com/file/d/1P9WjJ9a-5bccoZXJJJsSD16XqZwMeaQs/view?usp=sharing'
    const linkGit = 'https://github.com/kongtuk2539?tab=repositories'
    const linkLinked = 'https://www.linkedin.com/in/tho-kongtuk/'

    return (
        <div id='summary' >
            <div className='h-auto lg:h-[900px] flex justify-between items-start lg:items-center py-20 mx-8 lg:mx-0'>
                <div className='flex flex-col'>
                    <div className='font-Lilita-One text-[#D2272B] shadow-xl text-[24px] lg:text-[36px] relative w-fit p-2 lg:p-3 -top-3 lg:top-0 left-10 lg:left-[280px] rounded-md bg-[#F0B91E] z-20'>
                        <h1>Summary</h1>
                    </div>
                    <div className='flex flex-col justify-center relative -top-8 h-auto pt-16 lg:pt-0 lg:left-[180px] z-10 gap-6
                w-auto lg:w-[800px] p-8 lg:pr-[200px] lg:pl-[100px] lg:h-[500px] rounded-md border-4 border-[#D2272B] bg-[#FCE097]'>
                        <h2 className='font-Lilita-One text-3xl animate-bounce hover:cursor-default'>
                            Hi, I am <span className='text-[#D2272B]'>Tho Kongtuk</span> <br />
                            I am a <span className='text-[#D2272B] uppercase'>software developer</span>
                        </h2>
                        <p className='font-Nunito text-base font-bold'>
                            I am a career changer. I come from a background in social sciences and was interested in information technology,
                            so I switched to becoming a software developer. I was passionate about learning.
                            Studying coding techniques and mastering troubleshooting were important steps in advancing my career as a software developer.
                        </p>
                        <div>
                            <div>
                                <a className='font-Lilita-One font-bold text-[22px] lg:text-[36px] cursor-pointer transition-all duration-300 hover:text-[#D2272B] hover:text-[24px] lg:hover:text-[48px] hover:font-Lilita-One' >
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-50} // Adjust the offset as needed
                                        duration={500}
                                    >
                                        Contact
                                    </Link>
                                </a>
                            </div>
                            <div className='flex items-center gap-2 pt-4'>
                                <a href={linkResume} target='blank'>
                                    <img src={iconResume} alt="" className='w-8 lg:w-10 hover:w-10 lg:hover:w-12 cursor-pointer transition-all duration-300' />
                                </a>
                                <a href={linkGit} target='blank'>
                                    <img src={iconGit} alt="" className='w-8 lg:w-10 hover:w-10 lg:hover:w-12 cursor-pointer transition-all duration-300' />
                                </a>
                                <a href={linkLinked} target='blank'>
                                    <img src={iconLinked} alt="" className='w-9 lg:w-11 hover:w-11 lg:hover:w-14 cursor-pointer transition-all duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* data-aos="fade-right" data-aos-duration="2000" */}
                <div className='p-4 relative right-[110px] z-20 hidden lg:block' >
                    <img src={User} alt=""
                        className='w-[380px]' />
                </div>
            </div>
        </div>
    )
}


export default Summary