"use client"
import React, { useContext, useState } from 'react'
import frameImg from "../../images/frame.png"
import image from "../../images/login.webp"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { userLogin } from '@/services/signup'
import { useRouter } from 'next/navigation'
import UserContext from '@/context/userContext'


const Login = () => {
  const context = useContext(UserContext)
  const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      })
    
      const [showPassword, setShowPassword] = useState(false)
    
      const { email, password } = formData

      const handleOnChange = (event)=>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })

      }

      const handleOnSubmit = async(e)=>{
        e.preventDefault()
        try{
          const res = await userLogin(formData)
          toast.success("Logged in successfully")

          context.setUser(res.user)

          router.push("/profile/user")
          console.log(res)
          setFormData({
            email:"",
            password:"",
          })

        }catch(err){
          console.log(err)

        }
      }
    
  return (
    <div className='mx-auto py-10 h-screen justify-between w-10/12 text-richblack-50  flex flex-row-reverse  items-center '>
    <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
       <Image
         src={frameImg}
         alt="Pattern"
         width={558}
         height={504}
         priority
         
       />
       <Image
         src={image}
         alt="Students"
         width={558}
         height={504}
         priority
         
         className="absolute -top-4 right-4 z-10"
       />
     </div>
     <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-[40%] flex-col gap-y-4"
    >
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] mb-5 text-richblack-5">Welcome Back</h1>
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link href="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Sign In
      </button>
    </form>

    </div>
  )
}

export default Login





