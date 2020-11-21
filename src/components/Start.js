import React, { useState, useEffect } from "react";
import TypeRacer from "./TypeRacer";

export default function Start({ quotes }) {
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }
      if (seconds <= 0) {
        clearInterval(countdown);
      }
    }, 1000);
  }, []);
  return (
    <div className="container">
      {started ? (
        <>
          {seconds >= 0 && (
            <div className="timeout">
              <h1 className="primary-text">00:0{seconds}</h1>
            </div>
          )}
          <TypeRacer quotes={quotes} />
        </>
      ) : (
        <div className="center">
          <button
            className="btn btn-primary"
            onClick={() => setStarted(!started)}
            id="button"
          >
            Start Typing 🤘
          </button>
        </div>
      )}
    </div>
  );
}
