import React, { useState, useEffect } from "react";

interface SecondsLeftProps {
  timeLeft: number;
}

const SecondsLeft: React.FC<SecondsLeftProps> = ({ timeLeft }) => {
  const calculateSecondsLeft = () => {
    return timeLeft * 365.25 * 24 * 60 * 60; // considering leap years as well
  };

  const [secondsLeft, setSecondsLeft] = useState(calculateSecondsLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{secondsLeft.toLocaleString()}</>; // using toLocaleString to add commas for better readability
};

export default SecondsLeft;
