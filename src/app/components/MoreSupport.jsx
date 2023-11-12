import React from "react";
import Image from "next/image";
import UpcomingProject from ".//UpcomingProject.jsx";

// props for number of girls entering whatever grade

export default function MoreSupport() {
  const numOfCards = 5;

  const repeatedCards = Array.from({ length: numOfCards }, (item, index) => (
    <UpcomingProject className="px-4" key={index} />
  ));
  return (
    <>
      <div id="more-support-container" className="">
        <h1>Show More Support On</h1>

        <div id="sort-by" className="flex flex-col">
          <div id="sort-section" className="flex">
            <p>sort by:</p>
            <div id="sort-buttons" className="flex">
              <button className="mx-4 bg-[#25348F]" type="button">
                <p className="text-white">Education</p>
              </button>
              <button className="mr-4 bg-[#25348F] " type="button">
                <p className="text-white">Medical</p>
              </button>
              <button className="mr-4 bg-[#25348F] " type="button">
                <p className="text-white">Facility</p>
              </button>
              <button className="mr-4 bg-[#25348F] " type="button">
                <p className="text-white">Job</p>
              </button>
              <button className="bg-[#25348F]" type="button">
                <p className="text-white">Upper Education</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          {/* <UpcomingProject /> */}
          {repeatedCards}
        </div>
      </div>
    </>
  );
}
