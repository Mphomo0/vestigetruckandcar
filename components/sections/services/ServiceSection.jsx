import Image from 'next/image'
import { Check } from 'lucide-react'

export default function ServicesSection() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='grid lg:grid-cols-2 gap-12 items-center'>
        {/* Image Section */}
        <div className='relative flex justify-center'>
          <div className='relative w-full max-w-md sm:max-w-lg lg:max-w-xl'>
            <Image
              src='/images/bg/aboutImage.jpg'
              alt='Professional mechanics working on a vehicle'
              width={600}
              height={900}
              className='rounded-lg shadow-lg object-cover w-full h-auto'
            />
            <div className='absolute -left-4 bottom-10 w-10 sm:w-12 bg-red-600 h-[300px] sm:h-[400px] lg:h-[500px]' />
          </div>
        </div>

        {/* Text Section */}
        <div className='space-y-6 text-center lg:text-left'>
          <p className='text-red-600 font-semibold'>// RELIABLE SERVICES</p>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900'>
            We are Qualified & Professional
            <span className='text-red-600'>.</span>
          </h2>

          <div className='border-l-4 border-red-600 pl-4'>
            <p className='text-lg text-slate-600'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-6'>
            <p className='text-slate-700 flex-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <ul className='grid gap-4 flex-1'>
              {[
                '24/7 Online Support',
                'Expert Team',
                'Pure Equipment',
                'Unlimited Product',
              ].map((feature) => (
                <li key={feature} className='flex items-center gap-3'>
                  <span className='flex items-center justify-center w-8 h-8 rounded-full bg-red-100'>
                    <Check className='w-5 h-5 text-red-600' />
                  </span>
                  <span className='font-medium text-slate-800'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
