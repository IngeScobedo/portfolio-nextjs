import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
type Props = {}

const ExperienceCard = (props: Props) => {
    // w-[500px] md:[600px] xl:w-[900px]
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden w-[80vw] md:[600px] xl:w-[900px]'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src='/images/personalimage.jpeg'
                alt="Logo" />

            <div className='px-0'>
                <h4 className='text-4xl font-light'>Desarrollador web</h4>
                <p className='font-bold text-2xl mt-1'>GoldenSub</p>
                <div className='flex space-x-2 my-2'>
                    {/* tech used */}
                    <Image
                        src="/images/icon-angular.png" alt="angular-logo"
                        width={40}
                        height={40}
                    />
                    <Image
                        src="/images/icon-angular.png" alt="angular-logo"
                        width={40}
                        height={40}
                    />
                    <Image
                        src="/images/icon-angular.png" alt="angular-logo"
                        width={40}
                        height={40}
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    started work... - ended...
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>
                        Summary points Summary points Summary points Summary points
                    </li>
                    <li>
                        Summary points Summary points Summary points Summary points
                    </li>
                    
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard