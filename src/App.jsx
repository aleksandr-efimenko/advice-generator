import { useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("Hello, world!");
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1 className="advice-header">Advice #{num}</h1>
      <div className="advice-quote"><q>{advice}</q></div>
      <div className="divider"></div>
      <div className="btn-container">
        <button className="btn" onClick={() => setNum(num + 1)}></button>
      </div>
    </div>
  );
}

export default App;
