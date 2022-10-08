import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='section-title text-orientation'>
                Sobre mi
            </h3>
            <motion.img
                width={220}
                height={220}
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
                src='/images/personalimage.jpeg'
            />

            <div className='px-0 md:px-10 space-y-10'>
                <h4 className='text-3xl md:text-4xl font-semibold'>
                    Mi <span className='underline decoration-[#F7AB0A]/50 '>experiencia</span> como desarrollador web
                </h4>
                <p className='text-base'>
                    Soy un desarrollador junior, con el objetivo de seguir creciendo en la industria del software, aportando valor a los proyectos en los que contribuya, de manera autodidacta de me he formado con buenos fundamentos y buenas practicas y así he puesto en practica los aprendido.
                </p>
            </div>
        </motion.div >
    )
}

export default About