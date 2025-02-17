import Marquee from 'react-fast-marquee'
import insuranceBrands from '@/lib/insurancePics'
import Image from 'next/image'

export default function ApprovedInsurer() {
  const brands = [
    'AON',
    'Bryte',
    'Hollard',
    'iWyze',
    'King Price',
    'OUTsurance',
    'Renasa',
    'Santam',
  ]
  return (
    <>
      <div className='w-full bg-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <h2 className='text-4xl lg:text-5xl md:text-5xl font-bold text-center mb-16 md:mb-12 mt-12'>
            APPROVED INSURERS
          </h2>

          <div className='flex'>
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction='left'
            >
              {brands.map((brand, index) => (
                <div key={index} className='mx-4 px-8'>
                  <Image
                    src={insuranceBrands(brand)}
                    alt={`${brand} logo`}
                    width={150}
                    height={150}
                    priority
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  )
}
