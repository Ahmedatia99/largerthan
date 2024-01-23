import React from "react";
import { Button } from "./atoms/Button.tsx";

export default function Aboutsection() {
  return (
    <main>
      <section className="container mx-auto py-10">
        <div className="flex justify-between items-center">
          {/* left side */}
          <div className="flex flex-col max-w-xl">
            <div className="flex items-center pb-8">
              <div className="w-16 h-1 bg-black flex"></div>
              <span className="uppercase font-bold text-base ml-4 ">
                know about us
              </span>
            </div>
            <div className="pl-20 pb-12">
              <h2 className="text-5xl font-roboto font-extrabold pb-8">
                We provide a place for children with special needs
              </h2>
              <p className="text-near font-bold leading-7 pb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <p className="text-near font-bold leading-7">
                ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div className="ml-20">
              <Button variants="lighting" action="Learn more" />
            </div>
          </div>
          {/* right side video */}
          <div className="border-solid border-2 border-opacit p-3 rounded-2xl">
            <iframe
              className="rounded-xl"
              width="450px"
              height="650px"
              src="https://www.youtube.com/embed/zydnokeplOE"
              title="FREE Special Education Teaching Pack! | Special Education Resources | Inclusive Teaching | Twinkl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex pt-16 items-center ">
          <span className="uppercase font-bold text-base w-40">
            our Supporters
          </span>
          <hr className="w-full ml-10" />
        </div>
        <div className="flex justify-between items-center pt-8">
          <img src="./images/Logoipusm.svg" />
          <img src="./images/Logoipusm-2.svg" />
          <img src="./images/Logoipusm-3.svg" />
          <img src="./images/Logoipusm-4.svg" />
          <img src="./images/Logoipusm-5.svg" />
          <img src="./images/Logoipusm-6.svg" />
        </div>
      </section>
    </main>
  );
}
