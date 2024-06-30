import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState<number>(2);
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerFinished, setIsTimerFinished] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        setIsTimerFinished(true);
      } else {
        if (seconds === 0) {
          setMinutes(prevMinutes => Math.max(0, prevMinutes - 1));
          setSeconds(59);
        } else {
          setSeconds(prevSeconds => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <>
      {isTimerFinished ? "زمان تمام شده است!" : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
    </>
  );
};

export default Timer;