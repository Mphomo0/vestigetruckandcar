import Marquee from 'react-fast-marquee'
import manufacturerBrands from '@/lib/manufacturer'
import Image from 'next/image'

export default function ClientsLogo() {
  const brands = [
    'Mercedes',
    'Fuso',
    'Man',
    'Tata',
    'UDTrucks',
    'Scania',
    'Freightliner',
    'Daewoo',
    'WesternStar',
  ]
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h1 className='text-3xl lg:text-5xl md:text-5xl font-bold text-center mb-16 md:mb-12 mt-12'>
          Manufacturer Approved
        </h1>
        <h3 className='text-xl lg:text-3xl md:text-3xl font-bold text-center sm:mt-[-20px] mt-[-40px] mb-12'>
          Autobody <span className='text-red-600'>Repairer.</span>
        </h3>

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
                  src={manufacturerBrands(brand)}
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
  )
}
