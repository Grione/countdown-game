import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef(null);
  const dialog = useRef(null);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal targetTime={targetTime} result={"Win"} ref={dialog}/>
      <section className="challenge">
        <h2>{title}</h2>
        <div className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </div>
        <div>
          <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
        </div>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running' : 'Timer inactive'}
        </p>
      </section>
    </>

  );
}