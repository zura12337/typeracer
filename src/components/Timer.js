import React, { useEffect, useState } from "react";

export default function Timer({ isActive }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isActive) {
      if (seconds < 60) {
        const timer = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);
        return () => clearInterval(timer);
      } else {
        setMinutes((minutes) => minutes + 1);
        setSeconds(0);
      }
    }
  }, [seconds, minutes, isActive]);

  return (
    <div className="timer">
      <h3>
        <span className="minutes">
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
        :
        <span className="seconds">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </h3>
    </div>
  );
}
