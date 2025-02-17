import Link from 'next/link'

export default function CTA1() {
  return (
    <div className='w-full bg-[url(/public/images/bg/13.jpg)] bg-cover bg-center bg-red-950 bg-blend-multiply'>
      <div className='max-w-7xl mx-auto px-8 md:px-6 lg:px-8 py-8'>
        <div className='text-white flex justify-between items-center'>
          <p className='lg:text-4xl text-md font-bold'>24 hr Towing Services</p>
          <Link
            href='tel:011-474-7070'
            className='bg-white text-red-600 px-6 py-4 rounded-md font-semibold text-sm sm:text-base transition-all hover:bg-red-700 hover:text-white'
            alt='Call 011-474-7070'
          >
            Make a Call
          </Link>
        </div>
      </div>
    </div>
  )
}
