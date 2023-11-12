import React from 'react';
import Image from 'next/image';
import ActiveProject from './ActiveProject';
import donorSelfie from '../../../public/assets/donor-selfie.png';

export default function DonorProfile() {
  const name = 'Jane';
  const progressPercent = ['70%', '100%'];

  return (
    <div className="w-2/6 h-full p-6 bg-[#FFFFFF] drop-shadow-2xl rounded-3xl">
      <div className="flex flex-row items-center">
        <Image
          src={donorSelfie}
          className="w-16 h-16 rounded-full object-cover"
        />
        <h1 className="mx-10 text-2xl mt-3.5 font-semibold">
          Hello, <span className="font-bold">{name}</span>
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-12 h-12 border-2 m-2 rounded-full bg-[#25348F] border-[#25348F]"></div>
        <div className="w-12 h-12 border-2 m-2 rounded-full bg-[#25348F] border-[#25348F]"></div>
        <div className="w-12 h-12 border-2 m-2 rounded-full border-dashed border-[#25348F]"></div>
        <div className="w-12 h-12 border-2 m-2 rounded-full bg-[#25348F] border-[#25348F]"></div>
        <div className="w-12 h-12 border-2 m-2 rounded-full border-dashed border-[#25348F]"></div>
      </div>
      <div>
        <h2 className="mt-8 text-2xl font-semibold text-[#25348F]">
          Your Donation History
        </h2>
        <div>
          <ActiveProject progressPercent={progressPercent[0]} />
          <ActiveProject progressPercent={progressPercent[1]} />
        </div>
      </div>
    </div>
  );
}
