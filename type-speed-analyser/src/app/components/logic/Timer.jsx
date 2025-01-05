'use client';

// !This will be used to send data to the database

import { useState, useEffect, use } from "react";
import { saveWPMToDatabase } from "../../lib/supabaseUtils";

export default function Timer({ wpm, start, timer, setTimer }) {
  const [wpmNoDistraction, setWpmNoDistraction] = useState(0);
  const [wpmWithDistraction, setWpmWithDistraction] = useState(0);
  const [timerExpired, setTimerExpired] = useState(false);

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

  // save the wpm to the database when the timer reaches 0
  useEffect(() => {
    if (timer === 0 && !timerExpired) {
      setTimerExpired(true);
      console.warn("Timer expired");
      saveWPMToDatabase(wpmNoDistraction, wpmWithDistraction); // save the wpm to the database
    }
  }, [timer, timerExpired, wpmNoDistraction, wpmWithDistraction]);

  return (
    <>
      <p>{timer} seconds left</p>
    </>
  );
}
