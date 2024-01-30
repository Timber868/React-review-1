import Header from "./components/Header";
import genRandomInt from "./components/GenRandomInt";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./components/data";


function App() {
  const wordOptions = ["Way", "Time", "No better time"]
  const firstWord = wordOptions[genRandomInt(3)];

  return (
    <div>
      <Header/>
      <main>
        <h2>{firstWord} to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
