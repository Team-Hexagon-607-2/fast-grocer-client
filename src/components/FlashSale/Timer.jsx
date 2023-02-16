import React, { useState, useEffect } from "react";
const Timer = () => {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const today = new Date();
    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59,
      999
    );
    const remainingTime = endOfDay - today;
    const remainingTimeInSeconds = remainingTime / 1000;
    const remainingTimeInMinutes = remainingTimeInSeconds / 60;
    const remainingTimeInHours = remainingTimeInMinutes / 60;
    const hours = Math.floor(remainingTimeInHours);
    const minutes = Math.floor(remainingTimeInMinutes % 60);
    const seconds = Math.floor(remainingTimeInSeconds % 60);
    setCountdown({ hours, minutes, seconds });
    const interval = setInterval(() => {
      setCountdown((countdown) => {
        if (countdown.seconds > 0) {
          return {
            ...countdown,
            seconds: countdown.seconds - 1,
          };
        } else if (countdown.minutes > 0) {
          return {
            ...countdown,
            seconds: 59,
            minutes: countdown.minutes - 1,
          };
        } else if (countdown.hours > 0) {
          return {
            ...countdown,
            seconds: 59,
            minutes: 59,
            hours: countdown.hours - 1,
          };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    div: "py-1 sm:py-[8px] px-3 sm:px-4 bg-[#84b840] text-white text-md sm:text-lg",
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2 ">
      <div className={styles.div}>{countdown.hours}</div>
      <div>:</div>
      <div className={styles.div}>{countdown.minutes}</div>
      <div>:</div>
      <div className={styles.div}>{countdown.seconds}</div>
    </div>
  );
};

export default Timer;
