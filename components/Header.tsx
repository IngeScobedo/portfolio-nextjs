import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className='sticky w-full h-[85px] flex justify-between items-center px-4 max-w-7xl mx-auto'>
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex items-center'>
          
        <SocialIcon
          className='cursor-pointer'
          target='_blank'
          url='https://github.com/IngeScobedo'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          target='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <h1 className='hidden md:block'>
          Contáctame!
        </h1>
      </motion.div>
    </header>
  )
}