import React from 'react';
import Image from 'next/image';
import activeProjectGirl from '../../../public/assets/active-project-girl.png';

// props for number of girls entering whatever grade

export default function ActiveProject({ progressPercent }) {
  return (
    <div className="mx-6 mt-2 relative rounded-xl w-6/8">
      <Image src={activeProjectGirl} />

      <div className="rounded-xl absolute inset-0 bg-gradient-to-r from-[#25348F] via-[#25348F]  to-transparent opacity-60"></div>

      <div className="absolute top-0 w-full">
        <div className="flex flex-row items-center mx-3 my-2">
          <div className="w-6 h-6 rounded-full bg-[#D9D9D9]"></div>
          <p className="text-[#FFFFFF] mx-3">
            Together with <span>72</span> donors
          </p>
        </div>
        <h3 className="text-[#FFFFFF] text-xl font-semibold m-3">
          Launching <br />
          Disabled Kids <br />
          Program
        </h3>
        <span className="text-[#FFFFFF] text-xl font-semibold flex justify-end mx-3 text-3xl">
          {progressPercent}
        </span>
      </div>
    </div>
  );
}
