import Image from 'next/image'
import Hero from 'src/app/components/Hero.jsx'
import DonorProfile from 'src/app/components/DonorProfile.jsx'
import Footer from 'src/app/components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <DonorProfile />
      <Footer />
    </>
  )
}
