import React, { useState, useEffect } from "react";

interface TimeLeftProps {
  timeLeft: number;
}

const MonthsLeft: React.FC<TimeLeftProps> = ({ timeLeft }) => {
  const calculateMonthsLeft = () => {
    return timeLeft * 12; // 12 months in a year
  };

  const [monthsLeft, setMonthsLeft] = useState(calculateMonthsLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setMonthsLeft((prevMonths) => prevMonths - 1 / (30.44 * 24 * 60 * 60)); // decrementing the months by the fraction of a month per second (using average days in a month)
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{Math.ceil(monthsLeft).toLocaleString()}</>;
};

export default MonthsLeft;
