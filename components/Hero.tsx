import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackckgroundCircles from './BackckgroundCircles'
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hola, Mi nombre es Alan.',
            'Amo-el-cafe.tsx',
            '<PeroMeGustaMasProgramar/>'
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden' >
            <BackckgroundCircles />
            <Image
                className='relative rounded-full mx-auto object-cover z-10'
                alt="Imagen personal"
                src="/images/personalimage.jpeg"
                width={128}
                height={128}
            />
            <h2 className='text-sm uppercase text-gray-200 pb-2 tracking-[15px] z-10 text-center'>Software Developer</h2>
            <h1 className='z-10 text-5xl lg:tet-8xl font-semibold'>
                <span className='text-2xl md:text-5xl lg:tet-8xl font-semibold px-10'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>

            <div className='z-10 pt-5'>
                <Link href={'#about'}>
                    <button className='hero-button'>Sobre mi</button>
                </Link>
                <Link href={'#experience'}>
                    <button className='hero-button'>Experiencia</button>
                </Link>
                <Link href={'#skills'}>
                    <button className='hero-button'>Habilidades</button>
                </Link>
                <Link href={'#projects'}>
                    <button className='hero-button'>Proyectos</button>
                </Link>
            </div>
        </div>
    )
}