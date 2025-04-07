import Image from 'next/image'
import iconImage10 from '@/public/images/icons/10.png'
import iconImage11 from '@/public/images/icons/11.png'
import iconImage12 from '@/public/images/icons/12.png'

export default function Address() {
  return (
    <div className='max-w-7xl mx-auto sm:px-6 lg:px-2'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-16 md:px-8 sm:px-8 px-4'>
        {/* Email Address Card */}
        <div className='bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-8'>
          <div className='flex justify-center mb-4'>
            <Image src={iconImage10} alt='email icon' width={70} height={70} />
          </div>
          <h3 className='text-xl font-bold text-center mb-4'>Email Address</h3>
          <p className='text-center text-gray-600 mb-8'>
            prishan@vestige.co.za
            <br />
            vernen@vestige.co.za
            <br />
            kevin@vestige.co.za
          </p>
        </div>

        {/* Phone Number Card */}
        <div className='bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-8'>
          <div className='flex justify-center mb-4'>
            <Image src={iconImage11} alt='phone icon' width={70} height={70} />
          </div>
          <h3 className='text-xl font-bold text-center mb-4'>
            Contact Numbers
          </h3>
          <p className='text-center text-gray-600 mb-8'>
            <span className='font-bold'>Office:</span> 072 637 0330
            <br />
            <span className='font-bold'>Prishan:</span> 072 637 0330
            <br />
            <span className='font-bold'>Vernen:</span> 082 822 5283
            <br />
            <span className='font-bold'>Kevin:</span> 063 699 5438
          </p>
        </div>

        {/* Office Address Card */}
        <div className='bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-8'>
          <div className='flex justify-center mb-4'>
            <Image
              src={iconImage12}
              alt='location icon'
              height={70}
              width={70}
            />
          </div>
          <h3 className='text-xl font-bold text-center mb-4'>Our Address</h3>
          <p className='text-center text-gray-600 mb-8'>
            3 Harnas St, Stormill,
            <br />
            Randburg, 1709
          </p>
        </div>
      </div>
    </div>
  )
}
