import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import TypeRacer from "./components/TypeRacer";

const quotes = [
  "It is better to be hated for what you are than to be loved for what you are not",
  "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost",
  "Hello Omedia, Hello World",
  "memories even you most precious ones fade surprisingly quickly",
];

export default function App() {
  const [quote, setQuote] = useState();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const index = Math.floor(Math.random() * (quotes.length - 0 + 1) + 0);
    setQuote(quotes[index]);
  }, []);

  return (
    <div>
      <NavBar />
      {!started && (
        <div className="center">
          <button
            onClick={() => setStarted(true)}
            className="btn btn-primary"
            id="button"
          >
            Start Typing!
          </button>
        </div>
      )}
      {started && quote !== undefined && (
        <TypeRacer quote={quote} setQuote={setQuote} />
      )}
    </div>
  );
}
