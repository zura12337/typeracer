import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import Speed from "./Speed";

export default function TypeDetails({ done, totalWords }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (minutes !== 0) {
      const minToSec = minutes * 60;
      setTime(minToSec + seconds);
    } else {
      setTime(seconds);
    }
    console.log(totalWords);
  }, [minutes, seconds, time, totalWords]);

  return (
    <div className="type-details">
      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        minutes={minutes}
        setMinutes={setMinutes}
        isActive={!done && true}
      />
      {done && <Speed time={time} totalWords={totalWords} done={done} />}
    </div>
  );
}
