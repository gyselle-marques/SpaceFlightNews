import React, { useEffect, useState } from "react";

import "./styles.css";

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <p>Space Flight News, {year}.</p>
    </footer>
  );
}
