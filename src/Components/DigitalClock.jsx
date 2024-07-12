import React, { useEffect, useState } from "react";
import style from "../style/Digital.module.css";

export default function DigitalClock() {
  /* States and other data */
  const [time, setTime] = useState(new Date());
  const theTime = {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };

  const addZero = (digit) => {
    return digit >= 10 ? digit : `0${digit}`;
  };

  const toDisplay = `${addZero(theTime.hours % 12 || theTime.hours)}:${addZero(
    theTime.minutes
  )}:${addZero(theTime.seconds)} ${theTime.hours > 12 ? "PM" : "AM"}`;

  
  useEffect(() => {
    const timeOutId = setTimeout(() => setTime(new Date()), 1000);

    return () => clearTimeout(timeOutId);
  });


  return (
    <div className={style.clock_container}>
      <div className={style.clock}>
        <span> {toDisplay}</span>
      </div>
    </div>
  );
}
