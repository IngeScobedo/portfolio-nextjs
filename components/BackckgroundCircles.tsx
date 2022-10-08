import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackckgroundCircles(props: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.16, 1],
                borderRadius: ['20%', '20%', '50%', '80%', '20%']
            }}
            transition={{
                duration: 2.5
            }}
            className='relative flex justify-center items-center'>
            <div
                className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-[336px] animate-ping' />
            <div
                className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-[336px]' />
            <div
                className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-[336px]' />
            <div
                className='absolute border border-[#F7AB0A] rounded-full opacity-20 h-[650px] w-[650px] animate-pulse mt-[336px]' />
        </motion.div>
    )
}