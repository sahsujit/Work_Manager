import Image from 'next/image'
import React from 'react'
import theme from "../../images/taskTheme.svg"
import Link from 'next/link'


const Home = () => {
  return (
    <div >
    <div className='flex justify-between items-center   px-[120px]'>
        <div className='flex  flex-col gap-5'>
            <h1 className='text-3xl text-richblack-5 font-bold'>
                Welcome to Work Manager
            </h1>
            <p className='text-richblack-300 mb-5 w-[400px]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Placeat rem eos, reprehenderit nisi adipisci voluptate 
                 voluptas iusto impedit saepe quidem?
            </p>

            <Link href={"/contact"} className='text-center  text-[13px] sm:text-[16px] px-6 py-3
         rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
         bg-yellow-50 text-black hover:shadow-none hover:scale-95 transition-all duration-200'>
                Contact Us
            </Link>
        </div>
        <div>
            <Image
            src={theme}
            
            alt=''
            priority
            />
        </div>

    </div>

</div>
  )
}

export default Home