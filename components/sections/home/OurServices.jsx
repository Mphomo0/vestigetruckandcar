import Image from 'next/image'

const services = [
  {
    step: '01',
    category: 'TRUCK PANEL BEATING',
    description:
      'Our professional teams have years of commercial truck and car panel beating experience to guarantee perfection in every job we do at Vestige. Vestige utilises the best in equipment to ensure quality workmanship like Josam Chassis straightening equipment and Aer-o-cure spray booths.',
    imageUrl: '/images/bg/panelbeating.jpg',
  },
  {
    step: '02',
    category: '24HR TOWING AND REPAIRS',
    description:
      'Our historic experience in towing services are featured in our efficiency to collect repair and support all our clients timeously. We have the knowledge and understanding of recovery in the most unwanted circumstances when your trucks and vehicles are on route.',
    imageUrl: '/images/bg/towing.jpg',
  },
  {
    step: '03',
    category: 'DIAGNOSTICS',
    description:
      'State of the art diagnostics tools and trained professional personal provide our clients the peace of mind that we always identify all aspects of the vehicle, ensuring a proper delivery is achieved every time.',
    imageUrl: '/images/bg/cardiagnosis.jpg',
  },
]

export default function OurServices() {
  return (
    <section className='py-16 px-4 md:px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='text-red-500 font-medium mb-2'>//OUR SERVICES</p>
          <h2 className='text-3xl md:text-4xl font-bold'>
            What We Do<span className='text-red-500'>.</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
          {services.map((service) => (
            <div
              key={service.category}
              className='group h-80 w-full sm:w-80 md:w-96 lg:w-full max-w-sm'
            >
              <div className='relative h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                {/* Front face with image */}
                <div className='absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]'>
                  {service.imageUrl && (
                    <Image
                      className='object-cover cursor-pointer h-full w-full rounded-xl'
                      src={service.imageUrl}
                      alt={service.category}
                      width={600}
                      height={600}
                    />
                  )}
                  <div className='absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-md'>
                    <p className='text-lg md:text-xl font-semibold'>
                      {service.category}
                    </p>
                  </div>
                </div>
                {/* Back face with text */}
                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-6 py-8 flex flex-col justify-center items-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <h2 className='text-lg md:text-xl font-bold mb-2'>
                    {service.category}
                  </h2>
                  <p className='text-sm md:text-base'>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
