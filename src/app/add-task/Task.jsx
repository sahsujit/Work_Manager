



"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import taskImage from "../../images/task.svg";
import { addTask } from '@/services/task';
import { toast } from 'react-hot-toast';
import Head from 'next/head';




const AddTask = () => {

  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "",
    user: "66a2693c7d43c7ac5d2288ae"
  });

  const changeHandler = (event) => {
    setTask((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
   
    try {
      setLoading(true)
      const res = await addTask(task);
      setLoading(false)
    
      toast.success("Your task is added successfully!");
      setTask({
        title: "",
        content: "",
        status: "",
        user: "66a2693c7d43c7ac5d2288ae"
      });
    } catch (error) {
   
      toast.error("Failed to add task.");
      console.error('Error:', error);
    }

  };

  return (
    <>
    <Head>
      <title>Add Tasks : Work Manager</title>
    </Head>
    <div className='mx-auto py-10 gap-5 w-full text-richblack-50 flex flex-col items-center justify-center'>
      <Image
        src={taskImage}
        alt='Task Image'
        className='w-[50%]'
        priority
      />
      <p className="text-4xl leading-10 font-semibold mb-8 text-richblack-5">
        Add your task here
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col w-[50%] gap-7">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="label-style">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={changeHandler}
            id="title"
            placeholder="Enter your task title"
            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            className="w-full form-style rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="status" className="label-style">
            Status
          </label>
          <select
            name="status"
            id="status"
            value={task.status}
            onChange={changeHandler}
            placeholder="Select task status"
            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            className="w-full form-style rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          >
            <option value="" disabled>Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="label-style">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            value={task.content}
            onChange={changeHandler}
            cols="30"
            rows="7"
            placeholder="Enter your content here"
            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            className="w-full form-style rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </div>
        <button
          type="submit"
          className={`rounded-md bg-yellow-50 disabled:bg-richblack-500 sm:text-[16px] transition-all duration-200 hover:scale-95 hover:shadow-none px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]`}
        >
         { loading ? <span>Adding...</span>: <span>Add Task</span>
        }
        </button>
      </form>
    </div>
    </>
  );
};

export default AddTask;
