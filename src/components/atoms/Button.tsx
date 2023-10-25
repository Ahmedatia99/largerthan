import React from "react";
import { HTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "second " | "magic";
  action: string;
  displays?: "true" | "false";
}

export const Button = ({ action, variant = "primary" }: ButtonProps) => {
  const variants = {
    primary: "bg-morning",
    second: "bg-white",
    nav: "bg-darkly !text-white",
  }[variant];

  return (
    <button
      className={classNames(
        "flex items-center justify-center transition-all rounded-md text-darkly py-3 px-8",
        variants
      )}
    >
      <span className={classNames("text-md px-2 font-bold")}>{action}</span>
    </button>
  );
};
