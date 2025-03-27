import Image from 'next/image'
import Link from 'next/link'
import AboutImage from '@/public/images/bg/aboutImage.jpg'

export default function About1() {
  return (
    <div className='pb-20 bg-white mt-20 md:mt-40 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-10'>
          {/* Image Section */}
          <div className='lg:w-1/2 flex justify-center p-4'>
            <div className='relative'>
              <Image
                src={AboutImage}
                alt='About Us Image'
                className='w-full h-auto max-h-[500px] object-cover'
              />
              <div className='absolute bottom-0 right-0 bg-red-600 h-32 md:h-40 p-6 md:p-8 border-4 md:border-8 border-white px-4 flex flex-col items-center justify-center'>
                <h1 className='text-4xl md:text-5xl font-bold text-white text-center'>
                  11<span>+</span>
                </h1>
                <h6 className='text-base md:text-lg text-white text-center'>
                  Years Experience
                </h6>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className='lg:w-1/2 text-center lg:text-left'>
            <div className='mb-6'>
              <h6 className='text-red-600 font-semibold mb-4 md:mb-6'>
                // About Us
              </h6>
              <h1 className='text-4xl lg:text-6xl md:text-4xl font-bold text-gray-900 leading-tight'>
                Restoring Quality, Driving Confidence
                <span className='text-red-600'>.</span>
              </h1>
            </div>
            <p className='text-gray-700 mb-4 text-sm md:text-base'>
              At Vestige Truck & Car, we are dedicated to delivering top-tier
              vehicle repair, maintenance, and autobody services. With years of
              industry experience, we have built a reputation for excellence,
              reliability, and customer satisfaction.
            </p>
            <p className='text-gray-700 mb-6 text-sm md:text-base'>
              Our expertise spans across panel beating, spray painting,
              mechanical repairs, and 24/7 roadside assistance, ensuring that
              every client receives comprehensive solutions under one roof. As a
              manufacturer-approved autobody repairer, we uphold the highest
              standards of workmanship, utilizing cutting-edge equipment and
              advanced repair techniques.
            </p>
            <Link href='/services'>
              <span className='border border-gray-400 px-5 md:px-6 py-3 md:py-5 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out mt-6 inline-block tracking-wider text-sm md:text-base'>
                OUR SERVICES
              </span>
            </Link>
            <Link href='/services'>
              <span className='border border-gray-400 px-5 md:px-6 py-3 md:py-5 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out mt-6 inline-block tracking-wider text-sm md:text-base ml-4'>
                OUR PROFILE
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
