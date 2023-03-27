import { useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isLoading, isError, data, error, refetch } = useQuery(
   [ "advice"],
    async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      return data.slip;
    },
    {
      onSuccess: (data) => {
        setAdvice(data.advice);
        setAdviceNumber(data.id);
      },
    }
  );

  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(0);

  const renderAdvice = () => {
    if (isLoading) {
      return <>Loading...</>;
    }
    if (isError) {
      return <>{error.message}</>;
    }
    return <>{advice}</>;
  };

  return (
    <div className="App">
      <h1 className="advice-header">Advice #{adviceNumber}</h1>
      <div className="advice-quote">
        <q>{renderAdvice()}</q>
      </div>
      <div className="divider"></div>
      <div className="btn-container">
        <button aria-label="Generate new advice"  id="generate-advice" className="btn" onClick={refetch}></button>
      </div>
    </div>
  );
}

export default App;
