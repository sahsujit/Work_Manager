"use client"
import UserContext from '@/context/userContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import { CgProfile } from 'react-icons/cg'
import { RiEditBoxLine } from 'react-icons/ri'
import DeleteUser from './DeleteUser'

const UserProfile = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='mx-auto py-10   w-8/12 text-richblack-50    '>
      <h1 className=' text-3xl font-bold mb-14 text-richblack-5'>My Profile</h1>

      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <CgProfile size={78} />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
      
      </div>


     



      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
         
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
           
          </div>
        </div>
      </div>
      <DeleteUser/>


    </div>
  )
}

export default UserProfile