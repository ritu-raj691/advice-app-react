import { useEffect, useState } from "react";
import './App.css';
import Card from "./components/Card";
import Button from "./components/Button";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    setLoading(true);
    axios.get("https://api.adviceslip.com/advice").then(res => {
      const {advice = ""} = res?.data?.slip ?? {};
      setLoading(false);
      setAdvice(advice);
    }).catch(err => {
      setAdvice("Something went wrong!");
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card advice={advice} />
        <Button text="Get me advice!" isDisabled={loading ?? true} onClick={getAdvice} />
      </header>
    </div>
  );
}

export default App;
