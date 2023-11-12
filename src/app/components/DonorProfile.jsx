import React from 'react';
import Image from 'next/image';
import donorSelfie from '../../../public/assets/donor-selfie.png';

export default function DonorProfile() {
  const name = 'Jane';

  return (
    <div className="w-1/4 h-96 bg-[#FFFFFF] drop-shadow-xl rounded-3xl">
      <div className="flex flex-row items-center">
        <Image
          src={donorSelfie}
          className="w-14 h-14 rounded-full object-cover"
        />
        <h1>Hello, <span className="font-bold">{name}</span></h1>
      </div>
      <div className="flex flex-row">
        <div className="w-10 h-10 border-2 rounded-full bg-[#25348F]"></div>
        <div className="w-10 h-10 border-2 rounded-full bg-[#25348F]"></div>
        <div className="w-10 h-10 border-2 rounded-full border-dashed border-[#25348F]"></div>
        <div className="w-10 h-10 border-2 rounded-full bg-[#25348F]"></div>
        <div className="w-10 h-10 border-2 rounded-full border-dashed border-[#25348F]"></div>
      </div>
    </div>
  );
}
