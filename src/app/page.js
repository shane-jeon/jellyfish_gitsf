import Image from 'next/image'
import DonorProfile from 'src/app/components/DonorProfile.jsx'
import NavBar from 'src/app/components/NavBar.jsx'
import ActiveProject from 'src/app/components/ActiveProject.jsx'

export default function Home() {
  return (
    <>
      <DonorProfile />
      <ActiveProject />
    </>
  )
}
