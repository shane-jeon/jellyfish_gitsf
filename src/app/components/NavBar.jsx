import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/nalamlogo.png"

export default function NavBar() {
  return(
    <>
    <header className="p-3">
      <Image src={logo} className="w-32 p-4"/>
    </header>
    </>
  )
}