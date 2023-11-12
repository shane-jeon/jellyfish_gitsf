import Image from 'next/image'
// import Hero from 'src/app/components/Hero.jsx'
import DonorProfile from 'src/app/components/DonorProfile.jsx'
// import Footer from 'src/app/components/Footer.jsx'
import NavBar from 'src/app/components/NavBar.jsx'
import ActiveProject from 'src/app/components/ActiveProject.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <DonorProfile />
      <Footer />
    </>
  )
}
