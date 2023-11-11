import React from "react";
import Image from "next/image";

export default function Hero() {
  return(
    <div>
      <h1 className="font-bold font-sen">Hello World</h1>
      <h1 className="">HelloWorld</h1>
      <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
    </div>
  );
}