'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const skillItems = [
  { name: 'Car Repair', percentage: 72 },
  { name: 'Car Rental Service', percentage: 74 },
  { name: 'Car Cleaning & Parts', percentage: 81 },
]

export default function Skills() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className='p-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center my-32'>
      <div className='md:w-1/2 space-y-6'>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4'>
          We Have The Most Skilled Team
          <span className='text-red-600'>.</span>
        </h1>
        <p className='text-gray-600 mb-8'>
          Our team is made up of highly skilled and experienced professionals
          who are dedicated to delivering top-quality service. With expertise in
          panel beating, spray painting, mechanical repairs, and more, our
          technicians use the latest tools and techniques to ensure precision
          and excellence in every job.
        </p>
        <div className='space-y-6'>
          {skillItems.map((skill, index) => (
            <div key={index}>
              <div className='flex justify-between mb-2'>
                <span className='text-lg font-medium'>{skill.name}</span>
                <span className='text-lg font-medium'>{skill.percentage}%</span>
              </div>
              <div className='h-3 bg-gray-300 rounded-full overflow-hidden'>
                <div
                  className={`h-full bg-red-600 rounded-full transition-all duration-1000 ease-in-out ${
                    animate ? 'w-' + skill.percentage + '/100' : 'w-0'
                  }`}
                  style={{ width: animate ? `${skill.percentage}%` : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='md:w-1/2 flex justify-center mt-8 md:mt-0'>
        <div className='relative w-[500px] h-[400px]'>
          <Image
            src='/images/bg/formula-1.jpg'
            width={500}
            height={500}
            alt='Skills'
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  )
}
