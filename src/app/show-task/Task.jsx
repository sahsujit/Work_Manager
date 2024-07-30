import React, { useContext } from 'react'
import { HiClock } from "react-icons/hi"
import { FaCheck } from "react-icons/fa"
import UserContext from '@/context/userContext'
import { RiDeleteBin6Line } from "react-icons/ri"

const Task = ({ task , deleteTaskParent}) => {

  function deleteTask(workId){
    deleteTaskParent(workId)
  }


    const {user} = useContext(UserContext)
    console.log(task)
    return (
        <div className="border border-richblack-800 w-full flex flex-row justify-between items-center rounded-lg p-5">
            <div className='flex flex-col gap-1'>
                <h2 className='text-2xl font-bold text-richblack-25'>
                    {task.title}
                </h2>
                <p className='text-richblack-300'>
                    {task.content}
                </p>
                {task.status === "pending" ? (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                        <HiClock size={14} />
                        Pending
                      </p>
                    ) : (
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                          <FaCheck size={8} />
                        </div>
                        Completed
                      </p>
                    )}
            </div>

            <div className='flex  flex-col-reverse gap-10 items-end'>
                <p>
                    Author: <span>
                        {user.firstName} {user.lastName}
                    </span>
                </p>
                <div>
                  <RiDeleteBin6Line size={20} className='cursor-pointer'
                  onClick={()=>{deleteTask(task._id)}}
                  />
                </div>
            </div>


        </div>
    )
}

export default Task