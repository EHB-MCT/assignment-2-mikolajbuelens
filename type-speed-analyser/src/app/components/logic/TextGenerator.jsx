"use client";

// could be used for addition modifications to the text (e.g. translation)
export default function TextGenerator({ text, userInput }) {
  {
    // console.log(userInput);
  }
  return (
    <p>
      {text.split("").map((character, index) => (
        <span
          key={index}
          className={
            // if the character is correct, the background will be white to reflect the correctness
            index < userInput.length
              ? userInput[index] === character
                ? "bg-white text-black"
                : ""
              : "text-white"
          }
        >
          {character}
        </span>
      ))}
    </p>
  );
}
