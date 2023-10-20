import React, { useState, useEffect } from "react";

interface TimeLeftProps {
  timeLeft: number;
}

const WeeksLeft: React.FC<TimeLeftProps> = ({ timeLeft }) => {
  const calculateWeeksLeft = () => {
    return (timeLeft * 365.25) / 7; // considering leap years and dividing by 7 for weeks
  };

  const [weeksLeft, setWeeksLeft] = useState(calculateWeeksLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setWeeksLeft((prevWeeks) => prevWeeks - 1 / (7 * 24 * 60 * 60)); // decrementing the weeks by the fraction of a week per second
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{Math.ceil(weeksLeft).toLocaleString()}</>;
};

export default WeeksLeft;
