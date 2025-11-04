import React from 'react'
import Hero from '../components/home/Hero'
import ServicesOverview from '../components/home/ServicesOverview'
import Reviews from '../components/home/Reviews'
import FAQ from '../components/home/FAQ'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <Reviews />
      <FAQ />
    </div>
  )
}

export default Home
