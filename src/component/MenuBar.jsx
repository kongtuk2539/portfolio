import React from 'react'
import { Link } from 'react-scroll';

function MenuBar() {
    return (
        <div className='flex justify-between p-4 sticky top-0 z-30 bg-[#F0B91E] drop-shadow-lg'>
            <div>
                <h2 className='font-Lilita-One font-bold text-4xl cursor-pointer transition-all duration-300 hover:text-[#D2272B]
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