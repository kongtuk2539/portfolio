import React, { useEffect } from 'react'
import User from '../assets/img/pf4.png'

function Summary() {

    return (
        <div id='summary' >
            <div className='h-auto lg:h-[900px] flex justify-between items-start lg:items-center py-20 mx-8 lg:mx-0'>
                <div className='flex flex-col'>
                    <div className='font-Lilita-One text-[#D2272B] shadow-xl text-[48px] relative w-fit p-5 top-6 left-10 lg:left-[280px] rounded-md bg-[#F0B91E] z-20'>
                        <h1>Summary</h1>
                    </div>
                    <div className='flex flex-col justify-center relative -top-8 lg:left-[180px] z-10 gap-6
                w-auto lg:w-[800px] p-8 lg:pr-[200px] lg:pl-[100px] h-[500px] rounded-md border-4 border-[#D2272B] bg-[#FCE097]'>
                        <h2 className='font-Lilita-One text-3xl hover:animate-bounce hover:cursor-default'>
                            Tho Kongtuk
                        </h2>
                        <p className='font-Nunito text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quae. <br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae in deserunt adipisci deleniti dolores labore est distinctio
                            asperiores suscipit. Deserunt, illum? Alias odit molestiae at nesciunt asperiores ab hic consequatur?
                        </p>
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