'use client'

import { motion } from 'motion/react'

const buttonVariants = {
  initial: {
    backgroundColor: 'white',
    color: '#dc2626', // text-red-600
    border: '2px solid #dc2626', // border-red-600
  },
  hover: {
    backgroundColor: '#dc2626', // bg-red-600
    color: 'white',
    transition: {
      duration: 0.3,
    },
  },
}

const overlayVariants = {
  initial: {
    x: '100%',
  },
  hover: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
}

const AnimatedButton = () => {
  return (
    <motion.button
      className='relative overflow-hidden font-bold uppercase text-lg py-4 rounded-md w-full lg:w-1/4'
      initial='initial'
      whileHover='hover'
      variants={buttonVariants}
    >
      <motion.div
        className='absolute inset-0 bg-red-600'
        variants={overlayVariants}
      />
      <span className='relative z-10'>Submit</span>
    </motion.button>
  )
}

export default AnimatedButton
