"use client";

import { useState, useEffect, use } from "react";
import Button from "./ui/Button";
import TextGenerator from "./logic/TextGenerator";
import TypingValidator from "./logic/TypingValidator";
import { paragraph } from "txtgen";
import Timer from "./logic/Timer";

export default function TypingTest() {
  const maxTime = 60;

  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [wpm, setWpm] = useState(0);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(maxTime);
  const [distraction, setDistraction] = useState(false);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // initial text generation
  useEffect(() => {
    setText(paragraph());
  }, []);

  function resetTest() {
    setUserInput("");
    setWpm(0);
    setText(paragraph());
    setStart(false);
    setTimer(maxTime);
  }

  // if disract == true, change colors of entire page every 5 seconds
  useEffect(() => {
    if (distraction) {
      const interval = setInterval(() => {
        document.body.style.backgroundColor = `#${randomColor}`;
      }, 200);
      return () => clearInterval(interval);
    }
  }, [distraction, randomColor]);

  return (
    <div className="container h-screen mx-auto p-4 flex justify-center items-center">
      <div className=" w-full p-4 text-white rounded">
        <h1 className="text-2xl font-bold text-center">Type Speed Analyser</h1>
        <p>Test your typing speed</p>
        <p>Start typing to begin the test</p>

        <div className="bg-blue-900 w-full p-4 text-white rounded font-mono text-lg mt-4">
          {/* Placeholder text, should be replaced with a random paragraph generator (api/npm/json) */}
          <TextGenerator text={text} userInput={userInput} />
        </div>
        <div className="flex justify-between mt-4">
          <div className="bg-white w-3/4  p-4 rounded">
            {/* Textarea for user input, this will be used to measure type speed */}
            <TypingValidator
              text={text}
              userInput={userInput}
              setUserInput={setUserInput}
              setWpm={setWpm}
              setStart={setStart}
            />
          </div>
          <div className="grid grid-rows-4  grid-flow-col w-1/4 gap-2">
            <p className="bg-blue-700  text-white  flex justify-center items-center row-span-4">
              {wpm} WPM
            </p>

            <Button
              className="row-span-2"
              text="Reset"
              onClick={() => resetTest()}
            />
            <div className="bg-blue-700  text-white flex justify-center items-center row-span-2 ">
              <Timer
                wpm={wpm}
                start={start}
                timer={timer}
                setTimer={setTimer}
                setDistraction={setDistraction}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
