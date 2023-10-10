import React, { useEffect } from 'react'

function Summary() {

    return (
        <div id='summary' >
            <div className='h-[900px] flex justify-between items-center py-20'>
                <div className='flex flex-col'>
                    <div className='font-Lilita-One text-[#D2272B] shadow-xl text-[48px] relative w-fit p-5 top-6 left-[280px] rounded-md bg-[#F0B91E] z-20'>
                        <h1>Summary</h1>
                    </div>
                    <div className='flex flex-col justify-center relative -top-8 left-[180px] z-10 gap-6
                w-[800px] pr-[200px] pl-[100px] h-[500px] rounded-md border-4 border-[#D2272B] bg-[#F0A2B5]'>
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
                <div className='p-4 relative right-[110px] z-20' >
                    <img src="/src/assets/img/pf4.png" alt=""
                        className='w-[380px]' />
                </div>
            </div>
        </div>
    )
}


export default Summary