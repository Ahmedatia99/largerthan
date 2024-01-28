import React from "react";
import { Button } from "./atoms/Button.tsx";
import "./overlay/overlay.css";
import Nextevent from "./atoms/Nextevent.jsx";

export default function Event() {
  return (
    <main className="py-20 flex justify-center">
      <section className="container">
        <div className="relative bg-coverchild bg-no-repeat bg-cover card rounded-2xl ">
          <div className=" text-white flex flex-col justify-center items-center  py-32">
            <h2 className="z-10 text-5xl leading-tight text-center">
              You can contribute to provide a place <br /> for children with
              special needs!
            </h2>
            <div className="flex justify-center mt-8">
              <Button
                action="Join as a volunteer"
                variant="primary"
                classname="mr-8"
              />
              <Button action="Donate" variant="second" />
            </div>
          </div>
        </div>
        <div className="flex py-16 items-center">
          <span className="font-bold text-4xl min-w-fit">Our Event</span>
          <hr className="w-full ml-5" />
        </div>
        <div className="flex justify-center items-center gap-6">
          <Nextevent date="13" title="A day with our wonderful children " />
          <Nextevent
            date="25"
            title="Seminar: Caring for children with autism"
          />
        </div>
      </section>
    </main>
  );
}
