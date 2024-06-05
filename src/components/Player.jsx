import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPLayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPLayerName ?? 'unknown entity'}</h2>
      <p>
        <input 
          type="text" 
          ref={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
