import Head from 'next/head'
import styled from 'styled-components'
import AboutSection from '../components/page_components/AboutSection'
import GoalsSection from '../components/page_components/GoalsSection'
import HeroSection from '../components/page_components/HeroSection'
import InfoSection from '../components/page_components/InfoSection'
import OurHistory from '../components/page_components/OurHistory'

export default function Home() {

  return (
    <div >
      <Head>
        <title>PSRM CONSULTUNTS</title>
        <meta name="description" content="PSRM CONSULTUNTS" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
      </Head>
      <HeroSection/>
      <InfoSection/>
      <AboutSection/>
      <GoalsSection/>
      <OurHistory/>
    </div>
  )
}

