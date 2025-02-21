import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-black text-gray-300 py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center text-center md:text-left'>
        {/* left section */}
        <div className='w-full md:w-auto flex flex-wrap justify-center md:justify-start items-center space-x-2 mb-4 md:mb-0'>
          <span className='text-red-500 text-2xl font-bold'>&#x1F697;</span>
          <span className='text-white font-semibold text-lg'>Autixir</span>
          <span className='border-l border-gray-500 h-5 mx-2 hidden md:inline'></span>
          <span className='text-sm'>Copyright & Design By</span>
          <span className='text-white font-bold text-sm'>
            Nostalgic Studio - 2025
          </span>
        </div>

        {/* right section */}
        <div className='w-full md:w-auto flex justify-center md:justify-end space-x-6 text-sm font-bold'>
          <Link href='/terms-conditions'>Terms & Conditions</Link>
          <Link href='/claim'>Claim</Link>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
