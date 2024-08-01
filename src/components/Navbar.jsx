"use client"
import UserContext from '@/context/userContext'
import { logout } from '@/services/signup'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
    const router = useRouter()
    const context = useContext(UserContext)

    async function doLogout() {
        try {
            const res = await logout()
            context.setUser(null)
            toast.success("Logged Out !!")
            router.push('/')

        } catch (err) {
            console.log(err)
        }
    }




    return (
        <nav className=' px-10 flex h-14 items-center text-richblack-50 justify-between border-b-[1px] border-b-richblack-700  transition-all duration-200'>

            <Link href={"/"}
                className='text-slate-200 text-2xl font-bold'>
                Work Manager
            </Link>

            <ul className='flex text-slate-100 gap-4'>
                {
                    context.user && (
                        <>
                            <li>
                                <Link href={"/"}
                                    className='hover:text-yellow-50 duration-200  transition-all'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={"/add-task"}
                                    className='hover:text-yellow-50 duration-200  transition-all'>
                                    Add Task
                                </Link>
                            </li>
                            <li>
                                <Link href={"/show-task"}
                                    className='hover:text-yellow-50 duration-200  transition-all'>
                                    Show Tasks
                                </Link>
                            </li>
                        </>
                    )
                }

                <li>
                    <Link href={"/contact"}
                        className='hover:text-yellow-50 duration-200  transition-all'>
                       Contact Us
                    </Link>
                </li>
            </ul>

            <div className='flex text-slate-200 items-center gap-4'>
                {
                    context.user ? (
                        <>
                            {/* <Image
                            src={context?.user?.profileUrl}
                            alt='user profile'
                            priority
                            width={40}
                            height={40}
                            className="rounded-full"
                            /> */}

                           <Link href={"/profile/user"}>
                            <CgProfile size={30} className='cursor-pointer'/>
                           </Link>


                            <button onClick={doLogout} className="rounded-[8px] border border-richblack-700
                 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                Logout
                            </button>
                        </>
                    )
                        : (<>
                            <Link href={"/login"} className="rounded-[8px] border border-richblack-700
                 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                Login
                            </Link>
                            <Link href={"/signup"} className="rounded-[8px] border border-richblack-700
                 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                                Sign Up
                            </Link>
                        </>)
                }



            </div>



        </nav>
    )
}

export default Navbar