import NavBar from "./components/NavBar";
import TypeRacer from "./components/TypeRacer";

const quotes = [
  // "It is better to be hated for what you are than to be loved for what you are not",
  // "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost",
  "Something is our choices, Harry, that show what we truly are, far more than our abilities.",
];

function App() {
  return (
    <div>
      <NavBar />
      <TypeRacer quotes={quotes} />
    </div>
  );
}

export default App;
