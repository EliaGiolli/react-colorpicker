import "./styles.css";
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("lightcyan");

  const setRandomColor = () => {
    const randomColor = getRandomColor();
    setColor(randomColor);
  };

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <h1>Casual color picking</h1>
      <h2>Click the button to see a casual color!</h2>
      <div className="inputDiv">
        <button
          className="buttonStyle"
          onClick={setRandomColor}
          style={{ backgroundColor: color }}
        >
          Click!
        </button>
      </div>
    </div>
  );
}
