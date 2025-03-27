'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    title: 'WELCOME TO VESTIGE TOWING SERVICES',
    heading: 'Reliable Towing Solutions When You Need Them Most',
    description:
      'At Vestige Auto, we offer prompt and professional towing services to get you back on the road quickly. Our experienced team is available 24/7 to assist with all your towing needs.',
    image: '/images/bg/towtruck.png',
    buttonText: 'GET ASSISTANCE',
    buttonLink: '/contact',
  },
  {
    title: 'PROFESSIONAL TRUCK AND CAR SERVICE',
    heading: 'Maintenance and Repairs for Your Vehicle',
    description:
      'At Vestige Truck & Car, we offer a full range of services to keep your vehicles running smoothly. Our certified technicians provide high-quality repairs and maintenance to ensure your vehicles are in top condition.',
    image: '/images/bg/servicekit.png',
    buttonText: 'SCHEDULE NOW',
    buttonLink: '/appointment',
  },
  {
    title: 'MECHANICAL REPAIR SERVICES',
    heading: 'Fast and Reliable Mechanical Repairs for Your Vehicle',
    description:
      'Get back on the road quickly with our expert mechanical repair services. From engine diagnostics to transmission repairs, our certified technicians ensure your vehicle is in top shape. We also offer a free multi-point inspection with every repair.',
    image: '/images/bg/chassis2.png',
    buttonText: 'SCHEDULE NOW',
    buttonLink: '/appointment',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div className='relative w-full min-h-[700px] sm:min-h-[700px] md:min-h-[600px] lg:h-[700px] overflow-hidden bg-[url("/images/bg/allBg.jpg")] bg-cover bg-center'>
      <div className='absolute inset-0 bg-black opacity-90'></div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
            index === currentSlide
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center mb-4 md:mb-8 mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center'>
              <div className='space-y-3 sm:space-y-4 md:space-y-6 text-center md:text-left'>
                <h3 className='text-red-500 font-semibold tracking-wide text-sm sm:text-base'>
                  {slide.title}
                </h3>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white'>
                  {slide.heading}
                </h1>
                <p className='text-white text-sm sm:text-base max-w-lg mx-auto md:mx-0'>
                  {slide.description}
                </p>
                <Link href={slide.buttonLink}>
                  <Button
                    size='lg'
                    className='bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 text-sm sm:text-base mt-6'
                  >
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
              <div className='relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px] mt-4'>
                <Image
                  src={slide.image}
                  alt='Promotional image'
                  fill
                  className='object-contain'
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons - Hidden on mobile */}
      <Button
        onClick={prevSlide}
        className='hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 p-1 sm:p-2 rounded-full shadow-lg'
        aria-label='Previous slide'
      >
        <ChevronLeft className='h-4 w-4 sm:h-6 sm:w-6' />
      </Button>

      <Button
        onClick={nextSlide}
        className='hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 p-1 sm:p-2 rounded-full shadow-lg'
        aria-label='Next slide'
      >
        <ChevronRight className='h-4 w-4 sm:h-6 sm:w-6' />
      </Button>

      {/* Dots Indicator */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-red-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
