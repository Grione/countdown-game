import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef; 

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <div className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </div>
      {timerExpired && <p>Game over!</p>}
      <div>
        <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
      </div>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running' : 'Timer inactive' }
      </p>
    </section>
  );
}