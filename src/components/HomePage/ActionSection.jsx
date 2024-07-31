import Link from 'next/link'
import React from 'react'

const ActionSection = () => {
  return (
    <div className="bg-indigo-600 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-richblack-5 mb-4">Get Started with Work Manager</h2>
        <p className="text-lg  text-richblack-300 text-indigo-200 mb-8">
          Join thousands of users who are managing their tasks more efficiently with Work Manager.
        </p>
        <div >
          <Link href={"/signup"} className="text-center mr-4 text-[13px] sm:text-[16px] px-6 py-3
         rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
          hover:shadow-none bg-yellow-50 text-black hover:scale-95 transition-all duration-200 ">
            Sign Up
          </Link>
          <Link href={"/login"} className="text-center text-[13px] sm:text-[16px] px-6 py-3
         rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
          hover:shadow-none hover:scale-95 text-richblack-50 bg-richblack-800 transition-all duration-200 ">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ActionSection
