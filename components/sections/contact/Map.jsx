import React from 'react'

export default function MapLocation() {
  return (
    <div className='w-full mt-16'>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.9430838173726!2d27.9269755!3d-26.198529699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950a75a66e412d%3A0xfc940177a8b5c95a!2sVestige%20Truck%20And%20Car!5e0!3m2!1sen!2sza!4v1739002173012!5m2!1sen!2sza'
          width='100%'
          height='450'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  )
}
