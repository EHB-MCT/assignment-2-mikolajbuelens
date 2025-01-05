"use client";

import { useState, useEffect } from "react";
import Button from "./ui/Button";
import TextGenerator from "./logic/TextGenerator";
import TypingValidator from "./logic/TypingValidator";
import { paragraph } from "txtgen";

export default function TypingTest() {
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    setText(paragraph());
  }, []);

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
            />
          </div>
          <div className="grid grid-rows-4  grid-flow-col w-1/4 gap-2">
            <p className="bg-blue-700  text-white  flex justify-center items-center row-span-4">
              {wpm} WPM
            </p>

            <Button
              className="row-span-2"
              text="Reset"
              onClick={() => console.log("Reset")}
            />
            <p className="bg-blue-700  text-white flex justify-center items-center row-span-2 ">
              00:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
