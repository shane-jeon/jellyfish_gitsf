import Image from "next/image";
import DonorProfile from "src/app/components/DonorProfile.jsx";
import NavBar from "src/app/components/NavBar.jsx";
import ActiveProject from "src/app/components/ActiveProject.jsx";
import UpcomingProject from "src/app/components/UpcomingProject.jsx";
import MoreSupport from "src/app/components/MoreSupport.jsx";

export default function Home() {
  return (
    <>
      <div
        id="landing-page-container"
        className="flex justify-center bg-[#EFF1FF]">
        {/* <Hero /> */}
        <DonorProfile />
        <div className="w-8/12 pl-14">
          <MoreSupport />
        </div>
        {/* <UpcomingProject /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
