import React from "react";
import Cardproject from "./atoms/Cardproject";

export default function ProjectDone() {
  return (
    <main>
      <div className="container mx-auto py-10 flex-col items-center justify-between">
        <div className="flex flex-col max-w-xl">
          <div className="flex items-center pb-8">
            <div className="w-16 h-1 bg-black flex"></div>
            <span className="uppercase font-bold text-base ml-4 ">
              Projects we have done
            </span>
          </div>
          <div className="pl-20 pb-12">
            <h2 className="text-5xl font-roboto font-extrabold">
              We are creating a place where children with special needs can
              thrive{" "}
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Cardproject
            title="Mission smile 1k: Outdoor charity"
            classname="bg-projects-1"
          />
          <Cardproject
            title="Mission smile 1k: Outdoor charity"
            classname="bg-projects-2"
          />
          <Cardproject
            title="Mission smile 1k: Outdoor charity"
            classname="bg-projects-3"
          />
        </div>
      </div>
    </main>
  );
}
