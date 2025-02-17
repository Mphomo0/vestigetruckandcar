import React from 'react'
import Image from 'next/image'
import Tools from '@/public/images/icons/mechanic-tools.png'
import CarRepair from '@/public/images/icons/car-repair.png'
import Teamwork from '@/public/images/icons/teamwork.png'

export default function WhyChooseUs2() {
  return (
    <div className='w-full bg-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h6 className='text-red-600 font-semibold mb-2 md:mb-6 text-center'>
          // Our Company //
        </h6>

        <h1 className='text-4xl lg:text-5xl md:text-5xl font-bold text-center mb-16 md:mb-12'>
          Why Choose Us?
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white border border-gray-200 rounded-lg shadow-lg p-6'>
            <div className='flex justify-center mb-4 mt-8'>
              <Image
                src={Teamwork}
                alt='Qualified Team'
                width={70}
                height={70}
              />
            </div>
            <h3 className='text-2xl font-semibold text-center mb-4'>
              Highly Qualified Team
            </h3>
            <p className='text-center text-gray-600 mb-8'>
              Our staff comprises professionally qualified individuals dedicated
              to providing top-notch service. We invest in continuous training
              to stay abreast of the latest industry advancements.
            </p>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg shadow-lg p-6'>
            <div className='flex justify-center mb-4 mt-8'>
              <Image
                src={CarRepair}
                alt='Advanced Equipment'
                width={70}
                height={70}
              />
            </div>
            <h3 className='text-2xl font-semibold text-center mb-4'>
              Advanced Equipment
            </h3>
            <p className='text-center text-gray-600 mb-8'>
              We utilize the latest equipment from Aerocure and Josam, offering
              you peace of mind that your vehicle is in capable hands.
            </p>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg shadow-lg p-6'>
            <div className='flex justify-center mb-4 mt-8'>
              <Image
                src={Tools}
                alt='Industry Associations'
                width={70}
                height={70}
              />
            </div>
            <h3 className='text-2xl font-semibold text-center mb-4'>
              Industry Associations
            </h3>
            <p className='text-center text-gray-600 mb-8'>
              As a member of the Retail Motor Industry Organisation (RMI) and
              the South African Motor Body Repairers Association (SAMBRA), we
              adhere to professional service standards at affordable prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
