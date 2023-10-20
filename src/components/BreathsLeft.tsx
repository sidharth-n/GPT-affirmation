import React, { useState, useEffect } from "react";

const BreathsLeft: React.FC<TimeLeftProps> = ({ timeLeft }) => {
  const BREATHS_PER_MINUTE = 16;

  const calculateBreathsLeft = () => {
    return timeLeft * 365.25 * 24 * 60 * BREATHS_PER_MINUTE;
  };

  const [breathsLeft, setBreathsLeft] = useState(calculateBreathsLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathsLeft((prevBreaths) => prevBreaths - BREATHS_PER_MINUTE / 60); // decrementing the breaths every second
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{Math.ceil(breathsLeft).toLocaleString()}</>;
};

export default BreathsLeft;
