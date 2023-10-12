import React from 'react'
import hcj from '../assets/img/skills/frontend/icon-html-css-js.com.png'
import react from '../assets/img/skills/frontend/icon-react.png'
import angular from '../assets/img/skills/frontend/icon-angular.png'
import bootstrap from '../assets/img/skills/frontend/icon-bootstrap.png'
import tailwind from '../assets/img/skills/frontend/icon-tailwind.png'


import cSharp from '../assets/img/skills/backend/icon-c-sharp.png'
import nodeJs from '../assets/img/skills/backend/icon-nodeJs.png'
import mongDB from '../assets/img/skills/backend/icon-mongDB.png'
import express from '../assets/img/skills/backend/icon-express.png'

import git from '../assets/img/skills/tool/icon-git.png'
import github from '../assets/img/skills/tool/icon-git-hub.png'
import gitdesktop from '../assets/img/skills/tool/icon-git-desktop.png'


import mssql from '../assets/img/skills/tool/icon-ms-sql.png'
import postman from '../assets/img/skills/tool/icon-postman.png'
import vs from '../assets/img/skills/tool/icon-vs.png'
import vscode from '../assets/img/skills/tool/icon-vs-code.png'



function Skills() {
    return (
        <div id='skills' className='pt-5' data-aos="zoom-in-down">
            <div className='text-center text-[#D2272B] font-Lilita-One text-[48px]'>
                <h1>Skills</h1>
            </div>
            <div className=' h-auto flex justify-between items-center px-0 lg:px-6 py-12'>
                <div className='flex flex-col'>
                    <div className='py-10 hidden lg:block'>
                        <div className='flex font-Lilita-One text-[36px] h-14 justify-center'>
                            <div className='bg-[#F0B91E] text-[#D2272B] w-fit px-4 rounded shadow-xl z-20'>
                                <h2 className=''>Frontend</h2>
                            </div>
                        </div>
                        <div className='bg-[#FCE097] px-10 py-5 flex gap-6 w-[400px] lg:w-auto items-center justify-between border-4 shadow-md rounded-md border-[#D2272B] relative -top-6 z-10'>
                            <div>
                                <img src={hcj} className='w-auto h-[120px]' />
                            </div>
                            <div className='flex'>
                                <img src={react} className='w-auto h-[120px]' />
                                <img src={angular} className='w-auto h-[120px]' />
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={bootstrap} className='w-auto h-[120px]' />
                                <img src={tailwind} className='w-auto h-[40px]' />
                            </div>
                        </div>
                    </div>


                    <div className='w-full flex flex-row flex-wrap lg:flex-nowrap justify-center gap-12'>

                        <div className='px-10 py-5 flex flex-col gap-4 items-center lg:hidden'>
                            <div className='font-Lilita-One text-[36px] h-14 text-center py-auto bg-[#F0B91E] text-[#D2272B] w-fit px-4 rounded shadow-xl z-20'>
                                <h2 className=''>FrontEnd</h2>
                            </div>
                            <div className='bg-[#FCE097] flex flex-col items-center pt-12 gap-8 border-4 h-[600px] w-full lg:w-[400px] shadow-md rounded-md border-[#D2272B] relative -top-10 z-10'>
                                <div>
                                    <img src={hcj} className='w-auto h-[100px]' />
                                </div>
                                <div className='flex flex-row-reverse lg:flex-row flex-wrap justify-center'>
                                    <img src={react} className='w-auto h-[100px]' />
                                    <img src={angular} className='w-auto h-[120px]' />
                                </div>
                                <div className='flex items-center gap-3 flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap'>
                                    <img src={bootstrap} className='w-auto h-[100px]' />
                                    <img src={tailwind} className='w-auto h-[28px]' />
                                </div>
                            </div>
                        </div>

                        <div className='px-10 py-5 flex flex-col gap-4 items-center' data-aos="fade-right">
                            <div className='font-Lilita-One text-[36px] h-14 text-center py-auto bg-[#F0B91E] text-[#D2272B] w-fit px-4 rounded shadow-xl z-20'>
                                <h2 className=''>Backend</h2>
                            </div>
                            <div className='bg-[#FCE097] flex flex-col items-center px-4 lg:px-0 pt-12 gap-8 border-4 h-[500px] w-full lg:w-[400px] shadow-md rounded-md border-[#D2272B] relative -top-10 z-10'>
                                <div className='flex'>
                                    <img src={cSharp} className='w-auto h-[120px]' />
                                    <img src={nodeJs} className='w-auto h-[120px]' />
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img src={mongDB} className='w-auto h-[120px]' />
                                    <div className='font-Nunito text-base flex flex-col text-center'>
                                        <img src={express} className='w-auto h-[60px]' />
                                        <p>Express</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='px-10 py-5 flex flex-col gap-4 items-center' data-aos="fade-left">
                            <div className='font-Lilita-One text-[36px] h-14 text-center py-auto bg-[#F0B91E] text-[#D2272B] w-fit px-4 rounded shadow-xl z-20'>
                                <h2 className=''>Tools</h2>
                            </div>
                            <div className='bg-[#FCE097] flex flex-col items-center px-4 lg:px-0   pt-12 gap-8 border-4 h-[550px] lg:h-[500px] w-full lg:w-[400px] shadow-md rounded-md border-[#D2272B] relative -top-10 z-10'>
                                <div className='flex items-center gap-4'>
                                    <img src={git} className='w-auto h-[50px]' />
                                    <img src={github} className='w-auto h-[80px]' />
                                    <img src={gitdesktop} className='w-auto h-[80px] hidden lg:block' />
                                </div>
                                <div className='flex items-center gap-4 lg:gap-12 flex-wrap justify-center'>
                                    <img src={gitdesktop} className='w-auto h-[80px] block lg:hidden' />
                                    <img src={mssql} className='w-auto h-[120px]' />
                                    <div className='font-Nunito text-base flex-col text-center flex'>
                                        <img src={postman} className='w-auto h-[80px]' />
                                        <p>postman</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-12'>
                                    <div className='font-Nunito text-base flex flex-col text-center'>
                                        <img src={vs} className='w-[80px] h-[60px]' />
                                        <p>visual studio</p>
                                    </div>
                                    <div className='font-Nunito text-base flex flex-col text-center'>
                                        <img src={vscode} className='w-auto h-[60px]' />
                                        <p>vs code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Skills