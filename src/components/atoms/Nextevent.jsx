import React from "react";

export default function Nextevent({ date, title }) {
  return (
    <section className="flex justify-center items- p-10 bg-morning rounded-2xl text-darkly">
      <div className>
        <h2 className="text-5xl">{date}</h2>
        <span className="text-base">APR</span>
      </div>

      <div className="mx-6">
        <span className="flex items-center text-base font-bold mb-2">
          NEXT EVENTS <hr className="w-12 h-1 mx-3 bg-black border-none" />
        </span>
        <h2 className="text-3xl max-w-sm">{title}</h2>
      </div>

      <div className="flex justify-center items-center">
        <button className="p-4 rounded-full bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
