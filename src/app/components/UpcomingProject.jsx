import React from "react";
import Image from "next/image"
import younggirl from "../../../public/assets/younggirl.png"

// props for number of girls entering whatever grade

export default function UpcomingProject() {
  return(
    <>
    <div className="relative px-4">
      <Image src={younggirl} />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-white"></div>
      <div className="absolute bottom-5 w-52 text-[#FFFFFF] ">
        {/* replace with prop for future implementation */}
        <h2 className="text-xl">9 girls entering 11th grade</h2>
        <p>Loren Ipsum</p>
      </div>
    </div>
    </>
  )
}