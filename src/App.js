import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import TypeRacer from "./components/TypeRacer";
import getQuote from "./services/quoteService";
const quotes = [
  "It is better to be hated for what you are than to be loved for what you are not",
  "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost",
  "Hello Omedia, Hello World",
  "memories even you most precious ones fade surprisingly quickly",
];

export default function App() {
  const [quote, setQuote] = useState(quotes[0]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   getQuotes();
  //   console.log(quote);
  //   setLoading(false);
  // }, []);

  // const getQuotes = async () => {
  //   const data = await getQuote();
  //   setQuote(data[0]["q"]);
  // };

  return (
    <div>
      <NavBar />
      <TypeRacer quote={quote} setQuote={setQuote} />
    </div>
  );
}
