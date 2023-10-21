import React from "react";
import { Button } from "./atoms/Button.tsx";

export default function Navbar() {
  return (
    <main>
      <section className="container flex justify-between m-auto p-5">
        <div className="flex justify-center items-center">
          <h2 className="text-xl font-bold">
            largerthan <span className="font-courgette">i</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex">
            <li className="mr-10">
              <a>Home</a>
            </li>
            <li className="mr-10">
              <a>About us</a>
            </li>
            <li className="mr-10">
              <a>What We Do</a>
            </li>
            <li className="mr-10">
              <a>Media</a>
            </li>
            <li className="mr-10">
              <a>contact</a>
            </li>
          </ul>
        </div>
        <div>
          <Button variant="nav" action="Donate" />
        </div>
      </section>
    </main>
  );
}
