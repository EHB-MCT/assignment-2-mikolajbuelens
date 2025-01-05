"use client";

import { useState } from "react";

export default function TypingValidator({ text, userInput, setUserInput }) {
  let startTyping = false;

  const handleInputChange = (e) => {
    startTyping = true;
    const input = e.target.value;
    const currentIndex = userInput.length; // current letter index of user

    console.warn(currentIndex);
    console.warn(userInput[currentIndex]);
    console.warn(text[currentIndex]);

    //   validating the next letter
    if (input[currentIndex] === text[currentIndex]) {
      setUserInput(input); // if the next letter is incorrect, the input will not be updated
    }
  };

  return (
    <>
      <textarea
        className="w-full h-full focus:outline-none text-black"
        placeholder="Start typing here..."
        value={userInput}
        onChange={handleInputChange}
      />
      {/* {console.log(text)}
      {console.log(userInput)} */}
    </>
  );
}
