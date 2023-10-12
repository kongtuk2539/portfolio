import React from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/img/web-logo.png'

function MenuBar() {
    return (
        <div className='flex items-center justify-between p-4 sticky top-0 z-30 bg-[#F0B91E] drop-shadow-lg'>
            <div className='hidden lg:flex'>
                <div className='absolute top-1 rounded-full w-auto p-2 bg-[#FFFFFF]'>
                    <img src={logo} className='w-[45px]' />
                </div>
                <h2 className='pl-[80px] font-Lilita-One font-bold text-4xl cursor-pointer transition-all duration-300 hover:text-[#D2272B]
                hidden lg:block'>
                    Tho Kongtuk
                </h2>
            </div>
            <ul className='font-Nunito font-bold text-lg flex justify-center w-full lg:w-auto gap-4'>
                <li className='cursor-pointer transition-all duration-300 hover:text-[#D2272B] hover:text-[24px] lg:hover:text-[36px] hover:font-Lilita-One'>
                    <Link
                        to="summary"
                        spy={true}
                        smooth={true}
                        offset={-50} // Adjust the offset as needed
                        duration={500}
                    >
                        Summary
                    </Link>
                </li>
                <li className='cursor-pointer transition-all duration-300 hover:text-[#D2272B] hover:text-[24px] lg:hover:text-[36px] hover:font-Lilita-One' >
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-50} // Adjust the offset as needed
                        duration={500}
                    >
                        Skills
                    </Link>
                </li>
                <li className='cursor-pointer transition-all duration-300 hover:text-[#D2272B] hover:text-[24px] lg:hover:text-[36px] hover:font-Lilita-One' >
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50} // Adjust the offset as needed
                        duration={500}
                    >
                        Projects
                    </Link>
                </li>
                <li className='cursor-pointer transition-all duration-300 hover:text-[#D2272B] hover:text-[24px] lg:hover:text-[36px] hover:font-Lilita-One' >
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50} // Adjust the offset as needed
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuBar