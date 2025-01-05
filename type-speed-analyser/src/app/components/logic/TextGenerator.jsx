"use client";

import { use } from "react";

// could be used for addition modifications to the text (e.g. translation)
export default function TextGenerator({ text, userInput }) {
  {
    console.log(userInput);
  }
  return (
    <p>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={
            // if the letter is correct, the background will be white to reflect the correctness
            index < userInput.length
              ? userInput[index] === letter
                ? "bg-white text-black"
                : ""
              : "text-white"
          }
        >
          {letter}
        </span>
      ))}
    </p>
  );
}
