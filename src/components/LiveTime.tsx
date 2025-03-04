'use client'

import React, { useEffect, useState } from 'react';

const LiveTime: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const accraTime = new Date().toLocaleTimeString("en-US", { timeZone: "Africa/Accra", hour: '2-digit', minute: '2-digit' });
      setTime(accraTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="live-time">{time} GMT | GHANA</div>;
};

export default LiveTime;