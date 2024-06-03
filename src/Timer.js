import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Play from "./Play";
import Pause from "./Pause";
import { useContext, useState, useEffect, useRef } from "react";
import TimerContext from "./TimerContext";
const red = "#f54e4e";

function Timer() {
  const timerInfo = useContext(TimerContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work" ? timerInfo.workMinutes : timerInfo.breakMinutes) *
        60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    function initTimer() {
      secondsLeftRef.current = timerInfo.workMinutes * 60;
      setSecondsLeft(secondsLeftRef.current);
    }

    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        switchMode();
      } else {
        tick();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timerInfo]);

  const totalSeconds =
    mode === "work" ? timerInfo.workMinutes * 60 : timerInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          trailColor: "grey",
        })}
      />
      <div>
        {isPaused ? (
          <Play
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <Pause
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Timer;
