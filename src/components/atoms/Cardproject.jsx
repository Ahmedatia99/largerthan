import React from "react";
import { Button } from "../atoms/Button.tsx";
import "../overlay/overlay.css";
import classNames from "classnames";

export default function Cardproject({ title, classname }) {
  return (
    <main>
      <div
        className={classNames(
          "relative bg-no-repeat bg-content w-flex-col justify-center items-center w-96 mr-6 p-12 pt-20 card rounded-[20px]",
          classname
        )}
      >
        <h4 className="relative z-10 text-white text-3xl font-roboto">
          {title}
        </h4>
        <p className="relative z-10 text-white font-roboto text-base mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Button action="Learn more" variant="second" />
      </div>
    </main>
  );
}
