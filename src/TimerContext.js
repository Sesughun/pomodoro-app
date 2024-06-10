import React, { createContext, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <TimerContext.Provider
      value={{ workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
