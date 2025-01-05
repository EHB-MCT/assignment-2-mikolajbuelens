"use client";

import { useState, useEffect } from "react";

export default function TypingValidator({
  text,
  userInput,
  setUserInput,
  setWpm,
  setStart,
}) {
  let startTyping = false;
  const [startTime, setStartTime] = useState(0); // start time

  useEffect(() => {
    //    the start time will be set when the user starts typing
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }

    if (userInput.length > 0 && startTime) {
      console.warn("start typing");
      setStart(true);
      const currentTime = Date.now(); // current time
      const timeElapsed = (currentTime - startTime) / 60000; // time elapsed in minutes

      // prevent division by zero
      if (timeElapsed > 0) {
        const words = userInput.split(" ").length; // words typed by user
        const wpm = (words / timeElapsed).toFixed(2); // words per minute, rounded to 2 decimal places
        setWpm(wpm);
      }
    }
  }, [userInput, startTime]);

  const handleInputChange = (e) => {
    startTyping = true;
    const input = e.target.value;
    const currentIndex = userInput.length; // current character index of user

    //   validating the next character
    if (input[currentIndex] === text[currentIndex]) {
      setUserInput(input); // if the next character is incorrect, the input will not be updated
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
    </>
  );
}
