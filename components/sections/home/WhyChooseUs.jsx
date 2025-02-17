import Automobile from '@/public/images/icons/automobile.png'
import Brakes from '@/public/images/icons/disc-brake.png'
import CarService from '@/public/images/bg/car-service.jpg'
import Diagnostics from '@/public/images/bg/diagnostics.jpg'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <section className='bg-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid lg:grid-cols-2 gap-8 items-center  my-24'>
          {/* Left Content */}
          <div className='space-y-8'>
            <div>
              <p className='text-red-600 font-medium mb-4'>// WHY CHOOSE US</p>
              <h2 className='text-4xl md:text-5xl font-bold text-black mb-6'>
                Manufacturer Approved Autobody{' '}
                <span className='text-red-600'>Repairer.</span>
              </h2>
              <div className='border-l-4 border-red-600 pl-4 my-6'>
                <p className='text-slate-600'>
                  We are recognized as a manufacturer-approved autobody
                  repairer, ensuring that our services meet the highest industry
                  standards. Our extensive range of services includes:
                </p>
              </div>
            </div>

            {/* Service Features */}
            <div className='space-y-8'>
              <div className='flex gap-6'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 rounded-full flex items-center justify-center'>
                    <Image src={Brakes} alt='Brakes' width={50} height={50} />
                  </div>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>
                    Anytime Get Your Service
                  </h3>
                  <p className='text-slate-600'>
                    Drive with confidence - book your car or truck service today
                    with our expert team, available 24/7 for all your automotive
                    needs.
                  </p>
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 rounded-full flex items-center justify-center'>
                    <Image
                      src={Automobile}
                      alt='Automobile'
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>
                    Hardcore Repair Service
                  </h3>
                  <p className='text-slate-600'>
                    Keep your vehicle performing at its best - from routine
                    maintenance to major repairs, our skilled technicians
                    deliver quality service you can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className='relative'>
            <div className='relative z-10 w-2/3'>
              <Image
                src={CarService}
                alt='Mechanic working on car engine'
                className='rounded-lg shadow-lg'
                width={400}
                height={500}
              />
            </div>
            <div className='absolute bottom-[-120px] md:bottom-[-10rem] right-0 lg:right-[-2rem] md:right-[2rem] w-2/3 md:w-1/2 z-20 border-8 border-white md:mb-16 sm:mb-16'>
              <Image
                src={Diagnostics}
                alt='diagnostics'
                className='rounded-lg shadow-lg'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
