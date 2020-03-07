import React, { useState, useEffect } from "react";

import "./styles.css";

function useWait(delay) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShow(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  return show;
}

function Wait({ delay = 1000, placeholder, ui }) {
  const show = useWait(delay);

  return show === true ? ui : placeholder;
}

export default function App() {
  return (
    <div className="App">
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>}
      />
    </div>
  );
}
