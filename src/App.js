import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import TypeRacer from "./components/TypeRacer";
import { getQuotes } from "./services/index";

export default function App() {
  const [quote, setQuote] = useState();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    const { data: quotes } = await getQuotes();
    const index = Math.floor(Math.random() * quotes.length);
    console.log(quotes[index].text);
    setQuote(quotes[index].text);
  };

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
