import Header from "./components/Header";
import genRandomInt from "./components/GenRandomInt";
import CoreConceptsBloc from "./components/CoreConcepts";
import Examples from "./components/Examples";



function App() {
  const wordOptions = ["Way", "Time", "No better time"]
  const firstWord = wordOptions[genRandomInt(3)];

  return (
    <>
      <Header/>
      <main>
        <h2>{firstWord} to get started!</h2>
        <CoreConceptsBloc/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
