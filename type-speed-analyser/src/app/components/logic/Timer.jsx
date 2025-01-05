// !This will be used to send data to the database

import { useState, useEffect } from "react";

export default function Timer({ wpm, start, timer, setTimer }) {
  //   const [time, setTimer] = useState(60);

  // countdown timer
  useEffect(() => {
    let interval = null;
    if (start && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!start) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, timer, setTimer]);

  return (
    <>
      <p>{timer} seconds left</p>
    </>
  );
}
