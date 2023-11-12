import React from "react";
import Image from "next/image";
import activeProjectGirl from "../../../public/assets/active-project-girl.png";

<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#25348F] via-[#25348F]  to-transparent opacity-60"></div>;

export default function ActiveProject({ progressPercent }) {
  return (
    <div className="w-6/8 relative mx-6 mt-2 rounded-xl">
      <Image src={activeProjectGirl} />

      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#25348F] via-[#25348F]  to-transparent opacity-60"></div>

      <div className="absolute top-0 w-full">
        <div className="mx-3 my-2 flex flex-row items-center">
          <div className="h-6 w-6 rounded-full bg-[#D9D9D9]"></div>
          <p className="mx-3 text-[#FFFFFF]">
            Together with <span>72</span> donors
          </p>
        </div>
        <h3 className="m-3 text-xl font-semibold text-[#FFFFFF]">
          Launching <br />
          Disabled Kids <br />
          Program
        </h3>
        <span className="mx-3 flex justify-end text-3xl text-xl font-semibold text-[#FFFFFF]">
          {progressPercent}
        </span>
      </div>
    </div>
  );
}
