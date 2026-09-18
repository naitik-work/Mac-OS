import React, { useEffect, useState } from "react";

const formatDateTime = (date) => {
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateNum = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");
  const period = hour >= 12 ? "pm" : "am";
  const hour12 = hour % 12 || 12;

  return `${day} ${month} ${dateNum} ${hour12}:${minute}${period}`;
};

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(formatDateTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatDateTime(new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div className="date-time">{currentTime}</div>;
};

export default DateTime;
