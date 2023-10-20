import React, { useState, useEffect } from "react";

interface TimeLeftProps {
  timeLeft: number;
}

const DaysLeft: React.FC<TimeLeftProps> = ({ timeLeft }) => {
  const calculateDaysLeft = () => {
    return timeLeft * 365.25; // considering leap years
  };

  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft((prevDays) => prevDays - 1 / (24 * 60 * 60)); // decrementing the days by the fraction of a day per second
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{Math.ceil(daysLeft).toLocaleString()}</>;
};

export default DaysLeft;
