import React, { useState, useEffect } from "react";

interface BeatsLeftProps {
  timeLeft: number;
}

const BeatsLeft: React.FC<BeatsLeftProps> = ({ timeLeft }) => {
  const HEARTBEATS_PER_SECOND = 1.167; // Average bpm is 70, so beats per second is 70/60

  const calculateBeatsLeft = () => {
    return timeLeft * 365.25 * 24 * 60 * 60 * HEARTBEATS_PER_SECOND;
  };

  const [beatsLeft, setBeatsLeft] = useState(calculateBeatsLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setBeatsLeft((prevBeats) => prevBeats - HEARTBEATS_PER_SECOND);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{Math.ceil(beatsLeft).toLocaleString()}</>; // using toLocaleString to add commas for better readability
};

export default BeatsLeft;
