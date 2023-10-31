import React from "react";
import { Button } from "../components/atoms/Button.tsx";

export default function Header() {
  return (
    <main className="bg-hero-pattern bg-cover w-full h-full text-white">
      <div className="container m-auto py-28 ">
        <div>
          <div>
            <h2 className="text-6xl font-extrabold  max-w-md">
              Inclusive care for children with special needs
            </h2>
          </div>
          <div className="flex items-center  max-w-sm mt-12">
            <Button action="What we do" variant="second" />
            <div>
              <a className="flex items-center ml-5">
                <svg
                  id="changeColor"
                  fill="#DC7633"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24"
                  zoomAndPan="magnify"
                  viewBox="0 0 375 374.9999"
                  height="200"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <path
                      id="pathAttribute"
                      d="M 7.09375 7.09375 L 367.84375 7.09375 L 367.84375 367.84375 L 7.09375 367.84375 Z M 7.09375 7.09375 "
                      strokeWidth="4.9"
                      stroke="#ffffff"
                      fill="#ffffff"
                    ></path>
                  </defs>
                  <g>
                    <path
                      id="pathAttribute"
                      d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 "
                      fillOpacity="1"
                      fillRule="nonzero"
                      strokeWidth="4.9"
                      stroke="#ffffff"
                      fill="#ffffff"
                    ></path>
                  </g>
                  <g id="inner-icon" transform="translate(85, 75)">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="223"
                      height="223"
                      fill="currentColor"
                      className="bi bi-play-fill"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <path
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                        id="mainIconPathAttribute"
                        strokeWidth="1.3"
                        stroke="#000000"
                        fill="#000000"
                        filter="url(#shadow)"
                      ></path>{" "}
                      <animateTransform
                        href="#IconChangeColor"
                        attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0"
                        to="359"
                        dur="2s"
                        repeatCount="indefinite"
                      ></animateTransform>
                      <filter id="shadow">
                        <feDropShadow
                          id="shadowValue"
                          stdDeviation="0"
                          dx="-0.1"
                          dy="0"
                          floodColor="black"
                        ></feDropShadow>
                      </filter>
                      <filter id="shadow">
                        <feDropShadow
                          id="shadowValue"
                          stdDeviation=".5"
                          dx="0"
                          dy="0"
                          floodColor="black"
                        ></feDropShadow>
                      </filter>
                      <filter id="shadow">
                        <feDropShadow
                          id="shadowValue"
                          stdDeviation=".5"
                          dx="0"
                          dy="0"
                          floodColor="black"
                        ></feDropShadow>
                      </filter>
                      <filter id="shadow">
                        <feDropShadow
                          id="shadowValue"
                          stdDeviation=".5"
                          dx="0"
                          dy="0"
                          floodColor="black"
                        ></feDropShadow>
                      </filter>
                      <filter id="shadow">
                        <feDropShadow
                          id="shadowValue"
                          stdDeviation=".5"
                          dx="0"
                          dy="0"
                          floodColor="black"
                        ></feDropShadow>
                      </filter>
                      <filter id="shadow">
                        <feDropShadow
                          id="shadowValue"
                          stdDeviation=".5"
                          dx="0"
                          dy="0"
                          floodColor="black"
                        ></feDropShadow>
                      </filter>
                      <filter id="shadow">
                        <feDropShadow
                          id="shadowValue"
                          stdDeviation=".5"
                          dx="0"
                          dy="0"
                          floodColor="black"
                        ></feDropShadow>
                      </filter>
                    </svg>{" "}
                  </g>
                </svg>
                <span className="text-base font-semibold pl-2 text-white tracking-normal">
                  {" "}
                  play video
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h2 className=" w-1/4 font-semibold">
              230 children under our care
            </h2>
            <hr className=" w-full mx-3" />
            <h2 className="w-1/4 text-center font-semibold">
              58 donations collected
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
