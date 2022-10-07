import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alan Escobedo | Portafolio</title>
        <meta name="description" content="Portafolio de Alan Escobedo, desarrollador JavaScript" />
      </Head>

      <Header/>

      {/* hero */}
      <section id='hero'>
        <Hero/>
      </section>

      {/* about */}

      {/* Experience */}

      {/* Skills */}

      {/* projects */}

      {/* Contact me */}
    </div>
  )
}

export default Home
