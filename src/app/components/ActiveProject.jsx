import React from 'react';
import Image from 'next/image';
import activeProjectGirl from '../../../public/assets/active-project-girl.png';

// props for number of girls entering whatever grade

export default function ActiveProject() {
  return(
    <>
    <div className="relative">
      <Image src={younggirl} />

      <div className="absolute bottom-5 w-52">
        {/* replace with prop for future implementation */}
        <h2 className="text-[#FFFFFF] text-xl">9 girls entering 11th grade</h2>
      </div>
    </div>
    </>
  )
}
