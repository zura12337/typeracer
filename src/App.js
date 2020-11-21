import NavBar from "./components/NavBar";
import Start from "./components/Start";

const quotes = [
  "It is better to be hated for what you are than to be loved for what you are not",
  "All that is gold does not glitter, Not all those who wander are lost; The old that is strong does not wither, Deep roots are not reached by the frost",
  "Hello Omedia, Hello World",
];

function App() {
  return (
    <div>
      <NavBar />
      <Start quotes={quotes} />
    </div>
  );
}

export default App;
