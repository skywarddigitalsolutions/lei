import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["relación   ", "creatividad", "disrupción"];

  return (
    <div className="">
      <div className="text-7xl mx-auto font-normal text-white">
        El diseño es
        <FlipWords words={words} /> <br />
        constante
      </div>
    </div>
  );
}
