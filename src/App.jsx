import Header from "./components/Header";
import genRandomInt from "./components/GenRandomInt";

function App() {
  const wordOptions = ["Way", "Time", "No better time"]
  const firstWord = wordOptions[genRandomInt(3)];

  return (
    <div>
      <Header/>
      <main>
        <h2>{firstWord} to get started!</h2>
      </main>
    </div>
  );
}

export default App;
