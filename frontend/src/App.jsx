import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Finn");

  return (
    <>
      <h1>React template: Names</h1>
      <div className="card">
        <h1 id="name-title">{name}</h1>
        <input
          type="text"
          placeholder="Your name..."
          name="name"
          id="name-area"
        />
        <button
          onClick={() => setName(document.querySelector("#name-area").value)}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
