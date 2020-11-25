import React, { useState, useEffect } from "react";
import TypeRacer from "./TypeRacer";

export default function Start({ quotes }) {
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(4);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);

    // seconds <= 0 && setStarted(false);
    seconds <= 0 && setStart(true);
    return () => {
      clearInterval(timer);
    };
  }, [seconds, start]);
  return (
    <div className="container">
      {started ? (
        <>
          {seconds > 0 && (
            <div className="timeout">
              <h1 className="primary-text h1">00:0{seconds}</h1>
            </div>
          )}
          <TypeRacer start={start} setStart={setStart} quotes={quotes} />
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
