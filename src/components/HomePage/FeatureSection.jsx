import React from 'react'
import { CheckCircleIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/solid'

const features = [
  {
    title: 'Task Tracking',
    description: 'Easily track your tasks and progress.',
    icon: CheckCircleIcon,
  },
  {
    title: 'Collaboration',
    description: 'Collaborate with your team in real-time.',
    icon: UsersIcon,
  },
  {
    title: 'Analytics',
    description: 'Get detailed analytics on your tasks.',
    icon: ChartBarIcon,
  },
]

const FeatureSection = () => {
  return (
    <div className="py-20 px-[100px]  ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8  text-richblack-5">Features</h2>
        <p className="text-lg text-richblack-300 mb-12">
          Explore the powerful features of our task management application.
        </p>
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-richblack-800 rounded-lg shadow-lg p-6">
                <feature.icon className="w-12 h-12 text-white text-indigo-600 mx-auto mb-4" />
                <h3 className="text-2xl text-richblack-50 font-semibold mb-2">{feature.title}</h3>
                <p className="text-richblack-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
