'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import Phone from '@/public/images/icons/7.png'
import effectImage1 from '@/public/images/effect/1.png'
import effectImage2 from '@/public/images/effect/2.png'
import effectImage3 from '@/public/images/effect/3.png'
import effectImage4 from '@/public/images/effect/4.png'
import effectImage5 from '@/public/images/effect/5.png'
import effectImage6 from '@/public/images/effect/6.png'

export default function AboutSection() {
  const imageVariants = {
    rest: { y: 0 },
    hover: (custom) => ({
      y: custom * 20, // Move in opposite directions based on position
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  }

  const images = [
    { src: effectImage1, width: 180, height: 120, direction: 1 },
    { src: effectImage2, width: 150, height: 120, direction: -1 },
    { src: effectImage3, width: 120, height: 120, direction: 1 },
    { src: effectImage4, width: 180, height: 120, direction: -4 },
    { src: effectImage5, width: 150, height: 200, direction: 1 },
    { src: effectImage6, width: 200, height: 150, direction: -1 },
  ]

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Left side content (images and effects) */}
        <div className='relative mt-24 mb-4'>
          <div className='grid grid-cols-2 gap-4'>
            {images.map((img, index) => (
              <motion.div
                key={index}
                className='relative'
                variants={imageVariants}
                custom={img.direction}
                initial='rest'
                whileHover='hover'
              >
                <Image
                  src={img.src}
                  alt='#'
                  width={img.width}
                  height={img.height}
                  className='rounded-lg shadow-lg object-cover transition-transform hover:scale-105'
                />
              </motion.div>
            ))}
          </div>

          {/* "42 Years" floating div */}
          <motion.div
            className='absolute top-1/4 right-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white p-10 rounded-lg shadow-xl'
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className='text-7xl font-bold text-red-600'
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.3,
              }}
            >
              11
              <span className='text-3xl align-super'>+</span>
            </motion.div>
            <div className='text-2xl font-semibold mt-4'>
              <span className='text-red-600'>Years</span> of Experience
            </div>
          </motion.div>
        </div>

        {/* Right side content */}
        <div className='mt-24 mb-16'>
          <div className='text-red-600 font-semibold'>// ABOUT US</div>
          <h2 className='text-3xl lg:text-4xl font-bold mb-8'>
            Get Exceptional Service from Vestige Truck & Car
            <span className='text-red-600'>.</span>
          </h2>

          <div className='border-l-4 border-red-600 pl-4 my-6'>
            <p className='text-gray-600'>
              Established in 2014 by brothers Vernen and Prishan Naidoo, Vestige
              Truck & Car has grown into a leading provider of comprehensive
              truck and car services
            </p>
          </div>

          <p className='text-gray-600 mb-16'>
            We specialize in truck panel beating, chassis straightening, and
            vehicle repairs, utilizing the latest equipment and highly trained
            professionals to ensure quality and customer satisfaction.
          </p>

          <div className='mt-8 space-y-6'>
            <p className='text-lg'>
              Call us 24/7. We can answer for &nbsp;
              <span className='text-red-600 font-semibold'>
                all your questions.
              </span>
            </p>
            <div className='flex items-center gap-4'>
              <Image src={Phone} alt='Phone Icon' width={50} height={50} />
              <div className='text-2xl lg:text-2xl font-bold'>
                (011) 474-7070
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
