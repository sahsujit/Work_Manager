"use client"
import UserContext from '@/context/userContext'
import { deleteTask, fetchTask } from '@/services/task'
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task'

const ShowTask = () => {

    const [tasks, setTasks] = useState([]);
    const context= useContext(UserContext)
    console.log(context)

    async function loadTask(userId){
        const res = await fetchTask(userId)
        setTasks([...res])
        console.log("res", res)
    }

    useEffect(()=>{
        if(context.user){
            loadTask(context.user._id)
        }
        
    },[context.user])


    async function deleteTaskParent(workId){
        const res = await deleteTask(workId)

        const newTask = tasks.filter((item)=> item._id != workId)
        setTasks(newTask)

    }


  return (
    <div className='mx-auto py-10 gap-7 w-[45%] text-richblack-50 flex flex-col justify-center ' >
        <h1 className='text-4xl  font-bold'>
            Your Task ({tasks.length})
        </h1>

        <div className='flex w-full flex-col gap-4'>
            {
                tasks.map((task, index)=>(
                    <Task task={task} key={index} deleteTaskParent={deleteTaskParent}/>
                ))
            }

        </div>

    </div>
  )
}

export default ShowTask







