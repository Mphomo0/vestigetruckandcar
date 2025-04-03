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
              src='/images/bg/serviceImage.jpg'
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
            "Your Downtime Specialists"
            <span className='text-red-600'>.</span>
          </h2>

          <div className='border-l-4 border-red-600 pl-4'>
            <p className='text-lg text-slate-600'>
              We provide expert maintenance and repair services for commercial
              vehicles, ensuring top-quality workmanship with a focus on
              customer satisfaction.
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-6'>
            <p className='text-slate-700 flex-1'>
              We are Qualified & Professional at Vestige Truck & Car, offering
              expert automotive services to keep your vehicle in top condition.
              With a team of highly skilled technicians and a commitment to
              excellence, we provide reliable repairs, maintenance, and
              diagnostic solutions for all types of vehicles. Trust us to
              deliver the highest quality service and customer satisfaction for
              your automotive needs.
            </p>

            <ul className='grid gap-4 flex-1'>
              {[
                '24/7 Client Support',
                'Expert Team',
                'Quality Assurance',
                'Approved Repairers',
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
