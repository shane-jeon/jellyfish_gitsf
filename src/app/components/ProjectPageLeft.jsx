import React from "react";
import Image from "next/image";
import younggirl from "../../../public/assets/younggirl.png";

export default function ProjectPageLeft() {
  return (
    <>
      <div className="">
        <Image src={younggirl} />
      </div>
    </>
  );
}
