'use client'

import React, { useEffect, useRef, useState } from 'react'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

const testimonials = [
  {
    name: 'Sarah Thompson',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1180&q=80',
    review:
      'Amazing experience! The team was super helpful, and the product exceeded my expectations. Highly recommend!',
  },
  {
    name: 'David Anderson',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1180&q=80',
    review:
      'Top-notch service and quality. I was very impressed with the professionalism and attention to detail.',
  },
  {
    name: 'Emily Carter',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1180&q=80',
    review:
      'Great customer support and fast delivery. The product was exactly what I was looking for. Will definitely shop again!',
  },
  {
    name: 'Michael Johnson',
    image:
      'https://images.unsplash.com/photo-1549351236-caca0f174515?auto=format&fit=crop&w=1180&q=80',
    review:
      'Fantastic quality! The experience from start to finish was seamless. Definitely worth every penny!',
  },
  {
    name: 'Jessica Lee',
    image:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1180&q=80',
    review:
      'I love this! The attention to detail and craftsmanship are outstanding. I’ll be recommending this to all my friends!',
  },
]

const Testimonials = () => {
  const sliderRef = useRef(null)
  const [slider, setSlider] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(1)
  const [totalSlides, setTotalSlides] = useState(0)

  useEffect(() => {
    if (sliderRef.current) {
      const keenSliderInstance = new KeenSlider(sliderRef.current, {
        loop: true,
        defaultAnimation: {
          duration: 750,
        },
        slides: {
          origin: 'center',
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 640px)': {
            slides: {
              origin: 'center',
              perView: 1.5,
              spacing: 16,
            },
          },
          '(min-width: 768px)': {
            slides: {
              origin: 'center',
              perView: 1.75,
              spacing: 16,
            },
          },
          '(min-width: 1024px)': {
            slides: {
              origin: 'center',
              perView: 3,
              spacing: 16,
            },
          },
        },
        created(slider) {
          setTotalSlides(slider.slides.length)
          setCurrentSlide(slider.track.details.rel + 1)
        },
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel + 1)
        },
      })

      setSlider(keenSliderInstance)

      return () => keenSliderInstance.destroy()
    }
  }, [])

  return (
    <section className='w-full bg-[url(/public/images/bg/8.jpg)] bg-cover bg-center'>
      <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <h2 className='text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Read trusted reviews from our customers
        </h2>

        <div className='mt-8'>
          <div ref={sliderRef} className='keen-slider'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`keen-slider__slide transition-opacity duration-500 ${
                  currentSlide === index + 1 ? '' : 'opacity-40'
                }`}
              >
                <blockquote className='rounded-lg bg-white p-6 shadow-xs sm:p-8'>
                  <div className='flex items-center gap-4'>
                    <img
                      alt={testimonial.name}
                      src={testimonial.image}
                      className='size-14 rounded-full object-cover'
                    />

                    <div>
                      <div className='flex justify-center gap-0.5 text-green-500'>
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns='http://www.w3.org/2000/svg'
                              className='size-5'
                              viewBox='0 0 20 20'
                              fill='red'
                            >
                              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                            </svg>
                          ))}
                      </div>
                      <p className='mt-0.5 text-lg font-medium text-gray-900'>
                        {testimonial.name}
                      </p>
                    </div>
                  </div>

                  <p className='mt-4 text-gray-700'>{testimonial.review}</p>
                </blockquote>
              </div>
            ))}
          </div>

          <div className='mt-6 flex items-center justify-center gap-4'>
            <button
              className='rounded-full border border-gray-400 p-3 text-gray-500 transition hover:bg-gray-100'
              onClick={() => slider && slider.prev()}
            >
              &larr;
            </button>

            <span className='text-sm text-gray-900'>
              {currentSlide} / {totalSlides}
            </span>

            <button
              className='rounded-full border border-gray-400 p-3 text-gray-500 transition hover:bg-gray-100'
              onClick={() => slider && slider.next()}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
