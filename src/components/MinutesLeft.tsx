import React, { useState, useEffect } from "react";

const MinutesLeft: React.FC<TimeLeftProps> = ({ timeLeft }) => {
  const calculateMinutesLeft = () => {
    return timeLeft * 365.25 * 24 * 60; // considering leap years
  };

  const [minutesLeft, setMinutesLeft] = useState(calculateMinutesLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesLeft((prevMinutes) => prevMinutes - 1 / 60); // decrementing the minutes by 1/60th every second
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{Math.ceil(minutesLeft).toLocaleString()}</>;
};

export default MinutesLeft;
