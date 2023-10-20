import React, { useState, useEffect } from "react";

interface TimeLeftProps {
  timeLeft: number;
}

const HoursLeft: React.FC<TimeLeftProps> = ({ timeLeft }) => {
  const calculateHoursLeft = () => {
    return timeLeft * 365.25 * 24; // considering leap years
  };

  const [hoursLeft, setHoursLeft] = useState(calculateHoursLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setHoursLeft((prevHours) => prevHours - 1 / 3600); // decrementing the hours by 1/3600th every second
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{Math.ceil(hoursLeft).toLocaleString()}</>;
};

export default HoursLeft;
