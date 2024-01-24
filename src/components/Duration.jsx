import React from "react";
import Dount from "./atoms/dount/Dount";
import "./atoms/dount/dount.css";

export default function Duration() {
  return (
    <main className=" bg-black py-20 text-white flex justify-center">
      <div className="container flex justify-between items-center">
        <div className="max-w-2xl ">
          <h2 className="text-5xl font-bold font-roboto pb-6">
            How we spend your donations and where it goes
          </h2>
          <p className="text-base text-gray-500 font-bold">
            We understand that when you make a  donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div
            id="legend"
            className="flex mt-8 flex-wrap max-w-xl justify-start px-2 items-center font-bold font-roboto"
          >
            <div className="flex items-center mb-3">
              <div id="segment1"></div> <div>10% helping people</div>
            </div>
            <div className="flex items-center mb-3">
              <div id="segment2"></div> <div>10% excursions</div>
            </div>
            <div className="flex items-center mb-3">
              <div id="segment3"></div> <div>5% feeding the poor</div>
            </div>
            <div className="flex items-center mb-3">
              <div id="segment4"></div> <div>40% child care home</div>
            </div>
            <div className="flex items-center mb-3">
              <div id="segment5"></div> <div>35% cleanliness program</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Dount />
        </div>
      </div>
    </main>
  );
}
